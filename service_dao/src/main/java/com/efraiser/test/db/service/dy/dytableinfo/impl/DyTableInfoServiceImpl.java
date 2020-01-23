package com.efraiser.test.db.service.dy.dytableinfo.impl;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.constant.DyTableConstants;
import com.efraiser.test.common.util.CommUtil;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.*;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.cache.CommonCache;
import com.efraiser.test.db.service.cache.impl.DyTableModelCache;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.dy.dytablebasicinfo.DyTableBasicInfoService;
import com.efraiser.test.db.service.dy.dytablebasicinfo.impl.DyTableBasicInfoServiceImpl;
import com.efraiser.test.db.service.dy.dytablecolumncontrast.DyTableColumnContrastService;
import com.efraiser.test.db.service.dy.dytablecolumncontrast.impl.DyTableColumnContrastServiceImpl;
import com.efraiser.test.db.service.dy.dytableinfo.DyTableInfoService;
import com.efraiser.test.db.service.dy.dytablemodel.DyTableModelService;
import com.efraiser.test.db.service.dy.dytablemodel.impl.DyTableModelServiceImpl;
import com.efraiser.test.db.service.dy.dytablemodelpct.DyTableModelPCTService;
import com.efraiser.test.db.service.dy.dytablemodelpct.impl.DyTableModelPCTServiceImpl;
import com.efraiser.test.db.service.dy.dytableorgans.DyTableOrgansService;
import com.efraiser.test.db.service.dy.dytableorgans.impl.DyTableOrgansServiceImpl;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import com.efraiser.test.db.service.sys.sysqxgl.SysQxglService;
import com.efraiser.test.db.util.DyCheckUtil;
import com.efraiser.test.db.util.RdCheckUtil;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class DyTableInfoServiceImpl extends BaseServiceImpl<DyTableInfo> implements DyTableInfoService {


    @Autowired
    private DyTableModelService dyTableModelService;

    @Autowired
    private DyTableModelPCTService dyTableModelPCTService;

    @Autowired
    private DyTableColumnContrastService dyTableColumnContrastService;

    @Autowired
    private DyTableBasicInfoService dyTableBasicInfoService;

    @Autowired
    private DyTableOrgansService dyTableOrgansService;

    @Autowired
    private SysBmglService sysBmglService;

    @Autowired
    private SysQxglService sysQxglService;


    public static String[] departments = new String[100];

    @Override
    public DyTableInfo getDyTableInfo(String tabCode, String versionNo) {
        // return this.fetch(Cnd.where("TABCODE", "=",
        // tabCode).and("VERSION_NO", "=", versionNo));
        // 改为缓存获取
        String tableId = DyTableModelCache.getDyTableId(tabCode, versionNo);
        DyTableInfo dyTableInfo = DyTableModelCache.getTableInfo(tableId);
        if (dyTableInfo == null) {
            dyTableInfo = this.fetch(Cnd.where("TABCODE", "=", tabCode).and("VERSION_NO", "=", versionNo));
            CommonCache.getInstance().put(DyTableConstants.DY_TABLE_CACHE_KEY + dyTableInfo.getTableId(), dyTableInfo);
            CommonCache.getInstance().put(DyTableConstants.DY_TABLE_TV_CACHE_KEY + dyTableInfo.getTabCode() + "_" + dyTableInfo.getVersionNo(), dyTableInfo);
        }
        return dyTableInfo;
    }

    @Override
    public List<DyTableImportHelper> getDyTableInfoListByBrNoWj(String brNo, String tabType, String reportDate, String flag, String department) throws Exception {
        //SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sb = new StringBuffer();
        String DEPARTMENT = new String();
        departments = department.split(",");
        sb.append("(");
        for (int i = 0; i < departments.length; i++) {
            sb.append("'" + departments[i] + "',");
        }
        DEPARTMENT = sb.substring(0, sb.length() - 1);
        DEPARTMENT = DEPARTMENT + ")"; //处理部门机构的格式
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("SELECT t.TABLE_ID,t.TABCODE,t.TABNAME,TAB_TYPE,t.VERSION_NO,t.keys,t.REPORT_ID,t.UPDATE_DATE,t.ERROR_MSG tb.STATUS FROM(");
        sqlStr.append(" SELECT row_number() over(partition by tabcode order by END_DATE) as row_num,ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM DY.DY_TABLE_INFO ti  LEFT JOIN DY.DY_REPORT_INFO riINNER JOIN DY.DY_TABLE_BASIC_INFO tb ON tb.TABCODE=t.TABCODE ORDER BY tb.STATUS ='1'");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID AND ri.DATA_TYPE='1' AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM DY.DY_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE IN " + DEPARTMENT + ")");
        sqlStr.append(" AND ti.TAB_TYPE=@tabType");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        if ("repay".equals(flag)) {
            sqlStr.append(") t WHERE t.row_num>1 OR t.start_date='" + reportDate + "01'");
        } else if ("add".equals(flag)) {
            sqlStr.append(") t WHERE t.row_num=1");
        } else {
            sqlStr.append(") t");
        }
        sqlStr.append("   ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.params().set("brNo", brNo);
        //sql.params().set("tabBrType", bmgl.getBmCategory());
        //sql.params().set("organType", DEPARTMENT);
        sql.params().set("tabType", tabType);
        sql.params().set("reportDate", reportDate);
        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getListObjectBySql(sql, DyTableImportHelper.class);
    }

    @Override
    public List<DyTableImportHelper> getDyTableInfoListByBrNo(String brNo, String tabType, String reportDate, String flag) throws Exception {
        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("SELECT t.TABLE_ID,t.TABCODE,t.TABNAME,TAB_TYPE,t.VERSION_NO,t.keys,t.REPORT_ID,t.UPDATE_DATE,t.ERROR_MSG FROM(");
        sqlStr.append(" SELECT row_number() over(partition by ti.tabcode order by END_DATE) as row_num,ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM DY.DY_TABLE_INFO ti  LEFT JOIN DY.DY_REPORT_INFO ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID AND ri.DATA_TYPE='1' AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append("INNER JOIN DY.DY_TABLE_BASIC_INFO tb ON tb.TABCODE=ti.TABCODE AND tb.STATUS ='y' WHERE EXISTS(SELECT 1 FROM DY.DY_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND ti.TAB_TYPE=@tabType");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        if ("repay".equals(flag)) {
            sqlStr.append(") t WHERE t.row_num>1 OR t.start_date='" + reportDate + "01'");
        } else if ("add".equals(flag)) {
            sqlStr.append(") t WHERE t.row_num=1");
        } else {
            sqlStr.append(") t");
        }
        sqlStr.append("   ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.params().set("brNo", brNo);
        //sql.params().set("tabBrType", bmgl.getBmCategory());
        sql.params().set("organType", bmgl.getBmType());
        sql.params().set("tabType", tabType);
        sql.params().set("reportDate", reportDate);
        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getListObjectBySql(sql, DyTableImportHelper.class);
    }

    @Override
    public DyTableBasicInfo saveOrUpdateTableInfo(DyTableInfo tableInfo, List<DyTableModel> tableModels, String model, List<DyTableModelPCT> tableModelPCTs, List<DyTableColumnContrast> rccList)
            throws Exception {

        DyTableBasicInfoServiceImpl dyTableBasicInfoServiceImpl = (DyTableBasicInfoServiceImpl) dyTableBasicInfoService;

        String tableId = tableInfo.getTableId();
        DyTableBasicInfo tableBasicInfo = dyTableBasicInfoServiceImpl.fetch(tableInfo.getTabCode());
        if (tableBasicInfo == null) {
            tableBasicInfo = new DyTableBasicInfo();
            tableBasicInfo.setTabCode(tableInfo.getTabCode());
            tableBasicInfo.setStatus("y");
            tableBasicInfo.setTabName(tableInfo.getTabName());
        } else {
            tableBasicInfo.setTabName(tableInfo.getTabName());
        }

        dyTableBasicInfoServiceImpl.clear(Cnd.where("tabcode", "=", tableBasicInfo.getTabCode()));
        dyTableBasicInfoServiceImpl.dao().fastInsert(tableBasicInfo);
        // 模板信息
        if (tableModels != null) {
            DyTableModelServiceImpl dyTableModelServiceImpl = (DyTableModelServiceImpl) dyTableModelService;
            dyTableModelServiceImpl.clear(Cnd.where("tableId", "=", tableId));
            dyTableModelServiceImpl.dao().fastInsert(tableModels);
        }
        // 模板百分比单元格
        if (tableModelPCTs != null) {
            DyTableModelPCTServiceImpl dyTableModelPCTServiceImpl = (DyTableModelPCTServiceImpl) dyTableModelPCTService;
            dyTableModelPCTServiceImpl.clear(Cnd.where("tableId", "=", tableId));
            dyTableModelPCTServiceImpl.dao().fastInsert(tableModelPCTs);
        }
        // 报表列对照关系表
        if (rccList != null) {
            DyTableColumnContrastServiceImpl dyTableColumnContrastServiceImpl = (DyTableColumnContrastServiceImpl) dyTableColumnContrastService;
            dyTableColumnContrastServiceImpl.clear(Cnd.where("tableId", "=", tableId));
            dyTableColumnContrastServiceImpl.dao().fastInsert(rccList);
        }
        // 插入报表信息
        if ("add".equals(model)) {
            super.dao().fastInsert(tableInfo);
        } else {
            super.dao().update(tableInfo);
        }
        // 模板对应机构类型表
        this.dao().clear(DyTableOrgans.class, Cnd.where("tableId", "=", tableId));
        dyTableOrgansService.insertDyTableOrgas(tableId, tableInfo.getReportOrganTypes());
        return tableBasicInfo;
    }

    @Override
    public void deleteTableInfo(String tableId) throws Exception {
        DyTableColumnContrastServiceImpl dyTableColumnContrastServiceImpl = (DyTableColumnContrastServiceImpl) dyTableColumnContrastService;
        DyTableModelServiceImpl dyTableModelServiceImpl = (DyTableModelServiceImpl) dyTableModelService;
        DyTableModelPCTServiceImpl dyTableModelPCTServiceImpl = (DyTableModelPCTServiceImpl) dyTableModelPCTService;
        DyTableOrgansServiceImpl dyTableOrgansServiceImpl = (DyTableOrgansServiceImpl) dyTableOrgansService;

        dyTableModelServiceImpl.clear(Cnd.where("tableId", "=", tableId));
        dyTableColumnContrastServiceImpl.clear(Cnd.where("tableId", "=", tableId));
        dyTableModelPCTServiceImpl.clear(Cnd.where("tableId", "=", tableId));
        dyTableOrgansServiceImpl.clear(Cnd.where("tableId", "=", tableId));
        this.delete(tableId);
    }

    @Override
    public boolean isExistsTableVserionNo(String tabCode, String versionNo) {
        int count = this.count(Cnd.where("TABCODE", "=", tabCode).and("VERSION_NO", "=", versionNo));
        if (count > 0) {
            return true;
        }
        return false;
    }

    @Override
    public List<DyTableInfo> getTableInfoListWj(String tabCode) {
        String sqlStr = "SELECT TABLE_ID,TABCODE,TABNAME,TAB_TYPE,START_DATE,END_DATE,VERSION_NO,EXCEL_FILE,COL_INFO,ROW_INFO,REPORT_ORGAN_TYPES,keys,SUB_TABNAME FROM DY.DY_TABLE_INFO WHERE TABCODE=@tabCode ORDER BY START_DATE DESC";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("tabCode", tabCode);
        return super.getListBySql(sql);
    }

    @Override
    public List<DyTableInfo> getTableInfoList(String tabCode) {
        String sqlStr = "SELECT TABLE_ID,TABCODE,TABNAME, TAB_TYPE,TAB_BR_TYPE,START_DATE,END_DATE,VERSION_NO,EXCEL_FILE,COL_INFO,ROW_INFO,REPORT_ORGAN_TYPES,keys,SUB_TABNAME FROM DY.DY_TABLE_INFO WHERE TABCODE=@tabCode ORDER BY START_DATE DESC";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("tabCode", tabCode);
        return super.getListBySql(sql);
    }

    @Override
    public int countByTabCode(String tabCode) {
        return super.count(Cnd.where("TABCODE", "=", tabCode));
    }

    @Override
    public List<String> getTabCodeListWj(String brNo, String reportDate, String tabType, boolean include, boolean b) {

        // SysBmgl bmgl = sysBmglService.fetch(brNo);
        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        /**
         * 2015年根据新版本号修改校验公式，去掉获取校验公式
         */
        // sqlStr.append("SELECT t.TABCODE||'_'||t.VERSION_NO FROM(");
        sqlStr.append("SELECT DISTINCT t.TABCODE FROM(");
        sqlStr.append(" SELECT ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM DY.DY_TABLE_INFO ti  LEFT JOIN DY.DY_REPORT_INFO ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID  AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM DY.DY_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND $tabType");
        //qlStr.append(" AND (ti.TAB_BR_TYPE=@tabBrType OR ti.TAB_BR_TYPE='法人分支')");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(") t ");
        sqlStr.append(" ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());

        if (include) {
            sql.vars().set("tabType", "ti.tab_type in (" + DyCheckUtil.getTabtypesForCheckWithRdBf(tabType) + ")");
        } else {
            sql.vars().set("tabType", "ti.tab_type ='" + tabType + "'");
        }

        sql.params().set("brNo", brNo);
        sql.params().set("tabBrType", bmgl.getBmCategory());
        sql.params().set("organType", bmgl.getBmType());
        sql.params().set("reportDate", reportDate);

        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));

        return super.getListStringBySqlStr(sql);
    }

    @Override
    public List<String> getTabCodeList(String brNo, String reportDate, String tabType, boolean include, boolean b) {

        // SysBmgl bmgl = sysBmglService.fetch(brNo);
        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        /**
         * 2015年根据新版本号修改校验公式，去掉获取校验公式
         */
        // sqlStr.append("SELECT t.TABCODE||'_'||t.VERSION_NO FROM(");
        sqlStr.append("SELECT DISTINCT t.TABCODE FROM(");
        sqlStr.append(" SELECT ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM DY.DY_TABLE_INFO ti  LEFT JOIN DY.DY_REPORT_INFO ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID  AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM DY.DY_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND $tabType");
        sqlStr.append(" AND (ti.TAB_BR_TYPE=@tabBrType OR ti.TAB_BR_TYPE='法人分支')");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(") t ");
        sqlStr.append(" ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());

        if (include) {
            sql.vars().set("tabType", "ti.tab_type in (" + DyCheckUtil.getTabtypesForCheck(tabType) + ")");
        } else {
            sql.vars().set("tabType", "ti.tab_type ='" + tabType + "'");
        }

        sql.params().set("brNo", brNo);
        sql.params().set("tabBrType", bmgl.getBmCategory());
        sql.params().set("organType", bmgl.getBmType());
        sql.params().set("reportDate", reportDate);

        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));

        return super.getListStringBySqlStr(sql);
    }

    @Override
    public DyTableInfo getDyTableInfoByReportDate(String tabCode, String reportDate, String isRepay) {
        String or = "asc";
        if ("true".equals(isRepay)) {
            or = "desc";
        }
        String sqlStr = "SELECT * FROM DY.DY_TABLE_INFO WHERE TABLE_ID=(SELECT TABLE_ID FROM(SELECT TABLE_ID,TABCODE, row_number() over(partition by tabcode order by END_DATE " + or
                + ") as row_num FROM DY.DY_TABLE_INFO WHERE TABCODE=@tabCode AND  @reportDate BETWEEN start_date AND end_date) WHERE row_num=1)";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("tabCode", tabCode);
        sql.params().set("reportDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getObjectBySql(sql, null, null);
    }

    @Override
    public DyTableInfo getDyTableInfoByReportDateOfSummary(String tabCode, String reportDate, String isRepay) {
        String or = "asc";
        if ("true".equals(isRepay)) {
            or = "desc";
        }
        String sqlStr = "SELECT * FROM DY.DY_TABLE_INFO WHERE TABLE_ID=(SELECT TABLE_ID FROM(SELECT TABLE_ID,TABCODE, row_number() over(partition by tabcode order by END_DATE " + or
                + ") as row_num FROM DY.DY_TABLE_INFO WHERE TABCODE=@tabCode AND  @reportDate BETWEEN start_date AND end_date) WHERE row_num=1)";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("tabCode", tabCode);
        sql.params().set("reportDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getObjectBySql(sql, null, null);
    }

    @Override
    public List<DyTableInfo> getDyTableInfoToAutoJs(List<String> tabCodeList, boolean allVersion) {
        String sqlStr = "";
        if (allVersion) {
            sqlStr = "SELECT * FROM DY.DY_TABLE_INFO WHERE TABCODE IN($tabCode)";
        } else {
            sqlStr = "SELECT * FROM DY.DY_TABLE_INFO WHERE TABLE_ID IN (SELECT TABLE_ID FROM(SELECT TABLE_ID,TABCODE, row_number() over(partition by tabcode order by END_DATE desc) as row_num FROM DY.DY_TABLE_INFO WHERE  TABCODE IN($tabCode)) WHERE row_num=1)";
        }
        Sql sql = Sqls.create(sqlStr);
        sql.vars().set("tabCode", StrUtil.convertJoin(tabCodeList, null));
        return super.getListBySql(sql);
    }

    @Override
    public List<String> getTableCodesByTableIds(List<String> tableIds) {
        String sqlStr = "select TABCODE from DY.DY_TABLE_INFO where TABLE_ID in (" + StrUtil.convertJoin(tableIds, null) + ")";
        Sql sql = Sqls.create(sqlStr);
        return this.getListStringBySqlStr(sql);
    }

    @Override
    public Map<String, String> getTabCodeVersionTypeMap() {
        String sqlStr = "SELECT tabcode || '_' || version_no,tab_type FROM DY.DY_TABLE_INFO";
        Sql sql = Sqls.create(sqlStr);
        return super.getHashMapBySqlStr(sql);
    }

    @Override
    public List<String> getTabCodeListRepay(String brNo, String reportDate, String tabType, boolean include, boolean isRepay) {

        // SysBmgl bmgl = sysBmglService.fetch(brNo);
        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        /**
         * 2015年根据新版本号修改校验公式，去掉获取校验公式
         */
        // sqlStr.append("SELECT t.TABCODE||'_'||t.VERSION_NO FROM(");
        sqlStr.append("SELECT DISTINCT t.TABCODE FROM(");
        sqlStr.append(" SELECT ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM DY.DY_TABLE_INFO ti  LEFT JOIN DY.DY_REPORT_INFO ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID  AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM DY.DY_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND $tabType");
        sqlStr.append(" AND ti.TAB_BR_TYPE=@tabBrType ");
        sqlStr.append(" AND (ti.START_DATE ='" + reportDate + "01' or @sysDate BETWEEN ti.start_date AND ti.end_date)");
        sqlStr.append(") t ");
        sqlStr.append(" ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());

        if (include) {
            sql.vars().set("tabType", "ti.tab_type in (" + DyCheckUtil.getTabtypesForCheck(tabType) + ")");
        } else {
            sql.vars().set("tabType", "ti.tab_type ='" + tabType + "'");
        }

        sql.params().set("brNo", brNo);
        sql.params().set("tabBrType", bmgl.getBmCategory());
        sql.params().set("organType", bmgl.getBmType());
        sql.params().set("reportDate", reportDate);
        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getListStringBySqlStr(sql);
    }

    @Override
    public List<DyTableInfo> getDyTableInfoList(SysUser sysUser, String reportDate) {
        String sql = "SELECT t.TABLE_ID,t.TABCODE,t.TABNAME,GET_GGZD_NAME(t.TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,t.VERSION_NO,t.keys FROM( SELECT row_number() over(partition by tabcode order by END_DATE DESC) as row_num,ti.* FROM DY.DY_TABLE_INFO ti where '" + reportDate + "' between ti.start_date and ti.end_date) t WHERE t.row_num=1 ORDER BY t.TABCODE";
        return super.getListObjectBySql(sql, DyTableInfo.class);
    }

    @Override
    public DyTableInfo getInfoById(String tableId) {
        String sqlStr = "SELECT * FROM DY.DY_TABLE_INFO WHERE TABLE_ID='" + tableId + "'";
        Sql sql = Sqls.create(sqlStr);
        return super.getObjectBySql(sql, null, null);
    }

    @Override
    public DyTableInfo getInfoByTabcode(String tabCode, String thisVersion) {
        String sqlStr = "SELECT * FROM DY.DY_TABLE_INFO WHERE TABCODE='" + tabCode + "' AND VERSION_NO='" + thisVersion + "'";
        Sql sql = Sqls.create(sqlStr);
        return super.getObjectBySql(sql, null, null);
    }

    @Override
    public String getVersionInfo(String tabCode, String reportDate) {
        String databaseType = LocalConfig.getInstance().getDriver();
        String sqlStr = null;
        if ("oracle.jdbc.driver.OracleDriver".equals(databaseType)) {
            sqlStr = "SELECT VERSION_NO FROM DY.DY_TABLE_INFO WHERE TABCODE='" + tabCode + "' AND '" + reportDate + "' BETWEEN substr(START_DATE,1,6) AND substr(END_DATE,1,6) AND rownum <=1 ORDER BY START_DATE ASC  ";
        } else {
            sqlStr = "SELECT VERSION_NO FROM DY.DY_TABLE_INFO WHERE TABCODE='" + tabCode + "' AND '" + reportDate + "' BETWEEN substr(START_DATE,1,6) AND substr(END_DATE,1,6) ORDER BY START_DATE ASC  fetch first 1 rows only";
        }
        return singleString(sqlStr);
    }

    @Override
    public Object getTableVersionNo(String tabCode, String reportDate) {
        String databaseType = LocalConfig.getInstance().getDriver();
        String sql = "";
        if (StrUtil.isNull(reportDate)) {
            sql = "SELECT VERSION_NO FROM DY.DY_TABLE_INFO WHERE TABCODE='" + tabCode + "' ORDER BY START_DATE DESC";
        } else {
            if ("oracle.jdbc.driver.OracleDriver".equals(databaseType)) {
                sql = "SELECT VERSION_NO FROM DY.DY_TABLE_INFO WHERE TABCODE='" + tabCode + "' AND '" + reportDate + "' BETWEEN substr(START_DATE,1,6) AND substr(END_DATE,1,6) AND rownum <=1 ORDER BY START_DATE ASC ";
            } else {
                sql = "SELECT VERSION_NO FROM DY.DY_TABLE_INFO WHERE TABCODE='" + tabCode + "' AND '" + reportDate + "' BETWEEN substr(START_DATE,1,6) AND substr(END_DATE,1,6)  ORDER BY START_DATE ASC fetch first 1 rows only";
            }
        }
        return super.getListObjectBySql(sql, DyTableInfo.class);
    }

    @Override
    public Object getDyTableInfoListByBrNoForYD(String brNo, String reportDate, String checkType) {
        String month = reportDate.substring(5, 6);
        String tabType = "('50')";
        if (month.equals("3") || month.equals("9")) {
            tabType = "('40','50')";
        } else if (month.equals("6")) {
            tabType = "('40','50','80')";
        } else if (month.equals("12")) {
            tabType = "('40','50','80','00')";
        }

        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("SELECT t.TABLE_ID,t.TABCODE,t.TABNAME,GET_GGZD_NAME(t.TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,t.VERSION_NO,t.keys,t.report_no_str FROM(");
        sqlStr.append(" SELECT row_number() over(partition by tabcode order by END_DATE) as row_num,ti.*,ri.report_no_str FROM DY.DY_TABLE_INFO ti  LEFT JOIN (SELECT DISTINCT organ_no,report_date,tab_type,report_no_str,TYPE from DY.DY_CHECK_RESULTS ) ri");
        sqlStr.append(" ON (ti.TABCODE=ri.REPORT_NO_STR  AND ri.TAB_TYPE=@checkType AND ri.REPORT_DATE=@reportDate AND ri.ORGAN_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM DY.DY_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND  ti.tab_type IN " + tabType + "");
        sqlStr.append(" AND (ti.TAB_BR_TYPE=@tabBrType OR ti.TAB_BR_TYPE='法人分支')");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(") t");
        sqlStr.append("   ORDER BY t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.params().set("brNo", brNo);
        sql.params().set("tabBrType", bmgl.getBmCategory());
        sql.params().set("organType", bmgl.getBmType());
        sql.params().set("reportDate", reportDate);
        sql.params().set("checkType", checkType);
        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getListObjectBySql(sql, DyTableImportHelper.class);
    }

    @Override
    public DyTableInfo getTableInfoByTabCodeAndReportDate(String tabCodes,
                                                          String reportDate) {
        String sqlStr = "SELECT * FROM DY.DY_TABLE_INFO WHERE TABCODE='" + tabCodes + "' AND '" + reportDate + "' BETWEEN START_DATE AND END_DATE ORDER BY START_DATE DESC";
        Sql sql = Sqls.create(sqlStr);
        return super.getObjectBySql(sql, null, null);
    }

    @Override
    public Object getDytableInfoListByBmType(SysUser sysUser, String bmType,
                                             String bmCategory, String reportDate) {
        String sql = "SELECT t.table_id,t.tabcode,t.tabname,GET_GGZD_NAME(t.TAB_TYPE,'DY_TABLE_TAB_TYPE') as TAB_TYPE,GET_GGZD_NAME(t.version_no,'DY_TABLE_VERSION_NO') AS version_no FROM" +
                "(SELECT row_number() over(partition by a.tabcode order by END_DATE) as row_num,a.* " +
                "FROM DY.DY_TABLE_INFO a " +
                "LEFT JOIN DY.DY_TABLE_ORGANS b ON a.TABLE_ID=b.TABLE_ID " +
                "LEFT JOIN DY.DY_TABLE_BASIC_INFO c ON a.TABCODE=c.TABCODE " +
                "where b.ORGAN_TYPE IN (" + StrUtil.convertQuoMarksSQL(bmType) + ") " +
                "AND a.TAB_BR_TYPE IN ( " + StrUtil.convertQuoMarksSQL(bmCategory) + ") " +
                "AND c.STATUS='y' AND a.start_date<='" + reportDate + "' and '" + reportDate + "'<=a.end_date)t WHERE t.row_num='1' ORDER BY t.tab_type";
        return super.getListObjectBySql(sql, DyTableInfo.class);
    }

    @Override
    public List<DyTableInfo> getAll() {
        String sqlStr = "SELECT * FROM DY.DY_TABLE_INFO";
        List<DyTableInfo> list = super.getListBySql(sqlStr, null, null);
        return list;
    }

    @Override
    public void delAll() {
        String sqlStr = "DELETE FROM DY.DY_TABLE_INFO";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }

    @Override
    public void add(DyTableInfo item) {
        dao().insert(item);
    }

    @Override
    public List<String> getTabCodeListCS(String brNo, String reportDate, String tabType, boolean include, boolean isRepay) {

        // SysBmgl bmgl = sysBmglService.fetch(brNo);
        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        /**
         * 2015年根据新版本号修改校验公式，去掉获取校验公式
         */
        // sqlStr.append("SELECT t.TABCODE||'_'||t.VERSION_NO FROM(");
        sqlStr.append("SELECT DISTINCT t.TABCODE FROM(");
        sqlStr.append(" SELECT ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM DY.DY_TABLE_INFO ti  LEFT JOIN DY.DY_REPORT_INFO ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID  AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM DY.DY_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND $tabType");
        sqlStr.append(" AND (ti.TAB_BR_TYPE=@tabBrType)");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(") t ");
        sqlStr.append(" ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.vars().set("tabType", "ti.tab_type ='" + tabType + "'");
        sql.params().set("brNo", brNo);
        sql.params().set("tabBrType", bmgl.getBmCategory());
        sql.params().set("organType", bmgl.getBmType());
        sql.params().set("reportDate", reportDate);
        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));

        return super.getListStringBySqlStr(sql);
    }

    @Override
    public List<String> getTabCodeListCSSZ(String brNo, String reportDate, String tabType, boolean include, boolean isRepay) {

        // SysBmgl bmgl = sysBmglService.fetch(brNo);
        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        /**
         * 2015年根据新版本号修改校验公式，去掉获取校验公式
         */
        // sqlStr.append("SELECT t.TABCODE||'_'||t.VERSION_NO FROM(");
        sqlStr.append("SELECT DISTINCT t.TABCODE FROM(");
        sqlStr.append(" SELECT ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM DY.DY_TABLE_INFO ti  LEFT JOIN DY.DY_REPORT_INFO ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID  AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM DY.DY_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND $tabType");
        sqlStr.append(" AND (ti.TAB_BR_TYPE LIKE @tabBrType)");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(") t ");
        sqlStr.append(" ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.vars().set("tabType", "ti.tab_type ='" + tabType + "'");
        sql.params().set("brNo", brNo);
        sql.params().set("tabBrType", '%' + bmgl.getBmCategory() + '%');
        sql.params().set("organType", bmgl.getBmType());
        sql.params().set("reportDate", reportDate);
        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));

        return super.getListStringBySqlStr(sql);
    }

    @Override
    public DyTableInfo getRdTableInfoByReportDate(String tabCode, String reportDate, String isRepay) {
        String or = "asc";
        if ("true".equals(isRepay)) {
            or = "desc";
        }
        String sqlStr = "SELECT * FROM DY.DY_TABLE_INFO WHERE TABLE_ID=(SELECT TABLE_ID FROM(SELECT TABLE_ID,TABCODE, row_number() over(partition by tabcode order by END_DATE " + or
                + ") as row_num FROM DY.DY_TABLE_INFO WHERE TABCODE=@tabCode AND  @reportDate BETWEEN start_date AND end_date) WHERE row_num=1)";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("tabCode", tabCode);
        sql.params().set("reportDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getObjectBySql(sql, null, null);
    }

    @Override
    public List<String> getTabCodeListBf(String brNo, String reportDate, String tabType, boolean include, boolean isRepay) {

        // SysBmgl bmgl = sysBmglService.fetch(brNo);
        // SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        /**
         * 2015年根据新版本号修改校验公式，去掉获取校验公式
         */
        // sqlStr.append("SELECT t.TABCODE||'_'||t.VERSION_NO FROM(");
        //String brNos=sysGgzdDao.getZdNameByZdValue(brNo);
        sqlStr.append("SELECT DISTINCT t.TABCODE FROM(");
        sqlStr.append(" SELECT ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM BF.BF_TABLE_INFO ti  LEFT JOIN BF.BF_REPORT_INFO ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID  AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM BF.BF_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID )");
        sqlStr.append(" AND $tabType");
        //AND ro.ORGAN_TYPE=@brNo
        // sqlStr.append(" AND (ti.TAB_BR_TYPE=@tabBrType OR ti.TAB_BR_TYPE='法人分支')");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(") t ");
        sqlStr.append(" ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());

        if (include) {
            sql.vars().set("tabType", "ti.tab_type in (" + DyCheckUtil.getTabtypesForCheckWithRdBf1(tabType) + ")");
        } else {
            sql.vars().set("tabType", "ti.tab_type ='" + RdCheckUtil.getTabtypesForCheck1(tabType) + "'");
        }

        sql.params().set("brNo", brNo);
        // sql.params().set("tabBrType", bmgl.getBmCategory());

        sql.params().set("reportDate", reportDate);

        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));

        return super.getListStringBySqlStr(sql);
    }

    @Override
    public DyTableInfo getByTabcodeAndVersionNo(String tabCode, String versionNo) {
        return fetch(Cnd.where("TABCODE", "=", tabCode).and("VERSION_NO", "=", versionNo));
    }
}

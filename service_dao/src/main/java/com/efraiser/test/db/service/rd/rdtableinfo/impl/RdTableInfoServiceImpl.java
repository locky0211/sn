package com.efraiser.test.db.service.rd.rdtableinfo.impl;

import com.efraiser.test.common.constant.RdTableConstants;
import com.efraiser.test.db.model.rd.RdTableInfo;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.rd.RdTableModelDao;
import com.efraiser.test.db.service.rd.rdtableinfo.RdTableInfoService;
import com.efraiser.test.db.service.rd.rdtablemodel.RdTableModelService;
import com.efraiser.test.db.service.sys.sysqxgl.SysQxglService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.nutz.ioc.loader.annotation.Inject;
import org.nutz.mvc.Mvcs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class RdTableInfoServiceImpl extends BaseServiceImpl<RdTableInfo> implements RdTableInfoService<RdTableInfo> {


    @@Autowired
    private RdTableModelService rdTableModelService;

    @Inject
    private RdTableModelPCTDao rdTableModelPCTDao;
    @Inject
    private RdTableColumnContrastDao rdTableColumnContrastDao;
    @Inject
    private RdTableBasicInfoDao rdTableBasicInfoDao;
    @Inject
    private RdTableOrgansDao rdTableOrgansDao;
    @Inject
    private SysBmglService sysBmglDao;
    @Autowired
    private SysQxglService sysQxglService;

    public RdTableInfo getRdTableInfo(String tabCode, String versionNo) {
        // return this.fetch(Cnd.where("TABCODE", "=",
        // tabCode).and("VERSION_NO", "=", versionNo));
        // 改为缓存获取
        String tableId = RdTableModelCache.getRdTableId(tabCode, versionNo);
        RdTableInfo rdTableInfo = RdTableModelCache.getRdTableInfo(tableId);
        if (rdTableInfo == null) {
            rdTableInfo = this.fetch(Cnd.where("TABCODE", "=", tabCode).and("VERSION_NO", "=", versionNo));
            CommonCache.getInstance().put(RdTableConstants.RD_TABLE_CACHE_KEY + rdTableInfo.getTableId(), rdTableInfo);
            CommonCache.getInstance().put(RdTableConstants.RD_TABLE_TV_CACHE_KEY + rdTableInfo.getTabCode() + "_" + rdTableInfo.getVersionNo(), rdTableInfo);
        }
        return rdTableInfo;
    }

    /**
     * 根据机构,报表类型,报表日期,获取机构需要上报的报表信息集合,以及已经上报的报表信息
     *
     * @param brNo
     * @param tabType
     * @param reportDate
     * @param flag
     *            是否是补报数据(repay:补报 add:一般导入 else:展示全部信息)
     * @return
     * @throws Exception
     */

    public List<RdTableImportHelper> getRdTableInfoListByBrNo(String brNo, String tabType, String reportDate, String flag) throws Exception {
        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("SELECT t.TABLE_ID,t.TABCODE,t.TABNAME,GET_GGZD_NAME(t.TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,t.VERSION_NO,t.keys,t.REPORT_ID,t.UPDATE_DATE,t.ERROR_MSG FROM(");
        sqlStr.append(" SELECT row_number() over(partition by tabcode order by END_DATE) as row_num,ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM RD_TABLE_INFO ti  LEFT JOIN RD_REPORT_INFO ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID AND ri.DATA_TYPE='1' AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM RD_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        if (tabType != null && !"".equals(tabType)) {
            sqlStr.append(" AND ti.TAB_TYPE=@tabType");
        }
        sqlStr.append(" AND (ti.TAB_BR_TYPE=@tabBrType OR ti.TAB_BR_TYPE='法人分支')");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        if ("repay".equals(flag)) {
            sqlStr.append(") t WHERE t.row_num>1 OR t.start_date='" + reportDate + "01'");
        } else if ("add".equals(flag)) {
            sqlStr.append(") t WHERE t.row_num=1");
        } else {
            sqlStr.append(") t");
        }
        sqlStr.append("   ORDER BY t.TAB_TYPE,t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.params().set("brNo", brNo);
        sql.params().set("tabBrType", bmgl.getBmCategory());
        sql.params().set("organType", bmgl.getBmType());
        if (tabType != null && !"".equals(tabType)) {
            sql.params().set("tabType", tabType);
        }
        sql.params().set("reportDate", reportDate);
        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getListObjectBySql(sql, RdTableImportHelper.class);
    }


    /**
     *
     * 功能描述：仅适用于省局机构端，根据机构,报表类型,报表日期,获取机构需要上报的报表信息集合,以及已经上报的报表信息
     * @author
     * @date 2018年7月30日
     * @param brNo
     * @param tabType
     * @param reportDate
     * @param flag
     * @return
     * @throws Exception
     * @modify log:
     */
    public List<RdTableImportHelper> getRdTableInfoListByBrNo_ORGANPORT(String brNo, String tabType, String reportDate, String flag) throws Exception {
        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("SELECT t.TABLE_ID,t.TABCODE,t.TABNAME,GET_GGZD_NAME(t.TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,t.VERSION_NO,t.keys,t.REPORT_ID,t.UPDATE_DATE,t.ERROR_MSG FROM(");
        sqlStr.append(" SELECT row_number() over(partition by tabcode order by END_DATE) as row_num,ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM RD_TABLE_INFO ti  LEFT JOIN RD_REPORT_INFO_ORGANPORT ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID AND ri.DATA_TYPE='1' AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM RD_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        if (tabType != null && !"".equals(tabType)) {
            sqlStr.append(" AND ti.TAB_TYPE=@tabType");
        }
        sqlStr.append(" AND (ti.TAB_BR_TYPE=@tabBrType OR ti.TAB_BR_TYPE='法人分支')");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        if ("repay".equals(flag)) {
            sqlStr.append(") t WHERE t.row_num>1 OR t.start_date='" + reportDate + "01'");
        } else if ("add".equals(flag)) {
            sqlStr.append(") t WHERE t.row_num=1");
        } else {
            sqlStr.append(") t");
        }
        sqlStr.append("   ORDER BY t.TAB_TYPE,t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.params().set("brNo", brNo);
        sql.params().set("tabBrType", bmgl.getBmCategory());
        sql.params().set("organType", bmgl.getBmType());
        if (tabType != null && !"".equals(tabType)) {
            sql.params().set("tabType", tabType);
        }
        sql.params().set("reportDate", reportDate);
        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getListObjectBySql(sql, RdTableImportHelper.class);
    }



    public RdTableBasicInfo saveOrUpdateTableInfo(RdTableInfo tableInfo, List<RdTableModel> tableModels, String model, List<RdTableModelPCT> tableModelPCTs, List<RdTableColumnContrast> rccList)
            throws Exception {
        String tableId = tableInfo.getTableId();
        RdTableBasicInfo tableBasicInfo = rdTableBasicInfoDao.fetch(tableInfo.getTabCode());
        if (tableBasicInfo == null) {
            tableBasicInfo = new RdTableBasicInfo();
            tableBasicInfo.setTabCode(tableInfo.getTabCode());
            tableBasicInfo.setStatus("y");
            tableBasicInfo.setTabName(tableInfo.getTabName());
        } else {
            tableBasicInfo.setTabName(tableInfo.getTabName());
        }

        rdTableBasicInfoDao.clear(Cnd.where("tabcode", "=", tableBasicInfo.getTabCode()));
        rdTableBasicInfoDao.dao().fastInsert(tableBasicInfo);
        // 模板信息
        if (tableModels != null) {
            rdTableModelDao.clear(Cnd.where("tableId", "=", tableId));
            rdTableModelDao.dao().fastInsert(tableModels);
        }
        // 模板百分比单元格
        if (tableModelPCTs != null) {
            rdTableModelPCTDao.clear(Cnd.where("tableId", "=", tableId));
            rdTableModelPCTDao.dao().fastInsert(tableModelPCTs);
        }
        // 报表列对照关系表
        if (rccList != null) {
            rdTableColumnContrastDao.clear(Cnd.where("tableId", "=", tableId));
            rdTableColumnContrastDao.dao().fastInsert(rccList);
        }
        // 插入报表信息
        if ("add".equals(model)) {
            super.dao().fastInsert(tableInfo);
        } else {
            super.dao().update(tableInfo);
        }
        // 模板对应机构类型表
        this.dao().clear(RdTableOrgans.class, Cnd.where("tableId", "=", tableId));
        rdTableOrgansDao.insertRdTableOrgas(tableId, tableInfo.getReportOrganTypes());
        return tableBasicInfo;
    }

    public void deleteTableInfo(String tableId) throws Exception {
        rdTableModelDao.clear(Cnd.where("tableId", "=", tableId));
        rdTableColumnContrastDao.clear(Cnd.where("tableId", "=", tableId));
        rdTableModelPCTDao.clear(Cnd.where("tableId", "=", tableId));
        rdTableOrgansDao.clear(Cnd.where("tableId", "=", tableId));
        this.delete(tableId);
    }

    public boolean isExistsTableVserionNo(String tabCode, String versionNo) {
        int count = this.count(Cnd.where("TABCODE", "=", tabCode).and("VERSION_NO", "=", versionNo));
        if (count > 0) {
            return true;
        }
        return false;

    }

    public List<RdTableInfo> getTableInfoList(String tabCode) {
        String sqlStr = "SELECT TABLE_ID,TABCODE,TABNAME,GET_GGZD_NAME(TAB_TYPE,'RD_TABLE_TAB_TYPE') AS TAB_TYPE,TAB_BR_TYPE,START_DATE,END_DATE,VERSION_NO,EXCEL_FILE,COL_INFO,ROW_INFO,VERSION_NO_INFO,REPORT_ORGAN_TYPES,keys,SUB_TABNAME FROM RD_TABLE_INFO WHERE TABCODE=@tabCode ORDER BY START_DATE DESC";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("tabCode", tabCode);
        return super.getListBySql(sql);
    }

    public int countByTabCode(String tabCode) {
        return super.count(Cnd.where("TABCODE", "=", tabCode));
    }

    /**
     * 获取机构下报表编号集合
     *
     * @param brNo
     *            机构编号
     * @param reportDate
     *            数据日期
     * @param tabType
     *            数据类型(如果空:则获取全部)
     * @param include
     *            是否包含(如:季度--包含月度)
     * @param b
     * @return
     */
    public List<String> getTabCodeList(String brNo, String reportDate, String tabType, boolean include, boolean b) {

        // SysBmgl bmgl = sysBmglDao.fetch(brNo);
        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        /**
         * 2015年根据新版本号修改校验公式，去掉获取校验公式
         */
        // sqlStr.append("SELECT t.TABCODE||'_'||t.VERSION_NO FROM(");
        sqlStr.append("SELECT DISTINCT t.TABCODE FROM(");
        sqlStr.append(" SELECT ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM SAM.RD_TABLE_INFO ti  LEFT JOIN SAM.RD_REPORT_INFO ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID  AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM SAM.RD_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
//		sqlStr.append(" AND $tabType");
        sqlStr.append(" AND (ti.TAB_BR_TYPE=@tabBrType OR ti.TAB_BR_TYPE='法人分支')");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(") t ");
        sqlStr.append(" ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());

//		if (include) {
//			sql.vars().set("tabType", "ti.tab_type in (" + RdCheckUtil.getTabtypesForCheck(tabType) + ")");
//		} else {
//			sql.vars().set("tabType", "ti.tab_type ='" + tabType + "'");
//		}

        sql.params().set("brNo", brNo);
        sql.params().set("tabBrType", bmgl.getBmCategory());
        sql.params().set("organType", bmgl.getBmType());
        sql.params().set("reportDate", reportDate);

        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));

        return super.getListStringBySqlStr(sql);
    }


    /**
     * 获取机构下报表编号集合(机构端使用)
     *
     * @param brNo
     *            机构编号
     * @param reportDate
     *            数据日期
     * @param tabType
     *            数据类型(如果空:则获取全部)
     * @param include
     *            是否包含(如:季度--包含月度)
     * @param b
     * @return
     */
    public List<String> getTabCodeList_OrganPort(String brNo, String reportDate, String tabType, boolean include, boolean b) {

        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("SELECT DISTINCT t.TABCODE FROM(");
        sqlStr.append(" SELECT ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM SAM.RD_TABLE_INFO ti  LEFT JOIN SAM.RD_REPORT_INFO_ORGANPORT ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID  AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM SAM.RD_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND $tabType");
        sqlStr.append(" AND (ti.TAB_BR_TYPE=@tabBrType OR ti.TAB_BR_TYPE='法人分支')");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(") t ");
        sqlStr.append(" ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());

        if (include) {
            sql.vars().set("tabType", "ti.tab_type in (" + RdCheckUtil.getTabtypesForCheck(tabType) + ")");
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


    public RdTableInfo getRdTableInfoByReportDate(String tabCode, String reportDate, String isRepay) {
        String or = "asc";
        if ("true".equals(isRepay)) {
            or = "desc";
        }
        String sqlStr = "SELECT * FROM RD_TABLE_INFO WHERE TABLE_ID=(SELECT TABLE_ID FROM(SELECT TABLE_ID,TABCODE, row_number() over(partition by tabcode order by END_DATE " + or
                + ") as row_num FROM RD_TABLE_INFO WHERE TABCODE=@tabCode AND  @reportDate BETWEEN start_date AND end_date) WHERE row_num=1)";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("tabCode", tabCode);
        sql.params().set("reportDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getObjectBySql(sql, null, null);
    }

    public RdTableInfo getRdTableInfoByReportDateOfSummary(String tabCode, String reportDate, String isRepay) {
        String or = "asc";
        if ("true".equals(isRepay)) {
            or = "desc";
        }
        String sqlStr = "SELECT * FROM RD_TABLE_INFO WHERE TABLE_ID=(SELECT TABLE_ID FROM(SELECT TABLE_ID,TABCODE, row_number() over(partition by tabcode order by END_DATE " + or
                + ") as row_num FROM RD_TABLE_INFO WHERE TABCODE=@tabCode AND  @reportDate BETWEEN start_date AND end_date) WHERE row_num=1)";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("tabCode", tabCode);
        sql.params().set("reportDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getObjectBySql(sql, null, null);
    }

    /**
     * 根据报表代码获取最高版本的报表信息
     *
     * @param tabCode
     * @param reportDate
     * @return
     */
    public List<RdTableInfo> getRdTableInfoToAutoJs(List<String> tabCodeList, boolean allVersion) {
        String sqlStr = "";
        if (allVersion) {
            sqlStr = "SELECT * FROM RD_TABLE_INFO WHERE TABCODE IN($tabCode)";
        } else {
            sqlStr = "SELECT * FROM RD_TABLE_INFO WHERE TABLE_ID IN (SELECT TABLE_ID FROM(SELECT TABLE_ID,TABCODE, row_number() over(partition by tabcode order by END_DATE desc) as row_num FROM RD_TABLE_INFO WHERE  TABCODE IN($tabCode)) WHERE row_num=1)";
        }
        Sql sql = Sqls.create(sqlStr);
        sql.vars().set("tabCode", StrUtil.convertJoin(tabCodeList, null));
        return super.getListBySql(sql);
    }

    /**
     * 根据tableId获取tablecode
     *
     * @param tableIds
     * @return
     */
    public List<String> getTableCodesByTableIds(List<String> tableIds) {
        String sqlStr = "select TABCODE from RD_TABLE_INFO where TABLE_ID in (" + StrUtil.convertJoin(tableIds, null) + ")";
        Sql sql = Sqls.create(sqlStr);
        return this.getListStringBySqlStr(sql);
    }

    /**
     * 获取报表代码_版本号与报表类型对照Map
     *
     * @return
     */
    public Map<String, String> getTabCodeVersionTypeMap() {
        String sqlStr = "SELECT tabcode || '_' || version_no,tab_type FROM RD_TABLE_INFO";
        Sql sql = Sqls.create(sqlStr);
        return super.getHashMapBySqlStr(sql);
    }

    /**
     * 获取机构下补报报表编号集合
     *
     * @param brNo
     *            机构编号
     * @param reportDate
     *            数据日期
     * @param tabType
     *            数据类型(如果空:则获取全部)
     * @param include
     *            是否包含(如:季度--包含月度)
     * @return
     */
    public List<String> getTabCodeListRepay(String brNo, String reportDate, String tabType, boolean include, boolean isRepay) {

        // SysBmgl bmgl = sysBmglDao.fetch(brNo);
        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        /**
         * 2015年根据新版本号修改校验公式，去掉获取校验公式
         */
        // sqlStr.append("SELECT t.TABCODE||'_'||t.VERSION_NO FROM(");
        sqlStr.append("SELECT DISTINCT t.TABCODE FROM(");
        sqlStr.append(" SELECT ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM RD_TABLE_INFO ti  LEFT JOIN RD_REPORT_INFO ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID  AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM RD_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND $tabType");
        sqlStr.append(" AND ti.TAB_BR_TYPE=@tabBrType ");
        sqlStr.append(" AND (ti.START_DATE ='" + reportDate + "01')");
        sqlStr.append(") t ");
        sqlStr.append(" ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());

        if (include) {
            sql.vars().set("tabType", "ti.tab_type in (" + RdCheckUtil.getTabtypesForCheck(tabType) + ")");
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

    public List<RdTableInfo> getRdTableInfoList(SysUser sysUser,String reportDate) {
        String sql="SELECT t.TABLE_ID,t.TABCODE,t.TABNAME,GET_GGZD_NAME(t.TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,t.VERSION_NO,t.keys FROM( SELECT row_number() over(partition by tabcode order by END_DATE DESC) as row_num,ti.* FROM RD_TABLE_INFO ti where '"+reportDate+"' between ti.start_date and ti.end_date) t WHERE t.row_num=1 ORDER BY t.tab_type,t.TABCODE";
        return super.getListObjectBySql(sql, RdTableInfo.class);
    }

    public Object getRdTableInfoListEx(SysUser sysUser,String reportDate) {
        String sqlStr="SELECT t.TABLE_ID,t.TABCODE,t.TABNAME,GET_GGZD_NAME(t.TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,t.VERSION_NO,t.keys,(SELECT COUNT(*) FROM SAM.RD_CHECK_FORMULA_WAVE WHERE TABCODE=t.TABCODE AND C_USER='"+sysUser.getUserId()+"') AS formulaWaveNum FROM( SELECT row_number() over(partition by tabcode order by END_DATE DESC) as row_num,ti.* FROM RD_TABLE_INFO ti where '"+reportDate+"' between ti.start_date and ti.end_date) t WHERE t.row_num=1 ORDER BY t.tab_type,t.TABCODE";
        Sql sql = Sqls.create(sqlStr);
        return this.getListObjectBySql(sql, RdTableInfoEx.class);
    }

    public RdTableInfo getInfoById(String tableId) {
        String sqlStr ="SELECT * FROM RD_TABLE_INFO WHERE TABLE_ID='" + tableId + "'";
        Sql sql = Sqls.create(sqlStr);
        return super.getObjectBySql(sql, null, null);
    }

    public RdTableInfo getInfoByTabcode(String tabCode,String thisVersion) {
        String sqlStr ="SELECT * FROM RD_TABLE_INFO WHERE TABCODE='" + tabCode + "' AND VERSION_NO='"+thisVersion+"'";
        Sql sql = Sqls.create(sqlStr);
        return super.getObjectBySql(sql, null, null);
    }

    public String getVersionInfo(String tabCode, String reportDate) {
        String  databaseType= Mvcs.ctx().getDefaultIoc().get(String.class, "driver");
        String sqlStr = null;
        if("oracle.jdbc.driver.OracleDriver".equals(databaseType)){
            sqlStr="SELECT VERSION_NO FROM RD_TABLE_INFO WHERE TABCODE='"+tabCode+"' AND '"+reportDate+"' BETWEEN substr(START_DATE,1,6) AND substr(END_DATE,1,6) AND rownum <=1 ORDER BY START_DATE ASC  ";
        }else{
            sqlStr="SELECT VERSION_NO FROM RD_TABLE_INFO WHERE TABCODE='"+tabCode+"' AND '"+reportDate+"' BETWEEN substr(START_DATE,1,6) AND substr(END_DATE,1,6) ORDER BY START_DATE ASC  fetch first 1 rows only";
        }
        return singleString(sqlStr);
    }

    public Object getTableVersionNo(String tabCode,String reportDate) {
        String  databaseType= Mvcs.ctx().getDefaultIoc().get(String.class, "driver");
        String sql="";
        if(StrUtil.isNull(reportDate)){
            sql="SELECT VERSION_NO FROM RD_TABLE_INFO WHERE TABCODE='"+tabCode+"' ORDER BY START_DATE DESC";
        }else{
            if("oracle.jdbc.driver.OracleDriver".equals(databaseType)){
                sql="SELECT VERSION_NO FROM RD_TABLE_INFO WHERE TABCODE='"+tabCode+"' AND '"+reportDate+"' BETWEEN substr(START_DATE,1,6) AND substr(END_DATE,1,6) AND rownum <=1 ORDER BY START_DATE ASC ";
            }else{
                sql="SELECT VERSION_NO FROM RD_TABLE_INFO WHERE TABCODE='"+tabCode+"' AND '"+reportDate+"' BETWEEN substr(START_DATE,1,6) AND substr(END_DATE,1,6)  ORDER BY START_DATE ASC fetch first 1 rows only";
            }
        }
        return super.getListObjectBySql(sql, RdTableInfo.class);
    }

    public Object getRdTableInfoListByBrNoForYD(String brNo, String reportDate,String checkType) {
        String month=reportDate.substring(5, 6);
        String tabType="('50')";
		/*if(month.equals("3")||month.equals("9")){
			tabType="('40','50')";
		}else if(month.equals("6")){
			tabType="('40','50','80')";
		}else if(month.equals("12")){
			tabType="('40','50','80','00')";
		}*/
        if(checkType.equals("1")){
            tabType="('50')";
        }else if(checkType.equals("2")){
            tabType="('40','50')";
        }else if(checkType.equals("3")){
            tabType="('40','50','80')";
        }else if(checkType.equals("4")){
            tabType="('40','50','80','00')";
        }

        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("SELECT t.TABLE_ID,t.TABCODE,t.TABNAME,GET_GGZD_NAME(t.TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,t.VERSION_NO,t.keys,t.report_no_str FROM(");
        sqlStr.append(" SELECT row_number() over(partition by tabcode order by END_DATE) as row_num,ti.*,ri.report_no_str FROM RD_TABLE_INFO ti  LEFT JOIN (SELECT DISTINCT organ_no,report_date,tab_type,report_no_str from RD_CHECK_RESULTS_WAVE ) ri");
        sqlStr.append(" ON (ti.TABCODE=ri.REPORT_NO_STR  AND ri.TAB_TYPE=@checkType AND ri.REPORT_DATE=@reportDate AND ri.ORGAN_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM RD_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND  ti.tab_type IN "+tabType+"");
        sqlStr.append(" AND (ti.TAB_BR_TYPE=@tabBrType OR ti.TAB_BR_TYPE='法人分支')");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(") t");
        sqlStr.append("   ORDER BY t.TAB_TYPE,t.tabcode");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.params().set("brNo", brNo);
        sql.params().set("tabBrType", bmgl.getBmCategory());
        sql.params().set("organType", bmgl.getBmType());
        sql.params().set("reportDate", reportDate);
        sql.params().set("checkType", checkType);
        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getListObjectBySql(sql, RdTableImportHelper.class);
    }

    public Object getRdTableInfoListByBrNoForYD_OrganPort(String brNo, String reportDate,String checkType) {
        String tabType="('50')";
        if(checkType.equals("1")){
            tabType="('50')";
        }else if(checkType.equals("2")){
            tabType="('40','50')";
        }else if(checkType.equals("3")){
            tabType="('40','50','80')";
        }else if(checkType.equals("4")){
            tabType="('40','50','80','00')";
        }

        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("SELECT t.TABLE_ID,t.TABCODE,t.TABNAME,GET_GGZD_NAME(t.TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,t.VERSION_NO,t.keys,t.report_no_str FROM(");
        sqlStr.append(" SELECT row_number() over(partition by tabcode order by END_DATE) as row_num,ti.*,ri.report_no_str FROM RD_TABLE_INFO ti  LEFT JOIN (SELECT DISTINCT organ_no,report_date,tab_type,report_no_str from RD_CHECK_RESULTS_WAVE_ORGANPORT ) ri");
        sqlStr.append(" ON (ti.TABCODE=ri.REPORT_NO_STR  AND ri.TAB_TYPE=@checkType AND ri.REPORT_DATE=@reportDate AND ri.ORGAN_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM RD_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND  ti.tab_type IN "+tabType+"");
        sqlStr.append(" AND (ti.TAB_BR_TYPE=@tabBrType OR ti.TAB_BR_TYPE='法人分支')");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(") t");
        sqlStr.append("   ORDER BY t.TAB_TYPE,t.tabcode");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.params().set("brNo", brNo);
        sql.params().set("tabBrType", bmgl.getBmCategory());
        sql.params().set("organType", bmgl.getBmType());
        sql.params().set("reportDate", reportDate);
        sql.params().set("checkType", checkType);
        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getListObjectBySql(sql, RdTableImportHelper.class);
    }

    /**
     *
     * 功能描述：南京追溯用
     * @author
     * @date 2018年5月3日
     * @param brNo
     * @param reportDate
     * @param checkType
     * @return
     * @modify log:
     */
    public Object getRdTableInfoListByBrNoForYD_NJ(String brNo, String reportDate,String checkType) {
        String month=reportDate.substring(5, 6);
        String tabType="('50')";
		/*if(month.equals("3")||month.equals("9")){
			tabType="('40','50')";
		}else if(month.equals("6")){
			tabType="('40','50','80')";
		}else if(month.equals("12")){
			tabType="('40','50','80','00')";
		}*/
        if(checkType.equals("1")){
            tabType="50";
        }else if(checkType.equals("2")){
            tabType="40";
        }else if(checkType.equals("3")){
            tabType="80";
        }else if(checkType.equals("4")){
            tabType="00";
        }

        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("SELECT t.TABLE_ID,t.TABCODE,t.TABNAME,GET_GGZD_NAME(t.TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,t.VERSION_NO,t.keys,t.report_no_str FROM(");
        sqlStr.append(" SELECT row_number() over(partition by tabcode order by END_DATE) as row_num,ti.*,ri.report_no_str FROM RD_TABLE_INFO ti  LEFT JOIN (SELECT DISTINCT organ_no,report_date,tab_type,report_no_str from RD_CHECK_RESULTS_WAVE_NJ ) ri");
        sqlStr.append(" ON (ti.TABCODE=ri.REPORT_NO_STR  AND ri.TAB_TYPE = '"+tabType+"' AND ri.REPORT_DATE=@reportDate AND ri.ORGAN_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM RD_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND  ti.tab_type IN "+tabType+"");
        sqlStr.append(" AND (ti.TAB_BR_TYPE=@tabBrType OR ti.TAB_BR_TYPE='法人分支')");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(") t");
        sqlStr.append("   ORDER BY t.TAB_TYPE,t.tabcode");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.params().set("brNo", brNo);
        sql.params().set("tabBrType", bmgl.getBmCategory());
        sql.params().set("organType", bmgl.getBmType());
        sql.params().set("reportDate", reportDate);
        sql.params().set("checkType", checkType);
        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));
        return super.getListObjectBySql(sql, RdTableImportHelper.class);
    }

    public RdTableInfo getTableInfoByTabCodeAndReportDate(String tabCodes,
                                                          String reportDate) {
        String sqlStr ="SELECT * FROM RD_TABLE_INFO WHERE TABCODE='" + tabCodes + "' AND '"+reportDate+"01' BETWEEN START_DATE AND END_DATE ORDER BY START_DATE DESC";
        Sql sql = Sqls.create(sqlStr);
        return super.getObjectBySql(sql, null, null);
    }

    public Object getRdtableInfoListByBmType(SysUser sysUser, String bmType,
                                             String bmCategory,String reportDate) {
        String sql = "SELECT t.table_id,t.tabcode,t.tabname,GET_GGZD_NAME(t.TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,GET_GGZD_NAME(t.version_no,'RD_TABLE_VERSION_NO') AS version_no FROM"+
                "(SELECT row_number() over(partition by a.tabcode order by END_DATE) as row_num,a.* "+
                "FROM RD_TABLE_INFO a "+
                "LEFT JOIN RD_TABLE_ORGANS b ON a.TABLE_ID=b.TABLE_ID "+
                "LEFT JOIN RD_TABLE_BASIC_INFO c ON a.TABCODE=c.TABCODE "+
                "where b.ORGAN_TYPE IN (" + StrUtil.convertQuoMarksSQL(bmType) + ") "+
                "AND a.TAB_BR_TYPE IN ( " + StrUtil.convertQuoMarksSQL(bmCategory) + ") "+
                "AND c.STATUS='y' AND a.start_date<='"+reportDate+"' and '"+reportDate+"'<=a.end_date)t WHERE t.row_num='1' ORDER BY t.tab_type,t.tabcode";
        return super.getListObjectBySql(sql, RdTableInfo.class);
    }

    public Object getRdtableInfoListByBmTypeEx(SysUser sysUser, String bmType,
                                               String bmCategory,String reportDate) {
        String sqlStr = "SELECT t.table_id,t.tabcode,t.tabname,GET_GGZD_NAME(t.TAB_TYPE,'RD_TABLE_TAB_TYPE') as TAB_TYPE,GET_GGZD_NAME(t.version_no,'RD_TABLE_VERSION_NO') AS version_no,(SELECT COUNT(*) FROM SAM.RD_CHECK_FORMULA_WAVE WHERE TABCODE=t.tabcode AND C_USER='"+sysUser.getUserId()+"') AS formulaWaveNum FROM"+
                "(SELECT row_number() over(partition by a.tabcode order by END_DATE) as row_num,a.* "+
                "FROM RD_TABLE_INFO a "+
                "LEFT JOIN RD_TABLE_ORGANS b ON a.TABLE_ID=b.TABLE_ID "+
                "LEFT JOIN RD_TABLE_BASIC_INFO c ON a.TABCODE=c.TABCODE "+
                "where b.ORGAN_TYPE IN (" + StrUtil.convertQuoMarksSQL(bmType) + ") "+
                "AND a.TAB_BR_TYPE IN ( " + StrUtil.convertQuoMarksSQL(bmCategory) + ") "+
                "AND c.STATUS='y' AND a.start_date<='"+reportDate+"' and '"+reportDate+"'<=a.end_date)t WHERE t.row_num='1' ORDER BY t.tab_type,t.tabcode";
        //return super.getListObjectBySql(sql, RdTableInfo.class);
        Sql sql = Sqls.create(sqlStr);
        return this.getListObjectBySql(sql, RdTableInfoEx.class);
    }

    public List<RdTableInfo> getAll()
    {
        String sqlStr = "SELECT * FROM RD_TABLE_INFO";
        List<RdTableInfo> list=super.getListBySql(sqlStr, null, null);
        return list;
    }

    public void delAll() {
        String sqlStr="DELETE FROM RD_TABLE_INFO";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }

    public void add(RdTableInfo item) {
        dao().insert(item);
    }

    /**
     * 获取机构下报表编号集合
     *
     * @param brNo
     *            机构编号
     * @param reportDate
     *            数据日期
     * @param tabType
     *            数据类型(如果空:则获取全部)
     * @param include
     *            是否包含(如:季度--包含月度)
     * @return
     */
    public List<String> getTabCodeListCS(String brNo, String reportDate, String tabType, boolean include, boolean isRepay) {

        // SysBmgl bmgl = sysBmglDao.fetch(brNo);
        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        /**
         * 2015年根据新版本号修改校验公式，去掉获取校验公式
         */
        // sqlStr.append("SELECT t.TABCODE||'_'||t.VERSION_NO FROM(");
        sqlStr.append("SELECT DISTINCT t.TABCODE FROM(");
        sqlStr.append(" SELECT ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM RD_TABLE_INFO ti  LEFT JOIN RD_REPORT_INFO ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID  AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM RD_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
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

    /**
     * 获取机构下二批次报表编号集合
     *
     * @param brNo
     *            机构编号
     * @param reportDate
     *            数据日期
     * @param tabType
     *            数据类型(如果空:则获取全部)
     * @param include
     *            是否包含(如:季度--包含月度)
     * @return
     */
    public List<String> getTabCodeListByBatchTwo(String brNo, String reportDate, String tabType, boolean include, boolean isRepay,List<String> tabCodeList) {

        // SysBmgl bmgl = sysBmglDao.fetch(brNo);
        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        /**
         * 2015年根据新版本号修改校验公式，去掉获取校验公式
         */
        // sqlStr.append("SELECT t.TABCODE||'_'||t.VERSION_NO FROM(");
        sqlStr.append("SELECT DISTINCT t.TABCODE FROM(");
        sqlStr.append(" SELECT ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM RD_TABLE_INFO ti  LEFT JOIN RD_REPORT_INFO ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID  AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM RD_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND $tabType");
        sqlStr.append(" AND (ti.TAB_BR_TYPE=@tabBrType) AND (ti.TABCODE in ( "+StrUtil.convertJoin(tabCodeList,",")+" ))");
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

    /**
     *
     * 功能描述：上海省局添加非空判断
     *
     */
    public Boolean getTabCodeLisSj(String brNo, String reportDate, String tabType, boolean include, boolean isRepay) {

        // SysBmgl bmgl = sysBmglDao.fetch(brNo);
        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        if(bmgl==null){
            return false;
        }
        StringBuffer sqlStr = new StringBuffer();
        /**
         * 2015年根据新版本号修改校验公式，去掉获取校验公式
         */
        // sqlStr.append("SELECT t.TABCODE||'_'||t.VERSION_NO FROM(");
        sqlStr.append("SELECT DISTINCT t.TABCODE FROM(");
        sqlStr.append(" SELECT ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM RD_TABLE_INFO ti  LEFT JOIN RD_REPORT_INFO ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID  AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM RD_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND $tabType");
        sqlStr.append(" AND (ti.TAB_BR_TYPE=@tabBrType)");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(") t ");
        sqlStr.append(" ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.vars().set("tabType", "ti.tab_type ='" + tabType + "'");
        sql.params().set("brNo", brNo);
        String bmCategory = bmgl.getBmCategory();
        if(!bmCategory.equals(null)||!bmCategory.equals("")){
            sql.params().set("tabBrType", bmgl.getBmCategory());
        }
        sql.params().set("organType", bmgl.getBmType());
        sql.params().set("reportDate", reportDate);
        sql.params().set("sysDate", CommUtil.getSysDateByReportDate(reportDate));
        if(super.getListStringBySqlStr(sql)==null){
            return false;
        }else{
            return true;
        }
    }

    public List<RdTableInfo> getListByTabcodeAndReportDate(String tabcode,
                                                           String reportDate) {
        String sqlStr="";
        if(StrUtil.isNull(reportDate)){
            sqlStr = "SELECT * FROM RD_TABLE_INFO WHERE TABCODE = '" + tabcode + "'";
        }else{
            sqlStr = "SELECT * FROM RD_TABLE_INFO WHERE TABCODE = '" + tabcode + "' AND '" + reportDate + "' BETWEEN START_DATE AND END_DATE";
        }
        Sql sql = Sqls.create(sqlStr);
        return super.getListBySql(sql);
    }

    /**
     *
     * 功能描述：根据tableId,版本号,报表日期查询模版信息
     * @author
     * @date 2017年9月27日
     * @param tableId
     * @param versionNo
     * @param reportDate
     * @return
     * @modify log:
     */
    public RdTableInfo getTableInfoByTabIdAndVersionAndDate(String tableId, String versionNo, String reportDate) {
        String sqlStr = "SELECT * FROM SAM.RD_TABLE_INFO WHERE TABLE_ID=@tableId AND VERSION_NO =@versionNo AND @reportDate BETWEEN START_DATE AND END_DATE";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("tableId", tableId);
        sql.params().set("versionNo", versionNo);
        sql.params().set("reportDate", reportDate);
        return super.getObjectBySql(sql, null, null);
    }

    public String getBrNo(String br) {
        String sql="SELECT BM_CODE FROM SAM.SYS_BMGL WHERE BM_NAME = '"+br+"'";
        return super.singleString(sql) ;
    }

    public String getTabCode(String tabName) {
        String sql="SELECT REPCODE FROM DW.M_REPORT WHERE REPNAME = '"+tabName+"'";
        return super.singleString(sql) ;
    }

    public String getTabType(String tabcode) {
        String sql="SELECT TAB_TYPE FROM SAM.RD_TABLE_INFO WHERE TABCODE = '"+tabcode+"'";
        return super.singleString(sql) ;
    }

    public String getTableId(String tabCodes, String reportDate) {
        String sql= "SELECT TABLE_ID FROM RD_TABLE_INFO WHERE TABCODE = '" + tabCodes + "' AND '" + reportDate + "' BETWEEN START_DATE AND END_DATE";
        return super.singleString(sql) ;
    }
}

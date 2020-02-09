package com.efraiser.test.db.service.dy.dycheckformula.impl;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.common.util.*;
import com.efraiser.test.db.model.dy.DyAutoFormula;
import com.efraiser.test.db.model.dy.DyCheckFormula;
import com.efraiser.test.db.model.dy.DyCheckFormulaTemp;
import com.efraiser.test.db.model.dy.DyTableInfo;
import com.efraiser.test.db.model.sys.SysNotice;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.cache.impl.SysGgzdCache;
import com.efraiser.test.db.service.dy.dycheckformula.DyCheckFormulaService;
import com.efraiser.test.db.util.DyCheckUtil;
import com.efraiser.test.db.util.ExportExlUtil;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class DyCheckFormulaServiceImpl extends BaseServiceImpl<DyCheckFormula> implements DyCheckFormulaService {


    @Autowired
    private ExportExlUtil exportExlUtil;

    @Autowired
    private LocalConfig localConfig;


    @Override
    public GridQueryPageResult getDyCheckFormulaList(String tabcode, String check_formula, String cUser, String valid_flag, int pageIndex, int pageSize) {
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("select id,tabcode,check_formula,start_date,end_date,valid_flag,type");
        sqlStr.append(",get_ggzd_name(CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK");
        sqlStr.append(",DEVIATION_VALUE,UPDATE_DATE");
        sqlStr.append(" from dy.dy_check_formula where C_USER='" + cUser + "'");
        if (StrUtil.isNotNull(tabcode)) {
            sqlStr.append(" and tabcode LIKE '%" + tabcode + "%'");
        }
        if (StrUtil.isNotNull(check_formula)) {
            sqlStr.append(" and check_formula LIKE '%" + check_formula + "%'");
        }
        if (StrUtil.isNotNull(valid_flag)) {
            sqlStr.append(" and valid_flag ='" + valid_flag + "'");
        }
        Pager pager = this.dao().createPager(pageIndex + 1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        gqpr.setTotal(this.countBySql(sqlStr.toString()));
        gqpr.setData(getListObjectBySql(sqlStr.toString(), null, pager, DyCheckFormula.class));
        return gqpr;
    }

    @Override
    public boolean importExcel(String filePath, StringBuffer message) throws Exception {
        int rowIndex = 2;
        List<DyCheckFormula> rdcheckformulalist = new ArrayList<DyCheckFormula>();
        List<DyCheckFormulaTemp> rdcheckformulatemplist = new ArrayList<DyCheckFormulaTemp>();
        HSSFWorkbook wb1 = new HSSFWorkbook(new FileInputStream(filePath));
        HSSFSheet sheet0 = wb1.getSheetAt(0);
        HSSFRow rowFirst = sheet0.getRow(0);
        int colcount = rowFirst.getLastCellNum();
        return getRedExcelStatus(message, rowIndex, rdcheckformulalist, rdcheckformulatemplist, sheet0, colcount);
    }

    private boolean getRedExcelStatus(StringBuffer message, int rowIndex, List<DyCheckFormula> rdcheckformulalist, List<DyCheckFormulaTemp> rdcheckformulatemplist, HSSFSheet sheet0, int colcount)
            throws Exception {
        if (redExcel(rowIndex, rdcheckformulalist, rdcheckformulatemplist, sheet0, colcount, message)) {
            dao().updateIgnoreNull(rdcheckformulalist);
            dao().fastInsert(rdcheckformulatemplist);
            return true;
        }
        return false;
    }

    private boolean redExcel(int rowIndex, List<DyCheckFormula> rdcheckformulalist, List<DyCheckFormulaTemp> rdcheckformulatemplist, HSSFSheet sheet0, int colcount, StringBuffer message) {
        boolean flags = true;
        do {
            DyCheckFormula rdcheckformula = new DyCheckFormula();
            DyCheckFormulaTemp rdcheckformulatemp = new DyCheckFormulaTemp();
            String date = DateUtil.getNow(DateUtil.FORMAT_LONG);
            HSSFRow row = sheet0.getRow(rowIndex);
            for (int i = 0; i <= colcount; i++) {
                HSSFCell cell = row.getCell(i);
                String value = ExcelUtil.getHssCellData(cell);
                rdcheckformula.setUpdateDate(date);
                switch (i) {
                    case 0:
                        if (StrUtil.isNotNull(value)) {
                            setDycheckformulatemp(rdcheckformulatemp, value, date);
                            rdcheckformula.setId(value);
                        } else {
                            flags = false;
                        }
                        break;
                    case 1:
                        rdcheckformula.setTabcode(value);
                        break;
                    case 2:
                        rdcheckformula.setCheckFormula(value);
                        break;
                    case 3:
                        if (value.length() > 8) {
                            flags = false;
                            message.append("报表开始日期、</br>");
                        } else {
                            rdcheckformula.setStartDate(value);
                        }
                        break;
                    case 4:
                        if (value.length() > 8) {
                            flags = false;
                            message.append("报表截止日期、</br>");
                        } else {
                            rdcheckformula.setEndDate(value);
                        }
                        break;
                    case 5:
                        if ("y".equals(value) || "n".equals(value)) {
                            rdcheckformula.setValidFlag(value);
                        } else {
                            flags = false;
                            message.append("是否生效、</br>");
                        }
                        break;
                    case 6:
                        if ("1".equals(value) || "2".equals(value)) {
                            rdcheckformula.setCheckRisk(value);
                        } else {
                            flags = false;
                            message.append("风险等级、</br>");
                        }
                        break;
                    case 7:
                        if (StrUtil.isNumeric(value) || StrUtil.isNull(value)) {
                            rdcheckformula.setDeviationValue(value);
                        } else {
                            flags = false;
                            message.append("允许偏差值、");
                        }
                        break;
                    case 8:
                        rdcheckformula.setCheckFormulaMark(value);
                        break;
                    case 9:
                        rdcheckformula.setAutoComputeFlag(value);
                        break;
                    case 10:
                        rdcheckformula.setcUser(value);
                        break;
                }
            }
            if (flags) {
                rdcheckformulatemplist.add(rdcheckformulatemp);
                rdcheckformulalist.add(rdcheckformula);
                rowIndex++;
            } else {
                message.insert(0, "第" + (rowIndex + 1) + "行");
                break;
            }
        } while (sheet0.getLastRowNum() >= rowIndex);
        return flags;
    }

    private void setDycheckformulatemp(DyCheckFormulaTemp dycheckformulatemp, String value, String date) {
        DyCheckFormula dycheckformula = fetch(value);
        if (null != dycheckformula) {
            dycheckformulatemp.setId(value);
            dycheckformulatemp.setTabcode(dycheckformula.getTabcode());
            dycheckformulatemp.setCheckFormula(dycheckformula.getCheckFormula());
            dycheckformulatemp.setStartDate(dycheckformula.getStartDate());
            dycheckformulatemp.setEndDate(dycheckformula.getEndDate());
            dycheckformulatemp.setValidFlag(dycheckformula.getValidFlag());
            dycheckformulatemp.setCheckRisk(dycheckformula.getCheckRisk());
            dycheckformulatemp.setDeviationValue(dycheckformula.getDeviationValue());
            dycheckformulatemp.setCheckFormulaMark(dycheckformula.getCheckFormulaMark());
            dycheckformulatemp.setAutoComputeFlag(dycheckformula.getAutoComputeFlag());
            dycheckformulatemp.setcUser(dycheckformula.getcUser());
            dycheckformulatemp.setUpdateDate(date);
        }
    }

    @Override
    public String exportExcel(String id) {
        try {
            String sqlStr = "SELECT ID,TABCODE,CHECK_FORMULA,START_DATE,END_DATE,VALID_FLAG,CHECK_RISK,DEVIATION_VALUE,CHECK_FORMULA_MARK,AUTO_COMPUTE_FLAG,C_USER FROM DY,DY_CHECK_FORMULA WHERE 1=1";
            if (StrUtil.isNotNull(id)) {
                sqlStr += " AND ID IN (" + StrUtil.convertQuoMarksSQL(id) + ")";
            }
            return exportExlUtil.doWbExcel("校验公式.xls", 2, 0, sqlStr, null, null);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean checkIsOnly(String id, String idcolumn, String key, String keycolumn) {
        if (StrUtil.isNotNull(id)) {
            return super.count(Cnd.where(idcolumn, "<>", id).and(keycolumn, "=", key)) > 0;
        } else {
            return super.count(Cnd.where(keycolumn, "=", key)) > 0;
        }
    }

    @Override
    public DyCheckFormula fetchToEditCheckFormula(String id) {
        return this.fetch(id);
    }

    @Override
    public List<DyCheckFormula> getCheckFormulaListByTabCodes(List<String> tabCodes, String reportDate, String cUser, String formulaType, String checkArea, String area) {
        StringBuffer sqlCon = new StringBuffer(" VALID_FLAG='y'");
        String startDate = reportDate + "01";
        int maxDays = DateUtil.getMonthMaxDays(DateUtil.parse(startDate, DateUtil.FORMAT_DATE_SHORT));
        String Area[] = area.split("_");
        //公式类型区分('1'代表普通,'2'代表异动)
        if (("1").equals(formulaType) || ("2").equals(formulaType)) {
            sqlCon.append(" AND TYPE = '" + formulaType + "'");
        }
        //校验范围区分(表内校验,表外校验)
        if (("1".equals(checkArea))) {
            sqlCon.append(" AND TABCODE NOT LIKE '%@%' ");
        } else if (("2").equals(checkArea)) {
            sqlCon.append(" AND TABCODE LIKE '%@%' ");
        }

        sqlCon.append(" AND START_DATE <= '" + startDate + "'");
        sqlCon.append(" AND END_DATE >= '" + reportDate + maxDays + "'");
        sqlCon.append(" AND C_USER IN ('admin','" + cUser + "')");
        sqlCon.append(" AND CHECK_AREA IN ('ALL','" + Area[0] + "')");
        sqlCon.append(" AND (");
        for (String tabCode : tabCodes) {
            sqlCon.append(" tabcode like '%");
            sqlCon.append(tabCode);
            sqlCon.append("%' OR");
        }
        return super.query(Cnd.wrap(sqlCon.substring(0, sqlCon.length() - 2) + ") ORDER BY TABCODE"), null);
    }

    @Override
    public List<DyCheckFormula> getCheckFormulaListByTabCodesWj(List<String> tabCodes, String reportDate, String userId) {
        StringBuffer sqlCon = new StringBuffer(" VALID_FLAG='y'");
        String startDate = reportDate;
        int maxDays = DateUtil.getMonthMaxDays(DateUtil.parse(startDate, DateUtil.FORMAT_DATE_SHORT));
        sqlCon.append(" AND START_DATE <= '" + startDate + "'");
        sqlCon.append(" AND END_DATE >= '" + startDate + "'");
        sqlCon.append(" AND C_USER IN ('admin','" + userId + "')");
        sqlCon.append(" AND (");
        for (String tabCode : tabCodes) {
            sqlCon.append(" tabcode = '");
            sqlCon.append(tabCode);
            sqlCon.append("' OR");
        }
        return super.query(Cnd.wrap(sqlCon.substring(0, sqlCon.length() - 2) + ") ORDER BY TABCODE"), null);
    }

    @Override
    public DyCheckFormula updateCheckFormulaValidFlag(String id, String validFlag, SysUser sysUser) {
        DyCheckFormula rtb = this.fetch(id);
        rtb.setValidFlag(validFlag);
        rtb.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
        super.dao().updateIgnoreNull(rtb);
        String s = "";
        if (validFlag.equals("y")) {
            s = "<font color=\"blue\">启用</font>";
        } else {
            s = "<font color=\"red\">停用</font>";
        }
        if ("admin".equals(sysUser.getUserId())) {
            SysNotice sn = new SysNotice();
            sn.setContent("<p><span style=\"font-size:12px;\">公式:&nbsp;&nbsp;" + rtb.getCheckFormula() + "</span></p><p><span style=\"font-size:12px;\">被&nbsp;&nbsp;" + s + "</span></p>");
            sn.setTitle("1104公式修订通知");
            sn.setReleaseDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
            sn.setReleaseUser(sysUser.getUserName());
            super.dao().insert(sn);
        }
        return rtb;
    }

    @Override
    public void updateCheckFormulaValidFlag2(String parent, String validFlag, String checkProject, SysUser sysUser) {
        String sqlStr;
        if (parent == null) {
            sqlStr = "UPDATE DY.DY_CHECK_FORMULA SET VALID_FLAG = '" + validFlag + "' WHERE PARENT IS NULL AND CHECK_PROJECT = '" + checkProject + "'";
        } else {
            sqlStr = "UPDATE DY.DY_CHECK_FORMULA SET VALID_FLAG = '" + validFlag + "' WHERE PARENT = '" + parent + "' AND CHECK_PROJECT = '" + checkProject + "'";
        }
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }

    @Override
    public List<DyAutoFormula> getCheckFormulaListByExcel(DyTableInfo tableInfo, List<String> formulaList, List<Map<String, String>> colMapList) {
        List<DyAutoFormula> checkFormulaList = new ArrayList<DyAutoFormula>();
        List<String> cformulaList = new ArrayList<String>();

        for (String formula : formulaList) {
            if (formula.contains("$")) {
                formula = formula.replace("$", "");
            }
            if (formula.contains(":")) {
                cformulaList.add(DyCheckUtil.parseColonFormula(formula, tableInfo.getTabCode(), tableInfo.getRowInfo().split("@"), colMapList));
            } else {
                cformulaList.add(DyCheckUtil.parseNormalFomula(formula, tableInfo.getTabCode(), tableInfo.getRowInfo().split("@"), colMapList));
            }
        }
        for (String cf : cformulaList) {
            DyAutoFormula rdAutoCheckFormula = new DyAutoFormula();
            rdAutoCheckFormula.setTableId(tableInfo.getTableId());
            rdAutoCheckFormula.setAutoFormula(cf);
            checkFormulaList.add(rdAutoCheckFormula);
        }
        return checkFormulaList;
    }

    @Override
    public void saveOrUpdateAutoCheckFormula(String tableId, List<DyAutoFormula> autoCheckFormulaList) throws Exception {
        this.dao().clear(DyAutoFormula.class, Cnd.where("TABLE_ID", "=", tableId));
        super.dao().fastInsert(autoCheckFormulaList);
    }

    @Override
    public List<String> getDyAutoFormulaList(String tableId) {
        Sql sql = Sqls.create("SELECT AUTO_FORMULA FROM DY.DY_AUTO_FORMULA WHERE TABLE_ID=@tableId");
        sql.params().set("tableId", tableId);
        return super.getListStringBySqlStr(sql);
    }

    @Override
    public void updateCheckFormula(DyCheckFormula checkformula, SysUser sysUser, String userRole) {
        if ("admin".equals(userRole) || "4".equals(userRole)) {
            // 插入系统公告
            DyCheckFormula oRc = this.fetch(checkformula.getId());// 获取旧版信息
            String OldFormula = FormulaEncrypt.getFormulaDecrypt(oRc.getCheckFormula());
            String newFormula = FormulaEncrypt.getFormulaDecrypt(checkformula.getCheckFormula());
            boolean isChanged = false;
            StringBuilder changeText = new StringBuilder("<p><span style=\"font-size:12px;\">校验公式:&nbsp;" + oRc.getTabcode() + "&nbsp;&nbsp;[" + OldFormula + "] &nbsp; &nbsp;被修改!!</span></p>"
                    + "<p><span style=\"font-size:12px;\"></span></p>");
            if (!oRc.getTabcode().equals(checkformula.getTabcode())) {// 关联表
                isChanged = true;
                changeText.append("<p><span style=\"font-size:12px;\">原关联报表:&nbsp;" + oRc.getTabcode() + " &nbsp; &nbsp;修改为:&nbsp;" + checkformula.getTabcode() + "</span></p>");
            }
            if (!oRc.getCheckFormula().equals(checkformula.getCheckFormula())) {// 关联表
                isChanged = true;
                changeText.append("<p><span style=\"font-size:12px;\">原公式:&nbsp;" + OldFormula + "</span></p><p><span style=\"font-size:12px;\">修改为:&nbsp;" + newFormula
                        + "</span></p>");
            }
            if (!oRc.getCheckRisk().equals(checkformula.getCheckRisk())) {
                isChanged = true;
                changeText.append("<p><span style=\"font-size:12px;\">原风险等级:&nbsp;" + SysGgzdCache.getSysGgzdName("RD_CHECK_RISK", oRc.getCheckRisk()) + "&nbsp;&nbsp;修改后:&nbsp;"
                        + SysGgzdCache.getSysGgzdName("RD_CHECK_RISK", checkformula.getCheckRisk()) + "</span></p>");
            }
            if (!oRc.getDeviationValue().equals(checkformula.getDeviationValue())) {
                isChanged = true;
                changeText.append("<p><span style=\"font-size:12px;\">原允许误差:&nbsp;" + oRc.getDeviationValue() + "&nbsp;&nbsp;修改为:&nbsp;" + checkformula.getDeviationValue() + "</span></p>");
            }

            if (!oRc.getStartDate().equals(checkformula.getStartDate())) {
                isChanged = true;
                changeText.append("<p><span style=\"font-size:12px;\">原启用日期:&nbsp;" + oRc.getStartDate() + "&nbsp;&nbsp;修改为:&nbsp;" + checkformula.getStartDate() + "</span></p>");
            }
            if (!oRc.getEndDate().equals(checkformula.getEndDate())) {
                isChanged = true;
                changeText.append("<p><span style=\"font-size:12px;\">原停用日期:&nbsp;" + oRc.getEndDate() + "&nbsp;&nbsp;修改为:&nbsp;" + checkformula.getEndDate() + "</span></p>");
            }
            if (!oRc.getCheckFormulaMark().equals(checkformula.getCheckFormulaMark())) {
                isChanged = true;
                changeText.append("<p><span style=\"font-size:12px;\">原公式描述:&nbsp;" + oRc.getCheckFormulaMark() + "&nbsp;&nbsp;修改为:&nbsp;" + checkformula.getCheckFormulaMark() + "</span></p>");
            }

            if (isChanged) {
                SysNotice sn = new SysNotice();
                sn.setTitle("1104公式修订通知");
                sn.setContent(changeText.toString());
                sn.setReleaseDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
                sn.setReleaseUser(sysUser.getUserName());
                if (newFormula.contains("em_")) {
                    sn.setSql_ef("UPDATE DY.DY_CHECK_FORMULA SET TABCODE=" + convert(checkformula.getTabcode()) + ""
//					+ ",CHECK_FORMULA = "+ convert(newFormula) +""
                            + ",CHECK_FORMULA = " + convert(FormulaEncrypt.getFormulaDecrypt1(newFormula)) + ""
                            + ",START_DATE = " + convert(checkformula.getStartDate()) + ""
                            + ",END_DATE = " + convert(checkformula.getEndDate()) + ""
                            + ",VALID_FLAG = " + convert(checkformula.getValidFlag()) + ""
                            + ",CHECK_RISK = " + convert(checkformula.getCheckRisk()) + ""
                            + ",DEVIATION_VALUE = " + convert(checkformula.getDeviationValue()) + ""
                            + ",C_USER = " + convert(checkformula.getcUser()) + ""
                            + ",CHECK_FORMULA_MARK = " + convert(checkformula.getCheckFormulaMark()) + ""
                            + ",AUTO_COMPUTE_FLAG = " + convert(checkformula.getAutoComputeFlag()) + ""
                            + ",UPDATE_DATE = " + convert(checkformula.getUpdateDate()) + ""
                            + ",TYPE = " + convert(checkformula.getType()) + ""
                            + ",CHECK_AREA = " + convert(checkformula.getCheckArea()) + ""
                            + ",WHERE TABCODE = " + convert(oRc.getTabcode()) + ""
                            + ",CHECK_FORMULA = " + convert(OldFormula) + ""
                            + ",START_DATE = " + convert(oRc.getStartDate()) + ""
                            + ",END_DATE = " + convert(oRc.getEndDate()) + ""
                            + ",VALID_FLAG = " + convert(oRc.getValidFlag()) + ""
                            + ",CHECK_RISK = " + convert(oRc.getCheckRisk()) + ""
                            + ",DEVIATION_VALUE = " + convert(oRc.getDeviationValue()) + ""
                            + ",C_USER = " + convert(oRc.getcUser()) + "");
                    sn.setSql("UPDATE DY.DY_CHECK_FORMULA SET TABCODE=" + convert(checkformula.getTabcode()) + ""
                            + ",CHECK_FORMULA = " + convert(FormulaEncrypt.getFormulaDecrypt1(newFormula)) + ""
                            + ",START_DATE = " + convert(checkformula.getStartDate()) + ""
                            + ",END_DATE = " + convert(checkformula.getEndDate()) + ""
                            + ",VALID_FLAG = " + convert(checkformula.getValidFlag()) + ""
                            + ",CHECK_RISK = " + convert(checkformula.getCheckRisk()) + ""
                            + ",DEVIATION_VALUE = " + convert(checkformula.getDeviationValue()) + ""
                            + ",C_USER = " + convert(checkformula.getcUser()) + ""
                            + ",CHECK_FORMULA_MARK = " + convert(checkformula.getCheckFormulaMark()) + ""
                            + ",AUTO_COMPUTE_FLAG = " + convert(checkformula.getAutoComputeFlag()) + ""
                            + ",UPDATE_DATE = " + convert(checkformula.getUpdateDate()) + ""
                            + ",TYPE = " + convert(checkformula.getType()) + ""
                            + ",CHECK_AREA = " + convert(checkformula.getCheckArea()) + ""
                            + ",WHERE TABCODE = " + convert(oRc.getTabcode()) + ""
                            + ",CHECK_FORMULA = " + convert(OldFormula) + ""
                            + ",START_DATE = " + convert(oRc.getStartDate()) + ""
                            + ",END_DATE = " + convert(oRc.getEndDate()) + ""
                            + ",VALID_FLAG = " + convert(oRc.getValidFlag()) + ""
                            + ",CHECK_RISK = " + convert(oRc.getCheckRisk()) + ""
                            + ",DEVIATION_VALUE = " + convert(oRc.getDeviationValue()) + ""
                            + ",C_USER = " + convert(oRc.getcUser()) + "");
                } else {
                    sn.setSql_ef("UPDATE DY.DY_CHECK_FORMULA SET TABCODE=" + convert(checkformula.getTabcode()) + ""
//							+ ",CHECK_FORMULA = "+ convert(FormulaEncrypt.getFormulaEnctypt1(newFormula)) +""
                            + ",CHECK_FORMULA = " + convert(newFormula) + ""
                            + ",START_DATE = " + convert(checkformula.getStartDate()) + ""
                            + ",END_DATE = " + convert(checkformula.getEndDate()) + ""
                            + ",VALID_FLAG = " + convert(checkformula.getValidFlag()) + ""
                            + ",CHECK_RISK = " + convert(checkformula.getCheckRisk()) + ""
                            + ",DEVIATION_VALUE = " + convert(checkformula.getDeviationValue()) + ""
                            + ",C_USER = " + convert(checkformula.getcUser()) + ""
                            + ",CHECK_FORMULA_MARK = " + convert(checkformula.getCheckFormulaMark()) + ""
                            + ",AUTO_COMPUTE_FLAG = " + convert(checkformula.getAutoComputeFlag()) + ""
                            + ",UPDATE_DATE = " + convert(checkformula.getUpdateDate()) + ""
                            + ",TYPE = " + convert(checkformula.getType()) + ""
                            + ",CHECK_AREA = " + convert(checkformula.getCheckArea()) + ""
                            + ",WHERE TABCODE = " + convert(oRc.getTabcode()) + ""
                            + ",CHECK_FORMULA = " + convert(OldFormula) + ""
                            + ",START_DATE = " + convert(oRc.getStartDate()) + ""
                            + ",END_DATE = " + convert(oRc.getEndDate()) + ""
                            + ",VALID_FLAG = " + convert(oRc.getValidFlag()) + ""
                            + ",CHECK_RISK = " + convert(oRc.getCheckRisk()) + ""
                            + ",DEVIATION_VALUE = " + convert(oRc.getDeviationValue()) + ""
                            + ",C_USER = " + convert(oRc.getcUser()) + "");
                    sn.setSql("UPDATE DY.DY_CHECK_FORMULA SET TABCODE=" + convert(checkformula.getTabcode()) + ""
                            + ",CHECK_FORMULA = " + convert(newFormula) + ""
                            + ",START_DATE = " + convert(checkformula.getStartDate()) + ""
                            + ",END_DATE = " + convert(checkformula.getEndDate()) + ""
                            + ",VALID_FLAG = " + convert(checkformula.getValidFlag()) + ""
                            + ",CHECK_RISK = " + convert(checkformula.getCheckRisk()) + ""
                            + ",DEVIATION_VALUE = " + convert(checkformula.getDeviationValue()) + ""
                            + ",C_USER = " + convert(checkformula.getcUser()) + ""
                            + ",CHECK_FORMULA_MARK = " + convert(checkformula.getCheckFormulaMark()) + ""
                            + ",AUTO_COMPUTE_FLAG = " + convert(checkformula.getAutoComputeFlag()) + ""
                            + ",UPDATE_DATE = " + convert(checkformula.getUpdateDate()) + ""
                            + ",TYPE = " + convert(checkformula.getType()) + ""
                            + ",CHECK_AREA = " + convert(checkformula.getCheckArea()) + ""
                            + ",WHERE TABCODE = " + convert(oRc.getTabcode()) + ""
                            + ",CHECK_FORMULA = " + convert(OldFormula) + ""
                            + ",START_DATE = " + convert(oRc.getStartDate()) + ""
                            + ",END_DATE = " + convert(oRc.getEndDate()) + ""
                            + ",VALID_FLAG = " + convert(oRc.getValidFlag()) + ""
                            + ",CHECK_RISK = " + convert(oRc.getCheckRisk()) + ""
                            + ",DEVIATION_VALUE = " + convert(oRc.getDeviationValue()) + ""
                            + ",C_USER = " + convert(oRc.getcUser()) + "");
                }
                super.dao().insert(sn);
            }
        }
        checkformula.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
        super.dao().update(checkformula);

    }


    @Override
    public int getcountParentId(String tabcode, String tab, String i, String type, String c_user, String cUser) {
        return super.count(Cnd.where(tab, "=", tabcode).and(type, "=", i).and(c_user, "=", cUser));
    }

    @Override
    public void delFormula(String tabcode, String type, String element,
                           String checkProject) {
        String sqlStr = "DELETE FROM DY.DY_CHECK_FORMULA WHERE TABCODE='" + tabcode + "' AND TYPE='" + type + "' AND ELEMENT='" + element + "' AND CHECK_PROJECT='" + checkProject + "'";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }

    @Override
    public List<DyCheckFormula> getList(String cUser) {
        String databaseType = localConfig.getDriver();
        String sqlStr;
        if ("oracle.jdbc.driver.OracleDriver".equals(databaseType)) {
            sqlStr = "SELECT * FROM(SELECT rank()over(PARTITION BY tabcode,check_project,type ORDER BY start_date DESC ,id DESC )AS row_num,a.* FROM DY.DY_CHECK_FORMULA a WHERE (TYPE='2' or type='3') and C_USER='" + cUser + "')t WHERE t.row_num=1 ORDER BY t.tabcode,length(substr(t.element,1,instr(t.element,'_')-1)),substr(t.element,1,instr(t.element,'_')-1),t.element";
        } else {
            sqlStr = "SELECT * FROM(SELECT rank()over(PARTITION BY tabcode,check_project,type ORDER BY start_date DESC ,id DESC )AS row_num,a.* FROM DY.DY_CHECK_FORMULA a WHERE (TYPE='2' or type='3') and C_USER='" + cUser + "')t WHERE t.row_num=1 ORDER BY t.tabcode,length(substr(t.element,1,locate('_',t.element)-1)),substr(t.element,1,locate('_',t.element)-1),t.element";
        }
        Sql sql = Sqls.create(sqlStr.toString());
        return super.getListObjectBySql(sql, DyCheckFormula.class);
    }

    @Override
    public DyCheckFormula EditCheckFormula(String parent, String element) {
        String databaseType = localConfig.getDriver();
        String sqlStr;
        if ("oracle.jdbc.driver.OracleDriver".equals(databaseType)) {
            sqlStr = "SELECT * FROM DY.DY_CHECK_FORMULA WHERE PARENT='" + parent + "' AND ELEMENT='" + element + "' AND ROWNUM=1";
        } else {
            sqlStr = "SELECT * FROM DY.DY_CHECK_FORMULA WHERE PARENT='" + parent + "' AND ELEMENT='" + element + "' fetch first rows only";
        }
        Sql sql = Sqls.create(sqlStr.toString());
        return super.getObjectBySql(sql, null, null);
    }

    @Override
    public List<DyCheckFormula> EditCheckFormulas(String checkProject, String type, String parent, String cUser) {
        String sqlStr = "SELECT * FROM DY.DY_CHECK_FORMULA WHERE PARENT='" + parent + "' AND CHECK_PROJECT='" + checkProject + "' AND TYPE='" + type + "' and C_USER='" + cUser + "' ORDER BY START_DATE DESC,REPORT_RATE DESC";
        Sql sql = Sqls.create(sqlStr.toString());
        return super.getListObjectBySql(sql, DyCheckFormula.class);
    }

    @Override
    public void deleteFormula(String parent, String id) {
        String sqlStr;
        if (parent == null) {
            sqlStr = "DELETE FROM DY.DY_CHECK_FORMULA WHERE id='" + id + "' OR PARENT= '" + id + "'";
        } else {
            sqlStr = "DELETE FROM DY.DY_CHECK_FORMULA WHERE id='" + id + "'";
        }
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);

    }

    @Override
    public DyCheckFormula getCPbyId(String id) {
        String sqlStr = "SELECT * FROM DY.DY_CHECK_FORMULA WHERE ID = '" + id + "'";
        Sql sql = Sqls.create(sqlStr.toString());
        return super.getObjectBySql(sql, null, null);
    }

    @Override
    public void updateCheckFormula2(DyCheckFormula checkformula, String userId) {
        checkformula.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
        super.dao().update(checkformula);
    }

    @Override
    public List<DyCheckFormula> getAll() {
        String sqlStr = "SELECT * FROM DY.DY_CHECK_FORMULA";
        List<DyCheckFormula> list = super.getListBySql(sqlStr, null, null);
        return list;
    }

    @Override
    public List<DyCheckFormula> getCheckFormulaListByTabCodesRepay(List<String> tabCodes, String reportDate, String cUser, String formulaType, String area) {
        StringBuffer sqlCon = new StringBuffer(" VALID_FLAG='y'");
        String startDate = reportDate + "01";
        int maxDays = DateUtil.getMonthMaxDays(DateUtil.parse(startDate, DateUtil.FORMAT_DATE_SHORT));
        String Area[] = area.split("_");
        if (("1").equals(formulaType) || ("2").equals(formulaType)) {
            sqlCon.append(" AND TYPE = '" + formulaType + "'");
        }
        sqlCon.append(" AND START_DATE <= '" + startDate + "'");
        sqlCon.append(" AND END_DATE >= '" + reportDate + maxDays + "'");
        sqlCon.append(" AND CHECK_AREA IN ('ALL','" + Area[0] + "')");
        sqlCon.append(" AND C_USER = 'repay'");
        sqlCon.append(" AND (");
        for (String tabCode : tabCodes) {
            sqlCon.append(" tabcode like '%");
            sqlCon.append(tabCode);
            sqlCon.append("%' OR");
        }
        return super.query(Cnd.wrap(sqlCon.substring(0, sqlCon.length() - 2) + ") ORDER BY TABCODE"), null);
    }

    @Override
    public List<DyCheckFormula> getCheckFormulaListByTabCodesSummary(List<String> tabCodes, String reportDate, String cUser, String formulaType, String area) {
        StringBuffer sqlCon = new StringBuffer(" VALID_FLAG='y'");
        String startDate = reportDate + "01";
        int maxDays = DateUtil.getMonthMaxDays(DateUtil.parse(startDate, DateUtil.FORMAT_DATE_SHORT));
        if (("1").equals(formulaType) || ("2").equals(formulaType)) {
            sqlCon.append(" AND TYPE = '" + formulaType + "'");
        }
        sqlCon.append(" AND START_DATE <= '" + startDate + "'");
        sqlCon.append(" AND END_DATE >= '" + reportDate + maxDays + "'");
        sqlCon.append(" AND C_USER IN ('admin','" + cUser + "')");
        sqlCon.append(" AND CHECK_AREA IN ('ALL'," + area + ")");
        sqlCon.append(" AND (");
        for (String tabCode : tabCodes) {
            sqlCon.append(" tabcode like '%");
            sqlCon.append(tabCode);
            sqlCon.append("%' OR");
        }
        return super.query(Cnd.wrap(sqlCon.substring(0, sqlCon.length() - 2) + ") ORDER BY TABCODE"), null);
    }

    @Override
    public String convert(Object param) {
        if (param == null) {
            return null;
        }
        return "'" + param.toString() + "'";
    }

    @Override
    public void delAll() {
        String sqlStr = "DELETE FROM DY.DY_CHECK_FORMULA";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }

    @Override
    public void add(DyCheckFormula item) {
        dao().insert(item);
    }

    @Override
    public List<DyCheckFormula> getCheckFormulaListByTabCodes(List<String> tabCodes, String reportDate, String cUser, String formulaType, String checkArea, String area, String brnoType) {
        StringBuffer sqlCon = new StringBuffer(" VALID_FLAG='y'");
        String startDate = reportDate + "01";
        int maxDays = DateUtil.getMonthMaxDays(DateUtil.parse(startDate, DateUtil.FORMAT_DATE_SHORT));
        String Area[] = area.split("_");
        //公式类型区分('1'代表普通,'2'代表异动)
        if (("1").equals(formulaType) || ("2").equals(formulaType)) {
            sqlCon.append(" AND TYPE = '" + formulaType + "'");
        }
        //校验范围区分(表内校验,表外校验)
        if (("1".equals(checkArea))) {
            sqlCon.append(" AND TABCODE NOT LIKE '%@%' ");
        } else if (("2").equals(checkArea)) {
            sqlCon.append(" AND TABCODE LIKE '%@%' ");
        }

        sqlCon.append(" AND START_DATE <= '" + startDate + "'");
        sqlCon.append(" AND END_DATE >= '" + reportDate + maxDays + "'");
        sqlCon.append(" AND C_USER IN ('admin','" + cUser + "')");
        sqlCon.append(" AND CHECK_AREA IN ('ALL','" + Area[0] + "')");
        if (formulaType.equals("2")) {
            sqlCon.append(" AND CHECK_BRNO = ''");
        }
        sqlCon.append(" AND (");
        for (String tabCode : tabCodes) {
            sqlCon.append(" tabcode like '%");
            sqlCon.append(tabCode);
            sqlCon.append("%' OR");
        }
        return super.query(Cnd.wrap(sqlCon.substring(0, sqlCon.length() - 2) + ") ORDER BY TABCODE"), null);
    }


    @Override
    public void rollbackCheckFormula(String date) {
        dao().updateIgnoreNull(getListObjectBySql("SELECT ID,TABCODE,CHECK_FORMULA,START_DATE,END_DATE,VALID_FLAG,CHECK_RISK,DEVIATION_VALUE,CHECK_FORMULA_MARK,AUTO_COMPUTE_FLAG,C_USER,'" + DateUtil.getNow(DateUtil.FORMAT_LONG) + "' AS UPDATE_DATE FROM DY.DY_CHECK_FORMULA_TEMP WHERE UPDATE_DATE='" + date + "'", DyCheckFormula.class));
    }

    @Override
    public GridQueryPageResult getDyCheckFormulaList(String checkArea, String cUser, String tabcode, String checkFormula, String vFlag, String formulaType, int pageIndex, int pageSize, String sortField, String sortOrder) {
        GridQueryPageResult gqpr = new GridQueryPageResult();
        Criteria criteria = Cnd.cri();
        criteria.where().and("cUser", "=", cUser);


        if (StrUtil.isNotNull(tabcode)) {
            criteria.where().and("tabcode", "like", "%" + tabcode + "%");
        }
//加密前根据公式模糊搜索
//		if (StrUtil.isNotNull(checkFormula)) {
//			criteria.where().and("checkFormula", "like", "%" + checkFormula + "%");
//		}
        if (StrUtil.isNotNull(vFlag)) {
            criteria.where().and("validFlag", "=", vFlag);
        }
        if (StrUtil.isNotNull(formulaType)) {
            criteria.where().and("type", "=", formulaType);
        } else {
            criteria.where().and("type", "=", "1");
        }
        if (StrUtil.isNotNull(sortField)) {
            if ("desc".equals(sortOrder)) {
                criteria.getOrderBy().desc(sortField);
            } else {
                criteria.getOrderBy().asc(sortField);
            }
        }
//加密前取数
//		gqpr.setTotal(rdCheckFormulaService.count(criteria));
//		gqpr.setData(rdCheckFormulaService.query(criteria, pager));

        List<DyCheckFormula> list = query(criteria, null);
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getCheckFormula().contains("em_")) {
                list.get(i).setCheckFormula(FormulaEncrypt.getFormulaDecrypt(list.get(i).getCheckFormula()));
            }
            if (StrUtil.isNotNull(checkFormula)) {
                if (list.get(i).getCheckFormula().contains("" + checkFormula + "")) {
                } else {
                    list.remove(list.get(i));
                    i--;
                }
            }
        }
        List<DyCheckFormula> lists = new ArrayList<DyCheckFormula>();
        gqpr.setTotal(list.size());
        for (int j = pageIndex * pageSize; j < (pageIndex + 1) * pageSize; j++) {
            if (j < list.size()) {
                lists.add(list.get(j));
            }
        }
        gqpr.setData(lists);

        return gqpr;
    }

    @Override
    public GridQueryPageResult getDyCheckFormulaListArea(String cUser, String checkArea, String tabcode, String checkFormula, String vFlag, String formulaType, int pageIndex, int pageSize, String sortField, String sortOrder) {
        GridQueryPageResult gqpr = new GridQueryPageResult();
        Criteria criteria = Cnd.cri();
        criteria.where().and("cUser", "=", cUser);
        //校验范围区分(表内校验,表外校验)
        if (("1".equals(checkArea))) {
            criteria.where().and("tabcode", "not like", "%@%");
        } else if (("2").equals(checkArea)) {
            criteria.where().and("tabcode", "like", "%@%");
        }

        if (StrUtil.isNotNull(tabcode)) {
            criteria.where().and("tabcode", "like", "%" + tabcode + "%");
        }
        //加密前根据公式模糊搜索
        //if (StrUtil.isNotNull(checkFormula)) {
        //	criteria.where().and("checkFormula", "like", "%" + checkFormula + "%");
        //}
        if (StrUtil.isNotNull(vFlag)) {
            criteria.where().and("validFlag", "=", vFlag);
        }
        if (StrUtil.isNotNull(formulaType)) {
            criteria.where().and("type", "=", formulaType);
        } else {
            criteria.where().and("type", "=", "1");
        }
        if (StrUtil.isNotNull(sortField)) {
            if ("desc".equals(sortOrder)) {
                criteria.getOrderBy().desc(sortField);
            } else {
                criteria.getOrderBy().asc(sortField);
            }
        }
        //加密前取数据
        //gqpr.setTotal(rdCheckFormulaService.count(criteria));
        //gqpr.setData(rdCheckFormulaService.query(criteria, pager));
        List<DyCheckFormula> list = query(criteria, null);
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getCheckFormula().contains("em_")) {
                list.get(i).setCheckFormula(FormulaEncrypt.getFormulaDecrypt(list.get(i).getCheckFormula()));
            }
            if (StrUtil.isNotNull(checkFormula)) {
                if (list.get(i).getCheckFormula().contains("" + checkFormula + "")) {
                } else {
                    list.remove(list.get(i));
                    i--;
                }
            }
        }
        List<DyCheckFormula> lists = new ArrayList<DyCheckFormula>();
        gqpr.setTotal(list.size());
        for (int j = pageIndex * pageSize; j < (pageIndex + 1) * pageSize; j++) {
            if (j < list.size()) {
                lists.add(list.get(j));
            }
        }
        gqpr.setData(lists);
        return gqpr;
    }
}

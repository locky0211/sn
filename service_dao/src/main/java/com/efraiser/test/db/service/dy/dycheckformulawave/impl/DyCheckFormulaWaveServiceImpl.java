package com.efraiser.test.db.service.dy.dycheckformulawave.impl;

import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.FormulaEncrypt;
import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyAutoFormula;
import com.efraiser.test.db.model.dy.DyCheckFormula;
import com.efraiser.test.db.model.dy.DyCheckFormulaWave;
import com.efraiser.test.db.model.dy.DyTableInfo;
import com.efraiser.test.db.model.sys.SysNotice;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.cache.impl.SysGgzdCache;
import com.efraiser.test.db.service.dy.dycheckformulawave.DyCheckFormulaWaveService;
import com.efraiser.test.db.util.DyCheckUtil;
import com.efraiser.test.db.util.ExportExlUtil;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Sql;
import org.nutz.mvc.Mvcs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DyCheckFormulaWaveServiceImpl extends BaseServiceImpl<DyCheckFormulaWave> implements DyCheckFormulaWaveService {


    @Autowired
    private ExportExlUtil exportExlUtil;

    @Override
    public GridQueryPageResult getRdCheckFormulaList(String tabcode, String check_formula, String cUser, String valid_flag, int pageIndex, int pageSize) {
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("select id,tabcode,check_formula,start_date,end_date,valid_flag,type");
        sqlStr.append(",get_ggzd_name(CHECK_RISK,'DY_CHECK_RISK') as CHECK_RISK");
        sqlStr.append(",DEVIATION_VALUE,UPDATE_DATE");
        sqlStr.append(" from DY.DY_CHECK_FORMULA_WAVE where C_USER='" + cUser + "'");
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
    public String exportExcel(String id) {
        try {
            String sqlStr = "SELECT ID,TABCODE,CHECK_FORMULA,START_DATE,END_DATE,VALID_FLAG,CHECK_RISK,DEVIATION_VALUE,CHECK_FORMULA_MARK,AUTO_COMPUTE_FLAG,C_USER FROM DY.DY_CHECK_FORMULA_WAVE WHERE 1=1";
            if (StrUtil.isNotNull(id)) {
                sqlStr += " AND ID IN (" + StrUtil.convertQuoMarksSQL(id) + ")";
            }
            return exportExlUtil.doWbExcel("校验公式.xls", 2, 0, sqlStr,null,null);
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
    public DyCheckFormulaWave fetchToEditCheckFormula(String id) {
        return this.fetch(id);
    }

    @Override
    public DyCheckFormulaWave updateCheckFormulaValidFlag(String id, String validFlag, SysUser sysUser) {
        DyCheckFormulaWave rtb = this.fetch(id);
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
            sn.setTitle("公式修订通知");
            sn.setReleaseDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
            sn.setReleaseUser(sysUser.getUserName());
            super.dao().insert(sn);
        }
        return rtb;
    }


    @Override
    public void updateCheckFormulaValidFlag2(String parent, String validFlag, String checkProject,SysUser sysUser) {
        String sqlStr;
        if(parent==null){
            sqlStr="UPDATE DY.DY_CHECK_FORMULA_WAVE SET VALID_FLAG = '" + validFlag + "' WHERE PARENT IS NULL AND CHECK_PROJECT = '" + checkProject + "'";
        }else{
            sqlStr="UPDATE DY.DY_CHECK_FORMULA_WAVE SET VALID_FLAG = '" + validFlag + "' WHERE PARENT = '" + parent + "' AND CHECK_PROJECT = '" + checkProject + "'";
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
    public List<String> getRdAutoFormulaList(String tableId) {
        Sql sql = Sqls.create("SELECT AUTO_FORMULA FROM DY.DY_AUTO_FORMULA WHERE TABLE_ID=@tableId");
        sql.params().set("tableId", tableId);
        return super.getListStringBySqlStr(sql);
    }

    @Override
    public void updateCheckFormula(DyCheckFormulaWave checkformula, SysUser sysUser , String userRole) {
        if ("admin".equals(userRole)||"4".equals(userRole)) {
            // 插入系统公告
            DyCheckFormulaWave oRc = this.fetch(checkformula.getId());// 获取旧版信息
            String OldFormula=FormulaEncrypt.getFormulaDecrypt(oRc.getCheckFormula());
            String newFormula=FormulaEncrypt.getFormulaDecrypt(checkformula.getCheckFormula());
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

            if (!oRc.getThisVersion().equals(checkformula.getThisVersion())) {
                isChanged = true;
                changeText.append("<p><span style=\"font-size:12px;\">原启用日期:&nbsp;" + oRc.getThisVersion() + "&nbsp;&nbsp;修改为:&nbsp;" + checkformula.getThisVersion() + "</span></p>");
            }
            if (!oRc.getLastVersion().equals(checkformula.getLastVersion())) {
                isChanged = true;
                changeText.append("<p><span style=\"font-size:12px;\">原停用日期:&nbsp;" + oRc.getLastVersion() + "&nbsp;&nbsp;修改为:&nbsp;" + checkformula.getLastVersion() + "</span></p>");
            }
            if (!oRc.getCheckFormulaMark().equals(checkformula.getCheckFormulaMark())) {
                isChanged = true;
                changeText.append("<p><span style=\"font-size:12px;\">原公式描述:&nbsp;" + oRc.getCheckFormulaMark() + "&nbsp;&nbsp;修改为:&nbsp;" + checkformula.getCheckFormulaMark() + "</span></p>");
            }

            if (isChanged) {
                SysNotice sn = new SysNotice();
                sn.setTitle("公式修订通知");
                sn.setContent(changeText.toString());
                sn.setReleaseDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
                sn.setReleaseUser(sysUser.getUserName());
                if(newFormula.contains("em_")){
                    sn.setSql_ef("UPDATE DY.DY_CHECK_FORMULA_WAVE SET TABCODE=" + convert(checkformula.getTabcode()) + ""
//					+ ",CHECK_FORMULA = "+ convert(newFormula) +""
                            + ",CHECK_FORMULA = "+ convert(FormulaEncrypt.getFormulaDecrypt1(newFormula)) +""
                            + ",START_DATE = "+ convert(checkformula.getThisVersion()) +""
                            + ",END_DATE = "+ convert(checkformula.getLastVersion()) +""
                            + ",VALID_FLAG = "+ convert(checkformula.getValidFlag()) +""
                            + ",CHECK_RISK = "+ convert(checkformula.getCheckRisk()) +""
                            + ",C_USER = "+ convert(checkformula.getcUser()) +""
                            + ",CHECK_FORMULA_MARK = "+ convert(checkformula.getCheckFormulaMark()) +""
                            + ",UPDATE_DATE = "+ convert(checkformula.getUpdateDate()) +""
                            + ",TYPE = "+ convert(checkformula.getType()) +""
                            + ",CHECK_AREA = "+ convert(checkformula.getCheckArea()) +""
                            + ",WHERE TABCODE = "+ convert(oRc.getTabcode()) +""
                            + ",CHECK_FORMULA = "+ convert(OldFormula) +""
                            + ",START_DATE = "+ convert(oRc.getThisVersion()) +""
                            + ",END_DATE = "+ convert(oRc.getLastVersion()) +""
                            + ",VALID_FLAG = "+ convert(oRc.getValidFlag()) +""
                            + ",CHECK_RISK = "+ convert(oRc.getCheckRisk()) +""
                            + ",C_USER = "+ convert(oRc.getcUser()) +"");
                    sn.setSql("UPDATE DY.DY_CHECK_FORMULA_WAVE SET TABCODE=" + convert(checkformula.getTabcode()) + ""
                            + ",CHECK_FORMULA = "+ convert(FormulaEncrypt.getFormulaDecrypt1(newFormula)) +""
                            + ",START_DATE = "+ convert(checkformula.getThisVersion()) +""
                            + ",END_DATE = "+ convert(checkformula.getLastVersion()) +""
                            + ",VALID_FLAG = "+ convert(checkformula.getValidFlag()) +""
                            + ",CHECK_RISK = "+ convert(checkformula.getCheckRisk()) +""
                            + ",C_USER = "+ convert(checkformula.getcUser()) +""
                            + ",CHECK_FORMULA_MARK = "+ convert(checkformula.getCheckFormulaMark()) +""
                            + ",UPDATE_DATE = "+ convert(checkformula.getUpdateDate()) +""
                            + ",TYPE = "+ convert(checkformula.getType()) +""
                            + ",CHECK_AREA = "+ convert(checkformula.getCheckArea()) +""
                            + ",WHERE TABCODE = "+ convert(oRc.getTabcode()) +""
                            + ",CHECK_FORMULA = "+ convert(OldFormula) +""
                            + ",START_DATE = "+ convert(oRc.getThisVersion()) +""
                            + ",END_DATE = "+ convert(oRc.getLastVersion()) +""
                            + ",VALID_FLAG = "+ convert(oRc.getValidFlag()) +""
                            + ",CHECK_RISK = "+ convert(oRc.getCheckRisk()) +""
                            + ",C_USER = "+ convert(oRc.getcUser()) +"");
                }else{
                    sn.setSql_ef("UPDATE DY.DY_CHECK_FORMULA_WAVE SET TABCODE=" + convert(checkformula.getTabcode()) + ""
//							+ ",CHECK_FORMULA = "+ convert(FormulaEncrypt.getFormulaEnctypt1(newFormula)) +""
                            + ",CHECK_FORMULA = "+ convert(newFormula) +""
                            + ",START_DATE = "+ convert(checkformula.getThisVersion()) +""
                            + ",END_DATE = "+ convert(checkformula.getLastVersion()) +""
                            + ",VALID_FLAG = "+ convert(checkformula.getValidFlag()) +""
                            + ",CHECK_RISK = "+ convert(checkformula.getCheckRisk()) +""
                            + ",C_USER = "+ convert(checkformula.getcUser()) +""
                            + ",CHECK_FORMULA_MARK = "+ convert(checkformula.getCheckFormulaMark()) +""
                            + ",UPDATE_DATE = "+ convert(checkformula.getUpdateDate()) +""
                            + ",TYPE = "+ convert(checkformula.getType()) +""
                            + ",CHECK_AREA = "+ convert(checkformula.getCheckArea()) +""
                            + ",WHERE TABCODE = "+ convert(oRc.getTabcode()) +""
                            + ",CHECK_FORMULA = "+ convert(OldFormula) +""
                            + ",START_DATE = "+ convert(oRc.getThisVersion()) +""
                            + ",END_DATE = "+ convert(oRc.getLastVersion()) +""
                            + ",VALID_FLAG = "+ convert(oRc.getValidFlag()) +""
                            + ",CHECK_RISK = "+ convert(oRc.getCheckRisk()) +""
                            + ",C_USER = "+ convert(oRc.getcUser()) +"");
                    sn.setSql("UPDATE DY.DY_CHECK_FORMULA_WAVE SET TABCODE=" + convert(checkformula.getTabcode()) + ""
                            + ",CHECK_FORMULA = "+ convert(newFormula) +""
                            + ",START_DATE = "+ convert(checkformula.getThisVersion()) +""
                            + ",END_DATE = "+ convert(checkformula.getLastVersion()) +""
                            + ",VALID_FLAG = "+ convert(checkformula.getValidFlag()) +""
                            + ",CHECK_RISK = "+ convert(checkformula.getCheckRisk()) +""
                            + ",C_USER = "+ convert(checkformula.getcUser()) +""
                            + ",CHECK_FORMULA_MARK = "+ convert(checkformula.getCheckFormulaMark()) +""
                            + ",UPDATE_DATE = "+ convert(checkformula.getUpdateDate()) +""
                            + ",TYPE = "+ convert(checkformula.getType()) +""
                            + ",CHECK_AREA = "+ convert(checkformula.getCheckArea()) +""
                            + ",WHERE TABCODE = "+ convert(oRc.getTabcode()) +""
                            + ",CHECK_FORMULA = "+ convert(OldFormula) +""
                            + ",START_DATE = "+ convert(oRc.getThisVersion()) +""
                            + ",END_DATE = "+ convert(oRc.getLastVersion()) +""
                            + ",VALID_FLAG = "+ convert(oRc.getValidFlag()) +""
                            + ",CHECK_RISK = "+ convert(oRc.getCheckRisk()) +""
                            + ",C_USER = "+ convert(oRc.getcUser()) +"");
                }
                super.dao().insert(sn);
            }
        }
        checkformula.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
        super.dao().update(checkformula);

    }


    @Override
    public int getcountParentId(String tabcode,String tab,String i,String type,String c_user,String cUser ) {
        return super.count(Cnd.where(tab, "=", tabcode).and(type, "=", i).and(c_user, "=", cUser));
    }

    @Override
    public void delFormula(String tabcode, String type, String element,String checkProject) {
        String sqlStr="DELETE FROM DY.DY_CHECK_FORMULA_WAVE WHERE TABCODE='"+tabcode+"' AND TYPE='"+type+"' AND ELEMENT='"+element+"' AND CHECK_PROJECT='"+checkProject+"'";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }


    @Override
    public List<DyCheckFormulaWave> getList(String cUser,List<String> brNo) {
        String  databaseType= Mvcs.ctx().getDefaultIoc().get(String.class, "driver");
        String sqlStr;
        if("oracle.jdbc.driver.OracleDriver".equals(databaseType)){
            sqlStr="SELECT * FROM(SELECT rank()over(PARTITION BY tabcode,check_project,type ORDER BY start_date DESC ,id DESC )AS row_num,a.* FROM DY.DY_CHECK_FORMULA_WAVE a WHERE (TYPE='2' or type='3') and C_USER='"+cUser+"')t WHERE t.row_num=1 ORDER BY t.tabcode,length(substr(t.element,1,instr(t.element,'_')-1)),substr(t.element,1,instr(t.element,'_')-1),t.element";
        }
        else{ sqlStr="SELECT * FROM(SELECT rank()over(PARTITION BY tabcode,check_project,type ORDER BY start_date DESC ,id DESC )AS row_num,a.* FROM DY.DY_CHECK_FORMULA_WAVE a WHERE (TYPE='2' or type='3') and C_USER='"+cUser+"')t WHERE t.row_num=1 ORDER BY t.tabcode,length(substr(t.element,1,locate('_',t.element)-1)),substr(t.element,1,locate('_',t.element)-1),t.element";
        }
        Sql sql = Sqls.create(sqlStr.toString());
        return super.getListObjectBySql(sql,DyCheckFormulaWave.class);
    }

    @Override
    public DyCheckFormulaWave EditCheckFormula(String parent, String element) {
        String databaseType=Mvcs.ctx().getDefaultIoc().get(String.class,"db-drive");
        String sqlStr;
        if("oracle.jdbc.driver.OracleDriver".equals(databaseType)){
            sqlStr="SELECT * FROM DY.DY_CHECK_FORMULA_WAVE WHERE PARENT='"+parent+"' AND ELEMENT='"+element+"' AND ROWNUM=1";
        }
        else{ sqlStr="SELECT * FROM DY.DY_CHECK_FORMULA_WAVE WHERE PARENT='"+parent+"' AND ELEMENT='"+element+"' fetch first rows only";
        }
        Sql sql = Sqls.create(sqlStr.toString());
        return super.getObjectBySql(sql,null,null);
    }

    @Override
    public List<DyCheckFormulaWave> EditCheckFormulas(String checkProject,String type,String parent,String cUser) {
        String sqlStr="SELECT * FROM DY.DY_CHECK_FORMULA_WAVE WHERE PARENT='" + parent + "' AND CHECK_PROJECT='"+ checkProject +"' AND TYPE='" + type + "' and C_USER='"+cUser+"' ORDER BY START_DATE DESC,REPORT_RATE DESC";
        Sql sql = Sqls.create(sqlStr.toString());
        return super.getListObjectBySql(sql,DyCheckFormulaWave.class);
    }

    @Override
    public void deleteFormula(String parent, String id) {
        String sqlStr;
        if(parent==null){
            sqlStr="DELETE FROM DY.DY_CHECK_FORMULA_WAVE WHERE id='"+id+"' OR PARENT= '"+ id +"'";
        }else{
            sqlStr="DELETE FROM DY.DY_CHECK_FORMULA_WAVE WHERE id='"+id+"'";
        }
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);

    }

    @Override
    public DyCheckFormulaWave getCPbyId(String id) {
        String sqlStr="SELECT * FROM DY.DY_CHECK_FORMULA_WAVE WHERE ID = '" + id + "'";
        Sql sql = Sqls.create(sqlStr.toString());
        return super.getObjectBySql(sql,null,null);
    }

    @Override
    public void updateCheckFormula(DyCheckFormulaWave checkformula, String userId) {
        checkformula.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
        super.dao().update(checkformula);
    }

    @Override
    public List<DyCheckFormulaWave> getAll()
    {
        String sqlStr = "SELECT * FROM DY.DY_CHECK_FORMULA_WAVE";
        List<DyCheckFormulaWave> list=super.getListBySql(sqlStr, null, null);
        return list;
    }

    @Override
    public List<DyCheckFormulaWave> getCheckFormulaListByTabCodesRepay(List<String> tabCodes, String reportDate, String cUser, String formulaType,String area) {
        StringBuffer sqlCon = new StringBuffer(" VALID_FLAG='y'");
        String startDate = reportDate + "01";
        int maxDays = DateUtil.getMonthMaxDays(DateUtil.parse(startDate, DateUtil.FORMAT_DATE_SHORT));
        String Area[] = area.split("_");
        if(("1").equals(formulaType)||("2").equals(formulaType))
        {
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
    public List<DyCheckFormulaWave> getCheckFormulaListByTabCodesSummary(List<String> tabCodes, String reportDate, String cUser, String formulaType,String area) {
        StringBuffer sqlCon = new StringBuffer(" VALID_FLAG='y'");
        String startDate = reportDate + "01";
        int maxDays = DateUtil.getMonthMaxDays(DateUtil.parse(startDate, DateUtil.FORMAT_DATE_SHORT));
        if(("1").equals(formulaType)||("2").equals(formulaType))
        {
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

    private String convert(Object param){
        if(param==null){
            return null;
        }
        return "'" + param.toString() + "'";
    }

    @Override
    public void delAll() {
        String sqlStr="DELETE FROM DY.DY_CHECK_FORMULA_WAVE";
        Sql sql = Sqls.create(sqlStr);
        dao().execute(sql);
    }


    @Override
    public void add(DyCheckFormulaWave item) {
        dao().insert(item);
    }

    @Override
    public List<DyCheckFormulaWave> getCheckFormulaListByTabCodes(List<String> tabCodes, String reportDate, String cUser, String formulaType,String checkArea,String area,String brnoType) {
        StringBuffer sqlCon = new StringBuffer(" VALID_FLAG='y'");
        String startDate = reportDate + "01";
        int maxDays = DateUtil.getMonthMaxDays(DateUtil.parse(startDate, DateUtil.FORMAT_DATE_SHORT));
        String Area[]=area.split("_");
        //公式类型区分('1'代表普通,'2'代表异动)
        if(("1").equals(formulaType)||("2").equals(formulaType))
        {
            sqlCon.append(" AND TYPE = '" + formulaType + "'");
        }
        //校验范围区分(表内校验,表外校验)
        if(("1".equals(checkArea))){
            sqlCon.append(" AND TABCODE NOT LIKE '%@%' ");
        }else if(("2").equals(checkArea)){
            sqlCon.append(" AND TABCODE LIKE '%@%' ");
        }

        sqlCon.append(" AND START_DATE <= '" + startDate + "'");
        sqlCon.append(" AND END_DATE >= '" + reportDate + maxDays + "'");
        sqlCon.append(" AND C_USER IN ('admin','" + cUser + "')");
        sqlCon.append(" AND CHECK_AREA IN ('ALL','" + Area[0] + "')");
        if(formulaType.equals("2")){
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
    public DyCheckFormulaWave getCPbyTabcode(SysUser sysUser,String tabcode,String versionNo,String element,String cUser,List<String> brNos,String searchBrno) {
        String sqlStr="";
        if(sysUser.getUserId().equals("admin")){
            if(StrUtil.isNull(searchBrno)){
                searchBrno="JSS_NJS_XXTJK";
            }
        }
        String  databaseType=Mvcs.ctx().getDefaultIoc().get(String.class, "driver");
        if("oracle.jdbc.driver.OracleDriver".equals(databaseType)){
            if(StrUtil.isNull(searchBrno)){
                sqlStr="SELECT * FROM DY.DY_CHECK_FORMULA WHERE TYPE='2' AND TABCODE='"+tabcode+"' AND  START_DATE='"+versionNo+"' AND ELEMENT='"+element+"' AND C_USER='"+cUser+"'  AND CHECK_BRNO IN (" + StrUtil.convertJoin(brNos, ",") + ") AND rownum <=1";
            }else{
                sqlStr="SELECT * FROM DY.DY_CHECK_FORMULA WHERE TYPE='2' AND TABCODE='"+tabcode+"' AND  START_DATE='"+versionNo+"' AND ELEMENT='"+element+"' AND C_USER='"+cUser+"'  AND CHECK_BRNO IN (" + StrUtil.convertQuoMarksSQL(searchBrno) + ")  AND rownum <=1";
            }
        }else{
            if(StrUtil.isNull(searchBrno)){
                sqlStr="SELECT * FROM DY.DY_CHECK_FORMULA WHERE TYPE='2' AND TABCODE='"+tabcode+"' AND  START_DATE='"+versionNo+"' AND ELEMENT='"+element+"' AND C_USER='"+cUser+"'  AND CHECK_BRNO IN (" + StrUtil.convertJoin(brNos, ",") + ") fetch first 1 rows only";
            }else{
                sqlStr="SELECT * FROM DY.DY_CHECK_FORMULA WHERE TYPE='2' AND TABCODE='"+tabcode+"' AND  START_DATE='"+versionNo+"' AND ELEMENT='"+element+"' AND C_USER='"+cUser+"'  AND CHECK_BRNO IN (" + StrUtil.convertQuoMarksSQL(searchBrno) + ") fetch first 1 rows only";
            }
        }
        Sql sql = Sqls.create(sqlStr.toString());
        return super.getObjectBySql(sql,null,null);
    }


    @Override
    public List<DyCheckFormulaWave> EditCheckFormulasByElement(SysUser sysUser,String tabcode,String versionNo,String element,String cUser,List<String> brNos,String searchBrno) {
        String sqlStr="";
        if(sysUser.getUserId().equals("admin")){
            if(StrUtil.isNull(searchBrno)){
                searchBrno="JSS_NJS_XXTJK";
            }
        }
        if(StrUtil.isNull(searchBrno)){
            sqlStr="SELECT * FROM DY.DY_CHECK_FORMULA WHERE TYPE='2' AND TABCODE='"+tabcode+"' AND START_DATE='"+versionNo+"' AND ELEMENT='"+element+"' AND C_USER='"+cUser+"' AND CHECK_BRNO IN (" + StrUtil.convertJoin(brNos, ",") + ")";
        }else{
            sqlStr="SELECT * FROM DY.DY_CHECK_FORMULA WHERE TYPE='2' AND TABCODE='"+tabcode+"' AND START_DATE='"+versionNo+"' AND ELEMENT='"+element+"' AND C_USER='"+cUser+"' AND CHECK_BRNO IN (" + StrUtil.convertQuoMarksSQL(searchBrno) + ")";
        }
        Sql sql = Sqls.create(sqlStr.toString());
        return super.getListObjectBySql(sql,DyCheckFormulaWave.class);
    }



    @Override
    public String getParentId(String tabcode,String user) {
        String sql="SELECT ID FROM DY.DY_CHECK_FORMULA_WAVE WHERE TYPE='3' AND CHECK_PROJECT='"+tabcode+"' AND C_USER='"+user+"'";
        return singleString(sql);
    }


    @Override
    public Map<String, String> doInitDataMap(String tabCode,String versionNo,String cUser,String searchBrno) {
        List<DyCheckFormulaWave> formulaList=getYidongFormula(tabCode,versionNo,cUser,searchBrno);
        final Map<String, String> dataMap = new HashMap<String, String>();
        for (int i = 0;i < formulaList.size();i++) {
            String[] locate=formulaList.get(i).getElement().split("_");
            String key=locate[1]+"_"+locate[2];
            String value=formulaList.get(i).getCheckFormula();
            dataMap.put(key, value);
        }
        return dataMap;
    }

    private List<DyCheckFormulaWave> getYidongFormula(String tabCode,String versionNo,String cUser,String searchBrno) {
        String sql="";
        if(StrUtil.isNotNull(searchBrno)){
            sql="SELECT * FROM DY.DY_CHECK_FORMULA WHERE TYPE='2' AND TABCODE='" + tabCode + "' AND START_DATE='"+versionNo+"' AND  C_USER='"+cUser+"' AND CHECK_BRNO IN ("+StrUtil.convertQuoMarksSQL(searchBrno)+")";
        }else{
            sql="SELECT * FROM DY.DY_CHECK_FORMULA WHERE TYPE='2' AND TABCODE='" + tabCode + "' AND START_DATE='"+versionNo+"' AND  C_USER='"+cUser+"'";
        }
        return super.getListBySql(sql,null,null) ;
    }

    @Override
    public List<DyCheckFormulaWave> getCheckFormulaListByTabCodesForYD(
            String tabCode, String reportDate, String nowVersion,String lastVersion,String userId,
            String checkArea, String checkBrno,String checkType,String brNo) {
        StringBuffer sqlCon = new StringBuffer(" VALID_FLAG='y'");
        String Area[]=checkArea.split("_");
        //公式类型区分('1'代表普通,'2'代表异动)
        sqlCon.append(" AND TYPE = '2'");
        sqlCon.append(" AND THIS_VERSION = '" + nowVersion + "'");
        sqlCon.append(" AND LAST_VERSION = '" + lastVersion + "'");
        sqlCon.append(" AND C_USER IN ('admin','" + userId + "')");
        sqlCon.append(" AND CHECK_AREA IN ('ALL','" + Area[0] + "')");
        sqlCon.append(" AND CHECK_BRNO = '"+brNo+"'");
        sqlCon.append(" AND REPORT_RATE like '%"+checkType+"%'");
        sqlCon.append(" AND TABCODE='"+tabCode+"'");
        return super.query(Cnd.wrap(sqlCon.toString()), null);
    }


    @Override
    public Map<String, String> doInitDataMapCS(String tabCode,
                                               String versionNo, String cUser) {
        List<DyCheckFormulaWave> formulaList=getYidongFormulacs(tabCode,versionNo,cUser);
        final Map<String, String> dataMap = new HashMap<String, String>();
        for (int i = 0;i < formulaList.size();i++) {
            String[] locate=formulaList.get(i).getElement().split("_");
            String key=locate[1]+"_"+locate[2];
            String value=formulaList.get(i).getCheckFormula();
            dataMap.put(key, value);
        }
        return dataMap;
    }




    private List<DyCheckFormulaWave> getYidongFormulacs(String tabCode,
                                                        String versionNo, String cUser) {
        String sql="SELECT * FROM Dy.DY_CHECK_FORMULA_WAVE WHERE TYPE='2' AND TABCODE='" + tabCode + "' AND THIS_VERSION='"+versionNo+"' AND  C_USER='"+cUser+"'";
        return super.getListBySql(sql,null,null) ;
    }



    @Override
    public DyCheckFormulaWave getCPbyTabcodeCS(SysUser sysUser, String tabcode,
                                               String versionNo, String element, String cUser) {
        String  databaseType=Mvcs.ctx().getDefaultIoc().get(String.class, "driver");
        String sqlStr=null;
        if("oracle.jdbc.driver.OracleDriver".equals(databaseType)){
            sqlStr="SELECT * FROM DY.DY_CHECK_FORMULA_WAVE WHERE TYPE='2' AND TABCODE='"+tabcode+"' AND  THIS_VERSION='"+versionNo+"' AND ELEMENT='"+element+"' AND C_USER='admin' AND rownum <=1 ";
        }else{
            sqlStr="SELECT * FROM DY.DY_CHECK_FORMULA_WAVE WHERE TYPE='2' AND TABCODE='"+tabcode+"' AND  THIS_VERSION='"+versionNo+"' AND ELEMENT='"+element+"' AND C_USER='admin' fetch first 1 rows only";
        }
        Sql sql = Sqls.create(sqlStr.toString());
        return super.getObjectBySql(sql,null,null);
    }

    @Override
    public List<DyCheckFormulaWave> EditCheckFormulasByElementCS(
            SysUser sysUser, String tabcode, String versionNo, String element,
            String cUser) {
        String sqlStr="SELECT * FROM DY.DY_CHECK_FORMULA_WAVE WHERE TYPE='2' AND TABCODE='"+tabcode+"' AND THIS_VERSION='"+versionNo+"' AND ELEMENT='"+element+"' AND C_USER='admin'";
        Sql sql = Sqls.create(sqlStr.toString());
        return super.getListObjectBySql(sql,DyCheckFormulaWave.class);
    }

    @Override
    public List<DyCheckFormulaWave> getCheckFormulaListByTabCodesCS(
            String tabCode, String reportRate, String nowVersion,
            String lastVersion) {
        StringBuffer sqlCon = new StringBuffer(" VALID_FLAG='y'");
        //公式类型区分('1'代表普通,'2'代表异动)
        sqlCon.append(" AND TYPE = '2'");
        sqlCon.append(" AND THIS_VERSION = '" + nowVersion + "'");
        sqlCon.append(" AND LAST_VERSION = '" + lastVersion + "'");
        sqlCon.append(" AND C_USER in ('admin','197')");
        sqlCon.append(" AND REPORT_RATE like '%"+reportRate+"%'");
        sqlCon.append(" AND TABCODE='"+tabCode+"'");
        return super.query(Cnd.wrap(sqlCon.toString()), null);
    }
}

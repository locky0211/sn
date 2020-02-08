package com.efraiser.test.db.service.rd.rdoperaterecord.impl;

import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.vo.RdAuditScheduleHelp;
import com.efraiser.test.db.model.rd.RdOperateRecord;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.rd.rdoperaterecord.RdOperateRecordService;
import com.efraiser.test.db.service.rd.rdremarks.RdRemarksService;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class RdOperateRecordServiceImpl extends BaseServiceImpl<RdOperateRecord> implements RdOperateRecordService {

    @Autowired
    private RdRemarksService rdRemarksService;

    @Autowired
    private SysBmglService sysBmglService;


    @Override
    public List<RdAuditScheduleHelp> showRdAuditSchedule(String reportDate, String tabType) {
        String startDate = reportDate + "01";
        int maxDays = DateUtil.getMonthMaxDays(DateUtil.parse(startDate, DateUtil.FORMAT_DATE_SHORT));
        String sqlStr = "SELECT DISTINCT BM_CODE  FROM SYS_BMGL A INNER JOIN RD_TABLE_INFO B ON A.BM_CATEGORY=B.TAB_BR_TYPE AND INSTR(B.REPORT_ORGAN_TYPES,A.BM_TYPE)>0 LEFT JOIN RD_TABLE_BASIC_INFO C ON C.TABCODE=B.TABCODE WHERE B.START_DATE<=@startDate AND B.END_DATE>=@endDate AND B.TAB_TYPE=@tabType AND A.BM_TYPE='R' AND C.STATUS='y'";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("tabType", tabType);
        sql.params().set("startDate", startDate);
        sql.params().set("endDate", reportDate + maxDays);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                List<String> list = new ArrayList<>();
                while (rs.next()) {
                    list.add(rs.getString(1));
                }
                return list;
            }
        });
        this.dao().execute(sql);
        List<String> list = sql.getList(String.class);
        List<RdAuditScheduleHelp> im = new ArrayList<>();//导入成功
        List<RdAuditScheduleHelp> imf = new ArrayList<>();//未导入
        for (String organNo : list) {
            RdAuditScheduleHelp bf = new RdAuditScheduleHelp();
            bf.setOrganNo(organNo);
            bf.setReportDate(reportDate);
            bf.setTabType(tabType);
            int temp1 = calculate(tabType, organNo, reportDate);
            int temp2 = findCount(reportDate, tabType, organNo, "I");//已经导入的报表数量
            if (temp1 < temp2 || temp1 == temp2) {
                bf.setImportFlag("1");//已经导入
                im.add(bf);
            } else {
                bf.setImportFlag("0");//未导入
                bf.setCheckFlag("0");
                bf.setAuditFlag("0");
                imf.add(bf);
            }
        }
        for (RdAuditScheduleHelp bf : im) {
            int temp1 = calculate(tabType, bf.getOrganNo(), reportDate);
            int temp2 = findCount(reportDate, tabType, bf.getOrganNo(), "C");//已经校验过报表的数量
            int temp3 = findCount(reportDate, tabType, bf.getOrganNo(), "C1");//检验不通过的报表数量
            if (temp1 == temp2) {
                if (temp3 != 0) {
                    bf.setCheckFlag("1");//校验不通过
                } else {
                    bf.setCheckFlag("2");//校验通过
                }
            } else {
                bf.setCheckFlag("0");//未校验
            }
        }
        for (RdAuditScheduleHelp bf : im) {
            int temp1 = calculate(tabType, bf.getOrganNo(), reportDate);
            int temp2 = findCount(reportDate, tabType, bf.getOrganNo(), "A");//已经审核报表的数量
            int temp3 = findCount(reportDate, tabType, bf.getOrganNo(), "A1");//待审核报表的数量
            int temp4 = findCount(reportDate, tabType, bf.getOrganNo(), "A3");//审核不通过报表的数量
            if (temp2 != 0) {
                if (temp3 != 0 && temp4 == 0) {
                    bf.setAuditFlag("1");//正在进行审核
                }
                if (temp4 != 0) {
                    bf.setAuditFlag("2");//审核不通过
                }
                if (temp3 == 0 && temp4 == 0) {
                    bf.setAuditFlag("3");//审核通过
                }
            } else {
                bf.setAuditFlag("0");//未进行审核
            }
        }
        im.addAll(imf);
        return im;
    }

    private int findCount(String reportDate, String tabType, String organNo, String param) {
        String startDate = reportDate + "01";
        int maxDays = DateUtil.getMonthMaxDays(DateUtil.parse(startDate, DateUtil.FORMAT_DATE_SHORT));
        String sqlStr = "SELECT COUNT(1) FROM RD_OPERATE_RECORD A INNER JOIN RD_TABLE_INFO B ON INSTR(A.REPORTCODE,B.TABCODE)>0 INNER JOIN SYS_BMGL C ON A.BMCODE=C.BM_CODE AND B.TAB_BR_TYPE=C.BM_CATEGORY AND INSTR(B.REPORT_ORGAN_TYPES,C.BM_TYPE)>0 WHERE A.REPORTDATE=@reportDate AND B.TAB_TYPE=@tabType AND A.BMCODE=@organNo AND A.STATUSTYPE LIKE '%$param%' AND B.START_DATE<=@startDate AND B.END_DATE>=@endDate";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("reportDate", reportDate);
        sql.params().set("tabType", tabType);
        sql.params().set("organNo", organNo);
        sql.vars().set("param", param);
        String date = reportDate + "01";
        sql.params().set("startDate", startDate);
        sql.params().set("endDate", reportDate + maxDays);
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                if (rs.next()) {
                    return rs.getInt(1);
                }
                return 0;
            }
        });
        this.dao().execute(sql);
        return sql.getInt();
    }

    @Override
    public int calculate(String tabType, String organNo, String reportDate) {
	  /*String sqlStr="SELECT COUNT(1) FROM RD_TABLE_INFO A INNER JOIN SYS_BMGL B ON  INSTR(A.REPORT_ORGAN_TYPES,B.BM_TYPE)>0 AND B.BM_CATEGORY=A.TAB_BR_TYPE  WHERE A.TAB_TYPE=@tabType AND B.BM_CODE=@organNo AND A.START_DATE<@date AND A.END_DATE>@date ";
	  Sql sql=Sqls.create(sqlStr);
	  sql.params().set("tabType", tabType);
	  sql.params().set("organNo", organNo);
	  sql.params().set("date", reportDate+"30");*/
        SysBmgl bmgl = SysBmglCache.getBmglInfo(organNo);
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("SELECT t.TABCODE  FROM(");
        sqlStr.append(" SELECT row_number() over(partition by tabcode order by END_DATE) as row_num,ti.*,ri.REPORT_ID,ri.UPDATE_DATE,ri.ERROR_MSG FROM RD_TABLE_INFO ti  LEFT JOIN RD_REPORT_INFO ri");
        sqlStr.append(" ON (ti.TABLE_ID=ri.TABLE_ID AND ri.DATA_TYPE='1' AND ri.REPORT_DATE=@reportDate AND ri.BR_NO=@brNo)");
        sqlStr.append(" WHERE EXISTS(SELECT 1 FROM RD_TABLE_ORGANS ro WHERE ro.TABLE_ID=ti.TABLE_ID AND ro.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND ti.TAB_TYPE=@tabType");
        sqlStr.append(" AND (ti.TAB_BR_TYPE=@tabBrType OR ti.TAB_BR_TYPE='法人分支')");
        sqlStr.append(" AND @sysDate BETWEEN ti.start_date AND ti.end_date");
        sqlStr.append(") t  LEFT JOIN RD_TABLE_BASIC_INFO A ON A.TABCODE=t.TABCODE WHERE A.STATUS='y'");
        sqlStr.append("   ORDER BY  t.TABCODE");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.params().set("brNo", organNo);
        sql.params().set("tabBrType", bmgl.getBmCategory());
        sql.params().set("organType", bmgl.getBmType());
        sql.params().set("tabType", tabType);
        sql.params().set("reportDate", reportDate);
        sql.params().set("sysDate", reportDate + "01");
        sql.setCallback(new SqlCallback() {

            @Override
            public Object invoke(Connection conn, ResultSet rs, Sql sql) throws SQLException {
                List<String> list = new ArrayList<>();
                while (rs.next()) {
                    list.add(rs.getString(1));
                }
                return list;
            }
        });

        this.dao().execute(sql);
        return sql.getList(String.class).size();
    }
}

package com.efraiser.test.db.service.dy.dyvaluechangerecord.impl;

import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyValueChangeRecord;
import com.efraiser.test.db.model.dy.DyValueChangeRecordHelper;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dyvaluechangerecord.DyValueChangeRecordService;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DyValueChangeRecordServiceImpl extends BaseServiceImpl<DyValueChangeRecord> implements DyValueChangeRecordService {

    @Override
    public List<DyValueChangeRecordHelper> getValueChangeRecord(String userId,
                                                                String date, String tabCode) {
        String sqlStr ="SELECT b.REPORT_ID,GET_BM_NAME(BR_NO) AS ORGAN_NO,b.REPORT_DATE,d.TABCODE,c.USER_NAME,a.CHANGE_LOCATE,a.ORIGINAL_VALUE,a.PRESENT_VALUE,a.UPDATE_DATE,b.BR_NO FROM DY.DY_VALUE_CHANGE_RECORD a LEFT JOIN DY.DY_REPORT_INFO b ON a.REPORT_ID=b.REPORT_ID LEFT JOIN SYS_USER c ON a.USER_ID=c.USER_ID LEFT JOIN DY.DY_TABLE_INFO d ON b.TABLE_ID=d.TABLE_ID WHERE b.REPORT_ID IS NOT NULL $userId $date $tabCode ORDER BY a.CHANGE_LOCATE,a.UPDATE_DATE ASC";
        Sql sql = Sqls.create(sqlStr);
        if (StrUtil.isNotNull(userId)) {
            sql.vars().set("userId", " AND A.USER_ID='" + userId + "'");
        }
        if (StrUtil.isNotNull(date)) {
            sql.vars().set("date", " AND B.REPORT_DATE='" + date + "'");
        }
        if (StrUtil.isNotNull(tabCode)) {
            sql.vars().set("tabCode", " AND D.TABCODE='" + tabCode + "'");
        }
        List<DyValueChangeRecordHelper> lists=this.getListObjectBySql(sql,DyValueChangeRecordHelper.class);
        return lists;
    }
}

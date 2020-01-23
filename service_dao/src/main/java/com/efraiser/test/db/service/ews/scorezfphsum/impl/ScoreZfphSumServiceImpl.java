package com.efraiser.test.db.service.ews.scorezfphsum.impl;

import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.ews.ScoreZfphSum;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.ews.scorezfphsum.ScoreZfphSumService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScoreZfphSumServiceImpl extends BaseServiceImpl<ScoreZfphSum> implements ScoreZfphSumService {

    public List<ScoreZfphSum> getScoreZfphSumList(String brNo, String reportDate, String myField) {
        String sqlStr = "select ID,ZBBH,ZBMC,SJBH,ZBYE,GET_BM_NAME(BRNO) AS BRNO,NBJGH,SJRQ,PARENT,case when PARENT is null OR PARENT=''   then 'false' else 'true' end as isLeaf  ,'false' expanded from SAM.SCORE_ZFPH_SUM where ID is not null ";
        brNo = StrUtil.convertQuoMarksSQL(brNo);
        if (StrUtil.isNotNull(brNo) && StrUtil.isNotNull(reportDate)) {
            sqlStr += " and BRNO in (" + brNo + ")";
            sqlStr += " and sjrq = '" + reportDate.replace("-", "") + "'";
        }
        if (StrUtil.isNotNull(myField) ) {
            sqlStr += " and PARENT in ('" + myField + "')";
        }else {
            sqlStr += " AND  (PARENT is NULL OR PARENT='') ";
        }
        sqlStr+=" ORDER BY SJRQ,BRNO,NBJGH,ZBBH";
        return super.getListBySql(sqlStr, null, null);
    }
}

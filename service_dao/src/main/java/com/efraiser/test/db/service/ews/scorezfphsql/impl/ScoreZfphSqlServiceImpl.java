package com.efraiser.test.db.service.ews.scorezfphsql.impl;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.ews.ScoreZfphSql;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.ews.scorezfphsql.ScoreZfphSqlService;
import org.nutz.dao.Cnd;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.springframework.stereotype.Service;

@Service
public class ScoreZfphSqlServiceImpl extends BaseServiceImpl<ScoreZfphSql> implements ScoreZfphSqlService {

    @Override
    public GridQueryPageResult getScoreZfphSqlList(String zbbh, String zbmc, String staSql, String sqlExplain, String sqlState, int pageIndex, int pageSize){
        Criteria cri = Cnd.cri();
        String sqlStr="select count(*) from sam.score_zfph_sql where ZBBH is not null ";
        if(StrUtil.isNotNull(zbbh)){
            cri.where().and("zbbh","like",'%'+ zbbh +'%');
            sqlStr+="and zbbh like '%"+ zbbh +"%' ";
        }

        if(StrUtil.isNotNull(zbmc)){
            cri.where().and("zbmc","like",'%'+ zbmc +'%');
            sqlStr+="and zbmc like '%"+ zbmc +"%' ";
        }

        if(StrUtil.isNotNull(staSql)){
            cri.where().and("staSql","like",'%'+ staSql +'%');
            sqlStr+="and staSql like '%"+ staSql +"%' ";
        }

        if(StrUtil.isNotNull(sqlExplain)){
            cri.where().and("sqlExplain","like",'%'+ sqlExplain +'%');
            sqlStr+="and sqlExplain like '%"+ sqlExplain +"%' ";
        }

        if(StrUtil.isNotNull(sqlState)){
            cri.where().and("sqlState","like",'%'+ sqlState +'%');
            sqlStr+="and sqlState like '%"+ sqlState +"%' ";
        }

        Pager pager = this.dao().createPager(pageIndex+1, pageSize);
        GridQueryPageResult gqpr = new GridQueryPageResult();
        gqpr.setData(dao().query(ScoreZfphSql.class,cri,pager));
        gqpr.setTotal(super.singleInt(sqlStr));
        return gqpr;
    }

    @Override
    public void addScoreZfphSql(ScoreZfphSql scoreZfpgSql){
        scoreZfpgSql.setSqlState("1");
        dao().insert(scoreZfpgSql);
    }

    @Override
    public void updateScoreZfphSql(ScoreZfphSql scoreZfpgSql){
        dao().updateIgnoreNull(scoreZfpgSql);
    }


    @Override
    public ScoreZfphSql updateCheckSqlState(String zbbh){
        ScoreZfphSql scoreZfpgSql = super.fetch(zbbh);
        if(scoreZfpgSql.getSqlState().equals("1")){
            scoreZfpgSql.setSqlState("0");
        }else{
            scoreZfpgSql.setSqlState("1");
        }
        dao().update(scoreZfpgSql);
        return super.fetch(zbbh);
    }

    @Override
    public boolean checkZbbhIsOnly(String zbbh,String column){
        return super.count(Cnd.wrap(column + "='" + zbbh+"'"))>0;
    }
}

package com.efraiser.test.db.service.ews.scorezfphsql;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.ews.ScoreZfphSql;
import com.efraiser.test.db.service.BaseService;

public interface ScoreZfphSqlService extends BaseService {

    /**
     * 查询所有
     *
     * @param zbbh
     * @param zbmc
     * @param staSql
     * @param sqlExplain
     * @param sqlState
     * @param pageIndex
     * @param pageSize
     * @return
     */
    GridQueryPageResult getScoreZfphSqlList(String zbbh, String zbmc, String staSql, String sqlExplain, String sqlState, int pageIndex, int pageSize);

    /**
     * 添加
     */
    void addScoreZfphSql(ScoreZfphSql scoreZfpgSql);

    /**
     * 更新
     *
     * @param scoreZfpgSql
     */
    void updateScoreZfphSql(ScoreZfphSql scoreZfpgSql);

    /**
     * 状态判断
     *
     * @param zbbh
     * @return
     */
    ScoreZfphSql updateCheckSqlState(String zbbh);

    /**
     * 判断主键唯一性
     *
     * @param zbbh
     * @param column
     * @return
     */
    boolean checkZbbhIsOnly(String zbbh, String column);
}

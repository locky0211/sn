package com.efraiser.test.db.service.dy.dyindicatorsinfo.impl;

import com.efraiser.test.common.config.LocalConfig;
import com.efraiser.test.db.model.dy.DyIndicatorsBasicInfo;
import com.efraiser.test.db.model.dy.DyIndicatorsInfo;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.dy.dyindicatorsbasicinfo.DyIndicatorsBasicInfoService;
import com.efraiser.test.db.service.dy.dyindicatorsbasicinfo.impl.DyIndicatorsBasicInfoServiceImpl;
import com.efraiser.test.db.service.dy.dyindicatorsinfo.DyIndicatorsInfoService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class DyIndicatorsInfoServiceImpl extends BaseServiceImpl<DyIndicatorsInfo> implements DyIndicatorsInfoService {

    @Autowired
    private DyIndicatorsBasicInfoService dyIndicatorsBasicInfoService;

    @Autowired
    private LocalConfig localConfig;


    @Override
    public DyIndicatorsInfo getDyIndicatorsInfo(String indName, String versionNo) {
        return this.fetch(Cnd.where("IND_NAME", "=", indName).and("VERSION_NO", "=", versionNo));
    }

    @Override
    public void addOrUpdateIndicatorsInfo(DyIndicatorsBasicInfo indicatorsBasicInfo, DyIndicatorsInfo indicatorsInfo, String model) throws Exception {
        DyIndicatorsBasicInfoServiceImpl dyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl) dyIndicatorsBasicInfoService;

        dyIndicatorsBasicInfoServiceImpl.clear(Cnd.where("IND_NAME", "=", indicatorsBasicInfo.getIndName()));
        dyIndicatorsBasicInfoServiceImpl.dao().fastInsert(indicatorsBasicInfo);
        // 插入报表信息
        if ("add".equals(model)) {
            super.dao().fastInsert(indicatorsInfo);
        } else {
            super.dao().update(indicatorsInfo);
        }
    }

    @Override
    public boolean isExistsIndicatorsVserionNo(String bId, String versionDate) {
        int count = this.count(Cnd.where("bId", "=", bId).and("VERSION_DATE", "=", versionDate));
        if (count > 0) {
            return true;
        }
        return false;
    }


    @Override
    public List<DyIndicatorsInfo> getDicatorsList(String sysdate) {
        StringBuffer sqlstr = new StringBuffer();
        sqlstr.append("select a.* from dy.dy_indicators_info a,dy.dy_indicators_basic_info b where a.ind_name=b.ind_name");
        sqlstr.append(" and @sysdate between start_date and end_date and b.valid_flag='y' order by b.sort_num");
        Sql sql = Sqls.create(sqlstr.toString());
        sql.params().set("sysdate", sysdate);
        return super.getListBySql(sql);
    }

    @Override
    public List<DyIndicatorsBasicInfo> getIndListsForBrNo(String brNo) {
        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        String sqlStr = "SELECT * FROM DY.DY_INDICATORS_BASIC_INFO bi WHERE  bi.VALID_FLAG='y' AND bi.IS_PARENT='n' AND bi.IND_BR_TYPE='"
                + bmgl.getBmCategory() + "' "
                + "AND EXISTS(SELECT 1 FROM DY.DY_INDICATORS_ORGANS io WHERE bi.ID=io.IND_ID AND io.organ_type=@oType) ORDER BY bi.SORT_NUM";
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("oType", bmgl.getBmType());
        return super.getListObjectBySql(sql, DyIndicatorsBasicInfo.class);
    }

    @Override
    public DyIndicatorsInfo getDyIndicatorsInfoByBid(String bId, String dataDate) {
        String databaseType = localConfig.getDriver();
        String sqlStr;
        if ("oracle.jdbc.driver.OracleDriver".equals(databaseType)) {
            sqlStr = "SELECT * FROM(SELECT ri.*,ROW_NUMBER() OVER(ORDER BY bi.SORT_NUM) AS \"ROWNUM\" FROM DY.DY_INDICATORS_BASIC_INFO bi,DY.DY_INDICATORS_INFO ri "
                    + "WHERE ri.B_ID=bi.ID AND bi.VALID_FLAG='y' AND bi.IS_PARENT='n' AND ri.B_ID=@bId  AND ri.START_DATE<=@sDate "
                    + "AND ri.END_DATE>=@eDate) t WHERE t.\"ROWNUM\"=1";
        } else {
            sqlStr = "SELECT * FROM(SELECT ri.*,ROW_NUMBER() OVER() AS ROWNUM FROM DY.DY_INDICATORS_BASIC_INFO bi,DY.DY_INDICATORS_INFO ri "
                    + "WHERE ri.B_ID=bi.ID AND bi.VALID_FLAG='y' AND bi.IS_PARENT='n' AND ri.B_ID=@bId  AND ri.START_DATE<=@sDate "
                    + "AND ri.END_DATE>=@eDate  ORDER BY bi.SORT_NUM) t WHERE t.rownum=1";
        }
        Sql sql = Sqls.create(sqlStr);
        sql.params().set("bId", bId);
        sql.params().set("sDate", dataDate);
        sql.params().set("eDate", dataDate);
        return super.getObjectBySql(sql, null, null);
    }
}

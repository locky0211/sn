package com.efraiser.test.db.service.dy.dyindbr.impl;

import com.efraiser.test.db.model.dy.DyIndBr;
import com.efraiser.test.db.model.dy.DyIndicatorsBasicInfo;
import com.efraiser.test.db.model.dy.DyIndicatorsData;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.dy.dyindbr.DyIndBrService;
import com.efraiser.test.db.service.dy.dyindicatorsbasicinfo.DyIndicatorsBasicInfoService;
import com.efraiser.test.db.service.dy.dyindicatorsbasicinfo.impl.DyIndicatorsBasicInfoServiceImpl;
import com.efraiser.test.db.service.dy.dyindicatorsdata.DyIndicatorsDataService;
import com.efraiser.test.db.service.dy.dyindicatorsdata.impl.DyIndicatorsDataServiceImpl;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DyIndBrServiceImpl extends BaseServiceImpl<DyIndBr> implements DyIndBrService {

    @Autowired
    private DyIndicatorsDataService dyIndicatorsDataService;

    @Autowired
    private DyIndicatorsBasicInfoService dyIndicatorsBasicInfoService;

    @Override
    public List<DyIndBr> getDyIndBrs(String indId, String userId) {
        DyIndicatorsBasicInfoServiceImpl dyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl)dyIndicatorsBasicInfoService;

        DyIndicatorsBasicInfo bi = dyIndicatorsBasicInfoServiceImpl.fetch(indId);
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append("SELECT bm.BM_CODE orgin_id,bm.BM_NAME,ib.IND_ID,ib.V_YEAR,ib.V_1,ib.V_2,ib.V_3,ib.V_4,ib.V_5,ib.V_6,ib.V_7,ib.V_8,ib.V_9,ib.V_10,ib.V_11,ib.V_12 FROM SYS_BMGL bm   ");
        sqlStr.append("LEFT JOIN DY.DY_IND_BR ib ON ib.ORGIN_ID=BM.BM_CODE AND ib.IND_ID='" + indId + "'");
        sqlStr.append("WHERE bm.BM_CATEGORY=@bmType  ");
        sqlStr.append("AND bm.bm_type IN (SELECT organ_type FROM DY.DY_INDICATORS_ORGANS WHERE IND_ID=@indId)   ");
        sqlStr.append("AND bm.bm_code IN (SELECT DEP_ID FROM SYS_USER_DEP WHERE USER_ID=@userId) ORDER BY bm.sort_num");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.params().set("bmType", bi.getIndBrType());
        sql.params().set("indId", indId);
        sql.params().set("userId", userId);
        return super.getListBySql(sql);
    }

    @Override
    public void insertOrUpdateDyIndBr(DyIndBr rdIndBr) throws Exception {
        this.clear(Cnd.where("ORGIN_ID", "=", rdIndBr.getOrginId()).and("IND_ID", "=", rdIndBr.getIndId()));
        dao().insert(rdIndBr);
        List<DyIndicatorsData> indDatas = new ArrayList<DyIndicatorsData>();
        // 此处暂且这样,待以后有时间重构,利用反射
        // 1月
        DyIndicatorsData id1 = new DyIndicatorsData();
        id1.setBrNo(rdIndBr.getOrginId());
        id1.setIndId(rdIndBr.getIndId());
        id1.setReportDate(rdIndBr.getvYear() + "01");
        id1.setIndValue(rdIndBr.getV1());
        indDatas.add(id1);

        // 2月
        DyIndicatorsData id2 = new DyIndicatorsData();
        id2.setBrNo(rdIndBr.getOrginId());
        id2.setIndId(rdIndBr.getIndId());
        id2.setReportDate(rdIndBr.getvYear() + "02");
        id2.setIndValue(rdIndBr.getV2());
        indDatas.add(id2);

        // 3月
        DyIndicatorsData id3 = new DyIndicatorsData();
        id3.setBrNo(rdIndBr.getOrginId());
        id3.setIndId(rdIndBr.getIndId());
        id3.setReportDate(rdIndBr.getvYear() + "03");
        id3.setIndValue(rdIndBr.getV3());
        indDatas.add(id3);
        // 4月
        DyIndicatorsData id4 = new DyIndicatorsData();
        id4.setBrNo(rdIndBr.getOrginId());
        id4.setIndId(rdIndBr.getIndId());
        id4.setReportDate(rdIndBr.getvYear() + "04");
        id4.setIndValue(rdIndBr.getV4());
        indDatas.add(id4);
        // 5月
        DyIndicatorsData id5 = new DyIndicatorsData();
        id5.setBrNo(rdIndBr.getOrginId());
        id5.setIndId(rdIndBr.getIndId());
        id5.setReportDate(rdIndBr.getvYear() + "05");
        id5.setIndValue(rdIndBr.getV5());
        indDatas.add(id5);
        // 6月
        DyIndicatorsData id6 = new DyIndicatorsData();
        id6.setBrNo(rdIndBr.getOrginId());
        id6.setIndId(rdIndBr.getIndId());
        id6.setReportDate(rdIndBr.getvYear() + "06");
        id6.setIndValue(rdIndBr.getV6());
        indDatas.add(id6);
        // 7月
        DyIndicatorsData id7 = new DyIndicatorsData();
        id7.setBrNo(rdIndBr.getOrginId());
        id7.setIndId(rdIndBr.getIndId());
        id7.setReportDate(rdIndBr.getvYear() + "07");
        id7.setIndValue(rdIndBr.getV7());
        indDatas.add(id7);
        // 8月
        DyIndicatorsData id8 = new DyIndicatorsData();
        id8.setBrNo(rdIndBr.getOrginId());
        id8.setIndId(rdIndBr.getIndId());
        id8.setReportDate(rdIndBr.getvYear() + "08");
        id8.setIndValue(rdIndBr.getV8());
        indDatas.add(id8);
        // 9月
        DyIndicatorsData id9 = new DyIndicatorsData();
        id9.setBrNo(rdIndBr.getOrginId());
        id9.setIndId(rdIndBr.getIndId());
        id9.setReportDate(rdIndBr.getvYear() + "09");
        id9.setIndValue(rdIndBr.getV9());
        indDatas.add(id9);
        // 10月
        DyIndicatorsData id10 = new DyIndicatorsData();
        id10.setBrNo(rdIndBr.getOrginId());
        id10.setIndId(rdIndBr.getIndId());
        id10.setReportDate(rdIndBr.getvYear() + "10");
        id10.setIndValue(rdIndBr.getV10());
        indDatas.add(id10);
        // 11月
        DyIndicatorsData id11 = new DyIndicatorsData();
        id11.setBrNo(rdIndBr.getOrginId());
        id11.setIndId(rdIndBr.getIndId());
        id11.setReportDate(rdIndBr.getvYear() + "11");
        id11.setIndValue(rdIndBr.getV11());
        indDatas.add(id11);
        // 12月
        DyIndicatorsData id12 = new DyIndicatorsData();
        id12.setBrNo(rdIndBr.getOrginId());
        id12.setIndId(rdIndBr.getIndId());
        id12.setReportDate(rdIndBr.getvYear() + "12");
        id12.setIndValue(rdIndBr.getV12());
        indDatas.add(id12);


        DyIndicatorsDataServiceImpl dyIndicatorsDataServiceImpl = (DyIndicatorsDataServiceImpl)dyIndicatorsDataService;
        dyIndicatorsDataServiceImpl.insertIndDatas(indDatas);
    }

    @Override
    public Boolean checkRdIndBr(String orgId) {
        if (super.count(Cnd.where("orginId", "=", orgId)) != 0) {
            return true;
        }
        return false;
    }
}

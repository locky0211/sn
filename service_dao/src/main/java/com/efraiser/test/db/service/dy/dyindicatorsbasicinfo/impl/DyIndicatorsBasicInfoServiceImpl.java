package com.efraiser.test.db.service.dy.dyindicatorsbasicinfo.impl;

import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.dy.DyIndicatorsBasicInfo;
import com.efraiser.test.db.model.dy.DyIndicatorsOrgans;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.dy.dyindicatorsbasicinfo.DyIndicatorsBasicInfoService;
import com.efraiser.test.db.service.sys.sysbmgl.SysBmglService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class DyIndicatorsBasicInfoServiceImpl extends BaseServiceImpl<DyIndicatorsBasicInfo> implements DyIndicatorsBasicInfoService {

   // @Autowired
  //  private SysBmglService sysBmglService;

    @Autowired
    private DyIndicatorsBasicInfoService dyIndicatorsBasicInfoService;


    @Override
    public DyIndicatorsBasicInfo updateIndicatorsBasicInfoValidFlag(String id, String validFlag) {
        DyIndicatorsBasicInfo rib = this.fetch(id);
        rib.setValidFlag(validFlag);
        super.dao().updateIgnoreNull(rib);
        return rib;
    }

    @Override
    public List<String> getPctCellLists() throws Exception {
        Sql sql = Sqls.create("select ind_name from dy.dy_indicators_basic_info where is_percent='y'");
        return super.getListStringBySqlStr(sql);
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
    public List<DyIndicatorsBasicInfo> getDyIndBasicInfoLists(String brNo, String indType, String userId) {
        SysBmgl bmgl = SysBmglCache.getBmglInfo(brNo);
        StringBuffer sqlStr = new StringBuffer();
        sqlStr.append(" WITH temptab (ID,IND_NAME,SORT_NUM,VALID_FLAG,IS_PERCENT,IS_PARENT,IND_TYPE,P_ID,ICON_CLS,IND_ORGANS,IND_BR_TYPE) AS ");
        sqlStr.append(" (SELECT ID,IND_NAME,SORT_NUM,VALID_FLAG,IS_PERCENT,IS_PARENT,IND_TYPE,P_ID,ICON_CLS,IND_ORGANS,IND_BR_TYPE FROM DY.DY_INDICATORS_BASIC_INFO B ");
        sqlStr.append(" WHERE  B.VALID_FLAG='y'");
        sqlStr.append(" AND EXISTS(SELECT 1 FROM DY.DY_INDICATORS_ORGANS O WHERE O.IND_ID=B.ID AND O.ORGAN_TYPE=@organType)");
        sqlStr.append(" AND B.IND_BR_TYPE=@brType");
        sqlStr.append(" AND B.IND_TYPE=@indType");
        sqlStr.append(" AND B.C_USER IN ('admin','" + userId + "') ");
        sqlStr.append(" UNION ALL ");
        sqlStr.append(" SELECT SUPER.ID,SUPER.IND_NAME,SUPER.SORT_NUM,SUPER.VALID_FLAG,SUPER.IS_PERCENT,SUPER.IS_PARENT,SUPER.IND_TYPE,SUPER.P_ID,SUPER.ICON_CLS,SUPER.IND_ORGANS,SUPER.IND_BR_TYPE ");
        sqlStr.append(" FROM DY.DY_INDICATORS_BASIC_INFO SUPER, temptab CHILD ");
        sqlStr.append(" WHERE SUPER.ID = CHILD.P_ID");
        sqlStr.append(" ) SELECT DISTINCT * FROM temptab  ORDER BY sort_num");
        Sql sql = Sqls.create(sqlStr.toString());
        sql.params().set("organType", bmgl.getBmType());
        sql.params().set("brType", bmgl.getBmCategory());
        sql.params().set("indType", indType);
        return super.getListBySql(sql);
    }

    // public List<String> getRdIndBasicInfoIdLists(String brNo, String indType,
    // String userId) {
    // SysBmgl bmgl = sysBmglService.fetch(brNo);
    // StringBuffer sqlStr = new StringBuffer();
    // sqlStr.append(" WITH temptab (ID,IND_NAME,SORT_NUM,VALID_FLAG,IS_PERCENT,IS_PARENT,IND_TYPE,P_ID,ICON_CLS,IND_ORGANS,IND_BR_TYPE) AS ");
    // sqlStr.append(" (SELECT ID,IND_NAME,SORT_NUM,VALID_FLAG,IS_PERCENT,IS_PARENT,IND_TYPE,P_ID,ICON_CLS,IND_ORGANS,IND_BR_TYPE FROM RD_INDICATORS_BASIC_INFO B ");
    // sqlStr.append(" WHERE  B.VALID_FLAG='y'");
    // sqlStr.append(" AND EXISTS(SELECT 1 FROM RD_INDICATORS_ORGANS O WHERE O.IND_ID=B.ID AND O.ORGAN_TYPE=@organType)");
    // sqlStr.append(" AND B.IND_BR_TYPE=@brType");
    // sqlStr.append(" AND B.IND_TYPE=@indType");
    // sqlStr.append(" AND B.C_USER IN ('admin','" + userId + "') ");
    // sqlStr.append(" UNION ALL ");
    // sqlStr.append(" SELECT SUPER.ID,SUPER.IND_NAME,SUPER.SORT_NUM,SUPER.VALID_FLAG,SUPER.IS_PERCENT,SUPER.IS_PARENT,SUPER.IND_TYPE,SUPER.P_ID,SUPER.ICON_CLS,SUPER.IND_ORGANS,SUPER.IND_BR_TYPE ");
    // sqlStr.append(" FROM RD_INDICATORS_BASIC_INFO SUPER, temptab CHILD ");
    // sqlStr.append(" WHERE SUPER.ID = CHILD.P_ID");
    // sqlStr.append(" ) SELECT DISTINCT id FROM temptab  ORDER BY sort_num");
    // Sql sql = Sqls.create(sqlStr.toString());
    // sql.params().set("organType", bmgl.getBmType());
    // sql.params().set("brType", bmgl.getBmCategory());
    // sql.params().set("indType", indType);
    // return super.getListStringBySqlStr(sql);
    // }


    @Override
    public void deleteIndInfo(String id) throws Exception {

        DyIndicatorsBasicInfoServiceImpl dyIndicatorsBasicInfoServiceImpl = (DyIndicatorsBasicInfoServiceImpl)dyIndicatorsBasicInfoService;

        dyIndicatorsBasicInfoServiceImpl.clear(Cnd.where("B_ID", "=", id));
        dyIndicatorsBasicInfoServiceImpl.dao().clear(DyIndicatorsOrgans.class, Cnd.where("IND_ID", "=", id));
        this.delete(id);

    }
}

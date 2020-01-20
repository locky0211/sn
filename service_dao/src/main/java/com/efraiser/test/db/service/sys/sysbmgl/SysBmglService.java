package com.efraiser.test.db.service.sys.sysbmgl;

import com.efraiser.test.db.model.rd.RdTableInfo;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface SysBmglService<T> extends BaseService {


    void deleteBmgl(String bmCode) throws Exception;


    /**
     * 校验是否为父节点
     *
     * @param bmCode
     */
    public boolean checkIsParant(String bmCode);


    List<SysBmgl> getSysBmListForPid(String bmCode);


    /**
     * 校验部门ID
     *
     * @param bmCode
     * @return
     */
    boolean checkbmCode(String bmCode);


    /**
     * 校验部门name
     *
     * @param bmName
     * @return
     */
    boolean checkBmName(String bmName);


    List<SysBmgl> getSysBmList(String bmCode, String bmName, String bmType, String userId);


    public List<SysBmgl> getSysBmListByUserId(String userId, String pid, String bmCategory);


    Boolean addVisualJG(String brNo, String brnoName);


    String findBmNameByBmCode(String bmCode);

    String findPidByBmcode(String bmCode);


    List<SysBmgl> getSysBmListByUserIdDJZ(String userId, String pid);


    List<SysBmgl> getSysBmListByUserIdForRd(String userId, String pid);

    List<String> getDJZJG();

    Object getSysBmListByBmCategory(String userId, String bmCategory);


    List<SysBmgl> getSysBmListByUserIdAndTabcode(String userId, List<RdTableInfo> rdTableInfo);


    List<SysBmgl> getSysBmListByUserIdAndTabcode(String userId, RdTableInfo rdTableInfo);

    Object getSysBmListByBmCategoryIgnoreUserId(String bmCategory);

    Object getSysBmListByBmCode(String userId, String bmCode);


    Object getSysBmListByIsExistBmCategory(String userId, String bmCategory);


    /**
     * 功能描述：上海机构查询，通过 BM_AREA='SHS' 进行查询
     *
     * @param userId
     * @param pid
     * @return
     * @author
     * @date 2017年12月25日
     * @modify log:
     */
    List<SysBmgl> getSysBmListByUserId_SH(String userId, String pid);


    List<String> getDepByUserIdAndBmCategory(String userId, String BmCategory);
}

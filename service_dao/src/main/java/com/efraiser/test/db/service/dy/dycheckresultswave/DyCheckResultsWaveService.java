package com.efraiser.test.db.service.dy.dycheckresultswave;

import com.efraiser.test.db.model.dy.DyCheckResultsHelper;
import com.efraiser.test.db.model.dy.DyCheckResultsWave;
import com.efraiser.test.db.model.dy.DyCheckResultsWaveHelper;
import com.efraiser.test.db.service.BaseService;
import org.nutz.dao.pager.Pager;

import java.util.List;
import java.util.Map;

public interface DyCheckResultsWaveService extends BaseService {

    List<DyCheckResultsWave> getDyReportCheckResults(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkArea, String type);

    List<DyCheckResultsWave> getDyReportCheckResultsTwo(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkType, String checkArea);

    List<DyCheckResultsWave> getDyReportCheckResultsRepay(String brNo, String reportDate, String tabType, String checkRisk, String cUser);


    List<DyCheckResultsHelper> getDyReportCheckResultsYidong(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String formulaType);


    List<DyCheckResultsHelper> getSummaryDyReportCheckResults(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String formulaType);


    List<DyCheckResultsWave> getDyReportCheckResultsRecord(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkType, String checkArea);


    List<DyCheckResultsWaveHelper> getDyReportCheckResultsRecordYD(String brNo, String reportDate, String reportRate, String tabType);

    DyCheckResultsWave fetchDyCheckResultsWaveForView(String id);

    DyCheckResultsWave fetchDyCheckResultsWaveRecordForView(String id);

    void insertCheckResults(String brNo, String reportDate, String tabType, String cUser, List<DyCheckResultsWave> checkResults, String formulaType, String checkArea) throws Exception;

    int getDyReportCheckResultCount(String brNo, String reportDate, String tabType, String checkRisk);

    int getDyReportCheckResultCountRecord(String brNo, String reportDate, String tabType, String checkRisk);

    List<DyCheckResultsWave> getDyReportCheckResultList(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager);

    List<DyCheckResultsWave> getDyReportCheckResultListRecord(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager);

    /**
     * 功能描述：获取区分的校验结果条目
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param checkRisk
     * @return
     * @author
     * @date 2016年3月4日
     * @modify log:
     */
    int getDyReportCheckResultCountArea(String brNo, String reportDate, String tabType, String checkRisk, String checkType, String checkArea);

    /**
     * 功能描述：获取区分的校验结果条目(异动)
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param checkRisk
     * @return
     * @author
     * @date 2016年3月4日
     * @modify log:
     */
    int getDyReportCheckResultCountAreaYidong(String brNo, String reportDate, String tabType, String checkRisk, String checkType, String checkArea);


    /**
     * 功能描述：获取区分的校验结果
     *
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param checkRisk
     * @param sortField
     * @param sortOrder
     * @param pager
     * @return
     * @author
     * @date 2016年3月4日
     * @modify log:
     */
    List<DyCheckResultsWave> getDyReportCheckResultListArea(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager, String formulaType, String checkArea);

    Map<String, String> doInitDataMap(String tabCode, String brNo,
                                      String reportDate, String checkType, String isdValue, String cUser);

    void insertCheckResultsForYD(String tabCodes,String brNo, String reportDate,
                                 String checkType, String userId, List<DyCheckResultsWave> checkResults,
                                 String formulaType, String checkArea);

    List<DyCheckResultsHelper> getDyReportCheckResultsRecord2(String brNo, String reportDate, String tabType, String checkRisk, String cUser);

    void insertCheckResultsCS(String brNo, String reportDate,
                              String reportRate,String tabType, List<DyCheckResultsWave> checkResults);

    List<DyCheckResultsWaveHelper> getReportCheckResults(String brNo, String reportDate, String reportRate,String tabType, String cUser);
}

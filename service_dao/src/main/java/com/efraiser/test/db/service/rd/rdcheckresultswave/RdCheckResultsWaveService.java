package com.efraiser.test.db.service.rd.rdcheckresultswave;

import com.efraiser.test.db.model.rd.RdCheckResultsHelper;
import com.efraiser.test.db.model.rd.RdCheckResultsWave;
import com.efraiser.test.db.model.rd.RdCheckResultsWaveHelper;
import com.efraiser.test.db.service.BaseService;
import org.nutz.dao.pager.Pager;

import java.util.List;
import java.util.Map;

public interface RdCheckResultsWaveService extends BaseService {


    List<RdCheckResultsWave> getRdReportCheckResults(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkArea, String type);

    List<RdCheckResultsWave> getRdReportCheckResultsTwo(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkType, String checkArea);

    List<RdCheckResultsWave> getRdReportCheckResultsRepay(String brNo, String reportDate, String tabType, String checkRisk, String cUser);

    List<RdCheckResultsHelper> getRdReportCheckResultsYidong(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String formulaType);

    List<RdCheckResultsHelper> getSummaryRdReportCheckResults(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String formulaType);

    List<RdCheckResultsWave> getRdReportCheckResultsRecord(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkType, String checkArea);

    List<RdCheckResultsWaveHelper> getRdReportCheckResultsRecordYD(String brNo, String reportDate, String reportRate, String tabType);

    RdCheckResultsWave fetchRdCheckResultsWaveForView(String id);

    RdCheckResultsWave fetchRdCheckResultsWaveRecordForView(String id);

    void insertCheckResults(String brNo, String reportDate, String tabType, String cUser, List<RdCheckResultsWave> checkResults, String formulaType, String checkArea) throws Exception;

    int getRdReportCheckResultCount(String brNo, String reportDate, String tabType, String checkRisk);

    int getRdReportCheckResultCountRecord(String brNo, String reportDate, String tabType, String checkRisk);

    List<RdCheckResultsWave> getRdReportCheckResultList(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager);

    List<RdCheckResultsWave> getRdReportCheckResultListRecord(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager);

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
    int getRdReportCheckResultCountArea(String brNo, String reportDate, String tabType, String checkRisk, String checkType, String checkArea);

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
    int getRdReportCheckResultCountAreaYidong(String brNo, String reportDate, String tabType, String checkRisk, String checkType, String checkArea);

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
    List<RdCheckResultsWave> getRdReportCheckResultListArea(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager, String formulaType, String checkArea);


    Map<String, String> doInitDataMap(String tabCode, String brNo,
                                      String reportDate, String checkType, String isdValue, String cUser);

    void insertCheckResultsForYD(String tabCodes, String brNo, String reportDate,
                                 String checkType, String userId, List<RdCheckResultsWave> checkResults,
                                 String formulaType, String checkArea);

    List<RdCheckResultsHelper> getRdReportCheckResultsRecord2(String brNo, String reportDate, String tabType, String checkRisk, String cUser);

    void insertCheckResultsCS(String brNo, String reportDate,
                              String reportRate, String tabType, List<RdCheckResultsWave> checkResults);

    /*
     * 上海方法
     */
    void insertCheckResultsSh(String brNo, String reportDate,
                              String reportRate, String tabType, List<RdCheckResultsWave> checkResults);

    List<RdCheckResultsWaveHelper> getReportCheckResults(String brNo, String reportDate, String reportRate, String tabType, String cUser);

    void updateContent(RdCheckResultsWave rdCheckResultsWave);

    List<RdCheckResultsWaveHelper> getReportCheckResultsSearch(String brno, String reportDate, String tabType, String reportRate, String tabcode, String checkProject, String checkRisk, String cUser, String sortField, String sortOrder);


    /*
     * 上海追溯
     */
    List<RdCheckResultsWaveHelper> getReportCheckResultsSearchSj_ZS(String brNo, String reportDate, String checkFormula, String tabType, String reportRate, String tabcode, String checkProject, String checkRisk, String cUser, String sortField, String sortOrder);

    /**
     * 南京追溯导出
     */
    List<RdCheckResultsWaveHelper> getReportCheckResultsSearch_NJ(String brno, String reportDate, String tabType, String reportRate, String tabcode, String checkProject, String checkRisk, String cUser);


    /**
     * 功能描述：南京全表追数
     *
     * @param brno
     * @param reportDate
     * @return
     * @author
     * @date 2018年4月18日
     * @modify log:
     */
    List<RdCheckResultsWaveHelper> getReportCheckResultsSearchNj(String brno, String reportDate, String formulaId);

    /**
     * 功能描述：上海省局异动追数
     *
     * @param reportDate
     * @param checkFormula
     * @param tabType
     * @param reportRate
     * @param tabcode
     * @param checkProject
     * @param checkRisk
     * @param cUser
     * @return
     * @author
     * @date 2017年9月11日
     * @modify log:
     */
    List<RdCheckResultsWaveHelper> getReportCheckResultsSearchSj(String brNo, String reportDate, String checkFormula, String tabType, String reportRate, String tabcode, String checkProject, String checkRisk, String cUser);


    List<RdCheckResultsWaveHelper> getReportCheckResultsSearchNj_zs(String brNo,String reportDate,String formulaId,String tabType,String reportRate,String tabcode,String checkProject,String checkRisk, String cUser);

    List<RdCheckResultsWaveHelper> getResultsHandlingStatus(String tabcode,String brNo,String reportDate,String reportRate,String cUser);
}

package com.efraiser.test.db.service.dy.dycheckresults;

import com.efraiser.test.db.model.dy.DyCheckResults;
import com.efraiser.test.db.model.dy.DyCheckResultsHelper;
import com.efraiser.test.db.service.BaseService;
import org.nutz.dao.pager.Pager;

import java.util.List;

public interface DyCheckResultsService extends BaseService {

    List<DyCheckResults> getDyReportCheckResults(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkArea, String type);

    List<DyCheckResults> getDyReportCheckResultsTwo(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkType, String checkArea);

    List<DyCheckResults> getDyReportCheckResultsRepay(String brNo, String reportDate, String tabType, String checkRisk, String cUser);

    List<DyCheckResultsHelper> getDyReportCheckResultsYidong(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String formulaType);

    List<DyCheckResultsHelper> getSummaryDyReportCheckResults(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String formulaType);

    List<DyCheckResults> getDyReportCheckResultsRecord(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkType, String checkArea);

    List<DyCheckResultsHelper> getDyReportCheckResultsRecordYD(String brNo, String reportDate, String tabType, String checkRisk, String cUser);

    DyCheckResults fetchDyCheckResultsForView(String id);

    DyCheckResults fetchDyCheckResultsRecordForView(String id);

    void insertCheckResults(String brNo, String reportDate, String tabType, String cUser, List<DyCheckResults> checkResults,String formulaType,String checkArea) throws Exception;

    int getDyReportCheckResultCount(String brNo, String reportDate, String tabType, String checkRisk);

    int getDyReportCheckResultCountRecord(String brNo, String reportDate, String tabType, String checkRisk);

    List<DyCheckResults> getDyReportCheckResultList(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager);


    List<DyCheckResults> getDyReportCheckResultListRecord(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager);

    /**
     * 功能描述：获取区分的校验结果条目
     * @author
     * @date 2016年3月4日
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param checkRisk
     * @return
     * @modify log:
     */
    int getDyReportCheckResultCountArea(String brNo, String reportDate, String tabType, String checkRisk,String checkType,String  checkArea );

    /**
     * 功能描述：获取区分的校验结果
     * @author
     * @date 2016年3月4日
     * @param brNo
     * @param reportDate
     * @param tabType
     * @param checkRisk
     * @param sortField
     * @param sortOrder
     * @param pager
     * @return
     * @modify log:
     */
     List<DyCheckResults> getDyReportCheckResultListArea(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager,String formulaType,String checkArea);

    void insertCheckResultsForYD(String tabCodes,String brNo, String reportDate,
                                 String checkType, String userId, List<DyCheckResults> checkResults,
                                 String formulaType, String checkArea);

    List<DyCheckResultsHelper> getDyReportCheckResultsRecord2(String brNo, String reportDate, String tabType, String checkRisk, String cUser);


}

package com.efraiser.test.db.service.rd.rdcheckresults;

import com.efraiser.test.db.model.rd.RdCheckResults;
import com.efraiser.test.db.model.rd.RdCheckResultsHelper;
import com.efraiser.test.db.service.BaseService;
import org.nutz.dao.pager.Pager;

import java.util.List;

public interface RdCheckResultsService extends BaseService {


    List<RdCheckResults> getRdReportCheckResults(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkArea, String type);


    /**
     * 功能描述：上海省局校验结果查看
     *
     * @param brNo
     * @param reportDate
     * @param checkFormula
     * @param tabType
     * @param checkRisk
     * @param cUser
     * @param checkArea
     * @param type
     * @return
     * @author
     * @date 2017年9月11日
     * @modify log:
     */
    List<RdCheckResults> getRdReportCheckResultSj(String brNo, String reportDate, String checkFormula, String formulaId, String tabType, String checkRisk, String cUser, String checkArea, String type);


    List<RdCheckResults> getRdReportCheckResultsTwo(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkType, String checkArea);

    List<RdCheckResults> getRdReportCheckResultsRepay(String brNo, String reportDate, String tabType, String checkRisk, String cUser);

    List<RdCheckResultsHelper> getRdReportCheckResultsYidong(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String formulaType);

    List<RdCheckResultsHelper> getSummaryRdReportCheckResults(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String formulaType);

    List<RdCheckResults> getRdReportCheckResultsRecord(String brNo, String reportDate, String tabType, String checkRisk, String cUser, String checkType, String checkArea);

    List<RdCheckResultsHelper> getRdReportCheckResultsRecordYD(String brNo, String reportDate, String tabType, String checkRisk, String cUser);

    RdCheckResults fetchRdCheckResultsForView(String id);

    RdCheckResults fetchRdCheckResultsRecordForView(String id);

    void insertCheckResults(String brNo, String reportDate, String tabType, String cUser, List<RdCheckResults> checkResults, String formulaType, String checkArea) throws Exception;

    /*
     * 上海方法
     */

    void insertCheckResultsSh(String brNo, String reportDate, String tabType, String cUser, List<RdCheckResults> checkResults, String formulaType, String checkArea) throws Exception;

    /*
     * 上海方法
     */
    void insertCheckResultsJs(List<RdCheckResults> checkResults, String formulaType) throws Exception;

    int getRdReportCheckResultCount(String brNo, String reportDate, String tabType, String checkRisk);

    int getRdReportCheckResultCountRecord(String brNo, String reportDate, String tabType, String checkRisk);

    List<RdCheckResults> getRdReportCheckResultList(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager);

    List<RdCheckResults> getRdReportCheckResultListRecord(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager);

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
    List<RdCheckResults> getRdReportCheckResultListArea(String brNo, String reportDate, String tabType, String checkRisk, String sortField, String sortOrder, Pager pager, String formulaType, String checkArea);


    void insertCheckResultsForYD(String tabCodes, String brNo, String reportDate,
                                 String checkType, String userId, List<RdCheckResults> checkResults,
                                 String formulaType, String checkArea);

    List<RdCheckResultsHelper> getRdReportCheckResultsRecord2(String brNo, String reportDate, String tabType, String checkRisk, String cUser);

    void insertCheckResultscs(String brNo, String reportDate, String tabType, String cUser, List<RdCheckResults> checkResults, String formulaType, String checkArea) throws Exception;


    /**
     * 功能描述：根据条件获取公式list
     *
     * @param brno
     * @param reportDate
     * @param reportType
     * @return
     * @author
     * @date 2018年6月4日
     * @modify log:
     */
    List<RdCheckResults> getFormulaByCon(String brno, String reportDate, String reportType);
}

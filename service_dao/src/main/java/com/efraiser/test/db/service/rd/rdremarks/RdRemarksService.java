package com.efraiser.test.db.service.rd.rdremarks;

import com.efraiser.test.db.model.rd.RdRemarks;
import com.efraiser.test.db.service.BaseService;
import org.nutz.dao.pager.Pager;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface RdRemarksService extends BaseService {


    Boolean saveOrUpdateRdRemarks(List<RdRemarks> list);


    String findRemarksById(String organNo, String reportDate, String reportNoStr, String formula);

    String findFlagById(String organNo, String reportDate, String reportNoStr, String formula);

    int getRdReportRemarksResultCountArea(String brNo, String reportDate, String tabType, String checkType, String userid, String flag, HttpServletRequest req);

    List<RdRemarks> getRdReportRemarksResultListArea(String brNo, String reportDate, String tabType, String sortField, String sortOrder, Pager pager, String formulaType, String userid, String flag, HttpServletRequest req);

    Boolean UpdateRdRemarks(List<RdRemarks> list);

    void delRemarks(String organNo, String reportDate, String tabType);

    RdRemarks fetchRdRemarksResultsForView(String id);

    int getRdRemarksResultCountHistory(String brNo, String startDate, String tabType, String endDate, String userid, String flag, HttpServletRequest req);

    List<RdRemarks> getRdRemarksResultListHistory(String brNo, String startDate, String tabType, String sortField, String sortOrder, Pager pager, String endDate, String userid, String flag, HttpServletRequest req);
}

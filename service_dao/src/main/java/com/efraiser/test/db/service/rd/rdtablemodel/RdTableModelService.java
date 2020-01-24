package com.efraiser.test.db.service.rd.rdtablemodel;

import com.efraiser.test.db.model.rd.RdTableColumnContrast;
import com.efraiser.test.db.model.rd.RdTableInfo;
import com.efraiser.test.db.model.rd.RdTableModel;
import com.efraiser.test.db.model.rd.RdTableModelPCT;
import com.efraiser.test.db.service.BaseService;

import java.io.File;
import java.util.List;
import java.util.Map;

public interface RdTableModelService extends BaseService {


    List<RdTableModel> resolveTableExcelTemplate(String tableId, RdTableInfo tableInfo, String excelFilePath, List<RdTableModelPCT> tableModelPCTs, List<String> formulaList,
                                                 List<RdTableColumnContrast> rccList, List<Map<String, String>> colMapList);


    void saveExcelFile(String excelFilePath, String reportExcelTempletPath, RdTableInfo tableInfo);


    List<RdTableModel> getTableModelList(String tableId);

    RdTableModel getTableModelByRownum(String tableId, String rownum);


    String getExcelFileVersionNo(String versionNoInfo, File excelFile);

    List<RdTableModel> getModel(String tableId);

    List<RdTableModel> getAll();

     void delAll();

    void add(RdTableModel item);

    List<RdTableModel> getModelInReportInfo();
}

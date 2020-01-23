package com.efraiser.test.db.service.dy.dytablemodel;

import com.efraiser.test.db.model.dy.DyTableColumnContrast;
import com.efraiser.test.db.model.dy.DyTableInfo;
import com.efraiser.test.db.model.dy.DyTableModel;
import com.efraiser.test.db.model.dy.DyTableModelPCT;
import com.efraiser.test.db.service.BaseService;

import java.util.List;
import java.util.Map;

public interface DyTableModelService extends BaseService {


    List<DyTableModel> resolveTableExcelTemplate(String tableId, DyTableInfo tableInfo, String excelFilePath, List<DyTableModelPCT> tableModelPCTs, List<String> formulaList,
                                                 List<DyTableColumnContrast> rccList, List<Map<String, String>> colMapList);


    List<DyTableModel> resolveTableExcelTemplateXlsx(String tableId, DyTableInfo tableInfo, String excelFilePath, List<DyTableModelPCT> tableModelPCTs, List<String> formulaList,
                                                     List<DyTableColumnContrast> rccList, List<Map<String, String>> colMapList);

    void saveExcelFile(String excelFilePath, String reportExcelTempletPath, DyTableInfo tableInfo);


    List<DyTableModel> getTableModelList(String tableId);

    DyTableModel getTableModelByRownum(String tableId,String rownum);

    List<DyTableModel> getModel(String tableId);

    List<DyTableModel> getAll();

    void delAll();

    void add(DyTableModel item);
}

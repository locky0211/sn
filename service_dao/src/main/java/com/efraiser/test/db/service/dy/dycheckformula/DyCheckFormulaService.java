package com.efraiser.test.db.service.dy.dycheckformula;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.dy.DyAutoFormula;
import com.efraiser.test.db.model.dy.DyCheckFormula;
import com.efraiser.test.db.model.dy.DyTableInfo;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.BaseService;

import java.util.List;
import java.util.Map;

public interface DyCheckFormulaService extends BaseService {


    GridQueryPageResult getDyCheckFormulaList(String tabcode, String check_formula, String cUser, String valid_flag, int pageIndex, int pageSize);

    boolean importExcel(String filePath, StringBuffer message) throws Exception;

    String exportExcel(String id);

    /**
     * 检查校验公式唯一性，如果是新增校验公式,数据表不能有相同校验公式,如果修改校验公式，不能将校验公式修改的与其他校验公式一样
     *
     * @param id
     * @param idcolumn
     * @param key
     * @param keycolumn
     * @return
     */
    boolean checkIsOnly(String id, String idcolumn, String key, String keycolumn);

    DyCheckFormula fetchToEditCheckFormula(String id);


    /**
     * 根据报表编号集合获取校验公式集合
     *
     * @param tabCodes
     */
    List<DyCheckFormula> getCheckFormulaListByTabCodes(List<String> tabCodes, String reportDate, String cUser, String formulaType, String checkArea, String area);


    /**
     * 功能描述：吴江自定义根据报表编号集合获取校验公式集合
     *
     * @param tabCodes
     * @param reportDate
     * @param userId
     * @return
     * @author
     * @date 2017年7月13日
     * @modify log:
     */
    List<DyCheckFormula> getCheckFormulaListByTabCodesWj(List<String> tabCodes, String reportDate, String userId);

    DyCheckFormula updateCheckFormulaValidFlag(String id, String validFlag, SysUser sysUser);


    void updateCheckFormulaValidFlag2(String parent, String validFlag, String checkProject, SysUser sysUser);

    List<DyAutoFormula> getCheckFormulaListByExcel(DyTableInfo tableInfo, List<String> formulaList, List<Map<String, String>> colMapList);


    void saveOrUpdateAutoCheckFormula(String tableId, List<DyAutoFormula> autoCheckFormulaList) throws Exception;

    List<String> getDyAutoFormulaList(String tableId);

    void updateCheckFormula(DyCheckFormula checkformula, SysUser sysUser, String userRole);

    int getcountParentId(String tabcode, String tab, String i, String type, String c_user, String cUser);

    void delFormula(String tabcode, String type, String element, String checkProject);


    List<DyCheckFormula> getList(String cUser);

    DyCheckFormula EditCheckFormula(String parent, String element);

    List<DyCheckFormula> EditCheckFormulas(String checkProject, String type, String parent, String cUser);

    void deleteFormula(String parent, String id);

    DyCheckFormula getCPbyId(String id);

    void updateCheckFormula2(DyCheckFormula checkformula, String userId);

    List<DyCheckFormula> getAll();

    /**
     * 根据报表编号集合获取校验公式集合
     *
     * @param tabCodes
     */
    List<DyCheckFormula> getCheckFormulaListByTabCodesRepay(List<String> tabCodes, String reportDate, String cUser, String formulaType, String area);

    /**
     * 根据报表编号集合获取校验公式集合
     *
     * @param tabCodes
     */
    List<DyCheckFormula> getCheckFormulaListByTabCodesSummary(List<String> tabCodes, String reportDate, String cUser, String formulaType, String area);


    String convert(Object param);

    void delAll();

    void add(DyCheckFormula item);

    /**
     * 根据报表编号集合获取校验公式集合
     *
     * @param tabCodes
     */
    List<DyCheckFormula> getCheckFormulaListByTabCodes(List<String> tabCodes, String reportDate, String cUser, String formulaType, String checkArea, String area, String brnoType);


   void rollbackCheckFormula(String date);


    GridQueryPageResult getDyCheckFormulaList(String checkArea, String cUser, String tabcode, String checkFormula, String vFlag, String formulaType, int pageIndex, int pageSize, String sortField, String sortOrder);

    GridQueryPageResult getDyCheckFormulaListArea(String cUser, String checkArea, String tabcode, String checkFormula, String vFlag, String formulaType, int pageIndex, int pageSize, String sortField, String sortOrder);
}

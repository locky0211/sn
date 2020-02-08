package com.efraiser.test.db.service.rd.rdcheckformula;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.rd.RdAutoFormula;
import com.efraiser.test.db.model.rd.RdCheckFormula;
import com.efraiser.test.db.model.rd.RdTableInfo;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.BaseService;

import java.util.List;
import java.util.Map;

public interface RdCheckFormulaService extends BaseService {

    GridQueryPageResult getRdCheckFormulaList(String tabcode, String check_formula, String cUser, String valid_flag, int pageIndex, int pageSize);

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

    RdCheckFormula fetchToEditCheckFormula(String id);

    /**
     * 根据报表编号集合获取校验公式集合
     *
     * @param tabCodes
     */
    List<RdCheckFormula> getCheckFormulaListByTabCodes(List<String> tabCodes, String reportDate, String cUser, String formulaType, String checkArea, String area);

    RdCheckFormula updateCheckFormulaValidFlag(String id, String validFlag, SysUser sysUser);

    void updateCheckFormulaValidFlag2(String parent, String validFlag, String checkProject, SysUser sysUser);

    List<RdAutoFormula> getCheckFormulaListByExcel(RdTableInfo tableInfo, List<String> formulaList, List<Map<String, String>> colMapList);

    void saveOrUpdateAutoCheckFormula(String tableId, List<RdAutoFormula> autoCheckFormulaList) throws Exception;

    List<String> getRdAutoFormulaList(String tableId);

    void updateCheckFormula(RdCheckFormula checkformula, SysUser sysUser);

    int getcountParentId(String tabcode, String tab, String i, String type, String c_user, String cUser);

    void delFormula(String tabcode, String type, String element,
                    String checkProject);

    List<RdCheckFormula> getList(String cUser);

    RdCheckFormula EditCheckFormula(String parent, String element);

    List<RdCheckFormula> EditCheckFormulas(String checkProject, String type, String parent, String cUser);

    void deleteFormula(String parent, String id);

    RdCheckFormula getCPbyId(String id);

    void updateCheckFormula2(RdCheckFormula checkformula, String userId);

    List<RdCheckFormula> getAll();

    /**
     * 根据报表编号集合获取校验公式集合
     *
     * @param tabCodes
     */
    List<RdCheckFormula> getCheckFormulaListByTabCodesRepay(List<String> tabCodes, String reportDate, String cUser, String formulaType, String area);

    /**
     * 根据报表编号集合获取校验公式集合
     *
     * @param tabCodes
     */
    List<RdCheckFormula> getCheckFormulaListByTabCodesSummary(List<String> tabCodes, String reportDate, String cUser, String formulaType, String area);

    String convert(Object param);

    void delAll();

    void add(RdCheckFormula item);


    /**
     * 根据报表编号集合获取校验公式集合
     *
     * @param tabCodes
     */
    List<RdCheckFormula> getCheckFormulaListByTabCodes(List<String> tabCodes, String reportDate, String cUser, String formulaType, String checkArea, String area, String brnoType);
}

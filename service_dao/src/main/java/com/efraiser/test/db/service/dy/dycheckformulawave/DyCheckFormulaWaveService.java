package com.efraiser.test.db.service.dy.dycheckformulawave;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.dy.DyAutoFormula;
import com.efraiser.test.db.model.dy.DyCheckFormulaWave;
import com.efraiser.test.db.model.dy.DyTableInfo;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.BaseService;

import java.util.List;
import java.util.Map;

public interface DyCheckFormulaWaveService extends BaseService {

    GridQueryPageResult getRdCheckFormulaList(String tabcode, String check_formula, String cUser, String valid_flag, int pageIndex, int pageSize);

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

    DyCheckFormulaWave fetchToEditCheckFormula(String id);


    DyCheckFormulaWave updateCheckFormulaValidFlag(String id, String validFlag, SysUser sysUser);

    void updateCheckFormulaValidFlag2(String parent, String validFlag, String checkProject, SysUser sysUser);

    List<DyAutoFormula> getCheckFormulaListByExcel(DyTableInfo tableInfo, List<String> formulaList, List<Map<String, String>> colMapList);

    void saveOrUpdateAutoCheckFormula(String tableId, List<DyAutoFormula> autoCheckFormulaList) throws Exception;

    List<String> getRdAutoFormulaList(String tableId);

    void updateCheckFormula(DyCheckFormulaWave checkformula, SysUser sysUser, String userRole);

    int getcountParentId(String tabcode, String tab, String i, String type, String c_user, String cUser);

    void delFormula(String tabcode, String type, String element, String checkProject);

    List<DyCheckFormulaWave> getList(String cUser, List<String> brNo);

    DyCheckFormulaWave EditCheckFormula(String parent, String element);

    List<DyCheckFormulaWave> EditCheckFormulas(String checkProject, String type, String parent, String cUser);

    void deleteFormula(String parent, String id);

    DyCheckFormulaWave getCPbyId(String id);


    void updateCheckFormula(DyCheckFormulaWave checkformula, String userId);

    List<DyCheckFormulaWave> getAll();

    /**
     * 根据报表编号集合获取校验公式集合
     *
     * @param tabCodes
     */
    List<DyCheckFormulaWave> getCheckFormulaListByTabCodesRepay(List<String> tabCodes, String reportDate, String cUser, String formulaType, String area);

    /**
     * 根据报表编号集合获取校验公式集合
     *
     * @param tabCodes
     */
    List<DyCheckFormulaWave> getCheckFormulaListByTabCodesSummary(List<String> tabCodes, String reportDate, String cUser, String formulaType, String area);

    void delAll();

    void add(DyCheckFormulaWave item);

    /**
     * 根据报表编号集合获取校验公式集合
     *
     * @param tabCodes
     */
    List<DyCheckFormulaWave> getCheckFormulaListByTabCodes(List<String> tabCodes, String reportDate, String cUser, String formulaType, String checkArea, String area, String brnoType);

    DyCheckFormulaWave getCPbyTabcode(SysUser sysUser, String tabcode, String versionNo, String element, String cUser, List<String> brNos, String searchBrno);

    List<DyCheckFormulaWave> EditCheckFormulasByElement(SysUser sysUser, String tabcode, String versionNo, String element, String cUser, List<String> brNos, String searchBrno);

    String getParentId(String tabcode, String user);

    Map<String, String> doInitDataMap(String tabCode, String versionNo, String cUser, String searchBrno);

    List<DyCheckFormulaWave> getCheckFormulaListByTabCodesForYD(
            String tabCode, String reportDate, String nowVersion, String lastVersion, String userId,
            String checkArea, String checkBrno, String checkType, String brNo);

    Map<String, String> doInitDataMapCS(String tabCode,
                                        String versionNo, String cUser);

    DyCheckFormulaWave getCPbyTabcodeCS(SysUser sysUser, String tabcode,
                                        String versionNo, String element, String cUser);

    List<DyCheckFormulaWave> EditCheckFormulasByElementCS(
            SysUser sysUser, String tabcode, String versionNo, String element,
            String cUser);

    List<DyCheckFormulaWave> getCheckFormulaListByTabCodesCS(
            String tabCode, String reportRate, String nowVersion,
            String lastVersion);
}

package com.efraiser.test.db.service.rd.rdcheckrormulawave;

import com.efraiser.test.common.util.GridQueryPageResult;
import com.efraiser.test.db.model.rd.RdAutoFormula;
import com.efraiser.test.db.model.rd.RdCheckFormulaWave;
import com.efraiser.test.db.model.rd.RdTableInfo;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.BaseService;

import java.util.List;
import java.util.Map;

public interface RdCheckFormulaWaveService extends BaseService {

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

    RdCheckFormulaWave fetchToEditCheckFormula(String id);

    RdCheckFormulaWave updateCheckFormulaValidFlag(String id, String validFlag, SysUser sysUser);

    void updateCheckFormulaValidFlag2(String parent, String validFlag, String checkProject, SysUser sysUser);


    List<RdAutoFormula> getCheckFormulaListByExcel(RdTableInfo tableInfo, List<String> formulaList, List<Map<String, String>> colMapList);

    void saveOrUpdateAutoCheckFormula(String tableId, List<RdAutoFormula> autoCheckFormulaList) throws Exception;

    List<String> getRdAutoFormulaList(String tableId);

    void updateCheckFormula(RdCheckFormulaWave checkformula, SysUser sysUser, String userRole);

    int getcountParentId(String tabcode, String tab, String i, String type, String c_user, String cUser);

    void delFormula(String tabcode, String type, String element,
                    String checkProject);

    void delFormula(String tabcode, String type, String brNo);

    void delFormulaEx(String tabcode, String type, String brNo, String userId);

    List<RdCheckFormulaWave> getList(String cUser, List<String> brNo);


    RdCheckFormulaWave EditCheckFormula(String parent, String element);

    List<RdCheckFormulaWave> EditCheckFormulas(String checkProject, String type, String parent, String cUser);

    void deleteFormula(String parent, String id);

    RdCheckFormulaWave getCPbyId(String id);

    void updateCheckFormula(RdCheckFormulaWave checkformula, String userId);

    List<RdCheckFormulaWave> getAll();

    /**
     * 根据报表编号集合获取校验公式集合
     *
     * @param tabCodes
     */
    List<RdCheckFormulaWave> getCheckFormulaListByTabCodesRepay(List<String> tabCodes, String reportDate, String cUser, String formulaType, String area);

    /**
     * 根据报表编号集合获取校验公式集合
     *
     * @param tabCodes
     */
    List<RdCheckFormulaWave> getCheckFormulaListByTabCodesSummary(List<String> tabCodes, String reportDate, String cUser, String formulaType, String area);

    String convert(Object param);

    void delAll();

    void add(RdCheckFormulaWave item);

    /**
     * 根据报表编号集合获取校验公式集合
     *
     * @param tabCodes
     */
    List<RdCheckFormulaWave> getCheckFormulaListByTabCodes(List<String> tabCodes, String reportDate, String cUser, String formulaType, String checkArea, String area, String brnoType);

    RdCheckFormulaWave getCPbyTabcode(SysUser sysUser, String tabcode, String versionNo, String element, String cUser, List<String> brNos, String searchBrno);

    List<RdCheckFormulaWave> EditCheckFormulasByElement(SysUser sysUser, String tabcode, String versionNo, String element, String cUser, List<String> brNos, String searchBrno);

    String getParentId(String tabcode, String user);

    Map<String, String> doInitDataMap(String tabCode, String versionNo, String cUser, String searchBrno);

    List<RdCheckFormulaWave> getCheckFormulaListByTabCodesForYD(
            String tabCode, String reportDate, String nowVersion, String lastVersion, String userId,
            String checkArea, String checkBrno, String checkType, String brNo);

    /**
     * 功能描述：机构使用，获取校验公式
     *
     * @param tabCode
     * @param reportDate
     * @param nowVersion
     * @param lastVersion
     * @param userId
     * @param checkType
     * @param brNo
     * @return
     * @author
     * @date 2017年6月30日
     * @modify log:
     */
    List<RdCheckFormulaWave> getCheckFormulaListByTabCodesForYD_JG(
            String tabCode, String reportDate, String nowVersion, String lastVersion, String userId,
            String checkType, String brNo);

    Map<String, String> doInitDataMapCS(String tabCode,
                                        String versionNo, String cUser);

    RdCheckFormulaWave getCPbyTabcodeCS(SysUser sysUser, String tabcode,
                                        String versionNo, String element, String cUser);

    List<RdCheckFormulaWave> EditCheckFormulasByElementCS(
            SysUser sysUser, String tabcode, String versionNo, String element,
            String cUser);

    List<RdCheckFormulaWave> getCheckFormulaListByTabCodesCS(
            String tabCode, String reportRate, String nowVersion,
            String lastVersion);

    /**
     * 功能描述：南京异动（旧），不含197号文
     *
     * @param tabCode
     * @param reportRate
     * @param nowVersion
     * @param lastVersion
     * @return
     * @author
     * @date 2018年5月4日
     * @modify log:
     */
    List<RdCheckFormulaWave> getCheckFormulaListByTabCodesNj(
            String tabCode, String reportRate, String nowVersion,
            String lastVersion);

    List<RdCheckFormulaWave> getCheckFormulaListByTabCodesSh(
            String tabCode, String reportRate, String nowVersion,
            String lastVersion, String type, String reportDate, String reportType);


    /**
     * 功能描述：将公式表中type为fr和fz的删除
     *
     * @author
     * @date 2017年10月27日
     * @modify log:
     */
    void clearCheckFormulaShangHai(String reportDate, String tabType);
}

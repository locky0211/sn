package com.efraiser.test.db.service.rd.rdtablecolumncontrast;

import com.efraiser.test.db.model.rd.RdTableColumnContrast;
import com.efraiser.test.db.service.BaseService;

import java.util.List;
import java.util.Map;

public interface RdTableColumnContrastService extends BaseService {


    List<Integer> getColNames(String tableId, Integer part, List<Integer> valueCols);


    /**
     * 获取封装后的报表关系对应Map
     *
     * @param tableId
     * @return
     */
    Map<String, String> getColNumMap(String tableId);

    /**
     * 获取封装后的报表关系对应Map
     *
     * @param tableId
     * @return
     */
    Map<String, String> getFileNumMap(String tableId);


    /**
     * 获取报表某部分对照关系集合
     *
     * @param tableId 报表信息ID
     * @param partNum 第几部分
     * @return
     */
    List<RdTableColumnContrast> getRdTableColumnContrastList(String tableId, int partNum);


    boolean isCell(String tableId, int part_num, int col_num);

    List<RdTableColumnContrast> getAll();

    void delAll();

    void add(RdTableColumnContrast item);
}

package com.efraiser.test.db.service.sys.sysggzd;

import com.efraiser.test.db.model.sys.SysGgzd;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface SysGgzdService<T> extends BaseService {


    /**
     * 判断唯一性
     *
     * @param column
     * @return
     */
    boolean checkGgzd(String value, String column, String zuId);


    /**
     * 根据ID删除字典信息
     *
     * @throws Exception
     */
    void deleteGgzd(String id) throws Exception;


    /**
     * 过滤指定公共字典id下的所有子节点,字典id为null则查询该组下的所有节点
     *
     * @param id  字典id
     * @param gId 数据组id
     * @return
     */
    List<SysGgzd> getGgzdListNotLower(String id, String gId, boolean expanded);


    /**
     * 根据组id获取字典信息
     *
     * @param groupId  组id
     * @param expanded 是否展开数据
     * @return
     */
    List<SysGgzd> getGgzdListByGroupId(String groupId, boolean expanded);


    /**
     * 根据组ID获取公共字典信息用户懒加载
     *
     * @param zdValue
     * @param groupId
     * @return
     */
    List<SysGgzd> getGgzdListByGroupIdForLazy(String zdValue, String groupId);


    /**
     * 根据zdValue查看公告字典信息
     *
     * @param zdValue
     * @param gId
     * @return
     */
    SysGgzd getGgzdByZdValue(String zdValue, String gId);


    /**
     * 获取所有的GID集合,去重复
     *
     * @return
     */
    List<String> getGidList();


    String getZdValuebyZdName(String zdName, String g_Id);


    List<String> getBrnoType();

    String getZdNameByZdValue(String zdValue);


    /**
     * 功能描述：Ci下根据信息记录类型和标识变更表获取基础表和信息表
     *
     * @param infoType    信息记录类型
     * @param bGTableName 标识变更表
     * @return
     */
    List<String> getSysGgzdInCi(String infoType, String bGTableName);


    /**
     * 功能描述：根据zdValue和GID获取zdName
     *
     * @param zdValue
     * @param g_Id
     * @return
     * @author
     * @date 2017年6月7日
     * @modify log:
     */
    String getZdNamebyZdValue(String zdValue, String g_Id);


    /**
     * 功能描述：根据Gid查询对象
     *
     * @param gId
     * @return
     * @author
     * @date 2017年10月27日
     * @modify log:
     */
    List<SysGgzd> getGgzdListByGid(String gId);


    /**
     * 功能描述：根据Gid获取zdValue
     *
     * @param gId
     * @return
     * @author
     * @date 2018年5月30日
     * @modify log:
     */
    List<String> getZdValueByGid(String gId);


    /**
     * 功能描述：根据Gid获取zdName
     *
     * @param gId
     * @return
     * @author
     * @date 2018年7月25日
     * @modify log:
     */
    List<String> getZdNameByGid(String gId);


    /**
     * 功能描述：根据Gid和value获取zdName
     *
     * @param gId
     * @return
     * @author
     * @date 2018年7月25日
     * @modify log:
     */
    List<String> getZdNameByGidAndValue(String gId, String value);


    /**
     * 根据id批量删除
     * @param gIdList
     */
    void clearGgzdByIds(List<String> gIdList);
}

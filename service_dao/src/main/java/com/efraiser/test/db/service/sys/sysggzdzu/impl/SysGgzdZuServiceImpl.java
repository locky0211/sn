package com.efraiser.test.db.service.sys.sysggzdzu.impl;

import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysGgzdGroup;
import com.efraiser.test.db.service.BaseServiceImpl;
import com.efraiser.test.db.service.sys.sysggzd.SysGgzdService;
import com.efraiser.test.db.service.sys.sysggzdzu.SysGgzdZuService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Sql;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 公共字典组
 */
@Service
public class SysGgzdZuServiceImpl extends BaseServiceImpl<SysGgzdGroup> implements SysGgzdZuService<SysGgzdGroup> {

	@Autowired
	private SysGgzdService sysGgzdService;


	@Override
	public boolean checkGgzdZu(String id) {
		return super.count(Cnd.where("gId", "=", id)) > 0;
	}

	@Override
	public List<SysGgzdGroup> getGgzdZuListNotLower(String gId) {
		if (StrUtil.isNotNull(gId)) {
			String sqlStr = "WITH report(G_ID, PID) AS  (  SELECT G_ID, PID  FROM  SYS_GGZD_GROUP WHERE G_ID =@gId  UNION ALL SELECT b.G_ID, b.PID FROM report a, SYS_GGZD_GROUP b WHERE b.PID = a.G_ID ) select G_ID from report";
			Sql sql = Sqls.create(sqlStr);
			sql.params().set("gId", gId);
			List<String> zdIdList = super.getListStringBySqlStr(sql);
			return super.query(Cnd.wrap(" G_ID not in(" + StrUtil.convertJoin(zdIdList, null) + ")"), null);
		} else {
			return super.query(null, null);
		}
	}

	@Override
	public void deletGGzdZu(String gId) throws Exception {
		// 根据gid获取所有关联节点gid
		String sqlStr = "WITH report(G_ID, PID) AS  (  SELECT G_ID, PID  FROM  SYS_GGZD_GROUP WHERE G_ID = @groupId  UNION ALL SELECT b.G_ID, b.PID FROM report a, SYS_GGZD_GROUP b WHERE b.PID = a.G_ID ) select G_ID from report";
		Sql sql = Sqls.create(sqlStr);
		sql.params().set("groupId", gId);
		List<String> gIdList = super.getListStringBySqlStr(sql);
		super.clear(Cnd.wrap(" G_ID in(" + StrUtil.convertJoin(gIdList, null) + ")"));

		// 删除关联字典信息
		sysGgzdService.clearGgzdByIds(gIdList);
	}

}

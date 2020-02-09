package com.efraiser.test.scheduler.task.job;

import java.util.TimerTask;

import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.db.model.rd.*;
import com.efraiser.test.db.model.sys.SysNotice;
import com.efraiser.test.db.service.rd.rdcheckformula.RdCheckFormulaService;
import com.efraiser.test.db.service.rd.rdcheckformula.impl.RdCheckFormulaServiceImpl;
import com.efraiser.test.db.service.rd.rdtablebasicinfo.RdTableBasicInfoService;
import com.efraiser.test.db.service.rd.rdtablecolumncontrast.RdTableColumnContrastService;
import com.efraiser.test.db.service.rd.rdtableinfo.RdTableInfoService;
import com.efraiser.test.db.service.rd.rdtablemodel.RdTableModelService;
import com.efraiser.test.db.service.rd.rdtablemodelpct.RdTableModelPCTService;
import com.efraiser.test.db.service.rd.rdtableorgans.RdTableOrgansService;
import com.efraiser.test.db.service.sys.sysuser.SysUserService;
import org.nutz.http.Http;
import org.nutz.http.Response;
import org.nutz.json.Json;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TimerAction extends TimerTask {
	
	private Logger logger = LoggerFactory.getLogger(TimerAction.class);
	
	public static RdCheckFormulaService rdCheckFormulaService;

	public static RdTableBasicInfoService rdTableBasicInfoService;

	public static RdTableColumnContrastService rdTableColumnContrastService;

	public static RdTableInfoService rdTableInfoService;

	public static RdTableModelService rdTableModelService;

	public static RdTableModelPCTService rdTableModelPCTService;

	public static RdTableOrgansService rdTableOrgansService;
	
	public static SysUserService sysUserService;
	
	public static String updateUrl;
	
	public static String updateEnabled;

	@Override
	public void run() {
		logger.info("开始更新");
		update1104Formula();
		logger.info("更新结束");
	}
	
	private void update1104Formula() {
		
		logger.info("开始更新");
		if(updateUrl.indexOf("http://")>=0)
		{
			Response resp = Http.get(updateUrl+"/sys/updateServer/get1104Formula.nut");
			if (resp.isOK()) {
				
				RdCheckFormula[] lists=Json.fromJson(RdCheckFormula[].class, resp.getContent());
				if(lists.length>0)
				{
					rdCheckFormulaService.delAll();
					for(int i = 0;i < lists.length; i++)
					{
						rdCheckFormulaService.add(lists[i]);
					}
				}
				logger.info("1104公式数量："+lists.length);
				
				SysNotice sn = new SysNotice();
				sn.setContent("<p>预审核系统完成1104校验公式自动更新，更新数目："+lists.length+"</p>");
				sn.setTitle("1104校验公式自动更新");
				sn.setReleaseDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
				sn.setReleaseUser("system");

				RdCheckFormulaServiceImpl rdCheckFormulaServiceImpl = (RdCheckFormulaServiceImpl) rdCheckFormulaService;

				rdCheckFormulaServiceImpl.dao().insert(sn);
				
			}
			
			int updateTableNum=0;
			
			resp = Http.get(updateUrl+"/sys/updateServer/get_RD_TABLE_BASIC_INFO.nut");
			if (resp.isOK()) {
				RdTableBasicInfo[] lists=Json.fromJson(RdTableBasicInfo[].class, resp.getContent());
				if(lists.length>0)
				{
					rdTableBasicInfoService.delAll();
					for(int i = 0;i < lists.length; i++)
					{
						rdTableBasicInfoService.add(lists[i]);
					}
					updateTableNum++;
				}
				logger.info("rdTableBasicInfo数量："+lists.length);
			}
			
			resp = Http.get(updateUrl+"/sys/updateServer/get_RD_TABLE_COLUMN_CONTRAST.nut");
			if (resp.isOK()) {
				RdTableColumnContrast[] lists=Json.fromJson(RdTableColumnContrast[].class, resp.getContent());
				if(lists.length>0)
				{
					rdTableColumnContrastService.delAll();
					for(int i = 0;i < lists.length; i++)
					{
						rdTableColumnContrastService.add(lists[i]);
					}
					updateTableNum++;
				}
				logger.info("rdTableColumnContrast数量："+lists.length);
			}
			
			resp = Http.get(updateUrl+"/sys/updateServer/get_RD_TABLE_INFO.nut");
			if (resp.isOK()) {
				RdTableInfo[] lists=Json.fromJson(RdTableInfo[].class, resp.getContent());
				if(lists.length>0)
				{
					rdTableInfoService.delAll();
					for(int i = 0;i < lists.length; i++)
					{
						rdTableInfoService.add(lists[i]);
					}
					updateTableNum++;
				}
				logger.info("rdTableInfo数量："+lists.length);
			}
			
			resp = Http.get(updateUrl+"/sys/updateServer/get_RD_TABLE_MODEL.nut");
			if (resp.isOK()) {
				RdTableModel[] lists=Json.fromJson(RdTableModel[].class, resp.getContent());
				if(lists.length>0)
				{
					rdTableModelService.delAll();
					for(int i = 0;i < lists.length; i++)
					{
						rdTableModelService.add(lists[i]);
					}
					updateTableNum++;
				}
				logger.info("rdTableModel数量："+lists.length);
			}
			
			resp = Http.get(updateUrl+"/sys/updateServer/get_RD_TABLE_MODEL_PCT.nut");
			if (resp.isOK()) {
				RdTableModelPCT[] lists=Json.fromJson(RdTableModelPCT[].class, resp.getContent());
				if(lists.length>0)
				{
					rdTableModelPCTService.delAll();
					for(int i = 0;i < lists.length; i++)
					{
						rdTableModelPCTService.add(lists[i]);
					}
					updateTableNum++;
				}
				logger.info("rdTableModelPCT数量："+lists.length);
			}
			
			resp = Http.get(updateUrl+"/sys/updateServer/get_RD_TABLE_ORGANS.nut");
			if (resp.isOK()) {
				RdTableOrgans[] lists=Json.fromJson(RdTableOrgans[].class, resp.getContent());
				if(lists.length>0)
				{
					rdTableOrgansService.delAll();
					for(int i = 0;i < lists.length; i++)
					{
						rdTableOrgansService.add(lists[i]);
					}
					updateTableNum++;
				}
				logger.info("rdTableOrgans数量："+lists.length);
			}
			
			/*resp = Http.get(updateUrl+"/sys/updateServer/get_SYS_USER.nut");
			if (resp.isOK()) {
				SysUser[] lists=Json.fromJson(SysUser[].class, resp.getContent());
				if(lists.length>0)
				{
					sysUserService.delAll();
					for(int i = 0;i < lists.length; i++)
					{
						sysUserService.add(lists[i]);
					}
					updateTableNum++;
				}
				logger.info("sysUser数量："+lists.length);
			}*/
			
			SysNotice sn = new SysNotice();
			sn.setContent("<p>预审核系统完成1104模板配置自动更新，更新数量："+updateTableNum+"</p>");
			sn.setTitle("1104模板配置自动更新");
			sn.setReleaseDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
			sn.setReleaseUser("system");

			RdCheckFormulaServiceImpl rdCheckFormulaServiceImpl = (RdCheckFormulaServiceImpl)rdCheckFormulaService;
			rdCheckFormulaServiceImpl.dao().insert(sn);
		}
		logger.info("更新结束");
	}

}

package com.efraiser.test.scheduler.task.job;

import java.io.File;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.SpringContextUtil;
import com.efraiser.test.db.model.ews.EastTask;
import com.efraiser.test.db.model.ews.EastTaskLog;
import com.efraiser.test.db.service.ews.easttask.impl.EastTaskServiceImpl;
import com.efraiser.test.scheduler.task.QuartzTask;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.nutz.dao.sql.SqlCallback;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ExcuteFileTask implements QuartzTask {
	static Logger log = LoggerFactory.getLogger(ExcuteFileTask.class);
	final static Logger logger = LoggerFactory.getLogger(ExcuteFileTask.class);

	private EastTaskServiceImpl eastTaskServiceImpl;

	@Override
	public void execute() throws Exception {
		if (eastTaskServiceImpl == null) {
			eastTaskServiceImpl =  (EastTaskServiceImpl) SpringContextUtil.getBean("eastTaskServiceImpl");
		}
		Criteria cri = Cnd.cri();
		cri.where().and("flag", "=", "1");
		
		List<EastTask> et = eastTaskServiceImpl.query(cri, null);
		EastTaskLog etl = new EastTaskLog();
		EastTask ea = et.get(0);
		//获取本月最后一天
		Calendar calendar = Calendar.getInstance();
		calendar.set(Calendar.MONTH,calendar.get(Calendar.MONTH));
		calendar.set(Calendar.DATE,1);
		calendar.add(Calendar.DATE,-1);
		DateFormat format = new SimpleDateFormat("yyyyMMdd");
		System.out.println(format.format(calendar.getTime()));
			
		String fileName = null ;
		String filePath = null;
		if(ea.getSysType().equals("1")){
			//Windows下
			filePath = ea.getFilePath().replace("\\", "\\\\")+format.format(calendar.getTime())+"\\\\";
		}else{
			//Linux下
			filePath = ea.getFilePath()+format.format(calendar.getTime())+"/";
		}
			//File file = new File(ea.getFilePath()+format.format(calendar.getTime())+"\\\\");
			File file = new File(filePath);
			
			if(file.exists()){
			
			File files[] = file.listFiles();
			
			StringBuffer sb = new StringBuffer();
			
			//遍历存放所有文件名称
			int i = files.length;
				for(File F:files){
					sb.append(F.getName());
				}
			//判断文件名称中是否包括“.ok”字段	
			if(!sb.toString().contains(".ok")){
				log.info("=======================east数据尚未准备好！！！=========================");
				etl.setTableName("error!");
				etl.setImportLog("=======================east数据尚未准备好！！！=========================");
				etl.setImportTime(DateUtil.getNow(DateUtil.FORMAT_LONG));
				eastTaskServiceImpl.dao().insert(etl);
				throw new Exception();
			}else{
				for (File f:files){
					if(f.getName().contains(".del"))
						{
							fileName=f.getName();
							String s[]= fileName.split("\\.");
							String tablename = s[0];
							
							List<String> list = searchKey(filePath,fileName,tablename);
							//日志信息进库
							StringBuffer importlog = new StringBuffer();
							
							importlog.append("导入明细："+"  ");
							importlog.append("读取行数:"+list.get(0)+"  ");
							importlog.append("跳过行数:"+list.get(1)+"  ");
							importlog.append("装入行数:"+list.get(2)+"  ");
							importlog.append("拒绝行数:"+list.get(3)+"  ");
							importlog.append("删除行数:"+list.get(4)+"  ");
							importlog.append("落实行数:"+list.get(5));
							
							etl.setTableName(tablename);
							etl.setImportLog(importlog.toString());
							etl.setImportTime(DateUtil.getNow(DateUtil.FORMAT_LONG));
							eastTaskServiceImpl.dao().insert(etl);
						}
				}
			}
			}else{
				log.info("=======================文件路径不存在！！！=========================");
				etl.setTableName("error!");
				etl.setImportLog("=======================文件路径不存在！！！=========================");
				etl.setImportTime(DateUtil.getNow(DateUtil.FORMAT_LONG));
				eastTaskServiceImpl.dao().insert(etl);
				throw new Exception();
			}
	}

	
	
	private List<String> searchKey(String filePath,String fileName,String tablename) {
		String sqlter = "CALL SYSPROC.ADMIN_CMD('load from $tableName of del replace into EDW.$table')";
		Sql sql =  Sqls.create(sqlter);
		sql.vars().set("tableName", filePath+fileName);
		sql.vars().set("table", tablename);
		sql.setCallback(new SqlCallback() {
			
			@Override
			public Object invoke(Connection arg0, ResultSet rs, Sql arg2) throws SQLException {
				
				List<String> list = new ArrayList<>();
					if(rs.next()){
						list.add(rs.getString(1));
						list.add(rs.getString(2));
						list.add(rs.getString(3));
						list.add(rs.getString(4));
						list.add(rs.getString(5));
						list.add(rs.getString(6));
					}
				return list;
			}
		});
		eastTaskServiceImpl.dao().execute(sql);
		return sql.getList(String.class);
	}
}

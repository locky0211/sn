package com.efraiser.test.project.actiion;


import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.DateUtil;
import com.efraiser.test.common.util.RequestResult;
import com.efraiser.test.common.util.StrUtil;
import com.efraiser.test.db.model.sys.SysRzgl;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.sys.sysrzgl.SysRzglService;
import com.efraiser.test.db.service.sys.sysrzgl.impl.SysRzglServiceImpl;
import com.efraiser.test.db.service.sys.systablequery.SysTableQueryService;
import com.efraiser.test.db.service.util.ExportExcelService;
import com.efraiser.test.project.util.UpDownLoadUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.HashMap;

@Controller
@RequestMapping("sys/table/query")
public class SysTableQueryController extends BaseController {

    private Logger logger = LoggerFactory.getLogger(SysTableQueryController.class);

    @Autowired
    private SysTableQueryService sysTableQueryService;

    @Autowired
    private SysRzglService sysRzglService;

    @Autowired
    private ExportExcelService exportExcelService;

    @RequestMapping("/excuteQuery")
    public ModelAndView excuteQuery(String sqls, HttpServletRequest request) {

        SysUser user = (SysUser) request.getSession().getAttribute(SystemConstants.SESSION_USER);
        try {
            if (StrUtil.isNotNull(sqls)) {

                HashMap<String, Object> mapList = sysTableQueryService.getQueryResult(sqls);
                request.setAttribute("mapList", mapList.get("maplist"));
                request.setAttribute("info", "执行成功,本次执行了" + mapList.get("index") + "条语句");
                if (mapList.size() > 0) {   //!=0

                    String[] sql = sqls.split(";");
                    SysRzglServiceImpl sysRzglServiceImpl = (SysRzglServiceImpl) sysRzglService;
                    for (int i = 0; i < sql.length; i++) {
                        SysRzgl rzgl = new SysRzgl();
                        rzgl.setRzNr(sql[i]);
                        rzgl.setRzYh(user.getUserId());
                        rzgl.setRzDate(DateUtil.getNow("yyyyMMdd HH:mm:ss"));
                        sysRzglServiceImpl.dao().insert(rzgl);
                    }
                }
            }

        } catch (Exception e) {
            logger.error("excuteQuery() error! sqls:{" + sqls + "}", e);
            request.setAttribute("ex", e.toString());
        }

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("/sys/jsp/sys_tablequery_iframe");

        return modelAndView;

    }


    @RequestMapping("/getQueryRzgl")
    @ResponseBody
    public Object getQueryRzgl(String rzDate, String rzYh, int pageIndex, int pageSize) {
        return sysRzglService.getQueryRzgl(rzDate, rzYh, pageIndex, pageSize);
    }


    @RequestMapping("/exportExcel")
    @ResponseBody
    public Object exportExcel(String excelSql, HttpServletRequest request) throws Exception {
        SysUser user = (SysUser) request.getSession().getAttribute(SystemConstants.SESSION_USER);
        String url = exportExcelService.exportExcelForSql(excelSql, user.getUserId());
        if (StrUtil.isNotNull(url)) {
            return requestResult(true, url);
        }
        return requestResult(false, "");
    }

    @RequestMapping("/getExcel")
    public void getExcel(String fileName, HttpServletResponse response) throws IOException {

        UpDownLoadUtil.downloadFile(fileName, response);
    }

    @RequestMapping("/doReportImport")
    @ResponseBody
    public RequestResult doReportImport(String excelFile, String excelFilePath, HttpServletRequest request) {

        InputStreamReader read = null;
        try {
            String encoding = "GBK";
            StringBuffer sb = new StringBuffer();
            File file = new File(excelFilePath);
            if (file.isFile() && file.exists()) { //判断文件是否存在
                read = new InputStreamReader(new FileInputStream(file), encoding);//考虑到编码格式
                BufferedReader bufferedReader = new BufferedReader(read);
                String lineTxt = null;
                while ((lineTxt = bufferedReader.readLine()) != null) {
                    System.out.println(lineTxt);
                    sb.append(lineTxt);
                }
//                read.close();

                String sqls = sb.toString();
                if (StrUtil.isNotNull(sqls)) {
                    SysUser user = (SysUser) request.getSession().getAttribute(SystemConstants.SESSION_USER);

                    HashMap<String, Object> mapList = sysTableQueryService.getQueryResult(sqls);
                    request.setAttribute("mapList", mapList.get("maplist"));
                    request.setAttribute("info", "执行成功,本次执行了" + mapList.get("index") + "条语句");
    				/*if(mapList.size() > 0){   //!=0
    					SysRzgl rzgl = new SysRzgl();
    					String[] sql = sqls.split(";");
    					for(int i = 0; i < sql.length; i++){
    						rzgl.setRzNr(sql[i]);
    						rzgl.setRzYh(user.getUserId());
    						rzgl.setRzDate(DateUtil.getNow("yyyyMMdd HH:mm:ss"));
    						sysRzglService.dao().insert(rzgl);
    					}
    				}*/
                }
                return requestResult(true, "");
            } else {
                return requestResult(false, "找不到指定的文件");
            }
        } catch (Exception e) {
            logger.error("doReportImport() error! excelFile :[" + excelFile + "],excelFilePath:{" + excelFilePath + "}", e);
            return requestResult(false, e.getMessage());
        } finally {
            try {
                read.close();
            } catch (IOException e) {
                logger.error("doReportImport() error!", e);
            }
        }

    }

}

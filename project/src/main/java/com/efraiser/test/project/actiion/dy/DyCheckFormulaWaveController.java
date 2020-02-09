package com.efraiser.test.project.actiion.dy;

import com.alibaba.fastjson.JSONObject;
import com.efraiser.test.common.constant.DyTableConstants;
import com.efraiser.test.common.constant.SystemConstants;
import com.efraiser.test.common.util.*;
import com.efraiser.test.common.util.nutz.R;
import com.efraiser.test.common.vo.DyCheckFormulaList;
import com.efraiser.test.db.model.dy.DyCheckFormulaRecord;
import com.efraiser.test.db.model.dy.DyCheckFormulaWave;
import com.efraiser.test.db.model.dy.DyTableInfo;
import com.efraiser.test.db.model.dy.DyTableModel;
import com.efraiser.test.db.model.sys.SysBmgl;
import com.efraiser.test.db.model.sys.SysUser;
import com.efraiser.test.db.service.cache.impl.SysBmglCache;
import com.efraiser.test.db.service.dy.dycheckformularecord.DyCheckFormulaRecordService;
import com.efraiser.test.db.service.dy.dycheckformularecord.impl.DyCheckFormulaRecordServiceImpl;
import com.efraiser.test.db.service.dy.dycheckformulatemp.DyCheckFormulaTempService;
import com.efraiser.test.db.service.dy.dycheckformulawave.DyCheckFormulaWaveService;
import com.efraiser.test.db.service.dy.dycheckformulawave.impl.DyCheckFormulaWaveServiceImpl;
import com.efraiser.test.db.service.dy.dytablecolumncontrast.DyTableColumnContrastService;
import com.efraiser.test.db.service.dy.dytableinfo.DyTableInfoService;
import com.efraiser.test.db.service.dy.dytablemodel.DyTableModelService;
import com.efraiser.test.db.service.sys.sysggzd.SysGgzdService;
import com.efraiser.test.db.service.sys.sysuser.SysUserService;
import com.efraiser.test.db.service.sys.sysuserdep.SysUserDepService;
import com.efraiser.test.db.util.DyTableUtil;
import com.efraiser.test.project.actiion.BaseController;
import org.nutz.dao.Cnd;
import org.nutz.dao.Sqls;
import org.nutz.dao.pager.Pager;
import org.nutz.dao.sql.Criteria;
import org.nutz.dao.sql.Sql;
import org.nutz.json.Json;
import org.nutz.lang.Mirror;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("dy/check/wave")
public class DyCheckFormulaWaveController  extends BaseController {

	private Logger logger = LoggerFactory.getLogger(DyCheckFormulaWaveController.class);

	@Autowired
	private DyCheckFormulaWaveService dyCheckFormulaWaveService;
	@Autowired
	private DyCheckFormulaRecordService dyCheckFormulaRecordService;
	@Autowired
	private DyCheckFormulaTempService dyCheckFormulaTempService;
	@Autowired
	private SysUserDepService sysUserDepService;
	@Autowired
	private DyTableColumnContrastService dyTableColumnContrastService;
	@Autowired
	private DyTableInfoService dyTableInfoService;
	@Autowired
	private DyTableModelService dyTableModelService;
	@Autowired
	private SysGgzdService sysGgzdService;
	@Autowired
	private SysUserService sysUserService;

	@Autowired
	private DyTableUtil dyTableUtil;


	@RequestMapping("/exportExcel")
	@ResponseBody
	public Object exportExcel(String id) {
		return dyCheckFormulaWaveService.exportExcel(id);
	}

	/**
	 * 获取复杂异动校验公式列表
	 * 
//	 * @param check_type
//	 *            校验类型
//	 * @param tabcode
//	 *            报表代码
//	 * @param check_formula
//	 *            校验公式
//	 * @param valid_flag
//	 *            启用状态
//	 * @param pageIndex
//	 * @param pageSize
	 * @return
	 */
	@RequestMapping("/getDyCheckFormulaYiDongList")
	@ResponseBody
	public Object getDyCheckFormulaYiDongList(String cUser, String tabcode, String element, String checkProject, HttpServletRequest req) {
		
		SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
		if (StrUtil.isNull(cUser)) {
			cUser = sysUser.getUserId();
		}
		List<String> brNos = sysUserDepService.getDepByUserId(sysUser.getUserId());
		return dyCheckFormulaWaveService.getList(cUser,brNos);
	}

	/**
	 * 修改时获取校验公式数据
	 *
	 * @param id
	 *            校验公式id
	 * @param req
	 * @return
	 */
	@RequestMapping("/toEditCheckFormulaCS")
	public ModelAndView toEditCheckFormulaCS(String id, String page,HttpServletRequest req) {

		page = page.replace(".jsp", "");
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName(page);

		//加密前版本
		//return rdCheckFormulaService.fetchToEditCheckFormula(id);
		DyCheckFormulaWave dyCheckFormula = dyCheckFormulaWaveService.fetchToEditCheckFormula(id);
		if(dyCheckFormula.getCheckFormula().contains("em_")){
			dyCheckFormula.setCheckFormula(FormulaEncrypt.getFormulaDecrypt(dyCheckFormula.getCheckFormula()));
		}
		modelAndView.addObject("obj", dyCheckFormula);
		return  modelAndView;
	}

	/**
	 * 修改时获取异动校验公式数据
	 * 
	 * @param id
	 *            校验公式id
	 * @param req
	 * @return
	 */
	@RequestMapping("/toEditCheckFormula")
	public ModelAndView toEditCheckFormula(String parent, String id, String page, HttpServletRequest req) {
		page = page.replace(".jsp", "");
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName(page);


		DyCheckFormulaWave dyFormula= dyCheckFormulaWaveService.getCPbyId(id);
		List<DyCheckFormulaWave> dyFormulas= dyCheckFormulaWaveService.EditCheckFormulas(dyFormula.getCheckProject(),dyFormula.getType(),dyFormula.getParent(),dyFormula.getcUser());

		modelAndView.addObject("dyFormula", dyFormula);
		modelAndView.addObject("dyFormulas", dyFormulas);

		return  modelAndView;
	}
	



	/**
	 * 功能描述：获取父节点(异动公式)
	 * @author 
	 * @date 2016年10月26日
	 * @param tabcode
	 * @param checkformula
	 * @param cUser
	 * @return
	 * @modify log:
	 */
	private String getParentId(String tabcode,
                               DyCheckFormulaWave checkformula, String cUser) {

		DyCheckFormulaWaveServiceImpl dyCheckFormulaWaveServiceImpl=(DyCheckFormulaWaveServiceImpl)dyCheckFormulaWaveService;

		String parentId="";
		List<DyCheckFormulaWave> formulaParent = dyCheckFormulaWaveServiceImpl.query(Cnd.where("TABCODE","=",tabcode).and("TYPE","=","3").and("C_USER","=",cUser),null);
		if(formulaParent.size()==0){
			DyCheckFormulaWave rtb =new DyCheckFormulaWave();
			rtb.setTabcode(tabcode);
			rtb.setCheckProject(tabcode);
			rtb.setCheckFormula("");
			rtb.setCheckRisk("");
			rtb.setCheckFormulaMark("");
			rtb.setType("3");
			rtb.setcUser(cUser);
			rtb.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
			rtb.setValidFlag("y");
			rtb = dyCheckFormulaWaveServiceImpl.dao().insert(rtb);
			parentId=rtb.getId();
		}else{
			parentId=formulaParent.get(0).getId();
		}
		return parentId;
	}


	/**
	 * 功能描述：拼接异动公式
	 * @author 
	 * @date 2016年10月26日
	 * @param leftValue
	 * @param rightValue
	 * @param model
	 * @return
	 * @modify log:
	 */
	private  String getFormulaModel(int leftValue, int rightValue,
                                          String model) {
		String formulaModel;
		int middle;
		if(leftValue==rightValue){
			if(leftValue==0){
				formulaModel="("+model+"=0)AND("+model+"=0)";
			}else{
				formulaModel="("+leftValue+"%="+model+")AND("+model+"="+rightValue+"%)";
			}
		}else{
			if(leftValue>rightValue){
				middle=rightValue;
				rightValue=leftValue;
				leftValue=middle;
			}
			formulaModel="("+leftValue+"%<"+model+")AND("+model+"<"+rightValue+"%)";
		}
		return formulaModel;
	}

	/**
	 * 功能描述：拼接公式模板
	 * @author 
	 * @date 2016年10月26日
	 * @param tabcode
	 * @param element
	 * @param lastElement
	 * @return
	 * @modify log:
	 */
	private  String getAOneValue(String tabcode,
                                       String element, String lastElement) {
		String model;
		String oper="$oper$";
		String A1=element;
		String A0=lastElement.replace("_", oper);
		model="("+A1+"-("+A0+"))/("+A0+")";
		return model;
	}

	/**
	 * 功能描述：拼接阈值
	 * @author 
	 * @date 2016年10月26日
	 * @param leftValue
	 * @param rightValue
	 * @return
	 * @modify log:
	 */
	private  String getValueArea(int leftValue, int rightValue) {
		String valueArea;
		int middle;
		if(leftValue==0&&rightValue==0){
			valueArea="0";
		}else{
			if(leftValue>rightValue){
				middle=rightValue;
				rightValue=leftValue;
				leftValue=middle;
			}
			valueArea="(";
			valueArea+=""+leftValue+"%,"+rightValue+"%";
			valueArea+=")";
		}
		return valueArea;
	}

	
	/**
	 * 新增或修改异动校验公式(系统公式由于每个机构有一套异动的校验规则，所以cUser统一设为admin)
	 * 
	 * @param req
	 * @return
	 */
	@RequestMapping("/addOrUpdateYiDongCheckFormula2")
	@ResponseBody
	public Object addOrUpdateYiDongCheckFormula2(String jsonstr, String tabcode, String type, String checkProject, String id, String cUser, HttpServletRequest req) {

		DyCheckFormulaWaveServiceImpl dyCheckFormulaWaveServiceImpl=(DyCheckFormulaWaveServiceImpl)dyCheckFormulaWaveService;

		try {
			DyCheckFormulaList[] DyCheckFormulas= Json.fromJson(DyCheckFormulaList[].class, jsonstr);
			if(StrUtil.isNull(cUser)){
				SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
				cUser = sysUser.getUserId();
			}
			for(int i=0;i<DyCheckFormulas.length;i++){
				if(DyCheckFormulas[i].getId().equals("")||StrUtil.isNull(DyCheckFormulas[i].getId())||DyCheckFormulas[i].getId().equals("1234567890")){
					if(DyCheckFormulas[i].getIsDel().equals("0")){
						DyCheckFormulaWave checkformula=CreateCheckFormula(DyCheckFormulas[i],tabcode,type,checkProject,"admin");
						dyCheckFormulaWaveServiceImpl.dao().insert(checkformula);
						dyCheckFormulaRecordService.insertRecord("新增",checkformula);
					}
				}else{
					if(DyCheckFormulas[i].getIsDel().equals("0")){
						DyCheckFormulaWave checkformula=CreateCheckFormula(DyCheckFormulas[i],tabcode,type,checkProject,"admin");
						DyCheckFormulaWave formula= dyCheckFormulaWaveServiceImpl.fetch(DyCheckFormulas[i].getId());
						dyCheckFormulaRecordService.insertRecord("修改",formula);
						dyCheckFormulaWaveService.updateCheckFormula(checkformula, cUser);
					}else{
						DyCheckFormulaWave checkformula= dyCheckFormulaWaveServiceImpl.fetch(DyCheckFormulas[i].getId());
						dyCheckFormulaRecordService.insertRecord("删除",checkformula);
						dyCheckFormulaWaveServiceImpl.delete(DyCheckFormulas[i].getId());
					}
				}
			}
			return requestResult(true, null);
		} catch (Exception e) {
			logger.error("addOrUpdateYiDongCheckFormula2() error!  jsonstr:["+ jsonstr+"], tabcode:["+ tabcode+"], type:["+ type+"], checkProject:["+ checkProject+"], id:["+ id+"], cUser:["+ cUser+"]",e);
			return requestResult(false, null);
		}
	}
	
	private DyCheckFormulaWave CreateCheckFormula(DyCheckFormulaList dyCheckFormulaList,
                                                  String tabcode, String type, String checkProject, String cUser) {
		DyCheckFormulaWave checkformula=new DyCheckFormulaWave();
		checkformula.setId(dyCheckFormulaList.getId());
		checkformula.setTabcode(tabcode);
		checkformula.setType(type);
		checkformula.setCheckProject(checkProject);
		checkformula.setThisVersion(dyCheckFormulaList.getThisVersion());
		checkformula.setLastVersion(dyCheckFormulaList.getLastVersion());
		checkformula.setElement(dyCheckFormulaList.getElement());
		checkformula.setLastElement(dyCheckFormulaList.getLastElement());
		checkformula.setCheckRisk(dyCheckFormulaList.getCheckRisk());
		checkformula.setCheckArea(dyCheckFormulaList.getCheckArea());
		checkformula.setCheckBrno(dyCheckFormulaList.getCheckBrno());
		int leftValue=dyCheckFormulaList.getLeftValue();
		int rightValue=dyCheckFormulaList.getRightValue();
		checkformula.setLeftValue(leftValue);
		checkformula.setRightValue(rightValue);
		String element=dyCheckFormulaList.getElement();
		String lastElement;
		if(StrUtil.isNull(dyCheckFormulaList.getLastElement())){
			lastElement=dyCheckFormulaList.getElement();
		}else{
			lastElement=dyCheckFormulaList.getLastElement();
		}
		String valueArea= getValueArea(leftValue,rightValue);
		checkformula.setValueArea(valueArea);
		String model=getAOneValue(checkformula.getTabcode(),element,lastElement);
		String dValueModel=getdValueModel(checkformula.getTabcode(),element,lastElement);
		String formulaModel=getFormulaModel(leftValue,rightValue,model);
		checkformula.setdValueFormula(dValueModel);
//		checkformula.setCheckFormula(FormulaEncrypt.getFormulaEnctypt(formulaModel));
		checkformula.setCheckFormula(formulaModel);
		if (StrUtil.isNull(checkformula.getcUser())) {
			checkformula.setcUser(cUser);
		}
		String parent=getParentId(checkformula.getTabcode(),checkformula,checkformula.getcUser());
		checkformula.setParent(parent);
		checkformula.setValidFlag("y");
		checkformula.setCheckFormulaMark("");
		checkformula.setReportRate(dyCheckFormulaList.getReportRate());
		checkformula.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
		return checkformula;
		
	}

	/**
	 * 功能描述：拼接差值公式
	 * @author 
	 * @date 2016年10月26日
	 * @param tabcode
	 * @param element
	 * @param lastElement
	 * @return
	 * @modify log:
	 */
	private String getdValueModel(String tabcode, String element,
                                  String lastElement) {
		String model;
		String oper="$oper$";
		String A1=element;
		String A0=lastElement.replace("_", oper);
		model=A1+"-("+A0+")";
		return model;
	}


	/**
	 * 异动更新公式状态 (y:启用 n:停用)
	 * 
	 * @return
	 */
	@RequestMapping("/updateCheckFormulaStatus")
	@ResponseBody
	public RequestResult updateCheckFormulaStatus(String parent, String checkProject, String validFlag, HttpServletRequest req) {
		try {
			if ("y".equals(validFlag)) {
				validFlag = "n";
			} else {
				validFlag = "y";
			}
			SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
			dyCheckFormulaWaveService.updateCheckFormulaValidFlag2(parent, validFlag,checkProject,sysUser);
			return requestResult(true, null);
		} catch (Exception e) {
			logger.error("addOrUpdateYiDongCheckFormula2() error!  parent:["+ parent+"], checkProject:["+ checkProject+"], checkProject:["+ checkProject+"]",e);
			return requestResult(false, null);
		}
	}

	@RequestMapping("/deleteCheckFormula")
	@ResponseBody
	public RequestResult deleteCheckFormula(String parent, String id, HttpServletRequest req) {
		try {
			dyCheckFormulaWaveService.deleteFormula(parent,id);
			return requestResult(true, "");
		} catch (Exception e) {
			logger.error("addOrUpdateYiDongCheckFormula2() error!  parent:["+ parent+"], id:["+ id+"]",e);
			return requestResult(false, "");
		}
	}

	private String convert(Object param){
		if(param==null){
			return null;
		}
		return "'" + param + "'";
	} 
	
	/**
	 * 功能描述：获取当前登录人所要上报的报表列表
	 * @author 
	 * @date 2016年10月26日
	 * @param req
	 * @return
	 * @modify log:
	 */
	@RequestMapping("/getCheckFormulaYidongReport")
	@ResponseBody
	public Object getCheckFormulaYidongReport(String reportDate, HttpServletRequest req){
		try{
			SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
			if(sysUser.getUserId().equals("admin")){
			return dyTableInfoService.getDyTableInfoList(sysUser,reportDate);
			}else{
				List<String> sysUserDep = sysUserDepService.getDepByUserId(sysUser.getUserId());
				String[] brNos = dyTableUtil.delParentNode(StrUtil.convertJoinString(sysUserDep, ",")).split(",");
				String bmType="";
				String bmCategory="";
				for(int i=0;i<brNos.length;i++){
					SysBmgl bmgl = SysBmglCache.getBmglInfo(brNos[i]);
					if(i==0){
						bmType = bmType + bmgl.getBmType();
						bmCategory = bmCategory + bmgl.getBmCategory();
					}else{
						bmType = bmType + "," + bmgl.getBmType();	
						bmCategory = bmCategory + "," + bmgl.getBmCategory();
					}
				}
				return dyTableInfoService.getDytableInfoListByBmType(sysUser,StrUtil.reMoveRepeat(bmType, ","),StrUtil.reMoveRepeat(bmCategory, ","),reportDate);
			}
		} catch(Exception e){
			logger.error("getCheckFormulaYidongReport() error!  reportDate:["+ reportDate+"]",e);
			return null;
		}
		
	}

	/**
	 * 功能描述：获取当前报表，当前单元格的公式(登录人所管辖机构的公式)
	 * @author 
	 * @date 2016年10月26日
	 * @param tableId
	 * @param inputId
	 * @param versionNo
	 * @param cUser
	 * @param searchBrno
	 * @param req
	 * @modify log:
	 */
	@RequestMapping("/getFormulaByReport")
	public ModelAndView getFormulaByReport(String tableId, String inputId,String versionNo, String cUser, String searchBrno,String page, HttpServletRequest req){
		String inputIds[]=inputId.split("_");
		String element=inputIds[0]+"_"+inputIds[1]+"_"+inputIds[2];
		SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
		List<String> brNos = sysUserDepService.getDepByUserId(sysUser.getUserId());
		DyCheckFormulaWave dyFormula= dyCheckFormulaWaveService.getCPbyTabcode(sysUser,inputIds[0],versionNo,element,cUser,brNos,searchBrno);
		List<DyCheckFormulaWave> dyFormulas= dyCheckFormulaWaveService.EditCheckFormulasByElement(sysUser,inputIds[0],versionNo,element,cUser,brNos,searchBrno);
		if(dyFormula==null){
			dyFormula=new DyCheckFormulaWave();
			DyTableInfo tableInfo = dyTableInfoService.getInfoById(tableId);
			DyTableModel tableModels = dyTableModelService.getTableModelByRownum(tableId,inputIds[1]);
			Mirror<DyTableModel> dymMirror = Mirror.me(DyTableModel.class);
			String[] rowS = tableInfo.getRowInfo().split(DyTableConstants.STR_RC_SPLIT);
			String[] colS = tableInfo.getColInfo().split(DyTableConstants.STR_RC_SPLIT);
			for (int y = 0; y < rowS.length; y++) {
				String[] rowInfos = rowS[y].split(DyTableConstants.STR_SPLIT);
				if(Integer.valueOf(inputIds[1])<= Integer.valueOf(rowInfos[1])&& Integer.valueOf(inputIds[1])>= Integer.valueOf(rowInfos[2])){
					String[] colInfos = colS[y].split(DyTableConstants.STR_SPLIT);
					if(colInfos.length>2){
						String checkName="";
						String[] col=colInfos[2].split(",");
						for(int i=0;i<col.length;i++){
							checkName=dymMirror.getValue(tableModels, "field_" + col[col.length-1-i]).toString();
							if(checkName.startsWith("LD")||checkName.startsWith("LS")||checkName.startsWith("LPN")||checkName.startsWith("LPS")){
							}else{
								break;
							}
						}
						String[] name=checkName.split("#");
						String checkProject="["+inputIds[1]+"."+inputIds[2]+"]"+name[0];
						dyFormula.setCheckProject(CommUtil.trimStr(checkProject));
					}
					break;
				}
			}
			dyFormula.setId("1234567890");
			dyFormula.setTabcode(inputIds[0]);
			dyFormula.setElement(element);
			dyFormulas.add(dyFormula);
		}
		req.setAttribute("dyFormula", dyFormula);
		req.setAttribute("dyFormulas", dyFormulas);

		page = page.replace(".jsp", "");
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName(page);

		return  modelAndView;
	}
	
	/**
	 * 功能描述：批量添加异动公式
	 * @author 
	 * @date 2016年9月5日
	 * @param reportRate
	 * @param leftValue
	 * @param rightValue
	 * @param startDate
	 * @modify log:
	 */
	@RequestMapping("/autoAddFormulaYidong")
	@ResponseBody
	public Object autoAddFormulaYidong(String tabCode, String checkRisk, String reportRate, String leftValue, String rightValue,String startDate, String checkArea, String checkBrno,String cUser, HttpServletRequest req){
		try {
			if (StrUtil.isNull(cUser)) {
				SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
				cUser=sysUser.getUserId();
			}
			DyTableInfo tableInfo = dyTableInfoService.getInfoByTabcode(tabCode,startDate);//报表信息

			DyCheckFormulaWaveServiceImpl dyCheckFormulaWaveServiceImpl = (DyCheckFormulaWaveServiceImpl)dyCheckFormulaWaveService;

			//List<RdTableModel> tableModel = rdTableModelService.getModel(tableIds[x]);//报表模板
			String[] rowS = tableInfo.getRowInfo().split(DyTableConstants.STR_RC_SPLIT);
			String[] colS = tableInfo.getColInfo().split(DyTableConstants.STR_RC_SPLIT);

			List<DyCheckFormulaWave> dyCheckFormula = new ArrayList<DyCheckFormulaWave>();
			checkBrno= dyTableUtil.delParentNode(checkBrno);
			String[] checkBrnos=checkBrno.split(",");
			for (int y = 0; y < rowS.length; y++) {
				String[] rowInfos = rowS[y].split(DyTableConstants.STR_SPLIT);
				String[] colInfos = colS[y].split(DyTableConstants.STR_SPLIT);
				for(int i = Integer.parseInt(rowInfos[2]); i<= Integer.parseInt(rowInfos[1]); i++){
					for(int j = 0; j<(Integer.parseInt(colInfos[0])- Integer.parseInt(colInfos[1])+1); j++){
						DyTableModel tableModels = dyTableModelService.getTableModelByRownum(tableInfo.getTableId(), String.valueOf(i));
						Mirror<DyTableModel> rdmMirror = Mirror.me(DyTableModel.class);
						String checkProjectName="";
						String fieldValue="";
						boolean isBegin=true;
						int begin=0;
						if(isBegin){
							if(colInfos.length>2){
								//String[] nameValue=colInfos[2].split(",");//填入字符串列
								String checkName="";
									for(int k = 1; k<= Integer.parseInt(colInfos[0]); k++){
										if(rdmMirror.getValue(tableModels, "field_" + k)!=null){
											checkName=rdmMirror.getValue(tableModels, "field_" + k).toString();
											if(checkName.startsWith("LD")||checkName.startsWith("LS")){
												checkName=rdmMirror.getValue(tableModels,"field_" + (k-1)).toString();
												if(checkName.contains("LPN")||checkName.contains("LPS")){
													begin=k-1;
												}else{
													begin=k;
												}
												isBegin=false;
												break;
											}
										}
									}
									String[] name=checkName.split("#");
									if(checkName.contains("LPN")||checkName.contains("LPS")){
										checkProjectName=name[1];
									}else{
										checkProjectName=name[0];
									}
							}
						}
						if(begin!=0){
							fieldValue=rdmMirror.getValue(tableModels, "field_"+(j+begin)).toString();
							String[] isInt=fieldValue.split("#");
							if(isInt[0].equals("LD")&&(isInt[1].equals("1")||isInt[1].equals("0"))&&isInt.length<=3){
								String field="";
								if(Integer.parseInt(colInfos[1])==1){
									field=tabCode+"_"+i+"_"+ DyTableUtil.getFieldName("", j+begin-1);
								}else{
									field=tabCode+"_"+i+"_"+ DyTableUtil.getFieldName("", j);
								}

								for(int l=0;l<checkBrnos.length;l++){
									String sqlStr="SELECT COUNT(*) FROM DY.DY_CHECK_FORMULA WHERE TABCODE='"+tableInfo.getTabCode()+"' AND REPORT_RATE='" + reportRate + "' AND TYPE='2'  AND START_DATE='"+startDate+"'AND END_DATE='"+startDate+"' AND ELEMENT='"+field+"' AND CHECK_BRNO='"+checkBrnos[l]+"' AND CHECK_AREA='"+checkArea+"' AND C_USER='"+cUser+"'";
									int count= dyCheckFormulaWaveServiceImpl.singleInt(sqlStr);//判断是否存在校验该定位的公式
									if(count==0){//若没有该校验公式，插入
										DyCheckFormulaList formula=new DyCheckFormulaList();
										String checkProject="["+i+"."+DyTableUtil.getFieldName("", j)+"]"+checkProjectName;
										formula.setId(R.UU16());
										formula.setCheckRisk(checkRisk);
										formula.setElement(field);
										formula.setLastElement(field);
										formula.setLeftValue(Integer.parseInt(leftValue));
										formula.setRightValue(Integer.parseInt(rightValue));
										formula.setThisVersion(startDate);
										formula.setLastVersion(startDate);
										formula.setCheckArea(checkArea);
										formula.setCheckBrno(checkBrnos[l]);
										formula.setReportRate(reportRate);
										DyCheckFormulaWave checkFormula=autoCreateFormula(formula,tableInfo.getTabCode(),"2",checkProject,cUser);
										dyCheckFormula.add(checkFormula);
									}
								}
								//插入省局初始版本("JSS_NJS_XXTJC" 为南京信息统计处)
								String sqlStr="SELECT COUNT(*) FROM DY.DY_CHECK_FORMULA WHERE TABCODE='"+tableInfo.getTabCode()+"' AND REPORT_RATE='" + reportRate + "' AND TYPE='2'  AND START_DATE='"+startDate+"'AND END_DATE='"+startDate+"' AND ELEMENT='"+field+"' AND CHECK_BRNO='JSS_NJS_XXTJK' AND C_USER='"+cUser+"'";
								int count= dyCheckFormulaWaveServiceImpl.singleInt(sqlStr);//判断是否存在校验该定位的公式
								if(count==0){//若没有该校验公式，插入
									String[] reportRates = reportRate.split(",");
									for(int n = 0;n<reportRates.length;n++){
										DyCheckFormulaList formula=new DyCheckFormulaList();
										String checkProject="["+i+"."+DyTableUtil.getFieldName("", j)+"]"+checkProjectName;
										formula.setId(R.UU16());
										formula.setCheckRisk(checkRisk);
										formula.setElement(field);
										formula.setLastElement(field);
										formula.setLeftValue(Integer.parseInt(leftValue));
										formula.setRightValue(Integer.parseInt(rightValue));
										formula.setThisVersion(startDate);
										formula.setLastVersion(startDate);
										formula.setCheckArea(checkArea);
										formula.setCheckBrno("JSS_NJS_XXTJK");
										formula.setReportRate(reportRates[n]);
										DyCheckFormulaWave checkFormula=autoCreateFormula(formula,tableInfo.getTabCode(),"2",checkProject,cUser);
										dyCheckFormula.add(checkFormula);
									}
								}
							}else{
								if(fieldValue.equals("END")){
									break;
								}
							}
						}
						/*if(j+begin>Integer.parseInt(colInfos[0])){
							break;
						}*/
					}
				}
				
			}
			dyCheckFormulaWaveServiceImpl.dao().fastInsert(dyCheckFormula);
		return requestResult(true, null);
	} catch (Exception e) {
			logger.error("autoAddFormulaYidong() error!  tabCode:["+ tabCode+"]" +
					", checkRisk:["+ checkRisk+"]" +
					", reportRate:["+ reportRate+"]" +
					", leftValue:["+ leftValue+"]" +
					", rightValue:["+ rightValue+"]" +
					", startDate:["+ startDate+"]" +
					", checkArea:["+ checkArea+"]" +
					", cUser:["+ cUser+"]",e);
		return requestResult(false, null);
	}
			
}
	
	/**
	 * 功能描述：批量添加异动公式(不同版本)
	 * @author 
	 * @date 2016年9月5日
	 * @param checkRisk
	 * @param leftValue
	 * @param rightValue
	 * @param startDate
	 * @param endDate
	 * @modify log:
	 */
	@RequestMapping("/autoAddFormulaYidongVersion")
	@ResponseBody
	public Object autoAddFormulaYidongVersion(String jsonstr, String tabCode, String reportRate, String checkRisk, String leftValue,String rightValue, String startDate,String endDate,String checkArea, String checkBrno, String cUser,String elementNew, HttpServletRequest req){
		DyCheckFormulaWaveServiceImpl dyCheckFormulaWaveServiceImpl = (DyCheckFormulaWaveServiceImpl)dyCheckFormulaWaveService;
		try {
			if (StrUtil.isNull(cUser)) {
				SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
				cUser=sysUser.getUserId();
			}
			String msg="";
			DyCheckFormulaList[] dyCheckFormulas= Json.fromJson(DyCheckFormulaList[].class, jsonstr);
			String[] elementNews = elementNew.split(",");
			List<DyCheckFormulaWave> formulas = new ArrayList<DyCheckFormulaWave>();
			DyTableInfo tableInfo = dyTableInfoService.getInfoByTabcode(tabCode,startDate);//报表信息
			String[] rowS = tableInfo.getRowInfo().split(DyTableConstants.STR_RC_SPLIT);
			String[] colS = tableInfo.getColInfo().split(DyTableConstants.STR_RC_SPLIT);
			checkBrno = dyTableUtil.delParentNode(checkBrno);
			String[] checkBrnos = checkBrno.split(",");
			for(int i=0;i<dyCheckFormulas.length;i++){
				if(dyCheckFormulas[i].getIsDel().equals("0")){
					String[] elements=dyCheckFormulas[i].getElement().split("_");
					int part_num=DyTableUtil.getPartNumForYidong(Integer.parseInt(elements[1]),rowS);
					int col_num=DyTableUtil.getSeq(elements[2]);
					boolean isCell= dyTableColumnContrastService.isCell(tableInfo.getTableId(),part_num,col_num);
					if(isCell){
						DyTableModel tableModels = dyTableModelService.getTableModelByRownum(tableInfo.getTableId(),elements[1]);
						Mirror<DyTableModel> dymMirror = Mirror.me(DyTableModel.class);
						String[] colInfos=colS[part_num-1].split(DyTableConstants.STR_SPLIT);
						String checkName="";
						String checkProject="";
						if(colInfos.length>2){
							String[] col=colInfos[2].split(",");
							for(int j=0;j<col.length;j++){
								checkName=dymMirror.getValue(tableModels, "field_" + col[col.length-1-j]).toString();
								if(checkName.startsWith("LD")||checkName.startsWith("LS")||checkName.startsWith("LPN")||checkName.startsWith("LPS")){
								}else{
									break;
								}
							}
							String[] name=checkName.split("#");
							checkProject="["+elements[1]+"."+elements[2]+"]"+name[0];
						}
						for(int m=0;m<checkBrnos.length;m++){
							String sqlStr="SELECT COUNT(*) FROM DY.DY_CHECK_FORMULA WHERE TABCODE='"+tableInfo.getTabCode()+"' AND REPORT_RATE='" + reportRate + "' AND TYPE='2'  AND START_DATE='"+ startDate +"'AND END_DATE='"+ endDate +"' AND ELEMENT='"+dyCheckFormulas[i].getElement()+"' AND LASTELEMENT='" + dyCheckFormulas[i].getLastElement() + "' AND LEFTVALUE="+leftValue+" AND RIGHTVALUE="+rightValue+" AND CHECK_BRNO='"+checkBrnos[m]+"' AND CHECK_AREA='"+checkArea+"' AND C_USER='"+cUser+"'";
							int count= dyCheckFormulaWaveServiceImpl.singleInt(sqlStr);//判断是否存在校验该定位的公式
							if(count==0){//若没有该校验公式，插入
								DyCheckFormulaWave dyFormula=new DyCheckFormulaWave();
								dyFormula.setId(R.UU16());
								dyFormula.setCheckProject(CommUtil.trimStr(checkProject));
								dyFormula.setTabcode(tabCode);
								dyFormula.setCheckRisk(checkRisk);
								dyFormula.setElement(dyCheckFormulas[i].getElement());
								dyFormula.setLastElement(dyCheckFormulas[i].getLastElement());
								dyFormula.setThisVersion(startDate);
								dyFormula.setLastVersion(endDate);
								dyFormula.setCheckBrno(checkBrnos[m]);
								dyFormula.setCheckArea(checkArea);
								String parent=getParentId(tabCode,null,cUser);
								dyFormula.setParent(parent);
								dyFormula.setcUser(cUser);
								dyFormula.setType("2");
								dyFormula.setReportRate(reportRate);
								dyFormula.setLeftValue(Integer.parseInt(leftValue));
								dyFormula.setRightValue(Integer.parseInt(rightValue));
								String model=getAOneValue(tabCode,dyCheckFormulas[i].getElement(),dyCheckFormulas[i].getLastElement());
								String formulaModel=getFormulaModel(Integer.parseInt(leftValue), Integer.parseInt(rightValue),model);
								dyFormula.setCheckFormula(formulaModel);
								String dValueModel=getdValueModel(tabCode,dyCheckFormulas[i].getElement(),dyCheckFormulas[i].getLastElement());
								dyFormula.setdValueFormula(dValueModel);
								formulas.add(dyFormula);
							}
						}
						//添加省局版本
/*						String sqlStr="SELECT COUNT(*) FROM RD_CHECK_FORMULA WHERE TABCODE='"+tableInfo.getTabCode()+"' AND REPORT_RATE in'" + StrUtil.convertQuoMarksSQL(reportRate) + "' AND TYPE='2'  AND START_DATE='"+ startDate +"'AND END_DATE='"+ endDate +"' AND ELEMENT='"+rdCheckFormulas[i].getElement()+"' AND LASTELEMENT='" + rdCheckFormulas[i].getLastElement() + "' AND CHECK_BRNO='JSS_NJS_XXTJK'";
						int count=rdCheckFormulaWaveDao.singleInt(sqlStr);//判断是否存在校验该定位的公式
						if(count==0){//若没有该校验公式，插入
							String[] reportRates = reportRate.split(",");
							for(int n = 0;n<reportRates.length;n++){
								RdCheckFormulaWave rdFormula=new RdCheckFormulaWave();
								rdFormula.setId(R.UU16());
								rdFormula.setCheckProject(CommUtil.trimStr(checkProject));
								rdFormula.setTabcode(tabCode);
								rdFormula.setCheckRisk(checkRisk);
								rdFormula.setElement(rdCheckFormulas[i].getElement());
								rdFormula.setLastElement(rdCheckFormulas[i].getLastElement());
								rdFormula.setThisVersion(startDate);
								rdFormula.setLastVersion(endDate);
								rdFormula.setCheckBrno("JSS_NJS_XXTJK");
								rdFormula.setCheckArea(checkArea);
								String parent=getParentId(tabCode,null,cUser);
								rdFormula.setParent(parent);
								rdFormula.setcUser(cUser);
								rdFormula.setType("2");
								rdFormula.setReportRate(reportRates[n]);
								rdFormula.setLeftValue(Integer.parseInt(leftValue));
								rdFormula.setRightValue(Integer.parseInt(rightValue));
								String model=getAOneValue(tabCode,rdCheckFormulas[i].getElement(),rdCheckFormulas[i].getLastElement());
								String formulaModel=getFormulaModel(Integer.parseInt(leftValue),Integer.parseInt(rightValue),model);
								rdFormula.setCheckFormula(formulaModel);
								String dValueModel=getdValueModel(tabCode,rdCheckFormulas[i].getElement(),rdCheckFormulas[i].getLastElement());
								rdFormula.setdValueFormula(dValueModel);
								formulas.add(rdFormula);
							}
						}*/
					}
				}
			}
			if(formulas.size()>0){
				dyCheckFormulaWaveServiceImpl.dao().fastInsert(formulas);
			}else{
				msg="无符合条件的公式";
			}
			return requestResult(true, msg);
		} catch (Exception e) {
			logger.error("autoAddFormulaYidongVersion() error!  tabCode:["+ tabCode+"]" +
					", checkRisk:["+ checkRisk+"]" +
					", reportRate:["+ reportRate+"]" +
					", leftValue:["+ leftValue+"]" +
					", rightValue:["+ rightValue+"]" +
					", startDate:["+ startDate+"]" +
					", checkArea:["+ checkArea+"]" +
					", cUser:["+ cUser+"]",e);
			return requestResult(false, null);
		}
			
	}
	
	private DyCheckFormulaWave autoCreateFormula(DyCheckFormulaList dyCheckFormulaList,
                                                 String tabcode, String type, String checkProject, String cUser) {
		DyCheckFormulaWave checkformula=new DyCheckFormulaWave();
		checkformula.setId(dyCheckFormulaList.getId());
		checkformula.setTabcode(tabcode);
		checkformula.setType(type);
		checkformula.setCheckRisk(dyCheckFormulaList.getCheckRisk());
		checkformula.setCheckProject(CommUtil.trimStr(checkProject));
		checkformula.setThisVersion(dyCheckFormulaList.getThisVersion());
		checkformula.setLastVersion(dyCheckFormulaList.getLastVersion());
		checkformula.setElement(dyCheckFormulaList.getElement());
		checkformula.setLastElement(dyCheckFormulaList.getLastElement());
		checkformula.setCheckArea(dyCheckFormulaList.getCheckArea());
		checkformula.setCheckBrno(dyCheckFormulaList.getCheckBrno());
		int leftValue=dyCheckFormulaList.getLeftValue();
		int rightValue=dyCheckFormulaList.getRightValue();
		checkformula.setLeftValue(leftValue);
		checkformula.setRightValue(rightValue);
		String element=dyCheckFormulaList.getElement();
		String lastElement;
		if(StrUtil.isNull(dyCheckFormulaList.getLastElement())){
			lastElement=dyCheckFormulaList.getElement();
		}else{
			lastElement=dyCheckFormulaList.getLastElement();
		}
		String valueArea=getValueArea(leftValue,rightValue);
		checkformula.setValueArea(valueArea);
		String model=getAOneValue(checkformula.getTabcode(),element,lastElement);
		String dValueModel=getdValueModel(checkformula.getTabcode(),element,lastElement);
		checkformula.setdValueFormula(dValueModel);
		String formulaModel=getFormulaModel(leftValue,rightValue,model);
//		checkformula.setCheckFormula(FormulaEncrypt.getFormulaEnctypt(formulaModel));
		checkformula.setCheckFormula(formulaModel);
		checkformula.setcUser("admin");
		String parent=getParentId(checkformula.getTabcode(),checkformula,checkformula.getcUser());
		checkformula.setParent(parent);
		checkformula.setValidFlag("y");
		checkformula.setCheckFormulaMark("");
		checkformula.setReportRate(dyCheckFormulaList.getReportRate());
		checkformula.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
		return checkformula;
		
	}

	@RequestMapping("/replayCheckFormula")
	@ResponseBody
	public Object replayCheckFormula(String id){

		DyCheckFormulaRecordServiceImpl dyCheckFormulaRecordServiceImpl = (DyCheckFormulaRecordServiceImpl)dyCheckFormulaRecordService;

		DyCheckFormulaRecord formulaRecord = dyCheckFormulaRecordServiceImpl.fetch(id);
		Criteria criteria = Cnd.cri();
		criteria.where().and("CHECK_BRNO", "=", "JSS_NJS_XXTJK");
		criteria.where().and("TABCODE", "=", formulaRecord.getTabcode());
		criteria.where().and("ELEMENT", "=", formulaRecord.getElement());
		criteria.where().and("LASTELEMENT", "=", formulaRecord.getLastElement());
		criteria.where().and("START_DATE", "=", formulaRecord.getStartDate());
		criteria.where().and("END_DATE", "=", formulaRecord.getEndDate());
		criteria.where().and("REPORT_RATE", "IN", StrUtil.convertQuoMarksSQL(formulaRecord.getReportRate()));

		DyCheckFormulaWaveServiceImpl dyCheckFormulaWaveServiceImpl = (DyCheckFormulaWaveServiceImpl)dyCheckFormulaWaveService;

		if(formulaRecord.getOperate().equals("修改")){
			List<DyCheckFormulaWave> list = dyCheckFormulaWaveServiceImpl.query(criteria, null);
			if(list!=null){
				for(int i=0;i<list.size();i++){
					list.get(i).setCheckBrno(formulaRecord.getCheckBrno());
					list.get(i).setId(R.UU16());
					dyCheckFormulaWaveServiceImpl.delete(formulaRecord.getFormulaId());
					dyCheckFormulaWaveServiceImpl.dao().insert(list.get(i));
				}
			}else{
				formulaRecord.setIsReplay("3");
				dyCheckFormulaRecordServiceImpl.dao().update(formulaRecord);
				return requestResult(false, "系统无该类初始化公式");
			}
		}else if(formulaRecord.getOperate().equals("新增")){
			dyCheckFormulaWaveServiceImpl.delete(formulaRecord.getFormulaId());
		}else{//删除
			List<DyCheckFormulaWave> list = dyCheckFormulaWaveServiceImpl.query(criteria, null);
			for(int i=0;i<list.size();i++){
				list.get(i).setCheckBrno(formulaRecord.getCheckBrno());
				list.get(i).setId(R.UU16());
				dyCheckFormulaWaveServiceImpl.dao().insert(list.get(i));
			}
		}
		//更新修改状态
		formulaRecord.setIsReplay("1");
		dyCheckFormulaRecordServiceImpl.dao().update(formulaRecord);
		return requestResult(true, "");
	}
	
	/**
	 * 功能描述：展示所有异动公式(机构适用)
	 * @author 
	 * @date 2016年11月14日
	 * @param cUser
	 * @param tabcode
	 * @param checkProject
	 * @param vFlag
	 * @param pageIndex
	 * @param pageSize
	 * @param sortField
	 * @param sortOrder
	 * @param req
	 * @return
	 * @modify log:
	 */
	@RequestMapping("/getDyCheckFormulaWaveList")
	@ResponseBody
	public Object getDyCheckFormulaWaveList(String cUser, String tabcode, String checkProject, String checkRisk, String vFlag, int pageIndex, int pageSize, String sortField, String sortOrder, HttpServletRequest req) {
		if (StrUtil.isNull(cUser)) {
			SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
			cUser = sysUser.getUserId();
		}

		DyCheckFormulaWaveServiceImpl dyCheckFormulaWaveServiceImpl = (DyCheckFormulaWaveServiceImpl)dyCheckFormulaWaveService;

		Pager pager = dyCheckFormulaWaveServiceImpl.dao().createPager(pageIndex + 1, pageSize);
		GridQueryPageResult gqpr = new GridQueryPageResult();
		Criteria criteria = Cnd.cri();
		criteria.where().and("cUser", "in", "'admin','197'");
		if (StrUtil.isNotNull(tabcode)) {
			criteria.where().and("TABCODE", "like", "%" + tabcode + "%");
		}
		if (StrUtil.isNotNull(checkProject)) {
			criteria.where().and("CHECK_PROJECT", "like", "%" + checkProject + "%");
		}
		if (StrUtil.isNotNull(checkRisk)) {
			criteria.where().and("CHECK_RISK", "=", checkRisk);
		}
		if (StrUtil.isNotNull(vFlag)) {
			criteria.where().and("VALID_FLAG", "=", vFlag);
		}
		criteria.where().and("TYPE", "=", "2");
		if (StrUtil.isNotNull(sortField)) {
			if ("desc".equals(sortOrder)) {
				criteria.getOrderBy().desc(sortField);
			} else {
				criteria.getOrderBy().asc(sortField);
			}
		}
	
		List<DyCheckFormulaWave> list = dyCheckFormulaWaveServiceImpl.query(criteria, pager);
		gqpr.setTotal(dyCheckFormulaWaveServiceImpl.count(criteria));
		gqpr.setData(list);
		return gqpr;
	}
	
	/**
	 * 功能描述：批量添加异动公式_同版本(机构用)
	 * @author 
	 * @date 2016年9月5日
	 * @param reportRate
	 * @param leftValue
	 * @param rightValue
	 * @modify log:
	 */
	@RequestMapping("/autoAddFormulaYidongCS")
	@ResponseBody
	public RequestResult autoAddFormulaYidongCS(String tabCode,String checkRisk, String reportRate, String leftValue,String rightValue, String thisVersion, String cUser, HttpServletRequest req){
		try {
			SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
			cUser=sysUser.getUserId();

			DyCheckFormulaWaveServiceImpl dyCheckFormulaWaveServiceImpl = (DyCheckFormulaWaveServiceImpl)dyCheckFormulaWaveService;

			DyTableInfo tableInfo = dyTableInfoService.getInfoByTabcode(tabCode,thisVersion);//报表信息
			//删除原该类型公式
			Sql strSql = Sqls.create("DELETE FROM DY.DY_CHECK_FORMULA_WAVE WHERE TABCODE='" + tabCode + "' AND TYPE='2' AND THIS_VERSION='" + thisVersion + "' AND LAST_VERSION='" + thisVersion + "' AND (REPORT_RATE IN (" + StrUtil.convertQuoMarksSQL(reportRate) + ") OR REPORT_RATE = '" + reportRate + "' OR REPORT_RATE LIKE '%" + reportRate + "%') ");
			dyCheckFormulaWaveServiceImpl.dao().execute(strSql);
			String[] rowS = tableInfo.getRowInfo().split(DyTableConstants.STR_RC_SPLIT);
			String[] colS = tableInfo.getColInfo().split(DyTableConstants.STR_RC_SPLIT);
			List<DyCheckFormulaWave> dyCheckFormula = new ArrayList<DyCheckFormulaWave>();
			for (int y = 0; y < rowS.length; y++) {//获取每一行每一列的field 例：G0100_6_A及中文解释
				String[] rowInfos = rowS[y].split(DyTableConstants.STR_SPLIT);
				String[] colInfos = colS[y].split(DyTableConstants.STR_SPLIT);
				for(int i = Integer.parseInt(rowInfos[2]); i<= Integer.parseInt(rowInfos[1]); i++){
					for(int j = 0; j<(Integer.parseInt(colInfos[0])- Integer.parseInt(colInfos[1])+1); j++){
						DyTableModel tableModels = dyTableModelService.getTableModelByRownum(tableInfo.getTableId(), String.valueOf(i));
						Mirror<DyTableModel> rdmMirror = Mirror.me(DyTableModel.class);
						String checkProjectName="";
						String fieldValue="";
						boolean isBegin=true;
						int begin=0;
						if(isBegin){
							if(colInfos.length>2){
								//String[] nameValue=colInfos[2].split(",");//填入字符串列
								String checkName="";
									for(int k = 1; k<= Integer.parseInt(colInfos[0]); k++){
										if(rdmMirror.getValue(tableModels, "field_" + k)!=null){
											checkName=rdmMirror.getValue(tableModels, "field_" + k).toString();
											if(checkName.startsWith("LD")||checkName.startsWith("LS")){
												checkName=rdmMirror.getValue(tableModels,"field_" + (k-1)).toString();
												if(checkName.contains("LPN")||checkName.contains("LPS")){
													begin=k-1;
												}else{
													begin=k;
												}
												isBegin=false;
												break;
											}
										}
									}
									String[] name=checkName.split("#");
									if(checkName.contains("LPN")||checkName.contains("LPS")){
										checkProjectName=name[1];
									}else{
										checkProjectName=name[0];
									}
							}
						}
						if(begin!=0){
							fieldValue=rdmMirror.getValue(tableModels, "field_"+(j+begin)).toString();
							String[] isInt=fieldValue.split("#");
							if(isInt[0].equals("LD")&&(isInt[1].equals("1")||isInt[1].equals("0"))&&isInt.length<=3){
								String field="";
								if(Integer.parseInt(colInfos[1])==1){
									field=tabCode+"_"+i+"_"+ DyTableUtil.getFieldName("", j+begin-1);
								}else{
									field=tabCode+"_"+i+"_"+ DyTableUtil.getFieldName("", j);
								}
								/*String sqlStr="SELECT COUNT(*) FROM RD_CHECK_FORMULA_WAVE WHERE TABCODE='"+tableInfo.getTabCode()+"' AND REPORT_RATE='" + reportRate + "' AND TYPE='2'  AND THIS_VERSION='"+thisVersion+"'AND LAST_VERSION='"+thisVersion+"' AND ELEMENT='"+field+"' AND C_USER='admin'";
								int count=rdCheckFormulaWaveDao.singleInt(sqlStr);*///判断是否存在校验该定位的公式
								DyCheckFormulaList formula=new DyCheckFormulaList();
								String checkProject="["+i+"."+DyTableUtil.getFieldName("", j)+"]"+checkProjectName;
								formula.setId(R.UU16());
								formula.setCheckRisk(checkRisk);
								formula.setElement(field);
								formula.setLastElement(field);
								formula.setLeftValue(Integer.parseInt(leftValue));
								formula.setRightValue(Integer.parseInt(rightValue));
								formula.setThisVersion(thisVersion);
								formula.setLastVersion(thisVersion);
								formula.setReportRate(reportRate);
								DyCheckFormulaWave checkFormula=autoCreateFormula(formula,tableInfo.getTabCode(),"2",checkProject,cUser);
								dyCheckFormula.add(checkFormula);
							}else{
								if(fieldValue.equals("END")){
									break;
								}
							}
						}
					}
				}
				
			}
			dyCheckFormulaWaveServiceImpl.dao().fastInsert(dyCheckFormula);
		return requestResult(true, null);
	} catch (Exception e) {
					logger.error("autoAddFormulaYidongCS() error!  tabCode:["+ tabCode+"]" +
					", checkRisk:["+ checkRisk+"]" +
					", reportRate:["+ reportRate+"]" +
					", leftValue:["+ leftValue+"]" +
					", rightValue:["+ rightValue+"]" +
					", thisVersion:["+ thisVersion+"]" +
					", cUser:["+ cUser+"]",e);
		return requestResult(false, null);
	}
			
}
	/**
	 * 功能描述：批量添加异动公式_不同版本(机构用)
	 * @author 
	 * @date 2016年9月5日
	 * @param reportRate
	 * @param leftValue
	 * @param rightValue
	 * @modify log:
	 */
	@RequestMapping("/autoAddFormulaYidongVersionCS")
	@ResponseBody
	public Object autoAddFormulaYidongVersionCS(String jsonstr, String tabCode, String checkRisk, String reportRate, String leftValue,String rightValue, String thisVersion, String lastVersion, String cUser, String elementNew, HttpServletRequest req){
		try {
			DyTableInfo tableInfo = dyTableInfoService.getInfoByTabcode(tabCode,thisVersion);//报表信息
			DyCheckFormulaWaveServiceImpl dyCheckFormulaWaveServiceImpl = (DyCheckFormulaWaveServiceImpl)dyCheckFormulaWaveService;

			DyCheckFormulaList[] dyCheckFormulas= Json.fromJson(DyCheckFormulaList[].class, jsonstr);//页面的变更指标坐标
			String[] rowS = tableInfo.getRowInfo().split(DyTableConstants.STR_RC_SPLIT);
			String[] colS = tableInfo.getColInfo().split(DyTableConstants.STR_RC_SPLIT);
			List<DyCheckFormulaWave> dyCheckFormula = new ArrayList<DyCheckFormulaWave>();
			Sql strSql = Sqls.create("DELETE FROM DY.DY_CHECK_FORMULA_WAVE WHERE TABCODE='" + tabCode + "' AND TYPE='2' AND THIS_VERSION='" + thisVersion + "' AND LAST_VERSION='" + lastVersion + "' AND (REPORT_RATE IN (" + StrUtil.convertQuoMarksSQL(reportRate) + ") OR REPORT_RATE = '" + reportRate + "' OR REPORT_RATE LIKE '%" + reportRate + "%') ");
			dyCheckFormulaWaveServiceImpl.dao().execute(strSql);
			for (int y = 0; y < rowS.length; y++) {//获取每一行每一列的坐标 例：G0100_6_A及中文解释
				String[] rowInfos = rowS[y].split(DyTableConstants.STR_SPLIT);
				String[] colInfos = colS[y].split(DyTableConstants.STR_SPLIT);
				for(int i = Integer.parseInt(rowInfos[2]); i<= Integer.parseInt(rowInfos[1]); i++){
					for(int j = 0; j<(Integer.parseInt(colInfos[0])- Integer.parseInt(colInfos[1])+1); j++){
						DyTableModel tableModels = dyTableModelService.getTableModelByRownum(tableInfo.getTableId(), String.valueOf(i));
						Mirror<DyTableModel> rdmMirror = Mirror.me(DyTableModel.class);
						String checkProjectName="";
						String fieldValue="";
						boolean isBegin=true;
						int begin=0;
						if(isBegin){
							if(colInfos.length>2){
								//String[] nameValue=colInfos[2].split(",");//填入字符串列
								String checkName="";
									for(int k = 1; k<= Integer.parseInt(colInfos[0]); k++){
										if(rdmMirror.getValue(tableModels, "field_" + k)!=null){
											checkName=rdmMirror.getValue(tableModels, "field_" + k).toString();
											if(checkName.startsWith("LD")||checkName.startsWith("LS")){
												checkName=rdmMirror.getValue(tableModels,"field_" + (k-1)).toString();
												if(checkName.contains("LPN")||checkName.contains("LPS")){
													begin=k-1;
												}else{
													begin=k;
												}
												isBegin=false;
												break;
											}
										}
									}
									String[] name=checkName.split("#");
									if(checkName.contains("LPN")||checkName.contains("LPS")){
										checkProjectName=name[1];
									}else{
										checkProjectName=name[0];
									}
							}
						}
						if(begin!=0){
							fieldValue=rdmMirror.getValue(tableModels, "field_"+(j+begin)).toString();
							String[] isInt=fieldValue.split("#");
							if(isInt[0].equals("LD")&&(isInt[1].equals("1")||isInt[1].equals("0"))&&isInt.length<=3){
								String field="";
								if(Integer.parseInt(colInfos[1])==1){
									field=tabCode+"_"+i+"_"+ DyTableUtil.getFieldName("", j+begin-1);
								}else{
									field=tabCode+"_"+i+"_"+ DyTableUtil.getFieldName("", j);
								}
								boolean inList = true;//确认是否需要再添加进List
								for(int m = 0 ; m < dyCheckFormulas.length ; m++){//判断是否位置变更
									if(field.equals(dyCheckFormulas[m].getElement())){
										DyCheckFormulaList formula=new DyCheckFormulaList();
										String checkProject="["+i+"."+DyTableUtil.getFieldName("", j)+"]"+checkProjectName;
										formula.setId(R.UU16());
										formula.setElement(field);
										formula.setLastElement(dyCheckFormulas[m].getLastElement());
										formula.setLeftValue(Integer.parseInt(leftValue));
										formula.setRightValue(Integer.parseInt(rightValue));
										formula.setThisVersion(thisVersion);
										formula.setLastVersion(lastVersion);
										formula.setReportRate(reportRate);
										formula.setCheckRisk(checkRisk);
										DyCheckFormulaWave checkFormula=autoCreateFormula(formula,tableInfo.getTabCode(),"2",checkProject,cUser);
										dyCheckFormula.add(checkFormula);
										inList = false;
									}
								}
								String[] elementNews = elementNew.split(",");
								for(int n = 0 ; n < elementNews.length ;n++){//判断是否为本版本新增指标
									if(field.equals(elementNews[n])){
										inList = false;
									}
								}
								if(inList){
									DyCheckFormulaList formula=new DyCheckFormulaList();
									String checkProject="["+i+"."+DyTableUtil.getFieldName("", j)+"]"+checkProjectName;
									formula.setId(R.UU16());
									formula.setElement(field);
									formula.setLastElement(field);
									formula.setLeftValue(Integer.parseInt(leftValue));
									formula.setRightValue(Integer.parseInt(rightValue));
									formula.setThisVersion(thisVersion);
									formula.setLastVersion(lastVersion);
									formula.setReportRate(reportRate);
									formula.setCheckRisk(checkRisk);
									DyCheckFormulaWave checkFormula=autoCreateFormula(formula,tableInfo.getTabCode(),"2",checkProject,cUser);
									dyCheckFormula.add(checkFormula);
								}
							}else{
								if(fieldValue.equals("END")){
									break;
								}
							}
						}
					}
				}
				
			}
			dyCheckFormulaWaveServiceImpl.dao().fastInsert(dyCheckFormula);
		return requestResult(true, null);
	} catch (Exception e) {
			logger.error("autoAddFormulaYidongVersionCS() error!  tabCode:["+ tabCode+"]" +
					", checkRisk:["+ checkRisk+"]" +
					", reportRate:["+ reportRate+"]" +
					", leftValue:["+ leftValue+"]" +
					", rightValue:["+ rightValue+"]" +
					", thisVersion:["+ thisVersion+"]" +
					", cUser:["+ cUser+"]",e);
		return requestResult(false, null);
	}
			
}
	
	/**
	 * 功能描述：获取当前报表，当前单元格的公式(登录人所管辖机构的公式)(机构使用)
	 * @author 
	 * @date 2016年10月26日
	 * @param tableId
	 * @param inputId
	 * @param versionNo
	 * @param cUser
	 * @param searchBrno
	 * @param req
	 * @modify log:
	 */
	@RequestMapping("/getFormulaByReportCS")
	public ModelAndView getFormulaByReportCS(String tableId, String inputId, String versionNo, String cUser,String searchBrno,String page, HttpServletRequest req){
		String inputIds[]=inputId.split("_");
		String element=inputIds[0]+"_"+inputIds[1]+"_"+inputIds[2];
		SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
		DyCheckFormulaWave dyFormula= dyCheckFormulaWaveService.getCPbyTabcodeCS(sysUser,inputIds[0],versionNo,element,cUser);
		List<DyCheckFormulaWave> dyFormulas= dyCheckFormulaWaveService.EditCheckFormulasByElementCS(sysUser,inputIds[0],versionNo,element,cUser);
		if(dyFormula==null){
			dyFormula=new DyCheckFormulaWave();
			DyTableInfo tableInfo = dyTableInfoService.getInfoById(tableId);
			DyTableModel tableModels = dyTableModelService.getTableModelByRownum(tableId,inputIds[1]);
			Mirror<DyTableModel> rdmMirror = Mirror.me(DyTableModel.class);
			String[] rowS = tableInfo.getRowInfo().split(DyTableConstants.STR_RC_SPLIT);
			String[] colS = tableInfo.getColInfo().split(DyTableConstants.STR_RC_SPLIT);
			for (int y = 0; y < rowS.length; y++) {
				String[] rowInfos = rowS[y].split(DyTableConstants.STR_SPLIT);
				if(Integer.valueOf(inputIds[1])<= Integer.valueOf(rowInfos[1])&& Integer.valueOf(inputIds[1])>= Integer.valueOf(rowInfos[2])){
					String[] colInfos = colS[y].split(DyTableConstants.STR_SPLIT);
					if(colInfos.length>2){
						String checkName="";
						String[] col=colInfos[2].split(",");
						for(int i=0;i<col.length;i++){
							checkName=rdmMirror.getValue(tableModels, "field_" + col[col.length-1-i]).toString();
							if(checkName.startsWith("LD")||checkName.startsWith("LS")||checkName.startsWith("LPN")||checkName.startsWith("LPS")){
							}else{
								break;
							}
						}
						String[] name=checkName.split("#");
						String checkProject="["+inputIds[1]+"."+inputIds[2]+"]"+name[0];
						dyFormula.setCheckProject(CommUtil.trimStr(checkProject));
					}
					break;
				}
			}
			dyFormula.setId("1234567890");
			dyFormula.setTabcode(inputIds[0]);
			dyFormula.setElement(element);
			dyFormulas.add(dyFormula);
		}
		req.setAttribute("dyFormula", dyFormula);
		req.setAttribute("dyFormulas", dyFormulas);

		page = page.replace(".jsp", "");
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName(page);

		return modelAndView;
	}
	
	/**
	 * 新增或修改异动校验公式(系统公式由于每个机构有一套异动的校验规则，所以cUser统一设为admin)
	 * 
	 * @param checkformula
	 *            校验公式对象
	 * @param req
	 * @return
	 */
	@RequestMapping("/addOrUpdateCheckFormula")
	@ResponseBody
	public RequestResult addOrUpdateCheckFormula(@RequestBody DyCheckFormulaWave checkformula, HttpServletRequest req) {
		try {
			if (StrUtil.isNotNull(checkformula.getId())) {//更新
				checkformula = createFormula(checkformula);
				dyCheckFormulaWaveService.updateCheckFormula(checkformula,"admin");
			} else {//新增
				DyCheckFormulaWaveServiceImpl dyCheckFormulaWaveServiceImpl = (DyCheckFormulaWaveServiceImpl)dyCheckFormulaWaveService;
				checkformula = createFormula(checkformula);
				dyCheckFormulaWaveServiceImpl.dao().insert(checkformula);
			}
			return requestResult(true, checkformula);
		} catch (Exception e) {
			logger.error("addOrUpdateCheckFormula() error!  checkformula:["+ JSONObject.toJSONString(checkformula)+"]",e);
		}
		return requestResult(false, null);
	}
	
	private DyCheckFormulaWave createFormula(DyCheckFormulaWave checkFormulaWave) {
		DyCheckFormulaWave checkformula=new DyCheckFormulaWave();
		checkformula.setId(checkFormulaWave.getId());
		checkformula.setTabcode(checkFormulaWave.getTabcode());
		checkformula.setCheckProject(CommUtil.trimStr(checkFormulaWave.getCheckProject()));
		checkformula.setCheckRisk(checkFormulaWave.getCheckRisk());
		checkformula.setElement(checkFormulaWave.getElement());
		checkformula.setLastElement(checkFormulaWave.getLastElement());
		checkformula.setThisVersion(checkFormulaWave.getThisVersion());
		checkformula.setLastVersion(checkFormulaWave.getLastVersion());
		checkformula.setType("2");
		checkformula.setParent(checkFormulaWave.getParent());
		int leftValue=checkFormulaWave.getLeftValue();
		int rightValue=checkFormulaWave.getRightValue();
		checkformula.setLeftValue(leftValue);
		checkformula.setRightValue(rightValue);
		String valueArea=getValueArea(leftValue,rightValue);
		checkformula.setValueArea(valueArea);
		
		String model=getAoValue(checkformula.getTabcode(),checkformula.getElement());
		String dValueModel=getdValueModel(checkformula.getTabcode(),checkformula.getElement());
		checkformula.setdValueFormula(dValueModel);
		String formulaModel=getFormulaModel(leftValue,rightValue,model);
//		checkformula.setCheckFormula(FormulaEncrypt.getFormulaEnctypt(formulaModel));
		checkformula.setCheckFormula(formulaModel);
		checkformula.setcUser("admin");
		checkformula.setValidFlag("y");
		checkformula.setCheckFormulaMark("");
		checkformula.setReportRate(checkFormulaWave.getReportRate());
		checkformula.setUpdateDate(DateUtil.getNow(DateUtil.FORMAT_LONG));
		return checkformula;
		
	}
	
	private String getAoValue(String tabcode, String element) {
		String model;
		String oper="$oper$";
		String A1=element;
		String A0=element.replace("_", oper);
		model="("+A1+"-("+A0+"))/("+A0+")";
		return model;
	}
	
	private String getdValueModel(String tabcode, String element) {
		String model;
		String oper="$oper$";
		String A1=element;
		String A0=element.replace("_", oper);
		model=A1+"-("+A0+")";
		return model;
	}

	@RequestMapping("/deleteCheckFormulaCS")
	@ResponseBody
	public RequestResult deleteCheckFormulaCS(String id, HttpServletRequest req) {
		DyCheckFormulaWaveServiceImpl DyCheckFormulaWaveServiceImpl = (DyCheckFormulaWaveServiceImpl) dyCheckFormulaWaveService;

		try {
			DyCheckFormulaWaveServiceImpl.delete(id);
			return requestResult(true, "");
		} catch (Exception e) {
			logger.error("deleteCheckFormulaCS() error!  id:["+id+"]",e);
			return requestResult(false, "");
		}
	}
	
	/**
	 * 新增或修改异动校验公式(系统公式由于每个机构有一套异动的校验规则，所以cUser统一设为admin)(机构用)
	 * 
	 *            校验公式对象
	 * @param req
	 * @return
	 */
	@RequestMapping("/addOrUpdateYiDongCheckFormulaCS")
	@ResponseBody
	public Object addOrUpdateYiDongCheckFormulaCS(String jsonstr, String tabcode, String type, String checkProject, String id, String cUser, HttpServletRequest req) {
		try {
			DyCheckFormulaList[] DyCheckFormulas= Json.fromJson(DyCheckFormulaList[].class, jsonstr);
			if(StrUtil.isNull(cUser)){
				SysUser sysUser = (SysUser) req.getSession().getAttribute(SystemConstants.SESSION_USER);
				cUser = sysUser.getUserId();
			}
			DyCheckFormulaWaveServiceImpl DyCheckFormulaWaveServiceImpl = (DyCheckFormulaWaveServiceImpl) dyCheckFormulaWaveService;

			for(int i=0;i<DyCheckFormulas.length;i++){
				if(DyCheckFormulas[i].getId().equals("")||StrUtil.isNull(DyCheckFormulas[i].getId())||DyCheckFormulas[i].getId().equals("1234567890")){
					if(DyCheckFormulas[i].getIsDel().equals("0")){
						DyCheckFormulaWave checkformula=CreateCheckFormula(DyCheckFormulas[i],tabcode,"2",checkProject,"admin");
						DyCheckFormulaWaveServiceImpl.dao().insert(checkformula);
						//rdCheckFormulaRecordDao.insertRecord("新增",checkformula);
					}
				}else{
					if(DyCheckFormulas[i].getIsDel().equals("0")){
						DyCheckFormulaWave checkformula=CreateCheckFormula(DyCheckFormulas[i],tabcode,"2",checkProject,"admin");
						//RdCheckFormulaWave formula=rdCheckFormulaWaveDao.fetch(RdCheckFormulas[i].getId());
						//rdCheckFormulaRecordDao.insertRecord("修改",formula);
						dyCheckFormulaWaveService.updateCheckFormula(checkformula, cUser);
					}else{
						//RdCheckFormulaWave checkformula=rdCheckFormulaWaveDao.fetch(RdCheckFormulas[i].getId());
						//rdCheckFormulaRecordDao.insertRecord("删除",checkformula);
						DyCheckFormulaWaveServiceImpl.delete(DyCheckFormulas[i].getId());
					}
				}
			}
			return requestResult(true, null);
		} catch (Exception e) {
			logger.error("addOrUpdateYiDongCheckFormulaCS() error!  jsonstr:["+ jsonstr+"]" +
					", tabcode:["+ tabcode+"]" +
					", type:["+ type+"]" +
					", checkProject:["+ checkProject+"]" +
					", id:["+ id+"]" +
					", cUser:["+ cUser+"]",e);
			return requestResult(false, null);
		}
	}
}

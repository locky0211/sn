package com.efraiser.test.project.actiion.sys;

import com.efraiser.test.db.service.rd.rdcheckformula.RdCheckFormulaService;
import com.efraiser.test.db.service.rd.rdtablebasicinfo.RdTableBasicInfoService;
import com.efraiser.test.db.service.rd.rdtablecolumncontrast.RdTableColumnContrastService;
import com.efraiser.test.db.service.rd.rdtableinfo.RdTableInfoService;
import com.efraiser.test.db.service.rd.rdtablemodel.RdTableModelService;
import com.efraiser.test.db.service.rd.rdtablemodelpct.RdTableModelPCTService;
import com.efraiser.test.db.service.rd.rdtableorgans.RdTableOrgansService;
import com.efraiser.test.db.service.sys.sysuser.SysUserService;
import com.efraiser.test.project.actiion.BaseController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("sys/updateServer")
public class SysUpdateServerController extends BaseController {

	@Autowired
	private RdCheckFormulaService rdCheckFormulaService;
	
	@Autowired
	private RdTableBasicInfoService rdTableBasicInfoService;
	
	@Autowired
	private RdTableColumnContrastService rdTableColumnContrastService;
	
	@Autowired
	private RdTableInfoService rdTableInfoService;
	
	@Autowired
	private RdTableModelService rdTableModelService;
	
	@Autowired
	private RdTableModelPCTService rdTableModelPCTService;
	
	@Autowired
	private RdTableOrgansService rdTableOrgansService;
	
	@Autowired
	private SysUserService sysUserService;

    @RequestMapping("/get1104Formula")
    @ResponseBody
	public Object get1104Formula() {
		return rdCheckFormulaService.getAll();
	}

    @RequestMapping("/get_RD_TABLE_BASIC_INFO")
    @ResponseBody
	public Object get_RD_TABLE_BASIC_INFO() {
		return rdTableBasicInfoService.getAll();
	}

    @RequestMapping("/get_RD_TABLE_COLUMN_CONTRAST")
    @ResponseBody
	public Object get_RD_TABLE_COLUMN_CONTRAST() {
		return rdTableColumnContrastService.getAll();
	}

    @RequestMapping("/get_RD_TABLE_INFO")
    @ResponseBody
	public Object get_RD_TABLE_INFO() {
		return rdTableInfoService.getAll();
	}

    @RequestMapping("/get_RD_TABLE_MODEL")
    @ResponseBody
	public Object get_RD_TABLE_MODEL() {
		return rdTableModelService.getAll();
	}

    @RequestMapping("/get_RD_TABLE_MODEL_PCT")
    @ResponseBody
	public Object get_RD_TABLE_MODEL_PCT() {
		return rdTableModelPCTService.getAll();
	}

    @RequestMapping("/get_RD_TABLE_ORGANS")
    @ResponseBody
	public Object get_RD_TABLE_ORGANS() {
		return rdTableOrgansService.getAll();
	}

    @RequestMapping("/get_SYS_USER")
    @ResponseBody
	public Object get_SYS_USER() {
		return sysUserService.getAll();
	}
	
}

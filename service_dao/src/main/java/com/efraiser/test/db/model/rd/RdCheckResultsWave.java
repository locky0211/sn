package com.efraiser.test.db.model.rd;

import com.efraiser.test.common.util.AES;
import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Readonly;
import org.nutz.dao.entity.annotation.Table;
import org.nutz.mvc.Mvcs;


@SuppressWarnings("serial")
@Table("RD_CHECK_RESULTS_WAVE")
public class RdCheckResultsWave extends BaseModelId {
	@Column("ORGAN_NO")
	private String organNo;
	@Column("REPORT_DATE")
	private String reportDate;
	@Column("TAB_TYPE")
	private String tabType;
	@Column("REPORT_RATE")
	private String reportRate;
	@Column("REPORT_NO_STR")
	private String reportNoStr;
	@Column("FORMULA")
	private String formula;
	@Column("CHECK_RISK")
	private String checkRisk;
	@Column("C_USER")
	private String cUser;
	@Column("VALUE")
	private String value;
	@Column("D_VALUE")
	private String dValue;
	@Column("FORMULA_MARK")
	private String formulaMark;
	@Column("ORGAN_NAME")
	@Readonly
	private String organName;
	@Column("ISERROR")
	private String isError;
	@Column("FORMULA_ID")
	private String formulaId;
	@Column("CONTENT")
	private String content;
	
	public String getOrganName() {
		return organName;
	}

	public void setOrganName(String organName) {
		this.organName = organName;
	}

	public String getReportNoStr() {
		return reportNoStr;
	}

	public void setReportNoStr(String reportNoStr) {
		this.reportNoStr = reportNoStr;
	}

	public String getcUser() {
		return cUser;
	}

	public void setcUser(String cUser) {
		this.cUser = cUser;
	}

	public String getCheckRisk() {
		return checkRisk;
	}

	public void setCheckRisk(String checkRisk) {
		this.checkRisk = checkRisk;
	}

	public String getOrganNo() {
		return organNo;
	}

	public void setOrganNo(String organNo) {
		this.organNo = organNo;
	}

	public String getReportDate() {
		return reportDate;
	}

	public void setReportDate(String reportDate) {
		this.reportDate = reportDate;
	}

	public String getTabType() {
		return tabType;
	}

	public void setTabType(String tabType) {
		this.tabType = tabType;
	}

	public String getFormula() {
		String[] arr=formula.split("_");
		if(arr.length==2 && arr[0].equals("em"))
		{
				byte[] byBuffer = AES.decode(arr[1]);
				byte[] decryptResult = AES.decrypt(byBuffer);
				return new String(decryptResult);
		}
		return formula;
	}
	/*
	 * 不通过EF
	 */
	public String getFormula1() {
		String[] arr=formula.split("_");
		if(arr.length==2 && arr[0].equals("em"))
		{
				byte[] byBuffer = AES.decode(arr[1]);
				byte[] decryptResult = AES.decrypt(byBuffer);
				return new String(decryptResult);
		}
		return formula;
	}

	public void setFormula(String formula) {
		String[] arr=formula.split("_");
		if(arr.length==2 && arr[0].equals("em"))
		{
			
		}
		else
		{
			String ef = Mvcs.getIoc().get(String.class, "EF");
			if("true".equals(ef))
			{
				byte[] encryptResult = AES.encrypt(formula);
				String strEncryptResult = AES.encodeToString(encryptResult);
				this.formula = "em_"+strEncryptResult;
				return;
			}
		}
		this.formula = formula;
	}
	/*
	 * 不通过EF强制加密
	 */
	public void setFormula1(String formula) {
		String[] arr=formula.split("_");
		if(arr.length==2 && arr[0].equals("em"))
		{
			
		}
		else
		{
				byte[] encryptResult = AES.encrypt(formula);
				String strEncryptResult = AES.encodeToString(encryptResult);
				this.formula = "em_"+strEncryptResult;
				return;
		}
		this.formula = formula;
	}

	public String getFormulaMark() {
		if(formulaMark==null || "null".equals(formulaMark) || "NULL".equals(formulaMark))
		{
			formulaMark="";
		}
		return formulaMark;
	}

	public void setFormulaMark(String formulaMark) {
		this.formulaMark = formulaMark;
	}

	public String getIsError() {
		return isError;
	}

	public void setIsError(String isError) {
		this.isError = isError;
	}

	public String getdValue() {
		return dValue;
	}

	public void setdValue(String dValue) {
		this.dValue = dValue;
	}

	public String getFormulaId() {
		return formulaId;
	}

	public void setFormulaId(String formulaId) {
		this.formulaId = formulaId;
	}

	public String getReportRate() {
		return reportRate;
	}

	public void setReportRate(String reportRate) {
		this.reportRate = reportRate;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

}

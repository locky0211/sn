package com.efraiser.test.db.model.dy;

import com.efraiser.test.common.util.AES;
import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Readonly;
import org.nutz.dao.entity.annotation.Table;
import org.nutz.mvc.Mvcs;

@SuppressWarnings("serial")
@Table("DY.DY_CHECK_RESULTS")
public class DyCheckResults extends BaseModelId {
	@Column("ORGAN_NO")
	private String organNo;
	@Column("REPORT_DATE")
	private String reportDate;
	@Column("TAB_TYPE")
	private String tabType;
	@Column("report_no_str")
	private String reportNoStr;
	@Column("FORMULA")
	private String formula;
	@Column("C_USER")
	private String cUser;
	@Column("CHECK_RISK")
	private String checkRisk;
	@Column("CONTENT")
	private String content;
	@Column("FORMULA_MARK")
	private String formulaMark;
	@Column("ORGAN_NAME")
	@Readonly
	private String organName;
	

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
			String ef = Mvcs.getIoc().get(String.class, "EF");
			if("true".equals(ef))
			{
				byte[] byBuffer = AES.decode(arr[1]);
				byte[] decryptResult = AES.decrypt(byBuffer);
				return new String(decryptResult);
			}
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

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
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

}

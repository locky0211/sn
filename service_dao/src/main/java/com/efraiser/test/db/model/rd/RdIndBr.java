package com.efraiser.test.db.model.rd;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Name;
import org.nutz.dao.entity.annotation.Readonly;
import org.nutz.dao.entity.annotation.Table;

@Table("RD_IND_BR")
public class RdIndBr {
	@Name
	@Column("orgin_id")
	private String orginId;

	@Column("V_YEAR")
	private String vYear;
	@Column("IND_ID")
	private String indId;
	@Column("V_1")
	private double v1;
	@Column("V_2")
	private double v2;
	@Column("V_3")
	private double v3;
	@Column("V_4")
	private double v4;
	@Column("V_5")
	private double v5;
	@Column("V_6")
	private double v6;
	@Column("V_7")
	private double v7;
	@Column("V_8")
	private double v8;
	@Column("V_9")
	private double v9;
	@Column("V_10")
	private double v10;
	@Column("V_11")
	private double v11;
	@Column("V_12")
	private double v12;

	@Column("BM_NAME")
	@Readonly
	private String orgName;

	public String getOrginId() {
		return orginId;
	}

	public void setOrginId(String orginId) {
		this.orginId = orginId;
	}

	public String getvYear() {
		return vYear;
	}

	public void setvYear(String vYear) {
		this.vYear = vYear;
	}

	public String getIndId() {
		return indId;
	}

	public void setIndId(String indId) {
		this.indId = indId;
	}

	public double getV1() {
		return v1;
	}

	public void setV1(double v1) {
		this.v1 = v1;
	}

	public double getV2() {
		return v2;
	}

	public void setV2(double v2) {
		this.v2 = v2;
	}

	public double getV3() {
		return v3;
	}

	public void setV3(double v3) {
		this.v3 = v3;
	}

	public double getV4() {
		return v4;
	}

	public void setV4(double v4) {
		this.v4 = v4;
	}

	public double getV5() {
		return v5;
	}

	public void setV5(double v5) {
		this.v5 = v5;
	}

	public double getV6() {
		return v6;
	}

	public void setV6(double v6) {
		this.v6 = v6;
	}

	public double getV7() {
		return v7;
	}

	public void setV7(double v7) {
		this.v7 = v7;
	}

	public double getV8() {
		return v8;
	}

	public void setV8(double v8) {
		this.v8 = v8;
	}

	public double getV9() {
		return v9;
	}

	public void setV9(double v9) {
		this.v9 = v9;
	}

	public double getV10() {
		return v10;
	}

	public void setV10(double v10) {
		this.v10 = v10;
	}

	public double getV11() {
		return v11;
	}

	public void setV11(double v11) {
		this.v11 = v11;
	}

	public double getV12() {
		return v12;
	}

	public void setV12(double v12) {
		this.v12 = v12;
	}

	public String getOrgName() {
		return orgName;
	}

	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}

}

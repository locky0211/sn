package com.efraiser.test.db.model.ews;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Table;


/**
 * @ProjectName:  [com.efraiser.sam] 
 * @Package:      [com.efraiser.ews.model] 
 * @ClassName:    [CheckTimeConsuming]   
 * 类描述：校验公式耗时表
 * @author 
 * @date 2017年7月4日
 * @modify log:
 */
@Table("check_time_consuming")
public class CheckTimeConsuming extends BaseModelId {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column
	private String brno;
	@Column
	private String sjrq;
	@Column
	private String version;
	@Column
	private String formulaid;
	@Column
	private String starttime;
	@Column
	private String endtime;
	@Column
	private String timeconsuming;

	public String getBrno() {
		return brno;
	}

	public void setBrno(String brno) {
		this.brno = brno;
	}

	public String getSjrq() {
		return sjrq;
	}

	public void setSjrq(String sjrq) {
		this.sjrq = sjrq;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public String getFormulaid() {
		return formulaid;
	}

	public void setFormulaid(String formulaid) {
		this.formulaid = formulaid;
	}

	public String getStarttime() {
		return starttime;
	}

	public void setStarttime(String starttime) {
		this.starttime = starttime;
	}

	public String getEndtime() {
		return endtime;
	}

	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}

	public String getTimeconsuming() {
		return timeconsuming;
	}

	public void setTimeconsuming(String timeconsuming) {
		this.timeconsuming = timeconsuming;
	}

}

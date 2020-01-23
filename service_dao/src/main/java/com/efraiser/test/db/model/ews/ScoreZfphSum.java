package com.efraiser.test.db.model.ews;

import com.efraiser.test.db.model.comom.BaseModelId;
import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Readonly;
import org.nutz.dao.entity.annotation.Table;


/**
 * @ProjectName:  [com.efraiser.sam] 
 * @Package:      [com.efraiser.ews.model] 
 * @ClassName:    [ScoreZfphSum]   
 * 类描述：
 * @author zhenxing
 * @date 2017年2月26日
 * @modify log:
 */
@Table("SCORE_ZFPH_SUM")
public class ScoreZfphSum extends BaseModelId {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column
	private String zbbh;
	@Column
	private String zbmc;
	@Column
	private String sjbh;
	@Column
	private double zbye;
	@Column
	private String nbjgh;
	@Column
	private String brno;
	@Column
	private String sjrq;
	@Column
	private String parent;
	@Readonly
	@Column
	private boolean isLeaf;
	@Readonly
	@Column
	private boolean expanded;
	public String getNbjgh() {
		return nbjgh;
	}
	public void setNbjgh(String nbjgh) {
		this.nbjgh = nbjgh;
	}
	public String getZbbh() {
		return zbbh;
	}
	public void setZbbh(String zbbh) {
		this.zbbh = zbbh;
	}
	public String getZbmc() {
		return zbmc;
	}
	public void setZbmc(String zbmc) {
		this.zbmc = zbmc;
	}
	public String getSjbh() {
		return sjbh;
	}
	public void setSjbh(String sjbh) {
		this.sjbh = sjbh;
	}
	public double getZbye() {
		return zbye;
	}
	public void setZbye(double zbye) {
		this.zbye = zbye;
	}
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
	public String getParent() {
		return parent;
	}
	public void setParent(String parent) {
		this.parent = parent;
	}
	
	
}

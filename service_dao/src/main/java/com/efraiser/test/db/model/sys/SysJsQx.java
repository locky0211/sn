package com.efraiser.test.db.model.sys;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Name;
import org.nutz.dao.entity.annotation.Table;

/**
 * 角色权限
 *
 * @author xxx
 *
 */
@Table("SYS_JSGL_QXGL")
public class SysJsQx {

    @Column("J_ID")
    private String jId;
    @Column("Q_ID")
    private String qId;

    public String getjId() {
        return jId;
    }
    public void setjId(String jId) {
        this.jId = jId;
    }
    public String getqId() {
        return qId;
    }
    public void setqId(String qId) {
        this.qId = qId;
    }

}


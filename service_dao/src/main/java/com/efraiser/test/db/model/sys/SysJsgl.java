package com.efraiser.test.db.model.sys;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Name;
import org.nutz.dao.entity.annotation.Table;

/**
 * 角色管理
 *
 * @author xxx
 *
 */
@Table("SYS_JSGL")
public class SysJsgl {

    @Name
    @Column("JS_ID")
    private String jsId;
    @Column("JS_NAME")
    private String jsName;
    @Column("JS_DESCRIPTION")
    private String jsDescription;
    @Column("JS_STATUS")
    private String jsStatus;

    public String getJsId() {
        return jsId;
    }
    public void setJsId(String jsId) {
        this.jsId = jsId;
    }
    public String getJsName() {
        return jsName;
    }
    public void setJsName(String jsName) {
        this.jsName = jsName;
    }
    public String getJsDescription() {
        return jsDescription;
    }
    public void setJsDescription(String jsDescription) {
        this.jsDescription = jsDescription;
    }
    public String getJsStatus() {
        return jsStatus;
    }
    public void setJsStatus(String jsStatus) {
        this.jsStatus = jsStatus;
    }
}

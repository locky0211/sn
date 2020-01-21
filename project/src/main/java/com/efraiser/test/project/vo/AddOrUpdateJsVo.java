package com.efraiser.test.project.vo;

import com.efraiser.test.db.model.sys.SysJsQx;
import com.efraiser.test.db.model.sys.SysJsgl;

import java.util.List;

public class AddOrUpdateJsVo {

    private String flag;
    private List<SysJsQx> jsQxs;
    private SysJsgl sysJsgl;

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    public List<SysJsQx> getJsQxs() {
        return jsQxs;
    }

    public void setJsQxs(List<SysJsQx> jsQxs) {
        this.jsQxs = jsQxs;
    }

    public SysJsgl getSysJsgl() {
        return sysJsgl;
    }

    public void setSysJsgl(SysJsgl sysJsgl) {
        this.sysJsgl = sysJsgl;
    }
}

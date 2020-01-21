package com.efraiser.test.project.vo;

import com.efraiser.test.db.model.sys.SysUser;
import org.apache.commons.lang3.StringUtils;

public class SysUserVo {

    private String OPStatus;
    private String userGxOrgan;
    private String userRole;

    private String userId;
    private String userName;
    private String userPass;
    private String userTelephone;
    private String userEmail;
    private String userGenger;
    private String status;
    private String userOrgan;
    private int loginCount;
    private String lastLoginDate;
    private String lastLoginIP;
    private String dDate;
    private String dDip;

    public String getOPStatus() {
        return OPStatus;
    }

    public void setOPStatus(String OPStatus) {
        this.OPStatus = OPStatus;
    }

    public String getUserGxOrgan() {
        return userGxOrgan;
    }

    public void setUserGxOrgan(String userGxOrgan) {
        this.userGxOrgan = userGxOrgan;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPass() {
        return userPass;
    }

    public void setUserPass(String userPass) {
        this.userPass = userPass;
    }

    public String getUserTelephone() {
        return userTelephone;
    }

    public void setUserTelephone(String userTelephone) {
        this.userTelephone = userTelephone;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserGenger() {
        return userGenger;
    }

    public void setUserGenger(String userGenger) {
        this.userGenger = userGenger;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getUserOrgan() {
        return userOrgan;
    }

    public void setUserOrgan(String userOrgan) {
        this.userOrgan = userOrgan;
    }

    public int getLoginCount() {
        return loginCount;
    }

    public void setLoginCount(int loginCount) {
        this.loginCount = loginCount;
    }

    public String getLastLoginDate() {
        return lastLoginDate;
    }

    public void setLastLoginDate(String lastLoginDate) {
        this.lastLoginDate = lastLoginDate;
    }

    public String getLastLoginIP() {
        return lastLoginIP;
    }

    public void setLastLoginIP(String lastLoginIP) {
        this.lastLoginIP = lastLoginIP;
    }

    public String getdDate() {
        return dDate;
    }

    public void setdDate(String dDate) {
        this.dDate = dDate;
    }

    public String getdDip() {
        return dDip;
    }

    public void setdDip(String dDip) {
        this.dDip = dDip;
    }

    public SysUser getSysUser(){

        SysUser sysUser = new SysUser();
        if(StringUtils.isNoneBlank(this.userId)){
            sysUser.setUserId(userId);
        }

        if(StringUtils.isNoneBlank(this.userName)){
            sysUser.setUserName(userName);
        }

        if(StringUtils.isNoneBlank(this.userPass)){
            sysUser.setUserPass(userPass);
        }

        if(StringUtils.isNoneBlank(this.userTelephone)){
            sysUser.setUserTelephone(userTelephone);
        }

        if(StringUtils.isNoneBlank(this.userEmail)){
            sysUser.setUserEmail(userEmail);
        }

        if(StringUtils.isNoneBlank(this.userGenger)){
            sysUser.setUserGenger(userGenger);
        }

        if(StringUtils.isNoneBlank(this.status)){
            sysUser.setStatus(status);
        }

        if(StringUtils.isNoneBlank(this.userOrgan)){
            sysUser.setUserOrgan(userOrgan);
        }

        ;
        if(StringUtils.isNoneBlank(this.dDate)){
            sysUser.setdDate(dDate);
        }

        if(StringUtils.isNoneBlank(this.dDip)){
            sysUser.setdDip(dDip);
        }

        return sysUser;

    }
}

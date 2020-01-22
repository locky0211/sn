package com.efraiser.test.common.config;

import org.apache.commons.lang3.StringUtils;

import java.util.HashSet;
import java.util.Set;

public class LocalProperties {


    private String updateEnabled;

    private String loginImg1;

    private String loginImg2;

    private String mainImg;

    private String dateFormat;


    private String eastScoreShow;

    private String mainJsp;

    private String systemBrNo;

    private String ef;

    private String tempStringPath;

    //缓存配置
    private String cacheNameStr;
    private Set<String> getCacheNameSet = new HashSet<>();

    public String getEf() {
        return ef;
    }

    public void setEf(String ef) {
        this.ef = ef;
    }

    public String getMainJsp() {
        return mainJsp;
    }

    public void setMainJsp(String mainJsp) {
        this.mainJsp = mainJsp;
    }

    public String getSystemBrNo() {
        return systemBrNo;
    }

    public void setSystemBrNo(String systemBrNo) {
        this.systemBrNo = systemBrNo;
    }

    public String getEastScoreShow() {
        return eastScoreShow;
    }

    public void setEastScoreShow(String eastScoreShow) {
        this.eastScoreShow = eastScoreShow;
    }

    public String getDateFormat() {
        return dateFormat;
    }

    public void setDateFormat(String dateFormat) {
        this.dateFormat = dateFormat;
    }

    public String getUpdateEnabled() {
        return updateEnabled;
    }

    public void setUpdateEnabled(String updateEnabled) {
        this.updateEnabled = updateEnabled;
    }

    public String getLoginImg1() {
        return loginImg1;
    }

    public void setLoginImg1(String loginImg1) {
        this.loginImg1 = loginImg1;
    }

    public String getLoginImg2() {
        return loginImg2;
    }

    public void setLoginImg2(String loginImg2) {
        this.loginImg2 = loginImg2;
    }

    public String getMainImg() {
        return mainImg;
    }

    public void setMainImg(String mainImg) {
        this.mainImg = mainImg;
    }

    public String getCacheNameStr() {
        return cacheNameStr;
    }

    public void setCacheNameStr(String cacheNameStr) {
        this.cacheNameStr = cacheNameStr;
    }


    public String getTempStringPath() {
        return tempStringPath;
    }

    public void setTempStringPath(String tempStringPath) {
        this.tempStringPath = tempStringPath;
    }

    /**
     * 判断是否使用缓存
     * @param cacheName
     * @return
     */
    public boolean checkCacheName(String cacheName) {

        if (getCacheNameSet.size() <= 0) {
            if (StringUtils.isBlank(cacheNameStr)) {
                return false;
            }

            String[] cacheNames = cacheNameStr.split(",");
            for (String cacheNameDetail : cacheNames) {
                getCacheNameSet.add(cacheNameDetail);
            }
        }

        return getCacheNameSet.contains(cacheName);
    }
}

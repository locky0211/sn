package com.efraiser.test.db.model;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Id;
import org.nutz.dao.entity.annotation.ManyMany;
import org.nutz.dao.entity.annotation.Table;

import java.io.Serializable;
import java.util.List;

/**
 * Created by xslde on 2018/7/23
 */
@Table("xslde_role")
public class Role implements Serializable {

    @Id
    private Integer id;

    @Column
    private String role;

    @Column
    private String describes;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getDescribes() {
        return describes;
    }

    public void setDescribes(String describes) {
        this.describes = describes;
    }

}

package com.efraiser.test.db.service.common;

import org.nutz.dao.Cnd;
import org.nutz.dao.entity.EntityField;

public abstract class IdEntityService <T> extends EntityService<T> {

    public IdEntityService() {
    }


    public T fetch(long id) {
        return this.dao().fetch(this.getEntityClass(), id);
    }

    public int delete(long id) {
        return this.dao().delete(this.getEntityClass(), id);
    }

    public int getMaxId() {
        return this.dao().getMaxId(this.getEntityClass());
    }

    public boolean exists(long id) {
        EntityField ef = this.getEntity().getIdField();
        if (null == ef) {
            return false;
        } else {
            return this.dao().count(this.getEntityClass(), Cnd.where(ef.getName(), "=", id)) > 0;
        }
    }
}

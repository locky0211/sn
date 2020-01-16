package com.efraiser.test.db.service.common;

import java.sql.ResultSet;
import java.util.List;
import org.nutz.dao.Chain;
import org.nutz.dao.Condition;
import org.nutz.dao.Dao;
import org.nutz.dao.FieldFilter;
import org.nutz.dao.FieldMatcher;
import org.nutz.dao.entity.Entity;
import org.nutz.dao.pager.Pager;
import org.nutz.lang.Each;
import org.nutz.lang.Mirror;
import org.nutz.log.Log;
import org.nutz.log.Logs;

public abstract class EntityService<T> extends Service {
    private Mirror<T> mirror;
    private static final Log log = Logs.get();

    public EntityService() {
        try {
            Class<T> entryClass = Mirror.getTypeParam(this.getClass(), 0);
            this.mirror = Mirror.me(entryClass);
            if (log.isDebugEnabled()) {
                log.debugf("Get TypeParams for self : %s", new Object[]{entryClass.getName()});
            }
        } catch (Throwable var2) {
            if (log.isWarnEnabled()) {
                log.warn("!!!Fail to get TypeParams for self!", var2);
            }
        }

    }


    public Mirror<T> mirror() {
        return this.mirror;
    }

    public <C extends T> void setEntityType(C  classOfT) {
        this.mirror = Mirror.me(classOfT);
    }

    public Entity<T> getEntity() {
        return this.dao().getEntity(this.mirror.getType());
    }

    public Class<T> getEntityClass() {
        return this.mirror.getType();
    }

    public int clear(Condition cnd) {
        return this.dao().clear(this.getEntityClass(), cnd);
    }

    public int clear() {
        return this.dao().clear(this.getEntityClass(), (Condition)null);
    }

    public List<T> query(Condition cnd, Pager pager) {
        return this.dao().query(this.getEntityClass(), cnd, pager);
    }

    public int each(Condition cnd, Pager pager, Each<T> callback) {
        return this.dao().each(this.getEntityClass(), cnd, pager, callback);
    }

    public int count(Condition cnd) {
        return this.dao().count(this.getEntityClass(), cnd);
    }

    public int count() {
        return this.dao().count(this.getEntityClass());
    }

    public T fetch(Condition cnd) {
        return this.dao().fetch(this.getEntityClass(), cnd);
    }

    public T fetchx(Object... pks) {
        return this.dao().fetchx(this.getEntityClass(), pks);
    }

    public boolean exists(Object... pks) {
        return null != this.fetchx(pks);
    }

    public int update(Chain chain, Condition cnd) {
        return this.dao().update(this.getEntityClass(), chain, cnd);
    }

    public int updateRelation(String regex, Chain chain, Condition cnd) {
        return this.dao().updateRelation(this.getEntityClass(), regex, chain, cnd);
    }

    public int deletex(Object... pks) {
        return this.dao().deletex(this.getEntityClass(), pks);
    }

    public Entity<T> create(boolean dropIfExists) {
        return this.dao().create(this.getEntityClass(), dropIfExists);
    }

    public void insert(Chain chain) {
        this.dao().insert(this.getEntityClass(), chain);
    }

    public List<T> query(Condition cnd) {
        return this.dao().query(this.getEntityClass(), cnd);
    }

    public int each(Condition cnd, Each<T> callback) {
        return this.dao().each(this.getEntityClass(), cnd, callback);
    }

    public int func(String funcName, String fieldName) {
        return this.dao().func(this.getEntityClass(), funcName, fieldName);
    }

    public int func(String funcName, String fieldName, Condition cnd) {
        return this.dao().func(this.getEntityClass(), funcName, fieldName, cnd);
    }

    public T getObject(ResultSet rs, FieldMatcher fm) {
        return this.dao().getObject(this.getEntityClass(), rs, fm);
    }

    public T getObject(ResultSet rs, FieldMatcher fm, String prefix) {
        return this.dao().getObject(this.getEntityClass(), rs, fm, prefix);
    }

    public List<T> _query(Condition cnd, Pager pager, FieldMatcher matcher) {
        return this.dao().query(this.getEntityClass(), cnd, pager, matcher);
    }

    public List<T> _query(Condition cnd, Pager pager, String regex) {
        return this.dao().query(this.getEntityClass(), cnd, pager, regex);
    }

    public T _insert(T obj) {
        return this.dao().insert(obj);
    }

    public T _fastInsert(T obj) {
        return this.dao().fastInsert(obj);
    }

    public T _insert(T obj, FieldFilter filter) {
        return this.dao().insert(obj, filter);
    }

    public T _insert(T t, boolean ignoreNull, boolean ignoreZero, boolean ignoreBlankStr) {
        return this.dao().insert(t, ignoreNull, ignoreZero, ignoreBlankStr);
    }

    public T _insertWith(T obj, String regex) {
        return this.dao().insertWith(obj, regex);
    }

    public T _insertLinks(T obj, String regex) {
        return this.dao().insertLinks(obj, regex);
    }

    public T _insertRelation(T obj, String regex) {
        return this.dao().insertRelation(obj, regex);
    }

    public int _update(T obj) {
        return this.dao().update(obj);
    }

    public int _update(T obj, String regex) {
        return this.dao().update(obj, regex);
    }

    public int _updateIgnoreNull(Object obj) {
        return this.dao().updateIgnoreNull(obj);
    }

    public T _updateWith(T obj, String regex) {
        return this.dao().updateWith(obj, regex);
    }

    public T _updateLinks(T obj, String regex) {
        return this.dao().updateLinks(obj, regex);
    }

    public int _delete(T obj) {
        return this.dao().delete(obj);
    }

    public int _deleteWith(T obj, String regex) {
        return this.dao().deleteWith(obj, regex);
    }

    public int _deleteLinks(T obj, String regex) {
        return this.dao().deleteLinks(obj, regex);
    }

    public T _fetch(T obj) {
        return this.dao().fetch(obj);
    }

    public T _fetchLinks(T obj, String regex) {
        return this.dao().fetchLinks(obj, regex);
    }

    public T _fetchLinks(T obj, String regex, Condition cnd) {
        return this.dao().fetchLinks(obj, regex, cnd);
    }

    public T _clearLinks(T obj, String regex) {
        return this.dao().clearLinks(obj, regex);
    }

    public void setExpert(T obj) throws Exception {
        this.dao().setExpert(obj);
    }

    public List<T> query() {
        return this.dao().query(this.getEntityClass(), (Condition)null);
    }
}


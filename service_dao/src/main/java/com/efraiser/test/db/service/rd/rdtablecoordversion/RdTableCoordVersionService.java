package com.efraiser.test.db.service.rd.rdtablecoordversion;

import com.efraiser.test.db.model.rd.RdTableCoordVersion;
import com.efraiser.test.db.service.BaseService;

import java.util.List;
import java.util.Map;

public interface RdTableCoordVersionService<T> extends BaseService {


    void deleteRdTableCoordVersion(String id);


    RdTableCoordVersion updateRdTableCoordVersionStatus(String id, String status);

    void saveOrUpdateTableInfo(RdTableCoordVersion record, String model) throws Exception;

    List<RdTableCoordVersion> getAll();

    Map<String, String> getUpCoordinateList(String tabCode);

    public Map<String, String> getDownCoordinateList(String tabCode);
}

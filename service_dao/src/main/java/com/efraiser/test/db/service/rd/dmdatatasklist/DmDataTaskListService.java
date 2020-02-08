package com.efraiser.test.db.service.rd.dmdatatasklist;

import com.efraiser.test.db.model.rd.DmDataTaskList;
import com.efraiser.test.db.service.BaseService;

public interface DmDataTaskListService extends BaseService {

    DmDataTaskList updateDataTaskFlag(String id, String flag);

    int getMaxTaskIndex();
}

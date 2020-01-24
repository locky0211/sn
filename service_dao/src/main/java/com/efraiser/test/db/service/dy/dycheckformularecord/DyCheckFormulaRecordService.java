package com.efraiser.test.db.service.dy.dycheckformularecord;

import com.efraiser.test.db.model.dy.DyCheckFormulaRecord;
import com.efraiser.test.db.model.dy.DyCheckFormulaWave;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface DyCheckFormulaRecordService extends BaseService {


    void insertRecord(String operate, DyCheckFormulaWave checkformula);


    List<DyCheckFormulaRecord> getRecordByBrno(String brNos);
}

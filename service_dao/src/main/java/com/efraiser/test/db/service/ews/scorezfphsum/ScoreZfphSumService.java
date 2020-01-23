package com.efraiser.test.db.service.ews.scorezfphsum;

import com.efraiser.test.db.model.ews.ScoreZfphSum;
import com.efraiser.test.db.service.BaseService;

import java.util.List;

public interface ScoreZfphSumService extends BaseService {


    List<ScoreZfphSum> getScoreZfphSumList(String brNo, String reportDate, String myField);
}

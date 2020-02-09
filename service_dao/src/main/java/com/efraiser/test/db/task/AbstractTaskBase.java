package com.efraiser.test.db.task;

public interface AbstractTaskBase {


    String taskId();

    String cronExpression();

    String cycleName();
}

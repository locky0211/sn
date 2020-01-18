/*SF6200_5_A*/
function FSF6200_5_A(obj){
    showStr(obj);
    $('#SF6200_5_A').val(getNumToString(getStrFloat($('#SF6200_6_A').val())+getStrFloat($('#SF6200_7_A').val())+getStrFloat($('#SF6200_8_A').val())+getStrFloat($('#SF6200_9_A').val()),2));
}

/*SF6200_5_B*/
function FSF6200_5_B(obj){
    showStr(obj);
    $('#SF6200_5_B').val(getNumToString(getStrFloat($('#SF6200_6_B').val())+getStrFloat($('#SF6200_7_B').val())+getStrFloat($('#SF6200_8_B').val())+getStrFloat($('#SF6200_9_B').val()),2));
}

/*SF6200_5_C*/
function FSF6200_5_C(obj){
    showStr(obj);
    $('#SF6200_5_C').val(getNumToString(getStrFloat($('#SF6200_6_C').val())+getStrFloat($('#SF6200_7_C').val())+getStrFloat($('#SF6200_8_C').val())+getStrFloat($('#SF6200_9_C').val()),2));
}

/*SF6200_6_A*/
function FSF6200_6_A(obj){
    showStr(obj);
    $('#SF6200_5_A').val(getNumToString(getStrFloat($('#SF6200_6_A').val())+getStrFloat($('#SF6200_7_A').val())+getStrFloat($('#SF6200_8_A').val())+getStrFloat($('#SF6200_9_A').val()),2));
    FSF6200_5_A($('#SF6200_5_A'));
    $('#SF6200_6_A').val(getNumToString(getStrFloat($('#SF6200_6_B').val())+getStrFloat($('#SF6200_6_C').val()),2));
}

/*SF6200_6_B*/
function FSF6200_6_B(obj){
    showStr(obj);
    $('#SF6200_5_B').val(getNumToString(getStrFloat($('#SF6200_6_B').val())+getStrFloat($('#SF6200_7_B').val())+getStrFloat($('#SF6200_8_B').val())+getStrFloat($('#SF6200_9_B').val()),2));
    FSF6200_5_B($('#SF6200_5_B'));
    $('#SF6200_6_A').val(getNumToString(getStrFloat($('#SF6200_6_B').val())+getStrFloat($('#SF6200_6_C').val()),2));
    FSF6200_6_A($('#SF6200_6_A'));
}

/*SF6200_6_C*/
function FSF6200_6_C(obj){
    showStr(obj);
    $('#SF6200_5_C').val(getNumToString(getStrFloat($('#SF6200_6_C').val())+getStrFloat($('#SF6200_7_C').val())+getStrFloat($('#SF6200_8_C').val())+getStrFloat($('#SF6200_9_C').val()),2));
    FSF6200_5_C($('#SF6200_5_C'));
    $('#SF6200_6_A').val(getNumToString(getStrFloat($('#SF6200_6_B').val())+getStrFloat($('#SF6200_6_C').val()),2));
    FSF6200_6_A($('#SF6200_6_A'));
}

/*SF6200_7_A*/
function FSF6200_7_A(obj){
    showStr(obj);
    $('#SF6200_5_A').val(getNumToString(getStrFloat($('#SF6200_6_A').val())+getStrFloat($('#SF6200_7_A').val())+getStrFloat($('#SF6200_8_A').val())+getStrFloat($('#SF6200_9_A').val()),2));
    FSF6200_5_A($('#SF6200_5_A'));
    $('#SF6200_7_A').val(getNumToString(getStrFloat($('#SF6200_7_B').val())+getStrFloat($('#SF6200_7_C').val()),2));
}

/*SF6200_7_B*/
function FSF6200_7_B(obj){
    showStr(obj);
    $('#SF6200_5_B').val(getNumToString(getStrFloat($('#SF6200_6_B').val())+getStrFloat($('#SF6200_7_B').val())+getStrFloat($('#SF6200_8_B').val())+getStrFloat($('#SF6200_9_B').val()),2));
    FSF6200_5_B($('#SF6200_5_B'));
    $('#SF6200_7_A').val(getNumToString(getStrFloat($('#SF6200_7_B').val())+getStrFloat($('#SF6200_7_C').val()),2));
    FSF6200_7_A($('#SF6200_7_A'));
}

/*SF6200_7_C*/
function FSF6200_7_C(obj){
    showStr(obj);
    $('#SF6200_5_C').val(getNumToString(getStrFloat($('#SF6200_6_C').val())+getStrFloat($('#SF6200_7_C').val())+getStrFloat($('#SF6200_8_C').val())+getStrFloat($('#SF6200_9_C').val()),2));
    FSF6200_5_C($('#SF6200_5_C'));
    $('#SF6200_7_A').val(getNumToString(getStrFloat($('#SF6200_7_B').val())+getStrFloat($('#SF6200_7_C').val()),2));
    FSF6200_7_A($('#SF6200_7_A'));
}

/*SF6200_8_A*/
function FSF6200_8_A(obj){
    showStr(obj);
    $('#SF6200_5_A').val(getNumToString(getStrFloat($('#SF6200_6_A').val())+getStrFloat($('#SF6200_7_A').val())+getStrFloat($('#SF6200_8_A').val())+getStrFloat($('#SF6200_9_A').val()),2));
    FSF6200_5_A($('#SF6200_5_A'));
    $('#SF6200_8_A').val(getNumToString(getStrFloat($('#SF6200_8_B').val())+getStrFloat($('#SF6200_8_C').val()),2));
}

/*SF6200_8_B*/
function FSF6200_8_B(obj){
    showStr(obj);
    $('#SF6200_5_B').val(getNumToString(getStrFloat($('#SF6200_6_B').val())+getStrFloat($('#SF6200_7_B').val())+getStrFloat($('#SF6200_8_B').val())+getStrFloat($('#SF6200_9_B').val()),2));
    FSF6200_5_B($('#SF6200_5_B'));
    $('#SF6200_8_A').val(getNumToString(getStrFloat($('#SF6200_8_B').val())+getStrFloat($('#SF6200_8_C').val()),2));
    FSF6200_8_A($('#SF6200_8_A'));
}

/*SF6200_8_C*/
function FSF6200_8_C(obj){
    showStr(obj);
    $('#SF6200_5_C').val(getNumToString(getStrFloat($('#SF6200_6_C').val())+getStrFloat($('#SF6200_7_C').val())+getStrFloat($('#SF6200_8_C').val())+getStrFloat($('#SF6200_9_C').val()),2));
    FSF6200_5_C($('#SF6200_5_C'));
    $('#SF6200_8_A').val(getNumToString(getStrFloat($('#SF6200_8_B').val())+getStrFloat($('#SF6200_8_C').val()),2));
    FSF6200_8_A($('#SF6200_8_A'));
}

/*SF6200_9_A*/
function FSF6200_9_A(obj){
    showStr(obj);
    $('#SF6200_5_A').val(getNumToString(getStrFloat($('#SF6200_6_A').val())+getStrFloat($('#SF6200_7_A').val())+getStrFloat($('#SF6200_8_A').val())+getStrFloat($('#SF6200_9_A').val()),2));
    FSF6200_5_A($('#SF6200_5_A'));
    $('#SF6200_9_A').val(getNumToString(getStrFloat($('#SF6200_9_B').val())+getStrFloat($('#SF6200_9_C').val()),2));
}

/*SF6200_9_B*/
function FSF6200_9_B(obj){
    showStr(obj);
    $('#SF6200_5_B').val(getNumToString(getStrFloat($('#SF6200_6_B').val())+getStrFloat($('#SF6200_7_B').val())+getStrFloat($('#SF6200_8_B').val())+getStrFloat($('#SF6200_9_B').val()),2));
    FSF6200_5_B($('#SF6200_5_B'));
    $('#SF6200_9_A').val(getNumToString(getStrFloat($('#SF6200_9_B').val())+getStrFloat($('#SF6200_9_C').val()),2));
    FSF6200_9_A($('#SF6200_9_A'));
}

/*SF6200_9_C*/
function FSF6200_9_C(obj){
    showStr(obj);
    $('#SF6200_5_C').val(getNumToString(getStrFloat($('#SF6200_6_C').val())+getStrFloat($('#SF6200_7_C').val())+getStrFloat($('#SF6200_8_C').val())+getStrFloat($('#SF6200_9_C').val()),2));
    FSF6200_5_C($('#SF6200_5_C'));
    $('#SF6200_9_A').val(getNumToString(getStrFloat($('#SF6200_9_B').val())+getStrFloat($('#SF6200_9_C').val()),2));
    FSF6200_9_A($('#SF6200_9_A'));
}


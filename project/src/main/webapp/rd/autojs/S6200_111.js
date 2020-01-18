/*S6200_5_A*/
function FS6200_5_A(obj){
    showStr(obj);
    $('#S6200_5_A').val(getNumToString(getStrFloat($('#S6200_6_A').val())+getStrFloat($('#S6200_7_A').val())+getStrFloat($('#S6200_8_A').val())+getStrFloat($('#S6200_9_A').val()),2));
}

/*S6200_5_B*/
function FS6200_5_B(obj){
    showStr(obj);
    $('#S6200_5_B').val(getNumToString(getStrFloat($('#S6200_6_B').val())+getStrFloat($('#S6200_7_B').val())+getStrFloat($('#S6200_8_B').val())+getStrFloat($('#S6200_9_B').val()),2));
}

/*S6200_5_C*/
function FS6200_5_C(obj){
    showStr(obj);
    $('#S6200_5_C').val(getNumToString(getStrFloat($('#S6200_6_C').val())+getStrFloat($('#S6200_7_C').val())+getStrFloat($('#S6200_8_C').val())+getStrFloat($('#S6200_9_C').val()),2));
}

/*S6200_6_A*/
function FS6200_6_A(obj){
    showStr(obj);
    $('#S6200_5_A').val(getNumToString(getStrFloat($('#S6200_6_A').val())+getStrFloat($('#S6200_7_A').val())+getStrFloat($('#S6200_8_A').val())+getStrFloat($('#S6200_9_A').val()),2));
    FS6200_5_A($('#S6200_5_A'));
    $('#S6200_6_A').val(getNumToString(getStrFloat($('#S6200_6_B').val())+getStrFloat($('#S6200_6_C').val()),2));
}

/*S6200_6_B*/
function FS6200_6_B(obj){
    showStr(obj);
    $('#S6200_5_B').val(getNumToString(getStrFloat($('#S6200_6_B').val())+getStrFloat($('#S6200_7_B').val())+getStrFloat($('#S6200_8_B').val())+getStrFloat($('#S6200_9_B').val()),2));
    FS6200_5_B($('#S6200_5_B'));
    $('#S6200_6_A').val(getNumToString(getStrFloat($('#S6200_6_B').val())+getStrFloat($('#S6200_6_C').val()),2));
    FS6200_6_A($('#S6200_6_A'));
}

/*S6200_6_C*/
function FS6200_6_C(obj){
    showStr(obj);
    $('#S6200_5_C').val(getNumToString(getStrFloat($('#S6200_6_C').val())+getStrFloat($('#S6200_7_C').val())+getStrFloat($('#S6200_8_C').val())+getStrFloat($('#S6200_9_C').val()),2));
    FS6200_5_C($('#S6200_5_C'));
    $('#S6200_6_A').val(getNumToString(getStrFloat($('#S6200_6_B').val())+getStrFloat($('#S6200_6_C').val()),2));
    FS6200_6_A($('#S6200_6_A'));
}

/*S6200_7_A*/
function FS6200_7_A(obj){
    showStr(obj);
    $('#S6200_5_A').val(getNumToString(getStrFloat($('#S6200_6_A').val())+getStrFloat($('#S6200_7_A').val())+getStrFloat($('#S6200_8_A').val())+getStrFloat($('#S6200_9_A').val()),2));
    FS6200_5_A($('#S6200_5_A'));
    $('#S6200_7_A').val(getNumToString(getStrFloat($('#S6200_7_B').val())+getStrFloat($('#S6200_7_C').val()),2));
}

/*S6200_7_B*/
function FS6200_7_B(obj){
    showStr(obj);
    $('#S6200_5_B').val(getNumToString(getStrFloat($('#S6200_6_B').val())+getStrFloat($('#S6200_7_B').val())+getStrFloat($('#S6200_8_B').val())+getStrFloat($('#S6200_9_B').val()),2));
    FS6200_5_B($('#S6200_5_B'));
    $('#S6200_7_A').val(getNumToString(getStrFloat($('#S6200_7_B').val())+getStrFloat($('#S6200_7_C').val()),2));
    FS6200_7_A($('#S6200_7_A'));
}

/*S6200_7_C*/
function FS6200_7_C(obj){
    showStr(obj);
    $('#S6200_5_C').val(getNumToString(getStrFloat($('#S6200_6_C').val())+getStrFloat($('#S6200_7_C').val())+getStrFloat($('#S6200_8_C').val())+getStrFloat($('#S6200_9_C').val()),2));
    FS6200_5_C($('#S6200_5_C'));
    $('#S6200_7_A').val(getNumToString(getStrFloat($('#S6200_7_B').val())+getStrFloat($('#S6200_7_C').val()),2));
    FS6200_7_A($('#S6200_7_A'));
}

/*S6200_8_A*/
function FS6200_8_A(obj){
    showStr(obj);
    $('#S6200_5_A').val(getNumToString(getStrFloat($('#S6200_6_A').val())+getStrFloat($('#S6200_7_A').val())+getStrFloat($('#S6200_8_A').val())+getStrFloat($('#S6200_9_A').val()),2));
    FS6200_5_A($('#S6200_5_A'));
    $('#S6200_8_A').val(getNumToString(getStrFloat($('#S6200_8_B').val())+getStrFloat($('#S6200_8_C').val()),2));
}

/*S6200_8_B*/
function FS6200_8_B(obj){
    showStr(obj);
    $('#S6200_5_B').val(getNumToString(getStrFloat($('#S6200_6_B').val())+getStrFloat($('#S6200_7_B').val())+getStrFloat($('#S6200_8_B').val())+getStrFloat($('#S6200_9_B').val()),2));
    FS6200_5_B($('#S6200_5_B'));
    $('#S6200_8_A').val(getNumToString(getStrFloat($('#S6200_8_B').val())+getStrFloat($('#S6200_8_C').val()),2));
    FS6200_8_A($('#S6200_8_A'));
}

/*S6200_8_C*/
function FS6200_8_C(obj){
    showStr(obj);
    $('#S6200_5_C').val(getNumToString(getStrFloat($('#S6200_6_C').val())+getStrFloat($('#S6200_7_C').val())+getStrFloat($('#S6200_8_C').val())+getStrFloat($('#S6200_9_C').val()),2));
    FS6200_5_C($('#S6200_5_C'));
    $('#S6200_8_A').val(getNumToString(getStrFloat($('#S6200_8_B').val())+getStrFloat($('#S6200_8_C').val()),2));
    FS6200_8_A($('#S6200_8_A'));
}

/*S6200_9_A*/
function FS6200_9_A(obj){
    showStr(obj);
    $('#S6200_5_A').val(getNumToString(getStrFloat($('#S6200_6_A').val())+getStrFloat($('#S6200_7_A').val())+getStrFloat($('#S6200_8_A').val())+getStrFloat($('#S6200_9_A').val()),2));
    FS6200_5_A($('#S6200_5_A'));
    $('#S6200_9_A').val(getNumToString(getStrFloat($('#S6200_9_B').val())+getStrFloat($('#S6200_9_C').val()),2));
}

/*S6200_9_B*/
function FS6200_9_B(obj){
    showStr(obj);
    $('#S6200_5_B').val(getNumToString(getStrFloat($('#S6200_6_B').val())+getStrFloat($('#S6200_7_B').val())+getStrFloat($('#S6200_8_B').val())+getStrFloat($('#S6200_9_B').val()),2));
    FS6200_5_B($('#S6200_5_B'));
    $('#S6200_9_A').val(getNumToString(getStrFloat($('#S6200_9_B').val())+getStrFloat($('#S6200_9_C').val()),2));
    FS6200_9_A($('#S6200_9_A'));
}

/*S6200_9_C*/
function FS6200_9_C(obj){
    showStr(obj);
    $('#S6200_5_C').val(getNumToString(getStrFloat($('#S6200_6_C').val())+getStrFloat($('#S6200_7_C').val())+getStrFloat($('#S6200_8_C').val())+getStrFloat($('#S6200_9_C').val()),2));
    FS6200_5_C($('#S6200_5_C'));
    $('#S6200_9_A').val(getNumToString(getStrFloat($('#S6200_9_B').val())+getStrFloat($('#S6200_9_C').val()),2));
    FS6200_9_A($('#S6200_9_A'));
}


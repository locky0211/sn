/*GF0102_6_A*/
function FGF0102_6_A(obj){
    showStr(obj);
    $('#GF0102_6_A').val(getNumToString(getStrFloat($('#GF0102_7_A').val())+getStrFloat($('#GF0102_8_A').val())+getStrFloat($('#GF0102_9_A').val())+getStrFloat($('#GF0102_10_A').val())+getStrFloat($('#GF0102_11_A').val()),2));
}

/*GF0102_6_B*/
function FGF0102_6_B(obj){
    showStr(obj);
    $('#GF0102_6_B').val(getNumToString(getStrFloat($('#GF0102_7_B').val())+getStrFloat($('#GF0102_8_B').val())+getStrFloat($('#GF0102_9_B').val())+getStrFloat($('#GF0102_10_B').val())+getStrFloat($('#GF0102_11_B').val()),2));
}

/*GF0102_6_C*/
function FGF0102_6_C(obj){
    showStr(obj);
    $('#GF0102_6_C').val(getNumToString(getStrFloat($('#GF0102_7_C').val())+getStrFloat($('#GF0102_8_C').val())+getStrFloat($('#GF0102_9_C').val())+getStrFloat($('#GF0102_10_C').val())+getStrFloat($('#GF0102_11_C').val()),2));
}

/*GF0102_7_A*/
function FGF0102_7_A(obj){
    showStr(obj);
    $('#GF0102_6_A').val(getNumToString(getStrFloat($('#GF0102_7_A').val())+getStrFloat($('#GF0102_8_A').val())+getStrFloat($('#GF0102_9_A').val())+getStrFloat($('#GF0102_10_A').val())+getStrFloat($('#GF0102_11_A').val()),2));
    FGF0102_6_A($('#GF0102_6_A'));
    $('#GF0102_7_C').val(getNumToString(getStrFloat($('#GF0102_7_A').val())+getStrFloat($('#GF0102_7_B').val()),2));
    FGF0102_7_C($('#GF0102_7_C'));
}

/*GF0102_7_B*/
function FGF0102_7_B(obj){
    showStr(obj);
    $('#GF0102_6_B').val(getNumToString(getStrFloat($('#GF0102_7_B').val())+getStrFloat($('#GF0102_8_B').val())+getStrFloat($('#GF0102_9_B').val())+getStrFloat($('#GF0102_10_B').val())+getStrFloat($('#GF0102_11_B').val()),2));
    FGF0102_6_B($('#GF0102_6_B'));
    $('#GF0102_7_C').val(getNumToString(getStrFloat($('#GF0102_7_A').val())+getStrFloat($('#GF0102_7_B').val()),2));
    FGF0102_7_C($('#GF0102_7_C'));
}

/*GF0102_7_C*/
function FGF0102_7_C(obj){
    showStr(obj);
    $('#GF0102_6_C').val(getNumToString(getStrFloat($('#GF0102_7_C').val())+getStrFloat($('#GF0102_8_C').val())+getStrFloat($('#GF0102_9_C').val())+getStrFloat($('#GF0102_10_C').val())+getStrFloat($('#GF0102_11_C').val()),2));
    FGF0102_6_C($('#GF0102_6_C'));
    $('#GF0102_7_C').val(getNumToString(getStrFloat($('#GF0102_7_A').val())+getStrFloat($('#GF0102_7_B').val()),2));
}

/*GF0102_8_A*/
function FGF0102_8_A(obj){
    showStr(obj);
    $('#GF0102_6_A').val(getNumToString(getStrFloat($('#GF0102_7_A').val())+getStrFloat($('#GF0102_8_A').val())+getStrFloat($('#GF0102_9_A').val())+getStrFloat($('#GF0102_10_A').val())+getStrFloat($('#GF0102_11_A').val()),2));
    FGF0102_6_A($('#GF0102_6_A'));
    $('#GF0102_8_C').val(getNumToString(getStrFloat($('#GF0102_8_A').val())+getStrFloat($('#GF0102_8_B').val()),2));
    FGF0102_8_C($('#GF0102_8_C'));
}

/*GF0102_8_B*/
function FGF0102_8_B(obj){
    showStr(obj);
    $('#GF0102_6_B').val(getNumToString(getStrFloat($('#GF0102_7_B').val())+getStrFloat($('#GF0102_8_B').val())+getStrFloat($('#GF0102_9_B').val())+getStrFloat($('#GF0102_10_B').val())+getStrFloat($('#GF0102_11_B').val()),2));
    FGF0102_6_B($('#GF0102_6_B'));
    $('#GF0102_8_C').val(getNumToString(getStrFloat($('#GF0102_8_A').val())+getStrFloat($('#GF0102_8_B').val()),2));
    FGF0102_8_C($('#GF0102_8_C'));
}

/*GF0102_8_C*/
function FGF0102_8_C(obj){
    showStr(obj);
    $('#GF0102_6_C').val(getNumToString(getStrFloat($('#GF0102_7_C').val())+getStrFloat($('#GF0102_8_C').val())+getStrFloat($('#GF0102_9_C').val())+getStrFloat($('#GF0102_10_C').val())+getStrFloat($('#GF0102_11_C').val()),2));
    FGF0102_6_C($('#GF0102_6_C'));
    $('#GF0102_8_C').val(getNumToString(getStrFloat($('#GF0102_8_A').val())+getStrFloat($('#GF0102_8_B').val()),2));
}

/*GF0102_9_A*/
function FGF0102_9_A(obj){
    showStr(obj);
    $('#GF0102_6_A').val(getNumToString(getStrFloat($('#GF0102_7_A').val())+getStrFloat($('#GF0102_8_A').val())+getStrFloat($('#GF0102_9_A').val())+getStrFloat($('#GF0102_10_A').val())+getStrFloat($('#GF0102_11_A').val()),2));
    FGF0102_6_A($('#GF0102_6_A'));
    $('#GF0102_9_C').val(getNumToString(getStrFloat($('#GF0102_9_A').val())+getStrFloat($('#GF0102_9_B').val()),2));
    FGF0102_9_C($('#GF0102_9_C'));
}

/*GF0102_9_B*/
function FGF0102_9_B(obj){
    showStr(obj);
    $('#GF0102_6_B').val(getNumToString(getStrFloat($('#GF0102_7_B').val())+getStrFloat($('#GF0102_8_B').val())+getStrFloat($('#GF0102_9_B').val())+getStrFloat($('#GF0102_10_B').val())+getStrFloat($('#GF0102_11_B').val()),2));
    FGF0102_6_B($('#GF0102_6_B'));
    $('#GF0102_9_C').val(getNumToString(getStrFloat($('#GF0102_9_A').val())+getStrFloat($('#GF0102_9_B').val()),2));
    FGF0102_9_C($('#GF0102_9_C'));
}

/*GF0102_9_C*/
function FGF0102_9_C(obj){
    showStr(obj);
    $('#GF0102_6_C').val(getNumToString(getStrFloat($('#GF0102_7_C').val())+getStrFloat($('#GF0102_8_C').val())+getStrFloat($('#GF0102_9_C').val())+getStrFloat($('#GF0102_10_C').val())+getStrFloat($('#GF0102_11_C').val()),2));
    FGF0102_6_C($('#GF0102_6_C'));
    $('#GF0102_9_C').val(getNumToString(getStrFloat($('#GF0102_9_A').val())+getStrFloat($('#GF0102_9_B').val()),2));
}

/*GF0102_10_A*/
function FGF0102_10_A(obj){
    showStr(obj);
    $('#GF0102_6_A').val(getNumToString(getStrFloat($('#GF0102_7_A').val())+getStrFloat($('#GF0102_8_A').val())+getStrFloat($('#GF0102_9_A').val())+getStrFloat($('#GF0102_10_A').val())+getStrFloat($('#GF0102_11_A').val()),2));
    FGF0102_6_A($('#GF0102_6_A'));
    $('#GF0102_10_C').val(getNumToString(getStrFloat($('#GF0102_10_A').val())+getStrFloat($('#GF0102_10_B').val()),2));
    FGF0102_10_C($('#GF0102_10_C'));
}

/*GF0102_10_B*/
function FGF0102_10_B(obj){
    showStr(obj);
    $('#GF0102_6_B').val(getNumToString(getStrFloat($('#GF0102_7_B').val())+getStrFloat($('#GF0102_8_B').val())+getStrFloat($('#GF0102_9_B').val())+getStrFloat($('#GF0102_10_B').val())+getStrFloat($('#GF0102_11_B').val()),2));
    FGF0102_6_B($('#GF0102_6_B'));
    $('#GF0102_10_C').val(getNumToString(getStrFloat($('#GF0102_10_A').val())+getStrFloat($('#GF0102_10_B').val()),2));
    FGF0102_10_C($('#GF0102_10_C'));
}

/*GF0102_10_C*/
function FGF0102_10_C(obj){
    showStr(obj);
    $('#GF0102_6_C').val(getNumToString(getStrFloat($('#GF0102_7_C').val())+getStrFloat($('#GF0102_8_C').val())+getStrFloat($('#GF0102_9_C').val())+getStrFloat($('#GF0102_10_C').val())+getStrFloat($('#GF0102_11_C').val()),2));
    FGF0102_6_C($('#GF0102_6_C'));
    $('#GF0102_10_C').val(getNumToString(getStrFloat($('#GF0102_10_A').val())+getStrFloat($('#GF0102_10_B').val()),2));
}

/*GF0102_11_A*/
function FGF0102_11_A(obj){
    showStr(obj);
    $('#GF0102_6_A').val(getNumToString(getStrFloat($('#GF0102_7_A').val())+getStrFloat($('#GF0102_8_A').val())+getStrFloat($('#GF0102_9_A').val())+getStrFloat($('#GF0102_10_A').val())+getStrFloat($('#GF0102_11_A').val()),2));
    FGF0102_6_A($('#GF0102_6_A'));
    $('#GF0102_11_C').val(getNumToString(getStrFloat($('#GF0102_11_A').val())+getStrFloat($('#GF0102_11_B').val()),2));
    FGF0102_11_C($('#GF0102_11_C'));
}

/*GF0102_11_B*/
function FGF0102_11_B(obj){
    showStr(obj);
    $('#GF0102_6_B').val(getNumToString(getStrFloat($('#GF0102_7_B').val())+getStrFloat($('#GF0102_8_B').val())+getStrFloat($('#GF0102_9_B').val())+getStrFloat($('#GF0102_10_B').val())+getStrFloat($('#GF0102_11_B').val()),2));
    FGF0102_6_B($('#GF0102_6_B'));
    $('#GF0102_11_C').val(getNumToString(getStrFloat($('#GF0102_11_A').val())+getStrFloat($('#GF0102_11_B').val()),2));
    FGF0102_11_C($('#GF0102_11_C'));
}

/*GF0102_11_C*/
function FGF0102_11_C(obj){
    showStr(obj);
    $('#GF0102_6_C').val(getNumToString(getStrFloat($('#GF0102_7_C').val())+getStrFloat($('#GF0102_8_C').val())+getStrFloat($('#GF0102_9_C').val())+getStrFloat($('#GF0102_10_C').val())+getStrFloat($('#GF0102_11_C').val()),2));
    FGF0102_6_C($('#GF0102_6_C'));
    $('#GF0102_11_C').val(getNumToString(getStrFloat($('#GF0102_11_A').val())+getStrFloat($('#GF0102_11_B').val()),2));
}


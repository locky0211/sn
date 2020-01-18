/*GF0106_7_A*/
function FGF0106_7_A(obj){
    showStr(obj);
    $('#GF0106_7_A').val(getNumToString(getStrFloat($('#GF0106_8_A').val())+getStrFloat($('#GF0106_9_A').val())+getStrFloat($('#GF0106_10_A').val()),2));
    $('#GF0106_7_C').val(getNumToString(getStrFloat($('#GF0106_7_A').val())+getStrFloat($('#GF0106_7_B').val()),2));
    FGF0106_7_C($('#GF0106_7_C'));
    $('#GF0106_19_A').val(getNumToString((getStrFloat($('#GF0106_7_A').val())+getStrFloat($('#GF0106_11_A').val())+getStrFloat($('#GF0106_14_A').val())),2));
    FGF0106_19_A($('#GF0106_19_A'));
}

/*GF0106_7_B*/
function FGF0106_7_B(obj){
    showStr(obj);
    $('#GF0106_7_B').val(getNumToString(getStrFloat($('#GF0106_8_B').val())+getStrFloat($('#GF0106_9_B').val())+getStrFloat($('#GF0106_10_B').val()),2));
    $('#GF0106_7_C').val(getNumToString(getStrFloat($('#GF0106_7_A').val())+getStrFloat($('#GF0106_7_B').val()),2));
    FGF0106_7_C($('#GF0106_7_C'));
    $('#GF0106_19_B').val(getNumToString((getStrFloat($('#GF0106_7_B').val())+getStrFloat($('#GF0106_11_B').val())+getStrFloat($('#GF0106_14_B').val())),2));
    FGF0106_19_B($('#GF0106_19_B'));
}

/*GF0106_7_C*/
function FGF0106_7_C(obj){
    showStr(obj);
    $('#GF0106_7_C').val(getNumToString(getStrFloat($('#GF0106_7_A').val())+getStrFloat($('#GF0106_7_B').val()),2));
}

/*GF0106_8_A*/
function FGF0106_8_A(obj){
    showStr(obj);
    $('#GF0106_7_A').val(getNumToString(getStrFloat($('#GF0106_8_A').val())+getStrFloat($('#GF0106_9_A').val())+getStrFloat($('#GF0106_10_A').val()),2));
    FGF0106_7_A($('#GF0106_7_A'));
    $('#GF0106_8_C').val(getNumToString(getStrFloat($('#GF0106_8_A').val())+getStrFloat($('#GF0106_8_B').val()),2));
    FGF0106_8_C($('#GF0106_8_C'));
}

/*GF0106_8_B*/
function FGF0106_8_B(obj){
    showStr(obj);
    $('#GF0106_7_B').val(getNumToString(getStrFloat($('#GF0106_8_B').val())+getStrFloat($('#GF0106_9_B').val())+getStrFloat($('#GF0106_10_B').val()),2));
    FGF0106_7_B($('#GF0106_7_B'));
    $('#GF0106_8_C').val(getNumToString(getStrFloat($('#GF0106_8_A').val())+getStrFloat($('#GF0106_8_B').val()),2));
    FGF0106_8_C($('#GF0106_8_C'));
}

/*GF0106_8_C*/
function FGF0106_8_C(obj){
    showStr(obj);
    $('#GF0106_8_C').val(getNumToString(getStrFloat($('#GF0106_8_A').val())+getStrFloat($('#GF0106_8_B').val()),2));
}

/*GF0106_9_A*/
function FGF0106_9_A(obj){
    showStr(obj);
    $('#GF0106_7_A').val(getNumToString(getStrFloat($('#GF0106_8_A').val())+getStrFloat($('#GF0106_9_A').val())+getStrFloat($('#GF0106_10_A').val()),2));
    FGF0106_7_A($('#GF0106_7_A'));
    $('#GF0106_9_C').val(getNumToString(getStrFloat($('#GF0106_9_A').val())+getStrFloat($('#GF0106_9_B').val()),2));
    FGF0106_9_C($('#GF0106_9_C'));
}

/*GF0106_9_B*/
function FGF0106_9_B(obj){
    showStr(obj);
    $('#GF0106_7_B').val(getNumToString(getStrFloat($('#GF0106_8_B').val())+getStrFloat($('#GF0106_9_B').val())+getStrFloat($('#GF0106_10_B').val()),2));
    FGF0106_7_B($('#GF0106_7_B'));
    $('#GF0106_9_C').val(getNumToString(getStrFloat($('#GF0106_9_A').val())+getStrFloat($('#GF0106_9_B').val()),2));
    FGF0106_9_C($('#GF0106_9_C'));
}

/*GF0106_9_C*/
function FGF0106_9_C(obj){
    showStr(obj);
    $('#GF0106_9_C').val(getNumToString(getStrFloat($('#GF0106_9_A').val())+getStrFloat($('#GF0106_9_B').val()),2));
}

/*GF0106_10_A*/
function FGF0106_10_A(obj){
    showStr(obj);
    $('#GF0106_7_A').val(getNumToString(getStrFloat($('#GF0106_8_A').val())+getStrFloat($('#GF0106_9_A').val())+getStrFloat($('#GF0106_10_A').val()),2));
    FGF0106_7_A($('#GF0106_7_A'));
    $('#GF0106_10_C').val(getNumToString(getStrFloat($('#GF0106_10_A').val())+getStrFloat($('#GF0106_10_B').val()),2));
    FGF0106_10_C($('#GF0106_10_C'));
}

/*GF0106_10_B*/
function FGF0106_10_B(obj){
    showStr(obj);
    $('#GF0106_7_B').val(getNumToString(getStrFloat($('#GF0106_8_B').val())+getStrFloat($('#GF0106_9_B').val())+getStrFloat($('#GF0106_10_B').val()),2));
    FGF0106_7_B($('#GF0106_7_B'));
    $('#GF0106_10_C').val(getNumToString(getStrFloat($('#GF0106_10_A').val())+getStrFloat($('#GF0106_10_B').val()),2));
    FGF0106_10_C($('#GF0106_10_C'));
}

/*GF0106_10_C*/
function FGF0106_10_C(obj){
    showStr(obj);
    $('#GF0106_10_C').val(getNumToString(getStrFloat($('#GF0106_10_A').val())+getStrFloat($('#GF0106_10_B').val()),2));
}

/*GF0106_11_A*/
function FGF0106_11_A(obj){
    showStr(obj);
    $('#GF0106_11_A').val(getNumToString((getStrFloat($('#GF0106_12_A').val())+getStrFloat($('#GF0106_13_A').val())),2));
    $('#GF0106_11_C').val(getNumToString(getStrFloat($('#GF0106_11_A').val())+getStrFloat($('#GF0106_11_B').val()),2));
    FGF0106_11_C($('#GF0106_11_C'));
    $('#GF0106_19_A').val(getNumToString((getStrFloat($('#GF0106_7_A').val())+getStrFloat($('#GF0106_11_A').val())+getStrFloat($('#GF0106_14_A').val())),2));
    FGF0106_19_A($('#GF0106_19_A'));
}

/*GF0106_11_B*/
function FGF0106_11_B(obj){
    showStr(obj);
    $('#GF0106_11_B').val(getNumToString((getStrFloat($('#GF0106_12_B').val())+getStrFloat($('#GF0106_13_B').val())),2));
    $('#GF0106_11_C').val(getNumToString(getStrFloat($('#GF0106_11_A').val())+getStrFloat($('#GF0106_11_B').val()),2));
    FGF0106_11_C($('#GF0106_11_C'));
    $('#GF0106_19_B').val(getNumToString((getStrFloat($('#GF0106_7_B').val())+getStrFloat($('#GF0106_11_B').val())+getStrFloat($('#GF0106_14_B').val())),2));
    FGF0106_19_B($('#GF0106_19_B'));
}

/*GF0106_11_C*/
function FGF0106_11_C(obj){
    showStr(obj);
    $('#GF0106_11_C').val(getNumToString(getStrFloat($('#GF0106_11_A').val())+getStrFloat($('#GF0106_11_B').val()),2));
}

/*GF0106_12_A*/
function FGF0106_12_A(obj){
    showStr(obj);
    $('#GF0106_11_A').val(getNumToString((getStrFloat($('#GF0106_12_A').val())+getStrFloat($('#GF0106_13_A').val())),2));
    FGF0106_11_A($('#GF0106_11_A'));
    $('#GF0106_12_C').val(getNumToString(getStrFloat($('#GF0106_12_A').val())+getStrFloat($('#GF0106_12_B').val()),2));
    FGF0106_12_C($('#GF0106_12_C'));
}

/*GF0106_12_B*/
function FGF0106_12_B(obj){
    showStr(obj);
    $('#GF0106_11_B').val(getNumToString((getStrFloat($('#GF0106_12_B').val())+getStrFloat($('#GF0106_13_B').val())),2));
    FGF0106_11_B($('#GF0106_11_B'));
    $('#GF0106_12_C').val(getNumToString(getStrFloat($('#GF0106_12_A').val())+getStrFloat($('#GF0106_12_B').val()),2));
    FGF0106_12_C($('#GF0106_12_C'));
}

/*GF0106_12_C*/
function FGF0106_12_C(obj){
    showStr(obj);
    $('#GF0106_12_C').val(getNumToString(getStrFloat($('#GF0106_12_A').val())+getStrFloat($('#GF0106_12_B').val()),2));
}

/*GF0106_13_A*/
function FGF0106_13_A(obj){
    showStr(obj);
    $('#GF0106_11_A').val(getNumToString((getStrFloat($('#GF0106_12_A').val())+getStrFloat($('#GF0106_13_A').val())),2));
    FGF0106_11_A($('#GF0106_11_A'));
    $('#GF0106_13_C').val(getNumToString(getStrFloat($('#GF0106_13_A').val())+getStrFloat($('#GF0106_13_B').val()),2));
    FGF0106_13_C($('#GF0106_13_C'));
}

/*GF0106_13_B*/
function FGF0106_13_B(obj){
    showStr(obj);
    $('#GF0106_11_B').val(getNumToString((getStrFloat($('#GF0106_12_B').val())+getStrFloat($('#GF0106_13_B').val())),2));
    FGF0106_11_B($('#GF0106_11_B'));
    $('#GF0106_13_C').val(getNumToString(getStrFloat($('#GF0106_13_A').val())+getStrFloat($('#GF0106_13_B').val()),2));
    FGF0106_13_C($('#GF0106_13_C'));
}

/*GF0106_13_C*/
function FGF0106_13_C(obj){
    showStr(obj);
    $('#GF0106_13_C').val(getNumToString(getStrFloat($('#GF0106_13_A').val())+getStrFloat($('#GF0106_13_B').val()),2));
}

/*GF0106_14_A*/
function FGF0106_14_A(obj){
    showStr(obj);
    $('#GF0106_14_A').val(getNumToString(getStrFloat($('#GF0106_15_A').val())+getStrFloat($('#GF0106_18_A').val()),2));
    $('#GF0106_14_C').val(getNumToString(getStrFloat($('#GF0106_14_A').val())+getStrFloat($('#GF0106_14_B').val()),2));
    FGF0106_14_C($('#GF0106_14_C'));
    $('#GF0106_19_A').val(getNumToString((getStrFloat($('#GF0106_7_A').val())+getStrFloat($('#GF0106_11_A').val())+getStrFloat($('#GF0106_14_A').val())),2));
    FGF0106_19_A($('#GF0106_19_A'));
}

/*GF0106_14_B*/
function FGF0106_14_B(obj){
    showStr(obj);
    $('#GF0106_14_B').val(getNumToString(getStrFloat($('#GF0106_15_B').val())+getStrFloat($('#GF0106_18_B').val()),2));
    $('#GF0106_14_C').val(getNumToString(getStrFloat($('#GF0106_14_A').val())+getStrFloat($('#GF0106_14_B').val()),2));
    FGF0106_14_C($('#GF0106_14_C'));
    $('#GF0106_19_B').val(getNumToString((getStrFloat($('#GF0106_7_B').val())+getStrFloat($('#GF0106_11_B').val())+getStrFloat($('#GF0106_14_B').val())),2));
    FGF0106_19_B($('#GF0106_19_B'));
}

/*GF0106_14_C*/
function FGF0106_14_C(obj){
    showStr(obj);
    $('#GF0106_14_C').val(getNumToString(getStrFloat($('#GF0106_14_A').val())+getStrFloat($('#GF0106_14_B').val()),2));
}

/*GF0106_15_A*/
function FGF0106_15_A(obj){
    showStr(obj);
    $('#GF0106_14_A').val(getNumToString(getStrFloat($('#GF0106_15_A').val())+getStrFloat($('#GF0106_18_A').val()),2));
    FGF0106_14_A($('#GF0106_14_A'));
    $('#GF0106_15_A').val(getNumToString(getStrFloat($('#GF0106_16_A').val())+getStrFloat($('#GF0106_17_A').val()),2));
    $('#GF0106_15_C').val(getNumToString(getStrFloat($('#GF0106_15_A').val())+getStrFloat($('#GF0106_15_B').val()),2));
    FGF0106_15_C($('#GF0106_15_C'));
}

/*GF0106_15_B*/
function FGF0106_15_B(obj){
    showStr(obj);
    $('#GF0106_14_B').val(getNumToString(getStrFloat($('#GF0106_15_B').val())+getStrFloat($('#GF0106_18_B').val()),2));
    FGF0106_14_B($('#GF0106_14_B'));
    $('#GF0106_15_B').val(getNumToString(getStrFloat($('#GF0106_16_B').val())+getStrFloat($('#GF0106_17_B').val()),2));
    $('#GF0106_15_C').val(getNumToString(getStrFloat($('#GF0106_15_A').val())+getStrFloat($('#GF0106_15_B').val()),2));
    FGF0106_15_C($('#GF0106_15_C'));
}

/*GF0106_15_C*/
function FGF0106_15_C(obj){
    showStr(obj);
    $('#GF0106_15_C').val(getNumToString(getStrFloat($('#GF0106_15_A').val())+getStrFloat($('#GF0106_15_B').val()),2));
}

/*GF0106_16_A*/
function FGF0106_16_A(obj){
    showStr(obj);
    $('#GF0106_15_A').val(getNumToString(getStrFloat($('#GF0106_16_A').val())+getStrFloat($('#GF0106_17_A').val()),2));
    FGF0106_15_A($('#GF0106_15_A'));
    $('#GF0106_16_C').val(getNumToString(getStrFloat($('#GF0106_16_A').val())+getStrFloat($('#GF0106_16_B').val()),2));
    FGF0106_16_C($('#GF0106_16_C'));
}

/*GF0106_16_B*/
function FGF0106_16_B(obj){
    showStr(obj);
    $('#GF0106_15_B').val(getNumToString(getStrFloat($('#GF0106_16_B').val())+getStrFloat($('#GF0106_17_B').val()),2));
    FGF0106_15_B($('#GF0106_15_B'));
    $('#GF0106_16_C').val(getNumToString(getStrFloat($('#GF0106_16_A').val())+getStrFloat($('#GF0106_16_B').val()),2));
    FGF0106_16_C($('#GF0106_16_C'));
}

/*GF0106_16_C*/
function FGF0106_16_C(obj){
    showStr(obj);
    $('#GF0106_16_C').val(getNumToString(getStrFloat($('#GF0106_16_A').val())+getStrFloat($('#GF0106_16_B').val()),2));
}

/*GF0106_17_A*/
function FGF0106_17_A(obj){
    showStr(obj);
    $('#GF0106_15_A').val(getNumToString(getStrFloat($('#GF0106_16_A').val())+getStrFloat($('#GF0106_17_A').val()),2));
    FGF0106_15_A($('#GF0106_15_A'));
    $('#GF0106_17_C').val(getNumToString(getStrFloat($('#GF0106_17_A').val())+getStrFloat($('#GF0106_17_B').val()),2));
    FGF0106_17_C($('#GF0106_17_C'));
}

/*GF0106_17_B*/
function FGF0106_17_B(obj){
    showStr(obj);
    $('#GF0106_15_B').val(getNumToString(getStrFloat($('#GF0106_16_B').val())+getStrFloat($('#GF0106_17_B').val()),2));
    FGF0106_15_B($('#GF0106_15_B'));
    $('#GF0106_17_C').val(getNumToString(getStrFloat($('#GF0106_17_A').val())+getStrFloat($('#GF0106_17_B').val()),2));
    FGF0106_17_C($('#GF0106_17_C'));
}

/*GF0106_17_C*/
function FGF0106_17_C(obj){
    showStr(obj);
    $('#GF0106_17_C').val(getNumToString(getStrFloat($('#GF0106_17_A').val())+getStrFloat($('#GF0106_17_B').val()),2));
}

/*GF0106_18_A*/
function FGF0106_18_A(obj){
    showStr(obj);
    $('#GF0106_14_A').val(getNumToString(getStrFloat($('#GF0106_15_A').val())+getStrFloat($('#GF0106_18_A').val()),2));
    FGF0106_14_A($('#GF0106_14_A'));
    $('#GF0106_18_C').val(getNumToString(getStrFloat($('#GF0106_18_A').val())+getStrFloat($('#GF0106_18_B').val()),2));
    FGF0106_18_C($('#GF0106_18_C'));
}

/*GF0106_18_B*/
function FGF0106_18_B(obj){
    showStr(obj);
    $('#GF0106_14_B').val(getNumToString(getStrFloat($('#GF0106_15_B').val())+getStrFloat($('#GF0106_18_B').val()),2));
    FGF0106_14_B($('#GF0106_14_B'));
    $('#GF0106_18_C').val(getNumToString(getStrFloat($('#GF0106_18_A').val())+getStrFloat($('#GF0106_18_B').val()),2));
    FGF0106_18_C($('#GF0106_18_C'));
}

/*GF0106_18_C*/
function FGF0106_18_C(obj){
    showStr(obj);
    $('#GF0106_18_C').val(getNumToString(getStrFloat($('#GF0106_18_A').val())+getStrFloat($('#GF0106_18_B').val()),2));
}

/*GF0106_19_A*/
function FGF0106_19_A(obj){
    showStr(obj);
    $('#GF0106_19_A').val(getNumToString((getStrFloat($('#GF0106_7_A').val())+getStrFloat($('#GF0106_11_A').val())+getStrFloat($('#GF0106_14_A').val())),2));
    $('#GF0106_19_C').val(getNumToString(getStrFloat($('#GF0106_19_A').val())+getStrFloat($('#GF0106_19_B').val()),2));
    FGF0106_19_C($('#GF0106_19_C'));
}

/*GF0106_19_B*/
function FGF0106_19_B(obj){
    showStr(obj);
    $('#GF0106_19_B').val(getNumToString((getStrFloat($('#GF0106_7_B').val())+getStrFloat($('#GF0106_11_B').val())+getStrFloat($('#GF0106_14_B').val())),2));
    $('#GF0106_19_C').val(getNumToString(getStrFloat($('#GF0106_19_A').val())+getStrFloat($('#GF0106_19_B').val()),2));
    FGF0106_19_C($('#GF0106_19_C'));
}

/*GF0106_19_C*/
function FGF0106_19_C(obj){
    showStr(obj);
    $('#GF0106_19_C').val(getNumToString(getStrFloat($('#GF0106_19_A').val())+getStrFloat($('#GF0106_19_B').val()),2));
}


/*G0106_7_A*/
function FG0106_7_A(obj){
    showStr(obj);
    $('#G0106_7_A').val(getNumToString((getStrFloat($('#G0106_8_A').val())+getStrFloat($('#G0106_9_A').val())+getStrFloat($('#G0106_10_A').val())),2));
    $('#G0106_17_A').val(getNumToString((getStrFloat($('#G0106_7_A').val())+getStrFloat($('#G0106_11_A').val())+getStrFloat($('#G0106_14_A').val())),2));
    FG0106_17_A($('#G0106_17_A'));
}

/*G0106_7_B*/
function FG0106_7_B(obj){
    showStr(obj);
    $('#G0106_7_B').val(getNumToString((getStrFloat($('#G0106_8_B').val())+getStrFloat($('#G0106_9_B').val())+getStrFloat($('#G0106_10_B').val())),2));
    $('#G0106_17_B').val(getNumToString((getStrFloat($('#G0106_7_B').val())+getStrFloat($('#G0106_11_B').val())+getStrFloat($('#G0106_14_B').val())),2));
    FG0106_17_B($('#G0106_17_B'));
}

/*G0106_7_C*/
function FG0106_7_C(obj){
    showStr(obj);
    $('#G0106_7_C').val(getNumToString((getStrFloat($('#G0106_8_C').val())+getStrFloat($('#G0106_9_C').val())+getStrFloat($('#G0106_10_C').val())),2));
    $('#G0106_17_C').val(getNumToString((getStrFloat($('#G0106_7_C').val())+getStrFloat($('#G0106_11_C').val())+getStrFloat($('#G0106_14_C').val())),2));
    FG0106_17_C($('#G0106_17_C'));
}

/*G0106_8_A*/
function FG0106_8_A(obj){
    showStr(obj);
    $('#G0106_7_A').val(getNumToString((getStrFloat($('#G0106_8_A').val())+getStrFloat($('#G0106_9_A').val())+getStrFloat($('#G0106_10_A').val())),2));
    FG0106_7_A($('#G0106_7_A'));
    $('#G0106_8_C').val(getNumToString(getStrFloat($('#G0106_8_A').val())+getStrFloat($('#G0106_8_B').val()),2));
    FG0106_8_C($('#G0106_8_C'));
}

/*G0106_8_B*/
function FG0106_8_B(obj){
    showStr(obj);
    $('#G0106_7_B').val(getNumToString((getStrFloat($('#G0106_8_B').val())+getStrFloat($('#G0106_9_B').val())+getStrFloat($('#G0106_10_B').val())),2));
    FG0106_7_B($('#G0106_7_B'));
    $('#G0106_8_C').val(getNumToString(getStrFloat($('#G0106_8_A').val())+getStrFloat($('#G0106_8_B').val()),2));
    FG0106_8_C($('#G0106_8_C'));
}

/*G0106_8_C*/
function FG0106_8_C(obj){
    showStr(obj);
    $('#G0106_7_C').val(getNumToString((getStrFloat($('#G0106_8_C').val())+getStrFloat($('#G0106_9_C').val())+getStrFloat($('#G0106_10_C').val())),2));
    FG0106_7_C($('#G0106_7_C'));
    $('#G0106_8_C').val(getNumToString(getStrFloat($('#G0106_8_A').val())+getStrFloat($('#G0106_8_B').val()),2));
}

/*G0106_9_A*/
function FG0106_9_A(obj){
    showStr(obj);
    $('#G0106_7_A').val(getNumToString((getStrFloat($('#G0106_8_A').val())+getStrFloat($('#G0106_9_A').val())+getStrFloat($('#G0106_10_A').val())),2));
    FG0106_7_A($('#G0106_7_A'));
    $('#G0106_9_C').val(getNumToString(getStrFloat($('#G0106_9_A').val())+getStrFloat($('#G0106_9_B').val()),2));
    FG0106_9_C($('#G0106_9_C'));
}

/*G0106_9_B*/
function FG0106_9_B(obj){
    showStr(obj);
    $('#G0106_7_B').val(getNumToString((getStrFloat($('#G0106_8_B').val())+getStrFloat($('#G0106_9_B').val())+getStrFloat($('#G0106_10_B').val())),2));
    FG0106_7_B($('#G0106_7_B'));
    $('#G0106_9_C').val(getNumToString(getStrFloat($('#G0106_9_A').val())+getStrFloat($('#G0106_9_B').val()),2));
    FG0106_9_C($('#G0106_9_C'));
}

/*G0106_9_C*/
function FG0106_9_C(obj){
    showStr(obj);
    $('#G0106_7_C').val(getNumToString((getStrFloat($('#G0106_8_C').val())+getStrFloat($('#G0106_9_C').val())+getStrFloat($('#G0106_10_C').val())),2));
    FG0106_7_C($('#G0106_7_C'));
    $('#G0106_9_C').val(getNumToString(getStrFloat($('#G0106_9_A').val())+getStrFloat($('#G0106_9_B').val()),2));
}

/*G0106_10_A*/
function FG0106_10_A(obj){
    showStr(obj);
    $('#G0106_7_A').val(getNumToString((getStrFloat($('#G0106_8_A').val())+getStrFloat($('#G0106_9_A').val())+getStrFloat($('#G0106_10_A').val())),2));
    FG0106_7_A($('#G0106_7_A'));
    $('#G0106_10_C').val(getNumToString(getStrFloat($('#G0106_10_A').val())+getStrFloat($('#G0106_10_B').val()),2));
    FG0106_10_C($('#G0106_10_C'));
}

/*G0106_10_B*/
function FG0106_10_B(obj){
    showStr(obj);
    $('#G0106_7_B').val(getNumToString((getStrFloat($('#G0106_8_B').val())+getStrFloat($('#G0106_9_B').val())+getStrFloat($('#G0106_10_B').val())),2));
    FG0106_7_B($('#G0106_7_B'));
    $('#G0106_10_C').val(getNumToString(getStrFloat($('#G0106_10_A').val())+getStrFloat($('#G0106_10_B').val()),2));
    FG0106_10_C($('#G0106_10_C'));
}

/*G0106_10_C*/
function FG0106_10_C(obj){
    showStr(obj);
    $('#G0106_7_C').val(getNumToString((getStrFloat($('#G0106_8_C').val())+getStrFloat($('#G0106_9_C').val())+getStrFloat($('#G0106_10_C').val())),2));
    FG0106_7_C($('#G0106_7_C'));
    $('#G0106_10_C').val(getNumToString(getStrFloat($('#G0106_10_A').val())+getStrFloat($('#G0106_10_B').val()),2));
}

/*G0106_11_A*/
function FG0106_11_A(obj){
    showStr(obj);
    $('#G0106_11_A').val(getNumToString((getStrFloat($('#G0106_12_A').val())+getStrFloat($('#G0106_13_A').val())),2));
    $('#G0106_17_A').val(getNumToString((getStrFloat($('#G0106_7_A').val())+getStrFloat($('#G0106_11_A').val())+getStrFloat($('#G0106_14_A').val())),2));
    FG0106_17_A($('#G0106_17_A'));
}

/*G0106_11_B*/
function FG0106_11_B(obj){
    showStr(obj);
    $('#G0106_11_B').val(getNumToString((getStrFloat($('#G0106_12_B').val())+getStrFloat($('#G0106_13_B').val())),2));
    $('#G0106_17_B').val(getNumToString((getStrFloat($('#G0106_7_B').val())+getStrFloat($('#G0106_11_B').val())+getStrFloat($('#G0106_14_B').val())),2));
    FG0106_17_B($('#G0106_17_B'));
}

/*G0106_11_C*/
function FG0106_11_C(obj){
    showStr(obj);
    $('#G0106_11_C').val(getNumToString((getStrFloat($('#G0106_12_C').val())+getStrFloat($('#G0106_13_C').val())),2));
    $('#G0106_17_C').val(getNumToString((getStrFloat($('#G0106_7_C').val())+getStrFloat($('#G0106_11_C').val())+getStrFloat($('#G0106_14_C').val())),2));
    FG0106_17_C($('#G0106_17_C'));
}

/*G0106_12_A*/
function FG0106_12_A(obj){
    showStr(obj);
    $('#G0106_11_A').val(getNumToString((getStrFloat($('#G0106_12_A').val())+getStrFloat($('#G0106_13_A').val())),2));
    FG0106_11_A($('#G0106_11_A'));
    $('#G0106_12_C').val(getNumToString(getStrFloat($('#G0106_12_A').val())+getStrFloat($('#G0106_12_B').val()),2));
    FG0106_12_C($('#G0106_12_C'));
}

/*G0106_12_B*/
function FG0106_12_B(obj){
    showStr(obj);
    $('#G0106_11_B').val(getNumToString((getStrFloat($('#G0106_12_B').val())+getStrFloat($('#G0106_13_B').val())),2));
    FG0106_11_B($('#G0106_11_B'));
    $('#G0106_12_C').val(getNumToString(getStrFloat($('#G0106_12_A').val())+getStrFloat($('#G0106_12_B').val()),2));
    FG0106_12_C($('#G0106_12_C'));
}

/*G0106_12_C*/
function FG0106_12_C(obj){
    showStr(obj);
    $('#G0106_11_C').val(getNumToString((getStrFloat($('#G0106_12_C').val())+getStrFloat($('#G0106_13_C').val())),2));
    FG0106_11_C($('#G0106_11_C'));
    $('#G0106_12_C').val(getNumToString(getStrFloat($('#G0106_12_A').val())+getStrFloat($('#G0106_12_B').val()),2));
}

/*G0106_13_A*/
function FG0106_13_A(obj){
    showStr(obj);
    $('#G0106_11_A').val(getNumToString((getStrFloat($('#G0106_12_A').val())+getStrFloat($('#G0106_13_A').val())),2));
    FG0106_11_A($('#G0106_11_A'));
    $('#G0106_13_C').val(getNumToString(getStrFloat($('#G0106_13_A').val())+getStrFloat($('#G0106_13_B').val()),2));
    FG0106_13_C($('#G0106_13_C'));
}

/*G0106_13_B*/
function FG0106_13_B(obj){
    showStr(obj);
    $('#G0106_11_B').val(getNumToString((getStrFloat($('#G0106_12_B').val())+getStrFloat($('#G0106_13_B').val())),2));
    FG0106_11_B($('#G0106_11_B'));
    $('#G0106_13_C').val(getNumToString(getStrFloat($('#G0106_13_A').val())+getStrFloat($('#G0106_13_B').val()),2));
    FG0106_13_C($('#G0106_13_C'));
}

/*G0106_13_C*/
function FG0106_13_C(obj){
    showStr(obj);
    $('#G0106_11_C').val(getNumToString((getStrFloat($('#G0106_12_C').val())+getStrFloat($('#G0106_13_C').val())),2));
    FG0106_11_C($('#G0106_11_C'));
    $('#G0106_13_C').val(getNumToString(getStrFloat($('#G0106_13_A').val())+getStrFloat($('#G0106_13_B').val()),2));
}

/*G0106_14_A*/
function FG0106_14_A(obj){
    showStr(obj);
    $('#G0106_14_A').val(getNumToString((getStrFloat($('#G0106_15_A').val())+getStrFloat($('#G0106_16_A').val())),2));
    $('#G0106_17_A').val(getNumToString((getStrFloat($('#G0106_7_A').val())+getStrFloat($('#G0106_11_A').val())+getStrFloat($('#G0106_14_A').val())),2));
    FG0106_17_A($('#G0106_17_A'));
}

/*G0106_14_B*/
function FG0106_14_B(obj){
    showStr(obj);
    $('#G0106_14_B').val(getNumToString((getStrFloat($('#G0106_15_B').val())+getStrFloat($('#G0106_16_B').val())),2));
    $('#G0106_17_B').val(getNumToString((getStrFloat($('#G0106_7_B').val())+getStrFloat($('#G0106_11_B').val())+getStrFloat($('#G0106_14_B').val())),2));
    FG0106_17_B($('#G0106_17_B'));
}

/*G0106_14_C*/
function FG0106_14_C(obj){
    showStr(obj);
    $('#G0106_14_C').val(getNumToString((getStrFloat($('#G0106_15_C').val())+getStrFloat($('#G0106_16_C').val())),2));
    $('#G0106_17_C').val(getNumToString((getStrFloat($('#G0106_7_C').val())+getStrFloat($('#G0106_11_C').val())+getStrFloat($('#G0106_14_C').val())),2));
    FG0106_17_C($('#G0106_17_C'));
}

/*G0106_15_A*/
function FG0106_15_A(obj){
    showStr(obj);
    $('#G0106_14_A').val(getNumToString((getStrFloat($('#G0106_15_A').val())+getStrFloat($('#G0106_16_A').val())),2));
    FG0106_14_A($('#G0106_14_A'));
    $('#G0106_15_C').val(getNumToString(getStrFloat($('#G0106_15_A').val())+getStrFloat($('#G0106_15_B').val()),2));
    FG0106_15_C($('#G0106_15_C'));
}

/*G0106_15_B*/
function FG0106_15_B(obj){
    showStr(obj);
    $('#G0106_14_B').val(getNumToString((getStrFloat($('#G0106_15_B').val())+getStrFloat($('#G0106_16_B').val())),2));
    FG0106_14_B($('#G0106_14_B'));
    $('#G0106_15_C').val(getNumToString(getStrFloat($('#G0106_15_A').val())+getStrFloat($('#G0106_15_B').val()),2));
    FG0106_15_C($('#G0106_15_C'));
}

/*G0106_15_C*/
function FG0106_15_C(obj){
    showStr(obj);
    $('#G0106_14_C').val(getNumToString((getStrFloat($('#G0106_15_C').val())+getStrFloat($('#G0106_16_C').val())),2));
    FG0106_14_C($('#G0106_14_C'));
    $('#G0106_15_C').val(getNumToString(getStrFloat($('#G0106_15_A').val())+getStrFloat($('#G0106_15_B').val()),2));
}

/*G0106_16_A*/
function FG0106_16_A(obj){
    showStr(obj);
    $('#G0106_14_A').val(getNumToString((getStrFloat($('#G0106_15_A').val())+getStrFloat($('#G0106_16_A').val())),2));
    FG0106_14_A($('#G0106_14_A'));
    $('#G0106_16_C').val(getNumToString(getStrFloat($('#G0106_16_A').val())+getStrFloat($('#G0106_16_B').val()),2));
    FG0106_16_C($('#G0106_16_C'));
}

/*G0106_16_B*/
function FG0106_16_B(obj){
    showStr(obj);
    $('#G0106_14_B').val(getNumToString((getStrFloat($('#G0106_15_B').val())+getStrFloat($('#G0106_16_B').val())),2));
    FG0106_14_B($('#G0106_14_B'));
    $('#G0106_16_C').val(getNumToString(getStrFloat($('#G0106_16_A').val())+getStrFloat($('#G0106_16_B').val()),2));
    FG0106_16_C($('#G0106_16_C'));
}

/*G0106_16_C*/
function FG0106_16_C(obj){
    showStr(obj);
    $('#G0106_14_C').val(getNumToString((getStrFloat($('#G0106_15_C').val())+getStrFloat($('#G0106_16_C').val())),2));
    FG0106_14_C($('#G0106_14_C'));
    $('#G0106_16_C').val(getNumToString(getStrFloat($('#G0106_16_A').val())+getStrFloat($('#G0106_16_B').val()),2));
}

/*G0106_17_A*/
function FG0106_17_A(obj){
    showStr(obj);
    $('#G0106_17_A').val(getNumToString((getStrFloat($('#G0106_7_A').val())+getStrFloat($('#G0106_11_A').val())+getStrFloat($('#G0106_14_A').val())),2));
}

/*G0106_17_B*/
function FG0106_17_B(obj){
    showStr(obj);
    $('#G0106_17_B').val(getNumToString((getStrFloat($('#G0106_7_B').val())+getStrFloat($('#G0106_11_B').val())+getStrFloat($('#G0106_14_B').val())),2));
}

/*G0106_17_C*/
function FG0106_17_C(obj){
    showStr(obj);
    $('#G0106_17_C').val(getNumToString((getStrFloat($('#G0106_7_C').val())+getStrFloat($('#G0106_11_C').val())+getStrFloat($('#G0106_14_C').val())),2));
}


/*G0103_6_A*/
function FG0103_6_A(obj){
    showStr(obj);
    $('#G0103_6_A').val(getNumToString(getStrFloat($('#G0103_7_A').val())+getStrFloat($('#G0103_8_A').val())+getStrFloat($('#G0103_9_A').val())+getStrFloat($('#G0103_11_A').val())+getStrFloat($('#G0103_12_A').val())+getStrFloat($('#G0103_13_A').val())+getStrFloat($('#G0103_14_A').val()),2));
    $('#G0103_6_C').val(getNumToString(getStrFloat($('#G0103_6_A').val())+getStrFloat($('#G0103_6_B').val()),2));
    FG0103_6_C($('#G0103_6_C'));
}

/*G0103_6_B*/
function FG0103_6_B(obj){
    showStr(obj);
    $('#G0103_6_B').val(getNumToString(getStrFloat($('#G0103_7_B').val())+getStrFloat($('#G0103_8_B').val())+getStrFloat($('#G0103_9_B').val())+getStrFloat($('#G0103_11_B').val())+getStrFloat($('#G0103_12_B').val())+getStrFloat($('#G0103_13_B').val())+getStrFloat($('#G0103_14_B').val()),2));
    $('#G0103_6_C').val(getNumToString(getStrFloat($('#G0103_6_A').val())+getStrFloat($('#G0103_6_B').val()),2));
    FG0103_6_C($('#G0103_6_C'));
}

/*G0103_6_C*/
function FG0103_6_C(obj){
    showStr(obj);
    $('#G0103_6_C').val(getNumToString(getStrFloat($('#G0103_6_A').val())+getStrFloat($('#G0103_6_B').val()),2));
}

/*G0103_7_A*/
function FG0103_7_A(obj){
    showStr(obj);
    $('#G0103_6_A').val(getNumToString(getStrFloat($('#G0103_7_A').val())+getStrFloat($('#G0103_8_A').val())+getStrFloat($('#G0103_9_A').val())+getStrFloat($('#G0103_11_A').val())+getStrFloat($('#G0103_12_A').val())+getStrFloat($('#G0103_13_A').val())+getStrFloat($('#G0103_14_A').val()),2));
    FG0103_6_A($('#G0103_6_A'));
    $('#G0103_7_C').val(getNumToString(getStrFloat($('#G0103_7_A').val())+getStrFloat($('#G0103_7_B').val()),2));
    FG0103_7_C($('#G0103_7_C'));
}

/*G0103_7_B*/
function FG0103_7_B(obj){
    showStr(obj);
    $('#G0103_6_B').val(getNumToString(getStrFloat($('#G0103_7_B').val())+getStrFloat($('#G0103_8_B').val())+getStrFloat($('#G0103_9_B').val())+getStrFloat($('#G0103_11_B').val())+getStrFloat($('#G0103_12_B').val())+getStrFloat($('#G0103_13_B').val())+getStrFloat($('#G0103_14_B').val()),2));
    FG0103_6_B($('#G0103_6_B'));
    $('#G0103_7_C').val(getNumToString(getStrFloat($('#G0103_7_A').val())+getStrFloat($('#G0103_7_B').val()),2));
    FG0103_7_C($('#G0103_7_C'));
}

/*G0103_7_C*/
function FG0103_7_C(obj){
    showStr(obj);
    $('#G0103_7_C').val(getNumToString(getStrFloat($('#G0103_7_A').val())+getStrFloat($('#G0103_7_B').val()),2));
}

/*G0103_8_A*/
function FG0103_8_A(obj){
    showStr(obj);
    $('#G0103_6_A').val(getNumToString(getStrFloat($('#G0103_7_A').val())+getStrFloat($('#G0103_8_A').val())+getStrFloat($('#G0103_9_A').val())+getStrFloat($('#G0103_11_A').val())+getStrFloat($('#G0103_12_A').val())+getStrFloat($('#G0103_13_A').val())+getStrFloat($('#G0103_14_A').val()),2));
    FG0103_6_A($('#G0103_6_A'));
    $('#G0103_8_C').val(getNumToString(getStrFloat($('#G0103_8_A').val())+getStrFloat($('#G0103_8_B').val()),2));
    FG0103_8_C($('#G0103_8_C'));
}

/*G0103_8_B*/
function FG0103_8_B(obj){
    showStr(obj);
    $('#G0103_6_B').val(getNumToString(getStrFloat($('#G0103_7_B').val())+getStrFloat($('#G0103_8_B').val())+getStrFloat($('#G0103_9_B').val())+getStrFloat($('#G0103_11_B').val())+getStrFloat($('#G0103_12_B').val())+getStrFloat($('#G0103_13_B').val())+getStrFloat($('#G0103_14_B').val()),2));
    FG0103_6_B($('#G0103_6_B'));
    $('#G0103_8_C').val(getNumToString(getStrFloat($('#G0103_8_A').val())+getStrFloat($('#G0103_8_B').val()),2));
    FG0103_8_C($('#G0103_8_C'));
}

/*G0103_8_C*/
function FG0103_8_C(obj){
    showStr(obj);
    $('#G0103_8_C').val(getNumToString(getStrFloat($('#G0103_8_A').val())+getStrFloat($('#G0103_8_B').val()),2));
}

/*G0103_9_A*/
function FG0103_9_A(obj){
    showStr(obj);
    $('#G0103_6_A').val(getNumToString(getStrFloat($('#G0103_7_A').val())+getStrFloat($('#G0103_8_A').val())+getStrFloat($('#G0103_9_A').val())+getStrFloat($('#G0103_11_A').val())+getStrFloat($('#G0103_12_A').val())+getStrFloat($('#G0103_13_A').val())+getStrFloat($('#G0103_14_A').val()),2));
    FG0103_6_A($('#G0103_6_A'));
    $('#G0103_9_C').val(getNumToString(getStrFloat($('#G0103_9_A').val())+getStrFloat($('#G0103_9_B').val()),2));
    FG0103_9_C($('#G0103_9_C'));
}

/*G0103_9_B*/
function FG0103_9_B(obj){
    showStr(obj);
    $('#G0103_6_B').val(getNumToString(getStrFloat($('#G0103_7_B').val())+getStrFloat($('#G0103_8_B').val())+getStrFloat($('#G0103_9_B').val())+getStrFloat($('#G0103_11_B').val())+getStrFloat($('#G0103_12_B').val())+getStrFloat($('#G0103_13_B').val())+getStrFloat($('#G0103_14_B').val()),2));
    FG0103_6_B($('#G0103_6_B'));
    $('#G0103_9_C').val(getNumToString(getStrFloat($('#G0103_9_A').val())+getStrFloat($('#G0103_9_B').val()),2));
    FG0103_9_C($('#G0103_9_C'));
}

/*G0103_9_C*/
function FG0103_9_C(obj){
    showStr(obj);
    $('#G0103_9_C').val(getNumToString(getStrFloat($('#G0103_9_A').val())+getStrFloat($('#G0103_9_B').val()),2));
}

/*G0103_10_A*/
function FG0103_10_A(obj){
    showStr(obj);
    $('#G0103_10_C').val(getNumToString(getStrFloat($('#G0103_10_A').val())+getStrFloat($('#G0103_10_B').val()),2));
    FG0103_10_C($('#G0103_10_C'));
}

/*G0103_10_B*/
function FG0103_10_B(obj){
    showStr(obj);
    $('#G0103_10_C').val(getNumToString(getStrFloat($('#G0103_10_A').val())+getStrFloat($('#G0103_10_B').val()),2));
    FG0103_10_C($('#G0103_10_C'));
}

/*G0103_10_C*/
function FG0103_10_C(obj){
    showStr(obj);
    $('#G0103_10_C').val(getNumToString(getStrFloat($('#G0103_10_A').val())+getStrFloat($('#G0103_10_B').val()),2));
}

/*G0103_11_A*/
function FG0103_11_A(obj){
    showStr(obj);
    $('#G0103_6_A').val(getNumToString(getStrFloat($('#G0103_7_A').val())+getStrFloat($('#G0103_8_A').val())+getStrFloat($('#G0103_9_A').val())+getStrFloat($('#G0103_11_A').val())+getStrFloat($('#G0103_12_A').val())+getStrFloat($('#G0103_13_A').val())+getStrFloat($('#G0103_14_A').val()),2));
    FG0103_6_A($('#G0103_6_A'));
    $('#G0103_11_C').val(getNumToString(getStrFloat($('#G0103_11_A').val())+getStrFloat($('#G0103_11_B').val()),2));
    FG0103_11_C($('#G0103_11_C'));
}

/*G0103_11_B*/
function FG0103_11_B(obj){
    showStr(obj);
    $('#G0103_6_B').val(getNumToString(getStrFloat($('#G0103_7_B').val())+getStrFloat($('#G0103_8_B').val())+getStrFloat($('#G0103_9_B').val())+getStrFloat($('#G0103_11_B').val())+getStrFloat($('#G0103_12_B').val())+getStrFloat($('#G0103_13_B').val())+getStrFloat($('#G0103_14_B').val()),2));
    FG0103_6_B($('#G0103_6_B'));
    $('#G0103_11_C').val(getNumToString(getStrFloat($('#G0103_11_A').val())+getStrFloat($('#G0103_11_B').val()),2));
    FG0103_11_C($('#G0103_11_C'));
}

/*G0103_11_C*/
function FG0103_11_C(obj){
    showStr(obj);
    $('#G0103_11_C').val(getNumToString(getStrFloat($('#G0103_11_A').val())+getStrFloat($('#G0103_11_B').val()),2));
}

/*G0103_12_A*/
function FG0103_12_A(obj){
    showStr(obj);
    $('#G0103_6_A').val(getNumToString(getStrFloat($('#G0103_7_A').val())+getStrFloat($('#G0103_8_A').val())+getStrFloat($('#G0103_9_A').val())+getStrFloat($('#G0103_11_A').val())+getStrFloat($('#G0103_12_A').val())+getStrFloat($('#G0103_13_A').val())+getStrFloat($('#G0103_14_A').val()),2));
    FG0103_6_A($('#G0103_6_A'));
    $('#G0103_12_C').val(getNumToString(getStrFloat($('#G0103_12_A').val())+getStrFloat($('#G0103_12_B').val()),2));
    FG0103_12_C($('#G0103_12_C'));
}

/*G0103_12_B*/
function FG0103_12_B(obj){
    showStr(obj);
    $('#G0103_6_B').val(getNumToString(getStrFloat($('#G0103_7_B').val())+getStrFloat($('#G0103_8_B').val())+getStrFloat($('#G0103_9_B').val())+getStrFloat($('#G0103_11_B').val())+getStrFloat($('#G0103_12_B').val())+getStrFloat($('#G0103_13_B').val())+getStrFloat($('#G0103_14_B').val()),2));
    FG0103_6_B($('#G0103_6_B'));
    $('#G0103_12_C').val(getNumToString(getStrFloat($('#G0103_12_A').val())+getStrFloat($('#G0103_12_B').val()),2));
    FG0103_12_C($('#G0103_12_C'));
}

/*G0103_12_C*/
function FG0103_12_C(obj){
    showStr(obj);
    $('#G0103_12_C').val(getNumToString(getStrFloat($('#G0103_12_A').val())+getStrFloat($('#G0103_12_B').val()),2));
}

/*G0103_13_A*/
function FG0103_13_A(obj){
    showStr(obj);
    $('#G0103_6_A').val(getNumToString(getStrFloat($('#G0103_7_A').val())+getStrFloat($('#G0103_8_A').val())+getStrFloat($('#G0103_9_A').val())+getStrFloat($('#G0103_11_A').val())+getStrFloat($('#G0103_12_A').val())+getStrFloat($('#G0103_13_A').val())+getStrFloat($('#G0103_14_A').val()),2));
    FG0103_6_A($('#G0103_6_A'));
    $('#G0103_13_C').val(getNumToString(getStrFloat($('#G0103_13_A').val())+getStrFloat($('#G0103_13_B').val()),2));
    FG0103_13_C($('#G0103_13_C'));
}

/*G0103_13_B*/
function FG0103_13_B(obj){
    showStr(obj);
    $('#G0103_6_B').val(getNumToString(getStrFloat($('#G0103_7_B').val())+getStrFloat($('#G0103_8_B').val())+getStrFloat($('#G0103_9_B').val())+getStrFloat($('#G0103_11_B').val())+getStrFloat($('#G0103_12_B').val())+getStrFloat($('#G0103_13_B').val())+getStrFloat($('#G0103_14_B').val()),2));
    FG0103_6_B($('#G0103_6_B'));
    $('#G0103_13_C').val(getNumToString(getStrFloat($('#G0103_13_A').val())+getStrFloat($('#G0103_13_B').val()),2));
    FG0103_13_C($('#G0103_13_C'));
}

/*G0103_13_C*/
function FG0103_13_C(obj){
    showStr(obj);
    $('#G0103_13_C').val(getNumToString(getStrFloat($('#G0103_13_A').val())+getStrFloat($('#G0103_13_B').val()),2));
}

/*G0103_14_A*/
function FG0103_14_A(obj){
    showStr(obj);
    $('#G0103_6_A').val(getNumToString(getStrFloat($('#G0103_7_A').val())+getStrFloat($('#G0103_8_A').val())+getStrFloat($('#G0103_9_A').val())+getStrFloat($('#G0103_11_A').val())+getStrFloat($('#G0103_12_A').val())+getStrFloat($('#G0103_13_A').val())+getStrFloat($('#G0103_14_A').val()),2));
    FG0103_6_A($('#G0103_6_A'));
    $('#G0103_14_C').val(getNumToString(getStrFloat($('#G0103_14_A').val())+getStrFloat($('#G0103_14_B').val()),2));
    FG0103_14_C($('#G0103_14_C'));
}

/*G0103_14_B*/
function FG0103_14_B(obj){
    showStr(obj);
    $('#G0103_6_B').val(getNumToString(getStrFloat($('#G0103_7_B').val())+getStrFloat($('#G0103_8_B').val())+getStrFloat($('#G0103_9_B').val())+getStrFloat($('#G0103_11_B').val())+getStrFloat($('#G0103_12_B').val())+getStrFloat($('#G0103_13_B').val())+getStrFloat($('#G0103_14_B').val()),2));
    FG0103_6_B($('#G0103_6_B'));
    $('#G0103_14_C').val(getNumToString(getStrFloat($('#G0103_14_A').val())+getStrFloat($('#G0103_14_B').val()),2));
    FG0103_14_C($('#G0103_14_C'));
}

/*G0103_14_C*/
function FG0103_14_C(obj){
    showStr(obj);
    $('#G0103_14_C').val(getNumToString(getStrFloat($('#G0103_14_A').val())+getStrFloat($('#G0103_14_B').val()),2));
}

/*G0103_15_A*/
function FG0103_15_A(obj){
    showStr(obj);
    $('#G0103_15_A').val(getNumToString(getStrFloat($('#G0103_16_A').val())+getStrFloat($('#G0103_24_A').val())+getStrFloat($('#G0103_33_A').val())+getStrFloat($('#G0103_34_A').val())+getStrFloat($('#G0103_35_A').val()),2));
    $('#G0103_15_C').val(getNumToString(getStrFloat($('#G0103_15_A').val())+getStrFloat($('#G0103_15_B').val()),2));
    FG0103_15_C($('#G0103_15_C'));
}

/*G0103_15_B*/
function FG0103_15_B(obj){
    showStr(obj);
    $('#G0103_15_B').val(getNumToString(getStrFloat($('#G0103_16_B').val())+getStrFloat($('#G0103_24_B').val())+getStrFloat($('#G0103_33_B').val())+getStrFloat($('#G0103_34_B').val())+getStrFloat($('#G0103_35_B').val()),2));
    $('#G0103_15_C').val(getNumToString(getStrFloat($('#G0103_15_A').val())+getStrFloat($('#G0103_15_B').val()),2));
    FG0103_15_C($('#G0103_15_C'));
}

/*G0103_15_C*/
function FG0103_15_C(obj){
    showStr(obj);
    $('#G0103_15_C').val(getNumToString(getStrFloat($('#G0103_15_A').val())+getStrFloat($('#G0103_15_B').val()),2));
}

/*G0103_16_A*/
function FG0103_16_A(obj){
    showStr(obj);
    $('#G0103_15_A').val(getNumToString(getStrFloat($('#G0103_16_A').val())+getStrFloat($('#G0103_24_A').val())+getStrFloat($('#G0103_33_A').val())+getStrFloat($('#G0103_34_A').val())+getStrFloat($('#G0103_35_A').val()),2));
    FG0103_15_A($('#G0103_15_A'));
    $('#G0103_16_A').val(getNumToString(getStrFloat($('#G0103_17_A').val())+getStrFloat($('#G0103_18_A').val())+getStrFloat($('#G0103_19_A').val())+getStrFloat($('#G0103_20_A').val())+getStrFloat($('#G0103_21_A').val())+getStrFloat($('#G0103_22_A').val())+getStrFloat($('#G0103_23_A').val()),2));
    $('#G0103_16_C').val(getNumToString(getStrFloat($('#G0103_16_A').val())+getStrFloat($('#G0103_16_B').val()),2));
    FG0103_16_C($('#G0103_16_C'));
}

/*G0103_16_B*/
function FG0103_16_B(obj){
    showStr(obj);
    $('#G0103_15_B').val(getNumToString(getStrFloat($('#G0103_16_B').val())+getStrFloat($('#G0103_24_B').val())+getStrFloat($('#G0103_33_B').val())+getStrFloat($('#G0103_34_B').val())+getStrFloat($('#G0103_35_B').val()),2));
    FG0103_15_B($('#G0103_15_B'));
    $('#G0103_16_B').val(getNumToString(getStrFloat($('#G0103_17_B').val())+getStrFloat($('#G0103_18_B').val())+getStrFloat($('#G0103_19_B').val())+getStrFloat($('#G0103_20_B').val())+getStrFloat($('#G0103_21_B').val())+getStrFloat($('#G0103_22_B').val())+getStrFloat($('#G0103_23_B').val()),2));
    $('#G0103_16_C').val(getNumToString(getStrFloat($('#G0103_16_A').val())+getStrFloat($('#G0103_16_B').val()),2));
    FG0103_16_C($('#G0103_16_C'));
}

/*G0103_16_C*/
function FG0103_16_C(obj){
    showStr(obj);
    $('#G0103_16_C').val(getNumToString(getStrFloat($('#G0103_16_A').val())+getStrFloat($('#G0103_16_B').val()),2));
}

/*G0103_17_A*/
function FG0103_17_A(obj){
    showStr(obj);
    $('#G0103_16_A').val(getNumToString(getStrFloat($('#G0103_17_A').val())+getStrFloat($('#G0103_18_A').val())+getStrFloat($('#G0103_19_A').val())+getStrFloat($('#G0103_20_A').val())+getStrFloat($('#G0103_21_A').val())+getStrFloat($('#G0103_22_A').val())+getStrFloat($('#G0103_23_A').val()),2));
    FG0103_16_A($('#G0103_16_A'));
    $('#G0103_17_C').val(getNumToString(getStrFloat($('#G0103_17_A').val())+getStrFloat($('#G0103_17_B').val()),2));
    FG0103_17_C($('#G0103_17_C'));
}

/*G0103_17_B*/
function FG0103_17_B(obj){
    showStr(obj);
    $('#G0103_16_B').val(getNumToString(getStrFloat($('#G0103_17_B').val())+getStrFloat($('#G0103_18_B').val())+getStrFloat($('#G0103_19_B').val())+getStrFloat($('#G0103_20_B').val())+getStrFloat($('#G0103_21_B').val())+getStrFloat($('#G0103_22_B').val())+getStrFloat($('#G0103_23_B').val()),2));
    FG0103_16_B($('#G0103_16_B'));
    $('#G0103_17_C').val(getNumToString(getStrFloat($('#G0103_17_A').val())+getStrFloat($('#G0103_17_B').val()),2));
    FG0103_17_C($('#G0103_17_C'));
}

/*G0103_17_C*/
function FG0103_17_C(obj){
    showStr(obj);
    $('#G0103_17_C').val(getNumToString(getStrFloat($('#G0103_17_A').val())+getStrFloat($('#G0103_17_B').val()),2));
}

/*G0103_18_A*/
function FG0103_18_A(obj){
    showStr(obj);
    $('#G0103_16_A').val(getNumToString(getStrFloat($('#G0103_17_A').val())+getStrFloat($('#G0103_18_A').val())+getStrFloat($('#G0103_19_A').val())+getStrFloat($('#G0103_20_A').val())+getStrFloat($('#G0103_21_A').val())+getStrFloat($('#G0103_22_A').val())+getStrFloat($('#G0103_23_A').val()),2));
    FG0103_16_A($('#G0103_16_A'));
    $('#G0103_18_C').val(getNumToString(getStrFloat($('#G0103_18_A').val())+getStrFloat($('#G0103_18_B').val()),2));
    FG0103_18_C($('#G0103_18_C'));
}

/*G0103_18_B*/
function FG0103_18_B(obj){
    showStr(obj);
    $('#G0103_16_B').val(getNumToString(getStrFloat($('#G0103_17_B').val())+getStrFloat($('#G0103_18_B').val())+getStrFloat($('#G0103_19_B').val())+getStrFloat($('#G0103_20_B').val())+getStrFloat($('#G0103_21_B').val())+getStrFloat($('#G0103_22_B').val())+getStrFloat($('#G0103_23_B').val()),2));
    FG0103_16_B($('#G0103_16_B'));
    $('#G0103_18_C').val(getNumToString(getStrFloat($('#G0103_18_A').val())+getStrFloat($('#G0103_18_B').val()),2));
    FG0103_18_C($('#G0103_18_C'));
}

/*G0103_18_C*/
function FG0103_18_C(obj){
    showStr(obj);
    $('#G0103_18_C').val(getNumToString(getStrFloat($('#G0103_18_A').val())+getStrFloat($('#G0103_18_B').val()),2));
}

/*G0103_19_A*/
function FG0103_19_A(obj){
    showStr(obj);
    $('#G0103_16_A').val(getNumToString(getStrFloat($('#G0103_17_A').val())+getStrFloat($('#G0103_18_A').val())+getStrFloat($('#G0103_19_A').val())+getStrFloat($('#G0103_20_A').val())+getStrFloat($('#G0103_21_A').val())+getStrFloat($('#G0103_22_A').val())+getStrFloat($('#G0103_23_A').val()),2));
    FG0103_16_A($('#G0103_16_A'));
    $('#G0103_19_C').val(getNumToString(getStrFloat($('#G0103_19_A').val())+getStrFloat($('#G0103_19_B').val()),2));
    FG0103_19_C($('#G0103_19_C'));
}

/*G0103_19_B*/
function FG0103_19_B(obj){
    showStr(obj);
    $('#G0103_16_B').val(getNumToString(getStrFloat($('#G0103_17_B').val())+getStrFloat($('#G0103_18_B').val())+getStrFloat($('#G0103_19_B').val())+getStrFloat($('#G0103_20_B').val())+getStrFloat($('#G0103_21_B').val())+getStrFloat($('#G0103_22_B').val())+getStrFloat($('#G0103_23_B').val()),2));
    FG0103_16_B($('#G0103_16_B'));
    $('#G0103_19_C').val(getNumToString(getStrFloat($('#G0103_19_A').val())+getStrFloat($('#G0103_19_B').val()),2));
    FG0103_19_C($('#G0103_19_C'));
}

/*G0103_19_C*/
function FG0103_19_C(obj){
    showStr(obj);
    $('#G0103_19_C').val(getNumToString(getStrFloat($('#G0103_19_A').val())+getStrFloat($('#G0103_19_B').val()),2));
}

/*G0103_20_A*/
function FG0103_20_A(obj){
    showStr(obj);
    $('#G0103_16_A').val(getNumToString(getStrFloat($('#G0103_17_A').val())+getStrFloat($('#G0103_18_A').val())+getStrFloat($('#G0103_19_A').val())+getStrFloat($('#G0103_20_A').val())+getStrFloat($('#G0103_21_A').val())+getStrFloat($('#G0103_22_A').val())+getStrFloat($('#G0103_23_A').val()),2));
    FG0103_16_A($('#G0103_16_A'));
    $('#G0103_20_C').val(getNumToString(getStrFloat($('#G0103_20_A').val())+getStrFloat($('#G0103_20_B').val()),2));
    FG0103_20_C($('#G0103_20_C'));
}

/*G0103_20_B*/
function FG0103_20_B(obj){
    showStr(obj);
    $('#G0103_16_B').val(getNumToString(getStrFloat($('#G0103_17_B').val())+getStrFloat($('#G0103_18_B').val())+getStrFloat($('#G0103_19_B').val())+getStrFloat($('#G0103_20_B').val())+getStrFloat($('#G0103_21_B').val())+getStrFloat($('#G0103_22_B').val())+getStrFloat($('#G0103_23_B').val()),2));
    FG0103_16_B($('#G0103_16_B'));
    $('#G0103_20_C').val(getNumToString(getStrFloat($('#G0103_20_A').val())+getStrFloat($('#G0103_20_B').val()),2));
    FG0103_20_C($('#G0103_20_C'));
}

/*G0103_20_C*/
function FG0103_20_C(obj){
    showStr(obj);
    $('#G0103_20_C').val(getNumToString(getStrFloat($('#G0103_20_A').val())+getStrFloat($('#G0103_20_B').val()),2));
}

/*G0103_21_A*/
function FG0103_21_A(obj){
    showStr(obj);
    $('#G0103_16_A').val(getNumToString(getStrFloat($('#G0103_17_A').val())+getStrFloat($('#G0103_18_A').val())+getStrFloat($('#G0103_19_A').val())+getStrFloat($('#G0103_20_A').val())+getStrFloat($('#G0103_21_A').val())+getStrFloat($('#G0103_22_A').val())+getStrFloat($('#G0103_23_A').val()),2));
    FG0103_16_A($('#G0103_16_A'));
    $('#G0103_21_C').val(getNumToString(getStrFloat($('#G0103_21_A').val())+getStrFloat($('#G0103_21_B').val()),2));
    FG0103_21_C($('#G0103_21_C'));
}

/*G0103_21_B*/
function FG0103_21_B(obj){
    showStr(obj);
    $('#G0103_16_B').val(getNumToString(getStrFloat($('#G0103_17_B').val())+getStrFloat($('#G0103_18_B').val())+getStrFloat($('#G0103_19_B').val())+getStrFloat($('#G0103_20_B').val())+getStrFloat($('#G0103_21_B').val())+getStrFloat($('#G0103_22_B').val())+getStrFloat($('#G0103_23_B').val()),2));
    FG0103_16_B($('#G0103_16_B'));
    $('#G0103_21_C').val(getNumToString(getStrFloat($('#G0103_21_A').val())+getStrFloat($('#G0103_21_B').val()),2));
    FG0103_21_C($('#G0103_21_C'));
}

/*G0103_21_C*/
function FG0103_21_C(obj){
    showStr(obj);
    $('#G0103_21_C').val(getNumToString(getStrFloat($('#G0103_21_A').val())+getStrFloat($('#G0103_21_B').val()),2));
}

/*G0103_22_A*/
function FG0103_22_A(obj){
    showStr(obj);
    $('#G0103_16_A').val(getNumToString(getStrFloat($('#G0103_17_A').val())+getStrFloat($('#G0103_18_A').val())+getStrFloat($('#G0103_19_A').val())+getStrFloat($('#G0103_20_A').val())+getStrFloat($('#G0103_21_A').val())+getStrFloat($('#G0103_22_A').val())+getStrFloat($('#G0103_23_A').val()),2));
    FG0103_16_A($('#G0103_16_A'));
    $('#G0103_22_C').val(getNumToString(getStrFloat($('#G0103_22_A').val())+getStrFloat($('#G0103_22_B').val()),2));
    FG0103_22_C($('#G0103_22_C'));
}

/*G0103_22_B*/
function FG0103_22_B(obj){
    showStr(obj);
    $('#G0103_16_B').val(getNumToString(getStrFloat($('#G0103_17_B').val())+getStrFloat($('#G0103_18_B').val())+getStrFloat($('#G0103_19_B').val())+getStrFloat($('#G0103_20_B').val())+getStrFloat($('#G0103_21_B').val())+getStrFloat($('#G0103_22_B').val())+getStrFloat($('#G0103_23_B').val()),2));
    FG0103_16_B($('#G0103_16_B'));
    $('#G0103_22_C').val(getNumToString(getStrFloat($('#G0103_22_A').val())+getStrFloat($('#G0103_22_B').val()),2));
    FG0103_22_C($('#G0103_22_C'));
}

/*G0103_22_C*/
function FG0103_22_C(obj){
    showStr(obj);
    $('#G0103_22_C').val(getNumToString(getStrFloat($('#G0103_22_A').val())+getStrFloat($('#G0103_22_B').val()),2));
}

/*G0103_23_A*/
function FG0103_23_A(obj){
    showStr(obj);
    $('#G0103_16_A').val(getNumToString(getStrFloat($('#G0103_17_A').val())+getStrFloat($('#G0103_18_A').val())+getStrFloat($('#G0103_19_A').val())+getStrFloat($('#G0103_20_A').val())+getStrFloat($('#G0103_21_A').val())+getStrFloat($('#G0103_22_A').val())+getStrFloat($('#G0103_23_A').val()),2));
    FG0103_16_A($('#G0103_16_A'));
    $('#G0103_23_C').val(getNumToString(getStrFloat($('#G0103_23_A').val())+getStrFloat($('#G0103_23_B').val()),2));
    FG0103_23_C($('#G0103_23_C'));
}

/*G0103_23_B*/
function FG0103_23_B(obj){
    showStr(obj);
    $('#G0103_16_B').val(getNumToString(getStrFloat($('#G0103_17_B').val())+getStrFloat($('#G0103_18_B').val())+getStrFloat($('#G0103_19_B').val())+getStrFloat($('#G0103_20_B').val())+getStrFloat($('#G0103_21_B').val())+getStrFloat($('#G0103_22_B').val())+getStrFloat($('#G0103_23_B').val()),2));
    FG0103_16_B($('#G0103_16_B'));
    $('#G0103_23_C').val(getNumToString(getStrFloat($('#G0103_23_A').val())+getStrFloat($('#G0103_23_B').val()),2));
    FG0103_23_C($('#G0103_23_C'));
}

/*G0103_23_C*/
function FG0103_23_C(obj){
    showStr(obj);
    $('#G0103_23_C').val(getNumToString(getStrFloat($('#G0103_23_A').val())+getStrFloat($('#G0103_23_B').val()),2));
}

/*G0103_24_A*/
function FG0103_24_A(obj){
    showStr(obj);
    $('#G0103_15_A').val(getNumToString(getStrFloat($('#G0103_16_A').val())+getStrFloat($('#G0103_24_A').val())+getStrFloat($('#G0103_33_A').val())+getStrFloat($('#G0103_34_A').val())+getStrFloat($('#G0103_35_A').val()),2));
    FG0103_15_A($('#G0103_15_A'));
    $('#G0103_24_A').val(getNumToString(getStrFloat($('#G0103_25_A').val())+getStrFloat($('#G0103_26_A').val())+getStrFloat($('#G0103_27_A').val())+getStrFloat($('#G0103_28_A').val())+getStrFloat($('#G0103_29_A').val())+getStrFloat($('#G0103_30_A').val())+getStrFloat($('#G0103_31_A').val())+getStrFloat($('#G0103_32_A').val()),2));
    $('#G0103_24_C').val(getNumToString(getStrFloat($('#G0103_24_A').val())+getStrFloat($('#G0103_24_B').val()),2));
    FG0103_24_C($('#G0103_24_C'));
}

/*G0103_24_B*/
function FG0103_24_B(obj){
    showStr(obj);
    $('#G0103_15_B').val(getNumToString(getStrFloat($('#G0103_16_B').val())+getStrFloat($('#G0103_24_B').val())+getStrFloat($('#G0103_33_B').val())+getStrFloat($('#G0103_34_B').val())+getStrFloat($('#G0103_35_B').val()),2));
    FG0103_15_B($('#G0103_15_B'));
    $('#G0103_24_B').val(getNumToString(getStrFloat($('#G0103_25_B').val())+getStrFloat($('#G0103_26_B').val())+getStrFloat($('#G0103_27_B').val())+getStrFloat($('#G0103_28_B').val())+getStrFloat($('#G0103_29_B').val())+getStrFloat($('#G0103_30_B').val())+getStrFloat($('#G0103_31_B').val())+getStrFloat($('#G0103_32_B').val()),2));
    $('#G0103_24_C').val(getNumToString(getStrFloat($('#G0103_24_A').val())+getStrFloat($('#G0103_24_B').val()),2));
    FG0103_24_C($('#G0103_24_C'));
}

/*G0103_24_C*/
function FG0103_24_C(obj){
    showStr(obj);
    $('#G0103_24_C').val(getNumToString(getStrFloat($('#G0103_24_A').val())+getStrFloat($('#G0103_24_B').val()),2));
}

/*G0103_25_A*/
function FG0103_25_A(obj){
    showStr(obj);
    $('#G0103_24_A').val(getNumToString(getStrFloat($('#G0103_25_A').val())+getStrFloat($('#G0103_26_A').val())+getStrFloat($('#G0103_27_A').val())+getStrFloat($('#G0103_28_A').val())+getStrFloat($('#G0103_29_A').val())+getStrFloat($('#G0103_30_A').val())+getStrFloat($('#G0103_31_A').val())+getStrFloat($('#G0103_32_A').val()),2));
    FG0103_24_A($('#G0103_24_A'));
    $('#G0103_25_C').val(getNumToString(getStrFloat($('#G0103_25_A').val())+getStrFloat($('#G0103_25_B').val()),2));
    FG0103_25_C($('#G0103_25_C'));
}

/*G0103_25_B*/
function FG0103_25_B(obj){
    showStr(obj);
    $('#G0103_24_B').val(getNumToString(getStrFloat($('#G0103_25_B').val())+getStrFloat($('#G0103_26_B').val())+getStrFloat($('#G0103_27_B').val())+getStrFloat($('#G0103_28_B').val())+getStrFloat($('#G0103_29_B').val())+getStrFloat($('#G0103_30_B').val())+getStrFloat($('#G0103_31_B').val())+getStrFloat($('#G0103_32_B').val()),2));
    FG0103_24_B($('#G0103_24_B'));
    $('#G0103_25_C').val(getNumToString(getStrFloat($('#G0103_25_A').val())+getStrFloat($('#G0103_25_B').val()),2));
    FG0103_25_C($('#G0103_25_C'));
}

/*G0103_25_C*/
function FG0103_25_C(obj){
    showStr(obj);
    $('#G0103_25_C').val(getNumToString(getStrFloat($('#G0103_25_A').val())+getStrFloat($('#G0103_25_B').val()),2));
}

/*G0103_26_A*/
function FG0103_26_A(obj){
    showStr(obj);
    $('#G0103_24_A').val(getNumToString(getStrFloat($('#G0103_25_A').val())+getStrFloat($('#G0103_26_A').val())+getStrFloat($('#G0103_27_A').val())+getStrFloat($('#G0103_28_A').val())+getStrFloat($('#G0103_29_A').val())+getStrFloat($('#G0103_30_A').val())+getStrFloat($('#G0103_31_A').val())+getStrFloat($('#G0103_32_A').val()),2));
    FG0103_24_A($('#G0103_24_A'));
    $('#G0103_26_C').val(getNumToString(getStrFloat($('#G0103_26_A').val())+getStrFloat($('#G0103_26_B').val()),2));
    FG0103_26_C($('#G0103_26_C'));
}

/*G0103_26_B*/
function FG0103_26_B(obj){
    showStr(obj);
    $('#G0103_24_B').val(getNumToString(getStrFloat($('#G0103_25_B').val())+getStrFloat($('#G0103_26_B').val())+getStrFloat($('#G0103_27_B').val())+getStrFloat($('#G0103_28_B').val())+getStrFloat($('#G0103_29_B').val())+getStrFloat($('#G0103_30_B').val())+getStrFloat($('#G0103_31_B').val())+getStrFloat($('#G0103_32_B').val()),2));
    FG0103_24_B($('#G0103_24_B'));
    $('#G0103_26_C').val(getNumToString(getStrFloat($('#G0103_26_A').val())+getStrFloat($('#G0103_26_B').val()),2));
    FG0103_26_C($('#G0103_26_C'));
}

/*G0103_26_C*/
function FG0103_26_C(obj){
    showStr(obj);
    $('#G0103_26_C').val(getNumToString(getStrFloat($('#G0103_26_A').val())+getStrFloat($('#G0103_26_B').val()),2));
}

/*G0103_27_A*/
function FG0103_27_A(obj){
    showStr(obj);
    $('#G0103_24_A').val(getNumToString(getStrFloat($('#G0103_25_A').val())+getStrFloat($('#G0103_26_A').val())+getStrFloat($('#G0103_27_A').val())+getStrFloat($('#G0103_28_A').val())+getStrFloat($('#G0103_29_A').val())+getStrFloat($('#G0103_30_A').val())+getStrFloat($('#G0103_31_A').val())+getStrFloat($('#G0103_32_A').val()),2));
    FG0103_24_A($('#G0103_24_A'));
    $('#G0103_27_C').val(getNumToString(getStrFloat($('#G0103_27_A').val())+getStrFloat($('#G0103_27_B').val()),2));
    FG0103_27_C($('#G0103_27_C'));
}

/*G0103_27_B*/
function FG0103_27_B(obj){
    showStr(obj);
    $('#G0103_24_B').val(getNumToString(getStrFloat($('#G0103_25_B').val())+getStrFloat($('#G0103_26_B').val())+getStrFloat($('#G0103_27_B').val())+getStrFloat($('#G0103_28_B').val())+getStrFloat($('#G0103_29_B').val())+getStrFloat($('#G0103_30_B').val())+getStrFloat($('#G0103_31_B').val())+getStrFloat($('#G0103_32_B').val()),2));
    FG0103_24_B($('#G0103_24_B'));
    $('#G0103_27_C').val(getNumToString(getStrFloat($('#G0103_27_A').val())+getStrFloat($('#G0103_27_B').val()),2));
    FG0103_27_C($('#G0103_27_C'));
}

/*G0103_27_C*/
function FG0103_27_C(obj){
    showStr(obj);
    $('#G0103_27_C').val(getNumToString(getStrFloat($('#G0103_27_A').val())+getStrFloat($('#G0103_27_B').val()),2));
}

/*G0103_28_A*/
function FG0103_28_A(obj){
    showStr(obj);
    $('#G0103_24_A').val(getNumToString(getStrFloat($('#G0103_25_A').val())+getStrFloat($('#G0103_26_A').val())+getStrFloat($('#G0103_27_A').val())+getStrFloat($('#G0103_28_A').val())+getStrFloat($('#G0103_29_A').val())+getStrFloat($('#G0103_30_A').val())+getStrFloat($('#G0103_31_A').val())+getStrFloat($('#G0103_32_A').val()),2));
    FG0103_24_A($('#G0103_24_A'));
    $('#G0103_28_C').val(getNumToString(getStrFloat($('#G0103_28_A').val())+getStrFloat($('#G0103_28_B').val()),2));
    FG0103_28_C($('#G0103_28_C'));
}

/*G0103_28_B*/
function FG0103_28_B(obj){
    showStr(obj);
    $('#G0103_24_B').val(getNumToString(getStrFloat($('#G0103_25_B').val())+getStrFloat($('#G0103_26_B').val())+getStrFloat($('#G0103_27_B').val())+getStrFloat($('#G0103_28_B').val())+getStrFloat($('#G0103_29_B').val())+getStrFloat($('#G0103_30_B').val())+getStrFloat($('#G0103_31_B').val())+getStrFloat($('#G0103_32_B').val()),2));
    FG0103_24_B($('#G0103_24_B'));
    $('#G0103_28_C').val(getNumToString(getStrFloat($('#G0103_28_A').val())+getStrFloat($('#G0103_28_B').val()),2));
    FG0103_28_C($('#G0103_28_C'));
}

/*G0103_28_C*/
function FG0103_28_C(obj){
    showStr(obj);
    $('#G0103_28_C').val(getNumToString(getStrFloat($('#G0103_28_A').val())+getStrFloat($('#G0103_28_B').val()),2));
}

/*G0103_29_A*/
function FG0103_29_A(obj){
    showStr(obj);
    $('#G0103_24_A').val(getNumToString(getStrFloat($('#G0103_25_A').val())+getStrFloat($('#G0103_26_A').val())+getStrFloat($('#G0103_27_A').val())+getStrFloat($('#G0103_28_A').val())+getStrFloat($('#G0103_29_A').val())+getStrFloat($('#G0103_30_A').val())+getStrFloat($('#G0103_31_A').val())+getStrFloat($('#G0103_32_A').val()),2));
    FG0103_24_A($('#G0103_24_A'));
    $('#G0103_29_C').val(getNumToString(getStrFloat($('#G0103_29_A').val())+getStrFloat($('#G0103_29_B').val()),2));
    FG0103_29_C($('#G0103_29_C'));
}

/*G0103_29_B*/
function FG0103_29_B(obj){
    showStr(obj);
    $('#G0103_24_B').val(getNumToString(getStrFloat($('#G0103_25_B').val())+getStrFloat($('#G0103_26_B').val())+getStrFloat($('#G0103_27_B').val())+getStrFloat($('#G0103_28_B').val())+getStrFloat($('#G0103_29_B').val())+getStrFloat($('#G0103_30_B').val())+getStrFloat($('#G0103_31_B').val())+getStrFloat($('#G0103_32_B').val()),2));
    FG0103_24_B($('#G0103_24_B'));
    $('#G0103_29_C').val(getNumToString(getStrFloat($('#G0103_29_A').val())+getStrFloat($('#G0103_29_B').val()),2));
    FG0103_29_C($('#G0103_29_C'));
}

/*G0103_29_C*/
function FG0103_29_C(obj){
    showStr(obj);
    $('#G0103_29_C').val(getNumToString(getStrFloat($('#G0103_29_A').val())+getStrFloat($('#G0103_29_B').val()),2));
}

/*G0103_30_A*/
function FG0103_30_A(obj){
    showStr(obj);
    $('#G0103_24_A').val(getNumToString(getStrFloat($('#G0103_25_A').val())+getStrFloat($('#G0103_26_A').val())+getStrFloat($('#G0103_27_A').val())+getStrFloat($('#G0103_28_A').val())+getStrFloat($('#G0103_29_A').val())+getStrFloat($('#G0103_30_A').val())+getStrFloat($('#G0103_31_A').val())+getStrFloat($('#G0103_32_A').val()),2));
    FG0103_24_A($('#G0103_24_A'));
    $('#G0103_30_C').val(getNumToString(getStrFloat($('#G0103_30_A').val())+getStrFloat($('#G0103_30_B').val()),2));
    FG0103_30_C($('#G0103_30_C'));
}

/*G0103_30_B*/
function FG0103_30_B(obj){
    showStr(obj);
    $('#G0103_24_B').val(getNumToString(getStrFloat($('#G0103_25_B').val())+getStrFloat($('#G0103_26_B').val())+getStrFloat($('#G0103_27_B').val())+getStrFloat($('#G0103_28_B').val())+getStrFloat($('#G0103_29_B').val())+getStrFloat($('#G0103_30_B').val())+getStrFloat($('#G0103_31_B').val())+getStrFloat($('#G0103_32_B').val()),2));
    FG0103_24_B($('#G0103_24_B'));
    $('#G0103_30_C').val(getNumToString(getStrFloat($('#G0103_30_A').val())+getStrFloat($('#G0103_30_B').val()),2));
    FG0103_30_C($('#G0103_30_C'));
}

/*G0103_30_C*/
function FG0103_30_C(obj){
    showStr(obj);
    $('#G0103_30_C').val(getNumToString(getStrFloat($('#G0103_30_A').val())+getStrFloat($('#G0103_30_B').val()),2));
}

/*G0103_31_A*/
function FG0103_31_A(obj){
    showStr(obj);
    $('#G0103_24_A').val(getNumToString(getStrFloat($('#G0103_25_A').val())+getStrFloat($('#G0103_26_A').val())+getStrFloat($('#G0103_27_A').val())+getStrFloat($('#G0103_28_A').val())+getStrFloat($('#G0103_29_A').val())+getStrFloat($('#G0103_30_A').val())+getStrFloat($('#G0103_31_A').val())+getStrFloat($('#G0103_32_A').val()),2));
    FG0103_24_A($('#G0103_24_A'));
    $('#G0103_31_C').val(getNumToString(getStrFloat($('#G0103_31_A').val())+getStrFloat($('#G0103_31_B').val()),2));
    FG0103_31_C($('#G0103_31_C'));
}

/*G0103_31_B*/
function FG0103_31_B(obj){
    showStr(obj);
    $('#G0103_24_B').val(getNumToString(getStrFloat($('#G0103_25_B').val())+getStrFloat($('#G0103_26_B').val())+getStrFloat($('#G0103_27_B').val())+getStrFloat($('#G0103_28_B').val())+getStrFloat($('#G0103_29_B').val())+getStrFloat($('#G0103_30_B').val())+getStrFloat($('#G0103_31_B').val())+getStrFloat($('#G0103_32_B').val()),2));
    FG0103_24_B($('#G0103_24_B'));
    $('#G0103_31_C').val(getNumToString(getStrFloat($('#G0103_31_A').val())+getStrFloat($('#G0103_31_B').val()),2));
    FG0103_31_C($('#G0103_31_C'));
}

/*G0103_31_C*/
function FG0103_31_C(obj){
    showStr(obj);
    $('#G0103_31_C').val(getNumToString(getStrFloat($('#G0103_31_A').val())+getStrFloat($('#G0103_31_B').val()),2));
}

/*G0103_32_A*/
function FG0103_32_A(obj){
    showStr(obj);
    $('#G0103_24_A').val(getNumToString(getStrFloat($('#G0103_25_A').val())+getStrFloat($('#G0103_26_A').val())+getStrFloat($('#G0103_27_A').val())+getStrFloat($('#G0103_28_A').val())+getStrFloat($('#G0103_29_A').val())+getStrFloat($('#G0103_30_A').val())+getStrFloat($('#G0103_31_A').val())+getStrFloat($('#G0103_32_A').val()),2));
    FG0103_24_A($('#G0103_24_A'));
    $('#G0103_32_C').val(getNumToString(getStrFloat($('#G0103_32_A').val())+getStrFloat($('#G0103_32_B').val()),2));
    FG0103_32_C($('#G0103_32_C'));
}

/*G0103_32_B*/
function FG0103_32_B(obj){
    showStr(obj);
    $('#G0103_24_B').val(getNumToString(getStrFloat($('#G0103_25_B').val())+getStrFloat($('#G0103_26_B').val())+getStrFloat($('#G0103_27_B').val())+getStrFloat($('#G0103_28_B').val())+getStrFloat($('#G0103_29_B').val())+getStrFloat($('#G0103_30_B').val())+getStrFloat($('#G0103_31_B').val())+getStrFloat($('#G0103_32_B').val()),2));
    FG0103_24_B($('#G0103_24_B'));
    $('#G0103_32_C').val(getNumToString(getStrFloat($('#G0103_32_A').val())+getStrFloat($('#G0103_32_B').val()),2));
    FG0103_32_C($('#G0103_32_C'));
}

/*G0103_32_C*/
function FG0103_32_C(obj){
    showStr(obj);
    $('#G0103_32_C').val(getNumToString(getStrFloat($('#G0103_32_A').val())+getStrFloat($('#G0103_32_B').val()),2));
}

/*G0103_33_A*/
function FG0103_33_A(obj){
    showStr(obj);
    $('#G0103_15_A').val(getNumToString(getStrFloat($('#G0103_16_A').val())+getStrFloat($('#G0103_24_A').val())+getStrFloat($('#G0103_33_A').val())+getStrFloat($('#G0103_34_A').val())+getStrFloat($('#G0103_35_A').val()),2));
    FG0103_15_A($('#G0103_15_A'));
    $('#G0103_33_C').val(getNumToString(getStrFloat($('#G0103_33_A').val())+getStrFloat($('#G0103_33_B').val()),2));
    FG0103_33_C($('#G0103_33_C'));
}

/*G0103_33_B*/
function FG0103_33_B(obj){
    showStr(obj);
    $('#G0103_15_B').val(getNumToString(getStrFloat($('#G0103_16_B').val())+getStrFloat($('#G0103_24_B').val())+getStrFloat($('#G0103_33_B').val())+getStrFloat($('#G0103_34_B').val())+getStrFloat($('#G0103_35_B').val()),2));
    FG0103_15_B($('#G0103_15_B'));
    $('#G0103_33_C').val(getNumToString(getStrFloat($('#G0103_33_A').val())+getStrFloat($('#G0103_33_B').val()),2));
    FG0103_33_C($('#G0103_33_C'));
}

/*G0103_33_C*/
function FG0103_33_C(obj){
    showStr(obj);
    $('#G0103_33_C').val(getNumToString(getStrFloat($('#G0103_33_A').val())+getStrFloat($('#G0103_33_B').val()),2));
}

/*G0103_34_A*/
function FG0103_34_A(obj){
    showStr(obj);
    $('#G0103_15_A').val(getNumToString(getStrFloat($('#G0103_16_A').val())+getStrFloat($('#G0103_24_A').val())+getStrFloat($('#G0103_33_A').val())+getStrFloat($('#G0103_34_A').val())+getStrFloat($('#G0103_35_A').val()),2));
    FG0103_15_A($('#G0103_15_A'));
    $('#G0103_34_C').val(getNumToString(getStrFloat($('#G0103_34_A').val())+getStrFloat($('#G0103_34_B').val()),2));
    FG0103_34_C($('#G0103_34_C'));
}

/*G0103_34_B*/
function FG0103_34_B(obj){
    showStr(obj);
    $('#G0103_15_B').val(getNumToString(getStrFloat($('#G0103_16_B').val())+getStrFloat($('#G0103_24_B').val())+getStrFloat($('#G0103_33_B').val())+getStrFloat($('#G0103_34_B').val())+getStrFloat($('#G0103_35_B').val()),2));
    FG0103_15_B($('#G0103_15_B'));
    $('#G0103_34_C').val(getNumToString(getStrFloat($('#G0103_34_A').val())+getStrFloat($('#G0103_34_B').val()),2));
    FG0103_34_C($('#G0103_34_C'));
}

/*G0103_34_C*/
function FG0103_34_C(obj){
    showStr(obj);
    $('#G0103_34_C').val(getNumToString(getStrFloat($('#G0103_34_A').val())+getStrFloat($('#G0103_34_B').val()),2));
}

/*G0103_35_A*/
function FG0103_35_A(obj){
    showStr(obj);
    $('#G0103_15_A').val(getNumToString(getStrFloat($('#G0103_16_A').val())+getStrFloat($('#G0103_24_A').val())+getStrFloat($('#G0103_33_A').val())+getStrFloat($('#G0103_34_A').val())+getStrFloat($('#G0103_35_A').val()),2));
    FG0103_15_A($('#G0103_15_A'));
    $('#G0103_35_C').val(getNumToString(getStrFloat($('#G0103_35_A').val())+getStrFloat($('#G0103_35_B').val()),2));
    FG0103_35_C($('#G0103_35_C'));
}

/*G0103_35_B*/
function FG0103_35_B(obj){
    showStr(obj);
    $('#G0103_15_B').val(getNumToString(getStrFloat($('#G0103_16_B').val())+getStrFloat($('#G0103_24_B').val())+getStrFloat($('#G0103_33_B').val())+getStrFloat($('#G0103_34_B').val())+getStrFloat($('#G0103_35_B').val()),2));
    FG0103_15_B($('#G0103_15_B'));
    $('#G0103_35_C').val(getNumToString(getStrFloat($('#G0103_35_A').val())+getStrFloat($('#G0103_35_B').val()),2));
    FG0103_35_C($('#G0103_35_C'));
}

/*G0103_35_C*/
function FG0103_35_C(obj){
    showStr(obj);
    $('#G0103_35_C').val(getNumToString(getStrFloat($('#G0103_35_A').val())+getStrFloat($('#G0103_35_B').val()),2));
}


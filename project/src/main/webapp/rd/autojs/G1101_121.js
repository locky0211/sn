/*G1101_8_A*/
function FG1101_8_A(obj){
    showStr(obj);
    $('#G1101_8_A').val(getNumToString(getStrFloat($('#G1101_8_B').val())+getStrFloat($('#G1101_8_E').val()),2));
}

/*G1101_8_B*/
function FG1101_8_B(obj){
    showStr(obj);
    $('#G1101_8_A').val(getNumToString(getStrFloat($('#G1101_8_B').val())+getStrFloat($('#G1101_8_E').val()),2));
    FG1101_8_A($('#G1101_8_A'));
    $('#G1101_8_B').val(getNumToString(getStrFloat($('#G1101_8_C').val())+getStrFloat($('#G1101_8_D').val()),2));
}

/*G1101_8_C*/
function FG1101_8_C(obj){
    showStr(obj);
    $('#G1101_8_B').val(getNumToString(getStrFloat($('#G1101_8_C').val())+getStrFloat($('#G1101_8_D').val()),2));
    FG1101_8_B($('#G1101_8_B'));
    $('#G1101_8_C').val(getNumToString(getStrFloat($('#G1101_9_C').val())+getStrFloat($('#G1101_36_C').val()),2));
}

/*G1101_8_D*/
function FG1101_8_D(obj){
    showStr(obj);
    $('#G1101_8_B').val(getNumToString(getStrFloat($('#G1101_8_C').val())+getStrFloat($('#G1101_8_D').val()),2));
    FG1101_8_B($('#G1101_8_B'));
    $('#G1101_8_D').val(getNumToString(getStrFloat($('#G1101_9_D').val())+getStrFloat($('#G1101_36_D').val()),2));
}

/*G1101_8_E*/
function FG1101_8_E(obj){
    showStr(obj);
    $('#G1101_8_A').val(getNumToString(getStrFloat($('#G1101_8_B').val())+getStrFloat($('#G1101_8_E').val()),2));
    FG1101_8_A($('#G1101_8_A'));
    $('#G1101_8_E').val(getNumToString(getStrFloat($('#G1101_8_F').val())+getStrFloat($('#G1101_8_G').val())+getStrFloat($('#G1101_8_H').val()),2));
}

/*G1101_8_F*/
function FG1101_8_F(obj){
    showStr(obj);
    $('#G1101_8_E').val(getNumToString(getStrFloat($('#G1101_8_F').val())+getStrFloat($('#G1101_8_G').val())+getStrFloat($('#G1101_8_H').val()),2));
    FG1101_8_E($('#G1101_8_E'));
    $('#G1101_8_F').val(getNumToString(getStrFloat($('#G1101_9_F').val())+getStrFloat($('#G1101_36_F').val()),2));
}

/*G1101_8_G*/
function FG1101_8_G(obj){
    showStr(obj);
    $('#G1101_8_E').val(getNumToString(getStrFloat($('#G1101_8_F').val())+getStrFloat($('#G1101_8_G').val())+getStrFloat($('#G1101_8_H').val()),2));
    FG1101_8_E($('#G1101_8_E'));
    $('#G1101_8_G').val(getNumToString(getStrFloat($('#G1101_9_G').val())+getStrFloat($('#G1101_36_G').val()),2));
}

/*G1101_8_H*/
function FG1101_8_H(obj){
    showStr(obj);
    $('#G1101_8_E').val(getNumToString(getStrFloat($('#G1101_8_F').val())+getStrFloat($('#G1101_8_G').val())+getStrFloat($('#G1101_8_H').val()),2));
    FG1101_8_E($('#G1101_8_E'));
    $('#G1101_8_H').val(getNumToString(getStrFloat($('#G1101_9_H').val())+getStrFloat($('#G1101_36_H').val()),2));
}

/*G1101_9_A*/
function FG1101_9_A(obj){
    showStr(obj);
    $('#G1101_9_A').val(getNumToString(getStrFloat($('#G1101_9_B').val())+getStrFloat($('#G1101_9_E').val()),2));
}

/*G1101_9_B*/
function FG1101_9_B(obj){
    showStr(obj);
    $('#G1101_9_A').val(getNumToString(getStrFloat($('#G1101_9_B').val())+getStrFloat($('#G1101_9_E').val()),2));
    FG1101_9_A($('#G1101_9_A'));
    $('#G1101_9_B').val(getNumToString(getStrFloat($('#G1101_9_C').val())+getStrFloat($('#G1101_9_D').val()),2));
}

/*G1101_9_C*/
function FG1101_9_C(obj){
    showStr(obj);
    $('#G1101_8_C').val(getNumToString(getStrFloat($('#G1101_9_C').val())+getStrFloat($('#G1101_36_C').val()),2));
    FG1101_8_C($('#G1101_8_C'));
    $('#G1101_9_B').val(getNumToString(getStrFloat($('#G1101_9_C').val())+getStrFloat($('#G1101_9_D').val()),2));
    FG1101_9_B($('#G1101_9_B'));
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
}

/*G1101_9_D*/
function FG1101_9_D(obj){
    showStr(obj);
    $('#G1101_8_D').val(getNumToString(getStrFloat($('#G1101_9_D').val())+getStrFloat($('#G1101_36_D').val()),2));
    FG1101_8_D($('#G1101_8_D'));
    $('#G1101_9_B').val(getNumToString(getStrFloat($('#G1101_9_C').val())+getStrFloat($('#G1101_9_D').val()),2));
    FG1101_9_B($('#G1101_9_B'));
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
}

/*G1101_9_E*/
function FG1101_9_E(obj){
    showStr(obj);
    $('#G1101_9_A').val(getNumToString(getStrFloat($('#G1101_9_B').val())+getStrFloat($('#G1101_9_E').val()),2));
    FG1101_9_A($('#G1101_9_A'));
    $('#G1101_9_E').val(getNumToString(getStrFloat($('#G1101_9_F').val())+getStrFloat($('#G1101_9_G').val())+getStrFloat($('#G1101_9_H').val()),2));
}

/*G1101_9_F*/
function FG1101_9_F(obj){
    showStr(obj);
    $('#G1101_8_F').val(getNumToString(getStrFloat($('#G1101_9_F').val())+getStrFloat($('#G1101_36_F').val()),2));
    FG1101_8_F($('#G1101_8_F'));
    $('#G1101_9_E').val(getNumToString(getStrFloat($('#G1101_9_F').val())+getStrFloat($('#G1101_9_G').val())+getStrFloat($('#G1101_9_H').val()),2));
    FG1101_9_E($('#G1101_9_E'));
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
}

/*G1101_9_G*/
function FG1101_9_G(obj){
    showStr(obj);
    $('#G1101_8_G').val(getNumToString(getStrFloat($('#G1101_9_G').val())+getStrFloat($('#G1101_36_G').val()),2));
    FG1101_8_G($('#G1101_8_G'));
    $('#G1101_9_E').val(getNumToString(getStrFloat($('#G1101_9_F').val())+getStrFloat($('#G1101_9_G').val())+getStrFloat($('#G1101_9_H').val()),2));
    FG1101_9_E($('#G1101_9_E'));
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
}

/*G1101_9_H*/
function FG1101_9_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    $('#G1101_8_H').val(getNumToString(getStrFloat($('#G1101_9_H').val())+getStrFloat($('#G1101_36_H').val()),2));
    FG1101_8_H($('#G1101_8_H'));
    $('#G1101_9_E').val(getNumToString(getStrFloat($('#G1101_9_F').val())+getStrFloat($('#G1101_9_G').val())+getStrFloat($('#G1101_9_H').val()),2));
    FG1101_9_E($('#G1101_9_E'));
}

/*G1101_10_A*/
function FG1101_10_A(obj){
    showStr(obj);
    $('#G1101_10_A').val(getNumToString(getStrFloat($('#G1101_10_B').val())+getStrFloat($('#G1101_10_E').val()),2));
}

/*G1101_10_B*/
function FG1101_10_B(obj){
    showStr(obj);
    $('#G1101_10_A').val(getNumToString(getStrFloat($('#G1101_10_B').val())+getStrFloat($('#G1101_10_E').val()),2));
    FG1101_10_A($('#G1101_10_A'));
    $('#G1101_10_B').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_10_D').val()),2));
}

/*G1101_10_C*/
function FG1101_10_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_10_B').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_10_D').val()),2));
    FG1101_10_B($('#G1101_10_B'));
}

/*G1101_10_D*/
function FG1101_10_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_10_B').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_10_D').val()),2));
    FG1101_10_B($('#G1101_10_B'));
}

/*G1101_10_E*/
function FG1101_10_E(obj){
    showStr(obj);
    $('#G1101_10_A').val(getNumToString(getStrFloat($('#G1101_10_B').val())+getStrFloat($('#G1101_10_E').val()),2));
    FG1101_10_A($('#G1101_10_A'));
    $('#G1101_10_E').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_10_H').val()),2));
}

/*G1101_10_F*/
function FG1101_10_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_10_E').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_10_H').val()),2));
    FG1101_10_E($('#G1101_10_E'));
}

/*G1101_10_G*/
function FG1101_10_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_10_E').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_10_H').val()),2));
    FG1101_10_E($('#G1101_10_E'));
}

/*G1101_10_H*/
function FG1101_10_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_10_E').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_10_H').val()),2));
    FG1101_10_E($('#G1101_10_E'));
}

/*G1101_11_A*/
function FG1101_11_A(obj){
    showStr(obj);
    $('#G1101_11_A').val(getNumToString(getStrFloat($('#G1101_11_B').val())+getStrFloat($('#G1101_11_E').val()),2));
}

/*G1101_11_B*/
function FG1101_11_B(obj){
    showStr(obj);
    $('#G1101_11_A').val(getNumToString(getStrFloat($('#G1101_11_B').val())+getStrFloat($('#G1101_11_E').val()),2));
    FG1101_11_A($('#G1101_11_A'));
    $('#G1101_11_B').val(getNumToString(getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_11_D').val()),2));
}

/*G1101_11_C*/
function FG1101_11_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_11_B').val(getNumToString(getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_11_D').val()),2));
    FG1101_11_B($('#G1101_11_B'));
}

/*G1101_11_D*/
function FG1101_11_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_11_B').val(getNumToString(getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_11_D').val()),2));
    FG1101_11_B($('#G1101_11_B'));
}

/*G1101_11_E*/
function FG1101_11_E(obj){
    showStr(obj);
    $('#G1101_11_A').val(getNumToString(getStrFloat($('#G1101_11_B').val())+getStrFloat($('#G1101_11_E').val()),2));
    FG1101_11_A($('#G1101_11_A'));
    $('#G1101_11_E').val(getNumToString(getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_11_H').val()),2));
}

/*G1101_11_F*/
function FG1101_11_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_11_E').val(getNumToString(getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_11_H').val()),2));
    FG1101_11_E($('#G1101_11_E'));
}

/*G1101_11_G*/
function FG1101_11_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_11_E').val(getNumToString(getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_11_H').val()),2));
    FG1101_11_E($('#G1101_11_E'));
}

/*G1101_11_H*/
function FG1101_11_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_11_E').val(getNumToString(getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_11_H').val()),2));
    FG1101_11_E($('#G1101_11_E'));
}

/*G1101_12_A*/
function FG1101_12_A(obj){
    showStr(obj);
    $('#G1101_12_A').val(getNumToString(getStrFloat($('#G1101_12_B').val())+getStrFloat($('#G1101_12_E').val()),2));
}

/*G1101_12_B*/
function FG1101_12_B(obj){
    showStr(obj);
    $('#G1101_12_A').val(getNumToString(getStrFloat($('#G1101_12_B').val())+getStrFloat($('#G1101_12_E').val()),2));
    FG1101_12_A($('#G1101_12_A'));
    $('#G1101_12_B').val(getNumToString(getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_12_D').val()),2));
}

/*G1101_12_C*/
function FG1101_12_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_12_B').val(getNumToString(getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_12_D').val()),2));
    FG1101_12_B($('#G1101_12_B'));
}

/*G1101_12_D*/
function FG1101_12_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_12_B').val(getNumToString(getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_12_D').val()),2));
    FG1101_12_B($('#G1101_12_B'));
}

/*G1101_12_E*/
function FG1101_12_E(obj){
    showStr(obj);
    $('#G1101_12_A').val(getNumToString(getStrFloat($('#G1101_12_B').val())+getStrFloat($('#G1101_12_E').val()),2));
    FG1101_12_A($('#G1101_12_A'));
    $('#G1101_12_E').val(getNumToString(getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_12_H').val()),2));
}

/*G1101_12_F*/
function FG1101_12_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_12_E').val(getNumToString(getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_12_H').val()),2));
    FG1101_12_E($('#G1101_12_E'));
}

/*G1101_12_G*/
function FG1101_12_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_12_E').val(getNumToString(getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_12_H').val()),2));
    FG1101_12_E($('#G1101_12_E'));
}

/*G1101_12_H*/
function FG1101_12_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_12_E').val(getNumToString(getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_12_H').val()),2));
    FG1101_12_E($('#G1101_12_E'));
}

/*G1101_13_A*/
function FG1101_13_A(obj){
    showStr(obj);
    $('#G1101_13_A').val(getNumToString(getStrFloat($('#G1101_13_B').val())+getStrFloat($('#G1101_13_E').val()),2));
}

/*G1101_13_B*/
function FG1101_13_B(obj){
    showStr(obj);
    $('#G1101_13_A').val(getNumToString(getStrFloat($('#G1101_13_B').val())+getStrFloat($('#G1101_13_E').val()),2));
    FG1101_13_A($('#G1101_13_A'));
    $('#G1101_13_B').val(getNumToString(getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_13_D').val()),2));
}

/*G1101_13_C*/
function FG1101_13_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_13_B').val(getNumToString(getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_13_D').val()),2));
    FG1101_13_B($('#G1101_13_B'));
}

/*G1101_13_D*/
function FG1101_13_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_13_B').val(getNumToString(getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_13_D').val()),2));
    FG1101_13_B($('#G1101_13_B'));
}

/*G1101_13_E*/
function FG1101_13_E(obj){
    showStr(obj);
    $('#G1101_13_A').val(getNumToString(getStrFloat($('#G1101_13_B').val())+getStrFloat($('#G1101_13_E').val()),2));
    FG1101_13_A($('#G1101_13_A'));
    $('#G1101_13_E').val(getNumToString(getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_13_H').val()),2));
}

/*G1101_13_F*/
function FG1101_13_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_13_E').val(getNumToString(getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_13_H').val()),2));
    FG1101_13_E($('#G1101_13_E'));
}

/*G1101_13_G*/
function FG1101_13_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_13_E').val(getNumToString(getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_13_H').val()),2));
    FG1101_13_E($('#G1101_13_E'));
}

/*G1101_13_H*/
function FG1101_13_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_13_E').val(getNumToString(getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_13_H').val()),2));
    FG1101_13_E($('#G1101_13_E'));
}

/*G1101_14_A*/
function FG1101_14_A(obj){
    showStr(obj);
    $('#G1101_14_A').val(getNumToString(getStrFloat($('#G1101_14_B').val())+getStrFloat($('#G1101_14_E').val()),2));
}

/*G1101_14_B*/
function FG1101_14_B(obj){
    showStr(obj);
    $('#G1101_14_A').val(getNumToString(getStrFloat($('#G1101_14_B').val())+getStrFloat($('#G1101_14_E').val()),2));
    FG1101_14_A($('#G1101_14_A'));
    $('#G1101_14_B').val(getNumToString(getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_14_D').val()),2));
}

/*G1101_14_C*/
function FG1101_14_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_14_B').val(getNumToString(getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_14_D').val()),2));
    FG1101_14_B($('#G1101_14_B'));
}

/*G1101_14_D*/
function FG1101_14_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_14_B').val(getNumToString(getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_14_D').val()),2));
    FG1101_14_B($('#G1101_14_B'));
}

/*G1101_14_E*/
function FG1101_14_E(obj){
    showStr(obj);
    $('#G1101_14_A').val(getNumToString(getStrFloat($('#G1101_14_B').val())+getStrFloat($('#G1101_14_E').val()),2));
    FG1101_14_A($('#G1101_14_A'));
    $('#G1101_14_E').val(getNumToString(getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_14_H').val()),2));
}

/*G1101_14_F*/
function FG1101_14_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_14_E').val(getNumToString(getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_14_H').val()),2));
    FG1101_14_E($('#G1101_14_E'));
}

/*G1101_14_G*/
function FG1101_14_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_14_E').val(getNumToString(getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_14_H').val()),2));
    FG1101_14_E($('#G1101_14_E'));
}

/*G1101_14_H*/
function FG1101_14_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_14_E').val(getNumToString(getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_14_H').val()),2));
    FG1101_14_E($('#G1101_14_E'));
}

/*G1101_15_A*/
function FG1101_15_A(obj){
    showStr(obj);
    $('#G1101_15_A').val(getNumToString(getStrFloat($('#G1101_15_B').val())+getStrFloat($('#G1101_15_E').val()),2));
}

/*G1101_15_B*/
function FG1101_15_B(obj){
    showStr(obj);
    $('#G1101_15_A').val(getNumToString(getStrFloat($('#G1101_15_B').val())+getStrFloat($('#G1101_15_E').val()),2));
    FG1101_15_A($('#G1101_15_A'));
    $('#G1101_15_B').val(getNumToString(getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_15_D').val()),2));
}

/*G1101_15_C*/
function FG1101_15_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_15_B').val(getNumToString(getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_15_D').val()),2));
    FG1101_15_B($('#G1101_15_B'));
}

/*G1101_15_D*/
function FG1101_15_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_15_B').val(getNumToString(getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_15_D').val()),2));
    FG1101_15_B($('#G1101_15_B'));
}

/*G1101_15_E*/
function FG1101_15_E(obj){
    showStr(obj);
    $('#G1101_15_A').val(getNumToString(getStrFloat($('#G1101_15_B').val())+getStrFloat($('#G1101_15_E').val()),2));
    FG1101_15_A($('#G1101_15_A'));
    $('#G1101_15_E').val(getNumToString(getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_15_H').val()),2));
}

/*G1101_15_F*/
function FG1101_15_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_15_E').val(getNumToString(getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_15_H').val()),2));
    FG1101_15_E($('#G1101_15_E'));
}

/*G1101_15_G*/
function FG1101_15_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_15_E').val(getNumToString(getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_15_H').val()),2));
    FG1101_15_E($('#G1101_15_E'));
}

/*G1101_15_H*/
function FG1101_15_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_15_E').val(getNumToString(getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_15_H').val()),2));
    FG1101_15_E($('#G1101_15_E'));
}

/*G1101_16_A*/
function FG1101_16_A(obj){
    showStr(obj);
    $('#G1101_16_A').val(getNumToString(getStrFloat($('#G1101_16_B').val())+getStrFloat($('#G1101_16_E').val()),2));
}

/*G1101_16_B*/
function FG1101_16_B(obj){
    showStr(obj);
    $('#G1101_16_A').val(getNumToString(getStrFloat($('#G1101_16_B').val())+getStrFloat($('#G1101_16_E').val()),2));
    FG1101_16_A($('#G1101_16_A'));
    $('#G1101_16_B').val(getNumToString(getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_16_D').val()),2));
}

/*G1101_16_C*/
function FG1101_16_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_16_B').val(getNumToString(getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_16_D').val()),2));
    FG1101_16_B($('#G1101_16_B'));
}

/*G1101_16_D*/
function FG1101_16_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_16_B').val(getNumToString(getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_16_D').val()),2));
    FG1101_16_B($('#G1101_16_B'));
}

/*G1101_16_E*/
function FG1101_16_E(obj){
    showStr(obj);
    $('#G1101_16_A').val(getNumToString(getStrFloat($('#G1101_16_B').val())+getStrFloat($('#G1101_16_E').val()),2));
    FG1101_16_A($('#G1101_16_A'));
    $('#G1101_16_E').val(getNumToString(getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_16_H').val()),2));
}

/*G1101_16_F*/
function FG1101_16_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_16_E').val(getNumToString(getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_16_H').val()),2));
    FG1101_16_E($('#G1101_16_E'));
}

/*G1101_16_G*/
function FG1101_16_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_16_E').val(getNumToString(getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_16_H').val()),2));
    FG1101_16_E($('#G1101_16_E'));
}

/*G1101_16_H*/
function FG1101_16_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_16_E').val(getNumToString(getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_16_H').val()),2));
    FG1101_16_E($('#G1101_16_E'));
}

/*G1101_17_A*/
function FG1101_17_A(obj){
    showStr(obj);
    $('#G1101_17_A').val(getNumToString(getStrFloat($('#G1101_17_B').val())+getStrFloat($('#G1101_17_E').val()),2));
}

/*G1101_17_B*/
function FG1101_17_B(obj){
    showStr(obj);
    $('#G1101_17_A').val(getNumToString(getStrFloat($('#G1101_17_B').val())+getStrFloat($('#G1101_17_E').val()),2));
    FG1101_17_A($('#G1101_17_A'));
    $('#G1101_17_B').val(getNumToString(getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_17_D').val()),2));
}

/*G1101_17_C*/
function FG1101_17_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_17_B').val(getNumToString(getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_17_D').val()),2));
    FG1101_17_B($('#G1101_17_B'));
}

/*G1101_17_D*/
function FG1101_17_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_17_B').val(getNumToString(getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_17_D').val()),2));
    FG1101_17_B($('#G1101_17_B'));
}

/*G1101_17_E*/
function FG1101_17_E(obj){
    showStr(obj);
    $('#G1101_17_A').val(getNumToString(getStrFloat($('#G1101_17_B').val())+getStrFloat($('#G1101_17_E').val()),2));
    FG1101_17_A($('#G1101_17_A'));
    $('#G1101_17_E').val(getNumToString(getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_17_H').val()),2));
}

/*G1101_17_F*/
function FG1101_17_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_17_E').val(getNumToString(getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_17_H').val()),2));
    FG1101_17_E($('#G1101_17_E'));
}

/*G1101_17_G*/
function FG1101_17_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_17_E').val(getNumToString(getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_17_H').val()),2));
    FG1101_17_E($('#G1101_17_E'));
}

/*G1101_17_H*/
function FG1101_17_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_17_E').val(getNumToString(getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_17_H').val()),2));
    FG1101_17_E($('#G1101_17_E'));
}

/*G1101_18_A*/
function FG1101_18_A(obj){
    showStr(obj);
    $('#G1101_18_A').val(getNumToString(getStrFloat($('#G1101_18_B').val())+getStrFloat($('#G1101_18_E').val()),2));
}

/*G1101_18_B*/
function FG1101_18_B(obj){
    showStr(obj);
    $('#G1101_18_A').val(getNumToString(getStrFloat($('#G1101_18_B').val())+getStrFloat($('#G1101_18_E').val()),2));
    FG1101_18_A($('#G1101_18_A'));
    $('#G1101_18_B').val(getNumToString(getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_18_D').val()),2));
}

/*G1101_18_C*/
function FG1101_18_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_18_B').val(getNumToString(getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_18_D').val()),2));
    FG1101_18_B($('#G1101_18_B'));
}

/*G1101_18_D*/
function FG1101_18_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_18_B').val(getNumToString(getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_18_D').val()),2));
    FG1101_18_B($('#G1101_18_B'));
}

/*G1101_18_E*/
function FG1101_18_E(obj){
    showStr(obj);
    $('#G1101_18_A').val(getNumToString(getStrFloat($('#G1101_18_B').val())+getStrFloat($('#G1101_18_E').val()),2));
    FG1101_18_A($('#G1101_18_A'));
    $('#G1101_18_E').val(getNumToString(getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_18_H').val()),2));
}

/*G1101_18_F*/
function FG1101_18_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_18_E').val(getNumToString(getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_18_H').val()),2));
    FG1101_18_E($('#G1101_18_E'));
}

/*G1101_18_G*/
function FG1101_18_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_18_E').val(getNumToString(getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_18_H').val()),2));
    FG1101_18_E($('#G1101_18_E'));
}

/*G1101_18_H*/
function FG1101_18_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_18_E').val(getNumToString(getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_18_H').val()),2));
    FG1101_18_E($('#G1101_18_E'));
}

/*G1101_19_A*/
function FG1101_19_A(obj){
    showStr(obj);
    $('#G1101_19_A').val(getNumToString(getStrFloat($('#G1101_19_B').val())+getStrFloat($('#G1101_19_E').val()),2));
}

/*G1101_19_B*/
function FG1101_19_B(obj){
    showStr(obj);
    $('#G1101_19_A').val(getNumToString(getStrFloat($('#G1101_19_B').val())+getStrFloat($('#G1101_19_E').val()),2));
    FG1101_19_A($('#G1101_19_A'));
    $('#G1101_19_B').val(getNumToString(getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_19_D').val()),2));
}

/*G1101_19_C*/
function FG1101_19_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_19_B').val(getNumToString(getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_19_D').val()),2));
    FG1101_19_B($('#G1101_19_B'));
}

/*G1101_19_D*/
function FG1101_19_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_19_B').val(getNumToString(getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_19_D').val()),2));
    FG1101_19_B($('#G1101_19_B'));
}

/*G1101_19_E*/
function FG1101_19_E(obj){
    showStr(obj);
    $('#G1101_19_A').val(getNumToString(getStrFloat($('#G1101_19_B').val())+getStrFloat($('#G1101_19_E').val()),2));
    FG1101_19_A($('#G1101_19_A'));
    $('#G1101_19_E').val(getNumToString(getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_19_H').val()),2));
}

/*G1101_19_F*/
function FG1101_19_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_19_E').val(getNumToString(getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_19_H').val()),2));
    FG1101_19_E($('#G1101_19_E'));
}

/*G1101_19_G*/
function FG1101_19_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_19_E').val(getNumToString(getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_19_H').val()),2));
    FG1101_19_E($('#G1101_19_E'));
}

/*G1101_19_H*/
function FG1101_19_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_19_E').val(getNumToString(getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_19_H').val()),2));
    FG1101_19_E($('#G1101_19_E'));
}

/*G1101_20_A*/
function FG1101_20_A(obj){
    showStr(obj);
    $('#G1101_20_A').val(getNumToString(getStrFloat($('#G1101_20_B').val())+getStrFloat($('#G1101_20_E').val()),2));
}

/*G1101_20_B*/
function FG1101_20_B(obj){
    showStr(obj);
    $('#G1101_20_A').val(getNumToString(getStrFloat($('#G1101_20_B').val())+getStrFloat($('#G1101_20_E').val()),2));
    FG1101_20_A($('#G1101_20_A'));
    $('#G1101_20_B').val(getNumToString(getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_20_D').val()),2));
}

/*G1101_20_C*/
function FG1101_20_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_20_B').val(getNumToString(getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_20_D').val()),2));
    FG1101_20_B($('#G1101_20_B'));
}

/*G1101_20_D*/
function FG1101_20_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_20_B').val(getNumToString(getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_20_D').val()),2));
    FG1101_20_B($('#G1101_20_B'));
}

/*G1101_20_E*/
function FG1101_20_E(obj){
    showStr(obj);
    $('#G1101_20_A').val(getNumToString(getStrFloat($('#G1101_20_B').val())+getStrFloat($('#G1101_20_E').val()),2));
    FG1101_20_A($('#G1101_20_A'));
    $('#G1101_20_E').val(getNumToString(getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_20_H').val()),2));
}

/*G1101_20_F*/
function FG1101_20_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_20_E').val(getNumToString(getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_20_H').val()),2));
    FG1101_20_E($('#G1101_20_E'));
}

/*G1101_20_G*/
function FG1101_20_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_20_E').val(getNumToString(getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_20_H').val()),2));
    FG1101_20_E($('#G1101_20_E'));
}

/*G1101_20_H*/
function FG1101_20_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_20_E').val(getNumToString(getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_20_H').val()),2));
    FG1101_20_E($('#G1101_20_E'));
}

/*G1101_21_A*/
function FG1101_21_A(obj){
    showStr(obj);
    $('#G1101_21_A').val(getNumToString(getStrFloat($('#G1101_21_B').val())+getStrFloat($('#G1101_21_E').val()),2));
}

/*G1101_21_B*/
function FG1101_21_B(obj){
    showStr(obj);
    $('#G1101_21_A').val(getNumToString(getStrFloat($('#G1101_21_B').val())+getStrFloat($('#G1101_21_E').val()),2));
    FG1101_21_A($('#G1101_21_A'));
    $('#G1101_21_B').val(getNumToString(getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_21_D').val()),2));
}

/*G1101_21_C*/
function FG1101_21_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_21_B').val(getNumToString(getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_21_D').val()),2));
    FG1101_21_B($('#G1101_21_B'));
}

/*G1101_21_D*/
function FG1101_21_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_21_B').val(getNumToString(getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_21_D').val()),2));
    FG1101_21_B($('#G1101_21_B'));
}

/*G1101_21_E*/
function FG1101_21_E(obj){
    showStr(obj);
    $('#G1101_21_A').val(getNumToString(getStrFloat($('#G1101_21_B').val())+getStrFloat($('#G1101_21_E').val()),2));
    FG1101_21_A($('#G1101_21_A'));
    $('#G1101_21_E').val(getNumToString(getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_21_H').val()),2));
}

/*G1101_21_F*/
function FG1101_21_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_21_E').val(getNumToString(getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_21_H').val()),2));
    FG1101_21_E($('#G1101_21_E'));
}

/*G1101_21_G*/
function FG1101_21_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_21_E').val(getNumToString(getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_21_H').val()),2));
    FG1101_21_E($('#G1101_21_E'));
}

/*G1101_21_H*/
function FG1101_21_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_21_E').val(getNumToString(getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_21_H').val()),2));
    FG1101_21_E($('#G1101_21_E'));
}

/*G1101_22_A*/
function FG1101_22_A(obj){
    showStr(obj);
    $('#G1101_22_A').val(getNumToString(getStrFloat($('#G1101_22_B').val())+getStrFloat($('#G1101_22_E').val()),2));
}

/*G1101_22_B*/
function FG1101_22_B(obj){
    showStr(obj);
    $('#G1101_22_A').val(getNumToString(getStrFloat($('#G1101_22_B').val())+getStrFloat($('#G1101_22_E').val()),2));
    FG1101_22_A($('#G1101_22_A'));
    $('#G1101_22_B').val(getNumToString(getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_22_D').val()),2));
}

/*G1101_22_C*/
function FG1101_22_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_22_B').val(getNumToString(getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_22_D').val()),2));
    FG1101_22_B($('#G1101_22_B'));
}

/*G1101_22_D*/
function FG1101_22_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_22_B').val(getNumToString(getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_22_D').val()),2));
    FG1101_22_B($('#G1101_22_B'));
}

/*G1101_22_E*/
function FG1101_22_E(obj){
    showStr(obj);
    $('#G1101_22_A').val(getNumToString(getStrFloat($('#G1101_22_B').val())+getStrFloat($('#G1101_22_E').val()),2));
    FG1101_22_A($('#G1101_22_A'));
    $('#G1101_22_E').val(getNumToString(getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_22_H').val()),2));
}

/*G1101_22_F*/
function FG1101_22_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_22_E').val(getNumToString(getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_22_H').val()),2));
    FG1101_22_E($('#G1101_22_E'));
}

/*G1101_22_G*/
function FG1101_22_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_22_E').val(getNumToString(getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_22_H').val()),2));
    FG1101_22_E($('#G1101_22_E'));
}

/*G1101_22_H*/
function FG1101_22_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_22_E').val(getNumToString(getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_22_H').val()),2));
    FG1101_22_E($('#G1101_22_E'));
}

/*G1101_23_A*/
function FG1101_23_A(obj){
    showStr(obj);
    $('#G1101_23_A').val(getNumToString(getStrFloat($('#G1101_23_B').val())+getStrFloat($('#G1101_23_E').val()),2));
}

/*G1101_23_B*/
function FG1101_23_B(obj){
    showStr(obj);
    $('#G1101_23_A').val(getNumToString(getStrFloat($('#G1101_23_B').val())+getStrFloat($('#G1101_23_E').val()),2));
    FG1101_23_A($('#G1101_23_A'));
    $('#G1101_23_B').val(getNumToString(getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_23_D').val()),2));
}

/*G1101_23_C*/
function FG1101_23_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_23_B').val(getNumToString(getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_23_D').val()),2));
    FG1101_23_B($('#G1101_23_B'));
}

/*G1101_23_D*/
function FG1101_23_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_23_B').val(getNumToString(getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_23_D').val()),2));
    FG1101_23_B($('#G1101_23_B'));
}

/*G1101_23_E*/
function FG1101_23_E(obj){
    showStr(obj);
    $('#G1101_23_A').val(getNumToString(getStrFloat($('#G1101_23_B').val())+getStrFloat($('#G1101_23_E').val()),2));
    FG1101_23_A($('#G1101_23_A'));
    $('#G1101_23_E').val(getNumToString(getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_23_H').val()),2));
}

/*G1101_23_F*/
function FG1101_23_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_23_E').val(getNumToString(getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_23_H').val()),2));
    FG1101_23_E($('#G1101_23_E'));
}

/*G1101_23_G*/
function FG1101_23_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_23_E').val(getNumToString(getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_23_H').val()),2));
    FG1101_23_E($('#G1101_23_E'));
}

/*G1101_23_H*/
function FG1101_23_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_23_E').val(getNumToString(getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_23_H').val()),2));
    FG1101_23_E($('#G1101_23_E'));
}

/*G1101_24_A*/
function FG1101_24_A(obj){
    showStr(obj);
    $('#G1101_24_A').val(getNumToString(getStrFloat($('#G1101_24_B').val())+getStrFloat($('#G1101_24_E').val()),2));
}

/*G1101_24_B*/
function FG1101_24_B(obj){
    showStr(obj);
    $('#G1101_24_A').val(getNumToString(getStrFloat($('#G1101_24_B').val())+getStrFloat($('#G1101_24_E').val()),2));
    FG1101_24_A($('#G1101_24_A'));
    $('#G1101_24_B').val(getNumToString(getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_24_D').val()),2));
}

/*G1101_24_C*/
function FG1101_24_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_24_B').val(getNumToString(getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_24_D').val()),2));
    FG1101_24_B($('#G1101_24_B'));
}

/*G1101_24_D*/
function FG1101_24_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_24_B').val(getNumToString(getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_24_D').val()),2));
    FG1101_24_B($('#G1101_24_B'));
}

/*G1101_24_E*/
function FG1101_24_E(obj){
    showStr(obj);
    $('#G1101_24_A').val(getNumToString(getStrFloat($('#G1101_24_B').val())+getStrFloat($('#G1101_24_E').val()),2));
    FG1101_24_A($('#G1101_24_A'));
    $('#G1101_24_E').val(getNumToString(getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_24_H').val()),2));
}

/*G1101_24_F*/
function FG1101_24_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_24_E').val(getNumToString(getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_24_H').val()),2));
    FG1101_24_E($('#G1101_24_E'));
}

/*G1101_24_G*/
function FG1101_24_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_24_E').val(getNumToString(getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_24_H').val()),2));
    FG1101_24_E($('#G1101_24_E'));
}

/*G1101_24_H*/
function FG1101_24_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_24_E').val(getNumToString(getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_24_H').val()),2));
    FG1101_24_E($('#G1101_24_E'));
}

/*G1101_25_A*/
function FG1101_25_A(obj){
    showStr(obj);
    $('#G1101_25_A').val(getNumToString(getStrFloat($('#G1101_25_B').val())+getStrFloat($('#G1101_25_E').val()),2));
}

/*G1101_25_B*/
function FG1101_25_B(obj){
    showStr(obj);
    $('#G1101_25_A').val(getNumToString(getStrFloat($('#G1101_25_B').val())+getStrFloat($('#G1101_25_E').val()),2));
    FG1101_25_A($('#G1101_25_A'));
    $('#G1101_25_B').val(getNumToString(getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_25_D').val()),2));
}

/*G1101_25_C*/
function FG1101_25_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_25_B').val(getNumToString(getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_25_D').val()),2));
    FG1101_25_B($('#G1101_25_B'));
}

/*G1101_25_D*/
function FG1101_25_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_25_B').val(getNumToString(getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_25_D').val()),2));
    FG1101_25_B($('#G1101_25_B'));
}

/*G1101_25_E*/
function FG1101_25_E(obj){
    showStr(obj);
    $('#G1101_25_A').val(getNumToString(getStrFloat($('#G1101_25_B').val())+getStrFloat($('#G1101_25_E').val()),2));
    FG1101_25_A($('#G1101_25_A'));
    $('#G1101_25_E').val(getNumToString(getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_25_H').val()),2));
}

/*G1101_25_F*/
function FG1101_25_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_25_E').val(getNumToString(getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_25_H').val()),2));
    FG1101_25_E($('#G1101_25_E'));
}

/*G1101_25_G*/
function FG1101_25_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_25_E').val(getNumToString(getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_25_H').val()),2));
    FG1101_25_E($('#G1101_25_E'));
}

/*G1101_25_H*/
function FG1101_25_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_25_E').val(getNumToString(getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_25_H').val()),2));
    FG1101_25_E($('#G1101_25_E'));
}

/*G1101_26_A*/
function FG1101_26_A(obj){
    showStr(obj);
    $('#G1101_26_A').val(getNumToString(getStrFloat($('#G1101_26_B').val())+getStrFloat($('#G1101_26_E').val()),2));
}

/*G1101_26_B*/
function FG1101_26_B(obj){
    showStr(obj);
    $('#G1101_26_A').val(getNumToString(getStrFloat($('#G1101_26_B').val())+getStrFloat($('#G1101_26_E').val()),2));
    FG1101_26_A($('#G1101_26_A'));
    $('#G1101_26_B').val(getNumToString(getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_26_D').val()),2));
}

/*G1101_26_C*/
function FG1101_26_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_26_B').val(getNumToString(getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_26_D').val()),2));
    FG1101_26_B($('#G1101_26_B'));
}

/*G1101_26_D*/
function FG1101_26_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_26_B').val(getNumToString(getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_26_D').val()),2));
    FG1101_26_B($('#G1101_26_B'));
}

/*G1101_26_E*/
function FG1101_26_E(obj){
    showStr(obj);
    $('#G1101_26_A').val(getNumToString(getStrFloat($('#G1101_26_B').val())+getStrFloat($('#G1101_26_E').val()),2));
    FG1101_26_A($('#G1101_26_A'));
    $('#G1101_26_E').val(getNumToString(getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_26_H').val()),2));
}

/*G1101_26_F*/
function FG1101_26_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_26_E').val(getNumToString(getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_26_H').val()),2));
    FG1101_26_E($('#G1101_26_E'));
}

/*G1101_26_G*/
function FG1101_26_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_26_E').val(getNumToString(getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_26_H').val()),2));
    FG1101_26_E($('#G1101_26_E'));
}

/*G1101_26_H*/
function FG1101_26_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_26_E').val(getNumToString(getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_26_H').val()),2));
    FG1101_26_E($('#G1101_26_E'));
}

/*G1101_27_A*/
function FG1101_27_A(obj){
    showStr(obj);
    $('#G1101_27_A').val(getNumToString(getStrFloat($('#G1101_27_B').val())+getStrFloat($('#G1101_27_E').val()),2));
}

/*G1101_27_B*/
function FG1101_27_B(obj){
    showStr(obj);
    $('#G1101_27_A').val(getNumToString(getStrFloat($('#G1101_27_B').val())+getStrFloat($('#G1101_27_E').val()),2));
    FG1101_27_A($('#G1101_27_A'));
    $('#G1101_27_B').val(getNumToString(getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_27_D').val()),2));
}

/*G1101_27_C*/
function FG1101_27_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_27_B').val(getNumToString(getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_27_D').val()),2));
    FG1101_27_B($('#G1101_27_B'));
}

/*G1101_27_D*/
function FG1101_27_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_27_B').val(getNumToString(getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_27_D').val()),2));
    FG1101_27_B($('#G1101_27_B'));
}

/*G1101_27_E*/
function FG1101_27_E(obj){
    showStr(obj);
    $('#G1101_27_A').val(getNumToString(getStrFloat($('#G1101_27_B').val())+getStrFloat($('#G1101_27_E').val()),2));
    FG1101_27_A($('#G1101_27_A'));
    $('#G1101_27_E').val(getNumToString(getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_27_H').val()),2));
}

/*G1101_27_F*/
function FG1101_27_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_27_E').val(getNumToString(getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_27_H').val()),2));
    FG1101_27_E($('#G1101_27_E'));
}

/*G1101_27_G*/
function FG1101_27_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_27_E').val(getNumToString(getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_27_H').val()),2));
    FG1101_27_E($('#G1101_27_E'));
}

/*G1101_27_H*/
function FG1101_27_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_27_E').val(getNumToString(getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_27_H').val()),2));
    FG1101_27_E($('#G1101_27_E'));
}

/*G1101_28_A*/
function FG1101_28_A(obj){
    showStr(obj);
    $('#G1101_28_A').val(getNumToString(getStrFloat($('#G1101_28_B').val())+getStrFloat($('#G1101_28_E').val()),2));
}

/*G1101_28_B*/
function FG1101_28_B(obj){
    showStr(obj);
    $('#G1101_28_A').val(getNumToString(getStrFloat($('#G1101_28_B').val())+getStrFloat($('#G1101_28_E').val()),2));
    FG1101_28_A($('#G1101_28_A'));
    $('#G1101_28_B').val(getNumToString(getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_28_D').val()),2));
}

/*G1101_28_C*/
function FG1101_28_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_28_B').val(getNumToString(getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_28_D').val()),2));
    FG1101_28_B($('#G1101_28_B'));
}

/*G1101_28_D*/
function FG1101_28_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_28_B').val(getNumToString(getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_28_D').val()),2));
    FG1101_28_B($('#G1101_28_B'));
}

/*G1101_28_E*/
function FG1101_28_E(obj){
    showStr(obj);
    $('#G1101_28_A').val(getNumToString(getStrFloat($('#G1101_28_B').val())+getStrFloat($('#G1101_28_E').val()),2));
    FG1101_28_A($('#G1101_28_A'));
    $('#G1101_28_E').val(getNumToString(getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_28_H').val()),2));
}

/*G1101_28_F*/
function FG1101_28_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_28_E').val(getNumToString(getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_28_H').val()),2));
    FG1101_28_E($('#G1101_28_E'));
}

/*G1101_28_G*/
function FG1101_28_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_28_E').val(getNumToString(getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_28_H').val()),2));
    FG1101_28_E($('#G1101_28_E'));
}

/*G1101_28_H*/
function FG1101_28_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_28_E').val(getNumToString(getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_28_H').val()),2));
    FG1101_28_E($('#G1101_28_E'));
}

/*G1101_29_A*/
function FG1101_29_A(obj){
    showStr(obj);
    $('#G1101_29_A').val(getNumToString(getStrFloat($('#G1101_29_B').val())+getStrFloat($('#G1101_29_E').val()),2));
}

/*G1101_29_B*/
function FG1101_29_B(obj){
    showStr(obj);
    $('#G1101_29_A').val(getNumToString(getStrFloat($('#G1101_29_B').val())+getStrFloat($('#G1101_29_E').val()),2));
    FG1101_29_A($('#G1101_29_A'));
    $('#G1101_29_B').val(getNumToString(getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_29_D').val()),2));
}

/*G1101_29_C*/
function FG1101_29_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_29_B').val(getNumToString(getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_29_D').val()),2));
    FG1101_29_B($('#G1101_29_B'));
}

/*G1101_29_D*/
function FG1101_29_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_29_B').val(getNumToString(getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_29_D').val()),2));
    FG1101_29_B($('#G1101_29_B'));
}

/*G1101_29_E*/
function FG1101_29_E(obj){
    showStr(obj);
    $('#G1101_29_A').val(getNumToString(getStrFloat($('#G1101_29_B').val())+getStrFloat($('#G1101_29_E').val()),2));
    FG1101_29_A($('#G1101_29_A'));
    $('#G1101_29_E').val(getNumToString(getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_29_H').val()),2));
}

/*G1101_29_F*/
function FG1101_29_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_29_E').val(getNumToString(getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_29_H').val()),2));
    FG1101_29_E($('#G1101_29_E'));
}

/*G1101_29_G*/
function FG1101_29_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_29_E').val(getNumToString(getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_29_H').val()),2));
    FG1101_29_E($('#G1101_29_E'));
}

/*G1101_29_H*/
function FG1101_29_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_29_E').val(getNumToString(getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_29_H').val()),2));
    FG1101_29_E($('#G1101_29_E'));
}

/*G1101_30_A*/
function FG1101_30_A(obj){
    showStr(obj);
    $('#G1101_30_A').val(getNumToString(getStrFloat($('#G1101_30_B').val())+getStrFloat($('#G1101_30_E').val()),2));
}

/*G1101_30_B*/
function FG1101_30_B(obj){
    showStr(obj);
    $('#G1101_30_A').val(getNumToString(getStrFloat($('#G1101_30_B').val())+getStrFloat($('#G1101_30_E').val()),2));
    FG1101_30_A($('#G1101_30_A'));
    $('#G1101_30_B').val(getNumToString(getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_30_D').val()),2));
}

/*G1101_30_C*/
function FG1101_30_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_30_B').val(getNumToString(getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_30_D').val()),2));
    FG1101_30_B($('#G1101_30_B'));
    $('#G1101_30_C').val(getNumToString(getStrFloat($('#G1101_31_C').val())+getStrFloat($('#G1101_32_C').val())+getStrFloat($('#G1101_33_C').val())+getStrFloat($('#G1101_34_C').val()),2));
}

/*G1101_30_D*/
function FG1101_30_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_30_B').val(getNumToString(getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_30_D').val()),2));
    FG1101_30_B($('#G1101_30_B'));
    $('#G1101_30_D').val(getNumToString(getStrFloat($('#G1101_31_D').val())+getStrFloat($('#G1101_32_D').val())+getStrFloat($('#G1101_33_D').val())+getStrFloat($('#G1101_34_D').val()),2));
}

/*G1101_30_E*/
function FG1101_30_E(obj){
    showStr(obj);
    $('#G1101_30_A').val(getNumToString(getStrFloat($('#G1101_30_B').val())+getStrFloat($('#G1101_30_E').val()),2));
    FG1101_30_A($('#G1101_30_A'));
    $('#G1101_30_E').val(getNumToString(getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_30_H').val()),2));
}

/*G1101_30_F*/
function FG1101_30_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_30_E').val(getNumToString(getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_30_H').val()),2));
    FG1101_30_E($('#G1101_30_E'));
    $('#G1101_30_F').val(getNumToString(getStrFloat($('#G1101_31_F').val())+getStrFloat($('#G1101_32_F').val())+getStrFloat($('#G1101_33_F').val())+getStrFloat($('#G1101_34_F').val()),2));
}

/*G1101_30_G*/
function FG1101_30_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_30_E').val(getNumToString(getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_30_H').val()),2));
    FG1101_30_E($('#G1101_30_E'));
    $('#G1101_30_G').val(getNumToString(getStrFloat($('#G1101_31_G').val())+getStrFloat($('#G1101_32_G').val())+getStrFloat($('#G1101_33_G').val())+getStrFloat($('#G1101_34_G').val()),2));
}

/*G1101_30_H*/
function FG1101_30_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_30_E').val(getNumToString(getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_30_H').val()),2));
    FG1101_30_E($('#G1101_30_E'));
    $('#G1101_30_H').val(getNumToString(getStrFloat($('#G1101_31_H').val())+getStrFloat($('#G1101_32_H').val())+getStrFloat($('#G1101_33_H').val())+getStrFloat($('#G1101_34_H').val()),2));
}

/*G1101_31_A*/
function FG1101_31_A(obj){
    showStr(obj);
    $('#G1101_31_A').val(getNumToString(getStrFloat($('#G1101_31_B').val())+getStrFloat($('#G1101_31_E').val()),2));
}

/*G1101_31_B*/
function FG1101_31_B(obj){
    showStr(obj);
    $('#G1101_31_A').val(getNumToString(getStrFloat($('#G1101_31_B').val())+getStrFloat($('#G1101_31_E').val()),2));
    FG1101_31_A($('#G1101_31_A'));
    $('#G1101_31_B').val(getNumToString(getStrFloat($('#G1101_31_C').val())+getStrFloat($('#G1101_31_D').val()),2));
}

/*G1101_31_C*/
function FG1101_31_C(obj){
    showStr(obj);
    $('#G1101_30_C').val(getNumToString(getStrFloat($('#G1101_31_C').val())+getStrFloat($('#G1101_32_C').val())+getStrFloat($('#G1101_33_C').val())+getStrFloat($('#G1101_34_C').val()),2));
    FG1101_30_C($('#G1101_30_C'));
    $('#G1101_31_B').val(getNumToString(getStrFloat($('#G1101_31_C').val())+getStrFloat($('#G1101_31_D').val()),2));
    FG1101_31_B($('#G1101_31_B'));
}

/*G1101_31_D*/
function FG1101_31_D(obj){
    showStr(obj);
    $('#G1101_30_D').val(getNumToString(getStrFloat($('#G1101_31_D').val())+getStrFloat($('#G1101_32_D').val())+getStrFloat($('#G1101_33_D').val())+getStrFloat($('#G1101_34_D').val()),2));
    FG1101_30_D($('#G1101_30_D'));
    $('#G1101_31_B').val(getNumToString(getStrFloat($('#G1101_31_C').val())+getStrFloat($('#G1101_31_D').val()),2));
    FG1101_31_B($('#G1101_31_B'));
}

/*G1101_31_E*/
function FG1101_31_E(obj){
    showStr(obj);
    $('#G1101_31_A').val(getNumToString(getStrFloat($('#G1101_31_B').val())+getStrFloat($('#G1101_31_E').val()),2));
    FG1101_31_A($('#G1101_31_A'));
    $('#G1101_31_E').val(getNumToString(getStrFloat($('#G1101_31_F').val())+getStrFloat($('#G1101_31_G').val())+getStrFloat($('#G1101_31_H').val()),2));
}

/*G1101_31_F*/
function FG1101_31_F(obj){
    showStr(obj);
    $('#G1101_30_F').val(getNumToString(getStrFloat($('#G1101_31_F').val())+getStrFloat($('#G1101_32_F').val())+getStrFloat($('#G1101_33_F').val())+getStrFloat($('#G1101_34_F').val()),2));
    FG1101_30_F($('#G1101_30_F'));
    $('#G1101_31_E').val(getNumToString(getStrFloat($('#G1101_31_F').val())+getStrFloat($('#G1101_31_G').val())+getStrFloat($('#G1101_31_H').val()),2));
    FG1101_31_E($('#G1101_31_E'));
}

/*G1101_31_G*/
function FG1101_31_G(obj){
    showStr(obj);
    $('#G1101_30_G').val(getNumToString(getStrFloat($('#G1101_31_G').val())+getStrFloat($('#G1101_32_G').val())+getStrFloat($('#G1101_33_G').val())+getStrFloat($('#G1101_34_G').val()),2));
    FG1101_30_G($('#G1101_30_G'));
    $('#G1101_31_E').val(getNumToString(getStrFloat($('#G1101_31_F').val())+getStrFloat($('#G1101_31_G').val())+getStrFloat($('#G1101_31_H').val()),2));
    FG1101_31_E($('#G1101_31_E'));
}

/*G1101_31_H*/
function FG1101_31_H(obj){
    showStr(obj);
    $('#G1101_30_H').val(getNumToString(getStrFloat($('#G1101_31_H').val())+getStrFloat($('#G1101_32_H').val())+getStrFloat($('#G1101_33_H').val())+getStrFloat($('#G1101_34_H').val()),2));
    FG1101_30_H($('#G1101_30_H'));
    $('#G1101_31_E').val(getNumToString(getStrFloat($('#G1101_31_F').val())+getStrFloat($('#G1101_31_G').val())+getStrFloat($('#G1101_31_H').val()),2));
    FG1101_31_E($('#G1101_31_E'));
}

/*G1101_32_A*/
function FG1101_32_A(obj){
    showStr(obj);
    $('#G1101_32_A').val(getNumToString(getStrFloat($('#G1101_32_B').val())+getStrFloat($('#G1101_32_E').val()),2));
}

/*G1101_32_B*/
function FG1101_32_B(obj){
    showStr(obj);
    $('#G1101_32_A').val(getNumToString(getStrFloat($('#G1101_32_B').val())+getStrFloat($('#G1101_32_E').val()),2));
    FG1101_32_A($('#G1101_32_A'));
    $('#G1101_32_B').val(getNumToString(getStrFloat($('#G1101_32_C').val())+getStrFloat($('#G1101_32_D').val()),2));
}

/*G1101_32_C*/
function FG1101_32_C(obj){
    showStr(obj);
    $('#G1101_30_C').val(getNumToString(getStrFloat($('#G1101_31_C').val())+getStrFloat($('#G1101_32_C').val())+getStrFloat($('#G1101_33_C').val())+getStrFloat($('#G1101_34_C').val()),2));
    FG1101_30_C($('#G1101_30_C'));
    $('#G1101_32_B').val(getNumToString(getStrFloat($('#G1101_32_C').val())+getStrFloat($('#G1101_32_D').val()),2));
    FG1101_32_B($('#G1101_32_B'));
}

/*G1101_32_D*/
function FG1101_32_D(obj){
    showStr(obj);
    $('#G1101_30_D').val(getNumToString(getStrFloat($('#G1101_31_D').val())+getStrFloat($('#G1101_32_D').val())+getStrFloat($('#G1101_33_D').val())+getStrFloat($('#G1101_34_D').val()),2));
    FG1101_30_D($('#G1101_30_D'));
    $('#G1101_32_B').val(getNumToString(getStrFloat($('#G1101_32_C').val())+getStrFloat($('#G1101_32_D').val()),2));
    FG1101_32_B($('#G1101_32_B'));
}

/*G1101_32_E*/
function FG1101_32_E(obj){
    showStr(obj);
    $('#G1101_32_A').val(getNumToString(getStrFloat($('#G1101_32_B').val())+getStrFloat($('#G1101_32_E').val()),2));
    FG1101_32_A($('#G1101_32_A'));
    $('#G1101_32_E').val(getNumToString(getStrFloat($('#G1101_32_F').val())+getStrFloat($('#G1101_32_G').val())+getStrFloat($('#G1101_32_H').val()),2));
}

/*G1101_32_F*/
function FG1101_32_F(obj){
    showStr(obj);
    $('#G1101_30_F').val(getNumToString(getStrFloat($('#G1101_31_F').val())+getStrFloat($('#G1101_32_F').val())+getStrFloat($('#G1101_33_F').val())+getStrFloat($('#G1101_34_F').val()),2));
    FG1101_30_F($('#G1101_30_F'));
    $('#G1101_32_E').val(getNumToString(getStrFloat($('#G1101_32_F').val())+getStrFloat($('#G1101_32_G').val())+getStrFloat($('#G1101_32_H').val()),2));
    FG1101_32_E($('#G1101_32_E'));
}

/*G1101_32_G*/
function FG1101_32_G(obj){
    showStr(obj);
    $('#G1101_30_G').val(getNumToString(getStrFloat($('#G1101_31_G').val())+getStrFloat($('#G1101_32_G').val())+getStrFloat($('#G1101_33_G').val())+getStrFloat($('#G1101_34_G').val()),2));
    FG1101_30_G($('#G1101_30_G'));
    $('#G1101_32_E').val(getNumToString(getStrFloat($('#G1101_32_F').val())+getStrFloat($('#G1101_32_G').val())+getStrFloat($('#G1101_32_H').val()),2));
    FG1101_32_E($('#G1101_32_E'));
}

/*G1101_32_H*/
function FG1101_32_H(obj){
    showStr(obj);
    $('#G1101_30_H').val(getNumToString(getStrFloat($('#G1101_31_H').val())+getStrFloat($('#G1101_32_H').val())+getStrFloat($('#G1101_33_H').val())+getStrFloat($('#G1101_34_H').val()),2));
    FG1101_30_H($('#G1101_30_H'));
    $('#G1101_32_E').val(getNumToString(getStrFloat($('#G1101_32_F').val())+getStrFloat($('#G1101_32_G').val())+getStrFloat($('#G1101_32_H').val()),2));
    FG1101_32_E($('#G1101_32_E'));
}

/*G1101_33_A*/
function FG1101_33_A(obj){
    showStr(obj);
    $('#G1101_33_A').val(getNumToString(getStrFloat($('#G1101_33_B').val())+getStrFloat($('#G1101_33_E').val()),2));
}

/*G1101_33_B*/
function FG1101_33_B(obj){
    showStr(obj);
    $('#G1101_33_A').val(getNumToString(getStrFloat($('#G1101_33_B').val())+getStrFloat($('#G1101_33_E').val()),2));
    FG1101_33_A($('#G1101_33_A'));
    $('#G1101_33_B').val(getNumToString(getStrFloat($('#G1101_33_C').val())+getStrFloat($('#G1101_33_D').val()),2));
}

/*G1101_33_C*/
function FG1101_33_C(obj){
    showStr(obj);
    $('#G1101_30_C').val(getNumToString(getStrFloat($('#G1101_31_C').val())+getStrFloat($('#G1101_32_C').val())+getStrFloat($('#G1101_33_C').val())+getStrFloat($('#G1101_34_C').val()),2));
    FG1101_30_C($('#G1101_30_C'));
    $('#G1101_33_B').val(getNumToString(getStrFloat($('#G1101_33_C').val())+getStrFloat($('#G1101_33_D').val()),2));
    FG1101_33_B($('#G1101_33_B'));
}

/*G1101_33_D*/
function FG1101_33_D(obj){
    showStr(obj);
    $('#G1101_30_D').val(getNumToString(getStrFloat($('#G1101_31_D').val())+getStrFloat($('#G1101_32_D').val())+getStrFloat($('#G1101_33_D').val())+getStrFloat($('#G1101_34_D').val()),2));
    FG1101_30_D($('#G1101_30_D'));
    $('#G1101_33_B').val(getNumToString(getStrFloat($('#G1101_33_C').val())+getStrFloat($('#G1101_33_D').val()),2));
    FG1101_33_B($('#G1101_33_B'));
}

/*G1101_33_E*/
function FG1101_33_E(obj){
    showStr(obj);
    $('#G1101_33_A').val(getNumToString(getStrFloat($('#G1101_33_B').val())+getStrFloat($('#G1101_33_E').val()),2));
    FG1101_33_A($('#G1101_33_A'));
    $('#G1101_33_E').val(getNumToString(getStrFloat($('#G1101_33_F').val())+getStrFloat($('#G1101_33_G').val())+getStrFloat($('#G1101_33_H').val()),2));
}

/*G1101_33_F*/
function FG1101_33_F(obj){
    showStr(obj);
    $('#G1101_30_F').val(getNumToString(getStrFloat($('#G1101_31_F').val())+getStrFloat($('#G1101_32_F').val())+getStrFloat($('#G1101_33_F').val())+getStrFloat($('#G1101_34_F').val()),2));
    FG1101_30_F($('#G1101_30_F'));
    $('#G1101_33_E').val(getNumToString(getStrFloat($('#G1101_33_F').val())+getStrFloat($('#G1101_33_G').val())+getStrFloat($('#G1101_33_H').val()),2));
    FG1101_33_E($('#G1101_33_E'));
}

/*G1101_33_G*/
function FG1101_33_G(obj){
    showStr(obj);
    $('#G1101_30_G').val(getNumToString(getStrFloat($('#G1101_31_G').val())+getStrFloat($('#G1101_32_G').val())+getStrFloat($('#G1101_33_G').val())+getStrFloat($('#G1101_34_G').val()),2));
    FG1101_30_G($('#G1101_30_G'));
    $('#G1101_33_E').val(getNumToString(getStrFloat($('#G1101_33_F').val())+getStrFloat($('#G1101_33_G').val())+getStrFloat($('#G1101_33_H').val()),2));
    FG1101_33_E($('#G1101_33_E'));
}

/*G1101_33_H*/
function FG1101_33_H(obj){
    showStr(obj);
    $('#G1101_30_H').val(getNumToString(getStrFloat($('#G1101_31_H').val())+getStrFloat($('#G1101_32_H').val())+getStrFloat($('#G1101_33_H').val())+getStrFloat($('#G1101_34_H').val()),2));
    FG1101_30_H($('#G1101_30_H'));
    $('#G1101_33_E').val(getNumToString(getStrFloat($('#G1101_33_F').val())+getStrFloat($('#G1101_33_G').val())+getStrFloat($('#G1101_33_H').val()),2));
    FG1101_33_E($('#G1101_33_E'));
}

/*G1101_34_A*/
function FG1101_34_A(obj){
    showStr(obj);
    $('#G1101_34_A').val(getNumToString(getStrFloat($('#G1101_34_B').val())+getStrFloat($('#G1101_34_E').val()),2));
}

/*G1101_34_B*/
function FG1101_34_B(obj){
    showStr(obj);
    $('#G1101_34_A').val(getNumToString(getStrFloat($('#G1101_34_B').val())+getStrFloat($('#G1101_34_E').val()),2));
    FG1101_34_A($('#G1101_34_A'));
    $('#G1101_34_B').val(getNumToString(getStrFloat($('#G1101_34_C').val())+getStrFloat($('#G1101_34_D').val()),2));
}

/*G1101_34_C*/
function FG1101_34_C(obj){
    showStr(obj);
    $('#G1101_30_C').val(getNumToString(getStrFloat($('#G1101_31_C').val())+getStrFloat($('#G1101_32_C').val())+getStrFloat($('#G1101_33_C').val())+getStrFloat($('#G1101_34_C').val()),2));
    FG1101_30_C($('#G1101_30_C'));
    $('#G1101_34_B').val(getNumToString(getStrFloat($('#G1101_34_C').val())+getStrFloat($('#G1101_34_D').val()),2));
    FG1101_34_B($('#G1101_34_B'));
}

/*G1101_34_D*/
function FG1101_34_D(obj){
    showStr(obj);
    $('#G1101_30_D').val(getNumToString(getStrFloat($('#G1101_31_D').val())+getStrFloat($('#G1101_32_D').val())+getStrFloat($('#G1101_33_D').val())+getStrFloat($('#G1101_34_D').val()),2));
    FG1101_30_D($('#G1101_30_D'));
    $('#G1101_34_B').val(getNumToString(getStrFloat($('#G1101_34_C').val())+getStrFloat($('#G1101_34_D').val()),2));
    FG1101_34_B($('#G1101_34_B'));
}

/*G1101_34_E*/
function FG1101_34_E(obj){
    showStr(obj);
    $('#G1101_34_A').val(getNumToString(getStrFloat($('#G1101_34_B').val())+getStrFloat($('#G1101_34_E').val()),2));
    FG1101_34_A($('#G1101_34_A'));
    $('#G1101_34_E').val(getNumToString(getStrFloat($('#G1101_34_F').val())+getStrFloat($('#G1101_34_G').val())+getStrFloat($('#G1101_34_H').val()),2));
}

/*G1101_34_F*/
function FG1101_34_F(obj){
    showStr(obj);
    $('#G1101_30_F').val(getNumToString(getStrFloat($('#G1101_31_F').val())+getStrFloat($('#G1101_32_F').val())+getStrFloat($('#G1101_33_F').val())+getStrFloat($('#G1101_34_F').val()),2));
    FG1101_30_F($('#G1101_30_F'));
    $('#G1101_34_E').val(getNumToString(getStrFloat($('#G1101_34_F').val())+getStrFloat($('#G1101_34_G').val())+getStrFloat($('#G1101_34_H').val()),2));
    FG1101_34_E($('#G1101_34_E'));
}

/*G1101_34_G*/
function FG1101_34_G(obj){
    showStr(obj);
    $('#G1101_30_G').val(getNumToString(getStrFloat($('#G1101_31_G').val())+getStrFloat($('#G1101_32_G').val())+getStrFloat($('#G1101_33_G').val())+getStrFloat($('#G1101_34_G').val()),2));
    FG1101_30_G($('#G1101_30_G'));
    $('#G1101_34_E').val(getNumToString(getStrFloat($('#G1101_34_F').val())+getStrFloat($('#G1101_34_G').val())+getStrFloat($('#G1101_34_H').val()),2));
    FG1101_34_E($('#G1101_34_E'));
}

/*G1101_34_H*/
function FG1101_34_H(obj){
    showStr(obj);
    $('#G1101_30_H').val(getNumToString(getStrFloat($('#G1101_31_H').val())+getStrFloat($('#G1101_32_H').val())+getStrFloat($('#G1101_33_H').val())+getStrFloat($('#G1101_34_H').val()),2));
    FG1101_30_H($('#G1101_30_H'));
    $('#G1101_34_E').val(getNumToString(getStrFloat($('#G1101_34_F').val())+getStrFloat($('#G1101_34_G').val())+getStrFloat($('#G1101_34_H').val()),2));
    FG1101_34_E($('#G1101_34_E'));
}

/*G1101_35_A*/
function FG1101_35_A(obj){
    showStr(obj);
    $('#G1101_35_A').val(getNumToString(getStrFloat($('#G1101_35_B').val())+getStrFloat($('#G1101_35_E').val()),2));
}

/*G1101_35_B*/
function FG1101_35_B(obj){
    showStr(obj);
    $('#G1101_35_A').val(getNumToString(getStrFloat($('#G1101_35_B').val())+getStrFloat($('#G1101_35_E').val()),2));
    FG1101_35_A($('#G1101_35_A'));
    $('#G1101_35_B').val(getNumToString(getStrFloat($('#G1101_35_C').val())+getStrFloat($('#G1101_35_D').val()),2));
}

/*G1101_35_C*/
function FG1101_35_C(obj){
    showStr(obj);
    $('#G1101_9_C').val(getNumToString(getStrFloat($('#G1101_10_C').val())+getStrFloat($('#G1101_11_C').val())+getStrFloat($('#G1101_12_C').val())+getStrFloat($('#G1101_13_C').val())+getStrFloat($('#G1101_14_C').val())+getStrFloat($('#G1101_15_C').val())+getStrFloat($('#G1101_16_C').val())+getStrFloat($('#G1101_17_C').val())+getStrFloat($('#G1101_18_C').val())+getStrFloat($('#G1101_19_C').val())+getStrFloat($('#G1101_20_C').val())+getStrFloat($('#G1101_21_C').val())+getStrFloat($('#G1101_22_C').val())+getStrFloat($('#G1101_23_C').val())+getStrFloat($('#G1101_24_C').val())+getStrFloat($('#G1101_25_C').val())+getStrFloat($('#G1101_26_C').val())+getStrFloat($('#G1101_27_C').val())+getStrFloat($('#G1101_28_C').val())+getStrFloat($('#G1101_29_C').val())+getStrFloat($('#G1101_30_C').val())+getStrFloat($('#G1101_35_C').val()),2));
    FG1101_9_C($('#G1101_9_C'));
    $('#G1101_35_B').val(getNumToString(getStrFloat($('#G1101_35_C').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_35_B($('#G1101_35_B'));
}

/*G1101_35_D*/
function FG1101_35_D(obj){
    showStr(obj);
    $('#G1101_9_D').val(getNumToString(getStrFloat($('#G1101_10_D').val())+getStrFloat($('#G1101_11_D').val())+getStrFloat($('#G1101_12_D').val())+getStrFloat($('#G1101_13_D').val())+getStrFloat($('#G1101_14_D').val())+getStrFloat($('#G1101_15_D').val())+getStrFloat($('#G1101_16_D').val())+getStrFloat($('#G1101_17_D').val())+getStrFloat($('#G1101_18_D').val())+getStrFloat($('#G1101_19_D').val())+getStrFloat($('#G1101_20_D').val())+getStrFloat($('#G1101_21_D').val())+getStrFloat($('#G1101_22_D').val())+getStrFloat($('#G1101_23_D').val())+getStrFloat($('#G1101_24_D').val())+getStrFloat($('#G1101_25_D').val())+getStrFloat($('#G1101_26_D').val())+getStrFloat($('#G1101_27_D').val())+getStrFloat($('#G1101_28_D').val())+getStrFloat($('#G1101_29_D').val())+getStrFloat($('#G1101_30_D').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_9_D($('#G1101_9_D'));
    $('#G1101_35_B').val(getNumToString(getStrFloat($('#G1101_35_C').val())+getStrFloat($('#G1101_35_D').val()),2));
    FG1101_35_B($('#G1101_35_B'));
}

/*G1101_35_E*/
function FG1101_35_E(obj){
    showStr(obj);
    $('#G1101_35_A').val(getNumToString(getStrFloat($('#G1101_35_B').val())+getStrFloat($('#G1101_35_E').val()),2));
    FG1101_35_A($('#G1101_35_A'));
    $('#G1101_35_E').val(getNumToString(getStrFloat($('#G1101_35_F').val())+getStrFloat($('#G1101_35_G').val())+getStrFloat($('#G1101_35_H').val()),2));
}

/*G1101_35_F*/
function FG1101_35_F(obj){
    showStr(obj);
    $('#G1101_9_F').val(getNumToString(getStrFloat($('#G1101_10_F').val())+getStrFloat($('#G1101_11_F').val())+getStrFloat($('#G1101_12_F').val())+getStrFloat($('#G1101_13_F').val())+getStrFloat($('#G1101_14_F').val())+getStrFloat($('#G1101_15_F').val())+getStrFloat($('#G1101_16_F').val())+getStrFloat($('#G1101_17_F').val())+getStrFloat($('#G1101_18_F').val())+getStrFloat($('#G1101_19_F').val())+getStrFloat($('#G1101_20_F').val())+getStrFloat($('#G1101_21_F').val())+getStrFloat($('#G1101_22_F').val())+getStrFloat($('#G1101_23_F').val())+getStrFloat($('#G1101_24_F').val())+getStrFloat($('#G1101_25_F').val())+getStrFloat($('#G1101_26_F').val())+getStrFloat($('#G1101_27_F').val())+getStrFloat($('#G1101_28_F').val())+getStrFloat($('#G1101_29_F').val())+getStrFloat($('#G1101_30_F').val())+getStrFloat($('#G1101_35_F').val()),2));
    FG1101_9_F($('#G1101_9_F'));
    $('#G1101_35_E').val(getNumToString(getStrFloat($('#G1101_35_F').val())+getStrFloat($('#G1101_35_G').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_35_E($('#G1101_35_E'));
}

/*G1101_35_G*/
function FG1101_35_G(obj){
    showStr(obj);
    $('#G1101_9_G').val(getNumToString(getStrFloat($('#G1101_10_G').val())+getStrFloat($('#G1101_11_G').val())+getStrFloat($('#G1101_12_G').val())+getStrFloat($('#G1101_13_G').val())+getStrFloat($('#G1101_14_G').val())+getStrFloat($('#G1101_15_G').val())+getStrFloat($('#G1101_16_G').val())+getStrFloat($('#G1101_17_G').val())+getStrFloat($('#G1101_18_G').val())+getStrFloat($('#G1101_19_G').val())+getStrFloat($('#G1101_20_G').val())+getStrFloat($('#G1101_21_G').val())+getStrFloat($('#G1101_22_G').val())+getStrFloat($('#G1101_23_G').val())+getStrFloat($('#G1101_24_G').val())+getStrFloat($('#G1101_25_G').val())+getStrFloat($('#G1101_26_G').val())+getStrFloat($('#G1101_27_G').val())+getStrFloat($('#G1101_28_G').val())+getStrFloat($('#G1101_29_G').val())+getStrFloat($('#G1101_30_G').val())+getStrFloat($('#G1101_35_G').val()),2));
    FG1101_9_G($('#G1101_9_G'));
    $('#G1101_35_E').val(getNumToString(getStrFloat($('#G1101_35_F').val())+getStrFloat($('#G1101_35_G').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_35_E($('#G1101_35_E'));
}

/*G1101_35_H*/
function FG1101_35_H(obj){
    showStr(obj);
    $('#G1101_9_H').val(getNumToString(getStrFloat($('#G1101_10_H').val())+getStrFloat($('#G1101_11_H').val())+getStrFloat($('#G1101_12_H').val())+getStrFloat($('#G1101_13_H').val())+getStrFloat($('#G1101_14_H').val())+getStrFloat($('#G1101_15_H').val())+getStrFloat($('#G1101_16_H').val())+getStrFloat($('#G1101_17_H').val())+getStrFloat($('#G1101_18_H').val())+getStrFloat($('#G1101_19_H').val())+getStrFloat($('#G1101_20_H').val())+getStrFloat($('#G1101_21_H').val())+getStrFloat($('#G1101_22_H').val())+getStrFloat($('#G1101_23_H').val())+getStrFloat($('#G1101_24_H').val())+getStrFloat($('#G1101_25_H').val())+getStrFloat($('#G1101_26_H').val())+getStrFloat($('#G1101_27_H').val())+getStrFloat($('#G1101_28_H').val())+getStrFloat($('#G1101_29_H').val())+getStrFloat($('#G1101_30_H').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_9_H($('#G1101_9_H'));
    $('#G1101_35_E').val(getNumToString(getStrFloat($('#G1101_35_F').val())+getStrFloat($('#G1101_35_G').val())+getStrFloat($('#G1101_35_H').val()),2));
    FG1101_35_E($('#G1101_35_E'));
}

/*G1101_36_A*/
function FG1101_36_A(obj){
    showStr(obj);
    $('#G1101_36_A').val(getNumToString(getStrFloat($('#G1101_36_B').val())+getStrFloat($('#G1101_36_E').val()),2));
}

/*G1101_36_B*/
function FG1101_36_B(obj){
    showStr(obj);
    $('#G1101_36_A').val(getNumToString(getStrFloat($('#G1101_36_B').val())+getStrFloat($('#G1101_36_E').val()),2));
    FG1101_36_A($('#G1101_36_A'));
    $('#G1101_36_B').val(getNumToString(getStrFloat($('#G1101_36_C').val())+getStrFloat($('#G1101_36_D').val()),2));
}

/*G1101_36_C*/
function FG1101_36_C(obj){
    showStr(obj);
    $('#G1101_8_C').val(getNumToString(getStrFloat($('#G1101_9_C').val())+getStrFloat($('#G1101_36_C').val()),2));
    FG1101_8_C($('#G1101_8_C'));
    $('#G1101_36_B').val(getNumToString(getStrFloat($('#G1101_36_C').val())+getStrFloat($('#G1101_36_D').val()),2));
    FG1101_36_B($('#G1101_36_B'));
}

/*G1101_36_D*/
function FG1101_36_D(obj){
    showStr(obj);
    $('#G1101_8_D').val(getNumToString(getStrFloat($('#G1101_9_D').val())+getStrFloat($('#G1101_36_D').val()),2));
    FG1101_8_D($('#G1101_8_D'));
    $('#G1101_36_B').val(getNumToString(getStrFloat($('#G1101_36_C').val())+getStrFloat($('#G1101_36_D').val()),2));
    FG1101_36_B($('#G1101_36_B'));
}

/*G1101_36_E*/
function FG1101_36_E(obj){
    showStr(obj);
    $('#G1101_36_A').val(getNumToString(getStrFloat($('#G1101_36_B').val())+getStrFloat($('#G1101_36_E').val()),2));
    FG1101_36_A($('#G1101_36_A'));
    $('#G1101_36_E').val(getNumToString(getStrFloat($('#G1101_36_F').val())+getStrFloat($('#G1101_36_G').val())+getStrFloat($('#G1101_36_H').val()),2));
}

/*G1101_36_F*/
function FG1101_36_F(obj){
    showStr(obj);
    $('#G1101_8_F').val(getNumToString(getStrFloat($('#G1101_9_F').val())+getStrFloat($('#G1101_36_F').val()),2));
    FG1101_8_F($('#G1101_8_F'));
    $('#G1101_36_E').val(getNumToString(getStrFloat($('#G1101_36_F').val())+getStrFloat($('#G1101_36_G').val())+getStrFloat($('#G1101_36_H').val()),2));
    FG1101_36_E($('#G1101_36_E'));
}

/*G1101_36_G*/
function FG1101_36_G(obj){
    showStr(obj);
    $('#G1101_8_G').val(getNumToString(getStrFloat($('#G1101_9_G').val())+getStrFloat($('#G1101_36_G').val()),2));
    FG1101_8_G($('#G1101_8_G'));
    $('#G1101_36_E').val(getNumToString(getStrFloat($('#G1101_36_F').val())+getStrFloat($('#G1101_36_G').val())+getStrFloat($('#G1101_36_H').val()),2));
    FG1101_36_E($('#G1101_36_E'));
}

/*G1101_36_H*/
function FG1101_36_H(obj){
    showStr(obj);
    $('#G1101_8_H').val(getNumToString(getStrFloat($('#G1101_9_H').val())+getStrFloat($('#G1101_36_H').val()),2));
    FG1101_8_H($('#G1101_8_H'));
    $('#G1101_36_E').val(getNumToString(getStrFloat($('#G1101_36_F').val())+getStrFloat($('#G1101_36_G').val())+getStrFloat($('#G1101_36_H').val()),2));
    FG1101_36_E($('#G1101_36_E'));
}

/*G1101_38_A*/
function FG1101_38_A(obj){
    showStr(obj);
    $('#G1101_38_A').val(getNumToString(getStrFloat($('#G1101_38_B').val())+getStrFloat($('#G1101_38_E').val()),2));
}

/*G1101_38_B*/
function FG1101_38_B(obj){
    showStr(obj);
    $('#G1101_38_A').val(getNumToString(getStrFloat($('#G1101_38_B').val())+getStrFloat($('#G1101_38_E').val()),2));
    FG1101_38_A($('#G1101_38_A'));
    $('#G1101_38_B').val(getNumToString(getStrFloat($('#G1101_38_C').val())+getStrFloat($('#G1101_38_D').val()),2));
}

/*G1101_38_C*/
function FG1101_38_C(obj){
    showStr(obj);
    $('#G1101_38_B').val(getNumToString(getStrFloat($('#G1101_38_C').val())+getStrFloat($('#G1101_38_D').val()),2));
    FG1101_38_B($('#G1101_38_B'));
}

/*G1101_38_D*/
function FG1101_38_D(obj){
    showStr(obj);
    $('#G1101_38_B').val(getNumToString(getStrFloat($('#G1101_38_C').val())+getStrFloat($('#G1101_38_D').val()),2));
    FG1101_38_B($('#G1101_38_B'));
}

/*G1101_38_E*/
function FG1101_38_E(obj){
    showStr(obj);
    $('#G1101_38_A').val(getNumToString(getStrFloat($('#G1101_38_B').val())+getStrFloat($('#G1101_38_E').val()),2));
    FG1101_38_A($('#G1101_38_A'));
    $('#G1101_38_E').val(getNumToString(getStrFloat($('#G1101_38_F').val())+getStrFloat($('#G1101_38_G').val())+getStrFloat($('#G1101_38_H').val()),2));
}

/*G1101_38_F*/
function FG1101_38_F(obj){
    showStr(obj);
    $('#G1101_38_E').val(getNumToString(getStrFloat($('#G1101_38_F').val())+getStrFloat($('#G1101_38_G').val())+getStrFloat($('#G1101_38_H').val()),2));
    FG1101_38_E($('#G1101_38_E'));
}

/*G1101_38_G*/
function FG1101_38_G(obj){
    showStr(obj);
    $('#G1101_38_E').val(getNumToString(getStrFloat($('#G1101_38_F').val())+getStrFloat($('#G1101_38_G').val())+getStrFloat($('#G1101_38_H').val()),2));
    FG1101_38_E($('#G1101_38_E'));
}

/*G1101_38_H*/
function FG1101_38_H(obj){
    showStr(obj);
    $('#G1101_38_E').val(getNumToString(getStrFloat($('#G1101_38_F').val())+getStrFloat($('#G1101_38_G').val())+getStrFloat($('#G1101_38_H').val()),2));
    FG1101_38_E($('#G1101_38_E'));
}

/*G1101_39_A*/
function FG1101_39_A(obj){
    showStr(obj);
    $('#G1101_39_A').val(getNumToString(getStrFloat($('#G1101_40_A').val())+getStrFloat($('#G1101_41_A').val())+getStrFloat($('#G1101_42_A').val())+getStrFloat($('#G1101_43_A').val())+getStrFloat($('#G1101_44_A').val())+getStrFloat($('#G1101_45_A').val()),2));
}

/*G1101_39_B*/
function FG1101_39_B(obj){
    showStr(obj);
    $('#G1101_39_B').val(getNumToString(getStrFloat($('#G1101_40_B').val())+getStrFloat($('#G1101_41_B').val())+getStrFloat($('#G1101_42_B').val())+getStrFloat($('#G1101_43_B').val())+getStrFloat($('#G1101_44_B').val())+getStrFloat($('#G1101_45_B').val()),2));
}

/*G1101_39_C*/
function FG1101_39_C(obj){
    showStr(obj);
    $('#G1101_39_C').val(getNumToString(getStrFloat($('#G1101_40_C').val())+getStrFloat($('#G1101_41_C').val())+getStrFloat($('#G1101_42_C').val())+getStrFloat($('#G1101_43_C').val())+getStrFloat($('#G1101_44_C').val())+getStrFloat($('#G1101_45_C').val()),2));
}

/*G1101_39_D*/
function FG1101_39_D(obj){
    showStr(obj);
    $('#G1101_39_D').val(getNumToString(getStrFloat($('#G1101_40_D').val())+getStrFloat($('#G1101_41_D').val())+getStrFloat($('#G1101_42_D').val())+getStrFloat($('#G1101_43_D').val())+getStrFloat($('#G1101_44_D').val())+getStrFloat($('#G1101_45_D').val()),2));
}

/*G1101_39_E*/
function FG1101_39_E(obj){
    showStr(obj);
    $('#G1101_39_E').val(getNumToString(getStrFloat($('#G1101_40_E').val())+getStrFloat($('#G1101_41_E').val())+getStrFloat($('#G1101_42_E').val())+getStrFloat($('#G1101_43_E').val())+getStrFloat($('#G1101_44_E').val())+getStrFloat($('#G1101_45_E').val()),2));
}

/*G1101_39_F*/
function FG1101_39_F(obj){
    showStr(obj);
    $('#G1101_39_F').val(getNumToString(getStrFloat($('#G1101_40_F').val())+getStrFloat($('#G1101_41_F').val())+getStrFloat($('#G1101_42_F').val())+getStrFloat($('#G1101_43_F').val())+getStrFloat($('#G1101_44_F').val())+getStrFloat($('#G1101_45_F').val()),2));
}

/*G1101_39_G*/
function FG1101_39_G(obj){
    showStr(obj);
    $('#G1101_39_G').val(getNumToString(getStrFloat($('#G1101_40_G').val())+getStrFloat($('#G1101_41_G').val())+getStrFloat($('#G1101_42_G').val())+getStrFloat($('#G1101_43_G').val())+getStrFloat($('#G1101_44_G').val())+getStrFloat($('#G1101_45_G').val()),2));
}

/*G1101_39_H*/
function FG1101_39_H(obj){
    showStr(obj);
    $('#G1101_39_H').val(getNumToString(getStrFloat($('#G1101_40_H').val())+getStrFloat($('#G1101_41_H').val())+getStrFloat($('#G1101_42_H').val())+getStrFloat($('#G1101_43_H').val())+getStrFloat($('#G1101_44_H').val())+getStrFloat($('#G1101_45_H').val()),2));
}

/*G1101_40_A*/
function FG1101_40_A(obj){
    showStr(obj);
    $('#G1101_39_A').val(getNumToString(getStrFloat($('#G1101_40_A').val())+getStrFloat($('#G1101_41_A').val())+getStrFloat($('#G1101_42_A').val())+getStrFloat($('#G1101_43_A').val())+getStrFloat($('#G1101_44_A').val())+getStrFloat($('#G1101_45_A').val()),2));
    FG1101_39_A($('#G1101_39_A'));
    $('#G1101_40_A').val(getNumToString(getStrFloat($('#G1101_40_B').val())+getStrFloat($('#G1101_40_E').val()),2));
}

/*G1101_40_B*/
function FG1101_40_B(obj){
    showStr(obj);
    $('#G1101_39_B').val(getNumToString(getStrFloat($('#G1101_40_B').val())+getStrFloat($('#G1101_41_B').val())+getStrFloat($('#G1101_42_B').val())+getStrFloat($('#G1101_43_B').val())+getStrFloat($('#G1101_44_B').val())+getStrFloat($('#G1101_45_B').val()),2));
    FG1101_39_B($('#G1101_39_B'));
    $('#G1101_40_A').val(getNumToString(getStrFloat($('#G1101_40_B').val())+getStrFloat($('#G1101_40_E').val()),2));
    FG1101_40_A($('#G1101_40_A'));
    $('#G1101_40_B').val(getNumToString(getStrFloat($('#G1101_40_C').val())+getStrFloat($('#G1101_40_D').val()),2));
}

/*G1101_40_C*/
function FG1101_40_C(obj){
    showStr(obj);
    $('#G1101_39_C').val(getNumToString(getStrFloat($('#G1101_40_C').val())+getStrFloat($('#G1101_41_C').val())+getStrFloat($('#G1101_42_C').val())+getStrFloat($('#G1101_43_C').val())+getStrFloat($('#G1101_44_C').val())+getStrFloat($('#G1101_45_C').val()),2));
    FG1101_39_C($('#G1101_39_C'));
    $('#G1101_40_B').val(getNumToString(getStrFloat($('#G1101_40_C').val())+getStrFloat($('#G1101_40_D').val()),2));
    FG1101_40_B($('#G1101_40_B'));
}

/*G1101_40_D*/
function FG1101_40_D(obj){
    showStr(obj);
    $('#G1101_39_D').val(getNumToString(getStrFloat($('#G1101_40_D').val())+getStrFloat($('#G1101_41_D').val())+getStrFloat($('#G1101_42_D').val())+getStrFloat($('#G1101_43_D').val())+getStrFloat($('#G1101_44_D').val())+getStrFloat($('#G1101_45_D').val()),2));
    FG1101_39_D($('#G1101_39_D'));
    $('#G1101_40_B').val(getNumToString(getStrFloat($('#G1101_40_C').val())+getStrFloat($('#G1101_40_D').val()),2));
    FG1101_40_B($('#G1101_40_B'));
}

/*G1101_40_E*/
function FG1101_40_E(obj){
    showStr(obj);
    $('#G1101_39_E').val(getNumToString(getStrFloat($('#G1101_40_E').val())+getStrFloat($('#G1101_41_E').val())+getStrFloat($('#G1101_42_E').val())+getStrFloat($('#G1101_43_E').val())+getStrFloat($('#G1101_44_E').val())+getStrFloat($('#G1101_45_E').val()),2));
    FG1101_39_E($('#G1101_39_E'));
    $('#G1101_40_A').val(getNumToString(getStrFloat($('#G1101_40_B').val())+getStrFloat($('#G1101_40_E').val()),2));
    FG1101_40_A($('#G1101_40_A'));
    $('#G1101_40_E').val(getNumToString(getStrFloat($('#G1101_40_F').val())+getStrFloat($('#G1101_40_G').val())+getStrFloat($('#G1101_40_H').val()),2));
}

/*G1101_40_F*/
function FG1101_40_F(obj){
    showStr(obj);
    $('#G1101_39_F').val(getNumToString(getStrFloat($('#G1101_40_F').val())+getStrFloat($('#G1101_41_F').val())+getStrFloat($('#G1101_42_F').val())+getStrFloat($('#G1101_43_F').val())+getStrFloat($('#G1101_44_F').val())+getStrFloat($('#G1101_45_F').val()),2));
    FG1101_39_F($('#G1101_39_F'));
    $('#G1101_40_E').val(getNumToString(getStrFloat($('#G1101_40_F').val())+getStrFloat($('#G1101_40_G').val())+getStrFloat($('#G1101_40_H').val()),2));
    FG1101_40_E($('#G1101_40_E'));
}

/*G1101_40_G*/
function FG1101_40_G(obj){
    showStr(obj);
    $('#G1101_39_G').val(getNumToString(getStrFloat($('#G1101_40_G').val())+getStrFloat($('#G1101_41_G').val())+getStrFloat($('#G1101_42_G').val())+getStrFloat($('#G1101_43_G').val())+getStrFloat($('#G1101_44_G').val())+getStrFloat($('#G1101_45_G').val()),2));
    FG1101_39_G($('#G1101_39_G'));
    $('#G1101_40_E').val(getNumToString(getStrFloat($('#G1101_40_F').val())+getStrFloat($('#G1101_40_G').val())+getStrFloat($('#G1101_40_H').val()),2));
    FG1101_40_E($('#G1101_40_E'));
}

/*G1101_40_H*/
function FG1101_40_H(obj){
    showStr(obj);
    $('#G1101_39_H').val(getNumToString(getStrFloat($('#G1101_40_H').val())+getStrFloat($('#G1101_41_H').val())+getStrFloat($('#G1101_42_H').val())+getStrFloat($('#G1101_43_H').val())+getStrFloat($('#G1101_44_H').val())+getStrFloat($('#G1101_45_H').val()),2));
    FG1101_39_H($('#G1101_39_H'));
    $('#G1101_40_E').val(getNumToString(getStrFloat($('#G1101_40_F').val())+getStrFloat($('#G1101_40_G').val())+getStrFloat($('#G1101_40_H').val()),2));
    FG1101_40_E($('#G1101_40_E'));
}

/*G1101_41_A*/
function FG1101_41_A(obj){
    showStr(obj);
    $('#G1101_39_A').val(getNumToString(getStrFloat($('#G1101_40_A').val())+getStrFloat($('#G1101_41_A').val())+getStrFloat($('#G1101_42_A').val())+getStrFloat($('#G1101_43_A').val())+getStrFloat($('#G1101_44_A').val())+getStrFloat($('#G1101_45_A').val()),2));
    FG1101_39_A($('#G1101_39_A'));
    $('#G1101_41_A').val(getNumToString(getStrFloat($('#G1101_41_B').val())+getStrFloat($('#G1101_41_E').val()),2));
}

/*G1101_41_B*/
function FG1101_41_B(obj){
    showStr(obj);
    $('#G1101_39_B').val(getNumToString(getStrFloat($('#G1101_40_B').val())+getStrFloat($('#G1101_41_B').val())+getStrFloat($('#G1101_42_B').val())+getStrFloat($('#G1101_43_B').val())+getStrFloat($('#G1101_44_B').val())+getStrFloat($('#G1101_45_B').val()),2));
    FG1101_39_B($('#G1101_39_B'));
    $('#G1101_41_A').val(getNumToString(getStrFloat($('#G1101_41_B').val())+getStrFloat($('#G1101_41_E').val()),2));
    FG1101_41_A($('#G1101_41_A'));
    $('#G1101_41_B').val(getNumToString(getStrFloat($('#G1101_41_C').val())+getStrFloat($('#G1101_41_D').val()),2));
}

/*G1101_41_C*/
function FG1101_41_C(obj){
    showStr(obj);
    $('#G1101_39_C').val(getNumToString(getStrFloat($('#G1101_40_C').val())+getStrFloat($('#G1101_41_C').val())+getStrFloat($('#G1101_42_C').val())+getStrFloat($('#G1101_43_C').val())+getStrFloat($('#G1101_44_C').val())+getStrFloat($('#G1101_45_C').val()),2));
    FG1101_39_C($('#G1101_39_C'));
    $('#G1101_41_B').val(getNumToString(getStrFloat($('#G1101_41_C').val())+getStrFloat($('#G1101_41_D').val()),2));
    FG1101_41_B($('#G1101_41_B'));
}

/*G1101_41_D*/
function FG1101_41_D(obj){
    showStr(obj);
    $('#G1101_39_D').val(getNumToString(getStrFloat($('#G1101_40_D').val())+getStrFloat($('#G1101_41_D').val())+getStrFloat($('#G1101_42_D').val())+getStrFloat($('#G1101_43_D').val())+getStrFloat($('#G1101_44_D').val())+getStrFloat($('#G1101_45_D').val()),2));
    FG1101_39_D($('#G1101_39_D'));
    $('#G1101_41_B').val(getNumToString(getStrFloat($('#G1101_41_C').val())+getStrFloat($('#G1101_41_D').val()),2));
    FG1101_41_B($('#G1101_41_B'));
}

/*G1101_41_E*/
function FG1101_41_E(obj){
    showStr(obj);
    $('#G1101_39_E').val(getNumToString(getStrFloat($('#G1101_40_E').val())+getStrFloat($('#G1101_41_E').val())+getStrFloat($('#G1101_42_E').val())+getStrFloat($('#G1101_43_E').val())+getStrFloat($('#G1101_44_E').val())+getStrFloat($('#G1101_45_E').val()),2));
    FG1101_39_E($('#G1101_39_E'));
    $('#G1101_41_A').val(getNumToString(getStrFloat($('#G1101_41_B').val())+getStrFloat($('#G1101_41_E').val()),2));
    FG1101_41_A($('#G1101_41_A'));
    $('#G1101_41_E').val(getNumToString(getStrFloat($('#G1101_41_F').val())+getStrFloat($('#G1101_41_G').val())+getStrFloat($('#G1101_41_H').val()),2));
}

/*G1101_41_F*/
function FG1101_41_F(obj){
    showStr(obj);
    $('#G1101_39_F').val(getNumToString(getStrFloat($('#G1101_40_F').val())+getStrFloat($('#G1101_41_F').val())+getStrFloat($('#G1101_42_F').val())+getStrFloat($('#G1101_43_F').val())+getStrFloat($('#G1101_44_F').val())+getStrFloat($('#G1101_45_F').val()),2));
    FG1101_39_F($('#G1101_39_F'));
    $('#G1101_41_E').val(getNumToString(getStrFloat($('#G1101_41_F').val())+getStrFloat($('#G1101_41_G').val())+getStrFloat($('#G1101_41_H').val()),2));
    FG1101_41_E($('#G1101_41_E'));
}

/*G1101_41_G*/
function FG1101_41_G(obj){
    showStr(obj);
    $('#G1101_39_G').val(getNumToString(getStrFloat($('#G1101_40_G').val())+getStrFloat($('#G1101_41_G').val())+getStrFloat($('#G1101_42_G').val())+getStrFloat($('#G1101_43_G').val())+getStrFloat($('#G1101_44_G').val())+getStrFloat($('#G1101_45_G').val()),2));
    FG1101_39_G($('#G1101_39_G'));
    $('#G1101_41_E').val(getNumToString(getStrFloat($('#G1101_41_F').val())+getStrFloat($('#G1101_41_G').val())+getStrFloat($('#G1101_41_H').val()),2));
    FG1101_41_E($('#G1101_41_E'));
}

/*G1101_41_H*/
function FG1101_41_H(obj){
    showStr(obj);
    $('#G1101_39_H').val(getNumToString(getStrFloat($('#G1101_40_H').val())+getStrFloat($('#G1101_41_H').val())+getStrFloat($('#G1101_42_H').val())+getStrFloat($('#G1101_43_H').val())+getStrFloat($('#G1101_44_H').val())+getStrFloat($('#G1101_45_H').val()),2));
    FG1101_39_H($('#G1101_39_H'));
    $('#G1101_41_E').val(getNumToString(getStrFloat($('#G1101_41_F').val())+getStrFloat($('#G1101_41_G').val())+getStrFloat($('#G1101_41_H').val()),2));
    FG1101_41_E($('#G1101_41_E'));
}

/*G1101_42_A*/
function FG1101_42_A(obj){
    showStr(obj);
    $('#G1101_39_A').val(getNumToString(getStrFloat($('#G1101_40_A').val())+getStrFloat($('#G1101_41_A').val())+getStrFloat($('#G1101_42_A').val())+getStrFloat($('#G1101_43_A').val())+getStrFloat($('#G1101_44_A').val())+getStrFloat($('#G1101_45_A').val()),2));
    FG1101_39_A($('#G1101_39_A'));
    $('#G1101_42_A').val(getNumToString(getStrFloat($('#G1101_42_B').val())+getStrFloat($('#G1101_42_E').val()),2));
}

/*G1101_42_B*/
function FG1101_42_B(obj){
    showStr(obj);
    $('#G1101_39_B').val(getNumToString(getStrFloat($('#G1101_40_B').val())+getStrFloat($('#G1101_41_B').val())+getStrFloat($('#G1101_42_B').val())+getStrFloat($('#G1101_43_B').val())+getStrFloat($('#G1101_44_B').val())+getStrFloat($('#G1101_45_B').val()),2));
    FG1101_39_B($('#G1101_39_B'));
    $('#G1101_42_A').val(getNumToString(getStrFloat($('#G1101_42_B').val())+getStrFloat($('#G1101_42_E').val()),2));
    FG1101_42_A($('#G1101_42_A'));
    $('#G1101_42_B').val(getNumToString(getStrFloat($('#G1101_42_C').val())+getStrFloat($('#G1101_42_D').val()),2));
}

/*G1101_42_C*/
function FG1101_42_C(obj){
    showStr(obj);
    $('#G1101_39_C').val(getNumToString(getStrFloat($('#G1101_40_C').val())+getStrFloat($('#G1101_41_C').val())+getStrFloat($('#G1101_42_C').val())+getStrFloat($('#G1101_43_C').val())+getStrFloat($('#G1101_44_C').val())+getStrFloat($('#G1101_45_C').val()),2));
    FG1101_39_C($('#G1101_39_C'));
    $('#G1101_42_B').val(getNumToString(getStrFloat($('#G1101_42_C').val())+getStrFloat($('#G1101_42_D').val()),2));
    FG1101_42_B($('#G1101_42_B'));
}

/*G1101_42_D*/
function FG1101_42_D(obj){
    showStr(obj);
    $('#G1101_39_D').val(getNumToString(getStrFloat($('#G1101_40_D').val())+getStrFloat($('#G1101_41_D').val())+getStrFloat($('#G1101_42_D').val())+getStrFloat($('#G1101_43_D').val())+getStrFloat($('#G1101_44_D').val())+getStrFloat($('#G1101_45_D').val()),2));
    FG1101_39_D($('#G1101_39_D'));
    $('#G1101_42_B').val(getNumToString(getStrFloat($('#G1101_42_C').val())+getStrFloat($('#G1101_42_D').val()),2));
    FG1101_42_B($('#G1101_42_B'));
}

/*G1101_42_E*/
function FG1101_42_E(obj){
    showStr(obj);
    $('#G1101_39_E').val(getNumToString(getStrFloat($('#G1101_40_E').val())+getStrFloat($('#G1101_41_E').val())+getStrFloat($('#G1101_42_E').val())+getStrFloat($('#G1101_43_E').val())+getStrFloat($('#G1101_44_E').val())+getStrFloat($('#G1101_45_E').val()),2));
    FG1101_39_E($('#G1101_39_E'));
    $('#G1101_42_A').val(getNumToString(getStrFloat($('#G1101_42_B').val())+getStrFloat($('#G1101_42_E').val()),2));
    FG1101_42_A($('#G1101_42_A'));
    $('#G1101_42_E').val(getNumToString(getStrFloat($('#G1101_42_F').val())+getStrFloat($('#G1101_42_G').val())+getStrFloat($('#G1101_42_H').val()),2));
}

/*G1101_42_F*/
function FG1101_42_F(obj){
    showStr(obj);
    $('#G1101_39_F').val(getNumToString(getStrFloat($('#G1101_40_F').val())+getStrFloat($('#G1101_41_F').val())+getStrFloat($('#G1101_42_F').val())+getStrFloat($('#G1101_43_F').val())+getStrFloat($('#G1101_44_F').val())+getStrFloat($('#G1101_45_F').val()),2));
    FG1101_39_F($('#G1101_39_F'));
    $('#G1101_42_E').val(getNumToString(getStrFloat($('#G1101_42_F').val())+getStrFloat($('#G1101_42_G').val())+getStrFloat($('#G1101_42_H').val()),2));
    FG1101_42_E($('#G1101_42_E'));
}

/*G1101_42_G*/
function FG1101_42_G(obj){
    showStr(obj);
    $('#G1101_39_G').val(getNumToString(getStrFloat($('#G1101_40_G').val())+getStrFloat($('#G1101_41_G').val())+getStrFloat($('#G1101_42_G').val())+getStrFloat($('#G1101_43_G').val())+getStrFloat($('#G1101_44_G').val())+getStrFloat($('#G1101_45_G').val()),2));
    FG1101_39_G($('#G1101_39_G'));
    $('#G1101_42_E').val(getNumToString(getStrFloat($('#G1101_42_F').val())+getStrFloat($('#G1101_42_G').val())+getStrFloat($('#G1101_42_H').val()),2));
    FG1101_42_E($('#G1101_42_E'));
}

/*G1101_42_H*/
function FG1101_42_H(obj){
    showStr(obj);
    $('#G1101_39_H').val(getNumToString(getStrFloat($('#G1101_40_H').val())+getStrFloat($('#G1101_41_H').val())+getStrFloat($('#G1101_42_H').val())+getStrFloat($('#G1101_43_H').val())+getStrFloat($('#G1101_44_H').val())+getStrFloat($('#G1101_45_H').val()),2));
    FG1101_39_H($('#G1101_39_H'));
    $('#G1101_42_E').val(getNumToString(getStrFloat($('#G1101_42_F').val())+getStrFloat($('#G1101_42_G').val())+getStrFloat($('#G1101_42_H').val()),2));
    FG1101_42_E($('#G1101_42_E'));
}

/*G1101_43_A*/
function FG1101_43_A(obj){
    showStr(obj);
    $('#G1101_39_A').val(getNumToString(getStrFloat($('#G1101_40_A').val())+getStrFloat($('#G1101_41_A').val())+getStrFloat($('#G1101_42_A').val())+getStrFloat($('#G1101_43_A').val())+getStrFloat($('#G1101_44_A').val())+getStrFloat($('#G1101_45_A').val()),2));
    FG1101_39_A($('#G1101_39_A'));
    $('#G1101_43_A').val(getNumToString(getStrFloat($('#G1101_43_B').val())+getStrFloat($('#G1101_43_E').val()),2));
}

/*G1101_43_B*/
function FG1101_43_B(obj){
    showStr(obj);
    $('#G1101_39_B').val(getNumToString(getStrFloat($('#G1101_40_B').val())+getStrFloat($('#G1101_41_B').val())+getStrFloat($('#G1101_42_B').val())+getStrFloat($('#G1101_43_B').val())+getStrFloat($('#G1101_44_B').val())+getStrFloat($('#G1101_45_B').val()),2));
    FG1101_39_B($('#G1101_39_B'));
    $('#G1101_43_A').val(getNumToString(getStrFloat($('#G1101_43_B').val())+getStrFloat($('#G1101_43_E').val()),2));
    FG1101_43_A($('#G1101_43_A'));
    $('#G1101_43_B').val(getNumToString(getStrFloat($('#G1101_43_C').val())+getStrFloat($('#G1101_43_D').val()),2));
}

/*G1101_43_C*/
function FG1101_43_C(obj){
    showStr(obj);
    $('#G1101_39_C').val(getNumToString(getStrFloat($('#G1101_40_C').val())+getStrFloat($('#G1101_41_C').val())+getStrFloat($('#G1101_42_C').val())+getStrFloat($('#G1101_43_C').val())+getStrFloat($('#G1101_44_C').val())+getStrFloat($('#G1101_45_C').val()),2));
    FG1101_39_C($('#G1101_39_C'));
    $('#G1101_43_B').val(getNumToString(getStrFloat($('#G1101_43_C').val())+getStrFloat($('#G1101_43_D').val()),2));
    FG1101_43_B($('#G1101_43_B'));
}

/*G1101_43_D*/
function FG1101_43_D(obj){
    showStr(obj);
    $('#G1101_39_D').val(getNumToString(getStrFloat($('#G1101_40_D').val())+getStrFloat($('#G1101_41_D').val())+getStrFloat($('#G1101_42_D').val())+getStrFloat($('#G1101_43_D').val())+getStrFloat($('#G1101_44_D').val())+getStrFloat($('#G1101_45_D').val()),2));
    FG1101_39_D($('#G1101_39_D'));
    $('#G1101_43_B').val(getNumToString(getStrFloat($('#G1101_43_C').val())+getStrFloat($('#G1101_43_D').val()),2));
    FG1101_43_B($('#G1101_43_B'));
}

/*G1101_43_E*/
function FG1101_43_E(obj){
    showStr(obj);
    $('#G1101_39_E').val(getNumToString(getStrFloat($('#G1101_40_E').val())+getStrFloat($('#G1101_41_E').val())+getStrFloat($('#G1101_42_E').val())+getStrFloat($('#G1101_43_E').val())+getStrFloat($('#G1101_44_E').val())+getStrFloat($('#G1101_45_E').val()),2));
    FG1101_39_E($('#G1101_39_E'));
    $('#G1101_43_A').val(getNumToString(getStrFloat($('#G1101_43_B').val())+getStrFloat($('#G1101_43_E').val()),2));
    FG1101_43_A($('#G1101_43_A'));
    $('#G1101_43_E').val(getNumToString(getStrFloat($('#G1101_43_F').val())+getStrFloat($('#G1101_43_G').val())+getStrFloat($('#G1101_43_H').val()),2));
}

/*G1101_43_F*/
function FG1101_43_F(obj){
    showStr(obj);
    $('#G1101_39_F').val(getNumToString(getStrFloat($('#G1101_40_F').val())+getStrFloat($('#G1101_41_F').val())+getStrFloat($('#G1101_42_F').val())+getStrFloat($('#G1101_43_F').val())+getStrFloat($('#G1101_44_F').val())+getStrFloat($('#G1101_45_F').val()),2));
    FG1101_39_F($('#G1101_39_F'));
    $('#G1101_43_E').val(getNumToString(getStrFloat($('#G1101_43_F').val())+getStrFloat($('#G1101_43_G').val())+getStrFloat($('#G1101_43_H').val()),2));
    FG1101_43_E($('#G1101_43_E'));
}

/*G1101_43_G*/
function FG1101_43_G(obj){
    showStr(obj);
    $('#G1101_39_G').val(getNumToString(getStrFloat($('#G1101_40_G').val())+getStrFloat($('#G1101_41_G').val())+getStrFloat($('#G1101_42_G').val())+getStrFloat($('#G1101_43_G').val())+getStrFloat($('#G1101_44_G').val())+getStrFloat($('#G1101_45_G').val()),2));
    FG1101_39_G($('#G1101_39_G'));
    $('#G1101_43_E').val(getNumToString(getStrFloat($('#G1101_43_F').val())+getStrFloat($('#G1101_43_G').val())+getStrFloat($('#G1101_43_H').val()),2));
    FG1101_43_E($('#G1101_43_E'));
}

/*G1101_43_H*/
function FG1101_43_H(obj){
    showStr(obj);
    $('#G1101_39_H').val(getNumToString(getStrFloat($('#G1101_40_H').val())+getStrFloat($('#G1101_41_H').val())+getStrFloat($('#G1101_42_H').val())+getStrFloat($('#G1101_43_H').val())+getStrFloat($('#G1101_44_H').val())+getStrFloat($('#G1101_45_H').val()),2));
    FG1101_39_H($('#G1101_39_H'));
    $('#G1101_43_E').val(getNumToString(getStrFloat($('#G1101_43_F').val())+getStrFloat($('#G1101_43_G').val())+getStrFloat($('#G1101_43_H').val()),2));
    FG1101_43_E($('#G1101_43_E'));
}

/*G1101_44_A*/
function FG1101_44_A(obj){
    showStr(obj);
    $('#G1101_39_A').val(getNumToString(getStrFloat($('#G1101_40_A').val())+getStrFloat($('#G1101_41_A').val())+getStrFloat($('#G1101_42_A').val())+getStrFloat($('#G1101_43_A').val())+getStrFloat($('#G1101_44_A').val())+getStrFloat($('#G1101_45_A').val()),2));
    FG1101_39_A($('#G1101_39_A'));
    $('#G1101_44_A').val(getNumToString(getStrFloat($('#G1101_44_B').val())+getStrFloat($('#G1101_44_E').val()),2));
}

/*G1101_44_B*/
function FG1101_44_B(obj){
    showStr(obj);
    $('#G1101_39_B').val(getNumToString(getStrFloat($('#G1101_40_B').val())+getStrFloat($('#G1101_41_B').val())+getStrFloat($('#G1101_42_B').val())+getStrFloat($('#G1101_43_B').val())+getStrFloat($('#G1101_44_B').val())+getStrFloat($('#G1101_45_B').val()),2));
    FG1101_39_B($('#G1101_39_B'));
    $('#G1101_44_A').val(getNumToString(getStrFloat($('#G1101_44_B').val())+getStrFloat($('#G1101_44_E').val()),2));
    FG1101_44_A($('#G1101_44_A'));
    $('#G1101_44_B').val(getNumToString(getStrFloat($('#G1101_44_C').val())+getStrFloat($('#G1101_44_D').val()),2));
}

/*G1101_44_C*/
function FG1101_44_C(obj){
    showStr(obj);
    $('#G1101_39_C').val(getNumToString(getStrFloat($('#G1101_40_C').val())+getStrFloat($('#G1101_41_C').val())+getStrFloat($('#G1101_42_C').val())+getStrFloat($('#G1101_43_C').val())+getStrFloat($('#G1101_44_C').val())+getStrFloat($('#G1101_45_C').val()),2));
    FG1101_39_C($('#G1101_39_C'));
    $('#G1101_44_B').val(getNumToString(getStrFloat($('#G1101_44_C').val())+getStrFloat($('#G1101_44_D').val()),2));
    FG1101_44_B($('#G1101_44_B'));
}

/*G1101_44_D*/
function FG1101_44_D(obj){
    showStr(obj);
    $('#G1101_39_D').val(getNumToString(getStrFloat($('#G1101_40_D').val())+getStrFloat($('#G1101_41_D').val())+getStrFloat($('#G1101_42_D').val())+getStrFloat($('#G1101_43_D').val())+getStrFloat($('#G1101_44_D').val())+getStrFloat($('#G1101_45_D').val()),2));
    FG1101_39_D($('#G1101_39_D'));
    $('#G1101_44_B').val(getNumToString(getStrFloat($('#G1101_44_C').val())+getStrFloat($('#G1101_44_D').val()),2));
    FG1101_44_B($('#G1101_44_B'));
}

/*G1101_44_E*/
function FG1101_44_E(obj){
    showStr(obj);
    $('#G1101_39_E').val(getNumToString(getStrFloat($('#G1101_40_E').val())+getStrFloat($('#G1101_41_E').val())+getStrFloat($('#G1101_42_E').val())+getStrFloat($('#G1101_43_E').val())+getStrFloat($('#G1101_44_E').val())+getStrFloat($('#G1101_45_E').val()),2));
    FG1101_39_E($('#G1101_39_E'));
    $('#G1101_44_A').val(getNumToString(getStrFloat($('#G1101_44_B').val())+getStrFloat($('#G1101_44_E').val()),2));
    FG1101_44_A($('#G1101_44_A'));
    $('#G1101_44_E').val(getNumToString(getStrFloat($('#G1101_44_F').val())+getStrFloat($('#G1101_44_G').val())+getStrFloat($('#G1101_44_H').val()),2));
}

/*G1101_44_F*/
function FG1101_44_F(obj){
    showStr(obj);
    $('#G1101_39_F').val(getNumToString(getStrFloat($('#G1101_40_F').val())+getStrFloat($('#G1101_41_F').val())+getStrFloat($('#G1101_42_F').val())+getStrFloat($('#G1101_43_F').val())+getStrFloat($('#G1101_44_F').val())+getStrFloat($('#G1101_45_F').val()),2));
    FG1101_39_F($('#G1101_39_F'));
    $('#G1101_44_E').val(getNumToString(getStrFloat($('#G1101_44_F').val())+getStrFloat($('#G1101_44_G').val())+getStrFloat($('#G1101_44_H').val()),2));
    FG1101_44_E($('#G1101_44_E'));
}

/*G1101_44_G*/
function FG1101_44_G(obj){
    showStr(obj);
    $('#G1101_39_G').val(getNumToString(getStrFloat($('#G1101_40_G').val())+getStrFloat($('#G1101_41_G').val())+getStrFloat($('#G1101_42_G').val())+getStrFloat($('#G1101_43_G').val())+getStrFloat($('#G1101_44_G').val())+getStrFloat($('#G1101_45_G').val()),2));
    FG1101_39_G($('#G1101_39_G'));
    $('#G1101_44_E').val(getNumToString(getStrFloat($('#G1101_44_F').val())+getStrFloat($('#G1101_44_G').val())+getStrFloat($('#G1101_44_H').val()),2));
    FG1101_44_E($('#G1101_44_E'));
}

/*G1101_44_H*/
function FG1101_44_H(obj){
    showStr(obj);
    $('#G1101_39_H').val(getNumToString(getStrFloat($('#G1101_40_H').val())+getStrFloat($('#G1101_41_H').val())+getStrFloat($('#G1101_42_H').val())+getStrFloat($('#G1101_43_H').val())+getStrFloat($('#G1101_44_H').val())+getStrFloat($('#G1101_45_H').val()),2));
    FG1101_39_H($('#G1101_39_H'));
    $('#G1101_44_E').val(getNumToString(getStrFloat($('#G1101_44_F').val())+getStrFloat($('#G1101_44_G').val())+getStrFloat($('#G1101_44_H').val()),2));
    FG1101_44_E($('#G1101_44_E'));
}

/*G1101_45_A*/
function FG1101_45_A(obj){
    showStr(obj);
    $('#G1101_39_A').val(getNumToString(getStrFloat($('#G1101_40_A').val())+getStrFloat($('#G1101_41_A').val())+getStrFloat($('#G1101_42_A').val())+getStrFloat($('#G1101_43_A').val())+getStrFloat($('#G1101_44_A').val())+getStrFloat($('#G1101_45_A').val()),2));
    FG1101_39_A($('#G1101_39_A'));
    $('#G1101_45_A').val(getNumToString(getStrFloat($('#G1101_45_B').val())+getStrFloat($('#G1101_45_E').val()),2));
}

/*G1101_45_B*/
function FG1101_45_B(obj){
    showStr(obj);
    $('#G1101_39_B').val(getNumToString(getStrFloat($('#G1101_40_B').val())+getStrFloat($('#G1101_41_B').val())+getStrFloat($('#G1101_42_B').val())+getStrFloat($('#G1101_43_B').val())+getStrFloat($('#G1101_44_B').val())+getStrFloat($('#G1101_45_B').val()),2));
    FG1101_39_B($('#G1101_39_B'));
    $('#G1101_45_A').val(getNumToString(getStrFloat($('#G1101_45_B').val())+getStrFloat($('#G1101_45_E').val()),2));
    FG1101_45_A($('#G1101_45_A'));
    $('#G1101_45_B').val(getNumToString(getStrFloat($('#G1101_45_C').val())+getStrFloat($('#G1101_45_D').val()),2));
}

/*G1101_45_C*/
function FG1101_45_C(obj){
    showStr(obj);
    $('#G1101_39_C').val(getNumToString(getStrFloat($('#G1101_40_C').val())+getStrFloat($('#G1101_41_C').val())+getStrFloat($('#G1101_42_C').val())+getStrFloat($('#G1101_43_C').val())+getStrFloat($('#G1101_44_C').val())+getStrFloat($('#G1101_45_C').val()),2));
    FG1101_39_C($('#G1101_39_C'));
    $('#G1101_45_B').val(getNumToString(getStrFloat($('#G1101_45_C').val())+getStrFloat($('#G1101_45_D').val()),2));
    FG1101_45_B($('#G1101_45_B'));
}

/*G1101_45_D*/
function FG1101_45_D(obj){
    showStr(obj);
    $('#G1101_39_D').val(getNumToString(getStrFloat($('#G1101_40_D').val())+getStrFloat($('#G1101_41_D').val())+getStrFloat($('#G1101_42_D').val())+getStrFloat($('#G1101_43_D').val())+getStrFloat($('#G1101_44_D').val())+getStrFloat($('#G1101_45_D').val()),2));
    FG1101_39_D($('#G1101_39_D'));
    $('#G1101_45_B').val(getNumToString(getStrFloat($('#G1101_45_C').val())+getStrFloat($('#G1101_45_D').val()),2));
    FG1101_45_B($('#G1101_45_B'));
}

/*G1101_45_E*/
function FG1101_45_E(obj){
    showStr(obj);
    $('#G1101_39_E').val(getNumToString(getStrFloat($('#G1101_40_E').val())+getStrFloat($('#G1101_41_E').val())+getStrFloat($('#G1101_42_E').val())+getStrFloat($('#G1101_43_E').val())+getStrFloat($('#G1101_44_E').val())+getStrFloat($('#G1101_45_E').val()),2));
    FG1101_39_E($('#G1101_39_E'));
    $('#G1101_45_A').val(getNumToString(getStrFloat($('#G1101_45_B').val())+getStrFloat($('#G1101_45_E').val()),2));
    FG1101_45_A($('#G1101_45_A'));
    $('#G1101_45_E').val(getNumToString(getStrFloat($('#G1101_45_F').val())+getStrFloat($('#G1101_45_G').val())+getStrFloat($('#G1101_45_H').val()),2));
}

/*G1101_45_F*/
function FG1101_45_F(obj){
    showStr(obj);
    $('#G1101_39_F').val(getNumToString(getStrFloat($('#G1101_40_F').val())+getStrFloat($('#G1101_41_F').val())+getStrFloat($('#G1101_42_F').val())+getStrFloat($('#G1101_43_F').val())+getStrFloat($('#G1101_44_F').val())+getStrFloat($('#G1101_45_F').val()),2));
    FG1101_39_F($('#G1101_39_F'));
    $('#G1101_45_E').val(getNumToString(getStrFloat($('#G1101_45_F').val())+getStrFloat($('#G1101_45_G').val())+getStrFloat($('#G1101_45_H').val()),2));
    FG1101_45_E($('#G1101_45_E'));
}

/*G1101_45_G*/
function FG1101_45_G(obj){
    showStr(obj);
    $('#G1101_39_G').val(getNumToString(getStrFloat($('#G1101_40_G').val())+getStrFloat($('#G1101_41_G').val())+getStrFloat($('#G1101_42_G').val())+getStrFloat($('#G1101_43_G').val())+getStrFloat($('#G1101_44_G').val())+getStrFloat($('#G1101_45_G').val()),2));
    FG1101_39_G($('#G1101_39_G'));
    $('#G1101_45_E').val(getNumToString(getStrFloat($('#G1101_45_F').val())+getStrFloat($('#G1101_45_G').val())+getStrFloat($('#G1101_45_H').val()),2));
    FG1101_45_E($('#G1101_45_E'));
}

/*G1101_45_H*/
function FG1101_45_H(obj){
    showStr(obj);
    $('#G1101_39_H').val(getNumToString(getStrFloat($('#G1101_40_H').val())+getStrFloat($('#G1101_41_H').val())+getStrFloat($('#G1101_42_H').val())+getStrFloat($('#G1101_43_H').val())+getStrFloat($('#G1101_44_H').val())+getStrFloat($('#G1101_45_H').val()),2));
    FG1101_39_H($('#G1101_39_H'));
    $('#G1101_45_E').val(getNumToString(getStrFloat($('#G1101_45_F').val())+getStrFloat($('#G1101_45_G').val())+getStrFloat($('#G1101_45_H').val()),2));
    FG1101_45_E($('#G1101_45_E'));
}

/*G1101_46_A*/
function FG1101_46_A(obj){
    showStr(obj);
}

/*G1101_46_B*/
function FG1101_46_B(obj){
    showStr(obj);
}

/*G1101_46_C*/
function FG1101_46_C(obj){
    showStr(obj);
}

/*G1101_46_D*/
function FG1101_46_D(obj){
    showStr(obj);
}

/*G1101_46_E*/
function FG1101_46_E(obj){
    showStr(obj);
}

/*G1101_46_F*/
function FG1101_46_F(obj){
    showStr(obj);
}

/*G1101_46_G*/
function FG1101_46_G(obj){
    showStr(obj);
}

/*G1101_46_H*/
function FG1101_46_H(obj){
    showStr(obj);
}

/*G1101_47_A*/
function FG1101_47_A(obj){
    showStr(obj);
}

/*G1101_47_B*/
function FG1101_47_B(obj){
    showStr(obj);
}

/*G1101_47_C*/
function FG1101_47_C(obj){
    showStr(obj);
}

/*G1101_47_D*/
function FG1101_47_D(obj){
    showStr(obj);
}

/*G1101_47_E*/
function FG1101_47_E(obj){
    showStr(obj);
    $('#G1101_47_E').val(getNumToString(getStrFloat($('#G1101_47_F').val())+getStrFloat($('#G1101_47_G').val())+getStrFloat($('#G1101_47_H').val()),2));
    $('#G1101_51_E').val(getNumToString(getStrFloat($('#G1101_47_E').val())+getStrFloat($('#G1101_48_E').val())-getStrFloat($('#G1101_49_E').val())-getStrFloat($('#G1101_50_E').val()),2));
    FG1101_51_E($('#G1101_51_E'));
}

/*G1101_47_F*/
function FG1101_47_F(obj){
    showStr(obj);
    $('#G1101_47_E').val(getNumToString(getStrFloat($('#G1101_47_F').val())+getStrFloat($('#G1101_47_G').val())+getStrFloat($('#G1101_47_H').val()),2));
    FG1101_47_E($('#G1101_47_E'));
}

/*G1101_47_G*/
function FG1101_47_G(obj){
    showStr(obj);
    $('#G1101_47_E').val(getNumToString(getStrFloat($('#G1101_47_F').val())+getStrFloat($('#G1101_47_G').val())+getStrFloat($('#G1101_47_H').val()),2));
    FG1101_47_E($('#G1101_47_E'));
}

/*G1101_47_H*/
function FG1101_47_H(obj){
    showStr(obj);
    $('#G1101_47_E').val(getNumToString(getStrFloat($('#G1101_47_F').val())+getStrFloat($('#G1101_47_G').val())+getStrFloat($('#G1101_47_H').val()),2));
    FG1101_47_E($('#G1101_47_E'));
}

/*G1101_48_A*/
function FG1101_48_A(obj){
    showStr(obj);
}

/*G1101_48_B*/
function FG1101_48_B(obj){
    showStr(obj);
}

/*G1101_48_C*/
function FG1101_48_C(obj){
    showStr(obj);
}

/*G1101_48_D*/
function FG1101_48_D(obj){
    showStr(obj);
}

/*G1101_48_E*/
function FG1101_48_E(obj){
    showStr(obj);
    $('#G1101_48_E').val(getNumToString(getStrFloat($('#G1101_48_F').val())+getStrFloat($('#G1101_48_G').val())+getStrFloat($('#G1101_48_H').val()),2));
    $('#G1101_51_E').val(getNumToString(getStrFloat($('#G1101_47_E').val())+getStrFloat($('#G1101_48_E').val())-getStrFloat($('#G1101_49_E').val())-getStrFloat($('#G1101_50_E').val()),2));
    FG1101_51_E($('#G1101_51_E'));
}

/*G1101_48_F*/
function FG1101_48_F(obj){
    showStr(obj);
    $('#G1101_48_E').val(getNumToString(getStrFloat($('#G1101_48_F').val())+getStrFloat($('#G1101_48_G').val())+getStrFloat($('#G1101_48_H').val()),2));
    FG1101_48_E($('#G1101_48_E'));
}

/*G1101_48_G*/
function FG1101_48_G(obj){
    showStr(obj);
    $('#G1101_48_E').val(getNumToString(getStrFloat($('#G1101_48_F').val())+getStrFloat($('#G1101_48_G').val())+getStrFloat($('#G1101_48_H').val()),2));
    FG1101_48_E($('#G1101_48_E'));
}

/*G1101_48_H*/
function FG1101_48_H(obj){
    showStr(obj);
    $('#G1101_48_E').val(getNumToString(getStrFloat($('#G1101_48_F').val())+getStrFloat($('#G1101_48_G').val())+getStrFloat($('#G1101_48_H').val()),2));
    FG1101_48_E($('#G1101_48_E'));
}

/*G1101_49_A*/
function FG1101_49_A(obj){
    showStr(obj);
}

/*G1101_49_B*/
function FG1101_49_B(obj){
    showStr(obj);
}

/*G1101_49_C*/
function FG1101_49_C(obj){
    showStr(obj);
}

/*G1101_49_D*/
function FG1101_49_D(obj){
    showStr(obj);
}

/*G1101_49_E*/
function FG1101_49_E(obj){
    showStr(obj);
    $('#G1101_49_E').val(getNumToString(getStrFloat($('#G1101_49_F').val())+getStrFloat($('#G1101_49_G').val())+getStrFloat($('#G1101_49_H').val()),2));
    $('#G1101_51_E').val(getNumToString(getStrFloat($('#G1101_47_E').val())+getStrFloat($('#G1101_48_E').val())-getStrFloat($('#G1101_49_E').val())-getStrFloat($('#G1101_50_E').val()),2));
    FG1101_51_E($('#G1101_51_E'));
}

/*G1101_49_F*/
function FG1101_49_F(obj){
    showStr(obj);
    $('#G1101_49_E').val(getNumToString(getStrFloat($('#G1101_49_F').val())+getStrFloat($('#G1101_49_G').val())+getStrFloat($('#G1101_49_H').val()),2));
    FG1101_49_E($('#G1101_49_E'));
}

/*G1101_49_G*/
function FG1101_49_G(obj){
    showStr(obj);
    $('#G1101_49_E').val(getNumToString(getStrFloat($('#G1101_49_F').val())+getStrFloat($('#G1101_49_G').val())+getStrFloat($('#G1101_49_H').val()),2));
    FG1101_49_E($('#G1101_49_E'));
}

/*G1101_49_H*/
function FG1101_49_H(obj){
    showStr(obj);
    $('#G1101_49_E').val(getNumToString(getStrFloat($('#G1101_49_F').val())+getStrFloat($('#G1101_49_G').val())+getStrFloat($('#G1101_49_H').val()),2));
    FG1101_49_E($('#G1101_49_E'));
}

/*G1101_50_A*/
function FG1101_50_A(obj){
    showStr(obj);
}

/*G1101_50_B*/
function FG1101_50_B(obj){
    showStr(obj);
}

/*G1101_50_C*/
function FG1101_50_C(obj){
    showStr(obj);
}

/*G1101_50_D*/
function FG1101_50_D(obj){
    showStr(obj);
}

/*G1101_50_E*/
function FG1101_50_E(obj){
    showStr(obj);
    $('#G1101_50_E').val(getNumToString(getStrFloat($('#G1101_50_F').val())+getStrFloat($('#G1101_50_G').val())+getStrFloat($('#G1101_50_H').val()),2));
    $('#G1101_51_E').val(getNumToString(getStrFloat($('#G1101_47_E').val())+getStrFloat($('#G1101_48_E').val())-getStrFloat($('#G1101_49_E').val())-getStrFloat($('#G1101_50_E').val()),2));
    FG1101_51_E($('#G1101_51_E'));
}

/*G1101_50_F*/
function FG1101_50_F(obj){
    showStr(obj);
    $('#G1101_50_E').val(getNumToString(getStrFloat($('#G1101_50_F').val())+getStrFloat($('#G1101_50_G').val())+getStrFloat($('#G1101_50_H').val()),2));
    FG1101_50_E($('#G1101_50_E'));
}

/*G1101_50_G*/
function FG1101_50_G(obj){
    showStr(obj);
    $('#G1101_50_E').val(getNumToString(getStrFloat($('#G1101_50_F').val())+getStrFloat($('#G1101_50_G').val())+getStrFloat($('#G1101_50_H').val()),2));
    FG1101_50_E($('#G1101_50_E'));
}

/*G1101_50_H*/
function FG1101_50_H(obj){
    showStr(obj);
    $('#G1101_50_E').val(getNumToString(getStrFloat($('#G1101_50_F').val())+getStrFloat($('#G1101_50_G').val())+getStrFloat($('#G1101_50_H').val()),2));
    FG1101_50_E($('#G1101_50_E'));
}

/*G1101_51_A*/
function FG1101_51_A(obj){
    showStr(obj);
}

/*G1101_51_B*/
function FG1101_51_B(obj){
    showStr(obj);
}

/*G1101_51_C*/
function FG1101_51_C(obj){
    showStr(obj);
}

/*G1101_51_D*/
function FG1101_51_D(obj){
    showStr(obj);
}

/*G1101_51_E*/
function FG1101_51_E(obj){
    showStr(obj);
    $('#G1101_51_E').val(getNumToString(getStrFloat($('#G1101_47_E').val())+getStrFloat($('#G1101_48_E').val())-getStrFloat($('#G1101_49_E').val())-getStrFloat($('#G1101_50_E').val()),2));
}

/*G1101_51_F*/
function FG1101_51_F(obj){
    showStr(obj);
}

/*G1101_51_G*/
function FG1101_51_G(obj){
    showStr(obj);
}

/*G1101_51_H*/
function FG1101_51_H(obj){
    showStr(obj);
}

/*G1101_52_A*/
function FG1101_52_A(obj){
    showStr(obj);
}

/*G1101_52_B*/
function FG1101_52_B(obj){
    showStr(obj);
}

/*G1101_52_C*/
function FG1101_52_C(obj){
    showStr(obj);
}

/*G1101_52_D*/
function FG1101_52_D(obj){
    showStr(obj);
}

/*G1101_52_E*/
function FG1101_52_E(obj){
    showStr(obj);
    $('#G1101_52_E').val(getNumToString(getStrFloat($('#G1101_52_F').val())+getStrFloat($('#G1101_52_G').val())+getStrFloat($('#G1101_52_H').val()),2));
}

/*G1101_52_F*/
function FG1101_52_F(obj){
    showStr(obj);
    $('#G1101_52_E').val(getNumToString(getStrFloat($('#G1101_52_F').val())+getStrFloat($('#G1101_52_G').val())+getStrFloat($('#G1101_52_H').val()),2));
    FG1101_52_E($('#G1101_52_E'));
}

/*G1101_52_G*/
function FG1101_52_G(obj){
    showStr(obj);
    $('#G1101_52_E').val(getNumToString(getStrFloat($('#G1101_52_F').val())+getStrFloat($('#G1101_52_G').val())+getStrFloat($('#G1101_52_H').val()),2));
    FG1101_52_E($('#G1101_52_E'));
}

/*G1101_52_H*/
function FG1101_52_H(obj){
    showStr(obj);
    $('#G1101_52_E').val(getNumToString(getStrFloat($('#G1101_52_F').val())+getStrFloat($('#G1101_52_G').val())+getStrFloat($('#G1101_52_H').val()),2));
    FG1101_52_E($('#G1101_52_E'));
}

/*G1101_53_A*/
function FG1101_53_A(obj){
    showStr(obj);
    $('#G1101_53_A').val(getNumToString(getStrFloat($('#G1101_53_B').val())+getStrFloat($('#G1101_53_E').val()),2));
}

/*G1101_53_B*/
function FG1101_53_B(obj){
    showStr(obj);
    $('#G1101_53_A').val(getNumToString(getStrFloat($('#G1101_53_B').val())+getStrFloat($('#G1101_53_E').val()),2));
    FG1101_53_A($('#G1101_53_A'));
    $('#G1101_53_B').val(getNumToString(getStrFloat($('#G1101_53_C').val())+getStrFloat($('#G1101_53_D').val()),2));
}

/*G1101_53_C*/
function FG1101_53_C(obj){
    showStr(obj);
    $('#G1101_53_B').val(getNumToString(getStrFloat($('#G1101_53_C').val())+getStrFloat($('#G1101_53_D').val()),2));
    FG1101_53_B($('#G1101_53_B'));
}

/*G1101_53_D*/
function FG1101_53_D(obj){
    showStr(obj);
    $('#G1101_53_B').val(getNumToString(getStrFloat($('#G1101_53_C').val())+getStrFloat($('#G1101_53_D').val()),2));
    FG1101_53_B($('#G1101_53_B'));
}

/*G1101_53_E*/
function FG1101_53_E(obj){
    showStr(obj);
    $('#G1101_53_A').val(getNumToString(getStrFloat($('#G1101_53_B').val())+getStrFloat($('#G1101_53_E').val()),2));
    FG1101_53_A($('#G1101_53_A'));
    $('#G1101_53_E').val(getNumToString(getStrFloat($('#G1101_53_F').val())+getStrFloat($('#G1101_53_G').val())+getStrFloat($('#G1101_53_H').val()),2));
}

/*G1101_53_F*/
function FG1101_53_F(obj){
    showStr(obj);
    $('#G1101_53_E').val(getNumToString(getStrFloat($('#G1101_53_F').val())+getStrFloat($('#G1101_53_G').val())+getStrFloat($('#G1101_53_H').val()),2));
    FG1101_53_E($('#G1101_53_E'));
}

/*G1101_53_G*/
function FG1101_53_G(obj){
    showStr(obj);
    $('#G1101_53_E').val(getNumToString(getStrFloat($('#G1101_53_F').val())+getStrFloat($('#G1101_53_G').val())+getStrFloat($('#G1101_53_H').val()),2));
    FG1101_53_E($('#G1101_53_E'));
}

/*G1101_53_H*/
function FG1101_53_H(obj){
    showStr(obj);
    $('#G1101_53_E').val(getNumToString(getStrFloat($('#G1101_53_F').val())+getStrFloat($('#G1101_53_G').val())+getStrFloat($('#G1101_53_H').val()),2));
    FG1101_53_E($('#G1101_53_E'));
}


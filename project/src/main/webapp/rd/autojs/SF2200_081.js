/*SF2200_6_A*/
function FSF2200_6_A(obj){
    showStr(obj);
    $('#SF2200_6_A').val(getNumToString(getStrFloat($('#SF2200_7_A').val())+getStrFloat($('#SF2200_10_A').val()),2));
}

/*SF2200_7_A*/
function FSF2200_7_A(obj){
    showStr(obj);
    $('#SF2200_6_A').val(getNumToString(getStrFloat($('#SF2200_7_A').val())+getStrFloat($('#SF2200_10_A').val()),2));
    FSF2200_6_A($('#SF2200_6_A'));
    $('#SF2200_7_A').val(getNumToString(getStrFloat($('#SF2200_8_A').val())+getStrFloat($('#SF2200_9_A').val()),2));
}

/*SF2200_8_A*/
function FSF2200_8_A(obj){
    showStr(obj);
    $('#SF2200_7_A').val(getNumToString(getStrFloat($('#SF2200_8_A').val())+getStrFloat($('#SF2200_9_A').val()),2));
    FSF2200_7_A($('#SF2200_7_A'));
}

/*SF2200_9_A*/
function FSF2200_9_A(obj){
    showStr(obj);
    $('#SF2200_7_A').val(getNumToString(getStrFloat($('#SF2200_8_A').val())+getStrFloat($('#SF2200_9_A').val()),2));
    FSF2200_7_A($('#SF2200_7_A'));
}

/*SF2200_10_A*/
function FSF2200_10_A(obj){
    showStr(obj);
    $('#SF2200_6_A').val(getNumToString(getStrFloat($('#SF2200_7_A').val())+getStrFloat($('#SF2200_10_A').val()),2));
    FSF2200_6_A($('#SF2200_6_A'));
    $('#SF2200_10_A').val(getNumToString(getStrFloat($('#SF2200_11_A').val())+getStrFloat($('#SF2200_12_A').val()),2));
}

/*SF2200_11_A*/
function FSF2200_11_A(obj){
    showStr(obj);
    $('#SF2200_10_A').val(getNumToString(getStrFloat($('#SF2200_11_A').val())+getStrFloat($('#SF2200_12_A').val()),2));
    FSF2200_10_A($('#SF2200_10_A'));
}

/*SF2200_12_A*/
function FSF2200_12_A(obj){
    showStr(obj);
    $('#SF2200_10_A').val(getNumToString(getStrFloat($('#SF2200_11_A').val())+getStrFloat($('#SF2200_12_A').val()),2));
    FSF2200_10_A($('#SF2200_10_A'));
}

/*SF2200_13_A*/
function FSF2200_13_A(obj){
    showStr(obj);
    $('#SF2200_13_A').val(getNumToString(getStrFloat($('#SF2200_14_A').val())+getStrFloat($('#SF2200_17_A').val())+getStrFloat($('#SF2200_23_A').val())+getStrFloat($('#SF2200_24_A').val())+getStrFloat($('#SF2200_25_A').val())+getStrFloat($('#SF2200_20_A').val()),2));
}

/*SF2200_14_A*/
function FSF2200_14_A(obj){
    showStr(obj);
    $('#SF2200_13_A').val(getNumToString(getStrFloat($('#SF2200_14_A').val())+getStrFloat($('#SF2200_17_A').val())+getStrFloat($('#SF2200_23_A').val())+getStrFloat($('#SF2200_24_A').val())+getStrFloat($('#SF2200_25_A').val())+getStrFloat($('#SF2200_20_A').val()),2));
    FSF2200_13_A($('#SF2200_13_A'));
    $('#SF2200_14_A').val(getNumToString(getStrFloat($('#SF2200_15_A').val())+getStrFloat($('#SF2200_16_A').val()),2));
}

/*SF2200_15_A*/
function FSF2200_15_A(obj){
    showStr(obj);
    $('#SF2200_14_A').val(getNumToString(getStrFloat($('#SF2200_15_A').val())+getStrFloat($('#SF2200_16_A').val()),2));
    FSF2200_14_A($('#SF2200_14_A'));
}

/*SF2200_16_A*/
function FSF2200_16_A(obj){
    showStr(obj);
    $('#SF2200_14_A').val(getNumToString(getStrFloat($('#SF2200_15_A').val())+getStrFloat($('#SF2200_16_A').val()),2));
    FSF2200_14_A($('#SF2200_14_A'));
}

/*SF2200_17_A*/
function FSF2200_17_A(obj){
    showStr(obj);
    $('#SF2200_13_A').val(getNumToString(getStrFloat($('#SF2200_14_A').val())+getStrFloat($('#SF2200_17_A').val())+getStrFloat($('#SF2200_23_A').val())+getStrFloat($('#SF2200_24_A').val())+getStrFloat($('#SF2200_25_A').val())+getStrFloat($('#SF2200_20_A').val()),2));
    FSF2200_13_A($('#SF2200_13_A'));
    $('#SF2200_17_A').val(getNumToString(getStrFloat($('#SF2200_18_A').val())+getStrFloat($('#SF2200_19_A').val()),2));
}

/*SF2200_18_A*/
function FSF2200_18_A(obj){
    showStr(obj);
    $('#SF2200_17_A').val(getNumToString(getStrFloat($('#SF2200_18_A').val())+getStrFloat($('#SF2200_19_A').val()),2));
    FSF2200_17_A($('#SF2200_17_A'));
}

/*SF2200_19_A*/
function FSF2200_19_A(obj){
    showStr(obj);
    $('#SF2200_17_A').val(getNumToString(getStrFloat($('#SF2200_18_A').val())+getStrFloat($('#SF2200_19_A').val()),2));
    FSF2200_17_A($('#SF2200_17_A'));
}

/*SF2200_20_A*/
function FSF2200_20_A(obj){
    showStr(obj);
    $('#SF2200_13_A').val(getNumToString(getStrFloat($('#SF2200_14_A').val())+getStrFloat($('#SF2200_17_A').val())+getStrFloat($('#SF2200_23_A').val())+getStrFloat($('#SF2200_24_A').val())+getStrFloat($('#SF2200_25_A').val())+getStrFloat($('#SF2200_20_A').val()),2));
    FSF2200_13_A($('#SF2200_13_A'));
    $('#SF2200_20_A').val(getNumToString(getStrFloat($('#SF2200_21_A').val())+getStrFloat($('#SF2200_22_A').val()),2));
}

/*SF2200_21_A*/
function FSF2200_21_A(obj){
    showStr(obj);
    $('#SF2200_20_A').val(getNumToString(getStrFloat($('#SF2200_21_A').val())+getStrFloat($('#SF2200_22_A').val()),2));
    FSF2200_20_A($('#SF2200_20_A'));
}

/*SF2200_22_A*/
function FSF2200_22_A(obj){
    showStr(obj);
    $('#SF2200_20_A').val(getNumToString(getStrFloat($('#SF2200_21_A').val())+getStrFloat($('#SF2200_22_A').val()),2));
    FSF2200_20_A($('#SF2200_20_A'));
}

/*SF2200_23_A*/
function FSF2200_23_A(obj){
    showStr(obj);
    $('#SF2200_13_A').val(getNumToString(getStrFloat($('#SF2200_14_A').val())+getStrFloat($('#SF2200_17_A').val())+getStrFloat($('#SF2200_23_A').val())+getStrFloat($('#SF2200_24_A').val())+getStrFloat($('#SF2200_25_A').val())+getStrFloat($('#SF2200_20_A').val()),2));
    FSF2200_13_A($('#SF2200_13_A'));
}

/*SF2200_24_A*/
function FSF2200_24_A(obj){
    showStr(obj);
    $('#SF2200_13_A').val(getNumToString(getStrFloat($('#SF2200_14_A').val())+getStrFloat($('#SF2200_17_A').val())+getStrFloat($('#SF2200_23_A').val())+getStrFloat($('#SF2200_24_A').val())+getStrFloat($('#SF2200_25_A').val())+getStrFloat($('#SF2200_20_A').val()),2));
    FSF2200_13_A($('#SF2200_13_A'));
}

/*SF2200_25_A*/
function FSF2200_25_A(obj){
    showStr(obj);
    $('#SF2200_13_A').val(getNumToString(getStrFloat($('#SF2200_14_A').val())+getStrFloat($('#SF2200_17_A').val())+getStrFloat($('#SF2200_23_A').val())+getStrFloat($('#SF2200_24_A').val())+getStrFloat($('#SF2200_25_A').val())+getStrFloat($('#SF2200_20_A').val()),2));
    FSF2200_13_A($('#SF2200_13_A'));
}


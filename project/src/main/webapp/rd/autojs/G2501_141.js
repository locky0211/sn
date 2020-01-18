/*G2501_7_A*/
function FG2501_7_A(obj){
    showStr(obj);
}

/*G2501_7_B*/
function FG2501_7_B(obj){
    showStr(obj);
}

/*G2501_7_C*/
function FG2501_7_C(obj){
    showStr(obj);
}

/*G2501_8_A*/
function FG2501_8_A(obj){
    showStr(obj);
}

/*G2501_8_B*/
function FG2501_8_B(obj){
    showStr(obj);
}

/*G2501_8_C*/
function FG2501_8_C(obj){
    showStr(obj);
}

/*G2501_9_A*/
function FG2501_9_A(obj){
    showStr(obj);
    $('#G2501_179_A').val(getNumToString(Math.max(getStrFloat($('#G2501_9_A').val())+getStrFloat($('#G2501_10_A').val())+getStrFloat($('#G2501_11_A').val())+getStrFloat($('#G2501_16_A').val())+getStrFloat($('#G2501_17_A').val())+getStrFloat($('#G2501_178_A').val()),0),2));
    FG2501_179_A($('#G2501_179_A'));
    $('#G2501_9_C').val(getNumToString(getRate(getStrFloat($('#G2501_9_A').val())*getStrFloat($('#G2501_9_B').val())/100,2),2));
    FG2501_9_C($('#G2501_9_C'));
}

/*G2501_9_B*/
function FG2501_9_B(obj){
    showStr(obj);
    $('#G2501_9_C').val(getNumToString(getRate(getStrFloat($('#G2501_9_A').val())*getStrFloat($('#G2501_9_B').val())/100,2),2));
    FG2501_9_C($('#G2501_9_C'));
}

/*G2501_9_C*/
function FG2501_9_C(obj){
    showStr(obj);
    $('#G2501_153_A').val(getNumToString(getStrFloat($('#G2501_9_C').val())+getStrFloat($('#G2501_10_C').val())+getStrFloat($('#G2501_12_C').val())+getStrFloat($('#G2501_13_C').val())+getStrFloat($('#G2501_14_C').val())+getStrFloat($('#G2501_15_C').val())+getStrFloat($('#G2501_16_C').val())+getStrFloat($('#G2501_17_C').val()),2));
    FG2501_153_A($('#G2501_153_A'));
    $('#G2501_9_C').val(getNumToString(getRate(getStrFloat($('#G2501_9_A').val())*getStrFloat($('#G2501_9_B').val())/100,2),2));
}

/*G2501_10_A*/
function FG2501_10_A(obj){
    showStr(obj);
    $('#G2501_179_A').val(getNumToString(Math.max(getStrFloat($('#G2501_9_A').val())+getStrFloat($('#G2501_10_A').val())+getStrFloat($('#G2501_11_A').val())+getStrFloat($('#G2501_16_A').val())+getStrFloat($('#G2501_17_A').val())+getStrFloat($('#G2501_178_A').val()),0),2));
    FG2501_179_A($('#G2501_179_A'));
    $('#G2501_10_C').val(getNumToString(getRate(getStrFloat($('#G2501_10_A').val())*getStrFloat($('#G2501_10_B').val())/100,2),2));
    FG2501_10_C($('#G2501_10_C'));
}

/*G2501_10_B*/
function FG2501_10_B(obj){
    showStr(obj);
    $('#G2501_10_C').val(getNumToString(getRate(getStrFloat($('#G2501_10_A').val())*getStrFloat($('#G2501_10_B').val())/100,2),2));
    FG2501_10_C($('#G2501_10_C'));
}

/*G2501_10_C*/
function FG2501_10_C(obj){
    showStr(obj);
    $('#G2501_153_A').val(getNumToString(getStrFloat($('#G2501_9_C').val())+getStrFloat($('#G2501_10_C').val())+getStrFloat($('#G2501_12_C').val())+getStrFloat($('#G2501_13_C').val())+getStrFloat($('#G2501_14_C').val())+getStrFloat($('#G2501_15_C').val())+getStrFloat($('#G2501_16_C').val())+getStrFloat($('#G2501_17_C').val()),2));
    FG2501_153_A($('#G2501_153_A'));
    $('#G2501_10_C').val(getNumToString(getRate(getStrFloat($('#G2501_10_A').val())*getStrFloat($('#G2501_10_B').val())/100,2),2));
}

/*G2501_11_A*/
function FG2501_11_A(obj){
    showStr(obj);
    $('#G2501_179_A').val(getNumToString(Math.max(getStrFloat($('#G2501_9_A').val())+getStrFloat($('#G2501_10_A').val())+getStrFloat($('#G2501_11_A').val())+getStrFloat($('#G2501_16_A').val())+getStrFloat($('#G2501_17_A').val())+getStrFloat($('#G2501_178_A').val()),0),2));
    FG2501_179_A($('#G2501_179_A'));
    $('#G2501_11_A').val(getNumToString((getStrFloat($('#G2501_12_A').val())+getStrFloat($('#G2501_13_A').val())+getStrFloat($('#G2501_14_A').val())+getStrFloat($('#G2501_15_A').val())),2));
}

/*G2501_11_B*/
function FG2501_11_B(obj){
    showStr(obj);
}

/*G2501_11_C*/
function FG2501_11_C(obj){
    showStr(obj);
}

/*G2501_12_A*/
function FG2501_12_A(obj){
    showStr(obj);
    $('#G2501_11_A').val(getNumToString((getStrFloat($('#G2501_12_A').val())+getStrFloat($('#G2501_13_A').val())+getStrFloat($('#G2501_14_A').val())+getStrFloat($('#G2501_15_A').val())),2));
    FG2501_11_A($('#G2501_11_A'));
    $('#G2501_12_C').val(getNumToString(getRate(getStrFloat($('#G2501_12_A').val())*getStrFloat($('#G2501_12_B').val())/100,2),2));
    FG2501_12_C($('#G2501_12_C'));
}

/*G2501_12_B*/
function FG2501_12_B(obj){
    showStr(obj);
    $('#G2501_12_C').val(getNumToString(getRate(getStrFloat($('#G2501_12_A').val())*getStrFloat($('#G2501_12_B').val())/100,2),2));
    FG2501_12_C($('#G2501_12_C'));
}

/*G2501_12_C*/
function FG2501_12_C(obj){
    showStr(obj);
    $('#G2501_153_A').val(getNumToString(getStrFloat($('#G2501_9_C').val())+getStrFloat($('#G2501_10_C').val())+getStrFloat($('#G2501_12_C').val())+getStrFloat($('#G2501_13_C').val())+getStrFloat($('#G2501_14_C').val())+getStrFloat($('#G2501_15_C').val())+getStrFloat($('#G2501_16_C').val())+getStrFloat($('#G2501_17_C').val()),2));
    FG2501_153_A($('#G2501_153_A'));
    $('#G2501_12_C').val(getNumToString(getRate(getStrFloat($('#G2501_12_A').val())*getStrFloat($('#G2501_12_B').val())/100,2),2));
}

/*G2501_13_A*/
function FG2501_13_A(obj){
    showStr(obj);
    $('#G2501_11_A').val(getNumToString((getStrFloat($('#G2501_12_A').val())+getStrFloat($('#G2501_13_A').val())+getStrFloat($('#G2501_14_A').val())+getStrFloat($('#G2501_15_A').val())),2));
    FG2501_11_A($('#G2501_11_A'));
    $('#G2501_13_C').val(getNumToString(getRate(getStrFloat($('#G2501_13_A').val())*getStrFloat($('#G2501_13_B').val())/100,2),2));
    FG2501_13_C($('#G2501_13_C'));
}

/*G2501_13_B*/
function FG2501_13_B(obj){
    showStr(obj);
    $('#G2501_13_C').val(getNumToString(getRate(getStrFloat($('#G2501_13_A').val())*getStrFloat($('#G2501_13_B').val())/100,2),2));
    FG2501_13_C($('#G2501_13_C'));
}

/*G2501_13_C*/
function FG2501_13_C(obj){
    showStr(obj);
    $('#G2501_153_A').val(getNumToString(getStrFloat($('#G2501_9_C').val())+getStrFloat($('#G2501_10_C').val())+getStrFloat($('#G2501_12_C').val())+getStrFloat($('#G2501_13_C').val())+getStrFloat($('#G2501_14_C').val())+getStrFloat($('#G2501_15_C').val())+getStrFloat($('#G2501_16_C').val())+getStrFloat($('#G2501_17_C').val()),2));
    FG2501_153_A($('#G2501_153_A'));
    $('#G2501_13_C').val(getNumToString(getRate(getStrFloat($('#G2501_13_A').val())*getStrFloat($('#G2501_13_B').val())/100,2),2));
}

/*G2501_14_A*/
function FG2501_14_A(obj){
    showStr(obj);
    $('#G2501_11_A').val(getNumToString((getStrFloat($('#G2501_12_A').val())+getStrFloat($('#G2501_13_A').val())+getStrFloat($('#G2501_14_A').val())+getStrFloat($('#G2501_15_A').val())),2));
    FG2501_11_A($('#G2501_11_A'));
    $('#G2501_14_C').val(getNumToString(getRate(getStrFloat($('#G2501_14_A').val())*getStrFloat($('#G2501_14_B').val())/100,2),2));
    FG2501_14_C($('#G2501_14_C'));
}

/*G2501_14_B*/
function FG2501_14_B(obj){
    showStr(obj);
    $('#G2501_14_C').val(getNumToString(getRate(getStrFloat($('#G2501_14_A').val())*getStrFloat($('#G2501_14_B').val())/100,2),2));
    FG2501_14_C($('#G2501_14_C'));
}

/*G2501_14_C*/
function FG2501_14_C(obj){
    showStr(obj);
    $('#G2501_153_A').val(getNumToString(getStrFloat($('#G2501_9_C').val())+getStrFloat($('#G2501_10_C').val())+getStrFloat($('#G2501_12_C').val())+getStrFloat($('#G2501_13_C').val())+getStrFloat($('#G2501_14_C').val())+getStrFloat($('#G2501_15_C').val())+getStrFloat($('#G2501_16_C').val())+getStrFloat($('#G2501_17_C').val()),2));
    FG2501_153_A($('#G2501_153_A'));
    $('#G2501_14_C').val(getNumToString(getRate(getStrFloat($('#G2501_14_A').val())*getStrFloat($('#G2501_14_B').val())/100,2),2));
}

/*G2501_15_A*/
function FG2501_15_A(obj){
    showStr(obj);
    $('#G2501_11_A').val(getNumToString((getStrFloat($('#G2501_12_A').val())+getStrFloat($('#G2501_13_A').val())+getStrFloat($('#G2501_14_A').val())+getStrFloat($('#G2501_15_A').val())),2));
    FG2501_11_A($('#G2501_11_A'));
    $('#G2501_15_C').val(getNumToString(getRate(getStrFloat($('#G2501_15_A').val())*getStrFloat($('#G2501_15_B').val())/100,2),2));
    FG2501_15_C($('#G2501_15_C'));
}

/*G2501_15_B*/
function FG2501_15_B(obj){
    showStr(obj);
    $('#G2501_15_C').val(getNumToString(getRate(getStrFloat($('#G2501_15_A').val())*getStrFloat($('#G2501_15_B').val())/100,2),2));
    FG2501_15_C($('#G2501_15_C'));
}

/*G2501_15_C*/
function FG2501_15_C(obj){
    showStr(obj);
    $('#G2501_153_A').val(getNumToString(getStrFloat($('#G2501_9_C').val())+getStrFloat($('#G2501_10_C').val())+getStrFloat($('#G2501_12_C').val())+getStrFloat($('#G2501_13_C').val())+getStrFloat($('#G2501_14_C').val())+getStrFloat($('#G2501_15_C').val())+getStrFloat($('#G2501_16_C').val())+getStrFloat($('#G2501_17_C').val()),2));
    FG2501_153_A($('#G2501_153_A'));
    $('#G2501_15_C').val(getNumToString(getRate(getStrFloat($('#G2501_15_A').val())*getStrFloat($('#G2501_15_B').val())/100,2),2));
}

/*G2501_16_A*/
function FG2501_16_A(obj){
    showStr(obj);
    $('#G2501_179_A').val(getNumToString(Math.max(getStrFloat($('#G2501_9_A').val())+getStrFloat($('#G2501_10_A').val())+getStrFloat($('#G2501_11_A').val())+getStrFloat($('#G2501_16_A').val())+getStrFloat($('#G2501_17_A').val())+getStrFloat($('#G2501_178_A').val()),0),2));
    FG2501_179_A($('#G2501_179_A'));
    $('#G2501_16_C').val(getNumToString(getRate(getStrFloat($('#G2501_16_A').val())*getStrFloat($('#G2501_16_B').val())/100,2),2));
    FG2501_16_C($('#G2501_16_C'));
}

/*G2501_16_B*/
function FG2501_16_B(obj){
    showStr(obj);
    $('#G2501_16_C').val(getNumToString(getRate(getStrFloat($('#G2501_16_A').val())*getStrFloat($('#G2501_16_B').val())/100,2),2));
    FG2501_16_C($('#G2501_16_C'));
}

/*G2501_16_C*/
function FG2501_16_C(obj){
    showStr(obj);
    $('#G2501_153_A').val(getNumToString(getStrFloat($('#G2501_9_C').val())+getStrFloat($('#G2501_10_C').val())+getStrFloat($('#G2501_12_C').val())+getStrFloat($('#G2501_13_C').val())+getStrFloat($('#G2501_14_C').val())+getStrFloat($('#G2501_15_C').val())+getStrFloat($('#G2501_16_C').val())+getStrFloat($('#G2501_17_C').val()),2));
    FG2501_153_A($('#G2501_153_A'));
    $('#G2501_16_C').val(getNumToString(getRate(getStrFloat($('#G2501_16_A').val())*getStrFloat($('#G2501_16_B').val())/100,2),2));
}

/*G2501_17_A*/
function FG2501_17_A(obj){
    showStr(obj);
    $('#G2501_179_A').val(getNumToString(Math.max(getStrFloat($('#G2501_9_A').val())+getStrFloat($('#G2501_10_A').val())+getStrFloat($('#G2501_11_A').val())+getStrFloat($('#G2501_16_A').val())+getStrFloat($('#G2501_17_A').val())+getStrFloat($('#G2501_178_A').val()),0),2));
    FG2501_179_A($('#G2501_179_A'));
    $('#G2501_17_C').val(getNumToString(getRate(getStrFloat($('#G2501_17_A').val())*getStrFloat($('#G2501_17_B').val())/100,2),2));
    FG2501_17_C($('#G2501_17_C'));
}

/*G2501_17_B*/
function FG2501_17_B(obj){
    showStr(obj);
    $('#G2501_17_C').val(getNumToString(getRate(getStrFloat($('#G2501_17_A').val())*getStrFloat($('#G2501_17_B').val())/100,2),2));
    FG2501_17_C($('#G2501_17_C'));
}

/*G2501_17_C*/
function FG2501_17_C(obj){
    showStr(obj);
    $('#G2501_153_A').val(getNumToString(getStrFloat($('#G2501_9_C').val())+getStrFloat($('#G2501_10_C').val())+getStrFloat($('#G2501_12_C').val())+getStrFloat($('#G2501_13_C').val())+getStrFloat($('#G2501_14_C').val())+getStrFloat($('#G2501_15_C').val())+getStrFloat($('#G2501_16_C').val())+getStrFloat($('#G2501_17_C').val()),2));
    FG2501_153_A($('#G2501_153_A'));
    $('#G2501_17_C').val(getNumToString(getRate(getStrFloat($('#G2501_17_A').val())*getStrFloat($('#G2501_17_B').val())/100,2),2));
}

/*G2501_18_A*/
function FG2501_18_A(obj){
    showStr(obj);
}

/*G2501_18_B*/
function FG2501_18_B(obj){
    showStr(obj);
}

/*G2501_18_C*/
function FG2501_18_C(obj){
    showStr(obj);
}

/*G2501_19_A*/
function FG2501_19_A(obj){
    showStr(obj);
    $('#G2501_181_A').val(getNumToString(getStrFloat($('#G2501_19_A').val())+getStrFloat($('#G2501_20_A').val())+getStrFloat($('#G2501_21_A').val())+getStrFloat($('#G2501_180_A').val()),2));
    FG2501_181_A($('#G2501_181_A'));
    $('#G2501_19_C').val(getNumToString(getRate(getStrFloat($('#G2501_19_A').val())*getStrFloat($('#G2501_19_B').val())/100,2),2));
    FG2501_19_C($('#G2501_19_C'));
}

/*G2501_19_B*/
function FG2501_19_B(obj){
    showStr(obj);
    $('#G2501_19_C').val(getNumToString(getRate(getStrFloat($('#G2501_19_A').val())*getStrFloat($('#G2501_19_B').val())/100,2),2));
    FG2501_19_C($('#G2501_19_C'));
}

/*G2501_19_C*/
function FG2501_19_C(obj){
    showStr(obj);
    $('#G2501_154_A').val(getNumToString(getStrFloat($('#G2501_19_C').val())+getStrFloat($('#G2501_20_C').val())+getStrFloat($('#G2501_22_C').val())+getStrFloat($('#G2501_23_C').val())+getStrFloat($('#G2501_24_C').val())+getStrFloat($('#G2501_25_C').val())+getStrFloat($('#G2501_26_C').val()),2));
    FG2501_154_A($('#G2501_154_A'));
    $('#G2501_19_C').val(getNumToString(getRate(getStrFloat($('#G2501_19_A').val())*getStrFloat($('#G2501_19_B').val())/100,2),2));
}

/*G2501_20_A*/
function FG2501_20_A(obj){
    showStr(obj);
    $('#G2501_181_A').val(getNumToString(getStrFloat($('#G2501_19_A').val())+getStrFloat($('#G2501_20_A').val())+getStrFloat($('#G2501_21_A').val())+getStrFloat($('#G2501_180_A').val()),2));
    FG2501_181_A($('#G2501_181_A'));
    $('#G2501_20_C').val(getNumToString(getRate(getStrFloat($('#G2501_20_A').val())*getStrFloat($('#G2501_20_B').val())/100,2),2));
    FG2501_20_C($('#G2501_20_C'));
}

/*G2501_20_B*/
function FG2501_20_B(obj){
    showStr(obj);
    $('#G2501_20_C').val(getNumToString(getRate(getStrFloat($('#G2501_20_A').val())*getStrFloat($('#G2501_20_B').val())/100,2),2));
    FG2501_20_C($('#G2501_20_C'));
}

/*G2501_20_C*/
function FG2501_20_C(obj){
    showStr(obj);
    $('#G2501_154_A').val(getNumToString(getStrFloat($('#G2501_19_C').val())+getStrFloat($('#G2501_20_C').val())+getStrFloat($('#G2501_22_C').val())+getStrFloat($('#G2501_23_C').val())+getStrFloat($('#G2501_24_C').val())+getStrFloat($('#G2501_25_C').val())+getStrFloat($('#G2501_26_C').val()),2));
    FG2501_154_A($('#G2501_154_A'));
    $('#G2501_20_C').val(getNumToString(getRate(getStrFloat($('#G2501_20_A').val())*getStrFloat($('#G2501_20_B').val())/100,2),2));
}

/*G2501_21_A*/
function FG2501_21_A(obj){
    showStr(obj);
    $('#G2501_181_A').val(getNumToString(getStrFloat($('#G2501_19_A').val())+getStrFloat($('#G2501_20_A').val())+getStrFloat($('#G2501_21_A').val())+getStrFloat($('#G2501_180_A').val()),2));
    FG2501_181_A($('#G2501_181_A'));
    $('#G2501_21_A').val(getNumToString((getStrFloat($('#G2501_22_A').val())+getStrFloat($('#G2501_23_A').val())+getStrFloat($('#G2501_24_A').val())+getStrFloat($('#G2501_25_A').val())+getStrFloat($('#G2501_26_A').val())),2));
}

/*G2501_21_B*/
function FG2501_21_B(obj){
    showStr(obj);
}

/*G2501_21_C*/
function FG2501_21_C(obj){
    showStr(obj);
}

/*G2501_22_A*/
function FG2501_22_A(obj){
    showStr(obj);
    $('#G2501_21_A').val(getNumToString((getStrFloat($('#G2501_22_A').val())+getStrFloat($('#G2501_23_A').val())+getStrFloat($('#G2501_24_A').val())+getStrFloat($('#G2501_25_A').val())+getStrFloat($('#G2501_26_A').val())),2));
    FG2501_21_A($('#G2501_21_A'));
    $('#G2501_22_C').val(getNumToString(getRate(getStrFloat($('#G2501_22_A').val())*getStrFloat($('#G2501_22_B').val())/100,2),2));
    FG2501_22_C($('#G2501_22_C'));
}

/*G2501_22_B*/
function FG2501_22_B(obj){
    showStr(obj);
    $('#G2501_22_C').val(getNumToString(getRate(getStrFloat($('#G2501_22_A').val())*getStrFloat($('#G2501_22_B').val())/100,2),2));
    FG2501_22_C($('#G2501_22_C'));
}

/*G2501_22_C*/
function FG2501_22_C(obj){
    showStr(obj);
    $('#G2501_154_A').val(getNumToString(getStrFloat($('#G2501_19_C').val())+getStrFloat($('#G2501_20_C').val())+getStrFloat($('#G2501_22_C').val())+getStrFloat($('#G2501_23_C').val())+getStrFloat($('#G2501_24_C').val())+getStrFloat($('#G2501_25_C').val())+getStrFloat($('#G2501_26_C').val()),2));
    FG2501_154_A($('#G2501_154_A'));
    $('#G2501_22_C').val(getNumToString(getRate(getStrFloat($('#G2501_22_A').val())*getStrFloat($('#G2501_22_B').val())/100,2),2));
}

/*G2501_23_A*/
function FG2501_23_A(obj){
    showStr(obj);
    $('#G2501_21_A').val(getNumToString((getStrFloat($('#G2501_22_A').val())+getStrFloat($('#G2501_23_A').val())+getStrFloat($('#G2501_24_A').val())+getStrFloat($('#G2501_25_A').val())+getStrFloat($('#G2501_26_A').val())),2));
    FG2501_21_A($('#G2501_21_A'));
    $('#G2501_23_C').val(getNumToString(getRate(getStrFloat($('#G2501_23_A').val())*getStrFloat($('#G2501_23_B').val())/100,2),2));
    FG2501_23_C($('#G2501_23_C'));
}

/*G2501_23_B*/
function FG2501_23_B(obj){
    showStr(obj);
    $('#G2501_23_C').val(getNumToString(getRate(getStrFloat($('#G2501_23_A').val())*getStrFloat($('#G2501_23_B').val())/100,2),2));
    FG2501_23_C($('#G2501_23_C'));
}

/*G2501_23_C*/
function FG2501_23_C(obj){
    showStr(obj);
    $('#G2501_154_A').val(getNumToString(getStrFloat($('#G2501_19_C').val())+getStrFloat($('#G2501_20_C').val())+getStrFloat($('#G2501_22_C').val())+getStrFloat($('#G2501_23_C').val())+getStrFloat($('#G2501_24_C').val())+getStrFloat($('#G2501_25_C').val())+getStrFloat($('#G2501_26_C').val()),2));
    FG2501_154_A($('#G2501_154_A'));
    $('#G2501_23_C').val(getNumToString(getRate(getStrFloat($('#G2501_23_A').val())*getStrFloat($('#G2501_23_B').val())/100,2),2));
}

/*G2501_24_A*/
function FG2501_24_A(obj){
    showStr(obj);
    $('#G2501_21_A').val(getNumToString((getStrFloat($('#G2501_22_A').val())+getStrFloat($('#G2501_23_A').val())+getStrFloat($('#G2501_24_A').val())+getStrFloat($('#G2501_25_A').val())+getStrFloat($('#G2501_26_A').val())),2));
    FG2501_21_A($('#G2501_21_A'));
    $('#G2501_24_C').val(getNumToString(getRate(getStrFloat($('#G2501_24_A').val())*getStrFloat($('#G2501_24_B').val())/100,2),2));
    FG2501_24_C($('#G2501_24_C'));
}

/*G2501_24_B*/
function FG2501_24_B(obj){
    showStr(obj);
    $('#G2501_24_C').val(getNumToString(getRate(getStrFloat($('#G2501_24_A').val())*getStrFloat($('#G2501_24_B').val())/100,2),2));
    FG2501_24_C($('#G2501_24_C'));
}

/*G2501_24_C*/
function FG2501_24_C(obj){
    showStr(obj);
    $('#G2501_154_A').val(getNumToString(getStrFloat($('#G2501_19_C').val())+getStrFloat($('#G2501_20_C').val())+getStrFloat($('#G2501_22_C').val())+getStrFloat($('#G2501_23_C').val())+getStrFloat($('#G2501_24_C').val())+getStrFloat($('#G2501_25_C').val())+getStrFloat($('#G2501_26_C').val()),2));
    FG2501_154_A($('#G2501_154_A'));
    $('#G2501_24_C').val(getNumToString(getRate(getStrFloat($('#G2501_24_A').val())*getStrFloat($('#G2501_24_B').val())/100,2),2));
}

/*G2501_25_A*/
function FG2501_25_A(obj){
    showStr(obj);
    $('#G2501_21_A').val(getNumToString((getStrFloat($('#G2501_22_A').val())+getStrFloat($('#G2501_23_A').val())+getStrFloat($('#G2501_24_A').val())+getStrFloat($('#G2501_25_A').val())+getStrFloat($('#G2501_26_A').val())),2));
    FG2501_21_A($('#G2501_21_A'));
    $('#G2501_25_C').val(getNumToString(getRate(getStrFloat($('#G2501_25_A').val())*getStrFloat($('#G2501_25_B').val())/100,2),2));
    FG2501_25_C($('#G2501_25_C'));
}

/*G2501_25_B*/
function FG2501_25_B(obj){
    showStr(obj);
    $('#G2501_25_C').val(getNumToString(getRate(getStrFloat($('#G2501_25_A').val())*getStrFloat($('#G2501_25_B').val())/100,2),2));
    FG2501_25_C($('#G2501_25_C'));
}

/*G2501_25_C*/
function FG2501_25_C(obj){
    showStr(obj);
    $('#G2501_154_A').val(getNumToString(getStrFloat($('#G2501_19_C').val())+getStrFloat($('#G2501_20_C').val())+getStrFloat($('#G2501_22_C').val())+getStrFloat($('#G2501_23_C').val())+getStrFloat($('#G2501_24_C').val())+getStrFloat($('#G2501_25_C').val())+getStrFloat($('#G2501_26_C').val()),2));
    FG2501_154_A($('#G2501_154_A'));
    $('#G2501_25_C').val(getNumToString(getRate(getStrFloat($('#G2501_25_A').val())*getStrFloat($('#G2501_25_B').val())/100,2),2));
}

/*G2501_26_A*/
function FG2501_26_A(obj){
    showStr(obj);
    $('#G2501_21_A').val(getNumToString((getStrFloat($('#G2501_22_A').val())+getStrFloat($('#G2501_23_A').val())+getStrFloat($('#G2501_24_A').val())+getStrFloat($('#G2501_25_A').val())+getStrFloat($('#G2501_26_A').val())),2));
    FG2501_21_A($('#G2501_21_A'));
    $('#G2501_26_C').val(getNumToString(getRate(getStrFloat($('#G2501_26_A').val())*getStrFloat($('#G2501_26_B').val())/100,2),2));
    FG2501_26_C($('#G2501_26_C'));
}

/*G2501_26_B*/
function FG2501_26_B(obj){
    showStr(obj);
    $('#G2501_26_C').val(getNumToString(getRate(getStrFloat($('#G2501_26_A').val())*getStrFloat($('#G2501_26_B').val())/100,2),2));
    FG2501_26_C($('#G2501_26_C'));
}

/*G2501_26_C*/
function FG2501_26_C(obj){
    showStr(obj);
    $('#G2501_154_A').val(getNumToString(getStrFloat($('#G2501_19_C').val())+getStrFloat($('#G2501_20_C').val())+getStrFloat($('#G2501_22_C').val())+getStrFloat($('#G2501_23_C').val())+getStrFloat($('#G2501_24_C').val())+getStrFloat($('#G2501_25_C').val())+getStrFloat($('#G2501_26_C').val()),2));
    FG2501_154_A($('#G2501_154_A'));
    $('#G2501_26_C').val(getNumToString(getRate(getStrFloat($('#G2501_26_A').val())*getStrFloat($('#G2501_26_B').val())/100,2),2));
}

/*G2501_27_A*/
function FG2501_27_A(obj){
    showStr(obj);
    $('#G2501_183_A').val(getNumToString(getStrFloat($('#G2501_27_A').val())+getStrFloat($('#G2501_182_A').val()),2));
    FG2501_183_A($('#G2501_183_A'));
    $('#G2501_27_C').val(getNumToString(getRate(getStrFloat($('#G2501_27_A').val())*getStrFloat($('#G2501_27_B').val())/100,2),2));
    FG2501_27_C($('#G2501_27_C'));
}

/*G2501_27_B*/
function FG2501_27_B(obj){
    showStr(obj);
    $('#G2501_27_C').val(getNumToString(getRate(getStrFloat($('#G2501_27_A').val())*getStrFloat($('#G2501_27_B').val())/100,2),2));
    FG2501_27_C($('#G2501_27_C'));
}

/*G2501_27_C*/
function FG2501_27_C(obj){
    showStr(obj);
    $('#G2501_155_A').val(getNumToString(getStrFloat($('#G2501_27_C').val()),2));
    FG2501_155_A($('#G2501_155_A'));
    $('#G2501_27_C').val(getNumToString(getRate(getStrFloat($('#G2501_27_A').val())*getStrFloat($('#G2501_27_B').val())/100,2),2));
}

/*G2501_28_A*/
function FG2501_28_A(obj){
    showStr(obj);
}

/*G2501_28_B*/
function FG2501_28_B(obj){
    showStr(obj);
}

/*G2501_28_C*/
function FG2501_28_C(obj){
    showStr(obj);
}

/*G2501_29_A*/
function FG2501_29_A(obj){
    showStr(obj);
}

/*G2501_29_B*/
function FG2501_29_B(obj){
    showStr(obj);
}

/*G2501_29_C*/
function FG2501_29_C(obj){
    showStr(obj);
}

/*G2501_30_A*/
function FG2501_30_A(obj){
    showStr(obj);
    $('#G2501_30_A').val(getNumToString((getStrFloat($('#G2501_31_A').val())+getStrFloat($('#G2501_32_A').val())+getStrFloat($('#G2501_33_A').val())+getStrFloat($('#G2501_34_A').val())),2));
}

/*G2501_30_B*/
function FG2501_30_B(obj){
    showStr(obj);
}

/*G2501_30_C*/
function FG2501_30_C(obj){
    showStr(obj);
}

/*G2501_31_A*/
function FG2501_31_A(obj){
    showStr(obj);
    $('#G2501_30_A').val(getNumToString((getStrFloat($('#G2501_31_A').val())+getStrFloat($('#G2501_32_A').val())+getStrFloat($('#G2501_33_A').val())+getStrFloat($('#G2501_34_A').val())),2));
    FG2501_30_A($('#G2501_30_A'));
    $('#G2501_31_C').val(getNumToString(getRate(getStrFloat($('#G2501_31_A').val())*getStrFloat($('#G2501_31_B').val())/100,2),2));
    FG2501_31_C($('#G2501_31_C'));
}

/*G2501_31_B*/
function FG2501_31_B(obj){
    showStr(obj);
    $('#G2501_31_C').val(getNumToString(getRate(getStrFloat($('#G2501_31_A').val())*getStrFloat($('#G2501_31_B').val())/100,2),2));
    FG2501_31_C($('#G2501_31_C'));
}

/*G2501_31_C*/
function FG2501_31_C(obj){
    showStr(obj);
    $('#G2501_158_A').val(getNumToString((getStrFloat($('#G2501_31_C').val())+getStrFloat($('#G2501_32_C').val())+getStrFloat($('#G2501_33_C').val())+getStrFloat($('#G2501_34_C').val())),2));
    FG2501_158_A($('#G2501_158_A'));
    $('#G2501_31_C').val(getNumToString(getRate(getStrFloat($('#G2501_31_A').val())*getStrFloat($('#G2501_31_B').val())/100,2),2));
}

/*G2501_32_A*/
function FG2501_32_A(obj){
    showStr(obj);
    $('#G2501_30_A').val(getNumToString((getStrFloat($('#G2501_31_A').val())+getStrFloat($('#G2501_32_A').val())+getStrFloat($('#G2501_33_A').val())+getStrFloat($('#G2501_34_A').val())),2));
    FG2501_30_A($('#G2501_30_A'));
    $('#G2501_32_C').val(getNumToString(getRate(getStrFloat($('#G2501_32_A').val())*getStrFloat($('#G2501_32_B').val())/100,2),2));
    FG2501_32_C($('#G2501_32_C'));
}

/*G2501_32_B*/
function FG2501_32_B(obj){
    showStr(obj);
    $('#G2501_32_C').val(getNumToString(getRate(getStrFloat($('#G2501_32_A').val())*getStrFloat($('#G2501_32_B').val())/100,2),2));
    FG2501_32_C($('#G2501_32_C'));
}

/*G2501_32_C*/
function FG2501_32_C(obj){
    showStr(obj);
    $('#G2501_158_A').val(getNumToString((getStrFloat($('#G2501_31_C').val())+getStrFloat($('#G2501_32_C').val())+getStrFloat($('#G2501_33_C').val())+getStrFloat($('#G2501_34_C').val())),2));
    FG2501_158_A($('#G2501_158_A'));
    $('#G2501_32_C').val(getNumToString(getRate(getStrFloat($('#G2501_32_A').val())*getStrFloat($('#G2501_32_B').val())/100,2),2));
}

/*G2501_33_A*/
function FG2501_33_A(obj){
    showStr(obj);
    $('#G2501_30_A').val(getNumToString((getStrFloat($('#G2501_31_A').val())+getStrFloat($('#G2501_32_A').val())+getStrFloat($('#G2501_33_A').val())+getStrFloat($('#G2501_34_A').val())),2));
    FG2501_30_A($('#G2501_30_A'));
    $('#G2501_33_C').val(getNumToString(getRate(getStrFloat($('#G2501_33_A').val())*getStrFloat($('#G2501_33_B').val())/100,2),2));
    FG2501_33_C($('#G2501_33_C'));
}

/*G2501_33_B*/
function FG2501_33_B(obj){
    showStr(obj);
    $('#G2501_33_C').val(getNumToString(getRate(getStrFloat($('#G2501_33_A').val())*getStrFloat($('#G2501_33_B').val())/100,2),2));
    FG2501_33_C($('#G2501_33_C'));
}

/*G2501_33_C*/
function FG2501_33_C(obj){
    showStr(obj);
    $('#G2501_158_A').val(getNumToString((getStrFloat($('#G2501_31_C').val())+getStrFloat($('#G2501_32_C').val())+getStrFloat($('#G2501_33_C').val())+getStrFloat($('#G2501_34_C').val())),2));
    FG2501_158_A($('#G2501_158_A'));
    $('#G2501_33_C').val(getNumToString(getRate(getStrFloat($('#G2501_33_A').val())*getStrFloat($('#G2501_33_B').val())/100,2),2));
}

/*G2501_34_A*/
function FG2501_34_A(obj){
    showStr(obj);
    $('#G2501_30_A').val(getNumToString((getStrFloat($('#G2501_31_A').val())+getStrFloat($('#G2501_32_A').val())+getStrFloat($('#G2501_33_A').val())+getStrFloat($('#G2501_34_A').val())),2));
    FG2501_30_A($('#G2501_30_A'));
    $('#G2501_34_C').val(getNumToString(getRate(getStrFloat($('#G2501_34_A').val())*getStrFloat($('#G2501_34_B').val())/100,2),2));
    FG2501_34_C($('#G2501_34_C'));
}

/*G2501_34_B*/
function FG2501_34_B(obj){
    showStr(obj);
    $('#G2501_34_C').val(getNumToString(getRate(getStrFloat($('#G2501_34_A').val())*getStrFloat($('#G2501_34_B').val())/100,2),2));
    FG2501_34_C($('#G2501_34_C'));
}

/*G2501_34_C*/
function FG2501_34_C(obj){
    showStr(obj);
    $('#G2501_158_A').val(getNumToString((getStrFloat($('#G2501_31_C').val())+getStrFloat($('#G2501_32_C').val())+getStrFloat($('#G2501_33_C').val())+getStrFloat($('#G2501_34_C').val())),2));
    FG2501_158_A($('#G2501_158_A'));
    $('#G2501_34_C').val(getNumToString(getRate(getStrFloat($('#G2501_34_A').val())*getStrFloat($('#G2501_34_B').val())/100,2),2));
}

/*G2501_35_A*/
function FG2501_35_A(obj){
    showStr(obj);
    $('#G2501_35_A').val(getNumToString(getStrFloat($('#G2501_36_A').val())+getStrFloat($('#G2501_41_A').val())+getStrFloat($('#G2501_47_A').val())+getStrFloat($('#G2501_53_A').val())+getStrFloat($('#G2501_62_A').val())+getStrFloat($('#G2501_63_A').val()),2));
}

/*G2501_35_B*/
function FG2501_35_B(obj){
    showStr(obj);
}

/*G2501_35_C*/
function FG2501_35_C(obj){
    showStr(obj);
}

/*G2501_36_A*/
function FG2501_36_A(obj){
    showStr(obj);
    $('#G2501_35_A').val(getNumToString(getStrFloat($('#G2501_36_A').val())+getStrFloat($('#G2501_41_A').val())+getStrFloat($('#G2501_47_A').val())+getStrFloat($('#G2501_53_A').val())+getStrFloat($('#G2501_62_A').val())+getStrFloat($('#G2501_63_A').val()),2));
    FG2501_35_A($('#G2501_35_A'));
    $('#G2501_36_A').val(getNumToString((getStrFloat($('#G2501_37_A').val())+getStrFloat($('#G2501_38_A').val())+getStrFloat($('#G2501_39_A').val())+getStrFloat($('#G2501_40_A').val())),2));
}

/*G2501_36_B*/
function FG2501_36_B(obj){
    showStr(obj);
}

/*G2501_36_C*/
function FG2501_36_C(obj){
    showStr(obj);
}

/*G2501_37_A*/
function FG2501_37_A(obj){
    showStr(obj);
    $('#G2501_36_A').val(getNumToString((getStrFloat($('#G2501_37_A').val())+getStrFloat($('#G2501_38_A').val())+getStrFloat($('#G2501_39_A').val())+getStrFloat($('#G2501_40_A').val())),2));
    FG2501_36_A($('#G2501_36_A'));
    $('#G2501_37_C').val(getNumToString(getRate(getStrFloat($('#G2501_37_A').val())*getStrFloat($('#G2501_37_B').val())/100,2),2));
    FG2501_37_C($('#G2501_37_C'));
}

/*G2501_37_B*/
function FG2501_37_B(obj){
    showStr(obj);
    $('#G2501_37_C').val(getNumToString(getRate(getStrFloat($('#G2501_37_A').val())*getStrFloat($('#G2501_37_B').val())/100,2),2));
    FG2501_37_C($('#G2501_37_C'));
}

/*G2501_37_C*/
function FG2501_37_C(obj){
    showStr(obj);
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
    $('#G2501_37_C').val(getNumToString(getRate(getStrFloat($('#G2501_37_A').val())*getStrFloat($('#G2501_37_B').val())/100,2),2));
}

/*G2501_38_A*/
function FG2501_38_A(obj){
    showStr(obj);
    $('#G2501_36_A').val(getNumToString((getStrFloat($('#G2501_37_A').val())+getStrFloat($('#G2501_38_A').val())+getStrFloat($('#G2501_39_A').val())+getStrFloat($('#G2501_40_A').val())),2));
    FG2501_36_A($('#G2501_36_A'));
    $('#G2501_38_C').val(getNumToString(getRate(getStrFloat($('#G2501_38_A').val())*getStrFloat($('#G2501_38_B').val())/100,2),2));
    FG2501_38_C($('#G2501_38_C'));
}

/*G2501_38_B*/
function FG2501_38_B(obj){
    showStr(obj);
    $('#G2501_38_C').val(getNumToString(getRate(getStrFloat($('#G2501_38_A').val())*getStrFloat($('#G2501_38_B').val())/100,2),2));
    FG2501_38_C($('#G2501_38_C'));
}

/*G2501_38_C*/
function FG2501_38_C(obj){
    showStr(obj);
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
    $('#G2501_38_C').val(getNumToString(getRate(getStrFloat($('#G2501_38_A').val())*getStrFloat($('#G2501_38_B').val())/100,2),2));
}

/*G2501_39_A*/
function FG2501_39_A(obj){
    showStr(obj);
    $('#G2501_36_A').val(getNumToString((getStrFloat($('#G2501_37_A').val())+getStrFloat($('#G2501_38_A').val())+getStrFloat($('#G2501_39_A').val())+getStrFloat($('#G2501_40_A').val())),2));
    FG2501_36_A($('#G2501_36_A'));
    $('#G2501_39_C').val(getNumToString(getRate(getStrFloat($('#G2501_39_A').val())*getStrFloat($('#G2501_39_B').val())/100,2),2));
    FG2501_39_C($('#G2501_39_C'));
}

/*G2501_39_B*/
function FG2501_39_B(obj){
    showStr(obj);
    $('#G2501_39_C').val(getNumToString(getRate(getStrFloat($('#G2501_39_A').val())*getStrFloat($('#G2501_39_B').val())/100,2),2));
    FG2501_39_C($('#G2501_39_C'));
}

/*G2501_39_C*/
function FG2501_39_C(obj){
    showStr(obj);
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
    $('#G2501_39_C').val(getNumToString(getRate(getStrFloat($('#G2501_39_A').val())*getStrFloat($('#G2501_39_B').val())/100,2),2));
}

/*G2501_40_A*/
function FG2501_40_A(obj){
    showStr(obj);
    $('#G2501_36_A').val(getNumToString((getStrFloat($('#G2501_37_A').val())+getStrFloat($('#G2501_38_A').val())+getStrFloat($('#G2501_39_A').val())+getStrFloat($('#G2501_40_A').val())),2));
    FG2501_36_A($('#G2501_36_A'));
    $('#G2501_40_C').val(getNumToString(getRate(getStrFloat($('#G2501_40_A').val())*getStrFloat($('#G2501_40_B').val())/100,2),2));
    FG2501_40_C($('#G2501_40_C'));
}

/*G2501_40_B*/
function FG2501_40_B(obj){
    showStr(obj);
    $('#G2501_40_C').val(getNumToString(getRate(getStrFloat($('#G2501_40_A').val())*getStrFloat($('#G2501_40_B').val())/100,2),2));
    FG2501_40_C($('#G2501_40_C'));
}

/*G2501_40_C*/
function FG2501_40_C(obj){
    showStr(obj);
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
    $('#G2501_40_C').val(getNumToString(getRate(getStrFloat($('#G2501_40_A').val())*getStrFloat($('#G2501_40_B').val())/100,2),2));
}

/*G2501_41_A*/
function FG2501_41_A(obj){
    showStr(obj);
    $('#G2501_35_A').val(getNumToString(getStrFloat($('#G2501_36_A').val())+getStrFloat($('#G2501_41_A').val())+getStrFloat($('#G2501_47_A').val())+getStrFloat($('#G2501_53_A').val())+getStrFloat($('#G2501_62_A').val())+getStrFloat($('#G2501_63_A').val()),2));
    FG2501_35_A($('#G2501_35_A'));
    $('#G2501_41_A').val(getNumToString((getStrFloat($('#G2501_42_A').val())+getStrFloat($('#G2501_43_A').val())+getStrFloat($('#G2501_44_A').val())+getStrFloat($('#G2501_45_A').val())+getStrFloat($('#G2501_46_A').val())),2));
}

/*G2501_41_B*/
function FG2501_41_B(obj){
    showStr(obj);
}

/*G2501_41_C*/
function FG2501_41_C(obj){
    showStr(obj);
}

/*G2501_42_A*/
function FG2501_42_A(obj){
    showStr(obj);
    $('#G2501_41_A').val(getNumToString((getStrFloat($('#G2501_42_A').val())+getStrFloat($('#G2501_43_A').val())+getStrFloat($('#G2501_44_A').val())+getStrFloat($('#G2501_45_A').val())+getStrFloat($('#G2501_46_A').val())),2));
    FG2501_41_A($('#G2501_41_A'));
    $('#G2501_42_C').val(getNumToString(getRate(getStrFloat($('#G2501_42_A').val())*getStrFloat($('#G2501_42_B').val())/100,2),2));
    FG2501_42_C($('#G2501_42_C'));
}

/*G2501_42_B*/
function FG2501_42_B(obj){
    showStr(obj);
    $('#G2501_42_C').val(getNumToString(getRate(getStrFloat($('#G2501_42_A').val())*getStrFloat($('#G2501_42_B').val())/100,2),2));
    FG2501_42_C($('#G2501_42_C'));
}

/*G2501_42_C*/
function FG2501_42_C(obj){
    showStr(obj);
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
    $('#G2501_42_C').val(getNumToString(getRate(getStrFloat($('#G2501_42_A').val())*getStrFloat($('#G2501_42_B').val())/100,2),2));
}

/*G2501_43_A*/
function FG2501_43_A(obj){
    showStr(obj);
    $('#G2501_41_A').val(getNumToString((getStrFloat($('#G2501_42_A').val())+getStrFloat($('#G2501_43_A').val())+getStrFloat($('#G2501_44_A').val())+getStrFloat($('#G2501_45_A').val())+getStrFloat($('#G2501_46_A').val())),2));
    FG2501_41_A($('#G2501_41_A'));
    $('#G2501_43_C').val(getNumToString(getRate(getStrFloat($('#G2501_43_A').val())*getStrFloat($('#G2501_43_B').val())/100,2),2));
    FG2501_43_C($('#G2501_43_C'));
}

/*G2501_43_B*/
function FG2501_43_B(obj){
    showStr(obj);
    $('#G2501_43_C').val(getNumToString(getRate(getStrFloat($('#G2501_43_A').val())*getStrFloat($('#G2501_43_B').val())/100,2),2));
    FG2501_43_C($('#G2501_43_C'));
}

/*G2501_43_C*/
function FG2501_43_C(obj){
    showStr(obj);
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
    $('#G2501_43_C').val(getNumToString(getRate(getStrFloat($('#G2501_43_A').val())*getStrFloat($('#G2501_43_B').val())/100,2),2));
}

/*G2501_44_A*/
function FG2501_44_A(obj){
    showStr(obj);
    $('#G2501_41_A').val(getNumToString((getStrFloat($('#G2501_42_A').val())+getStrFloat($('#G2501_43_A').val())+getStrFloat($('#G2501_44_A').val())+getStrFloat($('#G2501_45_A').val())+getStrFloat($('#G2501_46_A').val())),2));
    FG2501_41_A($('#G2501_41_A'));
    $('#G2501_44_C').val(getNumToString(getRate(getStrFloat($('#G2501_44_A').val())*getStrFloat($('#G2501_44_B').val())/100,2),2));
    FG2501_44_C($('#G2501_44_C'));
}

/*G2501_44_B*/
function FG2501_44_B(obj){
    showStr(obj);
    $('#G2501_44_C').val(getNumToString(getRate(getStrFloat($('#G2501_44_A').val())*getStrFloat($('#G2501_44_B').val())/100,2),2));
    FG2501_44_C($('#G2501_44_C'));
}

/*G2501_44_C*/
function FG2501_44_C(obj){
    showStr(obj);
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
    $('#G2501_44_C').val(getNumToString(getRate(getStrFloat($('#G2501_44_A').val())*getStrFloat($('#G2501_44_B').val())/100,2),2));
}

/*G2501_45_A*/
function FG2501_45_A(obj){
    showStr(obj);
    $('#G2501_41_A').val(getNumToString((getStrFloat($('#G2501_42_A').val())+getStrFloat($('#G2501_43_A').val())+getStrFloat($('#G2501_44_A').val())+getStrFloat($('#G2501_45_A').val())+getStrFloat($('#G2501_46_A').val())),2));
    FG2501_41_A($('#G2501_41_A'));
    $('#G2501_45_C').val(getNumToString(getRate(getStrFloat($('#G2501_45_A').val())*getStrFloat($('#G2501_45_B').val())/100,2),2));
    FG2501_45_C($('#G2501_45_C'));
}

/*G2501_45_B*/
function FG2501_45_B(obj){
    showStr(obj);
    $('#G2501_45_C').val(getNumToString(getRate(getStrFloat($('#G2501_45_A').val())*getStrFloat($('#G2501_45_B').val())/100,2),2));
    FG2501_45_C($('#G2501_45_C'));
}

/*G2501_45_C*/
function FG2501_45_C(obj){
    showStr(obj);
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
    $('#G2501_45_C').val(getNumToString(getRate(getStrFloat($('#G2501_45_A').val())*getStrFloat($('#G2501_45_B').val())/100,2),2));
}

/*G2501_46_A*/
function FG2501_46_A(obj){
    showStr(obj);
    $('#G2501_41_A').val(getNumToString((getStrFloat($('#G2501_42_A').val())+getStrFloat($('#G2501_43_A').val())+getStrFloat($('#G2501_44_A').val())+getStrFloat($('#G2501_45_A').val())+getStrFloat($('#G2501_46_A').val())),2));
    FG2501_41_A($('#G2501_41_A'));
    $('#G2501_46_C').val(getNumToString(getRate(getStrFloat($('#G2501_46_A').val())*getStrFloat($('#G2501_46_B').val())/100,2),2));
    FG2501_46_C($('#G2501_46_C'));
}

/*G2501_46_B*/
function FG2501_46_B(obj){
    showStr(obj);
    $('#G2501_46_C').val(getNumToString(getRate(getStrFloat($('#G2501_46_A').val())*getStrFloat($('#G2501_46_B').val())/100,2),2));
    FG2501_46_C($('#G2501_46_C'));
}

/*G2501_46_C*/
function FG2501_46_C(obj){
    showStr(obj);
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
    $('#G2501_46_C').val(getNumToString(getRate(getStrFloat($('#G2501_46_A').val())*getStrFloat($('#G2501_46_B').val())/100,2),2));
}

/*G2501_47_A*/
function FG2501_47_A(obj){
    showStr(obj);
    $('#G2501_35_A').val(getNumToString(getStrFloat($('#G2501_36_A').val())+getStrFloat($('#G2501_41_A').val())+getStrFloat($('#G2501_47_A').val())+getStrFloat($('#G2501_53_A').val())+getStrFloat($('#G2501_62_A').val())+getStrFloat($('#G2501_63_A').val()),2));
    FG2501_35_A($('#G2501_35_A'));
    $('#G2501_47_A').val(getNumToString((getStrFloat($('#G2501_48_A').val())+getStrFloat($('#G2501_49_A').val())+getStrFloat($('#G2501_50_A').val())+getStrFloat($('#G2501_51_A').val())+getStrFloat($('#G2501_52_A').val())),2));
}

/*G2501_47_B*/
function FG2501_47_B(obj){
    showStr(obj);
}

/*G2501_47_C*/
function FG2501_47_C(obj){
    showStr(obj);
}

/*G2501_48_A*/
function FG2501_48_A(obj){
    showStr(obj);
    $('#G2501_47_A').val(getNumToString((getStrFloat($('#G2501_48_A').val())+getStrFloat($('#G2501_49_A').val())+getStrFloat($('#G2501_50_A').val())+getStrFloat($('#G2501_51_A').val())+getStrFloat($('#G2501_52_A').val())),2));
    FG2501_47_A($('#G2501_47_A'));
    $('#G2501_48_C').val(getNumToString(getRate(getStrFloat($('#G2501_48_A').val())*getStrFloat($('#G2501_48_B').val())/100,2),2));
    FG2501_48_C($('#G2501_48_C'));
}

/*G2501_48_B*/
function FG2501_48_B(obj){
    showStr(obj);
    $('#G2501_48_C').val(getNumToString(getRate(getStrFloat($('#G2501_48_A').val())*getStrFloat($('#G2501_48_B').val())/100,2),2));
    FG2501_48_C($('#G2501_48_C'));
}

/*G2501_48_C*/
function FG2501_48_C(obj){
    showStr(obj);
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
    $('#G2501_48_C').val(getNumToString(getRate(getStrFloat($('#G2501_48_A').val())*getStrFloat($('#G2501_48_B').val())/100,2),2));
}

/*G2501_49_A*/
function FG2501_49_A(obj){
    showStr(obj);
    $('#G2501_47_A').val(getNumToString((getStrFloat($('#G2501_48_A').val())+getStrFloat($('#G2501_49_A').val())+getStrFloat($('#G2501_50_A').val())+getStrFloat($('#G2501_51_A').val())+getStrFloat($('#G2501_52_A').val())),2));
    FG2501_47_A($('#G2501_47_A'));
    $('#G2501_49_C').val(getNumToString(getRate(getStrFloat($('#G2501_49_A').val())*getStrFloat($('#G2501_49_B').val())/100,2),2));
    FG2501_49_C($('#G2501_49_C'));
}

/*G2501_49_B*/
function FG2501_49_B(obj){
    showStr(obj);
    $('#G2501_49_C').val(getNumToString(getRate(getStrFloat($('#G2501_49_A').val())*getStrFloat($('#G2501_49_B').val())/100,2),2));
    FG2501_49_C($('#G2501_49_C'));
}

/*G2501_49_C*/
function FG2501_49_C(obj){
    showStr(obj);
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
    $('#G2501_49_C').val(getNumToString(getRate(getStrFloat($('#G2501_49_A').val())*getStrFloat($('#G2501_49_B').val())/100,2),2));
}

/*G2501_50_A*/
function FG2501_50_A(obj){
    showStr(obj);
    $('#G2501_47_A').val(getNumToString((getStrFloat($('#G2501_48_A').val())+getStrFloat($('#G2501_49_A').val())+getStrFloat($('#G2501_50_A').val())+getStrFloat($('#G2501_51_A').val())+getStrFloat($('#G2501_52_A').val())),2));
    FG2501_47_A($('#G2501_47_A'));
    $('#G2501_50_C').val(getNumToString(getRate(getStrFloat($('#G2501_50_A').val())*getStrFloat($('#G2501_50_B').val())/100,2),2));
    FG2501_50_C($('#G2501_50_C'));
}

/*G2501_50_B*/
function FG2501_50_B(obj){
    showStr(obj);
    $('#G2501_50_C').val(getNumToString(getRate(getStrFloat($('#G2501_50_A').val())*getStrFloat($('#G2501_50_B').val())/100,2),2));
    FG2501_50_C($('#G2501_50_C'));
}

/*G2501_50_C*/
function FG2501_50_C(obj){
    showStr(obj);
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
    $('#G2501_50_C').val(getNumToString(getRate(getStrFloat($('#G2501_50_A').val())*getStrFloat($('#G2501_50_B').val())/100,2),2));
}

/*G2501_51_A*/
function FG2501_51_A(obj){
    showStr(obj);
    $('#G2501_51_C').val(getNumToString(getRate(getStrFloat($('#G2501_51_A').val())*getStrFloat($('#G2501_51_B').val())/100,2),2));
    FG2501_51_C($('#G2501_51_C'));
    $('#G2501_47_A').val(getNumToString((getStrFloat($('#G2501_48_A').val())+getStrFloat($('#G2501_49_A').val())+getStrFloat($('#G2501_50_A').val())+getStrFloat($('#G2501_51_A').val())+getStrFloat($('#G2501_52_A').val())),2));
    FG2501_47_A($('#G2501_47_A'));
}

/*G2501_51_B*/
function FG2501_51_B(obj){
    showStr(obj);
    $('#G2501_51_C').val(getNumToString(getRate(getStrFloat($('#G2501_51_A').val())*getStrFloat($('#G2501_51_B').val())/100,2),2));
    FG2501_51_C($('#G2501_51_C'));
}

/*G2501_51_C*/
function FG2501_51_C(obj){
    showStr(obj);
    $('#G2501_51_C').val(getNumToString(getRate(getStrFloat($('#G2501_51_A').val())*getStrFloat($('#G2501_51_B').val())/100,2),2));
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
}

/*G2501_52_A*/
function FG2501_52_A(obj){
    showStr(obj);
    $('#G2501_52_C').val(getNumToString(getRate(getStrFloat($('#G2501_52_A').val())*getStrFloat($('#G2501_52_B').val())/100,2),2));
    FG2501_52_C($('#G2501_52_C'));
    $('#G2501_47_A').val(getNumToString((getStrFloat($('#G2501_48_A').val())+getStrFloat($('#G2501_49_A').val())+getStrFloat($('#G2501_50_A').val())+getStrFloat($('#G2501_51_A').val())+getStrFloat($('#G2501_52_A').val())),2));
    FG2501_47_A($('#G2501_47_A'));
}

/*G2501_52_B*/
function FG2501_52_B(obj){
    showStr(obj);
    $('#G2501_52_C').val(getNumToString(getRate(getStrFloat($('#G2501_52_A').val())*getStrFloat($('#G2501_52_B').val())/100,2),2));
    FG2501_52_C($('#G2501_52_C'));
}

/*G2501_52_C*/
function FG2501_52_C(obj){
    showStr(obj);
    $('#G2501_52_C').val(getNumToString(getRate(getStrFloat($('#G2501_52_A').val())*getStrFloat($('#G2501_52_B').val())/100,2),2));
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
}

/*G2501_53_A*/
function FG2501_53_A(obj){
    showStr(obj);
    $('#G2501_53_A').val(getNumToString((getStrFloat($('#G2501_54_A').val())+getStrFloat($('#G2501_55_A').val())+getStrFloat($('#G2501_56_A').val())+getStrFloat($('#G2501_57_A').val())+getStrFloat($('#G2501_58_A').val())+getStrFloat($('#G2501_59_A').val())+getStrFloat($('#G2501_60_A').val())+getStrFloat($('#G2501_61_A').val())),2));
    $('#G2501_35_A').val(getNumToString(getStrFloat($('#G2501_36_A').val())+getStrFloat($('#G2501_41_A').val())+getStrFloat($('#G2501_47_A').val())+getStrFloat($('#G2501_53_A').val())+getStrFloat($('#G2501_62_A').val())+getStrFloat($('#G2501_63_A').val()),2));
    FG2501_35_A($('#G2501_35_A'));
}

/*G2501_53_B*/
function FG2501_53_B(obj){
    showStr(obj);
}

/*G2501_53_C*/
function FG2501_53_C(obj){
    showStr(obj);
}

/*G2501_54_A*/
function FG2501_54_A(obj){
    showStr(obj);
    $('#G2501_53_A').val(getNumToString((getStrFloat($('#G2501_54_A').val())+getStrFloat($('#G2501_55_A').val())+getStrFloat($('#G2501_56_A').val())+getStrFloat($('#G2501_57_A').val())+getStrFloat($('#G2501_58_A').val())+getStrFloat($('#G2501_59_A').val())+getStrFloat($('#G2501_60_A').val())+getStrFloat($('#G2501_61_A').val())),2));
    FG2501_53_A($('#G2501_53_A'));
    $('#G2501_54_C').val(getNumToString(getRate(getStrFloat($('#G2501_54_A').val())*getStrFloat($('#G2501_54_B').val())/100,2),2));
    FG2501_54_C($('#G2501_54_C'));
}

/*G2501_54_B*/
function FG2501_54_B(obj){
    showStr(obj);
    $('#G2501_54_C').val(getNumToString(getRate(getStrFloat($('#G2501_54_A').val())*getStrFloat($('#G2501_54_B').val())/100,2),2));
    FG2501_54_C($('#G2501_54_C'));
}

/*G2501_54_C*/
function FG2501_54_C(obj){
    showStr(obj);
    $('#G2501_54_C').val(getNumToString(getRate(getStrFloat($('#G2501_54_A').val())*getStrFloat($('#G2501_54_B').val())/100,2),2));
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
}

/*G2501_55_A*/
function FG2501_55_A(obj){
    showStr(obj);
    $('#G2501_55_C').val(getNumToString(getRate(getStrFloat($('#G2501_55_A').val())*getStrFloat($('#G2501_55_B').val())/100,2),2));
    FG2501_55_C($('#G2501_55_C'));
    $('#G2501_53_A').val(getNumToString((getStrFloat($('#G2501_54_A').val())+getStrFloat($('#G2501_55_A').val())+getStrFloat($('#G2501_56_A').val())+getStrFloat($('#G2501_57_A').val())+getStrFloat($('#G2501_58_A').val())+getStrFloat($('#G2501_59_A').val())+getStrFloat($('#G2501_60_A').val())+getStrFloat($('#G2501_61_A').val())),2));
    FG2501_53_A($('#G2501_53_A'));
}

/*G2501_55_B*/
function FG2501_55_B(obj){
    showStr(obj);
    $('#G2501_55_C').val(getNumToString(getRate(getStrFloat($('#G2501_55_A').val())*getStrFloat($('#G2501_55_B').val())/100,2),2));
    FG2501_55_C($('#G2501_55_C'));
}

/*G2501_55_C*/
function FG2501_55_C(obj){
    showStr(obj);
    $('#G2501_55_C').val(getNumToString(getRate(getStrFloat($('#G2501_55_A').val())*getStrFloat($('#G2501_55_B').val())/100,2),2));
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
}

/*G2501_56_A*/
function FG2501_56_A(obj){
    showStr(obj);
    $('#G2501_56_C').val(getNumToString(getRate(getStrFloat($('#G2501_56_A').val())*getStrFloat($('#G2501_56_B').val())/100,2),2));
    FG2501_56_C($('#G2501_56_C'));
    $('#G2501_53_A').val(getNumToString((getStrFloat($('#G2501_54_A').val())+getStrFloat($('#G2501_55_A').val())+getStrFloat($('#G2501_56_A').val())+getStrFloat($('#G2501_57_A').val())+getStrFloat($('#G2501_58_A').val())+getStrFloat($('#G2501_59_A').val())+getStrFloat($('#G2501_60_A').val())+getStrFloat($('#G2501_61_A').val())),2));
    FG2501_53_A($('#G2501_53_A'));
}

/*G2501_56_B*/
function FG2501_56_B(obj){
    showStr(obj);
    $('#G2501_56_C').val(getNumToString(getRate(getStrFloat($('#G2501_56_A').val())*getStrFloat($('#G2501_56_B').val())/100,2),2));
    FG2501_56_C($('#G2501_56_C'));
}

/*G2501_56_C*/
function FG2501_56_C(obj){
    showStr(obj);
    $('#G2501_56_C').val(getNumToString(getRate(getStrFloat($('#G2501_56_A').val())*getStrFloat($('#G2501_56_B').val())/100,2),2));
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
}

/*G2501_57_A*/
function FG2501_57_A(obj){
    showStr(obj);
    $('#G2501_57_C').val(getNumToString(getRate(getStrFloat($('#G2501_57_A').val())*getStrFloat($('#G2501_57_B').val())/100,2),2));
    FG2501_57_C($('#G2501_57_C'));
    $('#G2501_53_A').val(getNumToString((getStrFloat($('#G2501_54_A').val())+getStrFloat($('#G2501_55_A').val())+getStrFloat($('#G2501_56_A').val())+getStrFloat($('#G2501_57_A').val())+getStrFloat($('#G2501_58_A').val())+getStrFloat($('#G2501_59_A').val())+getStrFloat($('#G2501_60_A').val())+getStrFloat($('#G2501_61_A').val())),2));
    FG2501_53_A($('#G2501_53_A'));
}

/*G2501_57_B*/
function FG2501_57_B(obj){
    showStr(obj);
    $('#G2501_57_C').val(getNumToString(getRate(getStrFloat($('#G2501_57_A').val())*getStrFloat($('#G2501_57_B').val())/100,2),2));
    FG2501_57_C($('#G2501_57_C'));
}

/*G2501_57_C*/
function FG2501_57_C(obj){
    showStr(obj);
    $('#G2501_57_C').val(getNumToString(getRate(getStrFloat($('#G2501_57_A').val())*getStrFloat($('#G2501_57_B').val())/100,2),2));
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
}

/*G2501_58_A*/
function FG2501_58_A(obj){
    showStr(obj);
    $('#G2501_58_C').val(getNumToString(getRate(getStrFloat($('#G2501_58_A').val())*getStrFloat($('#G2501_58_B').val())/100,2),2));
    FG2501_58_C($('#G2501_58_C'));
    $('#G2501_53_A').val(getNumToString((getStrFloat($('#G2501_54_A').val())+getStrFloat($('#G2501_55_A').val())+getStrFloat($('#G2501_56_A').val())+getStrFloat($('#G2501_57_A').val())+getStrFloat($('#G2501_58_A').val())+getStrFloat($('#G2501_59_A').val())+getStrFloat($('#G2501_60_A').val())+getStrFloat($('#G2501_61_A').val())),2));
    FG2501_53_A($('#G2501_53_A'));
}

/*G2501_58_B*/
function FG2501_58_B(obj){
    showStr(obj);
    $('#G2501_58_C').val(getNumToString(getRate(getStrFloat($('#G2501_58_A').val())*getStrFloat($('#G2501_58_B').val())/100,2),2));
    FG2501_58_C($('#G2501_58_C'));
}

/*G2501_58_C*/
function FG2501_58_C(obj){
    showStr(obj);
    $('#G2501_58_C').val(getNumToString(getRate(getStrFloat($('#G2501_58_A').val())*getStrFloat($('#G2501_58_B').val())/100,2),2));
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
}

/*G2501_59_A*/
function FG2501_59_A(obj){
    showStr(obj);
    $('#G2501_59_C').val(getNumToString(getRate(getStrFloat($('#G2501_59_A').val())*getStrFloat($('#G2501_59_B').val())/100,2),2));
    FG2501_59_C($('#G2501_59_C'));
    $('#G2501_53_A').val(getNumToString((getStrFloat($('#G2501_54_A').val())+getStrFloat($('#G2501_55_A').val())+getStrFloat($('#G2501_56_A').val())+getStrFloat($('#G2501_57_A').val())+getStrFloat($('#G2501_58_A').val())+getStrFloat($('#G2501_59_A').val())+getStrFloat($('#G2501_60_A').val())+getStrFloat($('#G2501_61_A').val())),2));
    FG2501_53_A($('#G2501_53_A'));
}

/*G2501_59_B*/
function FG2501_59_B(obj){
    showStr(obj);
    $('#G2501_59_C').val(getNumToString(getRate(getStrFloat($('#G2501_59_A').val())*getStrFloat($('#G2501_59_B').val())/100,2),2));
    FG2501_59_C($('#G2501_59_C'));
}

/*G2501_59_C*/
function FG2501_59_C(obj){
    showStr(obj);
    $('#G2501_59_C').val(getNumToString(getRate(getStrFloat($('#G2501_59_A').val())*getStrFloat($('#G2501_59_B').val())/100,2),2));
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
}

/*G2501_60_A*/
function FG2501_60_A(obj){
    showStr(obj);
    $('#G2501_53_A').val(getNumToString((getStrFloat($('#G2501_54_A').val())+getStrFloat($('#G2501_55_A').val())+getStrFloat($('#G2501_56_A').val())+getStrFloat($('#G2501_57_A').val())+getStrFloat($('#G2501_58_A').val())+getStrFloat($('#G2501_59_A').val())+getStrFloat($('#G2501_60_A').val())+getStrFloat($('#G2501_61_A').val())),2));
    FG2501_53_A($('#G2501_53_A'));
}

/*G2501_60_B*/
function FG2501_60_B(obj){
    showStr(obj);
}

/*G2501_60_C*/
function FG2501_60_C(obj){
    showStr(obj);
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
}

/*G2501_61_A*/
function FG2501_61_A(obj){
    showStr(obj);
    $('#G2501_61_C').val(getNumToString(getRate(getStrFloat($('#G2501_61_A').val())*getStrFloat($('#G2501_61_B').val())/100,2),2));
    FG2501_61_C($('#G2501_61_C'));
    $('#G2501_53_A').val(getNumToString((getStrFloat($('#G2501_54_A').val())+getStrFloat($('#G2501_55_A').val())+getStrFloat($('#G2501_56_A').val())+getStrFloat($('#G2501_57_A').val())+getStrFloat($('#G2501_58_A').val())+getStrFloat($('#G2501_59_A').val())+getStrFloat($('#G2501_60_A').val())+getStrFloat($('#G2501_61_A').val())),2));
    FG2501_53_A($('#G2501_53_A'));
}

/*G2501_61_B*/
function FG2501_61_B(obj){
    showStr(obj);
    $('#G2501_61_C').val(getNumToString(getRate(getStrFloat($('#G2501_61_A').val())*getStrFloat($('#G2501_61_B').val())/100,2),2));
    FG2501_61_C($('#G2501_61_C'));
}

/*G2501_61_C*/
function FG2501_61_C(obj){
    showStr(obj);
    $('#G2501_61_C').val(getNumToString(getRate(getStrFloat($('#G2501_61_A').val())*getStrFloat($('#G2501_61_B').val())/100,2),2));
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
}

/*G2501_62_A*/
function FG2501_62_A(obj){
    showStr(obj);
    $('#G2501_62_C').val(getNumToString(getRate(getStrFloat($('#G2501_62_A').val())*getStrFloat($('#G2501_62_B').val())/100,2),2));
    FG2501_62_C($('#G2501_62_C'));
    $('#G2501_35_A').val(getNumToString(getStrFloat($('#G2501_36_A').val())+getStrFloat($('#G2501_41_A').val())+getStrFloat($('#G2501_47_A').val())+getStrFloat($('#G2501_53_A').val())+getStrFloat($('#G2501_62_A').val())+getStrFloat($('#G2501_63_A').val()),2));
    FG2501_35_A($('#G2501_35_A'));
}

/*G2501_62_B*/
function FG2501_62_B(obj){
    showStr(obj);
    $('#G2501_62_C').val(getNumToString(getRate(getStrFloat($('#G2501_62_A').val())*getStrFloat($('#G2501_62_B').val())/100,2),2));
    FG2501_62_C($('#G2501_62_C'));
}

/*G2501_62_C*/
function FG2501_62_C(obj){
    showStr(obj);
    $('#G2501_62_C').val(getNumToString(getRate(getStrFloat($('#G2501_62_A').val())*getStrFloat($('#G2501_62_B').val())/100,2),2));
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
}

/*G2501_63_A*/
function FG2501_63_A(obj){
    showStr(obj);
    $('#G2501_63_C').val(getNumToString(getRate(getStrFloat($('#G2501_63_A').val())*getStrFloat($('#G2501_63_B').val())/100,2),2));
    FG2501_63_C($('#G2501_63_C'));
    $('#G2501_35_A').val(getNumToString(getStrFloat($('#G2501_36_A').val())+getStrFloat($('#G2501_41_A').val())+getStrFloat($('#G2501_47_A').val())+getStrFloat($('#G2501_53_A').val())+getStrFloat($('#G2501_62_A').val())+getStrFloat($('#G2501_63_A').val()),2));
    FG2501_35_A($('#G2501_35_A'));
}

/*G2501_63_B*/
function FG2501_63_B(obj){
    showStr(obj);
    $('#G2501_63_C').val(getNumToString(getRate(getStrFloat($('#G2501_63_A').val())*getStrFloat($('#G2501_63_B').val())/100,2),2));
    FG2501_63_C($('#G2501_63_C'));
}

/*G2501_63_C*/
function FG2501_63_C(obj){
    showStr(obj);
    $('#G2501_63_C').val(getNumToString(getRate(getStrFloat($('#G2501_63_A').val())*getStrFloat($('#G2501_63_B').val())/100,2),2));
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
    FG2501_159_A($('#G2501_159_A'));
}

/*G2501_64_A*/
function FG2501_64_A(obj){
    showStr(obj);
    $('#G2501_64_A').val(getNumToString(getStrFloat($('#G2501_65_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_79_A').val()),2));
}

/*G2501_64_B*/
function FG2501_64_B(obj){
    showStr(obj);
}

/*G2501_64_C*/
function FG2501_64_C(obj){
    showStr(obj);
}

/*G2501_65_A*/
function FG2501_65_A(obj){
    showStr(obj);
    $('#G2501_64_A').val(getNumToString(getStrFloat($('#G2501_65_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_79_A').val()),2));
    FG2501_64_A($('#G2501_64_A'));
    $('#G2501_65_C').val(getNumToString(getRate(getStrFloat($('#G2501_65_A').val())*getStrFloat($('#G2501_65_B').val())/100,2),2));
    FG2501_65_C($('#G2501_65_C'));
}

/*G2501_65_B*/
function FG2501_65_B(obj){
    showStr(obj);
    $('#G2501_65_C').val(getNumToString(getRate(getStrFloat($('#G2501_65_A').val())*getStrFloat($('#G2501_65_B').val())/100,2),2));
    FG2501_65_C($('#G2501_65_C'));
}

/*G2501_65_C*/
function FG2501_65_C(obj){
    showStr(obj);
    $('#G2501_65_C').val(getNumToString(getRate(getStrFloat($('#G2501_65_A').val())*getStrFloat($('#G2501_65_B').val())/100,2),2));
    $('#G2501_160_A').val(getNumToString((getStrFloat($('#G2501_65_C').val())+getStrFloat($('#G2501_70_C').val())+getStrFloat($('#G2501_72_C').val())+getStrFloat($('#G2501_75_C').val())+getStrFloat($('#G2501_77_C').val())+getStrFloat($('#G2501_80_C').val())+getStrFloat($('#G2501_81_C').val())),2));
    FG2501_160_A($('#G2501_160_A'));
}

/*G2501_66_A*/
function FG2501_66_A(obj){
    showStr(obj);
    $('#G2501_178_A').val(getNumToString(-(getStrFloat($('#G2501_66_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_128_A').val())+getStrFloat($('#G2501_172_B').val()))+(getStrFloat($('#G2501_67_A').val())+getStrFloat($('#G2501_71_A').val())+getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_172_A').val())),2));
    FG2501_178_A($('#G2501_178_A'));
}

/*G2501_66_B*/
function FG2501_66_B(obj){
    showStr(obj);
}

/*G2501_66_C*/
function FG2501_66_C(obj){
    showStr(obj);
}

/*G2501_67_A*/
function FG2501_67_A(obj){
    showStr(obj);
    $('#G2501_178_A').val(getNumToString(-(getStrFloat($('#G2501_66_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_128_A').val())+getStrFloat($('#G2501_172_B').val()))+(getStrFloat($('#G2501_67_A').val())+getStrFloat($('#G2501_71_A').val())+getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_172_A').val())),2));
    FG2501_178_A($('#G2501_178_A'));
}

/*G2501_67_B*/
function FG2501_67_B(obj){
    showStr(obj);
}

/*G2501_67_C*/
function FG2501_67_C(obj){
    showStr(obj);
}

/*G2501_68_A*/
function FG2501_68_A(obj){
    showStr(obj);
    $('#G2501_180_A').val(getNumToString(getStrFloat($('#G2501_68_A').val())+getStrFloat($('#G2501_73_A').val())-getStrFloat($('#G2501_130_A').val())+getStrFloat($('#G2501_173_A').val())-getStrFloat($('#G2501_173_B').val()),2));
    FG2501_180_A($('#G2501_180_A'));
}

/*G2501_68_B*/
function FG2501_68_B(obj){
    showStr(obj);
}

/*G2501_68_C*/
function FG2501_68_C(obj){
    showStr(obj);
}

/*G2501_69_A*/
function FG2501_69_A(obj){
    showStr(obj);
    $('#G2501_182_A').val(getNumToString(getStrFloat($('#G2501_69_A').val())+getStrFloat($('#G2501_76_A').val())+getStrFloat($('#G2501_78_A').val())+getStrFloat($('#G2501_174_A').val())-getStrFloat($('#G2501_132_A').val())-getStrFloat($('#G2501_174_B').val()),2));
    FG2501_182_A($('#G2501_182_A'));
}

/*G2501_69_B*/
function FG2501_69_B(obj){
    showStr(obj);
}

/*G2501_69_C*/
function FG2501_69_C(obj){
    showStr(obj);
}

/*G2501_70_A*/
function FG2501_70_A(obj){
    showStr(obj);
    $('#G2501_64_A').val(getNumToString(getStrFloat($('#G2501_65_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_79_A').val()),2));
    FG2501_64_A($('#G2501_64_A'));
    $('#G2501_70_C').val(getNumToString(getRate(getStrFloat($('#G2501_70_A').val())*getStrFloat($('#G2501_70_B').val())/100,2),2));
    FG2501_70_C($('#G2501_70_C'));
    $('#G2501_178_A').val(getNumToString(-(getStrFloat($('#G2501_66_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_128_A').val())+getStrFloat($('#G2501_172_B').val()))+(getStrFloat($('#G2501_67_A').val())+getStrFloat($('#G2501_71_A').val())+getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_172_A').val())),2));
    FG2501_178_A($('#G2501_178_A'));
}

/*G2501_70_B*/
function FG2501_70_B(obj){
    showStr(obj);
    $('#G2501_70_C').val(getNumToString(getRate(getStrFloat($('#G2501_70_A').val())*getStrFloat($('#G2501_70_B').val())/100,2),2));
    FG2501_70_C($('#G2501_70_C'));
}

/*G2501_70_C*/
function FG2501_70_C(obj){
    showStr(obj);
    $('#G2501_70_C').val(getNumToString(getRate(getStrFloat($('#G2501_70_A').val())*getStrFloat($('#G2501_70_B').val())/100,2),2));
    $('#G2501_160_A').val(getNumToString((getStrFloat($('#G2501_65_C').val())+getStrFloat($('#G2501_70_C').val())+getStrFloat($('#G2501_72_C').val())+getStrFloat($('#G2501_75_C').val())+getStrFloat($('#G2501_77_C').val())+getStrFloat($('#G2501_80_C').val())+getStrFloat($('#G2501_81_C').val())),2));
    FG2501_160_A($('#G2501_160_A'));
}

/*G2501_71_A*/
function FG2501_71_A(obj){
    showStr(obj);
    $('#G2501_178_A').val(getNumToString(-(getStrFloat($('#G2501_66_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_128_A').val())+getStrFloat($('#G2501_172_B').val()))+(getStrFloat($('#G2501_67_A').val())+getStrFloat($('#G2501_71_A').val())+getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_172_A').val())),2));
    FG2501_178_A($('#G2501_178_A'));
}

/*G2501_71_B*/
function FG2501_71_B(obj){
    showStr(obj);
}

/*G2501_71_C*/
function FG2501_71_C(obj){
    showStr(obj);
}

/*G2501_72_A*/
function FG2501_72_A(obj){
    showStr(obj);
    $('#G2501_64_A').val(getNumToString(getStrFloat($('#G2501_65_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_79_A').val()),2));
    FG2501_64_A($('#G2501_64_A'));
    $('#G2501_72_C').val(getNumToString(getRate(getStrFloat($('#G2501_72_A').val())*getStrFloat($('#G2501_72_B').val())/100,2),2));
    FG2501_72_C($('#G2501_72_C'));
    $('#G2501_178_A').val(getNumToString(-(getStrFloat($('#G2501_66_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_128_A').val())+getStrFloat($('#G2501_172_B').val()))+(getStrFloat($('#G2501_67_A').val())+getStrFloat($('#G2501_71_A').val())+getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_172_A').val())),2));
    FG2501_178_A($('#G2501_178_A'));
}

/*G2501_72_B*/
function FG2501_72_B(obj){
    showStr(obj);
    $('#G2501_72_C').val(getNumToString(getRate(getStrFloat($('#G2501_72_A').val())*getStrFloat($('#G2501_72_B').val())/100,2),2));
    FG2501_72_C($('#G2501_72_C'));
}

/*G2501_72_C*/
function FG2501_72_C(obj){
    showStr(obj);
    $('#G2501_72_C').val(getNumToString(getRate(getStrFloat($('#G2501_72_A').val())*getStrFloat($('#G2501_72_B').val())/100,2),2));
    $('#G2501_160_A').val(getNumToString((getStrFloat($('#G2501_65_C').val())+getStrFloat($('#G2501_70_C').val())+getStrFloat($('#G2501_72_C').val())+getStrFloat($('#G2501_75_C').val())+getStrFloat($('#G2501_77_C').val())+getStrFloat($('#G2501_80_C').val())+getStrFloat($('#G2501_81_C').val())),2));
    FG2501_160_A($('#G2501_160_A'));
}

/*G2501_73_A*/
function FG2501_73_A(obj){
    showStr(obj);
    $('#G2501_180_A').val(getNumToString(getStrFloat($('#G2501_68_A').val())+getStrFloat($('#G2501_73_A').val())-getStrFloat($('#G2501_130_A').val())+getStrFloat($('#G2501_173_A').val())-getStrFloat($('#G2501_173_B').val()),2));
    FG2501_180_A($('#G2501_180_A'));
}

/*G2501_73_B*/
function FG2501_73_B(obj){
    showStr(obj);
}

/*G2501_73_C*/
function FG2501_73_C(obj){
    showStr(obj);
}

/*G2501_74_A*/
function FG2501_74_A(obj){
    showStr(obj);
    $('#G2501_64_A').val(getNumToString(getStrFloat($('#G2501_65_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_79_A').val()),2));
    FG2501_64_A($('#G2501_64_A'));
    $('#G2501_74_A').val(getNumToString(getStrFloat($('#G2501_75_A').val())+getStrFloat($('#G2501_77_A').val()),2));
    $('#G2501_178_A').val(getNumToString(-(getStrFloat($('#G2501_66_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_128_A').val())+getStrFloat($('#G2501_172_B').val()))+(getStrFloat($('#G2501_67_A').val())+getStrFloat($('#G2501_71_A').val())+getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_172_A').val())),2));
    FG2501_178_A($('#G2501_178_A'));
}

/*G2501_74_B*/
function FG2501_74_B(obj){
    showStr(obj);
}

/*G2501_74_C*/
function FG2501_74_C(obj){
    showStr(obj);
}

/*G2501_75_A*/
function FG2501_75_A(obj){
    showStr(obj);
    $('#G2501_74_A').val(getNumToString(getStrFloat($('#G2501_75_A').val())+getStrFloat($('#G2501_77_A').val()),2));
    FG2501_74_A($('#G2501_74_A'));
    $('#G2501_75_C').val(getNumToString(getRate(getStrFloat($('#G2501_75_A').val())*getStrFloat($('#G2501_75_B').val())/100,2),2));
    FG2501_75_C($('#G2501_75_C'));
}

/*G2501_75_B*/
function FG2501_75_B(obj){
    showStr(obj);
    $('#G2501_75_C').val(getNumToString(getRate(getStrFloat($('#G2501_75_A').val())*getStrFloat($('#G2501_75_B').val())/100,2),2));
    FG2501_75_C($('#G2501_75_C'));
}

/*G2501_75_C*/
function FG2501_75_C(obj){
    showStr(obj);
    $('#G2501_75_C').val(getNumToString(getRate(getStrFloat($('#G2501_75_A').val())*getStrFloat($('#G2501_75_B').val())/100,2),2));
    $('#G2501_160_A').val(getNumToString((getStrFloat($('#G2501_65_C').val())+getStrFloat($('#G2501_70_C').val())+getStrFloat($('#G2501_72_C').val())+getStrFloat($('#G2501_75_C').val())+getStrFloat($('#G2501_77_C').val())+getStrFloat($('#G2501_80_C').val())+getStrFloat($('#G2501_81_C').val())),2));
    FG2501_160_A($('#G2501_160_A'));
}

/*G2501_76_A*/
function FG2501_76_A(obj){
    showStr(obj);
    $('#G2501_182_A').val(getNumToString(getStrFloat($('#G2501_69_A').val())+getStrFloat($('#G2501_76_A').val())+getStrFloat($('#G2501_78_A').val())+getStrFloat($('#G2501_174_A').val())-getStrFloat($('#G2501_132_A').val())-getStrFloat($('#G2501_174_B').val()),2));
    FG2501_182_A($('#G2501_182_A'));
}

/*G2501_76_B*/
function FG2501_76_B(obj){
    showStr(obj);
}

/*G2501_76_C*/
function FG2501_76_C(obj){
    showStr(obj);
}

/*G2501_77_A*/
function FG2501_77_A(obj){
    showStr(obj);
    $('#G2501_74_A').val(getNumToString(getStrFloat($('#G2501_75_A').val())+getStrFloat($('#G2501_77_A').val()),2));
    FG2501_74_A($('#G2501_74_A'));
    $('#G2501_77_C').val(getNumToString(getRate(getStrFloat($('#G2501_77_A').val())*getStrFloat($('#G2501_77_B').val())/100,2),2));
    FG2501_77_C($('#G2501_77_C'));
}

/*G2501_77_B*/
function FG2501_77_B(obj){
    showStr(obj);
    $('#G2501_77_C').val(getNumToString(getRate(getStrFloat($('#G2501_77_A').val())*getStrFloat($('#G2501_77_B').val())/100,2),2));
    FG2501_77_C($('#G2501_77_C'));
}

/*G2501_77_C*/
function FG2501_77_C(obj){
    showStr(obj);
    $('#G2501_77_C').val(getNumToString(getRate(getStrFloat($('#G2501_77_A').val())*getStrFloat($('#G2501_77_B').val())/100,2),2));
    $('#G2501_160_A').val(getNumToString((getStrFloat($('#G2501_65_C').val())+getStrFloat($('#G2501_70_C').val())+getStrFloat($('#G2501_72_C').val())+getStrFloat($('#G2501_75_C').val())+getStrFloat($('#G2501_77_C').val())+getStrFloat($('#G2501_80_C').val())+getStrFloat($('#G2501_81_C').val())),2));
    FG2501_160_A($('#G2501_160_A'));
}

/*G2501_78_A*/
function FG2501_78_A(obj){
    showStr(obj);
    $('#G2501_182_A').val(getNumToString(getStrFloat($('#G2501_69_A').val())+getStrFloat($('#G2501_76_A').val())+getStrFloat($('#G2501_78_A').val())+getStrFloat($('#G2501_174_A').val())-getStrFloat($('#G2501_132_A').val())-getStrFloat($('#G2501_174_B').val()),2));
    FG2501_182_A($('#G2501_182_A'));
}

/*G2501_78_B*/
function FG2501_78_B(obj){
    showStr(obj);
}

/*G2501_78_C*/
function FG2501_78_C(obj){
    showStr(obj);
}

/*G2501_79_A*/
function FG2501_79_A(obj){
    showStr(obj);
    $('#G2501_64_A').val(getNumToString(getStrFloat($('#G2501_65_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_79_A').val()),2));
    FG2501_64_A($('#G2501_64_A'));
    $('#G2501_79_A').val(getNumToString(getStrFloat($('#G2501_80_A').val())+getStrFloat($('#G2501_81_A').val()),2));
}

/*G2501_79_B*/
function FG2501_79_B(obj){
    showStr(obj);
}

/*G2501_79_C*/
function FG2501_79_C(obj){
    showStr(obj);
}

/*G2501_80_A*/
function FG2501_80_A(obj){
    showStr(obj);
    $('#G2501_79_A').val(getNumToString(getStrFloat($('#G2501_80_A').val())+getStrFloat($('#G2501_81_A').val()),2));
    FG2501_79_A($('#G2501_79_A'));
    $('#G2501_80_C').val(getNumToString(getRate(getStrFloat($('#G2501_80_A').val())*getStrFloat($('#G2501_80_B').val())/100,2),2));
    FG2501_80_C($('#G2501_80_C'));
}

/*G2501_80_B*/
function FG2501_80_B(obj){
    showStr(obj);
    $('#G2501_80_C').val(getNumToString(getRate(getStrFloat($('#G2501_80_A').val())*getStrFloat($('#G2501_80_B').val())/100,2),2));
    FG2501_80_C($('#G2501_80_C'));
}

/*G2501_80_C*/
function FG2501_80_C(obj){
    showStr(obj);
    $('#G2501_80_C').val(getNumToString(getRate(getStrFloat($('#G2501_80_A').val())*getStrFloat($('#G2501_80_B').val())/100,2),2));
    $('#G2501_160_A').val(getNumToString((getStrFloat($('#G2501_65_C').val())+getStrFloat($('#G2501_70_C').val())+getStrFloat($('#G2501_72_C').val())+getStrFloat($('#G2501_75_C').val())+getStrFloat($('#G2501_77_C').val())+getStrFloat($('#G2501_80_C').val())+getStrFloat($('#G2501_81_C').val())),2));
    FG2501_160_A($('#G2501_160_A'));
}

/*G2501_81_A*/
function FG2501_81_A(obj){
    showStr(obj);
    $('#G2501_79_A').val(getNumToString(getStrFloat($('#G2501_80_A').val())+getStrFloat($('#G2501_81_A').val()),2));
    FG2501_79_A($('#G2501_79_A'));
    $('#G2501_81_C').val(getNumToString(getRate(getStrFloat($('#G2501_81_A').val())*getStrFloat($('#G2501_81_B').val())/100,2),2));
    FG2501_81_C($('#G2501_81_C'));
}

/*G2501_81_B*/
function FG2501_81_B(obj){
    showStr(obj);
    $('#G2501_81_C').val(getNumToString(getRate(getStrFloat($('#G2501_81_A').val())*getStrFloat($('#G2501_81_B').val())/100,2),2));
    FG2501_81_C($('#G2501_81_C'));
}

/*G2501_81_C*/
function FG2501_81_C(obj){
    showStr(obj);
    $('#G2501_81_C').val(getNumToString(getRate(getStrFloat($('#G2501_81_A').val())*getStrFloat($('#G2501_81_B').val())/100,2),2));
    $('#G2501_160_A').val(getNumToString((getStrFloat($('#G2501_65_C').val())+getStrFloat($('#G2501_70_C').val())+getStrFloat($('#G2501_72_C').val())+getStrFloat($('#G2501_75_C').val())+getStrFloat($('#G2501_77_C').val())+getStrFloat($('#G2501_80_C').val())+getStrFloat($('#G2501_81_C').val())),2));
    FG2501_160_A($('#G2501_160_A'));
}

/*G2501_82_A*/
function FG2501_82_A(obj){
    showStr(obj);
    $('#G2501_82_A').val(getNumToString((getStrFloat($('#G2501_83_A').val())+getStrFloat($('#G2501_84_A').val())+getStrFloat($('#G2501_85_A').val())+getStrFloat($('#G2501_86_A').val())+getStrFloat($('#G2501_87_A').val())+getStrFloat($('#G2501_88_A').val())+getStrFloat($('#G2501_89_A').val())+getStrFloat($('#G2501_90_A').val())+getStrFloat($('#G2501_91_A').val()))+getStrFloat($('#G2501_94_A').val())+getStrFloat($('#G2501_111_A').val()),2));
}

/*G2501_82_B*/
function FG2501_82_B(obj){
    showStr(obj);
}

/*G2501_82_C*/
function FG2501_82_C(obj){
    showStr(obj);
}

/*G2501_83_A*/
function FG2501_83_A(obj){
    showStr(obj);
    $('#G2501_82_A').val(getNumToString((getStrFloat($('#G2501_83_A').val())+getStrFloat($('#G2501_84_A').val())+getStrFloat($('#G2501_85_A').val())+getStrFloat($('#G2501_86_A').val())+getStrFloat($('#G2501_87_A').val())+getStrFloat($('#G2501_88_A').val())+getStrFloat($('#G2501_89_A').val())+getStrFloat($('#G2501_90_A').val())+getStrFloat($('#G2501_91_A').val()))+getStrFloat($('#G2501_94_A').val())+getStrFloat($('#G2501_111_A').val()),2));
    FG2501_82_A($('#G2501_82_A'));
    $('#G2501_83_C').val(getNumToString(getRate(getStrFloat($('#G2501_83_A').val())*getStrFloat($('#G2501_83_B').val())/100,2),2));
    FG2501_83_C($('#G2501_83_C'));
}

/*G2501_83_B*/
function FG2501_83_B(obj){
    showStr(obj);
    $('#G2501_83_C').val(getNumToString(getRate(getStrFloat($('#G2501_83_A').val())*getStrFloat($('#G2501_83_B').val())/100,2),2));
    FG2501_83_C($('#G2501_83_C'));
}

/*G2501_83_C*/
function FG2501_83_C(obj){
    showStr(obj);
    $('#G2501_83_C').val(getNumToString(getRate(getStrFloat($('#G2501_83_A').val())*getStrFloat($('#G2501_83_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_84_A*/
function FG2501_84_A(obj){
    showStr(obj);
    $('#G2501_82_A').val(getNumToString((getStrFloat($('#G2501_83_A').val())+getStrFloat($('#G2501_84_A').val())+getStrFloat($('#G2501_85_A').val())+getStrFloat($('#G2501_86_A').val())+getStrFloat($('#G2501_87_A').val())+getStrFloat($('#G2501_88_A').val())+getStrFloat($('#G2501_89_A').val())+getStrFloat($('#G2501_90_A').val())+getStrFloat($('#G2501_91_A').val()))+getStrFloat($('#G2501_94_A').val())+getStrFloat($('#G2501_111_A').val()),2));
    FG2501_82_A($('#G2501_82_A'));
    $('#G2501_84_C').val(getNumToString(getRate(getStrFloat($('#G2501_84_A').val())*getStrFloat($('#G2501_84_B').val())/100,2),2));
    FG2501_84_C($('#G2501_84_C'));
}

/*G2501_84_B*/
function FG2501_84_B(obj){
    showStr(obj);
    $('#G2501_84_C').val(getNumToString(getRate(getStrFloat($('#G2501_84_A').val())*getStrFloat($('#G2501_84_B').val())/100,2),2));
    FG2501_84_C($('#G2501_84_C'));
}

/*G2501_84_C*/
function FG2501_84_C(obj){
    showStr(obj);
    $('#G2501_84_C').val(getNumToString(getRate(getStrFloat($('#G2501_84_A').val())*getStrFloat($('#G2501_84_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_85_A*/
function FG2501_85_A(obj){
    showStr(obj);
    $('#G2501_82_A').val(getNumToString((getStrFloat($('#G2501_83_A').val())+getStrFloat($('#G2501_84_A').val())+getStrFloat($('#G2501_85_A').val())+getStrFloat($('#G2501_86_A').val())+getStrFloat($('#G2501_87_A').val())+getStrFloat($('#G2501_88_A').val())+getStrFloat($('#G2501_89_A').val())+getStrFloat($('#G2501_90_A').val())+getStrFloat($('#G2501_91_A').val()))+getStrFloat($('#G2501_94_A').val())+getStrFloat($('#G2501_111_A').val()),2));
    FG2501_82_A($('#G2501_82_A'));
    $('#G2501_85_C').val(getNumToString(getRate(getStrFloat($('#G2501_85_A').val())*getStrFloat($('#G2501_85_B').val())/100,2),2));
    FG2501_85_C($('#G2501_85_C'));
}

/*G2501_85_B*/
function FG2501_85_B(obj){
    showStr(obj);
    $('#G2501_85_C').val(getNumToString(getRate(getStrFloat($('#G2501_85_A').val())*getStrFloat($('#G2501_85_B').val())/100,2),2));
    FG2501_85_C($('#G2501_85_C'));
}

/*G2501_85_C*/
function FG2501_85_C(obj){
    showStr(obj);
    $('#G2501_85_C').val(getNumToString(getRate(getStrFloat($('#G2501_85_A').val())*getStrFloat($('#G2501_85_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_86_A*/
function FG2501_86_A(obj){
    showStr(obj);
    $('#G2501_82_A').val(getNumToString((getStrFloat($('#G2501_83_A').val())+getStrFloat($('#G2501_84_A').val())+getStrFloat($('#G2501_85_A').val())+getStrFloat($('#G2501_86_A').val())+getStrFloat($('#G2501_87_A').val())+getStrFloat($('#G2501_88_A').val())+getStrFloat($('#G2501_89_A').val())+getStrFloat($('#G2501_90_A').val())+getStrFloat($('#G2501_91_A').val()))+getStrFloat($('#G2501_94_A').val())+getStrFloat($('#G2501_111_A').val()),2));
    FG2501_82_A($('#G2501_82_A'));
    $('#G2501_86_C').val(getNumToString(getRate(getStrFloat($('#G2501_86_A').val())*getStrFloat($('#G2501_86_B').val())/100,2),2));
    FG2501_86_C($('#G2501_86_C'));
}

/*G2501_86_B*/
function FG2501_86_B(obj){
    showStr(obj);
    $('#G2501_86_C').val(getNumToString(getRate(getStrFloat($('#G2501_86_A').val())*getStrFloat($('#G2501_86_B').val())/100,2),2));
    FG2501_86_C($('#G2501_86_C'));
}

/*G2501_86_C*/
function FG2501_86_C(obj){
    showStr(obj);
    $('#G2501_86_C').val(getNumToString(getRate(getStrFloat($('#G2501_86_A').val())*getStrFloat($('#G2501_86_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_87_A*/
function FG2501_87_A(obj){
    showStr(obj);
    $('#G2501_82_A').val(getNumToString((getStrFloat($('#G2501_83_A').val())+getStrFloat($('#G2501_84_A').val())+getStrFloat($('#G2501_85_A').val())+getStrFloat($('#G2501_86_A').val())+getStrFloat($('#G2501_87_A').val())+getStrFloat($('#G2501_88_A').val())+getStrFloat($('#G2501_89_A').val())+getStrFloat($('#G2501_90_A').val())+getStrFloat($('#G2501_91_A').val()))+getStrFloat($('#G2501_94_A').val())+getStrFloat($('#G2501_111_A').val()),2));
    FG2501_82_A($('#G2501_82_A'));
    $('#G2501_87_C').val(getNumToString(getRate(getStrFloat($('#G2501_87_A').val())*getStrFloat($('#G2501_87_B').val())/100,2),2));
    FG2501_87_C($('#G2501_87_C'));
}

/*G2501_87_B*/
function FG2501_87_B(obj){
    showStr(obj);
    $('#G2501_87_C').val(getNumToString(getRate(getStrFloat($('#G2501_87_A').val())*getStrFloat($('#G2501_87_B').val())/100,2),2));
    FG2501_87_C($('#G2501_87_C'));
}

/*G2501_87_C*/
function FG2501_87_C(obj){
    showStr(obj);
    $('#G2501_87_C').val(getNumToString(getRate(getStrFloat($('#G2501_87_A').val())*getStrFloat($('#G2501_87_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_88_A*/
function FG2501_88_A(obj){
    showStr(obj);
    $('#G2501_82_A').val(getNumToString((getStrFloat($('#G2501_83_A').val())+getStrFloat($('#G2501_84_A').val())+getStrFloat($('#G2501_85_A').val())+getStrFloat($('#G2501_86_A').val())+getStrFloat($('#G2501_87_A').val())+getStrFloat($('#G2501_88_A').val())+getStrFloat($('#G2501_89_A').val())+getStrFloat($('#G2501_90_A').val())+getStrFloat($('#G2501_91_A').val()))+getStrFloat($('#G2501_94_A').val())+getStrFloat($('#G2501_111_A').val()),2));
    FG2501_82_A($('#G2501_82_A'));
    $('#G2501_88_C').val(getNumToString(getRate(getStrFloat($('#G2501_88_A').val())*getStrFloat($('#G2501_88_B').val())/100,2),2));
    FG2501_88_C($('#G2501_88_C'));
}

/*G2501_88_B*/
function FG2501_88_B(obj){
    showStr(obj);
    $('#G2501_88_C').val(getNumToString(getRate(getStrFloat($('#G2501_88_A').val())*getStrFloat($('#G2501_88_B').val())/100,2),2));
    FG2501_88_C($('#G2501_88_C'));
}

/*G2501_88_C*/
function FG2501_88_C(obj){
    showStr(obj);
    $('#G2501_88_C').val(getNumToString(getRate(getStrFloat($('#G2501_88_A').val())*getStrFloat($('#G2501_88_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_89_A*/
function FG2501_89_A(obj){
    showStr(obj);
    $('#G2501_82_A').val(getNumToString((getStrFloat($('#G2501_83_A').val())+getStrFloat($('#G2501_84_A').val())+getStrFloat($('#G2501_85_A').val())+getStrFloat($('#G2501_86_A').val())+getStrFloat($('#G2501_87_A').val())+getStrFloat($('#G2501_88_A').val())+getStrFloat($('#G2501_89_A').val())+getStrFloat($('#G2501_90_A').val())+getStrFloat($('#G2501_91_A').val()))+getStrFloat($('#G2501_94_A').val())+getStrFloat($('#G2501_111_A').val()),2));
    FG2501_82_A($('#G2501_82_A'));
    $('#G2501_89_C').val(getNumToString(getRate(getStrFloat($('#G2501_89_A').val())*getStrFloat($('#G2501_89_B').val())/100,2),2));
    FG2501_89_C($('#G2501_89_C'));
}

/*G2501_89_B*/
function FG2501_89_B(obj){
    showStr(obj);
    $('#G2501_89_C').val(getNumToString(getRate(getStrFloat($('#G2501_89_A').val())*getStrFloat($('#G2501_89_B').val())/100,2),2));
    FG2501_89_C($('#G2501_89_C'));
}

/*G2501_89_C*/
function FG2501_89_C(obj){
    showStr(obj);
    $('#G2501_89_C').val(getNumToString(getRate(getStrFloat($('#G2501_89_A').val())*getStrFloat($('#G2501_89_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_90_A*/
function FG2501_90_A(obj){
    showStr(obj);
    $('#G2501_82_A').val(getNumToString((getStrFloat($('#G2501_83_A').val())+getStrFloat($('#G2501_84_A').val())+getStrFloat($('#G2501_85_A').val())+getStrFloat($('#G2501_86_A').val())+getStrFloat($('#G2501_87_A').val())+getStrFloat($('#G2501_88_A').val())+getStrFloat($('#G2501_89_A').val())+getStrFloat($('#G2501_90_A').val())+getStrFloat($('#G2501_91_A').val()))+getStrFloat($('#G2501_94_A').val())+getStrFloat($('#G2501_111_A').val()),2));
    FG2501_82_A($('#G2501_82_A'));
    $('#G2501_90_C').val(getNumToString(getRate(getStrFloat($('#G2501_90_A').val())*getStrFloat($('#G2501_90_B').val())/100,2),2));
    FG2501_90_C($('#G2501_90_C'));
}

/*G2501_90_B*/
function FG2501_90_B(obj){
    showStr(obj);
    $('#G2501_90_C').val(getNumToString(getRate(getStrFloat($('#G2501_90_A').val())*getStrFloat($('#G2501_90_B').val())/100,2),2));
    FG2501_90_C($('#G2501_90_C'));
}

/*G2501_90_C*/
function FG2501_90_C(obj){
    showStr(obj);
    $('#G2501_90_C').val(getNumToString(getRate(getStrFloat($('#G2501_90_A').val())*getStrFloat($('#G2501_90_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_91_A*/
function FG2501_91_A(obj){
    showStr(obj);
    $('#G2501_82_A').val(getNumToString((getStrFloat($('#G2501_83_A').val())+getStrFloat($('#G2501_84_A').val())+getStrFloat($('#G2501_85_A').val())+getStrFloat($('#G2501_86_A').val())+getStrFloat($('#G2501_87_A').val())+getStrFloat($('#G2501_88_A').val())+getStrFloat($('#G2501_89_A').val())+getStrFloat($('#G2501_90_A').val())+getStrFloat($('#G2501_91_A').val()))+getStrFloat($('#G2501_94_A').val())+getStrFloat($('#G2501_111_A').val()),2));
    FG2501_82_A($('#G2501_82_A'));
    $('#G2501_91_A').val(getNumToString((getStrFloat($('#G2501_92_A').val())+getStrFloat($('#G2501_93_A').val())),2));
}

/*G2501_91_B*/
function FG2501_91_B(obj){
    showStr(obj);
}

/*G2501_91_C*/
function FG2501_91_C(obj){
    showStr(obj);
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_92_A*/
function FG2501_92_A(obj){
    showStr(obj);
    $('#G2501_91_A').val(getNumToString((getStrFloat($('#G2501_92_A').val())+getStrFloat($('#G2501_93_A').val())),2));
    FG2501_91_A($('#G2501_91_A'));
    $('#G2501_92_C').val(getNumToString(getRate(getStrFloat($('#G2501_92_A').val())*getStrFloat($('#G2501_92_B').val())/100,2),2));
    FG2501_92_C($('#G2501_92_C'));
}

/*G2501_92_B*/
function FG2501_92_B(obj){
    showStr(obj);
    $('#G2501_92_C').val(getNumToString(getRate(getStrFloat($('#G2501_92_A').val())*getStrFloat($('#G2501_92_B').val())/100,2),2));
    FG2501_92_C($('#G2501_92_C'));
}

/*G2501_92_C*/
function FG2501_92_C(obj){
    showStr(obj);
    $('#G2501_92_C').val(getNumToString(getRate(getStrFloat($('#G2501_92_A').val())*getStrFloat($('#G2501_92_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_93_A*/
function FG2501_93_A(obj){
    showStr(obj);
    $('#G2501_91_A').val(getNumToString((getStrFloat($('#G2501_92_A').val())+getStrFloat($('#G2501_93_A').val())),2));
    FG2501_91_A($('#G2501_91_A'));
    $('#G2501_93_C').val(getNumToString(getRate(getStrFloat($('#G2501_93_A').val())*getStrFloat($('#G2501_93_B').val())/100,2),2));
    FG2501_93_C($('#G2501_93_C'));
}

/*G2501_93_B*/
function FG2501_93_B(obj){
    showStr(obj);
    $('#G2501_93_C').val(getNumToString(getRate(getStrFloat($('#G2501_93_A').val())*getStrFloat($('#G2501_93_B').val())/100,2),2));
    FG2501_93_C($('#G2501_93_C'));
}

/*G2501_93_C*/
function FG2501_93_C(obj){
    showStr(obj);
    $('#G2501_93_C').val(getNumToString(getRate(getStrFloat($('#G2501_93_A').val())*getStrFloat($('#G2501_93_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_94_A*/
function FG2501_94_A(obj){
    showStr(obj);
    $('#G2501_82_A').val(getNumToString((getStrFloat($('#G2501_83_A').val())+getStrFloat($('#G2501_84_A').val())+getStrFloat($('#G2501_85_A').val())+getStrFloat($('#G2501_86_A').val())+getStrFloat($('#G2501_87_A').val())+getStrFloat($('#G2501_88_A').val())+getStrFloat($('#G2501_89_A').val())+getStrFloat($('#G2501_90_A').val())+getStrFloat($('#G2501_91_A').val()))+getStrFloat($('#G2501_94_A').val())+getStrFloat($('#G2501_111_A').val()),2));
    FG2501_82_A($('#G2501_82_A'));
    $('#G2501_94_A').val(getNumToString(getStrFloat($('#G2501_95_A').val())+getStrFloat($('#G2501_96_A').val())+getStrFloat($('#G2501_99_A').val())+getStrFloat($('#G2501_102_A').val())+getStrFloat($('#G2501_105_A').val())+getStrFloat($('#G2501_108_A').val()),2));
}

/*G2501_94_B*/
function FG2501_94_B(obj){
    showStr(obj);
}

/*G2501_94_C*/
function FG2501_94_C(obj){
    showStr(obj);
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_95_A*/
function FG2501_95_A(obj){
    showStr(obj);
    $('#G2501_94_A').val(getNumToString(getStrFloat($('#G2501_95_A').val())+getStrFloat($('#G2501_96_A').val())+getStrFloat($('#G2501_99_A').val())+getStrFloat($('#G2501_102_A').val())+getStrFloat($('#G2501_105_A').val())+getStrFloat($('#G2501_108_A').val()),2));
    FG2501_94_A($('#G2501_94_A'));
    $('#G2501_95_C').val(getNumToString(getRate(getStrFloat($('#G2501_95_A').val())*getStrFloat($('#G2501_95_B').val())/100,2),2));
    FG2501_95_C($('#G2501_95_C'));
}

/*G2501_95_B*/
function FG2501_95_B(obj){
    showStr(obj);
    $('#G2501_95_C').val(getNumToString(getRate(getStrFloat($('#G2501_95_A').val())*getStrFloat($('#G2501_95_B').val())/100,2),2));
    FG2501_95_C($('#G2501_95_C'));
}

/*G2501_95_C*/
function FG2501_95_C(obj){
    showStr(obj);
    $('#G2501_95_C').val(getNumToString(getRate(getStrFloat($('#G2501_95_A').val())*getStrFloat($('#G2501_95_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_96_A*/
function FG2501_96_A(obj){
    showStr(obj);
    $('#G2501_94_A').val(getNumToString(getStrFloat($('#G2501_95_A').val())+getStrFloat($('#G2501_96_A').val())+getStrFloat($('#G2501_99_A').val())+getStrFloat($('#G2501_102_A').val())+getStrFloat($('#G2501_105_A').val())+getStrFloat($('#G2501_108_A').val()),2));
    FG2501_94_A($('#G2501_94_A'));
    $('#G2501_96_A').val(getNumToString((getStrFloat($('#G2501_97_A').val())+getStrFloat($('#G2501_98_A').val())),2));
}

/*G2501_96_B*/
function FG2501_96_B(obj){
    showStr(obj);
}

/*G2501_96_C*/
function FG2501_96_C(obj){
    showStr(obj);
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_97_A*/
function FG2501_97_A(obj){
    showStr(obj);
    $('#G2501_96_A').val(getNumToString((getStrFloat($('#G2501_97_A').val())+getStrFloat($('#G2501_98_A').val())),2));
    FG2501_96_A($('#G2501_96_A'));
    $('#G2501_97_C').val(getNumToString(getRate(getStrFloat($('#G2501_97_A').val())*getStrFloat($('#G2501_97_B').val())/100,2),2));
    FG2501_97_C($('#G2501_97_C'));
}

/*G2501_97_B*/
function FG2501_97_B(obj){
    showStr(obj);
    $('#G2501_97_C').val(getNumToString(getRate(getStrFloat($('#G2501_97_A').val())*getStrFloat($('#G2501_97_B').val())/100,2),2));
    FG2501_97_C($('#G2501_97_C'));
}

/*G2501_97_C*/
function FG2501_97_C(obj){
    showStr(obj);
    $('#G2501_97_C').val(getNumToString(getRate(getStrFloat($('#G2501_97_A').val())*getStrFloat($('#G2501_97_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_98_A*/
function FG2501_98_A(obj){
    showStr(obj);
    $('#G2501_96_A').val(getNumToString((getStrFloat($('#G2501_97_A').val())+getStrFloat($('#G2501_98_A').val())),2));
    FG2501_96_A($('#G2501_96_A'));
    $('#G2501_98_C').val(getNumToString(getRate(getStrFloat($('#G2501_98_A').val())*getStrFloat($('#G2501_98_B').val())/100,2),2));
    FG2501_98_C($('#G2501_98_C'));
}

/*G2501_98_B*/
function FG2501_98_B(obj){
    showStr(obj);
    $('#G2501_98_C').val(getNumToString(getRate(getStrFloat($('#G2501_98_A').val())*getStrFloat($('#G2501_98_B').val())/100,2),2));
    FG2501_98_C($('#G2501_98_C'));
}

/*G2501_98_C*/
function FG2501_98_C(obj){
    showStr(obj);
    $('#G2501_98_C').val(getNumToString(getRate(getStrFloat($('#G2501_98_A').val())*getStrFloat($('#G2501_98_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_99_A*/
function FG2501_99_A(obj){
    showStr(obj);
    $('#G2501_94_A').val(getNumToString(getStrFloat($('#G2501_95_A').val())+getStrFloat($('#G2501_96_A').val())+getStrFloat($('#G2501_99_A').val())+getStrFloat($('#G2501_102_A').val())+getStrFloat($('#G2501_105_A').val())+getStrFloat($('#G2501_108_A').val()),2));
    FG2501_94_A($('#G2501_94_A'));
    $('#G2501_99_A').val(getNumToString((getStrFloat($('#G2501_100_A').val())+getStrFloat($('#G2501_101_A').val())),2));
}

/*G2501_99_B*/
function FG2501_99_B(obj){
    showStr(obj);
}

/*G2501_99_C*/
function FG2501_99_C(obj){
    showStr(obj);
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_100_A*/
function FG2501_100_A(obj){
    showStr(obj);
    $('#G2501_99_A').val(getNumToString((getStrFloat($('#G2501_100_A').val())+getStrFloat($('#G2501_101_A').val())),2));
    FG2501_99_A($('#G2501_99_A'));
    $('#G2501_100_C').val(getNumToString(getRate(getStrFloat($('#G2501_100_A').val())*getStrFloat($('#G2501_100_B').val())/100,2),2));
    FG2501_100_C($('#G2501_100_C'));
}

/*G2501_100_B*/
function FG2501_100_B(obj){
    showStr(obj);
    $('#G2501_100_C').val(getNumToString(getRate(getStrFloat($('#G2501_100_A').val())*getStrFloat($('#G2501_100_B').val())/100,2),2));
    FG2501_100_C($('#G2501_100_C'));
}

/*G2501_100_C*/
function FG2501_100_C(obj){
    showStr(obj);
    $('#G2501_100_C').val(getNumToString(getRate(getStrFloat($('#G2501_100_A').val())*getStrFloat($('#G2501_100_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_101_A*/
function FG2501_101_A(obj){
    showStr(obj);
    $('#G2501_99_A').val(getNumToString((getStrFloat($('#G2501_100_A').val())+getStrFloat($('#G2501_101_A').val())),2));
    FG2501_99_A($('#G2501_99_A'));
    $('#G2501_101_C').val(getNumToString(getRate(getStrFloat($('#G2501_101_A').val())*getStrFloat($('#G2501_101_B').val())/100,2),2));
    FG2501_101_C($('#G2501_101_C'));
}

/*G2501_101_B*/
function FG2501_101_B(obj){
    showStr(obj);
    $('#G2501_101_C').val(getNumToString(getRate(getStrFloat($('#G2501_101_A').val())*getStrFloat($('#G2501_101_B').val())/100,2),2));
    FG2501_101_C($('#G2501_101_C'));
}

/*G2501_101_C*/
function FG2501_101_C(obj){
    showStr(obj);
    $('#G2501_101_C').val(getNumToString(getRate(getStrFloat($('#G2501_101_A').val())*getStrFloat($('#G2501_101_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_102_A*/
function FG2501_102_A(obj){
    showStr(obj);
    $('#G2501_94_A').val(getNumToString(getStrFloat($('#G2501_95_A').val())+getStrFloat($('#G2501_96_A').val())+getStrFloat($('#G2501_99_A').val())+getStrFloat($('#G2501_102_A').val())+getStrFloat($('#G2501_105_A').val())+getStrFloat($('#G2501_108_A').val()),2));
    FG2501_94_A($('#G2501_94_A'));
    $('#G2501_102_A').val(getNumToString((getStrFloat($('#G2501_103_A').val())+getStrFloat($('#G2501_104_A').val())),2));
}

/*G2501_102_B*/
function FG2501_102_B(obj){
    showStr(obj);
}

/*G2501_102_C*/
function FG2501_102_C(obj){
    showStr(obj);
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_103_A*/
function FG2501_103_A(obj){
    showStr(obj);
    $('#G2501_102_A').val(getNumToString((getStrFloat($('#G2501_103_A').val())+getStrFloat($('#G2501_104_A').val())),2));
    FG2501_102_A($('#G2501_102_A'));
    $('#G2501_103_C').val(getNumToString(getRate(getStrFloat($('#G2501_103_A').val())*getStrFloat($('#G2501_103_B').val())/100,2),2));
    FG2501_103_C($('#G2501_103_C'));
}

/*G2501_103_B*/
function FG2501_103_B(obj){
    showStr(obj);
    $('#G2501_103_C').val(getNumToString(getRate(getStrFloat($('#G2501_103_A').val())*getStrFloat($('#G2501_103_B').val())/100,2),2));
    FG2501_103_C($('#G2501_103_C'));
}

/*G2501_103_C*/
function FG2501_103_C(obj){
    showStr(obj);
    $('#G2501_103_C').val(getNumToString(getRate(getStrFloat($('#G2501_103_A').val())*getStrFloat($('#G2501_103_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_104_A*/
function FG2501_104_A(obj){
    showStr(obj);
    $('#G2501_102_A').val(getNumToString((getStrFloat($('#G2501_103_A').val())+getStrFloat($('#G2501_104_A').val())),2));
    FG2501_102_A($('#G2501_102_A'));
    $('#G2501_104_C').val(getNumToString(getRate(getStrFloat($('#G2501_104_A').val())*getStrFloat($('#G2501_104_B').val())/100,2),2));
    FG2501_104_C($('#G2501_104_C'));
}

/*G2501_104_B*/
function FG2501_104_B(obj){
    showStr(obj);
    $('#G2501_104_C').val(getNumToString(getRate(getStrFloat($('#G2501_104_A').val())*getStrFloat($('#G2501_104_B').val())/100,2),2));
    FG2501_104_C($('#G2501_104_C'));
}

/*G2501_104_C*/
function FG2501_104_C(obj){
    showStr(obj);
    $('#G2501_104_C').val(getNumToString(getRate(getStrFloat($('#G2501_104_A').val())*getStrFloat($('#G2501_104_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_105_A*/
function FG2501_105_A(obj){
    showStr(obj);
    $('#G2501_94_A').val(getNumToString(getStrFloat($('#G2501_95_A').val())+getStrFloat($('#G2501_96_A').val())+getStrFloat($('#G2501_99_A').val())+getStrFloat($('#G2501_102_A').val())+getStrFloat($('#G2501_105_A').val())+getStrFloat($('#G2501_108_A').val()),2));
    FG2501_94_A($('#G2501_94_A'));
    $('#G2501_105_A').val(getNumToString((getStrFloat($('#G2501_106_A').val())+getStrFloat($('#G2501_107_A').val())),2));
}

/*G2501_105_B*/
function FG2501_105_B(obj){
    showStr(obj);
}

/*G2501_105_C*/
function FG2501_105_C(obj){
    showStr(obj);
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_106_A*/
function FG2501_106_A(obj){
    showStr(obj);
    $('#G2501_105_A').val(getNumToString((getStrFloat($('#G2501_106_A').val())+getStrFloat($('#G2501_107_A').val())),2));
    FG2501_105_A($('#G2501_105_A'));
    $('#G2501_106_C').val(getNumToString(getRate(getStrFloat($('#G2501_106_A').val())*getStrFloat($('#G2501_106_B').val())/100,2),2));
    FG2501_106_C($('#G2501_106_C'));
}

/*G2501_106_B*/
function FG2501_106_B(obj){
    showStr(obj);
    $('#G2501_106_C').val(getNumToString(getRate(getStrFloat($('#G2501_106_A').val())*getStrFloat($('#G2501_106_B').val())/100,2),2));
    FG2501_106_C($('#G2501_106_C'));
}

/*G2501_106_C*/
function FG2501_106_C(obj){
    showStr(obj);
    $('#G2501_106_C').val(getNumToString(getRate(getStrFloat($('#G2501_106_A').val())*getStrFloat($('#G2501_106_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_107_A*/
function FG2501_107_A(obj){
    showStr(obj);
    $('#G2501_105_A').val(getNumToString((getStrFloat($('#G2501_106_A').val())+getStrFloat($('#G2501_107_A').val())),2));
    FG2501_105_A($('#G2501_105_A'));
    $('#G2501_107_C').val(getNumToString(getRate(getStrFloat($('#G2501_107_A').val())*getStrFloat($('#G2501_107_B').val())/100,2),2));
    FG2501_107_C($('#G2501_107_C'));
}

/*G2501_107_B*/
function FG2501_107_B(obj){
    showStr(obj);
    $('#G2501_107_C').val(getNumToString(getRate(getStrFloat($('#G2501_107_A').val())*getStrFloat($('#G2501_107_B').val())/100,2),2));
    FG2501_107_C($('#G2501_107_C'));
}

/*G2501_107_C*/
function FG2501_107_C(obj){
    showStr(obj);
    $('#G2501_107_C').val(getNumToString(getRate(getStrFloat($('#G2501_107_A').val())*getStrFloat($('#G2501_107_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_108_A*/
function FG2501_108_A(obj){
    showStr(obj);
    $('#G2501_94_A').val(getNumToString(getStrFloat($('#G2501_95_A').val())+getStrFloat($('#G2501_96_A').val())+getStrFloat($('#G2501_99_A').val())+getStrFloat($('#G2501_102_A').val())+getStrFloat($('#G2501_105_A').val())+getStrFloat($('#G2501_108_A').val()),2));
    FG2501_94_A($('#G2501_94_A'));
    $('#G2501_108_A').val(getNumToString((getStrFloat($('#G2501_109_A').val())+getStrFloat($('#G2501_110_A').val())),2));
}

/*G2501_108_B*/
function FG2501_108_B(obj){
    showStr(obj);
}

/*G2501_108_C*/
function FG2501_108_C(obj){
    showStr(obj);
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_109_A*/
function FG2501_109_A(obj){
    showStr(obj);
    $('#G2501_108_A').val(getNumToString((getStrFloat($('#G2501_109_A').val())+getStrFloat($('#G2501_110_A').val())),2));
    FG2501_108_A($('#G2501_108_A'));
    $('#G2501_109_C').val(getNumToString(getRate(getStrFloat($('#G2501_109_A').val())*getStrFloat($('#G2501_109_B').val())/100,2),2));
    FG2501_109_C($('#G2501_109_C'));
}

/*G2501_109_B*/
function FG2501_109_B(obj){
    showStr(obj);
    $('#G2501_109_C').val(getNumToString(getRate(getStrFloat($('#G2501_109_A').val())*getStrFloat($('#G2501_109_B').val())/100,2),2));
    FG2501_109_C($('#G2501_109_C'));
}

/*G2501_109_C*/
function FG2501_109_C(obj){
    showStr(obj);
    $('#G2501_109_C').val(getNumToString(getRate(getStrFloat($('#G2501_109_A').val())*getStrFloat($('#G2501_109_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_110_A*/
function FG2501_110_A(obj){
    showStr(obj);
    $('#G2501_108_A').val(getNumToString((getStrFloat($('#G2501_109_A').val())+getStrFloat($('#G2501_110_A').val())),2));
    FG2501_108_A($('#G2501_108_A'));
    $('#G2501_110_C').val(getNumToString(getRate(getStrFloat($('#G2501_110_A').val())*getStrFloat($('#G2501_110_B').val())/100,2),2));
    FG2501_110_C($('#G2501_110_C'));
}

/*G2501_110_B*/
function FG2501_110_B(obj){
    showStr(obj);
    $('#G2501_110_C').val(getNumToString(getRate(getStrFloat($('#G2501_110_A').val())*getStrFloat($('#G2501_110_B').val())/100,2),2));
    FG2501_110_C($('#G2501_110_C'));
}

/*G2501_110_C*/
function FG2501_110_C(obj){
    showStr(obj);
    $('#G2501_110_C').val(getNumToString(getRate(getStrFloat($('#G2501_110_A').val())*getStrFloat($('#G2501_110_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_111_A*/
function FG2501_111_A(obj){
    showStr(obj);
    $('#G2501_82_A').val(getNumToString((getStrFloat($('#G2501_83_A').val())+getStrFloat($('#G2501_84_A').val())+getStrFloat($('#G2501_85_A').val())+getStrFloat($('#G2501_86_A').val())+getStrFloat($('#G2501_87_A').val())+getStrFloat($('#G2501_88_A').val())+getStrFloat($('#G2501_89_A').val())+getStrFloat($('#G2501_90_A').val())+getStrFloat($('#G2501_91_A').val()))+getStrFloat($('#G2501_94_A').val())+getStrFloat($('#G2501_111_A').val()),2));
    FG2501_82_A($('#G2501_82_A'));
    $('#G2501_111_A').val(getNumToString((getStrFloat($('#G2501_112_A').val())+getStrFloat($('#G2501_113_A').val())),2));
}

/*G2501_111_B*/
function FG2501_111_B(obj){
    showStr(obj);
}

/*G2501_111_C*/
function FG2501_111_C(obj){
    showStr(obj);
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_112_A*/
function FG2501_112_A(obj){
    showStr(obj);
    $('#G2501_111_A').val(getNumToString((getStrFloat($('#G2501_112_A').val())+getStrFloat($('#G2501_113_A').val())),2));
    FG2501_111_A($('#G2501_111_A'));
    $('#G2501_112_C').val(getNumToString(getRate(getStrFloat($('#G2501_112_A').val())*getStrFloat($('#G2501_112_B').val())/100,2),2));
    FG2501_112_C($('#G2501_112_C'));
}

/*G2501_112_B*/
function FG2501_112_B(obj){
    showStr(obj);
    $('#G2501_112_C').val(getNumToString(getRate(getStrFloat($('#G2501_112_A').val())*getStrFloat($('#G2501_112_B').val())/100,2),2));
    FG2501_112_C($('#G2501_112_C'));
}

/*G2501_112_C*/
function FG2501_112_C(obj){
    showStr(obj);
    $('#G2501_112_C').val(getNumToString(getRate(getStrFloat($('#G2501_112_A').val())*getStrFloat($('#G2501_112_B').val())/100,2),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_113_A*/
function FG2501_113_A(obj){
    showStr(obj);
    $('#G2501_111_A').val(getNumToString((getStrFloat($('#G2501_112_A').val())+getStrFloat($('#G2501_113_A').val())),2));
    FG2501_111_A($('#G2501_111_A'));
    $('#G2501_113_C').val(getNumToString(Math.max(0,getStrFloat($('#G2501_113_A').val())-(getStrFloat($('#G2501_138_C').val())+getStrFloat($('#G2501_139_C').val())+getStrFloat($('#G2501_140_C').val())+getStrFloat($('#G2501_141_C').val()))),2));
    FG2501_113_C($('#G2501_113_C'));
}

/*G2501_113_B*/
function FG2501_113_B(obj){
    showStr(obj);
}

/*G2501_113_C*/
function FG2501_113_C(obj){
    showStr(obj);
    $('#G2501_113_C').val(getNumToString(Math.max(0,getStrFloat($('#G2501_113_A').val())-(getStrFloat($('#G2501_138_C').val())+getStrFloat($('#G2501_139_C').val())+getStrFloat($('#G2501_140_C').val())+getStrFloat($('#G2501_141_C').val()))),2));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
    FG2501_161_A($('#G2501_161_A'));
}

/*G2501_114_A*/
function FG2501_114_A(obj){
    showStr(obj);
    $('#G2501_114_A').val(getNumToString((getStrFloat($('#G2501_115_A').val())+getStrFloat($('#G2501_116_A').val())+getStrFloat($('#G2501_117_A').val())+getStrFloat($('#G2501_118_A').val())+getStrFloat($('#G2501_119_A').val())+getStrFloat($('#G2501_121_A').val())+getStrFloat($('#G2501_122_A').val())),2));
}

/*G2501_114_B*/
function FG2501_114_B(obj){
    showStr(obj);
}

/*G2501_114_C*/
function FG2501_114_C(obj){
    showStr(obj);
}

/*G2501_115_A*/
function FG2501_115_A(obj){
    showStr(obj);
    $('#G2501_114_A').val(getNumToString((getStrFloat($('#G2501_115_A').val())+getStrFloat($('#G2501_116_A').val())+getStrFloat($('#G2501_117_A').val())+getStrFloat($('#G2501_118_A').val())+getStrFloat($('#G2501_119_A').val())+getStrFloat($('#G2501_121_A').val())+getStrFloat($('#G2501_122_A').val())),2));
    FG2501_114_A($('#G2501_114_A'));
    $('#G2501_115_C').val(getNumToString(getRate(getStrFloat($('#G2501_115_A').val())*getStrFloat($('#G2501_115_B').val())/100,2),2));
    FG2501_115_C($('#G2501_115_C'));
}

/*G2501_115_B*/
function FG2501_115_B(obj){
    showStr(obj);
    $('#G2501_115_C').val(getNumToString(getRate(getStrFloat($('#G2501_115_A').val())*getStrFloat($('#G2501_115_B').val())/100,2),2));
    FG2501_115_C($('#G2501_115_C'));
}

/*G2501_115_C*/
function FG2501_115_C(obj){
    showStr(obj);
    $('#G2501_115_C').val(getNumToString(getRate(getStrFloat($('#G2501_115_A').val())*getStrFloat($('#G2501_115_B').val())/100,2),2));
    $('#G2501_162_A').val(getNumToString((getStrFloat($('#G2501_115_C').val())+getStrFloat($('#G2501_116_C').val())+getStrFloat($('#G2501_117_C').val())+getStrFloat($('#G2501_118_C').val())+getStrFloat($('#G2501_119_C').val())+getStrFloat($('#G2501_120_C').val())+getStrFloat($('#G2501_121_C').val())+getStrFloat($('#G2501_122_C').val())),2));
    FG2501_162_A($('#G2501_162_A'));
}

/*G2501_116_A*/
function FG2501_116_A(obj){
    showStr(obj);
    $('#G2501_114_A').val(getNumToString((getStrFloat($('#G2501_115_A').val())+getStrFloat($('#G2501_116_A').val())+getStrFloat($('#G2501_117_A').val())+getStrFloat($('#G2501_118_A').val())+getStrFloat($('#G2501_119_A').val())+getStrFloat($('#G2501_121_A').val())+getStrFloat($('#G2501_122_A').val())),2));
    FG2501_114_A($('#G2501_114_A'));
    $('#G2501_116_C').val(getNumToString(getRate(getStrFloat($('#G2501_116_A').val())*getStrFloat($('#G2501_116_B').val())/100,2),2));
    FG2501_116_C($('#G2501_116_C'));
}

/*G2501_116_B*/
function FG2501_116_B(obj){
    showStr(obj);
    $('#G2501_116_C').val(getNumToString(getRate(getStrFloat($('#G2501_116_A').val())*getStrFloat($('#G2501_116_B').val())/100,2),2));
    FG2501_116_C($('#G2501_116_C'));
}

/*G2501_116_C*/
function FG2501_116_C(obj){
    showStr(obj);
    $('#G2501_116_C').val(getNumToString(getRate(getStrFloat($('#G2501_116_A').val())*getStrFloat($('#G2501_116_B').val())/100,2),2));
    $('#G2501_162_A').val(getNumToString((getStrFloat($('#G2501_115_C').val())+getStrFloat($('#G2501_116_C').val())+getStrFloat($('#G2501_117_C').val())+getStrFloat($('#G2501_118_C').val())+getStrFloat($('#G2501_119_C').val())+getStrFloat($('#G2501_120_C').val())+getStrFloat($('#G2501_121_C').val())+getStrFloat($('#G2501_122_C').val())),2));
    FG2501_162_A($('#G2501_162_A'));
}

/*G2501_117_A*/
function FG2501_117_A(obj){
    showStr(obj);
    $('#G2501_114_A').val(getNumToString((getStrFloat($('#G2501_115_A').val())+getStrFloat($('#G2501_116_A').val())+getStrFloat($('#G2501_117_A').val())+getStrFloat($('#G2501_118_A').val())+getStrFloat($('#G2501_119_A').val())+getStrFloat($('#G2501_121_A').val())+getStrFloat($('#G2501_122_A').val())),2));
    FG2501_114_A($('#G2501_114_A'));
    $('#G2501_117_C').val(getNumToString(getRate(getStrFloat($('#G2501_117_A').val())*getStrFloat($('#G2501_117_B').val())/100,2),2));
    FG2501_117_C($('#G2501_117_C'));
}

/*G2501_117_B*/
function FG2501_117_B(obj){
    showStr(obj);
    $('#G2501_117_C').val(getNumToString(getRate(getStrFloat($('#G2501_117_A').val())*getStrFloat($('#G2501_117_B').val())/100,2),2));
    FG2501_117_C($('#G2501_117_C'));
}

/*G2501_117_C*/
function FG2501_117_C(obj){
    showStr(obj);
    $('#G2501_117_C').val(getNumToString(getRate(getStrFloat($('#G2501_117_A').val())*getStrFloat($('#G2501_117_B').val())/100,2),2));
    $('#G2501_162_A').val(getNumToString((getStrFloat($('#G2501_115_C').val())+getStrFloat($('#G2501_116_C').val())+getStrFloat($('#G2501_117_C').val())+getStrFloat($('#G2501_118_C').val())+getStrFloat($('#G2501_119_C').val())+getStrFloat($('#G2501_120_C').val())+getStrFloat($('#G2501_121_C').val())+getStrFloat($('#G2501_122_C').val())),2));
    FG2501_162_A($('#G2501_162_A'));
}

/*G2501_118_A*/
function FG2501_118_A(obj){
    showStr(obj);
    $('#G2501_114_A').val(getNumToString((getStrFloat($('#G2501_115_A').val())+getStrFloat($('#G2501_116_A').val())+getStrFloat($('#G2501_117_A').val())+getStrFloat($('#G2501_118_A').val())+getStrFloat($('#G2501_119_A').val())+getStrFloat($('#G2501_121_A').val())+getStrFloat($('#G2501_122_A').val())),2));
    FG2501_114_A($('#G2501_114_A'));
    $('#G2501_118_C').val(getNumToString(getRate(getStrFloat($('#G2501_118_A').val())*getStrFloat($('#G2501_118_B').val())/100,2),2));
    FG2501_118_C($('#G2501_118_C'));
}

/*G2501_118_B*/
function FG2501_118_B(obj){
    showStr(obj);
    $('#G2501_118_C').val(getNumToString(getRate(getStrFloat($('#G2501_118_A').val())*getStrFloat($('#G2501_118_B').val())/100,2),2));
    FG2501_118_C($('#G2501_118_C'));
}

/*G2501_118_C*/
function FG2501_118_C(obj){
    showStr(obj);
    $('#G2501_118_C').val(getNumToString(getRate(getStrFloat($('#G2501_118_A').val())*getStrFloat($('#G2501_118_B').val())/100,2),2));
    $('#G2501_162_A').val(getNumToString((getStrFloat($('#G2501_115_C').val())+getStrFloat($('#G2501_116_C').val())+getStrFloat($('#G2501_117_C').val())+getStrFloat($('#G2501_118_C').val())+getStrFloat($('#G2501_119_C').val())+getStrFloat($('#G2501_120_C').val())+getStrFloat($('#G2501_121_C').val())+getStrFloat($('#G2501_122_C').val())),2));
    FG2501_162_A($('#G2501_162_A'));
}

/*G2501_119_A*/
function FG2501_119_A(obj){
    showStr(obj);
    $('#G2501_114_A').val(getNumToString((getStrFloat($('#G2501_115_A').val())+getStrFloat($('#G2501_116_A').val())+getStrFloat($('#G2501_117_A').val())+getStrFloat($('#G2501_118_A').val())+getStrFloat($('#G2501_119_A').val())+getStrFloat($('#G2501_121_A').val())+getStrFloat($('#G2501_122_A').val())),2));
    FG2501_114_A($('#G2501_114_A'));
    $('#G2501_119_C').val(getNumToString(getRate(getStrFloat($('#G2501_119_A').val())*getStrFloat($('#G2501_119_B').val())/100,2),2));
    FG2501_119_C($('#G2501_119_C'));
}

/*G2501_119_B*/
function FG2501_119_B(obj){
    showStr(obj);
    $('#G2501_119_C').val(getNumToString(getRate(getStrFloat($('#G2501_119_A').val())*getStrFloat($('#G2501_119_B').val())/100,2),2));
    FG2501_119_C($('#G2501_119_C'));
}

/*G2501_119_C*/
function FG2501_119_C(obj){
    showStr(obj);
    $('#G2501_119_C').val(getNumToString(getRate(getStrFloat($('#G2501_119_A').val())*getStrFloat($('#G2501_119_B').val())/100,2),2));
    $('#G2501_162_A').val(getNumToString((getStrFloat($('#G2501_115_C').val())+getStrFloat($('#G2501_116_C').val())+getStrFloat($('#G2501_117_C').val())+getStrFloat($('#G2501_118_C').val())+getStrFloat($('#G2501_119_C').val())+getStrFloat($('#G2501_120_C').val())+getStrFloat($('#G2501_121_C').val())+getStrFloat($('#G2501_122_C').val())),2));
    FG2501_162_A($('#G2501_162_A'));
}

/*G2501_120_A*/
function FG2501_120_A(obj){
    showStr(obj);
}

/*G2501_120_B*/
function FG2501_120_B(obj){
    showStr(obj);
}

/*G2501_120_C*/
function FG2501_120_C(obj){
    showStr(obj);
    $('#G2501_162_A').val(getNumToString((getStrFloat($('#G2501_115_C').val())+getStrFloat($('#G2501_116_C').val())+getStrFloat($('#G2501_117_C').val())+getStrFloat($('#G2501_118_C').val())+getStrFloat($('#G2501_119_C').val())+getStrFloat($('#G2501_120_C').val())+getStrFloat($('#G2501_121_C').val())+getStrFloat($('#G2501_122_C').val())),2));
    FG2501_162_A($('#G2501_162_A'));
}

/*G2501_121_A*/
function FG2501_121_A(obj){
    showStr(obj);
    $('#G2501_114_A').val(getNumToString((getStrFloat($('#G2501_115_A').val())+getStrFloat($('#G2501_116_A').val())+getStrFloat($('#G2501_117_A').val())+getStrFloat($('#G2501_118_A').val())+getStrFloat($('#G2501_119_A').val())+getStrFloat($('#G2501_121_A').val())+getStrFloat($('#G2501_122_A').val())),2));
    FG2501_114_A($('#G2501_114_A'));
    $('#G2501_121_C').val(getNumToString(getRate(getStrFloat($('#G2501_121_A').val())*getStrFloat($('#G2501_121_B').val())/100,2),2));
    FG2501_121_C($('#G2501_121_C'));
}

/*G2501_121_B*/
function FG2501_121_B(obj){
    showStr(obj);
    $('#G2501_121_C').val(getNumToString(getRate(getStrFloat($('#G2501_121_A').val())*getStrFloat($('#G2501_121_B').val())/100,2),2));
    FG2501_121_C($('#G2501_121_C'));
}

/*G2501_121_C*/
function FG2501_121_C(obj){
    showStr(obj);
    $('#G2501_121_C').val(getNumToString(getRate(getStrFloat($('#G2501_121_A').val())*getStrFloat($('#G2501_121_B').val())/100,2),2));
    $('#G2501_162_A').val(getNumToString((getStrFloat($('#G2501_115_C').val())+getStrFloat($('#G2501_116_C').val())+getStrFloat($('#G2501_117_C').val())+getStrFloat($('#G2501_118_C').val())+getStrFloat($('#G2501_119_C').val())+getStrFloat($('#G2501_120_C').val())+getStrFloat($('#G2501_121_C').val())+getStrFloat($('#G2501_122_C').val())),2));
    FG2501_162_A($('#G2501_162_A'));
}

/*G2501_122_A*/
function FG2501_122_A(obj){
    showStr(obj);
    $('#G2501_114_A').val(getNumToString((getStrFloat($('#G2501_115_A').val())+getStrFloat($('#G2501_116_A').val())+getStrFloat($('#G2501_117_A').val())+getStrFloat($('#G2501_118_A').val())+getStrFloat($('#G2501_119_A').val())+getStrFloat($('#G2501_121_A').val())+getStrFloat($('#G2501_122_A').val())),2));
    FG2501_114_A($('#G2501_114_A'));
    $('#G2501_122_C').val(getNumToString(getRate(getStrFloat($('#G2501_122_A').val())*getStrFloat($('#G2501_122_B').val())/100,2),2));
    FG2501_122_C($('#G2501_122_C'));
}

/*G2501_122_B*/
function FG2501_122_B(obj){
    showStr(obj);
    $('#G2501_122_C').val(getNumToString(getRate(getStrFloat($('#G2501_122_A').val())*getStrFloat($('#G2501_122_B').val())/100,2),2));
    FG2501_122_C($('#G2501_122_C'));
}

/*G2501_122_C*/
function FG2501_122_C(obj){
    showStr(obj);
    $('#G2501_122_C').val(getNumToString(getRate(getStrFloat($('#G2501_122_A').val())*getStrFloat($('#G2501_122_B').val())/100,2),2));
    $('#G2501_162_A').val(getNumToString((getStrFloat($('#G2501_115_C').val())+getStrFloat($('#G2501_116_C').val())+getStrFloat($('#G2501_117_C').val())+getStrFloat($('#G2501_118_C').val())+getStrFloat($('#G2501_119_C').val())+getStrFloat($('#G2501_120_C').val())+getStrFloat($('#G2501_121_C').val())+getStrFloat($('#G2501_122_C').val())),2));
    FG2501_162_A($('#G2501_162_A'));
}

/*G2501_123_A*/
function FG2501_123_A(obj){
    showStr(obj);
    $('#G2501_123_C').val(getNumToString(getRate(getStrFloat($('#G2501_123_A').val())*getStrFloat($('#G2501_123_B').val())/100,2),2));
    FG2501_123_C($('#G2501_123_C'));
}

/*G2501_123_B*/
function FG2501_123_B(obj){
    showStr(obj);
    $('#G2501_123_C').val(getNumToString(getRate(getStrFloat($('#G2501_123_A').val())*getStrFloat($('#G2501_123_B').val())/100,2),2));
    FG2501_123_C($('#G2501_123_C'));
}

/*G2501_123_C*/
function FG2501_123_C(obj){
    showStr(obj);
    $('#G2501_123_C').val(getNumToString(getRate(getStrFloat($('#G2501_123_A').val())*getStrFloat($('#G2501_123_B').val())/100,2),2));
    $('#G2501_163_A').val(getNumToString(getStrFloat($('#G2501_123_C').val()),2));
    FG2501_163_A($('#G2501_163_A'));
}

/*G2501_124_A*/
function FG2501_124_A(obj){
    showStr(obj);
}

/*G2501_124_B*/
function FG2501_124_B(obj){
    showStr(obj);
}

/*G2501_124_C*/
function FG2501_124_C(obj){
    showStr(obj);
}

/*G2501_125_A*/
function FG2501_125_A(obj){
    showStr(obj);
    $('#G2501_125_A').val(getNumToString(getStrFloat($('#G2501_126_A').val())+getStrFloat($('#G2501_135_A').val())+getStrFloat($('#G2501_136_A').val()),2));
}

/*G2501_125_B*/
function FG2501_125_B(obj){
    showStr(obj);
}

/*G2501_125_C*/
function FG2501_125_C(obj){
    showStr(obj);
}

/*G2501_126_A*/
function FG2501_126_A(obj){
    showStr(obj);
    $('#G2501_125_A').val(getNumToString(getStrFloat($('#G2501_126_A').val())+getStrFloat($('#G2501_135_A').val())+getStrFloat($('#G2501_136_A').val()),2));
    FG2501_125_A($('#G2501_125_A'));
    $('#G2501_126_A').val(getNumToString(getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_134_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_133_A').val()),2));
}

/*G2501_126_B*/
function FG2501_126_B(obj){
    showStr(obj);
}

/*G2501_126_C*/
function FG2501_126_C(obj){
    showStr(obj);
}

/*G2501_127_A*/
function FG2501_127_A(obj){
    showStr(obj);
    $('#G2501_126_A').val(getNumToString(getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_134_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_133_A').val()),2));
    FG2501_126_A($('#G2501_126_A'));
    $('#G2501_127_C').val(getNumToString(getRate(getStrFloat($('#G2501_127_A').val())*getStrFloat($('#G2501_127_B').val())/100,2),2));
    FG2501_127_C($('#G2501_127_C'));
    $('#G2501_178_A').val(getNumToString(-(getStrFloat($('#G2501_66_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_128_A').val())+getStrFloat($('#G2501_172_B').val()))+(getStrFloat($('#G2501_67_A').val())+getStrFloat($('#G2501_71_A').val())+getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_172_A').val())),2));
    FG2501_178_A($('#G2501_178_A'));
}

/*G2501_127_B*/
function FG2501_127_B(obj){
    showStr(obj);
    $('#G2501_127_C').val(getNumToString(getRate(getStrFloat($('#G2501_127_A').val())*getStrFloat($('#G2501_127_B').val())/100,2),2));
    FG2501_127_C($('#G2501_127_C'));
}

/*G2501_127_C*/
function FG2501_127_C(obj){
    showStr(obj);
    $('#G2501_127_C').val(getNumToString(getRate(getStrFloat($('#G2501_127_A').val())*getStrFloat($('#G2501_127_B').val())/100,2),2));
    $('#G2501_165_A').val(getNumToString((getStrFloat($('#G2501_127_C').val())+getStrFloat($('#G2501_128_C').val())+getStrFloat($('#G2501_129_C').val())+getStrFloat($('#G2501_130_C').val())+getStrFloat($('#G2501_131_C').val())+getStrFloat($('#G2501_132_C').val())+getStrFloat($('#G2501_133_C').val())+getStrFloat($('#G2501_134_C').val())+getStrFloat($('#G2501_135_C').val())+getStrFloat($('#G2501_136_C').val())),2));
    FG2501_165_A($('#G2501_165_A'));
}

/*G2501_128_A*/
function FG2501_128_A(obj){
    showStr(obj);
    $('#G2501_178_A').val(getNumToString(-(getStrFloat($('#G2501_66_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_128_A').val())+getStrFloat($('#G2501_172_B').val()))+(getStrFloat($('#G2501_67_A').val())+getStrFloat($('#G2501_71_A').val())+getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_172_A').val())),2));
    FG2501_178_A($('#G2501_178_A'));
}

/*G2501_128_B*/
function FG2501_128_B(obj){
    showStr(obj);
}

/*G2501_128_C*/
function FG2501_128_C(obj){
    showStr(obj);
    $('#G2501_165_A').val(getNumToString((getStrFloat($('#G2501_127_C').val())+getStrFloat($('#G2501_128_C').val())+getStrFloat($('#G2501_129_C').val())+getStrFloat($('#G2501_130_C').val())+getStrFloat($('#G2501_131_C').val())+getStrFloat($('#G2501_132_C').val())+getStrFloat($('#G2501_133_C').val())+getStrFloat($('#G2501_134_C').val())+getStrFloat($('#G2501_135_C').val())+getStrFloat($('#G2501_136_C').val())),2));
    FG2501_165_A($('#G2501_165_A'));
}

/*G2501_129_A*/
function FG2501_129_A(obj){
    showStr(obj);
    $('#G2501_129_C').val(getNumToString(getRate(getStrFloat($('#G2501_129_A').val())*getStrFloat($('#G2501_129_B').val())/100,2),2));
    FG2501_129_C($('#G2501_129_C'));
    $('#G2501_126_A').val(getNumToString(getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_134_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_133_A').val()),2));
    FG2501_126_A($('#G2501_126_A'));
    $('#G2501_178_A').val(getNumToString(-(getStrFloat($('#G2501_66_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_128_A').val())+getStrFloat($('#G2501_172_B').val()))+(getStrFloat($('#G2501_67_A').val())+getStrFloat($('#G2501_71_A').val())+getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_172_A').val())),2));
    FG2501_178_A($('#G2501_178_A'));
}

/*G2501_129_B*/
function FG2501_129_B(obj){
    showStr(obj);
    $('#G2501_129_C').val(getNumToString(getRate(getStrFloat($('#G2501_129_A').val())*getStrFloat($('#G2501_129_B').val())/100,2),2));
    FG2501_129_C($('#G2501_129_C'));
}

/*G2501_129_C*/
function FG2501_129_C(obj){
    showStr(obj);
    $('#G2501_129_C').val(getNumToString(getRate(getStrFloat($('#G2501_129_A').val())*getStrFloat($('#G2501_129_B').val())/100,2),2));
    $('#G2501_165_A').val(getNumToString((getStrFloat($('#G2501_127_C').val())+getStrFloat($('#G2501_128_C').val())+getStrFloat($('#G2501_129_C').val())+getStrFloat($('#G2501_130_C').val())+getStrFloat($('#G2501_131_C').val())+getStrFloat($('#G2501_132_C').val())+getStrFloat($('#G2501_133_C').val())+getStrFloat($('#G2501_134_C').val())+getStrFloat($('#G2501_135_C').val())+getStrFloat($('#G2501_136_C').val())),2));
    FG2501_165_A($('#G2501_165_A'));
}

/*G2501_130_A*/
function FG2501_130_A(obj){
    showStr(obj);
    $('#G2501_180_A').val(getNumToString(getStrFloat($('#G2501_68_A').val())+getStrFloat($('#G2501_73_A').val())-getStrFloat($('#G2501_130_A').val())+getStrFloat($('#G2501_173_A').val())-getStrFloat($('#G2501_173_B').val()),2));
    FG2501_180_A($('#G2501_180_A'));
}

/*G2501_130_B*/
function FG2501_130_B(obj){
    showStr(obj);
}

/*G2501_130_C*/
function FG2501_130_C(obj){
    showStr(obj);
    $('#G2501_165_A').val(getNumToString((getStrFloat($('#G2501_127_C').val())+getStrFloat($('#G2501_128_C').val())+getStrFloat($('#G2501_129_C').val())+getStrFloat($('#G2501_130_C').val())+getStrFloat($('#G2501_131_C').val())+getStrFloat($('#G2501_132_C').val())+getStrFloat($('#G2501_133_C').val())+getStrFloat($('#G2501_134_C').val())+getStrFloat($('#G2501_135_C').val())+getStrFloat($('#G2501_136_C').val())),2));
    FG2501_165_A($('#G2501_165_A'));
}

/*G2501_131_A*/
function FG2501_131_A(obj){
    showStr(obj);
    $('#G2501_126_A').val(getNumToString(getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_134_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_133_A').val()),2));
    FG2501_126_A($('#G2501_126_A'));
    $('#G2501_131_C').val(getNumToString(getRate(getStrFloat($('#G2501_131_A').val())*getStrFloat($('#G2501_131_B').val())/100,2),2));
    FG2501_131_C($('#G2501_131_C'));
    $('#G2501_178_A').val(getNumToString(-(getStrFloat($('#G2501_66_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_128_A').val())+getStrFloat($('#G2501_172_B').val()))+(getStrFloat($('#G2501_67_A').val())+getStrFloat($('#G2501_71_A').val())+getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_172_A').val())),2));
    FG2501_178_A($('#G2501_178_A'));
}

/*G2501_131_B*/
function FG2501_131_B(obj){
    showStr(obj);
    $('#G2501_131_C').val(getNumToString(getRate(getStrFloat($('#G2501_131_A').val())*getStrFloat($('#G2501_131_B').val())/100,2),2));
    FG2501_131_C($('#G2501_131_C'));
}

/*G2501_131_C*/
function FG2501_131_C(obj){
    showStr(obj);
    $('#G2501_131_C').val(getNumToString(getRate(getStrFloat($('#G2501_131_A').val())*getStrFloat($('#G2501_131_B').val())/100,2),2));
    $('#G2501_165_A').val(getNumToString((getStrFloat($('#G2501_127_C').val())+getStrFloat($('#G2501_128_C').val())+getStrFloat($('#G2501_129_C').val())+getStrFloat($('#G2501_130_C').val())+getStrFloat($('#G2501_131_C').val())+getStrFloat($('#G2501_132_C').val())+getStrFloat($('#G2501_133_C').val())+getStrFloat($('#G2501_134_C').val())+getStrFloat($('#G2501_135_C').val())+getStrFloat($('#G2501_136_C').val())),2));
    FG2501_165_A($('#G2501_165_A'));
}

/*G2501_132_A*/
function FG2501_132_A(obj){
    showStr(obj);
    $('#G2501_182_A').val(getNumToString(getStrFloat($('#G2501_69_A').val())+getStrFloat($('#G2501_76_A').val())+getStrFloat($('#G2501_78_A').val())+getStrFloat($('#G2501_174_A').val())-getStrFloat($('#G2501_132_A').val())-getStrFloat($('#G2501_174_B').val()),2));
    FG2501_182_A($('#G2501_182_A'));
}

/*G2501_132_B*/
function FG2501_132_B(obj){
    showStr(obj);
}

/*G2501_132_C*/
function FG2501_132_C(obj){
    showStr(obj);
    $('#G2501_165_A').val(getNumToString((getStrFloat($('#G2501_127_C').val())+getStrFloat($('#G2501_128_C').val())+getStrFloat($('#G2501_129_C').val())+getStrFloat($('#G2501_130_C').val())+getStrFloat($('#G2501_131_C').val())+getStrFloat($('#G2501_132_C').val())+getStrFloat($('#G2501_133_C').val())+getStrFloat($('#G2501_134_C').val())+getStrFloat($('#G2501_135_C').val())+getStrFloat($('#G2501_136_C').val())),2));
    FG2501_165_A($('#G2501_165_A'));
}

/*G2501_133_A*/
function FG2501_133_A(obj){
    showStr(obj);
    $('#G2501_126_A').val(getNumToString(getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_134_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_133_A').val()),2));
    FG2501_126_A($('#G2501_126_A'));
    $('#G2501_133_C').val(getNumToString(getRate(getStrFloat($('#G2501_133_A').val())*getStrFloat($('#G2501_133_B').val())/100,2),2));
    FG2501_133_C($('#G2501_133_C'));
}

/*G2501_133_B*/
function FG2501_133_B(obj){
    showStr(obj);
    $('#G2501_133_C').val(getNumToString(getRate(getStrFloat($('#G2501_133_A').val())*getStrFloat($('#G2501_133_B').val())/100,2),2));
    FG2501_133_C($('#G2501_133_C'));
}

/*G2501_133_C*/
function FG2501_133_C(obj){
    showStr(obj);
    $('#G2501_133_C').val(getNumToString(getRate(getStrFloat($('#G2501_133_A').val())*getStrFloat($('#G2501_133_B').val())/100,2),2));
    $('#G2501_165_A').val(getNumToString((getStrFloat($('#G2501_127_C').val())+getStrFloat($('#G2501_128_C').val())+getStrFloat($('#G2501_129_C').val())+getStrFloat($('#G2501_130_C').val())+getStrFloat($('#G2501_131_C').val())+getStrFloat($('#G2501_132_C').val())+getStrFloat($('#G2501_133_C').val())+getStrFloat($('#G2501_134_C').val())+getStrFloat($('#G2501_135_C').val())+getStrFloat($('#G2501_136_C').val())),2));
    FG2501_165_A($('#G2501_165_A'));
}

/*G2501_134_A*/
function FG2501_134_A(obj){
    showStr(obj);
    $('#G2501_126_A').val(getNumToString(getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_134_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_133_A').val()),2));
    FG2501_126_A($('#G2501_126_A'));
    $('#G2501_134_C').val(getNumToString(getRate(getStrFloat($('#G2501_134_A').val())*getStrFloat($('#G2501_134_B').val())/100,2),2));
    FG2501_134_C($('#G2501_134_C'));
}

/*G2501_134_B*/
function FG2501_134_B(obj){
    showStr(obj);
    $('#G2501_134_C').val(getNumToString(getRate(getStrFloat($('#G2501_134_A').val())*getStrFloat($('#G2501_134_B').val())/100,2),2));
    FG2501_134_C($('#G2501_134_C'));
}

/*G2501_134_C*/
function FG2501_134_C(obj){
    showStr(obj);
    $('#G2501_134_C').val(getNumToString(getRate(getStrFloat($('#G2501_134_A').val())*getStrFloat($('#G2501_134_B').val())/100,2),2));
    $('#G2501_165_A').val(getNumToString((getStrFloat($('#G2501_127_C').val())+getStrFloat($('#G2501_128_C').val())+getStrFloat($('#G2501_129_C').val())+getStrFloat($('#G2501_130_C').val())+getStrFloat($('#G2501_131_C').val())+getStrFloat($('#G2501_132_C').val())+getStrFloat($('#G2501_133_C').val())+getStrFloat($('#G2501_134_C').val())+getStrFloat($('#G2501_135_C').val())+getStrFloat($('#G2501_136_C').val())),2));
    FG2501_165_A($('#G2501_165_A'));
}

/*G2501_135_A*/
function FG2501_135_A(obj){
    showStr(obj);
    $('#G2501_125_A').val(getNumToString(getStrFloat($('#G2501_126_A').val())+getStrFloat($('#G2501_135_A').val())+getStrFloat($('#G2501_136_A').val()),2));
    FG2501_125_A($('#G2501_125_A'));
    $('#G2501_135_C').val(getNumToString(getRate(getStrFloat($('#G2501_135_A').val())*getStrFloat($('#G2501_135_B').val())/100,2),2));
    FG2501_135_C($('#G2501_135_C'));
}

/*G2501_135_B*/
function FG2501_135_B(obj){
    showStr(obj);
    $('#G2501_135_C').val(getNumToString(getRate(getStrFloat($('#G2501_135_A').val())*getStrFloat($('#G2501_135_B').val())/100,2),2));
    FG2501_135_C($('#G2501_135_C'));
}

/*G2501_135_C*/
function FG2501_135_C(obj){
    showStr(obj);
    $('#G2501_135_C').val(getNumToString(getRate(getStrFloat($('#G2501_135_A').val())*getStrFloat($('#G2501_135_B').val())/100,2),2));
    $('#G2501_165_A').val(getNumToString((getStrFloat($('#G2501_127_C').val())+getStrFloat($('#G2501_128_C').val())+getStrFloat($('#G2501_129_C').val())+getStrFloat($('#G2501_130_C').val())+getStrFloat($('#G2501_131_C').val())+getStrFloat($('#G2501_132_C').val())+getStrFloat($('#G2501_133_C').val())+getStrFloat($('#G2501_134_C').val())+getStrFloat($('#G2501_135_C').val())+getStrFloat($('#G2501_136_C').val())),2));
    FG2501_165_A($('#G2501_165_A'));
}

/*G2501_136_A*/
function FG2501_136_A(obj){
    showStr(obj);
    $('#G2501_125_A').val(getNumToString(getStrFloat($('#G2501_126_A').val())+getStrFloat($('#G2501_135_A').val())+getStrFloat($('#G2501_136_A').val()),2));
    FG2501_125_A($('#G2501_125_A'));
    $('#G2501_136_C').val(getNumToString(getRate(getStrFloat($('#G2501_136_A').val())*getStrFloat($('#G2501_136_B').val())/100,2),2));
    FG2501_136_C($('#G2501_136_C'));
}

/*G2501_136_B*/
function FG2501_136_B(obj){
    showStr(obj);
    $('#G2501_136_C').val(getNumToString(getRate(getStrFloat($('#G2501_136_A').val())*getStrFloat($('#G2501_136_B').val())/100,2),2));
    FG2501_136_C($('#G2501_136_C'));
}

/*G2501_136_C*/
function FG2501_136_C(obj){
    showStr(obj);
    $('#G2501_136_C').val(getNumToString(getRate(getStrFloat($('#G2501_136_A').val())*getStrFloat($('#G2501_136_B').val())/100,2),2));
    $('#G2501_165_A').val(getNumToString((getStrFloat($('#G2501_127_C').val())+getStrFloat($('#G2501_128_C').val())+getStrFloat($('#G2501_129_C').val())+getStrFloat($('#G2501_130_C').val())+getStrFloat($('#G2501_131_C').val())+getStrFloat($('#G2501_132_C').val())+getStrFloat($('#G2501_133_C').val())+getStrFloat($('#G2501_134_C').val())+getStrFloat($('#G2501_135_C').val())+getStrFloat($('#G2501_136_C').val())),2));
    FG2501_165_A($('#G2501_165_A'));
}

/*G2501_137_A*/
function FG2501_137_A(obj){
    showStr(obj);
    $('#G2501_137_A').val(getNumToString((getStrFloat($('#G2501_138_A').val())+getStrFloat($('#G2501_139_A').val())+getStrFloat($('#G2501_140_A').val())+getStrFloat($('#G2501_141_A').val())+getStrFloat($('#G2501_143_A').val())+getStrFloat($('#G2501_147_A').val())+getStrFloat($('#G2501_142_A').val())),2));
}

/*G2501_137_B*/
function FG2501_137_B(obj){
    showStr(obj);
}

/*G2501_137_C*/
function FG2501_137_C(obj){
    showStr(obj);
}

/*G2501_138_A*/
function FG2501_138_A(obj){
    showStr(obj);
    $('#G2501_137_A').val(getNumToString((getStrFloat($('#G2501_138_A').val())+getStrFloat($('#G2501_139_A').val())+getStrFloat($('#G2501_140_A').val())+getStrFloat($('#G2501_141_A').val())+getStrFloat($('#G2501_143_A').val())+getStrFloat($('#G2501_147_A').val())+getStrFloat($('#G2501_142_A').val())),2));
    FG2501_137_A($('#G2501_137_A'));
    $('#G2501_138_C').val(getNumToString(getRate(getStrFloat($('#G2501_138_A').val())*getStrFloat($('#G2501_138_B').val())/100,2),2));
    FG2501_138_C($('#G2501_138_C'));
}

/*G2501_138_B*/
function FG2501_138_B(obj){
    showStr(obj);
    $('#G2501_138_C').val(getNumToString(getRate(getStrFloat($('#G2501_138_A').val())*getStrFloat($('#G2501_138_B').val())/100,2),2));
    FG2501_138_C($('#G2501_138_C'));
}

/*G2501_138_C*/
function FG2501_138_C(obj){
    showStr(obj);
    $('#G2501_113_C').val(getNumToString(Math.max(0,getStrFloat($('#G2501_113_A').val())-(getStrFloat($('#G2501_138_C').val())+getStrFloat($('#G2501_139_C').val())+getStrFloat($('#G2501_140_C').val())+getStrFloat($('#G2501_141_C').val()))),2));
    FG2501_113_C($('#G2501_113_C'));
    $('#G2501_138_C').val(getNumToString(getRate(getStrFloat($('#G2501_138_A').val())*getStrFloat($('#G2501_138_B').val())/100,2),2));
    $('#G2501_166_A').val(getNumToString((getStrFloat($('#G2501_138_C').val())+getStrFloat($('#G2501_139_C').val())+getStrFloat($('#G2501_140_C').val())+getStrFloat($('#G2501_141_C').val())+getStrFloat($('#G2501_142_C').val())+getStrFloat($('#G2501_143_C').val())+getStrFloat($('#G2501_144_C').val())+getStrFloat($('#G2501_145_C').val())+getStrFloat($('#G2501_146_C').val())+getStrFloat($('#G2501_147_C').val())),2));
    FG2501_166_A($('#G2501_166_A'));
}

/*G2501_139_A*/
function FG2501_139_A(obj){
    showStr(obj);
    $('#G2501_137_A').val(getNumToString((getStrFloat($('#G2501_138_A').val())+getStrFloat($('#G2501_139_A').val())+getStrFloat($('#G2501_140_A').val())+getStrFloat($('#G2501_141_A').val())+getStrFloat($('#G2501_143_A').val())+getStrFloat($('#G2501_147_A').val())+getStrFloat($('#G2501_142_A').val())),2));
    FG2501_137_A($('#G2501_137_A'));
    $('#G2501_139_C').val(getNumToString(getRate(getStrFloat($('#G2501_139_A').val())*getStrFloat($('#G2501_139_B').val())/100,2),2));
    FG2501_139_C($('#G2501_139_C'));
}

/*G2501_139_B*/
function FG2501_139_B(obj){
    showStr(obj);
    $('#G2501_139_C').val(getNumToString(getRate(getStrFloat($('#G2501_139_A').val())*getStrFloat($('#G2501_139_B').val())/100,2),2));
    FG2501_139_C($('#G2501_139_C'));
}

/*G2501_139_C*/
function FG2501_139_C(obj){
    showStr(obj);
    $('#G2501_113_C').val(getNumToString(Math.max(0,getStrFloat($('#G2501_113_A').val())-(getStrFloat($('#G2501_138_C').val())+getStrFloat($('#G2501_139_C').val())+getStrFloat($('#G2501_140_C').val())+getStrFloat($('#G2501_141_C').val()))),2));
    FG2501_113_C($('#G2501_113_C'));
    $('#G2501_139_C').val(getNumToString(getRate(getStrFloat($('#G2501_139_A').val())*getStrFloat($('#G2501_139_B').val())/100,2),2));
    $('#G2501_166_A').val(getNumToString((getStrFloat($('#G2501_138_C').val())+getStrFloat($('#G2501_139_C').val())+getStrFloat($('#G2501_140_C').val())+getStrFloat($('#G2501_141_C').val())+getStrFloat($('#G2501_142_C').val())+getStrFloat($('#G2501_143_C').val())+getStrFloat($('#G2501_144_C').val())+getStrFloat($('#G2501_145_C').val())+getStrFloat($('#G2501_146_C').val())+getStrFloat($('#G2501_147_C').val())),2));
    FG2501_166_A($('#G2501_166_A'));
}

/*G2501_140_A*/
function FG2501_140_A(obj){
    showStr(obj);
    $('#G2501_137_A').val(getNumToString((getStrFloat($('#G2501_138_A').val())+getStrFloat($('#G2501_139_A').val())+getStrFloat($('#G2501_140_A').val())+getStrFloat($('#G2501_141_A').val())+getStrFloat($('#G2501_143_A').val())+getStrFloat($('#G2501_147_A').val())+getStrFloat($('#G2501_142_A').val())),2));
    FG2501_137_A($('#G2501_137_A'));
    $('#G2501_140_C').val(getNumToString(getRate(getStrFloat($('#G2501_140_A').val())*getStrFloat($('#G2501_140_B').val())/100,2),2));
    FG2501_140_C($('#G2501_140_C'));
}

/*G2501_140_B*/
function FG2501_140_B(obj){
    showStr(obj);
    $('#G2501_140_C').val(getNumToString(getRate(getStrFloat($('#G2501_140_A').val())*getStrFloat($('#G2501_140_B').val())/100,2),2));
    FG2501_140_C($('#G2501_140_C'));
}

/*G2501_140_C*/
function FG2501_140_C(obj){
    showStr(obj);
    $('#G2501_113_C').val(getNumToString(Math.max(0,getStrFloat($('#G2501_113_A').val())-(getStrFloat($('#G2501_138_C').val())+getStrFloat($('#G2501_139_C').val())+getStrFloat($('#G2501_140_C').val())+getStrFloat($('#G2501_141_C').val()))),2));
    FG2501_113_C($('#G2501_113_C'));
    $('#G2501_140_C').val(getNumToString(getRate(getStrFloat($('#G2501_140_A').val())*getStrFloat($('#G2501_140_B').val())/100,2),2));
    $('#G2501_166_A').val(getNumToString((getStrFloat($('#G2501_138_C').val())+getStrFloat($('#G2501_139_C').val())+getStrFloat($('#G2501_140_C').val())+getStrFloat($('#G2501_141_C').val())+getStrFloat($('#G2501_142_C').val())+getStrFloat($('#G2501_143_C').val())+getStrFloat($('#G2501_144_C').val())+getStrFloat($('#G2501_145_C').val())+getStrFloat($('#G2501_146_C').val())+getStrFloat($('#G2501_147_C').val())),2));
    FG2501_166_A($('#G2501_166_A'));
}

/*G2501_141_A*/
function FG2501_141_A(obj){
    showStr(obj);
    $('#G2501_137_A').val(getNumToString((getStrFloat($('#G2501_138_A').val())+getStrFloat($('#G2501_139_A').val())+getStrFloat($('#G2501_140_A').val())+getStrFloat($('#G2501_141_A').val())+getStrFloat($('#G2501_143_A').val())+getStrFloat($('#G2501_147_A').val())+getStrFloat($('#G2501_142_A').val())),2));
    FG2501_137_A($('#G2501_137_A'));
    $('#G2501_141_C').val(getNumToString(getRate(getStrFloat($('#G2501_141_A').val())*getStrFloat($('#G2501_141_B').val())/100,2),2));
    FG2501_141_C($('#G2501_141_C'));
}

/*G2501_141_B*/
function FG2501_141_B(obj){
    showStr(obj);
    $('#G2501_141_C').val(getNumToString(getRate(getStrFloat($('#G2501_141_A').val())*getStrFloat($('#G2501_141_B').val())/100,2),2));
    FG2501_141_C($('#G2501_141_C'));
}

/*G2501_141_C*/
function FG2501_141_C(obj){
    showStr(obj);
    $('#G2501_113_C').val(getNumToString(Math.max(0,getStrFloat($('#G2501_113_A').val())-(getStrFloat($('#G2501_138_C').val())+getStrFloat($('#G2501_139_C').val())+getStrFloat($('#G2501_140_C').val())+getStrFloat($('#G2501_141_C').val()))),2));
    FG2501_113_C($('#G2501_113_C'));
    $('#G2501_141_C').val(getNumToString(getRate(getStrFloat($('#G2501_141_A').val())*getStrFloat($('#G2501_141_B').val())/100,2),2));
    $('#G2501_166_A').val(getNumToString((getStrFloat($('#G2501_138_C').val())+getStrFloat($('#G2501_139_C').val())+getStrFloat($('#G2501_140_C').val())+getStrFloat($('#G2501_141_C').val())+getStrFloat($('#G2501_142_C').val())+getStrFloat($('#G2501_143_C').val())+getStrFloat($('#G2501_144_C').val())+getStrFloat($('#G2501_145_C').val())+getStrFloat($('#G2501_146_C').val())+getStrFloat($('#G2501_147_C').val())),2));
    FG2501_166_A($('#G2501_166_A'));
}

/*G2501_142_A*/
function FG2501_142_A(obj){
    showStr(obj);
    $('#G2501_137_A').val(getNumToString((getStrFloat($('#G2501_138_A').val())+getStrFloat($('#G2501_139_A').val())+getStrFloat($('#G2501_140_A').val())+getStrFloat($('#G2501_141_A').val())+getStrFloat($('#G2501_143_A').val())+getStrFloat($('#G2501_147_A').val())+getStrFloat($('#G2501_142_A').val())),2));
    FG2501_137_A($('#G2501_137_A'));
    $('#G2501_142_C').val(getNumToString(getRate(getStrFloat($('#G2501_142_A').val())*getStrFloat($('#G2501_142_B').val())/100,2),2));
    FG2501_142_C($('#G2501_142_C'));
}

/*G2501_142_B*/
function FG2501_142_B(obj){
    showStr(obj);
    $('#G2501_142_C').val(getNumToString(getRate(getStrFloat($('#G2501_142_A').val())*getStrFloat($('#G2501_142_B').val())/100,2),2));
    FG2501_142_C($('#G2501_142_C'));
}

/*G2501_142_C*/
function FG2501_142_C(obj){
    showStr(obj);
    $('#G2501_142_C').val(getNumToString(getRate(getStrFloat($('#G2501_142_A').val())*getStrFloat($('#G2501_142_B').val())/100,2),2));
    $('#G2501_166_A').val(getNumToString((getStrFloat($('#G2501_138_C').val())+getStrFloat($('#G2501_139_C').val())+getStrFloat($('#G2501_140_C').val())+getStrFloat($('#G2501_141_C').val())+getStrFloat($('#G2501_142_C').val())+getStrFloat($('#G2501_143_C').val())+getStrFloat($('#G2501_144_C').val())+getStrFloat($('#G2501_145_C').val())+getStrFloat($('#G2501_146_C').val())+getStrFloat($('#G2501_147_C').val())),2));
    FG2501_166_A($('#G2501_166_A'));
}

/*G2501_143_A*/
function FG2501_143_A(obj){
    showStr(obj);
    $('#G2501_137_A').val(getNumToString((getStrFloat($('#G2501_138_A').val())+getStrFloat($('#G2501_139_A').val())+getStrFloat($('#G2501_140_A').val())+getStrFloat($('#G2501_141_A').val())+getStrFloat($('#G2501_143_A').val())+getStrFloat($('#G2501_147_A').val())+getStrFloat($('#G2501_142_A').val())),2));
    FG2501_137_A($('#G2501_137_A'));
    $('#G2501_143_A').val(getNumToString(getStrFloat($('#G2501_144_A').val())+getStrFloat($('#G2501_145_A').val())+getStrFloat($('#G2501_146_A').val()),2));
}

/*G2501_143_B*/
function FG2501_143_B(obj){
    showStr(obj);
}

/*G2501_143_C*/
function FG2501_143_C(obj){
    showStr(obj);
    $('#G2501_166_A').val(getNumToString((getStrFloat($('#G2501_138_C').val())+getStrFloat($('#G2501_139_C').val())+getStrFloat($('#G2501_140_C').val())+getStrFloat($('#G2501_141_C').val())+getStrFloat($('#G2501_142_C').val())+getStrFloat($('#G2501_143_C').val())+getStrFloat($('#G2501_144_C').val())+getStrFloat($('#G2501_145_C').val())+getStrFloat($('#G2501_146_C').val())+getStrFloat($('#G2501_147_C').val())),2));
    FG2501_166_A($('#G2501_166_A'));
}

/*G2501_144_A*/
function FG2501_144_A(obj){
    showStr(obj);
    $('#G2501_144_C').val(getNumToString(getRate(getStrFloat($('#G2501_144_A').val())*getStrFloat($('#G2501_144_B').val())/100,2),2));
    FG2501_144_C($('#G2501_144_C'));
    $('#G2501_143_A').val(getNumToString(getStrFloat($('#G2501_144_A').val())+getStrFloat($('#G2501_145_A').val())+getStrFloat($('#G2501_146_A').val()),2));
    FG2501_143_A($('#G2501_143_A'));
}

/*G2501_144_B*/
function FG2501_144_B(obj){
    showStr(obj);
    $('#G2501_144_C').val(getNumToString(getRate(getStrFloat($('#G2501_144_A').val())*getStrFloat($('#G2501_144_B').val())/100,2),2));
    FG2501_144_C($('#G2501_144_C'));
}

/*G2501_144_C*/
function FG2501_144_C(obj){
    showStr(obj);
    $('#G2501_144_C').val(getNumToString(getRate(getStrFloat($('#G2501_144_A').val())*getStrFloat($('#G2501_144_B').val())/100,2),2));
    $('#G2501_166_A').val(getNumToString((getStrFloat($('#G2501_138_C').val())+getStrFloat($('#G2501_139_C').val())+getStrFloat($('#G2501_140_C').val())+getStrFloat($('#G2501_141_C').val())+getStrFloat($('#G2501_142_C').val())+getStrFloat($('#G2501_143_C').val())+getStrFloat($('#G2501_144_C').val())+getStrFloat($('#G2501_145_C').val())+getStrFloat($('#G2501_146_C').val())+getStrFloat($('#G2501_147_C').val())),2));
    FG2501_166_A($('#G2501_166_A'));
}

/*G2501_145_A*/
function FG2501_145_A(obj){
    showStr(obj);
    $('#G2501_143_A').val(getNumToString(getStrFloat($('#G2501_144_A').val())+getStrFloat($('#G2501_145_A').val())+getStrFloat($('#G2501_146_A').val()),2));
    FG2501_143_A($('#G2501_143_A'));
}

/*G2501_145_B*/
function FG2501_145_B(obj){
    showStr(obj);
}

/*G2501_145_C*/
function FG2501_145_C(obj){
    showStr(obj);
    $('#G2501_166_A').val(getNumToString((getStrFloat($('#G2501_138_C').val())+getStrFloat($('#G2501_139_C').val())+getStrFloat($('#G2501_140_C').val())+getStrFloat($('#G2501_141_C').val())+getStrFloat($('#G2501_142_C').val())+getStrFloat($('#G2501_143_C').val())+getStrFloat($('#G2501_144_C').val())+getStrFloat($('#G2501_145_C').val())+getStrFloat($('#G2501_146_C').val())+getStrFloat($('#G2501_147_C').val())),2));
    FG2501_166_A($('#G2501_166_A'));
}

/*G2501_146_A*/
function FG2501_146_A(obj){
    showStr(obj);
    $('#G2501_143_A').val(getNumToString(getStrFloat($('#G2501_144_A').val())+getStrFloat($('#G2501_145_A').val())+getStrFloat($('#G2501_146_A').val()),2));
    FG2501_143_A($('#G2501_143_A'));
    $('#G2501_146_C').val(getNumToString(getRate(getStrFloat($('#G2501_146_A').val())*getStrFloat($('#G2501_146_B').val())/100,2),2));
    FG2501_146_C($('#G2501_146_C'));
}

/*G2501_146_B*/
function FG2501_146_B(obj){
    showStr(obj);
    $('#G2501_146_C').val(getNumToString(getRate(getStrFloat($('#G2501_146_A').val())*getStrFloat($('#G2501_146_B').val())/100,2),2));
    FG2501_146_C($('#G2501_146_C'));
}

/*G2501_146_C*/
function FG2501_146_C(obj){
    showStr(obj);
    $('#G2501_146_C').val(getNumToString(getRate(getStrFloat($('#G2501_146_A').val())*getStrFloat($('#G2501_146_B').val())/100,2),2));
    $('#G2501_166_A').val(getNumToString((getStrFloat($('#G2501_138_C').val())+getStrFloat($('#G2501_139_C').val())+getStrFloat($('#G2501_140_C').val())+getStrFloat($('#G2501_141_C').val())+getStrFloat($('#G2501_142_C').val())+getStrFloat($('#G2501_143_C').val())+getStrFloat($('#G2501_144_C').val())+getStrFloat($('#G2501_145_C').val())+getStrFloat($('#G2501_146_C').val())+getStrFloat($('#G2501_147_C').val())),2));
    FG2501_166_A($('#G2501_166_A'));
}

/*G2501_147_A*/
function FG2501_147_A(obj){
    showStr(obj);
    $('#G2501_137_A').val(getNumToString((getStrFloat($('#G2501_138_A').val())+getStrFloat($('#G2501_139_A').val())+getStrFloat($('#G2501_140_A').val())+getStrFloat($('#G2501_141_A').val())+getStrFloat($('#G2501_143_A').val())+getStrFloat($('#G2501_147_A').val())+getStrFloat($('#G2501_142_A').val())),2));
    FG2501_137_A($('#G2501_137_A'));
    $('#G2501_147_C').val(getNumToString(getRate(getStrFloat($('#G2501_147_A').val())*getStrFloat($('#G2501_147_B').val())/100,2),2));
    FG2501_147_C($('#G2501_147_C'));
}

/*G2501_147_B*/
function FG2501_147_B(obj){
    showStr(obj);
    $('#G2501_147_C').val(getNumToString(getRate(getStrFloat($('#G2501_147_A').val())*getStrFloat($('#G2501_147_B').val())/100,2),2));
    FG2501_147_C($('#G2501_147_C'));
}

/*G2501_147_C*/
function FG2501_147_C(obj){
    showStr(obj);
    $('#G2501_147_C').val(getNumToString(getRate(getStrFloat($('#G2501_147_A').val())*getStrFloat($('#G2501_147_B').val())/100,2),2));
    $('#G2501_166_A').val(getNumToString((getStrFloat($('#G2501_138_C').val())+getStrFloat($('#G2501_139_C').val())+getStrFloat($('#G2501_140_C').val())+getStrFloat($('#G2501_141_C').val())+getStrFloat($('#G2501_142_C').val())+getStrFloat($('#G2501_143_C').val())+getStrFloat($('#G2501_144_C').val())+getStrFloat($('#G2501_145_C').val())+getStrFloat($('#G2501_146_C').val())+getStrFloat($('#G2501_147_C').val())),2));
    FG2501_166_A($('#G2501_166_A'));
}

/*G2501_148_A*/
function FG2501_148_A(obj){
    showStr(obj);
    $('#G2501_148_A').val(getNumToString(getStrFloat($('#G2501_149_A').val())+getStrFloat($('#G2501_150_A').val()),2));
}

/*G2501_148_B*/
function FG2501_148_B(obj){
    showStr(obj);
}

/*G2501_148_C*/
function FG2501_148_C(obj){
    showStr(obj);
}

/*G2501_149_A*/
function FG2501_149_A(obj){
    showStr(obj);
    $('#G2501_148_A').val(getNumToString(getStrFloat($('#G2501_149_A').val())+getStrFloat($('#G2501_150_A').val()),2));
    FG2501_148_A($('#G2501_148_A'));
    $('#G2501_149_C').val(getNumToString(getRate(getStrFloat($('#G2501_149_A').val())*getStrFloat($('#G2501_149_B').val())/100,2),2));
    FG2501_149_C($('#G2501_149_C'));
}

/*G2501_149_B*/
function FG2501_149_B(obj){
    showStr(obj);
    $('#G2501_149_C').val(getNumToString(getRate(getStrFloat($('#G2501_149_A').val())*getStrFloat($('#G2501_149_B').val())/100,2),2));
    FG2501_149_C($('#G2501_149_C'));
}

/*G2501_149_C*/
function FG2501_149_C(obj){
    showStr(obj);
    $('#G2501_149_C').val(getNumToString(getRate(getStrFloat($('#G2501_149_A').val())*getStrFloat($('#G2501_149_B').val())/100,2),2));
    $('#G2501_167_A').val(getNumToString((getStrFloat($('#G2501_149_C').val())+getStrFloat($('#G2501_150_C').val())),2));
    FG2501_167_A($('#G2501_167_A'));
}

/*G2501_150_A*/
function FG2501_150_A(obj){
    showStr(obj);
    $('#G2501_148_A').val(getNumToString(getStrFloat($('#G2501_149_A').val())+getStrFloat($('#G2501_150_A').val()),2));
    FG2501_148_A($('#G2501_148_A'));
    $('#G2501_150_C').val(getNumToString(getRate(getStrFloat($('#G2501_150_A').val())*getStrFloat($('#G2501_150_B').val())/100,2),2));
    FG2501_150_C($('#G2501_150_C'));
}

/*G2501_150_B*/
function FG2501_150_B(obj){
    showStr(obj);
    $('#G2501_150_C').val(getNumToString(getRate(getStrFloat($('#G2501_150_A').val())*getStrFloat($('#G2501_150_B').val())/100,2),2));
    FG2501_150_C($('#G2501_150_C'));
}

/*G2501_150_C*/
function FG2501_150_C(obj){
    showStr(obj);
    $('#G2501_150_C').val(getNumToString(getRate(getStrFloat($('#G2501_150_A').val())*getStrFloat($('#G2501_150_B').val())/100,2),2));
    $('#G2501_167_A').val(getNumToString((getStrFloat($('#G2501_149_C').val())+getStrFloat($('#G2501_150_C').val())),2));
    FG2501_167_A($('#G2501_167_A'));
}

/*G2501_152_A*/
function FG2501_152_A(obj){
    showStr(obj);
    $('#G2501_152_A').val(getNumToString(getStrFloat($('#G2501_153_A').val())+getStrFloat($('#G2501_154_A').val())+getStrFloat($('#G2501_155_A').val())-getStrFloat($('#G2501_185_C').val())-getStrFloat($('#G2501_186_C').val()),2));
	if(getStrFloat($('#G2501_156_A').val())==0){
    $('#G2501_168_A').val(getNumToString(0,4));
    FG2501_168_A($('#G2501_168_A'));
	}else{
    $('#G2501_168_A').val(getNumToString(getStrFloat($('#G2501_152_A').val())/getStrFloat($('#G2501_156_A').val()),4));
    FG2501_168_A($('#G2501_168_A'));
	}
}

/*G2501_153_A*/
function FG2501_153_A(obj){
    showStr(obj);
    $('#G2501_152_A').val(getNumToString(getStrFloat($('#G2501_153_A').val())+getStrFloat($('#G2501_154_A').val())+getStrFloat($('#G2501_155_A').val())-getStrFloat($('#G2501_185_C').val())-getStrFloat($('#G2501_186_C').val()),2));
    FG2501_152_A($('#G2501_152_A'));
    $('#G2501_153_A').val(getNumToString(getStrFloat($('#G2501_9_C').val())+getStrFloat($('#G2501_10_C').val())+getStrFloat($('#G2501_12_C').val())+getStrFloat($('#G2501_13_C').val())+getStrFloat($('#G2501_14_C').val())+getStrFloat($('#G2501_15_C').val())+getStrFloat($('#G2501_16_C').val())+getStrFloat($('#G2501_17_C').val()),2));
}

/*G2501_154_A*/
function FG2501_154_A(obj){
    showStr(obj);
    $('#G2501_152_A').val(getNumToString(getStrFloat($('#G2501_153_A').val())+getStrFloat($('#G2501_154_A').val())+getStrFloat($('#G2501_155_A').val())-getStrFloat($('#G2501_185_C').val())-getStrFloat($('#G2501_186_C').val()),2));
    FG2501_152_A($('#G2501_152_A'));
    $('#G2501_154_A').val(getNumToString(getStrFloat($('#G2501_19_C').val())+getStrFloat($('#G2501_20_C').val())+getStrFloat($('#G2501_22_C').val())+getStrFloat($('#G2501_23_C').val())+getStrFloat($('#G2501_24_C').val())+getStrFloat($('#G2501_25_C').val())+getStrFloat($('#G2501_26_C').val()),2));
}

/*G2501_155_A*/
function FG2501_155_A(obj){
    showStr(obj);
    $('#G2501_152_A').val(getNumToString(getStrFloat($('#G2501_153_A').val())+getStrFloat($('#G2501_154_A').val())+getStrFloat($('#G2501_155_A').val())-getStrFloat($('#G2501_185_C').val())-getStrFloat($('#G2501_186_C').val()),2));
    FG2501_152_A($('#G2501_152_A'));
    $('#G2501_155_A').val(getNumToString(getStrFloat($('#G2501_27_C').val()),2));
}

/*G2501_156_A*/
function FG2501_156_A(obj){
    showStr(obj);
    $('#G2501_156_A').val(getNumToString(getRate(getStrFloat($('#G2501_157_A').val())-Math.min(getStrFloat($('#G2501_164_A').val()),getStrFloat($('#G2501_157_A').val())*0.75),2),2));
	if(getStrFloat($('#G2501_156_A').val())==0){
    $('#G2501_168_A').val(getNumToString(0,4));
    FG2501_168_A($('#G2501_168_A'));
	}else{
    $('#G2501_168_A').val(getNumToString(getStrFloat($('#G2501_152_A').val())/getStrFloat($('#G2501_156_A').val()),4));
    FG2501_168_A($('#G2501_168_A'));
	}
}

/*G2501_157_A*/
function FG2501_157_A(obj){
    showStr(obj);
    $('#G2501_156_A').val(getNumToString(getRate(getStrFloat($('#G2501_157_A').val())-Math.min(getStrFloat($('#G2501_164_A').val()),getStrFloat($('#G2501_157_A').val())*0.75),2),2));
    FG2501_156_A($('#G2501_156_A'));
    $('#G2501_157_A').val(getNumToString((getStrFloat($('#G2501_158_A').val())+getStrFloat($('#G2501_159_A').val())+getStrFloat($('#G2501_160_A').val())+getStrFloat($('#G2501_161_A').val())+getStrFloat($('#G2501_162_A').val())+getStrFloat($('#G2501_163_A').val())),2));
}

/*G2501_158_A*/
function FG2501_158_A(obj){
    showStr(obj);
    $('#G2501_157_A').val(getNumToString((getStrFloat($('#G2501_158_A').val())+getStrFloat($('#G2501_159_A').val())+getStrFloat($('#G2501_160_A').val())+getStrFloat($('#G2501_161_A').val())+getStrFloat($('#G2501_162_A').val())+getStrFloat($('#G2501_163_A').val())),2));
    FG2501_157_A($('#G2501_157_A'));
    $('#G2501_158_A').val(getNumToString((getStrFloat($('#G2501_31_C').val())+getStrFloat($('#G2501_32_C').val())+getStrFloat($('#G2501_33_C').val())+getStrFloat($('#G2501_34_C').val())),2));
}

/*G2501_159_A*/
function FG2501_159_A(obj){
    showStr(obj);
    $('#G2501_157_A').val(getNumToString((getStrFloat($('#G2501_158_A').val())+getStrFloat($('#G2501_159_A').val())+getStrFloat($('#G2501_160_A').val())+getStrFloat($('#G2501_161_A').val())+getStrFloat($('#G2501_162_A').val())+getStrFloat($('#G2501_163_A').val())),2));
    FG2501_157_A($('#G2501_157_A'));
    $('#G2501_159_A').val(getNumToString((getStrFloat($('#G2501_37_C').val())+getStrFloat($('#G2501_38_C').val())+getStrFloat($('#G2501_39_C').val())+getStrFloat($('#G2501_40_C').val())+getStrFloat($('#G2501_42_C').val())+getStrFloat($('#G2501_43_C').val())+getStrFloat($('#G2501_44_C').val())+getStrFloat($('#G2501_45_C').val())+getStrFloat($('#G2501_46_C').val())+getStrFloat($('#G2501_48_C').val())+getStrFloat($('#G2501_49_C').val())+getStrFloat($('#G2501_50_C').val())+getStrFloat($('#G2501_51_C').val())+getStrFloat($('#G2501_52_C').val())+getStrFloat($('#G2501_54_C').val())+getStrFloat($('#G2501_55_C').val())+getStrFloat($('#G2501_56_C').val())+getStrFloat($('#G2501_57_C').val())+getStrFloat($('#G2501_58_C').val())+getStrFloat($('#G2501_59_C').val())+getStrFloat($('#G2501_60_C').val())+getStrFloat($('#G2501_61_C').val())+getStrFloat($('#G2501_62_C').val())+getStrFloat($('#G2501_63_C').val())),2));
}

/*G2501_160_A*/
function FG2501_160_A(obj){
    showStr(obj);
    $('#G2501_157_A').val(getNumToString((getStrFloat($('#G2501_158_A').val())+getStrFloat($('#G2501_159_A').val())+getStrFloat($('#G2501_160_A').val())+getStrFloat($('#G2501_161_A').val())+getStrFloat($('#G2501_162_A').val())+getStrFloat($('#G2501_163_A').val())),2));
    FG2501_157_A($('#G2501_157_A'));
    $('#G2501_160_A').val(getNumToString((getStrFloat($('#G2501_65_C').val())+getStrFloat($('#G2501_70_C').val())+getStrFloat($('#G2501_72_C').val())+getStrFloat($('#G2501_75_C').val())+getStrFloat($('#G2501_77_C').val())+getStrFloat($('#G2501_80_C').val())+getStrFloat($('#G2501_81_C').val())),2));
}

/*G2501_161_A*/
function FG2501_161_A(obj){
    showStr(obj);
    $('#G2501_157_A').val(getNumToString((getStrFloat($('#G2501_158_A').val())+getStrFloat($('#G2501_159_A').val())+getStrFloat($('#G2501_160_A').val())+getStrFloat($('#G2501_161_A').val())+getStrFloat($('#G2501_162_A').val())+getStrFloat($('#G2501_163_A').val())),2));
    FG2501_157_A($('#G2501_157_A'));
    $('#G2501_161_A').val(getNumToString((getStrFloat($('#G2501_83_C').val())+getStrFloat($('#G2501_84_C').val())+getStrFloat($('#G2501_85_C').val())+getStrFloat($('#G2501_86_C').val())+getStrFloat($('#G2501_87_C').val())+getStrFloat($('#G2501_88_C').val())+getStrFloat($('#G2501_89_C').val())+getStrFloat($('#G2501_90_C').val())+getStrFloat($('#G2501_91_C').val())+getStrFloat($('#G2501_92_C').val())+getStrFloat($('#G2501_93_C').val())+getStrFloat($('#G2501_94_C').val())+getStrFloat($('#G2501_95_C').val())+getStrFloat($('#G2501_96_C').val())+getStrFloat($('#G2501_97_C').val())+getStrFloat($('#G2501_98_C').val())+getStrFloat($('#G2501_99_C').val())+getStrFloat($('#G2501_100_C').val())+getStrFloat($('#G2501_101_C').val())+getStrFloat($('#G2501_102_C').val())+getStrFloat($('#G2501_103_C').val())+getStrFloat($('#G2501_104_C').val())+getStrFloat($('#G2501_105_C').val())+getStrFloat($('#G2501_106_C').val())+getStrFloat($('#G2501_107_C').val())+getStrFloat($('#G2501_108_C').val())+getStrFloat($('#G2501_109_C').val())+getStrFloat($('#G2501_110_C').val())+getStrFloat($('#G2501_111_C').val())+getStrFloat($('#G2501_112_C').val())+getStrFloat($('#G2501_113_C').val())),2));
}

/*G2501_162_A*/
function FG2501_162_A(obj){
    showStr(obj);
    $('#G2501_157_A').val(getNumToString((getStrFloat($('#G2501_158_A').val())+getStrFloat($('#G2501_159_A').val())+getStrFloat($('#G2501_160_A').val())+getStrFloat($('#G2501_161_A').val())+getStrFloat($('#G2501_162_A').val())+getStrFloat($('#G2501_163_A').val())),2));
    FG2501_157_A($('#G2501_157_A'));
    $('#G2501_162_A').val(getNumToString((getStrFloat($('#G2501_115_C').val())+getStrFloat($('#G2501_116_C').val())+getStrFloat($('#G2501_117_C').val())+getStrFloat($('#G2501_118_C').val())+getStrFloat($('#G2501_119_C').val())+getStrFloat($('#G2501_120_C').val())+getStrFloat($('#G2501_121_C').val())+getStrFloat($('#G2501_122_C').val())),2));
}

/*G2501_163_A*/
function FG2501_163_A(obj){
    showStr(obj);
    $('#G2501_157_A').val(getNumToString((getStrFloat($('#G2501_158_A').val())+getStrFloat($('#G2501_159_A').val())+getStrFloat($('#G2501_160_A').val())+getStrFloat($('#G2501_161_A').val())+getStrFloat($('#G2501_162_A').val())+getStrFloat($('#G2501_163_A').val())),2));
    FG2501_157_A($('#G2501_157_A'));
    $('#G2501_163_A').val(getNumToString(getStrFloat($('#G2501_123_C').val()),2));
}

/*G2501_164_A*/
function FG2501_164_A(obj){
    showStr(obj);
    $('#G2501_156_A').val(getNumToString(getRate(getStrFloat($('#G2501_157_A').val())-Math.min(getStrFloat($('#G2501_164_A').val()),getStrFloat($('#G2501_157_A').val())*0.75),2),2));
    FG2501_156_A($('#G2501_156_A'));
    $('#G2501_164_A').val(getNumToString((getStrFloat($('#G2501_165_A').val())+getStrFloat($('#G2501_166_A').val())+getStrFloat($('#G2501_167_A').val())),2));
}

/*G2501_165_A*/
function FG2501_165_A(obj){
    showStr(obj);
    $('#G2501_164_A').val(getNumToString((getStrFloat($('#G2501_165_A').val())+getStrFloat($('#G2501_166_A').val())+getStrFloat($('#G2501_167_A').val())),2));
    FG2501_164_A($('#G2501_164_A'));
    $('#G2501_165_A').val(getNumToString((getStrFloat($('#G2501_127_C').val())+getStrFloat($('#G2501_128_C').val())+getStrFloat($('#G2501_129_C').val())+getStrFloat($('#G2501_130_C').val())+getStrFloat($('#G2501_131_C').val())+getStrFloat($('#G2501_132_C').val())+getStrFloat($('#G2501_133_C').val())+getStrFloat($('#G2501_134_C').val())+getStrFloat($('#G2501_135_C').val())+getStrFloat($('#G2501_136_C').val())),2));
}

/*G2501_166_A*/
function FG2501_166_A(obj){
    showStr(obj);
    $('#G2501_164_A').val(getNumToString((getStrFloat($('#G2501_165_A').val())+getStrFloat($('#G2501_166_A').val())+getStrFloat($('#G2501_167_A').val())),2));
    FG2501_164_A($('#G2501_164_A'));
    $('#G2501_166_A').val(getNumToString((getStrFloat($('#G2501_138_C').val())+getStrFloat($('#G2501_139_C').val())+getStrFloat($('#G2501_140_C').val())+getStrFloat($('#G2501_141_C').val())+getStrFloat($('#G2501_142_C').val())+getStrFloat($('#G2501_143_C').val())+getStrFloat($('#G2501_144_C').val())+getStrFloat($('#G2501_145_C').val())+getStrFloat($('#G2501_146_C').val())+getStrFloat($('#G2501_147_C').val())),2));
}

/*G2501_167_A*/
function FG2501_167_A(obj){
    showStr(obj);
    $('#G2501_164_A').val(getNumToString((getStrFloat($('#G2501_165_A').val())+getStrFloat($('#G2501_166_A').val())+getStrFloat($('#G2501_167_A').val())),2));
    FG2501_164_A($('#G2501_164_A'));
    $('#G2501_167_A').val(getNumToString((getStrFloat($('#G2501_149_C').val())+getStrFloat($('#G2501_150_C').val())),2));
}

/*G2501_168_A*/
function FG2501_168_A(obj){
    showStr(obj);
	if(getStrFloat($('#G2501_156_A').val())==0){
    $('#G2501_168_A').val(getNumToString(0,4));
	}else{
    $('#G2501_168_A').val(getNumToString(getStrFloat($('#G2501_152_A').val())/getStrFloat($('#G2501_156_A').val()),4));
	}
}

/*G2501_172_A*/
function FG2501_172_A(obj){
    showStr(obj);
    $('#G2501_178_A').val(getNumToString(-(getStrFloat($('#G2501_66_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_128_A').val())+getStrFloat($('#G2501_172_B').val()))+(getStrFloat($('#G2501_67_A').val())+getStrFloat($('#G2501_71_A').val())+getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_172_A').val())),2));
    FG2501_178_A($('#G2501_178_A'));
}

/*G2501_172_B*/
function FG2501_172_B(obj){
    showStr(obj);
    $('#G2501_178_A').val(getNumToString(-(getStrFloat($('#G2501_66_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_128_A').val())+getStrFloat($('#G2501_172_B').val()))+(getStrFloat($('#G2501_67_A').val())+getStrFloat($('#G2501_71_A').val())+getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_172_A').val())),2));
    FG2501_178_A($('#G2501_178_A'));
}

/*G2501_173_A*/
function FG2501_173_A(obj){
    showStr(obj);
    $('#G2501_180_A').val(getNumToString(getStrFloat($('#G2501_68_A').val())+getStrFloat($('#G2501_73_A').val())-getStrFloat($('#G2501_130_A').val())+getStrFloat($('#G2501_173_A').val())-getStrFloat($('#G2501_173_B').val()),2));
    FG2501_180_A($('#G2501_180_A'));
}

/*G2501_173_B*/
function FG2501_173_B(obj){
    showStr(obj);
    $('#G2501_180_A').val(getNumToString(getStrFloat($('#G2501_68_A').val())+getStrFloat($('#G2501_73_A').val())-getStrFloat($('#G2501_130_A').val())+getStrFloat($('#G2501_173_A').val())-getStrFloat($('#G2501_173_B').val()),2));
    FG2501_180_A($('#G2501_180_A'));
}

/*G2501_174_A*/
function FG2501_174_A(obj){
    showStr(obj);
    $('#G2501_182_A').val(getNumToString(getStrFloat($('#G2501_69_A').val())+getStrFloat($('#G2501_76_A').val())+getStrFloat($('#G2501_78_A').val())+getStrFloat($('#G2501_174_A').val())-getStrFloat($('#G2501_132_A').val())-getStrFloat($('#G2501_174_B').val()),2));
    FG2501_182_A($('#G2501_182_A'));
}

/*G2501_174_B*/
function FG2501_174_B(obj){
    showStr(obj);
    $('#G2501_182_A').val(getNumToString(getStrFloat($('#G2501_69_A').val())+getStrFloat($('#G2501_76_A').val())+getStrFloat($('#G2501_78_A').val())+getStrFloat($('#G2501_174_A').val())-getStrFloat($('#G2501_132_A').val())-getStrFloat($('#G2501_174_B').val()),2));
    FG2501_182_A($('#G2501_182_A'));
}

/*G2501_178_A*/
function FG2501_178_A(obj){
    showStr(obj);
    $('#G2501_178_A').val(getNumToString(-(getStrFloat($('#G2501_66_A').val())+getStrFloat($('#G2501_70_A').val())+getStrFloat($('#G2501_72_A').val())+getStrFloat($('#G2501_74_A').val())+getStrFloat($('#G2501_128_A').val())+getStrFloat($('#G2501_172_B').val()))+(getStrFloat($('#G2501_67_A').val())+getStrFloat($('#G2501_71_A').val())+getStrFloat($('#G2501_127_A').val())+getStrFloat($('#G2501_129_A').val())+getStrFloat($('#G2501_131_A').val())+getStrFloat($('#G2501_172_A').val())),2));
    $('#G2501_178_C').val(getNumToString(getRate(getStrFloat($('#G2501_178_A').val())*getStrFloat($('#G2501_178_B').val())/100,2),2));
    FG2501_178_C($('#G2501_178_C'));
    $('#G2501_179_A').val(getNumToString(Math.max(getStrFloat($('#G2501_9_A').val())+getStrFloat($('#G2501_10_A').val())+getStrFloat($('#G2501_11_A').val())+getStrFloat($('#G2501_16_A').val())+getStrFloat($('#G2501_17_A').val())+getStrFloat($('#G2501_178_A').val()),0),2));
    FG2501_179_A($('#G2501_179_A'));
}

/*G2501_178_B*/
function FG2501_178_B(obj){
    showStr(obj);
    $('#G2501_178_C').val(getNumToString(getRate(getStrFloat($('#G2501_178_A').val())*getStrFloat($('#G2501_178_B').val())/100,2),2));
    FG2501_178_C($('#G2501_178_C'));
}

/*G2501_178_C*/
function FG2501_178_C(obj){
    showStr(obj);
    $('#G2501_178_C').val(getNumToString(getRate(getStrFloat($('#G2501_178_A').val())*getStrFloat($('#G2501_178_B').val())/100,2),2));
}

/*G2501_179_A*/
function FG2501_179_A(obj){
    showStr(obj);
    $('#G2501_179_A').val(getNumToString(Math.max(getStrFloat($('#G2501_9_A').val())+getStrFloat($('#G2501_10_A').val())+getStrFloat($('#G2501_11_A').val())+getStrFloat($('#G2501_16_A').val())+getStrFloat($('#G2501_17_A').val())+getStrFloat($('#G2501_178_A').val()),0),2));
    $('#G2501_179_C').val(getNumToString(getRate(getStrFloat($('#G2501_179_A').val())*getStrFloat($('#G2501_179_B').val())/100,2),2));
    FG2501_179_C($('#G2501_179_C'));
}

/*G2501_179_B*/
function FG2501_179_B(obj){
    showStr(obj);
    $('#G2501_179_C').val(getNumToString(getRate(getStrFloat($('#G2501_179_A').val())*getStrFloat($('#G2501_179_B').val())/100,2),2));
    FG2501_179_C($('#G2501_179_C'));
}

/*G2501_179_C*/
function FG2501_179_C(obj){
    showStr(obj);
    $('#G2501_179_C').val(getNumToString(getRate(getStrFloat($('#G2501_179_A').val())*getStrFloat($('#G2501_179_B').val())/100,2),2));
    $('#G2501_185_C').val(getNumToString(Math.max(getStrFloat($('#G2501_183_C').val())-15/85*(getStrFloat($('#G2501_179_C').val())+getStrFloat($('#G2501_181_C').val())),getStrFloat($('#G2501_183_C').val())-15/60*getStrFloat($('#G2501_179_C').val()),0),2));
    FG2501_185_C($('#G2501_185_C'));
    $('#G2501_186_C').val(getNumToString(Math.max(getStrFloat($('#G2501_181_C').val())+getStrFloat($('#G2501_183_C').val())-getStrFloat($('#G2501_185_C').val())-2/3*getStrFloat($('#G2501_179_C').val()),0),2));
    FG2501_186_C($('#G2501_186_C'));
}

/*G2501_180_A*/
function FG2501_180_A(obj){
    showStr(obj);
    $('#G2501_180_A').val(getNumToString(getStrFloat($('#G2501_68_A').val())+getStrFloat($('#G2501_73_A').val())-getStrFloat($('#G2501_130_A').val())+getStrFloat($('#G2501_173_A').val())-getStrFloat($('#G2501_173_B').val()),2));
    $('#G2501_180_C').val(getNumToString(getRate(getStrFloat($('#G2501_180_A').val())*getStrFloat($('#G2501_180_B').val())/100,2),2));
    FG2501_180_C($('#G2501_180_C'));
    $('#G2501_181_A').val(getNumToString(getStrFloat($('#G2501_19_A').val())+getStrFloat($('#G2501_20_A').val())+getStrFloat($('#G2501_21_A').val())+getStrFloat($('#G2501_180_A').val()),2));
    FG2501_181_A($('#G2501_181_A'));
}

/*G2501_180_B*/
function FG2501_180_B(obj){
    showStr(obj);
    $('#G2501_180_C').val(getNumToString(getRate(getStrFloat($('#G2501_180_A').val())*getStrFloat($('#G2501_180_B').val())/100,2),2));
    FG2501_180_C($('#G2501_180_C'));
}

/*G2501_180_C*/
function FG2501_180_C(obj){
    showStr(obj);
    $('#G2501_180_C').val(getNumToString(getRate(getStrFloat($('#G2501_180_A').val())*getStrFloat($('#G2501_180_B').val())/100,2),2));
}

/*G2501_181_A*/
function FG2501_181_A(obj){
    showStr(obj);
    $('#G2501_181_A').val(getNumToString(getStrFloat($('#G2501_19_A').val())+getStrFloat($('#G2501_20_A').val())+getStrFloat($('#G2501_21_A').val())+getStrFloat($('#G2501_180_A').val()),2));
    $('#G2501_181_C').val(getNumToString(getRate(getStrFloat($('#G2501_181_A').val())*getStrFloat($('#G2501_181_B').val())/100,2),2));
    FG2501_181_C($('#G2501_181_C'));
}

/*G2501_181_B*/
function FG2501_181_B(obj){
    showStr(obj);
    $('#G2501_181_C').val(getNumToString(getRate(getStrFloat($('#G2501_181_A').val())*getStrFloat($('#G2501_181_B').val())/100,2),2));
    FG2501_181_C($('#G2501_181_C'));
}

/*G2501_181_C*/
function FG2501_181_C(obj){
    showStr(obj);
    $('#G2501_181_C').val(getNumToString(getRate(getStrFloat($('#G2501_181_A').val())*getStrFloat($('#G2501_181_B').val())/100,2),2));
    $('#G2501_185_C').val(getNumToString(Math.max(getStrFloat($('#G2501_183_C').val())-15/85*(getStrFloat($('#G2501_179_C').val())+getStrFloat($('#G2501_181_C').val())),getStrFloat($('#G2501_183_C').val())-15/60*getStrFloat($('#G2501_179_C').val()),0),2));
    FG2501_185_C($('#G2501_185_C'));
    $('#G2501_186_C').val(getNumToString(Math.max(getStrFloat($('#G2501_181_C').val())+getStrFloat($('#G2501_183_C').val())-getStrFloat($('#G2501_185_C').val())-2/3*getStrFloat($('#G2501_179_C').val()),0),2));
    FG2501_186_C($('#G2501_186_C'));
}

/*G2501_182_A*/
function FG2501_182_A(obj){
    showStr(obj);
    $('#G2501_182_A').val(getNumToString(getStrFloat($('#G2501_69_A').val())+getStrFloat($('#G2501_76_A').val())+getStrFloat($('#G2501_78_A').val())+getStrFloat($('#G2501_174_A').val())-getStrFloat($('#G2501_132_A').val())-getStrFloat($('#G2501_174_B').val()),2));
    $('#G2501_182_C').val(getNumToString(getRate(getStrFloat($('#G2501_182_A').val())*getStrFloat($('#G2501_182_B').val())/100,2),2));
    FG2501_182_C($('#G2501_182_C'));
    $('#G2501_183_A').val(getNumToString(getStrFloat($('#G2501_27_A').val())+getStrFloat($('#G2501_182_A').val()),2));
    FG2501_183_A($('#G2501_183_A'));
}

/*G2501_182_B*/
function FG2501_182_B(obj){
    showStr(obj);
    $('#G2501_182_C').val(getNumToString(getRate(getStrFloat($('#G2501_182_A').val())*getStrFloat($('#G2501_182_B').val())/100,2),2));
    FG2501_182_C($('#G2501_182_C'));
}

/*G2501_182_C*/
function FG2501_182_C(obj){
    showStr(obj);
    $('#G2501_182_C').val(getNumToString(getRate(getStrFloat($('#G2501_182_A').val())*getStrFloat($('#G2501_182_B').val())/100,2),2));
}

/*G2501_183_A*/
function FG2501_183_A(obj){
    showStr(obj);
    $('#G2501_183_A').val(getNumToString(getStrFloat($('#G2501_27_A').val())+getStrFloat($('#G2501_182_A').val()),2));
    $('#G2501_183_C').val(getNumToString(getRate(getStrFloat($('#G2501_183_A').val())*getStrFloat($('#G2501_183_B').val())/100,2),2));
    FG2501_183_C($('#G2501_183_C'));
}

/*G2501_183_B*/
function FG2501_183_B(obj){
    showStr(obj);
    $('#G2501_183_C').val(getNumToString(getRate(getStrFloat($('#G2501_183_A').val())*getStrFloat($('#G2501_183_B').val())/100,2),2));
    FG2501_183_C($('#G2501_183_C'));
}

/*G2501_183_C*/
function FG2501_183_C(obj){
    showStr(obj);
    $('#G2501_183_C').val(getNumToString(getRate(getStrFloat($('#G2501_183_A').val())*getStrFloat($('#G2501_183_B').val())/100,2),2));
    $('#G2501_185_C').val(getNumToString(Math.max(getStrFloat($('#G2501_183_C').val())-15/85*(getStrFloat($('#G2501_179_C').val())+getStrFloat($('#G2501_181_C').val())),getStrFloat($('#G2501_183_C').val())-15/60*getStrFloat($('#G2501_179_C').val()),0),2));
    FG2501_185_C($('#G2501_185_C'));
    $('#G2501_186_C').val(getNumToString(Math.max(getStrFloat($('#G2501_181_C').val())+getStrFloat($('#G2501_183_C').val())-getStrFloat($('#G2501_185_C').val())-2/3*getStrFloat($('#G2501_179_C').val()),0),2));
    FG2501_186_C($('#G2501_186_C'));
}

/*G2501_184_A*/
function FG2501_184_A(obj){
    showStr(obj);
}

/*G2501_184_B*/
function FG2501_184_B(obj){
    showStr(obj);
}

/*G2501_184_C*/
function FG2501_184_C(obj){
    showStr(obj);
}

/*G2501_185_A*/
function FG2501_185_A(obj){
    showStr(obj);
}

/*G2501_185_B*/
function FG2501_185_B(obj){
    showStr(obj);
}

/*G2501_185_C*/
function FG2501_185_C(obj){
    showStr(obj);
    $('#G2501_152_A').val(getNumToString(getStrFloat($('#G2501_153_A').val())+getStrFloat($('#G2501_154_A').val())+getStrFloat($('#G2501_155_A').val())-getStrFloat($('#G2501_185_C').val())-getStrFloat($('#G2501_186_C').val()),2));
    FG2501_152_A($('#G2501_152_A'));
    $('#G2501_185_C').val(getNumToString(Math.max(getStrFloat($('#G2501_183_C').val())-15/85*(getStrFloat($('#G2501_179_C').val())+getStrFloat($('#G2501_181_C').val())),getStrFloat($('#G2501_183_C').val())-15/60*getStrFloat($('#G2501_179_C').val()),0),2));
    $('#G2501_186_C').val(getNumToString(Math.max(getStrFloat($('#G2501_181_C').val())+getStrFloat($('#G2501_183_C').val())-getStrFloat($('#G2501_185_C').val())-2/3*getStrFloat($('#G2501_179_C').val()),0),2));
    FG2501_186_C($('#G2501_186_C'));
}

/*G2501_186_A*/
function FG2501_186_A(obj){
    showStr(obj);
}

/*G2501_186_B*/
function FG2501_186_B(obj){
    showStr(obj);
}

/*G2501_186_C*/
function FG2501_186_C(obj){
    showStr(obj);
    $('#G2501_152_A').val(getNumToString(getStrFloat($('#G2501_153_A').val())+getStrFloat($('#G2501_154_A').val())+getStrFloat($('#G2501_155_A').val())-getStrFloat($('#G2501_185_C').val())-getStrFloat($('#G2501_186_C').val()),2));
    FG2501_152_A($('#G2501_152_A'));
    $('#G2501_186_C').val(getNumToString(Math.max(getStrFloat($('#G2501_181_C').val())+getStrFloat($('#G2501_183_C').val())-getStrFloat($('#G2501_185_C').val())-2/3*getStrFloat($('#G2501_179_C').val()),0),2));
}


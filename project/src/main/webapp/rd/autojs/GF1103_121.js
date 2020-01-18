/*GF1103_8_A*/
function FGF1103_8_A(obj){
    showStr(obj);
    $('#GF1103_8_A').val(getNumToString(getStrFloat($('#GF1103_8_B').val())+getStrFloat($('#GF1103_8_E').val()),2));
}

/*GF1103_8_B*/
function FGF1103_8_B(obj){
    showStr(obj);
    $('#GF1103_8_A').val(getNumToString(getStrFloat($('#GF1103_8_B').val())+getStrFloat($('#GF1103_8_E').val()),2));
    FGF1103_8_A($('#GF1103_8_A'));
    $('#GF1103_8_B').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_8_D').val()),2));
}

/*GF1103_8_C*/
function FGF1103_8_C(obj){
    showStr(obj);
    $('#GF1103_8_B').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_8_D').val()),2));
    FGF1103_8_B($('#GF1103_8_B'));
    $('#GF1103_8_C').val(getNumToString(getStrFloat($('#GF1103_9_C').val())+getStrFloat($('#GF1103_10_C').val())+getStrFloat($('#GF1103_11_C').val())+getStrFloat($('#GF1103_12_C').val())+getStrFloat($('#GF1103_13_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_8_D*/
function FGF1103_8_D(obj){
    showStr(obj);
    $('#GF1103_8_B').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_8_D').val()),2));
    FGF1103_8_B($('#GF1103_8_B'));
    $('#GF1103_8_D').val(getNumToString(getStrFloat($('#GF1103_9_D').val())+getStrFloat($('#GF1103_10_D').val())+getStrFloat($('#GF1103_11_D').val())+getStrFloat($('#GF1103_12_D').val())+getStrFloat($('#GF1103_13_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_8_E*/
function FGF1103_8_E(obj){
    showStr(obj);
    $('#GF1103_8_A').val(getNumToString(getStrFloat($('#GF1103_8_B').val())+getStrFloat($('#GF1103_8_E').val()),2));
    FGF1103_8_A($('#GF1103_8_A'));
    $('#GF1103_8_E').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_8_H').val()),2));
}

/*GF1103_8_F*/
function FGF1103_8_F(obj){
    showStr(obj);
    $('#GF1103_8_E').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_8_H').val()),2));
    FGF1103_8_E($('#GF1103_8_E'));
    $('#GF1103_8_F').val(getNumToString(getStrFloat($('#GF1103_9_F').val())+getStrFloat($('#GF1103_10_F').val())+getStrFloat($('#GF1103_11_F').val())+getStrFloat($('#GF1103_12_F').val())+getStrFloat($('#GF1103_13_F').val()),2));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
}

/*GF1103_8_G*/
function FGF1103_8_G(obj){
    showStr(obj);
    $('#GF1103_8_G').val(getNumToString(getStrFloat($('#GF1103_9_G').val())+getStrFloat($('#GF1103_10_G').val())+getStrFloat($('#GF1103_11_G').val())+getStrFloat($('#GF1103_12_G').val())+getStrFloat($('#GF1103_13_G').val()),2));
    $('#GF1103_8_E').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_8_H').val()),2));
    FGF1103_8_E($('#GF1103_8_E'));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_8_H*/
function FGF1103_8_H(obj){
    showStr(obj);
    $('#GF1103_8_E').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_8_H').val()),2));
    FGF1103_8_E($('#GF1103_8_E'));
    $('#GF1103_8_H').val(getNumToString(getStrFloat($('#GF1103_9_H').val())+getStrFloat($('#GF1103_10_H').val())+getStrFloat($('#GF1103_11_H').val())+getStrFloat($('#GF1103_12_H').val())+getStrFloat($('#GF1103_13_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_9_A*/
function FGF1103_9_A(obj){
    showStr(obj);
    $('#GF1103_9_A').val(getNumToString(getStrFloat($('#GF1103_9_B').val())+getStrFloat($('#GF1103_9_E').val()),2));
}

/*GF1103_9_B*/
function FGF1103_9_B(obj){
    showStr(obj);
    $('#GF1103_9_A').val(getNumToString(getStrFloat($('#GF1103_9_B').val())+getStrFloat($('#GF1103_9_E').val()),2));
    FGF1103_9_A($('#GF1103_9_A'));
    $('#GF1103_9_B').val(getNumToString(getStrFloat($('#GF1103_9_C').val())+getStrFloat($('#GF1103_9_D').val()),2));
}

/*GF1103_9_C*/
function FGF1103_9_C(obj){
    showStr(obj);
    $('#GF1103_8_C').val(getNumToString(getStrFloat($('#GF1103_9_C').val())+getStrFloat($('#GF1103_10_C').val())+getStrFloat($('#GF1103_11_C').val())+getStrFloat($('#GF1103_12_C').val())+getStrFloat($('#GF1103_13_C').val()),2));
    FGF1103_8_C($('#GF1103_8_C'));
    $('#GF1103_9_B').val(getNumToString(getStrFloat($('#GF1103_9_C').val())+getStrFloat($('#GF1103_9_D').val()),2));
    FGF1103_9_B($('#GF1103_9_B'));
}

/*GF1103_9_D*/
function FGF1103_9_D(obj){
    showStr(obj);
    $('#GF1103_8_D').val(getNumToString(getStrFloat($('#GF1103_9_D').val())+getStrFloat($('#GF1103_10_D').val())+getStrFloat($('#GF1103_11_D').val())+getStrFloat($('#GF1103_12_D').val())+getStrFloat($('#GF1103_13_D').val()),2));
    FGF1103_8_D($('#GF1103_8_D'));
    $('#GF1103_9_B').val(getNumToString(getStrFloat($('#GF1103_9_C').val())+getStrFloat($('#GF1103_9_D').val()),2));
    FGF1103_9_B($('#GF1103_9_B'));
}

/*GF1103_9_E*/
function FGF1103_9_E(obj){
    showStr(obj);
    $('#GF1103_9_A').val(getNumToString(getStrFloat($('#GF1103_9_B').val())+getStrFloat($('#GF1103_9_E').val()),2));
    FGF1103_9_A($('#GF1103_9_A'));
    $('#GF1103_9_E').val(getNumToString(getStrFloat($('#GF1103_9_F').val())+getStrFloat($('#GF1103_9_G').val())+getStrFloat($('#GF1103_9_H').val()),2));
}

/*GF1103_9_F*/
function FGF1103_9_F(obj){
    showStr(obj);
    $('#GF1103_8_F').val(getNumToString(getStrFloat($('#GF1103_9_F').val())+getStrFloat($('#GF1103_10_F').val())+getStrFloat($('#GF1103_11_F').val())+getStrFloat($('#GF1103_12_F').val())+getStrFloat($('#GF1103_13_F').val()),2));
    FGF1103_8_F($('#GF1103_8_F'));
    $('#GF1103_9_E').val(getNumToString(getStrFloat($('#GF1103_9_F').val())+getStrFloat($('#GF1103_9_G').val())+getStrFloat($('#GF1103_9_H').val()),2));
    FGF1103_9_E($('#GF1103_9_E'));
}

/*GF1103_9_G*/
function FGF1103_9_G(obj){
    showStr(obj);
    $('#GF1103_8_G').val(getNumToString(getStrFloat($('#GF1103_9_G').val())+getStrFloat($('#GF1103_10_G').val())+getStrFloat($('#GF1103_11_G').val())+getStrFloat($('#GF1103_12_G').val())+getStrFloat($('#GF1103_13_G').val()),2));
    FGF1103_8_G($('#GF1103_8_G'));
    $('#GF1103_9_E').val(getNumToString(getStrFloat($('#GF1103_9_F').val())+getStrFloat($('#GF1103_9_G').val())+getStrFloat($('#GF1103_9_H').val()),2));
    FGF1103_9_E($('#GF1103_9_E'));
}

/*GF1103_9_H*/
function FGF1103_9_H(obj){
    showStr(obj);
    $('#GF1103_8_H').val(getNumToString(getStrFloat($('#GF1103_9_H').val())+getStrFloat($('#GF1103_10_H').val())+getStrFloat($('#GF1103_11_H').val())+getStrFloat($('#GF1103_12_H').val())+getStrFloat($('#GF1103_13_H').val()),2));
    FGF1103_8_H($('#GF1103_8_H'));
    $('#GF1103_9_E').val(getNumToString(getStrFloat($('#GF1103_9_F').val())+getStrFloat($('#GF1103_9_G').val())+getStrFloat($('#GF1103_9_H').val()),2));
    FGF1103_9_E($('#GF1103_9_E'));
}

/*GF1103_10_A*/
function FGF1103_10_A(obj){
    showStr(obj);
    $('#GF1103_10_A').val(getNumToString(getStrFloat($('#GF1103_10_B').val())+getStrFloat($('#GF1103_10_E').val()),2));
}

/*GF1103_10_B*/
function FGF1103_10_B(obj){
    showStr(obj);
    $('#GF1103_10_A').val(getNumToString(getStrFloat($('#GF1103_10_B').val())+getStrFloat($('#GF1103_10_E').val()),2));
    FGF1103_10_A($('#GF1103_10_A'));
    $('#GF1103_10_B').val(getNumToString(getStrFloat($('#GF1103_10_C').val())+getStrFloat($('#GF1103_10_D').val()),2));
}

/*GF1103_10_C*/
function FGF1103_10_C(obj){
    showStr(obj);
    $('#GF1103_8_C').val(getNumToString(getStrFloat($('#GF1103_9_C').val())+getStrFloat($('#GF1103_10_C').val())+getStrFloat($('#GF1103_11_C').val())+getStrFloat($('#GF1103_12_C').val())+getStrFloat($('#GF1103_13_C').val()),2));
    FGF1103_8_C($('#GF1103_8_C'));
    $('#GF1103_10_B').val(getNumToString(getStrFloat($('#GF1103_10_C').val())+getStrFloat($('#GF1103_10_D').val()),2));
    FGF1103_10_B($('#GF1103_10_B'));
}

/*GF1103_10_D*/
function FGF1103_10_D(obj){
    showStr(obj);
    $('#GF1103_8_D').val(getNumToString(getStrFloat($('#GF1103_9_D').val())+getStrFloat($('#GF1103_10_D').val())+getStrFloat($('#GF1103_11_D').val())+getStrFloat($('#GF1103_12_D').val())+getStrFloat($('#GF1103_13_D').val()),2));
    FGF1103_8_D($('#GF1103_8_D'));
    $('#GF1103_10_B').val(getNumToString(getStrFloat($('#GF1103_10_C').val())+getStrFloat($('#GF1103_10_D').val()),2));
    FGF1103_10_B($('#GF1103_10_B'));
}

/*GF1103_10_E*/
function FGF1103_10_E(obj){
    showStr(obj);
    $('#GF1103_10_A').val(getNumToString(getStrFloat($('#GF1103_10_B').val())+getStrFloat($('#GF1103_10_E').val()),2));
    FGF1103_10_A($('#GF1103_10_A'));
    $('#GF1103_10_E').val(getNumToString(getStrFloat($('#GF1103_10_F').val())+getStrFloat($('#GF1103_10_G').val())+getStrFloat($('#GF1103_10_H').val()),2));
}

/*GF1103_10_F*/
function FGF1103_10_F(obj){
    showStr(obj);
    $('#GF1103_8_F').val(getNumToString(getStrFloat($('#GF1103_9_F').val())+getStrFloat($('#GF1103_10_F').val())+getStrFloat($('#GF1103_11_F').val())+getStrFloat($('#GF1103_12_F').val())+getStrFloat($('#GF1103_13_F').val()),2));
    FGF1103_8_F($('#GF1103_8_F'));
    $('#GF1103_10_E').val(getNumToString(getStrFloat($('#GF1103_10_F').val())+getStrFloat($('#GF1103_10_G').val())+getStrFloat($('#GF1103_10_H').val()),2));
    FGF1103_10_E($('#GF1103_10_E'));
}

/*GF1103_10_G*/
function FGF1103_10_G(obj){
    showStr(obj);
    $('#GF1103_8_G').val(getNumToString(getStrFloat($('#GF1103_9_G').val())+getStrFloat($('#GF1103_10_G').val())+getStrFloat($('#GF1103_11_G').val())+getStrFloat($('#GF1103_12_G').val())+getStrFloat($('#GF1103_13_G').val()),2));
    FGF1103_8_G($('#GF1103_8_G'));
    $('#GF1103_10_E').val(getNumToString(getStrFloat($('#GF1103_10_F').val())+getStrFloat($('#GF1103_10_G').val())+getStrFloat($('#GF1103_10_H').val()),2));
    FGF1103_10_E($('#GF1103_10_E'));
}

/*GF1103_10_H*/
function FGF1103_10_H(obj){
    showStr(obj);
    $('#GF1103_8_H').val(getNumToString(getStrFloat($('#GF1103_9_H').val())+getStrFloat($('#GF1103_10_H').val())+getStrFloat($('#GF1103_11_H').val())+getStrFloat($('#GF1103_12_H').val())+getStrFloat($('#GF1103_13_H').val()),2));
    FGF1103_8_H($('#GF1103_8_H'));
    $('#GF1103_10_E').val(getNumToString(getStrFloat($('#GF1103_10_F').val())+getStrFloat($('#GF1103_10_G').val())+getStrFloat($('#GF1103_10_H').val()),2));
    FGF1103_10_E($('#GF1103_10_E'));
}

/*GF1103_11_A*/
function FGF1103_11_A(obj){
    showStr(obj);
    $('#GF1103_11_A').val(getNumToString(getStrFloat($('#GF1103_11_B').val())+getStrFloat($('#GF1103_11_E').val()),2));
}

/*GF1103_11_B*/
function FGF1103_11_B(obj){
    showStr(obj);
    $('#GF1103_11_A').val(getNumToString(getStrFloat($('#GF1103_11_B').val())+getStrFloat($('#GF1103_11_E').val()),2));
    FGF1103_11_A($('#GF1103_11_A'));
    $('#GF1103_11_B').val(getNumToString(getStrFloat($('#GF1103_11_C').val())+getStrFloat($('#GF1103_11_D').val()),2));
}

/*GF1103_11_C*/
function FGF1103_11_C(obj){
    showStr(obj);
    $('#GF1103_8_C').val(getNumToString(getStrFloat($('#GF1103_9_C').val())+getStrFloat($('#GF1103_10_C').val())+getStrFloat($('#GF1103_11_C').val())+getStrFloat($('#GF1103_12_C').val())+getStrFloat($('#GF1103_13_C').val()),2));
    FGF1103_8_C($('#GF1103_8_C'));
    $('#GF1103_11_B').val(getNumToString(getStrFloat($('#GF1103_11_C').val())+getStrFloat($('#GF1103_11_D').val()),2));
    FGF1103_11_B($('#GF1103_11_B'));
}

/*GF1103_11_D*/
function FGF1103_11_D(obj){
    showStr(obj);
    $('#GF1103_8_D').val(getNumToString(getStrFloat($('#GF1103_9_D').val())+getStrFloat($('#GF1103_10_D').val())+getStrFloat($('#GF1103_11_D').val())+getStrFloat($('#GF1103_12_D').val())+getStrFloat($('#GF1103_13_D').val()),2));
    FGF1103_8_D($('#GF1103_8_D'));
    $('#GF1103_11_B').val(getNumToString(getStrFloat($('#GF1103_11_C').val())+getStrFloat($('#GF1103_11_D').val()),2));
    FGF1103_11_B($('#GF1103_11_B'));
}

/*GF1103_11_E*/
function FGF1103_11_E(obj){
    showStr(obj);
    $('#GF1103_11_A').val(getNumToString(getStrFloat($('#GF1103_11_B').val())+getStrFloat($('#GF1103_11_E').val()),2));
    FGF1103_11_A($('#GF1103_11_A'));
    $('#GF1103_11_E').val(getNumToString(getStrFloat($('#GF1103_11_F').val())+getStrFloat($('#GF1103_11_G').val())+getStrFloat($('#GF1103_11_H').val()),2));
}

/*GF1103_11_F*/
function FGF1103_11_F(obj){
    showStr(obj);
    $('#GF1103_8_F').val(getNumToString(getStrFloat($('#GF1103_9_F').val())+getStrFloat($('#GF1103_10_F').val())+getStrFloat($('#GF1103_11_F').val())+getStrFloat($('#GF1103_12_F').val())+getStrFloat($('#GF1103_13_F').val()),2));
    FGF1103_8_F($('#GF1103_8_F'));
    $('#GF1103_11_E').val(getNumToString(getStrFloat($('#GF1103_11_F').val())+getStrFloat($('#GF1103_11_G').val())+getStrFloat($('#GF1103_11_H').val()),2));
    FGF1103_11_E($('#GF1103_11_E'));
}

/*GF1103_11_G*/
function FGF1103_11_G(obj){
    showStr(obj);
    $('#GF1103_8_G').val(getNumToString(getStrFloat($('#GF1103_9_G').val())+getStrFloat($('#GF1103_10_G').val())+getStrFloat($('#GF1103_11_G').val())+getStrFloat($('#GF1103_12_G').val())+getStrFloat($('#GF1103_13_G').val()),2));
    FGF1103_8_G($('#GF1103_8_G'));
    $('#GF1103_11_E').val(getNumToString(getStrFloat($('#GF1103_11_F').val())+getStrFloat($('#GF1103_11_G').val())+getStrFloat($('#GF1103_11_H').val()),2));
    FGF1103_11_E($('#GF1103_11_E'));
}

/*GF1103_11_H*/
function FGF1103_11_H(obj){
    showStr(obj);
    $('#GF1103_8_H').val(getNumToString(getStrFloat($('#GF1103_9_H').val())+getStrFloat($('#GF1103_10_H').val())+getStrFloat($('#GF1103_11_H').val())+getStrFloat($('#GF1103_12_H').val())+getStrFloat($('#GF1103_13_H').val()),2));
    FGF1103_8_H($('#GF1103_8_H'));
    $('#GF1103_11_E').val(getNumToString(getStrFloat($('#GF1103_11_F').val())+getStrFloat($('#GF1103_11_G').val())+getStrFloat($('#GF1103_11_H').val()),2));
    FGF1103_11_E($('#GF1103_11_E'));
}

/*GF1103_12_A*/
function FGF1103_12_A(obj){
    showStr(obj);
    $('#GF1103_12_A').val(getNumToString(getStrFloat($('#GF1103_12_B').val())+getStrFloat($('#GF1103_12_E').val()),2));
}

/*GF1103_12_B*/
function FGF1103_12_B(obj){
    showStr(obj);
    $('#GF1103_12_A').val(getNumToString(getStrFloat($('#GF1103_12_B').val())+getStrFloat($('#GF1103_12_E').val()),2));
    FGF1103_12_A($('#GF1103_12_A'));
    $('#GF1103_12_B').val(getNumToString(getStrFloat($('#GF1103_12_C').val())+getStrFloat($('#GF1103_12_D').val()),2));
}

/*GF1103_12_C*/
function FGF1103_12_C(obj){
    showStr(obj);
    $('#GF1103_8_C').val(getNumToString(getStrFloat($('#GF1103_9_C').val())+getStrFloat($('#GF1103_10_C').val())+getStrFloat($('#GF1103_11_C').val())+getStrFloat($('#GF1103_12_C').val())+getStrFloat($('#GF1103_13_C').val()),2));
    FGF1103_8_C($('#GF1103_8_C'));
    $('#GF1103_12_B').val(getNumToString(getStrFloat($('#GF1103_12_C').val())+getStrFloat($('#GF1103_12_D').val()),2));
    FGF1103_12_B($('#GF1103_12_B'));
}

/*GF1103_12_D*/
function FGF1103_12_D(obj){
    showStr(obj);
    $('#GF1103_8_D').val(getNumToString(getStrFloat($('#GF1103_9_D').val())+getStrFloat($('#GF1103_10_D').val())+getStrFloat($('#GF1103_11_D').val())+getStrFloat($('#GF1103_12_D').val())+getStrFloat($('#GF1103_13_D').val()),2));
    FGF1103_8_D($('#GF1103_8_D'));
    $('#GF1103_12_B').val(getNumToString(getStrFloat($('#GF1103_12_C').val())+getStrFloat($('#GF1103_12_D').val()),2));
    FGF1103_12_B($('#GF1103_12_B'));
}

/*GF1103_12_E*/
function FGF1103_12_E(obj){
    showStr(obj);
    $('#GF1103_12_A').val(getNumToString(getStrFloat($('#GF1103_12_B').val())+getStrFloat($('#GF1103_12_E').val()),2));
    FGF1103_12_A($('#GF1103_12_A'));
    $('#GF1103_12_E').val(getNumToString(getStrFloat($('#GF1103_12_F').val())+getStrFloat($('#GF1103_12_G').val())+getStrFloat($('#GF1103_12_H').val()),2));
}

/*GF1103_12_F*/
function FGF1103_12_F(obj){
    showStr(obj);
    $('#GF1103_8_F').val(getNumToString(getStrFloat($('#GF1103_9_F').val())+getStrFloat($('#GF1103_10_F').val())+getStrFloat($('#GF1103_11_F').val())+getStrFloat($('#GF1103_12_F').val())+getStrFloat($('#GF1103_13_F').val()),2));
    FGF1103_8_F($('#GF1103_8_F'));
    $('#GF1103_12_E').val(getNumToString(getStrFloat($('#GF1103_12_F').val())+getStrFloat($('#GF1103_12_G').val())+getStrFloat($('#GF1103_12_H').val()),2));
    FGF1103_12_E($('#GF1103_12_E'));
}

/*GF1103_12_G*/
function FGF1103_12_G(obj){
    showStr(obj);
    $('#GF1103_8_G').val(getNumToString(getStrFloat($('#GF1103_9_G').val())+getStrFloat($('#GF1103_10_G').val())+getStrFloat($('#GF1103_11_G').val())+getStrFloat($('#GF1103_12_G').val())+getStrFloat($('#GF1103_13_G').val()),2));
    FGF1103_8_G($('#GF1103_8_G'));
    $('#GF1103_12_E').val(getNumToString(getStrFloat($('#GF1103_12_F').val())+getStrFloat($('#GF1103_12_G').val())+getStrFloat($('#GF1103_12_H').val()),2));
    FGF1103_12_E($('#GF1103_12_E'));
}

/*GF1103_12_H*/
function FGF1103_12_H(obj){
    showStr(obj);
    $('#GF1103_8_H').val(getNumToString(getStrFloat($('#GF1103_9_H').val())+getStrFloat($('#GF1103_10_H').val())+getStrFloat($('#GF1103_11_H').val())+getStrFloat($('#GF1103_12_H').val())+getStrFloat($('#GF1103_13_H').val()),2));
    FGF1103_8_H($('#GF1103_8_H'));
    $('#GF1103_12_E').val(getNumToString(getStrFloat($('#GF1103_12_F').val())+getStrFloat($('#GF1103_12_G').val())+getStrFloat($('#GF1103_12_H').val()),2));
    FGF1103_12_E($('#GF1103_12_E'));
}

/*GF1103_13_A*/
function FGF1103_13_A(obj){
    showStr(obj);
    $('#GF1103_13_A').val(getNumToString(getStrFloat($('#GF1103_13_B').val())+getStrFloat($('#GF1103_13_E').val()),2));
}

/*GF1103_13_B*/
function FGF1103_13_B(obj){
    showStr(obj);
    $('#GF1103_13_A').val(getNumToString(getStrFloat($('#GF1103_13_B').val())+getStrFloat($('#GF1103_13_E').val()),2));
    FGF1103_13_A($('#GF1103_13_A'));
    $('#GF1103_13_B').val(getNumToString(getStrFloat($('#GF1103_13_C').val())+getStrFloat($('#GF1103_13_D').val()),2));
}

/*GF1103_13_C*/
function FGF1103_13_C(obj){
    showStr(obj);
    $('#GF1103_8_C').val(getNumToString(getStrFloat($('#GF1103_9_C').val())+getStrFloat($('#GF1103_10_C').val())+getStrFloat($('#GF1103_11_C').val())+getStrFloat($('#GF1103_12_C').val())+getStrFloat($('#GF1103_13_C').val()),2));
    FGF1103_8_C($('#GF1103_8_C'));
    $('#GF1103_13_B').val(getNumToString(getStrFloat($('#GF1103_13_C').val())+getStrFloat($('#GF1103_13_D').val()),2));
    FGF1103_13_B($('#GF1103_13_B'));
}

/*GF1103_13_D*/
function FGF1103_13_D(obj){
    showStr(obj);
    $('#GF1103_8_D').val(getNumToString(getStrFloat($('#GF1103_9_D').val())+getStrFloat($('#GF1103_10_D').val())+getStrFloat($('#GF1103_11_D').val())+getStrFloat($('#GF1103_12_D').val())+getStrFloat($('#GF1103_13_D').val()),2));
    FGF1103_8_D($('#GF1103_8_D'));
    $('#GF1103_13_B').val(getNumToString(getStrFloat($('#GF1103_13_C').val())+getStrFloat($('#GF1103_13_D').val()),2));
    FGF1103_13_B($('#GF1103_13_B'));
}

/*GF1103_13_E*/
function FGF1103_13_E(obj){
    showStr(obj);
    $('#GF1103_13_A').val(getNumToString(getStrFloat($('#GF1103_13_B').val())+getStrFloat($('#GF1103_13_E').val()),2));
    FGF1103_13_A($('#GF1103_13_A'));
    $('#GF1103_13_E').val(getNumToString(getStrFloat($('#GF1103_13_F').val())+getStrFloat($('#GF1103_13_G').val())+getStrFloat($('#GF1103_13_H').val()),2));
}

/*GF1103_13_F*/
function FGF1103_13_F(obj){
    showStr(obj);
    $('#GF1103_8_F').val(getNumToString(getStrFloat($('#GF1103_9_F').val())+getStrFloat($('#GF1103_10_F').val())+getStrFloat($('#GF1103_11_F').val())+getStrFloat($('#GF1103_12_F').val())+getStrFloat($('#GF1103_13_F').val()),2));
    FGF1103_8_F($('#GF1103_8_F'));
    $('#GF1103_13_E').val(getNumToString(getStrFloat($('#GF1103_13_F').val())+getStrFloat($('#GF1103_13_G').val())+getStrFloat($('#GF1103_13_H').val()),2));
    FGF1103_13_E($('#GF1103_13_E'));
}

/*GF1103_13_G*/
function FGF1103_13_G(obj){
    showStr(obj);
    $('#GF1103_8_G').val(getNumToString(getStrFloat($('#GF1103_9_G').val())+getStrFloat($('#GF1103_10_G').val())+getStrFloat($('#GF1103_11_G').val())+getStrFloat($('#GF1103_12_G').val())+getStrFloat($('#GF1103_13_G').val()),2));
    FGF1103_8_G($('#GF1103_8_G'));
    $('#GF1103_13_E').val(getNumToString(getStrFloat($('#GF1103_13_F').val())+getStrFloat($('#GF1103_13_G').val())+getStrFloat($('#GF1103_13_H').val()),2));
    FGF1103_13_E($('#GF1103_13_E'));
}

/*GF1103_13_H*/
function FGF1103_13_H(obj){
    showStr(obj);
    $('#GF1103_8_H').val(getNumToString(getStrFloat($('#GF1103_9_H').val())+getStrFloat($('#GF1103_10_H').val())+getStrFloat($('#GF1103_11_H').val())+getStrFloat($('#GF1103_12_H').val())+getStrFloat($('#GF1103_13_H').val()),2));
    FGF1103_8_H($('#GF1103_8_H'));
    $('#GF1103_13_E').val(getNumToString(getStrFloat($('#GF1103_13_F').val())+getStrFloat($('#GF1103_13_G').val())+getStrFloat($('#GF1103_13_H').val()),2));
    FGF1103_13_E($('#GF1103_13_E'));
}

/*GF1103_14_A*/
function FGF1103_14_A(obj){
    showStr(obj);
    $('#GF1103_14_A').val(getNumToString(getStrFloat($('#GF1103_14_B').val())+getStrFloat($('#GF1103_14_E').val()),2));
}

/*GF1103_14_B*/
function FGF1103_14_B(obj){
    showStr(obj);
    $('#GF1103_14_A').val(getNumToString(getStrFloat($('#GF1103_14_B').val())+getStrFloat($('#GF1103_14_E').val()),2));
    FGF1103_14_A($('#GF1103_14_A'));
    $('#GF1103_14_B').val(getNumToString(getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_14_D').val()),2));
}

/*GF1103_14_C*/
function FGF1103_14_C(obj){
    showStr(obj);
    $('#GF1103_14_B').val(getNumToString(getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_14_D').val()),2));
    FGF1103_14_B($('#GF1103_14_B'));
    $('#GF1103_14_C').val(getNumToString(getStrFloat($('#GF1103_15_C').val())+getStrFloat($('#GF1103_16_C').val())+getStrFloat($('#GF1103_17_C').val())+getStrFloat($('#GF1103_18_C').val())+getStrFloat($('#GF1103_19_C').val())+getStrFloat($('#GF1103_20_C').val())+getStrFloat($('#GF1103_21_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_14_D*/
function FGF1103_14_D(obj){
    showStr(obj);
    $('#GF1103_14_B').val(getNumToString(getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_14_D').val()),2));
    FGF1103_14_B($('#GF1103_14_B'));
    $('#GF1103_14_D').val(getNumToString(getStrFloat($('#GF1103_15_D').val())+getStrFloat($('#GF1103_16_D').val())+getStrFloat($('#GF1103_17_D').val())+getStrFloat($('#GF1103_18_D').val())+getStrFloat($('#GF1103_19_D').val())+getStrFloat($('#GF1103_20_D').val())+getStrFloat($('#GF1103_21_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_14_E*/
function FGF1103_14_E(obj){
    showStr(obj);
    $('#GF1103_14_A').val(getNumToString(getStrFloat($('#GF1103_14_B').val())+getStrFloat($('#GF1103_14_E').val()),2));
    FGF1103_14_A($('#GF1103_14_A'));
    $('#GF1103_14_E').val(getNumToString(getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_14_H').val()),2));
}

/*GF1103_14_F*/
function FGF1103_14_F(obj){
    showStr(obj);
    $('#GF1103_14_E').val(getNumToString(getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_14_H').val()),2));
    FGF1103_14_E($('#GF1103_14_E'));
    $('#GF1103_14_F').val(getNumToString(getStrFloat($('#GF1103_15_F').val())+getStrFloat($('#GF1103_16_F').val())+getStrFloat($('#GF1103_17_F').val())+getStrFloat($('#GF1103_18_F').val())+getStrFloat($('#GF1103_19_F').val())+getStrFloat($('#GF1103_21_F').val())+getStrFloat($('#GF1103_20_F').val()),2));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
}

/*GF1103_14_G*/
function FGF1103_14_G(obj){
    showStr(obj);
    $('#GF1103_14_E').val(getNumToString(getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_14_H').val()),2));
    FGF1103_14_E($('#GF1103_14_E'));
    $('#GF1103_14_G').val(getNumToString(getStrFloat($('#GF1103_15_G').val())+getStrFloat($('#GF1103_16_G').val())+getStrFloat($('#GF1103_17_G').val())+getStrFloat($('#GF1103_18_G').val())+getStrFloat($('#GF1103_19_G').val())+getStrFloat($('#GF1103_21_G').val())+getStrFloat($('#GF1103_20_G').val()),2));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_14_H*/
function FGF1103_14_H(obj){
    showStr(obj);
    $('#GF1103_14_E').val(getNumToString(getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_14_H').val()),2));
    FGF1103_14_E($('#GF1103_14_E'));
    $('#GF1103_14_H').val(getNumToString(getStrFloat($('#GF1103_15_H').val())+getStrFloat($('#GF1103_16_H').val())+getStrFloat($('#GF1103_17_H').val())+getStrFloat($('#GF1103_18_H').val())+getStrFloat($('#GF1103_19_H').val())+getStrFloat($('#GF1103_21_H').val())+getStrFloat($('#GF1103_20_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_15_A*/
function FGF1103_15_A(obj){
    showStr(obj);
    $('#GF1103_15_A').val(getNumToString(getStrFloat($('#GF1103_15_B').val())+getStrFloat($('#GF1103_15_E').val()),2));
}

/*GF1103_15_B*/
function FGF1103_15_B(obj){
    showStr(obj);
    $('#GF1103_15_A').val(getNumToString(getStrFloat($('#GF1103_15_B').val())+getStrFloat($('#GF1103_15_E').val()),2));
    FGF1103_15_A($('#GF1103_15_A'));
    $('#GF1103_15_B').val(getNumToString(getStrFloat($('#GF1103_15_C').val())+getStrFloat($('#GF1103_15_D').val()),2));
}

/*GF1103_15_C*/
function FGF1103_15_C(obj){
    showStr(obj);
    $('#GF1103_14_C').val(getNumToString(getStrFloat($('#GF1103_15_C').val())+getStrFloat($('#GF1103_16_C').val())+getStrFloat($('#GF1103_17_C').val())+getStrFloat($('#GF1103_18_C').val())+getStrFloat($('#GF1103_19_C').val())+getStrFloat($('#GF1103_20_C').val())+getStrFloat($('#GF1103_21_C').val()),2));
    FGF1103_14_C($('#GF1103_14_C'));
    $('#GF1103_15_B').val(getNumToString(getStrFloat($('#GF1103_15_C').val())+getStrFloat($('#GF1103_15_D').val()),2));
    FGF1103_15_B($('#GF1103_15_B'));
}

/*GF1103_15_D*/
function FGF1103_15_D(obj){
    showStr(obj);
    $('#GF1103_14_D').val(getNumToString(getStrFloat($('#GF1103_15_D').val())+getStrFloat($('#GF1103_16_D').val())+getStrFloat($('#GF1103_17_D').val())+getStrFloat($('#GF1103_18_D').val())+getStrFloat($('#GF1103_19_D').val())+getStrFloat($('#GF1103_20_D').val())+getStrFloat($('#GF1103_21_D').val()),2));
    FGF1103_14_D($('#GF1103_14_D'));
    $('#GF1103_15_B').val(getNumToString(getStrFloat($('#GF1103_15_C').val())+getStrFloat($('#GF1103_15_D').val()),2));
    FGF1103_15_B($('#GF1103_15_B'));
}

/*GF1103_15_E*/
function FGF1103_15_E(obj){
    showStr(obj);
    $('#GF1103_15_A').val(getNumToString(getStrFloat($('#GF1103_15_B').val())+getStrFloat($('#GF1103_15_E').val()),2));
    FGF1103_15_A($('#GF1103_15_A'));
    $('#GF1103_15_E').val(getNumToString(getStrFloat($('#GF1103_15_F').val())+getStrFloat($('#GF1103_15_G').val())+getStrFloat($('#GF1103_15_H').val()),2));
}

/*GF1103_15_F*/
function FGF1103_15_F(obj){
    showStr(obj);
    $('#GF1103_14_F').val(getNumToString(getStrFloat($('#GF1103_15_F').val())+getStrFloat($('#GF1103_16_F').val())+getStrFloat($('#GF1103_17_F').val())+getStrFloat($('#GF1103_18_F').val())+getStrFloat($('#GF1103_19_F').val())+getStrFloat($('#GF1103_21_F').val())+getStrFloat($('#GF1103_20_F').val()),2));
    FGF1103_14_F($('#GF1103_14_F'));
    $('#GF1103_15_E').val(getNumToString(getStrFloat($('#GF1103_15_F').val())+getStrFloat($('#GF1103_15_G').val())+getStrFloat($('#GF1103_15_H').val()),2));
    FGF1103_15_E($('#GF1103_15_E'));
}

/*GF1103_15_G*/
function FGF1103_15_G(obj){
    showStr(obj);
    $('#GF1103_14_G').val(getNumToString(getStrFloat($('#GF1103_15_G').val())+getStrFloat($('#GF1103_16_G').val())+getStrFloat($('#GF1103_17_G').val())+getStrFloat($('#GF1103_18_G').val())+getStrFloat($('#GF1103_19_G').val())+getStrFloat($('#GF1103_21_G').val())+getStrFloat($('#GF1103_20_G').val()),2));
    FGF1103_14_G($('#GF1103_14_G'));
    $('#GF1103_15_E').val(getNumToString(getStrFloat($('#GF1103_15_F').val())+getStrFloat($('#GF1103_15_G').val())+getStrFloat($('#GF1103_15_H').val()),2));
    FGF1103_15_E($('#GF1103_15_E'));
}

/*GF1103_15_H*/
function FGF1103_15_H(obj){
    showStr(obj);
    $('#GF1103_14_H').val(getNumToString(getStrFloat($('#GF1103_15_H').val())+getStrFloat($('#GF1103_16_H').val())+getStrFloat($('#GF1103_17_H').val())+getStrFloat($('#GF1103_18_H').val())+getStrFloat($('#GF1103_19_H').val())+getStrFloat($('#GF1103_21_H').val())+getStrFloat($('#GF1103_20_H').val()),2));
    FGF1103_14_H($('#GF1103_14_H'));
    $('#GF1103_15_E').val(getNumToString(getStrFloat($('#GF1103_15_F').val())+getStrFloat($('#GF1103_15_G').val())+getStrFloat($('#GF1103_15_H').val()),2));
    FGF1103_15_E($('#GF1103_15_E'));
}

/*GF1103_16_A*/
function FGF1103_16_A(obj){
    showStr(obj);
    $('#GF1103_16_A').val(getNumToString(getStrFloat($('#GF1103_16_B').val())+getStrFloat($('#GF1103_16_E').val()),2));
}

/*GF1103_16_B*/
function FGF1103_16_B(obj){
    showStr(obj);
    $('#GF1103_16_A').val(getNumToString(getStrFloat($('#GF1103_16_B').val())+getStrFloat($('#GF1103_16_E').val()),2));
    FGF1103_16_A($('#GF1103_16_A'));
    $('#GF1103_16_B').val(getNumToString(getStrFloat($('#GF1103_16_C').val())+getStrFloat($('#GF1103_16_D').val()),2));
}

/*GF1103_16_C*/
function FGF1103_16_C(obj){
    showStr(obj);
    $('#GF1103_14_C').val(getNumToString(getStrFloat($('#GF1103_15_C').val())+getStrFloat($('#GF1103_16_C').val())+getStrFloat($('#GF1103_17_C').val())+getStrFloat($('#GF1103_18_C').val())+getStrFloat($('#GF1103_19_C').val())+getStrFloat($('#GF1103_20_C').val())+getStrFloat($('#GF1103_21_C').val()),2));
    FGF1103_14_C($('#GF1103_14_C'));
    $('#GF1103_16_B').val(getNumToString(getStrFloat($('#GF1103_16_C').val())+getStrFloat($('#GF1103_16_D').val()),2));
    FGF1103_16_B($('#GF1103_16_B'));
}

/*GF1103_16_D*/
function FGF1103_16_D(obj){
    showStr(obj);
    $('#GF1103_14_D').val(getNumToString(getStrFloat($('#GF1103_15_D').val())+getStrFloat($('#GF1103_16_D').val())+getStrFloat($('#GF1103_17_D').val())+getStrFloat($('#GF1103_18_D').val())+getStrFloat($('#GF1103_19_D').val())+getStrFloat($('#GF1103_20_D').val())+getStrFloat($('#GF1103_21_D').val()),2));
    FGF1103_14_D($('#GF1103_14_D'));
    $('#GF1103_16_B').val(getNumToString(getStrFloat($('#GF1103_16_C').val())+getStrFloat($('#GF1103_16_D').val()),2));
    FGF1103_16_B($('#GF1103_16_B'));
}

/*GF1103_16_E*/
function FGF1103_16_E(obj){
    showStr(obj);
    $('#GF1103_16_A').val(getNumToString(getStrFloat($('#GF1103_16_B').val())+getStrFloat($('#GF1103_16_E').val()),2));
    FGF1103_16_A($('#GF1103_16_A'));
    $('#GF1103_16_E').val(getNumToString(getStrFloat($('#GF1103_16_F').val())+getStrFloat($('#GF1103_16_G').val())+getStrFloat($('#GF1103_16_H').val()),2));
}

/*GF1103_16_F*/
function FGF1103_16_F(obj){
    showStr(obj);
    $('#GF1103_14_F').val(getNumToString(getStrFloat($('#GF1103_15_F').val())+getStrFloat($('#GF1103_16_F').val())+getStrFloat($('#GF1103_17_F').val())+getStrFloat($('#GF1103_18_F').val())+getStrFloat($('#GF1103_19_F').val())+getStrFloat($('#GF1103_21_F').val())+getStrFloat($('#GF1103_20_F').val()),2));
    FGF1103_14_F($('#GF1103_14_F'));
    $('#GF1103_16_E').val(getNumToString(getStrFloat($('#GF1103_16_F').val())+getStrFloat($('#GF1103_16_G').val())+getStrFloat($('#GF1103_16_H').val()),2));
    FGF1103_16_E($('#GF1103_16_E'));
}

/*GF1103_16_G*/
function FGF1103_16_G(obj){
    showStr(obj);
    $('#GF1103_14_G').val(getNumToString(getStrFloat($('#GF1103_15_G').val())+getStrFloat($('#GF1103_16_G').val())+getStrFloat($('#GF1103_17_G').val())+getStrFloat($('#GF1103_18_G').val())+getStrFloat($('#GF1103_19_G').val())+getStrFloat($('#GF1103_21_G').val())+getStrFloat($('#GF1103_20_G').val()),2));
    FGF1103_14_G($('#GF1103_14_G'));
    $('#GF1103_16_E').val(getNumToString(getStrFloat($('#GF1103_16_F').val())+getStrFloat($('#GF1103_16_G').val())+getStrFloat($('#GF1103_16_H').val()),2));
    FGF1103_16_E($('#GF1103_16_E'));
}

/*GF1103_16_H*/
function FGF1103_16_H(obj){
    showStr(obj);
    $('#GF1103_14_H').val(getNumToString(getStrFloat($('#GF1103_15_H').val())+getStrFloat($('#GF1103_16_H').val())+getStrFloat($('#GF1103_17_H').val())+getStrFloat($('#GF1103_18_H').val())+getStrFloat($('#GF1103_19_H').val())+getStrFloat($('#GF1103_21_H').val())+getStrFloat($('#GF1103_20_H').val()),2));
    FGF1103_14_H($('#GF1103_14_H'));
    $('#GF1103_16_E').val(getNumToString(getStrFloat($('#GF1103_16_F').val())+getStrFloat($('#GF1103_16_G').val())+getStrFloat($('#GF1103_16_H').val()),2));
    FGF1103_16_E($('#GF1103_16_E'));
}

/*GF1103_17_A*/
function FGF1103_17_A(obj){
    showStr(obj);
    $('#GF1103_17_A').val(getNumToString(getStrFloat($('#GF1103_17_B').val())+getStrFloat($('#GF1103_17_E').val()),2));
}

/*GF1103_17_B*/
function FGF1103_17_B(obj){
    showStr(obj);
    $('#GF1103_17_A').val(getNumToString(getStrFloat($('#GF1103_17_B').val())+getStrFloat($('#GF1103_17_E').val()),2));
    FGF1103_17_A($('#GF1103_17_A'));
    $('#GF1103_17_B').val(getNumToString(getStrFloat($('#GF1103_17_C').val())+getStrFloat($('#GF1103_17_D').val()),2));
}

/*GF1103_17_C*/
function FGF1103_17_C(obj){
    showStr(obj);
    $('#GF1103_14_C').val(getNumToString(getStrFloat($('#GF1103_15_C').val())+getStrFloat($('#GF1103_16_C').val())+getStrFloat($('#GF1103_17_C').val())+getStrFloat($('#GF1103_18_C').val())+getStrFloat($('#GF1103_19_C').val())+getStrFloat($('#GF1103_20_C').val())+getStrFloat($('#GF1103_21_C').val()),2));
    FGF1103_14_C($('#GF1103_14_C'));
    $('#GF1103_17_B').val(getNumToString(getStrFloat($('#GF1103_17_C').val())+getStrFloat($('#GF1103_17_D').val()),2));
    FGF1103_17_B($('#GF1103_17_B'));
}

/*GF1103_17_D*/
function FGF1103_17_D(obj){
    showStr(obj);
    $('#GF1103_14_D').val(getNumToString(getStrFloat($('#GF1103_15_D').val())+getStrFloat($('#GF1103_16_D').val())+getStrFloat($('#GF1103_17_D').val())+getStrFloat($('#GF1103_18_D').val())+getStrFloat($('#GF1103_19_D').val())+getStrFloat($('#GF1103_20_D').val())+getStrFloat($('#GF1103_21_D').val()),2));
    FGF1103_14_D($('#GF1103_14_D'));
    $('#GF1103_17_B').val(getNumToString(getStrFloat($('#GF1103_17_C').val())+getStrFloat($('#GF1103_17_D').val()),2));
    FGF1103_17_B($('#GF1103_17_B'));
}

/*GF1103_17_E*/
function FGF1103_17_E(obj){
    showStr(obj);
    $('#GF1103_17_A').val(getNumToString(getStrFloat($('#GF1103_17_B').val())+getStrFloat($('#GF1103_17_E').val()),2));
    FGF1103_17_A($('#GF1103_17_A'));
    $('#GF1103_17_E').val(getNumToString(getStrFloat($('#GF1103_17_F').val())+getStrFloat($('#GF1103_17_G').val())+getStrFloat($('#GF1103_17_H').val()),2));
}

/*GF1103_17_F*/
function FGF1103_17_F(obj){
    showStr(obj);
    $('#GF1103_14_F').val(getNumToString(getStrFloat($('#GF1103_15_F').val())+getStrFloat($('#GF1103_16_F').val())+getStrFloat($('#GF1103_17_F').val())+getStrFloat($('#GF1103_18_F').val())+getStrFloat($('#GF1103_19_F').val())+getStrFloat($('#GF1103_21_F').val())+getStrFloat($('#GF1103_20_F').val()),2));
    FGF1103_14_F($('#GF1103_14_F'));
    $('#GF1103_17_E').val(getNumToString(getStrFloat($('#GF1103_17_F').val())+getStrFloat($('#GF1103_17_G').val())+getStrFloat($('#GF1103_17_H').val()),2));
    FGF1103_17_E($('#GF1103_17_E'));
}

/*GF1103_17_G*/
function FGF1103_17_G(obj){
    showStr(obj);
    $('#GF1103_14_G').val(getNumToString(getStrFloat($('#GF1103_15_G').val())+getStrFloat($('#GF1103_16_G').val())+getStrFloat($('#GF1103_17_G').val())+getStrFloat($('#GF1103_18_G').val())+getStrFloat($('#GF1103_19_G').val())+getStrFloat($('#GF1103_21_G').val())+getStrFloat($('#GF1103_20_G').val()),2));
    FGF1103_14_G($('#GF1103_14_G'));
    $('#GF1103_17_E').val(getNumToString(getStrFloat($('#GF1103_17_F').val())+getStrFloat($('#GF1103_17_G').val())+getStrFloat($('#GF1103_17_H').val()),2));
    FGF1103_17_E($('#GF1103_17_E'));
}

/*GF1103_17_H*/
function FGF1103_17_H(obj){
    showStr(obj);
    $('#GF1103_14_H').val(getNumToString(getStrFloat($('#GF1103_15_H').val())+getStrFloat($('#GF1103_16_H').val())+getStrFloat($('#GF1103_17_H').val())+getStrFloat($('#GF1103_18_H').val())+getStrFloat($('#GF1103_19_H').val())+getStrFloat($('#GF1103_21_H').val())+getStrFloat($('#GF1103_20_H').val()),2));
    FGF1103_14_H($('#GF1103_14_H'));
    $('#GF1103_17_E').val(getNumToString(getStrFloat($('#GF1103_17_F').val())+getStrFloat($('#GF1103_17_G').val())+getStrFloat($('#GF1103_17_H').val()),2));
    FGF1103_17_E($('#GF1103_17_E'));
}

/*GF1103_18_A*/
function FGF1103_18_A(obj){
    showStr(obj);
    $('#GF1103_18_A').val(getNumToString(getStrFloat($('#GF1103_18_B').val())+getStrFloat($('#GF1103_18_E').val()),2));
}

/*GF1103_18_B*/
function FGF1103_18_B(obj){
    showStr(obj);
    $('#GF1103_18_A').val(getNumToString(getStrFloat($('#GF1103_18_B').val())+getStrFloat($('#GF1103_18_E').val()),2));
    FGF1103_18_A($('#GF1103_18_A'));
    $('#GF1103_18_B').val(getNumToString(getStrFloat($('#GF1103_18_C').val())+getStrFloat($('#GF1103_18_D').val()),2));
}

/*GF1103_18_C*/
function FGF1103_18_C(obj){
    showStr(obj);
    $('#GF1103_14_C').val(getNumToString(getStrFloat($('#GF1103_15_C').val())+getStrFloat($('#GF1103_16_C').val())+getStrFloat($('#GF1103_17_C').val())+getStrFloat($('#GF1103_18_C').val())+getStrFloat($('#GF1103_19_C').val())+getStrFloat($('#GF1103_20_C').val())+getStrFloat($('#GF1103_21_C').val()),2));
    FGF1103_14_C($('#GF1103_14_C'));
    $('#GF1103_18_B').val(getNumToString(getStrFloat($('#GF1103_18_C').val())+getStrFloat($('#GF1103_18_D').val()),2));
    FGF1103_18_B($('#GF1103_18_B'));
}

/*GF1103_18_D*/
function FGF1103_18_D(obj){
    showStr(obj);
    $('#GF1103_14_D').val(getNumToString(getStrFloat($('#GF1103_15_D').val())+getStrFloat($('#GF1103_16_D').val())+getStrFloat($('#GF1103_17_D').val())+getStrFloat($('#GF1103_18_D').val())+getStrFloat($('#GF1103_19_D').val())+getStrFloat($('#GF1103_20_D').val())+getStrFloat($('#GF1103_21_D').val()),2));
    FGF1103_14_D($('#GF1103_14_D'));
    $('#GF1103_18_B').val(getNumToString(getStrFloat($('#GF1103_18_C').val())+getStrFloat($('#GF1103_18_D').val()),2));
    FGF1103_18_B($('#GF1103_18_B'));
}

/*GF1103_18_E*/
function FGF1103_18_E(obj){
    showStr(obj);
    $('#GF1103_18_A').val(getNumToString(getStrFloat($('#GF1103_18_B').val())+getStrFloat($('#GF1103_18_E').val()),2));
    FGF1103_18_A($('#GF1103_18_A'));
    $('#GF1103_18_E').val(getNumToString(getStrFloat($('#GF1103_18_F').val())+getStrFloat($('#GF1103_18_G').val())+getStrFloat($('#GF1103_18_H').val()),2));
}

/*GF1103_18_F*/
function FGF1103_18_F(obj){
    showStr(obj);
    $('#GF1103_14_F').val(getNumToString(getStrFloat($('#GF1103_15_F').val())+getStrFloat($('#GF1103_16_F').val())+getStrFloat($('#GF1103_17_F').val())+getStrFloat($('#GF1103_18_F').val())+getStrFloat($('#GF1103_19_F').val())+getStrFloat($('#GF1103_21_F').val())+getStrFloat($('#GF1103_20_F').val()),2));
    FGF1103_14_F($('#GF1103_14_F'));
    $('#GF1103_18_E').val(getNumToString(getStrFloat($('#GF1103_18_F').val())+getStrFloat($('#GF1103_18_G').val())+getStrFloat($('#GF1103_18_H').val()),2));
    FGF1103_18_E($('#GF1103_18_E'));
}

/*GF1103_18_G*/
function FGF1103_18_G(obj){
    showStr(obj);
    $('#GF1103_14_G').val(getNumToString(getStrFloat($('#GF1103_15_G').val())+getStrFloat($('#GF1103_16_G').val())+getStrFloat($('#GF1103_17_G').val())+getStrFloat($('#GF1103_18_G').val())+getStrFloat($('#GF1103_19_G').val())+getStrFloat($('#GF1103_21_G').val())+getStrFloat($('#GF1103_20_G').val()),2));
    FGF1103_14_G($('#GF1103_14_G'));
    $('#GF1103_18_E').val(getNumToString(getStrFloat($('#GF1103_18_F').val())+getStrFloat($('#GF1103_18_G').val())+getStrFloat($('#GF1103_18_H').val()),2));
    FGF1103_18_E($('#GF1103_18_E'));
}

/*GF1103_18_H*/
function FGF1103_18_H(obj){
    showStr(obj);
    $('#GF1103_14_H').val(getNumToString(getStrFloat($('#GF1103_15_H').val())+getStrFloat($('#GF1103_16_H').val())+getStrFloat($('#GF1103_17_H').val())+getStrFloat($('#GF1103_18_H').val())+getStrFloat($('#GF1103_19_H').val())+getStrFloat($('#GF1103_21_H').val())+getStrFloat($('#GF1103_20_H').val()),2));
    FGF1103_14_H($('#GF1103_14_H'));
    $('#GF1103_18_E').val(getNumToString(getStrFloat($('#GF1103_18_F').val())+getStrFloat($('#GF1103_18_G').val())+getStrFloat($('#GF1103_18_H').val()),2));
    FGF1103_18_E($('#GF1103_18_E'));
}

/*GF1103_19_A*/
function FGF1103_19_A(obj){
    showStr(obj);
    $('#GF1103_19_A').val(getNumToString(getStrFloat($('#GF1103_19_B').val())+getStrFloat($('#GF1103_19_E').val()),2));
}

/*GF1103_19_B*/
function FGF1103_19_B(obj){
    showStr(obj);
    $('#GF1103_19_A').val(getNumToString(getStrFloat($('#GF1103_19_B').val())+getStrFloat($('#GF1103_19_E').val()),2));
    FGF1103_19_A($('#GF1103_19_A'));
    $('#GF1103_19_B').val(getNumToString(getStrFloat($('#GF1103_19_C').val())+getStrFloat($('#GF1103_19_D').val()),2));
}

/*GF1103_19_C*/
function FGF1103_19_C(obj){
    showStr(obj);
    $('#GF1103_14_C').val(getNumToString(getStrFloat($('#GF1103_15_C').val())+getStrFloat($('#GF1103_16_C').val())+getStrFloat($('#GF1103_17_C').val())+getStrFloat($('#GF1103_18_C').val())+getStrFloat($('#GF1103_19_C').val())+getStrFloat($('#GF1103_20_C').val())+getStrFloat($('#GF1103_21_C').val()),2));
    FGF1103_14_C($('#GF1103_14_C'));
    $('#GF1103_19_B').val(getNumToString(getStrFloat($('#GF1103_19_C').val())+getStrFloat($('#GF1103_19_D').val()),2));
    FGF1103_19_B($('#GF1103_19_B'));
}

/*GF1103_19_D*/
function FGF1103_19_D(obj){
    showStr(obj);
    $('#GF1103_14_D').val(getNumToString(getStrFloat($('#GF1103_15_D').val())+getStrFloat($('#GF1103_16_D').val())+getStrFloat($('#GF1103_17_D').val())+getStrFloat($('#GF1103_18_D').val())+getStrFloat($('#GF1103_19_D').val())+getStrFloat($('#GF1103_20_D').val())+getStrFloat($('#GF1103_21_D').val()),2));
    FGF1103_14_D($('#GF1103_14_D'));
    $('#GF1103_19_B').val(getNumToString(getStrFloat($('#GF1103_19_C').val())+getStrFloat($('#GF1103_19_D').val()),2));
    FGF1103_19_B($('#GF1103_19_B'));
}

/*GF1103_19_E*/
function FGF1103_19_E(obj){
    showStr(obj);
    $('#GF1103_19_A').val(getNumToString(getStrFloat($('#GF1103_19_B').val())+getStrFloat($('#GF1103_19_E').val()),2));
    FGF1103_19_A($('#GF1103_19_A'));
    $('#GF1103_19_E').val(getNumToString(getStrFloat($('#GF1103_19_F').val())+getStrFloat($('#GF1103_19_G').val())+getStrFloat($('#GF1103_19_H').val()),2));
}

/*GF1103_19_F*/
function FGF1103_19_F(obj){
    showStr(obj);
    $('#GF1103_14_F').val(getNumToString(getStrFloat($('#GF1103_15_F').val())+getStrFloat($('#GF1103_16_F').val())+getStrFloat($('#GF1103_17_F').val())+getStrFloat($('#GF1103_18_F').val())+getStrFloat($('#GF1103_19_F').val())+getStrFloat($('#GF1103_21_F').val())+getStrFloat($('#GF1103_20_F').val()),2));
    FGF1103_14_F($('#GF1103_14_F'));
    $('#GF1103_19_E').val(getNumToString(getStrFloat($('#GF1103_19_F').val())+getStrFloat($('#GF1103_19_G').val())+getStrFloat($('#GF1103_19_H').val()),2));
    FGF1103_19_E($('#GF1103_19_E'));
}

/*GF1103_19_G*/
function FGF1103_19_G(obj){
    showStr(obj);
    $('#GF1103_14_G').val(getNumToString(getStrFloat($('#GF1103_15_G').val())+getStrFloat($('#GF1103_16_G').val())+getStrFloat($('#GF1103_17_G').val())+getStrFloat($('#GF1103_18_G').val())+getStrFloat($('#GF1103_19_G').val())+getStrFloat($('#GF1103_21_G').val())+getStrFloat($('#GF1103_20_G').val()),2));
    FGF1103_14_G($('#GF1103_14_G'));
    $('#GF1103_19_E').val(getNumToString(getStrFloat($('#GF1103_19_F').val())+getStrFloat($('#GF1103_19_G').val())+getStrFloat($('#GF1103_19_H').val()),2));
    FGF1103_19_E($('#GF1103_19_E'));
}

/*GF1103_19_H*/
function FGF1103_19_H(obj){
    showStr(obj);
    $('#GF1103_14_H').val(getNumToString(getStrFloat($('#GF1103_15_H').val())+getStrFloat($('#GF1103_16_H').val())+getStrFloat($('#GF1103_17_H').val())+getStrFloat($('#GF1103_18_H').val())+getStrFloat($('#GF1103_19_H').val())+getStrFloat($('#GF1103_21_H').val())+getStrFloat($('#GF1103_20_H').val()),2));
    FGF1103_14_H($('#GF1103_14_H'));
    $('#GF1103_19_E').val(getNumToString(getStrFloat($('#GF1103_19_F').val())+getStrFloat($('#GF1103_19_G').val())+getStrFloat($('#GF1103_19_H').val()),2));
    FGF1103_19_E($('#GF1103_19_E'));
}

/*GF1103_20_A*/
function FGF1103_20_A(obj){
    showStr(obj);
    $('#GF1103_20_A').val(getNumToString(getStrFloat($('#GF1103_20_B').val())+getStrFloat($('#GF1103_20_E').val()),2));
}

/*GF1103_20_B*/
function FGF1103_20_B(obj){
    showStr(obj);
    $('#GF1103_20_A').val(getNumToString(getStrFloat($('#GF1103_20_B').val())+getStrFloat($('#GF1103_20_E').val()),2));
    FGF1103_20_A($('#GF1103_20_A'));
    $('#GF1103_20_B').val(getNumToString(getStrFloat($('#GF1103_20_C').val())+getStrFloat($('#GF1103_20_D').val()),2));
}

/*GF1103_20_C*/
function FGF1103_20_C(obj){
    showStr(obj);
    $('#GF1103_14_C').val(getNumToString(getStrFloat($('#GF1103_15_C').val())+getStrFloat($('#GF1103_16_C').val())+getStrFloat($('#GF1103_17_C').val())+getStrFloat($('#GF1103_18_C').val())+getStrFloat($('#GF1103_19_C').val())+getStrFloat($('#GF1103_20_C').val())+getStrFloat($('#GF1103_21_C').val()),2));
    FGF1103_14_C($('#GF1103_14_C'));
    $('#GF1103_20_B').val(getNumToString(getStrFloat($('#GF1103_20_C').val())+getStrFloat($('#GF1103_20_D').val()),2));
    FGF1103_20_B($('#GF1103_20_B'));
}

/*GF1103_20_D*/
function FGF1103_20_D(obj){
    showStr(obj);
    $('#GF1103_14_D').val(getNumToString(getStrFloat($('#GF1103_15_D').val())+getStrFloat($('#GF1103_16_D').val())+getStrFloat($('#GF1103_17_D').val())+getStrFloat($('#GF1103_18_D').val())+getStrFloat($('#GF1103_19_D').val())+getStrFloat($('#GF1103_20_D').val())+getStrFloat($('#GF1103_21_D').val()),2));
    FGF1103_14_D($('#GF1103_14_D'));
    $('#GF1103_20_B').val(getNumToString(getStrFloat($('#GF1103_20_C').val())+getStrFloat($('#GF1103_20_D').val()),2));
    FGF1103_20_B($('#GF1103_20_B'));
}

/*GF1103_20_E*/
function FGF1103_20_E(obj){
    showStr(obj);
    $('#GF1103_20_A').val(getNumToString(getStrFloat($('#GF1103_20_B').val())+getStrFloat($('#GF1103_20_E').val()),2));
    FGF1103_20_A($('#GF1103_20_A'));
    $('#GF1103_20_E').val(getNumToString(getStrFloat($('#GF1103_20_F').val())+getStrFloat($('#GF1103_20_G').val())+getStrFloat($('#GF1103_20_H').val()),2));
}

/*GF1103_20_F*/
function FGF1103_20_F(obj){
    showStr(obj);
    $('#GF1103_14_F').val(getNumToString(getStrFloat($('#GF1103_15_F').val())+getStrFloat($('#GF1103_16_F').val())+getStrFloat($('#GF1103_17_F').val())+getStrFloat($('#GF1103_18_F').val())+getStrFloat($('#GF1103_19_F').val())+getStrFloat($('#GF1103_21_F').val())+getStrFloat($('#GF1103_20_F').val()),2));
    FGF1103_14_F($('#GF1103_14_F'));
    $('#GF1103_20_E').val(getNumToString(getStrFloat($('#GF1103_20_F').val())+getStrFloat($('#GF1103_20_G').val())+getStrFloat($('#GF1103_20_H').val()),2));
    FGF1103_20_E($('#GF1103_20_E'));
}

/*GF1103_20_G*/
function FGF1103_20_G(obj){
    showStr(obj);
    $('#GF1103_14_G').val(getNumToString(getStrFloat($('#GF1103_15_G').val())+getStrFloat($('#GF1103_16_G').val())+getStrFloat($('#GF1103_17_G').val())+getStrFloat($('#GF1103_18_G').val())+getStrFloat($('#GF1103_19_G').val())+getStrFloat($('#GF1103_21_G').val())+getStrFloat($('#GF1103_20_G').val()),2));
    FGF1103_14_G($('#GF1103_14_G'));
    $('#GF1103_20_E').val(getNumToString(getStrFloat($('#GF1103_20_F').val())+getStrFloat($('#GF1103_20_G').val())+getStrFloat($('#GF1103_20_H').val()),2));
    FGF1103_20_E($('#GF1103_20_E'));
}

/*GF1103_20_H*/
function FGF1103_20_H(obj){
    showStr(obj);
    $('#GF1103_14_H').val(getNumToString(getStrFloat($('#GF1103_15_H').val())+getStrFloat($('#GF1103_16_H').val())+getStrFloat($('#GF1103_17_H').val())+getStrFloat($('#GF1103_18_H').val())+getStrFloat($('#GF1103_19_H').val())+getStrFloat($('#GF1103_21_H').val())+getStrFloat($('#GF1103_20_H').val()),2));
    FGF1103_14_H($('#GF1103_14_H'));
    $('#GF1103_20_E').val(getNumToString(getStrFloat($('#GF1103_20_F').val())+getStrFloat($('#GF1103_20_G').val())+getStrFloat($('#GF1103_20_H').val()),2));
    FGF1103_20_E($('#GF1103_20_E'));
}

/*GF1103_21_A*/
function FGF1103_21_A(obj){
    showStr(obj);
    $('#GF1103_21_A').val(getNumToString(getStrFloat($('#GF1103_21_B').val())+getStrFloat($('#GF1103_21_E').val()),2));
}

/*GF1103_21_B*/
function FGF1103_21_B(obj){
    showStr(obj);
    $('#GF1103_21_A').val(getNumToString(getStrFloat($('#GF1103_21_B').val())+getStrFloat($('#GF1103_21_E').val()),2));
    FGF1103_21_A($('#GF1103_21_A'));
    $('#GF1103_21_B').val(getNumToString(getStrFloat($('#GF1103_21_C').val())+getStrFloat($('#GF1103_21_D').val()),2));
}

/*GF1103_21_C*/
function FGF1103_21_C(obj){
    showStr(obj);
    $('#GF1103_14_C').val(getNumToString(getStrFloat($('#GF1103_15_C').val())+getStrFloat($('#GF1103_16_C').val())+getStrFloat($('#GF1103_17_C').val())+getStrFloat($('#GF1103_18_C').val())+getStrFloat($('#GF1103_19_C').val())+getStrFloat($('#GF1103_20_C').val())+getStrFloat($('#GF1103_21_C').val()),2));
    FGF1103_14_C($('#GF1103_14_C'));
    $('#GF1103_21_B').val(getNumToString(getStrFloat($('#GF1103_21_C').val())+getStrFloat($('#GF1103_21_D').val()),2));
    FGF1103_21_B($('#GF1103_21_B'));
}

/*GF1103_21_D*/
function FGF1103_21_D(obj){
    showStr(obj);
    $('#GF1103_14_D').val(getNumToString(getStrFloat($('#GF1103_15_D').val())+getStrFloat($('#GF1103_16_D').val())+getStrFloat($('#GF1103_17_D').val())+getStrFloat($('#GF1103_18_D').val())+getStrFloat($('#GF1103_19_D').val())+getStrFloat($('#GF1103_20_D').val())+getStrFloat($('#GF1103_21_D').val()),2));
    FGF1103_14_D($('#GF1103_14_D'));
    $('#GF1103_21_B').val(getNumToString(getStrFloat($('#GF1103_21_C').val())+getStrFloat($('#GF1103_21_D').val()),2));
    FGF1103_21_B($('#GF1103_21_B'));
}

/*GF1103_21_E*/
function FGF1103_21_E(obj){
    showStr(obj);
    $('#GF1103_21_A').val(getNumToString(getStrFloat($('#GF1103_21_B').val())+getStrFloat($('#GF1103_21_E').val()),2));
    FGF1103_21_A($('#GF1103_21_A'));
    $('#GF1103_21_E').val(getNumToString(getStrFloat($('#GF1103_21_F').val())+getStrFloat($('#GF1103_21_G').val())+getStrFloat($('#GF1103_21_H').val()),2));
}

/*GF1103_21_F*/
function FGF1103_21_F(obj){
    showStr(obj);
    $('#GF1103_14_F').val(getNumToString(getStrFloat($('#GF1103_15_F').val())+getStrFloat($('#GF1103_16_F').val())+getStrFloat($('#GF1103_17_F').val())+getStrFloat($('#GF1103_18_F').val())+getStrFloat($('#GF1103_19_F').val())+getStrFloat($('#GF1103_21_F').val())+getStrFloat($('#GF1103_20_F').val()),2));
    FGF1103_14_F($('#GF1103_14_F'));
    $('#GF1103_21_E').val(getNumToString(getStrFloat($('#GF1103_21_F').val())+getStrFloat($('#GF1103_21_G').val())+getStrFloat($('#GF1103_21_H').val()),2));
    FGF1103_21_E($('#GF1103_21_E'));
}

/*GF1103_21_G*/
function FGF1103_21_G(obj){
    showStr(obj);
    $('#GF1103_14_G').val(getNumToString(getStrFloat($('#GF1103_15_G').val())+getStrFloat($('#GF1103_16_G').val())+getStrFloat($('#GF1103_17_G').val())+getStrFloat($('#GF1103_18_G').val())+getStrFloat($('#GF1103_19_G').val())+getStrFloat($('#GF1103_21_G').val())+getStrFloat($('#GF1103_20_G').val()),2));
    FGF1103_14_G($('#GF1103_14_G'));
    $('#GF1103_21_E').val(getNumToString(getStrFloat($('#GF1103_21_F').val())+getStrFloat($('#GF1103_21_G').val())+getStrFloat($('#GF1103_21_H').val()),2));
    FGF1103_21_E($('#GF1103_21_E'));
}

/*GF1103_21_H*/
function FGF1103_21_H(obj){
    showStr(obj);
    $('#GF1103_14_H').val(getNumToString(getStrFloat($('#GF1103_15_H').val())+getStrFloat($('#GF1103_16_H').val())+getStrFloat($('#GF1103_17_H').val())+getStrFloat($('#GF1103_18_H').val())+getStrFloat($('#GF1103_19_H').val())+getStrFloat($('#GF1103_21_H').val())+getStrFloat($('#GF1103_20_H').val()),2));
    FGF1103_14_H($('#GF1103_14_H'));
    $('#GF1103_21_E').val(getNumToString(getStrFloat($('#GF1103_21_F').val())+getStrFloat($('#GF1103_21_G').val())+getStrFloat($('#GF1103_21_H').val()),2));
    FGF1103_21_E($('#GF1103_21_E'));
}

/*GF1103_22_A*/
function FGF1103_22_A(obj){
    showStr(obj);
    $('#GF1103_22_A').val(getNumToString(getStrFloat($('#GF1103_22_B').val())+getStrFloat($('#GF1103_22_E').val()),2));
}

/*GF1103_22_B*/
function FGF1103_22_B(obj){
    showStr(obj);
    $('#GF1103_22_A').val(getNumToString(getStrFloat($('#GF1103_22_B').val())+getStrFloat($('#GF1103_22_E').val()),2));
    FGF1103_22_A($('#GF1103_22_A'));
    $('#GF1103_22_B').val(getNumToString(getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_22_D').val()),2));
}

/*GF1103_22_C*/
function FGF1103_22_C(obj){
    showStr(obj);
    $('#GF1103_22_B').val(getNumToString(getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_22_D').val()),2));
    FGF1103_22_B($('#GF1103_22_B'));
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_22_D*/
function FGF1103_22_D(obj){
    showStr(obj);
    $('#GF1103_22_B').val(getNumToString(getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_22_D').val()),2));
    FGF1103_22_B($('#GF1103_22_B'));
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_22_E*/
function FGF1103_22_E(obj){
    showStr(obj);
    $('#GF1103_22_A').val(getNumToString(getStrFloat($('#GF1103_22_B').val())+getStrFloat($('#GF1103_22_E').val()),2));
    FGF1103_22_A($('#GF1103_22_A'));
    $('#GF1103_22_E').val(getNumToString(getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_22_H').val()),2));
}

/*GF1103_22_F*/
function FGF1103_22_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    $('#GF1103_22_E').val(getNumToString(getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_22_H').val()),2));
    FGF1103_22_E($('#GF1103_22_E'));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
}

/*GF1103_22_G*/
function FGF1103_22_G(obj){
    showStr(obj);
    $('#GF1103_22_E').val(getNumToString(getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_22_H').val()),2));
    FGF1103_22_E($('#GF1103_22_E'));
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_22_H*/
function FGF1103_22_H(obj){
    showStr(obj);
    $('#GF1103_22_E').val(getNumToString(getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_22_H').val()),2));
    FGF1103_22_E($('#GF1103_22_E'));
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_23_A*/
function FGF1103_23_A(obj){
    showStr(obj);
    $('#GF1103_23_A').val(getNumToString(getStrFloat($('#GF1103_23_B').val())+getStrFloat($('#GF1103_23_E').val()),2));
}

/*GF1103_23_B*/
function FGF1103_23_B(obj){
    showStr(obj);
    $('#GF1103_23_A').val(getNumToString(getStrFloat($('#GF1103_23_B').val())+getStrFloat($('#GF1103_23_E').val()),2));
    FGF1103_23_A($('#GF1103_23_A'));
    $('#GF1103_23_B').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_23_D').val()),2));
}

/*GF1103_23_C*/
function FGF1103_23_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_23_B').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_23_D').val()),2));
    FGF1103_23_B($('#GF1103_23_B'));
}

/*GF1103_23_D*/
function FGF1103_23_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_23_B').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_23_D').val()),2));
    FGF1103_23_B($('#GF1103_23_B'));
}

/*GF1103_23_E*/
function FGF1103_23_E(obj){
    showStr(obj);
    $('#GF1103_23_A').val(getNumToString(getStrFloat($('#GF1103_23_B').val())+getStrFloat($('#GF1103_23_E').val()),2));
    FGF1103_23_A($('#GF1103_23_A'));
    $('#GF1103_23_E').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_23_H').val()),2));
}

/*GF1103_23_F*/
function FGF1103_23_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_23_E').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_23_H').val()),2));
    FGF1103_23_E($('#GF1103_23_E'));
}

/*GF1103_23_G*/
function FGF1103_23_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_23_E').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_23_H').val()),2));
    FGF1103_23_E($('#GF1103_23_E'));
}

/*GF1103_23_H*/
function FGF1103_23_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_23_E').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_23_H').val()),2));
    FGF1103_23_E($('#GF1103_23_E'));
}

/*GF1103_24_A*/
function FGF1103_24_A(obj){
    showStr(obj);
    $('#GF1103_24_A').val(getNumToString(getStrFloat($('#GF1103_24_B').val())+getStrFloat($('#GF1103_24_E').val()),2));
}

/*GF1103_24_B*/
function FGF1103_24_B(obj){
    showStr(obj);
    $('#GF1103_24_A').val(getNumToString(getStrFloat($('#GF1103_24_B').val())+getStrFloat($('#GF1103_24_E').val()),2));
    FGF1103_24_A($('#GF1103_24_A'));
    $('#GF1103_24_B').val(getNumToString(getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_24_D').val()),2));
}

/*GF1103_24_C*/
function FGF1103_24_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_24_B').val(getNumToString(getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_24_D').val()),2));
    FGF1103_24_B($('#GF1103_24_B'));
}

/*GF1103_24_D*/
function FGF1103_24_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_24_B').val(getNumToString(getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_24_D').val()),2));
    FGF1103_24_B($('#GF1103_24_B'));
}

/*GF1103_24_E*/
function FGF1103_24_E(obj){
    showStr(obj);
    $('#GF1103_24_A').val(getNumToString(getStrFloat($('#GF1103_24_B').val())+getStrFloat($('#GF1103_24_E').val()),2));
    FGF1103_24_A($('#GF1103_24_A'));
    $('#GF1103_24_E').val(getNumToString(getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_24_H').val()),2));
}

/*GF1103_24_F*/
function FGF1103_24_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_24_E').val(getNumToString(getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_24_H').val()),2));
    FGF1103_24_E($('#GF1103_24_E'));
}

/*GF1103_24_G*/
function FGF1103_24_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_24_E').val(getNumToString(getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_24_H').val()),2));
    FGF1103_24_E($('#GF1103_24_E'));
}

/*GF1103_24_H*/
function FGF1103_24_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_24_E').val(getNumToString(getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_24_H').val()),2));
    FGF1103_24_E($('#GF1103_24_E'));
}

/*GF1103_25_A*/
function FGF1103_25_A(obj){
    showStr(obj);
    $('#GF1103_25_A').val(getNumToString(getStrFloat($('#GF1103_25_B').val())+getStrFloat($('#GF1103_25_E').val()),2));
}

/*GF1103_25_B*/
function FGF1103_25_B(obj){
    showStr(obj);
    $('#GF1103_25_A').val(getNumToString(getStrFloat($('#GF1103_25_B').val())+getStrFloat($('#GF1103_25_E').val()),2));
    FGF1103_25_A($('#GF1103_25_A'));
    $('#GF1103_25_B').val(getNumToString(getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_25_D').val()),2));
}

/*GF1103_25_C*/
function FGF1103_25_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_25_B').val(getNumToString(getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_25_D').val()),2));
    FGF1103_25_B($('#GF1103_25_B'));
}

/*GF1103_25_D*/
function FGF1103_25_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_25_B').val(getNumToString(getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_25_D').val()),2));
    FGF1103_25_B($('#GF1103_25_B'));
}

/*GF1103_25_E*/
function FGF1103_25_E(obj){
    showStr(obj);
    $('#GF1103_25_A').val(getNumToString(getStrFloat($('#GF1103_25_B').val())+getStrFloat($('#GF1103_25_E').val()),2));
    FGF1103_25_A($('#GF1103_25_A'));
    $('#GF1103_25_E').val(getNumToString(getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_25_H').val()),2));
}

/*GF1103_25_F*/
function FGF1103_25_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_25_E').val(getNumToString(getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_25_H').val()),2));
    FGF1103_25_E($('#GF1103_25_E'));
}

/*GF1103_25_G*/
function FGF1103_25_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_25_E').val(getNumToString(getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_25_H').val()),2));
    FGF1103_25_E($('#GF1103_25_E'));
}

/*GF1103_25_H*/
function FGF1103_25_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_25_E').val(getNumToString(getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_25_H').val()),2));
    FGF1103_25_E($('#GF1103_25_E'));
}

/*GF1103_26_A*/
function FGF1103_26_A(obj){
    showStr(obj);
    $('#GF1103_26_A').val(getNumToString(getStrFloat($('#GF1103_26_B').val())+getStrFloat($('#GF1103_26_E').val()),2));
}

/*GF1103_26_B*/
function FGF1103_26_B(obj){
    showStr(obj);
    $('#GF1103_26_A').val(getNumToString(getStrFloat($('#GF1103_26_B').val())+getStrFloat($('#GF1103_26_E').val()),2));
    FGF1103_26_A($('#GF1103_26_A'));
    $('#GF1103_26_B').val(getNumToString(getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_26_D').val()),2));
}

/*GF1103_26_C*/
function FGF1103_26_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_26_B').val(getNumToString(getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_26_D').val()),2));
    FGF1103_26_B($('#GF1103_26_B'));
}

/*GF1103_26_D*/
function FGF1103_26_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_26_B').val(getNumToString(getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_26_D').val()),2));
    FGF1103_26_B($('#GF1103_26_B'));
}

/*GF1103_26_E*/
function FGF1103_26_E(obj){
    showStr(obj);
    $('#GF1103_26_A').val(getNumToString(getStrFloat($('#GF1103_26_B').val())+getStrFloat($('#GF1103_26_E').val()),2));
    FGF1103_26_A($('#GF1103_26_A'));
    $('#GF1103_26_E').val(getNumToString(getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_26_H').val()),2));
}

/*GF1103_26_F*/
function FGF1103_26_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_26_E').val(getNumToString(getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_26_H').val()),2));
    FGF1103_26_E($('#GF1103_26_E'));
}

/*GF1103_26_G*/
function FGF1103_26_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_26_E').val(getNumToString(getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_26_H').val()),2));
    FGF1103_26_E($('#GF1103_26_E'));
}

/*GF1103_26_H*/
function FGF1103_26_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_26_E').val(getNumToString(getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_26_H').val()),2));
    FGF1103_26_E($('#GF1103_26_E'));
}

/*GF1103_27_A*/
function FGF1103_27_A(obj){
    showStr(obj);
    $('#GF1103_27_A').val(getNumToString(getStrFloat($('#GF1103_27_B').val())+getStrFloat($('#GF1103_27_E').val()),2));
}

/*GF1103_27_B*/
function FGF1103_27_B(obj){
    showStr(obj);
    $('#GF1103_27_A').val(getNumToString(getStrFloat($('#GF1103_27_B').val())+getStrFloat($('#GF1103_27_E').val()),2));
    FGF1103_27_A($('#GF1103_27_A'));
    $('#GF1103_27_B').val(getNumToString(getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_27_D').val()),2));
}

/*GF1103_27_C*/
function FGF1103_27_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_27_B').val(getNumToString(getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_27_D').val()),2));
    FGF1103_27_B($('#GF1103_27_B'));
}

/*GF1103_27_D*/
function FGF1103_27_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_27_B').val(getNumToString(getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_27_D').val()),2));
    FGF1103_27_B($('#GF1103_27_B'));
}

/*GF1103_27_E*/
function FGF1103_27_E(obj){
    showStr(obj);
    $('#GF1103_27_A').val(getNumToString(getStrFloat($('#GF1103_27_B').val())+getStrFloat($('#GF1103_27_E').val()),2));
    FGF1103_27_A($('#GF1103_27_A'));
    $('#GF1103_27_E').val(getNumToString(getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_27_H').val()),2));
}

/*GF1103_27_F*/
function FGF1103_27_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_27_E').val(getNumToString(getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_27_H').val()),2));
    FGF1103_27_E($('#GF1103_27_E'));
}

/*GF1103_27_G*/
function FGF1103_27_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_27_E').val(getNumToString(getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_27_H').val()),2));
    FGF1103_27_E($('#GF1103_27_E'));
}

/*GF1103_27_H*/
function FGF1103_27_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_27_E').val(getNumToString(getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_27_H').val()),2));
    FGF1103_27_E($('#GF1103_27_E'));
}

/*GF1103_28_A*/
function FGF1103_28_A(obj){
    showStr(obj);
    $('#GF1103_28_A').val(getNumToString(getStrFloat($('#GF1103_28_B').val())+getStrFloat($('#GF1103_28_E').val()),2));
}

/*GF1103_28_B*/
function FGF1103_28_B(obj){
    showStr(obj);
    $('#GF1103_28_A').val(getNumToString(getStrFloat($('#GF1103_28_B').val())+getStrFloat($('#GF1103_28_E').val()),2));
    FGF1103_28_A($('#GF1103_28_A'));
    $('#GF1103_28_B').val(getNumToString(getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_28_D').val()),2));
}

/*GF1103_28_C*/
function FGF1103_28_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_28_B').val(getNumToString(getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_28_D').val()),2));
    FGF1103_28_B($('#GF1103_28_B'));
}

/*GF1103_28_D*/
function FGF1103_28_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_28_B').val(getNumToString(getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_28_D').val()),2));
    FGF1103_28_B($('#GF1103_28_B'));
}

/*GF1103_28_E*/
function FGF1103_28_E(obj){
    showStr(obj);
    $('#GF1103_28_A').val(getNumToString(getStrFloat($('#GF1103_28_B').val())+getStrFloat($('#GF1103_28_E').val()),2));
    FGF1103_28_A($('#GF1103_28_A'));
    $('#GF1103_28_E').val(getNumToString(getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_28_H').val()),2));
}

/*GF1103_28_F*/
function FGF1103_28_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_28_E').val(getNumToString(getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_28_H').val()),2));
    FGF1103_28_E($('#GF1103_28_E'));
}

/*GF1103_28_G*/
function FGF1103_28_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_28_E').val(getNumToString(getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_28_H').val()),2));
    FGF1103_28_E($('#GF1103_28_E'));
}

/*GF1103_28_H*/
function FGF1103_28_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_28_E').val(getNumToString(getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_28_H').val()),2));
    FGF1103_28_E($('#GF1103_28_E'));
}

/*GF1103_29_A*/
function FGF1103_29_A(obj){
    showStr(obj);
    $('#GF1103_29_A').val(getNumToString(getStrFloat($('#GF1103_29_B').val())+getStrFloat($('#GF1103_29_E').val()),2));
}

/*GF1103_29_B*/
function FGF1103_29_B(obj){
    showStr(obj);
    $('#GF1103_29_A').val(getNumToString(getStrFloat($('#GF1103_29_B').val())+getStrFloat($('#GF1103_29_E').val()),2));
    FGF1103_29_A($('#GF1103_29_A'));
    $('#GF1103_29_B').val(getNumToString(getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_29_D').val()),2));
}

/*GF1103_29_C*/
function FGF1103_29_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_29_B').val(getNumToString(getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_29_D').val()),2));
    FGF1103_29_B($('#GF1103_29_B'));
}

/*GF1103_29_D*/
function FGF1103_29_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_29_B').val(getNumToString(getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_29_D').val()),2));
    FGF1103_29_B($('#GF1103_29_B'));
}

/*GF1103_29_E*/
function FGF1103_29_E(obj){
    showStr(obj);
    $('#GF1103_29_A').val(getNumToString(getStrFloat($('#GF1103_29_B').val())+getStrFloat($('#GF1103_29_E').val()),2));
    FGF1103_29_A($('#GF1103_29_A'));
    $('#GF1103_29_E').val(getNumToString(getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_29_H').val()),2));
}

/*GF1103_29_F*/
function FGF1103_29_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_29_E').val(getNumToString(getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_29_H').val()),2));
    FGF1103_29_E($('#GF1103_29_E'));
}

/*GF1103_29_G*/
function FGF1103_29_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_29_E').val(getNumToString(getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_29_H').val()),2));
    FGF1103_29_E($('#GF1103_29_E'));
}

/*GF1103_29_H*/
function FGF1103_29_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_29_E').val(getNumToString(getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_29_H').val()),2));
    FGF1103_29_E($('#GF1103_29_E'));
}

/*GF1103_30_A*/
function FGF1103_30_A(obj){
    showStr(obj);
    $('#GF1103_30_A').val(getNumToString(getStrFloat($('#GF1103_30_B').val())+getStrFloat($('#GF1103_30_E').val()),2));
}

/*GF1103_30_B*/
function FGF1103_30_B(obj){
    showStr(obj);
    $('#GF1103_30_A').val(getNumToString(getStrFloat($('#GF1103_30_B').val())+getStrFloat($('#GF1103_30_E').val()),2));
    FGF1103_30_A($('#GF1103_30_A'));
    $('#GF1103_30_B').val(getNumToString(getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_30_D').val()),2));
}

/*GF1103_30_C*/
function FGF1103_30_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_30_B').val(getNumToString(getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_30_D').val()),2));
    FGF1103_30_B($('#GF1103_30_B'));
}

/*GF1103_30_D*/
function FGF1103_30_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_30_B').val(getNumToString(getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_30_D').val()),2));
    FGF1103_30_B($('#GF1103_30_B'));
}

/*GF1103_30_E*/
function FGF1103_30_E(obj){
    showStr(obj);
    $('#GF1103_30_A').val(getNumToString(getStrFloat($('#GF1103_30_B').val())+getStrFloat($('#GF1103_30_E').val()),2));
    FGF1103_30_A($('#GF1103_30_A'));
    $('#GF1103_30_E').val(getNumToString(getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_30_H').val()),2));
}

/*GF1103_30_F*/
function FGF1103_30_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_30_E').val(getNumToString(getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_30_H').val()),2));
    FGF1103_30_E($('#GF1103_30_E'));
}

/*GF1103_30_G*/
function FGF1103_30_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_30_E').val(getNumToString(getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_30_H').val()),2));
    FGF1103_30_E($('#GF1103_30_E'));
}

/*GF1103_30_H*/
function FGF1103_30_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_30_E').val(getNumToString(getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_30_H').val()),2));
    FGF1103_30_E($('#GF1103_30_E'));
}

/*GF1103_31_A*/
function FGF1103_31_A(obj){
    showStr(obj);
    $('#GF1103_31_A').val(getNumToString(getStrFloat($('#GF1103_31_B').val())+getStrFloat($('#GF1103_31_E').val()),2));
}

/*GF1103_31_B*/
function FGF1103_31_B(obj){
    showStr(obj);
    $('#GF1103_31_A').val(getNumToString(getStrFloat($('#GF1103_31_B').val())+getStrFloat($('#GF1103_31_E').val()),2));
    FGF1103_31_A($('#GF1103_31_A'));
    $('#GF1103_31_B').val(getNumToString(getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_31_D').val()),2));
}

/*GF1103_31_C*/
function FGF1103_31_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_31_B').val(getNumToString(getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_31_D').val()),2));
    FGF1103_31_B($('#GF1103_31_B'));
}

/*GF1103_31_D*/
function FGF1103_31_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_31_B').val(getNumToString(getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_31_D').val()),2));
    FGF1103_31_B($('#GF1103_31_B'));
}

/*GF1103_31_E*/
function FGF1103_31_E(obj){
    showStr(obj);
    $('#GF1103_31_A').val(getNumToString(getStrFloat($('#GF1103_31_B').val())+getStrFloat($('#GF1103_31_E').val()),2));
    FGF1103_31_A($('#GF1103_31_A'));
    $('#GF1103_31_E').val(getNumToString(getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_31_H').val()),2));
}

/*GF1103_31_F*/
function FGF1103_31_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_31_E').val(getNumToString(getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_31_H').val()),2));
    FGF1103_31_E($('#GF1103_31_E'));
}

/*GF1103_31_G*/
function FGF1103_31_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_31_E').val(getNumToString(getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_31_H').val()),2));
    FGF1103_31_E($('#GF1103_31_E'));
}

/*GF1103_31_H*/
function FGF1103_31_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_31_E').val(getNumToString(getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_31_H').val()),2));
    FGF1103_31_E($('#GF1103_31_E'));
}

/*GF1103_32_A*/
function FGF1103_32_A(obj){
    showStr(obj);
    $('#GF1103_32_A').val(getNumToString(getStrFloat($('#GF1103_32_B').val())+getStrFloat($('#GF1103_32_E').val()),2));
}

/*GF1103_32_B*/
function FGF1103_32_B(obj){
    showStr(obj);
    $('#GF1103_32_A').val(getNumToString(getStrFloat($('#GF1103_32_B').val())+getStrFloat($('#GF1103_32_E').val()),2));
    FGF1103_32_A($('#GF1103_32_A'));
    $('#GF1103_32_B').val(getNumToString(getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_32_D').val()),2));
}

/*GF1103_32_C*/
function FGF1103_32_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_32_B').val(getNumToString(getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_32_D').val()),2));
    FGF1103_32_B($('#GF1103_32_B'));
}

/*GF1103_32_D*/
function FGF1103_32_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_32_B').val(getNumToString(getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_32_D').val()),2));
    FGF1103_32_B($('#GF1103_32_B'));
}

/*GF1103_32_E*/
function FGF1103_32_E(obj){
    showStr(obj);
    $('#GF1103_32_A').val(getNumToString(getStrFloat($('#GF1103_32_B').val())+getStrFloat($('#GF1103_32_E').val()),2));
    FGF1103_32_A($('#GF1103_32_A'));
    $('#GF1103_32_E').val(getNumToString(getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_32_H').val()),2));
}

/*GF1103_32_F*/
function FGF1103_32_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_32_E').val(getNumToString(getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_32_H').val()),2));
    FGF1103_32_E($('#GF1103_32_E'));
}

/*GF1103_32_G*/
function FGF1103_32_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_32_E').val(getNumToString(getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_32_H').val()),2));
    FGF1103_32_E($('#GF1103_32_E'));
}

/*GF1103_32_H*/
function FGF1103_32_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_32_E').val(getNumToString(getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_32_H').val()),2));
    FGF1103_32_E($('#GF1103_32_E'));
}

/*GF1103_33_A*/
function FGF1103_33_A(obj){
    showStr(obj);
    $('#GF1103_33_A').val(getNumToString(getStrFloat($('#GF1103_33_B').val())+getStrFloat($('#GF1103_33_E').val()),2));
}

/*GF1103_33_B*/
function FGF1103_33_B(obj){
    showStr(obj);
    $('#GF1103_33_A').val(getNumToString(getStrFloat($('#GF1103_33_B').val())+getStrFloat($('#GF1103_33_E').val()),2));
    FGF1103_33_A($('#GF1103_33_A'));
    $('#GF1103_33_B').val(getNumToString(getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_33_D').val()),2));
}

/*GF1103_33_C*/
function FGF1103_33_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_33_B').val(getNumToString(getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_33_D').val()),2));
    FGF1103_33_B($('#GF1103_33_B'));
}

/*GF1103_33_D*/
function FGF1103_33_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_33_B').val(getNumToString(getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_33_D').val()),2));
    FGF1103_33_B($('#GF1103_33_B'));
}

/*GF1103_33_E*/
function FGF1103_33_E(obj){
    showStr(obj);
    $('#GF1103_33_A').val(getNumToString(getStrFloat($('#GF1103_33_B').val())+getStrFloat($('#GF1103_33_E').val()),2));
    FGF1103_33_A($('#GF1103_33_A'));
    $('#GF1103_33_E').val(getNumToString(getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_33_H').val()),2));
}

/*GF1103_33_F*/
function FGF1103_33_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_33_E').val(getNumToString(getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_33_H').val()),2));
    FGF1103_33_E($('#GF1103_33_E'));
}

/*GF1103_33_G*/
function FGF1103_33_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_33_E').val(getNumToString(getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_33_H').val()),2));
    FGF1103_33_E($('#GF1103_33_E'));
}

/*GF1103_33_H*/
function FGF1103_33_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_33_E').val(getNumToString(getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_33_H').val()),2));
    FGF1103_33_E($('#GF1103_33_E'));
}

/*GF1103_34_A*/
function FGF1103_34_A(obj){
    showStr(obj);
    $('#GF1103_34_A').val(getNumToString(getStrFloat($('#GF1103_34_B').val())+getStrFloat($('#GF1103_34_E').val()),2));
}

/*GF1103_34_B*/
function FGF1103_34_B(obj){
    showStr(obj);
    $('#GF1103_34_A').val(getNumToString(getStrFloat($('#GF1103_34_B').val())+getStrFloat($('#GF1103_34_E').val()),2));
    FGF1103_34_A($('#GF1103_34_A'));
    $('#GF1103_34_B').val(getNumToString(getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_34_D').val()),2));
}

/*GF1103_34_C*/
function FGF1103_34_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_34_B').val(getNumToString(getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_34_D').val()),2));
    FGF1103_34_B($('#GF1103_34_B'));
}

/*GF1103_34_D*/
function FGF1103_34_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_34_B').val(getNumToString(getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_34_D').val()),2));
    FGF1103_34_B($('#GF1103_34_B'));
}

/*GF1103_34_E*/
function FGF1103_34_E(obj){
    showStr(obj);
    $('#GF1103_34_A').val(getNumToString(getStrFloat($('#GF1103_34_B').val())+getStrFloat($('#GF1103_34_E').val()),2));
    FGF1103_34_A($('#GF1103_34_A'));
    $('#GF1103_34_E').val(getNumToString(getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_34_H').val()),2));
}

/*GF1103_34_F*/
function FGF1103_34_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_34_E').val(getNumToString(getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_34_H').val()),2));
    FGF1103_34_E($('#GF1103_34_E'));
}

/*GF1103_34_G*/
function FGF1103_34_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_34_E').val(getNumToString(getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_34_H').val()),2));
    FGF1103_34_E($('#GF1103_34_E'));
}

/*GF1103_34_H*/
function FGF1103_34_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_34_E').val(getNumToString(getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_34_H').val()),2));
    FGF1103_34_E($('#GF1103_34_E'));
}

/*GF1103_35_A*/
function FGF1103_35_A(obj){
    showStr(obj);
    $('#GF1103_35_A').val(getNumToString(getStrFloat($('#GF1103_35_B').val())+getStrFloat($('#GF1103_35_E').val()),2));
}

/*GF1103_35_B*/
function FGF1103_35_B(obj){
    showStr(obj);
    $('#GF1103_35_A').val(getNumToString(getStrFloat($('#GF1103_35_B').val())+getStrFloat($('#GF1103_35_E').val()),2));
    FGF1103_35_A($('#GF1103_35_A'));
    $('#GF1103_35_B').val(getNumToString(getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_35_D').val()),2));
}

/*GF1103_35_C*/
function FGF1103_35_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_35_B').val(getNumToString(getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_35_D').val()),2));
    FGF1103_35_B($('#GF1103_35_B'));
}

/*GF1103_35_D*/
function FGF1103_35_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_35_B').val(getNumToString(getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_35_D').val()),2));
    FGF1103_35_B($('#GF1103_35_B'));
}

/*GF1103_35_E*/
function FGF1103_35_E(obj){
    showStr(obj);
    $('#GF1103_35_A').val(getNumToString(getStrFloat($('#GF1103_35_B').val())+getStrFloat($('#GF1103_35_E').val()),2));
    FGF1103_35_A($('#GF1103_35_A'));
    $('#GF1103_35_E').val(getNumToString(getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_35_H').val()),2));
}

/*GF1103_35_F*/
function FGF1103_35_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_35_E').val(getNumToString(getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_35_H').val()),2));
    FGF1103_35_E($('#GF1103_35_E'));
}

/*GF1103_35_G*/
function FGF1103_35_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_35_E').val(getNumToString(getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_35_H').val()),2));
    FGF1103_35_E($('#GF1103_35_E'));
}

/*GF1103_35_H*/
function FGF1103_35_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_35_E').val(getNumToString(getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_35_H').val()),2));
    FGF1103_35_E($('#GF1103_35_E'));
}

/*GF1103_36_A*/
function FGF1103_36_A(obj){
    showStr(obj);
    $('#GF1103_36_A').val(getNumToString(getStrFloat($('#GF1103_36_B').val())+getStrFloat($('#GF1103_36_E').val()),2));
}

/*GF1103_36_B*/
function FGF1103_36_B(obj){
    showStr(obj);
    $('#GF1103_36_A').val(getNumToString(getStrFloat($('#GF1103_36_B').val())+getStrFloat($('#GF1103_36_E').val()),2));
    FGF1103_36_A($('#GF1103_36_A'));
    $('#GF1103_36_B').val(getNumToString(getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_36_D').val()),2));
}

/*GF1103_36_C*/
function FGF1103_36_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_36_B').val(getNumToString(getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_36_D').val()),2));
    FGF1103_36_B($('#GF1103_36_B'));
}

/*GF1103_36_D*/
function FGF1103_36_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_36_B').val(getNumToString(getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_36_D').val()),2));
    FGF1103_36_B($('#GF1103_36_B'));
}

/*GF1103_36_E*/
function FGF1103_36_E(obj){
    showStr(obj);
    $('#GF1103_36_A').val(getNumToString(getStrFloat($('#GF1103_36_B').val())+getStrFloat($('#GF1103_36_E').val()),2));
    FGF1103_36_A($('#GF1103_36_A'));
    $('#GF1103_36_E').val(getNumToString(getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_36_H').val()),2));
}

/*GF1103_36_F*/
function FGF1103_36_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_36_E').val(getNumToString(getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_36_H').val()),2));
    FGF1103_36_E($('#GF1103_36_E'));
}

/*GF1103_36_G*/
function FGF1103_36_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_36_E').val(getNumToString(getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_36_H').val()),2));
    FGF1103_36_E($('#GF1103_36_E'));
}

/*GF1103_36_H*/
function FGF1103_36_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_36_E').val(getNumToString(getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_36_H').val()),2));
    FGF1103_36_E($('#GF1103_36_E'));
}

/*GF1103_37_A*/
function FGF1103_37_A(obj){
    showStr(obj);
    $('#GF1103_37_A').val(getNumToString(getStrFloat($('#GF1103_37_B').val())+getStrFloat($('#GF1103_37_E').val()),2));
}

/*GF1103_37_B*/
function FGF1103_37_B(obj){
    showStr(obj);
    $('#GF1103_37_A').val(getNumToString(getStrFloat($('#GF1103_37_B').val())+getStrFloat($('#GF1103_37_E').val()),2));
    FGF1103_37_A($('#GF1103_37_A'));
    $('#GF1103_37_B').val(getNumToString(getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_37_D').val()),2));
}

/*GF1103_37_C*/
function FGF1103_37_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_37_B').val(getNumToString(getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_37_D').val()),2));
    FGF1103_37_B($('#GF1103_37_B'));
}

/*GF1103_37_D*/
function FGF1103_37_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_37_B').val(getNumToString(getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_37_D').val()),2));
    FGF1103_37_B($('#GF1103_37_B'));
}

/*GF1103_37_E*/
function FGF1103_37_E(obj){
    showStr(obj);
    $('#GF1103_37_A').val(getNumToString(getStrFloat($('#GF1103_37_B').val())+getStrFloat($('#GF1103_37_E').val()),2));
    FGF1103_37_A($('#GF1103_37_A'));
    $('#GF1103_37_E').val(getNumToString(getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_37_H').val()),2));
}

/*GF1103_37_F*/
function FGF1103_37_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_37_E').val(getNumToString(getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_37_H').val()),2));
    FGF1103_37_E($('#GF1103_37_E'));
}

/*GF1103_37_G*/
function FGF1103_37_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_37_E').val(getNumToString(getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_37_H').val()),2));
    FGF1103_37_E($('#GF1103_37_E'));
}

/*GF1103_37_H*/
function FGF1103_37_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_37_E').val(getNumToString(getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_37_H').val()),2));
    FGF1103_37_E($('#GF1103_37_E'));
}

/*GF1103_38_A*/
function FGF1103_38_A(obj){
    showStr(obj);
    $('#GF1103_38_A').val(getNumToString(getStrFloat($('#GF1103_38_B').val())+getStrFloat($('#GF1103_38_E').val()),2));
}

/*GF1103_38_B*/
function FGF1103_38_B(obj){
    showStr(obj);
    $('#GF1103_38_A').val(getNumToString(getStrFloat($('#GF1103_38_B').val())+getStrFloat($('#GF1103_38_E').val()),2));
    FGF1103_38_A($('#GF1103_38_A'));
    $('#GF1103_38_B').val(getNumToString(getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_38_D').val()),2));
}

/*GF1103_38_C*/
function FGF1103_38_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_38_B').val(getNumToString(getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_38_D').val()),2));
    FGF1103_38_B($('#GF1103_38_B'));
}

/*GF1103_38_D*/
function FGF1103_38_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_38_B').val(getNumToString(getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_38_D').val()),2));
    FGF1103_38_B($('#GF1103_38_B'));
}

/*GF1103_38_E*/
function FGF1103_38_E(obj){
    showStr(obj);
    $('#GF1103_38_A').val(getNumToString(getStrFloat($('#GF1103_38_B').val())+getStrFloat($('#GF1103_38_E').val()),2));
    FGF1103_38_A($('#GF1103_38_A'));
    $('#GF1103_38_E').val(getNumToString(getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_38_H').val()),2));
}

/*GF1103_38_F*/
function FGF1103_38_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_38_E').val(getNumToString(getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_38_H').val()),2));
    FGF1103_38_E($('#GF1103_38_E'));
}

/*GF1103_38_G*/
function FGF1103_38_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_38_E').val(getNumToString(getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_38_H').val()),2));
    FGF1103_38_E($('#GF1103_38_E'));
}

/*GF1103_38_H*/
function FGF1103_38_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_38_E').val(getNumToString(getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_38_H').val()),2));
    FGF1103_38_E($('#GF1103_38_E'));
}

/*GF1103_39_A*/
function FGF1103_39_A(obj){
    showStr(obj);
    $('#GF1103_39_A').val(getNumToString(getStrFloat($('#GF1103_39_B').val())+getStrFloat($('#GF1103_39_E').val()),2));
}

/*GF1103_39_B*/
function FGF1103_39_B(obj){
    showStr(obj);
    $('#GF1103_39_A').val(getNumToString(getStrFloat($('#GF1103_39_B').val())+getStrFloat($('#GF1103_39_E').val()),2));
    FGF1103_39_A($('#GF1103_39_A'));
    $('#GF1103_39_B').val(getNumToString(getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_39_D').val()),2));
}

/*GF1103_39_C*/
function FGF1103_39_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_39_B').val(getNumToString(getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_39_D').val()),2));
    FGF1103_39_B($('#GF1103_39_B'));
}

/*GF1103_39_D*/
function FGF1103_39_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_39_B').val(getNumToString(getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_39_D').val()),2));
    FGF1103_39_B($('#GF1103_39_B'));
}

/*GF1103_39_E*/
function FGF1103_39_E(obj){
    showStr(obj);
    $('#GF1103_39_A').val(getNumToString(getStrFloat($('#GF1103_39_B').val())+getStrFloat($('#GF1103_39_E').val()),2));
    FGF1103_39_A($('#GF1103_39_A'));
    $('#GF1103_39_E').val(getNumToString(getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_39_H').val()),2));
}

/*GF1103_39_F*/
function FGF1103_39_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_39_E').val(getNumToString(getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_39_H').val()),2));
    FGF1103_39_E($('#GF1103_39_E'));
}

/*GF1103_39_G*/
function FGF1103_39_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_39_E').val(getNumToString(getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_39_H').val()),2));
    FGF1103_39_E($('#GF1103_39_E'));
}

/*GF1103_39_H*/
function FGF1103_39_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_39_E').val(getNumToString(getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_39_H').val()),2));
    FGF1103_39_E($('#GF1103_39_E'));
}

/*GF1103_40_A*/
function FGF1103_40_A(obj){
    showStr(obj);
    $('#GF1103_40_A').val(getNumToString(getStrFloat($('#GF1103_40_B').val())+getStrFloat($('#GF1103_40_E').val()),2));
}

/*GF1103_40_B*/
function FGF1103_40_B(obj){
    showStr(obj);
    $('#GF1103_40_A').val(getNumToString(getStrFloat($('#GF1103_40_B').val())+getStrFloat($('#GF1103_40_E').val()),2));
    FGF1103_40_A($('#GF1103_40_A'));
    $('#GF1103_40_B').val(getNumToString(getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_40_D').val()),2));
}

/*GF1103_40_C*/
function FGF1103_40_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_40_B').val(getNumToString(getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_40_D').val()),2));
    FGF1103_40_B($('#GF1103_40_B'));
}

/*GF1103_40_D*/
function FGF1103_40_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_40_B').val(getNumToString(getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_40_D').val()),2));
    FGF1103_40_B($('#GF1103_40_B'));
}

/*GF1103_40_E*/
function FGF1103_40_E(obj){
    showStr(obj);
    $('#GF1103_40_A').val(getNumToString(getStrFloat($('#GF1103_40_B').val())+getStrFloat($('#GF1103_40_E').val()),2));
    FGF1103_40_A($('#GF1103_40_A'));
    $('#GF1103_40_E').val(getNumToString(getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_40_H').val()),2));
}

/*GF1103_40_F*/
function FGF1103_40_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_40_E').val(getNumToString(getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_40_H').val()),2));
    FGF1103_40_E($('#GF1103_40_E'));
}

/*GF1103_40_G*/
function FGF1103_40_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_40_E').val(getNumToString(getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_40_H').val()),2));
    FGF1103_40_E($('#GF1103_40_E'));
}

/*GF1103_40_H*/
function FGF1103_40_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_40_E').val(getNumToString(getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_40_H').val()),2));
    FGF1103_40_E($('#GF1103_40_E'));
}

/*GF1103_41_A*/
function FGF1103_41_A(obj){
    showStr(obj);
    $('#GF1103_41_A').val(getNumToString(getStrFloat($('#GF1103_41_B').val())+getStrFloat($('#GF1103_41_E').val()),2));
}

/*GF1103_41_B*/
function FGF1103_41_B(obj){
    showStr(obj);
    $('#GF1103_41_A').val(getNumToString(getStrFloat($('#GF1103_41_B').val())+getStrFloat($('#GF1103_41_E').val()),2));
    FGF1103_41_A($('#GF1103_41_A'));
    $('#GF1103_41_B').val(getNumToString(getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_41_D').val()),2));
}

/*GF1103_41_C*/
function FGF1103_41_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_41_B').val(getNumToString(getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_41_D').val()),2));
    FGF1103_41_B($('#GF1103_41_B'));
}

/*GF1103_41_D*/
function FGF1103_41_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_41_B').val(getNumToString(getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_41_D').val()),2));
    FGF1103_41_B($('#GF1103_41_B'));
}

/*GF1103_41_E*/
function FGF1103_41_E(obj){
    showStr(obj);
    $('#GF1103_41_A').val(getNumToString(getStrFloat($('#GF1103_41_B').val())+getStrFloat($('#GF1103_41_E').val()),2));
    FGF1103_41_A($('#GF1103_41_A'));
    $('#GF1103_41_E').val(getNumToString(getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_41_H').val()),2));
}

/*GF1103_41_F*/
function FGF1103_41_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_41_E').val(getNumToString(getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_41_H').val()),2));
    FGF1103_41_E($('#GF1103_41_E'));
}

/*GF1103_41_G*/
function FGF1103_41_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_41_E').val(getNumToString(getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_41_H').val()),2));
    FGF1103_41_E($('#GF1103_41_E'));
}

/*GF1103_41_H*/
function FGF1103_41_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_41_E').val(getNumToString(getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_41_H').val()),2));
    FGF1103_41_E($('#GF1103_41_E'));
}

/*GF1103_42_A*/
function FGF1103_42_A(obj){
    showStr(obj);
    $('#GF1103_42_A').val(getNumToString(getStrFloat($('#GF1103_42_B').val())+getStrFloat($('#GF1103_42_E').val()),2));
}

/*GF1103_42_B*/
function FGF1103_42_B(obj){
    showStr(obj);
    $('#GF1103_42_A').val(getNumToString(getStrFloat($('#GF1103_42_B').val())+getStrFloat($('#GF1103_42_E').val()),2));
    FGF1103_42_A($('#GF1103_42_A'));
    $('#GF1103_42_B').val(getNumToString(getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_42_D').val()),2));
}

/*GF1103_42_C*/
function FGF1103_42_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_42_B').val(getNumToString(getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_42_D').val()),2));
    FGF1103_42_B($('#GF1103_42_B'));
}

/*GF1103_42_D*/
function FGF1103_42_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_42_B').val(getNumToString(getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_42_D').val()),2));
    FGF1103_42_B($('#GF1103_42_B'));
}

/*GF1103_42_E*/
function FGF1103_42_E(obj){
    showStr(obj);
    $('#GF1103_42_A').val(getNumToString(getStrFloat($('#GF1103_42_B').val())+getStrFloat($('#GF1103_42_E').val()),2));
    FGF1103_42_A($('#GF1103_42_A'));
    $('#GF1103_42_E').val(getNumToString(getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_42_H').val()),2));
}

/*GF1103_42_F*/
function FGF1103_42_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_42_E').val(getNumToString(getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_42_H').val()),2));
    FGF1103_42_E($('#GF1103_42_E'));
}

/*GF1103_42_G*/
function FGF1103_42_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_42_E').val(getNumToString(getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_42_H').val()),2));
    FGF1103_42_E($('#GF1103_42_E'));
}

/*GF1103_42_H*/
function FGF1103_42_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_42_E').val(getNumToString(getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_42_H').val()),2));
    FGF1103_42_E($('#GF1103_42_E'));
}

/*GF1103_43_A*/
function FGF1103_43_A(obj){
    showStr(obj);
    $('#GF1103_43_A').val(getNumToString(getStrFloat($('#GF1103_43_B').val())+getStrFloat($('#GF1103_43_E').val()),2));
}

/*GF1103_43_B*/
function FGF1103_43_B(obj){
    showStr(obj);
    $('#GF1103_43_A').val(getNumToString(getStrFloat($('#GF1103_43_B').val())+getStrFloat($('#GF1103_43_E').val()),2));
    FGF1103_43_A($('#GF1103_43_A'));
    $('#GF1103_43_B').val(getNumToString(getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_43_D').val()),2));
}

/*GF1103_43_C*/
function FGF1103_43_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_43_B').val(getNumToString(getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_43_D').val()),2));
    FGF1103_43_B($('#GF1103_43_B'));
}

/*GF1103_43_D*/
function FGF1103_43_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_43_B').val(getNumToString(getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_43_D').val()),2));
    FGF1103_43_B($('#GF1103_43_B'));
}

/*GF1103_43_E*/
function FGF1103_43_E(obj){
    showStr(obj);
    $('#GF1103_43_A').val(getNumToString(getStrFloat($('#GF1103_43_B').val())+getStrFloat($('#GF1103_43_E').val()),2));
    FGF1103_43_A($('#GF1103_43_A'));
    $('#GF1103_43_E').val(getNumToString(getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_43_H').val()),2));
}

/*GF1103_43_F*/
function FGF1103_43_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_43_E').val(getNumToString(getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_43_H').val()),2));
    FGF1103_43_E($('#GF1103_43_E'));
}

/*GF1103_43_G*/
function FGF1103_43_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_43_E').val(getNumToString(getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_43_H').val()),2));
    FGF1103_43_E($('#GF1103_43_E'));
}

/*GF1103_43_H*/
function FGF1103_43_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_43_E').val(getNumToString(getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_43_H').val()),2));
    FGF1103_43_E($('#GF1103_43_E'));
}

/*GF1103_44_A*/
function FGF1103_44_A(obj){
    showStr(obj);
    $('#GF1103_44_A').val(getNumToString(getStrFloat($('#GF1103_44_B').val())+getStrFloat($('#GF1103_44_E').val()),2));
}

/*GF1103_44_B*/
function FGF1103_44_B(obj){
    showStr(obj);
    $('#GF1103_44_A').val(getNumToString(getStrFloat($('#GF1103_44_B').val())+getStrFloat($('#GF1103_44_E').val()),2));
    FGF1103_44_A($('#GF1103_44_A'));
    $('#GF1103_44_B').val(getNumToString(getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_44_D').val()),2));
}

/*GF1103_44_C*/
function FGF1103_44_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_44_B').val(getNumToString(getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_44_D').val()),2));
    FGF1103_44_B($('#GF1103_44_B'));
}

/*GF1103_44_D*/
function FGF1103_44_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_44_B').val(getNumToString(getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_44_D').val()),2));
    FGF1103_44_B($('#GF1103_44_B'));
}

/*GF1103_44_E*/
function FGF1103_44_E(obj){
    showStr(obj);
    $('#GF1103_44_A').val(getNumToString(getStrFloat($('#GF1103_44_B').val())+getStrFloat($('#GF1103_44_E').val()),2));
    FGF1103_44_A($('#GF1103_44_A'));
    $('#GF1103_44_E').val(getNumToString(getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_44_H').val()),2));
}

/*GF1103_44_F*/
function FGF1103_44_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_44_E').val(getNumToString(getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_44_H').val()),2));
    FGF1103_44_E($('#GF1103_44_E'));
}

/*GF1103_44_G*/
function FGF1103_44_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_44_E').val(getNumToString(getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_44_H').val()),2));
    FGF1103_44_E($('#GF1103_44_E'));
}

/*GF1103_44_H*/
function FGF1103_44_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_44_E').val(getNumToString(getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_44_H').val()),2));
    FGF1103_44_E($('#GF1103_44_E'));
}

/*GF1103_45_A*/
function FGF1103_45_A(obj){
    showStr(obj);
    $('#GF1103_45_A').val(getNumToString(getStrFloat($('#GF1103_45_B').val())+getStrFloat($('#GF1103_45_E').val()),2));
}

/*GF1103_45_B*/
function FGF1103_45_B(obj){
    showStr(obj);
    $('#GF1103_45_A').val(getNumToString(getStrFloat($('#GF1103_45_B').val())+getStrFloat($('#GF1103_45_E').val()),2));
    FGF1103_45_A($('#GF1103_45_A'));
    $('#GF1103_45_B').val(getNumToString(getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_45_D').val()),2));
}

/*GF1103_45_C*/
function FGF1103_45_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_45_B').val(getNumToString(getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_45_D').val()),2));
    FGF1103_45_B($('#GF1103_45_B'));
}

/*GF1103_45_D*/
function FGF1103_45_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_45_B').val(getNumToString(getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_45_D').val()),2));
    FGF1103_45_B($('#GF1103_45_B'));
}

/*GF1103_45_E*/
function FGF1103_45_E(obj){
    showStr(obj);
    $('#GF1103_45_A').val(getNumToString(getStrFloat($('#GF1103_45_B').val())+getStrFloat($('#GF1103_45_E').val()),2));
    FGF1103_45_A($('#GF1103_45_A'));
    $('#GF1103_45_E').val(getNumToString(getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_45_H').val()),2));
}

/*GF1103_45_F*/
function FGF1103_45_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_45_E').val(getNumToString(getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_45_H').val()),2));
    FGF1103_45_E($('#GF1103_45_E'));
}

/*GF1103_45_G*/
function FGF1103_45_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_45_E').val(getNumToString(getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_45_H').val()),2));
    FGF1103_45_E($('#GF1103_45_E'));
}

/*GF1103_45_H*/
function FGF1103_45_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_45_E').val(getNumToString(getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_45_H').val()),2));
    FGF1103_45_E($('#GF1103_45_E'));
}

/*GF1103_46_A*/
function FGF1103_46_A(obj){
    showStr(obj);
    $('#GF1103_46_A').val(getNumToString(getStrFloat($('#GF1103_46_B').val())+getStrFloat($('#GF1103_46_E').val()),2));
}

/*GF1103_46_B*/
function FGF1103_46_B(obj){
    showStr(obj);
    $('#GF1103_46_A').val(getNumToString(getStrFloat($('#GF1103_46_B').val())+getStrFloat($('#GF1103_46_E').val()),2));
    FGF1103_46_A($('#GF1103_46_A'));
    $('#GF1103_46_B').val(getNumToString(getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_46_D').val()),2));
}

/*GF1103_46_C*/
function FGF1103_46_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_46_B').val(getNumToString(getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_46_D').val()),2));
    FGF1103_46_B($('#GF1103_46_B'));
}

/*GF1103_46_D*/
function FGF1103_46_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_46_B').val(getNumToString(getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_46_D').val()),2));
    FGF1103_46_B($('#GF1103_46_B'));
}

/*GF1103_46_E*/
function FGF1103_46_E(obj){
    showStr(obj);
    $('#GF1103_46_A').val(getNumToString(getStrFloat($('#GF1103_46_B').val())+getStrFloat($('#GF1103_46_E').val()),2));
    FGF1103_46_A($('#GF1103_46_A'));
    $('#GF1103_46_E').val(getNumToString(getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_46_H').val()),2));
}

/*GF1103_46_F*/
function FGF1103_46_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_46_E').val(getNumToString(getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_46_H').val()),2));
    FGF1103_46_E($('#GF1103_46_E'));
}

/*GF1103_46_G*/
function FGF1103_46_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_46_E').val(getNumToString(getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_46_H').val()),2));
    FGF1103_46_E($('#GF1103_46_E'));
}

/*GF1103_46_H*/
function FGF1103_46_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_46_E').val(getNumToString(getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_46_H').val()),2));
    FGF1103_46_E($('#GF1103_46_E'));
}

/*GF1103_47_A*/
function FGF1103_47_A(obj){
    showStr(obj);
    $('#GF1103_47_A').val(getNumToString(getStrFloat($('#GF1103_47_B').val())+getStrFloat($('#GF1103_47_E').val()),2));
}

/*GF1103_47_B*/
function FGF1103_47_B(obj){
    showStr(obj);
    $('#GF1103_47_A').val(getNumToString(getStrFloat($('#GF1103_47_B').val())+getStrFloat($('#GF1103_47_E').val()),2));
    FGF1103_47_A($('#GF1103_47_A'));
    $('#GF1103_47_B').val(getNumToString(getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_47_D').val()),2));
}

/*GF1103_47_C*/
function FGF1103_47_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_47_B').val(getNumToString(getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_47_D').val()),2));
    FGF1103_47_B($('#GF1103_47_B'));
}

/*GF1103_47_D*/
function FGF1103_47_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_47_B').val(getNumToString(getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_47_D').val()),2));
    FGF1103_47_B($('#GF1103_47_B'));
}

/*GF1103_47_E*/
function FGF1103_47_E(obj){
    showStr(obj);
    $('#GF1103_47_A').val(getNumToString(getStrFloat($('#GF1103_47_B').val())+getStrFloat($('#GF1103_47_E').val()),2));
    FGF1103_47_A($('#GF1103_47_A'));
    $('#GF1103_47_E').val(getNumToString(getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_47_H').val()),2));
}

/*GF1103_47_F*/
function FGF1103_47_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_47_E').val(getNumToString(getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_47_H').val()),2));
    FGF1103_47_E($('#GF1103_47_E'));
}

/*GF1103_47_G*/
function FGF1103_47_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_47_E').val(getNumToString(getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_47_H').val()),2));
    FGF1103_47_E($('#GF1103_47_E'));
}

/*GF1103_47_H*/
function FGF1103_47_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_47_E').val(getNumToString(getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_47_H').val()),2));
    FGF1103_47_E($('#GF1103_47_E'));
}

/*GF1103_48_A*/
function FGF1103_48_A(obj){
    showStr(obj);
    $('#GF1103_48_A').val(getNumToString(getStrFloat($('#GF1103_48_B').val())+getStrFloat($('#GF1103_48_E').val()),2));
}

/*GF1103_48_B*/
function FGF1103_48_B(obj){
    showStr(obj);
    $('#GF1103_48_A').val(getNumToString(getStrFloat($('#GF1103_48_B').val())+getStrFloat($('#GF1103_48_E').val()),2));
    FGF1103_48_A($('#GF1103_48_A'));
    $('#GF1103_48_B').val(getNumToString(getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_48_D').val()),2));
}

/*GF1103_48_C*/
function FGF1103_48_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_48_B').val(getNumToString(getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_48_D').val()),2));
    FGF1103_48_B($('#GF1103_48_B'));
}

/*GF1103_48_D*/
function FGF1103_48_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_48_B').val(getNumToString(getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_48_D').val()),2));
    FGF1103_48_B($('#GF1103_48_B'));
}

/*GF1103_48_E*/
function FGF1103_48_E(obj){
    showStr(obj);
    $('#GF1103_48_A').val(getNumToString(getStrFloat($('#GF1103_48_B').val())+getStrFloat($('#GF1103_48_E').val()),2));
    FGF1103_48_A($('#GF1103_48_A'));
    $('#GF1103_48_E').val(getNumToString(getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_48_H').val()),2));
}

/*GF1103_48_F*/
function FGF1103_48_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_48_E').val(getNumToString(getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_48_H').val()),2));
    FGF1103_48_E($('#GF1103_48_E'));
}

/*GF1103_48_G*/
function FGF1103_48_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_48_E').val(getNumToString(getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_48_H').val()),2));
    FGF1103_48_E($('#GF1103_48_E'));
}

/*GF1103_48_H*/
function FGF1103_48_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_48_E').val(getNumToString(getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_48_H').val()),2));
    FGF1103_48_E($('#GF1103_48_E'));
}

/*GF1103_49_A*/
function FGF1103_49_A(obj){
    showStr(obj);
    $('#GF1103_49_A').val(getNumToString(getStrFloat($('#GF1103_49_B').val())+getStrFloat($('#GF1103_49_E').val()),2));
}

/*GF1103_49_B*/
function FGF1103_49_B(obj){
    showStr(obj);
    $('#GF1103_49_A').val(getNumToString(getStrFloat($('#GF1103_49_B').val())+getStrFloat($('#GF1103_49_E').val()),2));
    FGF1103_49_A($('#GF1103_49_A'));
    $('#GF1103_49_B').val(getNumToString(getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_49_D').val()),2));
}

/*GF1103_49_C*/
function FGF1103_49_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_49_B').val(getNumToString(getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_49_D').val()),2));
    FGF1103_49_B($('#GF1103_49_B'));
}

/*GF1103_49_D*/
function FGF1103_49_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_49_B').val(getNumToString(getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_49_D').val()),2));
    FGF1103_49_B($('#GF1103_49_B'));
}

/*GF1103_49_E*/
function FGF1103_49_E(obj){
    showStr(obj);
    $('#GF1103_49_A').val(getNumToString(getStrFloat($('#GF1103_49_B').val())+getStrFloat($('#GF1103_49_E').val()),2));
    FGF1103_49_A($('#GF1103_49_A'));
    $('#GF1103_49_E').val(getNumToString(getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_49_H').val()),2));
}

/*GF1103_49_F*/
function FGF1103_49_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_49_E').val(getNumToString(getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_49_H').val()),2));
    FGF1103_49_E($('#GF1103_49_E'));
}

/*GF1103_49_G*/
function FGF1103_49_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_49_E').val(getNumToString(getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_49_H').val()),2));
    FGF1103_49_E($('#GF1103_49_E'));
}

/*GF1103_49_H*/
function FGF1103_49_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_49_E').val(getNumToString(getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_49_H').val()),2));
    FGF1103_49_E($('#GF1103_49_E'));
}

/*GF1103_50_A*/
function FGF1103_50_A(obj){
    showStr(obj);
    $('#GF1103_50_A').val(getNumToString(getStrFloat($('#GF1103_50_B').val())+getStrFloat($('#GF1103_50_E').val()),2));
}

/*GF1103_50_B*/
function FGF1103_50_B(obj){
    showStr(obj);
    $('#GF1103_50_A').val(getNumToString(getStrFloat($('#GF1103_50_B').val())+getStrFloat($('#GF1103_50_E').val()),2));
    FGF1103_50_A($('#GF1103_50_A'));
    $('#GF1103_50_B').val(getNumToString(getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_50_D').val()),2));
}

/*GF1103_50_C*/
function FGF1103_50_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_50_B').val(getNumToString(getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_50_D').val()),2));
    FGF1103_50_B($('#GF1103_50_B'));
}

/*GF1103_50_D*/
function FGF1103_50_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_50_B').val(getNumToString(getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_50_D').val()),2));
    FGF1103_50_B($('#GF1103_50_B'));
}

/*GF1103_50_E*/
function FGF1103_50_E(obj){
    showStr(obj);
    $('#GF1103_50_A').val(getNumToString(getStrFloat($('#GF1103_50_B').val())+getStrFloat($('#GF1103_50_E').val()),2));
    FGF1103_50_A($('#GF1103_50_A'));
    $('#GF1103_50_E').val(getNumToString(getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_50_H').val()),2));
}

/*GF1103_50_F*/
function FGF1103_50_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_50_E').val(getNumToString(getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_50_H').val()),2));
    FGF1103_50_E($('#GF1103_50_E'));
}

/*GF1103_50_G*/
function FGF1103_50_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_50_E').val(getNumToString(getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_50_H').val()),2));
    FGF1103_50_E($('#GF1103_50_E'));
}

/*GF1103_50_H*/
function FGF1103_50_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_50_E').val(getNumToString(getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_50_H').val()),2));
    FGF1103_50_E($('#GF1103_50_E'));
}

/*GF1103_51_A*/
function FGF1103_51_A(obj){
    showStr(obj);
    $('#GF1103_51_A').val(getNumToString(getStrFloat($('#GF1103_51_B').val())+getStrFloat($('#GF1103_51_E').val()),2));
}

/*GF1103_51_B*/
function FGF1103_51_B(obj){
    showStr(obj);
    $('#GF1103_51_A').val(getNumToString(getStrFloat($('#GF1103_51_B').val())+getStrFloat($('#GF1103_51_E').val()),2));
    FGF1103_51_A($('#GF1103_51_A'));
    $('#GF1103_51_B').val(getNumToString(getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_51_D').val()),2));
}

/*GF1103_51_C*/
function FGF1103_51_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_51_B').val(getNumToString(getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_51_D').val()),2));
    FGF1103_51_B($('#GF1103_51_B'));
}

/*GF1103_51_D*/
function FGF1103_51_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_51_B').val(getNumToString(getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_51_D').val()),2));
    FGF1103_51_B($('#GF1103_51_B'));
}

/*GF1103_51_E*/
function FGF1103_51_E(obj){
    showStr(obj);
    $('#GF1103_51_A').val(getNumToString(getStrFloat($('#GF1103_51_B').val())+getStrFloat($('#GF1103_51_E').val()),2));
    FGF1103_51_A($('#GF1103_51_A'));
    $('#GF1103_51_E').val(getNumToString(getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_51_H').val()),2));
}

/*GF1103_51_F*/
function FGF1103_51_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_51_E').val(getNumToString(getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_51_H').val()),2));
    FGF1103_51_E($('#GF1103_51_E'));
}

/*GF1103_51_G*/
function FGF1103_51_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_51_E').val(getNumToString(getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_51_H').val()),2));
    FGF1103_51_E($('#GF1103_51_E'));
}

/*GF1103_51_H*/
function FGF1103_51_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_51_E').val(getNumToString(getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_51_H').val()),2));
    FGF1103_51_E($('#GF1103_51_E'));
}

/*GF1103_52_A*/
function FGF1103_52_A(obj){
    showStr(obj);
    $('#GF1103_52_A').val(getNumToString(getStrFloat($('#GF1103_52_B').val())+getStrFloat($('#GF1103_52_E').val()),2));
}

/*GF1103_52_B*/
function FGF1103_52_B(obj){
    showStr(obj);
    $('#GF1103_52_A').val(getNumToString(getStrFloat($('#GF1103_52_B').val())+getStrFloat($('#GF1103_52_E').val()),2));
    FGF1103_52_A($('#GF1103_52_A'));
    $('#GF1103_52_B').val(getNumToString(getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_52_D').val()),2));
}

/*GF1103_52_C*/
function FGF1103_52_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_52_B').val(getNumToString(getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_52_D').val()),2));
    FGF1103_52_B($('#GF1103_52_B'));
}

/*GF1103_52_D*/
function FGF1103_52_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_52_B').val(getNumToString(getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_52_D').val()),2));
    FGF1103_52_B($('#GF1103_52_B'));
}

/*GF1103_52_E*/
function FGF1103_52_E(obj){
    showStr(obj);
    $('#GF1103_52_A').val(getNumToString(getStrFloat($('#GF1103_52_B').val())+getStrFloat($('#GF1103_52_E').val()),2));
    FGF1103_52_A($('#GF1103_52_A'));
    $('#GF1103_52_E').val(getNumToString(getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_52_H').val()),2));
}

/*GF1103_52_F*/
function FGF1103_52_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_52_E').val(getNumToString(getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_52_H').val()),2));
    FGF1103_52_E($('#GF1103_52_E'));
}

/*GF1103_52_G*/
function FGF1103_52_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_52_E').val(getNumToString(getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_52_H').val()),2));
    FGF1103_52_E($('#GF1103_52_E'));
}

/*GF1103_52_H*/
function FGF1103_52_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_52_E').val(getNumToString(getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_52_H').val()),2));
    FGF1103_52_E($('#GF1103_52_E'));
}

/*GF1103_53_A*/
function FGF1103_53_A(obj){
    showStr(obj);
    $('#GF1103_53_A').val(getNumToString(getStrFloat($('#GF1103_53_B').val())+getStrFloat($('#GF1103_53_E').val()),2));
}

/*GF1103_53_B*/
function FGF1103_53_B(obj){
    showStr(obj);
    $('#GF1103_53_A').val(getNumToString(getStrFloat($('#GF1103_53_B').val())+getStrFloat($('#GF1103_53_E').val()),2));
    FGF1103_53_A($('#GF1103_53_A'));
    $('#GF1103_53_B').val(getNumToString(getStrFloat($('#GF1103_53_C').val())+getStrFloat($('#GF1103_53_D').val()),2));
}

/*GF1103_53_C*/
function FGF1103_53_C(obj){
    showStr(obj);
    $('#GF1103_22_C').val(getNumToString(getStrFloat($('#GF1103_23_C').val())+getStrFloat($('#GF1103_24_C').val())+getStrFloat($('#GF1103_25_C').val())+getStrFloat($('#GF1103_26_C').val())+getStrFloat($('#GF1103_27_C').val())+getStrFloat($('#GF1103_28_C').val())+getStrFloat($('#GF1103_29_C').val())+getStrFloat($('#GF1103_30_C').val())+getStrFloat($('#GF1103_31_C').val())+getStrFloat($('#GF1103_32_C').val())+getStrFloat($('#GF1103_33_C').val())+getStrFloat($('#GF1103_34_C').val())+getStrFloat($('#GF1103_35_C').val())+getStrFloat($('#GF1103_36_C').val())+getStrFloat($('#GF1103_37_C').val())+getStrFloat($('#GF1103_38_C').val())+getStrFloat($('#GF1103_39_C').val())+getStrFloat($('#GF1103_40_C').val())+getStrFloat($('#GF1103_41_C').val())+getStrFloat($('#GF1103_42_C').val())+getStrFloat($('#GF1103_43_C').val())+getStrFloat($('#GF1103_44_C').val())+getStrFloat($('#GF1103_45_C').val())+getStrFloat($('#GF1103_46_C').val())+getStrFloat($('#GF1103_47_C').val())+getStrFloat($('#GF1103_48_C').val())+getStrFloat($('#GF1103_49_C').val())+getStrFloat($('#GF1103_50_C').val())+getStrFloat($('#GF1103_51_C').val())+getStrFloat($('#GF1103_52_C').val())+getStrFloat($('#GF1103_53_C').val()),2));
    FGF1103_22_C($('#GF1103_22_C'));
    $('#GF1103_53_B').val(getNumToString(getStrFloat($('#GF1103_53_C').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_53_B($('#GF1103_53_B'));
}

/*GF1103_53_D*/
function FGF1103_53_D(obj){
    showStr(obj);
    $('#GF1103_22_D').val(getNumToString(getStrFloat($('#GF1103_23_D').val())+getStrFloat($('#GF1103_24_D').val())+getStrFloat($('#GF1103_25_D').val())+getStrFloat($('#GF1103_26_D').val())+getStrFloat($('#GF1103_27_D').val())+getStrFloat($('#GF1103_28_D').val())+getStrFloat($('#GF1103_29_D').val())+getStrFloat($('#GF1103_30_D').val())+getStrFloat($('#GF1103_31_D').val())+getStrFloat($('#GF1103_32_D').val())+getStrFloat($('#GF1103_33_D').val())+getStrFloat($('#GF1103_34_D').val())+getStrFloat($('#GF1103_35_D').val())+getStrFloat($('#GF1103_36_D').val())+getStrFloat($('#GF1103_37_D').val())+getStrFloat($('#GF1103_38_D').val())+getStrFloat($('#GF1103_39_D').val())+getStrFloat($('#GF1103_40_D').val())+getStrFloat($('#GF1103_41_D').val())+getStrFloat($('#GF1103_42_D').val())+getStrFloat($('#GF1103_43_D').val())+getStrFloat($('#GF1103_44_D').val())+getStrFloat($('#GF1103_45_D').val())+getStrFloat($('#GF1103_46_D').val())+getStrFloat($('#GF1103_47_D').val())+getStrFloat($('#GF1103_48_D').val())+getStrFloat($('#GF1103_49_D').val())+getStrFloat($('#GF1103_50_D').val())+getStrFloat($('#GF1103_51_D').val())+getStrFloat($('#GF1103_52_D').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_22_D($('#GF1103_22_D'));
    $('#GF1103_53_B').val(getNumToString(getStrFloat($('#GF1103_53_C').val())+getStrFloat($('#GF1103_53_D').val()),2));
    FGF1103_53_B($('#GF1103_53_B'));
}

/*GF1103_53_E*/
function FGF1103_53_E(obj){
    showStr(obj);
    $('#GF1103_53_A').val(getNumToString(getStrFloat($('#GF1103_53_B').val())+getStrFloat($('#GF1103_53_E').val()),2));
    FGF1103_53_A($('#GF1103_53_A'));
    $('#GF1103_53_E').val(getNumToString(getStrFloat($('#GF1103_53_F').val())+getStrFloat($('#GF1103_53_G').val())+getStrFloat($('#GF1103_53_H').val()),2));
}

/*GF1103_53_F*/
function FGF1103_53_F(obj){
    showStr(obj);
    $('#GF1103_22_F').val(getNumToString(getStrFloat($('#GF1103_23_F').val())+getStrFloat($('#GF1103_24_F').val())+getStrFloat($('#GF1103_25_F').val())+getStrFloat($('#GF1103_26_F').val())+getStrFloat($('#GF1103_27_F').val())+getStrFloat($('#GF1103_28_F').val())+getStrFloat($('#GF1103_29_F').val())+getStrFloat($('#GF1103_30_F').val())+getStrFloat($('#GF1103_31_F').val())+getStrFloat($('#GF1103_32_F').val())+getStrFloat($('#GF1103_33_F').val())+getStrFloat($('#GF1103_34_F').val())+getStrFloat($('#GF1103_35_F').val())+getStrFloat($('#GF1103_36_F').val())+getStrFloat($('#GF1103_37_F').val())+getStrFloat($('#GF1103_38_F').val())+getStrFloat($('#GF1103_39_F').val())+getStrFloat($('#GF1103_40_F').val())+getStrFloat($('#GF1103_41_F').val())+getStrFloat($('#GF1103_42_F').val())+getStrFloat($('#GF1103_43_F').val())+getStrFloat($('#GF1103_44_F').val())+getStrFloat($('#GF1103_45_F').val())+getStrFloat($('#GF1103_46_F').val())+getStrFloat($('#GF1103_47_F').val())+getStrFloat($('#GF1103_48_F').val())+getStrFloat($('#GF1103_49_F').val())+getStrFloat($('#GF1103_50_F').val())+getStrFloat($('#GF1103_51_F').val())+getStrFloat($('#GF1103_52_F').val())+getStrFloat($('#GF1103_53_F').val()),2));
    FGF1103_22_F($('#GF1103_22_F'));
    $('#GF1103_53_E').val(getNumToString(getStrFloat($('#GF1103_53_F').val())+getStrFloat($('#GF1103_53_G').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_53_E($('#GF1103_53_E'));
}

/*GF1103_53_G*/
function FGF1103_53_G(obj){
    showStr(obj);
    $('#GF1103_22_G').val(getNumToString(getStrFloat($('#GF1103_23_G').val())+getStrFloat($('#GF1103_24_G').val())+getStrFloat($('#GF1103_25_G').val())+getStrFloat($('#GF1103_26_G').val())+getStrFloat($('#GF1103_27_G').val())+getStrFloat($('#GF1103_28_G').val())+getStrFloat($('#GF1103_29_G').val())+getStrFloat($('#GF1103_30_G').val())+getStrFloat($('#GF1103_31_G').val())+getStrFloat($('#GF1103_32_G').val())+getStrFloat($('#GF1103_33_G').val())+getStrFloat($('#GF1103_34_G').val())+getStrFloat($('#GF1103_35_G').val())+getStrFloat($('#GF1103_36_G').val())+getStrFloat($('#GF1103_37_G').val())+getStrFloat($('#GF1103_38_G').val())+getStrFloat($('#GF1103_39_G').val())+getStrFloat($('#GF1103_40_G').val())+getStrFloat($('#GF1103_41_G').val())+getStrFloat($('#GF1103_42_G').val())+getStrFloat($('#GF1103_43_G').val())+getStrFloat($('#GF1103_44_G').val())+getStrFloat($('#GF1103_45_G').val())+getStrFloat($('#GF1103_46_G').val())+getStrFloat($('#GF1103_47_G').val())+getStrFloat($('#GF1103_48_G').val())+getStrFloat($('#GF1103_49_G').val())+getStrFloat($('#GF1103_50_G').val())+getStrFloat($('#GF1103_51_G').val())+getStrFloat($('#GF1103_52_G').val())+getStrFloat($('#GF1103_53_G').val()),2));
    FGF1103_22_G($('#GF1103_22_G'));
    $('#GF1103_53_E').val(getNumToString(getStrFloat($('#GF1103_53_F').val())+getStrFloat($('#GF1103_53_G').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_53_E($('#GF1103_53_E'));
}

/*GF1103_53_H*/
function FGF1103_53_H(obj){
    showStr(obj);
    $('#GF1103_22_H').val(getNumToString(getStrFloat($('#GF1103_23_H').val())+getStrFloat($('#GF1103_24_H').val())+getStrFloat($('#GF1103_25_H').val())+getStrFloat($('#GF1103_26_H').val())+getStrFloat($('#GF1103_27_H').val())+getStrFloat($('#GF1103_28_H').val())+getStrFloat($('#GF1103_29_H').val())+getStrFloat($('#GF1103_30_H').val())+getStrFloat($('#GF1103_31_H').val())+getStrFloat($('#GF1103_32_H').val())+getStrFloat($('#GF1103_33_H').val())+getStrFloat($('#GF1103_34_H').val())+getStrFloat($('#GF1103_35_H').val())+getStrFloat($('#GF1103_36_H').val())+getStrFloat($('#GF1103_37_H').val())+getStrFloat($('#GF1103_38_H').val())+getStrFloat($('#GF1103_39_H').val())+getStrFloat($('#GF1103_40_H').val())+getStrFloat($('#GF1103_41_H').val())+getStrFloat($('#GF1103_42_H').val())+getStrFloat($('#GF1103_43_H').val())+getStrFloat($('#GF1103_44_H').val())+getStrFloat($('#GF1103_45_H').val())+getStrFloat($('#GF1103_46_H').val())+getStrFloat($('#GF1103_47_H').val())+getStrFloat($('#GF1103_48_H').val())+getStrFloat($('#GF1103_49_H').val())+getStrFloat($('#GF1103_50_H').val())+getStrFloat($('#GF1103_51_H').val())+getStrFloat($('#GF1103_52_H').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_22_H($('#GF1103_22_H'));
    $('#GF1103_53_E').val(getNumToString(getStrFloat($('#GF1103_53_F').val())+getStrFloat($('#GF1103_53_G').val())+getStrFloat($('#GF1103_53_H').val()),2));
    FGF1103_53_E($('#GF1103_53_E'));
}

/*GF1103_54_A*/
function FGF1103_54_A(obj){
    showStr(obj);
    $('#GF1103_54_A').val(getNumToString(getStrFloat($('#GF1103_54_B').val())+getStrFloat($('#GF1103_54_E').val()),2));
}

/*GF1103_54_B*/
function FGF1103_54_B(obj){
    showStr(obj);
    $('#GF1103_54_A').val(getNumToString(getStrFloat($('#GF1103_54_B').val())+getStrFloat($('#GF1103_54_E').val()),2));
    FGF1103_54_A($('#GF1103_54_A'));
    $('#GF1103_54_B').val(getNumToString(getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_54_D').val()),2));
}

/*GF1103_54_C*/
function FGF1103_54_C(obj){
    showStr(obj);
    $('#GF1103_54_B').val(getNumToString(getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_54_D').val()),2));
    FGF1103_54_B($('#GF1103_54_B'));
    $('#GF1103_54_C').val(getNumToString(getStrFloat($('#GF1103_55_C').val())+getStrFloat($('#GF1103_56_C').val())+getStrFloat($('#GF1103_57_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_54_D*/
function FGF1103_54_D(obj){
    showStr(obj);
    $('#GF1103_54_B').val(getNumToString(getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_54_D').val()),2));
    FGF1103_54_B($('#GF1103_54_B'));
    $('#GF1103_54_D').val(getNumToString(getStrFloat($('#GF1103_55_D').val())+getStrFloat($('#GF1103_56_D').val())+getStrFloat($('#GF1103_57_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_54_E*/
function FGF1103_54_E(obj){
    showStr(obj);
    $('#GF1103_54_A').val(getNumToString(getStrFloat($('#GF1103_54_B').val())+getStrFloat($('#GF1103_54_E').val()),2));
    FGF1103_54_A($('#GF1103_54_A'));
    $('#GF1103_54_E').val(getNumToString(getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_54_H').val()),2));
}

/*GF1103_54_F*/
function FGF1103_54_F(obj){
    showStr(obj);
    $('#GF1103_54_E').val(getNumToString(getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_54_H').val()),2));
    FGF1103_54_E($('#GF1103_54_E'));
    $('#GF1103_54_F').val(getNumToString(getStrFloat($('#GF1103_55_F').val())+getStrFloat($('#GF1103_56_F').val())+getStrFloat($('#GF1103_57_F').val()),2));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
}

/*GF1103_54_G*/
function FGF1103_54_G(obj){
    showStr(obj);
    $('#GF1103_54_E').val(getNumToString(getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_54_H').val()),2));
    FGF1103_54_E($('#GF1103_54_E'));
    $('#GF1103_54_G').val(getNumToString(getStrFloat($('#GF1103_55_G').val())+getStrFloat($('#GF1103_56_G').val())+getStrFloat($('#GF1103_57_G').val()),2));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_54_H*/
function FGF1103_54_H(obj){
    showStr(obj);
    $('#GF1103_54_E').val(getNumToString(getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_54_H').val()),2));
    FGF1103_54_E($('#GF1103_54_E'));
    $('#GF1103_54_H').val(getNumToString(getStrFloat($('#GF1103_55_H').val())+getStrFloat($('#GF1103_56_H').val())+getStrFloat($('#GF1103_57_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_55_A*/
function FGF1103_55_A(obj){
    showStr(obj);
    $('#GF1103_55_A').val(getNumToString(getStrFloat($('#GF1103_55_B').val())+getStrFloat($('#GF1103_55_E').val()),2));
}

/*GF1103_55_B*/
function FGF1103_55_B(obj){
    showStr(obj);
    $('#GF1103_55_A').val(getNumToString(getStrFloat($('#GF1103_55_B').val())+getStrFloat($('#GF1103_55_E').val()),2));
    FGF1103_55_A($('#GF1103_55_A'));
    $('#GF1103_55_B').val(getNumToString(getStrFloat($('#GF1103_55_C').val())+getStrFloat($('#GF1103_55_D').val()),2));
}

/*GF1103_55_C*/
function FGF1103_55_C(obj){
    showStr(obj);
    $('#GF1103_54_C').val(getNumToString(getStrFloat($('#GF1103_55_C').val())+getStrFloat($('#GF1103_56_C').val())+getStrFloat($('#GF1103_57_C').val()),2));
    FGF1103_54_C($('#GF1103_54_C'));
    $('#GF1103_55_B').val(getNumToString(getStrFloat($('#GF1103_55_C').val())+getStrFloat($('#GF1103_55_D').val()),2));
    FGF1103_55_B($('#GF1103_55_B'));
}

/*GF1103_55_D*/
function FGF1103_55_D(obj){
    showStr(obj);
    $('#GF1103_54_D').val(getNumToString(getStrFloat($('#GF1103_55_D').val())+getStrFloat($('#GF1103_56_D').val())+getStrFloat($('#GF1103_57_D').val()),2));
    FGF1103_54_D($('#GF1103_54_D'));
    $('#GF1103_55_B').val(getNumToString(getStrFloat($('#GF1103_55_C').val())+getStrFloat($('#GF1103_55_D').val()),2));
    FGF1103_55_B($('#GF1103_55_B'));
}

/*GF1103_55_E*/
function FGF1103_55_E(obj){
    showStr(obj);
    $('#GF1103_55_A').val(getNumToString(getStrFloat($('#GF1103_55_B').val())+getStrFloat($('#GF1103_55_E').val()),2));
    FGF1103_55_A($('#GF1103_55_A'));
    $('#GF1103_55_E').val(getNumToString(getStrFloat($('#GF1103_55_F').val())+getStrFloat($('#GF1103_55_G').val())+getStrFloat($('#GF1103_55_H').val()),2));
}

/*GF1103_55_F*/
function FGF1103_55_F(obj){
    showStr(obj);
    $('#GF1103_54_F').val(getNumToString(getStrFloat($('#GF1103_55_F').val())+getStrFloat($('#GF1103_56_F').val())+getStrFloat($('#GF1103_57_F').val()),2));
    FGF1103_54_F($('#GF1103_54_F'));
    $('#GF1103_55_E').val(getNumToString(getStrFloat($('#GF1103_55_F').val())+getStrFloat($('#GF1103_55_G').val())+getStrFloat($('#GF1103_55_H').val()),2));
    FGF1103_55_E($('#GF1103_55_E'));
}

/*GF1103_55_G*/
function FGF1103_55_G(obj){
    showStr(obj);
    $('#GF1103_54_G').val(getNumToString(getStrFloat($('#GF1103_55_G').val())+getStrFloat($('#GF1103_56_G').val())+getStrFloat($('#GF1103_57_G').val()),2));
    FGF1103_54_G($('#GF1103_54_G'));
    $('#GF1103_55_E').val(getNumToString(getStrFloat($('#GF1103_55_F').val())+getStrFloat($('#GF1103_55_G').val())+getStrFloat($('#GF1103_55_H').val()),2));
    FGF1103_55_E($('#GF1103_55_E'));
}

/*GF1103_55_H*/
function FGF1103_55_H(obj){
    showStr(obj);
    $('#GF1103_54_H').val(getNumToString(getStrFloat($('#GF1103_55_H').val())+getStrFloat($('#GF1103_56_H').val())+getStrFloat($('#GF1103_57_H').val()),2));
    FGF1103_54_H($('#GF1103_54_H'));
    $('#GF1103_55_E').val(getNumToString(getStrFloat($('#GF1103_55_F').val())+getStrFloat($('#GF1103_55_G').val())+getStrFloat($('#GF1103_55_H').val()),2));
    FGF1103_55_E($('#GF1103_55_E'));
}

/*GF1103_56_A*/
function FGF1103_56_A(obj){
    showStr(obj);
    $('#GF1103_56_A').val(getNumToString(getStrFloat($('#GF1103_56_B').val())+getStrFloat($('#GF1103_56_E').val()),2));
}

/*GF1103_56_B*/
function FGF1103_56_B(obj){
    showStr(obj);
    $('#GF1103_56_A').val(getNumToString(getStrFloat($('#GF1103_56_B').val())+getStrFloat($('#GF1103_56_E').val()),2));
    FGF1103_56_A($('#GF1103_56_A'));
    $('#GF1103_56_B').val(getNumToString(getStrFloat($('#GF1103_56_C').val())+getStrFloat($('#GF1103_56_D').val()),2));
}

/*GF1103_56_C*/
function FGF1103_56_C(obj){
    showStr(obj);
    $('#GF1103_54_C').val(getNumToString(getStrFloat($('#GF1103_55_C').val())+getStrFloat($('#GF1103_56_C').val())+getStrFloat($('#GF1103_57_C').val()),2));
    FGF1103_54_C($('#GF1103_54_C'));
    $('#GF1103_56_B').val(getNumToString(getStrFloat($('#GF1103_56_C').val())+getStrFloat($('#GF1103_56_D').val()),2));
    FGF1103_56_B($('#GF1103_56_B'));
}

/*GF1103_56_D*/
function FGF1103_56_D(obj){
    showStr(obj);
    $('#GF1103_54_D').val(getNumToString(getStrFloat($('#GF1103_55_D').val())+getStrFloat($('#GF1103_56_D').val())+getStrFloat($('#GF1103_57_D').val()),2));
    FGF1103_54_D($('#GF1103_54_D'));
    $('#GF1103_56_B').val(getNumToString(getStrFloat($('#GF1103_56_C').val())+getStrFloat($('#GF1103_56_D').val()),2));
    FGF1103_56_B($('#GF1103_56_B'));
}

/*GF1103_56_E*/
function FGF1103_56_E(obj){
    showStr(obj);
    $('#GF1103_56_A').val(getNumToString(getStrFloat($('#GF1103_56_B').val())+getStrFloat($('#GF1103_56_E').val()),2));
    FGF1103_56_A($('#GF1103_56_A'));
    $('#GF1103_56_E').val(getNumToString(getStrFloat($('#GF1103_56_F').val())+getStrFloat($('#GF1103_56_G').val())+getStrFloat($('#GF1103_56_H').val()),2));
}

/*GF1103_56_F*/
function FGF1103_56_F(obj){
    showStr(obj);
    $('#GF1103_54_F').val(getNumToString(getStrFloat($('#GF1103_55_F').val())+getStrFloat($('#GF1103_56_F').val())+getStrFloat($('#GF1103_57_F').val()),2));
    FGF1103_54_F($('#GF1103_54_F'));
    $('#GF1103_56_E').val(getNumToString(getStrFloat($('#GF1103_56_F').val())+getStrFloat($('#GF1103_56_G').val())+getStrFloat($('#GF1103_56_H').val()),2));
    FGF1103_56_E($('#GF1103_56_E'));
}

/*GF1103_56_G*/
function FGF1103_56_G(obj){
    showStr(obj);
    $('#GF1103_54_G').val(getNumToString(getStrFloat($('#GF1103_55_G').val())+getStrFloat($('#GF1103_56_G').val())+getStrFloat($('#GF1103_57_G').val()),2));
    FGF1103_54_G($('#GF1103_54_G'));
    $('#GF1103_56_E').val(getNumToString(getStrFloat($('#GF1103_56_F').val())+getStrFloat($('#GF1103_56_G').val())+getStrFloat($('#GF1103_56_H').val()),2));
    FGF1103_56_E($('#GF1103_56_E'));
}

/*GF1103_56_H*/
function FGF1103_56_H(obj){
    showStr(obj);
    $('#GF1103_54_H').val(getNumToString(getStrFloat($('#GF1103_55_H').val())+getStrFloat($('#GF1103_56_H').val())+getStrFloat($('#GF1103_57_H').val()),2));
    FGF1103_54_H($('#GF1103_54_H'));
    $('#GF1103_56_E').val(getNumToString(getStrFloat($('#GF1103_56_F').val())+getStrFloat($('#GF1103_56_G').val())+getStrFloat($('#GF1103_56_H').val()),2));
    FGF1103_56_E($('#GF1103_56_E'));
}

/*GF1103_57_A*/
function FGF1103_57_A(obj){
    showStr(obj);
    $('#GF1103_57_A').val(getNumToString(getStrFloat($('#GF1103_57_B').val())+getStrFloat($('#GF1103_57_E').val()),2));
}

/*GF1103_57_B*/
function FGF1103_57_B(obj){
    showStr(obj);
    $('#GF1103_57_A').val(getNumToString(getStrFloat($('#GF1103_57_B').val())+getStrFloat($('#GF1103_57_E').val()),2));
    FGF1103_57_A($('#GF1103_57_A'));
    $('#GF1103_57_B').val(getNumToString(getStrFloat($('#GF1103_57_C').val())+getStrFloat($('#GF1103_57_D').val()),2));
}

/*GF1103_57_C*/
function FGF1103_57_C(obj){
    showStr(obj);
    $('#GF1103_54_C').val(getNumToString(getStrFloat($('#GF1103_55_C').val())+getStrFloat($('#GF1103_56_C').val())+getStrFloat($('#GF1103_57_C').val()),2));
    FGF1103_54_C($('#GF1103_54_C'));
    $('#GF1103_57_B').val(getNumToString(getStrFloat($('#GF1103_57_C').val())+getStrFloat($('#GF1103_57_D').val()),2));
    FGF1103_57_B($('#GF1103_57_B'));
}

/*GF1103_57_D*/
function FGF1103_57_D(obj){
    showStr(obj);
    $('#GF1103_54_D').val(getNumToString(getStrFloat($('#GF1103_55_D').val())+getStrFloat($('#GF1103_56_D').val())+getStrFloat($('#GF1103_57_D').val()),2));
    FGF1103_54_D($('#GF1103_54_D'));
    $('#GF1103_57_B').val(getNumToString(getStrFloat($('#GF1103_57_C').val())+getStrFloat($('#GF1103_57_D').val()),2));
    FGF1103_57_B($('#GF1103_57_B'));
}

/*GF1103_57_E*/
function FGF1103_57_E(obj){
    showStr(obj);
    $('#GF1103_57_A').val(getNumToString(getStrFloat($('#GF1103_57_B').val())+getStrFloat($('#GF1103_57_E').val()),2));
    FGF1103_57_A($('#GF1103_57_A'));
    $('#GF1103_57_E').val(getNumToString(getStrFloat($('#GF1103_57_F').val())+getStrFloat($('#GF1103_57_G').val())+getStrFloat($('#GF1103_57_H').val()),2));
}

/*GF1103_57_F*/
function FGF1103_57_F(obj){
    showStr(obj);
    $('#GF1103_54_F').val(getNumToString(getStrFloat($('#GF1103_55_F').val())+getStrFloat($('#GF1103_56_F').val())+getStrFloat($('#GF1103_57_F').val()),2));
    FGF1103_54_F($('#GF1103_54_F'));
    $('#GF1103_57_E').val(getNumToString(getStrFloat($('#GF1103_57_F').val())+getStrFloat($('#GF1103_57_G').val())+getStrFloat($('#GF1103_57_H').val()),2));
    FGF1103_57_E($('#GF1103_57_E'));
}

/*GF1103_57_G*/
function FGF1103_57_G(obj){
    showStr(obj);
    $('#GF1103_54_G').val(getNumToString(getStrFloat($('#GF1103_55_G').val())+getStrFloat($('#GF1103_56_G').val())+getStrFloat($('#GF1103_57_G').val()),2));
    FGF1103_54_G($('#GF1103_54_G'));
    $('#GF1103_57_E').val(getNumToString(getStrFloat($('#GF1103_57_F').val())+getStrFloat($('#GF1103_57_G').val())+getStrFloat($('#GF1103_57_H').val()),2));
    FGF1103_57_E($('#GF1103_57_E'));
}

/*GF1103_57_H*/
function FGF1103_57_H(obj){
    showStr(obj);
    $('#GF1103_54_H').val(getNumToString(getStrFloat($('#GF1103_55_H').val())+getStrFloat($('#GF1103_56_H').val())+getStrFloat($('#GF1103_57_H').val()),2));
    FGF1103_54_H($('#GF1103_54_H'));
    $('#GF1103_57_E').val(getNumToString(getStrFloat($('#GF1103_57_F').val())+getStrFloat($('#GF1103_57_G').val())+getStrFloat($('#GF1103_57_H').val()),2));
    FGF1103_57_E($('#GF1103_57_E'));
}

/*GF1103_58_A*/
function FGF1103_58_A(obj){
    showStr(obj);
    $('#GF1103_58_A').val(getNumToString(getStrFloat($('#GF1103_58_B').val())+getStrFloat($('#GF1103_58_E').val()),2));
}

/*GF1103_58_B*/
function FGF1103_58_B(obj){
    showStr(obj);
    $('#GF1103_58_A').val(getNumToString(getStrFloat($('#GF1103_58_B').val())+getStrFloat($('#GF1103_58_E').val()),2));
    FGF1103_58_A($('#GF1103_58_A'));
    $('#GF1103_58_B').val(getNumToString(getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_58_D').val()),2));
}

/*GF1103_58_C*/
function FGF1103_58_C(obj){
    showStr(obj);
    $('#GF1103_58_B').val(getNumToString(getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_58_D').val()),2));
    FGF1103_58_B($('#GF1103_58_B'));
    $('#GF1103_58_C').val(getNumToString(getStrFloat($('#GF1103_59_C').val())+getStrFloat($('#GF1103_60_C').val())+getStrFloat($('#GF1103_61_C').val())+getStrFloat($('#GF1103_62_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_58_D*/
function FGF1103_58_D(obj){
    showStr(obj);
    $('#GF1103_58_B').val(getNumToString(getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_58_D').val()),2));
    FGF1103_58_B($('#GF1103_58_B'));
    $('#GF1103_58_D').val(getNumToString(getStrFloat($('#GF1103_59_D').val())+getStrFloat($('#GF1103_60_D').val())+getStrFloat($('#GF1103_61_D').val())+getStrFloat($('#GF1103_62_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_58_E*/
function FGF1103_58_E(obj){
    showStr(obj);
    $('#GF1103_58_A').val(getNumToString(getStrFloat($('#GF1103_58_B').val())+getStrFloat($('#GF1103_58_E').val()),2));
    FGF1103_58_A($('#GF1103_58_A'));
    $('#GF1103_58_E').val(getNumToString(getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_58_H').val()),2));
}

/*GF1103_58_F*/
function FGF1103_58_F(obj){
    showStr(obj);
    $('#GF1103_58_E').val(getNumToString(getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_58_H').val()),2));
    FGF1103_58_E($('#GF1103_58_E'));
    $('#GF1103_58_F').val(getNumToString(getStrFloat($('#GF1103_59_F').val())+getStrFloat($('#GF1103_60_F').val())+getStrFloat($('#GF1103_61_F').val())+getStrFloat($('#GF1103_62_F').val()),2));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
}

/*GF1103_58_G*/
function FGF1103_58_G(obj){
    showStr(obj);
    $('#GF1103_58_E').val(getNumToString(getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_58_H').val()),2));
    FGF1103_58_E($('#GF1103_58_E'));
    $('#GF1103_58_G').val(getNumToString(getStrFloat($('#GF1103_59_G').val())+getStrFloat($('#GF1103_60_G').val())+getStrFloat($('#GF1103_61_G').val())+getStrFloat($('#GF1103_62_G').val()),2));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_58_H*/
function FGF1103_58_H(obj){
    showStr(obj);
    $('#GF1103_58_E').val(getNumToString(getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_58_H').val()),2));
    FGF1103_58_E($('#GF1103_58_E'));
    $('#GF1103_58_H').val(getNumToString(getStrFloat($('#GF1103_59_H').val())+getStrFloat($('#GF1103_60_H').val())+getStrFloat($('#GF1103_61_H').val())+getStrFloat($('#GF1103_62_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_59_A*/
function FGF1103_59_A(obj){
    showStr(obj);
    $('#GF1103_59_A').val(getNumToString(getStrFloat($('#GF1103_59_B').val())+getStrFloat($('#GF1103_59_E').val()),2));
}

/*GF1103_59_B*/
function FGF1103_59_B(obj){
    showStr(obj);
    $('#GF1103_59_A').val(getNumToString(getStrFloat($('#GF1103_59_B').val())+getStrFloat($('#GF1103_59_E').val()),2));
    FGF1103_59_A($('#GF1103_59_A'));
    $('#GF1103_59_B').val(getNumToString(getStrFloat($('#GF1103_59_C').val())+getStrFloat($('#GF1103_59_D').val()),2));
}

/*GF1103_59_C*/
function FGF1103_59_C(obj){
    showStr(obj);
    $('#GF1103_58_C').val(getNumToString(getStrFloat($('#GF1103_59_C').val())+getStrFloat($('#GF1103_60_C').val())+getStrFloat($('#GF1103_61_C').val())+getStrFloat($('#GF1103_62_C').val()),2));
    FGF1103_58_C($('#GF1103_58_C'));
    $('#GF1103_59_B').val(getNumToString(getStrFloat($('#GF1103_59_C').val())+getStrFloat($('#GF1103_59_D').val()),2));
    FGF1103_59_B($('#GF1103_59_B'));
}

/*GF1103_59_D*/
function FGF1103_59_D(obj){
    showStr(obj);
    $('#GF1103_58_D').val(getNumToString(getStrFloat($('#GF1103_59_D').val())+getStrFloat($('#GF1103_60_D').val())+getStrFloat($('#GF1103_61_D').val())+getStrFloat($('#GF1103_62_D').val()),2));
    FGF1103_58_D($('#GF1103_58_D'));
    $('#GF1103_59_B').val(getNumToString(getStrFloat($('#GF1103_59_C').val())+getStrFloat($('#GF1103_59_D').val()),2));
    FGF1103_59_B($('#GF1103_59_B'));
}

/*GF1103_59_E*/
function FGF1103_59_E(obj){
    showStr(obj);
    $('#GF1103_59_A').val(getNumToString(getStrFloat($('#GF1103_59_B').val())+getStrFloat($('#GF1103_59_E').val()),2));
    FGF1103_59_A($('#GF1103_59_A'));
    $('#GF1103_59_E').val(getNumToString(getStrFloat($('#GF1103_59_F').val())+getStrFloat($('#GF1103_59_G').val())+getStrFloat($('#GF1103_59_H').val()),2));
}

/*GF1103_59_F*/
function FGF1103_59_F(obj){
    showStr(obj);
    $('#GF1103_58_F').val(getNumToString(getStrFloat($('#GF1103_59_F').val())+getStrFloat($('#GF1103_60_F').val())+getStrFloat($('#GF1103_61_F').val())+getStrFloat($('#GF1103_62_F').val()),2));
    FGF1103_58_F($('#GF1103_58_F'));
    $('#GF1103_59_E').val(getNumToString(getStrFloat($('#GF1103_59_F').val())+getStrFloat($('#GF1103_59_G').val())+getStrFloat($('#GF1103_59_H').val()),2));
    FGF1103_59_E($('#GF1103_59_E'));
}

/*GF1103_59_G*/
function FGF1103_59_G(obj){
    showStr(obj);
    $('#GF1103_58_G').val(getNumToString(getStrFloat($('#GF1103_59_G').val())+getStrFloat($('#GF1103_60_G').val())+getStrFloat($('#GF1103_61_G').val())+getStrFloat($('#GF1103_62_G').val()),2));
    FGF1103_58_G($('#GF1103_58_G'));
    $('#GF1103_59_E').val(getNumToString(getStrFloat($('#GF1103_59_F').val())+getStrFloat($('#GF1103_59_G').val())+getStrFloat($('#GF1103_59_H').val()),2));
    FGF1103_59_E($('#GF1103_59_E'));
}

/*GF1103_59_H*/
function FGF1103_59_H(obj){
    showStr(obj);
    $('#GF1103_58_H').val(getNumToString(getStrFloat($('#GF1103_59_H').val())+getStrFloat($('#GF1103_60_H').val())+getStrFloat($('#GF1103_61_H').val())+getStrFloat($('#GF1103_62_H').val()),2));
    FGF1103_58_H($('#GF1103_58_H'));
    $('#GF1103_59_E').val(getNumToString(getStrFloat($('#GF1103_59_F').val())+getStrFloat($('#GF1103_59_G').val())+getStrFloat($('#GF1103_59_H').val()),2));
    FGF1103_59_E($('#GF1103_59_E'));
}

/*GF1103_60_A*/
function FGF1103_60_A(obj){
    showStr(obj);
    $('#GF1103_60_A').val(getNumToString(getStrFloat($('#GF1103_60_B').val())+getStrFloat($('#GF1103_60_E').val()),2));
}

/*GF1103_60_B*/
function FGF1103_60_B(obj){
    showStr(obj);
    $('#GF1103_60_A').val(getNumToString(getStrFloat($('#GF1103_60_B').val())+getStrFloat($('#GF1103_60_E').val()),2));
    FGF1103_60_A($('#GF1103_60_A'));
    $('#GF1103_60_B').val(getNumToString(getStrFloat($('#GF1103_60_C').val())+getStrFloat($('#GF1103_60_D').val()),2));
}

/*GF1103_60_C*/
function FGF1103_60_C(obj){
    showStr(obj);
    $('#GF1103_58_C').val(getNumToString(getStrFloat($('#GF1103_59_C').val())+getStrFloat($('#GF1103_60_C').val())+getStrFloat($('#GF1103_61_C').val())+getStrFloat($('#GF1103_62_C').val()),2));
    FGF1103_58_C($('#GF1103_58_C'));
    $('#GF1103_60_B').val(getNumToString(getStrFloat($('#GF1103_60_C').val())+getStrFloat($('#GF1103_60_D').val()),2));
    FGF1103_60_B($('#GF1103_60_B'));
}

/*GF1103_60_D*/
function FGF1103_60_D(obj){
    showStr(obj);
    $('#GF1103_58_D').val(getNumToString(getStrFloat($('#GF1103_59_D').val())+getStrFloat($('#GF1103_60_D').val())+getStrFloat($('#GF1103_61_D').val())+getStrFloat($('#GF1103_62_D').val()),2));
    FGF1103_58_D($('#GF1103_58_D'));
    $('#GF1103_60_B').val(getNumToString(getStrFloat($('#GF1103_60_C').val())+getStrFloat($('#GF1103_60_D').val()),2));
    FGF1103_60_B($('#GF1103_60_B'));
}

/*GF1103_60_E*/
function FGF1103_60_E(obj){
    showStr(obj);
    $('#GF1103_60_A').val(getNumToString(getStrFloat($('#GF1103_60_B').val())+getStrFloat($('#GF1103_60_E').val()),2));
    FGF1103_60_A($('#GF1103_60_A'));
    $('#GF1103_60_E').val(getNumToString(getStrFloat($('#GF1103_60_F').val())+getStrFloat($('#GF1103_60_G').val())+getStrFloat($('#GF1103_60_H').val()),2));
}

/*GF1103_60_F*/
function FGF1103_60_F(obj){
    showStr(obj);
    $('#GF1103_58_F').val(getNumToString(getStrFloat($('#GF1103_59_F').val())+getStrFloat($('#GF1103_60_F').val())+getStrFloat($('#GF1103_61_F').val())+getStrFloat($('#GF1103_62_F').val()),2));
    FGF1103_58_F($('#GF1103_58_F'));
    $('#GF1103_60_E').val(getNumToString(getStrFloat($('#GF1103_60_F').val())+getStrFloat($('#GF1103_60_G').val())+getStrFloat($('#GF1103_60_H').val()),2));
    FGF1103_60_E($('#GF1103_60_E'));
}

/*GF1103_60_G*/
function FGF1103_60_G(obj){
    showStr(obj);
    $('#GF1103_58_G').val(getNumToString(getStrFloat($('#GF1103_59_G').val())+getStrFloat($('#GF1103_60_G').val())+getStrFloat($('#GF1103_61_G').val())+getStrFloat($('#GF1103_62_G').val()),2));
    FGF1103_58_G($('#GF1103_58_G'));
    $('#GF1103_60_E').val(getNumToString(getStrFloat($('#GF1103_60_F').val())+getStrFloat($('#GF1103_60_G').val())+getStrFloat($('#GF1103_60_H').val()),2));
    FGF1103_60_E($('#GF1103_60_E'));
}

/*GF1103_60_H*/
function FGF1103_60_H(obj){
    showStr(obj);
    $('#GF1103_58_H').val(getNumToString(getStrFloat($('#GF1103_59_H').val())+getStrFloat($('#GF1103_60_H').val())+getStrFloat($('#GF1103_61_H').val())+getStrFloat($('#GF1103_62_H').val()),2));
    FGF1103_58_H($('#GF1103_58_H'));
    $('#GF1103_60_E').val(getNumToString(getStrFloat($('#GF1103_60_F').val())+getStrFloat($('#GF1103_60_G').val())+getStrFloat($('#GF1103_60_H').val()),2));
    FGF1103_60_E($('#GF1103_60_E'));
}

/*GF1103_61_A*/
function FGF1103_61_A(obj){
    showStr(obj);
    $('#GF1103_61_A').val(getNumToString(getStrFloat($('#GF1103_61_B').val())+getStrFloat($('#GF1103_61_E').val()),2));
}

/*GF1103_61_B*/
function FGF1103_61_B(obj){
    showStr(obj);
    $('#GF1103_61_A').val(getNumToString(getStrFloat($('#GF1103_61_B').val())+getStrFloat($('#GF1103_61_E').val()),2));
    FGF1103_61_A($('#GF1103_61_A'));
    $('#GF1103_61_B').val(getNumToString(getStrFloat($('#GF1103_61_C').val())+getStrFloat($('#GF1103_61_D').val()),2));
}

/*GF1103_61_C*/
function FGF1103_61_C(obj){
    showStr(obj);
    $('#GF1103_58_C').val(getNumToString(getStrFloat($('#GF1103_59_C').val())+getStrFloat($('#GF1103_60_C').val())+getStrFloat($('#GF1103_61_C').val())+getStrFloat($('#GF1103_62_C').val()),2));
    FGF1103_58_C($('#GF1103_58_C'));
    $('#GF1103_61_B').val(getNumToString(getStrFloat($('#GF1103_61_C').val())+getStrFloat($('#GF1103_61_D').val()),2));
    FGF1103_61_B($('#GF1103_61_B'));
}

/*GF1103_61_D*/
function FGF1103_61_D(obj){
    showStr(obj);
    $('#GF1103_58_D').val(getNumToString(getStrFloat($('#GF1103_59_D').val())+getStrFloat($('#GF1103_60_D').val())+getStrFloat($('#GF1103_61_D').val())+getStrFloat($('#GF1103_62_D').val()),2));
    FGF1103_58_D($('#GF1103_58_D'));
    $('#GF1103_61_B').val(getNumToString(getStrFloat($('#GF1103_61_C').val())+getStrFloat($('#GF1103_61_D').val()),2));
    FGF1103_61_B($('#GF1103_61_B'));
}

/*GF1103_61_E*/
function FGF1103_61_E(obj){
    showStr(obj);
    $('#GF1103_61_A').val(getNumToString(getStrFloat($('#GF1103_61_B').val())+getStrFloat($('#GF1103_61_E').val()),2));
    FGF1103_61_A($('#GF1103_61_A'));
    $('#GF1103_61_E').val(getNumToString(getStrFloat($('#GF1103_61_F').val())+getStrFloat($('#GF1103_61_G').val())+getStrFloat($('#GF1103_61_H').val()),2));
}

/*GF1103_61_F*/
function FGF1103_61_F(obj){
    showStr(obj);
    $('#GF1103_58_F').val(getNumToString(getStrFloat($('#GF1103_59_F').val())+getStrFloat($('#GF1103_60_F').val())+getStrFloat($('#GF1103_61_F').val())+getStrFloat($('#GF1103_62_F').val()),2));
    FGF1103_58_F($('#GF1103_58_F'));
    $('#GF1103_61_E').val(getNumToString(getStrFloat($('#GF1103_61_F').val())+getStrFloat($('#GF1103_61_G').val())+getStrFloat($('#GF1103_61_H').val()),2));
    FGF1103_61_E($('#GF1103_61_E'));
}

/*GF1103_61_G*/
function FGF1103_61_G(obj){
    showStr(obj);
    $('#GF1103_58_G').val(getNumToString(getStrFloat($('#GF1103_59_G').val())+getStrFloat($('#GF1103_60_G').val())+getStrFloat($('#GF1103_61_G').val())+getStrFloat($('#GF1103_62_G').val()),2));
    FGF1103_58_G($('#GF1103_58_G'));
    $('#GF1103_61_E').val(getNumToString(getStrFloat($('#GF1103_61_F').val())+getStrFloat($('#GF1103_61_G').val())+getStrFloat($('#GF1103_61_H').val()),2));
    FGF1103_61_E($('#GF1103_61_E'));
}

/*GF1103_61_H*/
function FGF1103_61_H(obj){
    showStr(obj);
    $('#GF1103_58_H').val(getNumToString(getStrFloat($('#GF1103_59_H').val())+getStrFloat($('#GF1103_60_H').val())+getStrFloat($('#GF1103_61_H').val())+getStrFloat($('#GF1103_62_H').val()),2));
    FGF1103_58_H($('#GF1103_58_H'));
    $('#GF1103_61_E').val(getNumToString(getStrFloat($('#GF1103_61_F').val())+getStrFloat($('#GF1103_61_G').val())+getStrFloat($('#GF1103_61_H').val()),2));
    FGF1103_61_E($('#GF1103_61_E'));
}

/*GF1103_62_A*/
function FGF1103_62_A(obj){
    showStr(obj);
    $('#GF1103_62_A').val(getNumToString(getStrFloat($('#GF1103_62_B').val())+getStrFloat($('#GF1103_62_E').val()),2));
}

/*GF1103_62_B*/
function FGF1103_62_B(obj){
    showStr(obj);
    $('#GF1103_62_A').val(getNumToString(getStrFloat($('#GF1103_62_B').val())+getStrFloat($('#GF1103_62_E').val()),2));
    FGF1103_62_A($('#GF1103_62_A'));
    $('#GF1103_62_B').val(getNumToString(getStrFloat($('#GF1103_62_C').val())+getStrFloat($('#GF1103_62_D').val()),2));
}

/*GF1103_62_C*/
function FGF1103_62_C(obj){
    showStr(obj);
    $('#GF1103_58_C').val(getNumToString(getStrFloat($('#GF1103_59_C').val())+getStrFloat($('#GF1103_60_C').val())+getStrFloat($('#GF1103_61_C').val())+getStrFloat($('#GF1103_62_C').val()),2));
    FGF1103_58_C($('#GF1103_58_C'));
    $('#GF1103_62_B').val(getNumToString(getStrFloat($('#GF1103_62_C').val())+getStrFloat($('#GF1103_62_D').val()),2));
    FGF1103_62_B($('#GF1103_62_B'));
}

/*GF1103_62_D*/
function FGF1103_62_D(obj){
    showStr(obj);
    $('#GF1103_58_D').val(getNumToString(getStrFloat($('#GF1103_59_D').val())+getStrFloat($('#GF1103_60_D').val())+getStrFloat($('#GF1103_61_D').val())+getStrFloat($('#GF1103_62_D').val()),2));
    FGF1103_58_D($('#GF1103_58_D'));
    $('#GF1103_62_B').val(getNumToString(getStrFloat($('#GF1103_62_C').val())+getStrFloat($('#GF1103_62_D').val()),2));
    FGF1103_62_B($('#GF1103_62_B'));
}

/*GF1103_62_E*/
function FGF1103_62_E(obj){
    showStr(obj);
    $('#GF1103_62_A').val(getNumToString(getStrFloat($('#GF1103_62_B').val())+getStrFloat($('#GF1103_62_E').val()),2));
    FGF1103_62_A($('#GF1103_62_A'));
    $('#GF1103_62_E').val(getNumToString(getStrFloat($('#GF1103_62_F').val())+getStrFloat($('#GF1103_62_G').val())+getStrFloat($('#GF1103_62_H').val()),2));
}

/*GF1103_62_F*/
function FGF1103_62_F(obj){
    showStr(obj);
    $('#GF1103_58_F').val(getNumToString(getStrFloat($('#GF1103_59_F').val())+getStrFloat($('#GF1103_60_F').val())+getStrFloat($('#GF1103_61_F').val())+getStrFloat($('#GF1103_62_F').val()),2));
    FGF1103_58_F($('#GF1103_58_F'));
    $('#GF1103_62_E').val(getNumToString(getStrFloat($('#GF1103_62_F').val())+getStrFloat($('#GF1103_62_G').val())+getStrFloat($('#GF1103_62_H').val()),2));
    FGF1103_62_E($('#GF1103_62_E'));
}

/*GF1103_62_G*/
function FGF1103_62_G(obj){
    showStr(obj);
    $('#GF1103_58_G').val(getNumToString(getStrFloat($('#GF1103_59_G').val())+getStrFloat($('#GF1103_60_G').val())+getStrFloat($('#GF1103_61_G').val())+getStrFloat($('#GF1103_62_G').val()),2));
    FGF1103_58_G($('#GF1103_58_G'));
    $('#GF1103_62_E').val(getNumToString(getStrFloat($('#GF1103_62_F').val())+getStrFloat($('#GF1103_62_G').val())+getStrFloat($('#GF1103_62_H').val()),2));
    FGF1103_62_E($('#GF1103_62_E'));
}

/*GF1103_62_H*/
function FGF1103_62_H(obj){
    showStr(obj);
    $('#GF1103_58_H').val(getNumToString(getStrFloat($('#GF1103_59_H').val())+getStrFloat($('#GF1103_60_H').val())+getStrFloat($('#GF1103_61_H').val())+getStrFloat($('#GF1103_62_H').val()),2));
    FGF1103_58_H($('#GF1103_58_H'));
    $('#GF1103_62_E').val(getNumToString(getStrFloat($('#GF1103_62_F').val())+getStrFloat($('#GF1103_62_G').val())+getStrFloat($('#GF1103_62_H').val()),2));
    FGF1103_62_E($('#GF1103_62_E'));
}

/*GF1103_63_A*/
function FGF1103_63_A(obj){
    showStr(obj);
    $('#GF1103_63_A').val(getNumToString(getStrFloat($('#GF1103_63_B').val())+getStrFloat($('#GF1103_63_E').val()),2));
}

/*GF1103_63_B*/
function FGF1103_63_B(obj){
    showStr(obj);
    $('#GF1103_63_A').val(getNumToString(getStrFloat($('#GF1103_63_B').val())+getStrFloat($('#GF1103_63_E').val()),2));
    FGF1103_63_A($('#GF1103_63_A'));
    $('#GF1103_63_B').val(getNumToString(getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_63_D').val()),2));
}

/*GF1103_63_C*/
function FGF1103_63_C(obj){
    showStr(obj);
    $('#GF1103_63_B').val(getNumToString(getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_63_D').val()),2));
    FGF1103_63_B($('#GF1103_63_B'));
    $('#GF1103_63_C').val(getNumToString(getStrFloat($('#GF1103_64_C').val())+getStrFloat($('#GF1103_65_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_63_D*/
function FGF1103_63_D(obj){
    showStr(obj);
    $('#GF1103_63_B').val(getNumToString(getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_63_D').val()),2));
    FGF1103_63_B($('#GF1103_63_B'));
    $('#GF1103_63_D').val(getNumToString(getStrFloat($('#GF1103_64_D').val())+getStrFloat($('#GF1103_65_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_63_E*/
function FGF1103_63_E(obj){
    showStr(obj);
    $('#GF1103_63_A').val(getNumToString(getStrFloat($('#GF1103_63_B').val())+getStrFloat($('#GF1103_63_E').val()),2));
    FGF1103_63_A($('#GF1103_63_A'));
    $('#GF1103_63_E').val(getNumToString(getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_63_H').val()),2));
}

/*GF1103_63_F*/
function FGF1103_63_F(obj){
    showStr(obj);
    $('#GF1103_63_E').val(getNumToString(getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_63_H').val()),2));
    FGF1103_63_E($('#GF1103_63_E'));
    $('#GF1103_63_F').val(getNumToString(getStrFloat($('#GF1103_64_F').val())+getStrFloat($('#GF1103_65_F').val()),2));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
}

/*GF1103_63_G*/
function FGF1103_63_G(obj){
    showStr(obj);
    $('#GF1103_63_E').val(getNumToString(getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_63_H').val()),2));
    FGF1103_63_E($('#GF1103_63_E'));
    $('#GF1103_63_G').val(getNumToString(getStrFloat($('#GF1103_64_G').val())+getStrFloat($('#GF1103_65_G').val()),2));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_63_H*/
function FGF1103_63_H(obj){
    showStr(obj);
    $('#GF1103_63_E').val(getNumToString(getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_63_H').val()),2));
    FGF1103_63_E($('#GF1103_63_E'));
    $('#GF1103_63_H').val(getNumToString(getStrFloat($('#GF1103_64_H').val())+getStrFloat($('#GF1103_65_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_64_A*/
function FGF1103_64_A(obj){
    showStr(obj);
    $('#GF1103_64_A').val(getNumToString(getStrFloat($('#GF1103_64_B').val())+getStrFloat($('#GF1103_64_E').val()),2));
}

/*GF1103_64_B*/
function FGF1103_64_B(obj){
    showStr(obj);
    $('#GF1103_64_A').val(getNumToString(getStrFloat($('#GF1103_64_B').val())+getStrFloat($('#GF1103_64_E').val()),2));
    FGF1103_64_A($('#GF1103_64_A'));
    $('#GF1103_64_B').val(getNumToString(getStrFloat($('#GF1103_64_C').val())+getStrFloat($('#GF1103_64_D').val()),2));
}

/*GF1103_64_C*/
function FGF1103_64_C(obj){
    showStr(obj);
    $('#GF1103_63_C').val(getNumToString(getStrFloat($('#GF1103_64_C').val())+getStrFloat($('#GF1103_65_C').val()),2));
    FGF1103_63_C($('#GF1103_63_C'));
    $('#GF1103_64_B').val(getNumToString(getStrFloat($('#GF1103_64_C').val())+getStrFloat($('#GF1103_64_D').val()),2));
    FGF1103_64_B($('#GF1103_64_B'));
}

/*GF1103_64_D*/
function FGF1103_64_D(obj){
    showStr(obj);
    $('#GF1103_63_D').val(getNumToString(getStrFloat($('#GF1103_64_D').val())+getStrFloat($('#GF1103_65_D').val()),2));
    FGF1103_63_D($('#GF1103_63_D'));
    $('#GF1103_64_B').val(getNumToString(getStrFloat($('#GF1103_64_C').val())+getStrFloat($('#GF1103_64_D').val()),2));
    FGF1103_64_B($('#GF1103_64_B'));
}

/*GF1103_64_E*/
function FGF1103_64_E(obj){
    showStr(obj);
    $('#GF1103_64_A').val(getNumToString(getStrFloat($('#GF1103_64_B').val())+getStrFloat($('#GF1103_64_E').val()),2));
    FGF1103_64_A($('#GF1103_64_A'));
    $('#GF1103_64_E').val(getNumToString(getStrFloat($('#GF1103_64_F').val())+getStrFloat($('#GF1103_64_G').val())+getStrFloat($('#GF1103_64_H').val()),2));
}

/*GF1103_64_F*/
function FGF1103_64_F(obj){
    showStr(obj);
    $('#GF1103_63_F').val(getNumToString(getStrFloat($('#GF1103_64_F').val())+getStrFloat($('#GF1103_65_F').val()),2));
    FGF1103_63_F($('#GF1103_63_F'));
    $('#GF1103_64_E').val(getNumToString(getStrFloat($('#GF1103_64_F').val())+getStrFloat($('#GF1103_64_G').val())+getStrFloat($('#GF1103_64_H').val()),2));
    FGF1103_64_E($('#GF1103_64_E'));
}

/*GF1103_64_G*/
function FGF1103_64_G(obj){
    showStr(obj);
    $('#GF1103_63_G').val(getNumToString(getStrFloat($('#GF1103_64_G').val())+getStrFloat($('#GF1103_65_G').val()),2));
    FGF1103_63_G($('#GF1103_63_G'));
    $('#GF1103_64_E').val(getNumToString(getStrFloat($('#GF1103_64_F').val())+getStrFloat($('#GF1103_64_G').val())+getStrFloat($('#GF1103_64_H').val()),2));
    FGF1103_64_E($('#GF1103_64_E'));
}

/*GF1103_64_H*/
function FGF1103_64_H(obj){
    showStr(obj);
    $('#GF1103_63_H').val(getNumToString(getStrFloat($('#GF1103_64_H').val())+getStrFloat($('#GF1103_65_H').val()),2));
    FGF1103_63_H($('#GF1103_63_H'));
    $('#GF1103_64_E').val(getNumToString(getStrFloat($('#GF1103_64_F').val())+getStrFloat($('#GF1103_64_G').val())+getStrFloat($('#GF1103_64_H').val()),2));
    FGF1103_64_E($('#GF1103_64_E'));
}

/*GF1103_65_A*/
function FGF1103_65_A(obj){
    showStr(obj);
    $('#GF1103_65_A').val(getNumToString(getStrFloat($('#GF1103_65_B').val())+getStrFloat($('#GF1103_65_E').val()),2));
}

/*GF1103_65_B*/
function FGF1103_65_B(obj){
    showStr(obj);
    $('#GF1103_65_A').val(getNumToString(getStrFloat($('#GF1103_65_B').val())+getStrFloat($('#GF1103_65_E').val()),2));
    FGF1103_65_A($('#GF1103_65_A'));
    $('#GF1103_65_B').val(getNumToString(getStrFloat($('#GF1103_65_C').val())+getStrFloat($('#GF1103_65_D').val()),2));
}

/*GF1103_65_C*/
function FGF1103_65_C(obj){
    showStr(obj);
    $('#GF1103_63_C').val(getNumToString(getStrFloat($('#GF1103_64_C').val())+getStrFloat($('#GF1103_65_C').val()),2));
    FGF1103_63_C($('#GF1103_63_C'));
    $('#GF1103_65_B').val(getNumToString(getStrFloat($('#GF1103_65_C').val())+getStrFloat($('#GF1103_65_D').val()),2));
    FGF1103_65_B($('#GF1103_65_B'));
}

/*GF1103_65_D*/
function FGF1103_65_D(obj){
    showStr(obj);
    $('#GF1103_63_D').val(getNumToString(getStrFloat($('#GF1103_64_D').val())+getStrFloat($('#GF1103_65_D').val()),2));
    FGF1103_63_D($('#GF1103_63_D'));
    $('#GF1103_65_B').val(getNumToString(getStrFloat($('#GF1103_65_C').val())+getStrFloat($('#GF1103_65_D').val()),2));
    FGF1103_65_B($('#GF1103_65_B'));
}

/*GF1103_65_E*/
function FGF1103_65_E(obj){
    showStr(obj);
    $('#GF1103_65_A').val(getNumToString(getStrFloat($('#GF1103_65_B').val())+getStrFloat($('#GF1103_65_E').val()),2));
    FGF1103_65_A($('#GF1103_65_A'));
    $('#GF1103_65_E').val(getNumToString(getStrFloat($('#GF1103_65_F').val())+getStrFloat($('#GF1103_65_G').val())+getStrFloat($('#GF1103_65_H').val()),2));
}

/*GF1103_65_F*/
function FGF1103_65_F(obj){
    showStr(obj);
    $('#GF1103_63_F').val(getNumToString(getStrFloat($('#GF1103_64_F').val())+getStrFloat($('#GF1103_65_F').val()),2));
    FGF1103_63_F($('#GF1103_63_F'));
    $('#GF1103_65_E').val(getNumToString(getStrFloat($('#GF1103_65_F').val())+getStrFloat($('#GF1103_65_G').val())+getStrFloat($('#GF1103_65_H').val()),2));
    FGF1103_65_E($('#GF1103_65_E'));
}

/*GF1103_65_G*/
function FGF1103_65_G(obj){
    showStr(obj);
    $('#GF1103_63_G').val(getNumToString(getStrFloat($('#GF1103_64_G').val())+getStrFloat($('#GF1103_65_G').val()),2));
    FGF1103_63_G($('#GF1103_63_G'));
    $('#GF1103_65_E').val(getNumToString(getStrFloat($('#GF1103_65_F').val())+getStrFloat($('#GF1103_65_G').val())+getStrFloat($('#GF1103_65_H').val()),2));
    FGF1103_65_E($('#GF1103_65_E'));
}

/*GF1103_65_H*/
function FGF1103_65_H(obj){
    showStr(obj);
    $('#GF1103_63_H').val(getNumToString(getStrFloat($('#GF1103_64_H').val())+getStrFloat($('#GF1103_65_H').val()),2));
    FGF1103_63_H($('#GF1103_63_H'));
    $('#GF1103_65_E').val(getNumToString(getStrFloat($('#GF1103_65_F').val())+getStrFloat($('#GF1103_65_G').val())+getStrFloat($('#GF1103_65_H').val()),2));
    FGF1103_65_E($('#GF1103_65_E'));
}

/*GF1103_66_A*/
function FGF1103_66_A(obj){
    showStr(obj);
    $('#GF1103_66_A').val(getNumToString(getStrFloat($('#GF1103_66_B').val())+getStrFloat($('#GF1103_66_E').val()),2));
}

/*GF1103_66_B*/
function FGF1103_66_B(obj){
    showStr(obj);
    $('#GF1103_66_A').val(getNumToString(getStrFloat($('#GF1103_66_B').val())+getStrFloat($('#GF1103_66_E').val()),2));
    FGF1103_66_A($('#GF1103_66_A'));
    $('#GF1103_66_B').val(getNumToString(getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_66_D').val()),2));
}

/*GF1103_66_C*/
function FGF1103_66_C(obj){
    showStr(obj);
    $('#GF1103_66_B').val(getNumToString(getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_66_D').val()),2));
    FGF1103_66_B($('#GF1103_66_B'));
    $('#GF1103_66_C').val(getNumToString(getStrFloat($('#GF1103_67_C').val())+getStrFloat($('#GF1103_68_C').val())+getStrFloat($('#GF1103_69_C').val())+getStrFloat($('#GF1103_70_C').val())+getStrFloat($('#GF1103_71_C').val())+getStrFloat($('#GF1103_72_C').val())+getStrFloat($('#GF1103_73_C').val())+getStrFloat($('#GF1103_74_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_66_D*/
function FGF1103_66_D(obj){
    showStr(obj);
    $('#GF1103_66_B').val(getNumToString(getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_66_D').val()),2));
    FGF1103_66_B($('#GF1103_66_B'));
    $('#GF1103_66_D').val(getNumToString(getStrFloat($('#GF1103_67_D').val())+getStrFloat($('#GF1103_68_D').val())+getStrFloat($('#GF1103_69_D').val())+getStrFloat($('#GF1103_70_D').val())+getStrFloat($('#GF1103_71_D').val())+getStrFloat($('#GF1103_72_D').val())+getStrFloat($('#GF1103_73_D').val())+getStrFloat($('#GF1103_74_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_66_E*/
function FGF1103_66_E(obj){
    showStr(obj);
    $('#GF1103_66_A').val(getNumToString(getStrFloat($('#GF1103_66_B').val())+getStrFloat($('#GF1103_66_E').val()),2));
    FGF1103_66_A($('#GF1103_66_A'));
    $('#GF1103_66_E').val(getNumToString(getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_66_H').val()),2));
}

/*GF1103_66_F*/
function FGF1103_66_F(obj){
    showStr(obj);
    $('#GF1103_66_E').val(getNumToString(getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_66_H').val()),2));
    FGF1103_66_E($('#GF1103_66_E'));
    $('#GF1103_66_F').val(getNumToString(getStrFloat($('#GF1103_67_F').val())+getStrFloat($('#GF1103_68_F').val())+getStrFloat($('#GF1103_69_F').val())+getStrFloat($('#GF1103_70_F').val())+getStrFloat($('#GF1103_71_F').val())+getStrFloat($('#GF1103_72_F').val())+getStrFloat($('#GF1103_73_F').val())+getStrFloat($('#GF1103_74_F').val()),2));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
}

/*GF1103_66_G*/
function FGF1103_66_G(obj){
    showStr(obj);
    $('#GF1103_66_E').val(getNumToString(getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_66_H').val()),2));
    FGF1103_66_E($('#GF1103_66_E'));
    $('#GF1103_66_G').val(getNumToString(getStrFloat($('#GF1103_67_G').val())+getStrFloat($('#GF1103_68_G').val())+getStrFloat($('#GF1103_69_G').val())+getStrFloat($('#GF1103_70_G').val())+getStrFloat($('#GF1103_71_G').val())+getStrFloat($('#GF1103_72_G').val())+getStrFloat($('#GF1103_73_G').val())+getStrFloat($('#GF1103_74_G').val()),2));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_66_H*/
function FGF1103_66_H(obj){
    showStr(obj);
    $('#GF1103_66_E').val(getNumToString(getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_66_H').val()),2));
    FGF1103_66_E($('#GF1103_66_E'));
    $('#GF1103_66_H').val(getNumToString(getStrFloat($('#GF1103_67_H').val())+getStrFloat($('#GF1103_68_H').val())+getStrFloat($('#GF1103_69_H').val())+getStrFloat($('#GF1103_70_H').val())+getStrFloat($('#GF1103_71_H').val())+getStrFloat($('#GF1103_72_H').val())+getStrFloat($('#GF1103_73_H').val())+getStrFloat($('#GF1103_74_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_67_A*/
function FGF1103_67_A(obj){
    showStr(obj);
    $('#GF1103_67_A').val(getNumToString(getStrFloat($('#GF1103_67_B').val())+getStrFloat($('#GF1103_67_E').val()),2));
}

/*GF1103_67_B*/
function FGF1103_67_B(obj){
    showStr(obj);
    $('#GF1103_67_A').val(getNumToString(getStrFloat($('#GF1103_67_B').val())+getStrFloat($('#GF1103_67_E').val()),2));
    FGF1103_67_A($('#GF1103_67_A'));
    $('#GF1103_67_B').val(getNumToString(getStrFloat($('#GF1103_67_C').val())+getStrFloat($('#GF1103_67_D').val()),2));
}

/*GF1103_67_C*/
function FGF1103_67_C(obj){
    showStr(obj);
    $('#GF1103_66_C').val(getNumToString(getStrFloat($('#GF1103_67_C').val())+getStrFloat($('#GF1103_68_C').val())+getStrFloat($('#GF1103_69_C').val())+getStrFloat($('#GF1103_70_C').val())+getStrFloat($('#GF1103_71_C').val())+getStrFloat($('#GF1103_72_C').val())+getStrFloat($('#GF1103_73_C').val())+getStrFloat($('#GF1103_74_C').val()),2));
    FGF1103_66_C($('#GF1103_66_C'));
    $('#GF1103_67_B').val(getNumToString(getStrFloat($('#GF1103_67_C').val())+getStrFloat($('#GF1103_67_D').val()),2));
    FGF1103_67_B($('#GF1103_67_B'));
}

/*GF1103_67_D*/
function FGF1103_67_D(obj){
    showStr(obj);
    $('#GF1103_66_D').val(getNumToString(getStrFloat($('#GF1103_67_D').val())+getStrFloat($('#GF1103_68_D').val())+getStrFloat($('#GF1103_69_D').val())+getStrFloat($('#GF1103_70_D').val())+getStrFloat($('#GF1103_71_D').val())+getStrFloat($('#GF1103_72_D').val())+getStrFloat($('#GF1103_73_D').val())+getStrFloat($('#GF1103_74_D').val()),2));
    FGF1103_66_D($('#GF1103_66_D'));
    $('#GF1103_67_B').val(getNumToString(getStrFloat($('#GF1103_67_C').val())+getStrFloat($('#GF1103_67_D').val()),2));
    FGF1103_67_B($('#GF1103_67_B'));
}

/*GF1103_67_E*/
function FGF1103_67_E(obj){
    showStr(obj);
    $('#GF1103_67_A').val(getNumToString(getStrFloat($('#GF1103_67_B').val())+getStrFloat($('#GF1103_67_E').val()),2));
    FGF1103_67_A($('#GF1103_67_A'));
    $('#GF1103_67_E').val(getNumToString(getStrFloat($('#GF1103_67_F').val())+getStrFloat($('#GF1103_67_G').val())+getStrFloat($('#GF1103_67_H').val()),2));
}

/*GF1103_67_F*/
function FGF1103_67_F(obj){
    showStr(obj);
    $('#GF1103_66_F').val(getNumToString(getStrFloat($('#GF1103_67_F').val())+getStrFloat($('#GF1103_68_F').val())+getStrFloat($('#GF1103_69_F').val())+getStrFloat($('#GF1103_70_F').val())+getStrFloat($('#GF1103_71_F').val())+getStrFloat($('#GF1103_72_F').val())+getStrFloat($('#GF1103_73_F').val())+getStrFloat($('#GF1103_74_F').val()),2));
    FGF1103_66_F($('#GF1103_66_F'));
    $('#GF1103_67_E').val(getNumToString(getStrFloat($('#GF1103_67_F').val())+getStrFloat($('#GF1103_67_G').val())+getStrFloat($('#GF1103_67_H').val()),2));
    FGF1103_67_E($('#GF1103_67_E'));
}

/*GF1103_67_G*/
function FGF1103_67_G(obj){
    showStr(obj);
    $('#GF1103_66_G').val(getNumToString(getStrFloat($('#GF1103_67_G').val())+getStrFloat($('#GF1103_68_G').val())+getStrFloat($('#GF1103_69_G').val())+getStrFloat($('#GF1103_70_G').val())+getStrFloat($('#GF1103_71_G').val())+getStrFloat($('#GF1103_72_G').val())+getStrFloat($('#GF1103_73_G').val())+getStrFloat($('#GF1103_74_G').val()),2));
    FGF1103_66_G($('#GF1103_66_G'));
    $('#GF1103_67_E').val(getNumToString(getStrFloat($('#GF1103_67_F').val())+getStrFloat($('#GF1103_67_G').val())+getStrFloat($('#GF1103_67_H').val()),2));
    FGF1103_67_E($('#GF1103_67_E'));
}

/*GF1103_67_H*/
function FGF1103_67_H(obj){
    showStr(obj);
    $('#GF1103_66_H').val(getNumToString(getStrFloat($('#GF1103_67_H').val())+getStrFloat($('#GF1103_68_H').val())+getStrFloat($('#GF1103_69_H').val())+getStrFloat($('#GF1103_70_H').val())+getStrFloat($('#GF1103_71_H').val())+getStrFloat($('#GF1103_72_H').val())+getStrFloat($('#GF1103_73_H').val())+getStrFloat($('#GF1103_74_H').val()),2));
    FGF1103_66_H($('#GF1103_66_H'));
    $('#GF1103_67_E').val(getNumToString(getStrFloat($('#GF1103_67_F').val())+getStrFloat($('#GF1103_67_G').val())+getStrFloat($('#GF1103_67_H').val()),2));
    FGF1103_67_E($('#GF1103_67_E'));
}

/*GF1103_68_A*/
function FGF1103_68_A(obj){
    showStr(obj);
    $('#GF1103_68_A').val(getNumToString(getStrFloat($('#GF1103_68_B').val())+getStrFloat($('#GF1103_68_E').val()),2));
}

/*GF1103_68_B*/
function FGF1103_68_B(obj){
    showStr(obj);
    $('#GF1103_68_A').val(getNumToString(getStrFloat($('#GF1103_68_B').val())+getStrFloat($('#GF1103_68_E').val()),2));
    FGF1103_68_A($('#GF1103_68_A'));
    $('#GF1103_68_B').val(getNumToString(getStrFloat($('#GF1103_68_C').val())+getStrFloat($('#GF1103_68_D').val()),2));
}

/*GF1103_68_C*/
function FGF1103_68_C(obj){
    showStr(obj);
    $('#GF1103_66_C').val(getNumToString(getStrFloat($('#GF1103_67_C').val())+getStrFloat($('#GF1103_68_C').val())+getStrFloat($('#GF1103_69_C').val())+getStrFloat($('#GF1103_70_C').val())+getStrFloat($('#GF1103_71_C').val())+getStrFloat($('#GF1103_72_C').val())+getStrFloat($('#GF1103_73_C').val())+getStrFloat($('#GF1103_74_C').val()),2));
    FGF1103_66_C($('#GF1103_66_C'));
    $('#GF1103_68_B').val(getNumToString(getStrFloat($('#GF1103_68_C').val())+getStrFloat($('#GF1103_68_D').val()),2));
    FGF1103_68_B($('#GF1103_68_B'));
}

/*GF1103_68_D*/
function FGF1103_68_D(obj){
    showStr(obj);
    $('#GF1103_66_D').val(getNumToString(getStrFloat($('#GF1103_67_D').val())+getStrFloat($('#GF1103_68_D').val())+getStrFloat($('#GF1103_69_D').val())+getStrFloat($('#GF1103_70_D').val())+getStrFloat($('#GF1103_71_D').val())+getStrFloat($('#GF1103_72_D').val())+getStrFloat($('#GF1103_73_D').val())+getStrFloat($('#GF1103_74_D').val()),2));
    FGF1103_66_D($('#GF1103_66_D'));
    $('#GF1103_68_B').val(getNumToString(getStrFloat($('#GF1103_68_C').val())+getStrFloat($('#GF1103_68_D').val()),2));
    FGF1103_68_B($('#GF1103_68_B'));
}

/*GF1103_68_E*/
function FGF1103_68_E(obj){
    showStr(obj);
    $('#GF1103_68_A').val(getNumToString(getStrFloat($('#GF1103_68_B').val())+getStrFloat($('#GF1103_68_E').val()),2));
    FGF1103_68_A($('#GF1103_68_A'));
    $('#GF1103_68_E').val(getNumToString(getStrFloat($('#GF1103_68_F').val())+getStrFloat($('#GF1103_68_G').val())+getStrFloat($('#GF1103_68_H').val()),2));
}

/*GF1103_68_F*/
function FGF1103_68_F(obj){
    showStr(obj);
    $('#GF1103_66_F').val(getNumToString(getStrFloat($('#GF1103_67_F').val())+getStrFloat($('#GF1103_68_F').val())+getStrFloat($('#GF1103_69_F').val())+getStrFloat($('#GF1103_70_F').val())+getStrFloat($('#GF1103_71_F').val())+getStrFloat($('#GF1103_72_F').val())+getStrFloat($('#GF1103_73_F').val())+getStrFloat($('#GF1103_74_F').val()),2));
    FGF1103_66_F($('#GF1103_66_F'));
    $('#GF1103_68_E').val(getNumToString(getStrFloat($('#GF1103_68_F').val())+getStrFloat($('#GF1103_68_G').val())+getStrFloat($('#GF1103_68_H').val()),2));
    FGF1103_68_E($('#GF1103_68_E'));
}

/*GF1103_68_G*/
function FGF1103_68_G(obj){
    showStr(obj);
    $('#GF1103_66_G').val(getNumToString(getStrFloat($('#GF1103_67_G').val())+getStrFloat($('#GF1103_68_G').val())+getStrFloat($('#GF1103_69_G').val())+getStrFloat($('#GF1103_70_G').val())+getStrFloat($('#GF1103_71_G').val())+getStrFloat($('#GF1103_72_G').val())+getStrFloat($('#GF1103_73_G').val())+getStrFloat($('#GF1103_74_G').val()),2));
    FGF1103_66_G($('#GF1103_66_G'));
    $('#GF1103_68_E').val(getNumToString(getStrFloat($('#GF1103_68_F').val())+getStrFloat($('#GF1103_68_G').val())+getStrFloat($('#GF1103_68_H').val()),2));
    FGF1103_68_E($('#GF1103_68_E'));
}

/*GF1103_68_H*/
function FGF1103_68_H(obj){
    showStr(obj);
    $('#GF1103_66_H').val(getNumToString(getStrFloat($('#GF1103_67_H').val())+getStrFloat($('#GF1103_68_H').val())+getStrFloat($('#GF1103_69_H').val())+getStrFloat($('#GF1103_70_H').val())+getStrFloat($('#GF1103_71_H').val())+getStrFloat($('#GF1103_72_H').val())+getStrFloat($('#GF1103_73_H').val())+getStrFloat($('#GF1103_74_H').val()),2));
    FGF1103_66_H($('#GF1103_66_H'));
    $('#GF1103_68_E').val(getNumToString(getStrFloat($('#GF1103_68_F').val())+getStrFloat($('#GF1103_68_G').val())+getStrFloat($('#GF1103_68_H').val()),2));
    FGF1103_68_E($('#GF1103_68_E'));
}

/*GF1103_69_A*/
function FGF1103_69_A(obj){
    showStr(obj);
    $('#GF1103_69_A').val(getNumToString(getStrFloat($('#GF1103_69_B').val())+getStrFloat($('#GF1103_69_E').val()),2));
}

/*GF1103_69_B*/
function FGF1103_69_B(obj){
    showStr(obj);
    $('#GF1103_69_A').val(getNumToString(getStrFloat($('#GF1103_69_B').val())+getStrFloat($('#GF1103_69_E').val()),2));
    FGF1103_69_A($('#GF1103_69_A'));
    $('#GF1103_69_B').val(getNumToString(getStrFloat($('#GF1103_69_C').val())+getStrFloat($('#GF1103_69_D').val()),2));
}

/*GF1103_69_C*/
function FGF1103_69_C(obj){
    showStr(obj);
    $('#GF1103_66_C').val(getNumToString(getStrFloat($('#GF1103_67_C').val())+getStrFloat($('#GF1103_68_C').val())+getStrFloat($('#GF1103_69_C').val())+getStrFloat($('#GF1103_70_C').val())+getStrFloat($('#GF1103_71_C').val())+getStrFloat($('#GF1103_72_C').val())+getStrFloat($('#GF1103_73_C').val())+getStrFloat($('#GF1103_74_C').val()),2));
    FGF1103_66_C($('#GF1103_66_C'));
    $('#GF1103_69_B').val(getNumToString(getStrFloat($('#GF1103_69_C').val())+getStrFloat($('#GF1103_69_D').val()),2));
    FGF1103_69_B($('#GF1103_69_B'));
}

/*GF1103_69_D*/
function FGF1103_69_D(obj){
    showStr(obj);
    $('#GF1103_66_D').val(getNumToString(getStrFloat($('#GF1103_67_D').val())+getStrFloat($('#GF1103_68_D').val())+getStrFloat($('#GF1103_69_D').val())+getStrFloat($('#GF1103_70_D').val())+getStrFloat($('#GF1103_71_D').val())+getStrFloat($('#GF1103_72_D').val())+getStrFloat($('#GF1103_73_D').val())+getStrFloat($('#GF1103_74_D').val()),2));
    FGF1103_66_D($('#GF1103_66_D'));
    $('#GF1103_69_B').val(getNumToString(getStrFloat($('#GF1103_69_C').val())+getStrFloat($('#GF1103_69_D').val()),2));
    FGF1103_69_B($('#GF1103_69_B'));
}

/*GF1103_69_E*/
function FGF1103_69_E(obj){
    showStr(obj);
    $('#GF1103_69_A').val(getNumToString(getStrFloat($('#GF1103_69_B').val())+getStrFloat($('#GF1103_69_E').val()),2));
    FGF1103_69_A($('#GF1103_69_A'));
    $('#GF1103_69_E').val(getNumToString(getStrFloat($('#GF1103_69_F').val())+getStrFloat($('#GF1103_69_G').val())+getStrFloat($('#GF1103_69_H').val()),2));
}

/*GF1103_69_F*/
function FGF1103_69_F(obj){
    showStr(obj);
    $('#GF1103_66_F').val(getNumToString(getStrFloat($('#GF1103_67_F').val())+getStrFloat($('#GF1103_68_F').val())+getStrFloat($('#GF1103_69_F').val())+getStrFloat($('#GF1103_70_F').val())+getStrFloat($('#GF1103_71_F').val())+getStrFloat($('#GF1103_72_F').val())+getStrFloat($('#GF1103_73_F').val())+getStrFloat($('#GF1103_74_F').val()),2));
    FGF1103_66_F($('#GF1103_66_F'));
    $('#GF1103_69_E').val(getNumToString(getStrFloat($('#GF1103_69_F').val())+getStrFloat($('#GF1103_69_G').val())+getStrFloat($('#GF1103_69_H').val()),2));
    FGF1103_69_E($('#GF1103_69_E'));
}

/*GF1103_69_G*/
function FGF1103_69_G(obj){
    showStr(obj);
    $('#GF1103_66_G').val(getNumToString(getStrFloat($('#GF1103_67_G').val())+getStrFloat($('#GF1103_68_G').val())+getStrFloat($('#GF1103_69_G').val())+getStrFloat($('#GF1103_70_G').val())+getStrFloat($('#GF1103_71_G').val())+getStrFloat($('#GF1103_72_G').val())+getStrFloat($('#GF1103_73_G').val())+getStrFloat($('#GF1103_74_G').val()),2));
    FGF1103_66_G($('#GF1103_66_G'));
    $('#GF1103_69_E').val(getNumToString(getStrFloat($('#GF1103_69_F').val())+getStrFloat($('#GF1103_69_G').val())+getStrFloat($('#GF1103_69_H').val()),2));
    FGF1103_69_E($('#GF1103_69_E'));
}

/*GF1103_69_H*/
function FGF1103_69_H(obj){
    showStr(obj);
    $('#GF1103_66_H').val(getNumToString(getStrFloat($('#GF1103_67_H').val())+getStrFloat($('#GF1103_68_H').val())+getStrFloat($('#GF1103_69_H').val())+getStrFloat($('#GF1103_70_H').val())+getStrFloat($('#GF1103_71_H').val())+getStrFloat($('#GF1103_72_H').val())+getStrFloat($('#GF1103_73_H').val())+getStrFloat($('#GF1103_74_H').val()),2));
    FGF1103_66_H($('#GF1103_66_H'));
    $('#GF1103_69_E').val(getNumToString(getStrFloat($('#GF1103_69_F').val())+getStrFloat($('#GF1103_69_G').val())+getStrFloat($('#GF1103_69_H').val()),2));
    FGF1103_69_E($('#GF1103_69_E'));
}

/*GF1103_70_A*/
function FGF1103_70_A(obj){
    showStr(obj);
    $('#GF1103_70_A').val(getNumToString(getStrFloat($('#GF1103_70_B').val())+getStrFloat($('#GF1103_70_E').val()),2));
}

/*GF1103_70_B*/
function FGF1103_70_B(obj){
    showStr(obj);
    $('#GF1103_70_A').val(getNumToString(getStrFloat($('#GF1103_70_B').val())+getStrFloat($('#GF1103_70_E').val()),2));
    FGF1103_70_A($('#GF1103_70_A'));
    $('#GF1103_70_B').val(getNumToString(getStrFloat($('#GF1103_70_C').val())+getStrFloat($('#GF1103_70_D').val()),2));
}

/*GF1103_70_C*/
function FGF1103_70_C(obj){
    showStr(obj);
    $('#GF1103_66_C').val(getNumToString(getStrFloat($('#GF1103_67_C').val())+getStrFloat($('#GF1103_68_C').val())+getStrFloat($('#GF1103_69_C').val())+getStrFloat($('#GF1103_70_C').val())+getStrFloat($('#GF1103_71_C').val())+getStrFloat($('#GF1103_72_C').val())+getStrFloat($('#GF1103_73_C').val())+getStrFloat($('#GF1103_74_C').val()),2));
    FGF1103_66_C($('#GF1103_66_C'));
    $('#GF1103_70_B').val(getNumToString(getStrFloat($('#GF1103_70_C').val())+getStrFloat($('#GF1103_70_D').val()),2));
    FGF1103_70_B($('#GF1103_70_B'));
}

/*GF1103_70_D*/
function FGF1103_70_D(obj){
    showStr(obj);
    $('#GF1103_66_D').val(getNumToString(getStrFloat($('#GF1103_67_D').val())+getStrFloat($('#GF1103_68_D').val())+getStrFloat($('#GF1103_69_D').val())+getStrFloat($('#GF1103_70_D').val())+getStrFloat($('#GF1103_71_D').val())+getStrFloat($('#GF1103_72_D').val())+getStrFloat($('#GF1103_73_D').val())+getStrFloat($('#GF1103_74_D').val()),2));
    FGF1103_66_D($('#GF1103_66_D'));
    $('#GF1103_70_B').val(getNumToString(getStrFloat($('#GF1103_70_C').val())+getStrFloat($('#GF1103_70_D').val()),2));
    FGF1103_70_B($('#GF1103_70_B'));
}

/*GF1103_70_E*/
function FGF1103_70_E(obj){
    showStr(obj);
    $('#GF1103_70_A').val(getNumToString(getStrFloat($('#GF1103_70_B').val())+getStrFloat($('#GF1103_70_E').val()),2));
    FGF1103_70_A($('#GF1103_70_A'));
    $('#GF1103_70_E').val(getNumToString(getStrFloat($('#GF1103_70_F').val())+getStrFloat($('#GF1103_70_G').val())+getStrFloat($('#GF1103_70_H').val()),2));
}

/*GF1103_70_F*/
function FGF1103_70_F(obj){
    showStr(obj);
    $('#GF1103_66_F').val(getNumToString(getStrFloat($('#GF1103_67_F').val())+getStrFloat($('#GF1103_68_F').val())+getStrFloat($('#GF1103_69_F').val())+getStrFloat($('#GF1103_70_F').val())+getStrFloat($('#GF1103_71_F').val())+getStrFloat($('#GF1103_72_F').val())+getStrFloat($('#GF1103_73_F').val())+getStrFloat($('#GF1103_74_F').val()),2));
    FGF1103_66_F($('#GF1103_66_F'));
    $('#GF1103_70_E').val(getNumToString(getStrFloat($('#GF1103_70_F').val())+getStrFloat($('#GF1103_70_G').val())+getStrFloat($('#GF1103_70_H').val()),2));
    FGF1103_70_E($('#GF1103_70_E'));
}

/*GF1103_70_G*/
function FGF1103_70_G(obj){
    showStr(obj);
    $('#GF1103_66_G').val(getNumToString(getStrFloat($('#GF1103_67_G').val())+getStrFloat($('#GF1103_68_G').val())+getStrFloat($('#GF1103_69_G').val())+getStrFloat($('#GF1103_70_G').val())+getStrFloat($('#GF1103_71_G').val())+getStrFloat($('#GF1103_72_G').val())+getStrFloat($('#GF1103_73_G').val())+getStrFloat($('#GF1103_74_G').val()),2));
    FGF1103_66_G($('#GF1103_66_G'));
    $('#GF1103_70_E').val(getNumToString(getStrFloat($('#GF1103_70_F').val())+getStrFloat($('#GF1103_70_G').val())+getStrFloat($('#GF1103_70_H').val()),2));
    FGF1103_70_E($('#GF1103_70_E'));
}

/*GF1103_70_H*/
function FGF1103_70_H(obj){
    showStr(obj);
    $('#GF1103_66_H').val(getNumToString(getStrFloat($('#GF1103_67_H').val())+getStrFloat($('#GF1103_68_H').val())+getStrFloat($('#GF1103_69_H').val())+getStrFloat($('#GF1103_70_H').val())+getStrFloat($('#GF1103_71_H').val())+getStrFloat($('#GF1103_72_H').val())+getStrFloat($('#GF1103_73_H').val())+getStrFloat($('#GF1103_74_H').val()),2));
    FGF1103_66_H($('#GF1103_66_H'));
    $('#GF1103_70_E').val(getNumToString(getStrFloat($('#GF1103_70_F').val())+getStrFloat($('#GF1103_70_G').val())+getStrFloat($('#GF1103_70_H').val()),2));
    FGF1103_70_E($('#GF1103_70_E'));
}

/*GF1103_71_A*/
function FGF1103_71_A(obj){
    showStr(obj);
    $('#GF1103_71_A').val(getNumToString(getStrFloat($('#GF1103_71_B').val())+getStrFloat($('#GF1103_71_E').val()),2));
}

/*GF1103_71_B*/
function FGF1103_71_B(obj){
    showStr(obj);
    $('#GF1103_71_A').val(getNumToString(getStrFloat($('#GF1103_71_B').val())+getStrFloat($('#GF1103_71_E').val()),2));
    FGF1103_71_A($('#GF1103_71_A'));
    $('#GF1103_71_B').val(getNumToString(getStrFloat($('#GF1103_71_C').val())+getStrFloat($('#GF1103_71_D').val()),2));
}

/*GF1103_71_C*/
function FGF1103_71_C(obj){
    showStr(obj);
    $('#GF1103_66_C').val(getNumToString(getStrFloat($('#GF1103_67_C').val())+getStrFloat($('#GF1103_68_C').val())+getStrFloat($('#GF1103_69_C').val())+getStrFloat($('#GF1103_70_C').val())+getStrFloat($('#GF1103_71_C').val())+getStrFloat($('#GF1103_72_C').val())+getStrFloat($('#GF1103_73_C').val())+getStrFloat($('#GF1103_74_C').val()),2));
    FGF1103_66_C($('#GF1103_66_C'));
    $('#GF1103_71_B').val(getNumToString(getStrFloat($('#GF1103_71_C').val())+getStrFloat($('#GF1103_71_D').val()),2));
    FGF1103_71_B($('#GF1103_71_B'));
}

/*GF1103_71_D*/
function FGF1103_71_D(obj){
    showStr(obj);
    $('#GF1103_66_D').val(getNumToString(getStrFloat($('#GF1103_67_D').val())+getStrFloat($('#GF1103_68_D').val())+getStrFloat($('#GF1103_69_D').val())+getStrFloat($('#GF1103_70_D').val())+getStrFloat($('#GF1103_71_D').val())+getStrFloat($('#GF1103_72_D').val())+getStrFloat($('#GF1103_73_D').val())+getStrFloat($('#GF1103_74_D').val()),2));
    FGF1103_66_D($('#GF1103_66_D'));
    $('#GF1103_71_B').val(getNumToString(getStrFloat($('#GF1103_71_C').val())+getStrFloat($('#GF1103_71_D').val()),2));
    FGF1103_71_B($('#GF1103_71_B'));
}

/*GF1103_71_E*/
function FGF1103_71_E(obj){
    showStr(obj);
    $('#GF1103_71_A').val(getNumToString(getStrFloat($('#GF1103_71_B').val())+getStrFloat($('#GF1103_71_E').val()),2));
    FGF1103_71_A($('#GF1103_71_A'));
    $('#GF1103_71_E').val(getNumToString(getStrFloat($('#GF1103_71_F').val())+getStrFloat($('#GF1103_71_G').val())+getStrFloat($('#GF1103_71_H').val()),2));
}

/*GF1103_71_F*/
function FGF1103_71_F(obj){
    showStr(obj);
    $('#GF1103_66_F').val(getNumToString(getStrFloat($('#GF1103_67_F').val())+getStrFloat($('#GF1103_68_F').val())+getStrFloat($('#GF1103_69_F').val())+getStrFloat($('#GF1103_70_F').val())+getStrFloat($('#GF1103_71_F').val())+getStrFloat($('#GF1103_72_F').val())+getStrFloat($('#GF1103_73_F').val())+getStrFloat($('#GF1103_74_F').val()),2));
    FGF1103_66_F($('#GF1103_66_F'));
    $('#GF1103_71_E').val(getNumToString(getStrFloat($('#GF1103_71_F').val())+getStrFloat($('#GF1103_71_G').val())+getStrFloat($('#GF1103_71_H').val()),2));
    FGF1103_71_E($('#GF1103_71_E'));
}

/*GF1103_71_G*/
function FGF1103_71_G(obj){
    showStr(obj);
    $('#GF1103_66_G').val(getNumToString(getStrFloat($('#GF1103_67_G').val())+getStrFloat($('#GF1103_68_G').val())+getStrFloat($('#GF1103_69_G').val())+getStrFloat($('#GF1103_70_G').val())+getStrFloat($('#GF1103_71_G').val())+getStrFloat($('#GF1103_72_G').val())+getStrFloat($('#GF1103_73_G').val())+getStrFloat($('#GF1103_74_G').val()),2));
    FGF1103_66_G($('#GF1103_66_G'));
    $('#GF1103_71_E').val(getNumToString(getStrFloat($('#GF1103_71_F').val())+getStrFloat($('#GF1103_71_G').val())+getStrFloat($('#GF1103_71_H').val()),2));
    FGF1103_71_E($('#GF1103_71_E'));
}

/*GF1103_71_H*/
function FGF1103_71_H(obj){
    showStr(obj);
    $('#GF1103_66_H').val(getNumToString(getStrFloat($('#GF1103_67_H').val())+getStrFloat($('#GF1103_68_H').val())+getStrFloat($('#GF1103_69_H').val())+getStrFloat($('#GF1103_70_H').val())+getStrFloat($('#GF1103_71_H').val())+getStrFloat($('#GF1103_72_H').val())+getStrFloat($('#GF1103_73_H').val())+getStrFloat($('#GF1103_74_H').val()),2));
    FGF1103_66_H($('#GF1103_66_H'));
    $('#GF1103_71_E').val(getNumToString(getStrFloat($('#GF1103_71_F').val())+getStrFloat($('#GF1103_71_G').val())+getStrFloat($('#GF1103_71_H').val()),2));
    FGF1103_71_E($('#GF1103_71_E'));
}

/*GF1103_72_A*/
function FGF1103_72_A(obj){
    showStr(obj);
    $('#GF1103_72_A').val(getNumToString(getStrFloat($('#GF1103_72_B').val())+getStrFloat($('#GF1103_72_E').val()),2));
}

/*GF1103_72_B*/
function FGF1103_72_B(obj){
    showStr(obj);
    $('#GF1103_72_A').val(getNumToString(getStrFloat($('#GF1103_72_B').val())+getStrFloat($('#GF1103_72_E').val()),2));
    FGF1103_72_A($('#GF1103_72_A'));
    $('#GF1103_72_B').val(getNumToString(getStrFloat($('#GF1103_72_C').val())+getStrFloat($('#GF1103_72_D').val()),2));
}

/*GF1103_72_C*/
function FGF1103_72_C(obj){
    showStr(obj);
    $('#GF1103_66_C').val(getNumToString(getStrFloat($('#GF1103_67_C').val())+getStrFloat($('#GF1103_68_C').val())+getStrFloat($('#GF1103_69_C').val())+getStrFloat($('#GF1103_70_C').val())+getStrFloat($('#GF1103_71_C').val())+getStrFloat($('#GF1103_72_C').val())+getStrFloat($('#GF1103_73_C').val())+getStrFloat($('#GF1103_74_C').val()),2));
    FGF1103_66_C($('#GF1103_66_C'));
    $('#GF1103_72_B').val(getNumToString(getStrFloat($('#GF1103_72_C').val())+getStrFloat($('#GF1103_72_D').val()),2));
    FGF1103_72_B($('#GF1103_72_B'));
}

/*GF1103_72_D*/
function FGF1103_72_D(obj){
    showStr(obj);
    $('#GF1103_66_D').val(getNumToString(getStrFloat($('#GF1103_67_D').val())+getStrFloat($('#GF1103_68_D').val())+getStrFloat($('#GF1103_69_D').val())+getStrFloat($('#GF1103_70_D').val())+getStrFloat($('#GF1103_71_D').val())+getStrFloat($('#GF1103_72_D').val())+getStrFloat($('#GF1103_73_D').val())+getStrFloat($('#GF1103_74_D').val()),2));
    FGF1103_66_D($('#GF1103_66_D'));
    $('#GF1103_72_B').val(getNumToString(getStrFloat($('#GF1103_72_C').val())+getStrFloat($('#GF1103_72_D').val()),2));
    FGF1103_72_B($('#GF1103_72_B'));
}

/*GF1103_72_E*/
function FGF1103_72_E(obj){
    showStr(obj);
    $('#GF1103_72_A').val(getNumToString(getStrFloat($('#GF1103_72_B').val())+getStrFloat($('#GF1103_72_E').val()),2));
    FGF1103_72_A($('#GF1103_72_A'));
    $('#GF1103_72_E').val(getNumToString(getStrFloat($('#GF1103_72_F').val())+getStrFloat($('#GF1103_72_G').val())+getStrFloat($('#GF1103_72_H').val()),2));
}

/*GF1103_72_F*/
function FGF1103_72_F(obj){
    showStr(obj);
    $('#GF1103_66_F').val(getNumToString(getStrFloat($('#GF1103_67_F').val())+getStrFloat($('#GF1103_68_F').val())+getStrFloat($('#GF1103_69_F').val())+getStrFloat($('#GF1103_70_F').val())+getStrFloat($('#GF1103_71_F').val())+getStrFloat($('#GF1103_72_F').val())+getStrFloat($('#GF1103_73_F').val())+getStrFloat($('#GF1103_74_F').val()),2));
    FGF1103_66_F($('#GF1103_66_F'));
    $('#GF1103_72_E').val(getNumToString(getStrFloat($('#GF1103_72_F').val())+getStrFloat($('#GF1103_72_G').val())+getStrFloat($('#GF1103_72_H').val()),2));
    FGF1103_72_E($('#GF1103_72_E'));
}

/*GF1103_72_G*/
function FGF1103_72_G(obj){
    showStr(obj);
    $('#GF1103_66_G').val(getNumToString(getStrFloat($('#GF1103_67_G').val())+getStrFloat($('#GF1103_68_G').val())+getStrFloat($('#GF1103_69_G').val())+getStrFloat($('#GF1103_70_G').val())+getStrFloat($('#GF1103_71_G').val())+getStrFloat($('#GF1103_72_G').val())+getStrFloat($('#GF1103_73_G').val())+getStrFloat($('#GF1103_74_G').val()),2));
    FGF1103_66_G($('#GF1103_66_G'));
    $('#GF1103_72_E').val(getNumToString(getStrFloat($('#GF1103_72_F').val())+getStrFloat($('#GF1103_72_G').val())+getStrFloat($('#GF1103_72_H').val()),2));
    FGF1103_72_E($('#GF1103_72_E'));
}

/*GF1103_72_H*/
function FGF1103_72_H(obj){
    showStr(obj);
    $('#GF1103_66_H').val(getNumToString(getStrFloat($('#GF1103_67_H').val())+getStrFloat($('#GF1103_68_H').val())+getStrFloat($('#GF1103_69_H').val())+getStrFloat($('#GF1103_70_H').val())+getStrFloat($('#GF1103_71_H').val())+getStrFloat($('#GF1103_72_H').val())+getStrFloat($('#GF1103_73_H').val())+getStrFloat($('#GF1103_74_H').val()),2));
    FGF1103_66_H($('#GF1103_66_H'));
    $('#GF1103_72_E').val(getNumToString(getStrFloat($('#GF1103_72_F').val())+getStrFloat($('#GF1103_72_G').val())+getStrFloat($('#GF1103_72_H').val()),2));
    FGF1103_72_E($('#GF1103_72_E'));
}

/*GF1103_73_A*/
function FGF1103_73_A(obj){
    showStr(obj);
    $('#GF1103_73_A').val(getNumToString(getStrFloat($('#GF1103_73_B').val())+getStrFloat($('#GF1103_73_E').val()),2));
}

/*GF1103_73_B*/
function FGF1103_73_B(obj){
    showStr(obj);
    $('#GF1103_73_A').val(getNumToString(getStrFloat($('#GF1103_73_B').val())+getStrFloat($('#GF1103_73_E').val()),2));
    FGF1103_73_A($('#GF1103_73_A'));
    $('#GF1103_73_B').val(getNumToString(getStrFloat($('#GF1103_73_C').val())+getStrFloat($('#GF1103_73_D').val()),2));
}

/*GF1103_73_C*/
function FGF1103_73_C(obj){
    showStr(obj);
    $('#GF1103_66_C').val(getNumToString(getStrFloat($('#GF1103_67_C').val())+getStrFloat($('#GF1103_68_C').val())+getStrFloat($('#GF1103_69_C').val())+getStrFloat($('#GF1103_70_C').val())+getStrFloat($('#GF1103_71_C').val())+getStrFloat($('#GF1103_72_C').val())+getStrFloat($('#GF1103_73_C').val())+getStrFloat($('#GF1103_74_C').val()),2));
    FGF1103_66_C($('#GF1103_66_C'));
    $('#GF1103_73_B').val(getNumToString(getStrFloat($('#GF1103_73_C').val())+getStrFloat($('#GF1103_73_D').val()),2));
    FGF1103_73_B($('#GF1103_73_B'));
}

/*GF1103_73_D*/
function FGF1103_73_D(obj){
    showStr(obj);
    $('#GF1103_66_D').val(getNumToString(getStrFloat($('#GF1103_67_D').val())+getStrFloat($('#GF1103_68_D').val())+getStrFloat($('#GF1103_69_D').val())+getStrFloat($('#GF1103_70_D').val())+getStrFloat($('#GF1103_71_D').val())+getStrFloat($('#GF1103_72_D').val())+getStrFloat($('#GF1103_73_D').val())+getStrFloat($('#GF1103_74_D').val()),2));
    FGF1103_66_D($('#GF1103_66_D'));
    $('#GF1103_73_B').val(getNumToString(getStrFloat($('#GF1103_73_C').val())+getStrFloat($('#GF1103_73_D').val()),2));
    FGF1103_73_B($('#GF1103_73_B'));
}

/*GF1103_73_E*/
function FGF1103_73_E(obj){
    showStr(obj);
    $('#GF1103_73_A').val(getNumToString(getStrFloat($('#GF1103_73_B').val())+getStrFloat($('#GF1103_73_E').val()),2));
    FGF1103_73_A($('#GF1103_73_A'));
    $('#GF1103_73_E').val(getNumToString(getStrFloat($('#GF1103_73_F').val())+getStrFloat($('#GF1103_73_G').val())+getStrFloat($('#GF1103_73_H').val()),2));
}

/*GF1103_73_F*/
function FGF1103_73_F(obj){
    showStr(obj);
    $('#GF1103_66_F').val(getNumToString(getStrFloat($('#GF1103_67_F').val())+getStrFloat($('#GF1103_68_F').val())+getStrFloat($('#GF1103_69_F').val())+getStrFloat($('#GF1103_70_F').val())+getStrFloat($('#GF1103_71_F').val())+getStrFloat($('#GF1103_72_F').val())+getStrFloat($('#GF1103_73_F').val())+getStrFloat($('#GF1103_74_F').val()),2));
    FGF1103_66_F($('#GF1103_66_F'));
    $('#GF1103_73_E').val(getNumToString(getStrFloat($('#GF1103_73_F').val())+getStrFloat($('#GF1103_73_G').val())+getStrFloat($('#GF1103_73_H').val()),2));
    FGF1103_73_E($('#GF1103_73_E'));
}

/*GF1103_73_G*/
function FGF1103_73_G(obj){
    showStr(obj);
    $('#GF1103_66_G').val(getNumToString(getStrFloat($('#GF1103_67_G').val())+getStrFloat($('#GF1103_68_G').val())+getStrFloat($('#GF1103_69_G').val())+getStrFloat($('#GF1103_70_G').val())+getStrFloat($('#GF1103_71_G').val())+getStrFloat($('#GF1103_72_G').val())+getStrFloat($('#GF1103_73_G').val())+getStrFloat($('#GF1103_74_G').val()),2));
    FGF1103_66_G($('#GF1103_66_G'));
    $('#GF1103_73_E').val(getNumToString(getStrFloat($('#GF1103_73_F').val())+getStrFloat($('#GF1103_73_G').val())+getStrFloat($('#GF1103_73_H').val()),2));
    FGF1103_73_E($('#GF1103_73_E'));
}

/*GF1103_73_H*/
function FGF1103_73_H(obj){
    showStr(obj);
    $('#GF1103_66_H').val(getNumToString(getStrFloat($('#GF1103_67_H').val())+getStrFloat($('#GF1103_68_H').val())+getStrFloat($('#GF1103_69_H').val())+getStrFloat($('#GF1103_70_H').val())+getStrFloat($('#GF1103_71_H').val())+getStrFloat($('#GF1103_72_H').val())+getStrFloat($('#GF1103_73_H').val())+getStrFloat($('#GF1103_74_H').val()),2));
    FGF1103_66_H($('#GF1103_66_H'));
    $('#GF1103_73_E').val(getNumToString(getStrFloat($('#GF1103_73_F').val())+getStrFloat($('#GF1103_73_G').val())+getStrFloat($('#GF1103_73_H').val()),2));
    FGF1103_73_E($('#GF1103_73_E'));
}

/*GF1103_74_A*/
function FGF1103_74_A(obj){
    showStr(obj);
    $('#GF1103_74_A').val(getNumToString(getStrFloat($('#GF1103_74_B').val())+getStrFloat($('#GF1103_74_E').val()),2));
}

/*GF1103_74_B*/
function FGF1103_74_B(obj){
    showStr(obj);
    $('#GF1103_74_A').val(getNumToString(getStrFloat($('#GF1103_74_B').val())+getStrFloat($('#GF1103_74_E').val()),2));
    FGF1103_74_A($('#GF1103_74_A'));
    $('#GF1103_74_B').val(getNumToString(getStrFloat($('#GF1103_74_C').val())+getStrFloat($('#GF1103_74_D').val()),2));
}

/*GF1103_74_C*/
function FGF1103_74_C(obj){
    showStr(obj);
    $('#GF1103_66_C').val(getNumToString(getStrFloat($('#GF1103_67_C').val())+getStrFloat($('#GF1103_68_C').val())+getStrFloat($('#GF1103_69_C').val())+getStrFloat($('#GF1103_70_C').val())+getStrFloat($('#GF1103_71_C').val())+getStrFloat($('#GF1103_72_C').val())+getStrFloat($('#GF1103_73_C').val())+getStrFloat($('#GF1103_74_C').val()),2));
    FGF1103_66_C($('#GF1103_66_C'));
    $('#GF1103_74_B').val(getNumToString(getStrFloat($('#GF1103_74_C').val())+getStrFloat($('#GF1103_74_D').val()),2));
    FGF1103_74_B($('#GF1103_74_B'));
}

/*GF1103_74_D*/
function FGF1103_74_D(obj){
    showStr(obj);
    $('#GF1103_66_D').val(getNumToString(getStrFloat($('#GF1103_67_D').val())+getStrFloat($('#GF1103_68_D').val())+getStrFloat($('#GF1103_69_D').val())+getStrFloat($('#GF1103_70_D').val())+getStrFloat($('#GF1103_71_D').val())+getStrFloat($('#GF1103_72_D').val())+getStrFloat($('#GF1103_73_D').val())+getStrFloat($('#GF1103_74_D').val()),2));
    FGF1103_66_D($('#GF1103_66_D'));
    $('#GF1103_74_B').val(getNumToString(getStrFloat($('#GF1103_74_C').val())+getStrFloat($('#GF1103_74_D').val()),2));
    FGF1103_74_B($('#GF1103_74_B'));
}

/*GF1103_74_E*/
function FGF1103_74_E(obj){
    showStr(obj);
    $('#GF1103_74_A').val(getNumToString(getStrFloat($('#GF1103_74_B').val())+getStrFloat($('#GF1103_74_E').val()),2));
    FGF1103_74_A($('#GF1103_74_A'));
    $('#GF1103_74_E').val(getNumToString(getStrFloat($('#GF1103_74_F').val())+getStrFloat($('#GF1103_74_G').val())+getStrFloat($('#GF1103_74_H').val()),2));
}

/*GF1103_74_F*/
function FGF1103_74_F(obj){
    showStr(obj);
    $('#GF1103_66_F').val(getNumToString(getStrFloat($('#GF1103_67_F').val())+getStrFloat($('#GF1103_68_F').val())+getStrFloat($('#GF1103_69_F').val())+getStrFloat($('#GF1103_70_F').val())+getStrFloat($('#GF1103_71_F').val())+getStrFloat($('#GF1103_72_F').val())+getStrFloat($('#GF1103_73_F').val())+getStrFloat($('#GF1103_74_F').val()),2));
    FGF1103_66_F($('#GF1103_66_F'));
    $('#GF1103_74_E').val(getNumToString(getStrFloat($('#GF1103_74_F').val())+getStrFloat($('#GF1103_74_G').val())+getStrFloat($('#GF1103_74_H').val()),2));
    FGF1103_74_E($('#GF1103_74_E'));
}

/*GF1103_74_G*/
function FGF1103_74_G(obj){
    showStr(obj);
    $('#GF1103_66_G').val(getNumToString(getStrFloat($('#GF1103_67_G').val())+getStrFloat($('#GF1103_68_G').val())+getStrFloat($('#GF1103_69_G').val())+getStrFloat($('#GF1103_70_G').val())+getStrFloat($('#GF1103_71_G').val())+getStrFloat($('#GF1103_72_G').val())+getStrFloat($('#GF1103_73_G').val())+getStrFloat($('#GF1103_74_G').val()),2));
    FGF1103_66_G($('#GF1103_66_G'));
    $('#GF1103_74_E').val(getNumToString(getStrFloat($('#GF1103_74_F').val())+getStrFloat($('#GF1103_74_G').val())+getStrFloat($('#GF1103_74_H').val()),2));
    FGF1103_74_E($('#GF1103_74_E'));
}

/*GF1103_74_H*/
function FGF1103_74_H(obj){
    showStr(obj);
    $('#GF1103_66_H').val(getNumToString(getStrFloat($('#GF1103_67_H').val())+getStrFloat($('#GF1103_68_H').val())+getStrFloat($('#GF1103_69_H').val())+getStrFloat($('#GF1103_70_H').val())+getStrFloat($('#GF1103_71_H').val())+getStrFloat($('#GF1103_72_H').val())+getStrFloat($('#GF1103_73_H').val())+getStrFloat($('#GF1103_74_H').val()),2));
    FGF1103_66_H($('#GF1103_66_H'));
    $('#GF1103_74_E').val(getNumToString(getStrFloat($('#GF1103_74_F').val())+getStrFloat($('#GF1103_74_G').val())+getStrFloat($('#GF1103_74_H').val()),2));
    FGF1103_74_E($('#GF1103_74_E'));
}

/*GF1103_75_A*/
function FGF1103_75_A(obj){
    showStr(obj);
    $('#GF1103_75_A').val(getNumToString(getStrFloat($('#GF1103_75_B').val())+getStrFloat($('#GF1103_75_E').val()),2));
}

/*GF1103_75_B*/
function FGF1103_75_B(obj){
    showStr(obj);
    $('#GF1103_75_A').val(getNumToString(getStrFloat($('#GF1103_75_B').val())+getStrFloat($('#GF1103_75_E').val()),2));
    FGF1103_75_A($('#GF1103_75_A'));
    $('#GF1103_75_B').val(getNumToString(getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_75_D').val()),2));
}

/*GF1103_75_C*/
function FGF1103_75_C(obj){
    showStr(obj);
    $('#GF1103_75_B').val(getNumToString(getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_75_D').val()),2));
    FGF1103_75_B($('#GF1103_75_B'));
    $('#GF1103_75_C').val(getNumToString(getStrFloat($('#GF1103_76_C').val())+getStrFloat($('#GF1103_77_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_75_D*/
function FGF1103_75_D(obj){
    showStr(obj);
    $('#GF1103_75_B').val(getNumToString(getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_75_D').val()),2));
    FGF1103_75_B($('#GF1103_75_B'));
    $('#GF1103_75_D').val(getNumToString(getStrFloat($('#GF1103_76_D').val())+getStrFloat($('#GF1103_77_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_75_E*/
function FGF1103_75_E(obj){
    showStr(obj);
    $('#GF1103_75_A').val(getNumToString(getStrFloat($('#GF1103_75_B').val())+getStrFloat($('#GF1103_75_E').val()),2));
    FGF1103_75_A($('#GF1103_75_A'));
    $('#GF1103_75_E').val(getNumToString(getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_75_H').val()),2));
}

/*GF1103_75_F*/
function FGF1103_75_F(obj){
    showStr(obj);
    $('#GF1103_75_E').val(getNumToString(getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_75_H').val()),2));
    FGF1103_75_E($('#GF1103_75_E'));
    $('#GF1103_75_F').val(getNumToString(getStrFloat($('#GF1103_76_F').val())+getStrFloat($('#GF1103_77_F').val()),2));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
}

/*GF1103_75_G*/
function FGF1103_75_G(obj){
    showStr(obj);
    $('#GF1103_75_E').val(getNumToString(getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_75_H').val()),2));
    FGF1103_75_E($('#GF1103_75_E'));
    $('#GF1103_75_G').val(getNumToString(getStrFloat($('#GF1103_76_G').val())+getStrFloat($('#GF1103_77_G').val()),2));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_75_H*/
function FGF1103_75_H(obj){
    showStr(obj);
    $('#GF1103_75_E').val(getNumToString(getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_75_H').val()),2));
    FGF1103_75_E($('#GF1103_75_E'));
    $('#GF1103_75_H').val(getNumToString(getStrFloat($('#GF1103_76_H').val())+getStrFloat($('#GF1103_77_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_76_A*/
function FGF1103_76_A(obj){
    showStr(obj);
    $('#GF1103_76_A').val(getNumToString(getStrFloat($('#GF1103_76_B').val())+getStrFloat($('#GF1103_76_E').val()),2));
}

/*GF1103_76_B*/
function FGF1103_76_B(obj){
    showStr(obj);
    $('#GF1103_76_A').val(getNumToString(getStrFloat($('#GF1103_76_B').val())+getStrFloat($('#GF1103_76_E').val()),2));
    FGF1103_76_A($('#GF1103_76_A'));
    $('#GF1103_76_B').val(getNumToString(getStrFloat($('#GF1103_76_C').val())+getStrFloat($('#GF1103_76_D').val()),2));
}

/*GF1103_76_C*/
function FGF1103_76_C(obj){
    showStr(obj);
    $('#GF1103_75_C').val(getNumToString(getStrFloat($('#GF1103_76_C').val())+getStrFloat($('#GF1103_77_C').val()),2));
    FGF1103_75_C($('#GF1103_75_C'));
    $('#GF1103_76_B').val(getNumToString(getStrFloat($('#GF1103_76_C').val())+getStrFloat($('#GF1103_76_D').val()),2));
    FGF1103_76_B($('#GF1103_76_B'));
}

/*GF1103_76_D*/
function FGF1103_76_D(obj){
    showStr(obj);
    $('#GF1103_75_D').val(getNumToString(getStrFloat($('#GF1103_76_D').val())+getStrFloat($('#GF1103_77_D').val()),2));
    FGF1103_75_D($('#GF1103_75_D'));
    $('#GF1103_76_B').val(getNumToString(getStrFloat($('#GF1103_76_C').val())+getStrFloat($('#GF1103_76_D').val()),2));
    FGF1103_76_B($('#GF1103_76_B'));
}

/*GF1103_76_E*/
function FGF1103_76_E(obj){
    showStr(obj);
    $('#GF1103_76_A').val(getNumToString(getStrFloat($('#GF1103_76_B').val())+getStrFloat($('#GF1103_76_E').val()),2));
    FGF1103_76_A($('#GF1103_76_A'));
    $('#GF1103_76_E').val(getNumToString(getStrFloat($('#GF1103_76_F').val())+getStrFloat($('#GF1103_76_G').val())+getStrFloat($('#GF1103_76_H').val()),2));
}

/*GF1103_76_F*/
function FGF1103_76_F(obj){
    showStr(obj);
    $('#GF1103_75_F').val(getNumToString(getStrFloat($('#GF1103_76_F').val())+getStrFloat($('#GF1103_77_F').val()),2));
    FGF1103_75_F($('#GF1103_75_F'));
    $('#GF1103_76_E').val(getNumToString(getStrFloat($('#GF1103_76_F').val())+getStrFloat($('#GF1103_76_G').val())+getStrFloat($('#GF1103_76_H').val()),2));
    FGF1103_76_E($('#GF1103_76_E'));
}

/*GF1103_76_G*/
function FGF1103_76_G(obj){
    showStr(obj);
    $('#GF1103_75_G').val(getNumToString(getStrFloat($('#GF1103_76_G').val())+getStrFloat($('#GF1103_77_G').val()),2));
    FGF1103_75_G($('#GF1103_75_G'));
    $('#GF1103_76_E').val(getNumToString(getStrFloat($('#GF1103_76_F').val())+getStrFloat($('#GF1103_76_G').val())+getStrFloat($('#GF1103_76_H').val()),2));
    FGF1103_76_E($('#GF1103_76_E'));
}

/*GF1103_76_H*/
function FGF1103_76_H(obj){
    showStr(obj);
    $('#GF1103_75_H').val(getNumToString(getStrFloat($('#GF1103_76_H').val())+getStrFloat($('#GF1103_77_H').val()),2));
    FGF1103_75_H($('#GF1103_75_H'));
    $('#GF1103_76_E').val(getNumToString(getStrFloat($('#GF1103_76_F').val())+getStrFloat($('#GF1103_76_G').val())+getStrFloat($('#GF1103_76_H').val()),2));
    FGF1103_76_E($('#GF1103_76_E'));
}

/*GF1103_77_A*/
function FGF1103_77_A(obj){
    showStr(obj);
    $('#GF1103_77_A').val(getNumToString(getStrFloat($('#GF1103_77_B').val())+getStrFloat($('#GF1103_77_E').val()),2));
}

/*GF1103_77_B*/
function FGF1103_77_B(obj){
    showStr(obj);
    $('#GF1103_77_A').val(getNumToString(getStrFloat($('#GF1103_77_B').val())+getStrFloat($('#GF1103_77_E').val()),2));
    FGF1103_77_A($('#GF1103_77_A'));
    $('#GF1103_77_B').val(getNumToString(getStrFloat($('#GF1103_77_C').val())+getStrFloat($('#GF1103_77_D').val()),2));
}

/*GF1103_77_C*/
function FGF1103_77_C(obj){
    showStr(obj);
    $('#GF1103_75_C').val(getNumToString(getStrFloat($('#GF1103_76_C').val())+getStrFloat($('#GF1103_77_C').val()),2));
    FGF1103_75_C($('#GF1103_75_C'));
    $('#GF1103_77_B').val(getNumToString(getStrFloat($('#GF1103_77_C').val())+getStrFloat($('#GF1103_77_D').val()),2));
    FGF1103_77_B($('#GF1103_77_B'));
}

/*GF1103_77_D*/
function FGF1103_77_D(obj){
    showStr(obj);
    $('#GF1103_75_D').val(getNumToString(getStrFloat($('#GF1103_76_D').val())+getStrFloat($('#GF1103_77_D').val()),2));
    FGF1103_75_D($('#GF1103_75_D'));
    $('#GF1103_77_B').val(getNumToString(getStrFloat($('#GF1103_77_C').val())+getStrFloat($('#GF1103_77_D').val()),2));
    FGF1103_77_B($('#GF1103_77_B'));
}

/*GF1103_77_E*/
function FGF1103_77_E(obj){
    showStr(obj);
    $('#GF1103_77_A').val(getNumToString(getStrFloat($('#GF1103_77_B').val())+getStrFloat($('#GF1103_77_E').val()),2));
    FGF1103_77_A($('#GF1103_77_A'));
    $('#GF1103_77_E').val(getNumToString(getStrFloat($('#GF1103_77_F').val())+getStrFloat($('#GF1103_77_G').val())+getStrFloat($('#GF1103_77_H').val()),2));
}

/*GF1103_77_F*/
function FGF1103_77_F(obj){
    showStr(obj);
    $('#GF1103_75_F').val(getNumToString(getStrFloat($('#GF1103_76_F').val())+getStrFloat($('#GF1103_77_F').val()),2));
    FGF1103_75_F($('#GF1103_75_F'));
    $('#GF1103_77_E').val(getNumToString(getStrFloat($('#GF1103_77_F').val())+getStrFloat($('#GF1103_77_G').val())+getStrFloat($('#GF1103_77_H').val()),2));
    FGF1103_77_E($('#GF1103_77_E'));
}

/*GF1103_77_G*/
function FGF1103_77_G(obj){
    showStr(obj);
    $('#GF1103_75_G').val(getNumToString(getStrFloat($('#GF1103_76_G').val())+getStrFloat($('#GF1103_77_G').val()),2));
    FGF1103_75_G($('#GF1103_75_G'));
    $('#GF1103_77_E').val(getNumToString(getStrFloat($('#GF1103_77_F').val())+getStrFloat($('#GF1103_77_G').val())+getStrFloat($('#GF1103_77_H').val()),2));
    FGF1103_77_E($('#GF1103_77_E'));
}

/*GF1103_77_H*/
function FGF1103_77_H(obj){
    showStr(obj);
    $('#GF1103_75_H').val(getNumToString(getStrFloat($('#GF1103_76_H').val())+getStrFloat($('#GF1103_77_H').val()),2));
    FGF1103_75_H($('#GF1103_75_H'));
    $('#GF1103_77_E').val(getNumToString(getStrFloat($('#GF1103_77_F').val())+getStrFloat($('#GF1103_77_G').val())+getStrFloat($('#GF1103_77_H').val()),2));
    FGF1103_77_E($('#GF1103_77_E'));
}

/*GF1103_78_A*/
function FGF1103_78_A(obj){
    showStr(obj);
    $('#GF1103_78_A').val(getNumToString(getStrFloat($('#GF1103_78_B').val())+getStrFloat($('#GF1103_78_E').val()),2));
}

/*GF1103_78_B*/
function FGF1103_78_B(obj){
    showStr(obj);
    $('#GF1103_78_A').val(getNumToString(getStrFloat($('#GF1103_78_B').val())+getStrFloat($('#GF1103_78_E').val()),2));
    FGF1103_78_A($('#GF1103_78_A'));
    $('#GF1103_78_B').val(getNumToString(getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_78_D').val()),2));
}

/*GF1103_78_C*/
function FGF1103_78_C(obj){
    showStr(obj);
    $('#GF1103_78_B').val(getNumToString(getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_78_D').val()),2));
    FGF1103_78_B($('#GF1103_78_B'));
    $('#GF1103_78_C').val(getNumToString(getStrFloat($('#GF1103_79_C').val())+getStrFloat($('#GF1103_80_C').val())+getStrFloat($('#GF1103_81_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_78_D*/
function FGF1103_78_D(obj){
    showStr(obj);
    $('#GF1103_78_B').val(getNumToString(getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_78_D').val()),2));
    FGF1103_78_B($('#GF1103_78_B'));
    $('#GF1103_78_D').val(getNumToString(getStrFloat($('#GF1103_79_D').val())+getStrFloat($('#GF1103_80_D').val())+getStrFloat($('#GF1103_81_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_78_E*/
function FGF1103_78_E(obj){
    showStr(obj);
    $('#GF1103_78_A').val(getNumToString(getStrFloat($('#GF1103_78_B').val())+getStrFloat($('#GF1103_78_E').val()),2));
    FGF1103_78_A($('#GF1103_78_A'));
    $('#GF1103_78_E').val(getNumToString(getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_78_H').val()),2));
}

/*GF1103_78_F*/
function FGF1103_78_F(obj){
    showStr(obj);
    $('#GF1103_78_E').val(getNumToString(getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_78_H').val()),2));
    FGF1103_78_E($('#GF1103_78_E'));
    $('#GF1103_78_F').val(getNumToString(getStrFloat($('#GF1103_79_F').val())+getStrFloat($('#GF1103_80_F').val())+getStrFloat($('#GF1103_81_F').val()),2));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
}

/*GF1103_78_G*/
function FGF1103_78_G(obj){
    showStr(obj);
    $('#GF1103_78_E').val(getNumToString(getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_78_H').val()),2));
    FGF1103_78_E($('#GF1103_78_E'));
    $('#GF1103_78_G').val(getNumToString(getStrFloat($('#GF1103_79_G').val())+getStrFloat($('#GF1103_80_G').val())+getStrFloat($('#GF1103_81_G').val()),2));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_78_H*/
function FGF1103_78_H(obj){
    showStr(obj);
    $('#GF1103_78_E').val(getNumToString(getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_78_H').val()),2));
    FGF1103_78_E($('#GF1103_78_E'));
    $('#GF1103_78_H').val(getNumToString(getStrFloat($('#GF1103_79_H').val())+getStrFloat($('#GF1103_80_H').val())+getStrFloat($('#GF1103_81_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_79_A*/
function FGF1103_79_A(obj){
    showStr(obj);
    $('#GF1103_79_A').val(getNumToString(getStrFloat($('#GF1103_79_B').val())+getStrFloat($('#GF1103_79_E').val()),2));
}

/*GF1103_79_B*/
function FGF1103_79_B(obj){
    showStr(obj);
    $('#GF1103_79_A').val(getNumToString(getStrFloat($('#GF1103_79_B').val())+getStrFloat($('#GF1103_79_E').val()),2));
    FGF1103_79_A($('#GF1103_79_A'));
    $('#GF1103_79_B').val(getNumToString(getStrFloat($('#GF1103_79_C').val())+getStrFloat($('#GF1103_79_D').val()),2));
}

/*GF1103_79_C*/
function FGF1103_79_C(obj){
    showStr(obj);
    $('#GF1103_78_C').val(getNumToString(getStrFloat($('#GF1103_79_C').val())+getStrFloat($('#GF1103_80_C').val())+getStrFloat($('#GF1103_81_C').val()),2));
    FGF1103_78_C($('#GF1103_78_C'));
    $('#GF1103_79_B').val(getNumToString(getStrFloat($('#GF1103_79_C').val())+getStrFloat($('#GF1103_79_D').val()),2));
    FGF1103_79_B($('#GF1103_79_B'));
}

/*GF1103_79_D*/
function FGF1103_79_D(obj){
    showStr(obj);
    $('#GF1103_78_D').val(getNumToString(getStrFloat($('#GF1103_79_D').val())+getStrFloat($('#GF1103_80_D').val())+getStrFloat($('#GF1103_81_D').val()),2));
    FGF1103_78_D($('#GF1103_78_D'));
    $('#GF1103_79_B').val(getNumToString(getStrFloat($('#GF1103_79_C').val())+getStrFloat($('#GF1103_79_D').val()),2));
    FGF1103_79_B($('#GF1103_79_B'));
}

/*GF1103_79_E*/
function FGF1103_79_E(obj){
    showStr(obj);
    $('#GF1103_79_A').val(getNumToString(getStrFloat($('#GF1103_79_B').val())+getStrFloat($('#GF1103_79_E').val()),2));
    FGF1103_79_A($('#GF1103_79_A'));
    $('#GF1103_79_E').val(getNumToString(getStrFloat($('#GF1103_79_F').val())+getStrFloat($('#GF1103_79_G').val())+getStrFloat($('#GF1103_79_H').val()),2));
}

/*GF1103_79_F*/
function FGF1103_79_F(obj){
    showStr(obj);
    $('#GF1103_78_F').val(getNumToString(getStrFloat($('#GF1103_79_F').val())+getStrFloat($('#GF1103_80_F').val())+getStrFloat($('#GF1103_81_F').val()),2));
    FGF1103_78_F($('#GF1103_78_F'));
    $('#GF1103_79_E').val(getNumToString(getStrFloat($('#GF1103_79_F').val())+getStrFloat($('#GF1103_79_G').val())+getStrFloat($('#GF1103_79_H').val()),2));
    FGF1103_79_E($('#GF1103_79_E'));
}

/*GF1103_79_G*/
function FGF1103_79_G(obj){
    showStr(obj);
    $('#GF1103_78_G').val(getNumToString(getStrFloat($('#GF1103_79_G').val())+getStrFloat($('#GF1103_80_G').val())+getStrFloat($('#GF1103_81_G').val()),2));
    FGF1103_78_G($('#GF1103_78_G'));
    $('#GF1103_79_E').val(getNumToString(getStrFloat($('#GF1103_79_F').val())+getStrFloat($('#GF1103_79_G').val())+getStrFloat($('#GF1103_79_H').val()),2));
    FGF1103_79_E($('#GF1103_79_E'));
}

/*GF1103_79_H*/
function FGF1103_79_H(obj){
    showStr(obj);
    $('#GF1103_78_H').val(getNumToString(getStrFloat($('#GF1103_79_H').val())+getStrFloat($('#GF1103_80_H').val())+getStrFloat($('#GF1103_81_H').val()),2));
    FGF1103_78_H($('#GF1103_78_H'));
    $('#GF1103_79_E').val(getNumToString(getStrFloat($('#GF1103_79_F').val())+getStrFloat($('#GF1103_79_G').val())+getStrFloat($('#GF1103_79_H').val()),2));
    FGF1103_79_E($('#GF1103_79_E'));
}

/*GF1103_80_A*/
function FGF1103_80_A(obj){
    showStr(obj);
    $('#GF1103_80_A').val(getNumToString(getStrFloat($('#GF1103_80_B').val())+getStrFloat($('#GF1103_80_E').val()),2));
}

/*GF1103_80_B*/
function FGF1103_80_B(obj){
    showStr(obj);
    $('#GF1103_80_A').val(getNumToString(getStrFloat($('#GF1103_80_B').val())+getStrFloat($('#GF1103_80_E').val()),2));
    FGF1103_80_A($('#GF1103_80_A'));
    $('#GF1103_80_B').val(getNumToString(getStrFloat($('#GF1103_80_C').val())+getStrFloat($('#GF1103_80_D').val()),2));
}

/*GF1103_80_C*/
function FGF1103_80_C(obj){
    showStr(obj);
    $('#GF1103_78_C').val(getNumToString(getStrFloat($('#GF1103_79_C').val())+getStrFloat($('#GF1103_80_C').val())+getStrFloat($('#GF1103_81_C').val()),2));
    FGF1103_78_C($('#GF1103_78_C'));
    $('#GF1103_80_B').val(getNumToString(getStrFloat($('#GF1103_80_C').val())+getStrFloat($('#GF1103_80_D').val()),2));
    FGF1103_80_B($('#GF1103_80_B'));
}

/*GF1103_80_D*/
function FGF1103_80_D(obj){
    showStr(obj);
    $('#GF1103_78_D').val(getNumToString(getStrFloat($('#GF1103_79_D').val())+getStrFloat($('#GF1103_80_D').val())+getStrFloat($('#GF1103_81_D').val()),2));
    FGF1103_78_D($('#GF1103_78_D'));
    $('#GF1103_80_B').val(getNumToString(getStrFloat($('#GF1103_80_C').val())+getStrFloat($('#GF1103_80_D').val()),2));
    FGF1103_80_B($('#GF1103_80_B'));
}

/*GF1103_80_E*/
function FGF1103_80_E(obj){
    showStr(obj);
    $('#GF1103_80_A').val(getNumToString(getStrFloat($('#GF1103_80_B').val())+getStrFloat($('#GF1103_80_E').val()),2));
    FGF1103_80_A($('#GF1103_80_A'));
    $('#GF1103_80_E').val(getNumToString(getStrFloat($('#GF1103_80_F').val())+getStrFloat($('#GF1103_80_G').val())+getStrFloat($('#GF1103_80_H').val()),2));
}

/*GF1103_80_F*/
function FGF1103_80_F(obj){
    showStr(obj);
    $('#GF1103_78_F').val(getNumToString(getStrFloat($('#GF1103_79_F').val())+getStrFloat($('#GF1103_80_F').val())+getStrFloat($('#GF1103_81_F').val()),2));
    FGF1103_78_F($('#GF1103_78_F'));
    $('#GF1103_80_E').val(getNumToString(getStrFloat($('#GF1103_80_F').val())+getStrFloat($('#GF1103_80_G').val())+getStrFloat($('#GF1103_80_H').val()),2));
    FGF1103_80_E($('#GF1103_80_E'));
}

/*GF1103_80_G*/
function FGF1103_80_G(obj){
    showStr(obj);
    $('#GF1103_78_G').val(getNumToString(getStrFloat($('#GF1103_79_G').val())+getStrFloat($('#GF1103_80_G').val())+getStrFloat($('#GF1103_81_G').val()),2));
    FGF1103_78_G($('#GF1103_78_G'));
    $('#GF1103_80_E').val(getNumToString(getStrFloat($('#GF1103_80_F').val())+getStrFloat($('#GF1103_80_G').val())+getStrFloat($('#GF1103_80_H').val()),2));
    FGF1103_80_E($('#GF1103_80_E'));
}

/*GF1103_80_H*/
function FGF1103_80_H(obj){
    showStr(obj);
    $('#GF1103_78_H').val(getNumToString(getStrFloat($('#GF1103_79_H').val())+getStrFloat($('#GF1103_80_H').val())+getStrFloat($('#GF1103_81_H').val()),2));
    FGF1103_78_H($('#GF1103_78_H'));
    $('#GF1103_80_E').val(getNumToString(getStrFloat($('#GF1103_80_F').val())+getStrFloat($('#GF1103_80_G').val())+getStrFloat($('#GF1103_80_H').val()),2));
    FGF1103_80_E($('#GF1103_80_E'));
}

/*GF1103_81_A*/
function FGF1103_81_A(obj){
    showStr(obj);
    $('#GF1103_81_A').val(getNumToString(getStrFloat($('#GF1103_81_B').val())+getStrFloat($('#GF1103_81_E').val()),2));
}

/*GF1103_81_B*/
function FGF1103_81_B(obj){
    showStr(obj);
    $('#GF1103_81_A').val(getNumToString(getStrFloat($('#GF1103_81_B').val())+getStrFloat($('#GF1103_81_E').val()),2));
    FGF1103_81_A($('#GF1103_81_A'));
    $('#GF1103_81_B').val(getNumToString(getStrFloat($('#GF1103_81_C').val())+getStrFloat($('#GF1103_81_D').val()),2));
}

/*GF1103_81_C*/
function FGF1103_81_C(obj){
    showStr(obj);
    $('#GF1103_78_C').val(getNumToString(getStrFloat($('#GF1103_79_C').val())+getStrFloat($('#GF1103_80_C').val())+getStrFloat($('#GF1103_81_C').val()),2));
    FGF1103_78_C($('#GF1103_78_C'));
    $('#GF1103_81_B').val(getNumToString(getStrFloat($('#GF1103_81_C').val())+getStrFloat($('#GF1103_81_D').val()),2));
    FGF1103_81_B($('#GF1103_81_B'));
}

/*GF1103_81_D*/
function FGF1103_81_D(obj){
    showStr(obj);
    $('#GF1103_78_D').val(getNumToString(getStrFloat($('#GF1103_79_D').val())+getStrFloat($('#GF1103_80_D').val())+getStrFloat($('#GF1103_81_D').val()),2));
    FGF1103_78_D($('#GF1103_78_D'));
    $('#GF1103_81_B').val(getNumToString(getStrFloat($('#GF1103_81_C').val())+getStrFloat($('#GF1103_81_D').val()),2));
    FGF1103_81_B($('#GF1103_81_B'));
}

/*GF1103_81_E*/
function FGF1103_81_E(obj){
    showStr(obj);
    $('#GF1103_81_A').val(getNumToString(getStrFloat($('#GF1103_81_B').val())+getStrFloat($('#GF1103_81_E').val()),2));
    FGF1103_81_A($('#GF1103_81_A'));
    $('#GF1103_81_E').val(getNumToString(getStrFloat($('#GF1103_81_F').val())+getStrFloat($('#GF1103_81_G').val())+getStrFloat($('#GF1103_81_H').val()),2));
}

/*GF1103_81_F*/
function FGF1103_81_F(obj){
    showStr(obj);
    $('#GF1103_78_F').val(getNumToString(getStrFloat($('#GF1103_79_F').val())+getStrFloat($('#GF1103_80_F').val())+getStrFloat($('#GF1103_81_F').val()),2));
    FGF1103_78_F($('#GF1103_78_F'));
    $('#GF1103_81_E').val(getNumToString(getStrFloat($('#GF1103_81_F').val())+getStrFloat($('#GF1103_81_G').val())+getStrFloat($('#GF1103_81_H').val()),2));
    FGF1103_81_E($('#GF1103_81_E'));
}

/*GF1103_81_G*/
function FGF1103_81_G(obj){
    showStr(obj);
    $('#GF1103_78_G').val(getNumToString(getStrFloat($('#GF1103_79_G').val())+getStrFloat($('#GF1103_80_G').val())+getStrFloat($('#GF1103_81_G').val()),2));
    FGF1103_78_G($('#GF1103_78_G'));
    $('#GF1103_81_E').val(getNumToString(getStrFloat($('#GF1103_81_F').val())+getStrFloat($('#GF1103_81_G').val())+getStrFloat($('#GF1103_81_H').val()),2));
    FGF1103_81_E($('#GF1103_81_E'));
}

/*GF1103_81_H*/
function FGF1103_81_H(obj){
    showStr(obj);
    $('#GF1103_78_H').val(getNumToString(getStrFloat($('#GF1103_79_H').val())+getStrFloat($('#GF1103_80_H').val())+getStrFloat($('#GF1103_81_H').val()),2));
    FGF1103_78_H($('#GF1103_78_H'));
    $('#GF1103_81_E').val(getNumToString(getStrFloat($('#GF1103_81_F').val())+getStrFloat($('#GF1103_81_G').val())+getStrFloat($('#GF1103_81_H').val()),2));
    FGF1103_81_E($('#GF1103_81_E'));
}

/*GF1103_82_A*/
function FGF1103_82_A(obj){
    showStr(obj);
    $('#GF1103_82_A').val(getNumToString(getStrFloat($('#GF1103_82_B').val())+getStrFloat($('#GF1103_82_E').val()),2));
}

/*GF1103_82_B*/
function FGF1103_82_B(obj){
    showStr(obj);
    $('#GF1103_82_A').val(getNumToString(getStrFloat($('#GF1103_82_B').val())+getStrFloat($('#GF1103_82_E').val()),2));
    FGF1103_82_A($('#GF1103_82_A'));
    $('#GF1103_82_B').val(getNumToString(getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_82_D').val()),2));
}

/*GF1103_82_C*/
function FGF1103_82_C(obj){
    showStr(obj);
    $('#GF1103_82_B').val(getNumToString(getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_82_D').val()),2));
    FGF1103_82_B($('#GF1103_82_B'));
    $('#GF1103_82_C').val(getNumToString(getStrFloat($('#GF1103_83_C').val())+getStrFloat($('#GF1103_84_C').val())+getStrFloat($('#GF1103_85_C').val())+getStrFloat($('#GF1103_86_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_82_D*/
function FGF1103_82_D(obj){
    showStr(obj);
    $('#GF1103_82_B').val(getNumToString(getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_82_D').val()),2));
    FGF1103_82_B($('#GF1103_82_B'));
    $('#GF1103_82_D').val(getNumToString(getStrFloat($('#GF1103_83_D').val())+getStrFloat($('#GF1103_84_D').val())+getStrFloat($('#GF1103_85_D').val())+getStrFloat($('#GF1103_86_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_82_E*/
function FGF1103_82_E(obj){
    showStr(obj);
    $('#GF1103_82_A').val(getNumToString(getStrFloat($('#GF1103_82_B').val())+getStrFloat($('#GF1103_82_E').val()),2));
    FGF1103_82_A($('#GF1103_82_A'));
    $('#GF1103_82_E').val(getNumToString(getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_82_H').val()),2));
}

/*GF1103_82_F*/
function FGF1103_82_F(obj){
    showStr(obj);
    $('#GF1103_82_E').val(getNumToString(getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_82_H').val()),2));
    FGF1103_82_E($('#GF1103_82_E'));
    $('#GF1103_82_F').val(getNumToString(getStrFloat($('#GF1103_83_F').val())+getStrFloat($('#GF1103_84_F').val())+getStrFloat($('#GF1103_85_F').val())+getStrFloat($('#GF1103_86_F').val()),2));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
}

/*GF1103_82_G*/
function FGF1103_82_G(obj){
    showStr(obj);
    $('#GF1103_82_E').val(getNumToString(getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_82_H').val()),2));
    FGF1103_82_E($('#GF1103_82_E'));
    $('#GF1103_82_G').val(getNumToString(getStrFloat($('#GF1103_83_G').val())+getStrFloat($('#GF1103_84_G').val())+getStrFloat($('#GF1103_85_G').val())+getStrFloat($('#GF1103_86_G').val()),2));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_82_H*/
function FGF1103_82_H(obj){
    showStr(obj);
    $('#GF1103_82_E').val(getNumToString(getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_82_H').val()),2));
    FGF1103_82_E($('#GF1103_82_E'));
    $('#GF1103_82_H').val(getNumToString(getStrFloat($('#GF1103_83_H').val())+getStrFloat($('#GF1103_84_H').val())+getStrFloat($('#GF1103_85_H').val())+getStrFloat($('#GF1103_86_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_83_A*/
function FGF1103_83_A(obj){
    showStr(obj);
    $('#GF1103_83_A').val(getNumToString(getStrFloat($('#GF1103_83_B').val())+getStrFloat($('#GF1103_83_E').val()),2));
}

/*GF1103_83_B*/
function FGF1103_83_B(obj){
    showStr(obj);
    $('#GF1103_83_A').val(getNumToString(getStrFloat($('#GF1103_83_B').val())+getStrFloat($('#GF1103_83_E').val()),2));
    FGF1103_83_A($('#GF1103_83_A'));
    $('#GF1103_83_B').val(getNumToString(getStrFloat($('#GF1103_83_C').val())+getStrFloat($('#GF1103_83_D').val()),2));
}

/*GF1103_83_C*/
function FGF1103_83_C(obj){
    showStr(obj);
    $('#GF1103_82_C').val(getNumToString(getStrFloat($('#GF1103_83_C').val())+getStrFloat($('#GF1103_84_C').val())+getStrFloat($('#GF1103_85_C').val())+getStrFloat($('#GF1103_86_C').val()),2));
    FGF1103_82_C($('#GF1103_82_C'));
    $('#GF1103_83_B').val(getNumToString(getStrFloat($('#GF1103_83_C').val())+getStrFloat($('#GF1103_83_D').val()),2));
    FGF1103_83_B($('#GF1103_83_B'));
}

/*GF1103_83_D*/
function FGF1103_83_D(obj){
    showStr(obj);
    $('#GF1103_82_D').val(getNumToString(getStrFloat($('#GF1103_83_D').val())+getStrFloat($('#GF1103_84_D').val())+getStrFloat($('#GF1103_85_D').val())+getStrFloat($('#GF1103_86_D').val()),2));
    FGF1103_82_D($('#GF1103_82_D'));
    $('#GF1103_83_B').val(getNumToString(getStrFloat($('#GF1103_83_C').val())+getStrFloat($('#GF1103_83_D').val()),2));
    FGF1103_83_B($('#GF1103_83_B'));
}

/*GF1103_83_E*/
function FGF1103_83_E(obj){
    showStr(obj);
    $('#GF1103_83_A').val(getNumToString(getStrFloat($('#GF1103_83_B').val())+getStrFloat($('#GF1103_83_E').val()),2));
    FGF1103_83_A($('#GF1103_83_A'));
    $('#GF1103_83_E').val(getNumToString(getStrFloat($('#GF1103_83_F').val())+getStrFloat($('#GF1103_83_G').val())+getStrFloat($('#GF1103_83_H').val()),2));
}

/*GF1103_83_F*/
function FGF1103_83_F(obj){
    showStr(obj);
    $('#GF1103_82_F').val(getNumToString(getStrFloat($('#GF1103_83_F').val())+getStrFloat($('#GF1103_84_F').val())+getStrFloat($('#GF1103_85_F').val())+getStrFloat($('#GF1103_86_F').val()),2));
    FGF1103_82_F($('#GF1103_82_F'));
    $('#GF1103_83_E').val(getNumToString(getStrFloat($('#GF1103_83_F').val())+getStrFloat($('#GF1103_83_G').val())+getStrFloat($('#GF1103_83_H').val()),2));
    FGF1103_83_E($('#GF1103_83_E'));
}

/*GF1103_83_G*/
function FGF1103_83_G(obj){
    showStr(obj);
    $('#GF1103_82_G').val(getNumToString(getStrFloat($('#GF1103_83_G').val())+getStrFloat($('#GF1103_84_G').val())+getStrFloat($('#GF1103_85_G').val())+getStrFloat($('#GF1103_86_G').val()),2));
    FGF1103_82_G($('#GF1103_82_G'));
    $('#GF1103_83_E').val(getNumToString(getStrFloat($('#GF1103_83_F').val())+getStrFloat($('#GF1103_83_G').val())+getStrFloat($('#GF1103_83_H').val()),2));
    FGF1103_83_E($('#GF1103_83_E'));
}

/*GF1103_83_H*/
function FGF1103_83_H(obj){
    showStr(obj);
    $('#GF1103_82_H').val(getNumToString(getStrFloat($('#GF1103_83_H').val())+getStrFloat($('#GF1103_84_H').val())+getStrFloat($('#GF1103_85_H').val())+getStrFloat($('#GF1103_86_H').val()),2));
    FGF1103_82_H($('#GF1103_82_H'));
    $('#GF1103_83_E').val(getNumToString(getStrFloat($('#GF1103_83_F').val())+getStrFloat($('#GF1103_83_G').val())+getStrFloat($('#GF1103_83_H').val()),2));
    FGF1103_83_E($('#GF1103_83_E'));
}

/*GF1103_84_A*/
function FGF1103_84_A(obj){
    showStr(obj);
    $('#GF1103_84_A').val(getNumToString(getStrFloat($('#GF1103_84_B').val())+getStrFloat($('#GF1103_84_E').val()),2));
}

/*GF1103_84_B*/
function FGF1103_84_B(obj){
    showStr(obj);
    $('#GF1103_84_A').val(getNumToString(getStrFloat($('#GF1103_84_B').val())+getStrFloat($('#GF1103_84_E').val()),2));
    FGF1103_84_A($('#GF1103_84_A'));
    $('#GF1103_84_B').val(getNumToString(getStrFloat($('#GF1103_84_C').val())+getStrFloat($('#GF1103_84_D').val()),2));
}

/*GF1103_84_C*/
function FGF1103_84_C(obj){
    showStr(obj);
    $('#GF1103_82_C').val(getNumToString(getStrFloat($('#GF1103_83_C').val())+getStrFloat($('#GF1103_84_C').val())+getStrFloat($('#GF1103_85_C').val())+getStrFloat($('#GF1103_86_C').val()),2));
    FGF1103_82_C($('#GF1103_82_C'));
    $('#GF1103_84_B').val(getNumToString(getStrFloat($('#GF1103_84_C').val())+getStrFloat($('#GF1103_84_D').val()),2));
    FGF1103_84_B($('#GF1103_84_B'));
}

/*GF1103_84_D*/
function FGF1103_84_D(obj){
    showStr(obj);
    $('#GF1103_82_D').val(getNumToString(getStrFloat($('#GF1103_83_D').val())+getStrFloat($('#GF1103_84_D').val())+getStrFloat($('#GF1103_85_D').val())+getStrFloat($('#GF1103_86_D').val()),2));
    FGF1103_82_D($('#GF1103_82_D'));
    $('#GF1103_84_B').val(getNumToString(getStrFloat($('#GF1103_84_C').val())+getStrFloat($('#GF1103_84_D').val()),2));
    FGF1103_84_B($('#GF1103_84_B'));
}

/*GF1103_84_E*/
function FGF1103_84_E(obj){
    showStr(obj);
    $('#GF1103_84_A').val(getNumToString(getStrFloat($('#GF1103_84_B').val())+getStrFloat($('#GF1103_84_E').val()),2));
    FGF1103_84_A($('#GF1103_84_A'));
    $('#GF1103_84_E').val(getNumToString(getStrFloat($('#GF1103_84_F').val())+getStrFloat($('#GF1103_84_G').val())+getStrFloat($('#GF1103_84_H').val()),2));
}

/*GF1103_84_F*/
function FGF1103_84_F(obj){
    showStr(obj);
    $('#GF1103_82_F').val(getNumToString(getStrFloat($('#GF1103_83_F').val())+getStrFloat($('#GF1103_84_F').val())+getStrFloat($('#GF1103_85_F').val())+getStrFloat($('#GF1103_86_F').val()),2));
    FGF1103_82_F($('#GF1103_82_F'));
    $('#GF1103_84_E').val(getNumToString(getStrFloat($('#GF1103_84_F').val())+getStrFloat($('#GF1103_84_G').val())+getStrFloat($('#GF1103_84_H').val()),2));
    FGF1103_84_E($('#GF1103_84_E'));
}

/*GF1103_84_G*/
function FGF1103_84_G(obj){
    showStr(obj);
    $('#GF1103_82_G').val(getNumToString(getStrFloat($('#GF1103_83_G').val())+getStrFloat($('#GF1103_84_G').val())+getStrFloat($('#GF1103_85_G').val())+getStrFloat($('#GF1103_86_G').val()),2));
    FGF1103_82_G($('#GF1103_82_G'));
    $('#GF1103_84_E').val(getNumToString(getStrFloat($('#GF1103_84_F').val())+getStrFloat($('#GF1103_84_G').val())+getStrFloat($('#GF1103_84_H').val()),2));
    FGF1103_84_E($('#GF1103_84_E'));
}

/*GF1103_84_H*/
function FGF1103_84_H(obj){
    showStr(obj);
    $('#GF1103_82_H').val(getNumToString(getStrFloat($('#GF1103_83_H').val())+getStrFloat($('#GF1103_84_H').val())+getStrFloat($('#GF1103_85_H').val())+getStrFloat($('#GF1103_86_H').val()),2));
    FGF1103_82_H($('#GF1103_82_H'));
    $('#GF1103_84_E').val(getNumToString(getStrFloat($('#GF1103_84_F').val())+getStrFloat($('#GF1103_84_G').val())+getStrFloat($('#GF1103_84_H').val()),2));
    FGF1103_84_E($('#GF1103_84_E'));
}

/*GF1103_85_A*/
function FGF1103_85_A(obj){
    showStr(obj);
    $('#GF1103_85_A').val(getNumToString(getStrFloat($('#GF1103_85_B').val())+getStrFloat($('#GF1103_85_E').val()),2));
}

/*GF1103_85_B*/
function FGF1103_85_B(obj){
    showStr(obj);
    $('#GF1103_85_A').val(getNumToString(getStrFloat($('#GF1103_85_B').val())+getStrFloat($('#GF1103_85_E').val()),2));
    FGF1103_85_A($('#GF1103_85_A'));
    $('#GF1103_85_B').val(getNumToString(getStrFloat($('#GF1103_85_C').val())+getStrFloat($('#GF1103_85_D').val()),2));
}

/*GF1103_85_C*/
function FGF1103_85_C(obj){
    showStr(obj);
    $('#GF1103_82_C').val(getNumToString(getStrFloat($('#GF1103_83_C').val())+getStrFloat($('#GF1103_84_C').val())+getStrFloat($('#GF1103_85_C').val())+getStrFloat($('#GF1103_86_C').val()),2));
    FGF1103_82_C($('#GF1103_82_C'));
    $('#GF1103_85_B').val(getNumToString(getStrFloat($('#GF1103_85_C').val())+getStrFloat($('#GF1103_85_D').val()),2));
    FGF1103_85_B($('#GF1103_85_B'));
}

/*GF1103_85_D*/
function FGF1103_85_D(obj){
    showStr(obj);
    $('#GF1103_82_D').val(getNumToString(getStrFloat($('#GF1103_83_D').val())+getStrFloat($('#GF1103_84_D').val())+getStrFloat($('#GF1103_85_D').val())+getStrFloat($('#GF1103_86_D').val()),2));
    FGF1103_82_D($('#GF1103_82_D'));
    $('#GF1103_85_B').val(getNumToString(getStrFloat($('#GF1103_85_C').val())+getStrFloat($('#GF1103_85_D').val()),2));
    FGF1103_85_B($('#GF1103_85_B'));
}

/*GF1103_85_E*/
function FGF1103_85_E(obj){
    showStr(obj);
    $('#GF1103_85_A').val(getNumToString(getStrFloat($('#GF1103_85_B').val())+getStrFloat($('#GF1103_85_E').val()),2));
    FGF1103_85_A($('#GF1103_85_A'));
    $('#GF1103_85_E').val(getNumToString(getStrFloat($('#GF1103_85_F').val())+getStrFloat($('#GF1103_85_G').val())+getStrFloat($('#GF1103_85_H').val()),2));
}

/*GF1103_85_F*/
function FGF1103_85_F(obj){
    showStr(obj);
    $('#GF1103_82_F').val(getNumToString(getStrFloat($('#GF1103_83_F').val())+getStrFloat($('#GF1103_84_F').val())+getStrFloat($('#GF1103_85_F').val())+getStrFloat($('#GF1103_86_F').val()),2));
    FGF1103_82_F($('#GF1103_82_F'));
    $('#GF1103_85_E').val(getNumToString(getStrFloat($('#GF1103_85_F').val())+getStrFloat($('#GF1103_85_G').val())+getStrFloat($('#GF1103_85_H').val()),2));
    FGF1103_85_E($('#GF1103_85_E'));
}

/*GF1103_85_G*/
function FGF1103_85_G(obj){
    showStr(obj);
    $('#GF1103_82_G').val(getNumToString(getStrFloat($('#GF1103_83_G').val())+getStrFloat($('#GF1103_84_G').val())+getStrFloat($('#GF1103_85_G').val())+getStrFloat($('#GF1103_86_G').val()),2));
    FGF1103_82_G($('#GF1103_82_G'));
    $('#GF1103_85_E').val(getNumToString(getStrFloat($('#GF1103_85_F').val())+getStrFloat($('#GF1103_85_G').val())+getStrFloat($('#GF1103_85_H').val()),2));
    FGF1103_85_E($('#GF1103_85_E'));
}

/*GF1103_85_H*/
function FGF1103_85_H(obj){
    showStr(obj);
    $('#GF1103_82_H').val(getNumToString(getStrFloat($('#GF1103_83_H').val())+getStrFloat($('#GF1103_84_H').val())+getStrFloat($('#GF1103_85_H').val())+getStrFloat($('#GF1103_86_H').val()),2));
    FGF1103_82_H($('#GF1103_82_H'));
    $('#GF1103_85_E').val(getNumToString(getStrFloat($('#GF1103_85_F').val())+getStrFloat($('#GF1103_85_G').val())+getStrFloat($('#GF1103_85_H').val()),2));
    FGF1103_85_E($('#GF1103_85_E'));
}

/*GF1103_86_A*/
function FGF1103_86_A(obj){
    showStr(obj);
    $('#GF1103_86_A').val(getNumToString(getStrFloat($('#GF1103_86_B').val())+getStrFloat($('#GF1103_86_E').val()),2));
}

/*GF1103_86_B*/
function FGF1103_86_B(obj){
    showStr(obj);
    $('#GF1103_86_A').val(getNumToString(getStrFloat($('#GF1103_86_B').val())+getStrFloat($('#GF1103_86_E').val()),2));
    FGF1103_86_A($('#GF1103_86_A'));
    $('#GF1103_86_B').val(getNumToString(getStrFloat($('#GF1103_86_C').val())+getStrFloat($('#GF1103_86_D').val()),2));
}

/*GF1103_86_C*/
function FGF1103_86_C(obj){
    showStr(obj);
    $('#GF1103_82_C').val(getNumToString(getStrFloat($('#GF1103_83_C').val())+getStrFloat($('#GF1103_84_C').val())+getStrFloat($('#GF1103_85_C').val())+getStrFloat($('#GF1103_86_C').val()),2));
    FGF1103_82_C($('#GF1103_82_C'));
    $('#GF1103_86_B').val(getNumToString(getStrFloat($('#GF1103_86_C').val())+getStrFloat($('#GF1103_86_D').val()),2));
    FGF1103_86_B($('#GF1103_86_B'));
}

/*GF1103_86_D*/
function FGF1103_86_D(obj){
    showStr(obj);
    $('#GF1103_82_D').val(getNumToString(getStrFloat($('#GF1103_83_D').val())+getStrFloat($('#GF1103_84_D').val())+getStrFloat($('#GF1103_85_D').val())+getStrFloat($('#GF1103_86_D').val()),2));
    FGF1103_82_D($('#GF1103_82_D'));
    $('#GF1103_86_B').val(getNumToString(getStrFloat($('#GF1103_86_C').val())+getStrFloat($('#GF1103_86_D').val()),2));
    FGF1103_86_B($('#GF1103_86_B'));
}

/*GF1103_86_E*/
function FGF1103_86_E(obj){
    showStr(obj);
    $('#GF1103_86_A').val(getNumToString(getStrFloat($('#GF1103_86_B').val())+getStrFloat($('#GF1103_86_E').val()),2));
    FGF1103_86_A($('#GF1103_86_A'));
    $('#GF1103_86_E').val(getNumToString(getStrFloat($('#GF1103_86_F').val())+getStrFloat($('#GF1103_86_G').val())+getStrFloat($('#GF1103_86_H').val()),2));
}

/*GF1103_86_F*/
function FGF1103_86_F(obj){
    showStr(obj);
    $('#GF1103_82_F').val(getNumToString(getStrFloat($('#GF1103_83_F').val())+getStrFloat($('#GF1103_84_F').val())+getStrFloat($('#GF1103_85_F').val())+getStrFloat($('#GF1103_86_F').val()),2));
    FGF1103_82_F($('#GF1103_82_F'));
    $('#GF1103_86_E').val(getNumToString(getStrFloat($('#GF1103_86_F').val())+getStrFloat($('#GF1103_86_G').val())+getStrFloat($('#GF1103_86_H').val()),2));
    FGF1103_86_E($('#GF1103_86_E'));
}

/*GF1103_86_G*/
function FGF1103_86_G(obj){
    showStr(obj);
    $('#GF1103_82_G').val(getNumToString(getStrFloat($('#GF1103_83_G').val())+getStrFloat($('#GF1103_84_G').val())+getStrFloat($('#GF1103_85_G').val())+getStrFloat($('#GF1103_86_G').val()),2));
    FGF1103_82_G($('#GF1103_82_G'));
    $('#GF1103_86_E').val(getNumToString(getStrFloat($('#GF1103_86_F').val())+getStrFloat($('#GF1103_86_G').val())+getStrFloat($('#GF1103_86_H').val()),2));
    FGF1103_86_E($('#GF1103_86_E'));
}

/*GF1103_86_H*/
function FGF1103_86_H(obj){
    showStr(obj);
    $('#GF1103_82_H').val(getNumToString(getStrFloat($('#GF1103_83_H').val())+getStrFloat($('#GF1103_84_H').val())+getStrFloat($('#GF1103_85_H').val())+getStrFloat($('#GF1103_86_H').val()),2));
    FGF1103_82_H($('#GF1103_82_H'));
    $('#GF1103_86_E').val(getNumToString(getStrFloat($('#GF1103_86_F').val())+getStrFloat($('#GF1103_86_G').val())+getStrFloat($('#GF1103_86_H').val()),2));
    FGF1103_86_E($('#GF1103_86_E'));
}

/*GF1103_87_A*/
function FGF1103_87_A(obj){
    showStr(obj);
    $('#GF1103_87_A').val(getNumToString(getStrFloat($('#GF1103_87_B').val())+getStrFloat($('#GF1103_87_E').val()),2));
}

/*GF1103_87_B*/
function FGF1103_87_B(obj){
    showStr(obj);
    $('#GF1103_87_A').val(getNumToString(getStrFloat($('#GF1103_87_B').val())+getStrFloat($('#GF1103_87_E').val()),2));
    FGF1103_87_A($('#GF1103_87_A'));
    $('#GF1103_87_B').val(getNumToString(getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_87_D').val()),2));
}

/*GF1103_87_C*/
function FGF1103_87_C(obj){
    showStr(obj);
    $('#GF1103_87_B').val(getNumToString(getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_87_D').val()),2));
    FGF1103_87_B($('#GF1103_87_B'));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
    $('#GF1103_87_C').val(getNumToString(getStrFloat($('#GF1103_88_C').val()),2));
}

/*GF1103_87_D*/
function FGF1103_87_D(obj){
    showStr(obj);
    $('#GF1103_87_B').val(getNumToString(getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_87_D').val()),2));
    FGF1103_87_B($('#GF1103_87_B'));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
    $('#GF1103_87_D').val(getNumToString(getStrFloat($('#GF1103_88_D').val()),2));
}

/*GF1103_87_E*/
function FGF1103_87_E(obj){
    showStr(obj);
    $('#GF1103_87_A').val(getNumToString(getStrFloat($('#GF1103_87_B').val())+getStrFloat($('#GF1103_87_E').val()),2));
    FGF1103_87_A($('#GF1103_87_A'));
    $('#GF1103_87_E').val(getNumToString(getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_87_H').val()),2));
}

/*GF1103_87_F*/
function FGF1103_87_F(obj){
    showStr(obj);
    $('#GF1103_87_E').val(getNumToString(getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_87_H').val()),2));
    FGF1103_87_E($('#GF1103_87_E'));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
    $('#GF1103_87_F').val(getNumToString(getStrFloat($('#GF1103_88_F').val()),2));
}

/*GF1103_87_G*/
function FGF1103_87_G(obj){
    showStr(obj);
    $('#GF1103_87_E').val(getNumToString(getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_87_H').val()),2));
    FGF1103_87_E($('#GF1103_87_E'));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
    $('#GF1103_87_G').val(getNumToString(getStrFloat($('#GF1103_88_G').val()),2));
}

/*GF1103_87_H*/
function FGF1103_87_H(obj){
    showStr(obj);
    $('#GF1103_87_E').val(getNumToString(getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_87_H').val()),2));
    FGF1103_87_E($('#GF1103_87_E'));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
    $('#GF1103_87_H').val(getNumToString(getStrFloat($('#GF1103_88_H').val()),2));
}

/*GF1103_88_A*/
function FGF1103_88_A(obj){
    showStr(obj);
    $('#GF1103_88_A').val(getNumToString(getStrFloat($('#GF1103_88_B').val())+getStrFloat($('#GF1103_88_E').val()),2));
}

/*GF1103_88_B*/
function FGF1103_88_B(obj){
    showStr(obj);
    $('#GF1103_88_B').val(getNumToString(getStrFloat($('#GF1103_88_C').val())+getStrFloat($('#GF1103_88_D').val()),2));
    $('#GF1103_88_A').val(getNumToString(getStrFloat($('#GF1103_88_B').val())+getStrFloat($('#GF1103_88_E').val()),2));
    FGF1103_88_A($('#GF1103_88_A'));
}

/*GF1103_88_C*/
function FGF1103_88_C(obj){
    showStr(obj);
    $('#GF1103_88_B').val(getNumToString(getStrFloat($('#GF1103_88_C').val())+getStrFloat($('#GF1103_88_D').val()),2));
    FGF1103_88_B($('#GF1103_88_B'));
    $('#GF1103_87_C').val(getNumToString(getStrFloat($('#GF1103_88_C').val()),2));
    FGF1103_87_C($('#GF1103_87_C'));
}

/*GF1103_88_D*/
function FGF1103_88_D(obj){
    showStr(obj);
    $('#GF1103_88_B').val(getNumToString(getStrFloat($('#GF1103_88_C').val())+getStrFloat($('#GF1103_88_D').val()),2));
    FGF1103_88_B($('#GF1103_88_B'));
    $('#GF1103_87_D').val(getNumToString(getStrFloat($('#GF1103_88_D').val()),2));
    FGF1103_87_D($('#GF1103_87_D'));
}

/*GF1103_88_E*/
function FGF1103_88_E(obj){
    showStr(obj);
    $('#GF1103_88_A').val(getNumToString(getStrFloat($('#GF1103_88_B').val())+getStrFloat($('#GF1103_88_E').val()),2));
    FGF1103_88_A($('#GF1103_88_A'));
    $('#GF1103_88_E').val(getNumToString(getStrFloat($('#GF1103_88_F').val())+getStrFloat($('#GF1103_88_G').val())+getStrFloat($('#GF1103_88_H').val()),2));
}

/*GF1103_88_F*/
function FGF1103_88_F(obj){
    showStr(obj);
    $('#GF1103_88_E').val(getNumToString(getStrFloat($('#GF1103_88_F').val())+getStrFloat($('#GF1103_88_G').val())+getStrFloat($('#GF1103_88_H').val()),2));
    FGF1103_88_E($('#GF1103_88_E'));
    $('#GF1103_87_F').val(getNumToString(getStrFloat($('#GF1103_88_F').val()),2));
    FGF1103_87_F($('#GF1103_87_F'));
}

/*GF1103_88_G*/
function FGF1103_88_G(obj){
    showStr(obj);
    $('#GF1103_88_E').val(getNumToString(getStrFloat($('#GF1103_88_F').val())+getStrFloat($('#GF1103_88_G').val())+getStrFloat($('#GF1103_88_H').val()),2));
    FGF1103_88_E($('#GF1103_88_E'));
    $('#GF1103_87_G').val(getNumToString(getStrFloat($('#GF1103_88_G').val()),2));
    FGF1103_87_G($('#GF1103_87_G'));
}

/*GF1103_88_H*/
function FGF1103_88_H(obj){
    showStr(obj);
    $('#GF1103_88_E').val(getNumToString(getStrFloat($('#GF1103_88_F').val())+getStrFloat($('#GF1103_88_G').val())+getStrFloat($('#GF1103_88_H').val()),2));
    FGF1103_88_E($('#GF1103_88_E'));
    $('#GF1103_87_H').val(getNumToString(getStrFloat($('#GF1103_88_H').val()),2));
    FGF1103_87_H($('#GF1103_87_H'));
}

/*GF1103_89_A*/
function FGF1103_89_A(obj){
    showStr(obj);
    $('#GF1103_89_A').val(getNumToString(getStrFloat($('#GF1103_89_B').val())+getStrFloat($('#GF1103_89_E').val()),2));
}

/*GF1103_89_B*/
function FGF1103_89_B(obj){
    showStr(obj);
    $('#GF1103_89_A').val(getNumToString(getStrFloat($('#GF1103_89_B').val())+getStrFloat($('#GF1103_89_E').val()),2));
    FGF1103_89_A($('#GF1103_89_A'));
    $('#GF1103_89_B').val(getNumToString(getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_89_D').val()),2));
}

/*GF1103_89_C*/
function FGF1103_89_C(obj){
    showStr(obj);
    $('#GF1103_89_B').val(getNumToString(getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_89_D').val()),2));
    FGF1103_89_B($('#GF1103_89_B'));
    $('#GF1103_89_C').val(getNumToString(getStrFloat($('#GF1103_90_C').val())+getStrFloat($('#GF1103_91_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_89_D*/
function FGF1103_89_D(obj){
    showStr(obj);
    $('#GF1103_89_B').val(getNumToString(getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_89_D').val()),2));
    FGF1103_89_B($('#GF1103_89_B'));
    $('#GF1103_89_D').val(getNumToString(getStrFloat($('#GF1103_90_D').val())+getStrFloat($('#GF1103_91_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_89_E*/
function FGF1103_89_E(obj){
    showStr(obj);
    $('#GF1103_89_A').val(getNumToString(getStrFloat($('#GF1103_89_B').val())+getStrFloat($('#GF1103_89_E').val()),2));
    FGF1103_89_A($('#GF1103_89_A'));
    $('#GF1103_89_E').val(getNumToString(getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_89_H').val()),2));
}

/*GF1103_89_F*/
function FGF1103_89_F(obj){
    showStr(obj);
    $('#GF1103_89_E').val(getNumToString(getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_89_H').val()),2));
    FGF1103_89_E($('#GF1103_89_E'));
    $('#GF1103_89_F').val(getNumToString(getStrFloat($('#GF1103_90_F').val())+getStrFloat($('#GF1103_91_F').val()),2));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
}

/*GF1103_89_G*/
function FGF1103_89_G(obj){
    showStr(obj);
    $('#GF1103_89_E').val(getNumToString(getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_89_H').val()),2));
    FGF1103_89_E($('#GF1103_89_E'));
    $('#GF1103_89_G').val(getNumToString(getStrFloat($('#GF1103_90_G').val())+getStrFloat($('#GF1103_91_G').val()),2));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_89_H*/
function FGF1103_89_H(obj){
    showStr(obj);
    $('#GF1103_89_E').val(getNumToString(getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_89_H').val()),2));
    FGF1103_89_E($('#GF1103_89_E'));
    $('#GF1103_89_H').val(getNumToString(getStrFloat($('#GF1103_90_H').val())+getStrFloat($('#GF1103_91_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_90_A*/
function FGF1103_90_A(obj){
    showStr(obj);
    $('#GF1103_90_A').val(getNumToString(getStrFloat($('#GF1103_90_B').val())+getStrFloat($('#GF1103_90_E').val()),2));
}

/*GF1103_90_B*/
function FGF1103_90_B(obj){
    showStr(obj);
    $('#GF1103_90_A').val(getNumToString(getStrFloat($('#GF1103_90_B').val())+getStrFloat($('#GF1103_90_E').val()),2));
    FGF1103_90_A($('#GF1103_90_A'));
    $('#GF1103_90_B').val(getNumToString(getStrFloat($('#GF1103_90_C').val())+getStrFloat($('#GF1103_90_D').val()),2));
}

/*GF1103_90_C*/
function FGF1103_90_C(obj){
    showStr(obj);
    $('#GF1103_89_C').val(getNumToString(getStrFloat($('#GF1103_90_C').val())+getStrFloat($('#GF1103_91_C').val()),2));
    FGF1103_89_C($('#GF1103_89_C'));
    $('#GF1103_90_B').val(getNumToString(getStrFloat($('#GF1103_90_C').val())+getStrFloat($('#GF1103_90_D').val()),2));
    FGF1103_90_B($('#GF1103_90_B'));
}

/*GF1103_90_D*/
function FGF1103_90_D(obj){
    showStr(obj);
    $('#GF1103_89_D').val(getNumToString(getStrFloat($('#GF1103_90_D').val())+getStrFloat($('#GF1103_91_D').val()),2));
    FGF1103_89_D($('#GF1103_89_D'));
    $('#GF1103_90_B').val(getNumToString(getStrFloat($('#GF1103_90_C').val())+getStrFloat($('#GF1103_90_D').val()),2));
    FGF1103_90_B($('#GF1103_90_B'));
}

/*GF1103_90_E*/
function FGF1103_90_E(obj){
    showStr(obj);
    $('#GF1103_90_A').val(getNumToString(getStrFloat($('#GF1103_90_B').val())+getStrFloat($('#GF1103_90_E').val()),2));
    FGF1103_90_A($('#GF1103_90_A'));
    $('#GF1103_90_E').val(getNumToString(getStrFloat($('#GF1103_90_F').val())+getStrFloat($('#GF1103_90_G').val())+getStrFloat($('#GF1103_90_H').val()),2));
}

/*GF1103_90_F*/
function FGF1103_90_F(obj){
    showStr(obj);
    $('#GF1103_89_F').val(getNumToString(getStrFloat($('#GF1103_90_F').val())+getStrFloat($('#GF1103_91_F').val()),2));
    FGF1103_89_F($('#GF1103_89_F'));
    $('#GF1103_90_E').val(getNumToString(getStrFloat($('#GF1103_90_F').val())+getStrFloat($('#GF1103_90_G').val())+getStrFloat($('#GF1103_90_H').val()),2));
    FGF1103_90_E($('#GF1103_90_E'));
}

/*GF1103_90_G*/
function FGF1103_90_G(obj){
    showStr(obj);
    $('#GF1103_89_G').val(getNumToString(getStrFloat($('#GF1103_90_G').val())+getStrFloat($('#GF1103_91_G').val()),2));
    FGF1103_89_G($('#GF1103_89_G'));
    $('#GF1103_90_E').val(getNumToString(getStrFloat($('#GF1103_90_F').val())+getStrFloat($('#GF1103_90_G').val())+getStrFloat($('#GF1103_90_H').val()),2));
    FGF1103_90_E($('#GF1103_90_E'));
}

/*GF1103_90_H*/
function FGF1103_90_H(obj){
    showStr(obj);
    $('#GF1103_89_H').val(getNumToString(getStrFloat($('#GF1103_90_H').val())+getStrFloat($('#GF1103_91_H').val()),2));
    FGF1103_89_H($('#GF1103_89_H'));
    $('#GF1103_90_E').val(getNumToString(getStrFloat($('#GF1103_90_F').val())+getStrFloat($('#GF1103_90_G').val())+getStrFloat($('#GF1103_90_H').val()),2));
    FGF1103_90_E($('#GF1103_90_E'));
}

/*GF1103_91_A*/
function FGF1103_91_A(obj){
    showStr(obj);
    $('#GF1103_91_A').val(getNumToString(getStrFloat($('#GF1103_91_B').val())+getStrFloat($('#GF1103_91_E').val()),2));
}

/*GF1103_91_B*/
function FGF1103_91_B(obj){
    showStr(obj);
    $('#GF1103_91_A').val(getNumToString(getStrFloat($('#GF1103_91_B').val())+getStrFloat($('#GF1103_91_E').val()),2));
    FGF1103_91_A($('#GF1103_91_A'));
    $('#GF1103_91_B').val(getNumToString(getStrFloat($('#GF1103_91_C').val())+getStrFloat($('#GF1103_91_D').val()),2));
}

/*GF1103_91_C*/
function FGF1103_91_C(obj){
    showStr(obj);
    $('#GF1103_89_C').val(getNumToString(getStrFloat($('#GF1103_90_C').val())+getStrFloat($('#GF1103_91_C').val()),2));
    FGF1103_89_C($('#GF1103_89_C'));
    $('#GF1103_91_B').val(getNumToString(getStrFloat($('#GF1103_91_C').val())+getStrFloat($('#GF1103_91_D').val()),2));
    FGF1103_91_B($('#GF1103_91_B'));
}

/*GF1103_91_D*/
function FGF1103_91_D(obj){
    showStr(obj);
    $('#GF1103_89_D').val(getNumToString(getStrFloat($('#GF1103_90_D').val())+getStrFloat($('#GF1103_91_D').val()),2));
    FGF1103_89_D($('#GF1103_89_D'));
    $('#GF1103_91_B').val(getNumToString(getStrFloat($('#GF1103_91_C').val())+getStrFloat($('#GF1103_91_D').val()),2));
    FGF1103_91_B($('#GF1103_91_B'));
}

/*GF1103_91_E*/
function FGF1103_91_E(obj){
    showStr(obj);
    $('#GF1103_91_A').val(getNumToString(getStrFloat($('#GF1103_91_B').val())+getStrFloat($('#GF1103_91_E').val()),2));
    FGF1103_91_A($('#GF1103_91_A'));
    $('#GF1103_91_E').val(getNumToString(getStrFloat($('#GF1103_91_F').val())+getStrFloat($('#GF1103_91_G').val())+getStrFloat($('#GF1103_91_H').val()),2));
}

/*GF1103_91_F*/
function FGF1103_91_F(obj){
    showStr(obj);
    $('#GF1103_89_F').val(getNumToString(getStrFloat($('#GF1103_90_F').val())+getStrFloat($('#GF1103_91_F').val()),2));
    FGF1103_89_F($('#GF1103_89_F'));
    $('#GF1103_91_E').val(getNumToString(getStrFloat($('#GF1103_91_F').val())+getStrFloat($('#GF1103_91_G').val())+getStrFloat($('#GF1103_91_H').val()),2));
    FGF1103_91_E($('#GF1103_91_E'));
}

/*GF1103_91_G*/
function FGF1103_91_G(obj){
    showStr(obj);
    $('#GF1103_89_G').val(getNumToString(getStrFloat($('#GF1103_90_G').val())+getStrFloat($('#GF1103_91_G').val()),2));
    FGF1103_89_G($('#GF1103_89_G'));
    $('#GF1103_91_E').val(getNumToString(getStrFloat($('#GF1103_91_F').val())+getStrFloat($('#GF1103_91_G').val())+getStrFloat($('#GF1103_91_H').val()),2));
    FGF1103_91_E($('#GF1103_91_E'));
}

/*GF1103_91_H*/
function FGF1103_91_H(obj){
    showStr(obj);
    $('#GF1103_89_H').val(getNumToString(getStrFloat($('#GF1103_90_H').val())+getStrFloat($('#GF1103_91_H').val()),2));
    FGF1103_89_H($('#GF1103_89_H'));
    $('#GF1103_91_E').val(getNumToString(getStrFloat($('#GF1103_91_F').val())+getStrFloat($('#GF1103_91_G').val())+getStrFloat($('#GF1103_91_H').val()),2));
    FGF1103_91_E($('#GF1103_91_E'));
}

/*GF1103_92_A*/
function FGF1103_92_A(obj){
    showStr(obj);
    $('#GF1103_92_A').val(getNumToString(getStrFloat($('#GF1103_92_B').val())+getStrFloat($('#GF1103_92_E').val()),2));
}

/*GF1103_92_B*/
function FGF1103_92_B(obj){
    showStr(obj);
    $('#GF1103_92_A').val(getNumToString(getStrFloat($('#GF1103_92_B').val())+getStrFloat($('#GF1103_92_E').val()),2));
    FGF1103_92_A($('#GF1103_92_A'));
    $('#GF1103_92_B').val(getNumToString(getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_92_D').val()),2));
}

/*GF1103_92_C*/
function FGF1103_92_C(obj){
    showStr(obj);
    $('#GF1103_92_B').val(getNumToString(getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_92_D').val()),2));
    FGF1103_92_B($('#GF1103_92_B'));
    $('#GF1103_92_C').val(getNumToString(getStrFloat($('#GF1103_93_C').val())+getStrFloat($('#GF1103_94_C').val())+getStrFloat($('#GF1103_95_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_92_D*/
function FGF1103_92_D(obj){
    showStr(obj);
    $('#GF1103_92_B').val(getNumToString(getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_92_D').val()),2));
    FGF1103_92_B($('#GF1103_92_B'));
    $('#GF1103_92_D').val(getNumToString(getStrFloat($('#GF1103_93_D').val())+getStrFloat($('#GF1103_94_D').val())+getStrFloat($('#GF1103_95_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_92_E*/
function FGF1103_92_E(obj){
    showStr(obj);
    $('#GF1103_92_A').val(getNumToString(getStrFloat($('#GF1103_92_B').val())+getStrFloat($('#GF1103_92_E').val()),2));
    FGF1103_92_A($('#GF1103_92_A'));
    $('#GF1103_92_E').val(getNumToString(getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_92_H').val()),2));
}

/*GF1103_92_F*/
function FGF1103_92_F(obj){
    showStr(obj);
    $('#GF1103_92_E').val(getNumToString(getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_92_H').val()),2));
    FGF1103_92_E($('#GF1103_92_E'));
    $('#GF1103_92_F').val(getNumToString(getStrFloat($('#GF1103_93_F').val())+getStrFloat($('#GF1103_94_F').val())+getStrFloat($('#GF1103_95_F').val()),2));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
}

/*GF1103_92_G*/
function FGF1103_92_G(obj){
    showStr(obj);
    $('#GF1103_92_E').val(getNumToString(getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_92_H').val()),2));
    FGF1103_92_E($('#GF1103_92_E'));
    $('#GF1103_92_G').val(getNumToString(getStrFloat($('#GF1103_93_G').val())+getStrFloat($('#GF1103_94_G').val())+getStrFloat($('#GF1103_95_G').val()),2));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_92_H*/
function FGF1103_92_H(obj){
    showStr(obj);
    $('#GF1103_92_E').val(getNumToString(getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_92_H').val()),2));
    FGF1103_92_E($('#GF1103_92_E'));
    $('#GF1103_92_H').val(getNumToString(getStrFloat($('#GF1103_93_H').val())+getStrFloat($('#GF1103_94_H').val())+getStrFloat($('#GF1103_95_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_93_A*/
function FGF1103_93_A(obj){
    showStr(obj);
    $('#GF1103_93_A').val(getNumToString(getStrFloat($('#GF1103_93_B').val())+getStrFloat($('#GF1103_93_E').val()),2));
}

/*GF1103_93_B*/
function FGF1103_93_B(obj){
    showStr(obj);
    $('#GF1103_93_A').val(getNumToString(getStrFloat($('#GF1103_93_B').val())+getStrFloat($('#GF1103_93_E').val()),2));
    FGF1103_93_A($('#GF1103_93_A'));
    $('#GF1103_93_B').val(getNumToString(getStrFloat($('#GF1103_93_C').val())+getStrFloat($('#GF1103_93_D').val()),2));
}

/*GF1103_93_C*/
function FGF1103_93_C(obj){
    showStr(obj);
    $('#GF1103_92_C').val(getNumToString(getStrFloat($('#GF1103_93_C').val())+getStrFloat($('#GF1103_94_C').val())+getStrFloat($('#GF1103_95_C').val()),2));
    FGF1103_92_C($('#GF1103_92_C'));
    $('#GF1103_93_B').val(getNumToString(getStrFloat($('#GF1103_93_C').val())+getStrFloat($('#GF1103_93_D').val()),2));
    FGF1103_93_B($('#GF1103_93_B'));
}

/*GF1103_93_D*/
function FGF1103_93_D(obj){
    showStr(obj);
    $('#GF1103_92_D').val(getNumToString(getStrFloat($('#GF1103_93_D').val())+getStrFloat($('#GF1103_94_D').val())+getStrFloat($('#GF1103_95_D').val()),2));
    FGF1103_92_D($('#GF1103_92_D'));
    $('#GF1103_93_B').val(getNumToString(getStrFloat($('#GF1103_93_C').val())+getStrFloat($('#GF1103_93_D').val()),2));
    FGF1103_93_B($('#GF1103_93_B'));
}

/*GF1103_93_E*/
function FGF1103_93_E(obj){
    showStr(obj);
    $('#GF1103_93_A').val(getNumToString(getStrFloat($('#GF1103_93_B').val())+getStrFloat($('#GF1103_93_E').val()),2));
    FGF1103_93_A($('#GF1103_93_A'));
    $('#GF1103_93_E').val(getNumToString(getStrFloat($('#GF1103_93_F').val())+getStrFloat($('#GF1103_93_G').val())+getStrFloat($('#GF1103_93_H').val()),2));
}

/*GF1103_93_F*/
function FGF1103_93_F(obj){
    showStr(obj);
    $('#GF1103_92_F').val(getNumToString(getStrFloat($('#GF1103_93_F').val())+getStrFloat($('#GF1103_94_F').val())+getStrFloat($('#GF1103_95_F').val()),2));
    FGF1103_92_F($('#GF1103_92_F'));
    $('#GF1103_93_E').val(getNumToString(getStrFloat($('#GF1103_93_F').val())+getStrFloat($('#GF1103_93_G').val())+getStrFloat($('#GF1103_93_H').val()),2));
    FGF1103_93_E($('#GF1103_93_E'));
}

/*GF1103_93_G*/
function FGF1103_93_G(obj){
    showStr(obj);
    $('#GF1103_92_G').val(getNumToString(getStrFloat($('#GF1103_93_G').val())+getStrFloat($('#GF1103_94_G').val())+getStrFloat($('#GF1103_95_G').val()),2));
    FGF1103_92_G($('#GF1103_92_G'));
    $('#GF1103_93_E').val(getNumToString(getStrFloat($('#GF1103_93_F').val())+getStrFloat($('#GF1103_93_G').val())+getStrFloat($('#GF1103_93_H').val()),2));
    FGF1103_93_E($('#GF1103_93_E'));
}

/*GF1103_93_H*/
function FGF1103_93_H(obj){
    showStr(obj);
    $('#GF1103_92_H').val(getNumToString(getStrFloat($('#GF1103_93_H').val())+getStrFloat($('#GF1103_94_H').val())+getStrFloat($('#GF1103_95_H').val()),2));
    FGF1103_92_H($('#GF1103_92_H'));
    $('#GF1103_93_E').val(getNumToString(getStrFloat($('#GF1103_93_F').val())+getStrFloat($('#GF1103_93_G').val())+getStrFloat($('#GF1103_93_H').val()),2));
    FGF1103_93_E($('#GF1103_93_E'));
}

/*GF1103_94_A*/
function FGF1103_94_A(obj){
    showStr(obj);
    $('#GF1103_94_A').val(getNumToString(getStrFloat($('#GF1103_94_B').val())+getStrFloat($('#GF1103_94_E').val()),2));
}

/*GF1103_94_B*/
function FGF1103_94_B(obj){
    showStr(obj);
    $('#GF1103_94_A').val(getNumToString(getStrFloat($('#GF1103_94_B').val())+getStrFloat($('#GF1103_94_E').val()),2));
    FGF1103_94_A($('#GF1103_94_A'));
    $('#GF1103_94_B').val(getNumToString(getStrFloat($('#GF1103_94_C').val())+getStrFloat($('#GF1103_94_D').val()),2));
}

/*GF1103_94_C*/
function FGF1103_94_C(obj){
    showStr(obj);
    $('#GF1103_92_C').val(getNumToString(getStrFloat($('#GF1103_93_C').val())+getStrFloat($('#GF1103_94_C').val())+getStrFloat($('#GF1103_95_C').val()),2));
    FGF1103_92_C($('#GF1103_92_C'));
    $('#GF1103_94_B').val(getNumToString(getStrFloat($('#GF1103_94_C').val())+getStrFloat($('#GF1103_94_D').val()),2));
    FGF1103_94_B($('#GF1103_94_B'));
}

/*GF1103_94_D*/
function FGF1103_94_D(obj){
    showStr(obj);
    $('#GF1103_92_D').val(getNumToString(getStrFloat($('#GF1103_93_D').val())+getStrFloat($('#GF1103_94_D').val())+getStrFloat($('#GF1103_95_D').val()),2));
    FGF1103_92_D($('#GF1103_92_D'));
    $('#GF1103_94_B').val(getNumToString(getStrFloat($('#GF1103_94_C').val())+getStrFloat($('#GF1103_94_D').val()),2));
    FGF1103_94_B($('#GF1103_94_B'));
}

/*GF1103_94_E*/
function FGF1103_94_E(obj){
    showStr(obj);
    $('#GF1103_94_A').val(getNumToString(getStrFloat($('#GF1103_94_B').val())+getStrFloat($('#GF1103_94_E').val()),2));
    FGF1103_94_A($('#GF1103_94_A'));
    $('#GF1103_94_E').val(getNumToString(getStrFloat($('#GF1103_94_F').val())+getStrFloat($('#GF1103_94_G').val())+getStrFloat($('#GF1103_94_H').val()),2));
}

/*GF1103_94_F*/
function FGF1103_94_F(obj){
    showStr(obj);
    $('#GF1103_92_F').val(getNumToString(getStrFloat($('#GF1103_93_F').val())+getStrFloat($('#GF1103_94_F').val())+getStrFloat($('#GF1103_95_F').val()),2));
    FGF1103_92_F($('#GF1103_92_F'));
    $('#GF1103_94_E').val(getNumToString(getStrFloat($('#GF1103_94_F').val())+getStrFloat($('#GF1103_94_G').val())+getStrFloat($('#GF1103_94_H').val()),2));
    FGF1103_94_E($('#GF1103_94_E'));
}

/*GF1103_94_G*/
function FGF1103_94_G(obj){
    showStr(obj);
    $('#GF1103_92_G').val(getNumToString(getStrFloat($('#GF1103_93_G').val())+getStrFloat($('#GF1103_94_G').val())+getStrFloat($('#GF1103_95_G').val()),2));
    FGF1103_92_G($('#GF1103_92_G'));
    $('#GF1103_94_E').val(getNumToString(getStrFloat($('#GF1103_94_F').val())+getStrFloat($('#GF1103_94_G').val())+getStrFloat($('#GF1103_94_H').val()),2));
    FGF1103_94_E($('#GF1103_94_E'));
}

/*GF1103_94_H*/
function FGF1103_94_H(obj){
    showStr(obj);
    $('#GF1103_92_H').val(getNumToString(getStrFloat($('#GF1103_93_H').val())+getStrFloat($('#GF1103_94_H').val())+getStrFloat($('#GF1103_95_H').val()),2));
    FGF1103_92_H($('#GF1103_92_H'));
    $('#GF1103_94_E').val(getNumToString(getStrFloat($('#GF1103_94_F').val())+getStrFloat($('#GF1103_94_G').val())+getStrFloat($('#GF1103_94_H').val()),2));
    FGF1103_94_E($('#GF1103_94_E'));
}

/*GF1103_95_A*/
function FGF1103_95_A(obj){
    showStr(obj);
    $('#GF1103_95_A').val(getNumToString(getStrFloat($('#GF1103_95_B').val())+getStrFloat($('#GF1103_95_E').val()),2));
}

/*GF1103_95_B*/
function FGF1103_95_B(obj){
    showStr(obj);
    $('#GF1103_95_A').val(getNumToString(getStrFloat($('#GF1103_95_B').val())+getStrFloat($('#GF1103_95_E').val()),2));
    FGF1103_95_A($('#GF1103_95_A'));
    $('#GF1103_95_B').val(getNumToString(getStrFloat($('#GF1103_95_C').val())+getStrFloat($('#GF1103_95_D').val()),2));
}

/*GF1103_95_C*/
function FGF1103_95_C(obj){
    showStr(obj);
    $('#GF1103_92_C').val(getNumToString(getStrFloat($('#GF1103_93_C').val())+getStrFloat($('#GF1103_94_C').val())+getStrFloat($('#GF1103_95_C').val()),2));
    FGF1103_92_C($('#GF1103_92_C'));
    $('#GF1103_95_B').val(getNumToString(getStrFloat($('#GF1103_95_C').val())+getStrFloat($('#GF1103_95_D').val()),2));
    FGF1103_95_B($('#GF1103_95_B'));
}

/*GF1103_95_D*/
function FGF1103_95_D(obj){
    showStr(obj);
    $('#GF1103_92_D').val(getNumToString(getStrFloat($('#GF1103_93_D').val())+getStrFloat($('#GF1103_94_D').val())+getStrFloat($('#GF1103_95_D').val()),2));
    FGF1103_92_D($('#GF1103_92_D'));
    $('#GF1103_95_B').val(getNumToString(getStrFloat($('#GF1103_95_C').val())+getStrFloat($('#GF1103_95_D').val()),2));
    FGF1103_95_B($('#GF1103_95_B'));
}

/*GF1103_95_E*/
function FGF1103_95_E(obj){
    showStr(obj);
    $('#GF1103_95_A').val(getNumToString(getStrFloat($('#GF1103_95_B').val())+getStrFloat($('#GF1103_95_E').val()),2));
    FGF1103_95_A($('#GF1103_95_A'));
    $('#GF1103_95_E').val(getNumToString(getStrFloat($('#GF1103_95_F').val())+getStrFloat($('#GF1103_95_G').val())+getStrFloat($('#GF1103_95_H').val()),2));
}

/*GF1103_95_F*/
function FGF1103_95_F(obj){
    showStr(obj);
    $('#GF1103_92_F').val(getNumToString(getStrFloat($('#GF1103_93_F').val())+getStrFloat($('#GF1103_94_F').val())+getStrFloat($('#GF1103_95_F').val()),2));
    FGF1103_92_F($('#GF1103_92_F'));
    $('#GF1103_95_E').val(getNumToString(getStrFloat($('#GF1103_95_F').val())+getStrFloat($('#GF1103_95_G').val())+getStrFloat($('#GF1103_95_H').val()),2));
    FGF1103_95_E($('#GF1103_95_E'));
}

/*GF1103_95_G*/
function FGF1103_95_G(obj){
    showStr(obj);
    $('#GF1103_92_G').val(getNumToString(getStrFloat($('#GF1103_93_G').val())+getStrFloat($('#GF1103_94_G').val())+getStrFloat($('#GF1103_95_G').val()),2));
    FGF1103_92_G($('#GF1103_92_G'));
    $('#GF1103_95_E').val(getNumToString(getStrFloat($('#GF1103_95_F').val())+getStrFloat($('#GF1103_95_G').val())+getStrFloat($('#GF1103_95_H').val()),2));
    FGF1103_95_E($('#GF1103_95_E'));
}

/*GF1103_95_H*/
function FGF1103_95_H(obj){
    showStr(obj);
    $('#GF1103_92_H').val(getNumToString(getStrFloat($('#GF1103_93_H').val())+getStrFloat($('#GF1103_94_H').val())+getStrFloat($('#GF1103_95_H').val()),2));
    FGF1103_92_H($('#GF1103_92_H'));
    $('#GF1103_95_E').val(getNumToString(getStrFloat($('#GF1103_95_F').val())+getStrFloat($('#GF1103_95_G').val())+getStrFloat($('#GF1103_95_H').val()),2));
    FGF1103_95_E($('#GF1103_95_E'));
}

/*GF1103_96_A*/
function FGF1103_96_A(obj){
    showStr(obj);
    $('#GF1103_96_A').val(getNumToString(getStrFloat($('#GF1103_96_B').val())+getStrFloat($('#GF1103_96_E').val()),2));
}

/*GF1103_96_B*/
function FGF1103_96_B(obj){
    showStr(obj);
    $('#GF1103_96_A').val(getNumToString(getStrFloat($('#GF1103_96_B').val())+getStrFloat($('#GF1103_96_E').val()),2));
    FGF1103_96_A($('#GF1103_96_A'));
    $('#GF1103_96_B').val(getNumToString(getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_96_D').val()),2));
}

/*GF1103_96_C*/
function FGF1103_96_C(obj){
    showStr(obj);
    $('#GF1103_96_B').val(getNumToString(getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_96_D').val()),2));
    FGF1103_96_B($('#GF1103_96_B'));
    $('#GF1103_96_C').val(getNumToString(getStrFloat($('#GF1103_97_C').val())+getStrFloat($('#GF1103_98_C').val())+getStrFloat($('#GF1103_99_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_96_D*/
function FGF1103_96_D(obj){
    showStr(obj);
    $('#GF1103_96_B').val(getNumToString(getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_96_D').val()),2));
    FGF1103_96_B($('#GF1103_96_B'));
    $('#GF1103_96_D').val(getNumToString(getStrFloat($('#GF1103_97_D').val())+getStrFloat($('#GF1103_98_D').val())+getStrFloat($('#GF1103_99_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_96_E*/
function FGF1103_96_E(obj){
    showStr(obj);
    $('#GF1103_96_A').val(getNumToString(getStrFloat($('#GF1103_96_B').val())+getStrFloat($('#GF1103_96_E').val()),2));
    FGF1103_96_A($('#GF1103_96_A'));
    $('#GF1103_96_E').val(getNumToString(getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_96_H').val()),2));
}

/*GF1103_96_F*/
function FGF1103_96_F(obj){
    showStr(obj);
    $('#GF1103_96_E').val(getNumToString(getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_96_H').val()),2));
    FGF1103_96_E($('#GF1103_96_E'));
    $('#GF1103_96_F').val(getNumToString(getStrFloat($('#GF1103_97_F').val())+getStrFloat($('#GF1103_98_F').val())+getStrFloat($('#GF1103_99_F').val()),2));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
}

/*GF1103_96_G*/
function FGF1103_96_G(obj){
    showStr(obj);
    $('#GF1103_96_E').val(getNumToString(getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_96_H').val()),2));
    FGF1103_96_E($('#GF1103_96_E'));
    $('#GF1103_96_G').val(getNumToString(getStrFloat($('#GF1103_97_G').val())+getStrFloat($('#GF1103_98_G').val())+getStrFloat($('#GF1103_99_G').val()),2));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_96_H*/
function FGF1103_96_H(obj){
    showStr(obj);
    $('#GF1103_96_E').val(getNumToString(getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_96_H').val()),2));
    FGF1103_96_E($('#GF1103_96_E'));
    $('#GF1103_96_H').val(getNumToString(getStrFloat($('#GF1103_97_H').val())+getStrFloat($('#GF1103_98_H').val())+getStrFloat($('#GF1103_99_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_97_A*/
function FGF1103_97_A(obj){
    showStr(obj);
    $('#GF1103_97_A').val(getNumToString(getStrFloat($('#GF1103_97_B').val())+getStrFloat($('#GF1103_97_E').val()),2));
}

/*GF1103_97_B*/
function FGF1103_97_B(obj){
    showStr(obj);
    $('#GF1103_97_A').val(getNumToString(getStrFloat($('#GF1103_97_B').val())+getStrFloat($('#GF1103_97_E').val()),2));
    FGF1103_97_A($('#GF1103_97_A'));
    $('#GF1103_97_B').val(getNumToString(getStrFloat($('#GF1103_97_C').val())+getStrFloat($('#GF1103_97_D').val()),2));
}

/*GF1103_97_C*/
function FGF1103_97_C(obj){
    showStr(obj);
    $('#GF1103_96_C').val(getNumToString(getStrFloat($('#GF1103_97_C').val())+getStrFloat($('#GF1103_98_C').val())+getStrFloat($('#GF1103_99_C').val()),2));
    FGF1103_96_C($('#GF1103_96_C'));
    $('#GF1103_97_B').val(getNumToString(getStrFloat($('#GF1103_97_C').val())+getStrFloat($('#GF1103_97_D').val()),2));
    FGF1103_97_B($('#GF1103_97_B'));
}

/*GF1103_97_D*/
function FGF1103_97_D(obj){
    showStr(obj);
    $('#GF1103_96_D').val(getNumToString(getStrFloat($('#GF1103_97_D').val())+getStrFloat($('#GF1103_98_D').val())+getStrFloat($('#GF1103_99_D').val()),2));
    FGF1103_96_D($('#GF1103_96_D'));
    $('#GF1103_97_B').val(getNumToString(getStrFloat($('#GF1103_97_C').val())+getStrFloat($('#GF1103_97_D').val()),2));
    FGF1103_97_B($('#GF1103_97_B'));
}

/*GF1103_97_E*/
function FGF1103_97_E(obj){
    showStr(obj);
    $('#GF1103_97_A').val(getNumToString(getStrFloat($('#GF1103_97_B').val())+getStrFloat($('#GF1103_97_E').val()),2));
    FGF1103_97_A($('#GF1103_97_A'));
    $('#GF1103_97_E').val(getNumToString(getStrFloat($('#GF1103_97_F').val())+getStrFloat($('#GF1103_97_G').val())+getStrFloat($('#GF1103_97_H').val()),2));
}

/*GF1103_97_F*/
function FGF1103_97_F(obj){
    showStr(obj);
    $('#GF1103_96_F').val(getNumToString(getStrFloat($('#GF1103_97_F').val())+getStrFloat($('#GF1103_98_F').val())+getStrFloat($('#GF1103_99_F').val()),2));
    FGF1103_96_F($('#GF1103_96_F'));
    $('#GF1103_97_E').val(getNumToString(getStrFloat($('#GF1103_97_F').val())+getStrFloat($('#GF1103_97_G').val())+getStrFloat($('#GF1103_97_H').val()),2));
    FGF1103_97_E($('#GF1103_97_E'));
}

/*GF1103_97_G*/
function FGF1103_97_G(obj){
    showStr(obj);
    $('#GF1103_96_G').val(getNumToString(getStrFloat($('#GF1103_97_G').val())+getStrFloat($('#GF1103_98_G').val())+getStrFloat($('#GF1103_99_G').val()),2));
    FGF1103_96_G($('#GF1103_96_G'));
    $('#GF1103_97_E').val(getNumToString(getStrFloat($('#GF1103_97_F').val())+getStrFloat($('#GF1103_97_G').val())+getStrFloat($('#GF1103_97_H').val()),2));
    FGF1103_97_E($('#GF1103_97_E'));
}

/*GF1103_97_H*/
function FGF1103_97_H(obj){
    showStr(obj);
    $('#GF1103_96_H').val(getNumToString(getStrFloat($('#GF1103_97_H').val())+getStrFloat($('#GF1103_98_H').val())+getStrFloat($('#GF1103_99_H').val()),2));
    FGF1103_96_H($('#GF1103_96_H'));
    $('#GF1103_97_E').val(getNumToString(getStrFloat($('#GF1103_97_F').val())+getStrFloat($('#GF1103_97_G').val())+getStrFloat($('#GF1103_97_H').val()),2));
    FGF1103_97_E($('#GF1103_97_E'));
}

/*GF1103_98_A*/
function FGF1103_98_A(obj){
    showStr(obj);
    $('#GF1103_98_A').val(getNumToString(getStrFloat($('#GF1103_98_B').val())+getStrFloat($('#GF1103_98_E').val()),2));
}

/*GF1103_98_B*/
function FGF1103_98_B(obj){
    showStr(obj);
    $('#GF1103_98_A').val(getNumToString(getStrFloat($('#GF1103_98_B').val())+getStrFloat($('#GF1103_98_E').val()),2));
    FGF1103_98_A($('#GF1103_98_A'));
    $('#GF1103_98_B').val(getNumToString(getStrFloat($('#GF1103_98_C').val())+getStrFloat($('#GF1103_98_D').val()),2));
}

/*GF1103_98_C*/
function FGF1103_98_C(obj){
    showStr(obj);
    $('#GF1103_96_C').val(getNumToString(getStrFloat($('#GF1103_97_C').val())+getStrFloat($('#GF1103_98_C').val())+getStrFloat($('#GF1103_99_C').val()),2));
    FGF1103_96_C($('#GF1103_96_C'));
    $('#GF1103_98_B').val(getNumToString(getStrFloat($('#GF1103_98_C').val())+getStrFloat($('#GF1103_98_D').val()),2));
    FGF1103_98_B($('#GF1103_98_B'));
}

/*GF1103_98_D*/
function FGF1103_98_D(obj){
    showStr(obj);
    $('#GF1103_96_D').val(getNumToString(getStrFloat($('#GF1103_97_D').val())+getStrFloat($('#GF1103_98_D').val())+getStrFloat($('#GF1103_99_D').val()),2));
    FGF1103_96_D($('#GF1103_96_D'));
    $('#GF1103_98_B').val(getNumToString(getStrFloat($('#GF1103_98_C').val())+getStrFloat($('#GF1103_98_D').val()),2));
    FGF1103_98_B($('#GF1103_98_B'));
}

/*GF1103_98_E*/
function FGF1103_98_E(obj){
    showStr(obj);
    $('#GF1103_98_A').val(getNumToString(getStrFloat($('#GF1103_98_B').val())+getStrFloat($('#GF1103_98_E').val()),2));
    FGF1103_98_A($('#GF1103_98_A'));
    $('#GF1103_98_E').val(getNumToString(getStrFloat($('#GF1103_98_F').val())+getStrFloat($('#GF1103_98_G').val())+getStrFloat($('#GF1103_98_H').val()),2));
}

/*GF1103_98_F*/
function FGF1103_98_F(obj){
    showStr(obj);
    $('#GF1103_96_F').val(getNumToString(getStrFloat($('#GF1103_97_F').val())+getStrFloat($('#GF1103_98_F').val())+getStrFloat($('#GF1103_99_F').val()),2));
    FGF1103_96_F($('#GF1103_96_F'));
    $('#GF1103_98_E').val(getNumToString(getStrFloat($('#GF1103_98_F').val())+getStrFloat($('#GF1103_98_G').val())+getStrFloat($('#GF1103_98_H').val()),2));
    FGF1103_98_E($('#GF1103_98_E'));
}

/*GF1103_98_G*/
function FGF1103_98_G(obj){
    showStr(obj);
    $('#GF1103_96_G').val(getNumToString(getStrFloat($('#GF1103_97_G').val())+getStrFloat($('#GF1103_98_G').val())+getStrFloat($('#GF1103_99_G').val()),2));
    FGF1103_96_G($('#GF1103_96_G'));
    $('#GF1103_98_E').val(getNumToString(getStrFloat($('#GF1103_98_F').val())+getStrFloat($('#GF1103_98_G').val())+getStrFloat($('#GF1103_98_H').val()),2));
    FGF1103_98_E($('#GF1103_98_E'));
}

/*GF1103_98_H*/
function FGF1103_98_H(obj){
    showStr(obj);
    $('#GF1103_96_H').val(getNumToString(getStrFloat($('#GF1103_97_H').val())+getStrFloat($('#GF1103_98_H').val())+getStrFloat($('#GF1103_99_H').val()),2));
    FGF1103_96_H($('#GF1103_96_H'));
    $('#GF1103_98_E').val(getNumToString(getStrFloat($('#GF1103_98_F').val())+getStrFloat($('#GF1103_98_G').val())+getStrFloat($('#GF1103_98_H').val()),2));
    FGF1103_98_E($('#GF1103_98_E'));
}

/*GF1103_99_A*/
function FGF1103_99_A(obj){
    showStr(obj);
    $('#GF1103_99_A').val(getNumToString(getStrFloat($('#GF1103_99_B').val())+getStrFloat($('#GF1103_99_E').val()),2));
}

/*GF1103_99_B*/
function FGF1103_99_B(obj){
    showStr(obj);
    $('#GF1103_99_A').val(getNumToString(getStrFloat($('#GF1103_99_B').val())+getStrFloat($('#GF1103_99_E').val()),2));
    FGF1103_99_A($('#GF1103_99_A'));
    $('#GF1103_99_B').val(getNumToString(getStrFloat($('#GF1103_99_C').val())+getStrFloat($('#GF1103_99_D').val()),2));
}

/*GF1103_99_C*/
function FGF1103_99_C(obj){
    showStr(obj);
    $('#GF1103_96_C').val(getNumToString(getStrFloat($('#GF1103_97_C').val())+getStrFloat($('#GF1103_98_C').val())+getStrFloat($('#GF1103_99_C').val()),2));
    FGF1103_96_C($('#GF1103_96_C'));
    $('#GF1103_99_B').val(getNumToString(getStrFloat($('#GF1103_99_C').val())+getStrFloat($('#GF1103_99_D').val()),2));
    FGF1103_99_B($('#GF1103_99_B'));
}

/*GF1103_99_D*/
function FGF1103_99_D(obj){
    showStr(obj);
    $('#GF1103_96_D').val(getNumToString(getStrFloat($('#GF1103_97_D').val())+getStrFloat($('#GF1103_98_D').val())+getStrFloat($('#GF1103_99_D').val()),2));
    FGF1103_96_D($('#GF1103_96_D'));
    $('#GF1103_99_B').val(getNumToString(getStrFloat($('#GF1103_99_C').val())+getStrFloat($('#GF1103_99_D').val()),2));
    FGF1103_99_B($('#GF1103_99_B'));
}

/*GF1103_99_E*/
function FGF1103_99_E(obj){
    showStr(obj);
    $('#GF1103_99_A').val(getNumToString(getStrFloat($('#GF1103_99_B').val())+getStrFloat($('#GF1103_99_E').val()),2));
    FGF1103_99_A($('#GF1103_99_A'));
    $('#GF1103_99_E').val(getNumToString(getStrFloat($('#GF1103_99_F').val())+getStrFloat($('#GF1103_99_G').val())+getStrFloat($('#GF1103_99_H').val()),2));
}

/*GF1103_99_F*/
function FGF1103_99_F(obj){
    showStr(obj);
    $('#GF1103_96_F').val(getNumToString(getStrFloat($('#GF1103_97_F').val())+getStrFloat($('#GF1103_98_F').val())+getStrFloat($('#GF1103_99_F').val()),2));
    FGF1103_96_F($('#GF1103_96_F'));
    $('#GF1103_99_E').val(getNumToString(getStrFloat($('#GF1103_99_F').val())+getStrFloat($('#GF1103_99_G').val())+getStrFloat($('#GF1103_99_H').val()),2));
    FGF1103_99_E($('#GF1103_99_E'));
}

/*GF1103_99_G*/
function FGF1103_99_G(obj){
    showStr(obj);
    $('#GF1103_96_G').val(getNumToString(getStrFloat($('#GF1103_97_G').val())+getStrFloat($('#GF1103_98_G').val())+getStrFloat($('#GF1103_99_G').val()),2));
    FGF1103_96_G($('#GF1103_96_G'));
    $('#GF1103_99_E').val(getNumToString(getStrFloat($('#GF1103_99_F').val())+getStrFloat($('#GF1103_99_G').val())+getStrFloat($('#GF1103_99_H').val()),2));
    FGF1103_99_E($('#GF1103_99_E'));
}

/*GF1103_99_H*/
function FGF1103_99_H(obj){
    showStr(obj);
    $('#GF1103_96_H').val(getNumToString(getStrFloat($('#GF1103_97_H').val())+getStrFloat($('#GF1103_98_H').val())+getStrFloat($('#GF1103_99_H').val()),2));
    FGF1103_96_H($('#GF1103_96_H'));
    $('#GF1103_99_E').val(getNumToString(getStrFloat($('#GF1103_99_F').val())+getStrFloat($('#GF1103_99_G').val())+getStrFloat($('#GF1103_99_H').val()),2));
    FGF1103_99_E($('#GF1103_99_E'));
}

/*GF1103_100_A*/
function FGF1103_100_A(obj){
    showStr(obj);
    $('#GF1103_100_A').val(getNumToString(getStrFloat($('#GF1103_100_B').val())+getStrFloat($('#GF1103_100_E').val()),2));
}

/*GF1103_100_B*/
function FGF1103_100_B(obj){
    showStr(obj);
    $('#GF1103_100_A').val(getNumToString(getStrFloat($('#GF1103_100_B').val())+getStrFloat($('#GF1103_100_E').val()),2));
    FGF1103_100_A($('#GF1103_100_A'));
    $('#GF1103_100_B').val(getNumToString(getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_100_D').val()),2));
}

/*GF1103_100_C*/
function FGF1103_100_C(obj){
    showStr(obj);
    $('#GF1103_100_B').val(getNumToString(getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_100_D').val()),2));
    FGF1103_100_B($('#GF1103_100_B'));
    $('#GF1103_100_C').val(getNumToString(getStrFloat($('#GF1103_101_C').val())+getStrFloat($('#GF1103_103_C').val())+getStrFloat($('#GF1103_102_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_100_D*/
function FGF1103_100_D(obj){
    showStr(obj);
    $('#GF1103_100_B').val(getNumToString(getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_100_D').val()),2));
    FGF1103_100_B($('#GF1103_100_B'));
    $('#GF1103_100_D').val(getNumToString(getStrFloat($('#GF1103_101_D').val())+getStrFloat($('#GF1103_103_D').val())+getStrFloat($('#GF1103_102_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_100_E*/
function FGF1103_100_E(obj){
    showStr(obj);
    $('#GF1103_100_A').val(getNumToString(getStrFloat($('#GF1103_100_B').val())+getStrFloat($('#GF1103_100_E').val()),2));
    FGF1103_100_A($('#GF1103_100_A'));
    $('#GF1103_100_E').val(getNumToString(getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_100_H').val()),2));
}

/*GF1103_100_F*/
function FGF1103_100_F(obj){
    showStr(obj);
    $('#GF1103_100_E').val(getNumToString(getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_100_H').val()),2));
    FGF1103_100_E($('#GF1103_100_E'));
    $('#GF1103_100_F').val(getNumToString(getStrFloat($('#GF1103_101_F').val())+getStrFloat($('#GF1103_103_F').val())+getStrFloat($('#GF1103_102_F').val()),2));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
}

/*GF1103_100_G*/
function FGF1103_100_G(obj){
    showStr(obj);
    $('#GF1103_100_E').val(getNumToString(getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_100_H').val()),2));
    FGF1103_100_E($('#GF1103_100_E'));
    $('#GF1103_100_G').val(getNumToString(getStrFloat($('#GF1103_101_G').val())+getStrFloat($('#GF1103_103_G').val())+getStrFloat($('#GF1103_102_G').val()),2));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_100_H*/
function FGF1103_100_H(obj){
    showStr(obj);
    $('#GF1103_100_E').val(getNumToString(getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_100_H').val()),2));
    FGF1103_100_E($('#GF1103_100_E'));
    $('#GF1103_100_H').val(getNumToString(getStrFloat($('#GF1103_101_H').val())+getStrFloat($('#GF1103_103_H').val())+getStrFloat($('#GF1103_102_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_101_A*/
function FGF1103_101_A(obj){
    showStr(obj);
    $('#GF1103_101_A').val(getNumToString(getStrFloat($('#GF1103_101_B').val())+getStrFloat($('#GF1103_101_E').val()),2));
}

/*GF1103_101_B*/
function FGF1103_101_B(obj){
    showStr(obj);
    $('#GF1103_101_A').val(getNumToString(getStrFloat($('#GF1103_101_B').val())+getStrFloat($('#GF1103_101_E').val()),2));
    FGF1103_101_A($('#GF1103_101_A'));
    $('#GF1103_101_B').val(getNumToString(getStrFloat($('#GF1103_101_C').val())+getStrFloat($('#GF1103_101_D').val()),2));
}

/*GF1103_101_C*/
function FGF1103_101_C(obj){
    showStr(obj);
    $('#GF1103_100_C').val(getNumToString(getStrFloat($('#GF1103_101_C').val())+getStrFloat($('#GF1103_103_C').val())+getStrFloat($('#GF1103_102_C').val()),2));
    FGF1103_100_C($('#GF1103_100_C'));
    $('#GF1103_101_B').val(getNumToString(getStrFloat($('#GF1103_101_C').val())+getStrFloat($('#GF1103_101_D').val()),2));
    FGF1103_101_B($('#GF1103_101_B'));
}

/*GF1103_101_D*/
function FGF1103_101_D(obj){
    showStr(obj);
    $('#GF1103_100_D').val(getNumToString(getStrFloat($('#GF1103_101_D').val())+getStrFloat($('#GF1103_103_D').val())+getStrFloat($('#GF1103_102_D').val()),2));
    FGF1103_100_D($('#GF1103_100_D'));
    $('#GF1103_101_B').val(getNumToString(getStrFloat($('#GF1103_101_C').val())+getStrFloat($('#GF1103_101_D').val()),2));
    FGF1103_101_B($('#GF1103_101_B'));
}

/*GF1103_101_E*/
function FGF1103_101_E(obj){
    showStr(obj);
    $('#GF1103_101_A').val(getNumToString(getStrFloat($('#GF1103_101_B').val())+getStrFloat($('#GF1103_101_E').val()),2));
    FGF1103_101_A($('#GF1103_101_A'));
    $('#GF1103_101_E').val(getNumToString(getStrFloat($('#GF1103_101_F').val())+getStrFloat($('#GF1103_101_G').val())+getStrFloat($('#GF1103_101_H').val()),2));
}

/*GF1103_101_F*/
function FGF1103_101_F(obj){
    showStr(obj);
    $('#GF1103_100_F').val(getNumToString(getStrFloat($('#GF1103_101_F').val())+getStrFloat($('#GF1103_103_F').val())+getStrFloat($('#GF1103_102_F').val()),2));
    FGF1103_100_F($('#GF1103_100_F'));
    $('#GF1103_101_E').val(getNumToString(getStrFloat($('#GF1103_101_F').val())+getStrFloat($('#GF1103_101_G').val())+getStrFloat($('#GF1103_101_H').val()),2));
    FGF1103_101_E($('#GF1103_101_E'));
}

/*GF1103_101_G*/
function FGF1103_101_G(obj){
    showStr(obj);
    $('#GF1103_100_G').val(getNumToString(getStrFloat($('#GF1103_101_G').val())+getStrFloat($('#GF1103_103_G').val())+getStrFloat($('#GF1103_102_G').val()),2));
    FGF1103_100_G($('#GF1103_100_G'));
    $('#GF1103_101_E').val(getNumToString(getStrFloat($('#GF1103_101_F').val())+getStrFloat($('#GF1103_101_G').val())+getStrFloat($('#GF1103_101_H').val()),2));
    FGF1103_101_E($('#GF1103_101_E'));
}

/*GF1103_101_H*/
function FGF1103_101_H(obj){
    showStr(obj);
    $('#GF1103_100_H').val(getNumToString(getStrFloat($('#GF1103_101_H').val())+getStrFloat($('#GF1103_103_H').val())+getStrFloat($('#GF1103_102_H').val()),2));
    FGF1103_100_H($('#GF1103_100_H'));
    $('#GF1103_101_E').val(getNumToString(getStrFloat($('#GF1103_101_F').val())+getStrFloat($('#GF1103_101_G').val())+getStrFloat($('#GF1103_101_H').val()),2));
    FGF1103_101_E($('#GF1103_101_E'));
}

/*GF1103_102_A*/
function FGF1103_102_A(obj){
    showStr(obj);
    $('#GF1103_102_A').val(getNumToString(getStrFloat($('#GF1103_102_B').val())+getStrFloat($('#GF1103_102_E').val()),2));
}

/*GF1103_102_B*/
function FGF1103_102_B(obj){
    showStr(obj);
    $('#GF1103_102_A').val(getNumToString(getStrFloat($('#GF1103_102_B').val())+getStrFloat($('#GF1103_102_E').val()),2));
    FGF1103_102_A($('#GF1103_102_A'));
    $('#GF1103_102_B').val(getNumToString(getStrFloat($('#GF1103_102_C').val())+getStrFloat($('#GF1103_102_D').val()),2));
}

/*GF1103_102_C*/
function FGF1103_102_C(obj){
    showStr(obj);
    $('#GF1103_100_C').val(getNumToString(getStrFloat($('#GF1103_101_C').val())+getStrFloat($('#GF1103_103_C').val())+getStrFloat($('#GF1103_102_C').val()),2));
    FGF1103_100_C($('#GF1103_100_C'));
    $('#GF1103_102_B').val(getNumToString(getStrFloat($('#GF1103_102_C').val())+getStrFloat($('#GF1103_102_D').val()),2));
    FGF1103_102_B($('#GF1103_102_B'));
}

/*GF1103_102_D*/
function FGF1103_102_D(obj){
    showStr(obj);
    $('#GF1103_100_D').val(getNumToString(getStrFloat($('#GF1103_101_D').val())+getStrFloat($('#GF1103_103_D').val())+getStrFloat($('#GF1103_102_D').val()),2));
    FGF1103_100_D($('#GF1103_100_D'));
    $('#GF1103_102_B').val(getNumToString(getStrFloat($('#GF1103_102_C').val())+getStrFloat($('#GF1103_102_D').val()),2));
    FGF1103_102_B($('#GF1103_102_B'));
}

/*GF1103_102_E*/
function FGF1103_102_E(obj){
    showStr(obj);
    $('#GF1103_102_A').val(getNumToString(getStrFloat($('#GF1103_102_B').val())+getStrFloat($('#GF1103_102_E').val()),2));
    FGF1103_102_A($('#GF1103_102_A'));
    $('#GF1103_102_E').val(getNumToString(getStrFloat($('#GF1103_102_F').val())+getStrFloat($('#GF1103_102_G').val())+getStrFloat($('#GF1103_102_H').val()),2));
}

/*GF1103_102_F*/
function FGF1103_102_F(obj){
    showStr(obj);
    $('#GF1103_100_F').val(getNumToString(getStrFloat($('#GF1103_101_F').val())+getStrFloat($('#GF1103_103_F').val())+getStrFloat($('#GF1103_102_F').val()),2));
    FGF1103_100_F($('#GF1103_100_F'));
    $('#GF1103_102_E').val(getNumToString(getStrFloat($('#GF1103_102_F').val())+getStrFloat($('#GF1103_102_G').val())+getStrFloat($('#GF1103_102_H').val()),2));
    FGF1103_102_E($('#GF1103_102_E'));
}

/*GF1103_102_G*/
function FGF1103_102_G(obj){
    showStr(obj);
    $('#GF1103_100_G').val(getNumToString(getStrFloat($('#GF1103_101_G').val())+getStrFloat($('#GF1103_103_G').val())+getStrFloat($('#GF1103_102_G').val()),2));
    FGF1103_100_G($('#GF1103_100_G'));
    $('#GF1103_102_E').val(getNumToString(getStrFloat($('#GF1103_102_F').val())+getStrFloat($('#GF1103_102_G').val())+getStrFloat($('#GF1103_102_H').val()),2));
    FGF1103_102_E($('#GF1103_102_E'));
}

/*GF1103_102_H*/
function FGF1103_102_H(obj){
    showStr(obj);
    $('#GF1103_100_H').val(getNumToString(getStrFloat($('#GF1103_101_H').val())+getStrFloat($('#GF1103_103_H').val())+getStrFloat($('#GF1103_102_H').val()),2));
    FGF1103_100_H($('#GF1103_100_H'));
    $('#GF1103_102_E').val(getNumToString(getStrFloat($('#GF1103_102_F').val())+getStrFloat($('#GF1103_102_G').val())+getStrFloat($('#GF1103_102_H').val()),2));
    FGF1103_102_E($('#GF1103_102_E'));
}

/*GF1103_103_A*/
function FGF1103_103_A(obj){
    showStr(obj);
    $('#GF1103_103_A').val(getNumToString(getStrFloat($('#GF1103_103_B').val())+getStrFloat($('#GF1103_103_E').val()),2));
}

/*GF1103_103_B*/
function FGF1103_103_B(obj){
    showStr(obj);
    $('#GF1103_103_A').val(getNumToString(getStrFloat($('#GF1103_103_B').val())+getStrFloat($('#GF1103_103_E').val()),2));
    FGF1103_103_A($('#GF1103_103_A'));
    $('#GF1103_103_B').val(getNumToString(getStrFloat($('#GF1103_103_C').val())+getStrFloat($('#GF1103_103_D').val()),2));
}

/*GF1103_103_C*/
function FGF1103_103_C(obj){
    showStr(obj);
    $('#GF1103_100_C').val(getNumToString(getStrFloat($('#GF1103_101_C').val())+getStrFloat($('#GF1103_103_C').val())+getStrFloat($('#GF1103_102_C').val()),2));
    FGF1103_100_C($('#GF1103_100_C'));
    $('#GF1103_103_B').val(getNumToString(getStrFloat($('#GF1103_103_C').val())+getStrFloat($('#GF1103_103_D').val()),2));
    FGF1103_103_B($('#GF1103_103_B'));
}

/*GF1103_103_D*/
function FGF1103_103_D(obj){
    showStr(obj);
    $('#GF1103_100_D').val(getNumToString(getStrFloat($('#GF1103_101_D').val())+getStrFloat($('#GF1103_103_D').val())+getStrFloat($('#GF1103_102_D').val()),2));
    FGF1103_100_D($('#GF1103_100_D'));
    $('#GF1103_103_B').val(getNumToString(getStrFloat($('#GF1103_103_C').val())+getStrFloat($('#GF1103_103_D').val()),2));
    FGF1103_103_B($('#GF1103_103_B'));
}

/*GF1103_103_E*/
function FGF1103_103_E(obj){
    showStr(obj);
    $('#GF1103_103_A').val(getNumToString(getStrFloat($('#GF1103_103_B').val())+getStrFloat($('#GF1103_103_E').val()),2));
    FGF1103_103_A($('#GF1103_103_A'));
    $('#GF1103_103_E').val(getNumToString(getStrFloat($('#GF1103_103_F').val())+getStrFloat($('#GF1103_103_G').val())+getStrFloat($('#GF1103_103_H').val()),2));
}

/*GF1103_103_F*/
function FGF1103_103_F(obj){
    showStr(obj);
    $('#GF1103_100_F').val(getNumToString(getStrFloat($('#GF1103_101_F').val())+getStrFloat($('#GF1103_103_F').val())+getStrFloat($('#GF1103_102_F').val()),2));
    FGF1103_100_F($('#GF1103_100_F'));
    $('#GF1103_103_E').val(getNumToString(getStrFloat($('#GF1103_103_F').val())+getStrFloat($('#GF1103_103_G').val())+getStrFloat($('#GF1103_103_H').val()),2));
    FGF1103_103_E($('#GF1103_103_E'));
}

/*GF1103_103_G*/
function FGF1103_103_G(obj){
    showStr(obj);
    $('#GF1103_100_G').val(getNumToString(getStrFloat($('#GF1103_101_G').val())+getStrFloat($('#GF1103_103_G').val())+getStrFloat($('#GF1103_102_G').val()),2));
    FGF1103_100_G($('#GF1103_100_G'));
    $('#GF1103_103_E').val(getNumToString(getStrFloat($('#GF1103_103_F').val())+getStrFloat($('#GF1103_103_G').val())+getStrFloat($('#GF1103_103_H').val()),2));
    FGF1103_103_E($('#GF1103_103_E'));
}

/*GF1103_103_H*/
function FGF1103_103_H(obj){
    showStr(obj);
    $('#GF1103_100_H').val(getNumToString(getStrFloat($('#GF1103_101_H').val())+getStrFloat($('#GF1103_103_H').val())+getStrFloat($('#GF1103_102_H').val()),2));
    FGF1103_100_H($('#GF1103_100_H'));
    $('#GF1103_103_E').val(getNumToString(getStrFloat($('#GF1103_103_F').val())+getStrFloat($('#GF1103_103_G').val())+getStrFloat($('#GF1103_103_H').val()),2));
    FGF1103_103_E($('#GF1103_103_E'));
}

/*GF1103_104_A*/
function FGF1103_104_A(obj){
    showStr(obj);
    $('#GF1103_104_A').val(getNumToString(getStrFloat($('#GF1103_104_B').val())+getStrFloat($('#GF1103_104_E').val()),2));
}

/*GF1103_104_B*/
function FGF1103_104_B(obj){
    showStr(obj);
    $('#GF1103_104_A').val(getNumToString(getStrFloat($('#GF1103_104_B').val())+getStrFloat($('#GF1103_104_E').val()),2));
    FGF1103_104_A($('#GF1103_104_A'));
    $('#GF1103_104_B').val(getNumToString(getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_104_D').val()),2));
}

/*GF1103_104_C*/
function FGF1103_104_C(obj){
    showStr(obj);
    $('#GF1103_104_B').val(getNumToString(getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_104_D').val()),2));
    FGF1103_104_B($('#GF1103_104_B'));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
    $('#GF1103_104_C').val(getNumToString(getStrFloat($('#GF1103_105_C').val()),2));
}

/*GF1103_104_D*/
function FGF1103_104_D(obj){
    showStr(obj);
    $('#GF1103_104_B').val(getNumToString(getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_104_D').val()),2));
    FGF1103_104_B($('#GF1103_104_B'));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
    $('#GF1103_104_D').val(getNumToString(getStrFloat($('#GF1103_105_D').val()),2));
}

/*GF1103_104_E*/
function FGF1103_104_E(obj){
    showStr(obj);
    $('#GF1103_104_A').val(getNumToString(getStrFloat($('#GF1103_104_B').val())+getStrFloat($('#GF1103_104_E').val()),2));
    FGF1103_104_A($('#GF1103_104_A'));
    $('#GF1103_104_E').val(getNumToString(getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_104_H').val()),2));
}

/*GF1103_104_F*/
function FGF1103_104_F(obj){
    showStr(obj);
    $('#GF1103_104_E').val(getNumToString(getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_104_H').val()),2));
    FGF1103_104_E($('#GF1103_104_E'));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
    $('#GF1103_104_F').val(getNumToString(getStrFloat($('#GF1103_105_F').val()),2));
}

/*GF1103_104_G*/
function FGF1103_104_G(obj){
    showStr(obj);
    $('#GF1103_104_E').val(getNumToString(getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_104_H').val()),2));
    FGF1103_104_E($('#GF1103_104_E'));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
    $('#GF1103_104_G').val(getNumToString(getStrFloat($('#GF1103_105_G').val()),2));
}

/*GF1103_104_H*/
function FGF1103_104_H(obj){
    showStr(obj);
    $('#GF1103_104_E').val(getNumToString(getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_104_H').val()),2));
    FGF1103_104_E($('#GF1103_104_E'));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
    $('#GF1103_104_H').val(getNumToString(getStrFloat($('#GF1103_105_H').val()),2));
}

/*GF1103_105_A*/
function FGF1103_105_A(obj){
    showStr(obj);
    $('#GF1103_105_A').val(getNumToString(getStrFloat($('#GF1103_105_B').val())+getStrFloat($('#GF1103_105_E').val()),2));
}

/*GF1103_105_B*/
function FGF1103_105_B(obj){
    showStr(obj);
    $('#GF1103_105_A').val(getNumToString(getStrFloat($('#GF1103_105_B').val())+getStrFloat($('#GF1103_105_E').val()),2));
    FGF1103_105_A($('#GF1103_105_A'));
    $('#GF1103_105_B').val(getNumToString(getStrFloat($('#GF1103_105_C').val())+getStrFloat($('#GF1103_105_D').val()),2));
}

/*GF1103_105_C*/
function FGF1103_105_C(obj){
    showStr(obj);
    $('#GF1103_105_B').val(getNumToString(getStrFloat($('#GF1103_105_C').val())+getStrFloat($('#GF1103_105_D').val()),2));
    FGF1103_105_B($('#GF1103_105_B'));
    $('#GF1103_104_C').val(getNumToString(getStrFloat($('#GF1103_105_C').val()),2));
    FGF1103_104_C($('#GF1103_104_C'));
}

/*GF1103_105_D*/
function FGF1103_105_D(obj){
    showStr(obj);
    $('#GF1103_105_B').val(getNumToString(getStrFloat($('#GF1103_105_C').val())+getStrFloat($('#GF1103_105_D').val()),2));
    FGF1103_105_B($('#GF1103_105_B'));
    $('#GF1103_104_D').val(getNumToString(getStrFloat($('#GF1103_105_D').val()),2));
    FGF1103_104_D($('#GF1103_104_D'));
}

/*GF1103_105_E*/
function FGF1103_105_E(obj){
    showStr(obj);
    $('#GF1103_105_A').val(getNumToString(getStrFloat($('#GF1103_105_B').val())+getStrFloat($('#GF1103_105_E').val()),2));
    FGF1103_105_A($('#GF1103_105_A'));
    $('#GF1103_105_E').val(getNumToString(getStrFloat($('#GF1103_105_F').val())+getStrFloat($('#GF1103_105_G').val())+getStrFloat($('#GF1103_105_H').val()),2));
}

/*GF1103_105_F*/
function FGF1103_105_F(obj){
    showStr(obj);
    $('#GF1103_105_E').val(getNumToString(getStrFloat($('#GF1103_105_F').val())+getStrFloat($('#GF1103_105_G').val())+getStrFloat($('#GF1103_105_H').val()),2));
    FGF1103_105_E($('#GF1103_105_E'));
    $('#GF1103_104_F').val(getNumToString(getStrFloat($('#GF1103_105_F').val()),2));
    FGF1103_104_F($('#GF1103_104_F'));
}

/*GF1103_105_G*/
function FGF1103_105_G(obj){
    showStr(obj);
    $('#GF1103_105_E').val(getNumToString(getStrFloat($('#GF1103_105_F').val())+getStrFloat($('#GF1103_105_G').val())+getStrFloat($('#GF1103_105_H').val()),2));
    FGF1103_105_E($('#GF1103_105_E'));
    $('#GF1103_104_G').val(getNumToString(getStrFloat($('#GF1103_105_G').val()),2));
    FGF1103_104_G($('#GF1103_104_G'));
}

/*GF1103_105_H*/
function FGF1103_105_H(obj){
    showStr(obj);
    $('#GF1103_105_E').val(getNumToString(getStrFloat($('#GF1103_105_F').val())+getStrFloat($('#GF1103_105_G').val())+getStrFloat($('#GF1103_105_H').val()),2));
    FGF1103_105_E($('#GF1103_105_E'));
    $('#GF1103_104_H').val(getNumToString(getStrFloat($('#GF1103_105_H').val()),2));
    FGF1103_104_H($('#GF1103_104_H'));
}

/*GF1103_106_A*/
function FGF1103_106_A(obj){
    showStr(obj);
    $('#GF1103_106_A').val(getNumToString(getStrFloat($('#GF1103_106_B').val())+getStrFloat($('#GF1103_106_E').val()),2));
}

/*GF1103_106_B*/
function FGF1103_106_B(obj){
    showStr(obj);
    $('#GF1103_106_A').val(getNumToString(getStrFloat($('#GF1103_106_B').val())+getStrFloat($('#GF1103_106_E').val()),2));
    FGF1103_106_A($('#GF1103_106_A'));
    $('#GF1103_106_B').val(getNumToString(getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_106_D').val()),2));
}

/*GF1103_106_C*/
function FGF1103_106_C(obj){
    showStr(obj);
    $('#GF1103_106_B').val(getNumToString(getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_106_D').val()),2));
    FGF1103_106_B($('#GF1103_106_B'));
    $('#GF1103_106_C').val(getNumToString(getStrFloat($('#GF1103_107_C').val())+getStrFloat($('#GF1103_108_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_106_D*/
function FGF1103_106_D(obj){
    showStr(obj);
    $('#GF1103_106_B').val(getNumToString(getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_106_D').val()),2));
    FGF1103_106_B($('#GF1103_106_B'));
    $('#GF1103_106_D').val(getNumToString(getStrFloat($('#GF1103_107_D').val())+getStrFloat($('#GF1103_108_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_106_E*/
function FGF1103_106_E(obj){
    showStr(obj);
    $('#GF1103_106_A').val(getNumToString(getStrFloat($('#GF1103_106_B').val())+getStrFloat($('#GF1103_106_E').val()),2));
    FGF1103_106_A($('#GF1103_106_A'));
    $('#GF1103_106_E').val(getNumToString(getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_106_H').val()),2));
}

/*GF1103_106_F*/
function FGF1103_106_F(obj){
    showStr(obj);
    $('#GF1103_106_E').val(getNumToString(getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_106_H').val()),2));
    FGF1103_106_E($('#GF1103_106_E'));
    $('#GF1103_106_F').val(getNumToString(getStrFloat($('#GF1103_107_F').val())+getStrFloat($('#GF1103_108_F').val()),2));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
}

/*GF1103_106_G*/
function FGF1103_106_G(obj){
    showStr(obj);
    $('#GF1103_106_E').val(getNumToString(getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_106_H').val()),2));
    FGF1103_106_E($('#GF1103_106_E'));
    $('#GF1103_106_G').val(getNumToString(getStrFloat($('#GF1103_107_G').val())+getStrFloat($('#GF1103_108_G').val()),2));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_106_H*/
function FGF1103_106_H(obj){
    showStr(obj);
    $('#GF1103_106_E').val(getNumToString(getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_106_H').val()),2));
    FGF1103_106_E($('#GF1103_106_E'));
    $('#GF1103_106_H').val(getNumToString(getStrFloat($('#GF1103_107_H').val())+getStrFloat($('#GF1103_108_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_107_A*/
function FGF1103_107_A(obj){
    showStr(obj);
    $('#GF1103_107_A').val(getNumToString(getStrFloat($('#GF1103_107_B').val())+getStrFloat($('#GF1103_107_E').val()),2));
}

/*GF1103_107_B*/
function FGF1103_107_B(obj){
    showStr(obj);
    $('#GF1103_107_A').val(getNumToString(getStrFloat($('#GF1103_107_B').val())+getStrFloat($('#GF1103_107_E').val()),2));
    FGF1103_107_A($('#GF1103_107_A'));
    $('#GF1103_107_B').val(getNumToString(getStrFloat($('#GF1103_107_C').val())+getStrFloat($('#GF1103_107_D').val()),2));
}

/*GF1103_107_C*/
function FGF1103_107_C(obj){
    showStr(obj);
    $('#GF1103_106_C').val(getNumToString(getStrFloat($('#GF1103_107_C').val())+getStrFloat($('#GF1103_108_C').val()),2));
    FGF1103_106_C($('#GF1103_106_C'));
    $('#GF1103_107_B').val(getNumToString(getStrFloat($('#GF1103_107_C').val())+getStrFloat($('#GF1103_107_D').val()),2));
    FGF1103_107_B($('#GF1103_107_B'));
}

/*GF1103_107_D*/
function FGF1103_107_D(obj){
    showStr(obj);
    $('#GF1103_106_D').val(getNumToString(getStrFloat($('#GF1103_107_D').val())+getStrFloat($('#GF1103_108_D').val()),2));
    FGF1103_106_D($('#GF1103_106_D'));
    $('#GF1103_107_B').val(getNumToString(getStrFloat($('#GF1103_107_C').val())+getStrFloat($('#GF1103_107_D').val()),2));
    FGF1103_107_B($('#GF1103_107_B'));
}

/*GF1103_107_E*/
function FGF1103_107_E(obj){
    showStr(obj);
    $('#GF1103_107_A').val(getNumToString(getStrFloat($('#GF1103_107_B').val())+getStrFloat($('#GF1103_107_E').val()),2));
    FGF1103_107_A($('#GF1103_107_A'));
    $('#GF1103_107_E').val(getNumToString(getStrFloat($('#GF1103_107_F').val())+getStrFloat($('#GF1103_107_G').val())+getStrFloat($('#GF1103_107_H').val()),2));
}

/*GF1103_107_F*/
function FGF1103_107_F(obj){
    showStr(obj);
    $('#GF1103_106_F').val(getNumToString(getStrFloat($('#GF1103_107_F').val())+getStrFloat($('#GF1103_108_F').val()),2));
    FGF1103_106_F($('#GF1103_106_F'));
    $('#GF1103_107_E').val(getNumToString(getStrFloat($('#GF1103_107_F').val())+getStrFloat($('#GF1103_107_G').val())+getStrFloat($('#GF1103_107_H').val()),2));
    FGF1103_107_E($('#GF1103_107_E'));
}

/*GF1103_107_G*/
function FGF1103_107_G(obj){
    showStr(obj);
    $('#GF1103_106_G').val(getNumToString(getStrFloat($('#GF1103_107_G').val())+getStrFloat($('#GF1103_108_G').val()),2));
    FGF1103_106_G($('#GF1103_106_G'));
    $('#GF1103_107_E').val(getNumToString(getStrFloat($('#GF1103_107_F').val())+getStrFloat($('#GF1103_107_G').val())+getStrFloat($('#GF1103_107_H').val()),2));
    FGF1103_107_E($('#GF1103_107_E'));
}

/*GF1103_107_H*/
function FGF1103_107_H(obj){
    showStr(obj);
    $('#GF1103_106_H').val(getNumToString(getStrFloat($('#GF1103_107_H').val())+getStrFloat($('#GF1103_108_H').val()),2));
    FGF1103_106_H($('#GF1103_106_H'));
    $('#GF1103_107_E').val(getNumToString(getStrFloat($('#GF1103_107_F').val())+getStrFloat($('#GF1103_107_G').val())+getStrFloat($('#GF1103_107_H').val()),2));
    FGF1103_107_E($('#GF1103_107_E'));
}

/*GF1103_108_A*/
function FGF1103_108_A(obj){
    showStr(obj);
    $('#GF1103_108_A').val(getNumToString(getStrFloat($('#GF1103_108_B').val())+getStrFloat($('#GF1103_108_E').val()),2));
}

/*GF1103_108_B*/
function FGF1103_108_B(obj){
    showStr(obj);
    $('#GF1103_108_A').val(getNumToString(getStrFloat($('#GF1103_108_B').val())+getStrFloat($('#GF1103_108_E').val()),2));
    FGF1103_108_A($('#GF1103_108_A'));
    $('#GF1103_108_B').val(getNumToString(getStrFloat($('#GF1103_108_C').val())+getStrFloat($('#GF1103_108_D').val()),2));
}

/*GF1103_108_C*/
function FGF1103_108_C(obj){
    showStr(obj);
    $('#GF1103_106_C').val(getNumToString(getStrFloat($('#GF1103_107_C').val())+getStrFloat($('#GF1103_108_C').val()),2));
    FGF1103_106_C($('#GF1103_106_C'));
    $('#GF1103_108_B').val(getNumToString(getStrFloat($('#GF1103_108_C').val())+getStrFloat($('#GF1103_108_D').val()),2));
    FGF1103_108_B($('#GF1103_108_B'));
}

/*GF1103_108_D*/
function FGF1103_108_D(obj){
    showStr(obj);
    $('#GF1103_106_D').val(getNumToString(getStrFloat($('#GF1103_107_D').val())+getStrFloat($('#GF1103_108_D').val()),2));
    FGF1103_106_D($('#GF1103_106_D'));
    $('#GF1103_108_B').val(getNumToString(getStrFloat($('#GF1103_108_C').val())+getStrFloat($('#GF1103_108_D').val()),2));
    FGF1103_108_B($('#GF1103_108_B'));
}

/*GF1103_108_E*/
function FGF1103_108_E(obj){
    showStr(obj);
    $('#GF1103_108_A').val(getNumToString(getStrFloat($('#GF1103_108_B').val())+getStrFloat($('#GF1103_108_E').val()),2));
    FGF1103_108_A($('#GF1103_108_A'));
    $('#GF1103_108_E').val(getNumToString(getStrFloat($('#GF1103_108_F').val())+getStrFloat($('#GF1103_108_G').val())+getStrFloat($('#GF1103_108_H').val()),2));
}

/*GF1103_108_F*/
function FGF1103_108_F(obj){
    showStr(obj);
    $('#GF1103_106_F').val(getNumToString(getStrFloat($('#GF1103_107_F').val())+getStrFloat($('#GF1103_108_F').val()),2));
    FGF1103_106_F($('#GF1103_106_F'));
    $('#GF1103_108_E').val(getNumToString(getStrFloat($('#GF1103_108_F').val())+getStrFloat($('#GF1103_108_G').val())+getStrFloat($('#GF1103_108_H').val()),2));
    FGF1103_108_E($('#GF1103_108_E'));
}

/*GF1103_108_G*/
function FGF1103_108_G(obj){
    showStr(obj);
    $('#GF1103_106_G').val(getNumToString(getStrFloat($('#GF1103_107_G').val())+getStrFloat($('#GF1103_108_G').val()),2));
    FGF1103_106_G($('#GF1103_106_G'));
    $('#GF1103_108_E').val(getNumToString(getStrFloat($('#GF1103_108_F').val())+getStrFloat($('#GF1103_108_G').val())+getStrFloat($('#GF1103_108_H').val()),2));
    FGF1103_108_E($('#GF1103_108_E'));
}

/*GF1103_108_H*/
function FGF1103_108_H(obj){
    showStr(obj);
    $('#GF1103_106_H').val(getNumToString(getStrFloat($('#GF1103_107_H').val())+getStrFloat($('#GF1103_108_H').val()),2));
    FGF1103_106_H($('#GF1103_106_H'));
    $('#GF1103_108_E').val(getNumToString(getStrFloat($('#GF1103_108_F').val())+getStrFloat($('#GF1103_108_G').val())+getStrFloat($('#GF1103_108_H').val()),2));
    FGF1103_108_E($('#GF1103_108_E'));
}

/*GF1103_109_A*/
function FGF1103_109_A(obj){
    showStr(obj);
    $('#GF1103_109_A').val(getNumToString(getStrFloat($('#GF1103_109_B').val())+getStrFloat($('#GF1103_109_E').val()),2));
}

/*GF1103_109_B*/
function FGF1103_109_B(obj){
    showStr(obj);
    $('#GF1103_109_A').val(getNumToString(getStrFloat($('#GF1103_109_B').val())+getStrFloat($('#GF1103_109_E').val()),2));
    FGF1103_109_A($('#GF1103_109_A'));
    $('#GF1103_109_B').val(getNumToString(getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_109_D').val()),2));
}

/*GF1103_109_C*/
function FGF1103_109_C(obj){
    showStr(obj);
    $('#GF1103_109_B').val(getNumToString(getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_109_D').val()),2));
    FGF1103_109_B($('#GF1103_109_B'));
    $('#GF1103_109_C').val(getNumToString(getStrFloat($('#GF1103_110_C').val())+getStrFloat($('#GF1103_111_C').val())+getStrFloat($('#GF1103_112_C').val())+getStrFloat($('#GF1103_113_C').val())+getStrFloat($('#GF1103_114_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_109_D*/
function FGF1103_109_D(obj){
    showStr(obj);
    $('#GF1103_109_B').val(getNumToString(getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_109_D').val()),2));
    FGF1103_109_B($('#GF1103_109_B'));
    $('#GF1103_109_D').val(getNumToString(getStrFloat($('#GF1103_110_D').val())+getStrFloat($('#GF1103_111_D').val())+getStrFloat($('#GF1103_112_D').val())+getStrFloat($('#GF1103_113_D').val())+getStrFloat($('#GF1103_114_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_109_E*/
function FGF1103_109_E(obj){
    showStr(obj);
    $('#GF1103_109_A').val(getNumToString(getStrFloat($('#GF1103_109_B').val())+getStrFloat($('#GF1103_109_E').val()),2));
    FGF1103_109_A($('#GF1103_109_A'));
    $('#GF1103_109_E').val(getNumToString(getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_109_H').val()),2));
}

/*GF1103_109_F*/
function FGF1103_109_F(obj){
    showStr(obj);
    $('#GF1103_109_E').val(getNumToString(getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_109_H').val()),2));
    FGF1103_109_E($('#GF1103_109_E'));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
    $('#GF1103_109_F').val(getNumToString(getStrFloat($('#GF1103_110_F').val())+getStrFloat($('#GF1103_111_F').val())+getStrFloat($('#GF1103_112_F').val())+getStrFloat($('#GF1103_113_F').val())+getStrFloat($('#GF1103_114_F').val()),2));
}

/*GF1103_109_G*/
function FGF1103_109_G(obj){
    showStr(obj);
    $('#GF1103_109_E').val(getNumToString(getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_109_H').val()),2));
    FGF1103_109_E($('#GF1103_109_E'));
    $('#GF1103_109_G').val(getNumToString(getStrFloat($('#GF1103_110_G').val())+getStrFloat($('#GF1103_111_G').val())+getStrFloat($('#GF1103_112_G').val())+getStrFloat($('#GF1103_113_G').val())+getStrFloat($('#GF1103_114_G').val()),2));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_109_H*/
function FGF1103_109_H(obj){
    showStr(obj);
    $('#GF1103_109_E').val(getNumToString(getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_109_H').val()),2));
    FGF1103_109_E($('#GF1103_109_E'));
    $('#GF1103_109_H').val(getNumToString(getStrFloat($('#GF1103_110_H').val())+getStrFloat($('#GF1103_111_H').val())+getStrFloat($('#GF1103_112_H').val())+getStrFloat($('#GF1103_113_H').val())+getStrFloat($('#GF1103_114_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_110_A*/
function FGF1103_110_A(obj){
    showStr(obj);
    $('#GF1103_110_A').val(getNumToString(getStrFloat($('#GF1103_110_B').val())+getStrFloat($('#GF1103_110_E').val()),2));
}

/*GF1103_110_B*/
function FGF1103_110_B(obj){
    showStr(obj);
    $('#GF1103_110_A').val(getNumToString(getStrFloat($('#GF1103_110_B').val())+getStrFloat($('#GF1103_110_E').val()),2));
    FGF1103_110_A($('#GF1103_110_A'));
    $('#GF1103_110_B').val(getNumToString(getStrFloat($('#GF1103_110_C').val())+getStrFloat($('#GF1103_110_D').val()),2));
}

/*GF1103_110_C*/
function FGF1103_110_C(obj){
    showStr(obj);
    $('#GF1103_109_C').val(getNumToString(getStrFloat($('#GF1103_110_C').val())+getStrFloat($('#GF1103_111_C').val())+getStrFloat($('#GF1103_112_C').val())+getStrFloat($('#GF1103_113_C').val())+getStrFloat($('#GF1103_114_C').val()),2));
    FGF1103_109_C($('#GF1103_109_C'));
    $('#GF1103_110_B').val(getNumToString(getStrFloat($('#GF1103_110_C').val())+getStrFloat($('#GF1103_110_D').val()),2));
    FGF1103_110_B($('#GF1103_110_B'));
}

/*GF1103_110_D*/
function FGF1103_110_D(obj){
    showStr(obj);
    $('#GF1103_109_D').val(getNumToString(getStrFloat($('#GF1103_110_D').val())+getStrFloat($('#GF1103_111_D').val())+getStrFloat($('#GF1103_112_D').val())+getStrFloat($('#GF1103_113_D').val())+getStrFloat($('#GF1103_114_D').val()),2));
    FGF1103_109_D($('#GF1103_109_D'));
    $('#GF1103_110_B').val(getNumToString(getStrFloat($('#GF1103_110_C').val())+getStrFloat($('#GF1103_110_D').val()),2));
    FGF1103_110_B($('#GF1103_110_B'));
}

/*GF1103_110_E*/
function FGF1103_110_E(obj){
    showStr(obj);
    $('#GF1103_110_A').val(getNumToString(getStrFloat($('#GF1103_110_B').val())+getStrFloat($('#GF1103_110_E').val()),2));
    FGF1103_110_A($('#GF1103_110_A'));
    $('#GF1103_110_E').val(getNumToString(getStrFloat($('#GF1103_110_F').val())+getStrFloat($('#GF1103_110_G').val())+getStrFloat($('#GF1103_110_H').val()),2));
}

/*GF1103_110_F*/
function FGF1103_110_F(obj){
    showStr(obj);
    $('#GF1103_110_E').val(getNumToString(getStrFloat($('#GF1103_110_F').val())+getStrFloat($('#GF1103_110_G').val())+getStrFloat($('#GF1103_110_H').val()),2));
    FGF1103_110_E($('#GF1103_110_E'));
    $('#GF1103_109_F').val(getNumToString(getStrFloat($('#GF1103_110_F').val())+getStrFloat($('#GF1103_111_F').val())+getStrFloat($('#GF1103_112_F').val())+getStrFloat($('#GF1103_113_F').val())+getStrFloat($('#GF1103_114_F').val()),2));
    FGF1103_109_F($('#GF1103_109_F'));
}

/*GF1103_110_G*/
function FGF1103_110_G(obj){
    showStr(obj);
    $('#GF1103_109_G').val(getNumToString(getStrFloat($('#GF1103_110_G').val())+getStrFloat($('#GF1103_111_G').val())+getStrFloat($('#GF1103_112_G').val())+getStrFloat($('#GF1103_113_G').val())+getStrFloat($('#GF1103_114_G').val()),2));
    FGF1103_109_G($('#GF1103_109_G'));
    $('#GF1103_110_E').val(getNumToString(getStrFloat($('#GF1103_110_F').val())+getStrFloat($('#GF1103_110_G').val())+getStrFloat($('#GF1103_110_H').val()),2));
    FGF1103_110_E($('#GF1103_110_E'));
}

/*GF1103_110_H*/
function FGF1103_110_H(obj){
    showStr(obj);
    $('#GF1103_109_H').val(getNumToString(getStrFloat($('#GF1103_110_H').val())+getStrFloat($('#GF1103_111_H').val())+getStrFloat($('#GF1103_112_H').val())+getStrFloat($('#GF1103_113_H').val())+getStrFloat($('#GF1103_114_H').val()),2));
    FGF1103_109_H($('#GF1103_109_H'));
    $('#GF1103_110_E').val(getNumToString(getStrFloat($('#GF1103_110_F').val())+getStrFloat($('#GF1103_110_G').val())+getStrFloat($('#GF1103_110_H').val()),2));
    FGF1103_110_E($('#GF1103_110_E'));
}

/*GF1103_111_A*/
function FGF1103_111_A(obj){
    showStr(obj);
    $('#GF1103_111_A').val(getNumToString(getStrFloat($('#GF1103_111_B').val())+getStrFloat($('#GF1103_111_E').val()),2));
}

/*GF1103_111_B*/
function FGF1103_111_B(obj){
    showStr(obj);
    $('#GF1103_111_A').val(getNumToString(getStrFloat($('#GF1103_111_B').val())+getStrFloat($('#GF1103_111_E').val()),2));
    FGF1103_111_A($('#GF1103_111_A'));
    $('#GF1103_111_B').val(getNumToString(getStrFloat($('#GF1103_111_C').val())+getStrFloat($('#GF1103_111_D').val()),2));
}

/*GF1103_111_C*/
function FGF1103_111_C(obj){
    showStr(obj);
    $('#GF1103_109_C').val(getNumToString(getStrFloat($('#GF1103_110_C').val())+getStrFloat($('#GF1103_111_C').val())+getStrFloat($('#GF1103_112_C').val())+getStrFloat($('#GF1103_113_C').val())+getStrFloat($('#GF1103_114_C').val()),2));
    FGF1103_109_C($('#GF1103_109_C'));
    $('#GF1103_111_B').val(getNumToString(getStrFloat($('#GF1103_111_C').val())+getStrFloat($('#GF1103_111_D').val()),2));
    FGF1103_111_B($('#GF1103_111_B'));
}

/*GF1103_111_D*/
function FGF1103_111_D(obj){
    showStr(obj);
    $('#GF1103_109_D').val(getNumToString(getStrFloat($('#GF1103_110_D').val())+getStrFloat($('#GF1103_111_D').val())+getStrFloat($('#GF1103_112_D').val())+getStrFloat($('#GF1103_113_D').val())+getStrFloat($('#GF1103_114_D').val()),2));
    FGF1103_109_D($('#GF1103_109_D'));
    $('#GF1103_111_B').val(getNumToString(getStrFloat($('#GF1103_111_C').val())+getStrFloat($('#GF1103_111_D').val()),2));
    FGF1103_111_B($('#GF1103_111_B'));
}

/*GF1103_111_E*/
function FGF1103_111_E(obj){
    showStr(obj);
    $('#GF1103_111_A').val(getNumToString(getStrFloat($('#GF1103_111_B').val())+getStrFloat($('#GF1103_111_E').val()),2));
    FGF1103_111_A($('#GF1103_111_A'));
    $('#GF1103_111_E').val(getNumToString(getStrFloat($('#GF1103_111_F').val())+getStrFloat($('#GF1103_111_G').val())+getStrFloat($('#GF1103_111_H').val()),2));
}

/*GF1103_111_F*/
function FGF1103_111_F(obj){
    showStr(obj);
    $('#GF1103_111_E').val(getNumToString(getStrFloat($('#GF1103_111_F').val())+getStrFloat($('#GF1103_111_G').val())+getStrFloat($('#GF1103_111_H').val()),2));
    FGF1103_111_E($('#GF1103_111_E'));
    $('#GF1103_109_F').val(getNumToString(getStrFloat($('#GF1103_110_F').val())+getStrFloat($('#GF1103_111_F').val())+getStrFloat($('#GF1103_112_F').val())+getStrFloat($('#GF1103_113_F').val())+getStrFloat($('#GF1103_114_F').val()),2));
    FGF1103_109_F($('#GF1103_109_F'));
}

/*GF1103_111_G*/
function FGF1103_111_G(obj){
    showStr(obj);
    $('#GF1103_109_G').val(getNumToString(getStrFloat($('#GF1103_110_G').val())+getStrFloat($('#GF1103_111_G').val())+getStrFloat($('#GF1103_112_G').val())+getStrFloat($('#GF1103_113_G').val())+getStrFloat($('#GF1103_114_G').val()),2));
    FGF1103_109_G($('#GF1103_109_G'));
    $('#GF1103_111_E').val(getNumToString(getStrFloat($('#GF1103_111_F').val())+getStrFloat($('#GF1103_111_G').val())+getStrFloat($('#GF1103_111_H').val()),2));
    FGF1103_111_E($('#GF1103_111_E'));
}

/*GF1103_111_H*/
function FGF1103_111_H(obj){
    showStr(obj);
    $('#GF1103_109_H').val(getNumToString(getStrFloat($('#GF1103_110_H').val())+getStrFloat($('#GF1103_111_H').val())+getStrFloat($('#GF1103_112_H').val())+getStrFloat($('#GF1103_113_H').val())+getStrFloat($('#GF1103_114_H').val()),2));
    FGF1103_109_H($('#GF1103_109_H'));
    $('#GF1103_111_E').val(getNumToString(getStrFloat($('#GF1103_111_F').val())+getStrFloat($('#GF1103_111_G').val())+getStrFloat($('#GF1103_111_H').val()),2));
    FGF1103_111_E($('#GF1103_111_E'));
}

/*GF1103_112_A*/
function FGF1103_112_A(obj){
    showStr(obj);
    $('#GF1103_112_A').val(getNumToString(getStrFloat($('#GF1103_112_B').val())+getStrFloat($('#GF1103_112_E').val()),2));
}

/*GF1103_112_B*/
function FGF1103_112_B(obj){
    showStr(obj);
    $('#GF1103_112_A').val(getNumToString(getStrFloat($('#GF1103_112_B').val())+getStrFloat($('#GF1103_112_E').val()),2));
    FGF1103_112_A($('#GF1103_112_A'));
    $('#GF1103_112_B').val(getNumToString(getStrFloat($('#GF1103_112_C').val())+getStrFloat($('#GF1103_112_D').val()),2));
}

/*GF1103_112_C*/
function FGF1103_112_C(obj){
    showStr(obj);
    $('#GF1103_109_C').val(getNumToString(getStrFloat($('#GF1103_110_C').val())+getStrFloat($('#GF1103_111_C').val())+getStrFloat($('#GF1103_112_C').val())+getStrFloat($('#GF1103_113_C').val())+getStrFloat($('#GF1103_114_C').val()),2));
    FGF1103_109_C($('#GF1103_109_C'));
    $('#GF1103_112_B').val(getNumToString(getStrFloat($('#GF1103_112_C').val())+getStrFloat($('#GF1103_112_D').val()),2));
    FGF1103_112_B($('#GF1103_112_B'));
}

/*GF1103_112_D*/
function FGF1103_112_D(obj){
    showStr(obj);
    $('#GF1103_109_D').val(getNumToString(getStrFloat($('#GF1103_110_D').val())+getStrFloat($('#GF1103_111_D').val())+getStrFloat($('#GF1103_112_D').val())+getStrFloat($('#GF1103_113_D').val())+getStrFloat($('#GF1103_114_D').val()),2));
    FGF1103_109_D($('#GF1103_109_D'));
    $('#GF1103_112_B').val(getNumToString(getStrFloat($('#GF1103_112_C').val())+getStrFloat($('#GF1103_112_D').val()),2));
    FGF1103_112_B($('#GF1103_112_B'));
}

/*GF1103_112_E*/
function FGF1103_112_E(obj){
    showStr(obj);
    $('#GF1103_112_A').val(getNumToString(getStrFloat($('#GF1103_112_B').val())+getStrFloat($('#GF1103_112_E').val()),2));
    FGF1103_112_A($('#GF1103_112_A'));
    $('#GF1103_112_E').val(getNumToString(getStrFloat($('#GF1103_112_F').val())+getStrFloat($('#GF1103_112_G').val())+getStrFloat($('#GF1103_112_H').val()),2));
}

/*GF1103_112_F*/
function FGF1103_112_F(obj){
    showStr(obj);
    $('#GF1103_112_E').val(getNumToString(getStrFloat($('#GF1103_112_F').val())+getStrFloat($('#GF1103_112_G').val())+getStrFloat($('#GF1103_112_H').val()),2));
    FGF1103_112_E($('#GF1103_112_E'));
    $('#GF1103_109_F').val(getNumToString(getStrFloat($('#GF1103_110_F').val())+getStrFloat($('#GF1103_111_F').val())+getStrFloat($('#GF1103_112_F').val())+getStrFloat($('#GF1103_113_F').val())+getStrFloat($('#GF1103_114_F').val()),2));
    FGF1103_109_F($('#GF1103_109_F'));
}

/*GF1103_112_G*/
function FGF1103_112_G(obj){
    showStr(obj);
    $('#GF1103_109_G').val(getNumToString(getStrFloat($('#GF1103_110_G').val())+getStrFloat($('#GF1103_111_G').val())+getStrFloat($('#GF1103_112_G').val())+getStrFloat($('#GF1103_113_G').val())+getStrFloat($('#GF1103_114_G').val()),2));
    FGF1103_109_G($('#GF1103_109_G'));
    $('#GF1103_112_E').val(getNumToString(getStrFloat($('#GF1103_112_F').val())+getStrFloat($('#GF1103_112_G').val())+getStrFloat($('#GF1103_112_H').val()),2));
    FGF1103_112_E($('#GF1103_112_E'));
}

/*GF1103_112_H*/
function FGF1103_112_H(obj){
    showStr(obj);
    $('#GF1103_109_H').val(getNumToString(getStrFloat($('#GF1103_110_H').val())+getStrFloat($('#GF1103_111_H').val())+getStrFloat($('#GF1103_112_H').val())+getStrFloat($('#GF1103_113_H').val())+getStrFloat($('#GF1103_114_H').val()),2));
    FGF1103_109_H($('#GF1103_109_H'));
    $('#GF1103_112_E').val(getNumToString(getStrFloat($('#GF1103_112_F').val())+getStrFloat($('#GF1103_112_G').val())+getStrFloat($('#GF1103_112_H').val()),2));
    FGF1103_112_E($('#GF1103_112_E'));
}

/*GF1103_113_A*/
function FGF1103_113_A(obj){
    showStr(obj);
    $('#GF1103_113_A').val(getNumToString(getStrFloat($('#GF1103_113_B').val())+getStrFloat($('#GF1103_113_E').val()),2));
}

/*GF1103_113_B*/
function FGF1103_113_B(obj){
    showStr(obj);
    $('#GF1103_113_A').val(getNumToString(getStrFloat($('#GF1103_113_B').val())+getStrFloat($('#GF1103_113_E').val()),2));
    FGF1103_113_A($('#GF1103_113_A'));
    $('#GF1103_113_B').val(getNumToString(getStrFloat($('#GF1103_113_C').val())+getStrFloat($('#GF1103_113_D').val()),2));
}

/*GF1103_113_C*/
function FGF1103_113_C(obj){
    showStr(obj);
    $('#GF1103_109_C').val(getNumToString(getStrFloat($('#GF1103_110_C').val())+getStrFloat($('#GF1103_111_C').val())+getStrFloat($('#GF1103_112_C').val())+getStrFloat($('#GF1103_113_C').val())+getStrFloat($('#GF1103_114_C').val()),2));
    FGF1103_109_C($('#GF1103_109_C'));
    $('#GF1103_113_B').val(getNumToString(getStrFloat($('#GF1103_113_C').val())+getStrFloat($('#GF1103_113_D').val()),2));
    FGF1103_113_B($('#GF1103_113_B'));
}

/*GF1103_113_D*/
function FGF1103_113_D(obj){
    showStr(obj);
    $('#GF1103_109_D').val(getNumToString(getStrFloat($('#GF1103_110_D').val())+getStrFloat($('#GF1103_111_D').val())+getStrFloat($('#GF1103_112_D').val())+getStrFloat($('#GF1103_113_D').val())+getStrFloat($('#GF1103_114_D').val()),2));
    FGF1103_109_D($('#GF1103_109_D'));
    $('#GF1103_113_B').val(getNumToString(getStrFloat($('#GF1103_113_C').val())+getStrFloat($('#GF1103_113_D').val()),2));
    FGF1103_113_B($('#GF1103_113_B'));
}

/*GF1103_113_E*/
function FGF1103_113_E(obj){
    showStr(obj);
    $('#GF1103_113_A').val(getNumToString(getStrFloat($('#GF1103_113_B').val())+getStrFloat($('#GF1103_113_E').val()),2));
    FGF1103_113_A($('#GF1103_113_A'));
    $('#GF1103_113_E').val(getNumToString(getStrFloat($('#GF1103_113_F').val())+getStrFloat($('#GF1103_113_G').val())+getStrFloat($('#GF1103_113_H').val()),2));
}

/*GF1103_113_F*/
function FGF1103_113_F(obj){
    showStr(obj);
    $('#GF1103_113_E').val(getNumToString(getStrFloat($('#GF1103_113_F').val())+getStrFloat($('#GF1103_113_G').val())+getStrFloat($('#GF1103_113_H').val()),2));
    FGF1103_113_E($('#GF1103_113_E'));
    $('#GF1103_109_F').val(getNumToString(getStrFloat($('#GF1103_110_F').val())+getStrFloat($('#GF1103_111_F').val())+getStrFloat($('#GF1103_112_F').val())+getStrFloat($('#GF1103_113_F').val())+getStrFloat($('#GF1103_114_F').val()),2));
    FGF1103_109_F($('#GF1103_109_F'));
}

/*GF1103_113_G*/
function FGF1103_113_G(obj){
    showStr(obj);
    $('#GF1103_109_G').val(getNumToString(getStrFloat($('#GF1103_110_G').val())+getStrFloat($('#GF1103_111_G').val())+getStrFloat($('#GF1103_112_G').val())+getStrFloat($('#GF1103_113_G').val())+getStrFloat($('#GF1103_114_G').val()),2));
    FGF1103_109_G($('#GF1103_109_G'));
    $('#GF1103_113_E').val(getNumToString(getStrFloat($('#GF1103_113_F').val())+getStrFloat($('#GF1103_113_G').val())+getStrFloat($('#GF1103_113_H').val()),2));
    FGF1103_113_E($('#GF1103_113_E'));
}

/*GF1103_113_H*/
function FGF1103_113_H(obj){
    showStr(obj);
    $('#GF1103_109_H').val(getNumToString(getStrFloat($('#GF1103_110_H').val())+getStrFloat($('#GF1103_111_H').val())+getStrFloat($('#GF1103_112_H').val())+getStrFloat($('#GF1103_113_H').val())+getStrFloat($('#GF1103_114_H').val()),2));
    FGF1103_109_H($('#GF1103_109_H'));
    $('#GF1103_113_E').val(getNumToString(getStrFloat($('#GF1103_113_F').val())+getStrFloat($('#GF1103_113_G').val())+getStrFloat($('#GF1103_113_H').val()),2));
    FGF1103_113_E($('#GF1103_113_E'));
}

/*GF1103_114_A*/
function FGF1103_114_A(obj){
    showStr(obj);
    $('#GF1103_114_A').val(getNumToString(getStrFloat($('#GF1103_114_B').val())+getStrFloat($('#GF1103_114_E').val()),2));
}

/*GF1103_114_B*/
function FGF1103_114_B(obj){
    showStr(obj);
    $('#GF1103_114_A').val(getNumToString(getStrFloat($('#GF1103_114_B').val())+getStrFloat($('#GF1103_114_E').val()),2));
    FGF1103_114_A($('#GF1103_114_A'));
    $('#GF1103_114_B').val(getNumToString(getStrFloat($('#GF1103_114_C').val())+getStrFloat($('#GF1103_114_D').val()),2));
}

/*GF1103_114_C*/
function FGF1103_114_C(obj){
    showStr(obj);
    $('#GF1103_109_C').val(getNumToString(getStrFloat($('#GF1103_110_C').val())+getStrFloat($('#GF1103_111_C').val())+getStrFloat($('#GF1103_112_C').val())+getStrFloat($('#GF1103_113_C').val())+getStrFloat($('#GF1103_114_C').val()),2));
    FGF1103_109_C($('#GF1103_109_C'));
    $('#GF1103_114_B').val(getNumToString(getStrFloat($('#GF1103_114_C').val())+getStrFloat($('#GF1103_114_D').val()),2));
    FGF1103_114_B($('#GF1103_114_B'));
}

/*GF1103_114_D*/
function FGF1103_114_D(obj){
    showStr(obj);
    $('#GF1103_109_D').val(getNumToString(getStrFloat($('#GF1103_110_D').val())+getStrFloat($('#GF1103_111_D').val())+getStrFloat($('#GF1103_112_D').val())+getStrFloat($('#GF1103_113_D').val())+getStrFloat($('#GF1103_114_D').val()),2));
    FGF1103_109_D($('#GF1103_109_D'));
    $('#GF1103_114_B').val(getNumToString(getStrFloat($('#GF1103_114_C').val())+getStrFloat($('#GF1103_114_D').val()),2));
    FGF1103_114_B($('#GF1103_114_B'));
}

/*GF1103_114_E*/
function FGF1103_114_E(obj){
    showStr(obj);
    $('#GF1103_114_A').val(getNumToString(getStrFloat($('#GF1103_114_B').val())+getStrFloat($('#GF1103_114_E').val()),2));
    FGF1103_114_A($('#GF1103_114_A'));
    $('#GF1103_114_E').val(getNumToString(getStrFloat($('#GF1103_114_F').val())+getStrFloat($('#GF1103_114_G').val())+getStrFloat($('#GF1103_114_H').val()),2));
}

/*GF1103_114_F*/
function FGF1103_114_F(obj){
    showStr(obj);
    $('#GF1103_114_E').val(getNumToString(getStrFloat($('#GF1103_114_F').val())+getStrFloat($('#GF1103_114_G').val())+getStrFloat($('#GF1103_114_H').val()),2));
    FGF1103_114_E($('#GF1103_114_E'));
    $('#GF1103_109_F').val(getNumToString(getStrFloat($('#GF1103_110_F').val())+getStrFloat($('#GF1103_111_F').val())+getStrFloat($('#GF1103_112_F').val())+getStrFloat($('#GF1103_113_F').val())+getStrFloat($('#GF1103_114_F').val()),2));
    FGF1103_109_F($('#GF1103_109_F'));
}

/*GF1103_114_G*/
function FGF1103_114_G(obj){
    showStr(obj);
    $('#GF1103_109_G').val(getNumToString(getStrFloat($('#GF1103_110_G').val())+getStrFloat($('#GF1103_111_G').val())+getStrFloat($('#GF1103_112_G').val())+getStrFloat($('#GF1103_113_G').val())+getStrFloat($('#GF1103_114_G').val()),2));
    FGF1103_109_G($('#GF1103_109_G'));
    $('#GF1103_114_E').val(getNumToString(getStrFloat($('#GF1103_114_F').val())+getStrFloat($('#GF1103_114_G').val())+getStrFloat($('#GF1103_114_H').val()),2));
    FGF1103_114_E($('#GF1103_114_E'));
}

/*GF1103_114_H*/
function FGF1103_114_H(obj){
    showStr(obj);
    $('#GF1103_109_H').val(getNumToString(getStrFloat($('#GF1103_110_H').val())+getStrFloat($('#GF1103_111_H').val())+getStrFloat($('#GF1103_112_H').val())+getStrFloat($('#GF1103_113_H').val())+getStrFloat($('#GF1103_114_H').val()),2));
    FGF1103_109_H($('#GF1103_109_H'));
    $('#GF1103_114_E').val(getNumToString(getStrFloat($('#GF1103_114_F').val())+getStrFloat($('#GF1103_114_G').val())+getStrFloat($('#GF1103_114_H').val()),2));
    FGF1103_114_E($('#GF1103_114_E'));
}

/*GF1103_115_A*/
function FGF1103_115_A(obj){
    showStr(obj);
    $('#GF1103_115_A').val(getNumToString(getStrFloat($('#GF1103_115_B').val())+getStrFloat($('#GF1103_115_E').val()),2));
}

/*GF1103_115_B*/
function FGF1103_115_B(obj){
    showStr(obj);
    $('#GF1103_115_A').val(getNumToString(getStrFloat($('#GF1103_115_B').val())+getStrFloat($('#GF1103_115_E').val()),2));
    FGF1103_115_A($('#GF1103_115_A'));
    $('#GF1103_115_B').val(getNumToString(getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_115_D').val()),2));
}

/*GF1103_115_C*/
function FGF1103_115_C(obj){
    showStr(obj);
    $('#GF1103_115_B').val(getNumToString(getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_115_D').val()),2));
    FGF1103_115_B($('#GF1103_115_B'));
    $('#GF1103_115_C').val(getNumToString(getStrFloat($('#GF1103_116_C').val())+getStrFloat($('#GF1103_117_C').val())+getStrFloat($('#GF1103_118_C').val())+getStrFloat($('#GF1103_120_C').val())+getStrFloat($('#GF1103_121_C').val())+getStrFloat($('#GF1103_119_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_115_D*/
function FGF1103_115_D(obj){
    showStr(obj);
    $('#GF1103_115_B').val(getNumToString(getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_115_D').val()),2));
    FGF1103_115_B($('#GF1103_115_B'));
    $('#GF1103_115_D').val(getNumToString(getStrFloat($('#GF1103_116_D').val())+getStrFloat($('#GF1103_117_D').val())+getStrFloat($('#GF1103_118_D').val())+getStrFloat($('#GF1103_120_D').val())+getStrFloat($('#GF1103_121_D').val())+getStrFloat($('#GF1103_119_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_115_E*/
function FGF1103_115_E(obj){
    showStr(obj);
    $('#GF1103_115_A').val(getNumToString(getStrFloat($('#GF1103_115_B').val())+getStrFloat($('#GF1103_115_E').val()),2));
    FGF1103_115_A($('#GF1103_115_A'));
    $('#GF1103_115_E').val(getNumToString(getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_115_H').val()),2));
}

/*GF1103_115_F*/
function FGF1103_115_F(obj){
    showStr(obj);
    $('#GF1103_115_E').val(getNumToString(getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_115_H').val()),2));
    FGF1103_115_E($('#GF1103_115_E'));
    $('#GF1103_115_F').val(getNumToString(getStrFloat($('#GF1103_116_F').val())+getStrFloat($('#GF1103_117_F').val())+getStrFloat($('#GF1103_118_F').val())+getStrFloat($('#GF1103_120_F').val())+getStrFloat($('#GF1103_121_F').val())+getStrFloat($('#GF1103_119_F').val()),2));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
}

/*GF1103_115_G*/
function FGF1103_115_G(obj){
    showStr(obj);
    $('#GF1103_115_E').val(getNumToString(getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_115_H').val()),2));
    FGF1103_115_E($('#GF1103_115_E'));
    $('#GF1103_115_G').val(getNumToString(getStrFloat($('#GF1103_116_G').val())+getStrFloat($('#GF1103_117_G').val())+getStrFloat($('#GF1103_118_G').val())+getStrFloat($('#GF1103_120_G').val())+getStrFloat($('#GF1103_121_G').val())+getStrFloat($('#GF1103_119_G').val()),2));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_115_H*/
function FGF1103_115_H(obj){
    showStr(obj);
    $('#GF1103_115_E').val(getNumToString(getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_115_H').val()),2));
    FGF1103_115_E($('#GF1103_115_E'));
    $('#GF1103_115_H').val(getNumToString(getStrFloat($('#GF1103_116_H').val())+getStrFloat($('#GF1103_117_H').val())+getStrFloat($('#GF1103_118_H').val())+getStrFloat($('#GF1103_120_H').val())+getStrFloat($('#GF1103_121_H').val())+getStrFloat($('#GF1103_119_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_116_A*/
function FGF1103_116_A(obj){
    showStr(obj);
    $('#GF1103_116_A').val(getNumToString(getStrFloat($('#GF1103_116_B').val())+getStrFloat($('#GF1103_116_E').val()),2));
}

/*GF1103_116_B*/
function FGF1103_116_B(obj){
    showStr(obj);
    $('#GF1103_116_A').val(getNumToString(getStrFloat($('#GF1103_116_B').val())+getStrFloat($('#GF1103_116_E').val()),2));
    FGF1103_116_A($('#GF1103_116_A'));
    $('#GF1103_116_B').val(getNumToString(getStrFloat($('#GF1103_116_C').val())+getStrFloat($('#GF1103_116_D').val()),2));
}

/*GF1103_116_C*/
function FGF1103_116_C(obj){
    showStr(obj);
    $('#GF1103_115_C').val(getNumToString(getStrFloat($('#GF1103_116_C').val())+getStrFloat($('#GF1103_117_C').val())+getStrFloat($('#GF1103_118_C').val())+getStrFloat($('#GF1103_120_C').val())+getStrFloat($('#GF1103_121_C').val())+getStrFloat($('#GF1103_119_C').val()),2));
    FGF1103_115_C($('#GF1103_115_C'));
    $('#GF1103_116_B').val(getNumToString(getStrFloat($('#GF1103_116_C').val())+getStrFloat($('#GF1103_116_D').val()),2));
    FGF1103_116_B($('#GF1103_116_B'));
}

/*GF1103_116_D*/
function FGF1103_116_D(obj){
    showStr(obj);
    $('#GF1103_115_D').val(getNumToString(getStrFloat($('#GF1103_116_D').val())+getStrFloat($('#GF1103_117_D').val())+getStrFloat($('#GF1103_118_D').val())+getStrFloat($('#GF1103_120_D').val())+getStrFloat($('#GF1103_121_D').val())+getStrFloat($('#GF1103_119_D').val()),2));
    FGF1103_115_D($('#GF1103_115_D'));
    $('#GF1103_116_B').val(getNumToString(getStrFloat($('#GF1103_116_C').val())+getStrFloat($('#GF1103_116_D').val()),2));
    FGF1103_116_B($('#GF1103_116_B'));
}

/*GF1103_116_E*/
function FGF1103_116_E(obj){
    showStr(obj);
    $('#GF1103_116_A').val(getNumToString(getStrFloat($('#GF1103_116_B').val())+getStrFloat($('#GF1103_116_E').val()),2));
    FGF1103_116_A($('#GF1103_116_A'));
    $('#GF1103_116_E').val(getNumToString(getStrFloat($('#GF1103_116_F').val())+getStrFloat($('#GF1103_116_G').val())+getStrFloat($('#GF1103_116_H').val()),2));
}

/*GF1103_116_F*/
function FGF1103_116_F(obj){
    showStr(obj);
    $('#GF1103_115_F').val(getNumToString(getStrFloat($('#GF1103_116_F').val())+getStrFloat($('#GF1103_117_F').val())+getStrFloat($('#GF1103_118_F').val())+getStrFloat($('#GF1103_120_F').val())+getStrFloat($('#GF1103_121_F').val())+getStrFloat($('#GF1103_119_F').val()),2));
    FGF1103_115_F($('#GF1103_115_F'));
    $('#GF1103_116_E').val(getNumToString(getStrFloat($('#GF1103_116_F').val())+getStrFloat($('#GF1103_116_G').val())+getStrFloat($('#GF1103_116_H').val()),2));
    FGF1103_116_E($('#GF1103_116_E'));
}

/*GF1103_116_G*/
function FGF1103_116_G(obj){
    showStr(obj);
    $('#GF1103_115_G').val(getNumToString(getStrFloat($('#GF1103_116_G').val())+getStrFloat($('#GF1103_117_G').val())+getStrFloat($('#GF1103_118_G').val())+getStrFloat($('#GF1103_120_G').val())+getStrFloat($('#GF1103_121_G').val())+getStrFloat($('#GF1103_119_G').val()),2));
    FGF1103_115_G($('#GF1103_115_G'));
    $('#GF1103_116_E').val(getNumToString(getStrFloat($('#GF1103_116_F').val())+getStrFloat($('#GF1103_116_G').val())+getStrFloat($('#GF1103_116_H').val()),2));
    FGF1103_116_E($('#GF1103_116_E'));
}

/*GF1103_116_H*/
function FGF1103_116_H(obj){
    showStr(obj);
    $('#GF1103_115_H').val(getNumToString(getStrFloat($('#GF1103_116_H').val())+getStrFloat($('#GF1103_117_H').val())+getStrFloat($('#GF1103_118_H').val())+getStrFloat($('#GF1103_120_H').val())+getStrFloat($('#GF1103_121_H').val())+getStrFloat($('#GF1103_119_H').val()),2));
    FGF1103_115_H($('#GF1103_115_H'));
    $('#GF1103_116_E').val(getNumToString(getStrFloat($('#GF1103_116_F').val())+getStrFloat($('#GF1103_116_G').val())+getStrFloat($('#GF1103_116_H').val()),2));
    FGF1103_116_E($('#GF1103_116_E'));
}

/*GF1103_117_A*/
function FGF1103_117_A(obj){
    showStr(obj);
    $('#GF1103_117_A').val(getNumToString(getStrFloat($('#GF1103_117_B').val())+getStrFloat($('#GF1103_117_E').val()),2));
}

/*GF1103_117_B*/
function FGF1103_117_B(obj){
    showStr(obj);
    $('#GF1103_117_A').val(getNumToString(getStrFloat($('#GF1103_117_B').val())+getStrFloat($('#GF1103_117_E').val()),2));
    FGF1103_117_A($('#GF1103_117_A'));
    $('#GF1103_117_B').val(getNumToString(getStrFloat($('#GF1103_117_C').val())+getStrFloat($('#GF1103_117_D').val()),2));
}

/*GF1103_117_C*/
function FGF1103_117_C(obj){
    showStr(obj);
    $('#GF1103_115_C').val(getNumToString(getStrFloat($('#GF1103_116_C').val())+getStrFloat($('#GF1103_117_C').val())+getStrFloat($('#GF1103_118_C').val())+getStrFloat($('#GF1103_120_C').val())+getStrFloat($('#GF1103_121_C').val())+getStrFloat($('#GF1103_119_C').val()),2));
    FGF1103_115_C($('#GF1103_115_C'));
    $('#GF1103_117_B').val(getNumToString(getStrFloat($('#GF1103_117_C').val())+getStrFloat($('#GF1103_117_D').val()),2));
    FGF1103_117_B($('#GF1103_117_B'));
}

/*GF1103_117_D*/
function FGF1103_117_D(obj){
    showStr(obj);
    $('#GF1103_115_D').val(getNumToString(getStrFloat($('#GF1103_116_D').val())+getStrFloat($('#GF1103_117_D').val())+getStrFloat($('#GF1103_118_D').val())+getStrFloat($('#GF1103_120_D').val())+getStrFloat($('#GF1103_121_D').val())+getStrFloat($('#GF1103_119_D').val()),2));
    FGF1103_115_D($('#GF1103_115_D'));
    $('#GF1103_117_B').val(getNumToString(getStrFloat($('#GF1103_117_C').val())+getStrFloat($('#GF1103_117_D').val()),2));
    FGF1103_117_B($('#GF1103_117_B'));
}

/*GF1103_117_E*/
function FGF1103_117_E(obj){
    showStr(obj);
    $('#GF1103_117_A').val(getNumToString(getStrFloat($('#GF1103_117_B').val())+getStrFloat($('#GF1103_117_E').val()),2));
    FGF1103_117_A($('#GF1103_117_A'));
    $('#GF1103_117_E').val(getNumToString(getStrFloat($('#GF1103_117_F').val())+getStrFloat($('#GF1103_117_G').val())+getStrFloat($('#GF1103_117_H').val()),2));
}

/*GF1103_117_F*/
function FGF1103_117_F(obj){
    showStr(obj);
    $('#GF1103_115_F').val(getNumToString(getStrFloat($('#GF1103_116_F').val())+getStrFloat($('#GF1103_117_F').val())+getStrFloat($('#GF1103_118_F').val())+getStrFloat($('#GF1103_120_F').val())+getStrFloat($('#GF1103_121_F').val())+getStrFloat($('#GF1103_119_F').val()),2));
    FGF1103_115_F($('#GF1103_115_F'));
    $('#GF1103_117_E').val(getNumToString(getStrFloat($('#GF1103_117_F').val())+getStrFloat($('#GF1103_117_G').val())+getStrFloat($('#GF1103_117_H').val()),2));
    FGF1103_117_E($('#GF1103_117_E'));
}

/*GF1103_117_G*/
function FGF1103_117_G(obj){
    showStr(obj);
    $('#GF1103_115_G').val(getNumToString(getStrFloat($('#GF1103_116_G').val())+getStrFloat($('#GF1103_117_G').val())+getStrFloat($('#GF1103_118_G').val())+getStrFloat($('#GF1103_120_G').val())+getStrFloat($('#GF1103_121_G').val())+getStrFloat($('#GF1103_119_G').val()),2));
    FGF1103_115_G($('#GF1103_115_G'));
    $('#GF1103_117_E').val(getNumToString(getStrFloat($('#GF1103_117_F').val())+getStrFloat($('#GF1103_117_G').val())+getStrFloat($('#GF1103_117_H').val()),2));
    FGF1103_117_E($('#GF1103_117_E'));
}

/*GF1103_117_H*/
function FGF1103_117_H(obj){
    showStr(obj);
    $('#GF1103_115_H').val(getNumToString(getStrFloat($('#GF1103_116_H').val())+getStrFloat($('#GF1103_117_H').val())+getStrFloat($('#GF1103_118_H').val())+getStrFloat($('#GF1103_120_H').val())+getStrFloat($('#GF1103_121_H').val())+getStrFloat($('#GF1103_119_H').val()),2));
    FGF1103_115_H($('#GF1103_115_H'));
    $('#GF1103_117_E').val(getNumToString(getStrFloat($('#GF1103_117_F').val())+getStrFloat($('#GF1103_117_G').val())+getStrFloat($('#GF1103_117_H').val()),2));
    FGF1103_117_E($('#GF1103_117_E'));
}

/*GF1103_118_A*/
function FGF1103_118_A(obj){
    showStr(obj);
    $('#GF1103_118_A').val(getNumToString(getStrFloat($('#GF1103_118_B').val())+getStrFloat($('#GF1103_118_E').val()),2));
}

/*GF1103_118_B*/
function FGF1103_118_B(obj){
    showStr(obj);
    $('#GF1103_118_A').val(getNumToString(getStrFloat($('#GF1103_118_B').val())+getStrFloat($('#GF1103_118_E').val()),2));
    FGF1103_118_A($('#GF1103_118_A'));
    $('#GF1103_118_B').val(getNumToString(getStrFloat($('#GF1103_118_C').val())+getStrFloat($('#GF1103_118_D').val()),2));
}

/*GF1103_118_C*/
function FGF1103_118_C(obj){
    showStr(obj);
    $('#GF1103_115_C').val(getNumToString(getStrFloat($('#GF1103_116_C').val())+getStrFloat($('#GF1103_117_C').val())+getStrFloat($('#GF1103_118_C').val())+getStrFloat($('#GF1103_120_C').val())+getStrFloat($('#GF1103_121_C').val())+getStrFloat($('#GF1103_119_C').val()),2));
    FGF1103_115_C($('#GF1103_115_C'));
    $('#GF1103_118_B').val(getNumToString(getStrFloat($('#GF1103_118_C').val())+getStrFloat($('#GF1103_118_D').val()),2));
    FGF1103_118_B($('#GF1103_118_B'));
}

/*GF1103_118_D*/
function FGF1103_118_D(obj){
    showStr(obj);
    $('#GF1103_115_D').val(getNumToString(getStrFloat($('#GF1103_116_D').val())+getStrFloat($('#GF1103_117_D').val())+getStrFloat($('#GF1103_118_D').val())+getStrFloat($('#GF1103_120_D').val())+getStrFloat($('#GF1103_121_D').val())+getStrFloat($('#GF1103_119_D').val()),2));
    FGF1103_115_D($('#GF1103_115_D'));
    $('#GF1103_118_B').val(getNumToString(getStrFloat($('#GF1103_118_C').val())+getStrFloat($('#GF1103_118_D').val()),2));
    FGF1103_118_B($('#GF1103_118_B'));
}

/*GF1103_118_E*/
function FGF1103_118_E(obj){
    showStr(obj);
    $('#GF1103_118_A').val(getNumToString(getStrFloat($('#GF1103_118_B').val())+getStrFloat($('#GF1103_118_E').val()),2));
    FGF1103_118_A($('#GF1103_118_A'));
    $('#GF1103_118_E').val(getNumToString(getStrFloat($('#GF1103_118_F').val())+getStrFloat($('#GF1103_118_G').val())+getStrFloat($('#GF1103_118_H').val()),2));
}

/*GF1103_118_F*/
function FGF1103_118_F(obj){
    showStr(obj);
    $('#GF1103_115_F').val(getNumToString(getStrFloat($('#GF1103_116_F').val())+getStrFloat($('#GF1103_117_F').val())+getStrFloat($('#GF1103_118_F').val())+getStrFloat($('#GF1103_120_F').val())+getStrFloat($('#GF1103_121_F').val())+getStrFloat($('#GF1103_119_F').val()),2));
    FGF1103_115_F($('#GF1103_115_F'));
    $('#GF1103_118_E').val(getNumToString(getStrFloat($('#GF1103_118_F').val())+getStrFloat($('#GF1103_118_G').val())+getStrFloat($('#GF1103_118_H').val()),2));
    FGF1103_118_E($('#GF1103_118_E'));
}

/*GF1103_118_G*/
function FGF1103_118_G(obj){
    showStr(obj);
    $('#GF1103_115_G').val(getNumToString(getStrFloat($('#GF1103_116_G').val())+getStrFloat($('#GF1103_117_G').val())+getStrFloat($('#GF1103_118_G').val())+getStrFloat($('#GF1103_120_G').val())+getStrFloat($('#GF1103_121_G').val())+getStrFloat($('#GF1103_119_G').val()),2));
    FGF1103_115_G($('#GF1103_115_G'));
    $('#GF1103_118_E').val(getNumToString(getStrFloat($('#GF1103_118_F').val())+getStrFloat($('#GF1103_118_G').val())+getStrFloat($('#GF1103_118_H').val()),2));
    FGF1103_118_E($('#GF1103_118_E'));
}

/*GF1103_118_H*/
function FGF1103_118_H(obj){
    showStr(obj);
    $('#GF1103_115_H').val(getNumToString(getStrFloat($('#GF1103_116_H').val())+getStrFloat($('#GF1103_117_H').val())+getStrFloat($('#GF1103_118_H').val())+getStrFloat($('#GF1103_120_H').val())+getStrFloat($('#GF1103_121_H').val())+getStrFloat($('#GF1103_119_H').val()),2));
    FGF1103_115_H($('#GF1103_115_H'));
    $('#GF1103_118_E').val(getNumToString(getStrFloat($('#GF1103_118_F').val())+getStrFloat($('#GF1103_118_G').val())+getStrFloat($('#GF1103_118_H').val()),2));
    FGF1103_118_E($('#GF1103_118_E'));
}

/*GF1103_119_A*/
function FGF1103_119_A(obj){
    showStr(obj);
    $('#GF1103_119_A').val(getNumToString(getStrFloat($('#GF1103_119_B').val())+getStrFloat($('#GF1103_119_E').val()),2));
}

/*GF1103_119_B*/
function FGF1103_119_B(obj){
    showStr(obj);
    $('#GF1103_119_A').val(getNumToString(getStrFloat($('#GF1103_119_B').val())+getStrFloat($('#GF1103_119_E').val()),2));
    FGF1103_119_A($('#GF1103_119_A'));
    $('#GF1103_119_B').val(getNumToString(getStrFloat($('#GF1103_119_C').val())+getStrFloat($('#GF1103_119_D').val()),2));
}

/*GF1103_119_C*/
function FGF1103_119_C(obj){
    showStr(obj);
    $('#GF1103_115_C').val(getNumToString(getStrFloat($('#GF1103_116_C').val())+getStrFloat($('#GF1103_117_C').val())+getStrFloat($('#GF1103_118_C').val())+getStrFloat($('#GF1103_120_C').val())+getStrFloat($('#GF1103_121_C').val())+getStrFloat($('#GF1103_119_C').val()),2));
    FGF1103_115_C($('#GF1103_115_C'));
    $('#GF1103_119_B').val(getNumToString(getStrFloat($('#GF1103_119_C').val())+getStrFloat($('#GF1103_119_D').val()),2));
    FGF1103_119_B($('#GF1103_119_B'));
}

/*GF1103_119_D*/
function FGF1103_119_D(obj){
    showStr(obj);
    $('#GF1103_115_D').val(getNumToString(getStrFloat($('#GF1103_116_D').val())+getStrFloat($('#GF1103_117_D').val())+getStrFloat($('#GF1103_118_D').val())+getStrFloat($('#GF1103_120_D').val())+getStrFloat($('#GF1103_121_D').val())+getStrFloat($('#GF1103_119_D').val()),2));
    FGF1103_115_D($('#GF1103_115_D'));
    $('#GF1103_119_B').val(getNumToString(getStrFloat($('#GF1103_119_C').val())+getStrFloat($('#GF1103_119_D').val()),2));
    FGF1103_119_B($('#GF1103_119_B'));
}

/*GF1103_119_E*/
function FGF1103_119_E(obj){
    showStr(obj);
    $('#GF1103_119_A').val(getNumToString(getStrFloat($('#GF1103_119_B').val())+getStrFloat($('#GF1103_119_E').val()),2));
    FGF1103_119_A($('#GF1103_119_A'));
    $('#GF1103_119_E').val(getNumToString(getStrFloat($('#GF1103_119_F').val())+getStrFloat($('#GF1103_119_G').val())+getStrFloat($('#GF1103_119_H').val()),2));
}

/*GF1103_119_F*/
function FGF1103_119_F(obj){
    showStr(obj);
    $('#GF1103_115_F').val(getNumToString(getStrFloat($('#GF1103_116_F').val())+getStrFloat($('#GF1103_117_F').val())+getStrFloat($('#GF1103_118_F').val())+getStrFloat($('#GF1103_120_F').val())+getStrFloat($('#GF1103_121_F').val())+getStrFloat($('#GF1103_119_F').val()),2));
    FGF1103_115_F($('#GF1103_115_F'));
    $('#GF1103_119_E').val(getNumToString(getStrFloat($('#GF1103_119_F').val())+getStrFloat($('#GF1103_119_G').val())+getStrFloat($('#GF1103_119_H').val()),2));
    FGF1103_119_E($('#GF1103_119_E'));
}

/*GF1103_119_G*/
function FGF1103_119_G(obj){
    showStr(obj);
    $('#GF1103_115_G').val(getNumToString(getStrFloat($('#GF1103_116_G').val())+getStrFloat($('#GF1103_117_G').val())+getStrFloat($('#GF1103_118_G').val())+getStrFloat($('#GF1103_120_G').val())+getStrFloat($('#GF1103_121_G').val())+getStrFloat($('#GF1103_119_G').val()),2));
    FGF1103_115_G($('#GF1103_115_G'));
    $('#GF1103_119_E').val(getNumToString(getStrFloat($('#GF1103_119_F').val())+getStrFloat($('#GF1103_119_G').val())+getStrFloat($('#GF1103_119_H').val()),2));
    FGF1103_119_E($('#GF1103_119_E'));
}

/*GF1103_119_H*/
function FGF1103_119_H(obj){
    showStr(obj);
    $('#GF1103_115_H').val(getNumToString(getStrFloat($('#GF1103_116_H').val())+getStrFloat($('#GF1103_117_H').val())+getStrFloat($('#GF1103_118_H').val())+getStrFloat($('#GF1103_120_H').val())+getStrFloat($('#GF1103_121_H').val())+getStrFloat($('#GF1103_119_H').val()),2));
    FGF1103_115_H($('#GF1103_115_H'));
    $('#GF1103_119_E').val(getNumToString(getStrFloat($('#GF1103_119_F').val())+getStrFloat($('#GF1103_119_G').val())+getStrFloat($('#GF1103_119_H').val()),2));
    FGF1103_119_E($('#GF1103_119_E'));
}

/*GF1103_120_A*/
function FGF1103_120_A(obj){
    showStr(obj);
    $('#GF1103_120_A').val(getNumToString(getStrFloat($('#GF1103_120_B').val())+getStrFloat($('#GF1103_120_E').val()),2));
}

/*GF1103_120_B*/
function FGF1103_120_B(obj){
    showStr(obj);
    $('#GF1103_120_A').val(getNumToString(getStrFloat($('#GF1103_120_B').val())+getStrFloat($('#GF1103_120_E').val()),2));
    FGF1103_120_A($('#GF1103_120_A'));
    $('#GF1103_120_B').val(getNumToString(getStrFloat($('#GF1103_120_C').val())+getStrFloat($('#GF1103_120_D').val()),2));
}

/*GF1103_120_C*/
function FGF1103_120_C(obj){
    showStr(obj);
    $('#GF1103_115_C').val(getNumToString(getStrFloat($('#GF1103_116_C').val())+getStrFloat($('#GF1103_117_C').val())+getStrFloat($('#GF1103_118_C').val())+getStrFloat($('#GF1103_120_C').val())+getStrFloat($('#GF1103_121_C').val())+getStrFloat($('#GF1103_119_C').val()),2));
    FGF1103_115_C($('#GF1103_115_C'));
    $('#GF1103_120_B').val(getNumToString(getStrFloat($('#GF1103_120_C').val())+getStrFloat($('#GF1103_120_D').val()),2));
    FGF1103_120_B($('#GF1103_120_B'));
}

/*GF1103_120_D*/
function FGF1103_120_D(obj){
    showStr(obj);
    $('#GF1103_115_D').val(getNumToString(getStrFloat($('#GF1103_116_D').val())+getStrFloat($('#GF1103_117_D').val())+getStrFloat($('#GF1103_118_D').val())+getStrFloat($('#GF1103_120_D').val())+getStrFloat($('#GF1103_121_D').val())+getStrFloat($('#GF1103_119_D').val()),2));
    FGF1103_115_D($('#GF1103_115_D'));
    $('#GF1103_120_B').val(getNumToString(getStrFloat($('#GF1103_120_C').val())+getStrFloat($('#GF1103_120_D').val()),2));
    FGF1103_120_B($('#GF1103_120_B'));
}

/*GF1103_120_E*/
function FGF1103_120_E(obj){
    showStr(obj);
    $('#GF1103_120_A').val(getNumToString(getStrFloat($('#GF1103_120_B').val())+getStrFloat($('#GF1103_120_E').val()),2));
    FGF1103_120_A($('#GF1103_120_A'));
    $('#GF1103_120_E').val(getNumToString(getStrFloat($('#GF1103_120_F').val())+getStrFloat($('#GF1103_120_G').val())+getStrFloat($('#GF1103_120_H').val()),2));
}

/*GF1103_120_F*/
function FGF1103_120_F(obj){
    showStr(obj);
    $('#GF1103_115_F').val(getNumToString(getStrFloat($('#GF1103_116_F').val())+getStrFloat($('#GF1103_117_F').val())+getStrFloat($('#GF1103_118_F').val())+getStrFloat($('#GF1103_120_F').val())+getStrFloat($('#GF1103_121_F').val())+getStrFloat($('#GF1103_119_F').val()),2));
    FGF1103_115_F($('#GF1103_115_F'));
    $('#GF1103_120_E').val(getNumToString(getStrFloat($('#GF1103_120_F').val())+getStrFloat($('#GF1103_120_G').val())+getStrFloat($('#GF1103_120_H').val()),2));
    FGF1103_120_E($('#GF1103_120_E'));
}

/*GF1103_120_G*/
function FGF1103_120_G(obj){
    showStr(obj);
    $('#GF1103_115_G').val(getNumToString(getStrFloat($('#GF1103_116_G').val())+getStrFloat($('#GF1103_117_G').val())+getStrFloat($('#GF1103_118_G').val())+getStrFloat($('#GF1103_120_G').val())+getStrFloat($('#GF1103_121_G').val())+getStrFloat($('#GF1103_119_G').val()),2));
    FGF1103_115_G($('#GF1103_115_G'));
    $('#GF1103_120_E').val(getNumToString(getStrFloat($('#GF1103_120_F').val())+getStrFloat($('#GF1103_120_G').val())+getStrFloat($('#GF1103_120_H').val()),2));
    FGF1103_120_E($('#GF1103_120_E'));
}

/*GF1103_120_H*/
function FGF1103_120_H(obj){
    showStr(obj);
    $('#GF1103_115_H').val(getNumToString(getStrFloat($('#GF1103_116_H').val())+getStrFloat($('#GF1103_117_H').val())+getStrFloat($('#GF1103_118_H').val())+getStrFloat($('#GF1103_120_H').val())+getStrFloat($('#GF1103_121_H').val())+getStrFloat($('#GF1103_119_H').val()),2));
    FGF1103_115_H($('#GF1103_115_H'));
    $('#GF1103_120_E').val(getNumToString(getStrFloat($('#GF1103_120_F').val())+getStrFloat($('#GF1103_120_G').val())+getStrFloat($('#GF1103_120_H').val()),2));
    FGF1103_120_E($('#GF1103_120_E'));
}

/*GF1103_121_A*/
function FGF1103_121_A(obj){
    showStr(obj);
    $('#GF1103_121_A').val(getNumToString(getStrFloat($('#GF1103_121_B').val())+getStrFloat($('#GF1103_121_E').val()),2));
}

/*GF1103_121_B*/
function FGF1103_121_B(obj){
    showStr(obj);
    $('#GF1103_121_A').val(getNumToString(getStrFloat($('#GF1103_121_B').val())+getStrFloat($('#GF1103_121_E').val()),2));
    FGF1103_121_A($('#GF1103_121_A'));
    $('#GF1103_121_B').val(getNumToString(getStrFloat($('#GF1103_121_C').val())+getStrFloat($('#GF1103_121_D').val()),2));
}

/*GF1103_121_C*/
function FGF1103_121_C(obj){
    showStr(obj);
    $('#GF1103_115_C').val(getNumToString(getStrFloat($('#GF1103_116_C').val())+getStrFloat($('#GF1103_117_C').val())+getStrFloat($('#GF1103_118_C').val())+getStrFloat($('#GF1103_120_C').val())+getStrFloat($('#GF1103_121_C').val())+getStrFloat($('#GF1103_119_C').val()),2));
    FGF1103_115_C($('#GF1103_115_C'));
    $('#GF1103_121_B').val(getNumToString(getStrFloat($('#GF1103_121_C').val())+getStrFloat($('#GF1103_121_D').val()),2));
    FGF1103_121_B($('#GF1103_121_B'));
}

/*GF1103_121_D*/
function FGF1103_121_D(obj){
    showStr(obj);
    $('#GF1103_115_D').val(getNumToString(getStrFloat($('#GF1103_116_D').val())+getStrFloat($('#GF1103_117_D').val())+getStrFloat($('#GF1103_118_D').val())+getStrFloat($('#GF1103_120_D').val())+getStrFloat($('#GF1103_121_D').val())+getStrFloat($('#GF1103_119_D').val()),2));
    FGF1103_115_D($('#GF1103_115_D'));
    $('#GF1103_121_B').val(getNumToString(getStrFloat($('#GF1103_121_C').val())+getStrFloat($('#GF1103_121_D').val()),2));
    FGF1103_121_B($('#GF1103_121_B'));
}

/*GF1103_121_E*/
function FGF1103_121_E(obj){
    showStr(obj);
    $('#GF1103_121_A').val(getNumToString(getStrFloat($('#GF1103_121_B').val())+getStrFloat($('#GF1103_121_E').val()),2));
    FGF1103_121_A($('#GF1103_121_A'));
    $('#GF1103_121_E').val(getNumToString(getStrFloat($('#GF1103_121_F').val())+getStrFloat($('#GF1103_121_G').val())+getStrFloat($('#GF1103_121_H').val()),2));
}

/*GF1103_121_F*/
function FGF1103_121_F(obj){
    showStr(obj);
    $('#GF1103_115_F').val(getNumToString(getStrFloat($('#GF1103_116_F').val())+getStrFloat($('#GF1103_117_F').val())+getStrFloat($('#GF1103_118_F').val())+getStrFloat($('#GF1103_120_F').val())+getStrFloat($('#GF1103_121_F').val())+getStrFloat($('#GF1103_119_F').val()),2));
    FGF1103_115_F($('#GF1103_115_F'));
    $('#GF1103_121_E').val(getNumToString(getStrFloat($('#GF1103_121_F').val())+getStrFloat($('#GF1103_121_G').val())+getStrFloat($('#GF1103_121_H').val()),2));
    FGF1103_121_E($('#GF1103_121_E'));
}

/*GF1103_121_G*/
function FGF1103_121_G(obj){
    showStr(obj);
    $('#GF1103_115_G').val(getNumToString(getStrFloat($('#GF1103_116_G').val())+getStrFloat($('#GF1103_117_G').val())+getStrFloat($('#GF1103_118_G').val())+getStrFloat($('#GF1103_120_G').val())+getStrFloat($('#GF1103_121_G').val())+getStrFloat($('#GF1103_119_G').val()),2));
    FGF1103_115_G($('#GF1103_115_G'));
    $('#GF1103_121_E').val(getNumToString(getStrFloat($('#GF1103_121_F').val())+getStrFloat($('#GF1103_121_G').val())+getStrFloat($('#GF1103_121_H').val()),2));
    FGF1103_121_E($('#GF1103_121_E'));
}

/*GF1103_121_H*/
function FGF1103_121_H(obj){
    showStr(obj);
    $('#GF1103_115_H').val(getNumToString(getStrFloat($('#GF1103_116_H').val())+getStrFloat($('#GF1103_117_H').val())+getStrFloat($('#GF1103_118_H').val())+getStrFloat($('#GF1103_120_H').val())+getStrFloat($('#GF1103_121_H').val())+getStrFloat($('#GF1103_119_H').val()),2));
    FGF1103_115_H($('#GF1103_115_H'));
    $('#GF1103_121_E').val(getNumToString(getStrFloat($('#GF1103_121_F').val())+getStrFloat($('#GF1103_121_G').val())+getStrFloat($('#GF1103_121_H').val()),2));
    FGF1103_121_E($('#GF1103_121_E'));
}

/*GF1103_122_A*/
function FGF1103_122_A(obj){
    showStr(obj);
    $('#GF1103_122_A').val(getNumToString(getStrFloat($('#GF1103_122_B').val())+getStrFloat($('#GF1103_122_E').val()),2));
}

/*GF1103_122_B*/
function FGF1103_122_B(obj){
    showStr(obj);
    $('#GF1103_122_A').val(getNumToString(getStrFloat($('#GF1103_122_B').val())+getStrFloat($('#GF1103_122_E').val()),2));
    FGF1103_122_A($('#GF1103_122_A'));
    $('#GF1103_122_B').val(getNumToString(getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_122_D').val()),2));
}

/*GF1103_122_C*/
function FGF1103_122_C(obj){
    showStr(obj);
    $('#GF1103_122_B').val(getNumToString(getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_122_D').val()),2));
    FGF1103_122_B($('#GF1103_122_B'));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
    $('#GF1103_122_C').val(getNumToString(getStrFloat($('#GF1103_123_C').val()),2));
}

/*GF1103_122_D*/
function FGF1103_122_D(obj){
    showStr(obj);
    $('#GF1103_122_B').val(getNumToString(getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_122_D').val()),2));
    FGF1103_122_B($('#GF1103_122_B'));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
    $('#GF1103_122_D').val(getNumToString(getStrFloat($('#GF1103_123_D').val()),2));
}

/*GF1103_122_E*/
function FGF1103_122_E(obj){
    showStr(obj);
    $('#GF1103_122_A').val(getNumToString(getStrFloat($('#GF1103_122_B').val())+getStrFloat($('#GF1103_122_E').val()),2));
    FGF1103_122_A($('#GF1103_122_A'));
    $('#GF1103_122_E').val(getNumToString(getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_122_H').val()),2));
}

/*GF1103_122_F*/
function FGF1103_122_F(obj){
    showStr(obj);
    $('#GF1103_122_E').val(getNumToString(getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_122_H').val()),2));
    FGF1103_122_E($('#GF1103_122_E'));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
    $('#GF1103_122_F').val(getNumToString(getStrFloat($('#GF1103_123_F').val()),2));
}

/*GF1103_122_G*/
function FGF1103_122_G(obj){
    showStr(obj);
    $('#GF1103_122_E').val(getNumToString(getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_122_H').val()),2));
    FGF1103_122_E($('#GF1103_122_E'));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
    $('#GF1103_122_G').val(getNumToString(getStrFloat($('#GF1103_123_G').val()),2));
}

/*GF1103_122_H*/
function FGF1103_122_H(obj){
    showStr(obj);
    $('#GF1103_122_E').val(getNumToString(getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_122_H').val()),2));
    FGF1103_122_E($('#GF1103_122_E'));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
    $('#GF1103_122_H').val(getNumToString(getStrFloat($('#GF1103_123_H').val()),2));
}

/*GF1103_123_A*/
function FGF1103_123_A(obj){
    showStr(obj);
    $('#GF1103_123_A').val(getNumToString(getStrFloat($('#GF1103_123_B').val())+getStrFloat($('#GF1103_123_E').val()),2));
}

/*GF1103_123_B*/
function FGF1103_123_B(obj){
    showStr(obj);
    $('#GF1103_123_A').val(getNumToString(getStrFloat($('#GF1103_123_B').val())+getStrFloat($('#GF1103_123_E').val()),2));
    FGF1103_123_A($('#GF1103_123_A'));
    $('#GF1103_123_B').val(getNumToString(getStrFloat($('#GF1103_123_C').val())+getStrFloat($('#GF1103_123_D').val()),2));
}

/*GF1103_123_C*/
function FGF1103_123_C(obj){
    showStr(obj);
    $('#GF1103_123_B').val(getNumToString(getStrFloat($('#GF1103_123_C').val())+getStrFloat($('#GF1103_123_D').val()),2));
    FGF1103_123_B($('#GF1103_123_B'));
    $('#GF1103_122_C').val(getNumToString(getStrFloat($('#GF1103_123_C').val()),2));
    FGF1103_122_C($('#GF1103_122_C'));
}

/*GF1103_123_D*/
function FGF1103_123_D(obj){
    showStr(obj);
    $('#GF1103_123_B').val(getNumToString(getStrFloat($('#GF1103_123_C').val())+getStrFloat($('#GF1103_123_D').val()),2));
    FGF1103_123_B($('#GF1103_123_B'));
    $('#GF1103_122_D').val(getNumToString(getStrFloat($('#GF1103_123_D').val()),2));
    FGF1103_122_D($('#GF1103_122_D'));
}

/*GF1103_123_E*/
function FGF1103_123_E(obj){
    showStr(obj);
    $('#GF1103_123_A').val(getNumToString(getStrFloat($('#GF1103_123_B').val())+getStrFloat($('#GF1103_123_E').val()),2));
    FGF1103_123_A($('#GF1103_123_A'));
    $('#GF1103_123_E').val(getNumToString(getStrFloat($('#GF1103_123_F').val())+getStrFloat($('#GF1103_123_G').val())+getStrFloat($('#GF1103_123_H').val()),2));
}

/*GF1103_123_F*/
function FGF1103_123_F(obj){
    showStr(obj);
    $('#GF1103_123_E').val(getNumToString(getStrFloat($('#GF1103_123_F').val())+getStrFloat($('#GF1103_123_G').val())+getStrFloat($('#GF1103_123_H').val()),2));
    FGF1103_123_E($('#GF1103_123_E'));
    $('#GF1103_122_F').val(getNumToString(getStrFloat($('#GF1103_123_F').val()),2));
    FGF1103_122_F($('#GF1103_122_F'));
}

/*GF1103_123_G*/
function FGF1103_123_G(obj){
    showStr(obj);
    $('#GF1103_123_E').val(getNumToString(getStrFloat($('#GF1103_123_F').val())+getStrFloat($('#GF1103_123_G').val())+getStrFloat($('#GF1103_123_H').val()),2));
    FGF1103_123_E($('#GF1103_123_E'));
    $('#GF1103_122_G').val(getNumToString(getStrFloat($('#GF1103_123_G').val()),2));
    FGF1103_122_G($('#GF1103_122_G'));
}

/*GF1103_123_H*/
function FGF1103_123_H(obj){
    showStr(obj);
    $('#GF1103_123_E').val(getNumToString(getStrFloat($('#GF1103_123_F').val())+getStrFloat($('#GF1103_123_G').val())+getStrFloat($('#GF1103_123_H').val()),2));
    FGF1103_123_E($('#GF1103_123_E'));
    $('#GF1103_122_H').val(getNumToString(getStrFloat($('#GF1103_123_H').val()),2));
    FGF1103_122_H($('#GF1103_122_H'));
}

/*GF1103_124_A*/
function FGF1103_124_A(obj){
    showStr(obj);
    $('#GF1103_124_A').val(getNumToString(getStrFloat($('#GF1103_124_B').val())+getStrFloat($('#GF1103_124_E').val()),2));
}

/*GF1103_124_B*/
function FGF1103_124_B(obj){
    showStr(obj);
    $('#GF1103_124_A').val(getNumToString(getStrFloat($('#GF1103_124_B').val())+getStrFloat($('#GF1103_124_E').val()),2));
    FGF1103_124_A($('#GF1103_124_A'));
    $('#GF1103_124_B').val(getNumToString(getStrFloat($('#GF1103_124_C').val())+getStrFloat($('#GF1103_124_D').val()),2));
}

/*GF1103_124_C*/
function FGF1103_124_C(obj){
    showStr(obj);
    $('#GF1103_124_B').val(getNumToString(getStrFloat($('#GF1103_124_C').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_124_B($('#GF1103_124_B'));
    $('#GF1103_124_C').val(getNumToString(getStrFloat($('#GF1103_125_C').val())+getStrFloat($('#GF1103_126_C').val())+getStrFloat($('#GF1103_127_C').val()),2));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
    FGF1103_128_C($('#GF1103_128_C'));
}

/*GF1103_124_D*/
function FGF1103_124_D(obj){
    showStr(obj);
    $('#GF1103_124_B').val(getNumToString(getStrFloat($('#GF1103_124_C').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_124_B($('#GF1103_124_B'));
    $('#GF1103_124_D').val(getNumToString(getStrFloat($('#GF1103_125_D').val())+getStrFloat($('#GF1103_126_D').val())+getStrFloat($('#GF1103_127_D').val()),2));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
    FGF1103_128_D($('#GF1103_128_D'));
}

/*GF1103_124_E*/
function FGF1103_124_E(obj){
    showStr(obj);
    $('#GF1103_124_A').val(getNumToString(getStrFloat($('#GF1103_124_B').val())+getStrFloat($('#GF1103_124_E').val()),2));
    FGF1103_124_A($('#GF1103_124_A'));
    $('#GF1103_124_E').val(getNumToString(getStrFloat($('#GF1103_124_F').val())+getStrFloat($('#GF1103_124_G').val())+getStrFloat($('#GF1103_124_H').val()),2));
}

/*GF1103_124_F*/
function FGF1103_124_F(obj){
    showStr(obj);
    $('#GF1103_124_E').val(getNumToString(getStrFloat($('#GF1103_124_F').val())+getStrFloat($('#GF1103_124_G').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_124_E($('#GF1103_124_E'));
    $('#GF1103_124_F').val(getNumToString(getStrFloat($('#GF1103_125_F').val())+getStrFloat($('#GF1103_126_F').val())+getStrFloat($('#GF1103_127_F').val()),2));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
    FGF1103_128_F($('#GF1103_128_F'));
}

/*GF1103_124_G*/
function FGF1103_124_G(obj){
    showStr(obj);
    $('#GF1103_124_E').val(getNumToString(getStrFloat($('#GF1103_124_F').val())+getStrFloat($('#GF1103_124_G').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_124_E($('#GF1103_124_E'));
    $('#GF1103_124_G').val(getNumToString(getStrFloat($('#GF1103_125_G').val())+getStrFloat($('#GF1103_126_G').val())+getStrFloat($('#GF1103_127_G').val()),2));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
    FGF1103_128_G($('#GF1103_128_G'));
}

/*GF1103_124_H*/
function FGF1103_124_H(obj){
    showStr(obj);
    $('#GF1103_124_E').val(getNumToString(getStrFloat($('#GF1103_124_F').val())+getStrFloat($('#GF1103_124_G').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_124_E($('#GF1103_124_E'));
    $('#GF1103_124_H').val(getNumToString(getStrFloat($('#GF1103_125_H').val())+getStrFloat($('#GF1103_126_H').val())+getStrFloat($('#GF1103_127_H').val()),2));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
    FGF1103_128_H($('#GF1103_128_H'));
}

/*GF1103_125_A*/
function FGF1103_125_A(obj){
    showStr(obj);
    $('#GF1103_125_A').val(getNumToString(getStrFloat($('#GF1103_125_B').val())+getStrFloat($('#GF1103_125_E').val()),2));
}

/*GF1103_125_B*/
function FGF1103_125_B(obj){
    showStr(obj);
    $('#GF1103_125_A').val(getNumToString(getStrFloat($('#GF1103_125_B').val())+getStrFloat($('#GF1103_125_E').val()),2));
    FGF1103_125_A($('#GF1103_125_A'));
    $('#GF1103_125_B').val(getNumToString(getStrFloat($('#GF1103_125_C').val())+getStrFloat($('#GF1103_125_D').val()),2));
}

/*GF1103_125_C*/
function FGF1103_125_C(obj){
    showStr(obj);
    $('#GF1103_124_C').val(getNumToString(getStrFloat($('#GF1103_125_C').val())+getStrFloat($('#GF1103_126_C').val())+getStrFloat($('#GF1103_127_C').val()),2));
    FGF1103_124_C($('#GF1103_124_C'));
    $('#GF1103_125_B').val(getNumToString(getStrFloat($('#GF1103_125_C').val())+getStrFloat($('#GF1103_125_D').val()),2));
    FGF1103_125_B($('#GF1103_125_B'));
}

/*GF1103_125_D*/
function FGF1103_125_D(obj){
    showStr(obj);
    $('#GF1103_124_D').val(getNumToString(getStrFloat($('#GF1103_125_D').val())+getStrFloat($('#GF1103_126_D').val())+getStrFloat($('#GF1103_127_D').val()),2));
    FGF1103_124_D($('#GF1103_124_D'));
    $('#GF1103_125_B').val(getNumToString(getStrFloat($('#GF1103_125_C').val())+getStrFloat($('#GF1103_125_D').val()),2));
    FGF1103_125_B($('#GF1103_125_B'));
}

/*GF1103_125_E*/
function FGF1103_125_E(obj){
    showStr(obj);
    $('#GF1103_125_A').val(getNumToString(getStrFloat($('#GF1103_125_B').val())+getStrFloat($('#GF1103_125_E').val()),2));
    FGF1103_125_A($('#GF1103_125_A'));
    $('#GF1103_125_E').val(getNumToString(getStrFloat($('#GF1103_125_F').val())+getStrFloat($('#GF1103_125_G').val())+getStrFloat($('#GF1103_125_H').val()),2));
}

/*GF1103_125_F*/
function FGF1103_125_F(obj){
    showStr(obj);
    $('#GF1103_124_F').val(getNumToString(getStrFloat($('#GF1103_125_F').val())+getStrFloat($('#GF1103_126_F').val())+getStrFloat($('#GF1103_127_F').val()),2));
    FGF1103_124_F($('#GF1103_124_F'));
    $('#GF1103_125_E').val(getNumToString(getStrFloat($('#GF1103_125_F').val())+getStrFloat($('#GF1103_125_G').val())+getStrFloat($('#GF1103_125_H').val()),2));
    FGF1103_125_E($('#GF1103_125_E'));
}

/*GF1103_125_G*/
function FGF1103_125_G(obj){
    showStr(obj);
    $('#GF1103_124_G').val(getNumToString(getStrFloat($('#GF1103_125_G').val())+getStrFloat($('#GF1103_126_G').val())+getStrFloat($('#GF1103_127_G').val()),2));
    FGF1103_124_G($('#GF1103_124_G'));
    $('#GF1103_125_E').val(getNumToString(getStrFloat($('#GF1103_125_F').val())+getStrFloat($('#GF1103_125_G').val())+getStrFloat($('#GF1103_125_H').val()),2));
    FGF1103_125_E($('#GF1103_125_E'));
}

/*GF1103_125_H*/
function FGF1103_125_H(obj){
    showStr(obj);
    $('#GF1103_124_H').val(getNumToString(getStrFloat($('#GF1103_125_H').val())+getStrFloat($('#GF1103_126_H').val())+getStrFloat($('#GF1103_127_H').val()),2));
    FGF1103_124_H($('#GF1103_124_H'));
    $('#GF1103_125_E').val(getNumToString(getStrFloat($('#GF1103_125_F').val())+getStrFloat($('#GF1103_125_G').val())+getStrFloat($('#GF1103_125_H').val()),2));
    FGF1103_125_E($('#GF1103_125_E'));
}

/*GF1103_126_A*/
function FGF1103_126_A(obj){
    showStr(obj);
    $('#GF1103_126_A').val(getNumToString(getStrFloat($('#GF1103_126_B').val())+getStrFloat($('#GF1103_126_E').val()),2));
}

/*GF1103_126_B*/
function FGF1103_126_B(obj){
    showStr(obj);
    $('#GF1103_126_A').val(getNumToString(getStrFloat($('#GF1103_126_B').val())+getStrFloat($('#GF1103_126_E').val()),2));
    FGF1103_126_A($('#GF1103_126_A'));
    $('#GF1103_126_B').val(getNumToString(getStrFloat($('#GF1103_126_C').val())+getStrFloat($('#GF1103_126_D').val()),2));
}

/*GF1103_126_C*/
function FGF1103_126_C(obj){
    showStr(obj);
    $('#GF1103_124_C').val(getNumToString(getStrFloat($('#GF1103_125_C').val())+getStrFloat($('#GF1103_126_C').val())+getStrFloat($('#GF1103_127_C').val()),2));
    FGF1103_124_C($('#GF1103_124_C'));
    $('#GF1103_126_B').val(getNumToString(getStrFloat($('#GF1103_126_C').val())+getStrFloat($('#GF1103_126_D').val()),2));
    FGF1103_126_B($('#GF1103_126_B'));
}

/*GF1103_126_D*/
function FGF1103_126_D(obj){
    showStr(obj);
    $('#GF1103_124_D').val(getNumToString(getStrFloat($('#GF1103_125_D').val())+getStrFloat($('#GF1103_126_D').val())+getStrFloat($('#GF1103_127_D').val()),2));
    FGF1103_124_D($('#GF1103_124_D'));
    $('#GF1103_126_B').val(getNumToString(getStrFloat($('#GF1103_126_C').val())+getStrFloat($('#GF1103_126_D').val()),2));
    FGF1103_126_B($('#GF1103_126_B'));
}

/*GF1103_126_E*/
function FGF1103_126_E(obj){
    showStr(obj);
    $('#GF1103_126_A').val(getNumToString(getStrFloat($('#GF1103_126_B').val())+getStrFloat($('#GF1103_126_E').val()),2));
    FGF1103_126_A($('#GF1103_126_A'));
    $('#GF1103_126_E').val(getNumToString(getStrFloat($('#GF1103_126_F').val())+getStrFloat($('#GF1103_126_G').val())+getStrFloat($('#GF1103_126_H').val()),2));
}

/*GF1103_126_F*/
function FGF1103_126_F(obj){
    showStr(obj);
    $('#GF1103_124_F').val(getNumToString(getStrFloat($('#GF1103_125_F').val())+getStrFloat($('#GF1103_126_F').val())+getStrFloat($('#GF1103_127_F').val()),2));
    FGF1103_124_F($('#GF1103_124_F'));
    $('#GF1103_126_E').val(getNumToString(getStrFloat($('#GF1103_126_F').val())+getStrFloat($('#GF1103_126_G').val())+getStrFloat($('#GF1103_126_H').val()),2));
    FGF1103_126_E($('#GF1103_126_E'));
}

/*GF1103_126_G*/
function FGF1103_126_G(obj){
    showStr(obj);
    $('#GF1103_124_G').val(getNumToString(getStrFloat($('#GF1103_125_G').val())+getStrFloat($('#GF1103_126_G').val())+getStrFloat($('#GF1103_127_G').val()),2));
    FGF1103_124_G($('#GF1103_124_G'));
    $('#GF1103_126_E').val(getNumToString(getStrFloat($('#GF1103_126_F').val())+getStrFloat($('#GF1103_126_G').val())+getStrFloat($('#GF1103_126_H').val()),2));
    FGF1103_126_E($('#GF1103_126_E'));
}

/*GF1103_126_H*/
function FGF1103_126_H(obj){
    showStr(obj);
    $('#GF1103_124_H').val(getNumToString(getStrFloat($('#GF1103_125_H').val())+getStrFloat($('#GF1103_126_H').val())+getStrFloat($('#GF1103_127_H').val()),2));
    FGF1103_124_H($('#GF1103_124_H'));
    $('#GF1103_126_E').val(getNumToString(getStrFloat($('#GF1103_126_F').val())+getStrFloat($('#GF1103_126_G').val())+getStrFloat($('#GF1103_126_H').val()),2));
    FGF1103_126_E($('#GF1103_126_E'));
}

/*GF1103_127_A*/
function FGF1103_127_A(obj){
    showStr(obj);
    $('#GF1103_127_A').val(getNumToString(getStrFloat($('#GF1103_127_B').val())+getStrFloat($('#GF1103_127_E').val()),2));
}

/*GF1103_127_B*/
function FGF1103_127_B(obj){
    showStr(obj);
    $('#GF1103_127_A').val(getNumToString(getStrFloat($('#GF1103_127_B').val())+getStrFloat($('#GF1103_127_E').val()),2));
    FGF1103_127_A($('#GF1103_127_A'));
    $('#GF1103_127_B').val(getNumToString(getStrFloat($('#GF1103_127_C').val())+getStrFloat($('#GF1103_127_D').val()),2));
}

/*GF1103_127_C*/
function FGF1103_127_C(obj){
    showStr(obj);
    $('#GF1103_124_C').val(getNumToString(getStrFloat($('#GF1103_125_C').val())+getStrFloat($('#GF1103_126_C').val())+getStrFloat($('#GF1103_127_C').val()),2));
    FGF1103_124_C($('#GF1103_124_C'));
    $('#GF1103_127_B').val(getNumToString(getStrFloat($('#GF1103_127_C').val())+getStrFloat($('#GF1103_127_D').val()),2));
    FGF1103_127_B($('#GF1103_127_B'));
}

/*GF1103_127_D*/
function FGF1103_127_D(obj){
    showStr(obj);
    $('#GF1103_124_D').val(getNumToString(getStrFloat($('#GF1103_125_D').val())+getStrFloat($('#GF1103_126_D').val())+getStrFloat($('#GF1103_127_D').val()),2));
    FGF1103_124_D($('#GF1103_124_D'));
    $('#GF1103_127_B').val(getNumToString(getStrFloat($('#GF1103_127_C').val())+getStrFloat($('#GF1103_127_D').val()),2));
    FGF1103_127_B($('#GF1103_127_B'));
}

/*GF1103_127_E*/
function FGF1103_127_E(obj){
    showStr(obj);
    $('#GF1103_127_A').val(getNumToString(getStrFloat($('#GF1103_127_B').val())+getStrFloat($('#GF1103_127_E').val()),2));
    FGF1103_127_A($('#GF1103_127_A'));
    $('#GF1103_127_E').val(getNumToString(getStrFloat($('#GF1103_127_F').val())+getStrFloat($('#GF1103_127_G').val())+getStrFloat($('#GF1103_127_H').val()),2));
}

/*GF1103_127_F*/
function FGF1103_127_F(obj){
    showStr(obj);
    $('#GF1103_124_F').val(getNumToString(getStrFloat($('#GF1103_125_F').val())+getStrFloat($('#GF1103_126_F').val())+getStrFloat($('#GF1103_127_F').val()),2));
    FGF1103_124_F($('#GF1103_124_F'));
    $('#GF1103_127_E').val(getNumToString(getStrFloat($('#GF1103_127_F').val())+getStrFloat($('#GF1103_127_G').val())+getStrFloat($('#GF1103_127_H').val()),2));
    FGF1103_127_E($('#GF1103_127_E'));
}

/*GF1103_127_G*/
function FGF1103_127_G(obj){
    showStr(obj);
    $('#GF1103_124_G').val(getNumToString(getStrFloat($('#GF1103_125_G').val())+getStrFloat($('#GF1103_126_G').val())+getStrFloat($('#GF1103_127_G').val()),2));
    FGF1103_124_G($('#GF1103_124_G'));
    $('#GF1103_127_E').val(getNumToString(getStrFloat($('#GF1103_127_F').val())+getStrFloat($('#GF1103_127_G').val())+getStrFloat($('#GF1103_127_H').val()),2));
    FGF1103_127_E($('#GF1103_127_E'));
}

/*GF1103_127_H*/
function FGF1103_127_H(obj){
    showStr(obj);
    $('#GF1103_124_H').val(getNumToString(getStrFloat($('#GF1103_125_H').val())+getStrFloat($('#GF1103_126_H').val())+getStrFloat($('#GF1103_127_H').val()),2));
    FGF1103_124_H($('#GF1103_124_H'));
    $('#GF1103_127_E').val(getNumToString(getStrFloat($('#GF1103_127_F').val())+getStrFloat($('#GF1103_127_G').val())+getStrFloat($('#GF1103_127_H').val()),2));
    FGF1103_127_E($('#GF1103_127_E'));
}

/*GF1103_128_A*/
function FGF1103_128_A(obj){
    showStr(obj);
    $('#GF1103_128_A').val(getNumToString(getStrFloat($('#GF1103_128_B').val())+getStrFloat($('#GF1103_128_E').val()),2));
}

/*GF1103_128_B*/
function FGF1103_128_B(obj){
    showStr(obj);
    $('#GF1103_128_A').val(getNumToString(getStrFloat($('#GF1103_128_B').val())+getStrFloat($('#GF1103_128_E').val()),2));
    FGF1103_128_A($('#GF1103_128_A'));
    $('#GF1103_128_B').val(getNumToString(getStrFloat($('#GF1103_128_C').val())+getStrFloat($('#GF1103_128_D').val()),2));
}

/*GF1103_128_C*/
function FGF1103_128_C(obj){
    showStr(obj);
    $('#GF1103_128_B').val(getNumToString(getStrFloat($('#GF1103_128_C').val())+getStrFloat($('#GF1103_128_D').val()),2));
    FGF1103_128_B($('#GF1103_128_B'));
    $('#GF1103_128_C').val(getNumToString(getStrFloat($('#GF1103_8_C').val())+getStrFloat($('#GF1103_14_C').val())+getStrFloat($('#GF1103_22_C').val())+getStrFloat($('#GF1103_54_C').val())+getStrFloat($('#GF1103_58_C').val())+getStrFloat($('#GF1103_63_C').val())+getStrFloat($('#GF1103_66_C').val())+getStrFloat($('#GF1103_75_C').val())+getStrFloat($('#GF1103_78_C').val())+getStrFloat($('#GF1103_82_C').val())+getStrFloat($('#GF1103_87_C').val())+getStrFloat($('#GF1103_89_C').val())+getStrFloat($('#GF1103_92_C').val())+getStrFloat($('#GF1103_96_C').val())+getStrFloat($('#GF1103_100_C').val())+getStrFloat($('#GF1103_104_C').val())+getStrFloat($('#GF1103_106_C').val())+getStrFloat($('#GF1103_109_C').val())+getStrFloat($('#GF1103_115_C').val())+getStrFloat($('#GF1103_122_C').val())+getStrFloat($('#GF1103_124_C').val()),2));
}

/*GF1103_128_D*/
function FGF1103_128_D(obj){
    showStr(obj);
    $('#GF1103_128_B').val(getNumToString(getStrFloat($('#GF1103_128_C').val())+getStrFloat($('#GF1103_128_D').val()),2));
    FGF1103_128_B($('#GF1103_128_B'));
    $('#GF1103_128_D').val(getNumToString(getStrFloat($('#GF1103_8_D').val())+getStrFloat($('#GF1103_14_D').val())+getStrFloat($('#GF1103_22_D').val())+getStrFloat($('#GF1103_54_D').val())+getStrFloat($('#GF1103_58_D').val())+getStrFloat($('#GF1103_63_D').val())+getStrFloat($('#GF1103_66_D').val())+getStrFloat($('#GF1103_75_D').val())+getStrFloat($('#GF1103_78_D').val())+getStrFloat($('#GF1103_82_D').val())+getStrFloat($('#GF1103_87_D').val())+getStrFloat($('#GF1103_89_D').val())+getStrFloat($('#GF1103_92_D').val())+getStrFloat($('#GF1103_96_D').val())+getStrFloat($('#GF1103_100_D').val())+getStrFloat($('#GF1103_104_D').val())+getStrFloat($('#GF1103_106_D').val())+getStrFloat($('#GF1103_109_D').val())+getStrFloat($('#GF1103_115_D').val())+getStrFloat($('#GF1103_122_D').val())+getStrFloat($('#GF1103_124_D').val()),2));
}

/*GF1103_128_E*/
function FGF1103_128_E(obj){
    showStr(obj);
    $('#GF1103_128_A').val(getNumToString(getStrFloat($('#GF1103_128_B').val())+getStrFloat($('#GF1103_128_E').val()),2));
    FGF1103_128_A($('#GF1103_128_A'));
    $('#GF1103_128_E').val(getNumToString(getStrFloat($('#GF1103_128_F').val())+getStrFloat($('#GF1103_128_G').val())+getStrFloat($('#GF1103_128_H').val()),2));
}

/*GF1103_128_F*/
function FGF1103_128_F(obj){
    showStr(obj);
    $('#GF1103_128_E').val(getNumToString(getStrFloat($('#GF1103_128_F').val())+getStrFloat($('#GF1103_128_G').val())+getStrFloat($('#GF1103_128_H').val()),2));
    FGF1103_128_E($('#GF1103_128_E'));
    $('#GF1103_128_F').val(getNumToString(getStrFloat($('#GF1103_8_F').val())+getStrFloat($('#GF1103_14_F').val())+getStrFloat($('#GF1103_22_F').val())+getStrFloat($('#GF1103_54_F').val())+getStrFloat($('#GF1103_58_F').val())+getStrFloat($('#GF1103_63_F').val())+getStrFloat($('#GF1103_66_F').val())+getStrFloat($('#GF1103_75_F').val())+getStrFloat($('#GF1103_78_F').val())+getStrFloat($('#GF1103_82_F').val())+getStrFloat($('#GF1103_87_F').val())+getStrFloat($('#GF1103_89_F').val())+getStrFloat($('#GF1103_92_F').val())+getStrFloat($('#GF1103_96_F').val())+getStrFloat($('#GF1103_100_F').val())+getStrFloat($('#GF1103_104_F').val())+getStrFloat($('#GF1103_106_F').val())+getStrFloat($('#GF1103_109_F').val())+getStrFloat($('#GF1103_115_F').val())+getStrFloat($('#GF1103_122_F').val())+getStrFloat($('#GF1103_124_F').val()),2));
}

/*GF1103_128_G*/
function FGF1103_128_G(obj){
    showStr(obj);
    $('#GF1103_128_E').val(getNumToString(getStrFloat($('#GF1103_128_F').val())+getStrFloat($('#GF1103_128_G').val())+getStrFloat($('#GF1103_128_H').val()),2));
    FGF1103_128_E($('#GF1103_128_E'));
    $('#GF1103_128_G').val(getNumToString(getStrFloat($('#GF1103_8_G').val())+getStrFloat($('#GF1103_14_G').val())+getStrFloat($('#GF1103_22_G').val())+getStrFloat($('#GF1103_54_G').val())+getStrFloat($('#GF1103_58_G').val())+getStrFloat($('#GF1103_63_G').val())+getStrFloat($('#GF1103_66_G').val())+getStrFloat($('#GF1103_75_G').val())+getStrFloat($('#GF1103_78_G').val())+getStrFloat($('#GF1103_82_G').val())+getStrFloat($('#GF1103_87_G').val())+getStrFloat($('#GF1103_89_G').val())+getStrFloat($('#GF1103_92_G').val())+getStrFloat($('#GF1103_96_G').val())+getStrFloat($('#GF1103_100_G').val())+getStrFloat($('#GF1103_104_G').val())+getStrFloat($('#GF1103_106_G').val())+getStrFloat($('#GF1103_109_G').val())+getStrFloat($('#GF1103_115_G').val())+getStrFloat($('#GF1103_122_G').val())+getStrFloat($('#GF1103_124_G').val()),2));
}

/*GF1103_128_H*/
function FGF1103_128_H(obj){
    showStr(obj);
    $('#GF1103_128_E').val(getNumToString(getStrFloat($('#GF1103_128_F').val())+getStrFloat($('#GF1103_128_G').val())+getStrFloat($('#GF1103_128_H').val()),2));
    FGF1103_128_E($('#GF1103_128_E'));
    $('#GF1103_128_H').val(getNumToString(getStrFloat($('#GF1103_8_H').val())+getStrFloat($('#GF1103_14_H').val())+getStrFloat($('#GF1103_22_H').val())+getStrFloat($('#GF1103_54_H').val())+getStrFloat($('#GF1103_58_H').val())+getStrFloat($('#GF1103_63_H').val())+getStrFloat($('#GF1103_66_H').val())+getStrFloat($('#GF1103_75_H').val())+getStrFloat($('#GF1103_78_H').val())+getStrFloat($('#GF1103_82_H').val())+getStrFloat($('#GF1103_87_H').val())+getStrFloat($('#GF1103_89_H').val())+getStrFloat($('#GF1103_92_H').val())+getStrFloat($('#GF1103_96_H').val())+getStrFloat($('#GF1103_100_H').val())+getStrFloat($('#GF1103_104_H').val())+getStrFloat($('#GF1103_106_H').val())+getStrFloat($('#GF1103_109_H').val())+getStrFloat($('#GF1103_115_H').val())+getStrFloat($('#GF1103_122_H').val())+getStrFloat($('#GF1103_124_H').val()),2));
}


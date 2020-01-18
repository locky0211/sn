/*G1403_8_A*/
function FG1403_8_A(obj){
    showStr(obj);
}

/*G1403_8_B*/
function FG1403_8_B(obj){
    showStr(obj);
}

/*G1403_8_C*/
function FG1403_8_C(obj){
    showStr(obj);
}

/*G1403_8_D*/
function FG1403_8_D(obj){
    showStr(obj);
    $('#G1403_8_D').val(getNumToString(getStrFloat($('#G1403_8_F').val())+getStrFloat($('#G1403_8_G').val())+getStrFloat($('#G1403_8_H').val())+getStrFloat($('#G1403_8_I').val())+getStrFloat($('#G1403_8_J').val()),2));
    $('#G1403_8_E').val(getNumToString(getRate(getStrFloat($('#G1403_8_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_8_E($('#G1403_8_E'));
    $('#G1403_8_P').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val()),2));
    FG1403_8_P($('#G1403_8_P'));
    $('#G1403_8_Q').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val())-getStrFloat($('#G1403_8_S').val()),2));
    FG1403_8_Q($('#G1403_8_Q'));
    $('#G1403_8_R').val(getNumToString(getRate((getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val())-getStrFloat($('#G1403_8_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_8_R($('#G1403_8_R'));
    $('#G1403_18_D').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_17_D').val()),2));
    FG1403_18_D($('#G1403_18_D'));
}

/*G1403_8_E*/
function FG1403_8_E(obj){
    showStr(obj);
    $('#G1403_8_E').val(getNumToString(getRate(getStrFloat($('#G1403_8_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_8_F*/
function FG1403_8_F(obj){
    showStr(obj);
    $('#G1403_8_D').val(getNumToString(getStrFloat($('#G1403_8_F').val())+getStrFloat($('#G1403_8_G').val())+getStrFloat($('#G1403_8_H').val())+getStrFloat($('#G1403_8_I').val())+getStrFloat($('#G1403_8_J').val()),2));
    FG1403_8_D($('#G1403_8_D'));
    $('#G1403_18_F').val(getNumToString(getStrFloat($('#G1403_8_F').val())+getStrFloat($('#G1403_9_F').val())+getStrFloat($('#G1403_10_F').val())+getStrFloat($('#G1403_11_F').val())+getStrFloat($('#G1403_12_F').val())+getStrFloat($('#G1403_13_F').val())+getStrFloat($('#G1403_14_F').val())+getStrFloat($('#G1403_15_F').val())+getStrFloat($('#G1403_16_F').val())+getStrFloat($('#G1403_17_F').val()),2));
    FG1403_18_F($('#G1403_18_F'));
}

/*G1403_8_G*/
function FG1403_8_G(obj){
    showStr(obj);
    $('#G1403_8_D').val(getNumToString(getStrFloat($('#G1403_8_F').val())+getStrFloat($('#G1403_8_G').val())+getStrFloat($('#G1403_8_H').val())+getStrFloat($('#G1403_8_I').val())+getStrFloat($('#G1403_8_J').val()),2));
    FG1403_8_D($('#G1403_8_D'));
    $('#G1403_18_G').val(getNumToString(getStrFloat($('#G1403_8_G').val())+getStrFloat($('#G1403_9_G').val())+getStrFloat($('#G1403_10_G').val())+getStrFloat($('#G1403_11_G').val())+getStrFloat($('#G1403_12_G').val())+getStrFloat($('#G1403_13_G').val())+getStrFloat($('#G1403_14_G').val())+getStrFloat($('#G1403_15_G').val())+getStrFloat($('#G1403_16_G').val())+getStrFloat($('#G1403_17_G').val()),2));
    FG1403_18_G($('#G1403_18_G'));
}

/*G1403_8_H*/
function FG1403_8_H(obj){
    showStr(obj);
    $('#G1403_8_D').val(getNumToString(getStrFloat($('#G1403_8_F').val())+getStrFloat($('#G1403_8_G').val())+getStrFloat($('#G1403_8_H').val())+getStrFloat($('#G1403_8_I').val())+getStrFloat($('#G1403_8_J').val()),2));
    FG1403_8_D($('#G1403_8_D'));
    $('#G1403_18_H').val(getNumToString(getStrFloat($('#G1403_8_H').val())+getStrFloat($('#G1403_9_H').val())+getStrFloat($('#G1403_10_H').val())+getStrFloat($('#G1403_11_H').val())+getStrFloat($('#G1403_12_H').val())+getStrFloat($('#G1403_13_H').val())+getStrFloat($('#G1403_14_H').val())+getStrFloat($('#G1403_15_H').val())+getStrFloat($('#G1403_16_H').val())+getStrFloat($('#G1403_17_H').val()),2));
    FG1403_18_H($('#G1403_18_H'));
}

/*G1403_8_I*/
function FG1403_8_I(obj){
    showStr(obj);
    $('#G1403_8_D').val(getNumToString(getStrFloat($('#G1403_8_F').val())+getStrFloat($('#G1403_8_G').val())+getStrFloat($('#G1403_8_H').val())+getStrFloat($('#G1403_8_I').val())+getStrFloat($('#G1403_8_J').val()),2));
    FG1403_8_D($('#G1403_8_D'));
    $('#G1403_18_I').val(getNumToString(getStrFloat($('#G1403_8_I').val())+getStrFloat($('#G1403_9_I').val())+getStrFloat($('#G1403_10_I').val())+getStrFloat($('#G1403_11_I').val())+getStrFloat($('#G1403_12_I').val())+getStrFloat($('#G1403_13_I').val())+getStrFloat($('#G1403_14_I').val())+getStrFloat($('#G1403_15_I').val())+getStrFloat($('#G1403_16_I').val())+getStrFloat($('#G1403_17_I').val()),2));
    FG1403_18_I($('#G1403_18_I'));
}

/*G1403_8_J*/
function FG1403_8_J(obj){
    showStr(obj);
    $('#G1403_8_D').val(getNumToString(getStrFloat($('#G1403_8_F').val())+getStrFloat($('#G1403_8_G').val())+getStrFloat($('#G1403_8_H').val())+getStrFloat($('#G1403_8_I').val())+getStrFloat($('#G1403_8_J').val()),2));
    FG1403_8_D($('#G1403_8_D'));
    $('#G1403_18_J').val(getNumToString(getStrFloat($('#G1403_8_J').val())+getStrFloat($('#G1403_9_J').val())+getStrFloat($('#G1403_10_J').val())+getStrFloat($('#G1403_11_J').val())+getStrFloat($('#G1403_12_J').val())+getStrFloat($('#G1403_13_J').val())+getStrFloat($('#G1403_14_J').val())+getStrFloat($('#G1403_15_J').val())+getStrFloat($('#G1403_16_J').val())+getStrFloat($('#G1403_17_J').val()),2));
    FG1403_18_J($('#G1403_18_J'));
}

/*G1403_8_K*/
function FG1403_8_K(obj){
    showStr(obj);
    $('#G1403_8_P').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val()),2));
    FG1403_8_P($('#G1403_8_P'));
    $('#G1403_8_Q').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val())-getStrFloat($('#G1403_8_S').val()),2));
    FG1403_8_Q($('#G1403_8_Q'));
    $('#G1403_8_R').val(getNumToString(getRate((getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val())-getStrFloat($('#G1403_8_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_8_R($('#G1403_8_R'));
    $('#G1403_18_K').val(getNumToString(getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_17_K').val()),2));
    FG1403_18_K($('#G1403_18_K'));
}

/*G1403_8_L*/
function FG1403_8_L(obj){
    showStr(obj);
    $('#G1403_18_L').val(getNumToString(getStrFloat($('#G1403_8_L').val())+getStrFloat($('#G1403_9_L').val())+getStrFloat($('#G1403_10_L').val())+getStrFloat($('#G1403_11_L').val())+getStrFloat($('#G1403_12_L').val())+getStrFloat($('#G1403_13_L').val())+getStrFloat($('#G1403_14_L').val())+getStrFloat($('#G1403_15_L').val())+getStrFloat($('#G1403_16_L').val())+getStrFloat($('#G1403_17_L').val()),2));
    FG1403_18_L($('#G1403_18_L'));
}

/*G1403_8_M*/
function FG1403_8_M(obj){
    showStr(obj);
    $('#G1403_8_P').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val()),2));
    FG1403_8_P($('#G1403_8_P'));
    $('#G1403_8_Q').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val())-getStrFloat($('#G1403_8_S').val()),2));
    FG1403_8_Q($('#G1403_8_Q'));
    $('#G1403_8_R').val(getNumToString(getRate((getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val())-getStrFloat($('#G1403_8_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_8_R($('#G1403_8_R'));
    $('#G1403_18_M').val(getNumToString(getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_17_M').val()),2));
    FG1403_18_M($('#G1403_18_M'));
}

/*G1403_8_N*/
function FG1403_8_N(obj){
    showStr(obj);
    $('#G1403_18_N').val(getNumToString(getStrFloat($('#G1403_8_N').val())+getStrFloat($('#G1403_9_N').val())+getStrFloat($('#G1403_10_N').val())+getStrFloat($('#G1403_11_N').val())+getStrFloat($('#G1403_12_N').val())+getStrFloat($('#G1403_13_N').val())+getStrFloat($('#G1403_14_N').val())+getStrFloat($('#G1403_15_N').val())+getStrFloat($('#G1403_16_N').val())+getStrFloat($('#G1403_17_N').val()),2));
    FG1403_18_N($('#G1403_18_N'));
}

/*G1403_8_O*/
function FG1403_8_O(obj){
    showStr(obj);
    $('#G1403_8_P').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val()),2));
    FG1403_8_P($('#G1403_8_P'));
    $('#G1403_8_Q').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val())-getStrFloat($('#G1403_8_S').val()),2));
    FG1403_8_Q($('#G1403_8_Q'));
    $('#G1403_8_R').val(getNumToString(getRate((getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val())-getStrFloat($('#G1403_8_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_8_R($('#G1403_8_R'));
    $('#G1403_18_O').val(getNumToString(getStrFloat($('#G1403_8_O').val())+getStrFloat($('#G1403_9_O').val())+getStrFloat($('#G1403_10_O').val())+getStrFloat($('#G1403_11_O').val())+getStrFloat($('#G1403_12_O').val())+getStrFloat($('#G1403_13_O').val())+getStrFloat($('#G1403_14_O').val())+getStrFloat($('#G1403_15_O').val())+getStrFloat($('#G1403_16_O').val())+getStrFloat($('#G1403_17_O').val()),2));
    FG1403_18_O($('#G1403_18_O'));
}

/*G1403_8_P*/
function FG1403_8_P(obj){
    showStr(obj);
    $('#G1403_8_P').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val()),2));
    $('#G1403_18_P').val(getNumToString(getStrFloat($('#G1403_8_P').val())+getStrFloat($('#G1403_9_P').val())+getStrFloat($('#G1403_10_P').val())+getStrFloat($('#G1403_11_P').val())+getStrFloat($('#G1403_12_P').val())+getStrFloat($('#G1403_13_P').val())+getStrFloat($('#G1403_14_P').val())+getStrFloat($('#G1403_15_P').val())+getStrFloat($('#G1403_16_P').val())+getStrFloat($('#G1403_17_P').val()),2));
    FG1403_18_P($('#G1403_18_P'));
}

/*G1403_8_Q*/
function FG1403_8_Q(obj){
    showStr(obj);
    $('#G1403_8_Q').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val())-getStrFloat($('#G1403_8_S').val()),2));
    $('#G1403_18_Q').val(getNumToString(getStrFloat($('#G1403_8_Q').val())+getStrFloat($('#G1403_9_Q').val())+getStrFloat($('#G1403_10_Q').val())+getStrFloat($('#G1403_11_Q').val())+getStrFloat($('#G1403_12_Q').val())+getStrFloat($('#G1403_13_Q').val())+getStrFloat($('#G1403_14_Q').val())+getStrFloat($('#G1403_15_Q').val())+getStrFloat($('#G1403_16_Q').val())+getStrFloat($('#G1403_17_Q').val()),2));
    FG1403_18_Q($('#G1403_18_Q'));
}

/*G1403_8_R*/
function FG1403_8_R(obj){
    showStr(obj);
    $('#G1403_8_R').val(getNumToString(getRate((getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val())-getStrFloat($('#G1403_8_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_8_S*/
function FG1403_8_S(obj){
    showStr(obj);
    $('#G1403_8_Q').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val())-getStrFloat($('#G1403_8_S').val()),2));
    FG1403_8_Q($('#G1403_8_Q'));
    $('#G1403_8_R').val(getNumToString(getRate((getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val())-getStrFloat($('#G1403_8_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_8_R($('#G1403_8_R'));
    $('#G1403_18_S').val(getNumToString(getStrFloat($('#G1403_8_S').val())+getStrFloat($('#G1403_9_S').val())+getStrFloat($('#G1403_10_S').val())+getStrFloat($('#G1403_11_S').val())+getStrFloat($('#G1403_12_S').val())+getStrFloat($('#G1403_13_S').val())+getStrFloat($('#G1403_14_S').val())+getStrFloat($('#G1403_15_S').val())+getStrFloat($('#G1403_16_S').val())+getStrFloat($('#G1403_17_S').val()),2));
    FG1403_18_S($('#G1403_18_S'));
}

/*G1403_9_A*/
function FG1403_9_A(obj){
    showStr(obj);
}

/*G1403_9_B*/
function FG1403_9_B(obj){
    showStr(obj);
}

/*G1403_9_C*/
function FG1403_9_C(obj){
    showStr(obj);
}

/*G1403_9_D*/
function FG1403_9_D(obj){
    showStr(obj);
    $('#G1403_9_D').val(getNumToString(getStrFloat($('#G1403_9_F').val())+getStrFloat($('#G1403_9_G').val())+getStrFloat($('#G1403_9_H').val())+getStrFloat($('#G1403_9_I').val())+getStrFloat($('#G1403_9_J').val()),2));
    $('#G1403_9_E').val(getNumToString(getRate(getStrFloat($('#G1403_9_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_9_E($('#G1403_9_E'));
    $('#G1403_9_P').val(getNumToString(getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val()),2));
    FG1403_9_P($('#G1403_9_P'));
    $('#G1403_9_Q').val(getNumToString(getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val())-getStrFloat($('#G1403_9_S').val()),2));
    FG1403_9_Q($('#G1403_9_Q'));
    $('#G1403_9_R').val(getNumToString(getRate((getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val())-getStrFloat($('#G1403_9_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_9_R($('#G1403_9_R'));
    $('#G1403_18_D').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_17_D').val()),2));
    FG1403_18_D($('#G1403_18_D'));
}

/*G1403_9_E*/
function FG1403_9_E(obj){
    showStr(obj);
    $('#G1403_9_E').val(getNumToString(getRate(getStrFloat($('#G1403_9_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_9_F*/
function FG1403_9_F(obj){
    showStr(obj);
    $('#G1403_9_D').val(getNumToString(getStrFloat($('#G1403_9_F').val())+getStrFloat($('#G1403_9_G').val())+getStrFloat($('#G1403_9_H').val())+getStrFloat($('#G1403_9_I').val())+getStrFloat($('#G1403_9_J').val()),2));
    FG1403_9_D($('#G1403_9_D'));
    $('#G1403_18_F').val(getNumToString(getStrFloat($('#G1403_8_F').val())+getStrFloat($('#G1403_9_F').val())+getStrFloat($('#G1403_10_F').val())+getStrFloat($('#G1403_11_F').val())+getStrFloat($('#G1403_12_F').val())+getStrFloat($('#G1403_13_F').val())+getStrFloat($('#G1403_14_F').val())+getStrFloat($('#G1403_15_F').val())+getStrFloat($('#G1403_16_F').val())+getStrFloat($('#G1403_17_F').val()),2));
    FG1403_18_F($('#G1403_18_F'));
}

/*G1403_9_G*/
function FG1403_9_G(obj){
    showStr(obj);
    $('#G1403_9_D').val(getNumToString(getStrFloat($('#G1403_9_F').val())+getStrFloat($('#G1403_9_G').val())+getStrFloat($('#G1403_9_H').val())+getStrFloat($('#G1403_9_I').val())+getStrFloat($('#G1403_9_J').val()),2));
    FG1403_9_D($('#G1403_9_D'));
    $('#G1403_18_G').val(getNumToString(getStrFloat($('#G1403_8_G').val())+getStrFloat($('#G1403_9_G').val())+getStrFloat($('#G1403_10_G').val())+getStrFloat($('#G1403_11_G').val())+getStrFloat($('#G1403_12_G').val())+getStrFloat($('#G1403_13_G').val())+getStrFloat($('#G1403_14_G').val())+getStrFloat($('#G1403_15_G').val())+getStrFloat($('#G1403_16_G').val())+getStrFloat($('#G1403_17_G').val()),2));
    FG1403_18_G($('#G1403_18_G'));
}

/*G1403_9_H*/
function FG1403_9_H(obj){
    showStr(obj);
    $('#G1403_9_D').val(getNumToString(getStrFloat($('#G1403_9_F').val())+getStrFloat($('#G1403_9_G').val())+getStrFloat($('#G1403_9_H').val())+getStrFloat($('#G1403_9_I').val())+getStrFloat($('#G1403_9_J').val()),2));
    FG1403_9_D($('#G1403_9_D'));
    $('#G1403_18_H').val(getNumToString(getStrFloat($('#G1403_8_H').val())+getStrFloat($('#G1403_9_H').val())+getStrFloat($('#G1403_10_H').val())+getStrFloat($('#G1403_11_H').val())+getStrFloat($('#G1403_12_H').val())+getStrFloat($('#G1403_13_H').val())+getStrFloat($('#G1403_14_H').val())+getStrFloat($('#G1403_15_H').val())+getStrFloat($('#G1403_16_H').val())+getStrFloat($('#G1403_17_H').val()),2));
    FG1403_18_H($('#G1403_18_H'));
}

/*G1403_9_I*/
function FG1403_9_I(obj){
    showStr(obj);
    $('#G1403_9_D').val(getNumToString(getStrFloat($('#G1403_9_F').val())+getStrFloat($('#G1403_9_G').val())+getStrFloat($('#G1403_9_H').val())+getStrFloat($('#G1403_9_I').val())+getStrFloat($('#G1403_9_J').val()),2));
    FG1403_9_D($('#G1403_9_D'));
    $('#G1403_18_I').val(getNumToString(getStrFloat($('#G1403_8_I').val())+getStrFloat($('#G1403_9_I').val())+getStrFloat($('#G1403_10_I').val())+getStrFloat($('#G1403_11_I').val())+getStrFloat($('#G1403_12_I').val())+getStrFloat($('#G1403_13_I').val())+getStrFloat($('#G1403_14_I').val())+getStrFloat($('#G1403_15_I').val())+getStrFloat($('#G1403_16_I').val())+getStrFloat($('#G1403_17_I').val()),2));
    FG1403_18_I($('#G1403_18_I'));
}

/*G1403_9_J*/
function FG1403_9_J(obj){
    showStr(obj);
    $('#G1403_9_D').val(getNumToString(getStrFloat($('#G1403_9_F').val())+getStrFloat($('#G1403_9_G').val())+getStrFloat($('#G1403_9_H').val())+getStrFloat($('#G1403_9_I').val())+getStrFloat($('#G1403_9_J').val()),2));
    FG1403_9_D($('#G1403_9_D'));
    $('#G1403_18_J').val(getNumToString(getStrFloat($('#G1403_8_J').val())+getStrFloat($('#G1403_9_J').val())+getStrFloat($('#G1403_10_J').val())+getStrFloat($('#G1403_11_J').val())+getStrFloat($('#G1403_12_J').val())+getStrFloat($('#G1403_13_J').val())+getStrFloat($('#G1403_14_J').val())+getStrFloat($('#G1403_15_J').val())+getStrFloat($('#G1403_16_J').val())+getStrFloat($('#G1403_17_J').val()),2));
    FG1403_18_J($('#G1403_18_J'));
}

/*G1403_9_K*/
function FG1403_9_K(obj){
    showStr(obj);
    $('#G1403_9_P').val(getNumToString(getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val()),2));
    FG1403_9_P($('#G1403_9_P'));
    $('#G1403_9_Q').val(getNumToString(getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val())-getStrFloat($('#G1403_9_S').val()),2));
    FG1403_9_Q($('#G1403_9_Q'));
    $('#G1403_9_R').val(getNumToString(getRate((getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val())-getStrFloat($('#G1403_9_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_9_R($('#G1403_9_R'));
    $('#G1403_18_K').val(getNumToString(getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_17_K').val()),2));
    FG1403_18_K($('#G1403_18_K'));
}

/*G1403_9_L*/
function FG1403_9_L(obj){
    showStr(obj);
    $('#G1403_18_L').val(getNumToString(getStrFloat($('#G1403_8_L').val())+getStrFloat($('#G1403_9_L').val())+getStrFloat($('#G1403_10_L').val())+getStrFloat($('#G1403_11_L').val())+getStrFloat($('#G1403_12_L').val())+getStrFloat($('#G1403_13_L').val())+getStrFloat($('#G1403_14_L').val())+getStrFloat($('#G1403_15_L').val())+getStrFloat($('#G1403_16_L').val())+getStrFloat($('#G1403_17_L').val()),2));
    FG1403_18_L($('#G1403_18_L'));
}

/*G1403_9_M*/
function FG1403_9_M(obj){
    showStr(obj);
    $('#G1403_9_P').val(getNumToString(getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val()),2));
    FG1403_9_P($('#G1403_9_P'));
    $('#G1403_9_Q').val(getNumToString(getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val())-getStrFloat($('#G1403_9_S').val()),2));
    FG1403_9_Q($('#G1403_9_Q'));
    $('#G1403_9_R').val(getNumToString(getRate((getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val())-getStrFloat($('#G1403_9_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_9_R($('#G1403_9_R'));
    $('#G1403_18_M').val(getNumToString(getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_17_M').val()),2));
    FG1403_18_M($('#G1403_18_M'));
}

/*G1403_9_N*/
function FG1403_9_N(obj){
    showStr(obj);
    $('#G1403_18_N').val(getNumToString(getStrFloat($('#G1403_8_N').val())+getStrFloat($('#G1403_9_N').val())+getStrFloat($('#G1403_10_N').val())+getStrFloat($('#G1403_11_N').val())+getStrFloat($('#G1403_12_N').val())+getStrFloat($('#G1403_13_N').val())+getStrFloat($('#G1403_14_N').val())+getStrFloat($('#G1403_15_N').val())+getStrFloat($('#G1403_16_N').val())+getStrFloat($('#G1403_17_N').val()),2));
    FG1403_18_N($('#G1403_18_N'));
}

/*G1403_9_O*/
function FG1403_9_O(obj){
    showStr(obj);
    $('#G1403_9_P').val(getNumToString(getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val()),2));
    FG1403_9_P($('#G1403_9_P'));
    $('#G1403_9_Q').val(getNumToString(getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val())-getStrFloat($('#G1403_9_S').val()),2));
    FG1403_9_Q($('#G1403_9_Q'));
    $('#G1403_9_R').val(getNumToString(getRate((getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val())-getStrFloat($('#G1403_9_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_9_R($('#G1403_9_R'));
    $('#G1403_18_O').val(getNumToString(getStrFloat($('#G1403_8_O').val())+getStrFloat($('#G1403_9_O').val())+getStrFloat($('#G1403_10_O').val())+getStrFloat($('#G1403_11_O').val())+getStrFloat($('#G1403_12_O').val())+getStrFloat($('#G1403_13_O').val())+getStrFloat($('#G1403_14_O').val())+getStrFloat($('#G1403_15_O').val())+getStrFloat($('#G1403_16_O').val())+getStrFloat($('#G1403_17_O').val()),2));
    FG1403_18_O($('#G1403_18_O'));
}

/*G1403_9_P*/
function FG1403_9_P(obj){
    showStr(obj);
    $('#G1403_9_P').val(getNumToString(getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val()),2));
    $('#G1403_18_P').val(getNumToString(getStrFloat($('#G1403_8_P').val())+getStrFloat($('#G1403_9_P').val())+getStrFloat($('#G1403_10_P').val())+getStrFloat($('#G1403_11_P').val())+getStrFloat($('#G1403_12_P').val())+getStrFloat($('#G1403_13_P').val())+getStrFloat($('#G1403_14_P').val())+getStrFloat($('#G1403_15_P').val())+getStrFloat($('#G1403_16_P').val())+getStrFloat($('#G1403_17_P').val()),2));
    FG1403_18_P($('#G1403_18_P'));
}

/*G1403_9_Q*/
function FG1403_9_Q(obj){
    showStr(obj);
    $('#G1403_9_Q').val(getNumToString(getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val())-getStrFloat($('#G1403_9_S').val()),2));
    $('#G1403_18_Q').val(getNumToString(getStrFloat($('#G1403_8_Q').val())+getStrFloat($('#G1403_9_Q').val())+getStrFloat($('#G1403_10_Q').val())+getStrFloat($('#G1403_11_Q').val())+getStrFloat($('#G1403_12_Q').val())+getStrFloat($('#G1403_13_Q').val())+getStrFloat($('#G1403_14_Q').val())+getStrFloat($('#G1403_15_Q').val())+getStrFloat($('#G1403_16_Q').val())+getStrFloat($('#G1403_17_Q').val()),2));
    FG1403_18_Q($('#G1403_18_Q'));
}

/*G1403_9_R*/
function FG1403_9_R(obj){
    showStr(obj);
    $('#G1403_9_R').val(getNumToString(getRate((getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val())-getStrFloat($('#G1403_9_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_9_S*/
function FG1403_9_S(obj){
    showStr(obj);
    $('#G1403_9_Q').val(getNumToString(getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val())-getStrFloat($('#G1403_9_S').val()),2));
    FG1403_9_Q($('#G1403_9_Q'));
    $('#G1403_9_R').val(getNumToString(getRate((getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val())-getStrFloat($('#G1403_9_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_9_R($('#G1403_9_R'));
    $('#G1403_18_S').val(getNumToString(getStrFloat($('#G1403_8_S').val())+getStrFloat($('#G1403_9_S').val())+getStrFloat($('#G1403_10_S').val())+getStrFloat($('#G1403_11_S').val())+getStrFloat($('#G1403_12_S').val())+getStrFloat($('#G1403_13_S').val())+getStrFloat($('#G1403_14_S').val())+getStrFloat($('#G1403_15_S').val())+getStrFloat($('#G1403_16_S').val())+getStrFloat($('#G1403_17_S').val()),2));
    FG1403_18_S($('#G1403_18_S'));
}

/*G1403_10_A*/
function FG1403_10_A(obj){
    showStr(obj);
}

/*G1403_10_B*/
function FG1403_10_B(obj){
    showStr(obj);
}

/*G1403_10_C*/
function FG1403_10_C(obj){
    showStr(obj);
}

/*G1403_10_D*/
function FG1403_10_D(obj){
    showStr(obj);
    $('#G1403_10_D').val(getNumToString(getStrFloat($('#G1403_10_F').val())+getStrFloat($('#G1403_10_G').val())+getStrFloat($('#G1403_10_H').val())+getStrFloat($('#G1403_10_I').val())+getStrFloat($('#G1403_10_J').val()),2));
    $('#G1403_10_E').val(getNumToString(getRate(getStrFloat($('#G1403_10_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_10_E($('#G1403_10_E'));
    $('#G1403_10_P').val(getNumToString(getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val()),2));
    FG1403_10_P($('#G1403_10_P'));
    $('#G1403_10_Q').val(getNumToString(getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val())-getStrFloat($('#G1403_10_S').val()),2));
    FG1403_10_Q($('#G1403_10_Q'));
    $('#G1403_10_R').val(getNumToString(getRate((getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val())-getStrFloat($('#G1403_10_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_10_R($('#G1403_10_R'));
    $('#G1403_18_D').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_17_D').val()),2));
    FG1403_18_D($('#G1403_18_D'));
}

/*G1403_10_E*/
function FG1403_10_E(obj){
    showStr(obj);
    $('#G1403_10_E').val(getNumToString(getRate(getStrFloat($('#G1403_10_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_10_F*/
function FG1403_10_F(obj){
    showStr(obj);
    $('#G1403_10_D').val(getNumToString(getStrFloat($('#G1403_10_F').val())+getStrFloat($('#G1403_10_G').val())+getStrFloat($('#G1403_10_H').val())+getStrFloat($('#G1403_10_I').val())+getStrFloat($('#G1403_10_J').val()),2));
    FG1403_10_D($('#G1403_10_D'));
    $('#G1403_18_F').val(getNumToString(getStrFloat($('#G1403_8_F').val())+getStrFloat($('#G1403_9_F').val())+getStrFloat($('#G1403_10_F').val())+getStrFloat($('#G1403_11_F').val())+getStrFloat($('#G1403_12_F').val())+getStrFloat($('#G1403_13_F').val())+getStrFloat($('#G1403_14_F').val())+getStrFloat($('#G1403_15_F').val())+getStrFloat($('#G1403_16_F').val())+getStrFloat($('#G1403_17_F').val()),2));
    FG1403_18_F($('#G1403_18_F'));
}

/*G1403_10_G*/
function FG1403_10_G(obj){
    showStr(obj);
    $('#G1403_10_D').val(getNumToString(getStrFloat($('#G1403_10_F').val())+getStrFloat($('#G1403_10_G').val())+getStrFloat($('#G1403_10_H').val())+getStrFloat($('#G1403_10_I').val())+getStrFloat($('#G1403_10_J').val()),2));
    FG1403_10_D($('#G1403_10_D'));
    $('#G1403_18_G').val(getNumToString(getStrFloat($('#G1403_8_G').val())+getStrFloat($('#G1403_9_G').val())+getStrFloat($('#G1403_10_G').val())+getStrFloat($('#G1403_11_G').val())+getStrFloat($('#G1403_12_G').val())+getStrFloat($('#G1403_13_G').val())+getStrFloat($('#G1403_14_G').val())+getStrFloat($('#G1403_15_G').val())+getStrFloat($('#G1403_16_G').val())+getStrFloat($('#G1403_17_G').val()),2));
    FG1403_18_G($('#G1403_18_G'));
}

/*G1403_10_H*/
function FG1403_10_H(obj){
    showStr(obj);
    $('#G1403_10_D').val(getNumToString(getStrFloat($('#G1403_10_F').val())+getStrFloat($('#G1403_10_G').val())+getStrFloat($('#G1403_10_H').val())+getStrFloat($('#G1403_10_I').val())+getStrFloat($('#G1403_10_J').val()),2));
    FG1403_10_D($('#G1403_10_D'));
    $('#G1403_18_H').val(getNumToString(getStrFloat($('#G1403_8_H').val())+getStrFloat($('#G1403_9_H').val())+getStrFloat($('#G1403_10_H').val())+getStrFloat($('#G1403_11_H').val())+getStrFloat($('#G1403_12_H').val())+getStrFloat($('#G1403_13_H').val())+getStrFloat($('#G1403_14_H').val())+getStrFloat($('#G1403_15_H').val())+getStrFloat($('#G1403_16_H').val())+getStrFloat($('#G1403_17_H').val()),2));
    FG1403_18_H($('#G1403_18_H'));
}

/*G1403_10_I*/
function FG1403_10_I(obj){
    showStr(obj);
    $('#G1403_10_D').val(getNumToString(getStrFloat($('#G1403_10_F').val())+getStrFloat($('#G1403_10_G').val())+getStrFloat($('#G1403_10_H').val())+getStrFloat($('#G1403_10_I').val())+getStrFloat($('#G1403_10_J').val()),2));
    FG1403_10_D($('#G1403_10_D'));
    $('#G1403_18_I').val(getNumToString(getStrFloat($('#G1403_8_I').val())+getStrFloat($('#G1403_9_I').val())+getStrFloat($('#G1403_10_I').val())+getStrFloat($('#G1403_11_I').val())+getStrFloat($('#G1403_12_I').val())+getStrFloat($('#G1403_13_I').val())+getStrFloat($('#G1403_14_I').val())+getStrFloat($('#G1403_15_I').val())+getStrFloat($('#G1403_16_I').val())+getStrFloat($('#G1403_17_I').val()),2));
    FG1403_18_I($('#G1403_18_I'));
}

/*G1403_10_J*/
function FG1403_10_J(obj){
    showStr(obj);
    $('#G1403_10_D').val(getNumToString(getStrFloat($('#G1403_10_F').val())+getStrFloat($('#G1403_10_G').val())+getStrFloat($('#G1403_10_H').val())+getStrFloat($('#G1403_10_I').val())+getStrFloat($('#G1403_10_J').val()),2));
    FG1403_10_D($('#G1403_10_D'));
    $('#G1403_18_J').val(getNumToString(getStrFloat($('#G1403_8_J').val())+getStrFloat($('#G1403_9_J').val())+getStrFloat($('#G1403_10_J').val())+getStrFloat($('#G1403_11_J').val())+getStrFloat($('#G1403_12_J').val())+getStrFloat($('#G1403_13_J').val())+getStrFloat($('#G1403_14_J').val())+getStrFloat($('#G1403_15_J').val())+getStrFloat($('#G1403_16_J').val())+getStrFloat($('#G1403_17_J').val()),2));
    FG1403_18_J($('#G1403_18_J'));
}

/*G1403_10_K*/
function FG1403_10_K(obj){
    showStr(obj);
    $('#G1403_10_P').val(getNumToString(getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val()),2));
    FG1403_10_P($('#G1403_10_P'));
    $('#G1403_10_Q').val(getNumToString(getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val())-getStrFloat($('#G1403_10_S').val()),2));
    FG1403_10_Q($('#G1403_10_Q'));
    $('#G1403_10_R').val(getNumToString(getRate((getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val())-getStrFloat($('#G1403_10_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_10_R($('#G1403_10_R'));
    $('#G1403_18_K').val(getNumToString(getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_17_K').val()),2));
    FG1403_18_K($('#G1403_18_K'));
}

/*G1403_10_L*/
function FG1403_10_L(obj){
    showStr(obj);
    $('#G1403_18_L').val(getNumToString(getStrFloat($('#G1403_8_L').val())+getStrFloat($('#G1403_9_L').val())+getStrFloat($('#G1403_10_L').val())+getStrFloat($('#G1403_11_L').val())+getStrFloat($('#G1403_12_L').val())+getStrFloat($('#G1403_13_L').val())+getStrFloat($('#G1403_14_L').val())+getStrFloat($('#G1403_15_L').val())+getStrFloat($('#G1403_16_L').val())+getStrFloat($('#G1403_17_L').val()),2));
    FG1403_18_L($('#G1403_18_L'));
}

/*G1403_10_M*/
function FG1403_10_M(obj){
    showStr(obj);
    $('#G1403_10_P').val(getNumToString(getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val()),2));
    FG1403_10_P($('#G1403_10_P'));
    $('#G1403_10_Q').val(getNumToString(getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val())-getStrFloat($('#G1403_10_S').val()),2));
    FG1403_10_Q($('#G1403_10_Q'));
    $('#G1403_10_R').val(getNumToString(getRate((getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val())-getStrFloat($('#G1403_10_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_10_R($('#G1403_10_R'));
    $('#G1403_18_M').val(getNumToString(getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_17_M').val()),2));
    FG1403_18_M($('#G1403_18_M'));
}

/*G1403_10_N*/
function FG1403_10_N(obj){
    showStr(obj);
    $('#G1403_18_N').val(getNumToString(getStrFloat($('#G1403_8_N').val())+getStrFloat($('#G1403_9_N').val())+getStrFloat($('#G1403_10_N').val())+getStrFloat($('#G1403_11_N').val())+getStrFloat($('#G1403_12_N').val())+getStrFloat($('#G1403_13_N').val())+getStrFloat($('#G1403_14_N').val())+getStrFloat($('#G1403_15_N').val())+getStrFloat($('#G1403_16_N').val())+getStrFloat($('#G1403_17_N').val()),2));
    FG1403_18_N($('#G1403_18_N'));
}

/*G1403_10_O*/
function FG1403_10_O(obj){
    showStr(obj);
    $('#G1403_10_P').val(getNumToString(getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val()),2));
    FG1403_10_P($('#G1403_10_P'));
    $('#G1403_10_Q').val(getNumToString(getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val())-getStrFloat($('#G1403_10_S').val()),2));
    FG1403_10_Q($('#G1403_10_Q'));
    $('#G1403_10_R').val(getNumToString(getRate((getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val())-getStrFloat($('#G1403_10_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_10_R($('#G1403_10_R'));
    $('#G1403_18_O').val(getNumToString(getStrFloat($('#G1403_8_O').val())+getStrFloat($('#G1403_9_O').val())+getStrFloat($('#G1403_10_O').val())+getStrFloat($('#G1403_11_O').val())+getStrFloat($('#G1403_12_O').val())+getStrFloat($('#G1403_13_O').val())+getStrFloat($('#G1403_14_O').val())+getStrFloat($('#G1403_15_O').val())+getStrFloat($('#G1403_16_O').val())+getStrFloat($('#G1403_17_O').val()),2));
    FG1403_18_O($('#G1403_18_O'));
}

/*G1403_10_P*/
function FG1403_10_P(obj){
    showStr(obj);
    $('#G1403_10_P').val(getNumToString(getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val()),2));
    $('#G1403_18_P').val(getNumToString(getStrFloat($('#G1403_8_P').val())+getStrFloat($('#G1403_9_P').val())+getStrFloat($('#G1403_10_P').val())+getStrFloat($('#G1403_11_P').val())+getStrFloat($('#G1403_12_P').val())+getStrFloat($('#G1403_13_P').val())+getStrFloat($('#G1403_14_P').val())+getStrFloat($('#G1403_15_P').val())+getStrFloat($('#G1403_16_P').val())+getStrFloat($('#G1403_17_P').val()),2));
    FG1403_18_P($('#G1403_18_P'));
}

/*G1403_10_Q*/
function FG1403_10_Q(obj){
    showStr(obj);
    $('#G1403_10_Q').val(getNumToString(getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val())-getStrFloat($('#G1403_10_S').val()),2));
    $('#G1403_18_Q').val(getNumToString(getStrFloat($('#G1403_8_Q').val())+getStrFloat($('#G1403_9_Q').val())+getStrFloat($('#G1403_10_Q').val())+getStrFloat($('#G1403_11_Q').val())+getStrFloat($('#G1403_12_Q').val())+getStrFloat($('#G1403_13_Q').val())+getStrFloat($('#G1403_14_Q').val())+getStrFloat($('#G1403_15_Q').val())+getStrFloat($('#G1403_16_Q').val())+getStrFloat($('#G1403_17_Q').val()),2));
    FG1403_18_Q($('#G1403_18_Q'));
}

/*G1403_10_R*/
function FG1403_10_R(obj){
    showStr(obj);
    $('#G1403_10_R').val(getNumToString(getRate((getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val())-getStrFloat($('#G1403_10_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_10_S*/
function FG1403_10_S(obj){
    showStr(obj);
    $('#G1403_10_Q').val(getNumToString(getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val())-getStrFloat($('#G1403_10_S').val()),2));
    FG1403_10_Q($('#G1403_10_Q'));
    $('#G1403_10_R').val(getNumToString(getRate((getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val())-getStrFloat($('#G1403_10_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_10_R($('#G1403_10_R'));
    $('#G1403_18_S').val(getNumToString(getStrFloat($('#G1403_8_S').val())+getStrFloat($('#G1403_9_S').val())+getStrFloat($('#G1403_10_S').val())+getStrFloat($('#G1403_11_S').val())+getStrFloat($('#G1403_12_S').val())+getStrFloat($('#G1403_13_S').val())+getStrFloat($('#G1403_14_S').val())+getStrFloat($('#G1403_15_S').val())+getStrFloat($('#G1403_16_S').val())+getStrFloat($('#G1403_17_S').val()),2));
    FG1403_18_S($('#G1403_18_S'));
}

/*G1403_11_A*/
function FG1403_11_A(obj){
    showStr(obj);
}

/*G1403_11_B*/
function FG1403_11_B(obj){
    showStr(obj);
}

/*G1403_11_C*/
function FG1403_11_C(obj){
    showStr(obj);
}

/*G1403_11_D*/
function FG1403_11_D(obj){
    showStr(obj);
    $('#G1403_11_D').val(getNumToString(getStrFloat($('#G1403_11_F').val())+getStrFloat($('#G1403_11_G').val())+getStrFloat($('#G1403_11_H').val())+getStrFloat($('#G1403_11_I').val())+getStrFloat($('#G1403_11_J').val()),2));
    $('#G1403_11_E').val(getNumToString(getRate(getStrFloat($('#G1403_11_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_11_E($('#G1403_11_E'));
    $('#G1403_11_P').val(getNumToString(getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val()),2));
    FG1403_11_P($('#G1403_11_P'));
    $('#G1403_11_Q').val(getNumToString(getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val())-getStrFloat($('#G1403_11_S').val()),2));
    FG1403_11_Q($('#G1403_11_Q'));
    $('#G1403_11_R').val(getNumToString(getRate((getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val())-getStrFloat($('#G1403_11_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_11_R($('#G1403_11_R'));
    $('#G1403_18_D').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_17_D').val()),2));
    FG1403_18_D($('#G1403_18_D'));
}

/*G1403_11_E*/
function FG1403_11_E(obj){
    showStr(obj);
    $('#G1403_11_E').val(getNumToString(getRate(getStrFloat($('#G1403_11_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_11_F*/
function FG1403_11_F(obj){
    showStr(obj);
    $('#G1403_11_D').val(getNumToString(getStrFloat($('#G1403_11_F').val())+getStrFloat($('#G1403_11_G').val())+getStrFloat($('#G1403_11_H').val())+getStrFloat($('#G1403_11_I').val())+getStrFloat($('#G1403_11_J').val()),2));
    FG1403_11_D($('#G1403_11_D'));
    $('#G1403_18_F').val(getNumToString(getStrFloat($('#G1403_8_F').val())+getStrFloat($('#G1403_9_F').val())+getStrFloat($('#G1403_10_F').val())+getStrFloat($('#G1403_11_F').val())+getStrFloat($('#G1403_12_F').val())+getStrFloat($('#G1403_13_F').val())+getStrFloat($('#G1403_14_F').val())+getStrFloat($('#G1403_15_F').val())+getStrFloat($('#G1403_16_F').val())+getStrFloat($('#G1403_17_F').val()),2));
    FG1403_18_F($('#G1403_18_F'));
}

/*G1403_11_G*/
function FG1403_11_G(obj){
    showStr(obj);
    $('#G1403_11_D').val(getNumToString(getStrFloat($('#G1403_11_F').val())+getStrFloat($('#G1403_11_G').val())+getStrFloat($('#G1403_11_H').val())+getStrFloat($('#G1403_11_I').val())+getStrFloat($('#G1403_11_J').val()),2));
    FG1403_11_D($('#G1403_11_D'));
    $('#G1403_18_G').val(getNumToString(getStrFloat($('#G1403_8_G').val())+getStrFloat($('#G1403_9_G').val())+getStrFloat($('#G1403_10_G').val())+getStrFloat($('#G1403_11_G').val())+getStrFloat($('#G1403_12_G').val())+getStrFloat($('#G1403_13_G').val())+getStrFloat($('#G1403_14_G').val())+getStrFloat($('#G1403_15_G').val())+getStrFloat($('#G1403_16_G').val())+getStrFloat($('#G1403_17_G').val()),2));
    FG1403_18_G($('#G1403_18_G'));
}

/*G1403_11_H*/
function FG1403_11_H(obj){
    showStr(obj);
    $('#G1403_11_D').val(getNumToString(getStrFloat($('#G1403_11_F').val())+getStrFloat($('#G1403_11_G').val())+getStrFloat($('#G1403_11_H').val())+getStrFloat($('#G1403_11_I').val())+getStrFloat($('#G1403_11_J').val()),2));
    FG1403_11_D($('#G1403_11_D'));
    $('#G1403_18_H').val(getNumToString(getStrFloat($('#G1403_8_H').val())+getStrFloat($('#G1403_9_H').val())+getStrFloat($('#G1403_10_H').val())+getStrFloat($('#G1403_11_H').val())+getStrFloat($('#G1403_12_H').val())+getStrFloat($('#G1403_13_H').val())+getStrFloat($('#G1403_14_H').val())+getStrFloat($('#G1403_15_H').val())+getStrFloat($('#G1403_16_H').val())+getStrFloat($('#G1403_17_H').val()),2));
    FG1403_18_H($('#G1403_18_H'));
}

/*G1403_11_I*/
function FG1403_11_I(obj){
    showStr(obj);
    $('#G1403_11_D').val(getNumToString(getStrFloat($('#G1403_11_F').val())+getStrFloat($('#G1403_11_G').val())+getStrFloat($('#G1403_11_H').val())+getStrFloat($('#G1403_11_I').val())+getStrFloat($('#G1403_11_J').val()),2));
    FG1403_11_D($('#G1403_11_D'));
    $('#G1403_18_I').val(getNumToString(getStrFloat($('#G1403_8_I').val())+getStrFloat($('#G1403_9_I').val())+getStrFloat($('#G1403_10_I').val())+getStrFloat($('#G1403_11_I').val())+getStrFloat($('#G1403_12_I').val())+getStrFloat($('#G1403_13_I').val())+getStrFloat($('#G1403_14_I').val())+getStrFloat($('#G1403_15_I').val())+getStrFloat($('#G1403_16_I').val())+getStrFloat($('#G1403_17_I').val()),2));
    FG1403_18_I($('#G1403_18_I'));
}

/*G1403_11_J*/
function FG1403_11_J(obj){
    showStr(obj);
    $('#G1403_11_D').val(getNumToString(getStrFloat($('#G1403_11_F').val())+getStrFloat($('#G1403_11_G').val())+getStrFloat($('#G1403_11_H').val())+getStrFloat($('#G1403_11_I').val())+getStrFloat($('#G1403_11_J').val()),2));
    FG1403_11_D($('#G1403_11_D'));
    $('#G1403_18_J').val(getNumToString(getStrFloat($('#G1403_8_J').val())+getStrFloat($('#G1403_9_J').val())+getStrFloat($('#G1403_10_J').val())+getStrFloat($('#G1403_11_J').val())+getStrFloat($('#G1403_12_J').val())+getStrFloat($('#G1403_13_J').val())+getStrFloat($('#G1403_14_J').val())+getStrFloat($('#G1403_15_J').val())+getStrFloat($('#G1403_16_J').val())+getStrFloat($('#G1403_17_J').val()),2));
    FG1403_18_J($('#G1403_18_J'));
}

/*G1403_11_K*/
function FG1403_11_K(obj){
    showStr(obj);
    $('#G1403_11_P').val(getNumToString(getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val()),2));
    FG1403_11_P($('#G1403_11_P'));
    $('#G1403_11_Q').val(getNumToString(getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val())-getStrFloat($('#G1403_11_S').val()),2));
    FG1403_11_Q($('#G1403_11_Q'));
    $('#G1403_11_R').val(getNumToString(getRate((getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val())-getStrFloat($('#G1403_11_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_11_R($('#G1403_11_R'));
    $('#G1403_18_K').val(getNumToString(getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_17_K').val()),2));
    FG1403_18_K($('#G1403_18_K'));
}

/*G1403_11_L*/
function FG1403_11_L(obj){
    showStr(obj);
    $('#G1403_18_L').val(getNumToString(getStrFloat($('#G1403_8_L').val())+getStrFloat($('#G1403_9_L').val())+getStrFloat($('#G1403_10_L').val())+getStrFloat($('#G1403_11_L').val())+getStrFloat($('#G1403_12_L').val())+getStrFloat($('#G1403_13_L').val())+getStrFloat($('#G1403_14_L').val())+getStrFloat($('#G1403_15_L').val())+getStrFloat($('#G1403_16_L').val())+getStrFloat($('#G1403_17_L').val()),2));
    FG1403_18_L($('#G1403_18_L'));
}

/*G1403_11_M*/
function FG1403_11_M(obj){
    showStr(obj);
    $('#G1403_11_P').val(getNumToString(getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val()),2));
    FG1403_11_P($('#G1403_11_P'));
    $('#G1403_11_Q').val(getNumToString(getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val())-getStrFloat($('#G1403_11_S').val()),2));
    FG1403_11_Q($('#G1403_11_Q'));
    $('#G1403_11_R').val(getNumToString(getRate((getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val())-getStrFloat($('#G1403_11_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_11_R($('#G1403_11_R'));
    $('#G1403_18_M').val(getNumToString(getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_17_M').val()),2));
    FG1403_18_M($('#G1403_18_M'));
}

/*G1403_11_N*/
function FG1403_11_N(obj){
    showStr(obj);
    $('#G1403_18_N').val(getNumToString(getStrFloat($('#G1403_8_N').val())+getStrFloat($('#G1403_9_N').val())+getStrFloat($('#G1403_10_N').val())+getStrFloat($('#G1403_11_N').val())+getStrFloat($('#G1403_12_N').val())+getStrFloat($('#G1403_13_N').val())+getStrFloat($('#G1403_14_N').val())+getStrFloat($('#G1403_15_N').val())+getStrFloat($('#G1403_16_N').val())+getStrFloat($('#G1403_17_N').val()),2));
    FG1403_18_N($('#G1403_18_N'));
}

/*G1403_11_O*/
function FG1403_11_O(obj){
    showStr(obj);
    $('#G1403_11_P').val(getNumToString(getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val()),2));
    FG1403_11_P($('#G1403_11_P'));
    $('#G1403_11_Q').val(getNumToString(getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val())-getStrFloat($('#G1403_11_S').val()),2));
    FG1403_11_Q($('#G1403_11_Q'));
    $('#G1403_11_R').val(getNumToString(getRate((getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val())-getStrFloat($('#G1403_11_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_11_R($('#G1403_11_R'));
    $('#G1403_18_O').val(getNumToString(getStrFloat($('#G1403_8_O').val())+getStrFloat($('#G1403_9_O').val())+getStrFloat($('#G1403_10_O').val())+getStrFloat($('#G1403_11_O').val())+getStrFloat($('#G1403_12_O').val())+getStrFloat($('#G1403_13_O').val())+getStrFloat($('#G1403_14_O').val())+getStrFloat($('#G1403_15_O').val())+getStrFloat($('#G1403_16_O').val())+getStrFloat($('#G1403_17_O').val()),2));
    FG1403_18_O($('#G1403_18_O'));
}

/*G1403_11_P*/
function FG1403_11_P(obj){
    showStr(obj);
    $('#G1403_11_P').val(getNumToString(getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val()),2));
    $('#G1403_18_P').val(getNumToString(getStrFloat($('#G1403_8_P').val())+getStrFloat($('#G1403_9_P').val())+getStrFloat($('#G1403_10_P').val())+getStrFloat($('#G1403_11_P').val())+getStrFloat($('#G1403_12_P').val())+getStrFloat($('#G1403_13_P').val())+getStrFloat($('#G1403_14_P').val())+getStrFloat($('#G1403_15_P').val())+getStrFloat($('#G1403_16_P').val())+getStrFloat($('#G1403_17_P').val()),2));
    FG1403_18_P($('#G1403_18_P'));
}

/*G1403_11_Q*/
function FG1403_11_Q(obj){
    showStr(obj);
    $('#G1403_11_Q').val(getNumToString(getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val())-getStrFloat($('#G1403_11_S').val()),2));
    $('#G1403_18_Q').val(getNumToString(getStrFloat($('#G1403_8_Q').val())+getStrFloat($('#G1403_9_Q').val())+getStrFloat($('#G1403_10_Q').val())+getStrFloat($('#G1403_11_Q').val())+getStrFloat($('#G1403_12_Q').val())+getStrFloat($('#G1403_13_Q').val())+getStrFloat($('#G1403_14_Q').val())+getStrFloat($('#G1403_15_Q').val())+getStrFloat($('#G1403_16_Q').val())+getStrFloat($('#G1403_17_Q').val()),2));
    FG1403_18_Q($('#G1403_18_Q'));
}

/*G1403_11_R*/
function FG1403_11_R(obj){
    showStr(obj);
    $('#G1403_11_R').val(getNumToString(getRate((getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val())-getStrFloat($('#G1403_11_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_11_S*/
function FG1403_11_S(obj){
    showStr(obj);
    $('#G1403_11_Q').val(getNumToString(getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val())-getStrFloat($('#G1403_11_S').val()),2));
    FG1403_11_Q($('#G1403_11_Q'));
    $('#G1403_11_R').val(getNumToString(getRate((getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val())-getStrFloat($('#G1403_11_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_11_R($('#G1403_11_R'));
    $('#G1403_18_S').val(getNumToString(getStrFloat($('#G1403_8_S').val())+getStrFloat($('#G1403_9_S').val())+getStrFloat($('#G1403_10_S').val())+getStrFloat($('#G1403_11_S').val())+getStrFloat($('#G1403_12_S').val())+getStrFloat($('#G1403_13_S').val())+getStrFloat($('#G1403_14_S').val())+getStrFloat($('#G1403_15_S').val())+getStrFloat($('#G1403_16_S').val())+getStrFloat($('#G1403_17_S').val()),2));
    FG1403_18_S($('#G1403_18_S'));
}

/*G1403_12_A*/
function FG1403_12_A(obj){
    showStr(obj);
}

/*G1403_12_B*/
function FG1403_12_B(obj){
    showStr(obj);
}

/*G1403_12_C*/
function FG1403_12_C(obj){
    showStr(obj);
}

/*G1403_12_D*/
function FG1403_12_D(obj){
    showStr(obj);
    $('#G1403_12_D').val(getNumToString(getStrFloat($('#G1403_12_F').val())+getStrFloat($('#G1403_12_G').val())+getStrFloat($('#G1403_12_H').val())+getStrFloat($('#G1403_12_I').val())+getStrFloat($('#G1403_12_J').val()),2));
    $('#G1403_12_E').val(getNumToString(getRate(getStrFloat($('#G1403_12_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_12_E($('#G1403_12_E'));
    $('#G1403_12_P').val(getNumToString(getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val()),2));
    FG1403_12_P($('#G1403_12_P'));
    $('#G1403_12_Q').val(getNumToString(getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val())-getStrFloat($('#G1403_12_S').val()),2));
    FG1403_12_Q($('#G1403_12_Q'));
    $('#G1403_12_R').val(getNumToString(getRate((getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val())-getStrFloat($('#G1403_12_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_12_R($('#G1403_12_R'));
    $('#G1403_18_D').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_17_D').val()),2));
    FG1403_18_D($('#G1403_18_D'));
}

/*G1403_12_E*/
function FG1403_12_E(obj){
    showStr(obj);
    $('#G1403_12_E').val(getNumToString(getRate(getStrFloat($('#G1403_12_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_12_F*/
function FG1403_12_F(obj){
    showStr(obj);
    $('#G1403_12_D').val(getNumToString(getStrFloat($('#G1403_12_F').val())+getStrFloat($('#G1403_12_G').val())+getStrFloat($('#G1403_12_H').val())+getStrFloat($('#G1403_12_I').val())+getStrFloat($('#G1403_12_J').val()),2));
    FG1403_12_D($('#G1403_12_D'));
    $('#G1403_18_F').val(getNumToString(getStrFloat($('#G1403_8_F').val())+getStrFloat($('#G1403_9_F').val())+getStrFloat($('#G1403_10_F').val())+getStrFloat($('#G1403_11_F').val())+getStrFloat($('#G1403_12_F').val())+getStrFloat($('#G1403_13_F').val())+getStrFloat($('#G1403_14_F').val())+getStrFloat($('#G1403_15_F').val())+getStrFloat($('#G1403_16_F').val())+getStrFloat($('#G1403_17_F').val()),2));
    FG1403_18_F($('#G1403_18_F'));
}

/*G1403_12_G*/
function FG1403_12_G(obj){
    showStr(obj);
    $('#G1403_12_D').val(getNumToString(getStrFloat($('#G1403_12_F').val())+getStrFloat($('#G1403_12_G').val())+getStrFloat($('#G1403_12_H').val())+getStrFloat($('#G1403_12_I').val())+getStrFloat($('#G1403_12_J').val()),2));
    FG1403_12_D($('#G1403_12_D'));
    $('#G1403_18_G').val(getNumToString(getStrFloat($('#G1403_8_G').val())+getStrFloat($('#G1403_9_G').val())+getStrFloat($('#G1403_10_G').val())+getStrFloat($('#G1403_11_G').val())+getStrFloat($('#G1403_12_G').val())+getStrFloat($('#G1403_13_G').val())+getStrFloat($('#G1403_14_G').val())+getStrFloat($('#G1403_15_G').val())+getStrFloat($('#G1403_16_G').val())+getStrFloat($('#G1403_17_G').val()),2));
    FG1403_18_G($('#G1403_18_G'));
}

/*G1403_12_H*/
function FG1403_12_H(obj){
    showStr(obj);
    $('#G1403_12_D').val(getNumToString(getStrFloat($('#G1403_12_F').val())+getStrFloat($('#G1403_12_G').val())+getStrFloat($('#G1403_12_H').val())+getStrFloat($('#G1403_12_I').val())+getStrFloat($('#G1403_12_J').val()),2));
    FG1403_12_D($('#G1403_12_D'));
    $('#G1403_18_H').val(getNumToString(getStrFloat($('#G1403_8_H').val())+getStrFloat($('#G1403_9_H').val())+getStrFloat($('#G1403_10_H').val())+getStrFloat($('#G1403_11_H').val())+getStrFloat($('#G1403_12_H').val())+getStrFloat($('#G1403_13_H').val())+getStrFloat($('#G1403_14_H').val())+getStrFloat($('#G1403_15_H').val())+getStrFloat($('#G1403_16_H').val())+getStrFloat($('#G1403_17_H').val()),2));
    FG1403_18_H($('#G1403_18_H'));
}

/*G1403_12_I*/
function FG1403_12_I(obj){
    showStr(obj);
    $('#G1403_12_D').val(getNumToString(getStrFloat($('#G1403_12_F').val())+getStrFloat($('#G1403_12_G').val())+getStrFloat($('#G1403_12_H').val())+getStrFloat($('#G1403_12_I').val())+getStrFloat($('#G1403_12_J').val()),2));
    FG1403_12_D($('#G1403_12_D'));
    $('#G1403_18_I').val(getNumToString(getStrFloat($('#G1403_8_I').val())+getStrFloat($('#G1403_9_I').val())+getStrFloat($('#G1403_10_I').val())+getStrFloat($('#G1403_11_I').val())+getStrFloat($('#G1403_12_I').val())+getStrFloat($('#G1403_13_I').val())+getStrFloat($('#G1403_14_I').val())+getStrFloat($('#G1403_15_I').val())+getStrFloat($('#G1403_16_I').val())+getStrFloat($('#G1403_17_I').val()),2));
    FG1403_18_I($('#G1403_18_I'));
}

/*G1403_12_J*/
function FG1403_12_J(obj){
    showStr(obj);
    $('#G1403_12_D').val(getNumToString(getStrFloat($('#G1403_12_F').val())+getStrFloat($('#G1403_12_G').val())+getStrFloat($('#G1403_12_H').val())+getStrFloat($('#G1403_12_I').val())+getStrFloat($('#G1403_12_J').val()),2));
    FG1403_12_D($('#G1403_12_D'));
    $('#G1403_18_J').val(getNumToString(getStrFloat($('#G1403_8_J').val())+getStrFloat($('#G1403_9_J').val())+getStrFloat($('#G1403_10_J').val())+getStrFloat($('#G1403_11_J').val())+getStrFloat($('#G1403_12_J').val())+getStrFloat($('#G1403_13_J').val())+getStrFloat($('#G1403_14_J').val())+getStrFloat($('#G1403_15_J').val())+getStrFloat($('#G1403_16_J').val())+getStrFloat($('#G1403_17_J').val()),2));
    FG1403_18_J($('#G1403_18_J'));
}

/*G1403_12_K*/
function FG1403_12_K(obj){
    showStr(obj);
    $('#G1403_12_P').val(getNumToString(getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val()),2));
    FG1403_12_P($('#G1403_12_P'));
    $('#G1403_12_Q').val(getNumToString(getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val())-getStrFloat($('#G1403_12_S').val()),2));
    FG1403_12_Q($('#G1403_12_Q'));
    $('#G1403_12_R').val(getNumToString(getRate((getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val())-getStrFloat($('#G1403_12_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_12_R($('#G1403_12_R'));
    $('#G1403_18_K').val(getNumToString(getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_17_K').val()),2));
    FG1403_18_K($('#G1403_18_K'));
}

/*G1403_12_L*/
function FG1403_12_L(obj){
    showStr(obj);
    $('#G1403_18_L').val(getNumToString(getStrFloat($('#G1403_8_L').val())+getStrFloat($('#G1403_9_L').val())+getStrFloat($('#G1403_10_L').val())+getStrFloat($('#G1403_11_L').val())+getStrFloat($('#G1403_12_L').val())+getStrFloat($('#G1403_13_L').val())+getStrFloat($('#G1403_14_L').val())+getStrFloat($('#G1403_15_L').val())+getStrFloat($('#G1403_16_L').val())+getStrFloat($('#G1403_17_L').val()),2));
    FG1403_18_L($('#G1403_18_L'));
}

/*G1403_12_M*/
function FG1403_12_M(obj){
    showStr(obj);
    $('#G1403_12_P').val(getNumToString(getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val()),2));
    FG1403_12_P($('#G1403_12_P'));
    $('#G1403_12_Q').val(getNumToString(getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val())-getStrFloat($('#G1403_12_S').val()),2));
    FG1403_12_Q($('#G1403_12_Q'));
    $('#G1403_12_R').val(getNumToString(getRate((getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val())-getStrFloat($('#G1403_12_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_12_R($('#G1403_12_R'));
    $('#G1403_18_M').val(getNumToString(getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_17_M').val()),2));
    FG1403_18_M($('#G1403_18_M'));
}

/*G1403_12_N*/
function FG1403_12_N(obj){
    showStr(obj);
    $('#G1403_18_N').val(getNumToString(getStrFloat($('#G1403_8_N').val())+getStrFloat($('#G1403_9_N').val())+getStrFloat($('#G1403_10_N').val())+getStrFloat($('#G1403_11_N').val())+getStrFloat($('#G1403_12_N').val())+getStrFloat($('#G1403_13_N').val())+getStrFloat($('#G1403_14_N').val())+getStrFloat($('#G1403_15_N').val())+getStrFloat($('#G1403_16_N').val())+getStrFloat($('#G1403_17_N').val()),2));
    FG1403_18_N($('#G1403_18_N'));
}

/*G1403_12_O*/
function FG1403_12_O(obj){
    showStr(obj);
    $('#G1403_12_P').val(getNumToString(getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val()),2));
    FG1403_12_P($('#G1403_12_P'));
    $('#G1403_12_Q').val(getNumToString(getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val())-getStrFloat($('#G1403_12_S').val()),2));
    FG1403_12_Q($('#G1403_12_Q'));
    $('#G1403_12_R').val(getNumToString(getRate((getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val())-getStrFloat($('#G1403_12_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_12_R($('#G1403_12_R'));
    $('#G1403_18_O').val(getNumToString(getStrFloat($('#G1403_8_O').val())+getStrFloat($('#G1403_9_O').val())+getStrFloat($('#G1403_10_O').val())+getStrFloat($('#G1403_11_O').val())+getStrFloat($('#G1403_12_O').val())+getStrFloat($('#G1403_13_O').val())+getStrFloat($('#G1403_14_O').val())+getStrFloat($('#G1403_15_O').val())+getStrFloat($('#G1403_16_O').val())+getStrFloat($('#G1403_17_O').val()),2));
    FG1403_18_O($('#G1403_18_O'));
}

/*G1403_12_P*/
function FG1403_12_P(obj){
    showStr(obj);
    $('#G1403_12_P').val(getNumToString(getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val()),2));
    $('#G1403_18_P').val(getNumToString(getStrFloat($('#G1403_8_P').val())+getStrFloat($('#G1403_9_P').val())+getStrFloat($('#G1403_10_P').val())+getStrFloat($('#G1403_11_P').val())+getStrFloat($('#G1403_12_P').val())+getStrFloat($('#G1403_13_P').val())+getStrFloat($('#G1403_14_P').val())+getStrFloat($('#G1403_15_P').val())+getStrFloat($('#G1403_16_P').val())+getStrFloat($('#G1403_17_P').val()),2));
    FG1403_18_P($('#G1403_18_P'));
}

/*G1403_12_Q*/
function FG1403_12_Q(obj){
    showStr(obj);
    $('#G1403_12_Q').val(getNumToString(getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val())-getStrFloat($('#G1403_12_S').val()),2));
    $('#G1403_18_Q').val(getNumToString(getStrFloat($('#G1403_8_Q').val())+getStrFloat($('#G1403_9_Q').val())+getStrFloat($('#G1403_10_Q').val())+getStrFloat($('#G1403_11_Q').val())+getStrFloat($('#G1403_12_Q').val())+getStrFloat($('#G1403_13_Q').val())+getStrFloat($('#G1403_14_Q').val())+getStrFloat($('#G1403_15_Q').val())+getStrFloat($('#G1403_16_Q').val())+getStrFloat($('#G1403_17_Q').val()),2));
    FG1403_18_Q($('#G1403_18_Q'));
}

/*G1403_12_R*/
function FG1403_12_R(obj){
    showStr(obj);
    $('#G1403_12_R').val(getNumToString(getRate((getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val())-getStrFloat($('#G1403_12_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_12_S*/
function FG1403_12_S(obj){
    showStr(obj);
    $('#G1403_12_Q').val(getNumToString(getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val())-getStrFloat($('#G1403_12_S').val()),2));
    FG1403_12_Q($('#G1403_12_Q'));
    $('#G1403_12_R').val(getNumToString(getRate((getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val())-getStrFloat($('#G1403_12_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_12_R($('#G1403_12_R'));
    $('#G1403_18_S').val(getNumToString(getStrFloat($('#G1403_8_S').val())+getStrFloat($('#G1403_9_S').val())+getStrFloat($('#G1403_10_S').val())+getStrFloat($('#G1403_11_S').val())+getStrFloat($('#G1403_12_S').val())+getStrFloat($('#G1403_13_S').val())+getStrFloat($('#G1403_14_S').val())+getStrFloat($('#G1403_15_S').val())+getStrFloat($('#G1403_16_S').val())+getStrFloat($('#G1403_17_S').val()),2));
    FG1403_18_S($('#G1403_18_S'));
}

/*G1403_13_A*/
function FG1403_13_A(obj){
    showStr(obj);
}

/*G1403_13_B*/
function FG1403_13_B(obj){
    showStr(obj);
}

/*G1403_13_C*/
function FG1403_13_C(obj){
    showStr(obj);
}

/*G1403_13_D*/
function FG1403_13_D(obj){
    showStr(obj);
    $('#G1403_13_D').val(getNumToString(getStrFloat($('#G1403_13_F').val())+getStrFloat($('#G1403_13_G').val())+getStrFloat($('#G1403_13_H').val())+getStrFloat($('#G1403_13_I').val())+getStrFloat($('#G1403_13_J').val()),2));
    $('#G1403_13_E').val(getNumToString(getRate(getStrFloat($('#G1403_13_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_13_E($('#G1403_13_E'));
    $('#G1403_13_P').val(getNumToString(getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val()),2));
    FG1403_13_P($('#G1403_13_P'));
    $('#G1403_13_Q').val(getNumToString(getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val())-getStrFloat($('#G1403_13_S').val()),2));
    FG1403_13_Q($('#G1403_13_Q'));
    $('#G1403_13_R').val(getNumToString(getRate((getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val())-getStrFloat($('#G1403_13_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_13_R($('#G1403_13_R'));
    $('#G1403_18_D').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_17_D').val()),2));
    FG1403_18_D($('#G1403_18_D'));
}

/*G1403_13_E*/
function FG1403_13_E(obj){
    showStr(obj);
    $('#G1403_13_E').val(getNumToString(getRate(getStrFloat($('#G1403_13_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_13_F*/
function FG1403_13_F(obj){
    showStr(obj);
    $('#G1403_13_D').val(getNumToString(getStrFloat($('#G1403_13_F').val())+getStrFloat($('#G1403_13_G').val())+getStrFloat($('#G1403_13_H').val())+getStrFloat($('#G1403_13_I').val())+getStrFloat($('#G1403_13_J').val()),2));
    FG1403_13_D($('#G1403_13_D'));
    $('#G1403_18_F').val(getNumToString(getStrFloat($('#G1403_8_F').val())+getStrFloat($('#G1403_9_F').val())+getStrFloat($('#G1403_10_F').val())+getStrFloat($('#G1403_11_F').val())+getStrFloat($('#G1403_12_F').val())+getStrFloat($('#G1403_13_F').val())+getStrFloat($('#G1403_14_F').val())+getStrFloat($('#G1403_15_F').val())+getStrFloat($('#G1403_16_F').val())+getStrFloat($('#G1403_17_F').val()),2));
    FG1403_18_F($('#G1403_18_F'));
}

/*G1403_13_G*/
function FG1403_13_G(obj){
    showStr(obj);
    $('#G1403_13_D').val(getNumToString(getStrFloat($('#G1403_13_F').val())+getStrFloat($('#G1403_13_G').val())+getStrFloat($('#G1403_13_H').val())+getStrFloat($('#G1403_13_I').val())+getStrFloat($('#G1403_13_J').val()),2));
    FG1403_13_D($('#G1403_13_D'));
    $('#G1403_18_G').val(getNumToString(getStrFloat($('#G1403_8_G').val())+getStrFloat($('#G1403_9_G').val())+getStrFloat($('#G1403_10_G').val())+getStrFloat($('#G1403_11_G').val())+getStrFloat($('#G1403_12_G').val())+getStrFloat($('#G1403_13_G').val())+getStrFloat($('#G1403_14_G').val())+getStrFloat($('#G1403_15_G').val())+getStrFloat($('#G1403_16_G').val())+getStrFloat($('#G1403_17_G').val()),2));
    FG1403_18_G($('#G1403_18_G'));
}

/*G1403_13_H*/
function FG1403_13_H(obj){
    showStr(obj);
    $('#G1403_13_D').val(getNumToString(getStrFloat($('#G1403_13_F').val())+getStrFloat($('#G1403_13_G').val())+getStrFloat($('#G1403_13_H').val())+getStrFloat($('#G1403_13_I').val())+getStrFloat($('#G1403_13_J').val()),2));
    FG1403_13_D($('#G1403_13_D'));
    $('#G1403_18_H').val(getNumToString(getStrFloat($('#G1403_8_H').val())+getStrFloat($('#G1403_9_H').val())+getStrFloat($('#G1403_10_H').val())+getStrFloat($('#G1403_11_H').val())+getStrFloat($('#G1403_12_H').val())+getStrFloat($('#G1403_13_H').val())+getStrFloat($('#G1403_14_H').val())+getStrFloat($('#G1403_15_H').val())+getStrFloat($('#G1403_16_H').val())+getStrFloat($('#G1403_17_H').val()),2));
    FG1403_18_H($('#G1403_18_H'));
}

/*G1403_13_I*/
function FG1403_13_I(obj){
    showStr(obj);
    $('#G1403_13_D').val(getNumToString(getStrFloat($('#G1403_13_F').val())+getStrFloat($('#G1403_13_G').val())+getStrFloat($('#G1403_13_H').val())+getStrFloat($('#G1403_13_I').val())+getStrFloat($('#G1403_13_J').val()),2));
    FG1403_13_D($('#G1403_13_D'));
    $('#G1403_18_I').val(getNumToString(getStrFloat($('#G1403_8_I').val())+getStrFloat($('#G1403_9_I').val())+getStrFloat($('#G1403_10_I').val())+getStrFloat($('#G1403_11_I').val())+getStrFloat($('#G1403_12_I').val())+getStrFloat($('#G1403_13_I').val())+getStrFloat($('#G1403_14_I').val())+getStrFloat($('#G1403_15_I').val())+getStrFloat($('#G1403_16_I').val())+getStrFloat($('#G1403_17_I').val()),2));
    FG1403_18_I($('#G1403_18_I'));
}

/*G1403_13_J*/
function FG1403_13_J(obj){
    showStr(obj);
    $('#G1403_13_D').val(getNumToString(getStrFloat($('#G1403_13_F').val())+getStrFloat($('#G1403_13_G').val())+getStrFloat($('#G1403_13_H').val())+getStrFloat($('#G1403_13_I').val())+getStrFloat($('#G1403_13_J').val()),2));
    FG1403_13_D($('#G1403_13_D'));
    $('#G1403_18_J').val(getNumToString(getStrFloat($('#G1403_8_J').val())+getStrFloat($('#G1403_9_J').val())+getStrFloat($('#G1403_10_J').val())+getStrFloat($('#G1403_11_J').val())+getStrFloat($('#G1403_12_J').val())+getStrFloat($('#G1403_13_J').val())+getStrFloat($('#G1403_14_J').val())+getStrFloat($('#G1403_15_J').val())+getStrFloat($('#G1403_16_J').val())+getStrFloat($('#G1403_17_J').val()),2));
    FG1403_18_J($('#G1403_18_J'));
}

/*G1403_13_K*/
function FG1403_13_K(obj){
    showStr(obj);
    $('#G1403_13_P').val(getNumToString(getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val()),2));
    FG1403_13_P($('#G1403_13_P'));
    $('#G1403_13_Q').val(getNumToString(getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val())-getStrFloat($('#G1403_13_S').val()),2));
    FG1403_13_Q($('#G1403_13_Q'));
    $('#G1403_13_R').val(getNumToString(getRate((getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val())-getStrFloat($('#G1403_13_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_13_R($('#G1403_13_R'));
    $('#G1403_18_K').val(getNumToString(getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_17_K').val()),2));
    FG1403_18_K($('#G1403_18_K'));
}

/*G1403_13_L*/
function FG1403_13_L(obj){
    showStr(obj);
    $('#G1403_18_L').val(getNumToString(getStrFloat($('#G1403_8_L').val())+getStrFloat($('#G1403_9_L').val())+getStrFloat($('#G1403_10_L').val())+getStrFloat($('#G1403_11_L').val())+getStrFloat($('#G1403_12_L').val())+getStrFloat($('#G1403_13_L').val())+getStrFloat($('#G1403_14_L').val())+getStrFloat($('#G1403_15_L').val())+getStrFloat($('#G1403_16_L').val())+getStrFloat($('#G1403_17_L').val()),2));
    FG1403_18_L($('#G1403_18_L'));
}

/*G1403_13_M*/
function FG1403_13_M(obj){
    showStr(obj);
    $('#G1403_13_P').val(getNumToString(getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val()),2));
    FG1403_13_P($('#G1403_13_P'));
    $('#G1403_13_Q').val(getNumToString(getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val())-getStrFloat($('#G1403_13_S').val()),2));
    FG1403_13_Q($('#G1403_13_Q'));
    $('#G1403_13_R').val(getNumToString(getRate((getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val())-getStrFloat($('#G1403_13_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_13_R($('#G1403_13_R'));
    $('#G1403_18_M').val(getNumToString(getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_17_M').val()),2));
    FG1403_18_M($('#G1403_18_M'));
}

/*G1403_13_N*/
function FG1403_13_N(obj){
    showStr(obj);
    $('#G1403_18_N').val(getNumToString(getStrFloat($('#G1403_8_N').val())+getStrFloat($('#G1403_9_N').val())+getStrFloat($('#G1403_10_N').val())+getStrFloat($('#G1403_11_N').val())+getStrFloat($('#G1403_12_N').val())+getStrFloat($('#G1403_13_N').val())+getStrFloat($('#G1403_14_N').val())+getStrFloat($('#G1403_15_N').val())+getStrFloat($('#G1403_16_N').val())+getStrFloat($('#G1403_17_N').val()),2));
    FG1403_18_N($('#G1403_18_N'));
}

/*G1403_13_O*/
function FG1403_13_O(obj){
    showStr(obj);
    $('#G1403_13_P').val(getNumToString(getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val()),2));
    FG1403_13_P($('#G1403_13_P'));
    $('#G1403_13_Q').val(getNumToString(getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val())-getStrFloat($('#G1403_13_S').val()),2));
    FG1403_13_Q($('#G1403_13_Q'));
    $('#G1403_13_R').val(getNumToString(getRate((getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val())-getStrFloat($('#G1403_13_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_13_R($('#G1403_13_R'));
    $('#G1403_18_O').val(getNumToString(getStrFloat($('#G1403_8_O').val())+getStrFloat($('#G1403_9_O').val())+getStrFloat($('#G1403_10_O').val())+getStrFloat($('#G1403_11_O').val())+getStrFloat($('#G1403_12_O').val())+getStrFloat($('#G1403_13_O').val())+getStrFloat($('#G1403_14_O').val())+getStrFloat($('#G1403_15_O').val())+getStrFloat($('#G1403_16_O').val())+getStrFloat($('#G1403_17_O').val()),2));
    FG1403_18_O($('#G1403_18_O'));
}

/*G1403_13_P*/
function FG1403_13_P(obj){
    showStr(obj);
    $('#G1403_13_P').val(getNumToString(getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val()),2));
    $('#G1403_18_P').val(getNumToString(getStrFloat($('#G1403_8_P').val())+getStrFloat($('#G1403_9_P').val())+getStrFloat($('#G1403_10_P').val())+getStrFloat($('#G1403_11_P').val())+getStrFloat($('#G1403_12_P').val())+getStrFloat($('#G1403_13_P').val())+getStrFloat($('#G1403_14_P').val())+getStrFloat($('#G1403_15_P').val())+getStrFloat($('#G1403_16_P').val())+getStrFloat($('#G1403_17_P').val()),2));
    FG1403_18_P($('#G1403_18_P'));
}

/*G1403_13_Q*/
function FG1403_13_Q(obj){
    showStr(obj);
    $('#G1403_13_Q').val(getNumToString(getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val())-getStrFloat($('#G1403_13_S').val()),2));
    $('#G1403_18_Q').val(getNumToString(getStrFloat($('#G1403_8_Q').val())+getStrFloat($('#G1403_9_Q').val())+getStrFloat($('#G1403_10_Q').val())+getStrFloat($('#G1403_11_Q').val())+getStrFloat($('#G1403_12_Q').val())+getStrFloat($('#G1403_13_Q').val())+getStrFloat($('#G1403_14_Q').val())+getStrFloat($('#G1403_15_Q').val())+getStrFloat($('#G1403_16_Q').val())+getStrFloat($('#G1403_17_Q').val()),2));
    FG1403_18_Q($('#G1403_18_Q'));
}

/*G1403_13_R*/
function FG1403_13_R(obj){
    showStr(obj);
    $('#G1403_13_R').val(getNumToString(getRate((getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val())-getStrFloat($('#G1403_13_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_13_S*/
function FG1403_13_S(obj){
    showStr(obj);
    $('#G1403_13_Q').val(getNumToString(getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val())-getStrFloat($('#G1403_13_S').val()),2));
    FG1403_13_Q($('#G1403_13_Q'));
    $('#G1403_13_R').val(getNumToString(getRate((getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val())-getStrFloat($('#G1403_13_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_13_R($('#G1403_13_R'));
    $('#G1403_18_S').val(getNumToString(getStrFloat($('#G1403_8_S').val())+getStrFloat($('#G1403_9_S').val())+getStrFloat($('#G1403_10_S').val())+getStrFloat($('#G1403_11_S').val())+getStrFloat($('#G1403_12_S').val())+getStrFloat($('#G1403_13_S').val())+getStrFloat($('#G1403_14_S').val())+getStrFloat($('#G1403_15_S').val())+getStrFloat($('#G1403_16_S').val())+getStrFloat($('#G1403_17_S').val()),2));
    FG1403_18_S($('#G1403_18_S'));
}

/*G1403_14_A*/
function FG1403_14_A(obj){
    showStr(obj);
}

/*G1403_14_B*/
function FG1403_14_B(obj){
    showStr(obj);
}

/*G1403_14_C*/
function FG1403_14_C(obj){
    showStr(obj);
}

/*G1403_14_D*/
function FG1403_14_D(obj){
    showStr(obj);
    $('#G1403_14_D').val(getNumToString(getStrFloat($('#G1403_14_F').val())+getStrFloat($('#G1403_14_G').val())+getStrFloat($('#G1403_14_H').val())+getStrFloat($('#G1403_14_I').val())+getStrFloat($('#G1403_14_J').val()),2));
    $('#G1403_14_E').val(getNumToString(getRate(getStrFloat($('#G1403_14_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_14_E($('#G1403_14_E'));
    $('#G1403_14_P').val(getNumToString(getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val()),2));
    FG1403_14_P($('#G1403_14_P'));
    $('#G1403_14_Q').val(getNumToString(getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val())-getStrFloat($('#G1403_14_S').val()),2));
    FG1403_14_Q($('#G1403_14_Q'));
    $('#G1403_14_R').val(getNumToString(getRate((getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val())-getStrFloat($('#G1403_14_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_14_R($('#G1403_14_R'));
    $('#G1403_18_D').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_17_D').val()),2));
    FG1403_18_D($('#G1403_18_D'));
}

/*G1403_14_E*/
function FG1403_14_E(obj){
    showStr(obj);
    $('#G1403_14_E').val(getNumToString(getRate(getStrFloat($('#G1403_14_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_14_F*/
function FG1403_14_F(obj){
    showStr(obj);
    $('#G1403_14_D').val(getNumToString(getStrFloat($('#G1403_14_F').val())+getStrFloat($('#G1403_14_G').val())+getStrFloat($('#G1403_14_H').val())+getStrFloat($('#G1403_14_I').val())+getStrFloat($('#G1403_14_J').val()),2));
    FG1403_14_D($('#G1403_14_D'));
    $('#G1403_18_F').val(getNumToString(getStrFloat($('#G1403_8_F').val())+getStrFloat($('#G1403_9_F').val())+getStrFloat($('#G1403_10_F').val())+getStrFloat($('#G1403_11_F').val())+getStrFloat($('#G1403_12_F').val())+getStrFloat($('#G1403_13_F').val())+getStrFloat($('#G1403_14_F').val())+getStrFloat($('#G1403_15_F').val())+getStrFloat($('#G1403_16_F').val())+getStrFloat($('#G1403_17_F').val()),2));
    FG1403_18_F($('#G1403_18_F'));
}

/*G1403_14_G*/
function FG1403_14_G(obj){
    showStr(obj);
    $('#G1403_14_D').val(getNumToString(getStrFloat($('#G1403_14_F').val())+getStrFloat($('#G1403_14_G').val())+getStrFloat($('#G1403_14_H').val())+getStrFloat($('#G1403_14_I').val())+getStrFloat($('#G1403_14_J').val()),2));
    FG1403_14_D($('#G1403_14_D'));
    $('#G1403_18_G').val(getNumToString(getStrFloat($('#G1403_8_G').val())+getStrFloat($('#G1403_9_G').val())+getStrFloat($('#G1403_10_G').val())+getStrFloat($('#G1403_11_G').val())+getStrFloat($('#G1403_12_G').val())+getStrFloat($('#G1403_13_G').val())+getStrFloat($('#G1403_14_G').val())+getStrFloat($('#G1403_15_G').val())+getStrFloat($('#G1403_16_G').val())+getStrFloat($('#G1403_17_G').val()),2));
    FG1403_18_G($('#G1403_18_G'));
}

/*G1403_14_H*/
function FG1403_14_H(obj){
    showStr(obj);
    $('#G1403_14_D').val(getNumToString(getStrFloat($('#G1403_14_F').val())+getStrFloat($('#G1403_14_G').val())+getStrFloat($('#G1403_14_H').val())+getStrFloat($('#G1403_14_I').val())+getStrFloat($('#G1403_14_J').val()),2));
    FG1403_14_D($('#G1403_14_D'));
    $('#G1403_18_H').val(getNumToString(getStrFloat($('#G1403_8_H').val())+getStrFloat($('#G1403_9_H').val())+getStrFloat($('#G1403_10_H').val())+getStrFloat($('#G1403_11_H').val())+getStrFloat($('#G1403_12_H').val())+getStrFloat($('#G1403_13_H').val())+getStrFloat($('#G1403_14_H').val())+getStrFloat($('#G1403_15_H').val())+getStrFloat($('#G1403_16_H').val())+getStrFloat($('#G1403_17_H').val()),2));
    FG1403_18_H($('#G1403_18_H'));
}

/*G1403_14_I*/
function FG1403_14_I(obj){
    showStr(obj);
    $('#G1403_14_D').val(getNumToString(getStrFloat($('#G1403_14_F').val())+getStrFloat($('#G1403_14_G').val())+getStrFloat($('#G1403_14_H').val())+getStrFloat($('#G1403_14_I').val())+getStrFloat($('#G1403_14_J').val()),2));
    FG1403_14_D($('#G1403_14_D'));
    $('#G1403_18_I').val(getNumToString(getStrFloat($('#G1403_8_I').val())+getStrFloat($('#G1403_9_I').val())+getStrFloat($('#G1403_10_I').val())+getStrFloat($('#G1403_11_I').val())+getStrFloat($('#G1403_12_I').val())+getStrFloat($('#G1403_13_I').val())+getStrFloat($('#G1403_14_I').val())+getStrFloat($('#G1403_15_I').val())+getStrFloat($('#G1403_16_I').val())+getStrFloat($('#G1403_17_I').val()),2));
    FG1403_18_I($('#G1403_18_I'));
}

/*G1403_14_J*/
function FG1403_14_J(obj){
    showStr(obj);
    $('#G1403_14_D').val(getNumToString(getStrFloat($('#G1403_14_F').val())+getStrFloat($('#G1403_14_G').val())+getStrFloat($('#G1403_14_H').val())+getStrFloat($('#G1403_14_I').val())+getStrFloat($('#G1403_14_J').val()),2));
    FG1403_14_D($('#G1403_14_D'));
    $('#G1403_18_J').val(getNumToString(getStrFloat($('#G1403_8_J').val())+getStrFloat($('#G1403_9_J').val())+getStrFloat($('#G1403_10_J').val())+getStrFloat($('#G1403_11_J').val())+getStrFloat($('#G1403_12_J').val())+getStrFloat($('#G1403_13_J').val())+getStrFloat($('#G1403_14_J').val())+getStrFloat($('#G1403_15_J').val())+getStrFloat($('#G1403_16_J').val())+getStrFloat($('#G1403_17_J').val()),2));
    FG1403_18_J($('#G1403_18_J'));
}

/*G1403_14_K*/
function FG1403_14_K(obj){
    showStr(obj);
    $('#G1403_14_P').val(getNumToString(getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val()),2));
    FG1403_14_P($('#G1403_14_P'));
    $('#G1403_14_Q').val(getNumToString(getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val())-getStrFloat($('#G1403_14_S').val()),2));
    FG1403_14_Q($('#G1403_14_Q'));
    $('#G1403_14_R').val(getNumToString(getRate((getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val())-getStrFloat($('#G1403_14_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_14_R($('#G1403_14_R'));
    $('#G1403_18_K').val(getNumToString(getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_17_K').val()),2));
    FG1403_18_K($('#G1403_18_K'));
}

/*G1403_14_L*/
function FG1403_14_L(obj){
    showStr(obj);
    $('#G1403_18_L').val(getNumToString(getStrFloat($('#G1403_8_L').val())+getStrFloat($('#G1403_9_L').val())+getStrFloat($('#G1403_10_L').val())+getStrFloat($('#G1403_11_L').val())+getStrFloat($('#G1403_12_L').val())+getStrFloat($('#G1403_13_L').val())+getStrFloat($('#G1403_14_L').val())+getStrFloat($('#G1403_15_L').val())+getStrFloat($('#G1403_16_L').val())+getStrFloat($('#G1403_17_L').val()),2));
    FG1403_18_L($('#G1403_18_L'));
}

/*G1403_14_M*/
function FG1403_14_M(obj){
    showStr(obj);
    $('#G1403_14_P').val(getNumToString(getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val()),2));
    FG1403_14_P($('#G1403_14_P'));
    $('#G1403_14_Q').val(getNumToString(getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val())-getStrFloat($('#G1403_14_S').val()),2));
    FG1403_14_Q($('#G1403_14_Q'));
    $('#G1403_14_R').val(getNumToString(getRate((getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val())-getStrFloat($('#G1403_14_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_14_R($('#G1403_14_R'));
    $('#G1403_18_M').val(getNumToString(getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_17_M').val()),2));
    FG1403_18_M($('#G1403_18_M'));
}

/*G1403_14_N*/
function FG1403_14_N(obj){
    showStr(obj);
    $('#G1403_18_N').val(getNumToString(getStrFloat($('#G1403_8_N').val())+getStrFloat($('#G1403_9_N').val())+getStrFloat($('#G1403_10_N').val())+getStrFloat($('#G1403_11_N').val())+getStrFloat($('#G1403_12_N').val())+getStrFloat($('#G1403_13_N').val())+getStrFloat($('#G1403_14_N').val())+getStrFloat($('#G1403_15_N').val())+getStrFloat($('#G1403_16_N').val())+getStrFloat($('#G1403_17_N').val()),2));
    FG1403_18_N($('#G1403_18_N'));
}

/*G1403_14_O*/
function FG1403_14_O(obj){
    showStr(obj);
    $('#G1403_14_P').val(getNumToString(getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val()),2));
    FG1403_14_P($('#G1403_14_P'));
    $('#G1403_14_Q').val(getNumToString(getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val())-getStrFloat($('#G1403_14_S').val()),2));
    FG1403_14_Q($('#G1403_14_Q'));
    $('#G1403_14_R').val(getNumToString(getRate((getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val())-getStrFloat($('#G1403_14_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_14_R($('#G1403_14_R'));
    $('#G1403_18_O').val(getNumToString(getStrFloat($('#G1403_8_O').val())+getStrFloat($('#G1403_9_O').val())+getStrFloat($('#G1403_10_O').val())+getStrFloat($('#G1403_11_O').val())+getStrFloat($('#G1403_12_O').val())+getStrFloat($('#G1403_13_O').val())+getStrFloat($('#G1403_14_O').val())+getStrFloat($('#G1403_15_O').val())+getStrFloat($('#G1403_16_O').val())+getStrFloat($('#G1403_17_O').val()),2));
    FG1403_18_O($('#G1403_18_O'));
}

/*G1403_14_P*/
function FG1403_14_P(obj){
    showStr(obj);
    $('#G1403_14_P').val(getNumToString(getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val()),2));
    $('#G1403_18_P').val(getNumToString(getStrFloat($('#G1403_8_P').val())+getStrFloat($('#G1403_9_P').val())+getStrFloat($('#G1403_10_P').val())+getStrFloat($('#G1403_11_P').val())+getStrFloat($('#G1403_12_P').val())+getStrFloat($('#G1403_13_P').val())+getStrFloat($('#G1403_14_P').val())+getStrFloat($('#G1403_15_P').val())+getStrFloat($('#G1403_16_P').val())+getStrFloat($('#G1403_17_P').val()),2));
    FG1403_18_P($('#G1403_18_P'));
}

/*G1403_14_Q*/
function FG1403_14_Q(obj){
    showStr(obj);
    $('#G1403_14_Q').val(getNumToString(getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val())-getStrFloat($('#G1403_14_S').val()),2));
    $('#G1403_18_Q').val(getNumToString(getStrFloat($('#G1403_8_Q').val())+getStrFloat($('#G1403_9_Q').val())+getStrFloat($('#G1403_10_Q').val())+getStrFloat($('#G1403_11_Q').val())+getStrFloat($('#G1403_12_Q').val())+getStrFloat($('#G1403_13_Q').val())+getStrFloat($('#G1403_14_Q').val())+getStrFloat($('#G1403_15_Q').val())+getStrFloat($('#G1403_16_Q').val())+getStrFloat($('#G1403_17_Q').val()),2));
    FG1403_18_Q($('#G1403_18_Q'));
}

/*G1403_14_R*/
function FG1403_14_R(obj){
    showStr(obj);
    $('#G1403_14_R').val(getNumToString(getRate((getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val())-getStrFloat($('#G1403_14_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_14_S*/
function FG1403_14_S(obj){
    showStr(obj);
    $('#G1403_14_Q').val(getNumToString(getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val())-getStrFloat($('#G1403_14_S').val()),2));
    FG1403_14_Q($('#G1403_14_Q'));
    $('#G1403_14_R').val(getNumToString(getRate((getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val())-getStrFloat($('#G1403_14_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_14_R($('#G1403_14_R'));
    $('#G1403_18_S').val(getNumToString(getStrFloat($('#G1403_8_S').val())+getStrFloat($('#G1403_9_S').val())+getStrFloat($('#G1403_10_S').val())+getStrFloat($('#G1403_11_S').val())+getStrFloat($('#G1403_12_S').val())+getStrFloat($('#G1403_13_S').val())+getStrFloat($('#G1403_14_S').val())+getStrFloat($('#G1403_15_S').val())+getStrFloat($('#G1403_16_S').val())+getStrFloat($('#G1403_17_S').val()),2));
    FG1403_18_S($('#G1403_18_S'));
}

/*G1403_15_A*/
function FG1403_15_A(obj){
    showStr(obj);
}

/*G1403_15_B*/
function FG1403_15_B(obj){
    showStr(obj);
}

/*G1403_15_C*/
function FG1403_15_C(obj){
    showStr(obj);
}

/*G1403_15_D*/
function FG1403_15_D(obj){
    showStr(obj);
    $('#G1403_15_D').val(getNumToString(getStrFloat($('#G1403_15_F').val())+getStrFloat($('#G1403_15_G').val())+getStrFloat($('#G1403_15_H').val())+getStrFloat($('#G1403_15_I').val())+getStrFloat($('#G1403_15_J').val()),2));
    $('#G1403_15_E').val(getNumToString(getRate(getStrFloat($('#G1403_15_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_15_E($('#G1403_15_E'));
    $('#G1403_15_P').val(getNumToString(getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val()),2));
    FG1403_15_P($('#G1403_15_P'));
    $('#G1403_15_Q').val(getNumToString(getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val())-getStrFloat($('#G1403_15_S').val()),2));
    FG1403_15_Q($('#G1403_15_Q'));
    $('#G1403_15_R').val(getNumToString(getRate((getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val())-getStrFloat($('#G1403_15_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_15_R($('#G1403_15_R'));
    $('#G1403_18_D').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_17_D').val()),2));
    FG1403_18_D($('#G1403_18_D'));
}

/*G1403_15_E*/
function FG1403_15_E(obj){
    showStr(obj);
    $('#G1403_15_E').val(getNumToString(getRate(getStrFloat($('#G1403_15_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_15_F*/
function FG1403_15_F(obj){
    showStr(obj);
    $('#G1403_15_D').val(getNumToString(getStrFloat($('#G1403_15_F').val())+getStrFloat($('#G1403_15_G').val())+getStrFloat($('#G1403_15_H').val())+getStrFloat($('#G1403_15_I').val())+getStrFloat($('#G1403_15_J').val()),2));
    FG1403_15_D($('#G1403_15_D'));
    $('#G1403_18_F').val(getNumToString(getStrFloat($('#G1403_8_F').val())+getStrFloat($('#G1403_9_F').val())+getStrFloat($('#G1403_10_F').val())+getStrFloat($('#G1403_11_F').val())+getStrFloat($('#G1403_12_F').val())+getStrFloat($('#G1403_13_F').val())+getStrFloat($('#G1403_14_F').val())+getStrFloat($('#G1403_15_F').val())+getStrFloat($('#G1403_16_F').val())+getStrFloat($('#G1403_17_F').val()),2));
    FG1403_18_F($('#G1403_18_F'));
}

/*G1403_15_G*/
function FG1403_15_G(obj){
    showStr(obj);
    $('#G1403_15_D').val(getNumToString(getStrFloat($('#G1403_15_F').val())+getStrFloat($('#G1403_15_G').val())+getStrFloat($('#G1403_15_H').val())+getStrFloat($('#G1403_15_I').val())+getStrFloat($('#G1403_15_J').val()),2));
    FG1403_15_D($('#G1403_15_D'));
    $('#G1403_18_G').val(getNumToString(getStrFloat($('#G1403_8_G').val())+getStrFloat($('#G1403_9_G').val())+getStrFloat($('#G1403_10_G').val())+getStrFloat($('#G1403_11_G').val())+getStrFloat($('#G1403_12_G').val())+getStrFloat($('#G1403_13_G').val())+getStrFloat($('#G1403_14_G').val())+getStrFloat($('#G1403_15_G').val())+getStrFloat($('#G1403_16_G').val())+getStrFloat($('#G1403_17_G').val()),2));
    FG1403_18_G($('#G1403_18_G'));
}

/*G1403_15_H*/
function FG1403_15_H(obj){
    showStr(obj);
    $('#G1403_15_D').val(getNumToString(getStrFloat($('#G1403_15_F').val())+getStrFloat($('#G1403_15_G').val())+getStrFloat($('#G1403_15_H').val())+getStrFloat($('#G1403_15_I').val())+getStrFloat($('#G1403_15_J').val()),2));
    FG1403_15_D($('#G1403_15_D'));
    $('#G1403_18_H').val(getNumToString(getStrFloat($('#G1403_8_H').val())+getStrFloat($('#G1403_9_H').val())+getStrFloat($('#G1403_10_H').val())+getStrFloat($('#G1403_11_H').val())+getStrFloat($('#G1403_12_H').val())+getStrFloat($('#G1403_13_H').val())+getStrFloat($('#G1403_14_H').val())+getStrFloat($('#G1403_15_H').val())+getStrFloat($('#G1403_16_H').val())+getStrFloat($('#G1403_17_H').val()),2));
    FG1403_18_H($('#G1403_18_H'));
}

/*G1403_15_I*/
function FG1403_15_I(obj){
    showStr(obj);
    $('#G1403_15_D').val(getNumToString(getStrFloat($('#G1403_15_F').val())+getStrFloat($('#G1403_15_G').val())+getStrFloat($('#G1403_15_H').val())+getStrFloat($('#G1403_15_I').val())+getStrFloat($('#G1403_15_J').val()),2));
    FG1403_15_D($('#G1403_15_D'));
    $('#G1403_18_I').val(getNumToString(getStrFloat($('#G1403_8_I').val())+getStrFloat($('#G1403_9_I').val())+getStrFloat($('#G1403_10_I').val())+getStrFloat($('#G1403_11_I').val())+getStrFloat($('#G1403_12_I').val())+getStrFloat($('#G1403_13_I').val())+getStrFloat($('#G1403_14_I').val())+getStrFloat($('#G1403_15_I').val())+getStrFloat($('#G1403_16_I').val())+getStrFloat($('#G1403_17_I').val()),2));
    FG1403_18_I($('#G1403_18_I'));
}

/*G1403_15_J*/
function FG1403_15_J(obj){
    showStr(obj);
    $('#G1403_15_D').val(getNumToString(getStrFloat($('#G1403_15_F').val())+getStrFloat($('#G1403_15_G').val())+getStrFloat($('#G1403_15_H').val())+getStrFloat($('#G1403_15_I').val())+getStrFloat($('#G1403_15_J').val()),2));
    FG1403_15_D($('#G1403_15_D'));
    $('#G1403_18_J').val(getNumToString(getStrFloat($('#G1403_8_J').val())+getStrFloat($('#G1403_9_J').val())+getStrFloat($('#G1403_10_J').val())+getStrFloat($('#G1403_11_J').val())+getStrFloat($('#G1403_12_J').val())+getStrFloat($('#G1403_13_J').val())+getStrFloat($('#G1403_14_J').val())+getStrFloat($('#G1403_15_J').val())+getStrFloat($('#G1403_16_J').val())+getStrFloat($('#G1403_17_J').val()),2));
    FG1403_18_J($('#G1403_18_J'));
}

/*G1403_15_K*/
function FG1403_15_K(obj){
    showStr(obj);
    $('#G1403_15_P').val(getNumToString(getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val()),2));
    FG1403_15_P($('#G1403_15_P'));
    $('#G1403_15_Q').val(getNumToString(getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val())-getStrFloat($('#G1403_15_S').val()),2));
    FG1403_15_Q($('#G1403_15_Q'));
    $('#G1403_15_R').val(getNumToString(getRate((getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val())-getStrFloat($('#G1403_15_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_15_R($('#G1403_15_R'));
    $('#G1403_18_K').val(getNumToString(getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_17_K').val()),2));
    FG1403_18_K($('#G1403_18_K'));
}

/*G1403_15_L*/
function FG1403_15_L(obj){
    showStr(obj);
    $('#G1403_18_L').val(getNumToString(getStrFloat($('#G1403_8_L').val())+getStrFloat($('#G1403_9_L').val())+getStrFloat($('#G1403_10_L').val())+getStrFloat($('#G1403_11_L').val())+getStrFloat($('#G1403_12_L').val())+getStrFloat($('#G1403_13_L').val())+getStrFloat($('#G1403_14_L').val())+getStrFloat($('#G1403_15_L').val())+getStrFloat($('#G1403_16_L').val())+getStrFloat($('#G1403_17_L').val()),2));
    FG1403_18_L($('#G1403_18_L'));
}

/*G1403_15_M*/
function FG1403_15_M(obj){
    showStr(obj);
    $('#G1403_15_P').val(getNumToString(getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val()),2));
    FG1403_15_P($('#G1403_15_P'));
    $('#G1403_15_Q').val(getNumToString(getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val())-getStrFloat($('#G1403_15_S').val()),2));
    FG1403_15_Q($('#G1403_15_Q'));
    $('#G1403_15_R').val(getNumToString(getRate((getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val())-getStrFloat($('#G1403_15_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_15_R($('#G1403_15_R'));
    $('#G1403_18_M').val(getNumToString(getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_17_M').val()),2));
    FG1403_18_M($('#G1403_18_M'));
}

/*G1403_15_N*/
function FG1403_15_N(obj){
    showStr(obj);
    $('#G1403_18_N').val(getNumToString(getStrFloat($('#G1403_8_N').val())+getStrFloat($('#G1403_9_N').val())+getStrFloat($('#G1403_10_N').val())+getStrFloat($('#G1403_11_N').val())+getStrFloat($('#G1403_12_N').val())+getStrFloat($('#G1403_13_N').val())+getStrFloat($('#G1403_14_N').val())+getStrFloat($('#G1403_15_N').val())+getStrFloat($('#G1403_16_N').val())+getStrFloat($('#G1403_17_N').val()),2));
    FG1403_18_N($('#G1403_18_N'));
}

/*G1403_15_O*/
function FG1403_15_O(obj){
    showStr(obj);
    $('#G1403_15_P').val(getNumToString(getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val()),2));
    FG1403_15_P($('#G1403_15_P'));
    $('#G1403_15_Q').val(getNumToString(getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val())-getStrFloat($('#G1403_15_S').val()),2));
    FG1403_15_Q($('#G1403_15_Q'));
    $('#G1403_15_R').val(getNumToString(getRate((getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val())-getStrFloat($('#G1403_15_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_15_R($('#G1403_15_R'));
    $('#G1403_18_O').val(getNumToString(getStrFloat($('#G1403_8_O').val())+getStrFloat($('#G1403_9_O').val())+getStrFloat($('#G1403_10_O').val())+getStrFloat($('#G1403_11_O').val())+getStrFloat($('#G1403_12_O').val())+getStrFloat($('#G1403_13_O').val())+getStrFloat($('#G1403_14_O').val())+getStrFloat($('#G1403_15_O').val())+getStrFloat($('#G1403_16_O').val())+getStrFloat($('#G1403_17_O').val()),2));
    FG1403_18_O($('#G1403_18_O'));
}

/*G1403_15_P*/
function FG1403_15_P(obj){
    showStr(obj);
    $('#G1403_15_P').val(getNumToString(getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val()),2));
    $('#G1403_18_P').val(getNumToString(getStrFloat($('#G1403_8_P').val())+getStrFloat($('#G1403_9_P').val())+getStrFloat($('#G1403_10_P').val())+getStrFloat($('#G1403_11_P').val())+getStrFloat($('#G1403_12_P').val())+getStrFloat($('#G1403_13_P').val())+getStrFloat($('#G1403_14_P').val())+getStrFloat($('#G1403_15_P').val())+getStrFloat($('#G1403_16_P').val())+getStrFloat($('#G1403_17_P').val()),2));
    FG1403_18_P($('#G1403_18_P'));
}

/*G1403_15_Q*/
function FG1403_15_Q(obj){
    showStr(obj);
    $('#G1403_15_Q').val(getNumToString(getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val())-getStrFloat($('#G1403_15_S').val()),2));
    $('#G1403_18_Q').val(getNumToString(getStrFloat($('#G1403_8_Q').val())+getStrFloat($('#G1403_9_Q').val())+getStrFloat($('#G1403_10_Q').val())+getStrFloat($('#G1403_11_Q').val())+getStrFloat($('#G1403_12_Q').val())+getStrFloat($('#G1403_13_Q').val())+getStrFloat($('#G1403_14_Q').val())+getStrFloat($('#G1403_15_Q').val())+getStrFloat($('#G1403_16_Q').val())+getStrFloat($('#G1403_17_Q').val()),2));
    FG1403_18_Q($('#G1403_18_Q'));
}

/*G1403_15_R*/
function FG1403_15_R(obj){
    showStr(obj);
    $('#G1403_15_R').val(getNumToString(getRate((getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val())-getStrFloat($('#G1403_15_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_15_S*/
function FG1403_15_S(obj){
    showStr(obj);
    $('#G1403_15_Q').val(getNumToString(getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val())-getStrFloat($('#G1403_15_S').val()),2));
    FG1403_15_Q($('#G1403_15_Q'));
    $('#G1403_15_R').val(getNumToString(getRate((getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val())-getStrFloat($('#G1403_15_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_15_R($('#G1403_15_R'));
    $('#G1403_18_S').val(getNumToString(getStrFloat($('#G1403_8_S').val())+getStrFloat($('#G1403_9_S').val())+getStrFloat($('#G1403_10_S').val())+getStrFloat($('#G1403_11_S').val())+getStrFloat($('#G1403_12_S').val())+getStrFloat($('#G1403_13_S').val())+getStrFloat($('#G1403_14_S').val())+getStrFloat($('#G1403_15_S').val())+getStrFloat($('#G1403_16_S').val())+getStrFloat($('#G1403_17_S').val()),2));
    FG1403_18_S($('#G1403_18_S'));
}

/*G1403_16_A*/
function FG1403_16_A(obj){
    showStr(obj);
}

/*G1403_16_B*/
function FG1403_16_B(obj){
    showStr(obj);
}

/*G1403_16_C*/
function FG1403_16_C(obj){
    showStr(obj);
}

/*G1403_16_D*/
function FG1403_16_D(obj){
    showStr(obj);
    $('#G1403_16_D').val(getNumToString(getStrFloat($('#G1403_16_F').val())+getStrFloat($('#G1403_16_G').val())+getStrFloat($('#G1403_16_H').val())+getStrFloat($('#G1403_16_I').val())+getStrFloat($('#G1403_16_J').val()),2));
    $('#G1403_16_E').val(getNumToString(getRate(getStrFloat($('#G1403_16_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_16_E($('#G1403_16_E'));
    $('#G1403_16_P').val(getNumToString(getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val()),2));
    FG1403_16_P($('#G1403_16_P'));
    $('#G1403_16_Q').val(getNumToString(getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val())-getStrFloat($('#G1403_16_S').val()),2));
    FG1403_16_Q($('#G1403_16_Q'));
    $('#G1403_16_R').val(getNumToString(getRate((getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val())-getStrFloat($('#G1403_16_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_16_R($('#G1403_16_R'));
    $('#G1403_18_D').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_17_D').val()),2));
    FG1403_18_D($('#G1403_18_D'));
}

/*G1403_16_E*/
function FG1403_16_E(obj){
    showStr(obj);
    $('#G1403_16_E').val(getNumToString(getRate(getStrFloat($('#G1403_16_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_16_F*/
function FG1403_16_F(obj){
    showStr(obj);
    $('#G1403_16_D').val(getNumToString(getStrFloat($('#G1403_16_F').val())+getStrFloat($('#G1403_16_G').val())+getStrFloat($('#G1403_16_H').val())+getStrFloat($('#G1403_16_I').val())+getStrFloat($('#G1403_16_J').val()),2));
    FG1403_16_D($('#G1403_16_D'));
    $('#G1403_18_F').val(getNumToString(getStrFloat($('#G1403_8_F').val())+getStrFloat($('#G1403_9_F').val())+getStrFloat($('#G1403_10_F').val())+getStrFloat($('#G1403_11_F').val())+getStrFloat($('#G1403_12_F').val())+getStrFloat($('#G1403_13_F').val())+getStrFloat($('#G1403_14_F').val())+getStrFloat($('#G1403_15_F').val())+getStrFloat($('#G1403_16_F').val())+getStrFloat($('#G1403_17_F').val()),2));
    FG1403_18_F($('#G1403_18_F'));
}

/*G1403_16_G*/
function FG1403_16_G(obj){
    showStr(obj);
    $('#G1403_16_D').val(getNumToString(getStrFloat($('#G1403_16_F').val())+getStrFloat($('#G1403_16_G').val())+getStrFloat($('#G1403_16_H').val())+getStrFloat($('#G1403_16_I').val())+getStrFloat($('#G1403_16_J').val()),2));
    FG1403_16_D($('#G1403_16_D'));
    $('#G1403_18_G').val(getNumToString(getStrFloat($('#G1403_8_G').val())+getStrFloat($('#G1403_9_G').val())+getStrFloat($('#G1403_10_G').val())+getStrFloat($('#G1403_11_G').val())+getStrFloat($('#G1403_12_G').val())+getStrFloat($('#G1403_13_G').val())+getStrFloat($('#G1403_14_G').val())+getStrFloat($('#G1403_15_G').val())+getStrFloat($('#G1403_16_G').val())+getStrFloat($('#G1403_17_G').val()),2));
    FG1403_18_G($('#G1403_18_G'));
}

/*G1403_16_H*/
function FG1403_16_H(obj){
    showStr(obj);
    $('#G1403_16_D').val(getNumToString(getStrFloat($('#G1403_16_F').val())+getStrFloat($('#G1403_16_G').val())+getStrFloat($('#G1403_16_H').val())+getStrFloat($('#G1403_16_I').val())+getStrFloat($('#G1403_16_J').val()),2));
    FG1403_16_D($('#G1403_16_D'));
    $('#G1403_18_H').val(getNumToString(getStrFloat($('#G1403_8_H').val())+getStrFloat($('#G1403_9_H').val())+getStrFloat($('#G1403_10_H').val())+getStrFloat($('#G1403_11_H').val())+getStrFloat($('#G1403_12_H').val())+getStrFloat($('#G1403_13_H').val())+getStrFloat($('#G1403_14_H').val())+getStrFloat($('#G1403_15_H').val())+getStrFloat($('#G1403_16_H').val())+getStrFloat($('#G1403_17_H').val()),2));
    FG1403_18_H($('#G1403_18_H'));
}

/*G1403_16_I*/
function FG1403_16_I(obj){
    showStr(obj);
    $('#G1403_16_D').val(getNumToString(getStrFloat($('#G1403_16_F').val())+getStrFloat($('#G1403_16_G').val())+getStrFloat($('#G1403_16_H').val())+getStrFloat($('#G1403_16_I').val())+getStrFloat($('#G1403_16_J').val()),2));
    FG1403_16_D($('#G1403_16_D'));
    $('#G1403_18_I').val(getNumToString(getStrFloat($('#G1403_8_I').val())+getStrFloat($('#G1403_9_I').val())+getStrFloat($('#G1403_10_I').val())+getStrFloat($('#G1403_11_I').val())+getStrFloat($('#G1403_12_I').val())+getStrFloat($('#G1403_13_I').val())+getStrFloat($('#G1403_14_I').val())+getStrFloat($('#G1403_15_I').val())+getStrFloat($('#G1403_16_I').val())+getStrFloat($('#G1403_17_I').val()),2));
    FG1403_18_I($('#G1403_18_I'));
}

/*G1403_16_J*/
function FG1403_16_J(obj){
    showStr(obj);
    $('#G1403_16_D').val(getNumToString(getStrFloat($('#G1403_16_F').val())+getStrFloat($('#G1403_16_G').val())+getStrFloat($('#G1403_16_H').val())+getStrFloat($('#G1403_16_I').val())+getStrFloat($('#G1403_16_J').val()),2));
    FG1403_16_D($('#G1403_16_D'));
    $('#G1403_18_J').val(getNumToString(getStrFloat($('#G1403_8_J').val())+getStrFloat($('#G1403_9_J').val())+getStrFloat($('#G1403_10_J').val())+getStrFloat($('#G1403_11_J').val())+getStrFloat($('#G1403_12_J').val())+getStrFloat($('#G1403_13_J').val())+getStrFloat($('#G1403_14_J').val())+getStrFloat($('#G1403_15_J').val())+getStrFloat($('#G1403_16_J').val())+getStrFloat($('#G1403_17_J').val()),2));
    FG1403_18_J($('#G1403_18_J'));
}

/*G1403_16_K*/
function FG1403_16_K(obj){
    showStr(obj);
    $('#G1403_16_P').val(getNumToString(getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val()),2));
    FG1403_16_P($('#G1403_16_P'));
    $('#G1403_16_Q').val(getNumToString(getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val())-getStrFloat($('#G1403_16_S').val()),2));
    FG1403_16_Q($('#G1403_16_Q'));
    $('#G1403_16_R').val(getNumToString(getRate((getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val())-getStrFloat($('#G1403_16_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_16_R($('#G1403_16_R'));
    $('#G1403_18_K').val(getNumToString(getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_17_K').val()),2));
    FG1403_18_K($('#G1403_18_K'));
}

/*G1403_16_L*/
function FG1403_16_L(obj){
    showStr(obj);
    $('#G1403_18_L').val(getNumToString(getStrFloat($('#G1403_8_L').val())+getStrFloat($('#G1403_9_L').val())+getStrFloat($('#G1403_10_L').val())+getStrFloat($('#G1403_11_L').val())+getStrFloat($('#G1403_12_L').val())+getStrFloat($('#G1403_13_L').val())+getStrFloat($('#G1403_14_L').val())+getStrFloat($('#G1403_15_L').val())+getStrFloat($('#G1403_16_L').val())+getStrFloat($('#G1403_17_L').val()),2));
    FG1403_18_L($('#G1403_18_L'));
}

/*G1403_16_M*/
function FG1403_16_M(obj){
    showStr(obj);
    $('#G1403_16_P').val(getNumToString(getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val()),2));
    FG1403_16_P($('#G1403_16_P'));
    $('#G1403_16_Q').val(getNumToString(getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val())-getStrFloat($('#G1403_16_S').val()),2));
    FG1403_16_Q($('#G1403_16_Q'));
    $('#G1403_16_R').val(getNumToString(getRate((getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val())-getStrFloat($('#G1403_16_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_16_R($('#G1403_16_R'));
    $('#G1403_18_M').val(getNumToString(getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_17_M').val()),2));
    FG1403_18_M($('#G1403_18_M'));
}

/*G1403_16_N*/
function FG1403_16_N(obj){
    showStr(obj);
    $('#G1403_18_N').val(getNumToString(getStrFloat($('#G1403_8_N').val())+getStrFloat($('#G1403_9_N').val())+getStrFloat($('#G1403_10_N').val())+getStrFloat($('#G1403_11_N').val())+getStrFloat($('#G1403_12_N').val())+getStrFloat($('#G1403_13_N').val())+getStrFloat($('#G1403_14_N').val())+getStrFloat($('#G1403_15_N').val())+getStrFloat($('#G1403_16_N').val())+getStrFloat($('#G1403_17_N').val()),2));
    FG1403_18_N($('#G1403_18_N'));
}

/*G1403_16_O*/
function FG1403_16_O(obj){
    showStr(obj);
    $('#G1403_16_P').val(getNumToString(getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val()),2));
    FG1403_16_P($('#G1403_16_P'));
    $('#G1403_16_Q').val(getNumToString(getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val())-getStrFloat($('#G1403_16_S').val()),2));
    FG1403_16_Q($('#G1403_16_Q'));
    $('#G1403_16_R').val(getNumToString(getRate((getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val())-getStrFloat($('#G1403_16_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_16_R($('#G1403_16_R'));
    $('#G1403_18_O').val(getNumToString(getStrFloat($('#G1403_8_O').val())+getStrFloat($('#G1403_9_O').val())+getStrFloat($('#G1403_10_O').val())+getStrFloat($('#G1403_11_O').val())+getStrFloat($('#G1403_12_O').val())+getStrFloat($('#G1403_13_O').val())+getStrFloat($('#G1403_14_O').val())+getStrFloat($('#G1403_15_O').val())+getStrFloat($('#G1403_16_O').val())+getStrFloat($('#G1403_17_O').val()),2));
    FG1403_18_O($('#G1403_18_O'));
}

/*G1403_16_P*/
function FG1403_16_P(obj){
    showStr(obj);
    $('#G1403_16_P').val(getNumToString(getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val()),2));
    $('#G1403_18_P').val(getNumToString(getStrFloat($('#G1403_8_P').val())+getStrFloat($('#G1403_9_P').val())+getStrFloat($('#G1403_10_P').val())+getStrFloat($('#G1403_11_P').val())+getStrFloat($('#G1403_12_P').val())+getStrFloat($('#G1403_13_P').val())+getStrFloat($('#G1403_14_P').val())+getStrFloat($('#G1403_15_P').val())+getStrFloat($('#G1403_16_P').val())+getStrFloat($('#G1403_17_P').val()),2));
    FG1403_18_P($('#G1403_18_P'));
}

/*G1403_16_Q*/
function FG1403_16_Q(obj){
    showStr(obj);
    $('#G1403_16_Q').val(getNumToString(getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val())-getStrFloat($('#G1403_16_S').val()),2));
    $('#G1403_18_Q').val(getNumToString(getStrFloat($('#G1403_8_Q').val())+getStrFloat($('#G1403_9_Q').val())+getStrFloat($('#G1403_10_Q').val())+getStrFloat($('#G1403_11_Q').val())+getStrFloat($('#G1403_12_Q').val())+getStrFloat($('#G1403_13_Q').val())+getStrFloat($('#G1403_14_Q').val())+getStrFloat($('#G1403_15_Q').val())+getStrFloat($('#G1403_16_Q').val())+getStrFloat($('#G1403_17_Q').val()),2));
    FG1403_18_Q($('#G1403_18_Q'));
}

/*G1403_16_R*/
function FG1403_16_R(obj){
    showStr(obj);
    $('#G1403_16_R').val(getNumToString(getRate((getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val())-getStrFloat($('#G1403_16_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_16_S*/
function FG1403_16_S(obj){
    showStr(obj);
    $('#G1403_16_Q').val(getNumToString(getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val())-getStrFloat($('#G1403_16_S').val()),2));
    FG1403_16_Q($('#G1403_16_Q'));
    $('#G1403_16_R').val(getNumToString(getRate((getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val())-getStrFloat($('#G1403_16_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_16_R($('#G1403_16_R'));
    $('#G1403_18_S').val(getNumToString(getStrFloat($('#G1403_8_S').val())+getStrFloat($('#G1403_9_S').val())+getStrFloat($('#G1403_10_S').val())+getStrFloat($('#G1403_11_S').val())+getStrFloat($('#G1403_12_S').val())+getStrFloat($('#G1403_13_S').val())+getStrFloat($('#G1403_14_S').val())+getStrFloat($('#G1403_15_S').val())+getStrFloat($('#G1403_16_S').val())+getStrFloat($('#G1403_17_S').val()),2));
    FG1403_18_S($('#G1403_18_S'));
}

/*G1403_17_A*/
function FG1403_17_A(obj){
    showStr(obj);
}

/*G1403_17_B*/
function FG1403_17_B(obj){
    showStr(obj);
}

/*G1403_17_C*/
function FG1403_17_C(obj){
    showStr(obj);
}

/*G1403_17_D*/
function FG1403_17_D(obj){
    showStr(obj);
    $('#G1403_17_D').val(getNumToString(getStrFloat($('#G1403_17_F').val())+getStrFloat($('#G1403_17_G').val())+getStrFloat($('#G1403_17_H').val())+getStrFloat($('#G1403_17_I').val())+getStrFloat($('#G1403_17_J').val()),2));
    $('#G1403_17_E').val(getNumToString(getRate(getStrFloat($('#G1403_17_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_17_E($('#G1403_17_E'));
    $('#G1403_17_P').val(getNumToString(getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val()),2));
    FG1403_17_P($('#G1403_17_P'));
    $('#G1403_17_Q').val(getNumToString(getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val())-getStrFloat($('#G1403_17_S').val()),2));
    FG1403_17_Q($('#G1403_17_Q'));
    $('#G1403_17_R').val(getNumToString(getRate((getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val())-getStrFloat($('#G1403_17_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_17_R($('#G1403_17_R'));
    $('#G1403_18_D').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_17_D').val()),2));
    FG1403_18_D($('#G1403_18_D'));
}

/*G1403_17_E*/
function FG1403_17_E(obj){
    showStr(obj);
    $('#G1403_17_E').val(getNumToString(getRate(getStrFloat($('#G1403_17_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_17_F*/
function FG1403_17_F(obj){
    showStr(obj);
    $('#G1403_17_D').val(getNumToString(getStrFloat($('#G1403_17_F').val())+getStrFloat($('#G1403_17_G').val())+getStrFloat($('#G1403_17_H').val())+getStrFloat($('#G1403_17_I').val())+getStrFloat($('#G1403_17_J').val()),2));
    FG1403_17_D($('#G1403_17_D'));
    $('#G1403_18_F').val(getNumToString(getStrFloat($('#G1403_8_F').val())+getStrFloat($('#G1403_9_F').val())+getStrFloat($('#G1403_10_F').val())+getStrFloat($('#G1403_11_F').val())+getStrFloat($('#G1403_12_F').val())+getStrFloat($('#G1403_13_F').val())+getStrFloat($('#G1403_14_F').val())+getStrFloat($('#G1403_15_F').val())+getStrFloat($('#G1403_16_F').val())+getStrFloat($('#G1403_17_F').val()),2));
    FG1403_18_F($('#G1403_18_F'));
}

/*G1403_17_G*/
function FG1403_17_G(obj){
    showStr(obj);
    $('#G1403_17_D').val(getNumToString(getStrFloat($('#G1403_17_F').val())+getStrFloat($('#G1403_17_G').val())+getStrFloat($('#G1403_17_H').val())+getStrFloat($('#G1403_17_I').val())+getStrFloat($('#G1403_17_J').val()),2));
    FG1403_17_D($('#G1403_17_D'));
    $('#G1403_18_G').val(getNumToString(getStrFloat($('#G1403_8_G').val())+getStrFloat($('#G1403_9_G').val())+getStrFloat($('#G1403_10_G').val())+getStrFloat($('#G1403_11_G').val())+getStrFloat($('#G1403_12_G').val())+getStrFloat($('#G1403_13_G').val())+getStrFloat($('#G1403_14_G').val())+getStrFloat($('#G1403_15_G').val())+getStrFloat($('#G1403_16_G').val())+getStrFloat($('#G1403_17_G').val()),2));
    FG1403_18_G($('#G1403_18_G'));
}

/*G1403_17_H*/
function FG1403_17_H(obj){
    showStr(obj);
    $('#G1403_17_D').val(getNumToString(getStrFloat($('#G1403_17_F').val())+getStrFloat($('#G1403_17_G').val())+getStrFloat($('#G1403_17_H').val())+getStrFloat($('#G1403_17_I').val())+getStrFloat($('#G1403_17_J').val()),2));
    FG1403_17_D($('#G1403_17_D'));
    $('#G1403_18_H').val(getNumToString(getStrFloat($('#G1403_8_H').val())+getStrFloat($('#G1403_9_H').val())+getStrFloat($('#G1403_10_H').val())+getStrFloat($('#G1403_11_H').val())+getStrFloat($('#G1403_12_H').val())+getStrFloat($('#G1403_13_H').val())+getStrFloat($('#G1403_14_H').val())+getStrFloat($('#G1403_15_H').val())+getStrFloat($('#G1403_16_H').val())+getStrFloat($('#G1403_17_H').val()),2));
    FG1403_18_H($('#G1403_18_H'));
}

/*G1403_17_I*/
function FG1403_17_I(obj){
    showStr(obj);
    $('#G1403_17_D').val(getNumToString(getStrFloat($('#G1403_17_F').val())+getStrFloat($('#G1403_17_G').val())+getStrFloat($('#G1403_17_H').val())+getStrFloat($('#G1403_17_I').val())+getStrFloat($('#G1403_17_J').val()),2));
    FG1403_17_D($('#G1403_17_D'));
    $('#G1403_18_I').val(getNumToString(getStrFloat($('#G1403_8_I').val())+getStrFloat($('#G1403_9_I').val())+getStrFloat($('#G1403_10_I').val())+getStrFloat($('#G1403_11_I').val())+getStrFloat($('#G1403_12_I').val())+getStrFloat($('#G1403_13_I').val())+getStrFloat($('#G1403_14_I').val())+getStrFloat($('#G1403_15_I').val())+getStrFloat($('#G1403_16_I').val())+getStrFloat($('#G1403_17_I').val()),2));
    FG1403_18_I($('#G1403_18_I'));
}

/*G1403_17_J*/
function FG1403_17_J(obj){
    showStr(obj);
    $('#G1403_17_D').val(getNumToString(getStrFloat($('#G1403_17_F').val())+getStrFloat($('#G1403_17_G').val())+getStrFloat($('#G1403_17_H').val())+getStrFloat($('#G1403_17_I').val())+getStrFloat($('#G1403_17_J').val()),2));
    FG1403_17_D($('#G1403_17_D'));
    $('#G1403_18_J').val(getNumToString(getStrFloat($('#G1403_8_J').val())+getStrFloat($('#G1403_9_J').val())+getStrFloat($('#G1403_10_J').val())+getStrFloat($('#G1403_11_J').val())+getStrFloat($('#G1403_12_J').val())+getStrFloat($('#G1403_13_J').val())+getStrFloat($('#G1403_14_J').val())+getStrFloat($('#G1403_15_J').val())+getStrFloat($('#G1403_16_J').val())+getStrFloat($('#G1403_17_J').val()),2));
    FG1403_18_J($('#G1403_18_J'));
}

/*G1403_17_K*/
function FG1403_17_K(obj){
    showStr(obj);
    $('#G1403_17_P').val(getNumToString(getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val()),2));
    FG1403_17_P($('#G1403_17_P'));
    $('#G1403_17_Q').val(getNumToString(getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val())-getStrFloat($('#G1403_17_S').val()),2));
    FG1403_17_Q($('#G1403_17_Q'));
    $('#G1403_17_R').val(getNumToString(getRate((getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val())-getStrFloat($('#G1403_17_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_17_R($('#G1403_17_R'));
    $('#G1403_18_K').val(getNumToString(getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_17_K').val()),2));
    FG1403_18_K($('#G1403_18_K'));
}

/*G1403_17_L*/
function FG1403_17_L(obj){
    showStr(obj);
    $('#G1403_18_L').val(getNumToString(getStrFloat($('#G1403_8_L').val())+getStrFloat($('#G1403_9_L').val())+getStrFloat($('#G1403_10_L').val())+getStrFloat($('#G1403_11_L').val())+getStrFloat($('#G1403_12_L').val())+getStrFloat($('#G1403_13_L').val())+getStrFloat($('#G1403_14_L').val())+getStrFloat($('#G1403_15_L').val())+getStrFloat($('#G1403_16_L').val())+getStrFloat($('#G1403_17_L').val()),2));
    FG1403_18_L($('#G1403_18_L'));
}

/*G1403_17_M*/
function FG1403_17_M(obj){
    showStr(obj);
    $('#G1403_17_P').val(getNumToString(getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val()),2));
    FG1403_17_P($('#G1403_17_P'));
    $('#G1403_17_Q').val(getNumToString(getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val())-getStrFloat($('#G1403_17_S').val()),2));
    FG1403_17_Q($('#G1403_17_Q'));
    $('#G1403_17_R').val(getNumToString(getRate((getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val())-getStrFloat($('#G1403_17_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_17_R($('#G1403_17_R'));
    $('#G1403_18_M').val(getNumToString(getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_17_M').val()),2));
    FG1403_18_M($('#G1403_18_M'));
}

/*G1403_17_N*/
function FG1403_17_N(obj){
    showStr(obj);
    $('#G1403_18_N').val(getNumToString(getStrFloat($('#G1403_8_N').val())+getStrFloat($('#G1403_9_N').val())+getStrFloat($('#G1403_10_N').val())+getStrFloat($('#G1403_11_N').val())+getStrFloat($('#G1403_12_N').val())+getStrFloat($('#G1403_13_N').val())+getStrFloat($('#G1403_14_N').val())+getStrFloat($('#G1403_15_N').val())+getStrFloat($('#G1403_16_N').val())+getStrFloat($('#G1403_17_N').val()),2));
    FG1403_18_N($('#G1403_18_N'));
}

/*G1403_17_O*/
function FG1403_17_O(obj){
    showStr(obj);
    $('#G1403_17_P').val(getNumToString(getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val()),2));
    FG1403_17_P($('#G1403_17_P'));
    $('#G1403_17_Q').val(getNumToString(getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val())-getStrFloat($('#G1403_17_S').val()),2));
    FG1403_17_Q($('#G1403_17_Q'));
    $('#G1403_17_R').val(getNumToString(getRate((getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val())-getStrFloat($('#G1403_17_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_17_R($('#G1403_17_R'));
    $('#G1403_18_O').val(getNumToString(getStrFloat($('#G1403_8_O').val())+getStrFloat($('#G1403_9_O').val())+getStrFloat($('#G1403_10_O').val())+getStrFloat($('#G1403_11_O').val())+getStrFloat($('#G1403_12_O').val())+getStrFloat($('#G1403_13_O').val())+getStrFloat($('#G1403_14_O').val())+getStrFloat($('#G1403_15_O').val())+getStrFloat($('#G1403_16_O').val())+getStrFloat($('#G1403_17_O').val()),2));
    FG1403_18_O($('#G1403_18_O'));
}

/*G1403_17_P*/
function FG1403_17_P(obj){
    showStr(obj);
    $('#G1403_17_P').val(getNumToString(getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val()),2));
    $('#G1403_18_P').val(getNumToString(getStrFloat($('#G1403_8_P').val())+getStrFloat($('#G1403_9_P').val())+getStrFloat($('#G1403_10_P').val())+getStrFloat($('#G1403_11_P').val())+getStrFloat($('#G1403_12_P').val())+getStrFloat($('#G1403_13_P').val())+getStrFloat($('#G1403_14_P').val())+getStrFloat($('#G1403_15_P').val())+getStrFloat($('#G1403_16_P').val())+getStrFloat($('#G1403_17_P').val()),2));
    FG1403_18_P($('#G1403_18_P'));
}

/*G1403_17_Q*/
function FG1403_17_Q(obj){
    showStr(obj);
    $('#G1403_17_Q').val(getNumToString(getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val())-getStrFloat($('#G1403_17_S').val()),2));
    $('#G1403_18_Q').val(getNumToString(getStrFloat($('#G1403_8_Q').val())+getStrFloat($('#G1403_9_Q').val())+getStrFloat($('#G1403_10_Q').val())+getStrFloat($('#G1403_11_Q').val())+getStrFloat($('#G1403_12_Q').val())+getStrFloat($('#G1403_13_Q').val())+getStrFloat($('#G1403_14_Q').val())+getStrFloat($('#G1403_15_Q').val())+getStrFloat($('#G1403_16_Q').val())+getStrFloat($('#G1403_17_Q').val()),2));
    FG1403_18_Q($('#G1403_18_Q'));
}

/*G1403_17_R*/
function FG1403_17_R(obj){
    showStr(obj);
    $('#G1403_17_R').val(getNumToString(getRate((getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val())-getStrFloat($('#G1403_17_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_17_S*/
function FG1403_17_S(obj){
    showStr(obj);
    $('#G1403_17_Q').val(getNumToString(getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val())-getStrFloat($('#G1403_17_S').val()),2));
    FG1403_17_Q($('#G1403_17_Q'));
    $('#G1403_17_R').val(getNumToString(getRate((getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val())-getStrFloat($('#G1403_17_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_17_R($('#G1403_17_R'));
    $('#G1403_18_S').val(getNumToString(getStrFloat($('#G1403_8_S').val())+getStrFloat($('#G1403_9_S').val())+getStrFloat($('#G1403_10_S').val())+getStrFloat($('#G1403_11_S').val())+getStrFloat($('#G1403_12_S').val())+getStrFloat($('#G1403_13_S').val())+getStrFloat($('#G1403_14_S').val())+getStrFloat($('#G1403_15_S').val())+getStrFloat($('#G1403_16_S').val())+getStrFloat($('#G1403_17_S').val()),2));
    FG1403_18_S($('#G1403_18_S'));
}

/*G1403_18_A*/
function FG1403_18_A(obj){
    showStr(obj);
}

/*G1403_18_B*/
function FG1403_18_B(obj){
    showStr(obj);
}

/*G1403_18_C*/
function FG1403_18_C(obj){
    showStr(obj);
}

/*G1403_18_D*/
function FG1403_18_D(obj){
    showStr(obj);
    $('#G1403_18_D').val(getNumToString(getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_17_D').val()),2));
    $('#G1403_18_E').val(getNumToString(getRate(getStrFloat($('#G1403_18_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_18_E($('#G1403_18_E'));
    $('#G1403_18_R').val(getNumToString(getRate((getStrFloat($('#G1403_18_D').val())+getStrFloat($('#G1403_18_K').val())+getStrFloat($('#G1403_18_M').val())+getStrFloat($('#G1403_18_O').val())-getStrFloat($('#G1403_18_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_18_R($('#G1403_18_R'));
}

/*G1403_18_E*/
function FG1403_18_E(obj){
    showStr(obj);
    $('#G1403_18_E').val(getNumToString(getRate(getStrFloat($('#G1403_18_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_18_F*/
function FG1403_18_F(obj){
    showStr(obj);
    $('#G1403_18_F').val(getNumToString(getStrFloat($('#G1403_8_F').val())+getStrFloat($('#G1403_9_F').val())+getStrFloat($('#G1403_10_F').val())+getStrFloat($('#G1403_11_F').val())+getStrFloat($('#G1403_12_F').val())+getStrFloat($('#G1403_13_F').val())+getStrFloat($('#G1403_14_F').val())+getStrFloat($('#G1403_15_F').val())+getStrFloat($('#G1403_16_F').val())+getStrFloat($('#G1403_17_F').val()),2));
}

/*G1403_18_G*/
function FG1403_18_G(obj){
    showStr(obj);
    $('#G1403_18_G').val(getNumToString(getStrFloat($('#G1403_8_G').val())+getStrFloat($('#G1403_9_G').val())+getStrFloat($('#G1403_10_G').val())+getStrFloat($('#G1403_11_G').val())+getStrFloat($('#G1403_12_G').val())+getStrFloat($('#G1403_13_G').val())+getStrFloat($('#G1403_14_G').val())+getStrFloat($('#G1403_15_G').val())+getStrFloat($('#G1403_16_G').val())+getStrFloat($('#G1403_17_G').val()),2));
}

/*G1403_18_H*/
function FG1403_18_H(obj){
    showStr(obj);
    $('#G1403_18_H').val(getNumToString(getStrFloat($('#G1403_8_H').val())+getStrFloat($('#G1403_9_H').val())+getStrFloat($('#G1403_10_H').val())+getStrFloat($('#G1403_11_H').val())+getStrFloat($('#G1403_12_H').val())+getStrFloat($('#G1403_13_H').val())+getStrFloat($('#G1403_14_H').val())+getStrFloat($('#G1403_15_H').val())+getStrFloat($('#G1403_16_H').val())+getStrFloat($('#G1403_17_H').val()),2));
}

/*G1403_18_I*/
function FG1403_18_I(obj){
    showStr(obj);
    $('#G1403_18_I').val(getNumToString(getStrFloat($('#G1403_8_I').val())+getStrFloat($('#G1403_9_I').val())+getStrFloat($('#G1403_10_I').val())+getStrFloat($('#G1403_11_I').val())+getStrFloat($('#G1403_12_I').val())+getStrFloat($('#G1403_13_I').val())+getStrFloat($('#G1403_14_I').val())+getStrFloat($('#G1403_15_I').val())+getStrFloat($('#G1403_16_I').val())+getStrFloat($('#G1403_17_I').val()),2));
}

/*G1403_18_J*/
function FG1403_18_J(obj){
    showStr(obj);
    $('#G1403_18_J').val(getNumToString(getStrFloat($('#G1403_8_J').val())+getStrFloat($('#G1403_9_J').val())+getStrFloat($('#G1403_10_J').val())+getStrFloat($('#G1403_11_J').val())+getStrFloat($('#G1403_12_J').val())+getStrFloat($('#G1403_13_J').val())+getStrFloat($('#G1403_14_J').val())+getStrFloat($('#G1403_15_J').val())+getStrFloat($('#G1403_16_J').val())+getStrFloat($('#G1403_17_J').val()),2));
}

/*G1403_18_K*/
function FG1403_18_K(obj){
    showStr(obj);
    $('#G1403_18_K').val(getNumToString(getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_17_K').val()),2));
    $('#G1403_18_R').val(getNumToString(getRate((getStrFloat($('#G1403_18_D').val())+getStrFloat($('#G1403_18_K').val())+getStrFloat($('#G1403_18_M').val())+getStrFloat($('#G1403_18_O').val())-getStrFloat($('#G1403_18_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_18_R($('#G1403_18_R'));
}

/*G1403_18_L*/
function FG1403_18_L(obj){
    showStr(obj);
    $('#G1403_18_L').val(getNumToString(getStrFloat($('#G1403_8_L').val())+getStrFloat($('#G1403_9_L').val())+getStrFloat($('#G1403_10_L').val())+getStrFloat($('#G1403_11_L').val())+getStrFloat($('#G1403_12_L').val())+getStrFloat($('#G1403_13_L').val())+getStrFloat($('#G1403_14_L').val())+getStrFloat($('#G1403_15_L').val())+getStrFloat($('#G1403_16_L').val())+getStrFloat($('#G1403_17_L').val()),2));
}

/*G1403_18_M*/
function FG1403_18_M(obj){
    showStr(obj);
    $('#G1403_18_M').val(getNumToString(getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_17_M').val()),2));
    $('#G1403_18_R').val(getNumToString(getRate((getStrFloat($('#G1403_18_D').val())+getStrFloat($('#G1403_18_K').val())+getStrFloat($('#G1403_18_M').val())+getStrFloat($('#G1403_18_O').val())-getStrFloat($('#G1403_18_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_18_R($('#G1403_18_R'));
}

/*G1403_18_N*/
function FG1403_18_N(obj){
    showStr(obj);
    $('#G1403_18_N').val(getNumToString(getStrFloat($('#G1403_8_N').val())+getStrFloat($('#G1403_9_N').val())+getStrFloat($('#G1403_10_N').val())+getStrFloat($('#G1403_11_N').val())+getStrFloat($('#G1403_12_N').val())+getStrFloat($('#G1403_13_N').val())+getStrFloat($('#G1403_14_N').val())+getStrFloat($('#G1403_15_N').val())+getStrFloat($('#G1403_16_N').val())+getStrFloat($('#G1403_17_N').val()),2));
}

/*G1403_18_O*/
function FG1403_18_O(obj){
    showStr(obj);
    $('#G1403_18_O').val(getNumToString(getStrFloat($('#G1403_8_O').val())+getStrFloat($('#G1403_9_O').val())+getStrFloat($('#G1403_10_O').val())+getStrFloat($('#G1403_11_O').val())+getStrFloat($('#G1403_12_O').val())+getStrFloat($('#G1403_13_O').val())+getStrFloat($('#G1403_14_O').val())+getStrFloat($('#G1403_15_O').val())+getStrFloat($('#G1403_16_O').val())+getStrFloat($('#G1403_17_O').val()),2));
    $('#G1403_18_R').val(getNumToString(getRate((getStrFloat($('#G1403_18_D').val())+getStrFloat($('#G1403_18_K').val())+getStrFloat($('#G1403_18_M').val())+getStrFloat($('#G1403_18_O').val())-getStrFloat($('#G1403_18_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_18_R($('#G1403_18_R'));
}

/*G1403_18_P*/
function FG1403_18_P(obj){
    showStr(obj);
    $('#G1403_18_P').val(getNumToString(getStrFloat($('#G1403_8_P').val())+getStrFloat($('#G1403_9_P').val())+getStrFloat($('#G1403_10_P').val())+getStrFloat($('#G1403_11_P').val())+getStrFloat($('#G1403_12_P').val())+getStrFloat($('#G1403_13_P').val())+getStrFloat($('#G1403_14_P').val())+getStrFloat($('#G1403_15_P').val())+getStrFloat($('#G1403_16_P').val())+getStrFloat($('#G1403_17_P').val()),2));
}

/*G1403_18_Q*/
function FG1403_18_Q(obj){
    showStr(obj);
    $('#G1403_18_Q').val(getNumToString(getStrFloat($('#G1403_8_Q').val())+getStrFloat($('#G1403_9_Q').val())+getStrFloat($('#G1403_10_Q').val())+getStrFloat($('#G1403_11_Q').val())+getStrFloat($('#G1403_12_Q').val())+getStrFloat($('#G1403_13_Q').val())+getStrFloat($('#G1403_14_Q').val())+getStrFloat($('#G1403_15_Q').val())+getStrFloat($('#G1403_16_Q').val())+getStrFloat($('#G1403_17_Q').val()),2));
}

/*G1403_18_R*/
function FG1403_18_R(obj){
    showStr(obj);
    $('#G1403_18_R').val(getNumToString(getRate((getStrFloat($('#G1403_18_D').val())+getStrFloat($('#G1403_18_K').val())+getStrFloat($('#G1403_18_M').val())+getStrFloat($('#G1403_18_O').val())-getStrFloat($('#G1403_18_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
}

/*G1403_18_S*/
function FG1403_18_S(obj){
    showStr(obj);
    $('#G1403_18_R').val(getNumToString(getRate((getStrFloat($('#G1403_18_D').val())+getStrFloat($('#G1403_18_K').val())+getStrFloat($('#G1403_18_M').val())+getStrFloat($('#G1403_18_O').val())-getStrFloat($('#G1403_18_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_18_R($('#G1403_18_R'));
    $('#G1403_18_S').val(getNumToString(getStrFloat($('#G1403_8_S').val())+getStrFloat($('#G1403_9_S').val())+getStrFloat($('#G1403_10_S').val())+getStrFloat($('#G1403_11_S').val())+getStrFloat($('#G1403_12_S').val())+getStrFloat($('#G1403_13_S').val())+getStrFloat($('#G1403_14_S').val())+getStrFloat($('#G1403_15_S').val())+getStrFloat($('#G1403_16_S').val())+getStrFloat($('#G1403_17_S').val()),2));
}

/*G1403_19_A*/
function FG1403_19_A(obj){
    showStr(obj);
}

/*G1403_19_B*/
function FG1403_19_B(obj){
    showStr(obj);
    $('#G1403_8_E').val(getNumToString(getRate(getStrFloat($('#G1403_8_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_8_E($('#G1403_8_E'));
    $('#G1403_8_R').val(getNumToString(getRate((getStrFloat($('#G1403_8_D').val())+getStrFloat($('#G1403_8_K').val())+getStrFloat($('#G1403_8_M').val())+getStrFloat($('#G1403_8_O').val())-getStrFloat($('#G1403_8_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_8_R($('#G1403_8_R'));
    $('#G1403_9_E').val(getNumToString(getRate(getStrFloat($('#G1403_9_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_9_E($('#G1403_9_E'));
    $('#G1403_9_R').val(getNumToString(getRate((getStrFloat($('#G1403_9_D').val())+getStrFloat($('#G1403_9_K').val())+getStrFloat($('#G1403_9_M').val())+getStrFloat($('#G1403_9_O').val())-getStrFloat($('#G1403_9_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_9_R($('#G1403_9_R'));
    $('#G1403_10_E').val(getNumToString(getRate(getStrFloat($('#G1403_10_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_10_E($('#G1403_10_E'));
    $('#G1403_10_R').val(getNumToString(getRate((getStrFloat($('#G1403_10_D').val())+getStrFloat($('#G1403_10_K').val())+getStrFloat($('#G1403_10_M').val())+getStrFloat($('#G1403_10_O').val())-getStrFloat($('#G1403_10_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_10_R($('#G1403_10_R'));
    $('#G1403_11_E').val(getNumToString(getRate(getStrFloat($('#G1403_11_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_11_E($('#G1403_11_E'));
    $('#G1403_11_R').val(getNumToString(getRate((getStrFloat($('#G1403_11_D').val())+getStrFloat($('#G1403_11_K').val())+getStrFloat($('#G1403_11_M').val())+getStrFloat($('#G1403_11_O').val())-getStrFloat($('#G1403_11_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_11_R($('#G1403_11_R'));
    $('#G1403_12_E').val(getNumToString(getRate(getStrFloat($('#G1403_12_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_12_E($('#G1403_12_E'));
    $('#G1403_12_R').val(getNumToString(getRate((getStrFloat($('#G1403_12_D').val())+getStrFloat($('#G1403_12_K').val())+getStrFloat($('#G1403_12_M').val())+getStrFloat($('#G1403_12_O').val())-getStrFloat($('#G1403_12_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_12_R($('#G1403_12_R'));
    $('#G1403_13_E').val(getNumToString(getRate(getStrFloat($('#G1403_13_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_13_E($('#G1403_13_E'));
    $('#G1403_13_R').val(getNumToString(getRate((getStrFloat($('#G1403_13_D').val())+getStrFloat($('#G1403_13_K').val())+getStrFloat($('#G1403_13_M').val())+getStrFloat($('#G1403_13_O').val())-getStrFloat($('#G1403_13_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_13_R($('#G1403_13_R'));
    $('#G1403_14_E').val(getNumToString(getRate(getStrFloat($('#G1403_14_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_14_E($('#G1403_14_E'));
    $('#G1403_14_R').val(getNumToString(getRate((getStrFloat($('#G1403_14_D').val())+getStrFloat($('#G1403_14_K').val())+getStrFloat($('#G1403_14_M').val())+getStrFloat($('#G1403_14_O').val())-getStrFloat($('#G1403_14_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_14_R($('#G1403_14_R'));
    $('#G1403_15_E').val(getNumToString(getRate(getStrFloat($('#G1403_15_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_15_E($('#G1403_15_E'));
    $('#G1403_15_R').val(getNumToString(getRate((getStrFloat($('#G1403_15_D').val())+getStrFloat($('#G1403_15_K').val())+getStrFloat($('#G1403_15_M').val())+getStrFloat($('#G1403_15_O').val())-getStrFloat($('#G1403_15_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_15_R($('#G1403_15_R'));
    $('#G1403_16_E').val(getNumToString(getRate(getStrFloat($('#G1403_16_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_16_E($('#G1403_16_E'));
    $('#G1403_16_R').val(getNumToString(getRate((getStrFloat($('#G1403_16_D').val())+getStrFloat($('#G1403_16_K').val())+getStrFloat($('#G1403_16_M').val())+getStrFloat($('#G1403_16_O').val())-getStrFloat($('#G1403_16_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_16_R($('#G1403_16_R'));
    $('#G1403_17_E').val(getNumToString(getRate(getStrFloat($('#G1403_17_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_17_E($('#G1403_17_E'));
    $('#G1403_17_R').val(getNumToString(getRate((getStrFloat($('#G1403_17_D').val())+getStrFloat($('#G1403_17_K').val())+getStrFloat($('#G1403_17_M').val())+getStrFloat($('#G1403_17_O').val())-getStrFloat($('#G1403_17_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_17_R($('#G1403_17_R'));
    $('#G1403_18_E').val(getNumToString(getRate(getStrFloat($('#G1403_18_D').val())/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_18_E($('#G1403_18_E'));
    $('#G1403_18_R').val(getNumToString(getRate((getStrFloat($('#G1403_18_D').val())+getStrFloat($('#G1403_18_K').val())+getStrFloat($('#G1403_18_M').val())+getStrFloat($('#G1403_18_O').val())-getStrFloat($('#G1403_18_S').val()))/getStrFloat($('#G1403_19_B').val())*100,4)/100,4));
    FG1403_18_R($('#G1403_18_R'));
}


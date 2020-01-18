/*GF0401_5_A*/
function FGF0401_5_A(obj){
    showStr(obj);
    $('#GF0401_5_A').val(getNumToString(getStrFloat($('#GF0401_6_A').val())+getStrFloat($('#GF0401_7_A').val())+getStrFloat($('#GF0401_8_A').val()),2));
}

/*GF0401_6_A*/
function FGF0401_6_A(obj){
    showStr(obj);
    $('#GF0401_5_A').val(getNumToString(getStrFloat($('#GF0401_6_A').val())+getStrFloat($('#GF0401_7_A').val())+getStrFloat($('#GF0401_8_A').val()),2));
    FGF0401_5_A($('#GF0401_5_A'));
}

/*GF0401_7_A*/
function FGF0401_7_A(obj){
    showStr(obj);
    $('#GF0401_5_A').val(getNumToString(getStrFloat($('#GF0401_6_A').val())+getStrFloat($('#GF0401_7_A').val())+getStrFloat($('#GF0401_8_A').val()),2));
    FGF0401_5_A($('#GF0401_5_A'));
}

/*GF0401_8_A*/
function FGF0401_8_A(obj){
    showStr(obj);
    $('#GF0401_5_A').val(getNumToString(getStrFloat($('#GF0401_6_A').val())+getStrFloat($('#GF0401_7_A').val())+getStrFloat($('#GF0401_8_A').val()),2));
    FGF0401_5_A($('#GF0401_5_A'));
}

/*GF0401_9_A*/
function FGF0401_9_A(obj){
    showStr(obj);
}

/*GF0401_10_A*/
function FGF0401_10_A(obj){
    showStr(obj);
}


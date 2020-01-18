/*G0105_6_A*/
function FG0105_6_A(obj){
    showStr(obj);
}

/*G0105_6_B*/
function FG0105_6_B(obj){
    showStr(obj);
}

/*G0105_6_C*/
function FG0105_6_C(obj){
    showStr(obj);
}

/*G0105_7_A*/
function FG0105_7_A(obj){
    showStr(obj);
    $('#G0105_11_A').val(getNumToString(getStrFloat($('#G0105_7_A').val())+getStrFloat($('#G0105_8_A').val()),2));
    FG0105_11_A($('#G0105_11_A'));
}

/*G0105_7_B*/
function FG0105_7_B(obj){
    showStr(obj);
}

/*G0105_7_C*/
function FG0105_7_C(obj){
    showStr(obj);
}

/*G0105_8_A*/
function FG0105_8_A(obj){
    showStr(obj);
    $('#G0105_11_A').val(getNumToString(getStrFloat($('#G0105_7_A').val())+getStrFloat($('#G0105_8_A').val()),2));
    FG0105_11_A($('#G0105_11_A'));
}

/*G0105_8_B*/
function FG0105_8_B(obj){
    showStr(obj);
}

/*G0105_8_C*/
function FG0105_8_C(obj){
    showStr(obj);
}

/*G0105_9_A*/
function FG0105_9_A(obj){
    showStr(obj);
}

/*G0105_9_B*/
function FG0105_9_B(obj){
    showStr(obj);
}

/*G0105_9_C*/
function FG0105_9_C(obj){
    showStr(obj);
}

/*G0105_10_A*/
function FG0105_10_A(obj){
    showStr(obj);
}

/*G0105_10_B*/
function FG0105_10_B(obj){
    showStr(obj);
}

/*G0105_10_C*/
function FG0105_10_C(obj){
    showStr(obj);
}

/*G0105_11_A*/
function FG0105_11_A(obj){
    showStr(obj);
    $('#G0105_11_A').val(getNumToString(getStrFloat($('#G0105_7_A').val())+getStrFloat($('#G0105_8_A').val()),2));
    $('#G0105_13_A').val(getNumToString(getRate(getStrFloat($('#G0105_11_A').val())/getStrFloat($('#G0105_12_A').val())*100,4)/100,4));
    FG0105_13_A($('#G0105_13_A'));
}

/*G0105_11_B*/
function FG0105_11_B(obj){
    showStr(obj);
}

/*G0105_11_C*/
function FG0105_11_C(obj){
    showStr(obj);
}

/*G0105_12_A*/
function FG0105_12_A(obj){
    showStr(obj);
    $('#G0105_13_A').val(getNumToString(getRate(getStrFloat($('#G0105_11_A').val())/getStrFloat($('#G0105_12_A').val())*100,4)/100,4));
    FG0105_13_A($('#G0105_13_A'));
}

/*G0105_12_B*/
function FG0105_12_B(obj){
    showStr(obj);
}

/*G0105_12_C*/
function FG0105_12_C(obj){
    showStr(obj);
}

/*G0105_13_A*/
function FG0105_13_A(obj){
    showStr(obj);
    $('#G0105_13_A').val(getNumToString(getRate(getStrFloat($('#G0105_11_A').val())/getStrFloat($('#G0105_12_A').val())*100,4)/100,4));
}

/*G0105_13_B*/
function FG0105_13_B(obj){
    showStr(obj);
}

/*G0105_13_C*/
function FG0105_13_C(obj){
    showStr(obj);
}


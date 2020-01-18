/*G0102_6_A*/
function FG0102_6_A(obj){
    showStr(obj);
    $('#G0102_6_A').val(getNumToString((getStrFloat($('#G0102_7_A').val())+getStrFloat($('#G0102_8_A').val())+getStrFloat($('#G0102_9_A').val())+getStrFloat($('#G0102_10_A').val())+getStrFloat($('#G0102_11_A').val())),2));
    $('#G0102_6_C').val(getNumToString((getStrFloat($('#G0102_6_A').val())+getStrFloat($('#G0102_6_B').val())),2));
    FG0102_6_C($('#G0102_6_C'));
}

/*G0102_6_B*/
function FG0102_6_B(obj){
    showStr(obj);
    $('#G0102_6_B').val(getNumToString((getStrFloat($('#G0102_7_B').val())+getStrFloat($('#G0102_8_B').val())+getStrFloat($('#G0102_9_B').val())+getStrFloat($('#G0102_10_B').val())+getStrFloat($('#G0102_11_B').val())),2));
    $('#G0102_6_C').val(getNumToString((getStrFloat($('#G0102_6_A').val())+getStrFloat($('#G0102_6_B').val())),2));
    FG0102_6_C($('#G0102_6_C'));
}

/*G0102_6_C*/
function FG0102_6_C(obj){
    showStr(obj);
    $('#G0102_6_C').val(getNumToString((getStrFloat($('#G0102_6_A').val())+getStrFloat($('#G0102_6_B').val())),2));
}

/*G0102_7_A*/
function FG0102_7_A(obj){
    showStr(obj);
    $('#G0102_6_A').val(getNumToString((getStrFloat($('#G0102_7_A').val())+getStrFloat($('#G0102_8_A').val())+getStrFloat($('#G0102_9_A').val())+getStrFloat($('#G0102_10_A').val())+getStrFloat($('#G0102_11_A').val())),2));
    FG0102_6_A($('#G0102_6_A'));
    $('#G0102_7_C').val(getNumToString((getStrFloat($('#G0102_7_A').val())+getStrFloat($('#G0102_7_B').val())),2));
    FG0102_7_C($('#G0102_7_C'));
}

/*G0102_7_B*/
function FG0102_7_B(obj){
    showStr(obj);
    $('#G0102_6_B').val(getNumToString((getStrFloat($('#G0102_7_B').val())+getStrFloat($('#G0102_8_B').val())+getStrFloat($('#G0102_9_B').val())+getStrFloat($('#G0102_10_B').val())+getStrFloat($('#G0102_11_B').val())),2));
    FG0102_6_B($('#G0102_6_B'));
    $('#G0102_7_C').val(getNumToString((getStrFloat($('#G0102_7_A').val())+getStrFloat($('#G0102_7_B').val())),2));
    FG0102_7_C($('#G0102_7_C'));
}

/*G0102_7_C*/
function FG0102_7_C(obj){
    showStr(obj);
    $('#G0102_7_C').val(getNumToString((getStrFloat($('#G0102_7_A').val())+getStrFloat($('#G0102_7_B').val())),2));
}

/*G0102_8_A*/
function FG0102_8_A(obj){
    showStr(obj);
    $('#G0102_6_A').val(getNumToString((getStrFloat($('#G0102_7_A').val())+getStrFloat($('#G0102_8_A').val())+getStrFloat($('#G0102_9_A').val())+getStrFloat($('#G0102_10_A').val())+getStrFloat($('#G0102_11_A').val())),2));
    FG0102_6_A($('#G0102_6_A'));
    $('#G0102_8_C').val(getNumToString((getStrFloat($('#G0102_8_A').val())+getStrFloat($('#G0102_8_B').val())),2));
    FG0102_8_C($('#G0102_8_C'));
}

/*G0102_8_B*/
function FG0102_8_B(obj){
    showStr(obj);
    $('#G0102_6_B').val(getNumToString((getStrFloat($('#G0102_7_B').val())+getStrFloat($('#G0102_8_B').val())+getStrFloat($('#G0102_9_B').val())+getStrFloat($('#G0102_10_B').val())+getStrFloat($('#G0102_11_B').val())),2));
    FG0102_6_B($('#G0102_6_B'));
    $('#G0102_8_C').val(getNumToString((getStrFloat($('#G0102_8_A').val())+getStrFloat($('#G0102_8_B').val())),2));
    FG0102_8_C($('#G0102_8_C'));
}

/*G0102_8_C*/
function FG0102_8_C(obj){
    showStr(obj);
    $('#G0102_8_C').val(getNumToString((getStrFloat($('#G0102_8_A').val())+getStrFloat($('#G0102_8_B').val())),2));
}

/*G0102_9_A*/
function FG0102_9_A(obj){
    showStr(obj);
    $('#G0102_6_A').val(getNumToString((getStrFloat($('#G0102_7_A').val())+getStrFloat($('#G0102_8_A').val())+getStrFloat($('#G0102_9_A').val())+getStrFloat($('#G0102_10_A').val())+getStrFloat($('#G0102_11_A').val())),2));
    FG0102_6_A($('#G0102_6_A'));
    $('#G0102_9_C').val(getNumToString((getStrFloat($('#G0102_9_A').val())+getStrFloat($('#G0102_9_B').val())),2));
    FG0102_9_C($('#G0102_9_C'));
}

/*G0102_9_B*/
function FG0102_9_B(obj){
    showStr(obj);
    $('#G0102_6_B').val(getNumToString((getStrFloat($('#G0102_7_B').val())+getStrFloat($('#G0102_8_B').val())+getStrFloat($('#G0102_9_B').val())+getStrFloat($('#G0102_10_B').val())+getStrFloat($('#G0102_11_B').val())),2));
    FG0102_6_B($('#G0102_6_B'));
    $('#G0102_9_C').val(getNumToString((getStrFloat($('#G0102_9_A').val())+getStrFloat($('#G0102_9_B').val())),2));
    FG0102_9_C($('#G0102_9_C'));
}

/*G0102_9_C*/
function FG0102_9_C(obj){
    showStr(obj);
    $('#G0102_9_C').val(getNumToString((getStrFloat($('#G0102_9_A').val())+getStrFloat($('#G0102_9_B').val())),2));
}

/*G0102_10_A*/
function FG0102_10_A(obj){
    showStr(obj);
    $('#G0102_6_A').val(getNumToString((getStrFloat($('#G0102_7_A').val())+getStrFloat($('#G0102_8_A').val())+getStrFloat($('#G0102_9_A').val())+getStrFloat($('#G0102_10_A').val())+getStrFloat($('#G0102_11_A').val())),2));
    FG0102_6_A($('#G0102_6_A'));
    $('#G0102_10_C').val(getNumToString((getStrFloat($('#G0102_10_A').val())+getStrFloat($('#G0102_10_B').val())),2));
    FG0102_10_C($('#G0102_10_C'));
}

/*G0102_10_B*/
function FG0102_10_B(obj){
    showStr(obj);
    $('#G0102_6_B').val(getNumToString((getStrFloat($('#G0102_7_B').val())+getStrFloat($('#G0102_8_B').val())+getStrFloat($('#G0102_9_B').val())+getStrFloat($('#G0102_10_B').val())+getStrFloat($('#G0102_11_B').val())),2));
    FG0102_6_B($('#G0102_6_B'));
    $('#G0102_10_C').val(getNumToString((getStrFloat($('#G0102_10_A').val())+getStrFloat($('#G0102_10_B').val())),2));
    FG0102_10_C($('#G0102_10_C'));
}

/*G0102_10_C*/
function FG0102_10_C(obj){
    showStr(obj);
    $('#G0102_10_C').val(getNumToString((getStrFloat($('#G0102_10_A').val())+getStrFloat($('#G0102_10_B').val())),2));
}

/*G0102_11_A*/
function FG0102_11_A(obj){
    showStr(obj);
    $('#G0102_6_A').val(getNumToString((getStrFloat($('#G0102_7_A').val())+getStrFloat($('#G0102_8_A').val())+getStrFloat($('#G0102_9_A').val())+getStrFloat($('#G0102_10_A').val())+getStrFloat($('#G0102_11_A').val())),2));
    FG0102_6_A($('#G0102_6_A'));
    $('#G0102_11_C').val(getNumToString((getStrFloat($('#G0102_11_A').val())+getStrFloat($('#G0102_11_B').val())),2));
    FG0102_11_C($('#G0102_11_C'));
}

/*G0102_11_B*/
function FG0102_11_B(obj){
    showStr(obj);
    $('#G0102_6_B').val(getNumToString((getStrFloat($('#G0102_7_B').val())+getStrFloat($('#G0102_8_B').val())+getStrFloat($('#G0102_9_B').val())+getStrFloat($('#G0102_10_B').val())+getStrFloat($('#G0102_11_B').val())),2));
    FG0102_6_B($('#G0102_6_B'));
    $('#G0102_11_C').val(getNumToString((getStrFloat($('#G0102_11_A').val())+getStrFloat($('#G0102_11_B').val())),2));
    FG0102_11_C($('#G0102_11_C'));
}

/*G0102_11_C*/
function FG0102_11_C(obj){
    showStr(obj);
    $('#G0102_11_C').val(getNumToString((getStrFloat($('#G0102_11_A').val())+getStrFloat($('#G0102_11_B').val())),2));
}


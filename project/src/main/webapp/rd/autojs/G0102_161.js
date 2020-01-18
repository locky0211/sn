/*G0102_6_A*/
function FG0102_6_A(obj){
    showStr(obj);
    $('#G0102_6_A').val(getNumToString((getStrFloat($('#G0102_7_A').val())+getStrFloat($('#G0102_10_A').val())),2));
}

/*G0102_7_A*/
function FG0102_7_A(obj){
    showStr(obj);
    $('#G0102_6_A').val(getNumToString((getStrFloat($('#G0102_7_A').val())+getStrFloat($('#G0102_10_A').val())),2));
    FG0102_6_A($('#G0102_6_A'));
    $('#G0102_7_A').val(getNumToString((getStrFloat($('#G0102_8_A').val())+getStrFloat($('#G0102_9_A').val())),2));
}

/*G0102_8_A*/
function FG0102_8_A(obj){
    showStr(obj);
    $('#G0102_7_A').val(getNumToString((getStrFloat($('#G0102_8_A').val())+getStrFloat($('#G0102_9_A').val())),2));
    FG0102_7_A($('#G0102_7_A'));
}

/*G0102_9_A*/
function FG0102_9_A(obj){
    showStr(obj);
    $('#G0102_7_A').val(getNumToString((getStrFloat($('#G0102_8_A').val())+getStrFloat($('#G0102_9_A').val())),2));
    FG0102_7_A($('#G0102_7_A'));
}

/*G0102_10_A*/
function FG0102_10_A(obj){
    showStr(obj);
    $('#G0102_6_A').val(getNumToString((getStrFloat($('#G0102_7_A').val())+getStrFloat($('#G0102_10_A').val())),2));
    FG0102_6_A($('#G0102_6_A'));
    $('#G0102_10_A').val(getNumToString((getStrFloat($('#G0102_11_A').val())+getStrFloat($('#G0102_12_A').val())+getStrFloat($('#G0102_13_A').val())),2));
}

/*G0102_11_A*/
function FG0102_11_A(obj){
    showStr(obj);
    $('#G0102_10_A').val(getNumToString((getStrFloat($('#G0102_11_A').val())+getStrFloat($('#G0102_12_A').val())+getStrFloat($('#G0102_13_A').val())),2));
    FG0102_10_A($('#G0102_10_A'));
}

/*G0102_12_A*/
function FG0102_12_A(obj){
    showStr(obj);
    $('#G0102_10_A').val(getNumToString((getStrFloat($('#G0102_11_A').val())+getStrFloat($('#G0102_12_A').val())+getStrFloat($('#G0102_13_A').val())),2));
    FG0102_10_A($('#G0102_10_A'));
}

/*G0102_13_A*/
function FG0102_13_A(obj){
    showStr(obj);
    $('#G0102_10_A').val(getNumToString((getStrFloat($('#G0102_11_A').val())+getStrFloat($('#G0102_12_A').val())+getStrFloat($('#G0102_13_A').val())),2));
    FG0102_10_A($('#G0102_10_A'));
}

/*G0102_14_A*/
function FG0102_14_A(obj){
    showStr(obj);
}

/*G0102_15_A*/
function FG0102_15_A(obj){
    showStr(obj);
}


/*G4B03_5_A*/
function FG4B03_5_A(obj){
    showStr(obj);
    $('#G4B03_10_A').val(getNumToString(getStrFloat($('#G4B03_5_A').val())+getStrFloat($('#G4B03_8_A').val())+getStrFloat($('#G4B03_9_A').val()),2));
    FG4B03_10_A($('#G4B03_10_A'));
    $('#G4B03_5_A').val(getNumToString(getStrFloat($('#G4B03_6_A').val()),2));
}

/*G4B03_5_B*/
function FG4B03_5_B(obj){
    showStr(obj);
    $('#G4B03_5_B').val(getNumToString(getStrFloat($('#G4B03_6_B').val())+getStrFloat($('#G4B03_7_B').val()),2));
    $('#G4B03_10_B').val(getNumToString(getStrFloat($('#G4B03_5_B').val())+getStrFloat($('#G4B03_8_B').val())+getStrFloat($('#G4B03_9_B').val()),2));
    FG4B03_10_B($('#G4B03_10_B'));
}

/*G4B03_6_A*/
function FG4B03_6_A(obj){
    showStr(obj);
    $('#G4B03_5_A').val(getNumToString(getStrFloat($('#G4B03_6_A').val()),2));
    FG4B03_5_A($('#G4B03_5_A'));
}

/*G4B03_6_B*/
function FG4B03_6_B(obj){
    showStr(obj);
    $('#G4B03_5_B').val(getNumToString(getStrFloat($('#G4B03_6_B').val())+getStrFloat($('#G4B03_7_B').val()),2));
    FG4B03_5_B($('#G4B03_5_B'));
}

/*G4B03_7_A*/
function FG4B03_7_A(obj){
    showStr(obj);
}

/*G4B03_7_B*/
function FG4B03_7_B(obj){
    showStr(obj);
    $('#G4B03_5_B').val(getNumToString(getStrFloat($('#G4B03_6_B').val())+getStrFloat($('#G4B03_7_B').val()),2));
    FG4B03_5_B($('#G4B03_5_B'));
}

/*G4B03_8_A*/
function FG4B03_8_A(obj){
    showStr(obj);
    $('#G4B03_10_A').val(getNumToString(getStrFloat($('#G4B03_5_A').val())+getStrFloat($('#G4B03_8_A').val())+getStrFloat($('#G4B03_9_A').val()),2));
    FG4B03_10_A($('#G4B03_10_A'));
}

/*G4B03_8_B*/
function FG4B03_8_B(obj){
    showStr(obj);
    $('#G4B03_10_B').val(getNumToString(getStrFloat($('#G4B03_5_B').val())+getStrFloat($('#G4B03_8_B').val())+getStrFloat($('#G4B03_9_B').val()),2));
    FG4B03_10_B($('#G4B03_10_B'));
}

/*G4B03_9_A*/
function FG4B03_9_A(obj){
    showStr(obj);
    $('#G4B03_10_A').val(getNumToString(getStrFloat($('#G4B03_5_A').val())+getStrFloat($('#G4B03_8_A').val())+getStrFloat($('#G4B03_9_A').val()),2));
    FG4B03_10_A($('#G4B03_10_A'));
}

/*G4B03_9_B*/
function FG4B03_9_B(obj){
    showStr(obj);
    $('#G4B03_10_B').val(getNumToString(getStrFloat($('#G4B03_5_B').val())+getStrFloat($('#G4B03_8_B').val())+getStrFloat($('#G4B03_9_B').val()),2));
    FG4B03_10_B($('#G4B03_10_B'));
}

/*G4B03_10_A*/
function FG4B03_10_A(obj){
    showStr(obj);
    $('#G4B03_10_A').val(getNumToString(getStrFloat($('#G4B03_5_A').val())+getStrFloat($('#G4B03_8_A').val())+getStrFloat($('#G4B03_9_A').val()),2));
}

/*G4B03_10_B*/
function FG4B03_10_B(obj){
    showStr(obj);
    $('#G4B03_10_B').val(getNumToString(getStrFloat($('#G4B03_5_B').val())+getStrFloat($('#G4B03_8_B').val())+getStrFloat($('#G4B03_9_B').val()),2));
}


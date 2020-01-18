/*G4A01a_5_A*/
function FG4A01a_5_A(obj){
    showStr(obj);
	if(getStrFloat($('#G4A01a_6_A').val())-getStrFloat($('#G4A01a_5_A').val())>0){
    $('#G4A01a_9_A').val(getNumToString(getStrFloat($('#G4A01a_6_A').val())-getStrFloat($('#G4A01a_5_A').val()),2));
    FG4A01a_9_A($('#G4A01a_9_A'));
	}else{
    $('#G4A01a_9_A').val(getNumToString(0,2));
    FG4A01a_9_A($('#G4A01a_9_A'));
	}
	if(getStrFloat($('#G4A01a_5_A').val())-getStrFloat($('#G4A01a_6_A').val())>0){
    $('#G4A01a_10_A').val(getNumToString(getStrFloat($('#G4A01a_5_A').val())-getStrFloat($('#G4A01a_6_A').val()),2));
    FG4A01a_10_A($('#G4A01a_10_A'));
	}else{
    $('#G4A01a_10_A').val(getNumToString(0,2));
    FG4A01a_10_A($('#G4A01a_10_A'));
	}
}

/*G4A01a_6_A*/
function FG4A01a_6_A(obj){
    showStr(obj);
    $('#G4A01a_6_A').val(getNumToString(Math.max(getStrFloat($('#G4A01a_7_A').val()),getStrFloat($('#G4A01a_8_A').val())),2));
	if(getStrFloat($('#G4A01a_6_A').val())-getStrFloat($('#G4A01a_5_A').val())>0){
    $('#G4A01a_9_A').val(getNumToString(getStrFloat($('#G4A01a_6_A').val())-getStrFloat($('#G4A01a_5_A').val()),2));
    FG4A01a_9_A($('#G4A01a_9_A'));
	}else{
    $('#G4A01a_9_A').val(getNumToString(0,2));
    FG4A01a_9_A($('#G4A01a_9_A'));
	}
	if(getStrFloat($('#G4A01a_5_A').val())-getStrFloat($('#G4A01a_6_A').val())>0){
    $('#G4A01a_10_A').val(getNumToString(getStrFloat($('#G4A01a_5_A').val())-getStrFloat($('#G4A01a_6_A').val()),2));
    FG4A01a_10_A($('#G4A01a_10_A'));
	}else{
    $('#G4A01a_10_A').val(getNumToString(0,2));
    FG4A01a_10_A($('#G4A01a_10_A'));
	}
}

/*G4A01a_7_A*/
function FG4A01a_7_A(obj){
    showStr(obj);
    $('#G4A01a_6_A').val(getNumToString(Math.max(getStrFloat($('#G4A01a_7_A').val()),getStrFloat($('#G4A01a_8_A').val())),2));
    FG4A01a_6_A($('#G4A01a_6_A'));
    $('#G4A01a_7_A').val(getNumToString((getStrFloat($('#G4A01a_17_A').val())+getStrFloat($('#G4A01a_18_A').val())+getStrFloat($('#G4A01a_19_A').val()))*100/100,2));
}

/*G4A01a_8_A*/
function FG4A01a_8_A(obj){
    showStr(obj);
    $('#G4A01a_6_A').val(getNumToString(Math.max(getStrFloat($('#G4A01a_7_A').val()),getStrFloat($('#G4A01a_8_A').val())),2));
    FG4A01a_6_A($('#G4A01a_6_A'));
}

/*G4A01a_9_A*/
function FG4A01a_9_A(obj){
    showStr(obj);
	if(getStrFloat($('#G4A01a_6_A').val())-getStrFloat($('#G4A01a_5_A').val())>0){
    $('#G4A01a_9_A').val(getNumToString(getStrFloat($('#G4A01a_6_A').val())-getStrFloat($('#G4A01a_5_A').val()),2));
	}else{
    $('#G4A01a_9_A').val(getNumToString(0,2));
	}
}

/*G4A01a_10_A*/
function FG4A01a_10_A(obj){
    showStr(obj);
	if(getStrFloat($('#G4A01a_5_A').val())-getStrFloat($('#G4A01a_6_A').val())>0){
    $('#G4A01a_10_A').val(getNumToString(getStrFloat($('#G4A01a_5_A').val())-getStrFloat($('#G4A01a_6_A').val()),2));
	}else{
    $('#G4A01a_10_A').val(getNumToString(0,2));
	}
    $('#G4A01a_13_A').val(getNumToString(Math.min(getStrFloat($('#G4A01a_10_A').val()),getStrFloat($('#G4A01a_11_A').val())),2));
    FG4A01a_13_A($('#G4A01a_13_A'));
}

/*G4A01a_11_A*/
function FG4A01a_11_A(obj){
    showStr(obj);
    $('#G4A01a_11_A').val(getNumToString(getStrFloat($('#G4A01a_12_A').val())*1.25/100,2));
    $('#G4A01a_13_A').val(getNumToString(Math.min(getStrFloat($('#G4A01a_10_A').val()),getStrFloat($('#G4A01a_11_A').val())),2));
    FG4A01a_13_A($('#G4A01a_13_A'));
}

/*G4A01a_12_A*/
function FG4A01a_12_A(obj){
    showStr(obj);
    $('#G4A01a_11_A').val(getNumToString(getStrFloat($('#G4A01a_12_A').val())*1.25/100,2));
    FG4A01a_11_A($('#G4A01a_11_A'));
}

/*G4A01a_13_A*/
function FG4A01a_13_A(obj){
    showStr(obj);
    $('#G4A01a_13_A').val(getNumToString(Math.min(getStrFloat($('#G4A01a_10_A').val()),getStrFloat($('#G4A01a_11_A').val())),2));
}

/*G4A01a_14_A*/
function FG4A01a_14_A(obj){
    showStr(obj);
    $('#G4A01a_14_A').val(getNumToString(getStrFloat($('#G4A01a_15_A').val())+getStrFloat($('#G4A01a_16_A').val())+getStrFloat($('#G4A01a_17_A').val())+getStrFloat($('#G4A01a_18_A').val())+getStrFloat($('#G4A01a_19_A').val()),2));
}

/*G4A01a_15_A*/
function FG4A01a_15_A(obj){
    showStr(obj);
    $('#G4A01a_14_A').val(getNumToString(getStrFloat($('#G4A01a_15_A').val())+getStrFloat($('#G4A01a_16_A').val())+getStrFloat($('#G4A01a_17_A').val())+getStrFloat($('#G4A01a_18_A').val())+getStrFloat($('#G4A01a_19_A').val()),2));
    FG4A01a_14_A($('#G4A01a_14_A'));
}

/*G4A01a_16_A*/
function FG4A01a_16_A(obj){
    showStr(obj);
    $('#G4A01a_14_A').val(getNumToString(getStrFloat($('#G4A01a_15_A').val())+getStrFloat($('#G4A01a_16_A').val())+getStrFloat($('#G4A01a_17_A').val())+getStrFloat($('#G4A01a_18_A').val())+getStrFloat($('#G4A01a_19_A').val()),2));
    FG4A01a_14_A($('#G4A01a_14_A'));
}

/*G4A01a_17_A*/
function FG4A01a_17_A(obj){
    showStr(obj);
    $('#G4A01a_7_A').val(getNumToString((getStrFloat($('#G4A01a_17_A').val())+getStrFloat($('#G4A01a_18_A').val())+getStrFloat($('#G4A01a_19_A').val()))*100/100,2));
    FG4A01a_7_A($('#G4A01a_7_A'));
    $('#G4A01a_14_A').val(getNumToString(getStrFloat($('#G4A01a_15_A').val())+getStrFloat($('#G4A01a_16_A').val())+getStrFloat($('#G4A01a_17_A').val())+getStrFloat($('#G4A01a_18_A').val())+getStrFloat($('#G4A01a_19_A').val()),2));
    FG4A01a_14_A($('#G4A01a_14_A'));
}

/*G4A01a_18_A*/
function FG4A01a_18_A(obj){
    showStr(obj);
    $('#G4A01a_7_A').val(getNumToString((getStrFloat($('#G4A01a_17_A').val())+getStrFloat($('#G4A01a_18_A').val())+getStrFloat($('#G4A01a_19_A').val()))*100/100,2));
    FG4A01a_7_A($('#G4A01a_7_A'));
    $('#G4A01a_14_A').val(getNumToString(getStrFloat($('#G4A01a_15_A').val())+getStrFloat($('#G4A01a_16_A').val())+getStrFloat($('#G4A01a_17_A').val())+getStrFloat($('#G4A01a_18_A').val())+getStrFloat($('#G4A01a_19_A').val()),2));
    FG4A01a_14_A($('#G4A01a_14_A'));
}

/*G4A01a_19_A*/
function FG4A01a_19_A(obj){
    showStr(obj);
    $('#G4A01a_7_A').val(getNumToString((getStrFloat($('#G4A01a_17_A').val())+getStrFloat($('#G4A01a_18_A').val())+getStrFloat($('#G4A01a_19_A').val()))*100/100,2));
    FG4A01a_7_A($('#G4A01a_7_A'));
    $('#G4A01a_14_A').val(getNumToString(getStrFloat($('#G4A01a_15_A').val())+getStrFloat($('#G4A01a_16_A').val())+getStrFloat($('#G4A01a_17_A').val())+getStrFloat($('#G4A01a_18_A').val())+getStrFloat($('#G4A01a_19_A').val()),2));
    FG4A01a_14_A($('#G4A01a_14_A'));
}


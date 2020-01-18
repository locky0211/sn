/*G0109_6_A*/
function FG0109_6_A(obj){
    showStr(obj);
    $('#G0109_6_C').val(getNumToString(getStrFloat($('#G0109_6_A').val())+getStrFloat($('#G0109_6_B').val()),2));
    FG0109_6_C($('#G0109_6_C'));
}

/*G0109_6_B*/
function FG0109_6_B(obj){
    showStr(obj);
    $('#G0109_6_C').val(getNumToString(getStrFloat($('#G0109_6_A').val())+getStrFloat($('#G0109_6_B').val()),2));
    FG0109_6_C($('#G0109_6_C'));
}

/*G0109_6_C*/
function FG0109_6_C(obj){
    showStr(obj);
    $('#G0109_6_C').val(getNumToString(getStrFloat($('#G0109_6_A').val())+getStrFloat($('#G0109_6_B').val()),2));
}

/*G0109_7_A*/
function FG0109_7_A(obj){
    showStr(obj);
    $('#G0109_7_C').val(getNumToString(getStrFloat($('#G0109_7_A').val())+getStrFloat($('#G0109_7_B').val()),2));
    FG0109_7_C($('#G0109_7_C'));
}

/*G0109_7_B*/
function FG0109_7_B(obj){
    showStr(obj);
    $('#G0109_7_C').val(getNumToString(getStrFloat($('#G0109_7_A').val())+getStrFloat($('#G0109_7_B').val()),2));
    FG0109_7_C($('#G0109_7_C'));
}

/*G0109_7_C*/
function FG0109_7_C(obj){
    showStr(obj);
    $('#G0109_7_C').val(getNumToString(getStrFloat($('#G0109_7_A').val())+getStrFloat($('#G0109_7_B').val()),2));
}

/*G0109_8_A*/
function FG0109_8_A(obj){
    showStr(obj);
    $('#G0109_8_C').val(getNumToString(getStrFloat($('#G0109_8_A').val())+getStrFloat($('#G0109_8_B').val()),2));
    FG0109_8_C($('#G0109_8_C'));
}

/*G0109_8_B*/
function FG0109_8_B(obj){
    showStr(obj);
    $('#G0109_8_C').val(getNumToString(getStrFloat($('#G0109_8_A').val())+getStrFloat($('#G0109_8_B').val()),2));
    FG0109_8_C($('#G0109_8_C'));
}

/*G0109_8_C*/
function FG0109_8_C(obj){
    showStr(obj);
    $('#G0109_8_C').val(getNumToString(getStrFloat($('#G0109_8_A').val())+getStrFloat($('#G0109_8_B').val()),2));
}

/*G0109_9_A*/
function FG0109_9_A(obj){
    showStr(obj);
    $('#G0109_9_C').val(getNumToString(getStrFloat($('#G0109_9_A').val())+getStrFloat($('#G0109_9_B').val()),2));
    FG0109_9_C($('#G0109_9_C'));
}

/*G0109_9_B*/
function FG0109_9_B(obj){
    showStr(obj);
    $('#G0109_9_C').val(getNumToString(getStrFloat($('#G0109_9_A').val())+getStrFloat($('#G0109_9_B').val()),2));
    FG0109_9_C($('#G0109_9_C'));
}

/*G0109_9_C*/
function FG0109_9_C(obj){
    showStr(obj);
    $('#G0109_9_C').val(getNumToString(getStrFloat($('#G0109_9_A').val())+getStrFloat($('#G0109_9_B').val()),2));
}

/*G0109_10_A*/
function FG0109_10_A(obj){
    showStr(obj);
    $('#G0109_10_C').val(getNumToString(getStrFloat($('#G0109_10_A').val())+getStrFloat($('#G0109_10_B').val()),2));
    FG0109_10_C($('#G0109_10_C'));
	if(getStrFloat($('#G0109_10_A').val())==0){
    $('#G0109_14_A').val(getNumToString(0,4));
    FG0109_14_A($('#G0109_14_A'));
	}else{
    $('#G0109_14_A').val(getNumToString(getStrFloat($('#G0109_12_A').val())/getStrFloat($('#G0109_10_A').val()),4));
    FG0109_14_A($('#G0109_14_A'));
	}
}

/*G0109_10_B*/
function FG0109_10_B(obj){
    showStr(obj);
    $('#G0109_10_C').val(getNumToString(getStrFloat($('#G0109_10_A').val())+getStrFloat($('#G0109_10_B').val()),2));
    FG0109_10_C($('#G0109_10_C'));
	if(getStrFloat($('#G0109_10_B').val())==0){
    $('#G0109_14_B').val(getNumToString(0,4));
    FG0109_14_B($('#G0109_14_B'));
	}else{
    $('#G0109_14_B').val(getNumToString(getStrFloat($('#G0109_12_B').val())/getStrFloat($('#G0109_10_B').val()),4));
    FG0109_14_B($('#G0109_14_B'));
	}
}

/*G0109_10_C*/
function FG0109_10_C(obj){
    showStr(obj);
    $('#G0109_10_C').val(getNumToString(getStrFloat($('#G0109_10_A').val())+getStrFloat($('#G0109_10_B').val()),2));
	if(getStrFloat($('#G0109_10_C').val())==0){
    $('#G0109_14_C').val(getNumToString(0,4));
    FG0109_14_C($('#G0109_14_C'));
	}else{
    $('#G0109_14_C').val(getNumToString(getStrFloat($('#G0109_12_C').val())/getStrFloat($('#G0109_10_C').val()),4));
    FG0109_14_C($('#G0109_14_C'));
	}
}

/*G0109_11_A*/
function FG0109_11_A(obj){
    showStr(obj);
    $('#G0109_11_C').val(getNumToString(getStrFloat($('#G0109_11_A').val())+getStrFloat($('#G0109_11_B').val()),2));
    FG0109_11_C($('#G0109_11_C'));
	if(getStrFloat($('#G0109_11_A').val())==0){
    $('#G0109_15_A').val(getNumToString(0,4));
    FG0109_15_A($('#G0109_15_A'));
	}else{
    $('#G0109_15_A').val(getNumToString(getStrFloat($('#G0109_13_A').val())/getStrFloat($('#G0109_11_A').val()),4));
    FG0109_15_A($('#G0109_15_A'));
	}
}

/*G0109_11_B*/
function FG0109_11_B(obj){
    showStr(obj);
    $('#G0109_11_C').val(getNumToString(getStrFloat($('#G0109_11_A').val())+getStrFloat($('#G0109_11_B').val()),2));
    FG0109_11_C($('#G0109_11_C'));
	if(getStrFloat($('#G0109_11_B').val())==0){
    $('#G0109_15_B').val(getNumToString(0,4));
    FG0109_15_B($('#G0109_15_B'));
	}else{
    $('#G0109_15_B').val(getNumToString(getStrFloat($('#G0109_13_B').val())/getStrFloat($('#G0109_11_B').val()),4));
    FG0109_15_B($('#G0109_15_B'));
	}
}

/*G0109_11_C*/
function FG0109_11_C(obj){
    showStr(obj);
    $('#G0109_11_C').val(getNumToString(getStrFloat($('#G0109_11_A').val())+getStrFloat($('#G0109_11_B').val()),2));
	if(getStrFloat($('#G0109_11_C').val())==0){
    $('#G0109_15_C').val(getNumToString(0,4));
    FG0109_15_C($('#G0109_15_C'));
	}else{
    $('#G0109_15_C').val(getNumToString(getStrFloat($('#G0109_13_C').val())/getStrFloat($('#G0109_11_C').val()),4));
    FG0109_15_C($('#G0109_15_C'));
	}
}

/*G0109_12_A*/
function FG0109_12_A(obj){
    showStr(obj);
    $('#G0109_12_C').val(getNumToString(getStrFloat($('#G0109_12_A').val())+getStrFloat($('#G0109_12_B').val()),2));
    FG0109_12_C($('#G0109_12_C'));
	if(getStrFloat($('#G0109_10_A').val())==0){
    $('#G0109_14_A').val(getNumToString(0,4));
    FG0109_14_A($('#G0109_14_A'));
	}else{
    $('#G0109_14_A').val(getNumToString(getStrFloat($('#G0109_12_A').val())/getStrFloat($('#G0109_10_A').val()),4));
    FG0109_14_A($('#G0109_14_A'));
	}
}

/*G0109_12_B*/
function FG0109_12_B(obj){
    showStr(obj);
    $('#G0109_12_C').val(getNumToString(getStrFloat($('#G0109_12_A').val())+getStrFloat($('#G0109_12_B').val()),2));
    FG0109_12_C($('#G0109_12_C'));
	if(getStrFloat($('#G0109_10_B').val())==0){
    $('#G0109_14_B').val(getNumToString(0,4));
    FG0109_14_B($('#G0109_14_B'));
	}else{
    $('#G0109_14_B').val(getNumToString(getStrFloat($('#G0109_12_B').val())/getStrFloat($('#G0109_10_B').val()),4));
    FG0109_14_B($('#G0109_14_B'));
	}
}

/*G0109_12_C*/
function FG0109_12_C(obj){
    showStr(obj);
    $('#G0109_12_C').val(getNumToString(getStrFloat($('#G0109_12_A').val())+getStrFloat($('#G0109_12_B').val()),2));
	if(getStrFloat($('#G0109_10_C').val())==0){
    $('#G0109_14_C').val(getNumToString(0,4));
    FG0109_14_C($('#G0109_14_C'));
	}else{
    $('#G0109_14_C').val(getNumToString(getStrFloat($('#G0109_12_C').val())/getStrFloat($('#G0109_10_C').val()),4));
    FG0109_14_C($('#G0109_14_C'));
	}
}

/*G0109_13_A*/
function FG0109_13_A(obj){
    showStr(obj);
    $('#G0109_13_C').val(getNumToString(getStrFloat($('#G0109_13_A').val())+getStrFloat($('#G0109_13_B').val()),2));
    FG0109_13_C($('#G0109_13_C'));
	if(getStrFloat($('#G0109_11_A').val())==0){
    $('#G0109_15_A').val(getNumToString(0,4));
    FG0109_15_A($('#G0109_15_A'));
	}else{
    $('#G0109_15_A').val(getNumToString(getStrFloat($('#G0109_13_A').val())/getStrFloat($('#G0109_11_A').val()),4));
    FG0109_15_A($('#G0109_15_A'));
	}
}

/*G0109_13_B*/
function FG0109_13_B(obj){
    showStr(obj);
    $('#G0109_13_C').val(getNumToString(getStrFloat($('#G0109_13_A').val())+getStrFloat($('#G0109_13_B').val()),2));
    FG0109_13_C($('#G0109_13_C'));
	if(getStrFloat($('#G0109_11_B').val())==0){
    $('#G0109_15_B').val(getNumToString(0,4));
    FG0109_15_B($('#G0109_15_B'));
	}else{
    $('#G0109_15_B').val(getNumToString(getStrFloat($('#G0109_13_B').val())/getStrFloat($('#G0109_11_B').val()),4));
    FG0109_15_B($('#G0109_15_B'));
	}
}

/*G0109_13_C*/
function FG0109_13_C(obj){
    showStr(obj);
    $('#G0109_13_C').val(getNumToString(getStrFloat($('#G0109_13_A').val())+getStrFloat($('#G0109_13_B').val()),2));
	if(getStrFloat($('#G0109_11_C').val())==0){
    $('#G0109_15_C').val(getNumToString(0,4));
    FG0109_15_C($('#G0109_15_C'));
	}else{
    $('#G0109_15_C').val(getNumToString(getStrFloat($('#G0109_13_C').val())/getStrFloat($('#G0109_11_C').val()),4));
    FG0109_15_C($('#G0109_15_C'));
	}
}

/*G0109_14_A*/
function FG0109_14_A(obj){
    showStr(obj);
	if(getStrFloat($('#G0109_10_A').val())==0){
    $('#G0109_14_A').val(getNumToString(0,4));
	}else{
    $('#G0109_14_A').val(getNumToString(getStrFloat($('#G0109_12_A').val())/getStrFloat($('#G0109_10_A').val()),4));
	}
}

/*G0109_14_B*/
function FG0109_14_B(obj){
    showStr(obj);
	if(getStrFloat($('#G0109_10_B').val())==0){
    $('#G0109_14_B').val(getNumToString(0,4));
	}else{
    $('#G0109_14_B').val(getNumToString(getStrFloat($('#G0109_12_B').val())/getStrFloat($('#G0109_10_B').val()),4));
	}
}

/*G0109_14_C*/
function FG0109_14_C(obj){
    showStr(obj);
	if(getStrFloat($('#G0109_10_C').val())==0){
    $('#G0109_14_C').val(getNumToString(0,4));
	}else{
    $('#G0109_14_C').val(getNumToString(getStrFloat($('#G0109_12_C').val())/getStrFloat($('#G0109_10_C').val()),4));
	}
}

/*G0109_15_A*/
function FG0109_15_A(obj){
    showStr(obj);
	if(getStrFloat($('#G0109_11_A').val())==0){
    $('#G0109_15_A').val(getNumToString(0,4));
	}else{
    $('#G0109_15_A').val(getNumToString(getStrFloat($('#G0109_13_A').val())/getStrFloat($('#G0109_11_A').val()),4));
	}
}

/*G0109_15_B*/
function FG0109_15_B(obj){
    showStr(obj);
	if(getStrFloat($('#G0109_11_B').val())==0){
    $('#G0109_15_B').val(getNumToString(0,4));
	}else{
    $('#G0109_15_B').val(getNumToString(getStrFloat($('#G0109_13_B').val())/getStrFloat($('#G0109_11_B').val()),4));
	}
}

/*G0109_15_C*/
function FG0109_15_C(obj){
    showStr(obj);
	if(getStrFloat($('#G0109_11_C').val())==0){
    $('#G0109_15_C').val(getNumToString(0,4));
	}else{
    $('#G0109_15_C').val(getNumToString(getStrFloat($('#G0109_13_C').val())/getStrFloat($('#G0109_11_C').val()),4));
	}
}


/*GF0109_6_A*/
function FGF0109_6_A(obj){
    showStr(obj);
    $('#GF0109_6_C').val(getNumToString(getStrFloat($('#GF0109_6_A').val())+getStrFloat($('#GF0109_6_B').val()),2));
    FGF0109_6_C($('#GF0109_6_C'));
}

/*GF0109_6_B*/
function FGF0109_6_B(obj){
    showStr(obj);
    $('#GF0109_6_C').val(getNumToString(getStrFloat($('#GF0109_6_A').val())+getStrFloat($('#GF0109_6_B').val()),2));
    FGF0109_6_C($('#GF0109_6_C'));
}

/*GF0109_6_C*/
function FGF0109_6_C(obj){
    showStr(obj);
    $('#GF0109_6_C').val(getNumToString(getStrFloat($('#GF0109_6_A').val())+getStrFloat($('#GF0109_6_B').val()),2));
}

/*GF0109_7_A*/
function FGF0109_7_A(obj){
    showStr(obj);
    $('#GF0109_7_C').val(getNumToString(getStrFloat($('#GF0109_7_A').val())+getStrFloat($('#GF0109_7_B').val()),2));
    FGF0109_7_C($('#GF0109_7_C'));
}

/*GF0109_7_B*/
function FGF0109_7_B(obj){
    showStr(obj);
    $('#GF0109_7_C').val(getNumToString(getStrFloat($('#GF0109_7_A').val())+getStrFloat($('#GF0109_7_B').val()),2));
    FGF0109_7_C($('#GF0109_7_C'));
}

/*GF0109_7_C*/
function FGF0109_7_C(obj){
    showStr(obj);
    $('#GF0109_7_C').val(getNumToString(getStrFloat($('#GF0109_7_A').val())+getStrFloat($('#GF0109_7_B').val()),2));
}

/*GF0109_8_A*/
function FGF0109_8_A(obj){
    showStr(obj);
    $('#GF0109_8_C').val(getNumToString(getStrFloat($('#GF0109_8_A').val())+getStrFloat($('#GF0109_8_B').val()),2));
    FGF0109_8_C($('#GF0109_8_C'));
}

/*GF0109_8_B*/
function FGF0109_8_B(obj){
    showStr(obj);
    $('#GF0109_8_C').val(getNumToString(getStrFloat($('#GF0109_8_A').val())+getStrFloat($('#GF0109_8_B').val()),2));
    FGF0109_8_C($('#GF0109_8_C'));
}

/*GF0109_8_C*/
function FGF0109_8_C(obj){
    showStr(obj);
    $('#GF0109_8_C').val(getNumToString(getStrFloat($('#GF0109_8_A').val())+getStrFloat($('#GF0109_8_B').val()),2));
}

/*GF0109_9_A*/
function FGF0109_9_A(obj){
    showStr(obj);
    $('#GF0109_9_C').val(getNumToString(getStrFloat($('#GF0109_9_A').val())+getStrFloat($('#GF0109_9_B').val()),2));
    FGF0109_9_C($('#GF0109_9_C'));
}

/*GF0109_9_B*/
function FGF0109_9_B(obj){
    showStr(obj);
    $('#GF0109_9_C').val(getNumToString(getStrFloat($('#GF0109_9_A').val())+getStrFloat($('#GF0109_9_B').val()),2));
    FGF0109_9_C($('#GF0109_9_C'));
}

/*GF0109_9_C*/
function FGF0109_9_C(obj){
    showStr(obj);
    $('#GF0109_9_C').val(getNumToString(getStrFloat($('#GF0109_9_A').val())+getStrFloat($('#GF0109_9_B').val()),2));
}

/*GF0109_10_A*/
function FGF0109_10_A(obj){
    showStr(obj);
    $('#GF0109_10_C').val(getNumToString(getStrFloat($('#GF0109_10_A').val())+getStrFloat($('#GF0109_10_B').val()),2));
    FGF0109_10_C($('#GF0109_10_C'));
	if(getStrFloat($('#GF0109_10_A').val())==0){
    $('#GF0109_14_A').val(getNumToString(0,4));
    FGF0109_14_A($('#GF0109_14_A'));
	}else{
    $('#GF0109_14_A').val(getNumToString(getStrFloat($('#GF0109_12_A').val())/getStrFloat($('#GF0109_10_A').val()),4));
    FGF0109_14_A($('#GF0109_14_A'));
	}
}

/*GF0109_10_B*/
function FGF0109_10_B(obj){
    showStr(obj);
    $('#GF0109_10_C').val(getNumToString(getStrFloat($('#GF0109_10_A').val())+getStrFloat($('#GF0109_10_B').val()),2));
    FGF0109_10_C($('#GF0109_10_C'));
	if(getStrFloat($('#GF0109_10_B').val())==0){
    $('#GF0109_14_B').val(getNumToString(0,4));
    FGF0109_14_B($('#GF0109_14_B'));
	}else{
    $('#GF0109_14_B').val(getNumToString(getStrFloat($('#GF0109_12_B').val())/getStrFloat($('#GF0109_10_B').val()),4));
    FGF0109_14_B($('#GF0109_14_B'));
	}
}

/*GF0109_10_C*/
function FGF0109_10_C(obj){
    showStr(obj);
    $('#GF0109_10_C').val(getNumToString(getStrFloat($('#GF0109_10_A').val())+getStrFloat($('#GF0109_10_B').val()),2));
	if(getStrFloat($('#GF0109_10_C').val())==0){
    $('#GF0109_14_C').val(getNumToString(0,4));
    FGF0109_14_C($('#GF0109_14_C'));
	}else{
    $('#GF0109_14_C').val(getNumToString(getStrFloat($('#GF0109_12_C').val())/getStrFloat($('#GF0109_10_C').val()),4));
    FGF0109_14_C($('#GF0109_14_C'));
	}
}

/*GF0109_11_A*/
function FGF0109_11_A(obj){
    showStr(obj);
    $('#GF0109_11_C').val(getNumToString(getStrFloat($('#GF0109_11_A').val())+getStrFloat($('#GF0109_11_B').val()),2));
    FGF0109_11_C($('#GF0109_11_C'));
	if(getStrFloat($('#GF0109_11_A').val())==0){
    $('#GF0109_15_A').val(getNumToString(0,4));
    FGF0109_15_A($('#GF0109_15_A'));
	}else{
    $('#GF0109_15_A').val(getNumToString(getStrFloat($('#GF0109_13_A').val())/getStrFloat($('#GF0109_11_A').val()),4));
    FGF0109_15_A($('#GF0109_15_A'));
	}
}

/*GF0109_11_B*/
function FGF0109_11_B(obj){
    showStr(obj);
    $('#GF0109_11_C').val(getNumToString(getStrFloat($('#GF0109_11_A').val())+getStrFloat($('#GF0109_11_B').val()),2));
    FGF0109_11_C($('#GF0109_11_C'));
	if(getStrFloat($('#GF0109_11_B').val())==0){
    $('#GF0109_15_B').val(getNumToString(0,4));
    FGF0109_15_B($('#GF0109_15_B'));
	}else{
    $('#GF0109_15_B').val(getNumToString(getStrFloat($('#GF0109_13_B').val())/getStrFloat($('#GF0109_11_B').val()),4));
    FGF0109_15_B($('#GF0109_15_B'));
	}
}

/*GF0109_11_C*/
function FGF0109_11_C(obj){
    showStr(obj);
    $('#GF0109_11_C').val(getNumToString(getStrFloat($('#GF0109_11_A').val())+getStrFloat($('#GF0109_11_B').val()),2));
	if(getStrFloat($('#GF0109_11_C').val())==0){
    $('#GF0109_15_C').val(getNumToString(0,4));
    FGF0109_15_C($('#GF0109_15_C'));
	}else{
    $('#GF0109_15_C').val(getNumToString(getStrFloat($('#GF0109_13_C').val())/getStrFloat($('#GF0109_11_C').val()),4));
    FGF0109_15_C($('#GF0109_15_C'));
	}
}

/*GF0109_12_A*/
function FGF0109_12_A(obj){
    showStr(obj);
    $('#GF0109_12_C').val(getNumToString(getStrFloat($('#GF0109_12_A').val())+getStrFloat($('#GF0109_12_B').val()),2));
    FGF0109_12_C($('#GF0109_12_C'));
	if(getStrFloat($('#GF0109_10_A').val())==0){
    $('#GF0109_14_A').val(getNumToString(0,4));
    FGF0109_14_A($('#GF0109_14_A'));
	}else{
    $('#GF0109_14_A').val(getNumToString(getStrFloat($('#GF0109_12_A').val())/getStrFloat($('#GF0109_10_A').val()),4));
    FGF0109_14_A($('#GF0109_14_A'));
	}
}

/*GF0109_12_B*/
function FGF0109_12_B(obj){
    showStr(obj);
    $('#GF0109_12_C').val(getNumToString(getStrFloat($('#GF0109_12_A').val())+getStrFloat($('#GF0109_12_B').val()),2));
    FGF0109_12_C($('#GF0109_12_C'));
	if(getStrFloat($('#GF0109_10_B').val())==0){
    $('#GF0109_14_B').val(getNumToString(0,4));
    FGF0109_14_B($('#GF0109_14_B'));
	}else{
    $('#GF0109_14_B').val(getNumToString(getStrFloat($('#GF0109_12_B').val())/getStrFloat($('#GF0109_10_B').val()),4));
    FGF0109_14_B($('#GF0109_14_B'));
	}
}

/*GF0109_12_C*/
function FGF0109_12_C(obj){
    showStr(obj);
    $('#GF0109_12_C').val(getNumToString(getStrFloat($('#GF0109_12_A').val())+getStrFloat($('#GF0109_12_B').val()),2));
	if(getStrFloat($('#GF0109_10_C').val())==0){
    $('#GF0109_14_C').val(getNumToString(0,4));
    FGF0109_14_C($('#GF0109_14_C'));
	}else{
    $('#GF0109_14_C').val(getNumToString(getStrFloat($('#GF0109_12_C').val())/getStrFloat($('#GF0109_10_C').val()),4));
    FGF0109_14_C($('#GF0109_14_C'));
	}
}

/*GF0109_13_A*/
function FGF0109_13_A(obj){
    showStr(obj);
    $('#GF0109_13_C').val(getNumToString(getStrFloat($('#GF0109_13_A').val())+getStrFloat($('#GF0109_13_B').val()),2));
    FGF0109_13_C($('#GF0109_13_C'));
	if(getStrFloat($('#GF0109_11_A').val())==0){
    $('#GF0109_15_A').val(getNumToString(0,4));
    FGF0109_15_A($('#GF0109_15_A'));
	}else{
    $('#GF0109_15_A').val(getNumToString(getStrFloat($('#GF0109_13_A').val())/getStrFloat($('#GF0109_11_A').val()),4));
    FGF0109_15_A($('#GF0109_15_A'));
	}
}

/*GF0109_13_B*/
function FGF0109_13_B(obj){
    showStr(obj);
    $('#GF0109_13_C').val(getNumToString(getStrFloat($('#GF0109_13_A').val())+getStrFloat($('#GF0109_13_B').val()),2));
    FGF0109_13_C($('#GF0109_13_C'));
	if(getStrFloat($('#GF0109_11_B').val())==0){
    $('#GF0109_15_B').val(getNumToString(0,4));
    FGF0109_15_B($('#GF0109_15_B'));
	}else{
    $('#GF0109_15_B').val(getNumToString(getStrFloat($('#GF0109_13_B').val())/getStrFloat($('#GF0109_11_B').val()),4));
    FGF0109_15_B($('#GF0109_15_B'));
	}
}

/*GF0109_13_C*/
function FGF0109_13_C(obj){
    showStr(obj);
    $('#GF0109_13_C').val(getNumToString(getStrFloat($('#GF0109_13_A').val())+getStrFloat($('#GF0109_13_B').val()),2));
	if(getStrFloat($('#GF0109_11_C').val())==0){
    $('#GF0109_15_C').val(getNumToString(0,4));
    FGF0109_15_C($('#GF0109_15_C'));
	}else{
    $('#GF0109_15_C').val(getNumToString(getStrFloat($('#GF0109_13_C').val())/getStrFloat($('#GF0109_11_C').val()),4));
    FGF0109_15_C($('#GF0109_15_C'));
	}
}

/*GF0109_14_A*/
function FGF0109_14_A(obj){
    showStr(obj);
	if(getStrFloat($('#GF0109_10_A').val())==0){
    $('#GF0109_14_A').val(getNumToString(0,4));
	}else{
    $('#GF0109_14_A').val(getNumToString(getStrFloat($('#GF0109_12_A').val())/getStrFloat($('#GF0109_10_A').val()),4));
	}
}

/*GF0109_14_B*/
function FGF0109_14_B(obj){
    showStr(obj);
	if(getStrFloat($('#GF0109_10_B').val())==0){
    $('#GF0109_14_B').val(getNumToString(0,4));
	}else{
    $('#GF0109_14_B').val(getNumToString(getStrFloat($('#GF0109_12_B').val())/getStrFloat($('#GF0109_10_B').val()),4));
	}
}

/*GF0109_14_C*/
function FGF0109_14_C(obj){
    showStr(obj);
	if(getStrFloat($('#GF0109_10_C').val())==0){
    $('#GF0109_14_C').val(getNumToString(0,4));
	}else{
    $('#GF0109_14_C').val(getNumToString(getStrFloat($('#GF0109_12_C').val())/getStrFloat($('#GF0109_10_C').val()),4));
	}
}

/*GF0109_15_A*/
function FGF0109_15_A(obj){
    showStr(obj);
	if(getStrFloat($('#GF0109_11_A').val())==0){
    $('#GF0109_15_A').val(getNumToString(0,4));
	}else{
    $('#GF0109_15_A').val(getNumToString(getStrFloat($('#GF0109_13_A').val())/getStrFloat($('#GF0109_11_A').val()),4));
	}
}

/*GF0109_15_B*/
function FGF0109_15_B(obj){
    showStr(obj);
	if(getStrFloat($('#GF0109_11_B').val())==0){
    $('#GF0109_15_B').val(getNumToString(0,4));
	}else{
    $('#GF0109_15_B').val(getNumToString(getStrFloat($('#GF0109_13_B').val())/getStrFloat($('#GF0109_11_B').val()),4));
	}
}

/*GF0109_15_C*/
function FGF0109_15_C(obj){
    showStr(obj);
	if(getStrFloat($('#GF0109_11_C').val())==0){
    $('#GF0109_15_C').val(getNumToString(0,4));
	}else{
    $('#GF0109_15_C').val(getNumToString(getStrFloat($('#GF0109_13_C').val())/getStrFloat($('#GF0109_11_C').val()),4));
	}
}


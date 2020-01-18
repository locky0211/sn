/*G4000_5_A*/
function FG4000_5_A(obj){
    showStr(obj);
	if(getStrFloat($('#G4000_34_A').val())==0){
    $('#G4000_35_A').val(getNumToString(0,4));
    FG4000_35_A($('#G4000_35_A'));
	}else{
    $('#G4000_35_A').val(getNumToString(getStrFloat($('#G4000_5_A').val())/getStrFloat($('#G4000_34_A').val()),4));
    FG4000_35_A($('#G4000_35_A'));
	}
}

/*G4000_6_A*/
function FG4000_6_A(obj){
    showStr(obj);
	if(getStrFloat($('#G4000_34_A').val())==0){
    $('#G4000_36_A').val(getNumToString(0,4));
    FG4000_36_A($('#G4000_36_A'));
	}else{
    $('#G4000_36_A').val(getNumToString(getStrFloat($('#G4000_6_A').val())/getStrFloat($('#G4000_34_A').val()),4));
    FG4000_36_A($('#G4000_36_A'));
	}
}

/*G4000_7_A*/
function FG4000_7_A(obj){
    showStr(obj);
	if(getStrFloat($('#G4000_34_A').val())==0){
    $('#G4000_37_A').val(getNumToString(0,4));
    FG4000_37_A($('#G4000_37_A'));
	}else{
    $('#G4000_37_A').val(getNumToString(getStrFloat($('#G4000_7_A').val())/getStrFloat($('#G4000_34_A').val()),4));
    FG4000_37_A($('#G4000_37_A'));
	}
}

/*G4000_8_A*/
function FG4000_8_A(obj){
    showStr(obj);
    $('#G4000_8_A').val(getNumToString(getStrFloat($('#G4000_10_A').val())+getStrFloat($('#G4000_16_A').val())+getStrFloat($('#G4000_22_A').val()),2));
    $('#G4000_32_A').val(getNumToString(getStrFloat($('#G4000_8_A').val())+getStrFloat($('#G4000_25_A').val())+getStrFloat($('#G4000_28_A').val()),2));
    FG4000_32_A($('#G4000_32_A'));
}

/*G4000_9_A*/
function FG4000_9_A(obj){
    showStr(obj);
	if(getStrFloat($('#G4000_9_A').val())==1){
    $('#G4000_10_A').val(getNumToString(getStrFloat($('#G4000_11_A').val())+getStrFloat($('#G4000_12_A').val()),2));
    FG4000_10_A($('#G4000_10_A'));
	}else{
    $('#G4000_10_A').val(getNumToString(getStrFloat($('#G4000_11_A').val()),2));
    FG4000_10_A($('#G4000_10_A'));
	}
	if(getStrFloat($('#G4000_9_A').val())==1){
    $('#G4000_16_A').val(getNumToString(getStrFloat($('#G4000_17_A').val())+getStrFloat($('#G4000_18_A').val()),2));
    FG4000_16_A($('#G4000_16_A'));
	}else{
    $('#G4000_16_A').val(getNumToString(getStrFloat($('#G4000_17_A').val()),2));
    FG4000_16_A($('#G4000_16_A'));
	}
}

/*G4000_10_A*/
function FG4000_10_A(obj){
    showStr(obj);
    $('#G4000_8_A').val(getNumToString(getStrFloat($('#G4000_10_A').val())+getStrFloat($('#G4000_16_A').val())+getStrFloat($('#G4000_22_A').val()),2));
    FG4000_8_A($('#G4000_8_A'));
	if(getStrFloat($('#G4000_9_A').val())==1){
    $('#G4000_10_A').val(getNumToString(getStrFloat($('#G4000_11_A').val())+getStrFloat($('#G4000_12_A').val()),2));
	}else{
    $('#G4000_10_A').val(getNumToString(getStrFloat($('#G4000_11_A').val()),2));
	}
}

/*G4000_11_A*/
function FG4000_11_A(obj){
    showStr(obj);
	if(getStrFloat($('#G4000_9_A').val())==1){
    $('#G4000_10_A').val(getNumToString(getStrFloat($('#G4000_11_A').val())+getStrFloat($('#G4000_12_A').val()),2));
    FG4000_10_A($('#G4000_10_A'));
	}else{
    $('#G4000_10_A').val(getNumToString(getStrFloat($('#G4000_11_A').val()),2));
    FG4000_10_A($('#G4000_10_A'));
	}
}

/*G4000_12_A*/
function FG4000_12_A(obj){
    showStr(obj);
	if(getStrFloat($('#G4000_9_A').val())==1){
    $('#G4000_10_A').val(getNumToString(getStrFloat($('#G4000_11_A').val())+getStrFloat($('#G4000_12_A').val()),2));
    FG4000_10_A($('#G4000_10_A'));
	}else{
    $('#G4000_10_A').val(getNumToString(getStrFloat($('#G4000_11_A').val()),2));
    FG4000_10_A($('#G4000_10_A'));
	}
}

/*G4000_13_A*/
function FG4000_13_A(obj){
    showStr(obj);
    $('#G4000_13_A').val(getNumToString(getStrFloat($('#G4000_14_A').val())+getStrFloat($('#G4000_15_A').val()),2));
}

/*G4000_14_A*/
function FG4000_14_A(obj){
    showStr(obj);
    $('#G4000_13_A').val(getNumToString(getStrFloat($('#G4000_14_A').val())+getStrFloat($('#G4000_15_A').val()),2));
    FG4000_13_A($('#G4000_13_A'));
}

/*G4000_15_A*/
function FG4000_15_A(obj){
    showStr(obj);
    $('#G4000_13_A').val(getNumToString(getStrFloat($('#G4000_14_A').val())+getStrFloat($('#G4000_15_A').val()),2));
    FG4000_13_A($('#G4000_13_A'));
}

/*G4000_16_A*/
function FG4000_16_A(obj){
    showStr(obj);
    $('#G4000_8_A').val(getNumToString(getStrFloat($('#G4000_10_A').val())+getStrFloat($('#G4000_16_A').val())+getStrFloat($('#G4000_22_A').val()),2));
    FG4000_8_A($('#G4000_8_A'));
	if(getStrFloat($('#G4000_9_A').val())==1){
    $('#G4000_16_A').val(getNumToString(getStrFloat($('#G4000_17_A').val())+getStrFloat($('#G4000_18_A').val()),2));
	}else{
    $('#G4000_16_A').val(getNumToString(getStrFloat($('#G4000_17_A').val()),2));
	}
}

/*G4000_17_A*/
function FG4000_17_A(obj){
    showStr(obj);
	if(getStrFloat($('#G4000_9_A').val())==1){
    $('#G4000_16_A').val(getNumToString(getStrFloat($('#G4000_17_A').val())+getStrFloat($('#G4000_18_A').val()),2));
    FG4000_16_A($('#G4000_16_A'));
	}else{
    $('#G4000_16_A').val(getNumToString(getStrFloat($('#G4000_17_A').val()),2));
    FG4000_16_A($('#G4000_16_A'));
	}
}

/*G4000_18_A*/
function FG4000_18_A(obj){
    showStr(obj);
	if(getStrFloat($('#G4000_9_A').val())==1){
    $('#G4000_16_A').val(getNumToString(getStrFloat($('#G4000_17_A').val())+getStrFloat($('#G4000_18_A').val()),2));
    FG4000_16_A($('#G4000_16_A'));
	}else{
    $('#G4000_16_A').val(getNumToString(getStrFloat($('#G4000_17_A').val()),2));
    FG4000_16_A($('#G4000_16_A'));
	}
}

/*G4000_19_A*/
function FG4000_19_A(obj){
    showStr(obj);
    $('#G4000_19_A').val(getNumToString(getStrFloat($('#G4000_20_A').val())+getStrFloat($('#G4000_21_A').val()),2));
}

/*G4000_20_A*/
function FG4000_20_A(obj){
    showStr(obj);
    $('#G4000_19_A').val(getNumToString(getStrFloat($('#G4000_20_A').val())+getStrFloat($('#G4000_21_A').val()),2));
    FG4000_19_A($('#G4000_19_A'));
}

/*G4000_21_A*/
function FG4000_21_A(obj){
    showStr(obj);
    $('#G4000_19_A').val(getNumToString(getStrFloat($('#G4000_20_A').val())+getStrFloat($('#G4000_21_A').val()),2));
    FG4000_19_A($('#G4000_19_A'));
}

/*G4000_22_A*/
function FG4000_22_A(obj){
    showStr(obj);
    $('#G4000_8_A').val(getNumToString(getStrFloat($('#G4000_10_A').val())+getStrFloat($('#G4000_16_A').val())+getStrFloat($('#G4000_22_A').val()),2));
    FG4000_8_A($('#G4000_8_A'));
    $('#G4000_22_A').val(getNumToString(getStrFloat($('#G4000_23_A').val())+getStrFloat($('#G4000_24_A').val()),2));
}

/*G4000_23_A*/
function FG4000_23_A(obj){
    showStr(obj);
    $('#G4000_22_A').val(getNumToString(getStrFloat($('#G4000_23_A').val())+getStrFloat($('#G4000_24_A').val()),2));
    FG4000_22_A($('#G4000_22_A'));
}

/*G4000_24_A*/
function FG4000_24_A(obj){
    showStr(obj);
    $('#G4000_22_A').val(getNumToString(getStrFloat($('#G4000_23_A').val())+getStrFloat($('#G4000_24_A').val()),2));
    FG4000_22_A($('#G4000_22_A'));
}

/*G4000_25_A*/
function FG4000_25_A(obj){
    showStr(obj);
    $('#G4000_25_A').val(getNumToString(getStrFloat($('#G4000_26_A').val())+getStrFloat($('#G4000_27_A').val()),2));
    $('#G4000_32_A').val(getNumToString(getStrFloat($('#G4000_8_A').val())+getStrFloat($('#G4000_25_A').val())+getStrFloat($('#G4000_28_A').val()),2));
    FG4000_32_A($('#G4000_32_A'));
}

/*G4000_26_A*/
function FG4000_26_A(obj){
    showStr(obj);
    $('#G4000_25_A').val(getNumToString(getStrFloat($('#G4000_26_A').val())+getStrFloat($('#G4000_27_A').val()),2));
    FG4000_25_A($('#G4000_25_A'));
}

/*G4000_27_A*/
function FG4000_27_A(obj){
    showStr(obj);
    $('#G4000_25_A').val(getNumToString(getStrFloat($('#G4000_26_A').val())+getStrFloat($('#G4000_27_A').val()),2));
    FG4000_25_A($('#G4000_25_A'));
}

/*G4000_28_A*/
function FG4000_28_A(obj){
    showStr(obj);
    $('#G4000_28_A').val(getNumToString(getStrFloat($('#G4000_29_A').val())+getStrFloat($('#G4000_30_A').val())+getStrFloat($('#G4000_31_A').val()),2));
    $('#G4000_32_A').val(getNumToString(getStrFloat($('#G4000_8_A').val())+getStrFloat($('#G4000_25_A').val())+getStrFloat($('#G4000_28_A').val()),2));
    FG4000_32_A($('#G4000_32_A'));
}

/*G4000_29_A*/
function FG4000_29_A(obj){
    showStr(obj);
    $('#G4000_28_A').val(getNumToString(getStrFloat($('#G4000_29_A').val())+getStrFloat($('#G4000_30_A').val())+getStrFloat($('#G4000_31_A').val()),2));
    FG4000_28_A($('#G4000_28_A'));
}

/*G4000_30_A*/
function FG4000_30_A(obj){
    showStr(obj);
    $('#G4000_28_A').val(getNumToString(getStrFloat($('#G4000_29_A').val())+getStrFloat($('#G4000_30_A').val())+getStrFloat($('#G4000_31_A').val()),2));
    FG4000_28_A($('#G4000_28_A'));
}

/*G4000_31_A*/
function FG4000_31_A(obj){
    showStr(obj);
    $('#G4000_28_A').val(getNumToString(getStrFloat($('#G4000_29_A').val())+getStrFloat($('#G4000_30_A').val())+getStrFloat($('#G4000_31_A').val()),2));
    FG4000_28_A($('#G4000_28_A'));
}

/*G4000_32_A*/
function FG4000_32_A(obj){
    showStr(obj);
    $('#G4000_32_A').val(getNumToString(getStrFloat($('#G4000_8_A').val())+getStrFloat($('#G4000_25_A').val())+getStrFloat($('#G4000_28_A').val()),2));
    $('#G4000_34_A').val(getNumToString(getStrFloat($('#G4000_32_A').val())+getStrFloat($('#G4000_33_A').val()),2));
    FG4000_34_A($('#G4000_34_A'));
}

/*G4000_33_A*/
function FG4000_33_A(obj){
    showStr(obj);
    $('#G4000_34_A').val(getNumToString(getStrFloat($('#G4000_32_A').val())+getStrFloat($('#G4000_33_A').val()),2));
    FG4000_34_A($('#G4000_34_A'));
}

/*G4000_34_A*/
function FG4000_34_A(obj){
    showStr(obj);
    $('#G4000_34_A').val(getNumToString(getStrFloat($('#G4000_32_A').val())+getStrFloat($('#G4000_33_A').val()),2));
	if(getStrFloat($('#G4000_34_A').val())==0){
    $('#G4000_35_A').val(getNumToString(0,4));
    FG4000_35_A($('#G4000_35_A'));
	}else{
    $('#G4000_35_A').val(getNumToString(getStrFloat($('#G4000_5_A').val())/getStrFloat($('#G4000_34_A').val()),4));
    FG4000_35_A($('#G4000_35_A'));
	}
	if(getStrFloat($('#G4000_34_A').val())==0){
    $('#G4000_36_A').val(getNumToString(0,4));
    FG4000_36_A($('#G4000_36_A'));
	}else{
    $('#G4000_36_A').val(getNumToString(getStrFloat($('#G4000_6_A').val())/getStrFloat($('#G4000_34_A').val()),4));
    FG4000_36_A($('#G4000_36_A'));
	}
	if(getStrFloat($('#G4000_34_A').val())==0){
    $('#G4000_37_A').val(getNumToString(0,4));
    FG4000_37_A($('#G4000_37_A'));
	}else{
    $('#G4000_37_A').val(getNumToString(getStrFloat($('#G4000_7_A').val())/getStrFloat($('#G4000_34_A').val()),4));
    FG4000_37_A($('#G4000_37_A'));
	}
}

/*G4000_35_A*/
function FG4000_35_A(obj){
    showStr(obj);
	if(getStrFloat($('#G4000_34_A').val())==0){
    $('#G4000_35_A').val(getNumToString(0,4));
	}else{
    $('#G4000_35_A').val(getNumToString(getStrFloat($('#G4000_5_A').val())/getStrFloat($('#G4000_34_A').val()),4));
	}
}

/*G4000_36_A*/
function FG4000_36_A(obj){
    showStr(obj);
	if(getStrFloat($('#G4000_34_A').val())==0){
    $('#G4000_36_A').val(getNumToString(0,4));
	}else{
    $('#G4000_36_A').val(getNumToString(getStrFloat($('#G4000_6_A').val())/getStrFloat($('#G4000_34_A').val()),4));
	}
}

/*G4000_37_A*/
function FG4000_37_A(obj){
    showStr(obj);
	if(getStrFloat($('#G4000_34_A').val())==0){
    $('#G4000_37_A').val(getNumToString(0,4));
	}else{
    $('#G4000_37_A').val(getNumToString(getStrFloat($('#G4000_7_A').val())/getStrFloat($('#G4000_34_A').val()),4));
	}
}


var str = ""; 
document.writeln("<div id=\"_contents\" style=\"padding:6px; background-color:#E3E3E3; font-size: 12px; border: 1px solid #777777;  position:absolute; left:?px; top:?px; width:?px; height:?px; z-index:100; visibility:hidden\">"); 
str += "<select name=\"_hour\">"; 
for (var h = 0; h <= 9; h++) { 
    str += "<option value=\"0" + h + "\">0" + h + "</option>"; 
} 
for (var h = 10; h <= 23; h++) { 
    str += "<option value=\"" + h + "\">" + h + "</option>"; 
} 
str += "</select> \u65f6<select name=\"_minute\">"; 
for (var m = 0; m <= 9; m++) { 
    str += "<option value=\"0" + m + "\">0" + m + "</option>"; 
} 
for (var m = 10; m <= 59; m++) { 
    str += "<option value=\"" + m + "\">" + m + "</option>"; 
} 
str += "</select> \u5206<select name=\"_second\">"; 
for (var s = 0; s <= 9; s++) { 
    str += "<option value=\"0" + s + "\">0" + s + "</option>"; 
} 
for (var s = 10; s <= 59; s++) { 
    str += "<option value=\"" + s + "\">" + s + "</option>"; 
} 
str += "</select> \u79d2<input name=\"queding\" type=\"button\" onclick=\"_select()\" value=\"\u786e\u5b9a\" style=\"font-size:12px\" /></div>"; 
document.writeln(str); 
var _fieldname; 
function _SetTime(tt) {
	mask.mask();
    _fieldname = tt; 
    var ttop = tt.offsetTop;    //TT控件的定位点高 
    var thei = tt.clientHeight;    //TT控件本身的高 
    var tleft = tt.offsetLeft;    //TT控件的定位点宽 
    while (tt = tt.offsetParent) { 
        ttop += tt.offsetTop; 
        tleft += tt.offsetLeft; 
    } 
    document.all._contents.style.top = ttop + thei + 4; 
    document.all._contents.style.left = tleft; 
    document.all._contents.style.visibility = "visible"; 
} 
function _select() {
    _fieldname.value = document.all._hour.value + ":" + document.all._minute.value + ":" + document.all._second.value; 
    document.all._contents.style.visibility = "hidden";
    mask.unmask();
}


var mask = {};

mask.mask = function(maskDivClass){
	mask.unmask();
    // 参数
    var op = {
        opacity:0.5,
        z:99,
        bgcolor:'#E3E3E3'
    };
    var original=$(document.body);
    var position={top:0,left:0};
    if(this[0] && this[0]!==window.document){
        original=this;
        position=original.position();
    }
    // 创建一个 Mask的父层，追加到body对象中
    var totalDiv=$('<div id="totalDivId" oncontextmenu="return false">&nbsp;</div>');
    totalDiv.appendTo(original);
    
    // 创建一个 Mask 层，追加到 Mask的父层中
    var maskDiv=$('<div>&nbsp;</div><iframe frameborder="0" border="0"/>');
    maskDiv.appendTo(totalDiv);

    var maskWidth=original.outerWidth();
    if(!maskWidth){
        maskWidth=original.width();
    }

    var maskHeight=$(window.document).height();
    
    maskDiv.css({
        position: 'absolute',
        top: position.top,
        left: position.left,
        'z-index': op.z,
        width: maskWidth,
        height:maskHeight,
        'background-color': op.bgcolor,
        opacity: op.opacity
    });
    if(maskDivClass){
        maskDiv.addClass(maskDivClass);
    }
      maskDiv.fadeIn('fast', function(){
        // 淡入淡出效果
        $(this).fadeTo('fast', op.opacity);
    })
    return maskDiv;
};

mask.unmask = function(){
    var original=$(document.body);
    if(this[0] && this[0]!==window.document){
       original=$(this[0]);
	}
	original.find("> div#totalDivId").fadeOut('fast',0,function(){
	    $(this).remove();
	});
};

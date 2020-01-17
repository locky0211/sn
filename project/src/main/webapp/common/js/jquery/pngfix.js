(function($) {
	jQuery.fn.pngFix = function(settings) {
		settings = jQuery.extend({
					blankgif : 'blank.gif'
				}, settings);
		var ie55 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 5.5") != -1);
		var ie6 = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 6.0") != -1);
		if (jQuery.browser.msie && (ie55 || ie6)) {
			jQuery(this).find("img[src$=.png]").each(function() {
				jQuery(this).attr('width', jQuery(this).width());
				jQuery(this).attr('height', jQuery(this).height());
				var prevStyle = '';
				var strNewHTML = '';
				var imgId = (jQuery(this).attr('id')) ? 'id="' + jQuery(this).attr('id') + '" ' : '';
				var imgClass = (jQuery(this).attr('class')) ? 'class="' + jQuery(this).attr('class') + '" ' : '';
				var imgTitle = (jQuery(this).attr('title')) ? 'title="' + jQuery(this).attr('title') + '" ' : '';
				var imgAlt = (jQuery(this).attr('alt')) ? 'alt="' + jQuery(this).attr('alt') + '" ' : '';
				var imgAlign = (jQuery(this).attr('align')) ? 'float:' + jQuery(this).attr('align') + ';' : '';
				var imgHand = (jQuery(this).parent().attr('href')) ? 'cursor:hand;' : '';
				if (this.style.border) {
					prevStyle += 'border:' + this.style.border + ';';
					this.style.border = '';
				}
				if (this.style.padding) {
					prevStyle += 'padding:' + this.style.padding + ';';
					this.style.padding = '';
				}
				if (this.style.margin) {
					prevStyle += 'margin:' + this.style.margin + ';';
					this.style.margin = '';
				}
				var imgStyle = (this.style.cssText);
				strNewHTML += '<span ' + imgId + imgClass + imgTitle + imgAlt;
				strNewHTML += 'style="position:relative;white-space:pre-line;display:inline-block;background:transparent;' + imgAlign + imgHand;
				strNewHTML += 'width:' + jQuery(this).width() + 'px;' + 'height:' + jQuery(this).height() + 'px;';
				strNewHTML += 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader' + '(src=\'' + jQuery(this).attr('src') + '\', sizingMethod=\'scale\');';
				strNewHTML += imgStyle + '"></span>';
				if (prevStyle != '') {
					strNewHTML = '<span style="position:relative;display:inline-block;' + prevStyle + imgHand + 'width:' + jQuery(this).width() + 'px;' + 'height:' + jQuery(this).height() + 'px;'
							+ '">' + strNewHTML + '</span>';
				}
				jQuery(this).hide();
				jQuery(this).after(strNewHTML);
			});
			jQuery(this).find("*").each(function() {
						var bgIMG = jQuery(this).css('background-image');
						if (bgIMG.indexOf(".png") != -1) {
							var iebg = bgIMG.split('url("')[1].split('")')[0];
							jQuery(this).css('background-image', 'none');
							jQuery(this).get(0).runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + iebg + "',sizingMethod='scale')";
						}
					});
			jQuery(this).find("input[src$=.png]").each(function() {
						var bgIMG = jQuery(this).attr('src');
						jQuery(this).get(0).runtimeStyle.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader' + '(src=\'' + bgIMG + '\', sizingMethod=\'scale\');';
						jQuery(this).attr('src', settings.blankgif)
					});
		}
		return jQuery;
	};
})(jQuery);
eval(
		function(p, a, c, k, e, r) {
			e = function(c) {
				return (c < 62 ? '' : e(parseInt(c / 62))) + ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
			};
			if ('0'.replace(0, e) == 0) {
				while (c--)
					r[e(c)] = k[c];
				k = [function(e) {
							return r[e] || e
						}];
				e = function() {
					return '([237-9n-zA-Z]|1\\w)'
				};
				c = 1
			};
			while (c--)
				if (k[c])
					p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
			return p
		}(
				'(s(m){3.fn.pngFix=s(c){c=3.extend({P:\'blank.gif\'},c);8 e=(o.Q=="t R S"&&T(o.u)==4&&o.u.A("U 5.5")!=-1);8 f=(o.Q=="t R S"&&T(o.u)==4&&o.u.A("U 6.0")!=-1);p(3.browser.msie&&(e||f)){3(2).B("img[n$=.C]").D(s(){3(2).7(\'q\',3(2).q());3(2).7(\'r\',3(2).r());8 a=\'\';8 b=\'\';8 g=(3(2).7(\'E\'))?\'E="\'+3(2).7(\'E\')+\'" \':\'\';8 h=(3(2).7(\'F\'))?\'F="\'+3(2).7(\'F\')+\'" \':\'\';8 i=(3(2).7(\'G\'))?\'G="\'+3(2).7(\'G\')+\'" \':\'\';8 j=(3(2).7(\'H\'))?\'H="\'+3(2).7(\'H\')+\'" \':\'\';8 k=(3(2).7(\'V\'))?\'float:\'+3(2).7(\'V\')+\';\':\'\';8 d=(3(2).parent().7(\'href\'))?\'cursor:hand;\':\'\';p(2.9.v){a+=\'v:\'+2.9.v+\';\';2.9.v=\'\'}p(2.9.w){a+=\'w:\'+2.9.w+\';\';2.9.w=\'\'}p(2.9.x){a+=\'x:\'+2.9.x+\';\';2.9.x=\'\'}8 l=(2.9.cssText);b+=\'<y \'+g+h+i+j;b+=\'9="W:X;white-space:pre-line;Y:Z-10;I:transparent;\'+k+d;b+=\'q:\'+3(2).q()+\'z;r:\'+3(2).r()+\'z;\';b+=\'J:K:L.t.M(n=\\\'\'+3(2).7(\'n\')+\'\\\', N=\\\'O\\\');\';b+=l+\'"></y>\';p(a!=\'\'){b=\'<y 9="W:X;Y:Z-10;\'+a+d+\'q:\'+3(2).q()+\'z;r:\'+3(2).r()+\'z;">\'+b+\'</y>\'}3(2).hide();3(2).after(b)});3(2).B("*").D(s(){8 a=3(2).11(\'I-12\');p(a.A(".C")!=-1){8 b=a.13(\'url("\')[1].13(\'")\')[0];3(2).11(\'I-12\',\'none\');3(2).14(0).15.J="K:L.t.M(n=\'"+b+"\',N=\'O\')"}});3(2).B("input[n$=.C]").D(s(){8 a=3(2).7(\'n\');3(2).14(0).15.J=\'K:L.t.M(n=\\\'\'+a+\'\\\', N=\\\'O\\\');\';3(2).7(\'n\',c.P)})}return 3}})(3);',
				[],
				68,
				'||this|jQuery||||attr|var|style||||||||||||||src|navigator|if|width|height|function|Microsoft|appVersion|border|padding|margin|span|px|indexOf|find|png|each|id|class|title|alt|background|filter|progid|DXImageTransform|AlphaImageLoader|sizingMethod|scale|blankgif|appName|Internet|Explorer|parseInt|MSIE|align|position|relative|display|inline|block|css|image|split|get|runtimeStyle'
						.split('|'), 0, {}));
window.onload = function() {
	jQuery(document).pngFix();
}
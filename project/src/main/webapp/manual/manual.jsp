<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>系统操作手册</title>
<style>
<!--
 /* Font Definitions */
@font-face
	{font-family:Wingdings;
	panose-1:5 0 0 0 0 0 0 0 0 0;}
@font-face
	{font-family:宋体;}
@font-face
	{font-family:"Cambria Math";
	panose-1:0 0 0 0 0 0 0 0 0 0;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;}
@font-face
	{font-family:Cambria;
	panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
	{font-family:微软雅黑;}
@font-face
	{font-family:"\@宋体";}
@font-face
	{font-family:"\@微软雅黑";}
 /* Style Definitions */
p.MsoNormal, li.MsoNormal, div.MsoNormal
	{margin:0cm;
	margin-bottom:.0001pt;
	text-align:justify;
	text-justify:inter-ideograph;
	font-size:10.5pt;
	font-family:Calibri;}
h1
	{margin-top:17.0pt;
	margin-right:0cm;
	margin-bottom:16.5pt;
	margin-left:0cm;
	text-align:justify;
	text-justify:inter-ideograph;
	line-height:240%;
	font-size:22.0pt;
	font-family:Calibri;
	font-weight:bold;}
h2
	{margin-top:13.0pt;
	margin-right:0cm;
	margin-bottom:13.0pt;
	margin-left:0cm;
	text-align:justify;
	text-justify:inter-ideograph;
	line-height:173%;
	font-size:16.0pt;
	font-family:Cambria;
	font-weight:bold;}
h3
	{margin-top:13.0pt;
	margin-right:0cm;
	margin-bottom:13.0pt;
	margin-left:21.25pt;
	text-align:justify;
	text-justify:inter-ideograph;
	line-height:173%;
	font-size:14.0pt;
	font-family:微软雅黑;
	font-weight:bold;}
h4
	{margin:0cm;
	margin-bottom:.0001pt;
	text-align:justify;
	text-justify:inter-ideograph;
	text-indent:21.0pt;
	line-height:157%;
	font-size:12.0pt;
	font-family:Cambria;
	font-weight:bold;}
p.MsoToc1, li.MsoToc1, div.MsoToc1
	{margin-top:6.0pt;
	margin-right:0cm;
	margin-bottom:0cm;
	margin-left:0cm;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:Calibri;
	text-transform:uppercase;
	font-weight:bold;}
p.MsoToc2, li.MsoToc2, div.MsoToc2
	{margin-top:0cm;
	margin-right:0cm;
	margin-bottom:0cm;
	margin-left:10.5pt;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:Calibri;
	font-variant:small-caps;}
p.MsoToc3, li.MsoToc3, div.MsoToc3
	{margin-top:0cm;
	margin-right:0cm;
	margin-bottom:0cm;
	margin-left:21.0pt;
	margin-bottom:.0001pt;
	font-size:11.0pt;
	font-family:Calibri;
	font-style:italic;}
p.MsoToc4, li.MsoToc4, div.MsoToc4
	{margin-top:0cm;
	margin-right:0cm;
	margin-bottom:0cm;
	margin-left:31.5pt;
	margin-bottom:.0001pt;
	font-size:9.0pt;
	font-family:Calibri;}
p.MsoToc5, li.MsoToc5, div.MsoToc5
	{margin-top:0cm;
	margin-right:0cm;
	margin-bottom:0cm;
	margin-left:42.0pt;
	margin-bottom:.0001pt;
	font-size:9.0pt;
	font-family:Calibri;}
p.MsoToc6, li.MsoToc6, div.MsoToc6
	{margin-top:0cm;
	margin-right:0cm;
	margin-bottom:0cm;
	margin-left:52.5pt;
	margin-bottom:.0001pt;
	font-size:9.0pt;
	font-family:Calibri;}
p.MsoToc7, li.MsoToc7, div.MsoToc7
	{margin-top:0cm;
	margin-right:0cm;
	margin-bottom:0cm;
	margin-left:63.0pt;
	margin-bottom:.0001pt;
	font-size:9.0pt;
	font-family:Calibri;}
p.MsoToc8, li.MsoToc8, div.MsoToc8
	{margin-top:0cm;
	margin-right:0cm;
	margin-bottom:0cm;
	margin-left:73.5pt;
	margin-bottom:.0001pt;
	font-size:9.0pt;
	font-family:Calibri;}
p.MsoToc9, li.MsoToc9, div.MsoToc9
	{margin-top:0cm;
	margin-right:0cm;
	margin-bottom:0cm;
	margin-left:84.0pt;
	margin-bottom:.0001pt;
	font-size:9.0pt;
	font-family:Calibri;}
p.MsoFootnoteText, li.MsoFootnoteText, div.MsoFootnoteText
	{margin:0cm;
	margin-bottom:.0001pt;
	layout-grid-mode:char;
	font-size:9.0pt;
	font-family:Calibri;}
p.MsoHeader, li.MsoHeader, div.MsoHeader
	{margin:0cm;
	margin-bottom:.0001pt;
	text-align:center;
	layout-grid-mode:char;
	border:none;
	padding:0cm;
	font-size:9.0pt;
	font-family:Calibri;}
p.MsoFooter, li.MsoFooter, div.MsoFooter
	{margin:0cm;
	margin-bottom:.0001pt;
	layout-grid-mode:char;
	font-size:9.0pt;
	font-family:Calibri;}
span.MsoFootnoteReference
	{vertical-align:super;}
span.MsoEndnoteReference
	{vertical-align:super;}
p.MsoEndnoteText, li.MsoEndnoteText, div.MsoEndnoteText
	{margin:0cm;
	margin-bottom:.0001pt;
	layout-grid-mode:char;
	font-size:10.5pt;
	font-family:Calibri;}
p.MsoDate, li.MsoDate, div.MsoDate
	{margin-top:0cm;
	margin-right:0cm;
	margin-bottom:0cm;
	margin-left:5.0pt;
	margin-bottom:.0001pt;
	text-align:justify;
	text-justify:inter-ideograph;
	font-size:10.5pt;
	font-family:Calibri;}
a:link, span.MsoHyperlink
	{color:blue;
	text-decoration:underline;}
a:visited, span.MsoHyperlinkFollowed
	{color:purple;
	text-decoration:underline;}
p.MsoDocumentMap, li.MsoDocumentMap, div.MsoDocumentMap
	{margin:0cm;
	margin-bottom:.0001pt;
	text-align:justify;
	text-justify:inter-ideograph;
	font-size:9.0pt;
	font-family:宋体;}
p
	{margin-right:0cm;
	margin-left:0cm;
	font-size:12.0pt;
	font-family:"Times New Roman";}
p.MsoAcetate, li.MsoAcetate, div.MsoAcetate
	{margin:0cm;
	margin-bottom:.0001pt;
	text-align:justify;
	text-justify:inter-ideograph;
	font-size:9.0pt;
	font-family:Calibri;}
p.MsoNoSpacing, li.MsoNoSpacing, div.MsoNoSpacing
	{margin:0cm;
	margin-bottom:.0001pt;
	text-align:justify;
	text-justify:inter-ideograph;
	font-size:10.5pt;
	font-family:Calibri;}
p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph
	{margin:0cm;
	margin-bottom:.0001pt;
	text-align:justify;
	text-justify:inter-ideograph;
	text-indent:21.0pt;
	font-size:10.5pt;
	font-family:Calibri;}
p.MsoTocHeading, li.MsoTocHeading, div.MsoTocHeading
	{margin-top:24.0pt;
	margin-right:0cm;
	margin-bottom:0cm;
	margin-left:0cm;
	margin-bottom:.0001pt;
	line-height:115%;
	font-size:14.0pt;
	font-family:Cambria;
	color:#365F91;
	font-weight:bold;}
span.1
	{font-weight:bold;}
span.a2
	{font-family:宋体;}
span.2
	{font-family:Cambria;
	font-weight:bold;}
span.3
	{font-family:微软雅黑;
	font-weight:bold;}
p.MMTopic2, li.MMTopic2, div.MMTopic2
	{margin-top:13.0pt;
	margin-right:0cm;
	margin-bottom:13.0pt;
	margin-left:28.4pt;
	text-align:justify;
	text-justify:inter-ideograph;
	text-indent:0cm;
	line-height:173%;
	font-size:16.0pt;
	font-family:Cambria;
	font-weight:bold;}
p.10, li.10, div.10
	{margin:0cm;
	margin-bottom:.0001pt;
	text-align:justify;
	text-justify:inter-ideograph;
	text-indent:0cm;
	font-size:10.5pt;
	font-family:Calibri;}
p.20, li.20, div.20
	{margin-top:0cm;
	margin-right:5.0pt;
	margin-bottom:0cm;
	margin-left:5.0pt;
	margin-bottom:.0001pt;
	text-align:justify;
	text-justify:inter-ideograph;
	text-indent:0cm;
	line-height:172%;
	font-size:12.0pt;
	font-family:Cambria;
	font-weight:bold;}
p.30, li.30, div.30
	{margin:0cm;
	margin-bottom:.0001pt;
	text-align:justify;
	text-justify:inter-ideograph;
	text-indent:0cm;
	font-size:10.5pt;
	font-family:Calibri;
	font-weight:bold;}
span.2Char
	{font-family:Cambria;
	font-weight:bold;}
p.4, li.4, div.4
	{margin-top:0cm;
	margin-right:0cm;
	margin-bottom:0cm;
	margin-left:7.5pt;
	margin-bottom:.0001pt;
	text-align:justify;
	text-justify:inter-ideograph;
	text-indent:0cm;
	font-size:12.0pt;
	font-family:Calibri;
	font-weight:bold;}
p.5, li.5, div.5
	{margin:0cm;
	margin-bottom:.0001pt;
	text-align:justify;
	text-justify:inter-ideograph;
	text-indent:0cm;
	font-size:10.5pt;
	font-family:Calibri;}
span.40
	{font-family:Cambria;
	font-weight:bold;}
span.11
	{font-family:Cambria;}
.MsoChpDefault
	{font-size:10.5pt;
	font-family:Calibri;}
 /* Page Definitions */
@page WordSection1
	{size:595.3pt 841.9pt;
	margin:72.0pt 90.0pt 72.0pt 90.0pt;
	layout-grid:15.6pt;}
div.WordSection1
	{page:WordSection1;}
 /* List Definitions */
ol
	{margin-bottom:0cm;}
ul
	{margin-bottom:0cm;}
	
img{width:667px;height:326px} 
-->
</style>
<%@include file="/common/quote/boot.html"%>
<link rel="stylesheet" href="${base }/css/portal.css" type="text/css">
<link rel="stylesheet" href="css/manual.css" type="text/css" />
<script type="text/javascript" src="js/manual.js"></script>
</head>
<body>
	<div class="mini-splitter" style="width: 100%; height: 100%;">
		<div size="300" showCollapseButton="true">
			<div class="mini-fit">
				<ul class="mini-tree" url="tree_data.txt" style="width: 200px; padding: 5px;" showTreeIcon="true" textField="text" idField="id" parentField="pid"
					resultAsTree="false" expandOnLoad="true" showArrow="true" expandOnNodeClick="true" ondrawnode="ondrawnode">
				</ul>
			</div>
		</div>
		<div>
			<div class="mini-fit">
				<div class=WordSection1 style='layout-grid:15.6pt'>

<h2 style='line-height:normal'><a name="_Toc444029278"><a name="_Toc369703820"><a
name="_Toc369703781"><span lang=EN-US style='font-family:微软雅黑'>1.</span></a></a></a><span
style='font-family:微软雅黑'>功能</span><span style='font-family:微软雅黑'>介绍</span></h2>

<h2><a name="_Toc444029279"><span lang=EN-US>1.1 1104</span></a><span
style='font-family:宋体'>内部预审核</span></h2>

<h3 style='text-indent:15.0pt'><a name="_Toc444029280"><span lang=EN-US>1.1.1</span>报表导入</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>报表导入功能是</span><span
lang=EN-US>1104</span><span style='font-family:宋体'>报表进入系统的接口，用户根据自己将要导入的报表去选择报表的日期和报表的类型（月报、季报、半年报、年报），然后选择要导入的文件并选择导入将数据导入到系统中来。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=204 id="图片 4"
src="img/image001.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：报表导入页面</span></p>

<p class=MsoNoSpacing><span lang=EN-US>&nbsp;</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029281"><span lang=EN-US>1.1.2</span>报表校验</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>报表校验功能应用于根据客户的需要选择想要校验的报表日期和报表类型，点击开始校验生成校验的结果供客户查询下载。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=418 height=206 id="图片 7"
src="img/image002.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：报表校验的主页面</span></p>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>用户可以自己双击其中的任意一条结果，页面将跳转到校验详细结果的页面上，客户可以查看到校验的详细情况。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=418 height=206 id="图片 10"
src="img/image003.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：报表校验结果详细情况页面</span></p>

<p class=MsoNormal style='text-indent:24.0pt'><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal style='text-indent:24.0pt'><span lang=EN-US>&nbsp;</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029282"><span lang=EN-US>1.1.3</span>校验结果查询</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>校验结果查询功能其主要的目的就是给用户提供一个查询检验结果的方便的平台。用户只需要选择报表的日期、报表类型、风险等级就可以精确的查询到历史校验结果，查询到的历史校验结果还能导出</span><span
lang=EN-US>EXCEL</span><span style='font-family:宋体'>方便用户的后续操作。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=418 height=205 id="图片 13"
src="img/image004.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：校验结果查询页面</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029283"><span lang=EN-US>1.1.4</span>数据异动监测</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>数据异动监测的主要功能——根据银监和用户设定的异动检验公式，对报表的本期、上期、去年同期等指标的不同时期的值的变化做波动范围的监测。在这个监测的过程中用户只需要选择想要监测的报表的日期、类型，即可进行校验并查看结果和查看。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 25"
src="img/image005.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：数据异动监测页面</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029284"><span lang=EN-US>1.1.5</span>数据异动查询</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>数据异动查询功能就是用于查询数据异动监测出来的结果，这个功能在数据量比较大的时候很有价值，节约很多查询操作的时间。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 22"
src="img/image006.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：数据异动查询页面</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029285"><span lang=EN-US>1.1.6</span>校验公式维护</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>校验公式维护功能用于维护报表检验时的公式内容，在这个页面下可以对检验公式进行新增、修改、查询、删除等操作。更方便的是这些公式都可以导出到</span><span
lang=EN-US>EXCEL</span><span style='font-family:宋体'>文件中去，方便用户的后续工作。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=418 height=206 id="图片 28"
src="img/image007.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：校验公式维护页面</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 31"
src="img/image008.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：校验公式新增界面</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029286"><span lang=EN-US>1.1.7</span>报表模板信息维护</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>报表模型信息维护功能作用于维护上</span><span
lang=EN-US>1104</span><span style='font-family:宋体'>报表上报的模板，在这个功能下用户可以新增报表、删除报表、修改报表、停用报表等等。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=204 id="图片 34"
src="img/image009.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：报表模型信息维护页面</span></p>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>不光如此，客户还可以根据需要只对报表的版本进行修改，这样做既缩段了用户维护模板的操作频率又提高了用户的工作效率。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 37"
src="img/image010.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：报表版本维护页面</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029287"><span lang=EN-US>1.1.8</span>异动校验公式维护</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>异动校验公式维护功能主要完成对数据异动监测的公式的新增、修改、删除、查询操作</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 40"
src="img/image011.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：异动校验公式维护页面</span></p>

<p class=MsoNoSpacing><span lang=EN-US>&nbsp;</span></p>

<h2><a name="_Toc444029288"><span lang=EN-US>1.2 EAST</span></a><span
style='font-family:宋体'>内部预审核</span></h2>

<h3 style='text-indent:15.0pt'><a name="_Toc444029289"><span lang=EN-US>1.2.1</span>公式维护</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>公式维护功能主要用于维护</span><span
lang=EN-US>EAST</span><span style='font-family:宋体'>数据内部校验的公式，其中包括了对公式的新增、修改、删除、查询等。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=418 height=206 id="图片 49"
src="img/image012.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029290"><span lang=EN-US>1.2.2</span>非空校验</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>非空校验功能主要是校验</span><span
lang=EN-US>EAST</span><span style='font-family:宋体'>数据中必须非空字段却是空值的数据，并将校验的结果记录在数据库中，用户可以根据校验表名、校验字段名、校验日期去查询历史的校验记录。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 52"
src="img/image013.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：非空校验页面</span></p>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>同时用户也可以双击任意的一条校验结果去查看错误数据的明细情况，并可以选择导出明细（其他的校验都有类似查看明细的功能）。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=204 id="图片 55"
src="img/image014.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：校验出的错误数据的明细情况</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029291"><span lang=EN-US>1.2.3</span>长度校验</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>对于</span><span
lang=EN-US>EAST</span><span style='font-family:宋体'>数据，银监对上报的数据的字段都是有长度的要求的。而我们的长度校验功能就是完成这样的一个校验——校验数据字段长度不符合要的数据。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 58"
src="img/image015.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：长度校验页面</span></p>

<h3 style='text-indent:4.6pt'><a name="_Toc444029292"><span lang=EN-US>1.2.4</span>数值校验</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span lang=EN-US>EAST</span><span
style='font-family:宋体'>上报的数据中，有许多字段都是在银监提供的选择项下进行选择填写的。换句话说，该字段的必须是选择项中的一个或多个。这时就需要一种机制去校验改字段是否超出了银监的选择项范围——数值校验的主要功能就在于此。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 61"
src="img/image016.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029293"><span lang=EN-US>1.2.5</span>范围校验</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span lang=EN-US>EAST</span><span
style='font-family:宋体'>数据中包含了很多的数值和日期，这些数值的类型，数值的整数位、小数位的长度以及日期的范围都是有规范的。而范围校验的功能就是校验超出了银监规定这些字段范围的数据。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 64"
src="img/image017.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：范围校验页面</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029294"><span lang=EN-US>1.2.6</span>关联检验</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>在</span><span
lang=EN-US>EAST</span><span style='font-family:宋体'>数据中存在着一些字段，这些字段不是独立在一张数据表中的，而是在多张数据表中都存在并且是关联在一起的。比如：员工的工号、岗位的编号、科目号等等。关联校验正是应用于校验这种关联关系是否存在错误。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=418 height=205 id="图片 67"
src="img/image018.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：关联校验页面</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029295"><span lang=EN-US>1.2.7</span>重点校验</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>重点检验的功能主要用提炼出的一些银监重点关注的校验公式去校验</span><span
lang=EN-US>EAST</span><span style='font-family:宋体'>数据。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 70"
src="img/image019.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：重点校验页面</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029296"><span lang=EN-US>1.2.8</span>整体校验</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>整体校验的功能就是整合所以的校验公式进行校验，这样做是为了方便用户操作，一次性完成所有类型的校验。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 73"
src="img/image020.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：整体校验页面</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029297"><span lang=EN-US>1.2.9</span>校验汇总</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>对于</span><span
lang=EN-US>EAST</span><span style='font-family:宋体'>的每一张表几乎都囊括了所有类型的校验，针对这些我们对校验情况以每张表为主体进行了汇总。校验汇总功能就是实现这样的汇总操作，如果通过了校验则是显示绿色相反就是红色。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=418 height=206 id="图片 76"
src="img/image021.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：校验汇总页面</span></p>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>如果用户想要查询具体的汇总情况，可以选择想要查询的汇总记录，双击就是跳转到明细情况界面。在这个界面用户能够跟直观的看到改汇总记录的具体情况。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=418 height=205 id="图片 79"
src="img/image022.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：汇总情况明细图页面</span></p>

<p class=MsoNoSpacing><span lang=EN-US>&nbsp;</span></p>

<h2><a name="_Toc444029298"><span lang=EN-US>1.3 </span></a><span
style='font-family:宋体'>客户风险内部预审核</span></h2>

<h3 style='text-indent:15.0pt'><a name="_Toc444029299"><span lang=EN-US>1.3.1</span>报表导入</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>报表导入功能是客户风险数据进入系统的接口，用户只需要选择报表的日期和选中需要进入系统的报表文件，这样就能轻松的将数据引入到系统中来。同时，我们也会给每一次的报表的导入做一个记录方便查看。我们系统还额外的提供了下载导入报表的功能，给报表在我们的系统中做一个备份。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 82"
src="img/image023.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：报表导入页面</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029300"><span lang=EN-US>1.3.2</span>校验公式维护</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>校验公式维护功能和其他的公式维护界面一样，他用了维护检验客户风险数据的公式，对这些公式进行新增、修改、删除、查找的功能。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 94"
src="img/image024.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：校验公式维护页面</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029301"><span lang=EN-US>1.3.3</span>基础校验</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>基础校验主要的功能是校验客户风险的数据是否满足银监对数据格式的基本要求。比如：某些字段不能为空、字段长度要在规定的范围内、字段填写的内容要在选填项中等等。同时将不满足条件的数据给记录下来提供功客户去查看、导出</span><span
lang=EN-US>EXCEL</span><span style='font-family:宋体'>。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 97"
src="img/image025.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：基础校验页面</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029302"><span lang=EN-US>1.3.4</span>确定性校验</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>确定性校验主要是一种关系的校验，这种关系可能是表内的字段间的关系，也可能是表间之间的关系。而这种关系是业务上的关系，也是银监对客户风险数据要求的重点。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 100"
src="img/image026.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：确定性校验页面</span></p>

<h2><a name="_Toc444029303"><span lang=EN-US>1.4 </span></a><span
style='font-family:宋体'>客户风险与</span><span lang=EN-US>1104</span><span
style='font-family:宋体'>校验</span></h2>

<h3 style='text-indent:15.0pt'><a name="_Toc444029304"><span lang=EN-US>1.4.1</span>校验公式维护</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>校验公式维护功能主要用于维护校验客户风险与</span><span
lang=EN-US>1104</span><span style='font-family:宋体'>关系的公式，对这些公式进行新增、修改、删除、查找。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=204 id="图片 103"
src="img/image027.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：校验公式维护界面</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029305"><span lang=EN-US>1.4.2</span>校验与结果查询</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>检验也结果查询功能主要是根据之前设定的校验公式对客户风险和</span><span
lang=EN-US>1104</span><span style='font-family:宋体'>数据进行跨系统的校验（主要是</span><span
lang=EN-US>1104</span><span style='font-family:宋体'>报表中的指标与客户风险中字段汇总的对比），并将校验的结果记录在数据库中。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 106"
src="img/image028.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：校验结果与查询页面</span></p>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>为了让客户能够清楚、方便的了解对数据的明确要求，客户可以双击任意的一条校验结果，页面将跳转到公式的具体情况页面上。</span></p>

<h2><a name="_Toc444029306"><span lang=EN-US>1.5 </span></a><span
style='font-family:宋体'>客户风险与</span><span lang=EN-US>EAST</span><span
style='font-family:宋体'>校验</span></h2>

<h3 style='text-indent:15.0pt'><a name="_Toc444029307"><span lang=EN-US>1.5.1</span>校验公式维护</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>校验公式维护的主要作用——维护客户风险与</span><span
lang=EN-US>EAST</span><span style='font-family:宋体'>校验（主要是校验客户风险与</span><span
lang=EN-US>EAST</span><span style='font-family:宋体'>中相同指标下的值是否相同）的公式，对公式进行新增、修改、删除、查询操作。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=206 id="图片 109"
src="img/image029.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：校验公式维护页面</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029308"><span lang=EN-US>1.5.2</span>校验与结果查询</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>根据之前配置的客户风险与</span><span
lang=EN-US>EAST</span><span style='font-family:宋体'>之前的校验公式对客户风险和</span><span
lang=EN-US>EAST</span><span style='font-family:宋体'>之前数据进行跨系统的表间校验，并记录校验的结果。用户可以通过校验的表名、字段名、校验的日期对校验结果进行筛选查看。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=206 id="图片 112"
src="img/image030.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：校验与结果查询页面</span></p>

<h2><a name="_Toc444029309"><span lang=EN-US>1.6 1104</span></a><span
style='font-family:宋体'>与</span><span lang=EN-US>EAST</span><span
style='font-family:宋体'>校验</span></h2>

<h3 style='text-indent:15.0pt'><a name="_Toc444029310"><span lang=EN-US>1.6.1</span>校验公式维护</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>校验公式维护功能主要是维护</span><span
lang=EN-US>1104</span><span style='font-family:宋体'>与</span><span lang=EN-US>EAST</span><span
style='font-family:宋体'>之间的校验（主要是</span><span lang=EN-US>EAST</span><span
style='font-family:宋体'>的指标汇总和</span><span lang=EN-US>1104</span><span
style='font-family:宋体'>报表指标的校验）公式，其中包含了对公式的新增、维护、修改、按条件查找。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=418 height=205 id="图片 115"
src="img/image031.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：校验公式维护页面</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029311"><span lang=EN-US>1.6.2</span>校验与结果查询</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>校验与结果查询功能主要是应用之前配置的</span><span
lang=EN-US>1104</span><span style='font-family:宋体'>和</span><span lang=EN-US>EAST</span><span
style='font-family:宋体'>之前的校验公式对数据进行跨系统的表间的校验，并将校验的结果记录在数据库中。用户可以通过添加校验的</span><span
lang=EN-US>EAST</span><span style='font-family:宋体'>和</span><span lang=EN-US>1104</span><span
style='font-family:宋体'>报名的名称作为筛选条件对检验结果进行筛选查看。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=204 id="图片 118"
src="img/image032.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：校验与结果查询</span></p>

<h2><a name="_Toc444029312"><span lang=EN-US>1.7 1104</span></a><span
style='font-family:宋体'>分析指标预警</span></h2>

<h3 style='text-indent:15.0pt'><a name="_Toc444029313"><span lang=EN-US>1.7.1</span>机构指标分析报表</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>机构指标分析报表功能主要的作用是指标分析——用户可以设定想要分析的指标，设定完成后用户只需要选择想要分析的报表日期和指标周期就能获得相应的指标数据。对于分析出来的结果客户还能看到与上期、年初、去年同期的比较情况，而且用户还可以按照之前设计好的模板将分析的结果导入到</span><span
lang=EN-US>EXCEL</span><span style='font-family:宋体'>中。</span></p>

<p class=MsoNoSpacing><b><span lang=EN-US><img width=417 height=205 id="图片 121"
src="img/image033.png"></span></b></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：机构指标分析报表</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029314"><span lang=EN-US>1.7.2</span>单机构多指标分析</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>单机构多指标分析这个功能是在之前机构指标分析报表功能的延续，这个功能可以同时分析出客户选择的数据段内报表的指标情况。用户只需要选择指标的周期、要分析的指标、报表开始时间、报表结束时间，这样用户就能得到多期的指标分析情况。</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 124"
src="img/image034.png"></span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：单机构多指标分析</span></p>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>为了更直观的展示指标分析的情况，我们还额外的提供了图表分析模式，用户只需要点击图表按钮即可进入图表分析模型下查看指标分析的结果。</span></p>

<p class=MsoNoSpacing><span lang=EN-US><img width=417 height=205 id="图片 127"
src="img/image035.png"></span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：单机构多指标分析图表</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029315"><span lang=EN-US>1.7.3</span>系统指标信息维护</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>系统指标信息维护功能和大多数维护功能类型类似，这个功能主要是维护指标信息，给指标分析提供一个具体的标准。这个功能包含了对指标信息的新增、修改、删除、停用、查找操作以及对指标的版本情况进行维护。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 130"
src="img/image036.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：系统指标信息维护页面</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=205 id="图片 133"
src="img/image037.png"></span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNoSpacing><span style='font-family:宋体'>图：系统指标版本信息维护页面</span></p>

<h3 style='text-indent:15.0pt'><a name="_Toc444029316"><span lang=EN-US>1.7.4</span>机构指标数据维护</a></h3>

<p class=MsoNormal style='text-indent:24.0pt'><span style='font-family:宋体'>机构指标数据维护这个功能主要作用是提供给用户一个手工的修改指标数据的接口，在这个功能下，用户可以很快捷的维护指标数据并保存在数据库中。</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US><img width=417 height=202 id="图片 136"
src="img/image038.png"></span><span lang=EN-US style='font-family:微软雅黑'>&nbsp;</span></p>

</div>

			</div>
		</div>
	</div>
</body>
</html>

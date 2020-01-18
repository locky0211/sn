<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>机构报送耗时情况概览</title>
<!-- Bootstrap -->
<script type="text/javascript" src="echarts/dist/echarts-all.js"></script>
<script type="text/javascript" src="common/js/highCharts/highcharts.js"></script>
<script type="text/javascript" src="js/show_charts.js"></script>

</head>
<body style="height:100%;">
	<!-- <div id="bgDiv" style="position: absolute; top: 0; left: 0; z-index: -1">
		<img id="bgImg" style="width: 100%; height: 100%;" src="">
	</div> -->
	<div class="row" style="text-align: center;margin-top: 10px;">
		<div style="float:right;width: 100%">
			<a iconCls="icon-goto" class="mini-button" style="float: left;text-align: center;margin-left: 5%" plain="true" onclick="addCheck()">切换</a>
			<img id="close"  style="float: right;text-align: center;margin-right: 4%" onclick="onClose()" src="images/close.png">
		</div>
	</div>
	
	<div class="row" id="rankChart" style="width: 100%;">
		<div class="col-md-6" style="width: 48%;height: 95%; float: left;">
			<div id="zfpm" style="height: 90%;width:90%;float: right"></div>
		</div>

		<div class="col-md-6" style="width: 48%; float: right;">

			<div class="row">
				<div class="col-md-12" style="float: right;text-align: center;margin-right: 8%">
					<span>采集日期：</span><input id="dataDateS" name="dataDateS" class="mini-monthpicker" format="yyyyMM" style="width: 100px;color: #000000" onvaluechanged="changeDate()" />
				</div>
			</div> 
			
			<div class="row">
				<div class="col-md-12">
					<div id="qstj" style="height: 40%;width: 100%; margin-right: 10%"></div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-12">
					<div id="xxtj" style="height: 40%;margin-top: 5%"></div>
				</div>
			</div>

		</div>
	</div>
	
	<div class="row" id="rankTable" style="width: 100%; display:none;" align="center" >
		<div id="rankGrid" class="mini-datagrid" style="width: 95%; height: 100%;" showEmptyText="true" emptyText="没有数据，请导入打分明细" url="${base}/east/rank/getResultList.nut" pageSize="500" allowCellEdit="true" showPager="flase"
			showModified="false">
		</div>
	</div>
	
</body>
</html>
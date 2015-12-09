package {
dynamic class $lzc$class_Chart extends LzView {
/* -*- file: common/components/Chart.lzx#9 -*- */
static var tagname = "Chart";static var children = [{attrs: {$classrootdepth: 1, $delegates: ["oninited", "$my", null], height: 40, name: "tooltip", options: {ignorelayout: true}, txt: void 0, visible: false, width: new LzAlwaysExpr("$mw", "$mx", null), x: new LzAlwaysExpr("$mu", "$mv", null), y: 50}, "class": $lzc$class__m11}];static var attributes = new LzInheritedHash(LzView.attributes);function $mb ($0) {
/* -*- file: #8 -*- */
this.setAttribute("shadowcolor", LzColorUtils.convertColor("rgba(154,154,154,0.7)"))
}
/* -*- file: #9 -*- */
function $mc ($0) {
/* -*- file: #9 -*- */
var $1 = [];
/* -*- file: -*- */
if ($1 !== this["xAxis"] || !this.inited) {
this.setAttribute("xAxis", $1)
}}
/* -*- file: common/components/Chart.lzx#9 -*- */
function $md () {
/* -*- file: -*- */
try {
/* -*- file: common/components/Chart.lzx#12 -*- */
return []
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var xAxis;function $me ($0) {
/* -*- file: common/components/Chart.lzx#10 -*- */
var $1 = [];
/* -*- file: -*- */
if ($1 !== this["datas"] || !this.inited) {
this.setAttribute("datas", $1)
}}
/* -*- file: common/components/Chart.lzx#10 -*- */
function $mf () {
/* -*- file: -*- */
try {
/* -*- file: common/components/Chart.lzx#13 -*- */
return []
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var datas;function $mg ($0) {
/* -*- file: common/components/Chart.lzx#11 -*- */
var $1 = [];
/* -*- file: -*- */
if ($1 !== this["dataSet"] || !this.inited) {
this.setAttribute("dataSet", $1)
}}
/* -*- file: common/components/Chart.lzx#11 -*- */
function $mh () {
/* -*- file: -*- */
try {
/* -*- file: common/components/Chart.lzx#14 -*- */
return []
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var dataSet;function $mi ($0) {
/* -*- file: common/components/Chart.lzx#12 -*- */
var $1 = [];
/* -*- file: -*- */
if ($1 !== this["labels"] || !this.inited) {
this.setAttribute("labels", $1)
}}
/* -*- file: common/components/Chart.lzx#12 -*- */
function $mj () {
/* -*- file: -*- */
try {
/* -*- file: common/components/Chart.lzx#15 -*- */
return []
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var labels;function $mk ($0) {
/* -*- file: common/components/Chart.lzx#13 -*- */
var $1 = [3914239, 16711935, 255, 65280, 16711680, 16776960, 6684774, 65484, 6723840, 5126270, 9255113, 16218273, 15457762];
/* -*- file: -*- */
if ($1 !== this["colors"] || !this.inited) {
this.setAttribute("colors", $1)
}}
/* -*- file: common/components/Chart.lzx#13 -*- */
function $ml () {
/* -*- file: -*- */
try {
/* -*- file: common/components/Chart.lzx#16 -*- */
return []
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var colors;var yTitle;var yTitle2;var title;var total;function $mm ($0) {
/* -*- file: common/components/Chart.lzx#18 -*- */
var $1 = [];
/* -*- file: -*- */
if ($1 !== this["types"] || !this.inited) {
this.setAttribute("types", $1)
}}
/* -*- file: common/components/Chart.lzx#18 -*- */
function $mn () {
/* -*- file: -*- */
try {
/* -*- file: common/components/Chart.lzx#21 -*- */
return []
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var types;function $mo ($0) {
/* -*- file: common/components/Chart.lzx#19 -*- */
var $1 = [];
/* -*- file: -*- */
if ($1 !== this["yMax"] || !this.inited) {
this.setAttribute("yMax", $1)
}}
/* -*- file: common/components/Chart.lzx#19 -*- */
function $mp () {
/* -*- file: -*- */
try {
/* -*- file: common/components/Chart.lzx#22 -*- */
return []
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var yMax;function $mq ($0) {
/* -*- file: common/components/Chart.lzx#20 -*- */
var $1 = [];
/* -*- file: -*- */
if ($1 !== this["yMin"] || !this.inited) {
this.setAttribute("yMin", $1)
}}
/* -*- file: common/components/Chart.lzx#20 -*- */
function $mr () {
/* -*- file: -*- */
try {
/* -*- file: common/components/Chart.lzx#23 -*- */
return []
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var yMin;var DrawMax;var DrawMin;var yStep;var columnWidth;var topSpace;var yAxisLableWidth;var yAxisLableWidth2;var colspace;var lastDotX;var lastDotY;function $ms ($0) {
/* -*- file: common/components/Chart.lzx#31 -*- */
var $1 = [];
/* -*- file: -*- */
if ($1 !== this["avgValue"] || !this.inited) {
this.setAttribute("avgValue", $1)
}}
/* -*- file: common/components/Chart.lzx#31 -*- */
function $mt () {
/* -*- file: -*- */
try {
/* -*- file: common/components/Chart.lzx#34 -*- */
return []
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var avgValue;var tooltipWidth;var isAllreadyDrawYAxis;var isAllreadyDrawXAxis;var isAllreadyDrawYBgLines;var drawDone;var extInfoIndex;var isDisplayOption;var isAxisMultiline;var chartBottomHeight;var waitXmlStr;function initDraw ($0) {
/* -*- file: common/components/Chart.lzx#44 -*- */
if (!this.drawDone) {
this.waitXmlStr = $0;
return
};
this.waitXmlStr = "";
this.drawDone = false;
while (this.subviews.length > 1) this.subviews[1].destroy();
this.tooltip.setAttribute("visible", false);
this.types = [];
this.dataSet = [];
this.datas = [];
this.xAxis = [];
this.labels = [];
this.pieLegends = [];
this.title = "";
if ($0 && $0 != "") {
try {
var $1:LzDataElement = lz.DataElement.stringToLzData($0, false, false);
this.title = $1.getAttr("title") ? $1.getAttr("title") : "";
this.types = $1.getAttr("types").split(",");
this.yTitle = $1.getAttr("yTitle") ? $1.getAttr("yTitle") : "";
if ($1.getAttr("colors")) this.colors = $1.getAttr("colors").split(",");
if ($1.getAttr("yMax")) this.yMax = $1.getAttr("yMax").split(",");
if ($1.getAttr("yMin")) this.yMin = $1.getAttr("yMin").split(",");
this.yTitle2 = $1.getAttr("yTitle2") ? $1.getAttr("yTitle2") : "NULL";
if ($1.getAttr("avgValue")) this.avgValue = $1.getAttr("avgValue").split(",");

this.isDisplayOption = $1.getAttr("isDisplayOption") ? Number($1.getAttr("isDisplayOption")) : 0;
this.isAxisMultiline = $1.getAttr("isAxisMultiline") ? Number($1.getAttr("isAxisMultiline")) : 0;
this.yAxisLableWidth = $1.getAttr("yAxisLableWidth") ? Number($1.getAttr("yAxisLableWidth")) : this.yAxisLableWidth;
if (this.isAxisMultiline == 1) {
this.chartBottomHeight = 45
};
if ($1.getAttr("extInfo")) {
try {
this.extInfoIndex = Number($1.getAttr("extInfo"))
}
/* -*- file: #80 -*- */
catch ($2) {}};



if (this.yMax[1] && this.isDisplayOption == 0) this.yAxisLableWidth2 = 22;
this.yStep = $1.getAttr("yStep") ? Number($1.getAttr("yStep")) : 10;
if ($1.getAttr("xAxis")) this.xAxis = $1.getAttr("xAxis").split(",");
if ($1.childNodes.length == 0) return;
for (var $3 = 0;$3 < $1.childNodes.length;$3++) {
this.dataSet[$3] = $1.childNodes[$3].getAttr("values").split(",");
if (this.types[$3] != "pie") {
this.labels[$3] = $1.childNodes[$3].getAttr("label")
} else {
this.labels = $1.childNodes[$3].getAttr("labels").split(",");
if (this.labels.length != this.dataSet[0].length) {
this.handleError("\u997C\u88C5\u56FE\u56FE\u4F8B\u7684\u4E2A\u6570\u4E0E\u6570\u636E\u7684\u4E2A\u6570\u4E0D\u4E00\u81F4. ");
return
}}}}


catch ($4) {
this.handleError("\u6570\u636EXML\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5. ");
return
}} else {

this.handleError("\u8BF7\u8F93\u5165XML\u56FE\u8868\u6570\u636E.");
return
};

if (this.types.length != this.dataSet.length) {
this.handleError("\u56FE\u8868\u7C7B\u578B\u4E2A\u6570\u4E0E\u6570\u636E\u6570\u91CF\u4E0D\u5339\u914D\uFF0C\u8BF7\u68C0\u67E5.");
return
};


this.total = 0;
var $5 = 0;
try {
for (var $6 = 0;$6 < this.dataSet.length;$6++) {
$5 = 0;
this.datas = this.dataSet[$6];
for (var $3 = 0;$3 < this.datas.length;$3++) {
$5 += Number(this.datas[$3])
};
if (this.total < $5) this.total = $5
}}
catch ($4) {
this.handleError("\u56FE\u8868\u6570\u636E\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5.");
return
};
if (this.title) {
var $7 = new (lz.text)(this);
if (this.title.indexOf("IBRI") == -1) {
this.topSpace = 42
} else {
this.topSpace = 52;
this.title = this.title.replace("IBRI", "<br>")
};
$7.setAttribute("width", 280);
$7.setAttribute("multiline", true);
$7.setAttribute("textalign", "center");
$7.setAttribute("text", this.title);
$7.setAttribute("fontsize", 14);
$7.setAttribute("fgcolor", 5592405);
$7.setAttribute("y", 2);
$7.setAttribute("x", (this.width - $7.width) / 2)
} else {
this.topSpace = 25
};

this.barNum = 0;
for (var $3 = 0;$3 < this.types.length;$3++) {
if (this.types[$3] == "bar") {
if (this.isDisplayOption == 0) {
this.barNum++
} else this.barNum = 1
} else if (this.types[$3] == "pie") {
if (this.types.length > 1) {
this.handleError("\u6570\u636E\u9519\u8BEF\uFF0C\u53EA\u80FD\u663E\u793A\u4E00\u4E2A\u997C\u72B6\u56FE.");
return
}}};


this.barIndex = -1;
this.columnWidth = 3 + (this.width - this.yAxisLableWidth - 10) / (this.dataSet[0].length * 2);
this.isAllreadyDrawYAxis = false;
this.isAllreadyDrawXAxis = false;
this.isAllreadyDrawYBgLines = false;
this.t = -1;

if (this.isDisplayOption == 0) {
if (!this.drawChartDel) this.drawChartDel = new (lz.Delegate)(this, "drawChart");
this.drawChart()
} else if (this.isDisplayOption == 1) {
this.t = 0;
this.drawOneChart(0)
} else {
this.t = 0;
drawAddBarChart()
}}


function drawChart ($0 = null) {
this.t += 1;
var $1 = 1600;
if (this.dataSet[this.t] && this.t < 10) {
this.datas = this.dataSet[this.t];
this.DrawMax = this.yMax[this.t] ? this.yMax[this.t] : this.yMax[0];
this.DrawMin = this.yMin[this.t] ? this.yMin[this.t] : this.yMin[0];
switch (this.types[this.t]) {
case "bar":
/* -*- file: #190 -*- */
$1 = 1600;this.drawAxis();this.drawBars();break;;case "line":
$1 = 100 * this.datas.length;this.drawAxis();this.drawLines();break;;case "pie":
this.drawPieLegend();this.drawPie();break;;case "gauge":
this.drawGauge();break;;default:
this.handleError("\u6570\u636EXML\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5.");break
};
this.isAllreadyDrawXAxis = true;
lz.Timer.addTimer(this.drawChartDel, $1)
} else {
this.drawDone = true;
if (this.waitXmlStr != "") {
initDraw(this.waitXmlStr)
}}}



function drawOneChart ($0) {
while (this.subviews.length > 1) this.subviews[1].destroy();
this.tooltip.setAttribute("visible", false);
this.isAllreadyDrawYAxis = false;
this.isAllreadyDrawXAxis = false;
this.isAllreadyDrawYBgLines = false;
this.barIndex = -1;
if (this.title) {
var $1 = new (lz.text)(this);
$1.setAttribute("fontsize", 15);
$1.setAttribute("fgcolor", 5592405);
$1.setAttribute("text", this.title);
$1.setAttribute("y", 2);
$1.setAttribute("x", (this.width - $1.width) / 2);
this.topSpace = 42
} else {
this.topSpace = 25
};
if (this.dataSet[$0]) {
this.datas = this.dataSet[$0];
this.DrawMax = this.yMax[$0] ? this.yMax[$0] : this.yMax[0];
this.DrawMin = this.yMin[$0] ? this.yMin[$0] : this.yMin[0];
switch (this.types[$0]) {
case "bar":
/* -*- file: #229 -*- */
this.drawAxis();this.drawBars();break;;case "line":
this.drawAxis();this.drawLines();break;;case "pie":
this.drawPieLegend();this.drawPie();break;;case "gauge":
this.drawGauge();break;;default:
this.handleError("\u6570\u636EXML\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5.");break
};
this.isAllreadyDrawXAxis = true
};
this.drawDone = true;
if (this.waitXmlStr != "") {
initDraw(this.waitXmlStr)
}}


function drawAddBarChart ($0 = null) {
while (this.subviews.length > 1) this.subviews[1].destroy();
this.tooltip.setAttribute("visible", false);
this.isAllreadyDrawYAxis = false;
this.isAllreadyDrawXAxis = false;
this.isAllreadyDrawYBgLines = false;
this.barIndex = -1;
if (this.title) {
var $1 = new (lz.text)(this);
$1.setAttribute("fontsize", 15);
$1.setAttribute("fgcolor", 5592405);
$1.setAttribute("text", this.title);
$1.setAttribute("y", 2);
$1.setAttribute("x", (this.width - $1.width) / 2);
this.topSpace = 42
} else {
this.topSpace = 25
};

this.DrawMax = this.yMax[0];
this.DrawMin = this.yMin[0];
this.drawAxis();


this.barIndex++;
var $2 = this.columnWidth / this.barNum;

this.datas = this.dataSet[0];
var $3 = this.datas.length;
this.colspace = (this.width - (this.yAxisLableWidth + this.yAxisLableWidth2 + 10) - $3 * this.columnWidth) / ($3 + 1);
var $4 = 0;
var $5 = 0;
var $6 = 0;
var $7 = 1;
var $8 = [];
var $9 = 0;
var $a = 0;
var $b = 0;
var $c = 0;
for (var $d = 0;$d < $3;$d++) {
$4 = Number(this.datas[$d]);
$b = $4;
$5 = this.barIndex * $2 + this.yAxisLableWidth + $d * this.columnWidth + ($d + 1) * this.colspace;
if ($4 != 999999) {
var $e = new (lz.ChartBarColumn)(this);
$e.setAttribute("x", $5);
$e.setAttribute("width", $2);
$e.val = $4;
$e.clickId = this.xAxis[$d];
$e.setAttribute("y", this.height - this.chartBottomHeight);
$e.tooltip = this.labels[0] + "<br>" + $e.val;

$a = (this.height - this.chartBottomHeight - this.topSpace) * (($e.val - this.DrawMin) / (this.DrawMax - this.DrawMin));
$e.setAttribute("toHeight", $a);

$9 = this.height - $e.toHeight - this.chartBottomHeight;
$e.setAttribute("toY", $9);

$e.setAttribute("bgcolor", this.colors[0]);
$e.growUp.doStart()
};

if (!this.isAllreadyDrawXAxis) {
var $1 = new (lz.text)(this);
if (this.isAxisMultiline == 1) {
$1.setAttribute("multiline", true);
$1.setAttribute("width", 16)
};
$1.setAttribute("text", this.xAxis[$d]);
$1.setAttribute("y", this.height - (this.chartBottomHeight - 2));
$1.setAttribute("x", this.yAxisLableWidth + $d * this.columnWidth + ($d + 1) * this.colspace + this.columnWidth / 2 - $1.width / 2)
};

for ($7 = 1;$7 < this.dataSet.length;$7++) {
$8 = this.dataSet[$7];
$4 = Number($8[$d]);

if ($4 != 999999 && $4 != 0) {
var $e = new (lz.ChartBarColumn)(this);
$e.setAttribute("x", $5);
$e.setAttribute("width", $2);
$e.val = $4;
$4 = $b + $4;
$b = $4;
$e.clickId = this.xAxis[$d];

$e.tooltip = this.labels[$7] + "<br>" + $e.val;

$c = (this.height - this.chartBottomHeight - this.topSpace) * (($4 - this.DrawMin) / (this.DrawMax - this.DrawMin));

$e.setAttribute("toHeight", $c - $a);

$e.setAttribute("y", $9);

$9 = $9 - $e.toHeight;

$a = $c;

$e.setAttribute("toY", $9);
$e.setAttribute("bgcolor", this.colors[$7]);
$e.growUp.doStart()
}}};



this.isAllreadyDrawXAxis = true;
this.drawDone = true;
if (this.waitXmlStr != "") {
initDraw(this.waitXmlStr)
}}


function handleError ($0) {

this.drawDone = true
}

function selectedLabel ($0) {
if (this.isDisplayOption == 0 || this.isDisplayOption == 2) return;
var $1 = -1;
for (var $2 = 0;$2 < this.subviews.length;$2++) {
if (this.subviews[$2] instanceof lz.LabelText) {
$1++;
if (this.subviews[$2].text == $0) {
this.t = $1;
this.subviews[$2].setAttribute("fgcolor", 6710886)
} else {
this.subviews[$2].setAttribute("fgcolor", 16777104)
}}};


this.drawOneChart(this.t)
}

function drawPieLegend () {
for (var $0 = 0;$0 < this.labels.length;$0++) {
if (this.labels[$0] == "") break;
var $1 = new (lz.ChartPieLegend)(this);
$1.val = Math.round(this.datas[$0] * 10000 / this.total) / 100;
$1.setAttribute("x", this.height - this.topSpace + 10);
$1.setAttribute("y", this.topSpace + $0 * 18);
$1.setAttribute("dotColor", this.colors[$0]);
$1.setAttribute("label", this.labels[$0] + " (" + this.datas[$0] + ")");
this.pieLegends[$0] = $1
}}


function drawAxis () {
if (this.isAllreadyDrawYAxis) return;

var $0 = 5;
if (this.yTitle && this.yTitle != "") {
var $1 = new (lz.text)(this);
$1.setAttribute("text", this.yTitle);
$1.setAttribute("fontsize", 14);
$1.setAttribute("fgcolor", 6710886);
$1.setAttribute("y", this.topSpace - 22);
$1.setAttribute("x", $0);
$0 += $1.width + 10
} else $0 = 40;


for (var $2 = 0;$2 < this.labels.length;$2++) {
if (this.labels[$2] == "") break;
var $3 = new (lz.view)(this);
$3.setAttribute("x", $0);
$3.setAttribute("y", this.topSpace - 15);
$3.setAttribute("width", 10);
$3.setAttribute("height", 10);
$3.setAttribute("bgcolor", this.colors[$2]);
$3.setAttribute("opacity", 0.7);
$0 += $3.width + 2;
var $1 = new (lz.LabelText)(this);
$1.setAttribute("text", this.labels[$2]);
$1.setAttribute("fontsize", 14);
if (this.isDisplayOption == 1 && $2 == this.t) {
$1.setAttribute("fgcolor", 6710886)
} else if (this.isDisplayOption == 0 || this.isDisplayOption == 2) {
$1.setAttribute("fgcolor", 6710886)
} else $1.setAttribute("fgcolor", 13421823);
$1.dataIndex = $2;
$1.setAttribute("y", this.topSpace - 20);
$1.setAttribute("x", $0);
$0 += $1.width + 5
};

if (this.draw) this.draw.destroy();
this.draw = new (lz.DrawTool)(this);
this.draw.lineWidth = 1;
this.draw.strokeStyle = 10066329;
this.draw.moveTo(this.yAxisLableWidth, this.topSpace);
this.draw.lineTo(this.yAxisLableWidth, this.height - this.chartBottomHeight);
this.draw.moveTo(this.width - this.yAxisLableWidth2 - 10, this.topSpace);
this.draw.lineTo(this.width - this.yAxisLableWidth2 - 10, this.height - this.chartBottomHeight);
var $4 = Math.round((this.yMax[0] - this.yMin[0]) / this.yStep);
var $5 = (this.height - this.chartBottomHeight - this.topSpace) / $4;
var $6 = -1;
var $7 = this.yStep;
if (this.yMax[1] && this.yMax[1] != -1 && this.isDisplayOption == 0) {
if (this.yMax[1] - this.yMin[1] <= 0.01) {
$6 = Math.round((this.yMax[1] - this.yMin[1]) / $4 * 10000) / 10000
} else if (this.yMax[1] - this.yMin[1] <= 0.1) {
$6 = Math.round((this.yMax[1] - this.yMin[1]) / $4 * 1000) / 1000
} else if (this.yMax[1] - this.yMin[1] <= 5) {
$6 = Math.round((this.yMax[1] - this.yMin[1]) / $4 * 10) / 10
} else {
$6 = Math.round((this.yMax[1] - this.yMin[1]) / $4)
}} else {

if (this.yMax[this.t] - this.yMin[this.t] <= 0.01) {
$7 = Math.round((this.yMax[this.t] - this.yMin[this.t]) / $4 * 10000) / 10000
} else if (this.yMax[this.t] - this.yMin[this.t] <= 0.1) {
$7 = Math.round((this.yMax[this.t] - this.yMin[this.t]) / $4 * 1000) / 1000
} else if (this.yMax[this.t] - this.yMin[this.t] <= 5) {
$7 = Math.round((this.yMax[this.t] - this.yMin[this.t]) / $4 * 10) / 10
} else {
$7 = Math.round((this.yMax[this.t] - this.yMin[this.t]) / $4)
}};

var $8 = 0;
for (var $2 = 0;$2 <= $4;$2++) {
this.draw.moveTo(this.yAxisLableWidth, $2 * $5 + this.topSpace);
this.draw.lineTo(this.width - this.yAxisLableWidth2 - 10, $2 * $5 + this.topSpace);
var $1 = new (lz.text)(this);
if ($7 < 0.01) {
$8 = this.yMax[this.t] - Math.round($7 * $2 * 1000) / 1000;
$1.setAttribute("text", Math.round($8 * 1000) / 1000)
} else if ($7 < 0.1) {
$8 = this.yMax[this.t] - Math.round($7 * $2 * 100) / 100;
$1.setAttribute("text", Math.round($8 * 100) / 100)
} else if ($7 < 1) {
$8 = this.yMax[this.t] - Math.round($7 * $2 * 10) / 10;
$1.setAttribute("text", Math.round($8 * 10) / 10)
} else {
$8 = this.yMax[this.t] - Math.round($7 * $2);
$1.setAttribute("text", Math.round($8 * 10) / 10)
};

$1.setAttribute("y", $2 * $5 + this.topSpace - 8);
$1.setAttribute("x", this.yAxisLableWidth - $1.width);

if ($6 != -1) {
$1.setAttribute("fgcolor", this.colors[0]);
var $9 = new (lz.text)(this);
if ($6 < 0.01) {
$8 = this.yMax[1] - Math.round($6 * $2 * 1000) / 1000;
$9.setAttribute("text", Math.round($8 * 1000) / 1000)
} else if ($6 < 0.1) {
$8 = this.yMax[1] - Math.round($6 * $2 * 100) / 100;
$9.setAttribute("text", Math.round($8 * 100) / 100)
} else if ($6 < 1) {
$8 = this.yMax[1] - Math.round($6 * $2 * 10) / 10;
$9.setAttribute("text", Math.round($8 * 10) / 10)
} else {
$8 = this.yMax[1] - Math.round($6 * $2);
$9.setAttribute("text", Math.round($8 * 10) / 10)
};

$9.setAttribute("fgcolor", this.colors[1]);
$9.setAttribute("y", $1.y);
$9.setAttribute("x", this.width - this.yAxisLableWidth2 - 10)
}};

this.draw.stroke();


if (this.avgValue[this.t]) {
if (this.avgDraw) this.avgDraw.destroy();
this.avgDraw = new (lz.DrawTool)(this);
this.avgDraw.lineWidth = 4;
this.avgDraw.strokeStyle = 205;
var $a = (this.height - this.chartBottomHeight - this.topSpace) * ((this.yMax[this.t] - Number(this.avgValue[this.t])) / (this.yMax[this.t] - this.yMin[this.t]));
$a = $a + this.topSpace;
this.avgDraw.moveTo(this.yAxisLableWidth, $a);
this.avgDraw.lineTo(this.width - this.yAxisLableWidth2 - 10, $a);
this.avgDraw.stroke()
};

this.isAllreadyDrawYAxis = true
}

function drawBars () {
this.barIndex++;
var $0 = this.columnWidth / this.barNum;
var $1 = this.datas.length;
this.colspace = (this.width - (this.yAxisLableWidth + this.yAxisLableWidth2 + 10) - $1 * this.columnWidth) / ($1 + 1);
var $2 = 0;
var $3 = 0;
var $4 = 0;
for (var $5 = 0;$5 < $1;$5++) {
$2 = Number(this.datas[$5]);
$3 = this.barIndex * $0 + this.yAxisLableWidth + $5 * this.columnWidth + ($5 + 1) * this.colspace;
if ($2 != 999999) {
var $6 = new (lz.ChartBarColumn)(this);
$6.setAttribute("x", $3);
$6.setAttribute("width", $0);
$6.val = $2;
$6.clickId = this.xAxis[$5];
$6.setAttribute("y", this.height - this.chartBottomHeight);
$6.tooltip = this.labels[this.t] + "<br>" + $6.val;
$6.setAttribute("toHeight", (this.height - this.chartBottomHeight - this.topSpace) * (($6.val - this.DrawMin) / (this.DrawMax - this.DrawMin)));
$6.setAttribute("toY", this.height - $6.toHeight - this.chartBottomHeight);
$6.setAttribute("bgcolor", this.colors[this.t]);
$6.growUp.doStart()
};









if (!this.isAllreadyDrawXAxis) {
var $7 = new (lz.text)(this);
if (this.isAxisMultiline == 1) {
$7.setAttribute("multiline", true);
$7.setAttribute("width", 16)
};
$7.setAttribute("text", this.xAxis[$5]);

if (this.extInfoIndex == $5) {
$7.setAttribute("fgcolor", 13369344)
} else $7.setAttribute("fgcolor", 6710886);

$7.setAttribute("y", this.height - (this.chartBottomHeight - 2));
$7.setAttribute("x", this.yAxisLableWidth + $5 * this.columnWidth + ($5 + 1) * this.colspace + this.columnWidth / 2 - $7.width / 2)
}}}



function drawLines () {
if (!this.drawLineDotDel) this.drawLineDotDel = new (lz.Delegate)(this, "_drawLineDot");
this.lineColumnWidth = 6;
var $0 = this.datas.length;
this.colspace = (this.width - (this.yAxisLableWidth + this.yAxisLableWidth2 + 10) - $0 * this.lineColumnWidth) / ($0 + 1);
if (!this.isAllreadyDrawYBgLines) {
var $1 = 0;
for (var $2 = 0;$2 < this.datas.length;$2++) {
$1 = this.yAxisLableWidth + $2 * this.lineColumnWidth + ($2 + 1) * this.colspace;
if (!isAllreadyDrawXAxis) {
var $3 = new (lz.text)(this);
if (this.isAxisMultiline == 1) {
$3.setAttribute("multiline", true);
$3.setAttribute("width", 16)
};
$3.setAttribute("text", this.xAxis[$2]);
if (this.extInfoIndex == $2) {
$3.setAttribute("fgcolor", 13369344)
} else $3.setAttribute("fgcolor", 6710886);

$3.setAttribute("y", this.height - (this.chartBottomHeight - 2));
$3.setAttribute("x", $1 + this.lineColumnWidth / 2 - $3.width / 2)
};
this.draw.drawLine($1 + 2, this.topSpace, $1 + 2, this.height - this.chartBottomHeight)
};
this.isAllreadyDrawYBgLines = true
};
this.drawLineIndex = 0;
this.lineDraw = new (lz.DrawTool)(this);
this._drawLineDot()
}

function _drawLineDot ($0 = null) {
if (this.drawLineIndex < this.datas.length && this.drawLineIndex < 100) {
var $1 = Number(this.datas[this.drawLineIndex]);
var $2 = this.yAxisLableWidth + this.drawLineIndex * this.lineColumnWidth + (this.drawLineIndex + 1) * this.colspace;
if ($1 != 999999) {
var $3 = new (lz.ChartLinedot)(this);
$3.setAttribute("x", $2);
$3.setAttribute("y", this.height - this.chartBottomHeight);
$3.setAttribute("bgcolor", this.colors[this.t]);
$3.dotColor = this.colors[this.t];
$3.val = $1;
$3.tooltip = this.labels[this.t] + "<br>" + $3.val;
var $4 = (this.height - this.chartBottomHeight - this.topSpace) * (($3.val - this.DrawMin) / (this.DrawMax - this.DrawMin));
$3.setAttribute("toY", this.height - $4 - this.chartBottomHeight);
$3.growUp.doStart();
if (this.drawLineIndex > 0 && this.lastDotX != 999999) this.lineDraw.drawLine(this.lastDotX + 2, this.lastDotY + 2, $3.x + 2, $3.toY + 2, 2, this.colors[this.t]);
this.lastDotX = $3.x;
this.lastDotY = $3.toY
} else {







this.lastDotX = 999999;
this.lastDotY = 999999
};
this.drawLineIndex += 1;
lz.Timer.addTimer(this.drawLineDotDel, 50)
}}


function drawPie () {
if (!this.drawPiePieceDel) this.drawPiePieceDel = new (lz.Delegate)(this, "_drawPiePiece");
this.or = (this.height - this.topSpace - 20) / 2;
this.ox = 20 + this.or;
this.oy = this.topSpace + this.or - 10;
this.startAngle = 0;
this.drawPieIndex = 0;
this.drawDone = false;
this.pieTooltipDrawDot = null;
this._drawPiePiece()
}

function _drawPiePiece ($0 = null) {
if (this.drawPieIndex < this.datas.length && this.drawPieIndex < 100) {
var $1 = 2 * (this.datas[this.drawPieIndex] / this.total) * Math.PI;
var $2 = new (lz.DrawTool)(this);
if (!this.colors[this.drawPieIndex]) this.colors[this.drawPieIndex] = this.colors[this.drawPieIndex - this.colors.length];
$2.drawSector(this.ox, this.oy, this.or, this.startAngle, $1, this.colors[this.drawPieIndex]);
this.pieLegends[this.drawPieIndex].targetX = this.ox + this.or / 2 * Math.cos(this.startAngle + $1 / 2);
this.pieLegends[this.drawPieIndex].targetY = this.oy - this.or / 2 * Math.sin(this.startAngle + $1 / 2);
this.drawPieIndex += 1;
this.startAngle += $1;
lz.Timer.addTimer(this.drawPiePieceDel, 300)
} else this.drawDone = true
}

function drawGauge () {
if (this.datas[0] < 0 || this.datas[0] > 200) {
this.handleError("\u6570\u636E\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5.");
return
};
if (!this.drawGaugePointerDel) this.drawGaugePointerDel = new (lz.Delegate)(this, "_drawGaugePointer");
this.or = this.height - this.topSpace - 10;
this.ox = 10 + this.or;
this.oy = this.topSpace + this.or - 5;
this.currentValue = 0;
this.drawDone = false;

if (this.gaugeBackgroundDraw) this.gaugeBackgroundDraw.destroy();
this.gaugeBackgroundDraw = new (lz.DrawTool)(this);
var $0 = this.ox + this.or;
var $1 = this.oy;
this.gaugeBackgroundDraw.moveTo(this.ox, this.oy);
this.gaugeBackgroundDraw.lineTo($0, $1);
var $2 = 0;
var $3 = 0;
var $4 = 0;
var $5 = Math.PI / 360;
while ($2 < Math.PI) {
$2 += $5;
$3 = this.ox + this.or * Math.cos($2);
$4 = this.oy - this.or * Math.sin($2);
this.gaugeBackgroundDraw.lineTo($3, $4)
};
this.gaugeBackgroundDraw.lineTo(this.ox, this.oy);
this.gaugeBackgroundDraw.closePath();
this.gaugeBackgroundDraw.strokeStyle = 3914239;
this.gaugeBackgroundDraw.lineWidth = 2;
this.gaugeBackgroundDraw.stroke();
this.gaugeBackgroundDraw.fillStyle = 3914239;
this.gaugeBackgroundDraw.globalAlpha = 0.3;
this.gaugeBackgroundDraw.fill();


if (this.datas[1] && this.datas[1] != -1) {
var $6 = (1 - this.datas[1] / 100) * Math.PI;
var $7 = new (lz.DrawTool)(this);

var $8 = this.ox + (this.or - 23) * Math.cos(0);
var $9 = this.oy - (this.or - 23) * Math.sin(0);
var $a = this.ox + (this.or - 45) * Math.cos(0);
var $b = this.oy - (this.or - 45) * Math.sin(0);
$7.moveTo($a, $b);
$7.lineTo($8, $9);
var $2 = 0;
var $3 = 0;
var $4 = 0;
var $5 = Math.PI / 360;
while ($2 < $6) {
$2 += $5;
$3 = this.ox + (this.or - 23) * Math.cos($2);
$4 = this.oy - (this.or - 23) * Math.sin($2);
$7.lineTo($3, $4)
};
$8 = this.ox + (this.or - 45) * Math.cos($2);
$9 = this.oy - (this.or - 45) * Math.sin($2);
$7.lineTo($8, $9);

while ($2 > 0) {
$2 = $2 - $5;
$3 = this.ox + (this.or - 45) * Math.cos($2);
$4 = this.oy - (this.or - 45) * Math.sin($2);
$7.lineTo($3, $4)
};

$7.moveTo($a, $b);

$7.closePath();
$7.fillStyle = 13382451;
$7.globalAlpha = 0.7;
$7.fill()
};


if (this.datas[2] && this.datas[2] != -1) {
var $c = 0;
if (this.datas[1]) $c = (1 - this.datas[1] / 100) * Math.PI;
var $d = (1 - this.datas[2] / 100) * Math.PI;
var $e = new (lz.DrawTool)(this);

var $8 = this.ox + (this.or - 23) * Math.cos($c);
var $9 = this.oy - (this.or - 23) * Math.sin($c);
var $a = this.ox + (this.or - 45) * Math.cos($c);
var $b = this.oy - (this.or - 45) * Math.sin($c);
$e.moveTo($a, $b);
$e.lineTo($8, $9);
var $2 = $c;
var $3 = 0;
var $4 = 0;
var $5 = Math.PI / 360;
while ($2 < $d) {
$2 += $5;
$3 = this.ox + (this.or - 23) * Math.cos($2);
$4 = this.oy - (this.or - 23) * Math.sin($2);
$e.lineTo($3, $4)
};
$8 = this.ox + (this.or - 45) * Math.cos($2);
$9 = this.oy - (this.or - 45) * Math.sin($2);
$e.lineTo($8, $9);

while ($2 > $c) {
$2 = $2 - $5;
$3 = this.ox + (this.or - 45) * Math.cos($2);
$4 = this.oy - (this.or - 45) * Math.sin($2);
$e.lineTo($3, $4)
};

$e.moveTo($a, $b);

$e.closePath();
$e.fillStyle = 16776960;
$e.globalAlpha = 0.7;
$e.fill()
};

for (var $f = 1;$f < 10;$f++) {
var $g = new (lz.text)(this);
$g.setAttribute("text", $f * 10);
$g.setAttribute("x", this.ox + (this.or - 10) * Math.cos((1 - $f * 0.1) * Math.PI) - $g.width / 2);
$g.setAttribute("y", this.oy - (this.or - 10) * Math.sin((1 - $f * 0.1) * Math.PI) - 4)
};
if (this.pointerDraw) this.pointerDraw.destroy();
this.pointerDraw = new (lz.DrawTool)(this);
this._drawGaugePointer();
this.drawDone = true;
if (this.waitXmlStr != "") {
initDraw(this.waitXmlStr)
}}


function _drawGaugePointer ($0 = null) {
if (this.datas[0] - this.currentValue > 5) {
this.currentValue += 3
} else if (this.datas[0] - this.currentValue > 1) {
this.currentValue += 0.5
} else this.currentValue += 0.1;

if (this.currentValue < this.datas[0]) {
var $1 = (1 - this.currentValue / 100) * Math.PI;
this.pointerDraw.destroy();
this.pointerDraw = new (lz.DrawTool)(this);
this.pointerDraw.drawLine(this.ox + 1, this.oy, this.ox + (this.or - 27) * Math.cos($1), this.oy - (this.or - 27) * Math.sin($1), 2, 205);


lz.Timer.addTimer(this.drawGaugePointerDel, 30)
} else {
var $2 = new (lz.text)(this);
$2.setAttribute("fontsize", 18);
$2.setAttribute("fontstyle", "bold");
$2.setAttribute("fgcolor", 255);
$2.setAttribute("bgcolor", 15267068);
$2.setAttribute("text", "  " + this.datas[0] + "%  ");
$2.setAttribute("x", this.ox - $2.width / 2);
$2.setAttribute("y", this.oy - this.or / 3);
this.drawDone = true;
if (this.waitXmlStr != "") {
initDraw(this.waitXmlStr)
}}}



function showTooltip ($0, $1) {
this.tooltip.setAttribute("visible", $0);
if (!$0) return;
var $2 = this.getMouse("x");
var $3 = this.getMouse("y");
if ($2 + this.tooltip.width > this.width) $2 = this.width - this.tooltip.width;
if ($3 + this.tooltip.height > this.height) $3 = this.height - this.tooltip.height;
this.tooltip.setAttribute("x", $2);
this.tooltip.setAttribute("y", $3);
this.tooltip.txt.setAttribute("text", $1);
this.tooltip.bringToFront()
}

function showPieTooltip ($0, $1) {
if (!this.drawDone) return;
if (this.pieTooltipDraw) this.pieTooltipDraw.destroy();
if (!this.pieTooltipDrawDot) {
this.pieTooltipDrawDot = new (lz.view)(this);
this.pieTooltipDrawDot.setAttribute("width", 10);
this.pieTooltipDrawDot.setAttribute("height", 10);
this.pieTooltipDrawDot.setAttribute("bgcolor", 16777215)
};
if (!$0) {
this.pieTooltipDrawDot.setAttribute("visible", false);
return
};
this.pieTooltipDraw = new (lz.DrawTool)(this);
this.pieTooltipDrawDot.setAttribute("visible", true);
this.pieTooltipDrawDot.setAttribute("x", $1.targetX - 5);
this.pieTooltipDrawDot.setAttribute("y", $1.targetY - 5);
this.pieTooltipDraw.drawLine($1.x, $1.y + 7, $1.targetX, $1.targetY, 2, $1.dotColor)
}

function doClick ($0) {
lz.Browser.callJS("doClick", null, $0)
}

function saveToPng () {
var $0 = new (lz.ImageUtility)();
$0.saveImage(this, this.title == "" ? "\u56FE\u8868" : this.title)
}
/* -*- file: -*- */
var tooltip;function $lzc$class_Chart ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {DrawMax: "number", DrawMin: "number", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", chartBottomHeight: "number", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", colspace: "number", columnWidth: "number", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", drawDone: "boolean", extInfoIndex: "number", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", isAllreadyDrawXAxis: "boolean", isAllreadyDrawYAxis: "boolean", isAllreadyDrawYBgLines: "boolean", isAxisMultiline: "number", isDisplayOption: "number", lastDotX: "number", lastDotY: "number", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", title: "string", tooltipWidth: "number", topSpace: "number", total: "number", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", waitXmlStr: "string", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yAxisLableWidth: "number", yAxisLableWidth2: "number", yStep: "number", yTitle: "string", yTitle2: "string", yoffset: "numberExpression", yscale: "numberExpression"}}, DrawMax: 0, DrawMin: 0, avgValue: new LzAlwaysExpr("$ms", "$mt", null), bgcolor: 15987699, chartBottomHeight: 30, colors: new LzAlwaysExpr("$mk", "$ml", null), colspace: 0, columnWidth: 36, dataSet: new LzAlwaysExpr("$mg", "$mh", null), datas: new LzAlwaysExpr("$me", "$mf", null), drawDone: true, extInfoIndex: -1, height: 260, isAllreadyDrawXAxis: false, isAllreadyDrawYAxis: false, isAllreadyDrawYBgLines: false, isAxisMultiline: 0, isDisplayOption: 0, labels: new LzAlwaysExpr("$mi", "$mj", null), lastDotX: 0, lastDotY: 0, shadowangle: 45, shadowblurradius: 5, shadowcolor: new LzOnceExpr("$mb", null), shadowdistance: 0, title: "", tooltipWidth: 120, topSpace: 42, total: 0, types: new LzAlwaysExpr("$mm", "$mn", null), waitXmlStr: "", width: 400, xAxis: new LzAlwaysExpr("$mc", "$md", null), yAxisLableWidth: 40, yAxisLableWidth2: 0, yMax: new LzAlwaysExpr("$mo", "$mp", null), yMin: new LzAlwaysExpr("$mq", "$mr", null), yStep: 10, yTitle: "", yTitle2: ""}, $lzc$class_Chart.attributes);}
}

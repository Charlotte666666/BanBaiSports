package {
dynamic class $lzc$class_FlowNode extends $lzc$class__m1 {
/* -*- file: flowDesigner/FlowNode.lzx#8 -*- */
static var tagname = "FlowNode";static var children = LzNode.mergeChildren([{attrs: {$classrootdepth: 1, fgcolor: 255, fontsize: 15, fontstyle: "bold", multiline: true, name: "txt", text: new LzAlwaysExpr("$mlm", "$mln", null), textalign: "center", valign: "middle", width: new LzAlwaysExpr("$mlk", "$mll", null)}, "class": $lzc$class__mlu}, {attrs: {$classrootdepth: 1, name: "alarm", resource: "alarm_rsc", visible: new LzAlwaysExpr("$mls", "$mlt", null), x: new LzAlwaysExpr("$mlo", "$mlp", null), y: new LzAlwaysExpr("$mlq", "$mlr", null)}, "class": $lzc$class__mlv}], $lzc$class__m1["children"]);static var attributes = new LzInheritedHash($lzc$class__m1.attributes);function $ml9 ($0) {
/* -*- file: #7 -*- */
this.setAttribute("shadowcolor", LzColorUtils.convertColor("rgba(0,0,0,0.7)"))
}
/* -*- file: #7 -*- */
function $mla ($0) {
/* -*- file: #7 -*- */
var $1 = this.dragover ? "blue" : "0xffffff";
/* -*- file: -*- */
if ($1 !== this["bgcolor"] || !this.inited) {
this.setAttribute("bgcolor", $1)
}}
/* -*- file: flowDesigner/FlowNode.lzx#7 -*- */
function $mlb () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowNode.lzx#10 -*- */
return [this, "dragover"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowNode.lzx#7 -*- */
function $mlc ($0) {
/* -*- file: #7 -*- */
var $1 = this.dragging ? 0.5 : 1;
/* -*- file: -*- */
if ($1 !== this["opacity"] || !this.inited) {
this.setAttribute("opacity", $1)
}}
/* -*- file: flowDesigner/FlowNode.lzx#7 -*- */
function $mld () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowNode.lzx#10 -*- */
return [this, "dragging"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var text;var statusName;var nodeId;var isDragEnd;var isAlarm;var alarmHour;var alarmMinute;var templateId;var templateName;var deptId;var deptName;var userCode;var userName;var rightId;var rightName;function $mle ($0:LzView) {
/* -*- file: flowDesigner/FlowNode.lzx#27 -*- */
this.isDragEnd = !this.isDragEnd;
if (this.isDragEnd) {
if (this.x < 0) this.x = 0;
if (this.y < 30) this.y = 30;
if (this.y > parent.height - this.height - 2) this.y = parent.height - this.height - 2;
if (this.x > parent.width - this.width) this.x = parent.width - this.width;
this.setAttribute("x", Math.round(this.x / 4) * 4);
this.setAttribute("y", Math.round(this.y / 4) * 4);
parent._reDrawLines(this.nodeId)
} else {
this.bringToFront()
}}


function $mlf ($0) {
if (parent.linkState == 1) {
parent.startConnectNode = this;
parent.linkState = 2;
parent.startLinking()
} else parent.doNodeClick(this)
}

function $mlg ($0 = null) {
parent.doNodeDblClick(this)
}

function $mlh ($0) {
if (parent.linkState == 2) {
parent.linkState = 3;
parent.endLinking()
}}


function $mli ($0) {
if (parent.linkState == 3 && parent.startConnectNode != this) {
parent._addLine(parent.startConnectNode, this);
parent.changePointerType("select")
}}


function $mlj ($0) {
if (!this.draggable) return;

switch ($0) {
case 46:
/* -*- file: #71 -*- */
try {
/* -*- file: #71 -*- */
parent.classroot.designArea._deleteObject()
}
/* -*- file: #71 -*- */
catch ($1) {};break;;case 37:
this.setAttribute("x", this.x - 4);parent._reDrawLines(this.nodeId);break;;case 38:
this.setAttribute("y", this.y - 4);parent._reDrawLines(this.nodeId);break;;case 39:
this.setAttribute("x", this.x + 4);parent._reDrawLines(this.nodeId);break;;case 40:
this.setAttribute("y", this.y + 4);parent._reDrawLines(this.nodeId);break;;default:
break
}}


function toXMLString () {
var $0:String = "&lt;Node";
$0 += " nodeId=&quot;" + this.nodeId + "&quot;";
$0 += " x=&quot;" + this.x + "&quot;";
$0 += " y=&quot;" + this.y + "&quot;";
if (this.width != 120) $0 += " width=&quot;" + this.width + "&quot;";
if (this.height != 60) $0 += " height=&quot;" + this.height + "&quot;";
$0 += " txt=&quot;" + gStringUtil.escapeText(this.txt.text ? this.txt.text : "") + "&quot;";
$0 += " templateId=&quot;" + this.templateId + "&quot;";
$0 += " templateName=&quot;" + gStringUtil.escapeText(this.templateName) + "&quot;";
$0 += " statusName=&quot;" + gStringUtil.escapeText(this.statusName) + "&quot;";

$0 += " isAlarm=&quot;" + this.isAlarm + "&quot;";
if (this.isAlarm) {
$0 += " alarmHour=&quot;" + this.alarmHour + "&quot;";
$0 += " alarmMinute=&quot;" + this.alarmMinute + "&quot;"
};

if (this.deptId != "") {
$0 += " deptId=&quot;" + this.deptId + "&quot;";
$0 += " deptName=&quot;" + gStringUtil.escapeText(this.deptName) + "&quot;"
};
if (this.userCode != "") {
$0 += " userCode=&quot;" + this.userCode + "&quot;";
$0 += " userName=&quot;" + gStringUtil.escapeText(this.userName) + "&quot;"
};
if (this.rightId != "") {
$0 += " rightId=&quot;" + this.rightId + "&quot;";
$0 += " rightName=&quot;" + gStringUtil.escapeText(this.rightName) + "&quot;"
};

$0 += " /&gt;";
return $0
}

function doSelected ():void {
this.setAttribute("bgcolor", 16777011)
}

function unSelected ():void {
this.setAttribute("bgcolor", 16777215)
}
/* -*- file: -*- */
var txt;var alarm;function $lzc$class_FlowNode ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", alarmHour: "string", alarmMinute: "string", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", deptId: "string", deptName: "string", destinationtypes: "string", draggable: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", isAlarm: "boolean", isDragEnd: "boolean", layout: "css", loadratio: "number", mask: "string", name: "token", nodeId: "string", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rightId: "string", rightName: "string", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", statusName: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", templateId: "string", templateName: "string", text: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", userCode: "string", userName: "string", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["ondragging", "$mle", null, "onmousedown", "$mlf", null, "ondblclick", "$mlg", null, "onmouseup", "$mlh", null, "onmouseover", "$mli", null, "onkeydown", "$mlj", null], alarmHour: "", alarmMinute: "", bgcolor: new LzAlwaysExpr("$mla", "$mlb", null), clickable: true, deptId: "", deptName: "", destinationtypes: "text", focusable: true, height: 60, isAlarm: false, isDragEnd: true, nodeId: "", opacity: new LzAlwaysExpr("$mlc", "$mld", null), rightId: "", rightName: "", shadowangle: 45, shadowblurradius: 5, shadowcolor: new LzOnceExpr("$ml9", null), shadowdistance: 2, statusName: "", templateId: "", templateName: "", text: "", userCode: "", userName: "", width: 120, x: 50, y: 100}, $lzc$class_FlowNode.attributes);}
}

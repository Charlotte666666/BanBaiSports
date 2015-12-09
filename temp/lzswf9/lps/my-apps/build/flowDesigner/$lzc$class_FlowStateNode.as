package {
dynamic class $lzc$class_FlowStateNode extends $lzc$class__m1 {
/* -*- file: flowDesigner/FlowStateNode.lzx#8 -*- */
static var tagname = "FlowStateNode";static var children = LzNode.mergeChildren([{attrs: {$classrootdepth: 1, fgcolor: 255, fontsize: 15, fontstyle: "bold", multiline: true, name: "txt", text: new LzAlwaysExpr("$mkz", "$ml0", null), textalign: "center", valign: "middle", width: new LzAlwaysExpr("$mkx", "$mky", null)}, "class": $lzc$class__ml7}, {attrs: {$classrootdepth: 1, name: "alarm", resource: "alarm_rsc", visible: new LzAlwaysExpr("$ml5", "$ml6", null), x: new LzAlwaysExpr("$ml1", "$ml2", null), y: new LzAlwaysExpr("$ml3", "$ml4", null)}, "class": $lzc$class__ml8}], $lzc$class__m1["children"]);static var attributes = new LzInheritedHash($lzc$class__m1.attributes);function $mkp ($0) {
/* -*- file: #7 -*- */
var $1 = this.dragging ? 0.5 : 1;
/* -*- file: -*- */
if ($1 !== this["opacity"] || !this.inited) {
this.setAttribute("opacity", $1)
}}
/* -*- file: flowDesigner/FlowStateNode.lzx#7 -*- */
function $mkq () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowStateNode.lzx#10 -*- */
return [this, "dragging"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var typeName;var text;var statusName;var nodeId;var isDragEnd;var isAlarm;var alarmHour;var alarmMinute;var templateId;var templateName;var deptId;var deptName;var userCode;var userName;var rightId;var rightName;var drawColor;function $mkr ($0:LzView) {
/* -*- file: flowDesigner/FlowStateNode.lzx#28 -*- */
this.isDragEnd = !this.isDragEnd;
if (this.isDragEnd) {
if (this.x < 0) this.x = 0;
if (this.y < 10) this.y = 10;
if (this.y > parent.height - 50) this.y = parent.height - 50;
if (this.x > parent.width - this.width) this.x = parent.width - this.width;
this.setAttribute("x", Math.round(this.x / 4) * 4);
this.setAttribute("y", Math.round(this.y / 4) * 4);
parent._reDrawLines(this.nodeId)
} else {
this.bringToFront()
}}


function $mks ($0) {
if (parent.linkState == 1) {
parent.startConnectNode = this;
parent.linkState = 2;
parent.startLinking()
} else parent.doNodeClick(this)
}

function $mkt ($0 = null) {
parent.doNodeDblClick(this)
}

function $mku ($0) {
if (parent.linkState == 2) {
parent.linkState = 3;
parent.endLinking()
}}


function $mkv ($0) {
if (parent.linkState == 3 && parent.startConnectNode != this) {
parent._addLine(parent.startConnectNode, this);
parent.changePointerType("select")
}}


function $mkw ($0) {

switch ($0) {
case 37:
/* -*- file: #71 -*- */
this.setAttribute("x", this.x - 4);parent._reDrawLines(this.nodeId);break;;case 38:
this.setAttribute("y", this.y - 4);parent._reDrawLines(this.nodeId);break;;case 39:
this.setAttribute("x", this.x + 4);parent._reDrawLines(this.nodeId);break;;case 40:
this.setAttribute("y", this.y + 4);parent._reDrawLines(this.nodeId);break;;default:
break
}}


function drawShape () {
if (this.draw) this.draw.destroy();
this.draw = new (lz.DrawTool)(this);
if (this.typeName == "JudgeNode") {
this.draw.drawDiamond(this.x + this.width / 2, this.y + this.height / 2, this.width, this.height, this.drawColor)
} else if (this.typeName == "startNode" || this.typeName == "endNode") {
this.draw.drawOvalRect(-6, 0, this.width + 12, this.width, this.drawColor)
};
this.alarm.bringToFront();
this.txt.bringToFront()
}

function toXMLString () {
var $0:String = "&lt;Node";
$0 += " typeName=&quot;" + this.typeName + "&quot;";
$0 += " nodeId=&quot;" + this.nodeId + "&quot;";
$0 += " x=&quot;" + this.x + "&quot;";
$0 += " y=&quot;" + this.y + "&quot;";
$0 += " txt=&quot;" + gStringUtil.escapeText(this.text) + "&quot;";
$0 += " statusName=&quot;" + gStringUtil.escapeText(this.statusName) + "&quot;";

if (this.templateId != "") {
$0 += " templateId=&quot;" + this.templateId + "&quot;";
$0 += " templateName=&quot;" + gStringUtil.escapeText(this.templateName) + "&quot;"
};

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
if (this.draw && this.typeName == "JudgeNode") {
this.draw.fillStyle = 16776960;
this.draw.fill()
}}


function unSelected ():void {
if (this.draw && this.typeName == "JudgeNode") {
this.draw.fillStyle = this.drawColor;
this.draw.fill()
}}
/* -*- file: -*- */
var txt;var alarm;function $lzc$class_FlowStateNode ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", alarmHour: "string", alarmMinute: "string", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", deptId: "string", deptName: "string", destinationtypes: "string", draggable: "boolean", drawColor: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", isAlarm: "boolean", isDragEnd: "boolean", layout: "css", loadratio: "number", mask: "string", name: "token", nodeId: "string", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rightId: "string", rightName: "string", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", statusName: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", templateId: "string", templateName: "string", text: "string", tintcolor: "string", totalframes: "number", transition: "string", typeName: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", userCode: "string", userName: "string", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["ondragging", "$mkr", null, "onmousedown", "$mks", null, "ondblclick", "$mkt", null, "onmouseup", "$mku", null, "onmouseover", "$mkv", null, "onkeydown", "$mkw", null], alarmHour: "", alarmMinute: "", clickable: true, deptId: "", deptName: "", destinationtypes: "text", drawColor: "0xffffff", focusable: true, height: 44, isAlarm: false, isDragEnd: true, nodeId: "", opacity: new LzAlwaysExpr("$mkp", "$mkq", null), rightId: "", rightName: "", statusName: "", templateId: "", templateName: "", text: "", typeName: "Node", userCode: "", userName: "", width: 48}, $lzc$class_FlowStateNode.attributes);}
}

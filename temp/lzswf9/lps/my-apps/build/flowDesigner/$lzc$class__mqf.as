package {
dynamic class $lzc$class__mqf extends LzView {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#186 -*- */
static var displayName = "<anonymous extends='view'>";static var children = [{attrs: {$classrootdepth: 3, $delegates: ["oninited", "$mnq", null], height: new LzAlwaysExpr("$mno", "$mnp", null), width: new LzAlwaysExpr("$mnm", "$mnn", null)}, "class": $lzc$class__mqg}, {attrs: {$classrootdepth: 3, $delegates: ["oninited", "$mnr", null], drawColor: "0xFFFFFF", name: "startNode", nodeId: "startNode", text: "\u5F00\u59CB", typeName: "startNode", x: 100, y: 30}, "class": $lzc$class__mqh}, {attrs: {$classrootdepth: 3, $delegates: ["oninited", "$mns", null], drawColor: "0xFFFFFF", name: "endNode", nodeId: "endNode", text: "\u7ED3\u675F", typeName: "endNode", x: 100, y: 430}, "class": $lzc$class__mqi}, {attrs: {$classrootdepth: 3, $delegates: ["onclick", "$mnv", null], _toolbar: void 0, clickable: true, closeable: true, fgcolor: 6710886, fontsize: 12, height: 280, name: "toolbarWin", resizable: false, title: "\u5C5E\u6027\u680F", visible: false, width: new LzAlwaysExpr("$mnt", "$mnu", null), x: 500, y: 30}, "class": $lzc$class__mqj}];static var attributes = new LzInheritedHash(LzView.attributes);var element;var linkState;var startConnectNode;var selectedObject;var toolwidth;function $mnj ($0) {




this.setAttribute("_delegateLinking", new (lz.Delegate)(this, "doLinking"))
}
/* -*- file: -*- */
var _delegateLinking;function $mnk ($0) {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#194 -*- */
if (this.linkState == 2 || this.linkState == 3) {
this.linkState = 1;
this.endLinking()
}}


function $mnl ($0) {
if (this.linkState == 3) {
this.linkState = 1
}}


function startLinking () {
this.startLinkingX = this.getMouse("x");
this.startLinkingY = this.getMouse("y");
this._delegateLinking.register(lz.GlobalMouse, "onmousemove")
}

function endLinking () {
if (this.pointerDraw) this.pointerDraw.destroy();
this._delegateLinking.unregisterAll()
}

function doLinking ($0) {

if (this.pointerDraw) this.pointerDraw.destroy();
this.pointerDraw = new (lz.DrawTool)(this);
this.pointerDraw.drawLine(this.startLinkingX, this.startLinkingY, this.getMouse("x"), this.getMouse("y"), 2, 205)
}

function drawFlow () {
var $0:Number = 0;
if (this.selectedObject) this.selectedObject = null;
while (this.subviews.length > $0) {
if (this.subviews[$0] instanceof lz.FlowNode || this.subviews[$0] instanceof lz.FlowLine) {
this.subviews[$0].destroy()
} else if (this.subviews[$0] instanceof lz.FlowStateNode && this.subviews[$0].typeName == "JudgeNode") {
this.subviews[$0].destroy()
} else $0++
};

this.element = lz.DataElement.stringToLzData(classroot.xmlString);
this.resetData();
if (!this.element) {
this.startNode.setAttribute("draggable", classroot.mode == "edit" ? true : false);
this.endNode.setAttribute("draggable", classroot.mode == "edit" ? true : false);
return
};

var $1 = element.getElementsByTagName("Node");
var $2 = element.getElementsByTagName("Line");
if (!$1) return;
try {
var $3:String = "";
for (var $4 = 0;$4 < $1.length;$4++) {
$3 = $1[$4].getAttr("nodeId");
var $5 = "";
if ($1[$4].getAttr("typeName")) $5 = $1[$4].getAttr("typeName");
var $6 = null;
if ($3 == "startNode") {
$6 = this.startNode
} else if ($3 == "endNode") {
$6 = this.endNode
} else if ($5 == "JudgeNode") {
$6 = new (lz.FlowStateNode)(this);
$6.typeName = "JudgeNode";
$6.setAttribute("width", 120);
$6.setAttribute("height", 60);
$6.drawShape()
} else $6 = new (lz.FlowNode)(this);

$6.setAttribute("nodeId", $3);
$6.setAttribute("text", $1[$4].getAttr("txt"));
$6.setAttribute("x", Number($1[$4].getAttr("x")));
$6.setAttribute("y", Number($1[$4].getAttr("y")));
if ($1[$4].getAttr("width")) $6.setAttribute("width", Number($1[$4].getAttr("width")));
if ($1[$4].getAttr("height")) $6.setAttribute("height", Number($1[$4].getAttr("height")));
if ($1[$4].getAttr("isAlarm")) $6.setAttribute("isAlarm", $1[$4].getAttr("isAlarm") == "true" ? true : false);
if ($1[$4].getAttr("alarmHour")) $6.setAttribute("alarmHour", $1[$4].getAttr("alarmHour"));
if ($1[$4].getAttr("alarmMinute")) $6.setAttribute("alarmMinute", $1[$4].getAttr("alarmMinute"));
if ($1[$4].getAttr("templateId")) $6.setAttribute("templateId", $1[$4].getAttr("templateId"));
if ($1[$4].getAttr("templateName")) $6.setAttribute("templateName", $1[$4].getAttr("templateName"));
if ($1[$4].getAttr("deptId")) $6.setAttribute("deptId", $1[$4].getAttr("deptId"));
if ($1[$4].getAttr("deptName")) $6.setAttribute("deptName", $1[$4].getAttr("deptName"));
if ($1[$4].getAttr("userCode")) $6.setAttribute("userCode", $1[$4].getAttr("userCode"));
if ($1[$4].getAttr("userName")) $6.setAttribute("userName", $1[$4].getAttr("userName"));
if ($1[$4].getAttr("rightId")) $6.setAttribute("rightId", $1[$4].getAttr("rightId"));
if ($1[$4].getAttr("rightName")) $6.setAttribute("rightName", $1[$4].getAttr("rightName"));
if ($1[$4].getAttr("statusName")) $6.setAttribute("statusName", $1[$4].getAttr("statusName"));

$6.setAttribute("draggable", classroot.mode == "edit" ? true : false)
};

for (var $4 = 0;$4 < $2.length;$4++) {
var $7 = new (lz.FlowLine)(this);
$7.setAttribute("text", $2[$4].getAttr("txt"));
$7.setAttribute("fromNode", this._getNode($2[$4].getAttr("fromNodeId")));
$7.setAttribute("toNode", this._getNode($2[$4].getAttr("toNodeId")));
if ($2[$4].getAttr("ruleId")) $7.setAttribute("ruleId", $2[$4].getAttr("ruleId"));
if ($2[$4].getAttr("ruleName")) $7.setAttribute("ruleName", $2[$4].getAttr("ruleName"));
if (!$7.fromNode || !$7.toNode) {
$7.destory()
} else $7.doRedraw()
}}
catch ($8) {}}



function deleteObject () {
if (this.selectedObject) {
try {
classroot.deleteObject()
}
/* -*- file: #306 -*- */
catch ($0) {}}}




function doDeleteObject ($0 = null):void {
if (this.selectedObject) {
if (this.selectedObject instanceof lz.FlowStateNode && this.selectedObject.typeName != "JudgeNode") return;

if (this.selectedObject instanceof lz.FlowNode || this.selectedObject instanceof lz.FlowStateNode) {
for (var $1 = 0;$1 < this.subviews.length;$1++) {
if (this.subviews[$1] instanceof lz.FlowLine && (this.selectedObject.nodeId == this.subviews[$1].fromNode.nodeId || this.selectedObject.nodeId == this.subviews[$1].toNode.nodeId)) {

this.subviews[$1].destroy();
$1--
}};

this.selectedObject.destroy()
} else {
for (var $1 = 0;$1 < this.subviews.length;$1++) {
if (this.subviews[$1] instanceof lz.FlowLine && this.subviews[$1] == this.selectedObject) {
this.subviews[$1].destroy();
break
}}};



this.selectedObject = null;
this.toolbarWin._toolbar.properties.setAttribute("visible", false);
classroot.opt.buttons.btn_del.setAttribute("enabled", false)
}}


function doNodeClick ($0:LzView) {
this.setSelectedObject($0)
}

function setSelectedObject ($0:LzView) {
if (this.selectedObject) {
if (this.selectedObject == $0) return;
try {
this.selectedObject.unSelected()
}
/* -*- file: #348 -*- */
catch ($1) {}};


this.selectedObject = $0;
this.selectedObject.doSelected();

if (classroot.mode == "use") {
if ($0 instanceof lz.FlowNode || $0 instanceof lz.FlowStateNode) classroot.doNodeSelected($0.nodeId, $0.text);

return
};
if (!this.toolbarWin.visible) {
this.toolbarWin.setAttribute("x", this.getMouse("x") + 120);
this.toolbarWin.setAttribute("y", this.getMouse("y"))
};
this.toolbarWin._toolbar.properties.setAttribute("visible", true);


this.toolbarWin._toolbar.properties.txtView.txt.setAttribute("text", $0.text);
if ($0 instanceof lz.FlowNode) {
classroot.setAttribute("seletedType", "node");
classroot.opt.buttons.btn_del.setAttribute("enabled", true);
this.toolbarWin._toolbar.properties.alarm.isAlarm.setValue($0.isAlarm);
this.toolbarWin._toolbar.properties.alarm.hour.setAttribute("text", $0.alarmHour);
this.toolbarWin._toolbar.properties.alarm.minute.setAttribute("text", $0.alarmMinute);
this.toolbarWin._toolbar.properties.template_name.setAttribute("txt", $0.templateName);
this.toolbarWin._toolbar.properties.right_name.setAttribute("txt", $0.rightName);
this.toolbarWin._toolbar.properties.dept_name.setAttribute("txt", $0.deptName);
this.toolbarWin._toolbar.properties.user_name.setAttribute("txt", $0.userName);
this.toolbarWin._toolbar.properties.statusView.txt.setAttribute("text", $0.statusName)
} else if ($0 instanceof lz.FlowLine) {
classroot.setAttribute("seletedType", "line");
classroot.opt.buttons.btn_del.setAttribute("enabled", true);
this.toolbarWin._toolbar.properties.alarm.setAttribute("visible", false);
this.toolbarWin._toolbar.properties.rule_name.setAttribute("txt", $0.ruleName);
this.toolbarWin.open();
this.toolbarWin.bringToFront()
} else if ($0 instanceof lz.FlowStateNode) {
classroot.setAttribute("seletedType", $0.typeName);
classroot.opt.buttons.btn_del.setAttribute("enabled", $0.typeName == "JudgeNode");
this.toolbarWin._toolbar.properties.alarm.isAlarm.setValue($0.isAlarm);
this.toolbarWin._toolbar.properties.alarm.hour.setAttribute("text", $0.alarmHour);
this.toolbarWin._toolbar.properties.alarm.minute.setAttribute("text", $0.alarmMinute);
this.toolbarWin._toolbar.properties.template_name.setAttribute("txt", $0.templateName);
this.toolbarWin._toolbar.properties.right_name.setAttribute("txt", $0.rightName);
this.toolbarWin._toolbar.properties.dept_name.setAttribute("txt", $0.deptName);
this.toolbarWin._toolbar.properties.user_name.setAttribute("txt", $0.userName);
this.toolbarWin._toolbar.properties.statusView.txt.setAttribute("text", $0.statusName)
};
if (this.toolbarWin.x < 0) this.toolbarWin.setAttribute("x", 500);
if (this.toolbarWin.y < 30) this.toolbarWin.setAttribute("y", 30)
}

function doNodeDblClick ($0) {
if (classroot.mode == "use") {
return
};
this.toolbarWin.open();
this.toolbarWin.bringToFront()
}

function _getNode ($0) {
if ($0 == "startNode") return this.startNode;
if ($0 == "endNode") return this.endNode;

for (var $1 = 0;$1 < this.subviews.length;$1++) {
if ((this.subviews[$1] instanceof lz.FlowNode || this.subviews[$1] instanceof lz.FlowStateNode) && $0 == this.subviews[$1].nodeId) {
return this.subviews[$1]
}};

return null
}

function getLineDirection ($0, $1, $2, $3, $4, $5, $6) {
if (this.endNode.x - this.startNode.x < this.endNode.y - this.startNode.y && $0 == "U" && Math.abs(this.startNode.x - $6.fromNode.x) < 50) {
return this.isHasDirection($6, "UUL") ? "UUR" : "UUL"
};
for (var $7 = 0;$7 < this.subviews.length;$7++) {
if (this.subviews[$7] instanceof lz.FlowNode || this.subviews[$7] instanceof lz.FlowStateNode) {
if (this.subviews[$7].nodeId == $4 || this.subviews[$7].nodeId == $5) continue;
if ($2 < this.subviews[$7].y && this.subviews[$7].y < $3 || $2 > this.subviews[$7].y && this.subviews[$7].y > $3) {
if ($0 == "U" || $0 == "ULR" || $0 == "URL") {
return this.isHasDirection($6, "UUL") ? "UUR" : "UUL"
} else if (Math.abs(this.subviews[$7].x - $6.fromNode.x) < 70) {
return this.isHasDirection($6, "DDL") ? "DDR" : "DDL"
}}}};



if (this.endNode.x - this.startNode.x < this.endNode.y - this.startNode.y && ($0 == "URL" || $0 == "ULR")) return this.isHasDirection($6, "UUL") ? "UUR" : "UUL";

return $0
}

function isHasDirection ($0, $1) {
for (var $2 = 0;$2 < this.subviews.length;$2++) {
if (this.subviews[$2] instanceof lz.FlowLine && this.subviews[$2].direction == $1 && this.subviews[$2] != $0) {
return true
}};

if ($1 == "UUL" && $0.fromNode.x + 20 < $0.toNode.x) return true;
return false
}

function getMinX () {
var $0 = 1000;
for (var $1 = 0;$1 < this.subviews.length;$1++) {
if (this.subviews[$1] instanceof lz.FlowNode || this.subviews[$1] instanceof lz.FlowStateNode) {
if (this.subviews[$1].x < $0) {
$0 = this.subviews[$1].x
}}};


return $0
}

function getMaxX () {
var $0 = 15;
for (var $1 = 0;$1 < this.subviews.length;$1++) {
if (this.subviews[$1] instanceof lz.FlowNode || this.subviews[$1] instanceof lz.FlowStateNode) {
if (this.subviews[$1].x + this.subviews[$1].width > $0) {
$0 = this.subviews[$1].x + this.subviews[$1].width
}}};


return $0
}

function _setNodesDraggable ($0:Boolean):void {
this.linkState = $0 ? 0 : 1;
for (var $1 = 0;$1 < this.subviews.length;$1++) {
if (this.subviews[$1] instanceof lz.FlowNode || this.subviews[$1] instanceof lz.FlowStateNode) {
this.subviews[$1].setAttribute("draggable", $0)
}}}



function _reDrawLines ($0):void {
try {
for (var $1 = 0;$1 < this.subviews.length;$1++) {
if (this.subviews[$1] instanceof lz.FlowLine && ($0 == this.subviews[$1].fromNode.nodeId || $0 == this.subviews[$1].toNode.nodeId)) {

this.subviews[$1].doRedraw()
}}}

catch ($2) {}}



function _addNode ($0):void {
var $1 = null;
if ($0 == "normal") {
$1 = new (lz.FlowNode)(this)
} else if ($0 == "judge") {
$1 = new (lz.FlowStateNode)(this);
$1.typeName = "JudgeNode";
$1.setAttribute("width", 120);
$1.setAttribute("height", 60);
$1.drawShape()
};
$1.setAttribute("nodeId", new Date().getTime());
$1.setAttribute("text", "");
$1.setAttribute("x", 80);
$1.setAttribute("y", 30);
this.changePointerType("select")
}

function _addLine ($0, $1):void {
var $2 = new (lz.FlowLine)(this);
$2.setAttribute("fromNode", $0);
$2.setAttribute("toNode", $1);
$2.doRedraw()
}

function _setSelectedObjectProperties ($0, $1):void {
if (this.selectedObject) this.selectedObject.setAttribute($0, $1)
}

function changePointerType ($0):void {
if ($0 == "select") {
classroot.opt.pointerType.selectItemAt(0)
} else classroot.opt.pointerType.selectItemAt(1)
}

function _saveFlow ():void {}



function resetData () {
if (this.toolbarWin.visible) this.toolbarWin.setAttribute("visible", false);
if (classroot.mode == "use") {
classroot.opt.buttons.btn_save.setAttribute("visible", false);
classroot.opt.buttons.btn_del.setAttribute("visible", false);
classroot.opt.buttons.btn_addNode.setAttribute("visible", false);
classroot.opt.pointerType.setAttribute("visible", false);
this.toolbarWin.close()
} else if (classroot.mode == "edit") {
classroot.opt.buttons.btn_save.setAttribute("visible", true);
classroot.opt.buttons.btn_del.setAttribute("visible", true);
classroot.opt.buttons.btn_addNode.setAttribute("visible", true);
classroot.opt.pointerType.setAttribute("visible", true);
this.toolbarWin.setAttribute("x", 500);
this.toolbarWin.setAttribute("y", 30)
} else {
classroot.opt.buttons.btn_save.setAttribute("visible", false);
classroot.opt.buttons.btn_del.setAttribute("visible", false);
classroot.opt.buttons.btn_addNode.setAttribute("visible", false);
classroot.opt.pointerType.setAttribute("visible", false);
this.toolbarWin.close()
};

this.startNode.setAttribute("x", 100);
this.startNode.setAttribute("y", 50);
this.startNode.setAttribute("text", "\u5F00\u59CB");
this.startNode.setAttribute("templateId", "");
this.startNode.setAttribute("templateName", "");
this.startNode.setAttribute("deptId", "");
this.startNode.setAttribute("deptName", "");
this.startNode.setAttribute("userCode", "");
this.startNode.setAttribute("userName", "");
this.startNode.setAttribute("rightId", "");
this.startNode.setAttribute("rightName", "");

this.endNode.setAttribute("x", 100);
this.endNode.setAttribute("y", 500);
this.endNode.setAttribute("text", "\u7ED3\u675F")
}

function doUpdate () {}
/* -*- file: -*- */
var startNode;var endNode;var toolbarWin;var $classrootdepth;function $lzc$class__mqf ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {_delegateLinking: "lz.Delegate", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", element: "lz.DataElement", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", linkState: "number", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", toolwidth: "number", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}}, $lzc$class__mqf.attributes);}
}

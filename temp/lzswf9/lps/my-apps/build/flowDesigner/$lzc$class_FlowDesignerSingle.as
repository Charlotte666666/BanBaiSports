package {
dynamic class $lzc$class_FlowDesignerSingle extends LzView {
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#11 -*- */
static var tagname = "FlowDesignerSingle";static var children = [{attrs: {$classrootdepth: 1, buttons: void 0, down: void 0, height: 24, layout: {axis: "x", spacing: 3}, left: void 0, name: "opt", options: {ignorelayout: true}, pointerType: void 0, right: void 0, up: void 0, visible: new LzAlwaysExpr("$mmh", "$mmi", null), width: new LzAlwaysExpr("$mmj", "$mmk", null), x: 2, y: 0}, "class": $lzc$class__mq2}, {attrs: {$classrootdepth: 1, clip: true, designArea: void 0, height: new LzAlwaysExpr("$mnh", "$mni", null), name: "main", width: new LzAlwaysExpr("$mnf", "$mng", null), y: new LzAlwaysExpr("$mnd", "$mne", null)}, "class": $lzc$class__mqe}];static var attributes = new LzInheritedHash(LzView.attributes);function $mmg ($0) {
/* -*- file: #11 -*- */
this.setAttribute("_delegateSelect", new (lz.Delegate)(this, "doSelectSetValue"))
}
/* -*- file: -*- */
var _delegateSelect;var mode;var xmlString;var seletedType;var selectType;function doNodeSelected ($0, $1) {}
/* -*- file: flowDesigner/FlowDesignerSingle.lzx#23 -*- */
function drawFlow ($0) {
this.xmlString = $0;
this.main.designArea.drawFlow()
}

function doSelectSetValue ($0) {
if ($0 == "") return;
var $1 = $0.split(";");
if (!$1) return;
if ($1.length == 2) {
switch (this.selectType) {
case "user_name":
this.main.designArea.toolbarWin._toolbar.properties.user_name.setAttribute("txt", $1[1]);this.main.designArea._setSelectedObjectProperties("userCode", $1[0]);this.main.designArea._setSelectedObjectProperties("userName", $1[1]);break;;case "template_name":




this.main.designArea.toolbarWin._toolbar.properties.template_name.setAttribute("txt", $1[1]);this.main.designArea._setSelectedObjectProperties("templateId", $1[0]);this.main.designArea._setSelectedObjectProperties("templateName", $1[1]);break;;case "dept_name":




this.main.designArea.toolbarWin._toolbar.properties.dept_name.setAttribute("txt", $1[1]);this.main.designArea._setSelectedObjectProperties("deptId", $1[0]);this.main.designArea._setSelectedObjectProperties("deptName", $1[1]);break;;case "right_name":




this.main.designArea.toolbarWin._toolbar.properties.right_name.setAttribute("txt", $1[1]);this.main.designArea._setSelectedObjectProperties("rightId", $1[0]);this.main.designArea._setSelectedObjectProperties("rightName", $1[1]);break;;case "rule_name":




this.main.designArea.toolbarWin._toolbar.properties.rule_name.setAttribute("txt", $1[1]);this.main.designArea._setSelectedObjectProperties("ruleId", $1[0]);this.main.designArea._setSelectedObjectProperties("ruleName", $1[1]);break;;default:



break
}};

this.selectType = ""
}

function toXMLString () {
var $0:String = "&lt;FlowDesigner&gt;";
for (var $1 = 0;$1 < this.main.designArea.subviews.length;$1++) {
if (this.main.designArea.subviews[$1] instanceof lz.FlowNode || this.main.designArea.subviews[$1] instanceof lz.FlowStateNode || this.main.designArea.subviews[$1] instanceof lz.FlowLine) {

$0 += this.main.designArea.subviews[$1].toXMLString()
}};


$0 += "&lt;/FlowDesigner&gt;";
return $0
}

function moveAll ($0, $1) {
for (var $2 = 0;$2 < this.main.designArea.subviews.length;$2++) {
if (this.main.designArea.subviews[$2] instanceof lz.FlowNode || this.main.designArea.subviews[$2] instanceof lz.FlowStateNode) {
this.main.designArea.subviews[$2].setAttribute("x", this.main.designArea.subviews[$2].x + $0);
this.main.designArea.subviews[$2].setAttribute("y", this.main.designArea.subviews[$2].y + $1)
}};

for (var $2 = 0;$2 < this.main.designArea.subviews.length;$2++) {
if (this.main.designArea.subviews[$2] instanceof lz.FlowLine) {
this.main.designArea.subviews[$2].doRedraw()
}}}



function fullScreen () {}



function deleteObject () {}



function doDeleteObject () {
this.main.designArea.doDeleteObject()
}

function selectTemplate () {}



function selectRight () {}



function selectDept () {}



function selectUser () {}



function selectRule () {}



function setTemplate ($0) {
this.selectType = "template_name";
this.doSelectSetValue($0)
}

function setRight ($0) {
this.selectType = "right_name";
this.doSelectSetValue($0)
}

function setDept ($0) {
this.selectType = "dept_name";
this.doSelectSetValue($0)
}

function setUser ($0) {
this.selectType = "user_name";
this.doSelectSetValue($0)
}

function setRule ($0) {
this.selectType = "rule_name";
this.doSelectSetValue($0)
}
/* -*- file: -*- */
var opt;var main;function $lzc$class_FlowDesignerSingle ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {_delegateSelect: "lz.Delegate", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", mode: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", selectType: "string", seletedType: "string", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xmlString: "string", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, _delegateSelect: new LzOnceExpr("$mmg", null), bgcolor: 12569318, clip: true, height: 600, mode: "view", selectType: "", seletedType: "", width: 800, xmlString: ""}, $lzc$class_FlowDesignerSingle.attributes);}
}

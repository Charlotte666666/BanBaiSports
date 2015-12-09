package {
dynamic class $lzc$class_RadioGroup extends $lzc$class_BaseFormItem {
/* -*- file: common/components/RadioGroup.lzx#7 -*- */
static var tagname = "RadioGroup";static var children = [{attrs: {$classrootdepth: 1, fontsize: 12, name: "label", text: new LzAlwaysExpr("$mk3", "$mk4", null), textalign: "right", width: new LzAlwaysExpr("$mk1", "$mk2", null), y: 2}, "class": $lzc$class__mkd}, {attrs: {$classrootdepth: 1, height: 20, layout: {axis: "y", "class": "wrappinglayout", spacing: 5}, name: "optionsView", visible: new LzAlwaysExpr("$mk5", "$mk6", null), width: new LzAlwaysExpr("$mk7", "$mk8", null), y: 4}, "class": $lzc$class__mke}, {attrs: {$classrootdepth: 1, fontsize: 12, name: "valueLabel", selectable: true, text: "", textalign: "left", visible: new LzAlwaysExpr("$mk9", "$mka", null), width: new LzAlwaysExpr("$mkb", "$mkc", null), y: 2}, "class": $lzc$class__mkf}];static var attributes = new LzInheritedHash($lzc$class_BaseFormItem.attributes);var optionsStr;var initValue;function $mjz ($0 = null) {



this.initOptions()
}

function $mk0 ($0 = null) {
this.initOptions()
}

override function doClear () {
this.optionsView.setAttribute("value", null)
}

function initOptions () {
if (this.optionsStr == "") return;
if (!this.optionsView) return;
while (this.optionsView.subviews.length > 0) this.optionsView.subviews[0].destroy();
try {
var $0:Array = this.optionsStr.split(";");
if ($0 && $0.length > 0) {
var $1:Number = 20;
if ($0.length > 3) $1 = 45;
if ($0.length > 6) $1 = 65;
if ($0.length > 9) $1 = 90;
this.optionsView.setAttribute("height", $1);
for (var $2 = 0;$2 < $0.length;$2++) {
if ($0[$2] != "") {
var $3 = new (lz.radiobutton)(this.optionsView);
$3.setAttribute("text", $0[$2]);
$3.setAttribute("value", $0[$2]);
if ($0[$2] == this.initValue) $3.setAttribute("selected", true)
}}}}


catch ($4) {}}



override function getValue () {
if (this.optionsView.value == null) return "";
return this.optionsView.value
}

override function resetValue () {}



override function setValue ($0) {
if (!this.isEnabled) {
this.valueLabel.setAttribute("text", $0)
}}
/* -*- file: -*- */
var label;var optionsView;var valueLabel;function $lzc$class_RadioGroup ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", checkType: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", errorString: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", initValue: "string", inited: "boolean", initstage: "string", isEnabled: "boolean", isRequire: "boolean", labelText: "string", labelWidth: "number", layout: "css", loadratio: "number", mask: "string", maxLen: "number", name: "token", nodeLevel: "number", opacity: "number", options: "css", optionsStr: "string", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["oninited", "$mjz", null, "onoptionsStr", "$mk0", null], initValue: "", layout: {axis: "x", spacing: 2}, optionsStr: ""}, $lzc$class_RadioGroup.attributes);}
}

package {
dynamic class $lzc$class_CheckBox extends $lzc$class_BaseFormItem {
/* -*- file: common/components/CheckBox.lzx#7 -*- */
static var tagname = "CheckBox";static var children = [{attrs: {$classrootdepth: 1, fontsize: 12, name: "label", text: new LzAlwaysExpr("$mjh", "$mji", null), textalign: "right", width: new LzAlwaysExpr("$mjf", "$mjg", null), y: 2}, "class": $lzc$class__mjv}, {attrs: {$classrootdepth: 1, height: 20, layout: {axis: "y", "class": "wrappinglayout"}, name: "optionsView", visible: new LzAlwaysExpr("$mjj", "$mjk", null), width: new LzAlwaysExpr("$mjl", "$mjm", null), y: 3}, "class": $lzc$class__mjw}, {attrs: {$classrootdepth: 1, elseTxt: void 0, name: "elseView", options: {ignorelayout: true}, visible: new LzAlwaysExpr("$mjp", "$mjq", null), width: 200, x: new LzAlwaysExpr("$mjn", "$mjo", null)}, "class": $lzc$class__mjx}, {attrs: {$classrootdepth: 1, fontsize: 12, name: "valueLabel", selectable: true, text: "", textalign: "left", visible: new LzAlwaysExpr("$mjr", "$mjs", null), width: new LzAlwaysExpr("$mjt", "$mju", null), y: 2}, "class": $lzc$class__mjy}];static var attributes = new LzInheritedHash($lzc$class_BaseFormItem.attributes);var optionsStr;var isHasElse;function $mje ($0 = null) {



this.initOptions()
}

function initOptions () {
if (this.optionsStr == "") return;
if (!this.optionsView) return;
while (this.optionsView.subviews.length > 0) this.optionsView.subviews[0].destroy();
try {
var $0:Array = this.optionsStr.split(";");
if ($0 && $0.length > 0) {
var $1:Number = 20;
if (this.isHasElse) {
if ($0.length > 3) $1 = 45;
if ($0.length > 6) $1 = 65;
if ($0.length > 9) $1 = 90
} else {
if ($0.length > 5) $1 = 45;
if ($0.length > 8) $1 = 65;
if ($0.length > 11) $1 = 90
};
this.optionsView.setAttribute("height", $1);
for (var $2 = 0;$2 < $0.length;$2++) {
if ($0[$2] != "") {
var $3 = new (lz.checkbox)(this.optionsView);
$3.setAttribute("text", $0[$2]);
$3.setAttribute("enabled", this.isEnabled)
}}}}


catch ($4) {}}



override function getValue () {
var $0:String = "";
for (var $1 = 0;$1 < this.optionsView.subviews.length;$1++) {
if (this.optionsView.subviews[$1].value) {
$0 += this.optionsView.subviews[$1].text + ";"
}};

if (this.isHasElse && this.elseView.elseTxt.getValue() != "") $0 += " \u5176\u4ED6:" + this.elseView.elseTxt.getValue();
return $0
}

override function doClear () {
for (var $0 = 0;$0 < this.optionsView.subviews.length;$0++) {
this.optionsView.subviews[$0].setAttribute("value", false)
}}


override function resetValue () {}



override function setValue ($0) {
if (!this.isEnabled) {
this.valueLabel.setAttribute("text", $0)
}}
/* -*- file: -*- */
var label;var optionsView;var elseView;var valueLabel;function $lzc$class_CheckBox ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", checkType: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", errorString: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", isEnabled: "boolean", isHasElse: "boolean", isRequire: "boolean", labelText: "string", labelWidth: "number", layout: "css", loadratio: "number", mask: "string", maxLen: "number", name: "token", nodeLevel: "number", opacity: "number", options: "css", optionsStr: "string", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["onoptionsStr", "$mje", null], isHasElse: false, layout: {axis: "x", spacing: 2}, optionsStr: ""}, $lzc$class_CheckBox.attributes);}
}

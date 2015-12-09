package {
dynamic class $lzc$class_Combobox extends $lzc$class_BaseFormItem {
/* -*- file: common/components/EditCombobox.lzx#45 -*- */
static var tagname = "Combobox";static var children = [{attrs: {$classrootdepth: 1, focusable: false, name: "bkgnd", options: {ignorelayout: true}, visible: new LzAlwaysExpr("$mia", "$mib", null), width: new LzAlwaysExpr("$mie", "$mif", null), x: new LzAlwaysExpr("$mic", "$mid", null)}, "class": $lzc$class__mj6}, {attrs: {$classrootdepth: 1, name: "lft", placement: "bkgnd", resource: "lzcombobox_lft_rsc", visible: new LzAlwaysExpr("$mig", "$mih", null)}, "class": $lzc$class__mj7}, {attrs: {$classrootdepth: 1, name: "mid", placement: "bkgnd", resource: "lzcombobox_mid_rsc", stretches: "width", visible: new LzAlwaysExpr("$mii", "$mij", null)}, "class": $lzc$class__mj8}, {attrs: {$classrootdepth: 1, $delegates: ["onclick", "$mim", null], clickable: true, name: "rgt", placement: "bkgnd", resource: "lzcombobox_rgt_rsc", styleable: true, visible: new LzAlwaysExpr("$mik", "$mil", null)}, "class": $lzc$class__mj9}, {attrs: {$classrootdepth: 1, axis: "x", placement: "bkgnd"}, "class": $lzc$class_stableborderlayout}, {attrs: {$classrootdepth: 1, fontsize: 12, name: "label", text: new LzAlwaysExpr("$mip", "$miq", null), textalign: "right", width: new LzAlwaysExpr("$min", "$mio", null), y: 2}, "class": $lzc$class__mja}, {attrs: {$classrootdepth: 1, $delegates: ["ontext", "$miw", null, "onkeydown", "$mix", null, "onclick", "$miy", null], _blurDel: new LzOnceExpr("$miv", null), cblist: void 0, clickable: true, focusable: true, fontsize: 13, height: 20, name: "optionsView", text: "", visible: new LzAlwaysExpr("$mir", "$mis", null), width: new LzAlwaysExpr("$mit", "$miu", null)}, "class": $lzc$class__mjb}, {attrs: {$classrootdepth: 1, fontsize: 12, name: "valueLabel", selectable: true, text: "", textalign: "left", visible: new LzAlwaysExpr("$mj2", "$mj3", null), width: new LzAlwaysExpr("$mj4", "$mj5", null), y: 2}, "class": $lzc$class__mjd}];static var attributes = new LzInheritedHash($lzc$class_BaseFormItem.attributes);var txt;var optionsStr;var initValue;var onchange;function $mi9 ($0 = null) {






this.initOptions()
}

override function getValue () {
return this.optionsView.text
}

override function doClear () {
this.optionsView.setAttribute("text", "")
}

override function resetValue () {
this.optionsView.setAttribute("text", this.txt)
}

override function setValue ($0) {
this.txt = $0;
if (!this.isEnabled) {
this.valueLabel.setAttribute("text", $0);
return
};
this.optionsView.setAttribute("text", $0)
}

function initOptions () {
if (this.optionsStr == "") return;
if (!this.optionsView) return;
while (this.optionsView.subviews.length > 0) this.optionsView.subviews[0].destroy();
try {
var $0:Array = this.optionsStr.split(";");
if ($0 && $0.length > 0) {
for (var $1 = 0;$1 < $0.length;$1++) {
if ($0[$1] != "") {
var $2 = new (lz.textlistitem)(this.optionsView.cblist);
$2.setAttribute("text", $0[$1]);
if ($0[$1] == this.initValue) $2.setAttribute("selected", true)
}}}}


catch ($3) {}}
/* -*- file: -*- */
var bkgnd;var lft;var mid;var rgt;var label;var optionsView;var valueLabel;function $lzc$class_Combobox ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", checkType: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", errorString: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", initValue: "string", inited: "boolean", initstage: "string", isEnabled: "boolean", isRequire: "boolean", labelText: "string", labelWidth: "number", layout: "css", loadratio: "number", mask: "string", maxLen: "number", name: "token", nodeLevel: "number", opacity: "number", options: "css", optionsStr: "string", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", txt: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["oninited", "$mi9", null], initValue: "", layout: {axis: "x", spacing: 2}, onchange: LzDeclaredEvent, optionsStr: "", txt: ""}, $lzc$class_Combobox.attributes);}
}

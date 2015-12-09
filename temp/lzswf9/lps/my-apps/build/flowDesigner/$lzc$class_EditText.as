package {
dynamic class $lzc$class_EditText extends $lzc$class_BaseFormItem {
/* -*- file: common/components/EditText.lzx#7 -*- */
static var tagname = "EditText";static var children = [{attrs: {$classrootdepth: 1, fontsize: 12, name: "label", text: new LzAlwaysExpr("$mgg", "$mgh", null), textalign: "right", width: new LzAlwaysExpr("$mge", "$mgf", null), y: 2}, "class": $lzc$class__mh7}, {attrs: {$classrootdepth: 1, $delegates: ["onclick", "$mgu", null, "onkeyup", "$mgv", null], clickable: true, enabled: new LzAlwaysExpr("$mgi", "$mgj", null), fontsize: 13, height: new LzAlwaysExpr("$mgk", "$mgl", null), maxlength: new LzAlwaysExpr("$mgm", "$mgn", null), multiline: new LzAlwaysExpr("$mgs", "$mgt", null), name: "txtValue", text: new LzAlwaysExpr("$mgq", "$mgr", null), width: new LzAlwaysExpr("$mgo", "$mgp", null)}, "class": $lzc$class__mh8}, {attrs: {$classrootdepth: 1, $delegates: ["onclick", "$mgy", null], clickable: true, height: 16, name: "icon", resource: "btn_close_rsc", stretches: "both", visible: new LzAlwaysExpr("$mgw", "$mgx", null), width: 16, y: 3}, "class": $lzc$class__mh9}, {attrs: {$classrootdepth: 1, bgcolor: 3552822, height: 1, name: "line", options: {ignorelayout: true}, visible: new LzAlwaysExpr("$mh5", "$mh6", null), width: new LzAlwaysExpr("$mh3", "$mh4", null), x: new LzAlwaysExpr("$mgz", "$mh0", null), y: new LzAlwaysExpr("$mh1", "$mh2", null)}, "class": $lzc$class__mha}];static var attributes = new LzInheritedHash($lzc$class_BaseFormItem.attributes);var txt;var inputHeight;var isInputMutiline;var isShowLine;var code;var mode;function $mgc ($0) {







if (this.txtValue) this.txtValue.setHTML(true);
if (this.isInputMutiline) this.txtValue.setAttribute("bgcolor", 16777215)
}

function $mgd ($0) {
if (this.isInputMutiline) this.txtValue.setAttribute("bgcolor", 16777215)
}

function doSelectSetValue ($0) {
if ($0 == "") return;
var $1 = $0.split(";");
if (!$1) return;
if ($1.length == 2) {
this.code = $1[0];
this.txtValue.setAttribute("text", $1[1])
}}


override function getValue () {
if (this.mode == "select") {
return this.code + ";" + this.txtValue.text
};
return this.txtValue.text
}

override function doClear () {
this.txtValue.setAttribute("text", "");
this.code = ""
}

override function resetValue () {
this.txtValue.setAttribute("text", this.txt)
}

override function setValue ($0) {
if (this.mode == "select") {
try {
$0 = $0.split(";");
this.code = $0[0];
this.txtValue.setAttribute("text", $0[1]);
this.txt = $0[1];
this.setAttribute("isShowLine", true)
}
/* -*- file: #57 -*- */
catch ($1) {};

return
};
this.txtValue.setAttribute("text", $0 ? $0 : "");
this.txt = $0;
if (!this.isEnabled) {
this.txtValue.setAttribute("bgcolor", this.isInputMutiline ? gConstant.areaColorLight : gConstant.areaColorLightDark)
}}


function doEnterKeyUp () {}
/* -*- file: -*- */
var label;var txtValue;var icon;var line;function $lzc$class_EditText ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", checkType: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", code: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", errorString: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", inputHeight: "number", isEnabled: "boolean", isInputMutiline: "boolean", isRequire: "boolean", isShowLine: "boolean", labelText: "string", labelWidth: "number", layout: "css", loadratio: "number", mask: "string", maxLen: "number", mode: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", txt: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["oninited", "$mgc", null, "onisInputMutiline", "$mgd", null], code: "", inputHeight: 20, isInputMutiline: false, isShowLine: false, layout: {axis: "x", spacing: 2}, mode: "view", txt: ""}, $lzc$class_EditText.attributes);}
}

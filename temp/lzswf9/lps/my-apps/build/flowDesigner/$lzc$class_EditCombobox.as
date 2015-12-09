package {
dynamic class $lzc$class_EditCombobox extends $lzc$class_BaseFormItem {
/* -*- file: common/components/EditCombobox.lzx#7 -*- */
static var tagname = "EditCombobox";static var children = [{attrs: {$classrootdepth: 1, align: "right", fontsize: 12, name: "label", text: new LzAlwaysExpr("$mhw", "$mhx", null), width: new LzAlwaysExpr("$mhu", "$mhv", null), y: 2}, "class": $lzc$class__mi6}, {attrs: {$classrootdepth: 1, editable: false, enabled: new LzAlwaysExpr("$mi0", "$mi1", null), fontsize: 12, name: "txtValue", width: new LzAlwaysExpr("$mhy", "$mhz", null)}, "class": $lzc$class__mi7}];static var attributes = new LzInheritedHash($lzc$class_BaseFormItem.attributes);var txt;var datepathStr;override function getValue () {



if (this.txtValue.value) return this.txtValue.value;
return "NONE"
}

function setSelectedValue ($0:Number) {
var $1 = this.txtValue.getSelection();
if ($1) $1.setAttribute("selected", false);
if (this.txtValue.getItemAt($0)) this.txtValue.getItemAt($0).setAttribute("selected", true)
}

override function doClear () {
var $0 = this.txtValue.getSelection();
if ($0) $0.setAttribute("selected", false)
}

override function resetValue () {}



override function setValue ($0) {}
/* -*- file: -*- */
var label;var txtValue;function $lzc$class_EditCombobox ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", checkType: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", datepathStr: "string", defaultplacement: "string", errorString: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", isEnabled: "boolean", isRequire: "boolean", labelText: "string", labelWidth: "number", layout: "css", loadratio: "number", mask: "string", maxLen: "number", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", txt: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, datepathStr: "codeDS_userStatus:/item", layout: {axis: "x", spacing: 2}, txt: ""}, $lzc$class_EditCombobox.attributes);}
}

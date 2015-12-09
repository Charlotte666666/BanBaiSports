package {
dynamic class $lzc$class_BaseFormItem extends LzView {
/* -*- file: common/components/BaseFormItem.lzx#7 -*- */
static var tagname = "BaseFormItem";static var attributes = new LzInheritedHash(LzView.attributes);var labelText;var labelWidth;var isEnabled;var isRequire;var checkType;var maxLen;var errorString;function isValid () {








this.errorString = "";
try {
var $0 = this.getValue();
if ($0 == "" && this.isRequire) {
this.errorString = this.labelText;
return false
};
try {
if ($0.length > this.maxLen) {
this.errorString = "[" + this.labelText + "]\u7684\u8F93\u5165\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7" + this.maxLen + "\u4E2A\u5B57\u7B26";
return false
}}
catch ($1) {};

if (this.checkType == "") return true;
if (this.checkType == "number" && !this.isValidNumber($0)) {
this.errorString = "[" + this.labelText + "]\u5FC5\u987B\u662F\u6570\u5B57";
return false
} else if (this.checkType == "email" && !this.isEmail($0)) {
this.errorString = "[" + this.labelText + "]\u5FC5\u987B\u662FE-mail\u683C\u5F0F";
return false
};

return true
}
/* -*- file: #40 -*- */
catch ($2) {
return false
}}


function isEmail ($0) {
if ($0 != "") {
if ($0.indexOf("@") < 0) {
return false
};

var $1 = $0.split("@");
if ($1.length != 2) {
return false
};

if ($1[1].indexOf(".") < 0) {
return false
};

var $2 = $1[1].split(".");
for (var $3 = 0;$3 < $2.length;$3++) {
if ($2[$3] == "") {
return false
}}}}




function isValidNumber ($0) {
return !isNaN($0)
}

function getValue () {
return ""
}

function doClear () {}


function resetValue () {}


function setValue ($0) {}
/* -*- file: -*- */
function $lzc$class_BaseFormItem ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", checkType: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", errorString: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", isEnabled: "boolean", isRequire: "boolean", labelText: "string", labelWidth: "number", layout: "css", loadratio: "number", mask: "string", maxLen: "number", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, checkType: "", errorString: "", isEnabled: true, isRequire: false, labelText: "", labelWidth: 30, maxLen: 2048}, $lzc$class_BaseFormItem.attributes);}
}

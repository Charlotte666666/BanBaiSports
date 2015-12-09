package {
dynamic class $lzc$class_baseformitem extends $lzc$class_basevaluecomponent {
/* -*- file: base/baseformitem.lzx#8 -*- */
static var tagname = "baseformitem";static var attributes = new LzInheritedHash($lzc$class_basevaluecomponent.attributes);var _parentform;var submitname;function $m3b ($0) {











var $1 = enabled;
/* -*- file: -*- */
if ($1 !== this["submit"] || !this.inited) {
this.setAttribute("submit", $1)
}}
/* -*- file: base/baseformitem.lzx#20 -*- */
function $m3c () {
/* -*- file: -*- */
try {
/* -*- file: base/baseformitem.lzx#23 -*- */
return [this, "enabled"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var submit;var changed;function $lzc$set_changed ($0) {
/* -*- file: base/baseformitem.lzx#25 -*- */
this.setChanged($0)
}

function $lzc$set_value ($0) {
this.setValue($0, false)
}
/* -*- file: -*- */
var onchanged;var onvalue;var rollbackvalue;var ignoreform;override function init () {
/* -*- file: base/baseformitem.lzx#46 -*- */
if (this.submitname == "") this.submitname = this.name;
if (this.submitname == "") {};




super.init();
var $0 = this.findForm();
if ($0 != null) {
$0.addFormItem(this);
this._parentform = $0
}}


override function destroy () {
if (this._parentform) this._parentform.removeFormItem(this);

super.destroy()
}








function setChanged ($0, $1 = null) {


if (!this._initcomplete) {
this.changed = false;
return
};

var $2 = this.changed;
this.changed = $0;


if (this.changed != $2) {
if (this.onchanged) this.onchanged.sendEvent(this.changed)
};


if (!$1 && this.changed && !ignoreform) {

if (this["_parentform"] && this._parentform["changed"] != undefined && !this._parentform.changed) {


this._parentform.setChanged($0, false)
}};


if (!$1 && !this.changed && !ignoreform) {

if (this["_parentform"] && this._parentform["changed"] != undefined && this._parentform.changed) {


this._parentform.setChanged($0, true)
}}}





function rollback () {
if (this.rollbackvalue != this["value"]) {
this.setAttribute("value", this.rollbackvalue)
};
this.setAttribute("changed", false)
}


function commit () {
this.rollbackvalue = this.value;
this.setAttribute("changed", false)
}




function setValue ($0, $1 = null) {
var $2 = this.value != $0;
this.value = $0;
if ($1 || !this._initcomplete) {
this.rollbackvalue = $0
};
this.setChanged($2 && !$1 && this.rollbackvalue != $0);
if (this["onvalue"]) this.onvalue.sendEvent($0)
}






override function acceptValue ($0, $1 = null) {
if ($1 == null) $1 = this.type;
this.setValue(lz.Type.acceptTypeValue($1, $0, this, "value"), true)
}



function findForm () {
if (_parentform != null) {
return _parentform
} else {
var $0 = this.immediateparent;
var $1 = null;
while ($0 != canvas) {
if ($0["formdata"]) {
$1 = $0;
break
};
$0 = $0.immediateparent
};
return $1
}}






function toXML ($0) {
var $1 = this.value;
if ($0) {

if (typeof $1 == "boolean") $1 = $1 - 0
};





return lz.Browser.xmlEscape(this.submitname) + '="' + lz.Browser.xmlEscape($1) + '"'
}
/* -*- file: -*- */
function $lzc$class_baseformitem ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_focusable: "boolean", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", doesenter: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", submit: "boolean", submitname: "string", subnodes: "string", subviews: "string", text: "html", tintcolor: "string", totalframes: "number", transition: "string", type: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, _parentform: null, changed: false, ignoreform: false, onchanged: LzDeclaredEvent, onvalue: LzDeclaredEvent, rollbackvalue: null, submit: new LzAlwaysExpr("$m3b", "$m3c", null), submitname: "", value: null}, $lzc$class_baseformitem.attributes);}
}

package {
dynamic class $lzc$class__mh8 extends LzInputText {
/* -*- file: common/components/EditText.lzx#76 -*- */
static var displayName = "<anonymous extends='inputtext'>";static var attributes = new LzInheritedHash(LzInputText.attributes);function $mgi ($0) {
/* -*- file: #75 -*- */
var $1 = parent.isEnabled;
/* -*- file: -*- */
if ($1 !== this["enabled"] || !this.inited) {
this.setAttribute("enabled", $1)
}}
/* -*- file: common/components/EditText.lzx#75 -*- */
function $mgj () {
/* -*- file: -*- */
try {
/* -*- file: common/components/EditText.lzx#78 -*- */
return [parent, "isEnabled"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: common/components/EditText.lzx#75 -*- */
function $mgk ($0) {
/* -*- file: #75 -*- */
var $1 = parent.inputHeight;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}
/* -*- file: common/components/EditText.lzx#75 -*- */
function $mgl () {
/* -*- file: -*- */
try {
/* -*- file: common/components/EditText.lzx#78 -*- */
return [parent, "inputHeight"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: common/components/EditText.lzx#75 -*- */
function $mgm ($0) {
/* -*- file: #75 -*- */
var $1 = parent.maxLen;
/* -*- file: -*- */
if ($1 !== this["maxlength"] || !this.inited) {
this.setAttribute("maxlength", $1)
}}
/* -*- file: common/components/EditText.lzx#75 -*- */
function $mgn () {
/* -*- file: -*- */
try {
/* -*- file: common/components/EditText.lzx#78 -*- */
return [parent, "maxLen"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: common/components/EditText.lzx#75 -*- */
function $mgo ($0) {
/* -*- file: #75 -*- */
var $1 = parent.width - parent.label.width - (classroot.mode != "view" ? 22 : 6);
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: common/components/EditText.lzx#75 -*- */
function $mgp () {
/* -*- file: -*- */
try {
/* -*- file: common/components/EditText.lzx#78 -*- */
return [parent, "width", parent.label, "width", classroot, "mode"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: common/components/EditText.lzx#75 -*- */
function $mgq ($0) {
/* -*- file: #75 -*- */
var $1 = parent.txt;
/* -*- file: -*- */
if ($1 !== this["text"] || !this.inited) {
this.setAttribute("text", $1)
}}
/* -*- file: common/components/EditText.lzx#75 -*- */
function $mgr () {
/* -*- file: -*- */
try {
/* -*- file: common/components/EditText.lzx#78 -*- */
return [parent, "txt"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: common/components/EditText.lzx#75 -*- */
function $mgs ($0) {
/* -*- file: #75 -*- */
var $1 = parent.isInputMutiline;
/* -*- file: -*- */
if ($1 !== this["multiline"] || !this.inited) {
this.setAttribute("multiline", $1)
}}
/* -*- file: common/components/EditText.lzx#75 -*- */
function $mgt () {
/* -*- file: -*- */
try {
/* -*- file: common/components/EditText.lzx#78 -*- */
return [parent, "isInputMutiline"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: common/components/EditText.lzx#76 -*- */
function $mgu ($0) {
if (parent.onclick) classroot.onclick.sendEvent()
}
/* -*- file: -*- */
function $mgv ($0) {
if ($0 == 13) classroot.doEnterKeyUp()
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__mh8 ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", antiAliasType: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", cdata: "cdata", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", direction: "string", embedfonts: "boolean", enabled: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", gridFit: "string", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", hscroll: "number", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", letterspacing: "number", lineheight: "number", loadratio: "number", mask: "string", maxhscroll: "number", maxlength: "numberExpression", maxscroll: "number", multiline: "boolean", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", password: "boolean", pattern: "string", pixellock: "boolean", placement: "string", playing: "boolean", resize: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", scroll: "number", scrollevents: "boolean", scrollheight: "number", scrollwidth: "number", selectable: "boolean", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", sharpness: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "html", textalign: "string", textdecoration: "string", textindent: "number", thickness: "number", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", xscroll: "number", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression", yscroll: "number"}}}, $lzc$class__mh8.attributes);}
}

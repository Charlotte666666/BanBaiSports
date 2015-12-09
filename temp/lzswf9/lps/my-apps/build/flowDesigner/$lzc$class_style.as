package {
dynamic class $lzc$class_style extends LzNode {
/* -*- file: base/style.lzx#9 -*- */
static var tagname = "style";static var attributes = new LzInheritedHash(LzNode.attributes);var isstyle;function $mx ($0) {







this.setAttribute("canvascolor", LzColorUtils.convertColor("null"))
}
/* -*- file: -*- */
var canvascolor;function $lzc$set_canvascolor ($0) {
/* -*- file: base/style.lzx#18 -*- */
setCanvasColor($0)
}

function $my ($0) {
/* -*- file: #21 -*- */
this.setAttribute("textcolor", LzColorUtils.convertColor("gray10"))
}
/* -*- file: -*- */
var textcolor;function $lzc$set_textcolor ($0) {
/* -*- file: base/style.lzx#22 -*- */
setStyleAttr($0, "textcolor")
}

function $mz ($0) {
/* -*- file: #25 -*- */
this.setAttribute("textfieldcolor", LzColorUtils.convertColor("white"))
}
/* -*- file: -*- */
var textfieldcolor;function $lzc$set_textfieldcolor ($0) {
/* -*- file: base/style.lzx#26 -*- */
setStyleAttr($0, "textfieldcolor")
}


function $m10 ($0) {
/* -*- file: #30 -*- */
this.setAttribute("texthilitecolor", LzColorUtils.convertColor("iceblue1"))
}
/* -*- file: -*- */
var texthilitecolor;function $lzc$set_texthilitecolor ($0) {
/* -*- file: base/style.lzx#31 -*- */
setStyleAttr($0, "texthilitecolor")
}


function $m11 ($0) {
/* -*- file: #35 -*- */
this.setAttribute("textselectedcolor", LzColorUtils.convertColor("black"))
}
/* -*- file: -*- */
var textselectedcolor;function $lzc$set_textselectedcolor ($0) {
/* -*- file: base/style.lzx#36 -*- */
setStyleAttr($0, "textselectedcolor")
}

function $m12 ($0) {
/* -*- file: #39 -*- */
this.setAttribute("textdisabledcolor", LzColorUtils.convertColor("gray60"))
}
/* -*- file: -*- */
var textdisabledcolor;function $lzc$set_textdisabledcolor ($0) {
/* -*- file: base/style.lzx#40 -*- */
setStyleAttr($0, "textdisabledcolor")
}


function $m13 ($0) {
/* -*- file: #44 -*- */
this.setAttribute("basecolor", LzColorUtils.convertColor("offwhite"))
}
/* -*- file: -*- */
var basecolor;function $lzc$set_basecolor ($0) {
/* -*- file: base/style.lzx#45 -*- */
setStyleAttr($0, "basecolor")
}


function $m14 ($0) {
/* -*- file: #49 -*- */
this.setAttribute("bgcolor", LzColorUtils.convertColor("white"))
}
/* -*- file: -*- */
var bgcolor;function $lzc$set_bgcolor ($0) {
/* -*- file: base/style.lzx#50 -*- */
setStyleAttr($0, "bgcolor")
}


function $m15 ($0) {
/* -*- file: #54 -*- */
this.setAttribute("hilitecolor", LzColorUtils.convertColor("iceblue4"))
}
/* -*- file: -*- */
var hilitecolor;function $lzc$set_hilitecolor ($0) {
/* -*- file: base/style.lzx#55 -*- */
setStyleAttr($0, "hilitecolor")
}

function $m16 ($0) {
/* -*- file: #58 -*- */
this.setAttribute("selectedcolor", LzColorUtils.convertColor("iceblue3"))
}
/* -*- file: -*- */
var selectedcolor;function $lzc$set_selectedcolor ($0) {
/* -*- file: base/style.lzx#59 -*- */
setStyleAttr($0, "selectedcolor")
}

function $m17 ($0) {
/* -*- file: #62 -*- */
this.setAttribute("disabledcolor", LzColorUtils.convertColor("gray30"))
}
/* -*- file: -*- */
var disabledcolor;function $lzc$set_disabledcolor ($0) {
/* -*- file: base/style.lzx#63 -*- */
setStyleAttr($0, "disabledcolor")
}


function $m18 ($0) {
/* -*- file: #67 -*- */
this.setAttribute("bordercolor", LzColorUtils.convertColor("gray40"))
}
/* -*- file: -*- */
var bordercolor;function $lzc$set_bordercolor ($0) {
/* -*- file: base/style.lzx#68 -*- */
setStyleAttr($0, "bordercolor")
}

function $m19 ($0) {
/* -*- file: #71 -*- */
this.setAttribute("bordersize", 1)
}
/* -*- file: -*- */
var bordersize;function $lzc$set_bordersize ($0) {
/* -*- file: base/style.lzx#72 -*- */
setStyleAttr($0, "bordersize")
}

function $m1a ($0) {
/* -*- file: #75 -*- */
var $1 = this.textfieldcolor;
/* -*- file: -*- */
if ($1 !== this["menuitembgcolor"] || !this.inited) {
this.setAttribute("menuitembgcolor", $1)
}}
/* -*- file: base/style.lzx#75 -*- */
function $m1b () {
/* -*- file: -*- */
try {
/* -*- file: base/style.lzx#78 -*- */
return [this, "textfieldcolor"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var menuitembgcolor;var isdefault;function $lzc$set_isdefault ($0) {
/* -*- file: base/style.lzx#80 -*- */
_setdefault($0)
}
/* -*- file: -*- */
var onisdefault;function _setdefault ($0) {
/* -*- file: base/style.lzx#87 -*- */
this.isdefault = $0;
if (isdefault) {
lz._componentmanager.service.setDefaultStyle(this);
if (this["canvascolor"] != null) {
canvas.setAttribute("bgcolor", this.canvascolor)
}};

if (this.onisdefault) this.onisdefault.sendEvent(this)
}
/* -*- file: -*- */
var onstylechanged;function setStyleAttr ($0, $1) {
/* -*- file: base/style.lzx#103 -*- */
this[$1] = $0;
if (this["on" + $1]) this["on" + $1].sendEvent($1);
if (this.onstylechanged) this.onstylechanged.sendEvent(this)
}



function setCanvasColor ($0) {
if (this.isdefault && $0 != null) {
/* -*- file: #111 -*- */
canvas.setAttribute("bgcolor", $0)
};
/* -*- file: #112 -*- */
this.canvascolor = $0;
if (this.onstylechanged) this.onstylechanged.sendEvent(this)
}





function extend ($0) {
var $1 = new (lz.style)();

$1.canvascolor = this.canvascolor;
$1.textcolor = this.textcolor;
$1.textfieldcolor = this.textfieldcolor;
$1.texthilitecolor = this.texthilitecolor;
$1.textselectedcolor = this.textselectedcolor;
$1.textdisabledcolor = this.textdisabledcolor;
$1.basecolor = this.basecolor;
$1.bgcolor = this.bgcolor;
$1.hilitecolor = this.hilitecolor;
$1.selectedcolor = this.selectedcolor;
$1.disabledcolor = this.disabledcolor;
$1.bordercolor = this.bordercolor;
$1.bordersize = this.bordersize;
$1.menuitembgcolor = this.menuitembgcolor;
$1.isdefault = this.isdefault;

for (var $2 in $0) {
$1[$2] = $0[$2]
};

new LzDelegate($1, "_forwardstylechanged", this, "onstylechanged");
return $1
}




function _forwardstylechanged ($0) {
if (this.onstylechanged) this.onstylechanged.sendEvent(this)
}
/* -*- file: -*- */
function $lzc$class_style ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {basecolor: "color", bgcolor: "color", bordercolor: "color", bordersize: "number", canvascolor: "color", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", disabledcolor: "color", hilitecolor: "color", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", isdefault: "boolean", menuitembgcolor: "color", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", selectedcolor: "color", styleclass: "string", subnodes: "string", textcolor: "color", textdisabledcolor: "color", textfieldcolor: "color", texthilitecolor: "color", textselectedcolor: "color", transition: "string", "with": "string"}}, basecolor: new LzOnceExpr("$m13", null), bgcolor: new LzOnceExpr("$m14", null), bordercolor: new LzOnceExpr("$m18", null), bordersize: new LzOnceExpr("$m19", null), canvascolor: new LzOnceExpr("$mx", null), disabledcolor: new LzOnceExpr("$m17", null), hilitecolor: new LzOnceExpr("$m15", null), isdefault: false, isstyle: true, menuitembgcolor: new LzAlwaysExpr("$m1a", "$m1b", null), onisdefault: LzDeclaredEvent, onstylechanged: LzDeclaredEvent, selectedcolor: new LzOnceExpr("$m16", null), textcolor: new LzOnceExpr("$my", null), textdisabledcolor: new LzOnceExpr("$m12", null), textfieldcolor: new LzOnceExpr("$mz", null), texthilitecolor: new LzOnceExpr("$m10", null), textselectedcolor: new LzOnceExpr("$m11", null)}, $lzc$class_style.attributes);}
}

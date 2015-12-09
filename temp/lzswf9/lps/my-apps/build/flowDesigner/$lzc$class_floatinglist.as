package {
dynamic class $lzc$class_floatinglist extends $lzc$class_basefloatinglist {
/* -*- file: lz/floatinglist.lzx#90 -*- */
static var tagname = "floatinglist";static var children = LzNode.mergeChildren([{attrs: {$classrootdepth: 1, borderview: void 0, height: new LzAlwaysExpr("$m6m", "$m6n", null), ignoreplacement: true, name: "bkgnd", shdw: void 0, width: new LzAlwaysExpr("$m6k", "$m6l", null)}, "class": $lzc$class__m77}, {attrs: {$classrootdepth: 1, $delegates: ["oninit", "$m76", null], ignoreplacement: true, name: "menucap", width: new LzAlwaysExpr("$m74", "$m75", null), y: new LzAlwaysExpr("$m72", "$m73", null)}, "class": $lzc$class__m7a}], $lzc$class_basefloatinglist["children"]);static var attributes = new LzInheritedHash($lzc$class_basefloatinglist.attributes);function $m6e ($0) {

var $1 = this._currentattachy == "bottom" ? 0 : this.bordersize;
/* -*- file: -*- */
if ($1 !== this["border_bottom"] || !this.inited) {
this.setAttribute("border_bottom", $1)
}}
/* -*- file: lz/floatinglist.lzx#92 -*- */
function $m6f () {
/* -*- file: -*- */
try {
/* -*- file: lz/floatinglist.lzx#95 -*- */
return [this, "_currentattachy", this, "bordersize"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/floatinglist.lzx#94 -*- */
function $m6g ($0) {
/* -*- file: #94 -*- */
var $1 = this._currentattachy == "top" ? 0 : this.bordersize;
/* -*- file: -*- */
if ($1 !== this["border_top"] || !this.inited) {
this.setAttribute("border_top", $1)
}}
/* -*- file: lz/floatinglist.lzx#94 -*- */
function $m6h () {
/* -*- file: -*- */
try {
/* -*- file: lz/floatinglist.lzx#97 -*- */
return [this, "_currentattachy", this, "bordersize"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var shadowcrn;function $m6i ($0) {
/* -*- file: lz/floatinglist.lzx#101 -*- */
var $1 = this._currentattachy == "bottom" ? 3 : -9;
/* -*- file: -*- */
if ($1 !== this["shadowoffsety"] || !this.inited) {
this.setAttribute("shadowoffsety", $1)
}}
/* -*- file: lz/floatinglist.lzx#101 -*- */
function $m6j () {
/* -*- file: -*- */
try {
/* -*- file: lz/floatinglist.lzx#104 -*- */
return [this, "_currentattachy"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var shadowoffsety;var bkgnd;var menucap;override function _applystyle ($0) {
/* -*- file: lz/floatinglist.lzx#145 -*- */
if (this.style != null) {
setTint(this.menucap, $0.basecolor)
}}



override function init () {
super.init();
this.bkgnd.sendToBack();
this.bringToFront()
}


override function $lzc$set_bgcolor ($0) {
if (!isinited) return;
this.bkgnd.borderview.setAttribute("bgcolor", $0)
}


override function getMenuCapHeight () {
return menucap.height
}
/* -*- file: -*- */
function $lzc$class_floatinglist ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({border_bottom: new LzAlwaysExpr("$m6e", "$m6f", null), border_top: new LzAlwaysExpr("$m6g", "$m6h", null), shadowcrn: 0, shadowoffsety: new LzAlwaysExpr("$m6i", "$m6j", null)}, $lzc$class_floatinglist.attributes);}
}

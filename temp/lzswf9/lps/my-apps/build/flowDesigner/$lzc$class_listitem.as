package {
dynamic class $lzc$class_listitem extends $lzc$class_baselistitem {
/* -*- file: lz/listitem.lzx#8 -*- */
static var tagname = "listitem";static var attributes = new LzInheritedHash($lzc$class_baselistitem.attributes);function $ma3 ($0) {
/* -*- file: #7 -*- */
var $1 = immediateparent.width;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: lz/listitem.lzx#7 -*- */
function $ma4 () {
/* -*- file: -*- */
try {
/* -*- file: lz/listitem.lzx#10 -*- */
return [immediateparent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: lz/listitem.lzx#19 -*- */
function $ma5 ($0) {
/* -*- file: #19 -*- */
this.setAttribute("_ipclassroot", immediateparent.classroot)
}
/* -*- file: -*- */
var _ipclassroot;var hilited;function $ma6 ($0) {
/* -*- file: lz/listitem.lzx#29 -*- */
_ipclassroot.setHilite(this)
}


function $ma7 ($0) {
if (!immediateparent.tracking) {
_ipclassroot.setHilite(this)
}}



function $ma8 ($0) {
if (!immediateparent.tracking) {
_ipclassroot.setHilite(null)
}}



override function setSelected ($0) {
super.setSelected($0);
if (this._initcomplete) _applystyle(this.style)
}


override function setHilite ($0) {
if ($0 != this.hilited) {
this.hilited = $0;
if (this._initcomplete) _applystyle(this.style)
}}



function $ma9 () {
/* -*- file: #61 -*- */
return immediateparent.classroot
}
/* -*- file: #61 -*- */
function $maa ($0) {

lz.Track.register(this, $0)
}


override function _applystyle ($0) {
if (this.style != null) {
if (_enabled) {
if (selected) {
this.setAttribute("bgcolor", style.selectedcolor)
} else if (hilited) {
this.setAttribute("bgcolor", style.hilitecolor)
} else this.setAttribute("bgcolor", style.textfieldcolor)
} else {

this.setAttribute("bgcolor", style.textfieldcolor)
}}}




override function _showEnabled () {
setAttribute("clickable", _enabled);
if (_initcomplete) {
_applystyle(this.style)
}}
/* -*- file: -*- */
function $lzc$class_listitem ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$delegates: ["onmousetrackover", "$ma6", null, "onmouseover", "$ma7", null, "onmouseout", "$ma8", null, "ontrackgroup", "$maa", "$ma9"], _ipclassroot: new LzOnceExpr("$ma5", null), _selectonevent: "onmousetrackup", clickable: true, height: 20, hilited: false, width: new LzAlwaysExpr("$ma3", "$ma4", null)}, $lzc$class_listitem.attributes);}
}

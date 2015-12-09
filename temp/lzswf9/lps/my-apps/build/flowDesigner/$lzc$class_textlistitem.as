package {
dynamic class $lzc$class_textlistitem extends $lzc$class_listitem {
/* -*- file: lz/textlistitem.lzx#7 -*- */
static var tagname = "textlistitem";static var children = [{attrs: {$classrootdepth: 1, name: "_title", text: new LzAlwaysExpr("$maj", "$mak", null), width: new LzAlwaysExpr("$mah", "$mai", null), x: new LzAlwaysExpr("$mad", "$mae", null), y: new LzAlwaysExpr("$maf", "$mag", null)}, "class": $lzc$class__mal}];static var attributes = new LzInheritedHash($lzc$class_listitem.attributes);var text_x;function $mab ($0) {





var $1 = this.height / 2 - this._title.height / 2;
/* -*- file: -*- */
if ($1 !== this["text_y"] || !this.inited) {
this.setAttribute("text_y", $1)
}}
/* -*- file: lz/textlistitem.lzx#13 -*- */
function $mac () {
/* -*- file: -*- */
try {
/* -*- file: lz/textlistitem.lzx#16 -*- */
return [this, "height", this._title, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var text_y;var _title;override function _applystyle ($0) {
/* -*- file: lz/textlistitem.lzx#26 -*- */
var $1 = this["style"];
if ($1 != null) {
super._applystyle($0);

var $2;
if (this._enabled) {
if (this.hilited) {
$2 = $1.texthilitecolor
} else if (this.selected) {
$2 = $1.textselectedcolor
} else {
$2 = $1.textcolor
}} else {

$2 = $1.textdisabledcolor
};
if (this._title) this._title.setAttribute("fgcolor", $2)
}}



override function _showEnabled () {
super._showEnabled();
if (_initcomplete) {
_applystyle(this.style)
}}
/* -*- file: -*- */
function $lzc$class_textlistitem ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({text_x: 4, text_y: new LzAlwaysExpr("$mab", "$mac", null)}, $lzc$class_textlistitem.attributes);}
}

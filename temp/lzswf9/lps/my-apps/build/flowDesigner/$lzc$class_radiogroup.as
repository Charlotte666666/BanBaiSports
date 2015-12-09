package {
dynamic class $lzc$class_radiogroup extends $lzc$class_baselist {
/* -*- file: lz/radio.lzx#20 -*- */
static var tagname = "radiogroup";static var attributes = new LzInheritedHash($lzc$class_baselist.attributes);override function $lzc$set_value ($0) {







_setvalue($0)
}


override function init () {

super.init();

if (canvas["accessible"]) {
var $0 = this.getNumItems();
for (var $1 = 1;$1 <= $0;$1++) {
var $2 = this.getItemAt($1 - 1);
if (!$2["aaactive"]) {
var $3 = $1 + " of " + $0;
$2.setAttribute("aadescription", $3);
$2.setAttribute("aaactive", "true")
}}}}






override function acceptValue ($0, $1 = null) {
if ($1 == null) $1 = this.type;
var $2 = lz.Type.acceptTypeValue($1, $0, this, "value");

this._setvalue($2);
var $3 = null;
if ($2 != null) {
$3 = this.getItem($2)
};
if ($3) {
/* -*- file: #60 -*- */
this.select($3)
} else this.clearSelection()
}


function _setvalue ($0) {
if ($0 == this.value) return;
if (this._initcomplete) {
var $1 = null;
if ($0 != null) {
$1 = this.getItem($0)
};
this.value = $0
} else {
this.value = $0
};
if (this.onvalue) this.onvalue.sendEvent($0)
}
/* -*- file: -*- */
function $lzc$class_radiogroup ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({defaultselection: 0, itemclassname: "radiobutton", layout: {axis: "y", "class": "simplelayout", spacing: 5}, onvalue: LzDeclaredEvent, value: null}, $lzc$class_radiogroup.attributes);}
}

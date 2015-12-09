package {
dynamic class $lzc$class_listselector extends $lzc$class_selectionmanager {
/* -*- file: base/listselector.lzx#9 -*- */
static var tagname = "listselector";static var attributes = new LzInheritedHash($lzc$class_selectionmanager.attributes);var multiselect;var _forcemulti;override function isRangeSelect ($0) {









return this.multiselect && super.isRangeSelect($0)
}

override function isMultiSelect ($0) {
return this._forcemulti || this.multiselect && super.isMultiSelect($0)
}

override function select ($0) {
if (this.multiselect && $0 is Array) {
this._forcemulti = true;
for (var $1 = 0;$1 < $0.length;$1++) {
super.select($0[$1])
};
this._forcemulti = false
} else {
super.select($0)
}}







function getValue () {

var $0 = this.getSelection();
if ($0.length == 0) return null;

if ($0.length == 1 && !multiselect) {
return $0[0].getValue()
};

var $1 = [];
for (var $2 = 0;$2 < $0.length;$2++) {
$1[$2] = $0[$2].getValue()
};
return $1
}







function getText () {

var $0 = this.getSelection();
if ($0.length == 0) return null;

if ($0.length == 1 && !multiselect) {
return $0[0].text
};

var $1 = [];
for (var $2 = 0;$2 < $0.length;$2++) {
$1[$2] = $0[$2].text
};
return $1
}



function getNumItems () {
if (!this.immediateparent.subviews) return 0;
return this.immediateparent.subviews.length
}




function getNextSubview ($0, $1 = 1) {


if (typeof $1 == "undefined") $1 = 1;
var $2 = this.immediateparent.subviews;


if (!$0) {
if ($1 > 0) {
return $2[0]
} else {
return $2[$2.length - 1]
}};


var $3;
var $4 = $2.length;
for (var $5 = 0;$5 < $4;$5++) {
var $6 = $2[$5];
if ($6 == $0) {
var $7 = $5 + $1;
if ($7 < 0) {
$3 = $2[0]
} else if ($7 >= $4) {
$3 = $2[$4 - 1]
} else {
$3 = $2[$7]
};
break
}};

ensureItemInView($3);
return $3
}


function ensureItemInView ($0) {

if (!$0) {
return
};

var $1 = immediateparent.parent;
var $2 = false;
if ($0.y + $0.height > $1.height - immediateparent.y) {
var $3 = $1.height - immediateparent.y - ($0.y + $0.height);
var $4 = Math.max($1.height - immediateparent.height, immediateparent.y + $3);

immediateparent.setAttribute("y", $4);
$2 = true
} else if (immediateparent.y * -1 > $0.y) {


var $3 = immediateparent.y * -1 - $0.y;
var $4 = Math.min(0, immediateparent.y + $3);
immediateparent.setAttribute("y", $4);
$2 = true
};
if ($2) {
this._updatefromscrolling = true
}}
/* -*- file: -*- */
var _updatefromscrolling;function allowhilite ($0) {
/* -*- file: base/listselector.lzx#161 -*- */
if (this._updatefromscrolling) {
if ($0 != null) this._updatefromscrolling = false;
return false
};
return true
}

function getItemByIndex ($0) {
return this.parent._contentview.subviews[$0]
}
/* -*- file: -*- */
function $lzc$class_listselector ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_forcemulti: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", multiselect: "boolean", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", sel: "string", styleclass: "string", subnodes: "string", toggle: "boolean", transition: "string", "with": "string"}}, _forcemulti: false, _updatefromscrolling: false, multiselect: false}, $lzc$class_listselector.attributes);}
}

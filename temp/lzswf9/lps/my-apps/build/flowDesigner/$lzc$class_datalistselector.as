package {
dynamic class $lzc$class_datalistselector extends $lzc$class_dataselectionmanager {
/* -*- file: base/datalistselector.lzx#9 -*- */
static var tagname = "datalistselector";static var attributes = new LzInheritedHash($lzc$class_dataselectionmanager.attributes);var multiselect;var _forcemulti;override function isRangeSelect ($0) {












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

var $1 = this.immediateparent.subviews[0]._valuedatapath;
if (!$1) $1 = this.immediateparent.subviews[0]._textdatapath;
if (!$1) $1 = "text()";

if ($0.length == 1 && !multiselect) {
return $0[0].xpathQuery($1)
} else {
var $2 = [];
for (var $3 = 0;$3 < $0.length;$3++) {
$2[$3] = $0[$3].xpathQuery($1)
};
return $2
}}








function getText () {

var $0 = this.getSelection();
if ($0.length == 0) return null;

var $1 = this.immediateparent.subviews[0]._textdatapath;
if (!$1) $1 = "text()";
if ($0.length == 1 && !multiselect) {
return $0[0].xpathQuery($1)
} else {
var $2 = [];
for (var $3 = 0;$3 < $0.length;$3++) {
$2[$3] = $0[$3].xpathQuery($1)
};
return $2
}}





function getNumItems () {

if (!this.cloneManager) {
var $0 = immediateparent.subviews;
if ($0 == null || $0.length == 0) {
return 0
} else {
this.cloneManager = $0[0].cloneManager
}};

if (this.cloneManager != null) {
if (!this.cloneManager["nodes"]) {
return 0
} else {
return this.cloneManager.nodes.length
}} else if ($0[0].data) {

return 1
} else {
return 0
}}








function getNextSubview ($0, $1 = 1) {
var $2 = immediateparent.subviews[0].cloneManager["clones"];
if ($0 == null) {
var $3 = $1 == -1 && parent.shownitems != -1 ? parent.shownitems - 1 : 0;

return $2[$3]
};
var $4 = findIndex($0);
if ($4 == -1) return null;

var $5 = immediateparent.subviews[0].cloneManager.nodes;

if (!$1) $1 = 1;
$4 += $1;
if ($4 == -1) $4 = 0;
if ($4 == $5.length) $4 = $5.length - 1;

_ensureItemInViewByIndex($4);
var $6 = $5[$4];

var $7 = immediateparent.subviews;
for (var $8 = 0;$8 < $7.length;$8++) {
if ($7[$8].datapath.p == $6) {

return $7[$8]
}}}



function findIndex ($0) {
if (!immediateparent.subviews[0].cloneManager) {
if ($0 instanceof lz.view) {
return immediateparent.subviews[0] == $0 ? 0 : -1
} else {
return immediateparent.subviews[0].datapath.p == $0.p ? 0 : -1
}};


var $1;
if ($0 instanceof lz.view) {
$1 = $0.datapath.p
} else {
$1 = $0.p
};

var $2 = immediateparent.subviews[0].cloneManager.nodes;
var $3 = -1;
if ($2 != null) {
for (var $4 = 0;$4 < $2.length;$4++) {
if ($2[$4] == $1) {
$3 = $4;
break
}}};


return $3
}

function ensureItemInView ($0) {
if (!$0) return;
var $1 = findIndex($0);
if ($1 != -1) _ensureItemInViewByIndex($1)
}

function _ensureItemInViewByIndex ($0) {
var $1 = this.immediateparent;
var $2 = $1.subviews;
if (!$2 || $2.length == 0) {
/* -*- file: #189 -*- */
return
};
/* -*- file: #190 -*- */
var $3 = $2[0].height;
var $4 = $0 * $3;
var $5 = 0;
if ($0 > 0) {
var $6 = $2[0].cloneManager;
if (parent["spacing"]) {
$5 = parent.spacing
} else if ($6 && $6["spacing"]) {
$5 = $6.spacing
};
$4 += $5 * ($0 - 1)
};
var $7 = false;
var $8 = $1.parent.height;
var $9 = $1.y;
if ($4 + $3 > $8 - $9) {
var $a = $8 - $9 - ($4 + $3 + $5);
var $b = Math.max($8 - $1.height, $9 + $a);
$1.setAttribute("y", $b);
$7 = true
} else if ($9 * -1 > $4) {


var $a = $9 * -1 - $4 - $5;
var $b = Math.min(0, $9 + $a);
$1.setAttribute("y", $b);
$7 = true
};
if ($7) {
this._updatefromscrolling = true
}}



function getItemByIndex ($0) {

var $1 = immediateparent.subviews;
if (!$1 || $1.length == 0) return null;
this._ensureItemInViewByIndex($0);
var $2 = $1[0].cloneManager;
if ($2 == null) {
return $0 == 0 ? $1[0] : undefined
};
var $3 = $2.clones[0].datapath.xpathQuery("position()") - 1;
return $2.clones[$0 - $3]
}


function getItemByData ($0) {

return $0 ? getItemByIndex(this.getItemIndexByData($0)) : null
}


function getItemIndexByData ($0) {

if ($0) {
var $1 = immediateparent.subviews;
if ($1[0].cloneManager) {
var $2 = $1[0].cloneManager["nodes"];
if ($2 != null) {
for (var $3 = 0;$3 < $2.length;$3++) {
if ($2[$3] == $0) {
return $3
}}}} else if ($1[0].datapath.p == $0) {



return 0
}};

return null
}
/* -*- file: -*- */
var _updatefromscrolling;function allowhilite ($0) {
/* -*- file: base/datalistselector.lzx#272 -*- */
if (this._updatefromscrolling) {
if ($0 != null) this._updatefromscrolling = false;
return false
};
return true
}
/* -*- file: -*- */
function $lzc$class_datalistselector ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_forcemulti: "boolean", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", multiselect: "boolean", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", sel: "string", styleclass: "string", subnodes: "string", toggle: "boolean", transition: "string", "with": "string"}}, _forcemulti: false, _updatefromscrolling: false, multiselect: false}, $lzc$class_datalistselector.attributes);}
}

package {
dynamic class $lzc$class__componentmanager extends LzNode {
/* -*- file: base/componentmanager.lzx#14 -*- */
static var tagname = "_componentmanager";static var attributes = new LzInheritedHash(LzNode.attributes);var focusclass;var keyhandlers;var lastsdown;var lastedown;var defaults;var currentdefault;var defaultstyle;var ondefaultstyle;override function init () {
/* -*- file: #44 -*- */
var $0 = this.focusclass;

if (typeof canvas.focusclass != "undefined") {
$0 = canvas.focusclass
};

if ($0 != null) {
canvas.__focus = new (lz[$0])(canvas);
canvas.__focus.reset()
};
super.init()
}
/* -*- file: -*- */
var _lastkeydown;var upkeydel;function $mt () {
/* -*- file: base/componentmanager.lzx#61 -*- */
return lz.Keys
}
/* -*- file: #62 -*- */
function dispatchKeyDown ($0) {

var $1 = false;
if ($0 == 32) {
this.lastsdown = null;
var $2 = lz.Focus.getFocus();
if ($2 instanceof lz.basecomponent) {
$2.doSpaceDown();
this.lastsdown = $2
};
$1 = true
} else if ($0 == 13 && this.currentdefault) {
this.lastedown = this.currentdefault;
this.currentdefault.doEnterDown();
$1 = true
};
if ($1) {
if (!this.upkeydel) this.upkeydel = new LzDelegate(this, "dispatchKeyTimer");
this._lastkeydown = $0;
lz.Timer.addTimer(this.upkeydel, 50)
}}



function dispatchKeyTimer ($0) {

if (this._lastkeydown == 32 && this.lastsdown != null) {
this.lastsdown.doSpaceUp();
this.lastsdown = null
} else if (this._lastkeydown == 13 && this.currentdefault && this.currentdefault == this.lastedown) {

this.currentdefault.doEnterUp()
}}



function findClosestDefault ($0) {

if (!this.defaults) {
return null
};
var $1 = null;
var $2 = null;

var $3 = this.defaults;
$0 = $0 || canvas;
var $4 = lz.ModeManager.getModalView();
for (var $5 = 0;$5 < $3.length;$5++) {
var $6 = $3[$5];

if ($4 && !$6.childOf($4)) {
continue
};

var $7 = this.findCommonParent($6, $0);
if ($7 && (!$1 || $7.nodeLevel > $1.nodeLevel)) {
$1 = $7;
$2 = $6
}};

return $2
}


function findCommonParent ($0, $1) {
while ($0.nodeLevel > $1.nodeLevel) {
$0 = $0.immediateparent;
if (!$0.visible) return null
};

while ($1.nodeLevel > $0.nodeLevel) {
$1 = $1.immediateparent;
if (!$1.visible) return null
};

while ($0 != $1) {
$0 = $0.immediateparent;
$1 = $1.immediateparent;
if (!$0.visible || !$1.visible) return null
};

return $0
}

function makeDefault ($0) {

if (!this.defaults) this.defaults = [];
this.defaults.push($0);
this.checkDefault(lz.Focus.getFocus())
}


function unmakeDefault ($0) {

if (!this.defaults) return;
for (var $1 = 0;$1 < this.defaults.length;$1++) {
if (this.defaults[$1] == $0) {
this.defaults.splice($1, 1);
this.checkDefault(lz.Focus.getFocus());
return
}}}




function $mu () {
/* -*- file: #167 -*- */
return lz.Focus
}
/* -*- file: #168 -*- */
function checkDefault ($0) {


if (!($0 instanceof lz.basecomponent) || !$0.doesenter) {


if ($0 instanceof lz.inputtext && $0.multiline) {

$0 = null
} else {
$0 = this.findClosestDefault($0)
}};


if ($0 == this.currentdefault) return;

if (this.currentdefault) {
this.currentdefault.setAttribute("hasdefault", false)
};

this.currentdefault = $0;

if ($0) {
$0.setAttribute("hasdefault", true)
}}



function $mv () {
/* -*- file: #196 -*- */
return lz.ModeManager
}
/* -*- file: #196 -*- */
function $mw ($0 = null) {




if (lz.Focus.getFocus() == null) {
this.checkDefault(null)
}}


function setDefaultStyle ($0) {
this.defaultstyle = $0;
if (this.ondefaultstyle) this.ondefaultstyle.sendEvent($0)
}

function getDefaultStyle () {
if (this.defaultstyle == null) {
this.defaultstyle = new (lz.style)(canvas, {isdefault: true})
};
return this.defaultstyle
}
/* -*- file: -*- */
function $lzc$class__componentmanager ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", focusclass: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $delegates: ["onkeydown", "dispatchKeyDown", "$mt", "onfocus", "checkDefault", "$mu", "onmode", "$mw", "$mv"], _lastkeydown: 0, currentdefault: null, defaults: null, defaultstyle: null, focusclass: "focusoverlay", keyhandlers: null, lastedown: null, lastsdown: null, ondefaultstyle: LzDeclaredEvent, upkeydel: null}, $lzc$class__componentmanager.attributes);}
}

package {
dynamic class $lzc$class_baselist extends $lzc$class_baseformitem {
/* -*- file: base/baselist.lzx#7 -*- */
static var tagname = "baselist";static var attributes = new LzInheritedHash($lzc$class_baseformitem.attributes);var itemclassname;var __itemclass;var defaultselection;var multiselect;var toggleselected;var dataoption;var _hiliteview;var _contentview;var _initialselection;var _selector;var __focusfromchild;var onselect;var onitemclassname;override function doEnterDown () {
/* -*- file: #68 -*- */
if (this._hiliteview is LzView && this._hiliteview.enabled) {
this._hiliteview.setAttribute("selected", true)
}}




override function doEnterUp () {
return
}


override function init () {
super.init();

if (this._contentview == null) {
if (this.defaultplacement != null) {
this._contentview = this.searchSubnodes("name", this.defaultplacement)
} else {
this._contentview = this
}};

if (this.dataoption == "lazy" || this.dataoption == "resize") {
this._selector = new (lz.datalistselector)(this, {multiselect: this.multiselect, toggle: toggleselected})
} else {

this._selector = new (lz.listselector)(this, {multiselect: this.multiselect, toggle: toggleselected})
};


if (this._initialselection != null) {
this.select(this._initialselection)
} else if (this.defaultselection != null) {
selectItemAt(defaultselection)
}}






function _doFocus ($0) {


if (this["_selector"] != null) {
var $1 = this._selector.getSelection();
if ($1 && $1.length > 0) {
if ($1[0] is LzView) {
this._hiliteview = $1[0];
this._hiliteview.setHilite(true)
}}}}








function _doblur ($0) {

if (this._hiliteview is LzView) {
this._hiliteview.setHilite(false)
};
this._hiliteview = null
}




function setHilite ($0) {

if (this._selector.allowhilite($0)) {
if (this._hiliteview is LzView) this._hiliteview.setHilite(false);
this._hiliteview = $0;
if ($0 is LzView) {
$0.setHilite(true)
}}}







function _dokeydown ($0) {


var $1 = this._hiliteview;

if ($1 == null) {
$1 = getSelection();



if (this.multiselect) $1 = $1[$1.length - 1]
};

if (this.focusable && $0 == 32) {
if ($1 is LzView && $1.enabled) {
$1.setAttribute("selected", true);

$1.setHilite(true);
this._hiliteview = $1
};
return
};





if (this.focusable && $0 >= 37 && $0 <= 40) {
this.setAttribute("doesenter", true);
var $2;
if ($0 == 39 || $0 == 40) {
$2 = _selector.getNextSubview($1)
};
if ($0 == 37 || $0 == 38) {
$2 = _selector.getNextSubview($1, -1)
};
if ($1 is LzView) {
$1.setHilite(false)
};
if ($2) {

if ($2.enabled && _selector.isRangeSelect($2)) {
$2.setAttribute("selected", true)
};
$2.setHilite(true)
};
this._hiliteview = $2
}}






override function getValue () {

return _selector.getValue()
}





function getText () {

if (_initcomplete) return _selector.getText();
return null
}








function getSelection () {
if (this._initcomplete) {

var $0 = this._selector.getSelection();
if (multiselect) {

return $0
} else {

if ($0.length == 0) {
return null
} else {
return $0[0]
}}} else {


return this._initialselection
}}




function selectNext () {
moveSelection(1)
}



function selectPrev () {
moveSelection(-1)
}




function moveSelection ($0) {
if (!$0) $0 = 1;
var $1 = this._selector.getSelection();
var $2;
if ($1.length == 0) {
$2 = this._contentview.subviews[0]
} else {
var $3 = $1[0];
$2 = this._selector.getNextSubview($3, $0)
};
var $4 = lz.Focus.getFocus();
select($2);
if ($3 && $4 && $4.childOf($3)) {
lz.Focus.setFocus($2)
}}





function getNumItems () {
if (this["_selector"] == null) return 0;
return this._selector.getNumItems()
}






function getItemAt ($0) {
if (_contentview.subviews[$0]) {
return getItem(_contentview.subviews[$0].getValue())
};
return null
}






function getItem ($0) {


if (_contentview != null && _contentview.subviews != null) {
for (var $1 = 0;$1 < _contentview.subviews.length;$1++) {
var $2 = _contentview.subviews[$1];
if ($2.getValue() == $0) {
return $2
}}};


return null
}







function addItem ($0, $1 = null) {
new (this.__itemclass)(this, {text: $0, value: $1})
}

function $lzc$set_itemclassname ($0) {




this.itemclassname = $0;
this.__itemclass = lz[$0];
if (onitemclassname.ready) {
/* -*- file: #337 -*- */
this.onitemclassname.sendEvent($0)
}}







function removeItem ($0) {
var $1 = getItem($0);





_removeitem($1)
}






function removeItemAt ($0) {
var $1 = _contentview.subviews[$0];
_removeitem($1)
}


function removeAllItems () {




while (_contentview.subviews.length != 0) {
for (var $0 = 0;$0 < _contentview.subviews.length;$0++) {
_removeitem(_contentview.subviews[$0])
}}}





function _removeitem ($0) {
if ($0) {
if ($0.selected) this._selector.unselect($0);
$0.destroy()
}}





function selectItem ($0) {
var $1 = getItem($0);
if ($1) {
select($1)
}}




function selectItemAt ($0) {
if (this._selector != null) {
var $1 = this._selector.getItemByIndex($0);
select($1)
}}



function clearSelection () {
if (this._initcomplete) {
this._selector.clearSelection()
} else {
this._initialselection = null;
this.defaultselection = null
}}





function select ($0) {

if ($0 == null) {

} else if (this._initcomplete) {
this._selector.select($0);
if (!this.multiselect) {
this.setAttribute("value", $0.getValue())
}} else {

if (multiselect) {
if (this._initialselection == null) this._initialselection = [];

this._initialselection.push($0)
} else {
this._initialselection = $0
}};


if (this._hiliteview is LzView && this._hiliteview["enabled"]) {
this._hiliteview.setHilite(false);
this._hiliteview = null
};
this.setAttribute("doesenter", false);
if (this.onselect) this.onselect.sendEvent($0)
}
/* -*- file: -*- */
function $lzc$class_baselist ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {__focusfromchild: "boolean", _focusable: "boolean", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", dataoption: "string", datapath: "string", defaultplacement: "string", doesenter: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", itemclassname: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", submit: "boolean", submitname: "string", subnodes: "string", subviews: "string", text: "html", tintcolor: "string", totalframes: "number", transition: "string", type: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["onfocus", "_doFocus", null, "onblur", "_doblur", null, "onkeydown", "_dokeydown", null], __focusfromchild: false, __itemclass: null, _contentview: null, _hiliteview: null, _initialselection: null, _selector: null, dataoption: "none", defaultselection: null, itemclassname: "", multiselect: false, onitemclassname: LzDeclaredEvent, onselect: LzDeclaredEvent, toggleselected: false}, $lzc$class_baselist.attributes);}
}

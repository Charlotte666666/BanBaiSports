package {
dynamic class $lzc$class_basecombobox extends $lzc$class_baseformitem {
/* -*- file: base/basecombobox.lzx#15 -*- */
static var tagname = "basecombobox";static var children = [{attrs: {$classrootdepth: 1, focusable: false, name: "bkgnd", width: new LzAlwaysExpr("$m7f", "$m7g", null)}, "class": $lzc$class__m8q}, {attrs: {$classrootdepth: 1, _dsblfield: null, cbtext: void 0, editable_state: void 0, editbkgnd: void 0, focusable: false, height: new LzAlwaysExpr("$m7l", "$m7m", null), name: "interior", non_editable_state: void 0, width: new LzAlwaysExpr("$m7j", "$m7k", null), x: new LzOnceExpr("$m7h", null), y: new LzOnceExpr("$m7i", null)}, "class": $lzc$class__m8r}, {attrs: {$classrootdepth: 1, $datapath: {attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {axis: "string", classroot: "string", cloneManager: "string", context: "string", datapath: "string", defaultplacement: "string", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", name: "token", nodeLevel: "number", options: "css", p: "string", parent: "string", placement: "string", pooling: "boolean", replication: "string", rerunxpath: "boolean", sortorder: "string", sortpath: "string", spacing: "number", styleclass: "string", subnodes: "string", transition: "string", "with": "string", xpath: "string"}}, datacontrolsvisibility: false}, "class": LzDatapath}, $delegates: ["onconstruct", "$m8j", null, "oninit", "$m8k", null, "onkeyup", "_dokeyup", null], attach: "bottom", attachoffset: new LzAlwaysExpr("$m8d", "$m8e", null), autoscrollbar: new LzAlwaysExpr("$m8f", "$m8g", null), bordersize: new LzAlwaysExpr("$m87", "$m88", null), datapath: LzNode._ignoreAttribute, defaultselection: new LzAlwaysExpr("$m8h", "$m8i", null), multiselect: false, name: "cblist", shownitems: new LzAlwaysExpr("$m8b", "$m8c", null), spacing: new LzAlwaysExpr("$m89", "$m8a", null), visible: false, width: new LzAlwaysExpr("$m85", "$m86", null)}, "class": $lzc$class__m8v}, {attrs: "cblist", "class": $lzc$class_userClassPlacement}];static var attributes = new LzInheritedHash($lzc$class_baseformitem.attributes);function $m7b ($0) {




var $1 = cblist.value;
/* -*- file: -*- */
if ($1 !== this["value"] || !this.inited) {
this.setAttribute("value", $1)
}}
/* -*- file: base/basecombobox.lzx#20 -*- */
function $m7c () {
/* -*- file: -*- */
try {
/* -*- file: base/basecombobox.lzx#23 -*- */
return [cblist, "value"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var isopen;function $lzc$set_isopen ($0) {
/* -*- file: base/basecombobox.lzx#24 -*- */
this.setOpen($0)
}
/* -*- file: -*- */
var bordersize;var spacing;var defaulttext;var defaultselection;function $lzc$set_defaultselection ($0) {
/* -*- file: base/basecombobox.lzx#37 -*- */
this.setDefaultSelection($0)
}
/* -*- file: -*- */
var ondefaultselection;var editable;function $lzc$set_editable ($0) {
/* -*- file: base/basecombobox.lzx#43 -*- */
this.setEditable($0)
}
/* -*- file: -*- */
var itemclassname;function $lzc$set_itemclassname ($0) {
/* -*- file: base/basecombobox.lzx#46 -*- */
this.setItemclassname($0)
}
/* -*- file: -*- */
var shownitems;var mousedownintext;var initcomplete;var autoscrollbar;var selected;var onselect;var dataoption;var attachoffset;var text_x;var text_y;function $m7d ($0) {
/* -*- file: base/basecombobox.lzx#82 -*- */
var $1 = this.width - 19;
/* -*- file: -*- */
if ($1 !== this["text_width"] || !this.inited) {
this.setAttribute("text_width", $1)
}}
/* -*- file: base/basecombobox.lzx#82 -*- */
function $m7e () {
/* -*- file: -*- */
try {
/* -*- file: base/basecombobox.lzx#85 -*- */
return [this, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var text_width;var min_width;override function getNextSelection () {
/* -*- file: base/basecombobox.lzx#96 -*- */
this.setOpen(false);
if (!editable) {
return lz.Focus.getNext(bkgnd)
} else {
return lz.Focus.getNext(interior.cbtext)
}}





function resolveSelection () {



this.setOpen(false);
if (!editable) {
return bkgnd
} else {
return interior.cbtext
}}
/* -*- file: -*- */
var bkgnd;var interior;var cblist;function setDefaultSelection ($0) {
/* -*- file: base/basecombobox.lzx#300 -*- */
this.defaultselection = $0;
if ($0 == null) return;
if (defaulttext != "") {




this.defaulttext = ""
};
if (this.ondefaultselection) this.ondefaultselection.sendEvent()
}


function $m8l ($0) {
if ($0 is LzDataNodeMixin) {
this.cblist.datapath.setPointer($0)
}}
/* -*- file: -*- */
var onitemclassname;function setItemclassname ($0) {
/* -*- file: base/basecombobox.lzx#326 -*- */
this.itemclassname = $0;
if (this.isinited) {

if ($0 != "") {

cblist.setAttribute("itemclassname", this.itemclassname)
} else {

this.itemclassname = cblist.itemclassname
}};

if (this.onitemclassname) this.onitemclassname.sendEvent()
}
/* -*- file: -*- */
var oneditable;function setEditable ($0) {
/* -*- file: base/basecombobox.lzx#346 -*- */
this.editable = $0;
if (this._initcomplete) {
if ($0) {
this.interior.non_editable_state.setAttribute("applied", false);
this.interior.editable_state.setAttribute("applied", true)
} else {
this.interior.editable_state.setAttribute("applied", false);
this.interior.non_editable_state.setAttribute("applied", true)
};
this._showEnabled();
this.interior.setupText();
if (this.oneditable) this.oneditable.sendEvent()
}}
/* -*- file: -*- */
var ontext;override function determinePlacement ($0, $1, $2) {
/* -*- file: base/basecombobox.lzx#366 -*- */
if ($1 == "cblist") {
return this.cblist.determinePlacement($0, $1, $2)
} else return super.determinePlacement($0, $1, $2)
}



override function init () {
this._initcomplete = true;


this.setEditable(this.editable);

super.init();


this.setItemclassname(this.itemclassname);
cblist.setAttribute("visible", false)
}


function $m8m ($0) {
if (lz.Focus.getFocus() != this.interior.cbtext) this.setOpen(false)
}



function getFocusRect () {
var $0 = this.getAttributeRelative("x", canvas);
var $1 = this.getAttributeRelative("y", canvas);
var $2 = this.getAttributeRelative("width", canvas);
var $3 = this.getAttributeRelative("height", canvas);
return [$0, $1, $2, $3]
}



function select ($0) {
this.cblist.select($0)
}


function $m8n ($0) {
/* -*- file: #408 -*- */
this.setAttribute("_fixseldel", new LzDelegate(this, "fixSelection"))
}
/* -*- file: -*- */
var _fixseldel;var _fixselstart;var _fixselend;function fixSelection ($0) {
/* -*- file: base/basecombobox.lzx#415 -*- */
this.interior.cbtext.setSelection(this._fixselstart, this._fixselend)
}





function $m8o () {
/* -*- file: #422 -*- */
return this.cblist
}
/* -*- file: #422 -*- */
function $m8p ($0) {
this.setOpen(false);


this.selected = $0;
if ($0) this.setText($0.text);
if (this.editable && lz.Focus.getFocus() == this.interior.cbtext) {
this._fixselstart = 0;
this._fixselend = $0.text.length;
lz.Idle.callOnIdle(_fixseldel)
};





if (this.onselect) this.onselect.sendEvent($0)
}



function passModeEvent ($0, $1) {




if ($0 == "onmousedown") {





if ($1 != null) {




if (!$1.childOf(this.cblist)) {

this.setOpen(false)
}} else {





this.setOpen(false)
}};



if ($1 && $1.childOf(this.cblist)) {
if ($1[$0]) {
$1[$0].sendEvent($1)
};
return false
};



return true
}








function toggle ($0 = null) {
this.setOpen(!this.isopen, $0)
}










function setOpen ($0, $1 = null) {
if (!this.isinited) {
this.isopen = $0;
return
};
if ($0) {
if (this.isopen) return;
lz.ModeManager.makeModal(this);

this.cblist.bringToFront();
this.cblist.setAttribute("visible", true);
lz.Focus.setFocus(this.cblist, $1);

this.isopen = true;
if (this["onisopen"]) this.onisopen.sendEvent(true)
} else {
if (!this["isopen"]) return;
this.isopen = false;

lz.ModeManager.release(this);
this.cblist.setAttribute("visible", false);
if (this["onisopen"]) this.onisopen.sendEvent(false);
if (lz.Focus.getFocus() == this.cblist) {
if (!editable) {
lz.Focus.setFocus(bkgnd, $1)
} else {
lz.Focus.setFocus(interior.cbtext, $1)
}}}}







override function acceptValue ($0, $1 = null) {
this.setText($0)
}





override function getValue () {
var $0;
var $1 = this.cblist.getValue();
if ($1 == null) {
$0 = this.interior.cbtext.text
} else {
$0 = $1
};
return $0
}



function setText ($0) {
this.text = $0;
this.interior.cbtext.setAttribute("text", $0);
if (!this._enabled) interior._dsblfield.setAttribute("text", $0);
if (this.ontext) this.ontext.sendEvent($0)
}



function getText () {
return this.interior.cbtext.text
}




function getSelection () {
return this.cblist.getSelection()
}




function addItem ($0, $1 = null) {
this.cblist.addItem($0, $1)
}






function getItem ($0) {
return this.cblist.getItem($0)
}






function getItemAt ($0) {
return this.cblist.getItemAt($0)
}




function removeItem ($0) {
this.cblist.removeItem($0)
}





function removeItemAt ($0) {
this.cblist.removeItemAt($0)
}




function selectItem ($0) {
this.cblist.selectItem($0)
}



function selectItemAt ($0) {
this.cblist.selectItemAt($0)
}



function clearSelection () {
this.cblist.clearSelection();
this.setText("")
}


override function _applystyle ($0) {
if (this.style != null) {
if (editable) {
interior.editbkgnd.setAttribute("bgcolor", $0.textfieldcolor);
interior.cbtext.setAttribute("bgcolor", $0.textfieldcolor)
} else {
interior.cbtext.setAttribute("bgcolor", null);
interior.cbtext.setAttribute("fgcolor", $0.textcolor)
};
setTint(bkgnd, $0.basecolor)
}}



override function _showEnabled () {
interior.cbtext.setAttribute("visible", this._enabled);
if (!this._enabled) {
if (interior._dsblfield == null) {
var $0 = new (lz.text)(interior, {name: "_dsblfield", x: 2, y: 1, width: interior.width, height: interior.height, fgcolor: this["style"] ? this.style.textdisabledcolor : null})
} else {



interior._dsblfield.setAttribute("visible", true)
};
interior._dsblfield.setAttribute("text", this.getText())
} else {
if (interior._dsblfield) interior._dsblfield.setAttribute("visible", false)
}}



override function $lzc$set_width ($0) {
/* -*- file: #674 -*- */
super.$lzc$set_width(Math.max($0, this.min_width))
}
/* -*- file: -*- */
function $lzc$class_basecombobox ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_fixselend: "number", _fixselstart: "number", _focusable: "boolean", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", attachoffset: "number", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", dataoption: "string", datapath: "string", defaultplacement: "string", defaultselection: "number", defaulttext: "string", doesenter: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", itemclassname: "string", layout: "css", loadratio: "number", mask: "string", min_width: "number", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", submit: "boolean", submitname: "string", subnodes: "string", subviews: "string", text: "html", text_width: "number", text_x: "number", text_y: "number", tintcolor: "string", totalframes: "number", transition: "string", type: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["ondata", "$m8l", null, "onblur", "$m8m", null, "onselect", "$m8p", "$m8o"], _fixseldel: new LzOnceExpr("$m8n", null), attachoffset: -1, autoscrollbar: true, bordersize: 1, dataoption: "none", defaultselection: null, defaulttext: "", editable: true, focusable: false, initcomplete: 0, isopen: false, itemclassname: "", min_width: 50, mousedownintext: false, ondefaultselection: LzDeclaredEvent, oneditable: LzDeclaredEvent, onitemclassname: LzDeclaredEvent, onselect: LzDeclaredEvent, ontext: LzDeclaredEvent, selected: null, shownitems: -1, spacing: 0, text_width: new LzAlwaysExpr("$m7d", "$m7e", null), text_x: 2, text_y: 2, value: new LzAlwaysExpr("$m7b", "$m7c", null), width: 100}, $lzc$class_basecombobox.attributes);}
}

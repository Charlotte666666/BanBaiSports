package {
dynamic class $lzc$class_basetrackgroup extends LzView {
/* -*- file: base/basetrackgroup.lzx#3 -*- */
static var tagname = "basetrackgroup";static var attributes = new LzInheritedHash(LzView.attributes);function $m3r ($0) {



var $1 = this;
/* -*- file: -*- */
if ($1 !== this["boundsref"] || !this.inited) {
this.setAttribute("boundsref", $1)
}}
/* -*- file: base/basetrackgroup.lzx#7 -*- */
function $m3s () {
/* -*- file: -*- */
try {
/* -*- file: base/basetrackgroup.lzx#10 -*- */
return []
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var boundsref;function $lzc$set_boundsref ($0) {
/* -*- file: base/basetrackgroup.lzx#8 -*- */
this.setBoundsRef($0)
}
/* -*- file: -*- */
var onboundsref;var trackingrate;var tracking;function $lzc$set_tracking ($0) {
/* -*- file: base/basetrackgroup.lzx#20 -*- */
setTracking($0)
}
/* -*- file: -*- */
var ontracking;var _trackgroup;var _boundstrackgroup;var activateevents;var deactivateevents;var _activateDL;var _deactivateDL;var _repeattrackDL;var _destroyDL;var onmousetrackoutbottom;var onmousetrackouttop;var onmousetrackoutright;var onmousetrackoutleft;override function construct ($0, $1) {
/* -*- file: base/basetrackgroup.lzx#65 -*- */
super.construct($0, $1);

this._activateDL = new LzDelegate(this, "activateTrackgroup");
this._deactivateDL = new LzDelegate(this, "deactivateTrackgroup");
this._repeattrackDL = new LzDelegate(this, "trackingout");
this._destroyDL = new LzDelegate(this, "destroyitem");
this._trackgroup = "tg" + this.getUID();
this._boundstrackgroup = "btg" + this.getUID()
}


override function init () {
super.init();
lz.Track.register(this.boundsref, this._boundstrackgroup)
}


override function destroy () {
this.setTracking(false);


lz.Track.unregister(this.boundsref, this._boundstrackgroup);


this.activateevents = null;
this.deactivateevents = null;

super.destroy()
}


function setBoundsRef ($0) {
this.boundsref = $0;
if (this.onboundsref) this.onboundsref.sendEvent()
}



function setTracking ($0) {
this.tracking = $0;
if (this.isinited) {
if ($0) {

lz.Track.activate(this._trackgroup);
lz.Track.activate(this._boundstrackgroup)
} else {

lz.Track.deactivate(this._trackgroup);
lz.Track.deactivate(this._boundstrackgroup)
}};

if (this.ontracking) this.ontracking.sendEvent($0)
}




function activateTrackgroup ($0) {
this.setTracking(true);
this._destroyDL.register($0, "ondestroy")
}




function deactivateTrackgroup ($0) {
this.setTracking(false)
}


function destroyitem ($0) {
this.setTracking(false)
}


function $m3t ($0) {
lz.Track.register($0, this._trackgroup);
if (this.activateevents) {
var $1 = this._activateDL;
var $2 = this.activateevents;
for (var $3 = 0;$3 < $2.length;++$3) {
$1.register($0, $2[$3])
}};

if (this.deactivateevents) {
var $4 = this._deactivateDL;
var $5 = this.deactivateevents;
for (var $3 = 0;$3 < $5.length;++$3) {
$4.register($0, $5[$3])
}}}




function $m3u ($0) {
lz.Track.unregister($0, this._trackgroup);
if (this.activateevents) {
var $1 = this._activateDL;
var $2 = this.activateevents;
for (var $3 = 0;$3 < $2.length;++$3) {
$1.unregisterFrom($0[$2[$3]])
}};

if (this.deactivateevents) {
var $4 = this._deactivateDL;
var $5 = this.deactivateevents;
for (var $3 = 0;$3 < $5.length;++$3) {
$4.unregisterFrom($0[$5[$3]])
}}}



function $m3v () {
/* -*- file: #177 -*- */
return this.boundsref
}




function trackingout ($0) {


if (this.tracking) {
lz.Timer.addTimer(this._repeattrackDL, this.trackingrate)
};
var $1 = this.boundsref.getMouse("x");
var $2 = this.boundsref.getMouse("y");

if ($1 <= 0) {
if (this.boundsref.onmousetrackoutleft) this.boundsref.onmousetrackoutleft.sendEvent($1)
} else if ($1 >= this.boundsref.width) {
if (this.boundsref.onmousetrackoutright) this.boundsref.onmousetrackoutright.sendEvent($1)
};

if ($2 <= 0) {
if (this.boundsref.onmousetrackouttop) this.boundsref.onmousetrackouttop.sendEvent($2)
} else if ($2 >= this.boundsref.height) {
if (this.boundsref.onmousetrackoutbottom) this.boundsref.onmousetrackoutbottom.sendEvent($2 - this.boundsref.height)
}}
/* -*- file: -*- */
function $lzc$class_basetrackgroup ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["onaddsubview", "$m3t", null, "onremovesubview", "$m3u", null, "onmousetrackout", "trackingout", "$m3v"], _activateDL: null, _deactivateDL: null, _destroyDL: null, _repeattrackDL: null, activateevents: ["onmousedown"], boundsref: new LzAlwaysExpr("$m3r", "$m3s", null), deactivateevents: ["onmouseup"], onboundsref: LzDeclaredEvent, onmousetrackoutbottom: LzDeclaredEvent, onmousetrackoutleft: LzDeclaredEvent, onmousetrackoutright: LzDeclaredEvent, onmousetrackouttop: LzDeclaredEvent, ontracking: LzDeclaredEvent, tracking: true, trackingrate: 150}, $lzc$class_basetrackgroup.attributes);}
}

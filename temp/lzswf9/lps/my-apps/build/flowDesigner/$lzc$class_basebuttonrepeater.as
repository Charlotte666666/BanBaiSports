package {
dynamic class $lzc$class_basebuttonrepeater extends $lzc$class_basebutton {
/* -*- file: base/basebuttonrepeater.lzx#7 -*- */
static var tagname = "basebuttonrepeater";static var attributes = new LzInheritedHash($lzc$class_basebutton.attributes);var _lasttime;var stillDownDelegate;var isMouseDown;var onmousestilldown;function stillDownEventGenerator ($0) {











var $1 = new Date().getTime();
var $2 = $1 - this._lasttime;
this._lasttime = $1;

if (this.isMouseDown) {
var $3;
if ($2 > 600) {
$3 = 500
} else {
$3 = 50;
this.onmousestilldown.sendEvent()
};
lz.Timer.resetTimer(this.stillDownDelegate, $3)
}}



function $m3w ($0) {
this._lasttime = new Date().getTime();
this.isMouseDown = true;
if (!this.stillDownDelegate) {
this.stillDownDelegate = new LzDelegate(this, "stillDownEventGenerator")
};
lz.Timer.addTimer(this.stillDownDelegate, 500)
}


function $m3x ($0) {
this.isMouseDown = false;
lz.Timer.removeTimer(this.stillDownDelegate)
}
/* -*- file: -*- */
function $lzc$class_basebuttonrepeater ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_focusable: "boolean", _lasttime: "number", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", disabledResourceNumber: "number", doesenter: "boolean", downResourceNumber: "number", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", isMouseDown: "boolean", layout: "css", loadratio: "number", mask: "string", maxframes: "number", name: "token", nodeLevel: "number", normalResourceNumber: "number", opacity: "number", options: "css", overResourceNumber: "number", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourceviewcount: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "html", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["onmousedown", "$m3w", null, "onmouseup", "$m3x", null], _lasttime: 0, clickable: true, isMouseDown: false, onmousestilldown: LzDeclaredEvent, stillDownDelegate: null}, $lzc$class_basebuttonrepeater.attributes);}
}

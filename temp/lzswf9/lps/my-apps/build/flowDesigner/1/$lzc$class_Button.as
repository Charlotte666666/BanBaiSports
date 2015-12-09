package {
dynamic class $lzc$class_Button extends LzView {
/* -*- file: common/components/Button.lzx#7 -*- */
static var tagname = "Button";static var children = [{attrs: {$classrootdepth: 1, $delegates: ["onmouseout", "$mg4", null, "onmouseover", "$mg5", null, "onclick", "$mg6", null], clickable: true, fgcolor: 16777215, fontsize: 15, fontstyle: "bold", name: "txt", text: new LzAlwaysExpr("$mg2", "$mg3", null), valign: "middle", x: 0}, "class": $lzc$class__mg7}];static var attributes = new LzInheritedHash(LzView.attributes);var param;var text;var type;var autoDrawShape;var drawColor;var highligthColor;var isUseMouseOut;function $mfy ($0) {








if (this.autoDrawShape) this.drawShape()
}

function $mfz ($0) {
if (parent.doButtonClick) parent.doButtonClick(this.param, this.text)
}

function $mg0 ($0) {
if (this.draw && this.txt.fgcolor != this.drawColor) {
this.draw.fillStyle = this.highligthColor;
this.draw.fill();
this.txt.setAttribute("fgcolor", this.drawColor);
this.bringToFront()
};
this.doMouseOver()
}

function $mg1 ($0) {
if (!this.containsPt(this.getMouse("x"), this.getMouse("y"))) {
if (this.isUseMouseOut) this.doMouseOut()
}}


function doMouseOver () {
if (parent.doMouseOver) parent.doMouseOver(this)
}

function doMouseOut () {
if (this.draw) {
this.draw.fillStyle = this.drawColor;
this.draw.fill();
this.txt.setAttribute("fgcolor", 16777215)
}}


function drawShape () {
if (this.draw) this.draw.destroy();
if (this.width == 60) {
this.setAttribute("width", this.txt.width + 20);
this.txt.setAttribute("x", 10)
} else {
this.txt.setAttribute("x", (this.width - this.txt.width) / 2)
};
this.draw = new (lz.DrawTool)(this);
if (this.type == "SysMenu") {
this.draw.drawMenuButton(this.width, this.height, this.drawColor)
} else {
this.draw.drawOvalRect(0, 0, this.width, this.height, this.drawColor)
};
this.draw.sendBehind(this.txt)
}
/* -*- file: -*- */
var txt;function $lzc$class_Button ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", autoDrawShape: "boolean", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", drawColor: "color", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", highligthColor: "color", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", isUseMouseOut: "boolean", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", param: "string", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "string", tintcolor: "string", totalframes: "number", transition: "string", type: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["oninited", "$mfy", null, "onclick", "$mfz", null, "onmouseover", "$mg0", null, "onmouseout", "$mg1", null], autoDrawShape: false, clickable: true, drawColor: 5678572, focusable: true, height: 22, highligthColor: 16777011, isUseMouseOut: true, param: "", text: "", type: "", width: 60}, $lzc$class_Button.attributes);}
}

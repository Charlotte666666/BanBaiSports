package {
dynamic class $lzc$class_swatchview extends LzView {
/* -*- file: base/swatchview.lzx#7 -*- */
static var tagname = "swatchview";static var attributes = new LzInheritedHash(LzView.attributes);var ctransform;var color;override function construct ($0, $1) {









super.construct($0, $1);


this.capabilities = new LzInheritedHash(this.capabilities);
this.capabilities.colortransform = true;
if ($1["width"] == null) {
$1["width"] = this.immediateparent.width
};
if ($1["height"] == null) {
$1["height"] = this.immediateparent.height
};
if ($1["fgcolor"] == null && $1["bgcolor"] == null) {
$1["fgcolor"] = 16777215
}}







override function $lzc$set_fgcolor ($0) {
this.setAttribute("bgcolor", $0)
}




override function $lzc$set_bgcolor ($0) {
this.color = $0;
if (this["ctransform"] != null) {
$0 = LzColorUtils.applyTransform($0, ctransform)
};
/* -*- file: #49 -*- */
super.$lzc$set_bgcolor($0)
}







override function $lzc$set_colortransform ($0) {
this.ctransform = $0;
this.setAttribute("bgcolor", this.color)
}
/* -*- file: -*- */
function $lzc$class_swatchview ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, color: 16777215, ctransform: null}, $lzc$class_swatchview.attributes);}
}

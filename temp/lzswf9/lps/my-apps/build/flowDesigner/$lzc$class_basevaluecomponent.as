package {
dynamic class $lzc$class_basevaluecomponent extends $lzc$class_basecomponent {
/* -*- file: base/basevaluecomponent.lzx#6 -*- */
static var tagname = "basevaluecomponent";static var attributes = new LzInheritedHash($lzc$class_basecomponent.attributes);var value;var type;function getValue () {












return this.value == null ? this.text : this.value
}





function $lzc$getValue_dependencies ($0, $1) {


return [this, "value", this, "text"]
}








override function acceptValue ($0, $1 = null) {
if ($1 == null) $1 = this.type;


super.acceptValue($0, $1);


this.acceptAttribute("value", $1, $0)
}








override function presentValue ($0 = null) {
if ($0 == null) $0 = this.type;

return lz.Type.presentTypeValue($0, this.getValue(), this, "value")
}




override function $lzc$presentValue_dependencies ($0, $1, $2 = null) {


return ([this, "type"]).concat(this.$lzc$getValue_dependencies($0, $1))
}
/* -*- file: -*- */
function $lzc$class_basevaluecomponent ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {_focusable: "boolean", aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", doesenter: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "html", tintcolor: "string", totalframes: "number", transition: "string", type: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, type: "expression", value: null}, $lzc$class_basevaluecomponent.attributes);}
}

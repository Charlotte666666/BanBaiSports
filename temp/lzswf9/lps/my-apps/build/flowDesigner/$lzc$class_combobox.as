package {
dynamic class $lzc$class_combobox extends $lzc$class_basecombobox {
/* -*- file: lz/combobox.lzx#31 -*- */
static var tagname = "combobox";static var children = LzNode.mergeChildren([{attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $classrootdepth: 1, name: "lft", placement: "bkgnd", resource: "lzcombobox_lft_rsc"}, "class": LzView}, {attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $classrootdepth: 1, name: "mid", placement: "bkgnd", resource: "lzcombobox_mid_rsc", stretches: "width"}, "class": LzView}, {attrs: {$classrootdepth: 1, $delegates: ["onclick", "$m8w", null], clickable: true, name: "rgt", placement: "bkgnd", resource: "lzcombobox_rgt_rsc", styleable: true}, "class": $lzc$class__m8x}, {attrs: {$classrootdepth: 1, axis: "x", placement: "bkgnd"}, "class": $lzc$class_stableborderlayout}], $lzc$class_basecombobox["children"]);static var attributes = new LzInheritedHash($lzc$class_basecombobox.attributes);var lft;var mid;var rgt;override function _showEnabled () {






super._showEnabled();
if (_enabled) {
if (!editable) {
this.bkgnd.lft.setAttribute("frame", 2);
this.bkgnd.mid.setAttribute("frame", 2)
} else {
this.bkgnd.lft.setAttribute("frame", 1);
this.bkgnd.mid.setAttribute("frame", 1)
}} else {

if (!editable) {
this.bkgnd.lft.setAttribute("frame", 4);
this.bkgnd.mid.setAttribute("frame", 4)
} else {
this.bkgnd.lft.setAttribute("frame", 3);
this.bkgnd.mid.setAttribute("frame", 3)
}}}
/* -*- file: -*- */
function $lzc$class_combobox ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
}
}

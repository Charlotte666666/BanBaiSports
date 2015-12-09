package {
dynamic class $lzc$class__m8u extends LzText {
/* -*- file: base/basecombobox.lzx#202 -*- */
static var displayName = "<anonymous extends='text'>";static var attributes = new LzInheritedHash(LzText.attributes);function $m7x ($0) {
/* -*- file: #201 -*- */
var $1 = parent.width - 4;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: base/basecombobox.lzx#201 -*- */
function $m7y () {
/* -*- file: -*- */
try {
/* -*- file: base/basecombobox.lzx#204 -*- */
return [parent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: base/basecombobox.lzx#203 -*- */
function $m7z ($0) {





if ($0 == 38 || $0 == 40 || $0 == 32) {
if (!classroot.isopen) {
classroot.setOpen(true, true)
};
if ($0 != 32) {

classroot.cblist.onkeydown.sendEvent($0)
}}}




function $m80 ($0) {
classroot.toggle()
}


function $m81 ($0) {
if (classroot["onfocus"]) classroot.onfocus.sendEvent($0)
}

function $m82 ($0) {
if (classroot["onblur"]) classroot.onblur.sendEvent($0)
}

function $m83 ($0) {
if (classroot["onkeyup"]) classroot.onkeyup.sendEvent($0)
}

function $m84 ($0) {
if (classroot["onkeydown"]) classroot.onkeydown.sendEvent($0)
}

override function getPrevSelection () {
return lz.Focus.getPrev(parent)
}

function getFocusRect () {
return classroot.getFocusRect()
}
/* -*- file: -*- */
var $classrootdepth;function $lzc$class__m8u ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", antiAliasType: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", cdata: "cdata", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", direction: "string", embedfonts: "boolean", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", gridFit: "string", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", hscroll: "number", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", letterspacing: "number", lineheight: "number", loadratio: "number", mask: "string", maxhscroll: "number", maxlength: "numberExpression", maxscroll: "number", multiline: "boolean", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pattern: "string", pixellock: "boolean", placement: "string", playing: "boolean", resize: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", scroll: "number", scrollevents: "boolean", scrollheight: "number", scrollwidth: "number", selectable: "boolean", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", sharpness: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "html", textalign: "string", textdecoration: "string", textindent: "number", thickness: "number", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", xscroll: "number", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression", yscroll: "number"}}}, $lzc$class__m8u.attributes);}
}

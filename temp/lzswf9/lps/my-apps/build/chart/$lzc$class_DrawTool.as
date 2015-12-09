package {
dynamic class $lzc$class_DrawTool extends $lzc$class_drawview {
/* -*- file: common/utils/DrawTool.lzx#6 -*- */
static var tagname = "DrawTool";static var children = LzNode.mergeChildren([], $lzc$class_drawview["children"]);static var attributes = new LzInheritedHash($lzc$class_drawview.attributes);function $m7 ($0) {
/* -*- file: #5 -*- */
var $1 = immediateparent.width;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: common/utils/DrawTool.lzx#5 -*- */
function $m8 () {
/* -*- file: -*- */
try {
/* -*- file: common/utils/DrawTool.lzx#8 -*- */
return [immediateparent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: common/utils/DrawTool.lzx#5 -*- */
function $m9 ($0) {
/* -*- file: #5 -*- */
var $1 = immediateparent.height;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}
/* -*- file: common/utils/DrawTool.lzx#5 -*- */
function $ma () {
/* -*- file: -*- */
try {
/* -*- file: common/utils/DrawTool.lzx#8 -*- */
return [immediateparent, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var beginX;var beginY;var len;var direction;var drawColor;function drawNarrow () {
/* -*- file: common/utils/DrawTool.lzx#13 -*- */
if (!this.beginX || !this.beginY || !this.direction) return;
if (this.__dirty) this.setAttribute("visible", false);
this.lineWidth = 3;
this.strokeStyle = this.drawColor;
this.moveTo(this.beginX, this.beginY);
switch (direction) {
case "U":
this.lineTo(this.beginX - this.len, this.beginY + this.len);this.moveTo(this.beginX, this.beginY);this.lineTo(this.beginX + this.len, this.beginY + this.len);break;;case "D":



this.lineTo(this.beginX - this.len, this.beginY - this.len);this.moveTo(this.beginX, this.beginY);this.lineTo(this.beginX + this.len, this.beginY - this.len);break;;case "L":



this.lineTo(this.beginX + this.len, this.beginY - this.len);this.moveTo(this.beginX, this.beginY);this.lineTo(this.beginX + this.len, this.beginY + this.len);break;;case "R":



this.lineTo(this.beginX - this.len, this.beginY - this.len);this.moveTo(this.beginX, this.beginY);this.lineTo(this.beginX - this.len, this.beginY + this.len);break;;default:



break
};
this.stroke()
}

function drawDiamond ($0, $1, $2, $3, $4) {
this.clear();
this.beginPath();
this.moveTo($0 - $2 / 2, $1);
this.lineTo($0, $1 - $3 / 2);
this.lineTo($0 + $2 / 2, $1);
this.lineTo($0, $1 + $3 / 2);
this.closePath();
this.lineWidth = 2;
this.lineStyle = 8295326;
this.stroke();

this.fillStyle = $4;
this.fill()
}

function drawTriangle ($0, $1, $2, $3, $4) {
this.clear();
this.beginPath();
this.moveTo($0 - $2 / 2, $1 + $3 / 2);
this.lineTo($0, $1 - $3 / 2);
this.lineTo($0 + $2 / 2, $1 + $3 / 2);
this.closePath();
this.lineWidth = 2;
this.lineStyle = $4;
this.stroke();

this.fillStyle = $4;
this.fill()
}

function drawVoidTriangle ($0, $1, $2, $3, $4) {
this.clear();
this.beginPath();
this.moveTo($0 - $2 / 2, $1 + $3 / 2);
this.lineTo($0, $1 - $3 / 2);
this.lineTo($0 + $2 / 2, $1 + $3 / 2);
this.closePath();
this.lineWidth = 2;
this.strokeStyle = $4;
this.stroke()
}

function drawRect ($0, $1, $2, $3, $4) {
this.clear();
this.beginPath();
this.rect($0, $1, $2, $3);
this.closePath();
this.lineWidth = 1;
this.lineStyle = $4;
this.stroke()
}

function drawFillRect ($0, $1, $2, $3, $4) {
this.clear();
this.beginPath();
this.rect($0, $1, $2, $3);
this.closePath();
this.lineWidth = 2;
this.lineStyle = $4;
this.fillStyle = $4;
this.fill()
}

function drawOvalRect ($0, $1, $2, $3, $4) {
this.clear();
this.beginPath();
this.rect($0, $1, $2, $3, 45);
this.closePath();
this.fillStyle = $4;
this.fill()
}

function drawPageRect ($0, $1, $2, $3) {
var $4 = 30 / $3;
this.clear();
this.beginPath();
this.rect($0, $1, $2, $3, 15);
this.closePath();
var $5 = this.createLinearGradient(0, 0, 0, $3);
this.globalAlpha = 1;
$5.addColorStop(0, 7977708);
this.globalAlpha = 1;
$5.addColorStop($4, 15267068);
this.globalAlpha = 0.9;
$5.addColorStop(1 - $4, 15267068);
this.globalAlpha = 1;
$5.addColorStop(1, 15267068);
this.lineWidth = 3;
this.lineStyle = 7977708;
this.strokeStyle = 7977708;
this.stroke();
this.fillStyle = $5;
this.fill()
}

function drawMenuButton ($0, $1, $2) {
this.clear();
this.beginPath();
this.moveTo(12, 0);
this.lineTo(0, $1);
this.lineTo($0, $1);
this.lineTo($0 - 12, 0);
this.closePath();
this.strokeStyle = 13626604;
this.lineWidth = 1;
this.stroke();

this.fillStyle = $2;
this.fill()
}

function drawLine ($0, $1, $2, $3, $4 = null, $5 = null) {
if ($4) this.lineWidth = $4;
if ($5) this.strokeStyle = $5;
this.moveTo($0, $1);
this.lineTo($2, $3);
this.globalAlpha = 1;
this.stroke()
}

function drawLineWithArrow ($0, $1, $2) {
var $3 = $0 + 17 * Math.cos(($2 - 90) * (Math.PI / 180));
var $4 = $1 + 17 * Math.sin(($2 - 90) * (Math.PI / 180));
this.lineWidth = 2;

this.moveTo($0, $1);
this.lineTo($3, $4);
this.globalAlpha = 1;

var $5 = 5;
var $6 = $3 - $0;
var $7 = $1 - $4;
var $2 = Math.atan2($7, $6) * (180 / Math.PI);
var $8 = $3 - $5 * Math.cos($2 * (Math.PI / 180));
var $9 = $4 + $5 * Math.sin($2 * (Math.PI / 180));
var $a = $3;
var $b = $4;
var $c = $8 + $5 * Math.cos(($2 + 120) * (Math.PI / 180));
var $d = $9 - $5 * Math.sin(($2 + 120) * (Math.PI / 180));
var $e = $8 + $5 * Math.cos(($2 + 240) * (Math.PI / 180));
var $f = $9 - $5 * Math.sin(($2 + 240) * (Math.PI / 180));
this.moveTo($a, $b);
this.lineTo($c, $d);
this.lineTo($8, $9);
this.lineTo($e, $f);
this.lineTo($a, $b)
}

function drawSector ($0, $1, $2, $3, $4, $5) {
var $6 = $0 + $2 * Math.cos($3);
var $7 = $1 - $2 * Math.sin($3);

this.moveTo($0, $1);
this.lineTo($6, $7);
var $8 = $3;
var $9 = 0;
var $a = 0;
var $b = Math.PI / 360;
while ($8 < $3 + $4) {
$8 += $b;
$9 = $0 + $2 * Math.cos($8);
$a = $1 - $2 * Math.sin($8);
this.lineTo($9, $a)
};
this.lineTo($0, $1);

this.closePath();
this.fillStyle = $5;
this.globalAlpha = 0.7;
this.fill()
}
/* -*- file: -*- */
function $lzc$class_DrawTool ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", aliaslines: "boolean", align: "string", backgroundrepeat: "string", beginX: "number", beginY: "number", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", direction: "string", drawColor: "color", fgcolor: "color", fillStyle: "string", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", globalAlpha: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", len: "number", lineCap: "string", lineJoin: "string", lineWidth: "number", loadratio: "number", mask: "string", measuresize: "boolean", miterLimit: "number", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", strokeStyle: "string", styleclass: "string", subnodes: "string", subviews: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, beginX: 0, beginY: 0, direction: "", drawColor: 5592405, height: new LzAlwaysExpr("$m9", "$ma", null), len: 8, options: {ignorelayout: true}, width: new LzAlwaysExpr("$m7", "$m8", null)}, $lzc$class_DrawTool.attributes);}
}

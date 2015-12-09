package {
dynamic class $lzc$class_FlowLine extends LzView {
/* -*- file: flowDesigner/FlowLine.lzx#6 -*- */
static var tagname = "FlowLine";static var children = [{attrs: {$classrootdepth: 1, $delegates: ["onclick", "$mm2", null, "onkeydown", "$mm3", null], bgcolor: 5592405, clickable: true, focusable: true, name: "line1", visible: false}, "class": $lzc$class__mmc}, {attrs: {$classrootdepth: 1, $delegates: ["onclick", "$mm4", null, "onkeydown", "$mm5", null], bgcolor: 5592405, clickable: true, focusable: true, name: "line2", visible: false}, "class": $lzc$class__mmd}, {attrs: {$classrootdepth: 1, $delegates: ["onclick", "$mm6", null, "onkeydown", "$mm7", null], bgcolor: 5592405, clickable: true, focusable: true, name: "line3", visible: false}, "class": $lzc$class__mme}, {attrs: {$classrootdepth: 1, $delegates: ["onclick", "$mma", null, "onkeydown", "$mmb", null], clickable: true, fgcolor: 3811461, focusable: true, fontsize: 13, fontstyle: "bold", name: "txt", text: new LzAlwaysExpr("$mm8", "$mm9", null)}, "class": $lzc$class__mmf}];static var attributes = new LzInheritedHash(LzView.attributes);function $mlw ($0) {
/* -*- file: #5 -*- */
var $1 = immediateparent.width;
/* -*- file: -*- */
if ($1 !== this["width"] || !this.inited) {
this.setAttribute("width", $1)
}}
/* -*- file: flowDesigner/FlowLine.lzx#5 -*- */
function $mlx () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowLine.lzx#8 -*- */
return [immediateparent, "width"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
/* -*- file: flowDesigner/FlowLine.lzx#5 -*- */
function $mly ($0) {
/* -*- file: #5 -*- */
var $1 = immediateparent.height;
/* -*- file: -*- */
if ($1 !== this["height"] || !this.inited) {
this.setAttribute("height", $1)
}}
/* -*- file: flowDesigner/FlowLine.lzx#5 -*- */
function $mlz () {
/* -*- file: -*- */
try {
/* -*- file: flowDesigner/FlowLine.lzx#8 -*- */
return [immediateparent, "height"]
}
/* -*- file: -*- */
catch ($lzsc$e) {
if ($lzsc$e is Error) {
lz.$lzsc$thrownError = $lzsc$e
};
throw $lzsc$e
}}
var text;var lineWidth;var fromNode;var toNode;var narrow;var direction;var ruleId;var ruleName;var doOnkeydown;function $mm0 ($0) {
/* -*- file: flowDesigner/FlowLine.lzx#19 -*- */
if (!this.fromNode || !this.toNode) return;
this.doRedraw()
}

function $mm1 ($0) {

switch ($0) {
case 46:
/* -*- file: #26 -*- */
try {
/* -*- file: #26 -*- */
parent.classroot.designArea._deleteObject()
}
/* -*- file: #26 -*- */
catch ($1) {};break;;default:
break
}}


function doClicked () {
parent.setSelectedObject(this)
}

function doSelected ():void {
this.line1.setAttribute("bgcolor", 16776960);
this.line2.setAttribute("bgcolor", 16776960);
this.line3.setAttribute("bgcolor", 16776960);

var $0 = this.narrow.beginX;
var $1 = this.narrow.beginY;
var $2 = this.narrow.direction;
this.narrow.destroy();
this.narrow = new (lz.DrawTool)(this);
this.narrow.beginX = $0;
this.narrow.beginY = $1;
this.narrow.direction = $2;
this.narrow.drawColor = 16776960;
this.narrow.drawNarrow();

this.bringToFront()
}

function unSelected ():void {
this.line1.setAttribute("bgcolor", 5592405);
this.line2.setAttribute("bgcolor", 5592405);
this.line3.setAttribute("bgcolor", 5592405);

var $0 = this.narrow.beginX;
var $1 = this.narrow.beginY;
var $2 = this.narrow.direction;
this.narrow.destroy();
this.narrow = new (lz.DrawTool)(this);
this.narrow.beginX = $0;
this.narrow.beginY = $1;
this.narrow.direction = $2;
this.narrow.drawColor = 5592405;
this.narrow.drawNarrow()
}

function isCovering ():Boolean {
var $0:Number = this.fromNode.width + this.toNode.width;
var $1:Number = this.fromNode.height + this.toNode.height;
if (Math.abs(this.fromNode.x - this.toNode.x - this.toNode.width) > $0) return false;
if (Math.abs(this.toNode.x - this.fromNode.x - this.fromNode.width) > $0) return false;
if (Math.abs(this.fromNode.y - this.toNode.y - this.toNode.height) > $1) return false;
if (Math.abs(this.toNode.y - this.fromNode.y - this.fromNode.height) > $1) return false;
return true
}

function toXMLString () {
var $0:String = "&lt;Line";
$0 += " fromNodeId=&quot;" + this.fromNode.nodeId + "&quot;";
$0 += " toNodeId=&quot;" + this.toNode.nodeId + "&quot;";
$0 += " txt=&quot;" + gStringUtil.escapeText(this.txt.text) + "&quot;";
$0 += " ruleId=&quot;" + this.ruleId + "&quot;";
$0 += " ruleName=&quot;" + gStringUtil.escapeText(this.ruleName) + "&quot;";
$0 += " /&gt;";
return $0
}

function doRedraw () {
this.hideLine();
if (this.narrow) this.narrow.destroy();
if (!this.fromNode || !this.toNode) return;
this.narrow = new (lz.DrawTool)(this);
if (this.isCovering()) return;
var $0:Number = Number(this.fromNode.x) + Number(this.fromNode.width) / 2;
var $1:Number = Number(this.fromNode.y) + Number(this.fromNode.height) / 2;
var $2:Number = Number(this.toNode.x) + Number(this.toNode.width) / 2;
var $3:Number = Number(this.toNode.y) + Number(this.toNode.height) / 2;

this.direction = "";
if ($1 < $3) {
this.direction = "D";
this.narrow.direction = "D"
} else if ($1 > $3) {
this.direction = "U";
this.narrow.direction = "U"
};

if ($0 < $2) {
if (this.fromNode.x + this.fromNode.width < this.toNode.x) {
this.direction += "RR";
this.narrow.direction = "R";
if (this.direction == "RR") this.direction = "R";
if (this.direction == "URR" && this.fromNode.y > this.toNode.y + this.toNode.height) {
this.direction = "URU"
}} else this.direction += "RL"
} else if ($0 > $2) {

if (this.fromNode.x > this.toNode.width + this.toNode.x) {
this.direction += "LL";
this.narrow.direction = "L";
if (this.direction == "LL") this.direction = "L";
if (this.direction == "ULL" && this.fromNode.y > this.toNode.y + this.toNode.height) {
this.direction = "ULU"
}} else this.direction += "LR"
};


if (this.direction == "U" || this.direction == "ULR" || this.direction == "URL" || this.direction == "D" || this.direction == "DLR" || this.direction == "DRL") {
this.direction = parent.getLineDirection(this.direction, this.fromNode.x, $1, $3, this.fromNode.nodeId, this.toNode.nodeId, this)
};

var $4:Number = 0;
var $5:Number = 0;
var $6:Number = 0;
var $7:Number = 0;
var $8:Number = 0;



switch (this.direction) {
case "D":
$4 = $0;$5 = $1 + this.fromNode.height / 2;if (this.fromNode.nodeId == "startNode") $5 += 3;$6 = $2;$7 = $3 - this.toNode.height / 2;this.line1.setAttribute("x", $4);this.line1.setAttribute("y", $5);this.line1.setAttribute("width", this.lineWidth);this.line1.setAttribute("height", $7 - $5);this.line1.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2 - 5);this.txt.setAttribute("x", ($4 + $6) / 2 - 13);this.narrow.beginX = $6 + 1;this.narrow.beginY = $7 - 1;break;;case "U":















$4 = $0;$5 = $1 - this.fromNode.height / 2;$6 = $2;$7 = $3 + this.toNode.height / 2;this.line1.setAttribute("x", $6);this.line1.setAttribute("y", $7);this.line1.setAttribute("width", this.lineWidth);this.line1.setAttribute("height", $5 - $7);this.line1.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2);this.txt.setAttribute("x", ($4 + $6) / 2 - 13);this.narrow.beginX = $6 + 1;this.narrow.beginY = $7 + 1;break;;case "R":














$4 = $0 + this.fromNode.width / 2;$5 = $1;$6 = $2 - this.toNode.width / 2;$7 = $3;this.line1.setAttribute("x", $4);this.line1.setAttribute("y", $5);this.line1.setAttribute("width", $6 - $4);this.line1.setAttribute("height", this.lineWidth);this.line1.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2);this.txt.setAttribute("x", ($4 + $6) / 2 - 10);this.narrow.beginX = $6 - 1;this.narrow.beginY = $7 + 1;break;;case "L":














$4 = $0 - this.fromNode.width / 2;$5 = $1;$6 = $2 + this.toNode.width / 2;$7 = $3;this.line1.setAttribute("x", $6);this.line1.setAttribute("y", $7);this.line1.setAttribute("width", $4 - $6);this.line1.setAttribute("height", this.lineWidth);this.line1.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2);this.txt.setAttribute("x", ($4 + $6) / 2 - 10);this.narrow.beginX = $6 + 1;this.narrow.beginY = $7;break;;case "DRR":














$4 = $0 + this.fromNode.width / 2;$5 = $1;$6 = $2 - this.toNode.width / 2;$7 = $3;$8 = ($6 - $4) / 2;this.line1.setAttribute("x", $4);this.line1.setAttribute("y", $5);this.line1.setAttribute("width", $8);this.line1.setAttribute("height", this.lineWidth);this.line1.setAttribute("visible", true);this.line2.setAttribute("x", $4 + $8);this.line2.setAttribute("y", $5);this.line2.setAttribute("width", this.lineWidth);this.line2.setAttribute("height", $7 - $5 + 2);this.line2.setAttribute("visible", true);this.line3.setAttribute("x", $6 - $8);this.line3.setAttribute("y", $7);this.line3.setAttribute("width", $8);this.line3.setAttribute("height", this.lineWidth);this.line3.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2 - 16);this.txt.setAttribute("x", ($4 + $6) / 2 - 13);this.narrow.beginX = $6 - 1;this.narrow.beginY = $7 + 1;break;;case "DRL":
/* -*- file: #235 -*- */
$4 = $0;$5 = $1 + this.fromNode.height / 2;if (this.fromNode.nodeId == "startNode") $5 += 3;$6 = $2;$7 = $3 - this.toNode.height / 2;$8 = ($7 - $5) / 2;this.line1.setAttribute("x", $4);this.line1.setAttribute("y", $5);this.line1.setAttribute("width", this.lineWidth);this.line1.setAttribute("height", $8);this.line1.setAttribute("visible", true);this.line2.setAttribute("x", $4);this.line2.setAttribute("y", $5 + $8);this.line2.setAttribute("width", $6 - $4);this.line2.setAttribute("height", this.lineWidth);this.line2.setAttribute("visible", true);this.line3.setAttribute("x", $6);this.line3.setAttribute("y", $7 - $8);this.line3.setAttribute("width", this.lineWidth);this.line3.setAttribute("height", $8);this.line3.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2);this.txt.setAttribute("x", ($4 + $6) / 2 - 13);this.narrow.beginX = $6 + 1;this.narrow.beginY = $7 - 1;break;;case "DLL":
/* -*- file: #264 -*- */
$4 = this.fromNode.x;$5 = $1;$6 = this.toNode.x + this.toNode.width;$7 = $3;$8 = ($4 - this.toNode.x - this.toNode.width) / 2;this.line1.setAttribute("x", $4 - $8);this.line1.setAttribute("y", $5);this.line1.setAttribute("width", $8);this.line1.setAttribute("height", this.lineWidth);this.line1.setAttribute("visible", true);this.line2.setAttribute("x", $4 - $8);this.line2.setAttribute("y", $5);this.line2.setAttribute("width", this.lineWidth);this.line2.setAttribute("height", $7 - $5 + this.lineWidth);this.line2.setAttribute("visible", true);this.line3.setAttribute("x", $6);this.line3.setAttribute("y", $7);this.line3.setAttribute("width", $8);this.line3.setAttribute("height", this.lineWidth);this.line3.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2);this.txt.setAttribute("x", ($4 + $6) / 2 - 13);this.narrow.beginX = $6 + 1;this.narrow.beginY = $7 + 1;break;;case "DLR":
/* -*- file: #292 -*- */
$4 = $0;$5 = this.fromNode.y + this.fromNode.height;if (this.fromNode.nodeId == "startNode") $5 += 3;$6 = toNode.x + this.toNode.width / 2;$7 = toNode.y;$8 = ($7 - $5) / 2;this.line1.setAttribute("x", $4);this.line1.setAttribute("y", $5);this.line1.setAttribute("width", this.lineWidth);this.line1.setAttribute("height", $8);this.line1.setAttribute("visible", true);this.line2.setAttribute("x", $6);this.line2.setAttribute("y", $7 - $8);this.line2.setAttribute("width", $4 - $6 + this.lineWidth);this.line2.setAttribute("height", this.lineWidth);this.line2.setAttribute("visible", true);this.line3.setAttribute("x", $6);this.line3.setAttribute("y", $7 - $8);this.line3.setAttribute("width", this.lineWidth);this.line3.setAttribute("height", $8);this.line3.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2);this.txt.setAttribute("x", ($4 + $6) / 2 - 13);this.narrow.beginX = $6 + 1;this.narrow.beginY = $7;break;;case "URU":
/* -*- file: #321 -*- */
$4 = $0;$5 = this.fromNode.y;$6 = $2 - this.toNode.width / 2;$7 = $3;this.line1.setAttribute("x", $4);this.line1.setAttribute("y", $7);this.line1.setAttribute("width", this.lineWidth);this.line1.setAttribute("height", $5 - $7);this.line1.setAttribute("visible", true);this.line3.setAttribute("x", $4);this.line3.setAttribute("y", $7);this.line3.setAttribute("width", $6 - $4);this.line3.setAttribute("height", this.lineWidth);this.line3.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2);this.txt.setAttribute("x", ($4 + $6) / 2 - 13);this.narrow.beginX = $6 - 1;this.narrow.beginY = $7 + 1;break;;case "URR":




















$4 = $0 + this.fromNode.width / 2;$5 = $1;$6 = $2 - this.toNode.width / 2;$7 = $3;$8 = ($6 - $4) / 2;this.line1.setAttribute("x", $4);this.line1.setAttribute("y", $5);this.line1.setAttribute("width", $8);this.line1.setAttribute("height", this.lineWidth);this.line1.setAttribute("visible", true);this.line2.setAttribute("x", $6 - $8);this.line2.setAttribute("y", $7);this.line2.setAttribute("width", this.lineWidth);this.line2.setAttribute("height", $5 - $7 + this.lineWidth);this.line2.setAttribute("visible", true);this.line3.setAttribute("x", $6 - $8);this.line3.setAttribute("y", $7);this.line3.setAttribute("width", $8);this.line3.setAttribute("height", this.lineWidth);this.line3.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2);this.txt.setAttribute("x", ($4 + $6) / 2 - 13);this.narrow.beginX = $6 - 1;this.narrow.beginY = $7 + 1;break;;case "URL":
/* -*- file: #370 -*- */
$4 = $0 + this.fromNode.width / 2;$5 = $1;$6 = $2 - this.toNode.width / 2;$7 = $3;$4 = $0;$5 = this.fromNode.y;$6 = $2;$7 = this.toNode.y + this.toNode.height;$8 = ($5 - this.toNode.y - this.toNode.height) / 2;this.line1.setAttribute("x", $4);this.line1.setAttribute("y", $5 - $8);this.line1.setAttribute("width", this.lineWidth);this.line1.setAttribute("height", $8);this.line1.setAttribute("visible", true);this.line2.setAttribute("x", $4);this.line2.setAttribute("y", $5 - $8);this.line2.setAttribute("width", $6 - $4 + this.lineWidth);this.line2.setAttribute("height", this.lineWidth);this.line2.setAttribute("visible", true);this.line3.setAttribute("x", $6);this.line3.setAttribute("y", $7);this.line3.setAttribute("width", this.lineWidth);this.line3.setAttribute("height", $8);this.line3.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2 - 16);this.txt.setAttribute("x", ($4 + $6) / 2 - 13);this.narrow.beginX = $6 + 1;this.narrow.beginY = $7 + 1;break;;case "ULU":
/* -*- file: #402 -*- */
$4 = $0;$5 = this.fromNode.y;$6 = $2 + this.toNode.width / 2;$7 = $3;this.line1.setAttribute("x", $4);this.line1.setAttribute("y", $7);this.line1.setAttribute("width", this.lineWidth);this.line1.setAttribute("height", $5 - $7);this.line1.setAttribute("visible", true);this.line3.setAttribute("x", $6);this.line3.setAttribute("y", $7);this.line3.setAttribute("width", $4 - $6);this.line3.setAttribute("height", this.lineWidth);this.line3.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2);this.txt.setAttribute("x", ($4 + $6) / 2 - 13);this.narrow.beginX = $6 + 1;this.narrow.beginY = $7 + 1;break;;case "ULL":





















$4 = $0 - this.fromNode.width / 2;$5 = $1;$6 = $2 + this.toNode.width / 2;$7 = $3;$8 = ($4 - this.toNode.x - this.toNode.width) / 2;this.line1.setAttribute("x", $4 - $8);this.line1.setAttribute("y", $5);this.line1.setAttribute("width", $8);this.line1.setAttribute("height", this.lineWidth);this.line1.setAttribute("visible", true);this.line2.setAttribute("x", $6 + $8);this.line2.setAttribute("y", $7);this.line2.setAttribute("width", this.lineWidth);this.line2.setAttribute("height", $5 - $7 + this.lineWidth);this.line2.setAttribute("visible", true);this.line3.setAttribute("x", $6);this.line3.setAttribute("y", $7);this.line3.setAttribute("width", $8);this.line3.setAttribute("height", this.lineWidth);this.line3.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2);this.txt.setAttribute("x", ($4 + $6) / 2 - 13);this.narrow.beginX = $6 + 1;this.narrow.beginY = $7 + 1;break;;case "ULR":
/* -*- file: #452 -*- */
$4 = $0;$5 = this.fromNode.y;$6 = $2;$7 = this.toNode.y + this.toNode.height;$8 = ($5 - this.toNode.y - this.toNode.height) / 2;this.line1.setAttribute("x", $4);this.line1.setAttribute("y", $5 - $8);this.line1.setAttribute("width", this.lineWidth);this.line1.setAttribute("height", $8);this.line1.setAttribute("visible", true);this.line2.setAttribute("x", $6);this.line2.setAttribute("y", $7 + $8);this.line2.setAttribute("width", $4 - $6 + this.lineWidth);this.line2.setAttribute("height", this.lineWidth);this.line2.setAttribute("visible", true);this.line3.setAttribute("x", $6);this.line3.setAttribute("y", $7);this.line3.setAttribute("width", this.lineWidth);this.line3.setAttribute("height", $8);this.line3.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2);this.txt.setAttribute("x", ($4 + $6) / 2 - 13);this.narrow.beginX = $6 + 1;this.narrow.beginY = $7 + 1;break;;case "UUL":
/* -*- file: #480 -*- */
$4 = this.fromNode.x;$5 = $1;$6 = this.toNode.x;$7 = $3;var $9 = parent.getMinX() - 60;this.line1.setAttribute("x", $9);this.line1.setAttribute("y", $5);this.line1.setAttribute("width", $4 - $9);this.line1.setAttribute("height", this.lineWidth);this.line1.setAttribute("visible", true);this.line2.setAttribute("x", $9);this.line2.setAttribute("y", $7);this.line2.setAttribute("width", this.lineWidth);this.line2.setAttribute("height", $5 - $7);this.line2.setAttribute("visible", true);this.line3.setAttribute("x", $9);this.line3.setAttribute("y", $7);this.line3.setAttribute("width", $6 - $9);this.line3.setAttribute("height", this.lineWidth);this.line3.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2);this.txt.setAttribute("x", $9 - 13);this.narrow.beginX = $6;this.narrow.beginY = $7 + 1;this.narrow.direction = "R";break;;case "UUR":
/* -*- file: #510 -*- */
$4 = this.fromNode.x + this.fromNode.width;$5 = $1;$6 = this.toNode.x + this.toNode.width;$7 = $3;var $a = parent.getMaxX() + 60;this.line1.setAttribute("x", $4);this.line1.setAttribute("y", $5);this.line1.setAttribute("width", $a - $4);this.line1.setAttribute("height", this.lineWidth);this.line1.setAttribute("visible", true);this.line2.setAttribute("x", $a);this.line2.setAttribute("y", $7);this.line2.setAttribute("width", this.lineWidth);this.line2.setAttribute("height", $5 - $7 + 2);this.line2.setAttribute("visible", true);this.line3.setAttribute("x", $6);this.line3.setAttribute("y", $7);this.line3.setAttribute("width", $a - $6);this.line3.setAttribute("height", this.lineWidth);this.line3.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2);this.txt.setAttribute("x", $a - 13);this.narrow.beginX = $6 + 1;this.narrow.beginY = $7 + 1;this.narrow.direction = "L";break;;case "DDL":
/* -*- file: #540 -*- */
$4 = this.fromNode.x;$5 = $1;$6 = this.toNode.x;$7 = $3;var $9 = parent.getMinX() - 80;this.line1.setAttribute("x", $9);this.line1.setAttribute("y", $5);this.line1.setAttribute("width", $4 - $9);this.line1.setAttribute("height", this.lineWidth);this.line1.setAttribute("visible", true);this.line2.setAttribute("x", $9);this.line2.setAttribute("y", $7);this.line2.setAttribute("width", this.lineWidth);this.line2.setAttribute("height", $5 - $7);this.line2.setAttribute("visible", true);this.line3.setAttribute("x", $9);this.line3.setAttribute("y", $7);this.line3.setAttribute("width", $6 - $9);this.line3.setAttribute("height", this.lineWidth);this.line3.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2);this.txt.setAttribute("x", $9 - 13);this.narrow.beginX = $6;this.narrow.beginY = $7 + 1;this.narrow.direction = "R";break;;case "DDR":
/* -*- file: #570 -*- */
$4 = this.fromNode.x + this.fromNode.width;$5 = $1;$6 = this.toNode.x + this.toNode.width;$7 = $3;var $a = parent.getMaxX() + 80;this.line1.setAttribute("x", $4);this.line1.setAttribute("y", $5);this.line1.setAttribute("width", $a - $4);this.line1.setAttribute("height", this.lineWidth);this.line1.setAttribute("visible", true);this.line2.setAttribute("x", $a);this.line2.setAttribute("y", $7);this.line2.setAttribute("width", this.lineWidth);this.line2.setAttribute("height", $5 - $7 - 2);this.line2.setAttribute("visible", true);this.line3.setAttribute("x", $6);this.line3.setAttribute("y", $7);this.line3.setAttribute("width", $a - $6);this.line3.setAttribute("height", this.lineWidth);this.line3.setAttribute("visible", true);this.txt.setAttribute("y", ($5 + $7) / 2);this.txt.setAttribute("x", $a - 13);this.narrow.beginX = $6 + 1;this.narrow.beginY = $7 + 1;this.narrow.direction = "L";break;;default:
/* -*- file: #599 -*- */
break
};
this.narrow.drawNarrow()
}

function hideLine () {
this.line1.setAttribute("visible", false);
this.line2.setAttribute("visible", false);
this.line3.setAttribute("visible", false)
}
/* -*- file: -*- */
var line1;var line2;var line3;var txt;function $lzc$class_FlowLine ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
LzNode.mergeAttributes({$CSSDescriptor: {}, $attributeDescriptor: {types: {aaactive: "boolean", aadescription: "string", aaname: "string", aasilent: "boolean", aatabindex: "number", align: "string", backgroundrepeat: "string", bgcolor: "color", cachebitmap: "boolean", capabilities: "string", classroot: "string", clickable: "boolean", clickregion: "string", clip: "boolean", cloneManager: "string", contextmenu: "string", cornerradius: "string", cursor: "token", datapath: "string", defaultplacement: "string", direction: "string", fgcolor: "color", focusable: "boolean", focustrap: "boolean", font: "string", fontsize: "size", fontstyle: "string", frame: "numberExpression", framesloadratio: "number", hasdirectionallayout: "boolean", hassetheight: "boolean", hassetwidth: "boolean", height: "size", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", layout: "css", lineWidth: "number", loadratio: "number", mask: "string", name: "token", nodeLevel: "number", opacity: "number", options: "css", parent: "string", pixellock: "boolean", placement: "string", playing: "boolean", resource: "string", resourceheight: "number", resourcewidth: "number", rotation: "numberExpression", ruleId: "string", ruleName: "string", shadowangle: "number", shadowblurradius: "number", shadowcolor: "color", shadowdistance: "number", showhandcursor: "boolean", source: "string", stretches: "string", styleclass: "string", subnodes: "string", subviews: "string", text: "string", tintcolor: "string", totalframes: "number", transition: "string", unstretchedheight: "number", unstretchedwidth: "number", usegetbounds: "boolean", valign: "string", visibility: "string", visible: "boolean", width: "size", "with": "string", x: "numberExpression", xoffset: "numberExpression", xscale: "numberExpression", y: "numberExpression", yoffset: "numberExpression", yscale: "numberExpression"}}, $delegates: ["oninited", "$mm0", null, "doOnkeydown", "$mm1", null], direction: "", doOnkeydown: LzDeclaredEvent, height: new LzAlwaysExpr("$mly", "$mlz", null), lineWidth: 2, ruleId: "", ruleName: "", text: "", width: new LzAlwaysExpr("$mlw", "$mlx", null)}, $lzc$class_FlowLine.attributes);}
}

package {

                import flash.geom.Matrix;
                import flash.geom.Rectangle;
                import flash.display.Bitmap;
                import flash.display.BitmapData;
                import flash.display.Graphics;
                import flash.display.Sprite;
                dynamic class $lzc$class_drawview extends $lzsc$mixin$DrawviewShared$LzView {
/* -*- file: extensions/drawview.lzx#1055 -*- */
static var tagname:String = "drawview";static var attributes = new LzInheritedHash(LzView.attributes);static var __colorcache:Object = {};private var __dirty:Boolean = false;private var __path:Array = [];private var __pathisopen:Boolean = false;var measuresize:Boolean = true;private var _lz = lz;var __drawcontainer:Sprite = null;var __drawcontext:Sprite = null;var __bitmapcontainer:Bitmap = null;var __bitmapdata:BitmapData = null;var __norebuild:Boolean = false;var __contexts:Array = null;var __contextstates:Array = null;static var images:Object = {};function $lzc$class_drawview ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
/* -*- file: #1090 -*- */
super($0, $1, $2, $3)
}

override function construct ($0, $1) {

if ($1["cachebitmap"] == null && $1["clip"] != true) $1["cachebitmap"] = true;
super.construct($0, $1);
this.__contexts = [];
this.__contextstates = []
}

override function init () {
super.init();
this.context = this.createContainer();
this.beginPath();
this.$lzc$set_context(this.context)
}

function beginPath () {
this.__path = [];
this.__pathisopen = true;
this.context.moveTo(0, 0)
}

function closePath () {
if (this.__pathisopen && this.__path.length > 1) {
this.__pathisopen = false;
var $0:Array = this.__path[0];
var $1 = $0[0];
if ($1 == 1 || $1 == 2) {





this.__path.push([2, $0[1], $0[2]])
} else if ($1 == 3) {





this.__path.push([2, $0[3], $0[4]])
}}}




override function moveTo ($0:Number, $1:Number) {
if (this.__pathisopen) {

this.__path.push([1, $0, $1])
}}


override function lineTo ($0:Number, $1:Number) {
if (this.__pathisopen) {

this.__path.push([2, $0, $1])
}}


override function quadraticCurveTo ($0:Number, $1:Number, $2:Number, $3:Number) {
if (this.__pathisopen) {

this.__path.push([3, $0, $1, $2, $3])
}}


var bezierCurveTo_error:Number = 10;function bezierCurveTo ($0:Number, $1:Number, $2:Number, $3:Number, $4:Number, $5:Number) {


var $6:Number = this.bezierCurveTo_error;


var $7:Number = 0, $8:Number = 0;
if (this.__path.length) {
var $9:Array = this.__path[this.__path.length - 1];
$7 = $9[$9.length - 2];
$8 = $9[$9.length - 1]
};





















var $a:Array = [null];

var $b:Array = [{x: $7, y: $8}, {x: $0, y: $1}, {x: $2, y: $3}, {x: $4, y: $5}];
while ($b) {


var $c:* = this.intersection($b[0], $b[1], $b[2], $b[3]);
var $d:Object = $b[0];
var $e:Object = $b[3];

if ($c == null || $c == -1) {
var $f:Boolean = true;
var $g:Boolean = $b[0].x == $b[1].x && $b[0].y == $b[1].y;
var $h:Boolean = $b[2].x == $b[3].x && $b[2].y == $b[3].y;
if ($g) {
if ($h) {
this.lineTo($e.x, $e.y)
} else {
var $c:Object = $b[2];
this.quadraticCurveTo($c.x, $c.y, $e.x, $e.y)
}} else if ($h) {

var $c:Object = $b[1];
this.quadraticCurveTo($c.x, $c.y, $e.x, $e.y)
} else {


if ($c == null) {
$c = {x: 0, y: 0};
$f = false
} else {
this.lineTo($e.x, $e.y)
}};

if ($f) {
$b = $a.pop();
continue
}};





var $i:Array = [$b, [], [], []];
for (var $j:int = 1;$j < 4;$j++) {
for (var $k:int = 0;$k < 4 - $j;$k++) {
var $l:Object = $i[$j - 1][$k];
var $m:Object = $i[$j - 1][$k + 1];
$i[$j][$k] = {x: ($l.x + $m.x) / 2, y: ($l.y + $m.y) / 2}}};




var $n:Object = this.midpoint($d, $c);
var $o:Object = this.midpoint($c, $e);
var $p:Object = this.midpoint($n, $o);


if (this.distance($p, $i[3][0]) < $6) {
this.quadraticCurveTo($c.x, $c.y, $e.x, $e.y);
$b = $a.pop();
continue
};


var $q:Array = new Array(4), $r:Array = new Array(4);
for (var $j:int = 0;$j < 4;$j++) {
$q[$j] = $i[$j][0];
$r[$j] = $i[3 - $j][$j]
};
$b = $q;
$a.push($r)
}}


function __getColor ($0:*):Object {
var $1:Object = this._lz.drawview.__colorcache;
var $2:Object = $1[$0];
if ($2 == null) {
var $3:Array = this._lz.ColorUtils.coloralphafrominternal(this._lz.ColorUtils.hextoint($0));




$2 = $1[$0] = {c: $3[0], a: $3[1] != 1 ? $3[1] : null}};

return $2
}

function fill () {
if (this.fillStyle instanceof this._lz.CanvasGradient) {
this.fillStyle.__applyFillTo(this.context)
} else {
var $0:Object = this.__getColor(this.fillStyle);
var $1:Number = $0.a != null ? $0.a : this.globalAlpha;

this.context.beginFill($0.c, $1)
};
this.closePath();
this.__playPath(this.context);
this.context.endFill();
if (this.measuresize) this.__updateSize()
}

function __playPath ($0:*):void {
this.__dirty = true;

var $1:Array = this.__path;

for (var $2:int = 0;$2 < $1.length;$2++) {
var $3:Array = $1[$2];
switch ($3[0]) {
case 1:


$0.moveTo($3[1], $3[2]);break;;case 2:




$0.lineTo($3[1], $3[2]);break;;case 3:




$0.curveTo($3[1], $3[2], $3[3], $3[4]);break
}}}





function stroke () {
this.__updateLineStyle();
this.__playPath(this.context);
this.context.lineStyle(undefined);
this.__updateSize()
}

function __updateLineStyle () {
if (this.strokeStyle instanceof this._lz.CanvasGradient) {
this.strokeStyle.__applyStrokeTo(this.context)
} else {
var $0:Object = this.__getColor(this.strokeStyle);
var $1:Number = $0.a != null ? $0.a : this.globalAlpha;

var $2 = this.lineCap == "butt" ? "none" : this.lineCap;
this.context.lineStyle(this.lineWidth, $0.c, $1, false, "normal", $2, this.lineJoin, this.miterLimit)
}}



function clear () {
if (this["__dirty"] == false) return;
this.__dirty = false;
this.context.clear();
if (this.__bitmapdata) {
this.clearRect(0, 0, this.width, this.height)
}}


function createLinearGradient ($0:Number, $1:Number, $2:Number, $3:Number) {
var $4:Number = $2 - $0;
var $5:Number = $3 - $1;
var $6:Number = Math.atan2($5, $4);
var $7:Number = Math.sqrt($4 * $4 + $5 * $5);
var $8:Number = $7;
var $9:Number = Math.min($1, $3);
var $a:Number = Math.min($0, $2);

var $b:LzCanvasGradient = new LzCanvasGradient(this, {matrixType: "box", x: $a, y: $9, w: $8, h: $7, r: $6}, false);

return $b
}

function createRadialGradient ($0:Number, $1:Number, $2, $3:Number, $4:Number, $5:Number) {
var $6:Number = $3 - $0;
var $7:Number = $4 - $1;

var $8:Number = $2 != null ? $2 : Math.atan2($7, $6);
var $9:LzCanvasGradient = new LzCanvasGradient(this, {matrixType: "box", x: $0, y: $1, w: $6, h: $7, r: $8}, true);

return $9
}

var __tr:Number = 0;function rotate ($0:Number) {


this.__saveToBitmap();

this.__tr += $0 * this.__radtodegfactor;



this.__drawcontext.rotation = this.__tr
}



function __saveToBitmap () {
if (!this.__bitmapdata) {

this.rebuildBitmap()
};













var $0:Matrix = this.getIdentityMatrix();



if (this.__bitmapcontainer) {




this.__bitmapcontainer.visible = false
};


this.copyBitmap(this.__drawcontainer, this.width, this.height, this.__bitmapdata, $0);
if (this.__bitmapcontainer) {



this.__bitmapcontainer.visible = true
};












this.context.clear()
}


var __tx:Number = 0;var __ty:Number = 0;function translate ($0:Number, $1:Number) {


this.__saveToBitmap();


this.__tx += $0 * this.__sx;
this.__ty += $1 * this.__sy;




this.__drawcontext.x = this.__tx;
this.__drawcontext.y = this.__ty
}



var __sx:Number = 1;var __sy:Number = 1;function scale ($0:Number, $1:Number) {


this.__saveToBitmap();

this.__sx *= $0;
this.__sy *= $1;





this.__drawcontext.scaleX = this.__sx;
this.__drawcontext.scaleY = this.__sy
}




private function __drawPath ($0) {
this.closePath();
$0.clear();
$0.beginFill(16711935, 0);
this.__playPath($0);
$0.endFill()
}


override function $lzc$set_width ($0) {
super.$lzc$set_width($0);
if (this._setrescwidth || this._setrescheight) {

this.__updateSize()
};
if (!this.__norebuild && this.__bitmapdata) this.rebuildBitmap()
}

override function updateWidth ($0) {
super.updateWidth($0);
if (this._setrescwidth) {


if (this.__drawcontainer) {
this.__drawcontainer.scaleX = this.width / this.unstretchedwidth
}};


if (!this.__norebuild && (this.__bitmapdata || !this.measuresize)) this.rebuildBitmap()
}

override function $lzc$set_height ($0) {
super.$lzc$set_height($0);
if (this._setrescwidth || this._setrescheight) {

this.__updateSize()
};
if (!this.__norebuild && this.__bitmapdata) this.rebuildBitmap()
}

override function updateHeight ($0) {
super.updateHeight($0);
if (this._setrescheight) {


if (this.__drawcontainer) {
this.__drawcontainer.scaleY = this.height / this.unstretchedheight
}};


if (!this.__norebuild && (this.__bitmapdata || !this.measuresize)) this.rebuildBitmap()
}

protected function __updateSize ():void {
if (!this.__drawcontainer) return;
var $0:Boolean = (this.hassetwidth == false || this.hassetheight == false || this._setrescwidth || this._setrescheight) && this.measuresize;
if (!$0) return;

var $1 = false;
if (this.__bitmapdata) {

this.clearBitmap();
$1 = true
};


this.__norebuild = true;


var $2, $3;
var $4 = this.__drawcontainer;


if (this._setrescwidth) {
$4.scaleX = 1
};
if (this._setrescheight) {
$4.scaleY = 1
};

$2 = $4.width;
$3 = $4.height;





var $5 = false;


if (this.width !== $2) {
$5 = true;
if (this.hassetwidth == false) {
this.updateWidth($2)
} else if (this._setrescwidth) {

this.updateWidth($2)
}};


if (this.height !== $3) {
$5 = true;
if (this.hassetheight == false) {
this.updateHeight($3)
} else if (this._setrescheight) {

this.updateHeight($3)
}};


this.__norebuild = false;
if ($1) {
this.rebuildBitmap()
}}


function fillText ($0:String, $1:Number, $2:Number, $3 = null) {}





function strokeText ($0:String, $1:Number, $2:Number, $3 = null) {}




function measureText ($0:String) {}






function clearMask () {
if (this.clipcontext) {
this.clipcontext.clear();
this.clipcontext = null
};
if (this.clickcontext) {
this.clickcontext.clear();
this.clickcontext = null
}}


function clipPath () {
var $0 = this.sprite.masksprite;
if (!$0) {
this.sprite.applyMask();
$0 = this.sprite.masksprite
};
if (!this.clipcontext) {
this.clipcontext = $0.graphics
};
this.__drawPath(this.clipcontext);

$0.scaleX = 1;
$0.scaleY = 1
}

function clipButton () {
if (!this.clickable) this.setAttribute("clickable", true);
if (!this.sprite.clickregion) this.setAttribute("clickregion", null);
var $0:Sprite = this.sprite.clickregion;
if (!this.clickcontext) {
this.sprite.hitArea = $0;

this.sprite.clickregionwidth = this.width;
this.sprite.clickregionheight = this.height;


this.sprite.addChild($0);

this.clickcontext = $0.graphics
};
this.__drawPath(this.clickcontext);

$0.scaleX = 1;
$0.scaleY = 1
}





private var __sizelimit:Number = 4095 * 4095;private function rebuildBitmap ():void {




if (this.__norebuild || !this.__drawcontainer) return;
var $0 = this.width;
var $1 = this.height;
if ($0 < 1 || $1 < 1) return;

if ($0 * $1 > this.__sizelimit) {



return
};
if (this.__bitmapdata && $0 == this.__bitmapdata.width && $1 == this.__bitmapdata.height) return;

var $2:BitmapData = new (flash.display.BitmapData)($0, $1, true, 255);
if ($2) {

if (this.__bitmapdata) {


this.clearBitmap()
};

this.__bitmapdata = $2;
this.__bitmapcontainer = new (flash.display.Bitmap)($2);
this.__drawcontainer.addChildAt(this.__bitmapcontainer, 0);
if (this.oncontext.ready) {

this.oncontext.sendEvent(this.context)
}}}




private function clearBitmap ():void {
if (this.__bitmapdata) {
this.__bitmapdata.dispose();
this.__bitmapdata = null
};
if (this.__bitmapcontainer) {
this.__drawcontainer.removeChild(this.__bitmapcontainer);
this.__bitmapcontainer = null
}}


function getImage ($0:String):BitmapData {
var $1 = this._lz.drawview.images;
if (!$1[$0]) {
var $2:Object = LzResourceLibrary[$0];
var $3:Class;


if ($2.assetclass is Class) {
$3 = $2.assetclass
} else {

$3 = $2.frames[0]
};

if (this.resourceCache == null) {
this.resourceCache = []
};
var $4 = this.resourceCache[$0];
if ($4 == null) {

$4 = new $3();
$4.scaleX = 1;
$4.scaleY = 1;
this.resourceCache[$0] = $4
};

var $5:Rectangle = $4.getBounds($4);

var $6 = this.sprite.addChild($4);
$1[$0] = copyBitmap($6, $5.width, $5.height);
this.sprite.removeChild($4)
};

return $1[$0]
}


private function createContainer () {
var $0:Sprite = new Sprite();
$0.mouseChildren = false;
this.getDisplayObject().addChildAt($0, 0);
this.__drawcontainer = $0;

this.__drawcontext = this.createDrawingContext();

return this.__drawcontext.graphics
}


private function createDrawingContext () {
var $0:Sprite = new Sprite();
this.__drawcontainer.addChild($0);
return $0
}

function save () {
this.__contextstates.push({fillStyle: this.fillStyle, strokeStyle: this.strokeStyle, globalAlpha: this.globalAlpha, lineWidth: this.lineWidth, lineCap: this.lineCap, lineJoin: this.lineJoin, miterLimit: this.miterLimit});

this.__sx = this.__sy = 1;
this.__tr = this.__tx = this.__ty = 0;


this.__contexts.push(this.__drawcontext);

var $0 = createDrawingContext();


$0.x = this.__drawcontext.x;
$0.y = this.__drawcontext.y;
$0.rotation = this.__drawcontext.rotation;
$0.scaleX = this.__drawcontext.scaleX;
$0.scaleY = this.__drawcontext.scaleY;

this.__drawcontext = $0;
this.context = $0.graphics
}

function restore () {
var $0 = this.__contextstates.pop();
if ($0) {
for (var $1 in $0) {

this[$1] = $0[$1]
}};


if (this.__contexts.length) {
this.__saveToBitmap();
this.__drawcontainer.removeChild(this.__drawcontext);
this.__drawcontext = this.__contexts.pop();
this.context = this.__drawcontext.graphics
}}
/* -*- file: #2008 -*- */
function fillRect ($0:Number, $1:Number, $2:Number, $3:Number) {
if (!$2 && !$3) return;
this.__dirty = true;
if (this.fillStyle instanceof this._lz.CanvasGradient) {
this.fillStyle.__applyFillTo(this.context);
this.__strokeRect($0, $1, $2, $3);
this.context.endFill()
} else {
var $4:Object = this.__getColor(this.fillStyle);
var $5:Number = $4.a != null ? $4.a : this.globalAlpha;
if ($5 == 1) {

var $6:Rectangle = new (flash.geom.Rectangle)($0, $1, $2, $3);
if (!this.__bitmapdata) {
this.rebuildBitmap()
};
this.__bitmapdata.fillRect($6, $4.c + 4278190080)
} else {


var $4:Object = this.__getColor(this.fillStyle);
var $5:Number = $4.a != null ? $4.a : this.globalAlpha;

this.context.beginFill($4.c, $5);

this.__strokeRect($0, $1, $2, $3);

this.context.endFill()
}}}









function __strokeRect ($0:Number, $1:Number, $2:Number, $3:Number) {
if ($2 == 0 && $3 == 0) return;
this.context.moveTo($0, $1);
if ($2 != 0) {

this.context.lineTo($0 + $2, $1);
if ($3 != 0) {

this.context.lineTo($0 + $2, $1 + $3)
}};

if ($3 != 0) {

this.context.lineTo($0, $1 + $3);
if ($2 != 0) {

this.context.lineTo($0, $1)
}};



this.context.moveTo(0, 0);

if (this.measuresize) this.__updateSize()
}

function clearRect ($0:Number, $1:Number, $2:Number, $3:Number) {
if (!$2 && !$3) return;
if ($2 < 1 || $3 < 1) return;
this.__saveToBitmap();
var $4:Rectangle = new (flash.geom.Rectangle)($0, $1, $2, $3);
this.__bitmapdata.fillRect($4, 255)
}




function strokeRect ($0:Number, $1:Number, $2:Number, $3:Number) {
if (!$2 && !$3) return;
this.__dirty = true;
this.__updateLineStyle();
this.__strokeRect($0, $1, $2, $3);
this.context.lineStyle(undefined)
}

private function getIdentityMatrix ():Matrix {
return new (flash.geom.Matrix)()
}

function drawImage ($0 = null, $1:Number = 0, $2:Number = 0, $3 = null, $4 = null, $5:Number = 0) {

if ($0 == null) {

this.__saveToBitmap();

if ($3 == null) $3 = this.width;
if ($4 == null) $4 = this.height;
$0 = copyBitmap(this.__bitmapdata, $3, $4);
if (!$0) return
} else if (typeof $0 == "string") {
$0 = this.getImage($0);
if (!$0) return;
if ($3 == null) $3 = $0.width;
if ($4 == null) $4 = $0.height
};

this.__dirty = true;


var $6:Matrix = this.getIdentityMatrix();


var $7:Number = $3 ? $3 / $0.width : 1;
var $8:Number = $4 ? $4 / $0.height : 1;
$6.scale($7 * this.__sx, $8 * this.__sy);
$6.rotate($5 + this.__tr);
var $9:Number = $1 + this.__tx;
var $a:Number = $2 + this.__ty;
$6.translate($9, $a);

if (!this.__bitmapdata) {
this.rebuildBitmap()
};
this.copyBitmap($0, this.width, this.height, this.__bitmapdata, $6)
}

private function copyBitmap ($0:*, $1:Number, $2:Number, $3:BitmapData = null, $4:Matrix = null) {
var $5:BitmapData = new (flash.display.BitmapData)($1, $2, true, 255);

$5.draw($0);


if (!$3) {
return $5
};
if (!$4) {
$4 = this.getIdentityMatrix()
};
$3.draw($5, $4, null, null, null, true);
$5.dispose()
}
/* -*- file: -*- */
}
}

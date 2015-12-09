package {
class $lzsc$mixin$DrawviewShared$LzView extends LzView implements DrawviewShared {
/* -*- file: extensions/drawview.lzx#289 -*- */
function $lzsc$mixin$DrawviewShared$LzView ($0:LzNode? = null, $1:Object? = null, $2:Array? = null, $3:Boolean = false) {
super($0, $1, $2, $3)
}
/* -*- file: -*- */
function lineTo ($0:Number, $1:Number) {}
/* -*- file: -*- */
function moveTo ($0:Number, $1:Number) {}
/* -*- file: -*- */
function quadraticCurveTo ($0:Number, $1:Number, $2:Number, $3:Number) {}


var __radtodegfactor:Number = 180 / Math.PI;function arc ($0, $1, $2, $3, $4, $5 = false) {














if ($3 == null || $4 == null) return;



$3 = -$3;
$4 = -$4;


var $6;

if ($5 == false && $4 - $3 >= 2 * Math.PI || $5 == true && $3 - $4 >= 2 * Math.PI) {

$6 = 360
} else if ($3 == $4 || $2 == 0) {

$6 = 0
} else {

var $7 = $3 * this.__radtodegfactor;
var $8 = $4 * this.__radtodegfactor;

if ($5) {
if ($8 < $7) {
$6 = -($7 - $8 - 360)
} else {
$6 = $8 - $7 + 360
}} else {

if ($8 < $7) {
$6 = -($7 - $8 + 360)
} else {
$6 = $8 - $7 - 360
}};




while ($6 < -360) {
$6 += 360
};
while ($6 > 360) {
$6 -= 360
}};







var $9:Number = $0 + $2 * Math.cos($3);
var $a:Number = $1 + $2 * Math.sin(2 * Math.PI - $3);
this.moveTo($9, $a);

this._drawArc($0, $1, $2, $6, $3 * this.__radtodegfactor)
}

function rect ($0, $1, $2, $3, $4 = 0, $5 = null, $6 = null, $7 = null) {

LzKernelUtils.rect(this, $0, $1, $2, $3, $4, $5, $6, $7)
}

function oval ($0, $1, $2, $3 = NaN) {

if (isNaN($3)) {
$3 = $2
};
var $4:Number = $2 < 10 && $3 < 10 ? 5 : 8;

var $5:Number = Math.PI / ($4 / 2);

var $6:Number = $2 / Math.cos($5 / 2);
var $7:Number = $3 / Math.cos($5 / 2);

this.moveTo($0 + $2, $1);

var $8:Number = 0, $9:Number, $a:Number, $b:Number, $c:Number, $d:Number;

for (var $e:int = 0;$e < $4;$e++) {

$8 += $5;
$9 = $8 - $5 / 2;

$c = $0 + Math.cos($9) * $6;
$d = $1 + Math.sin($9) * $7;

$a = $0 + Math.cos($8) * $2;
$b = $1 + Math.sin($8) * $3;

this.quadraticCurveTo($c, $d, $a, $b)
};
return {x: $a, y: $b}}


function _drawArc ($0:Number, $1:Number, $2:Number, $3:Number, $4:Number, $5:Number = NaN):Object {

if (isNaN($5)) {
$5 = $2
};

if (Math.abs($3) > 360) {
$3 = 360
};



var $6:Number = Math.ceil(Math.abs($3) / 45);

var $7:Number, $8:Number;


if ($6 > 0) {

var $9:Number = $3 / $6;


var $a:Number = -($9 / 180) * Math.PI;

var $b:Number = -($4 / 180) * Math.PI;
var $c:Number, $d:Number, $e:Number;

for (var $f:int = 0;$f < $6;$f++) {

$b += $a;

$c = $b - $a / 2;

$7 = $0 + Math.cos($b) * $2;
$8 = $1 + Math.sin($b) * $5;

$d = $0 + Math.cos($c) * ($2 / Math.cos($a / 2));
$e = $1 + Math.sin($c) * ($5 / Math.cos($a / 2));

this.quadraticCurveTo($d, $e, $7, $8)
}};





return {x: $7, y: $8}}


function distance ($0, $1) {


var $2:Number = $1.x - $0.x;
var $3:Number = $1.y - $0.y;
return Math.sqrt($2 * $2 + $3 * $3)
}

function intersection ($0, $1, $2, $3) {


var $4:Number = ($3.x - $2.x) * ($0.y - $2.y) - ($3.y - $2.y) * ($0.x - $2.x);
var $5:Number = ($3.y - $2.y) * ($1.x - $0.x) - ($3.x - $2.x) * ($1.y - $0.y);
if ($5 == 0) {
if ($4 == 0) {
return -1
} else {
return null
}};

$4 /= $5;
return {x: $0.x + ($1.x - $0.x) * $4, y: $0.y + ($1.y - $0.y) * $4}}



function midpoint ($0, $1) {
return {x: ($0.x + $1.x) / 2, y: ($0.y + $1.y) / 2}}


var globalAlpha:Number = 1;var lineWidth:Number = 1;var lineCap:String = "butt";var lineJoin:String = "miter";var miterLimit:Number = 10;var strokeStyle:* = "#000000";var fillStyle:* = "#000000";}
}

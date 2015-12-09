package {

                import flash.geom.Matrix;
                class LzCanvasGradient {
/* -*- file: extensions/drawview.lzx#2169 -*- */
var __context:* = null;var __matrix:Matrix = null;var __type:String = null;var __colors:Array = null;var __alphas:Array = null;var __offsets:Array = null;function LzCanvasGradient ($0:*, $1:Object, $2:Boolean) {












this.__context = $0;
var $3:Matrix = new (flash.geom.Matrix)();
$3.createGradientBox($1.w, $1.h, $1.r, $1.x, $1.y);
this.__matrix = $3;
this.__type = $2 ? "radial" : "linear";
this.__colors = [];
this.__alphas = [];
this.__offsets = []
}






function addColorStop ($0:Number, $1:*):void {
this.__offsets.push($0 * 255);
var $2:Object = this.__context.__getColor($1);
this.__colors.push($2.c);
var $3:Number = $2.a != null ? $2.a : this.__context.globalAlpha;

this.__alphas.push($3)
}




function __applyFillTo ($0:*):void {


$0.beginGradientFill(this.__type, this.__colors, this.__alphas, this.__offsets, this.__matrix)
}




function __applyStrokeTo ($0:*):void {


$0.lineGradientStyle(this.__type, this.__colors, this.__alphas, this.__offsets, this.__matrix)
}
/* -*- file: -*- */
}
}

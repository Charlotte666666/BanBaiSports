package {

        import flash.geom.*;
        import flash.display.Bitmap;
        import flash.display.BitmapData;
        import flash.utils.ByteArray;
    dynamic class $lzc$class_PNGEncoder extends LzView {
/* -*- file: common/utils/ImageUtil.lzx#25 -*- */
public static function encode ($0:BitmapData):ByteArray {

var $1:ByteArray = new ByteArray();

$1.writeUnsignedInt(2303741511);
$1.writeUnsignedInt(218765834);

var $2:ByteArray = new ByteArray();
$2.writeInt($0.width);
$2.writeInt($0.height);
$2.writeUnsignedInt(134610944);
$2.writeByte(0);
writeChunk($1, 1229472850, $2);

var $3:ByteArray = new ByteArray();
for (var $4:int = 0;$4 < $0.height;$4++) {

$3.writeByte(0);
var $5:uint;
var $6:int;
if (!$0.transparent) {
for ($6 = 0;$6 < $0.width;$6++) {
$5 = $0.getPixel($6, $4);
$3.writeUnsignedInt(uint(($5 & 16777215) << 8 | 255))
}} else {


for ($6 = 0;$6 < $0.width;$6++) {
$5 = $0.getPixel32($6, $4);
$3.writeUnsignedInt(uint(($5 & 16777215) << 8 | $5 >>> 24))
}}};




$3.compress();
writeChunk($1, 1229209940, $3);

writeChunk($1, 1229278788, null);

return $1
}

private static var crcTable:Array;private static var crcTableComputed:Boolean = false;private static function writeChunk ($0:ByteArray, $1:uint, $2:ByteArray):void {




if (!crcTableComputed) {
crcTableComputed = true;
crcTable = [];
var $3:uint;
for (var $4:uint = 0;$4 < 256;$4++) {
$3 = $4;
for (var $5:uint = 0;$5 < 8;$5++) {
if ($3 & 1) {
$3 = uint(uint(3988292384) ^ uint($3 >>> 1))
} else {

$3 = uint($3 >>> 1)
}};

crcTable[$4] = $3
}};

var $6:uint = 0;
if ($2 != null) {
$6 = $2.length
};
$0.writeUnsignedInt($6);
var $7:uint = $0.position;
$0.writeUnsignedInt($1);
if ($2 != null) {
$0.writeBytes($2)
};
var $8:uint = $0.position;
$0.position = $7;
$3 = 4294967295;
for (var $9:int = 0;$9 < $8 - $7;$9++) {
$3 = uint(crcTable[($3 ^ $0.readUnsignedByte()) & uint(255)] ^ uint($3 >>> 8))
};


$3 = uint($3 ^ uint(4294967295));
$0.position = $8;
$0.writeUnsignedInt($3)
}
/* -*- file: -*- */
}
}

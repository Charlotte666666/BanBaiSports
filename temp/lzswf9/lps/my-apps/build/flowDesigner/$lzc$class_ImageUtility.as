package {

	import flash.display.BitmapData;
	import flash.display.Sprite;
	import flash.display.StageDisplayState;
	import flash.events.ContextMenuEvent;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.ui.ContextMenu;
	import flash.ui.ContextMenuItem;
	import flash.utils.ByteArray;
	import flash.display.DisplayObject;
    import flash.net.*;
    dynamic class $lzc$class_ImageUtility extends LzView {
/* -*- file: common/utils/ImageUtil.lzx#130 -*- */
function saveImage ($0, $1):void {
try {
var $2:BitmapData = new BitmapData($0.width, $0.height);
$2.draw($0.sprite);
var $3:ByteArray = lz.PNGEncoder.encode($2);
var $4:FileReference = new FileReference();
$4.save($3, $1 + ".png")
}
/* -*- file: #137 -*- */
catch ($5) {
Debug.write($5)
}}
/* -*- file: -*- */
}
}

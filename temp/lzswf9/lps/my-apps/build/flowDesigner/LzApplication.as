package {
  
import flash.display.*;
import flash.events.*;
import flash.utils.*;
import flash.text.*;
import flash.system.*;
import flash.net.*;
import flash.ui.*;
import flash.external.*;
public class LzApplication extends LFCApplication {
override public function runToplevelDefinitions () {;
;

[Embed(source="D:/lps/lps/components/lz/resources/focus/focus_top_lft.png")]
var __embed_lzasset_lzfocusbracket_rsrc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/focus/focus_top_rt.png")]
var __embed_lzasset_lzfocusbracket_rsrc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/focus/focus_bot_lft.png")]
var __embed_lzasset_lzfocusbracket_rsrc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/focus/focus_bot_rt.png")]
var __embed_lzasset_lzfocusbracket_rsrc_3:Class;
;LzResourceLibrary.lzfocusbracket_rsrc = {frames: [__embed_lzasset_lzfocusbracket_rsrc_0, __embed_lzasset_lzfocusbracket_rsrc_1, __embed_lzasset_lzfocusbracket_rsrc_2, __embed_lzasset_lzfocusbracket_rsrc_3], width: 7, height: 7};
[Embed(source="D:/lps/lps/components/lz/resources/focus/focus_top_lft_shdw.png")]
var __embed_lzasset_lzfocusbracket_shdw_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/focus/focus_top_rt_shdw.png")]
var __embed_lzasset_lzfocusbracket_shdw_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/focus/focus_bot_lft_shdw.png")]
var __embed_lzasset_lzfocusbracket_shdw_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/focus/focus_bot_rt_shdw.png")]
var __embed_lzasset_lzfocusbracket_shdw_3:Class;
;LzResourceLibrary.lzfocusbracket_shdw = {frames: [__embed_lzasset_lzfocusbracket_shdw_0, __embed_lzasset_lzfocusbracket_shdw_1, __embed_lzasset_lzfocusbracket_shdw_2, __embed_lzasset_lzfocusbracket_shdw_3], width: 9, height: 9};
[Embed(source="D:/lps/lps/components/lz/resources/button/simpleface_up.swf")]
var __embed_lzasset_lzbutton_face_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/button/simpleface_mo.swf")]
var __embed_lzasset_lzbutton_face_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/button/simpleface_dn.swf")]
var __embed_lzasset_lzbutton_face_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/button/simpleface_dsbl.swf")]
var __embed_lzasset_lzbutton_face_rsc_3:Class;
;LzResourceLibrary.lzbutton_face_rsc = {frames: [__embed_lzasset_lzbutton_face_rsc_0, __embed_lzasset_lzbutton_face_rsc_1, __embed_lzasset_lzbutton_face_rsc_2, __embed_lzasset_lzbutton_face_rsc_3], width: 1, height: 18};
[Embed(source="D:/lps/lps/components/lz/resources/bezel_inner_up.swf")]
var __embed_lzasset_lzbutton_bezel_inner_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/bezel_inner_up.swf")]
var __embed_lzasset_lzbutton_bezel_inner_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/bezel_inner_dn.swf")]
var __embed_lzasset_lzbutton_bezel_inner_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/outline_dsbl.swf")]
var __embed_lzasset_lzbutton_bezel_inner_rsc_3:Class;
;LzResourceLibrary.lzbutton_bezel_inner_rsc = {frames: [__embed_lzasset_lzbutton_bezel_inner_rsc_0, __embed_lzasset_lzbutton_bezel_inner_rsc_1, __embed_lzasset_lzbutton_bezel_inner_rsc_2, __embed_lzasset_lzbutton_bezel_inner_rsc_3], width: 500, height: 500};
[Embed(source="D:/lps/lps/components/lz/resources/bezel_outer_up.swf")]
var __embed_lzasset_lzbutton_bezel_outer_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/bezel_outer_up.swf")]
var __embed_lzasset_lzbutton_bezel_outer_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/bezel_outer_dn.swf")]
var __embed_lzasset_lzbutton_bezel_outer_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/transparent.swf")]
var __embed_lzasset_lzbutton_bezel_outer_rsc_3:Class;
[Embed(source="D:/lps/lps/components/lz/resources/default_outline.swf")]
var __embed_lzasset_lzbutton_bezel_outer_rsc_4:Class;
;LzResourceLibrary.lzbutton_bezel_outer_rsc = {frames: [__embed_lzasset_lzbutton_bezel_outer_rsc_0, __embed_lzasset_lzbutton_bezel_outer_rsc_1, __embed_lzasset_lzbutton_bezel_outer_rsc_2, __embed_lzasset_lzbutton_bezel_outer_rsc_3, __embed_lzasset_lzbutton_bezel_outer_rsc_4], width: 500, height: 500};
[Embed(source="D:/lps/lps/components/lz/resources/checkbox/checkbox_off.swf")]
var __embed_lzasset_lzcheckbox_rsrc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/checkbox/checkbox_off_mo.swf")]
var __embed_lzasset_lzcheckbox_rsrc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/checkbox/checkbox_on.swf")]
var __embed_lzasset_lzcheckbox_rsrc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/checkbox/checkbox_disable_off.swf")]
var __embed_lzasset_lzcheckbox_rsrc_3:Class;
[Embed(source="D:/lps/lps/components/lz/resources/checkbox/checkbox_on.swf")]
var __embed_lzasset_lzcheckbox_rsrc_4:Class;
[Embed(source="D:/lps/lps/components/lz/resources/checkbox/checkbox_on_mo.swf")]
var __embed_lzasset_lzcheckbox_rsrc_5:Class;
[Embed(source="D:/lps/lps/components/lz/resources/checkbox/checkbox_off.swf")]
var __embed_lzasset_lzcheckbox_rsrc_6:Class;
[Embed(source="D:/lps/lps/components/lz/resources/checkbox/checkbox_disable_on.swf")]
var __embed_lzasset_lzcheckbox_rsrc_7:Class;
;LzResourceLibrary.lzcheckbox_rsrc = {frames: [__embed_lzasset_lzcheckbox_rsrc_0, __embed_lzasset_lzcheckbox_rsrc_1, __embed_lzasset_lzcheckbox_rsrc_2, __embed_lzasset_lzcheckbox_rsrc_3, __embed_lzasset_lzcheckbox_rsrc_4, __embed_lzasset_lzcheckbox_rsrc_5, __embed_lzasset_lzcheckbox_rsrc_6, __embed_lzasset_lzcheckbox_rsrc_7], width: 15, height: 14};
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollthumb_y_top.swf")]
var __embed_lzasset_lzscrollbar_ythumbtop_rsc:Class;
;LzResourceLibrary.lzscrollbar_ythumbtop_rsc = {ptype: "sr", assetclass: __embed_lzasset_lzscrollbar_ythumbtop_rsc, frames: ["lps/components/lz/resources/scrollbar/scrollthumb_y_top.swf"], width: 12, height: 1};
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollthumb_y_mid.swf")]
var __embed_lzasset_lzscrollbar_ythumbmiddle_rsc:Class;
;LzResourceLibrary.lzscrollbar_ythumbmiddle_rsc = {ptype: "sr", assetclass: __embed_lzasset_lzscrollbar_ythumbmiddle_rsc, frames: ["lps/components/lz/resources/scrollbar/scrollthumb_y_mid.swf"], width: 11.95, height: 6};
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollthumb_y_bot.swf")]
var __embed_lzasset_lzscrollbar_ythumbbottom_rsc:Class;
;LzResourceLibrary.lzscrollbar_ythumbbottom_rsc = {ptype: "sr", assetclass: __embed_lzasset_lzscrollbar_ythumbbottom_rsc, frames: ["lps/components/lz/resources/scrollbar/scrollthumb_y_bot.swf"], width: 12, height: 1};
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/thumb_y_gripper.png")]
var __embed_lzasset_lzscrollbar_ythumbgripper_rsc:Class;
;LzResourceLibrary.lzscrollbar_ythumbgripper_rsc = {ptype: "sr", assetclass: __embed_lzasset_lzscrollbar_ythumbgripper_rsc, frames: ["lps/components/lz/resources/scrollbar/thumb_y_gripper.png"], width: 9, height: 440};
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollbtn_y_top_up.swf")]
var __embed_lzasset_lzscrollbar_ybuttontop_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollbtn_y_top_mo.swf")]
var __embed_lzasset_lzscrollbar_ybuttontop_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollbtn_y_top_dn.swf")]
var __embed_lzasset_lzscrollbar_ybuttontop_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollbtn_y_top_dsbl.swf")]
var __embed_lzasset_lzscrollbar_ybuttontop_rsc_3:Class;
;LzResourceLibrary.lzscrollbar_ybuttontop_rsc = {frames: [__embed_lzasset_lzscrollbar_ybuttontop_rsc_0, __embed_lzasset_lzscrollbar_ybuttontop_rsc_1, __embed_lzasset_lzscrollbar_ybuttontop_rsc_2, __embed_lzasset_lzscrollbar_ybuttontop_rsc_3], width: 12, height: 13};
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollbtn_y_bot_up.swf")]
var __embed_lzasset_lzscrollbar_ybuttonbottom_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollbtn_y_bot_mo.swf")]
var __embed_lzasset_lzscrollbar_ybuttonbottom_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollbtn_y_bot_dn.swf")]
var __embed_lzasset_lzscrollbar_ybuttonbottom_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollbtn_y_bot_dsbl.swf")]
var __embed_lzasset_lzscrollbar_ybuttonbottom_rsc_3:Class;
;LzResourceLibrary.lzscrollbar_ybuttonbottom_rsc = {frames: [__embed_lzasset_lzscrollbar_ybuttonbottom_rsc_0, __embed_lzasset_lzscrollbar_ybuttonbottom_rsc_1, __embed_lzasset_lzscrollbar_ybuttonbottom_rsc_2, __embed_lzasset_lzscrollbar_ybuttonbottom_rsc_3], width: 12, height: 13};
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/y_scrolltrack.swf")]
var __embed_lzasset_lzscrollbar_ytrack_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/y_scrolltrack_dn.swf")]
var __embed_lzasset_lzscrollbar_ytrack_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/y_scrolltrack_dsbl.swf")]
var __embed_lzasset_lzscrollbar_ytrack_rsc_2:Class;
;LzResourceLibrary.lzscrollbar_ytrack_rsc = {frames: [__embed_lzasset_lzscrollbar_ytrack_rsc_0, __embed_lzasset_lzscrollbar_ytrack_rsc_1, __embed_lzasset_lzscrollbar_ytrack_rsc_2], width: 12, height: 1};
[Embed(source="D:/lps/lps/components/lz/resources/floatinglist/pop_shadow_flush_top_rt.swf")]
var __embed_lzasset_shadowTR_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/floatinglist/pop_shadow_corner_top_rt.swf")]
var __embed_lzasset_shadowTR_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/floatinglist/pop_shadow_oval_top_rt.swf")]
var __embed_lzasset_shadowTR_2:Class;
;LzResourceLibrary.shadowTR = {frames: [__embed_lzasset_shadowTR_0, __embed_lzasset_shadowTR_1, __embed_lzasset_shadowTR_2], width: 14, height: 14};
[Embed(source="D:/lps/lps/components/lz/resources/floatinglist/pop_shadow_mid_rt.swf")]
var __embed_lzasset_shadowMR:Class;
;LzResourceLibrary.shadowMR = {ptype: "sr", assetclass: __embed_lzasset_shadowMR, frames: ["lps/components/lz/resources/floatinglist/pop_shadow_mid_rt.swf"], width: 14.3, height: 1};
[Embed(source="D:/lps/lps/components/lz/resources/floatinglist/pop_shadow_bot_lft.swf")]
var __embed_lzasset_shadowBL:Class;
;LzResourceLibrary.shadowBL = {ptype: "sr", assetclass: __embed_lzasset_shadowBL, frames: ["lps/components/lz/resources/floatinglist/pop_shadow_bot_lft.swf"], width: 12.7, height: 14};
[Embed(source="D:/lps/lps/components/lz/resources/floatinglist/pop_shadow_bot_mid.swf")]
var __embed_lzasset_shadowBM:Class;
;LzResourceLibrary.shadowBM = {ptype: "sr", assetclass: __embed_lzasset_shadowBM, frames: ["lps/components/lz/resources/floatinglist/pop_shadow_bot_mid.swf"], width: 1, height: 14};
[Embed(source="D:/lps/lps/components/lz/resources/floatinglist/pop_shadow_bot_rt.swf")]
var __embed_lzasset_shadowBR:Class;
;LzResourceLibrary.shadowBR = {ptype: "sr", assetclass: __embed_lzasset_shadowBR, frames: ["lps/components/lz/resources/floatinglist/pop_shadow_bot_rt.swf"], width: 14.3, height: 14};
[Embed(source="D:/lps/lps/components/lz/resources/floatinglist/topmenu_lft.swf")]
var __embed_lzasset_menucap_lft_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/floatinglist/botmenu_lft.swf")]
var __embed_lzasset_menucap_lft_1:Class;
;LzResourceLibrary.menucap_lft = {frames: [__embed_lzasset_menucap_lft_0, __embed_lzasset_menucap_lft_1], width: 7, height: 10};
[Embed(source="D:/lps/lps/components/lz/resources/floatinglist/topmenu_mid.swf")]
var __embed_lzasset_menucap_mid_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/floatinglist/botmenu_mid.swf")]
var __embed_lzasset_menucap_mid_1:Class;
;LzResourceLibrary.menucap_mid = {frames: [__embed_lzasset_menucap_mid_0, __embed_lzasset_menucap_mid_1], width: 1, height: 10};
[Embed(source="D:/lps/lps/components/lz/resources/floatinglist/topmenu_rt.swf")]
var __embed_lzasset_menucap_rt_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/floatinglist/botmenu_rt.swf")]
var __embed_lzasset_menucap_rt_1:Class;
;LzResourceLibrary.menucap_rt = {frames: [__embed_lzasset_menucap_rt_0, __embed_lzasset_menucap_rt_1], width: 7, height: 10};
[Embed(source="D:/lps/lps/components/lz/resources/combobox/combobox_lft_up.swf")]
var __embed_lzasset_lzcombobox_lft_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/combobox/popup_lft_up.swf")]
var __embed_lzasset_lzcombobox_lft_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/combobox/combobox_lft_dsbl.swf")]
var __embed_lzasset_lzcombobox_lft_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/combobox/popup_lft_dsbl.swf")]
var __embed_lzasset_lzcombobox_lft_rsc_3:Class;
;LzResourceLibrary.lzcombobox_lft_rsc = {frames: [__embed_lzasset_lzcombobox_lft_rsc_0, __embed_lzasset_lzcombobox_lft_rsc_1, __embed_lzasset_lzcombobox_lft_rsc_2, __embed_lzasset_lzcombobox_lft_rsc_3], width: 2, height: 22};
[Embed(source="D:/lps/lps/components/lz/resources/combobox/combobox_mid_up.swf")]
var __embed_lzasset_lzcombobox_mid_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/combobox/popup_mid_up.swf")]
var __embed_lzasset_lzcombobox_mid_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/combobox/combobox_mid_dsbl.swf")]
var __embed_lzasset_lzcombobox_mid_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/combobox/popup_mid_dsbl.swf")]
var __embed_lzasset_lzcombobox_mid_rsc_3:Class;
;LzResourceLibrary.lzcombobox_mid_rsc = {frames: [__embed_lzasset_lzcombobox_mid_rsc_0, __embed_lzasset_lzcombobox_mid_rsc_1, __embed_lzasset_lzcombobox_mid_rsc_2, __embed_lzasset_lzcombobox_mid_rsc_3], width: 1, height: 22};
[Embed(source="D:/lps/lps/components/lz/resources/combobox/popbtn_rt_up.swf")]
var __embed_lzasset_lzcombobox_rgt_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/combobox/popbtn_rt_mo.swf")]
var __embed_lzasset_lzcombobox_rgt_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/combobox/popbtn_rt_dn.swf")]
var __embed_lzasset_lzcombobox_rgt_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/combobox/popbtn_rt_dsbl.swf")]
var __embed_lzasset_lzcombobox_rgt_rsc_3:Class;
;LzResourceLibrary.lzcombobox_rgt_rsc = {frames: [__embed_lzasset_lzcombobox_rgt_rsc_0, __embed_lzasset_lzcombobox_rgt_rsc_1, __embed_lzasset_lzcombobox_rgt_rsc_2, __embed_lzasset_lzcombobox_rgt_rsc_3], width: 17, height: 22};
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollthumb_x_lft.swf")]
var __embed_lzasset_lzscrollbar_xthumbleft_rsc:Class;
;LzResourceLibrary.lzscrollbar_xthumbleft_rsc = {ptype: "sr", assetclass: __embed_lzasset_lzscrollbar_xthumbleft_rsc, frames: ["lps/components/lz/resources/scrollbar/scrollthumb_x_lft.swf"], width: 1, height: 12};
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollthumb_x_mid.swf")]
var __embed_lzasset_lzscrollbar_xthumbmiddle_rsc:Class;
;LzResourceLibrary.lzscrollbar_xthumbmiddle_rsc = {ptype: "sr", assetclass: __embed_lzasset_lzscrollbar_xthumbmiddle_rsc, frames: ["lps/components/lz/resources/scrollbar/scrollthumb_x_mid.swf"], width: 6, height: 12};
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollthumb_x_rt.swf")]
var __embed_lzasset_lzscrollbar_xthumbright_rsc:Class;
;LzResourceLibrary.lzscrollbar_xthumbright_rsc = {ptype: "sr", assetclass: __embed_lzasset_lzscrollbar_xthumbright_rsc, frames: ["lps/components/lz/resources/scrollbar/scrollthumb_x_rt.swf"], width: 1, height: 12};
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/thumb_x_gripper.png")]
var __embed_lzasset_lzscrollbar_xthumbgripper_rsc:Class;
;LzResourceLibrary.lzscrollbar_xthumbgripper_rsc = {ptype: "sr", assetclass: __embed_lzasset_lzscrollbar_xthumbgripper_rsc, frames: ["lps/components/lz/resources/scrollbar/thumb_x_gripper.png"], width: 440, height: 9};
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollbtn_x_lft_up.swf")]
var __embed_lzasset_lzscrollbar_xbuttonleft_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollbtn_x_lft_mo.swf")]
var __embed_lzasset_lzscrollbar_xbuttonleft_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollbtn_x_lft_dn.swf")]
var __embed_lzasset_lzscrollbar_xbuttonleft_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollbtn_x_lft_dsbl.swf")]
var __embed_lzasset_lzscrollbar_xbuttonleft_rsc_3:Class;
;LzResourceLibrary.lzscrollbar_xbuttonleft_rsc = {frames: [__embed_lzasset_lzscrollbar_xbuttonleft_rsc_0, __embed_lzasset_lzscrollbar_xbuttonleft_rsc_1, __embed_lzasset_lzscrollbar_xbuttonleft_rsc_2, __embed_lzasset_lzscrollbar_xbuttonleft_rsc_3], width: 13, height: 12};
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollbtn_x_rt_up.swf")]
var __embed_lzasset_lzscrollbar_xbuttonright_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollbtn_x_rt_mo.swf")]
var __embed_lzasset_lzscrollbar_xbuttonright_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollbtn_x_rt_dn.swf")]
var __embed_lzasset_lzscrollbar_xbuttonright_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/scrollbtn_x_rt_dsbl.swf")]
var __embed_lzasset_lzscrollbar_xbuttonright_rsc_3:Class;
;LzResourceLibrary.lzscrollbar_xbuttonright_rsc = {frames: [__embed_lzasset_lzscrollbar_xbuttonright_rsc_0, __embed_lzasset_lzscrollbar_xbuttonright_rsc_1, __embed_lzasset_lzscrollbar_xbuttonright_rsc_2, __embed_lzasset_lzscrollbar_xbuttonright_rsc_3], width: 13, height: 12};
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/x_scrolltrack.swf")]
var __embed_lzasset_lzscrollbar_xtrack_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/x_scrolltrack_dn.swf")]
var __embed_lzasset_lzscrollbar_xtrack_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/scrollbar/x_scrolltrack_dsbl.swf")]
var __embed_lzasset_lzscrollbar_xtrack_rsc_2:Class;
;LzResourceLibrary.lzscrollbar_xtrack_rsc = {frames: [__embed_lzasset_lzscrollbar_xtrack_rsc_0, __embed_lzasset_lzscrollbar_xtrack_rsc_1, __embed_lzasset_lzscrollbar_xtrack_rsc_2], width: 1, height: 12};
[Embed(source="D:/lps/lps/components/lz/resources/radio/radiobtn_up.swf")]
var __embed_lzasset_lzradio_rsrc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/radio/radiobtn_mo.swf")]
var __embed_lzasset_lzradio_rsrc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/radio/radiobtn_dn.swf")]
var __embed_lzasset_lzradio_rsrc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/radio/radiobtn_dsbl_up.swf")]
var __embed_lzasset_lzradio_rsrc_3:Class;
[Embed(source="D:/lps/lps/components/lz/resources/radio/radiobtn_dn.swf")]
var __embed_lzasset_lzradio_rsrc_4:Class;
[Embed(source="D:/lps/lps/components/lz/resources/radio/radiobtn_dn.swf")]
var __embed_lzasset_lzradio_rsrc_5:Class;
[Embed(source="D:/lps/lps/components/lz/resources/radio/radiobtn_dn.swf")]
var __embed_lzasset_lzradio_rsrc_6:Class;
[Embed(source="D:/lps/lps/components/lz/resources/radio/radiobtn_dsbl_dn.swf")]
var __embed_lzasset_lzradio_rsrc_7:Class;
;LzResourceLibrary.lzradio_rsrc = {frames: [__embed_lzasset_lzradio_rsrc_0, __embed_lzasset_lzradio_rsrc_1, __embed_lzasset_lzradio_rsrc_2, __embed_lzasset_lzradio_rsrc_3, __embed_lzasset_lzradio_rsrc_4, __embed_lzasset_lzradio_rsrc_5, __embed_lzasset_lzradio_rsrc_6, __embed_lzasset_lzradio_rsrc_7], width: 14, height: 14};
[Embed(source="D:/lps/lps/components/lz/resources/window/top_lft_slct.swf")]
var __embed_lzasset_window_TL_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/top_lft_dslct.swf")]
var __embed_lzasset_window_TL_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/top_lft_slct.swf")]
var __embed_lzasset_window_TL_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/top_lft_dsbl.swf")]
var __embed_lzasset_window_TL_rsc_3:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/top_lft_slct.swf")]
var __embed_lzasset_window_TL_rsc_4:Class;
;LzResourceLibrary.window_TL_rsc = {frames: [__embed_lzasset_window_TL_rsc_0, __embed_lzasset_window_TL_rsc_1, __embed_lzasset_window_TL_rsc_2, __embed_lzasset_window_TL_rsc_3, __embed_lzasset_window_TL_rsc_4], width: 17, height: 14};
[Embed(source="D:/lps/lps/components/lz/resources/window/top_mid_slct.swf")]
var __embed_lzasset_window_TM_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/top_mid_dslct.swf")]
var __embed_lzasset_window_TM_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/top_mid_slct.swf")]
var __embed_lzasset_window_TM_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/top_mid_dsbl.swf")]
var __embed_lzasset_window_TM_rsc_3:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/top_mid_slct.swf")]
var __embed_lzasset_window_TM_rsc_4:Class;
;LzResourceLibrary.window_TM_rsc = {frames: [__embed_lzasset_window_TM_rsc_0, __embed_lzasset_window_TM_rsc_1, __embed_lzasset_window_TM_rsc_2, __embed_lzasset_window_TM_rsc_3, __embed_lzasset_window_TM_rsc_4], width: 1, height: 14};
[Embed(source="D:/lps/lps/components/lz/resources/window/top_rt_slct.swf")]
var __embed_lzasset_window_TR_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/top_rt_dslct.swf")]
var __embed_lzasset_window_TR_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/top_rt_drag.swf")]
var __embed_lzasset_window_TR_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/top_rt_dsbl.swf")]
var __embed_lzasset_window_TR_rsc_3:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/top_rt_slct.swf")]
var __embed_lzasset_window_TR_rsc_4:Class;
;LzResourceLibrary.window_TR_rsc = {frames: [__embed_lzasset_window_TR_rsc_0, __embed_lzasset_window_TR_rsc_1, __embed_lzasset_window_TR_rsc_2, __embed_lzasset_window_TR_rsc_3, __embed_lzasset_window_TR_rsc_4], width: 14, height: 14};
[Embed(source="D:/lps/lps/components/lz/resources/window/mid_lft_slct.swf")]
var __embed_lzasset_window_ML_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/mid_lft_dslct.swf")]
var __embed_lzasset_window_ML_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/mid_lft_slct.swf")]
var __embed_lzasset_window_ML_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/mid_lft_dsbl.swf")]
var __embed_lzasset_window_ML_rsc_3:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/mid_lft_slct.swf")]
var __embed_lzasset_window_ML_rsc_4:Class;
;LzResourceLibrary.window_ML_rsc = {frames: [__embed_lzasset_window_ML_rsc_0, __embed_lzasset_window_ML_rsc_1, __embed_lzasset_window_ML_rsc_2, __embed_lzasset_window_ML_rsc_3, __embed_lzasset_window_ML_rsc_4], width: 17, height: 1};
[Embed(source="D:/lps/lps/components/lz/resources/window/mid_mid_slct.swf")]
var __embed_lzasset_window_MM_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/mid_mid_dslct.swf")]
var __embed_lzasset_window_MM_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/mid_mid_slct.swf")]
var __embed_lzasset_window_MM_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/mid_mid_dsbl.swf")]
var __embed_lzasset_window_MM_rsc_3:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/mid_mid_slct.swf")]
var __embed_lzasset_window_MM_rsc_4:Class;
;LzResourceLibrary.window_MM_rsc = {frames: [__embed_lzasset_window_MM_rsc_0, __embed_lzasset_window_MM_rsc_1, __embed_lzasset_window_MM_rsc_2, __embed_lzasset_window_MM_rsc_3, __embed_lzasset_window_MM_rsc_4], width: 1, height: 1};
[Embed(source="D:/lps/lps/components/lz/resources/window/mid_rt_slct.swf")]
var __embed_lzasset_window_MR_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/mid_rt_dslct.swf")]
var __embed_lzasset_window_MR_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/mid_rt_drag.swf")]
var __embed_lzasset_window_MR_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/mid_rt_dsbl.swf")]
var __embed_lzasset_window_MR_rsc_3:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/mid_rt_slct.swf")]
var __embed_lzasset_window_MR_rsc_4:Class;
;LzResourceLibrary.window_MR_rsc = {frames: [__embed_lzasset_window_MR_rsc_0, __embed_lzasset_window_MR_rsc_1, __embed_lzasset_window_MR_rsc_2, __embed_lzasset_window_MR_rsc_3, __embed_lzasset_window_MR_rsc_4], width: 14, height: 1};
[Embed(source="D:/lps/lps/components/lz/resources/window/bot_lft_slct.swf")]
var __embed_lzasset_window_BL_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/bot_lft_dslct.swf")]
var __embed_lzasset_window_BL_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/bot_lft_drag.swf")]
var __embed_lzasset_window_BL_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/bot_lft_dsbl.swf")]
var __embed_lzasset_window_BL_rsc_3:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/bot_lft_slct.swf")]
var __embed_lzasset_window_BL_rsc_4:Class;
;LzResourceLibrary.window_BL_rsc = {frames: [__embed_lzasset_window_BL_rsc_0, __embed_lzasset_window_BL_rsc_1, __embed_lzasset_window_BL_rsc_2, __embed_lzasset_window_BL_rsc_3, __embed_lzasset_window_BL_rsc_4], width: 17, height: 18};
[Embed(source="D:/lps/lps/components/lz/resources/window/bot_mid_slct.swf")]
var __embed_lzasset_window_BM_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/bot_mid_dslct.swf")]
var __embed_lzasset_window_BM_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/bot_mid_drag.swf")]
var __embed_lzasset_window_BM_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/bot_mid_dsbl.swf")]
var __embed_lzasset_window_BM_rsc_3:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/bot_mid_slct.swf")]
var __embed_lzasset_window_BM_rsc_4:Class;
;LzResourceLibrary.window_BM_rsc = {frames: [__embed_lzasset_window_BM_rsc_0, __embed_lzasset_window_BM_rsc_1, __embed_lzasset_window_BM_rsc_2, __embed_lzasset_window_BM_rsc_3, __embed_lzasset_window_BM_rsc_4], width: 1, height: 18};
[Embed(source="D:/lps/lps/components/lz/resources/window/bot_rt_slct.swf")]
var __embed_lzasset_window_BR_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/bot_rt_dslct.swf")]
var __embed_lzasset_window_BR_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/bot_rt_drag.swf")]
var __embed_lzasset_window_BR_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/bot_rt_dsbl.swf")]
var __embed_lzasset_window_BR_rsc_3:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/bot_rt_slct.swf")]
var __embed_lzasset_window_BR_rsc_4:Class;
;LzResourceLibrary.window_BR_rsc = {frames: [__embed_lzasset_window_BR_rsc_0, __embed_lzasset_window_BR_rsc_1, __embed_lzasset_window_BR_rsc_2, __embed_lzasset_window_BR_rsc_3, __embed_lzasset_window_BR_rsc_4], width: 14, height: 18};
[Embed(source="D:/lps/lps/components/lz/resources/window/gripper_slct.png")]
var __embed_lzasset_window_gripper_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/gripper_dslct.png")]
var __embed_lzasset_window_gripper_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/gripper_dsbl.png")]
var __embed_lzasset_window_gripper_rsc_2:Class;
;LzResourceLibrary.window_gripper_rsc = {frames: [__embed_lzasset_window_gripper_rsc_0, __embed_lzasset_window_gripper_rsc_1, __embed_lzasset_window_gripper_rsc_2], width: 569, height: 11};
[Embed(source="D:/lps/lps/components/lz/resources/window/closebtn_up.swf")]
var __embed_lzasset_window_closebtn_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/closebtn_mo.swf")]
var __embed_lzasset_window_closebtn_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/closebtn_dn.swf")]
var __embed_lzasset_window_closebtn_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/closebtn_dsbl.swf")]
var __embed_lzasset_window_closebtn_rsc_3:Class;
;LzResourceLibrary.window_closebtn_rsc = {frames: [__embed_lzasset_window_closebtn_rsc_0, __embed_lzasset_window_closebtn_rsc_1, __embed_lzasset_window_closebtn_rsc_2, __embed_lzasset_window_closebtn_rsc_3], width: 14, height: 14};
[Embed(source="D:/lps/lps/components/lz/resources/window/resizebtn_up.swf")]
var __embed_lzasset_window_resizebtn_rsc_0:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/resizebtn_mo.swf")]
var __embed_lzasset_window_resizebtn_rsc_1:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/resizebtn_dn.swf")]
var __embed_lzasset_window_resizebtn_rsc_2:Class;
[Embed(source="D:/lps/lps/components/lz/resources/window/resizebtn_dsbl.swf")]
var __embed_lzasset_window_resizebtn_rsc_3:Class;
;LzResourceLibrary.window_resizebtn_rsc = {frames: [__embed_lzasset_window_resizebtn_rsc_0, __embed_lzasset_window_resizebtn_rsc_1, __embed_lzasset_window_resizebtn_rsc_2, __embed_lzasset_window_resizebtn_rsc_3], width: 11, height: 11};
[Embed(source="D:/lps/my-apps/resource/btn_reset.gif")]
var __embed_lzasset_btn_reset_rsc:Class;
;LzResourceLibrary.btn_reset_rsc = {ptype: "ar", assetclass: __embed_lzasset_btn_reset_rsc, frames: ["resource/btn_reset.gif"], width: 15.98388671875, height: 15.98388671875};
[Embed(source="D:/lps/my-apps/resource/btn_del.GIF")]
var __embed_lzasset_btn_del_rsc:Class;
;LzResourceLibrary.btn_del_rsc = {ptype: "ar", assetclass: __embed_lzasset_btn_del_rsc, frames: ["resource/btn_del.GIF"], width: 16.982879638671875, height: 16.982879638671875};
[Embed(source="D:/lps/my-apps/resource/btn_edit.gif")]
var __embed_lzasset_btn_edit_rsc:Class;
;LzResourceLibrary.btn_edit_rsc = {ptype: "ar", assetclass: __embed_lzasset_btn_edit_rsc, frames: ["resource/btn_edit.gif"], width: 16.982879638671875, height: 15.98388671875};
[Embed(source="D:/lps/my-apps/resource/btn_save.GIF")]
var __embed_lzasset_btn_save_rsc:Class;
;LzResourceLibrary.btn_save_rsc = {ptype: "ar", assetclass: __embed_lzasset_btn_save_rsc, frames: ["resource/btn_save.GIF"], width: 13.98590087890625, height: 13.98590087890625};
[Embed(source="D:/lps/my-apps/resource/btn_search.png")]
var __embed_lzasset_btn_search_rsc:Class;
;LzResourceLibrary.btn_search_rsc = {ptype: "ar", assetclass: __embed_lzasset_btn_search_rsc, frames: ["resource/btn_search.png"], width: 21, height: 18};
[Embed(source="D:/lps/my-apps/resource/btn_add.gif")]
var __embed_lzasset_btn_add_rsc:Class;
;LzResourceLibrary.btn_add_rsc = {ptype: "ar", assetclass: __embed_lzasset_btn_add_rsc, frames: ["resource/btn_add.gif"], width: 16.982879638671875, height: 16.982879638671875};
[Embed(source="D:/lps/my-apps/resource/btn_close.png")]
var __embed_lzasset_btn_close_rsc:Class;
;LzResourceLibrary.btn_close_rsc = {ptype: "ar", assetclass: __embed_lzasset_btn_close_rsc, frames: ["resource/btn_close.png"], width: 16, height: 16};
[Embed(source="D:/lps/my-apps/resource/page_first.gif")]
var __embed_lzasset_page_first_rsc:Class;
;LzResourceLibrary.page_first_rsc = {ptype: "ar", assetclass: __embed_lzasset_page_first_rsc, frames: ["resource/page_first.gif"], width: 11.9879150390625, height: 11.9879150390625};
[Embed(source="D:/lps/my-apps/resource/page_last.gif")]
var __embed_lzasset_page_last_rsc:Class;
;LzResourceLibrary.page_last_rsc = {ptype: "ar", assetclass: __embed_lzasset_page_last_rsc, frames: ["resource/page_last.gif"], width: 11.9879150390625, height: 11.9879150390625};
[Embed(source="D:/lps/my-apps/resource/page_next.gif")]
var __embed_lzasset_page_next_rsc:Class;
;LzResourceLibrary.page_next_rsc = {ptype: "ar", assetclass: __embed_lzasset_page_next_rsc, frames: ["resource/page_next.gif"], width: 7.991943359375, height: 13.98590087890625};
[Embed(source="D:/lps/my-apps/resource/page_pre.gif")]
var __embed_lzasset_page_pre_rsc:Class;
;LzResourceLibrary.page_pre_rsc = {ptype: "ar", assetclass: __embed_lzasset_page_pre_rsc, frames: ["resource/page_pre.gif"], width: 7.991943359375, height: 13.98590087890625};
[Embed(source="D:/lps/my-apps/resource/icon_alert.png")]
var __embed_lzasset_icon_alert_rsc:Class;
;LzResourceLibrary.icon_alert_rsc = {ptype: "ar", assetclass: __embed_lzasset_icon_alert_rsc, frames: ["resource/icon_alert.png"], width: 48, height: 48};
[Embed(source="D:/lps/my-apps/resource/icon_success.png")]
var __embed_lzasset_icon_success_rsc:Class;
;LzResourceLibrary.icon_success_rsc = {ptype: "ar", assetclass: __embed_lzasset_icon_success_rsc, frames: ["resource/icon_success.png"], width: 48, height: 48};
[Embed(source="D:/lps/my-apps/resource/alarm.PNG")]
var __embed_lzasset_alarm_rsc:Class;
;LzResourceLibrary.alarm_rsc = {ptype: "ar", assetclass: __embed_lzasset_alarm_rsc, frames: ["resource/alarm.PNG"], width: 24, height: 31};canvas = new $lzc$class__m3(null, {$delegates: ["oninited", "$m2", null], __LZproxied: "false", allowfullscreen: true, appbuilddate: "2015-01-22T14:16:30Z", bgcolor: 16777215, embedfonts: true, flowStr: void 0, font: "Verdana,Vera,sans-serif", fontsize: 11, fontstyle: "plain", height: "100%", lpsbuild: "trunk@18454 (18454)", lpsbuilddate: "2011-02-10T21:32:32Z", lpsrelease: "Latest", lpsversion: "5.0.x", optStr: void 0, runtime: "swf10", scriptlimits: {recursion: 150, timeout: 10}, width: "100%"});/* -*- file: base/colors.lzx#29 -*- */
lz.colors.offwhite = 15921906;/* -*- file: base/colors.lzx#30 -*- */
lz.colors.gray10 = 1710618;/* -*- file: base/colors.lzx#31 -*- */
lz.colors.gray20 = 3355443;/* -*- file: base/colors.lzx#32 -*- */
lz.colors.gray30 = 5066061;/* -*- file: base/colors.lzx#33 -*- */
lz.colors.gray40 = 6710886;/* -*- file: base/colors.lzx#34 -*- */
lz.colors.gray50 = 8355711;/* -*- file: base/colors.lzx#35 -*- */
lz.colors.gray60 = 10066329;/* -*- file: base/colors.lzx#36 -*- */
lz.colors.gray70 = 11776947;/* -*- file: base/colors.lzx#37 -*- */
lz.colors.gray80 = 13421772;/* -*- file: base/colors.lzx#38 -*- */
lz.colors.gray90 = 15066597;/* -*- file: base/colors.lzx#40 -*- */
lz.colors.iceblue1 = 3298963;/* -*- file: base/colors.lzx#41 -*- */
lz.colors.iceblue2 = 5472718;/* -*- file: base/colors.lzx#42 -*- */
lz.colors.iceblue3 = 12240085;/* -*- file: base/colors.lzx#43 -*- */
lz.colors.iceblue4 = 14017779;/* -*- file: base/colors.lzx#44 -*- */
lz.colors.iceblue5 = 15659509;/* -*- file: base/colors.lzx#46 -*- */
lz.colors.palegreen1 = 4290113;/* -*- file: base/colors.lzx#47 -*- */
lz.colors.palegreen2 = 11785139;/* -*- file: base/colors.lzx#48 -*- */
lz.colors.palegreen3 = 12637341;/* -*- file: base/colors.lzx#49 -*- */
lz.colors.palegreen4 = 13888170;/* -*- file: base/colors.lzx#50 -*- */
lz.colors.palegreen5 = 15725032;/* -*- file: base/colors.lzx#52 -*- */
lz.colors.gold1 = 9331721;/* -*- file: base/colors.lzx#53 -*- */
lz.colors.gold2 = 13349195;/* -*- file: base/colors.lzx#54 -*- */
lz.colors.gold3 = 15126388;/* -*- file: base/colors.lzx#55 -*- */
lz.colors.gold4 = 16311446;/* -*- file: base/colors.lzx#57 -*- */
lz.colors.sand1 = 13944481;/* -*- file: base/colors.lzx#58 -*- */
lz.colors.sand2 = 14276546;/* -*- file: base/colors.lzx#59 -*- */
lz.colors.sand3 = 15920859;/* -*- file: base/colors.lzx#60 -*- */
lz.colors.sand4 = 15986401;/* -*- file: base/colors.lzx#62 -*- */
lz.colors.ltpurple1 = 6575768;/* -*- file: base/colors.lzx#63 -*- */
lz.colors.ltpurple2 = 12038353;/* -*- file: base/colors.lzx#64 -*- */
lz.colors.ltpurple3 = 13353453;/* -*- file: base/colors.lzx#65 -*- */
lz.colors.ltpurple4 = 15329264;/* -*- file: base/colors.lzx#67 -*- */
lz.colors.grayblue = 12501704;/* -*- file: base/colors.lzx#68 -*- */
lz.colors.graygreen = 12635328;/* -*- file: base/colors.lzx#69 -*- */
lz.colors.graypurple = 10460593;/* -*- file: base/colors.lzx#71 -*- */
lz.colors.ltblue = 14540287;/* -*- file: base/colors.lzx#72 -*- */
lz.colors.ltgreen = 14548957;/* -*- file: base/style.lzx#245 -*- */
canvas.LzInstantiateView({"class": lz.script, attrs: {script: function () {

lz._componentmanager.service = new (lz._componentmanager)(canvas, null, null, true)
}
/* -*- file: -*- */
}}, 1);/* -*- file: extensions/drawview.lzx#2149 -*- */
lz[$lzc$class_drawview.tagname] = $lzc$class_drawview;/* -*- file: extensions/drawview.lzx#2226 -*- */
lz.CanvasGradient = LzCanvasGradient;/* -*- file: mixins/draggable/dragmanager.lzx#2 -*- */
canvas.LzInstantiateView({"class": lz.script, attrs: {script: function () {
/* -*- file: -*- */
dragmanager = void 0;
/* -*- file: mixins/draggable/dragmanager.lzx#4 -*- */
dragmanager
}
/* -*- file: -*- */
}}, 1);/* -*- file: mixins/draggable/dragmanager.lzx#6 -*- */
canvas.LzInstantiateView({attrs: {$lzc$bind_name: function ($0:LzNode, $1:Boolean = true) {

if ($1) {






dragmanager = $0;
global["dragmanager"] = $0
} else if (dragmanager === $0) {
dragmanager = null;
global["dragmanager"] = null
}}
/* -*- file: -*- */
, __dragviews: null, __droppable: [], dragging: null, dragover: null, name: "dragmanager", ondragging: LzDeclaredEvent, ondragover: LzDeclaredEvent}, "class": $lzc$class__mfl}, 1);/* -*- file: common/utils/StringUtil.lzx#6 -*- */
canvas.LzInstantiateView({attrs: {$lzc$bind_id: function ($0:LzNode, $1:Boolean = true) {

if ($1) {






$0.id = "gStringUtil";
gStringUtil = $0;
global["gStringUtil"] = $0
} else if (gStringUtil === $0) {
gStringUtil = null;
global["gStringUtil"] = null;
$0.id = null
}}
/* -*- file: -*- */
, hexcase: 0, id: "gStringUtil", strsize: 8}, "class": $lzc$class__mkg}, 1);/* -*- file: common/utils/ImageUtil.lzx#113 -*- */
lz["PNGEncoder"] = $lzc$class_PNGEncoder;/* -*- file: common/utils/ImageUtil.lzx#142 -*- */
lz["ImageUtility"] = $lzc$class_ImageUtility;/* -*- file: flowDesigner.lzx#38 -*- */
canvas.LzInstantiateView({attrs: {$CSSDescriptor: {}, $attributeDescriptor: {types: {areaBgColor: "color", areaColorDark: "color", areaColorLight: "color", areaColorLightDark: "color", btnHeight: "number", classroot: "string", cloneManager: "string", datapath: "string", defaultplacement: "string", formBarColor: "color", formCellLineColor: "color", formConditionColor: "color", id: "ID", ignoreplacement: "boolean", immediateparent: "string", inited: "boolean", initstage: "string", itemMouseOverColor: "color", itemSelectedColor: "color", labelColor: "color", mainHeaderColor: "color", name: "token", nodeLevel: "number", options: "css", parent: "string", placement: "string", styleclass: "string", subnodes: "string", transition: "string", "with": "string"}}, $lzc$bind_id: function ($0:LzNode, $1:Boolean = true) {

if ($1) {






$0.id = "gConstant";
gConstant = $0;
global["gConstant"] = $0
} else if (gConstant === $0) {
gConstant = null;
global["gConstant"] = null;
$0.id = null
}}
/* -*- file: -*- */
, areaBgColor: 14803425, areaColorDark: 11524077, areaColorLight: 15135192, areaColorLightDark: 13231318, btnHeight: 22, formBarColor: 13165233, formCellLineColor: 11523976, formConditionColor: 15527148, id: "gConstant", itemMouseOverColor: 16775859, itemSelectedColor: 16709769, labelColor: 426051, mainHeaderColor: 11524077}, "class": LzNode}, 1);/* -*- file: flowDesigner.lzx#100 -*- */
canvas.LzInstantiateView({attrs: {$lzc$bind_name: function ($0:LzNode, $1:Boolean = true) {

if ($1) {






flowDesigner = $0;
global["flowDesigner"] = $0
} else if (flowDesigner === $0) {
flowDesigner = null;
global["flowDesigner"] = null
}}
/* -*- file: -*- */
, height: new LzAlwaysExpr("$mr5", "$mr6", null), name: "flowDesigner", resetHeight: 0, resetWidth: 0, width: new LzAlwaysExpr("$mr3", "$mr4", null)}, "class": $lzc$class__mr7}, 202);lz["basefocusview"] = $lzc$class_basefocusview;lz["focusoverlay"] = $lzc$class_focusoverlay;lz["_componentmanager"] = $lzc$class__componentmanager;lz["style"] = $lzc$class_style;lz["statictext"] = $lzc$class_statictext;lz["basecomponent"] = $lzc$class_basecomponent;lz["basebutton"] = $lzc$class_basebutton;lz["layout"] = LzLayout;lz["simplelayout"] = $lzc$class_simplelayout;lz["vbox"] = $lzc$class_vbox;lz["swatchview"] = $lzc$class_swatchview;lz["button"] = $lzc$class_button;lz["basevaluecomponent"] = $lzc$class_basevaluecomponent;lz["baseformitem"] = $lzc$class_baseformitem;lz["multistatebutton"] = $lzc$class_multistatebutton;lz["checkbox"] = $lzc$class_checkbox;lz["selectionmanager"] = $lzc$class_selectionmanager;lz["listselector"] = $lzc$class_listselector;lz["dataselectionmanager"] = $lzc$class_dataselectionmanager;lz["datalistselector"] = $lzc$class_datalistselector;lz["baselist"] = $lzc$class_baselist;lz["basetrackgroup"] = $lzc$class_basetrackgroup;lz["basebuttonrepeater"] = $lzc$class_basebuttonrepeater;lz["basescrollbar"] = $lzc$class_basescrollbar;lz["basescrollthumb"] = $lzc$class_basescrollthumb;lz["basescrollarrow"] = $lzc$class_basescrollarrow;lz["basescrolltrack"] = $lzc$class_basescrolltrack;lz["stableborderlayout"] = $lzc$class_stableborderlayout;lz["vscrollbar"] = $lzc$class_vscrollbar;lz["list"] = $lzc$class_list;lz["basefloatinglist"] = $lzc$class_basefloatinglist;lz["_floatshadow"] = $lzc$class__floatshadow;lz["floatinglist"] = $lzc$class_floatinglist;lz["basecombobox"] = $lzc$class_basecombobox;lz["combobox"] = $lzc$class_combobox;lz["hscrollbar"] = $lzc$class_hscrollbar;lz["baselistitem"] = $lzc$class_baselistitem;lz["radiogroup"] = $lzc$class_radiogroup;lz["radiobutton"] = $lzc$class_radiobutton;lz["listitem"] = $lzc$class_listitem;lz["textlistitem"] = $lzc$class_textlistitem;lz["dragstate"] = $lzc$class_dragstate;lz["resizestate"] = $lzc$class_resizestate;lz["resizestatemin"] = $lzc$class_resizestatemin;lz["basewindow"] = $lzc$class_basewindow;lz["resizeview_x"] = $lzc$class_resizeview_x;lz["resizeview_y"] = $lzc$class_resizeview_y;lz["windowpanel"] = $lzc$class_windowpanel;lz["resizelayout"] = $lzc$class_resizelayout;lz["modaldialog"] = $lzc$class_modaldialog;lz["alert"] = $lzc$class_alert;lz["window"] = $lzc$class_window;lz["droppable"] = $lzc$class_droppable;lz["draggable"] = $lzc$class_draggable;lz["wrappinglayout"] = $lzc$class_wrappinglayout;lz["BaseFormItem"] = $lzc$class_BaseFormItem;lz["Button"] = $lzc$class_Button;lz["IconButton"] = $lzc$class_IconButton;lz["EditText"] = $lzc$class_EditText;lz["PageNumBar"] = $lzc$class_PageNumBar;lz["EditCombobox"] = $lzc$class_EditCombobox;lz["Combobox"] = $lzc$class_Combobox;lz["CheckBox"] = $lzc$class_CheckBox;lz["RadioGroup"] = $lzc$class_RadioGroup;lz["DrawTool"] = $lzc$class_DrawTool;lz["FlowStateNode"] = $lzc$class_FlowStateNode;lz["FlowNode"] = $lzc$class_FlowNode;lz["FlowLine"] = $lzc$class_FlowLine;lz["FlowDesignerSingle"] = $lzc$class_FlowDesignerSingle;addChild(canvas.sprite);canvas.initDone();}
public function LzApplication ($0:Sprite = null) {
super($0)
}
}
}

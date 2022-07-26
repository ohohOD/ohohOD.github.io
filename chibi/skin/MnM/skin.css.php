<?php
/*유저 설정 css */
if (!empty($skin->op->strong_point)) { 
$skin->op->renamewr_color=$skin->op->strong_point;
$skin->op->point_color1=$skin->op->strong_point;
$skin->op->point_color4=$skin->op->strong_point;
}
if (!empty($skin->op->normal_point)) { 
$skin->op->table_border_color=$skin->op->normal_point;
$skin->op->rereply_bar_color=$skin->op->normal_point;
$skin->op->table_inner_border_color=$skin->op->normal_point;
}
if (!empty($skin->op->weak_point)) { 
$skin->op->link_color=$skin->op->weak_point;
$skin->op->comf_color=$skin->op->weak_point;
}
if (!empty($skin->op->vweak_point)) { 
$skin->op->hover_color=$skin->op->vweak_point;
$skin->op->topm_bt_background_color=$skin->op->vweak_point;
$skin->op->point_color3=$skin->op->vweak_point;
$skin->op->table_background_color=$skin->op->vweak_point;
$skin->op->memo_background_color=$skin->op->vweak_point;
}

if(!empty($skin->op->link_color)){echo "
	a:link { text-shadow:".$skin->op->link_shadow.";font-size:".$skin->op->link_size.";font-family:".$skin->op->link_font.";font-weight:".$skin->op->link_weight.";text-decoration:".$skin->op->link_deco." !important; color:".$skin->op->link_color." !important; }\n
	a:visited { text-shadow:".$skin->op->link_shadow.";font-size:".$skin->op->link_size.";font-family:".$skin->op->link_font.";font-weight:".$skin->op->link_weight.";text-decoration:".$skin->op->link_deco." !important; color:".$skin->op->link_color." !important;}\n
	a:active { text-shadow:".$skin->op->link_shadow.";font-size:".$skin->op->link_size.";font-family:".$skin->op->link_font.";font-weight:".$skin->op->link_weight.";text-decoration:".$skin->op->link_deco." !important; color:".$skin->op->link_color." !important;}\n
	";
}

if(!empty($skin->op->hover_color)) {	echo "
	a:hover { text-shadow:".$skin->op->hover_shadow.";
	font-size:".$skin->op->link_size.";
	font-family:".$skin->op->link_font.";
	font-weight:".$skin->op->hover_weight.";
	text-decoration: ".$skin->op->hover_deco." !important;
	color:".$skin->op->hover_color." !important;}\n
";
}

if(!empty($skin->op->hover_color)) {	echo "
	a:hover { text-shadow:".$skin->op->hover_shadow.";
	font-size:".$skin->op->link_size.";
	font-family:".$skin->op->link_font.";
	font-weight:".$skin->op->hover_weight.";
	text-decoration: ".$skin->op->hover_deco." !important;
	color:".$skin->op->hover_color." !important;}\n
";
}

if(!empty($skin->op->onop_lintrans)) {	echo "
a {-webkit-transition: all 0.2s;
	-moz-transition: all 0.2s;
	-ms-transition: all 0.2s;
	transition: all 0.2s;
}\n
input, select, textarea, select {
	-webkit-transition: all 0.2s;
	-moz-transition: all 0.2s;
	-ms-transition: all 0.2s;
	transition: all 0.2s;
}\n
";
}

if(!empty($skin->op->onop_inputrans)) {	echo "
input:hover,select:hover,textarea:hover,select:hover {
opacity: 0.5;-moz-opacity:0.5;-webkit-opacity:0.5;filter: alpha(opacity=50);outline:0 !important;
}\n
input:focus,select:focus,textarea:focus,select:focus {
opacity: 0.8;-moz-opacity:0.8;-webkit-opacity:0.8;filter: alpha(opacity=80);outline:0 !important;
}\n
";
}

if(!empty($skin->op->background_width)&&$device!="mobile") echo ".container {width:".$skin->op->background_width." !important;}\n";
if(!empty($skin->op->background_img)) echo "body{background-image:url('".$skin->op->background_img."');}\n";
if(!empty($skin->op->repeat)){
	if($skin->op->repeat == "fixed")	echo "body {background-repeat:no-repeat; background-attachment:fixed}";
	else echo "body {background-repeat:".$skin->op->repeat.";}\n";
}
if(!empty($skin->op->background_position)) echo "body{background-position:".$skin->op->background_position.";}\n";
if(!empty($skin->op->background_color)) echo "body{background-color:".$skin->op->background_color." !important;}\n";


if(!empty($skin->op->notice_background_color)&&empty($skin->op->notice_background_alpha)) echo ".user_notice_background_color {background-color:".$skin->op->notice_background_color." !important;}\n";
if(!empty($skin->op->notice_background_alpha)||!empty($skin->op->notice_background_color_R)&&!empty($skin->op->notice_background_color_G)&&!empty($skin->op->notice_background_color_B)) echo ".user_notice_background_color {background-color:rgba(".$skin->op->notice_background_color_R.",".$skin->op->notice_background_color_G.",".$skin->op->notice_background_color_B.",".$skin->op->notice_background_alpha.") !important;}\n";
if(!empty($skin->op->notice_border_radius)) echo ".user_notice_border_radius {-webkit-border-radius:".$skin->op->notice_border_radius." !important;-moz-border-radius:".$skin->op->notice_border_radius." !important;border-radius:".$skin->op->notice_border_radius." !important;}\n";
if(!empty($skin->op->notice_border_color)) echo ".user_notice_border_color {border:".$skin->op->notice_border_color." !important;}\n";
if(!empty($skin->op->notice_border_type)) echo ".user_notice_border_type {border-style:".$skin->op->notice_border_type." !important;}\n";
if(!empty($skin->op->notice_width)) echo ".user_notice_etc {width:".$skin->op->notice_width." !important;}\n";
if(!empty($skin->op->notice_textalign)) echo ".user_notice_etc {text-align:".$skin->op->notice_textalign." !important;}\n";
if(!empty($skin->op->noticetext_color)) echo ".alert {color:".$skin->op->noticetext_color." !important;}\n";
if(!empty($skin->op->noticetext_font)) echo ".alert {font-family:".$skin->op->noticetext_font." !important;}\n";
if(!empty($skin->op->noticetext_size)) echo ".alert {font-size:".$skin->op->noticetext_size." !important;}\n";
if(!empty($skin->op->noticetext_shadow)) echo ".alert {text-shadow:".$skin->op->noticetext_shadow."!important;}\n";
if(!empty($skin->op->noticetext_deco)) echo ".alert {text-decoration:".$skin->op->noticetext_deco."!important;}\n";
if(!empty($skin->op->noticetext_weight)) echo ".alert {font-weight:".$skin->op->noticetext_weight."!important;}\n";


if(!empty($skin->op->topm_color)) echo ".top_font, .pagination_top a{color:".$skin->op->topm_color." !important;}\n";
if(!empty($skin->op->topm_size)) echo ".top_font, .pagination_top a{font-size:".$skin->op->topm_size." !important;}\n";
if(!empty($skin->op->topm_font)) echo ".top_font, .pagination_top a{font-family:".$skin->op->topm_font." !important;}\n";
if(!empty($skin->op->point_color3)) echo ".pagination_top ul > .active > a, .pagination_top ul > .active > span {color:".$skin->op->point_color3." !important;}\n";
if(!empty($skin->op->point_color5)) echo ".pagination_top ul > .active > a, .pagination_top ul > .active > span {background-color:".$skin->op->point_color5." !important;}\n";

if(!empty($skin->op->topm_border_color)) echo ".topmtex, .input-pass {border:".$skin->op->topm_border_color." !important;}\n";
if(!empty($skin->op->topm_border_type)) echo ".topmtex, .input-pass {border-style:".$skin->op->topm_border_type." !important;}\n";
if(!empty($skin->op->topm_ip_font_color)) echo ".topmtex, .sm-font, .input-pass {color:".$skin->op->topm_ip_font_color." !important;}\n";
if(!empty($skin->op->topm_ip_background_color)&&(empty($skin->op->topm_ip_background_alpha)||empty($skin->op->topm_ip_background_color_R)||empty($skin->op->topm_ip_background_color_G)||empty($skin->op->topm_ip_background_color_B))) echo ".topmtex, .input-pass {background-color:".$skin->op->topm_ip_background_color." !important;}\n";
if(!empty($skin->op->topm_ip_background_alpha)&&!empty($skin->op->topm_ip_background_color_R)&&!empty($skin->op->topm_ip_background_color_G)&&!empty($skin->op->topm_ip_background_color_B)) echo ".topmtex, .input-pass{background-color:rgba(".$skin->op->topm_ip_background_color_R.",".$skin->op->topm_ip_background_color_G.",".$skin->op->topm_ip_background_color_B.",".$skin->op->topm_ip_background_alpha.") !important;}\n";

if(!empty($skin->op->table_border_radius)) echo ".user_table_border_radius {overflow:hidden;border-collapse:separate ;*border-collapse:collapse;-webkit-border-radius:".$skin->op->table_border_radius." !important;-moz-border-radius:".$skin->op->table_border_radius." !important;border-radius:".$skin->op->table_border_radius." !important;}\n";
if(!empty($skin->op->table_border_size)) echo ".user_table_border_size {border:".$skin->op->table_border_size." !important;}\n";
if(!empty($skin->op->table_border_type)) echo ".user_table_border_type {border-style:".$skin->op->table_border_type." !important;}\n";
if(!empty($skin->op->table_border_color)) echo ".user_table_border_color {border-color:".$skin->op->table_border_color." !important; -webkit-box-shadow:inset 0px 0px 0px 0px rgba(0, 0, 0, 0) !important;-moz-box-shadow:inset 0px 0px 0px 0px rgba(0, 0, 0, 0) !important;box-shadow:inset 0px 0px 0px 0px rgba(0, 0, 0, 0) !important;}\n";
if(!empty($skin->op->table_border_size) || !empty($skin->op->table_border_type) || !empty($skin->op->table_border_color)) echo ".log th,td{border-left:0px !important;}";
if(!empty($skin->op->table_inner_border_size)) echo ".user_table_inner_border_top_size {border-top:".$skin->op->table_inner_border_size." !important;}\n";
if(!empty($skin->op->table_inner_border_size)) echo ".user_table_inner_border_left_size {border-left:".$skin->op->table_inner_border_size." !important;}\n";
if(!empty($skin->op->table_inner_border_type)) echo ".user_table_inner_border_top_type {border-top-style:".$skin->op->table_inner_border_type." !important;}\n";
if(!empty($skin->op->table_inner_border_type)) echo ".user_table_inner_border_left_type {border-left-style:".$skin->op->table_inner_border_type." !important;}\n";
if(!empty($skin->op->table_inner_border_color)) echo ".user_table_inner_border_color {border-color:".$skin->op->table_inner_border_color." !important; -webkit-box-shadow:inset 0px 0px 0px 0px rgba(0, 0, 0, 0) !important;-moz-box-shadow:inset 0px 0px 0px 0px rgba(0, 0, 0, 0) !important;box-shadow:inset 0px 0px 0px 0px rgba(0, 0, 0, 0) !important;}\n";

if(!empty($skin->op->point_color1)) {$skin->op->secret_icon="<font color=".$skin->op->point_color1.">".$skin->op->secret_icon."</font>";$skin->op->msecret_icon="<font color=".$skin->op->point_color1.">".$skin->op->msecret_icon."</font>"; }
if(!empty($skin->op->point_color4)) {$skin->op->secret_icon_self="<font color=".$skin->op->point_color4.">".$skin->op->secret_icon_self."</font>"; }
if(!empty($skin->op->point_color2)) {$skin->op->more_icon="<font color=".$skin->op->point_color2.">".$skin->op->more_icon."</font>"; }

if(!empty($skin->op->table_background_color)&&(empty($skin->op->table_background_alpha)||empty($skin->op->table_background_color_R)||empty($skin->op->table_background_color_G)||empty($skin->op->table_background_color_B))) echo ".user_table_background_color {background-color:".$skin->op->table_background_color." !important;}\n";
if(!empty($skin->op->table_background_alpha)&&!empty($skin->op->table_background_color_R)&&!empty($skin->op->table_background_color_G)&&!empty($skin->op->table_background_color_B)) echo ".user_table_background_color {background-color:rgba(".$skin->op->table_background_color_R.",".$skin->op->table_background_color_G.",".$skin->op->table_background_color_B.",".$skin->op->table_background_alpha.") !important;}\n";
if(!empty($skin->op->lognum_color)) echo ".recolor {color:".$skin->op->lognum_color." !important;}\n";
if(!empty($skin->op->lognum_font)) echo ".recolor {font-family:".$skin->op->lognum_font." !important;}\n";
if(!empty($skin->op->lognum_size)) echo ".recolor {font-size:".$skin->op->lognum_size." !important;}\n";
if(!empty($skin->op->lognum_shadow)) echo ".recolor {text-shadow:".$skin->op->lognum_shadow."!important;}\n";
if(!empty($skin->op->lognum_deco)) echo ".recolor {text-decoration:".$skin->op->lognum_deco."!important;}\n";
if(!empty($skin->op->lognum_weight)) echo ".recolor {font-weight:".$skin->op->lognum_weight."!important;}\n";
if(!empty($skin->op->loginfo_color)) echo ".nonsize {color:".$skin->op->loginfo_color." !important;}\n";
if(!empty($skin->op->loginfo_font)) echo ".nonsize {font-family:".$skin->op->loginfo_font." !important;}\n";
if(!empty($skin->op->loginfo_size)) echo ".nonsize {font-size:".$skin->op->loginfo_size." !important;}\n";
if(!empty($skin->op->loginfo_shadow)) echo ".nonsize {text-shadow:".$skin->op->loginfo_shadow."!important;}\n";
if(!empty($skin->op->loginfo_deco)) echo ".nonsize {text-decoration:".$skin->op->loginfo_deco."!important;}\n";
if(!empty($skin->op->loginfo_weight)) echo ".nonsize {font-weight:".$skin->op->loginfo_weight."!important;}\n";

if(!empty($skin->op->pic_background_color)&&(empty($skin->op->pic_background_alpha)||empty($skin->op->pic_background_color_R)||empty($skin->op->pic_background_color_G)||empty($skin->op->pic_background_color_B))) echo ".user_pic_background_color {background-color:".$skin->op->pic_background_color." !important;}\n";
if(!empty($skin->op->pic_background_alpha)&&!empty($skin->op->pic_background_color_R)&&!empty($skin->op->pic_background_color_G)&&!empty($skin->op->pic_background_color_B)) echo ".user_pic_background_color {background-color:rgba(".$skin->op->pic_background_color_R.",".$skin->op->pic_background_color_G.",".$skin->op->pic_background_color_B.",".$skin->op->pic_background_alpha.") !important;}\n";
if(!empty($skin->op->log_align)) echo ".user_table_pic_etc, .user_table_pic_etc>p {text-align:".$skin->op->log_align." !important;}\n";
if(!empty($skin->op->logtext_align)) echo ".logtext_align>p {text-align:".$skin->op->logtext_align." !important;}\n";
if(!empty($skin->op->logtext_color)) echo ".logtext_align {color:".$skin->op->logtext_color." !important;}\n";
if(!empty($skin->op->logtext_font)) echo ".logtext_align {font-family:".$skin->op->logtext_font." !important;}\n";
if(!empty($skin->op->logtext_size)) echo ".logtext_align {font-size:".$skin->op->logtext_size." !important;}\n";
if(!empty($skin->op->logtext_shadow)) echo ".logtext_align {text-shadow:".$skin->op->logtext_shadow."!important;}\n";
if(!empty($skin->op->logtext_deco)) echo ".logtext_align {text-decoration:".$skin->op->logtext_deco."!important;}\n";
if(!empty($skin->op->logtext_weight)) echo ".logtext_align {font-weight:".$skin->op->logtext_weight."!important;}\n";


/*로그 옵션*/
if(!empty($skin->op->logop_background_color)&&(empty($skin->op->logop_background_alpha)||empty($skin->op->logop_background_color_R)||empty($skin->op->logop_background_color_G)||empty($skin->op->logop_background_color_B))) echo ".logopt {background-color:".$skin->op->logop_background_color." !important;}\n";
if(!empty($skin->op->logop_background_alpha)&&!empty($skin->op->logop_background_color_R)&&!empty($skin->op->logop_background_color_G)&&!empty($skin->op->logop_background_color_B)) echo ".logopt {background-color:rgba(".$skin->op->logop_background_color_R.",".$skin->op->logop_background_color_G.",".$skin->op->logop_background_color_B.",".$skin->op->logop_background_alpha.") !important;}\n";
if(!empty($skin->op->logop_border_color)) echo ".logopt {border:".$skin->op->logop_border_color." !important;}\n";
if(!empty($skin->op->logop_border_type)) echo ".logopt {border-style:".$skin->op->logop_border_type." !important;}\n";

/*로그 정보*/
if(!empty($skin->op->logopinp_border_color)) echo ".logopip,.logopip_pass {border:".$skin->op->logopinp_border_color." !important;}\n";
if(!empty($skin->op->logopinp_border_type)) echo ".logopip,.logopip_pass {border-style:".$skin->op->logopinp_border_type." !important;}\n";
if(!empty($skin->op->logopinp_font_color)) echo ".logopip,.logop-font,.logopip_pass {color:".$skin->op->logopinp_font_color." !important;}\n";
if(!empty($skin->op->logopinp_background_color)&&(empty($skin->op->logopinp_background_alpha)||empty($skin->op->logopinp_background_color_R)||empty($skin->op->logopinp_background_color_G)||empty($skin->op->logopinp_background_color_B))) echo ".logopip,.logopip_pass {background-color:".$skin->op->logopinp_background_color." !important;}\n";
if(!empty($skin->op->logopinp_background_alpha)&&!empty($skin->op->logopinp_background_color_R)&&!empty($skin->op->logopinp_background_color_G)&&!empty($skin->op->logopinp_background_color_B)) echo ".logopip,.logopip_pass {background-color:rgba(".$skin->op->logopinp_background_color_R.",".$skin->op->logopinp_background_color_G.",".$skin->op->logopinp_background_color_B.",".$skin->op->logopinp_background_alpha.") !important;}\n";

/* 리플 테이블 */
if(!empty($skin->op->reply_background_color)&&(empty($skin->op->reply_background_alpha)||empty($skin->op->reply_background_color_R)||empty($skin->op->reply_background_color_G)||empty($skin->op->reply_background_color_B))) echo ".user_reply_background_color {background-color:".$skin->op->reply_background_color." !important;}\n";
if(!empty($skin->op->reply_background_alpha)&&!empty($skin->op->reply_background_color_R)&&!empty($skin->op->reply_background_color_G)&&!empty($skin->op->reply_background_color_B)) echo ".user_reply_background_color {background-color:rgba(".$skin->op->reply_background_color_R.",".$skin->op->reply_background_color_G.",".$skin->op->reply_background_color_B.",".$skin->op->reply_background_alpha.") !important;}\n";

if(!empty($skin->op->rename_color)) echo ".name {color:".$skin->op->rename_color." !important;}\n"; /*작성자명*/
if(!empty($skin->op->rename_font)) echo ".name {font-family:".$skin->op->rename_font." !important;}\n";
if(!empty($skin->op->rename_size)) echo ".name, blockquote>p {font-size:".$skin->op->rename_size." !important;}\n";
if(!empty($skin->op->rename_shadow)) echo ".name {text-shadow:".$skin->op->rename_shadow."!important;}\n";
if(!empty($skin->op->rename_deco)) echo ".name {text-decoration:".$skin->op->rename_deco."!important;}\n";
if(!empty($skin->op->rename_weight)) echo ".name {font-weight:".$skin->op->rename_weight."!important;}\n";

if(!empty($skin->op->retime_color)) echo ".cmt_datef {color:".$skin->op->retime_color." !important;}\n"; /*리플 시간이랑 이후 아이콘 사이즈/글씨체 픽용*/
if(!empty($skin->op->retime_font)) echo ".cmt_datef, .cmt_datefre {font-family:".$skin->op->retime_font." !important;}\n";
if(!empty($skin->op->retime_size)) echo ".cmt_datef, .cmt_datefre {font-size:".$skin->op->retime_size." !important;}\n";

if(!empty($skin->op->reply_text_color)) echo ".com_reclass {color:".$skin->op->reply_text_color." !important;}\n"; /*리플*/
if(!empty($skin->op->reply_text_font)) echo ".com_reclass,.user_reply_text_color {font-family:".$skin->op->reply_text_font." !important;}\n";
if(!empty($skin->op->reply_text_size)) echo ".com_reclass,.user_reply_text_color, .comar {font-size:".$skin->op->reply_text_size." !important;}\n";
if(!empty($skin->op->reply_text_shadow)) echo ".com_reclass {text-shadow:".$skin->op->reply_text_shadow."!important;}\n";
if(!empty($skin->op->reply_text_deco)) echo ".com_reclass {text-decoration:".$skin->op->reply_text_deco."!important;}\n";
if(!empty($skin->op->reply_text_weight)) echo ".com_reclass {font-weight:".$skin->op->reply_text_weight."!important;}\n";
if(!empty($skin->op->rereply_bar_color)) echo ".user_rereply_bar_color {border-left:".$skin->op->rereply_bar_width." solid ".$skin->op->rereply_bar_color." !important;}\n";

if(!empty($skin->op->memo_color)) echo ".cmt_memo {color:".$skin->op->memo_color." !important;}\n"; /*메모*/
if(!empty($skin->op->memo_font)) echo ".cmt_memo {font-family:".$skin->op->memo_font." !important;}\n";
if(!empty($skin->op->memo_size)) echo ".cmt_memo {font-size:".$skin->op->memo_size." !important;}\n";
if(!empty($skin->op->memo_shadow)) echo ".cmt_memo {text-shadow:".$skin->op->memo_shadow."!important;}\n";
if(!empty($skin->op->memo_deco)) echo ".cmt_memo {text-decoration:".$skin->op->memo_deco."!important;}\n";
if(!empty($skin->op->memo_weight)) echo ".cmt_memo {font-weight:".$skin->op->memo_weight."!important;}\n";

if(!empty($skin->op->memo_background_color)&&(empty($skin->op->memo_background_alpha)||empty($skin->op->memo_background_color_R)||empty($skin->op->memo_background_color_G)||empty($skin->op->memo_background_color_B))) echo ".cmt_memo {background-color:".$skin->op->memo_background_color." !important;padding:2px 2px !important;}\n";
if(!empty($skin->op->memo_background_alpha)&&!empty($skin->op->memo_background_color_R)&&!empty($skin->op->memo_background_color_G)&&!empty($skin->op->memo_background_color_B)) echo ".cmt_memo {background-color:rgba(".$skin->op->memo_background_color_R.",".$skin->op->memo_background_color_G.",".$skin->op->memo_background_color_B.",".$skin->op->memo_background_alpha.") !important; !important;padding:2px 2px !important;}\n";

if(!empty($skin->op->comf_color)) echo ".com-mfont {color:".$skin->op->comf_color." !important;}\n";
if(!empty($skin->op->comf_font)) echo ".com-mfont {font-family:".$skin->op->comf_font." !important;}\n";
if(!empty($skin->op->comf_size)) echo ".com-mfont {font-size:".$skin->op->comf_size." !important;}\n";
if(!empty($skin->op->comf_shadow)) echo ".com-mfont {text-shadow:".$skin->op->comf_shadow."!important;}\n";
if(!empty($skin->op->comf_deco)) echo ".com-mfont {text-decoration:".$skin->op->comf_deco."!important;}\n";
if(!empty($skin->op->comf_weight)) echo ".com-mfont {font-weight:".$skin->op->comf_weight."!important;}\n";

if(!empty($skin->op->comfinp_border_color)) echo ".cinput-np,.cinput {border:".$skin->op->comfinp_border_color." !important;}\n";
if(!empty($skin->op->comfinp_font_color)) echo ".cinput-np,.cinput {color:".$skin->op->comfinp_font_color." !important;}\n";
if(!empty($skin->op->comfinp_border_type)) echo ".cinput-np,.cinput {border-style:".$skin->op->comfinp_border_type." !important;}\n";
if(!empty($skin->op->comfinp_background_color)&&empty($skin->op->comfinp_background_alpha)) echo ".cinput-np,.cinput {background-color:".$skin->op->comfinp_background_color." !important;}\n";
if(!empty($skin->op->comfinp_background_alpha)||!empty($skin->op->comfinp_background_color_R)&&!empty($skin->op->comfinp_background_color_G)&&!empty($skin->op->comfinp_background_color_B)) echo ".cinput-np,.cinput {background-color:rgba(".$skin->op->comfinp_background_color_R.",".$skin->op->comfinp_background_color_G.",".$skin->op->comfinp_background_color_B.",".$skin->op->comfinp_background_alpha.") !important;}\n";


if(!empty($skin->op->replyip_color)) echo ".cmt_ip {color:".$skin->op->replyip_color." !important;}\n";
if(!empty($skin->op->replyip_font)) echo ".cmt_ip {font-family:".$skin->op->replyip_font." !important;}\n";
if(!empty($skin->op->replyip_size)) echo ".cmt_ip {font-size:".$skin->op->replyip_size." !important;}\n";

if(!empty($skin->op->reply_bmargin)) echo ".comar {margin-bottom:".$skin->op->reply_bmargin." !important;}\n";

if(!empty($skin->op->topm_bt_font_color)) echo ".loadbtn_plus, .loadbtn_add {color:".$skin->op->topm_bt_font_color." !important;}\n";
if(!empty($skin->op->topm_bt_weight)) echo ".loadbtn_plus, .loadbtn_add {font-weight:".$skin->op->topm_bt_weight." !important;}\n";
if(!empty($skin->op->topm_bt_background_color)&&empty($skin->op->topm_bt_background_alpha)) echo ".loadbtn_plus, .loadbtn_add  {background-color:".$skin->op->topm_bt_background_color." !important;}\n";
if(!empty($skin->op->topm_bt_background_alpha)||!empty($skin->op->topm_bt_background_color_R)&&!empty($skin->op->topm_bt_background_color_G)&&!empty($skin->op->topm_bt_background_color_B)) echo ".loadbtn_plus, .loadbtn_add {background-color:rgba(".$skin->op->topm_bt_background_color_R.",".$skin->op->topm_bt_background_color_G.",".$skin->op->topm_bt_background_color_B.",".$skin->op->topm_bt_background_alpha.") !important;}\n";



if(!empty($skin->op->secretboard_wcolor)) echo ".secretboard_word {color:".$skin->op->secretboard_wcolor." !important;}\n";
if(!empty($skin->op->secretboard_wsize)) echo ".secretboard_word {font-size:".$skin->op->secretboard_wsize." !important;}\n";
if(!empty($skin->op->secretboard_wbold)) echo ".secretboard_word {font-weight:".$skin->op->secretboard_wbold." !important;}\n";
if(!empty($skin->op->secretboard_wfam)) echo ".secretboard_word {font-family:".$skin->op->secretboard_wfam." !important;}\n";
if(!empty($skin->op->secretboard_wbg)&&empty($skin->op->secretboard_wbga)) echo ".secretboard_word {background-color:".$skin->op->secretboard_wbg." !important;}\n";
if(!empty($skin->op->secretboard_wbga)||!empty($skin->op->secretboard_wbgr)&&!empty($skin->op->secretboard_wbgg)&&!empty($skin->op->secretboard_wbgb)) echo ".secretboard_word {background-color:rgba(".$skin->op->secretboard_wbgr.",".$skin->op->secretboard_wbgg.",".$skin->op->secretboard_wbgb.",".$skin->op->secretboard_wbga.") !important;}\n";
if(!empty($skin->op->secretboard_wbcr)) echo ".secretboard_word {border:".$skin->op->secretboard_wbcr." !important;}\n";
if(!empty($skin->op->secretboard_wbty)) echo ".secretboard_word {border-style:".$skin->op->secretboard_wbty." !important;}\n";
if(!empty($skin->op->secretboard_wshadow)) echo ".secretboard_word {text-shadow:".$skin->op->secretboard_wshadow."!important;}\n";
if(!empty($skin->op->secretboard_wdeco)) echo ".secretboard_word {text-decoration:".$skin->op->secretboard_wdeco."!important;}\n";
if(!empty($skin->op->secretboard_wrad)) echo ".secretboard_word {-webkit-border-radius:".$skin->op->secretboard_wrad." !important;-moz-border-radius:".$skin->op->secretboard_wrad." !important;border-radius:".$skin->op->secretboard_wrad." !important;}\n";


if(!empty($skin->op->secretboard_passcolor)) echo ".secretboard_pass {color:".$skin->op->secretboard_passcolor." !important;}\n";
if(!empty($skin->op->secretboard_passbcr)) echo ".secretboard_pass {border:".$skin->op->secretboard_passbcr." !important;}\n";
if(!empty($skin->op->secretboard_passbty)) echo ".secretboard_pass {border-style:".$skin->op->secretboard_passbty." !important;}\n";
if(!empty($skin->op->secretboard_passwidth)) echo ".secretboard_pass {width:".$skin->op->secretboard_passwidth." !important;}\n";
if(!empty($skin->op->secretboard_passrad)) echo ".secretboard_pass {-webkit-border-radius:".$skin->op->secretboard_passrad." !important;-moz-border-radius:".$skin->op->secretboard_passrad." !important;border-radius:".$skin->op->secretboard_passrad." !important;}\n";
if(!empty($skin->op->secretboard_passbg)&&empty($skin->op->secretboard_passbgr)) echo ".secretboard_pass {background-color:".$skin->op->secretboard_passbg." !important;}\n";
if(!empty($skin->op->secretboard_passbgr)||!empty($skin->op->secretboard_passbgr)&&!empty($skin->op->secretboard_passbgg)&&!empty($skin->op->secretboard_passbgb)) echo ".secretboard_pass {background-color:rgba(".$skin->op->secretboard_passbgr.",".$skin->op->secretboard_passbgg.",".$skin->op->secretboard_passbgb.",".$skin->op->secretboard_passbga.") !important;}\n";

if(!empty($skin->op->secretboard_gocolor)) echo ".secretboard_join {color:".$skin->op->secretboard_gocolor." !important;}\n";
if(!empty($skin->op->secretboard_gosize)) echo ".secretboard_join {font-size:".$skin->op->secretboard_gosize." !important;}\n";
if(!empty($skin->op->secretboard_gobold)) echo ".secretboard_join {font-weight:".$skin->op->secretboard_gobold." !important;}\n";
if(!empty($skin->op->secretboard_gofam)) echo ".secretboard_join {font-family:".$skin->op->secretboard_gofam." !important;}\n";
if(!empty($skin->op->secretboard_gorad)) echo ".secretboard_join {-webkit-border-radius:".$skin->op->secretboard_gorad." !important;-moz-border-radius:".$skin->op->secretboard_gorad." !important;border-radius:".$skin->op->secretboard_gorad." !important;}\n";
if(!empty($skin->op->secretboard_gobg)&&empty($skin->op->secretboard_gobga)) echo ".secretboard_join {background-color:".$skin->op->secretboard_gobg." !important;}\n";
if(!empty($skin->op->secretboard_gobga)||!empty($skin->op->secretboard_gobgr)&&!empty($skin->op->secretboard_gobgg)&&!empty($skin->op->secretboard_gobgb)) echo ".secretboard_join {background-color:rgba(".$skin->op->secretboard_gobgr.",".$skin->op->secretboard_gobgg.",".$skin->op->secretboard_gobgb.",".$skin->op->secretboard_gobga.") !important;}\n";
if(!empty($skin->op->secretboard_gobcr)) echo ".secretboard_join {border:".$skin->op->secretboard_gobcr." !important;}\n";
if(!empty($skin->op->secretboard_gobty)) echo ".secretboard_join {border-style:".$skin->op->secretboard_gobty." !important;}\n";
if(!empty($skin->op->secretboard_goshadow)) echo ".secretboard_join {text-shadow:".$skin->op->secretboard_goshadow."!important;}\n";
if(!empty($skin->op->secretboard_godeco)) echo ".secretboard_join {text-decoration:".$skin->op->secretboard_godeco."!important;}\n";

if($skin->op->scrollbar_on=="on") {
if(!empty($skin->op->scrollbar_width)) {echo "::-webkit-scrollbar:horizontal {height:".$skin->op->scrollbar_width." !important;} ::-webkit-scrollbar:vertical {width:".$skin->op->scrollbar_width." !important;}\n";} 
if(!empty($skin->op->scrollbar_height)) { echo "::-webkit-scrollbar-button {height:".$skin->op->scrollbar_height." !important;width:".$skin->op->scrollbar_height." !important;}\n";}
if(!empty($skin->op->scrollbar_btbc)) echo "::-webkit-scrollbar-button {border:".$skin->op->scrollbar_btbc." !important;}\n";
if(!empty($skin->op->scrollbar_btbty)) echo "::-webkit-scrollbar-button {border-style:".$skin->op->scrollbar_btbty." !important;}\n";
if(!empty($skin->op->scrollbar_btrad)) echo "::-webkit-scrollbar-button {-webkit-border-radius:".$skin->op->scrollbar_btrad." !important;border-radius:".$skin->op->scrollbar_btrad." !important;}\n";
if(!empty($skin->op->scrollbar_btbg)&&empty($skin->op->scrollbar_btbga)) echo "::-webkit-scrollbar-button {background-color:".$skin->op->scrollbar_btbg." !important;}\n";
if(!empty($skin->op->scrollbar_btbga)||!empty($skin->op->scrollbar_btbgr)&&!empty($skin->op->scrollbar_btbgg)&&!empty($skin->op->scrollbar_btbgb)) echo "::-webkit-scrollbar-button {background-color:rgba(".$skin->op->scrollbar_btbgr.",".$skin->op->scrollbar_btbgg.",".$skin->op->scrollbar_btbgb.",".$skin->op->scrollbar_btbga.") !important;}\n";

if(!empty($skin->op->scrollbar_thumbbc)) echo "::-webkit-scrollbar-thumb {border:".$skin->op->scrollbar_thumbbc." !important;}\n";
if(!empty($skin->op->scrollbar_thumbbty)) echo "::-webkit-scrollbar-thumb {border-style:".$skin->op->scrollbar_thumbbty." !important;}\n";
if(!empty($skin->op->scrollbar_thumbrad)) echo "::-webkit-scrollbar-thumb {-webkit-border-radius:".$skin->op->scrollbar_thumbrad." !important;border-radius:".$skin->op->scrollbar_thumbrad." !important;}\n";
if(!empty($skin->op->scrollbar_thumbbg)&&empty($skin->op->scrollbar_thumbbga)) echo "::-webkit-scrollbar-thumb {background-color:".$skin->op->scrollbar_thumbbg." !important;}\n";
if(!empty($skin->op->scrollbar_thumbbga)||!empty($skin->op->scrollbar_thumbbgr)&&!empty($skin->op->scrollbar_thumbbgg)&&!empty($skin->op->scrollbar_thumbbgb)) echo "::-webkit-scrollbar-thumb {background-color:rgba(".$skin->op->scrollbar_thumbbgr.",".$skin->op->scrollbar_thumbbgg.",".$skin->op->scrollbar_thumbbgb.",".$skin->op->scrollbar_thumbbga.") !important;}\n";

if(!empty($skin->op->scrollbar_trackbc)) echo "::-webkit-scrollbar-track {border:".$skin->op->scrollbar_trackbc." !important;}\n";
if(!empty($skin->op->scrollbar_trackbty)) echo "::-webkit-scrollbar-track {border-style:".$skin->op->scrollbar_trackbty." !important;}\n";
if(!empty($skin->op->scrollbar_trackbg)&&empty($skin->op->scrollbar_trackbga)) echo "::-webkit-scrollbar-track  {background-color:".$skin->op->scrollbar_trackbg." !important;}\n";
if(!empty($skin->op->scrollbar_trackbga)||!empty($skin->op->scrollbar_trackbgr)&&!empty($skin->op->scrollbar_trackbgg)&&!empty($skin->op->scrollbar_trackbgb)) echo "::-webkit-scrollbar-track {background-color:rgba(".$skin->op->scrollbar_trackbgr.",".$skin->op->scrollbar_trackbgg.",".$skin->op->scrollbar_trackbgb.",".$skin->op->scrollbar_trackbga.") !important;}\n";

echo "::-webkit-scrollbar  {background:rgba(0,0,0,0);}::-webkit-scrollbar-corner,::-webkit-resizer {background:transparent;}::-webkit-scrollbar:window-inactive,::-webkit-scrollbar-track:window-inactive,::-webkit-scrollbar-button:window-inactive {background:transparent;outline:0;border:0;border-radius:0;}::-webkit-scrollbar-thumb:window-inactive {background:rgba(0,0,0,0.15);outline:0;border:0;border-radius:0;}\n";
}
?>
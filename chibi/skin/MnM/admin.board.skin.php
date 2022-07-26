<?php
if(!defined("__CHIBI__")) exit();
$query = select_skin($cid,$chibi_conn);
$skin = (object) mysqli_fetch_array($query);
$skin->op = unserialize($skin->op);
if(get_magic_quotes_gpc()) $skin->op = array_map('stripslashes', $skin->op);
$skin->op = (object) $skin->op;
if(bbs_permission($member->permission,$skin->cid)=="true"){

if (!empty($skin->op->strong_point)) { 
$skin->op->renamewr_color=$skin->op->strong_point;
$skin->op->point_color1=$skin->op->strong_point;
$skin->op->point_color4=$skin->op->strong_point;
$skin->op->strong_point="";
}
if (!empty($skin->op->normal_point)) { 
$skin->op->table_border_color=$skin->op->normal_point;
$skin->op->rereply_bar_color=$skin->op->normal_point;
$skin->op->table_inner_border_color=$skin->op->normal_point;
$skin->op->normal_point="";
}
if (!empty($skin->op->weak_point)) { 
$skin->op->link_color=$skin->op->weak_point;
$skin->op->comf_color=$skin->op->weak_point;
$skin->op->weak_point="";
}
if (!empty($skin->op->vweak_point)) { 
$skin->op->hover_color=$skin->op->vweak_point;
$skin->op->topm_bt_background_color=$skin->op->vweak_point;
$skin->op->point_color3=$skin->op->vweak_point;
$skin->op->table_background_color=$skin->op->vweak_point;
$skin->op->memo_background_color=$skin->op->vweak_point;
$skin->op->vweak_point="";
}
?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="../skin/MnM/colpick/js/colpick.js" type="text/javascript"></script>
<script src="../skin/MnM/colorbox/jquery.colorbox.js"></script>
<link rel="stylesheet" href="../skin/MnM/colpick/css/colpick.css" type="text/css"/>
<link rel="stylesheet" href="../skin/MnM/colorbox/colorbox.css" />
<script type="text/javascript">
$(document).ready(function() {

$('#picker').colpick({
	layout:'rgbhex',
	colorScheme:'dark',
	onChange:function(hsb,hex,rgb,el,bySetColor) {
		$(el).css('border-color','#'+hex);
		if(!bySetColor) $(el).val(' #'+hex+' (R : '+rgb.r+' G : '+rgb.g+' B : '+rgb.b+')');
	}
}).keyup(function(){
	$(this).colpickSetColor(this.value);
});
				$('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
				$(".iframe").colorbox({iframe:true, width:"80%", height:"95%"});

});
</script>
<style type="text/css">
.selecelement, .selecelement>td {
background-color:#f0f3f5 !important;
}

#picker {
	margin-top:5px;
	font-size:9pt;
	font-familt:verdana;
	width:240px;
	height:15px !important;
	border-right:30px solid #28c5ff;
	line-height:20px;
}

.pickerdiv{position:fixed;right:5px;top:40px;}
@media (max-width: 979px) {
.pickerdiv{position:fixed;right:5px;top:0px;}
}
</style>
<form class="form-horizontal" method="post" action="admin.php?cAct=adminSkinSetupOk">
<input name="skin" type="hidden" value="<?php echo $skin->skin_name;?>">
<input name="op[bootstrap]" type="hidden" value="off">
<input name="op[author]" type="hidden" value='<a href="http://rammenta.ncity.net" target="_blank">MnM</a>'>
<table id="board-create" class="table table-bordered">
<thead>
<tr>
<th colspan="2" class="span12" id="real_top">
<a href="admin.php?cAct=adminSkinTpl&cid=<?=$cid?>&skin=<?=$skin->skin_name?>" class="btn offset4 span4">스킨 디자인 수정</a>
</th>
</tr>
<tr>
<th colspan="2" class="span12">
<pre>
스킨 이름	: MnM skin
제작자		: MnM <a href="http://rammenta.ncity.net/bbs/zboard.php?id=skinqna" target="_blank">[QnA]</a>
버젼		: 1.10.8.1
</pre>
</th>
</tr>
<thead>
<tbody>
<tr>
<th colspan="2" class="span12" id="nbb_quick" bgcolor="#d0e9c6">
<b>!! READ ME !! <font color="white">▷</font></b> <a class="iframe" href="http://rammenta.ncity.net/wordpress/?p=271" title="스킨 통합 설명서"><abbr title="스킨 통합 설명서" class="initialism">[Manual]</abbr></a>
<a class="retina" href="http://rammenta.ncity.net/wordpress/wp-content/uploads/2015/03/manual_base.png" title="스킨 설정 페이지 기본 설명서"><abbr title="스킨 설정 페이지 기본 기능 설명서" class="initialism">[1]</abbr></a>
<a class="retina" href="http://rammenta.ncity.net/wordpress/wp-content/uploads/2015/03/colorpicker.png" title="Color picker란?"><abbr title="Color picker 사용 설명서" class="initialism">[2]</abbr></a></br>
<iframe src="http://rammenta.ncity.net/skin_release/" style="height:55px;width:100%;" MARGINWIDTH="0" MARGINHEIGHT="0" FRAMEBORDER="0" scrolling="yes"></iframe>

</th>
</tr>

<tr>
<th colspan="2" class="span12" id="nbb_quick">
스킨 디자인 퀵 설정
<a class="retina" href="http://rammenta.ncity.net/wordpress/wp-content/uploads/2015/03/quicksetup.png" title="스킨 디자인 퀵 설정이란?"><abbr title="스킨 디자인 퀵 설정 설명서" class="initialism">HELP!</abbr></a> 
- <font color=28c5ff><b>입력 시 기존 설정이 삭제되므로 퀵 설정으로 스킨 디자인 변경 외에는 입력 X</b></font>
</th>
</tr>
<tr>
<td class="span3 td-left">
<p>진한 포인트 색
<a class="retina" href="http://rammenta.ncity.net/wordpress/wp-content/uploads/2015/03/strongpoint.png" title="스킨 디자인 퀵 설정 - 진한 포인트 색상"><abbr title="진한 포인트 색상 영역" class="initialism">HELP!</abbr></a></p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[strong_point]" placeholder="진한 포인트 색상"> 
<p class="help-inline">현재 사용 중인 진한 포인트 색 <code><?php echo $skin->op->point_color1;?></code></p>
<p class="help-block">작가글, 비밀글 알림 색상으로 밝은 배경 기준 진한 포인트 색상.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>중간 포인트 색 
<a class="retina" href="http://rammenta.ncity.net/wordpress/wp-content/uploads/2015/03/normalpoint.png" title="스킨 디자인 퀵 설정 - 중간 포인트 색상"><abbr title="중간 포인트 색상 영역" class="initialism">HELP!</abbr></a></p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[normal_point]" placeholder="중간 포인트 색상">
<p class="help-inline">현재 사용 중인 중간 포인트 색 <code><?php echo $skin->op->table_border_color;?></code></p>
<p class="help-block">테이블 외곽, 내곽선, 리리플 바 색상으로 밝은 배경 기준 기본 포인트 색상.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>연한 포인트 색 
<a class="retina" href="http://rammenta.ncity.net/wordpress/wp-content/uploads/2015/03/weakpoint.png" title="스킨 디자인 퀵 설정 - 연한 포인트 색상"><abbr title="연한 포인트 색상 영역" class="initialism">HELP!</abbr></a></p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[weak_point]" placeholder="연한 포인트 색상">
<p class="help-inline">현재 사용 중인 연한 포인트 색 <code><?php echo $skin->op->link_color;?></code></p>
<p class="help-block">링크, 코멘트 작성 이모티콘 리스트-코멘트 접기 알림 색상으로 밝은 배경 기준 연한 포인트 색상.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>매우 연한 포인트 색 
<a class="retina" href="http://rammenta.ncity.net/wordpress/wp-content/uploads/2015/03/vweakpoint.png" title="스킨 디자인 퀵 설정 - 매우 연한 포인트 색상"><abbr title="매우 연한 포인트 색상 영역" class="initialism">HELP!</abbr></a></p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[vweak_point]" placeholder="매우 연한 포인트 색상">
<p class="help-inline">현재 사용 중인 매우 연한 포인트 색 <code><?php echo $skin->op->hover_color;?></code></p>
<p class="help-block">링크 마우스오버 시 색상, 버튼/메모 배경색, 로그 정보 배경, 현재 페이지 알림 색상으로 밝은 배경 기준 매우 연한 포인트 색상.</p>
</td>
</tr>


<tr>
<th colspan="2" class="span12" id="nbb_skinbase">
스킨 기본 설정
</th>
</tr>
<tr>
<td class="span3 td-left">
<p>게시판 ID</p>
</td>
<td class="span9 td-right">
<input id="cid" class="input-xlarge" type="text" placeholder="게시판 ID"  value="<?php echo $cid;?>" disabled >
<input name="cid" type="hidden" value="<?php echo $cid;?>">
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>기본 옵션 ON/OFF</p>
</td>
<td class="span9 td-right">
<div class="controls-group"><p>
<label class="checkbox inline">
<input type="checkbox" id="op['onop_chib']" name="op[onop_chib]" value="on" <?php if($skin->op->onop_chib=="on") echo "checked";?>>치비툴 사용
</label>
<label class="checkbox inline">
<input type="checkbox" id="op['onop_mem']" name="op[onop_mem]" value="on" <?php if($skin->op->onop_mem=="on") echo "checked";?>>멤버 기능 사용
</label>
</p></div>
<p class="help-block">
<b>치비툴</b> :: OFF 시 이어 그리기, 상단의 가로x세로 입력창 및 CHIBI 버튼이 제거됩니다. (+로드로 자동 전환)</br>
<b>멤버기능</b> :: OFF 시 로그/리플 멤버 공개 기능, 멤버 로그인, 멤버 가입, 멤버 프로필 기능이 제거됩니다.
</p>
</td>
</tr>
<tr>
<td class="span3 td-left" rowspan="3">
<p>사용 권한 
<a class="retina" href="http://rammenta.ncity.net/wordpress/wp-content/uploads/2015/03/permission.png" title="스킨 기본 설정 - 사용 권한 설명서"><abbr title="사용 권한 설명" class="initialism">HELP!</abbr></a></p>
</td>
<td class="span9 td-right">
<select name="op[onop_upright]">
<option value="all" selected="selected">업로드 권한</option>
<option value="all" <?php if($skin->op->onop_upright=='all') echo 'selected="selected"';?>>누구나</option>
<option value="admin" <?php if($skin->op->onop_upright=='admin') echo 'selected="selected"';?>>관리자</option>
<option value="member" <?php if($skin->op->onop_upright=='member') echo 'selected="selected"';?>>멤버</option>
</select>
<p class="help-inline">이미지 파일/동영상/텍스트 업로드 권한이 제어됩니다. (<b>게시판 설정의 사용권한</b>보다 상위 옵션)</p>
</td></tr><tr><td class="span9 td-right">
<select name="op[onop_reright]">
<option value="all" selected="selected">리플 작성 권한</option>
<option value="all" <?php if($skin->op->onop_reright=='all') echo 'selected="selected"';?>>누구나</option>
<option value="admin" <?php if($skin->op->onop_reright=='admin') echo 'selected="selected"';?>>관리자</option>
<option value="member" <?php if($skin->op->onop_reright=='member') echo 'selected="selected"';?>>멤버</option>
<option value="both" <?php if($skin->op->onop_reright=='both') echo 'selected="selected"';?>>멤버+로그 작성자</option>
<option value="author" <?php if($skin->op->onop_reright=='author') echo 'selected="selected"';?>>로그 작성자</option>
</select>
<p class="help-inline">리플 작성 권한이 제어됩니다. 멤버로 설정할 경우 멤버+관리자</p>
</td></tr><tr><td class="span9 td-right">
<select name="op[onop_rreright]">
<option value="all" selected="selected">리리플 작성 권한</option>
<option value="all" <?php if($skin->op->onop_rreright=='all') echo 'selected="selected"';?>>누구나</option>
<option value="admin" <?php if($skin->op->onop_rreright=='admin') echo 'selected="selected"';?>>관리자</option>
<option value="member" <?php if($skin->op->onop_rreright=='member') echo 'selected="selected"';?>>멤버</option>
<option value="both" <?php if($skin->op->onop_rreright=='both') echo 'selected="selected"';?>>멤버+로그 작성자</option>
<option value="author" <?php if($skin->op->onop_rreright=='author') echo 'selected="selected"';?>>로그 작성자</option>
</select>
<p class="help-inline">리리플 작성 권한이 제어됩니다. 멤버로 설정할 경우 멤버+관리자</p>
</td></tr>
<tr>
<td class="span3 td-left">
<p>로그 리사이즈 너비</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[resize]" placeholder="자동 축소 너비" value="<?php echo $skin->op->resize;?>">
<p class="help-block">그림을 리사이즈 할 너비 값을 지정 할 수 있습니다.(경우에 따라 자동으로 리사이즈 되는 경우도 있습니다.)</p>
</td></tr>
<tr>
<td class="span3 td-left">
<p>로그 자동 접기 높이</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[autoheight]" placeholder="자동 접기 높이" value="<?php echo $skin->op->autoheight;?>">
<p class="help-block">그림을 자동으로 접을 높이 값을 지정 할 수 있습니다. (<b>수동 접기</b> 우선)</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>하단 정렬 로그 너비
<a class="retina" href="http://rammenta.ncity.net/wordpress/wp-content/uploads/2015/03/verticalalignsize.png" title="스킨 기본 설정 - 하단 정렬 로그 너비 설명서"><abbr title="하단 정렬 로그 너비 설명" class="initialism">HELP!</abbr></a></p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[table_down]" placeholder="하단 정렬 너비" value="<?php echo $skin->op->table_down;?>">
<p class="help-block">그림 너비가 지정수치 이상일 경우 코멘트가 그림 하단으로 이동합니다.</p>
</td>
</tr>
<tr class="selecelement">
<td class="span3 td-left">
<p>(선택) 하단 정렬 시 로그 축소 너비 
<a class="retina" href="http://rammenta.ncity.net/wordpress/wp-content/uploads/2015/03/verticalalignsize_re.png" title="스킨 기본 설정 - 하단 정렬 시 로그 축소 너비 기능 설명서"><abbr title="하단 정렬 시 로그 축소 너비 기능 설명" class="initialism">HELP!</abbr></a></p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[vertical_imagew]" placeholder="하단 정렬 이미지 축소 너비" value='<?php echo $skin->op->vertical_imagew;?>'>
<p class="help-block">하단 정렬 된 로그의 축소 너비를 새로 지정 할 수 있습니다. (<b>로그 리사이즈 너비</b>보다 우선 순위)</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>원고 로그 축소 너비 
<a class="retina" href="http://rammenta.ncity.net/wordpress/wp-content/uploads/2015/03/height_100re.png" title="스킨 기본 설정 - 원고 로그 축소 너비 설명서"><abbr title="원고 로그 축소 너비 설명" class="initialism">HELP!</abbr></a></p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[autowidth]" placeholder="원고 로그 축소 너비" value="<?php echo $skin->op->autowidth;?>">
<p class="help-block">원고 로그 축소 너비 값을 지정 할 수 있습니다.</p>
</td>
</tr>


<tr>
<th colspan="2" class="span12" id="nbb_cidbop">
게시판 디자인 기본 설정
</th>
</tr>
<tr>
<td class="span3 td-left">
<p>게시판 너비</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[background_width]" placeholder="게시판 너비" value="<?php echo $skin->op->background_width;?>"  >
<p class="help-inline">(선택) 게시판 너비를 설정할 수 있습니다.예 > 80% : <code>80%</code>, 800px : <code>800px</code><br>
%의 경우 게시판 너비에 상대적으로 적용되며 0-100 사이의 값은 %로 자동 변환됩니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>게시판 배경이미지</br>
- 배경 이미지, 반복 여부, 시작 위치
</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[background_img]" placeholder="배경 이미지" value="<?php echo $skin->op->background_img;?>">
<select name="op[repeat]">
<option value="">반복 옵션</option>
<option value="repeat" <?php if($skin->op->repeat=="repeat") echo "selected"; ?>>반복</option>
<option value="repeat-x" <?php if($skin->op->repeat=="repeat-x") echo "selected"; ?>>수평반복</option>
<option value="repeat-y" <?php if($skin->op->repeat=="repeat-y") echo "selected"; ?>>수직반복</option>
<option value="no-repeat" <?php if($skin->op->repeat=="no-repeat") echo "selected"; ?>>반복없음</option>
<option value="fixed" <?php if($skin->op->repeat=="fixed") echo "selected"; ?>>고정</option>
<select>
<p class="help-inline">게시판 배경이미지 & 반복을 설정할 수 있습니다.</p></br>
<input class="input-xlarge" type="text" name="op[background_position]" placeholder="배경 이미지 시작 위치" value="<?php echo $skin->op->background_position;?>">
<p class="help-inline">(선택 - 기본:좌측상단) 게시판 배경 이미지의 시작 위치를 설정할 수 있습니다. 
</br>예 > 좌측하단 : <code>left bottom</code>, 우측상단 : <code>right top</code></p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>게시판 배경색</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[background_color]" placeholder="게시판 배경색" value="<?php echo $skin->op->background_color;?>"  >
<p class="help-inline">게시판 배경색을 입력하여 주세요. 예 > <code>#ffffff</code></p>
</td>
</tr>



<tr>
<th colspan="2" class="span12" id="nbb_link">
링크 기본 설정
</th>
</tr>
<tr>
<td class="span3 td-left" rowspan="2">
<p>링크 옵션 </br>
- 링크 색상/글씨체/글씨 크기
</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[link_color]" placeholder="링크 색" value="<?php echo $skin->op->link_color;?>"  >
<p class="help-inline">링크 색상을 입력하여 주세요. 예 > <code>#ffffff</code></p></br></br>
<input class="input-xlarge" type="text" name="op[link_font]" placeholder="링크 글씨체" value="<?php echo $skin->op->link_font;?>"  >
<p class="help-inline">(선택 - 기본:돋움) 링크 글씨체를 설정할 수 있습니다. 예 > <code>tahoma,verdana,돋움,바탕</code></p><br/><br/>
<input class="input-xlarge" type="text" name="op[link_size]" placeholder="링크 글씨 크기" value="<?php echo $skin->op->link_size;?>"  >
<p class="help-inline">(선택 - 기본:8pt) 링크 텍스트 크기를 설정할 수 있습니다. 예 > <code>8pt, 12px, 0.8em</code></p>
</td></tr>
<Tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 링크 그림자/밑줄/굵기 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[link_shadow]" placeholder="링크 그림자 옵션" value="<?php echo $skin->op->link_shadow;?>"  >
<p class="help-inline">링크 그림자 옵션을 변경할 수 있습니다. [ text-shadow ] <a href="http://superkts.com/css/text-shadow" target="_blank">[ 해당 옵션 이해를 위한 참고 페이지 ]</a></br>
왼쪽 그림자 시작 위치,위쪽 그림자 시작 위치,그림자 번지기,색상 순서.  예>  <code>1px 1px 2px black</code></p><br/><br/>
<select name="op[link_deco]">
<option value="none">링크 선 설정</option>
<option value="none" <?php if($skin->op->link_deco=='none') echo 'selected="selected"';?>>선 없음</option>
<option value="underline" <?php if($skin->op->link_deco=='underline') echo 'selected="selected"';?>>밑줄</option>
<option value="overline" <?php if($skin->op->link_deco=='overline') echo 'selected="selected"';?>>윗줄</option>
<option value="overline underline" <?php if($skin->op->link_deco=='overline underline') echo 'selected="selected"';?>>윗+밑줄</option>
<option value="line-through" <?php if($skin->op->link_deco=='line-through') echo 'selected="selected"';?>>취소선</option>
</select>
<p class="help-inline">링크 선 설정을 변경할 수 있습니다. [ text-decoration ] </p><br/><br/>
<select name="op[link_weight]">
<option value="normal" selected>링크 텍스트 굵기</option>
<option value="normal" <?php if($skin->op->link_weight=='normal') echo 'selected="selected"';?>>굵기 없음</option>
<option value="bold" <?php if($skin->op->link_weight=='bold') echo 'selected="selected"';?>>굵음</option>
<option value="100" <?php if($skin->op->link_weight=='100') echo 'selected="selected"';?>>100</option>
<option value="900" <?php if($skin->op->link_weight=='900') echo 'selected="selected"';?>>900</option>
</select>
<p class="help-inline">링크 텍스트의 굵기를 변경할 수 있습니다. [ font-weight ]</p>
</div>
</td>
</tr>
<tr>
<td class="span3 td-left" rowspan="2">
<p>링크 마우스 오버 옵션</br>
- 마우스오버 시 링크 색상
</p>
</td><td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[hover_color]" placeholder="마우스오버 시 링크 색" value="<?php echo $skin->op->hover_color;?>"  >
<p class="help-inline">링크에 마우스 오버를 했을 경우의 색상을 입력하여 주세요. 예 > <code>#ffffff</code>
</td></tr>
<Tr><td class="span9 td-right selecelement">&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 마우스오버 시 링크 그림자/밑줄/굵기 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[hover_shadow]" placeholder="마우스오버 시 링크 그림자 옵션" value="<?php echo $skin->op->hover_shadow;?>"  >
<p class="help-inline">마우스오버 시 링크 그림자 옵션을 변경할 수 있습니다. [ text-shadow ] <a href="http://superkts.com/css/text-shadow" target="_blank">[ 해당 옵션 이해를 위한 참고 페이지 ]</a></br>
왼쪽 그림자 시작 위치,위쪽 그림자 시작 위치,그림자 번지기,색상 순서.  예>  <code>1px 1px 2px black</code></p><br/><br/>
<select name="op[hover_deco]">
<option value="none">마우스오버 시 링크 선 설정</option>
<option value="none" <?php if($skin->op->hover_deco=='none') echo 'selected="selected"';?>>선 없음</option>
<option value="underline" <?php if($skin->op->hover_deco=='underline') echo 'selected="selected"';?>>밑줄</option>
<option value="overline" <?php if($skin->op->hover_deco=='overline') echo 'selected="selected"';?>>윗줄</option>
<option value="overline underline" <?php if($skin->op->hover_deco=='overline underline') echo 'selected="selected"';?>>윗+밑줄</option>
<option value="line-through" <?php if($skin->op->hover_deco=='line-through') echo 'selected="selected"';?>>취소선</option>
</select>
<p class="help-inline">링크에 마우스오버를 했을 경우의 선 설정을 변경할 수 있습니다. [ text-decoration ] </p><br/><br/>
<select name="op[hover_weight]">
<option value="normal" selected>마우스오버 시 링크 텍스트 굵기</option>
<option value="normal" <?php if($skin->op->hover_weight=='normal') echo 'selected="selected"';?>>굵기 없음</option>
<option value="bold" <?php if($skin->op->hover_weight=='bold') echo 'selected="selected"';?>>굵음</option>
<option value="100" <?php if($skin->op->hover_weight=='100') echo 'selected="selected"';?>>100</option>
<option value="900" <?php if($skin->op->hover_weight=='900') echo 'selected="selected"';?>>900</option>
</select>
<p class="help-inline">링크에 마우스오버를 했을 경우의 텍스트 굵기를 변경할 수 있습니다. [ font-weight ]</p>
</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>링크/입력란 변환 기능 ON/OFF </p>
</td><td class="span9 td-right">
<div class="controls-group"><p>
<label class="checkbox inline">
<input type="checkbox" id="op['onop_lintrans']" name="op[onop_lintrans]" value="on" <?php if($skin->op->onop_lintrans=="on") echo "checked";?>>링크/입력란 변환 딜레이 사용
</label>
<label class="checkbox inline">
<input type="checkbox" id="op['onop_inputrans']" name="op[onop_inputrans]" value="on" <?php if($skin->op->onop_inputrans=="on") echo "checked";?>>입력란 투명도 변경 사용
</label>
</p></div>
<p class="help-block">
<b>링크/입력란 변환 딜레이</b> :: OFF 시 링크/입력란 변환의 딜레이가 생성 제거됩니다.(=마우스를 올렸을 때 바로 색이 변경)</br>
<b>입력란 투명도 변경</b> :: OFF 시 마우스오버, 작성 중일 때 입력란 투명도 변경 효과가 제거 됩니다.
</p>
</td>
</tr>


<tr>
<th colspan="2" class="span12" id="nbb_noticebase">
공지사항 기본 설정
</th>
</tr>

<tr>
<td class="span3 td-left">
<p>공지사항<br/>
- 너비, 내용 정렬
</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[notice_width]" placeholder="공지사항 너비" value="<?php echo $skin->op->notice_width;?>">
<p class="help-inline">(선택 - 기본:게시판 너비) 공지사항 너비를 설정할 수 있습니다.예 > 80% : <code>80%</code>, 800px : <code>800px</code><br>
%의 경우 게시판 너비에 상대적으로 적용되며 0-100 사이의 값은 %로 자동 변환됩니다.</p></br></br>

<select name="op[notice_align]">
<option value="center">공지사항 위치</option>
<option value="left" <?php if($skin->op->notice_align=='left') echo 'selected="selected"';?>>좌측</option>
<option value="center" <?php if($skin->op->notice_align=='center') echo 'selected="selected"';?>>중앙</option>
<option value="right" <?php if($skin->op->notice_align=='right') echo 'selected="selected"';?>>우측</option>
</select>
<p class="help-inline">공지사항 위치를 설정할 수 있습니다.</p></br></br>

<select name="op[notice_textalign]">
<option value="left">공지사항 내부 정렬</option>
<option value="left" <?php if($skin->op->notice_textalign=='left') echo 'selected="selected"';?>>좌측 정렬</option>
<option value="center" <?php if($skin->op->notice_textalign=='center') echo 'selected="selected"';?>>중앙 정렬</option>
<option value="right" <?php if($skin->op->notice_textalign=='right') echo 'selected="selected"';?>>우측 정렬</option>
</select>
<p class="help-inline">공지사항 내용의 정렬을 설정할 수 있습니다.</p>
</td>
</tr>
<tr><td class="span3 td-left" rowspan="2">
<p>
- 선색,선종류, 글씨색, 배경색
</p>
</td><td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[notice_border_color]" placeholder="공지사항 선 색 & 굵기" value="<?php echo $skin->op->notice_border_color;?>">
<select name="op[notice_border_type]">
<option value="">선 종류</option>
<option value="solid" <?php if($skin->op->notice_border_type=='solid') echo 'selected="selected"';?>>일반 선</option>
<option value="dotted" <?php if($skin->op->notice_border_type=='dotted') echo 'selected="selected"';?>>점(・) 선</option>
<option value="dashed" <?php if($skin->op->notice_border_type=='dashed') echo 'selected="selected"';?>>대쉬(-) 선</option>
<option value="double" <?php if($skin->op->notice_border_type=='double') echo 'selected="selected"';?>>이중 선</option>
<option value="groove" <?php if($skin->op->notice_border_type=='groove') echo 'selected="selected"';?>>홈 모양 선</option>
<option value="ridge" <?php if($skin->op->notice_border_type=='ridge') echo 'selected="selected"';?>>돌출 선</option>
<option value="inset" <?php if($skin->op->notice_border_type=='inset') echo 'selected="selected"';?>>내부 엠보싱</option>
<option value="outset" <?php if($skin->op->notice_border_type=='outset') echo 'selected="selected"';?>>외부 엠보싱</option>
</select>
<p class="help-inline">공지사항 선 색과 굵기를 입력하여 주세요.예 > <code>#ffffff 1px</code></p></br></br>
<input class="input-xlarge" type="text" name="op[notice_background_color]" placeholder="공지사항 테이블 배경색" value="<?php echo $skin->op->notice_background_color;?>"  >
<p class="help-inline">공지사항 배경색을 입력하여 주세요. 예 > <code>#ffffff</code></p>
</td></tr>
<tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 공지사항 배경색, 배경색 투명도, 외곽선 곡률 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[notice_background_color_R]" placeholder="배경색 R 값" value="<?php echo $skin->op->notice_background_color_R;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[notice_background_color_G]" placeholder="배경색 G 값" value="<?php echo $skin->op->notice_background_color_G;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[notice_background_color_B]" placeholder="배경색 B 값" value="<?php echo $skin->op->notice_background_color_B;?>" style="width:65px;">
<p class="help-inline">공지사항 배경색 <b>RGB 값(R,G,B)</b>을 입력하여 주세요. 예 > R <code>255</code> G <code>255</code> B <code>255</code></p>

</p>
<input class="input-xlarge" type="text" name="op[notice_background_alpha]" placeholder="공지 배경 불투명도" value="<?php echo $skin->op->notice_background_alpha;?>">
<p class="help-inline">(선택 - 기본:투명도 없음) 공지사항 배경 색의 불투명도를 설정할 수 있습니다. (0~1 범위) 예 > 40% : <code>0.4</code></p>
<p class="help-block"> <font color=#28c5ff><b>[ RGB 배경 값 전부를 입력해야 불투명도 기능이 정상 작동합니다. (배경색 RGB 값) ]</b></font></p>
<input class="input-xlarge" type="text" name="op[notice_border_radius]" placeholder="공지사항 외곽 둥글기" value="<?php echo $skin->op->notice_border_radius;?>">
<p class="help-inline">(선택 - 기본:0px) 공지사항 외곽의 둥글기를 지정할 수 있습니다.</p>
</div>
</td>
</tr>
<tr>
<td class="span3 td-left" rowspan="2">
<p>공지사항 텍스트 설정</br>
</p>
</td><td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[noticetext_color]" placeholder="공지사항 텍스트 색상" value="<?php echo $skin->op->noticetext_color;?>"  >
<p class="help-inline">공지사항 텍스트 색상을 입력하여 주세요. 예 > <code>#ffffff</code></p></br></br>
<input class="input-xlarge" type="text" name="op[noticetext_font]" placeholder="공지사항 텍스트 글씨체" value="<?php echo $skin->op->noticetext_font;?>"  >
<p class="help-inline">공지사항 텍스트 글씨체를 설정할 수 있습니다. 예 > <code>tahoma,돋움</code></p><br/><br/>
<input class="input-xlarge" type="text" name="op[noticetext_size]" placeholder="공지사항 텍스트 글씨 크기" value="<?php echo $skin->op->noticetext_size;?>"  >
<p class="help-inline">공지사항 텍스트 크기를 설정할 수 있습니다. 예 > <code>8pt, 12px, 0.8em</code></p>
</td></tr><Tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 공지사항 텍스트 그림자/선/굵기 설정 </a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[noticetext_shadow]" placeholder="공지사항 텍스트 그림자 옵션" value="<?php echo $skin->op->noticetext_shadow;?>"  >
<p class="help-inline">공지사항 텍스트 그림자 옵션을 변경할 수 있습니다. [ text-shadow ] <a href="http://superkts.com/css/text-shadow" target="_blank">[ 해당 옵션 이해를 위한 참고 페이지 ]</a></br>
왼쪽 그림자 시작 위치,위쪽 그림자 시작 위치,그림자 번지기,색상 순서.  예>  <code>1px 1px 2px black</code></p><br/><br/>
<select name="op[noticetext_deco]">
<option value="none">공지사항 텍스트 선 설정</option>
<option value="none" <?php if($skin->op->noticetext_deco=='none') echo 'selected="selected"';?>>선 없음</option>
<option value="underline" <?php if($skin->op->noticetext_deco=='underline') echo 'selected="selected"';?>>밑줄</option>
<option value="overline" <?php if($skin->op->noticetext_deco=='overline') echo 'selected="selected"';?>>윗줄</option>
<option value="overline underline" <?php if($skin->op->noticetext_deco=='overline underline') echo 'selected="selected"';?>>윗+밑줄</option>
<option value="line-through" <?php if($skin->op->noticetext_deco=='line-through') echo 'selected="selected"';?>>취소선</option>
</select>
<p class="help-inline">공지사항 텍스트 선 설정을 변경할 수 있습니다. [ text-decoration ] </p><br/><br/>
<select name="op[noticetext_weight]">
<option value="normal" selected>공지사항 텍스트 굵기</option>
<option value="normal" <?php if($skin->op->noticetext_weight=='normal') echo 'selected="selected"';?>>굵기 없음</option>
<option value="bold" <?php if($skin->op->noticetext_weight=='bold') echo 'selected="selected"';?>>굵음</option>
<option value="100" <?php if($skin->op->noticetext_weight=='100') echo 'selected="selected"';?>>100</option>
<option value="900" <?php if($skin->op->noticetext_weight=='900') echo 'selected="selected"';?>>900</option>
</select>
<p class="help-inline">공지사항 텍스트의 굵기를 변경할 수 있습니다. [ font-weight ]</p>
</p>
</td>
</tr>





<tr>
<th colspan="2" class="span12" id="nbb_topmenubase">
상단 메뉴 기본 설정
</th>
</tr>
<tr>
<td class="span3 td-left" rowspan="2">
<p>상단 치비툴/로드 버튼 설정
<a class="retina" href="http://rammenta.ncity.net/wordpress/wp-content/uploads/2015/03/chibiloadsetup.png" title="상단 메뉴 기본 설정 -  상단 치비툴/로드 버튼 설정 설명서"><abbr title="상단 치비툴/로드 버튼 설정 설명" class="initialism">HELP!</abbr></a></p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[topm_bt_font_color]" placeholder="상단 업로드 치비툴/로드 버튼 글씨 색상" value="<?php echo $skin->op->topm_bt_font_color;?>">
<p class="help-inline">치비툴/로드 버튼의 글씨 색상을 지정할 수 있습니다.</p></br></br>
<select name="op[topm_bt_weight]">
<option value="normal" selected>치비툴/로드 버튼 글씨 굵기</option>
<option value="normal" <?php if($skin->op->topm_bt_weight=='normal') echo 'selected="selected"';?>>굵기 없음</option>
<option value="bold" <?php if($skin->op->topm_bt_weight=='bold') echo 'selected="selected"';?>>굵음</option>
<option value="100" <?php if($skin->op->topm_bt_weight=='100') echo 'selected="selected"';?>>100</option>
<option value="900" <?php if($skin->op->topm_bt_weight=='900') echo 'selected="selected"';?>>900</option>
</select>
<p class="help-inline">치비툴/로드 버튼 글씨 굵기를 변경할 수 있습니다. [ font-weight ]</p></br></br>

<input class="input-xlarge" type="text" name="op[topm_bt_background_color]" placeholder="치비툴/로드 버튼 배경색" value="<?php echo $skin->op->topm_bt_background_color;?>">
<p class="help-inline">치비툴/로드 버튼의 배경 색상을 지정할 수 있습니다.</p>
</td></tr><tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 치비툴/로드 버튼 배경색, 배경색 투명도 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[topm_bt_background_color_R]" placeholder="배경색 R 값" value="<?php echo $skin->op->topm_bt_background_color_R;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[topm_bt_background_color_G]" placeholder="배경색 G 값" value="<?php echo $skin->op->topm_bt_background_color_G;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[topm_bt_background_color_B]" placeholder="배경색 B 값" value="<?php echo $skin->op->topm_bt_background_color_B;?>" style="width:65px;">
<p class="help-inline">버튼 배경색 <b>RGB 값(R,G,B)</b>을 입력하여 주세요. 예 > R <code>255</code> G <code>255</code> B <code>255</code></p></br></br>
<input class="input-xlarge" type="text" name="op[topm_bt_background_alpha]" placeholder="치비툴/로드 버튼 배경 불투명도" value="<?php echo $skin->op->topm_bt_background_alpha;?>">
<p class="help-inline">(선택 - 기본:투명도 없음) 버튼 배경색의 불투명도를 설정할 수 있습니다. (0~1 범위) 예 > 40% : <code>0.4</code></p>
<p class="help-block"> <font color=#28c5ff><b>[ RGB 배경 값 전부를 입력해야 불투명도 기능이 정상 작동합니다. (배경색 RGB 값) ]</b></font></p>
</div>
</td></tr>

<tr>
<td class="span3 td-left">
<p>상단 메뉴 사용 ON/OFF</p>
</td>
<td class="span9 td-right"><div class="controls-group">
	<p>
		<label class="checkbox inline">
			<input type="checkbox" id="op['topm_top]" name="op[topm_top]" value="show" <?php if($skin->op->topm_top=="show") echo "checked";?>>1페이지로
		</label>
		<label class="checkbox inline">
			<input type="checkbox" id="op['topm_refre']" name="op[topm_refre]" value="show" <?php if($skin->op->topm_refre=="show") echo "checked";?>>새로고침
		</label>
		<label class="checkbox inline">
			<input type="checkbox" id="op['topm_member']" name="op[topm_member]" value="show" <?php if($skin->op->topm_member=="show") echo "checked";?>>일회성 멤버 로그인
		</label>
		<label class="checkbox inline">
			<input type="checkbox" id="op['topm_join']" name="op[topm_join]" value="show" <?php if($skin->op->topm_join=="show") echo "checked";?>>멤버 가입
		</label>
		<label class="checkbox inline">
			<input type="checkbox" id="op['topm_pm']" name="op[topm_pm]" value="show" <?php if($skin->op->topm_pm=="show") echo "checked";?>>멤버 프로필 수정
		</label>
		<label class="checkbox inline">
			<input type="checkbox" id="op['topm_emoti']" name="op[topm_emoti]" value="show" <?php if($skin->op->topm_emoti=="show") echo "checked";?>>이모티콘 리스트
		</label>
		<label class="checkbox inline">
			<input type="checkbox" id="op['topm_pb']" name="op[topm_pb]" value="show" <?php if($skin->op->topm_pb=="show") echo "checked";?>>상단 페이지 바
		</label>
</p></div>
<p class="help-block">게시판 상단에 사용할 메뉴들을 선택할 수 있습니다</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>상단 메뉴 텍스트 설정</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[topm_color]" placeholder="상단 메뉴 텍스트 색상" value="<?php echo $skin->op->topm_color;?>"  >
<p class="help-inline">(선택 - 기본 :#666666) 상단 메뉴 텍스트 색상을 입력하여 주세요. 예 > <code>#ffffff</code></p></br></br>
<input class="input-xlarge" type="text" name="op[topm_font]" placeholder="상단 메뉴 텍스트 글씨체" value="<?php echo $skin->op->topm_font;?>"  >
<p class="help-inline">(선택 - 기본:tahoma,돋움) 상단 메뉴 텍스트 글씨체를 설정할 수 있습니다. 예 > <code>tahoma,돋움</code></p><br/><br/>
<input class="input-xlarge" type="text" name="op[topm_size]" placeholder="상단 메뉴 텍스트 크기" value="<?php echo $skin->op->topm_size;?>"  >
<p class="help-inline">(선택 - 기본:8pt) 상단 메뉴 텍스트 크기를 설정할 수 있습니다. 예 > <code>8pt, 12px, 0.8em</code></p>
</td>
</tr>

<tr class="selecelement"><td class="span3 td-left" rowspan="2">
<p>(선택) 페이지바 현재 페이지 표시 색상</p>
</td><td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[point_color3]" placeholder="현재 페이지 색상" value="<?php echo $skin->op->point_color3;?>"  >
<p class="help-inline">(선택 - 기본 : #ffcbbf) 현재 페이지 색상을 설정할 수 있습니다. 예 > <code>#ffffff</code></p>
</td></tr>

<tr class="selecelement"><td class="span9 td-right selecelement">
<input class="input-xlarge" type="text" name="op[point_color5]" placeholder="현재 페이지 배경 색상" value="<?php echo $skin->op->point_color5;?>"  >
<p class="help-inline">(선택 - 기본 : transparent) 현재 페이지 배경 색상을 설정할 수 있습니다. 예 > <code>#ffffff</code></p>
</td>
</tr>

<tr  class="selecelement">
<td class="span3 td-left selecelement" rowspan="2">
<p>(선택) 상단 메뉴 입력창 설정 [업로드 부분]</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[topm_border_color]" placeholder="상단메뉴 입력란 선 색 & 굵기" value="<?php echo $skin->op->topm_border_color;?>">
<select name="op[topm_border_type]">
<option value="">선 종류</option>
<option value="solid" <?php if($skin->op->topm_border_type=='solid') echo 'selected="selected"';?>>일반 선</option>
<option value="dotted" <?php if($skin->op->topm_border_type=='dotted') echo 'selected="selected"';?>>점(・) 선</option>
<option value="dashed" <?php if($skin->op->topm_border_type=='dashed') echo 'selected="selected"';?>>대쉬(-) 선</option>
<option value="double" <?php if($skin->op->topm_border_type=='double') echo 'selected="selected"';?>>이중 선</option>
<option value="groove" <?php if($skin->op->topm_border_type=='groove') echo 'selected="selected"';?>>홈 모양 선</option>
<option value="ridge" <?php if($skin->op->topm_border_type=='ridge') echo 'selected="selected"';?>>돌출 선</option>
<option value="inset" <?php if($skin->op->topm_border_type=='inset') echo 'selected="selected"';?>>내부 엠보싱</option>
<option value="outset" <?php if($skin->op->topm_border_type=='outset') echo 'selected="selected"';?>>외부 엠보싱</option>
</select>
<p class="help-inline">입력란의 선 색과 굵기를 입력하여 주세요.예 > <code>#ffffff 1px</code></p></br></br>

<input class="input-xlarge" type="text" name="op[topm_ip_font_color]" placeholder="상단 메뉴 입력란 글씨 색상" value="<?php echo $skin->op->topm_ip_font_color;?>">
<p class="help-inline">입력란 글씨 색상을 지정할 수 있습니다.</p></br></br>

<input class="input-xlarge" type="text" name="op[topm_ip_background_color]" placeholder="상단 메뉴 입력란의 배경색" value="<?php echo $skin->op->topm_ip_background_color;?>">
<p class="help-inline">입력란의 배경 색상을 지정할 수 있습니다.</p>
</td></tr><tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 상단 메뉴 입력란 배경색, 배경색 투명도 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[topm_ip_background_color_R]" placeholder="배경색 R 값" value="<?php echo $skin->op->topm_ip_background_color_R;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[topm_ip_background_color_G]" placeholder="배경색 G 값" value="<?php echo $skin->op->topm_ip_background_color_G;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[topm_ip_background_color_B]" placeholder="배경색 B 값" value="<?php echo $skin->op->topm_ip_background_color_B;?>" style="width:65px;">
<p class="help-inline">입력란 배경색 <b>RGB 값(R,G,B)</b>을 입력하여 주세요. 예 > R <code>255</code> G <code>255</code> B <code>255</code></p></br></br>
<input class="input-xlarge" type="text" name="op[topm_ip_background_alpha]" placeholder="상단 메뉴 입력란 배경 불투명도" value="<?php echo $skin->op->topm_ip_background_alpha;?>">
<p class="help-inline">(선택 - 기본:투명도 없음) 입력란 배경색의 불투명도를 설정할 수 있습니다. (0~1 범위) 예 > 40% : <code>0.4</code></p>
<p class="help-block"> <font color=#28c5ff><b>[ RGB 배경 값 전부를 입력해야 불투명도 기능이 정상 작동합니다. (배경색 RGB 값) ]</b></font></p>
</div>
</td></tr>



<tr>
<th colspan="2" class="span12" id="nbb_tablebase">
테이블 기본 설정
</th>
</tr>

<tr>
<td class="span3 td-left">
<p>테이블 외곽 선</br>
- 외곽선 곡률(둥글기)</br>
- 외곽선 색상</br>
- 외곽선 굵기</br>
- 외곽선 종류
</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[table_border_radius]" placeholder="테이블 외곽 둥글기" value="<?php echo $skin->op->table_border_radius;?>">
<p class="help-inline">(선택 - 기본:6px) 테이블 외곽의 둥글기를 지정할 수 있습니다.</p></br></br>

<input class="input-xlarge" type="text" name="op[table_border_color]" placeholder="테이블 선 색상" value="<?php echo $skin->op->table_border_color;?>">
<p class="help-inline">테이블 외곽 선 색상을 지정할 수 있습니다.</p></br></br>

<input class="input-xlarge" type="text" name="op[table_border_size]" placeholder="테이블 선 굵기" value="<?php echo $skin->op->table_border_size;?>">
<p class="help-inline">테이블 외곽 선 굵기를 지정할 수 있습니다.</p></br></br>
<select name="op[table_border_type]">
<option value="">선 종류</option>
<option value="solid" <?php if($skin->op->table_border_type=='solid') echo 'selected="selected"';?>>일반 선</option>
<option value="dotted" <?php if($skin->op->table_border_type=='dotted') echo 'selected="selected"';?>>점(・) 선</option>
<option value="dashed" <?php if($skin->op->table_border_type=='dashed') echo 'selected="selected"';?>>대쉬(-) 선</option>
<option value="double" <?php if($skin->op->table_border_type=='double') echo 'selected="selected"';?>>이중 선</option>
<option value="groove" <?php if($skin->op->table_border_type=='groove') echo 'selected="selected"';?>>홈 모양 선</option>
<option value="ridge" <?php if($skin->op->table_border_type=='ridge') echo 'selected="selected"';?>>돌출 선</option>
<option value="inset" <?php if($skin->op->table_border_type=='inset') echo 'selected="selected"';?>>내부 엠보싱</option>
<option value="outset" <?php if($skin->op->table_border_type=='outset') echo 'selected="selected"';?>>외부 엠보싱</option>
</select>
</td>
</tr>
<tr><td class="span3 td-left">
<p>테이블 내곽 선</br>
-내곽선 색상</br>
-내곽선 굵기</br>
-내곽선 종류
</p>
</td><td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[table_inner_border_color]" placeholder="테이블 내부 선 색상" value="<?php echo $skin->op->table_inner_border_color;?>">
<p class="help-inline">테이블 내곽 선 색상을지정 할 수 있습니다.</p></br></br>
<input class="input-xlarge" type="text" name="op[table_inner_border_size]" placeholder="테이블 내부 선 굵기" value="<?php echo $skin->op->table_inner_border_size;?>">
<p class="help-inline">테이블 내곽 선 굵기를 지정 할 수 있습니다.</p></br></br>
<select name="op[table_inner_border_type]">
<option value="">선 종류</option>
<option value="solid" <?php if($skin->op->table_inner_border_type=='solid') echo 'selected="selected"';?>>일반 선</option>
<option value="dotted" <?php if($skin->op->table_inner_border_type=='dotted') echo 'selected="selected"';?>>점(・) 선</option>
<option value="dashed" <?php if($skin->op->table_inner_border_type=='dashed') echo 'selected="selected"';?>>대쉬(-) 선</option>
<option value="double" <?php if($skin->op->table_inner_border_type=='double') echo 'selected="selected"';?>>이중 선</option>
<option value="groove" <?php if($skin->op->table_inner_border_type=='groove') echo 'selected="selected"';?>>홈 모양 선</option>
<option value="ridge" <?php if($skin->op->table_inner_border_type=='ridge') echo 'selected="selected"';?>>돌출 선</option>
<option value="inset" <?php if($skin->op->table_inner_border_type=='inset') echo 'selected="selected"';?>>내부 엠보싱</option>
<option value="outset" <?php if($skin->op->table_inner_border_type=='outset') echo 'selected="selected"';?>>외부 엠보싱</option>
</select></td></tr>
<tr  class="selecelement"><td class="span3 td-left">
<p>(선택) 로그/리플 비밀글/접기 알림 색상
</p>
</td><td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[point_color1]" placeholder="비밀글 알림 색상" value="<?php echo $skin->op->point_color1;?>"  >
<p class="help-inline">(선택 - 기본:#ff59a1) 로그/리플 비밀글 알림 색상을 설정할 수 있습니다. 예 > <code>#ffffff</code></p></br></br>
<input class="input-xlarge" type="text" name="op[point_color4]" placeholder="작성한 비밀글 알림 색상" value="<?php echo $skin->op->point_color4;?>"  >
<p class="help-inline">(선택 - 기본:#28c5ff) 작성한 로그/리플 비밀글 알림 색상을 설정할 수 있습니다. 예 > <code>#ffffff</code></p></br></br>
<input class="input-xlarge" type="text" name="op[point_color2]" placeholder="접기 알림 색상" value="<?php echo $skin->op->point_color2;?>"  >
<p class="help-inline">(선택 - 기본:#666666) 로그/리플 접기 알림 색상을 설정할 수 있습니다. 예 > <code>#ffffff</code></p>
</td>
</tr>




<tr>
<th colspan="2" class="span12" id="nbb_loginfo">
로그 정보 설정
</th>
</tr>
<tr>
<td class="span3 td-left" rowspan="2">
<p>로그 정보 테이블 배경색
</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[table_background_color]" placeholder="로그 정보 배경색" value="<?php echo $skin->op->table_background_color;?>"  >
<p class="help-inline">로그 정보 배경색(헤더)을 입력하여 주세요. 예 > <code>#ffffff</code></p>
</td></tr><tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 로그 정보 테이블 배경색, 배경색 투명도 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[table_background_color_R]" placeholder="배경색 R 값" value="<?php echo $skin->op->table_background_color_R;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[table_background_color_G]" placeholder="배경색 G 값" value="<?php echo $skin->op->table_background_color_G;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[table_background_color_B]" placeholder="배경색 B 값" value="<?php echo $skin->op->table_background_color_B;?>" style="width:65px;">
<p class="help-inline">로그 정보 배경색 <b>RGB 값(R,G,B)</b>을 입력하여 주세요. 예 > R <code>255</code> G <code>255</code> B <code>255</code></p></br></br>
<input class="input-xlarge" type="text" name="op[table_background_alpha]" placeholder="로그 정보 배경 불투명도" value="<?php echo $skin->op->table_background_alpha;?>">
<p class="help-inline">(선택 - 기본:투명도 없음) 로그 정보 배경색의 불투명도를 설정할 수 있습니다. (0~1 범위) 예 > 40% : <code>0.4</code></p>
<p class="help-block"> <font color=#28c5ff><b>[ RGB 배경 값 전부를 입력해야 불투명도 기능이 정상 작동합니다. (배경색 RGB 값) ]</b></font></p>
</div>
</td>
</tr>
<tr>
<td class="span3 td-left" rowspan="2">
<p>로그 번호 설정</br>
- 로그 번호 표시 아이콘/색상/글씨체/크기</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[lognum_color]" placeholder="로그 번호 색상" value="<?php echo $skin->op->lognum_color;?>"  >
<p class="help-inline">(선택 - 기본:black) 로그 번호 텍스트 색상을 입력하여 주세요. 예 > <code>#ffffff</code></p></br></br>
<input class="input-xlarge" type="text" name="op[lognum_font]" placeholder="로그 번호 글씨체" value="<?php echo $skin->op->lognum_font;?>"  >
<p class="help-inline">(선택 - 기본:verdana) 로그 번호 텍스트 글씨체를 설정할 수 있습니다. 예 > <code>tahoma,돋움</code></p><br/><br/>
<input class="input-xlarge" type="text" name="op[lognum_size]" placeholder="로그 번호 크기" value="<?php echo $skin->op->lognum_size;?>"  >
<p class="help-inline">(선택 - 기본:8pt) 로그 번호 텍스트 크기를 설정할 수 있습니다. 예 > <code>8pt, 12px, 0.8em</code></p>
</td>
</tr>
<Tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 로그 번호 그림자/밑줄/굵기 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[lognum_shadow]" placeholder="로그 번호 그림자 옵션" value="<?php echo $skin->op->lognum_shadow;?>"  >
<p class="help-inline">로그 번호 그림자 옵션을 변경할 수 있습니다. [ text-shadow ] <a href="http://superkts.com/css/text-shadow" target="_blank">[ 해당 옵션 이해를 위한 참고 페이지 ]</a></br>
왼쪽 그림자 시작 위치,위쪽 그림자 시작 위치,그림자 번지기,색상 순서.  예>  <code>1px 1px 2px black</code></p><br/><br/>
<select name="op[lognum_deco]">
<option value="none">로그 번호 선 설정</option>
<option value="none" <?php if($skin->op->lognum_deco=='none') echo 'selected="selected"';?>>선 없음</option>
<option value="underline" <?php if($skin->op->lognum_deco=='underline') echo 'selected="selected"';?>>밑줄</option>
<option value="overline" <?php if($skin->op->lognum_deco=='overline') echo 'selected="selected"';?>>윗줄</option>
<option value="overline underline" <?php if($skin->op->lognum_deco=='overline underline') echo 'selected="selected"';?>>윗+밑줄</option>
<option value="line-through" <?php if($skin->op->lognum_deco=='line-through') echo 'selected="selected"';?>>취소선</option>
</select>
<p class="help-inline">로그 번호 선 설정을 변경할 수 있습니다. [ text-decoration ] </p><br/><br/>
<select name="op[lognum_weight]">
<option value="normal" selected>로그 번호 텍스트 굵기</option>
<option value="normal" <?php if($skin->op->lognum_weight=='normal') echo 'selected="selected"';?>>굵기 없음</option>
<option value="bold" <?php if($skin->op->lognum_weight=='bold') echo 'selected="selected"';?>>굵음</option>
<option value="100" <?php if($skin->op->lognum_weight=='100') echo 'selected="selected"';?>>100</option>
<option value="900" <?php if($skin->op->lognum_weight=='900') echo 'selected="selected"';?>>900</option>
</select>
<p class="help-inline">로그 번호의 텍스트 굵기를 변경할 수 있습니다. [ font-weight ]</p>
</p>
</td>
</tr>

<tr>
<td class="span3 td-left" rowspan="2">
<p>로그 정보 텍스트 설정</br>
- 색상/글씨체/크기
</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[loginfo_color]" placeholder="로그 정보 텍스트 색상" value="<?php echo $skin->op->loginfo_color;?>"  >
<p class="help-inline">(선택 - 기본:#666666) 로그 정보 텍스트 색상을 입력하여 주세요. 예 > <code>#ffffff</code></p></br></br>
<input class="input-xlarge" type="text" name="op[loginfo_font]" placeholder="로그 정보 텍스트 글씨체" value="<?php echo $skin->op->loginfo_font;?>"  >
<p class="help-inline">(선택 - 기본:tahoma) 로그 정보 텍스트 글씨체를 설정할 수 있습니다. 예 > <code>tahoma,돋움</code></p><br/><br/>
<input class="input-xlarge" type="text" name="op[loginfo_size]" placeholder="로그 정보 텍스트 크기" value="<?php echo $skin->op->loginfo_size;?>"  >
<p class="help-inline">(선택 - 기본:7pt) 로그 정보 텍스트 크기를 설정할 수 있습니다. 예 > <code>8pt, 12px, 0.8em</code></p>
</td>
</tr>
<Tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 로그 정보 그림자/밑줄/굵기 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[loginfo_shadow]" placeholder="로그 정보 그림자 옵션" value="<?php echo $skin->op->loginfo_shadow;?>"  >
<p class="help-inline">로그 정보 그림자 옵션을 변경할 수 있습니다. [ text-shadow ] <a href="http://superkts.com/css/text-shadow" target="_blank">[ 해당 옵션 이해를 위한 참고 페이지 ]</a></br>
왼쪽 그림자 시작 위치,위쪽 그림자 시작 위치,그림자 번지기,색상 순서.  예>  <code>1px 1px 2px black</code></p><br/><br/>
<select name="op[loginfo_deco]">
<option value="none">로그 정보 선 설정</option>
<option value="none" <?php if($skin->op->loginfo_deco=='none') echo 'selected="selected"';?>>선 없음</option>
<option value="underline" <?php if($skin->op->loginfo_deco=='underline') echo 'selected="selected"';?>>밑줄</option>
<option value="overline" <?php if($skin->op->loginfo_deco=='overline') echo 'selected="selected"';?>>윗줄</option>
<option value="overline underline" <?php if($skin->op->loginfo_deco=='overline underline') echo 'selected="selected"';?>>윗+밑줄</option>
<option value="line-through" <?php if($skin->op->loginfo_deco=='line-through') echo 'selected="selected"';?>>취소선</option>
</select>
<p class="help-inline">로그 정보 선 설정을 변경할 수 있습니다. [ text-decoration ] </p><br/><br/>
<select name="op[loginfo_weight]">
<option value="normal" selected>로그 정보 텍스트 굵기</option>
<option value="normal" <?php if($skin->op->loginfo_weight=='normal') echo 'selected="selected"';?>>굵기 없음</option>
<option value="bold" <?php if($skin->op->loginfo_weight=='bold') echo 'selected="selected"';?>>굵음</option>
<option value="100" <?php if($skin->op->loginfo_weight=='100') echo 'selected="selected"';?>>100</option>
<option value="900" <?php if($skin->op->loginfo_weight=='900') echo 'selected="selected"';?>>900</option>
</select>
<p class="help-inline">로그 정보의 텍스트 굵기를 변경할 수 있습니다. [ font-weight ]</p>
</p>
</td>
</tr>

<tr>
<td class="span3 td-left" rowspan="2">
<p>로그 정보 표시</br>
- 로그 정보 ON/OFF</br>
- 로그 주소 링크 기능
</p>
</td>
<td class="span9 td-right">
<div class="controls-group">
	<p>
		<label class="checkbox inline">
			<input type="checkbox" id="op['tool']" name="op[tool]" value="show" <?php if($skin->op->tool=="show") echo "checked";?>>작성 툴 정보
		</label>
		<label class="checkbox inline">
			<input type="checkbox" id="op['size']" name="op[size]" value="show" <?php if($skin->op->size=="show") echo "checked";?>>원본 사이즈 & 리사이즈 정보
		</label>
		<label class="checkbox inline">
		<input type="checkbox" id="op['logip']" name="op[logip]" value="show" <?php if($skin->op->logip=="show") echo "checked";?>>로그 업로드 IP
		</label>
		<label class="checkbox inline">
			<input type="checkbox" id="op['time']" name="op[time]" value="show" <?php if($skin->op->time=="show") echo "checked";?>>로그 시간 정보
		</label>
		<label class="checkbox inline">
		<input type="checkbox" id="op['logurl']" name="op[logurl]" value="show" <?php if($skin->op->logurl=="show") echo "checked";?>>로그 고유 주소
		</label>
	</p>
</div>
<p class="help-block">로그 상단에 해당 로그의 정보를 표시합니다.</p>	
</td></tr>
<tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 로그 주소 자동 링크/새 창으로 열기 설정</a><div style="display: none;">
<select name="op[logurl_link]">
<option value="none">로그 주소 링크 연결</option>
<option value="none" <?php if($skin->op->logurl_link=='none') echo 'selected';?>>사용하지 않음</option>
<option value="original" <?php if($skin->op->logurl_link=='original') echo 'selected';?>>모든 로그 주소 연결</option>
<option value="pic" <?php if($skin->op->logurl_link=='pic') echo 'selected';?>>그림인 경우에만 주소 연결</option>
</select>
<p class="help-inline">로그 고유 주소 표시 ON일 때 <b>로그 주소 클릭 시</b> 새 창으로 로그 페이지 이동 기능을 설정할 수 있습니다.</p></br></br>

<select name="op[logurl_new]">
<option value="none">새 창으로 열기 기능</option>
<option value="none" <?php if($skin->op->logurl_new=='none') echo 'selected';?>>사용하지 않음</option>
<option value="original" <?php if($skin->op->logurl_new=='original') echo 'selected';?>>모든 로그에 사용</option>
<option value="pic" <?php if($skin->op->logurl_new=='pic') echo 'selected';?>>그림인 경우에만 사용</option>
</select>
<p class="help-inline">지정 아이콘 클릭 시 새 창으로 해당 페이지 여는 기능을 설정할 수 있습니다.</br>연결되는 페이지는 로그 주소 링크 설정을 따릅니다.</p></br></br>

<select name="op[logurl_url]">
<option value="none">로그 주소 링크 시 연결될 주소</option>
<option value="original" <?php if($skin->op->logurl_url=='original') echo 'selected';?>>로그 고유 주소 연결</option>
<option value="mix" <?php if($skin->op->logurl_url=='mix') echo 'selected';?>>그림=이미지 주소/그 외=고유 주소</option>
</select>
<p class="help-inline">주소 연결 기능들을 사용 할 때 링크에 연결될 주소(고유주소/이미지주소)를 설정할 수 있습니다.</p>
</div></td>
</tr>
<tr>
<td class="span3 td-left">
<p>로그 시간 정보 표기 <a class="iframe" href="http://rammenta.ncity.net/wordpress/?p=132" title="시간 정보 표기 설명">
<abbr title="시간 정보 표기법 설명서" class="initialism">HELP!</abbr></a></p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[time_type]" placeholder="시간표시 방법" value="<?php echo $skin->op->time_type;?>">
<p class="help-inline">시간 표시 방법을 설정합니다. 예> <code>Y년m월d일 H시i분s초</code></p>
</td>
</tr>






<tr>
<th colspan="2" class="span12" id="nbb_infobase">
로그 기본 설정
</th>
</tr>
<tr>
<td class="span3 td-left" rowspan="2">
<p>로그 배경 색 설정</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[pic_background_color]" placeholder="로그 배경 색" value="<?php echo $skin->op->pic_background_color;?>">
<p class="help-inline">로그 배경 색을 지정하여 주세요. 예 > <code>#ffffff</code></p>
</td></tr>
<tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 로그 배경 색/배경 색 투명도 설정 </a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[pic_background_color_R]" placeholder="배경색 R 값" value="<?php echo $skin->op->pic_background_color_R;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[pic_background_color_G]" placeholder="배경색 G 값" value="<?php echo $skin->op->pic_background_color_G;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[pic_background_color_B]" placeholder="배경색 B 값" value="<?php echo $skin->op->pic_background_color_B;?>" style="width:65px;">
<p class="help-inline">로그 배경 색의 <b>RGB 값(R,G,B)</b>을 입력하여 주세요. 예 > R <code>255</code> G <code>255</code> B <code>255</code></p></br></br>
<input class="input-xlarge" type="text" name="op[pic_background_alpha]" placeholder="로그 배경 불투명도" value="<?php echo $skin->op->pic_background_alpha;?>">
<p class="help-inline">(선택 - 기본:투명도 없음) 로그 배경 색의 불투명도를 설정할 수 있습니다. (0~1 범위) 예 > 40% : <code>0.4</code></p>
<p class="help-block"> <font color=#28c5ff><b>[ RGB 배경 값 전부를 입력해야 불투명도 기능이 정상 작동합니다. (배경색 RGB 값) ]</b></font></p>
</div>
</td>
</tr>

<tr><td class="span3 td-left">
<p>로그 정렬 설정 </p>
</td>
<td class="span9 td-right">
<select name="op[log_align]">
<option value="center">로그 정렬</option>
<option value="left" <?php if($skin->op->log_align=='left') echo 'selected="selected"';?>>좌측</option>
<option value="center" <?php if($skin->op->log_align=='center') echo 'selected="selected"';?>>중앙</option>
<option value="right" <?php if($skin->op->log_align=='right') echo 'selected="selected"';?>>우측</option>
</select>
<p class="help-inline">로그 정렬을 설정할 수 있습니다.</p>
</td></tr>

<tr>
<td class="span3 td-left" rowspan="3">
<p>텍스트 로그 설정</p>
</td><td class="span9 td-right">
<select name="op[logtext_align]">
<option value="center">로그 정렬</option>
<option value="left" <?php if($skin->op->logtext_align=='left') echo 'selected="selected"';?>>좌측</option>
<option value="center" <?php if($skin->op->logtext_align=='center') echo 'selected="selected"';?>>중앙</option>
<option value="right" <?php if($skin->op->logtext_align=='right') echo 'selected="selected"';?>>우측</option>
</select>
<p class="help-inline">텍스트 업로드의 정렬을 설정할 수 있습니다.</p>
</td></tr><tr>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[logtext_color]" placeholder="텍스트 로그 색상" value="<?php echo $skin->op->logtext_color;?>"  >
<p class="help-inline">텍스트 로그 색상을 입력하여 주세요. 예 > <code>#ffffff</code></p></br></br>
<input class="input-xlarge" type="text" name="op[logtext_font]" placeholder="텍스트 로그 글씨체" value="<?php echo $skin->op->logtext_font;?>"  >
<p class="help-inline">텍스트 로그 글씨체를 설정할 수 있습니다. 예 > <code>tahoma,돋움</code></p><br/><br/>
<input class="input-xlarge" type="text" name="op[logtext_size]" placeholder="텍스트 로그 글씨 크기" value="<?php echo $skin->op->logtext_size;?>"  >
<p class="help-inline">텍스트 로그 크기를 설정할 수 있습니다. 예 > <code>8pt, 12px, 0.8em</code></p>
</td></tr><Tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 텍스트 로그 그림자/선/굵기 설정 </a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[logtext_shadow]" placeholder="텍스트 로그 그림자 옵션" value="<?php echo $skin->op->logtext_shadow;?>"  >
<p class="help-inline">텍스트 로그 그림자 옵션을 변경할 수 있습니다. [ text-shadow ] <a href="http://superkts.com/css/text-shadow" target="_blank">[ 해당 옵션 이해를 위한 참고 페이지 ]</a></br>
왼쪽 그림자 시작 위치,위쪽 그림자 시작 위치,그림자 번지기,색상 순서.  예>  <code>1px 1px 2px black</code></p><br/><br/>
<select name="op[logtext_deco]">
<option value="none">텍스트 로그 선 설정</option>
<option value="none" <?php if($skin->op->logtext_deco=='none') echo 'selected="selected"';?>>선 없음</option>
<option value="underline" <?php if($skin->op->logtext_deco=='underline') echo 'selected="selected"';?>>밑줄</option>
<option value="overline" <?php if($skin->op->logtext_deco=='overline') echo 'selected="selected"';?>>윗줄</option>
<option value="overline underline" <?php if($skin->op->logtext_deco=='overline underline') echo 'selected="selected"';?>>윗+밑줄</option>
<option value="line-through" <?php if($skin->op->logtext_deco=='line-through') echo 'selected="selected"';?>>취소선</option>
</select>
<p class="help-inline">텍스트 로그 선 설정을 변경할 수 있습니다. [ text-decoration ] </p><br/><br/>
<select name="op[logtext_weight]">
<option value="normal" selected>텍스트 로그 굵기</option>
<option value="normal" <?php if($skin->op->logtext_weight=='normal') echo 'selected="selected"';?>>굵기 없음</option>
<option value="bold" <?php if($skin->op->logtext_weight=='bold') echo 'selected="selected"';?>>굵음</option>
<option value="100" <?php if($skin->op->logtext_weight=='100') echo 'selected="selected"';?>>100</option>
<option value="900" <?php if($skin->op->logtext_weight=='900') echo 'selected="selected"';?>>900</option>
</select>
<p class="help-inline">텍스트 로그의 굵기를 변경할 수 있습니다. [ font-weight ]</p>
</p>
</td>
</tr>

<tr class="selecelement"><td class="span3 td-left" rowspan="2">
(선택) 로그 옵션 레이어 설정
</td><td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[logop_border_color]" placeholder="로그 옵션/삭제/이어그리기 창 선 색 & 굵기" value="<?php echo $skin->op->logop_border_color;?>">
<select name="op[logop_border_type]">
<option value="">선 종류</option>
<option value="solid" <?php if($skin->op->logop_border_type=='solid') echo 'selected="selected"';?>>일반 선</option>
<option value="dotted" <?php if($skin->op->logop_border_type=='dotted') echo 'selected="selected"';?>>점(・) 선</option>
<option value="dashed" <?php if($skin->op->logop_border_type=='dashed') echo 'selected="selected"';?>>대쉬(-) 선</option>
<option value="double" <?php if($skin->op->logop_border_type=='double') echo 'selected="selected"';?>>이중 선</option>
<option value="groove" <?php if($skin->op->logop_border_type=='groove') echo 'selected="selected"';?>>홈 모양 선</option>
<option value="ridge" <?php if($skin->op->logop_border_type=='ridge') echo 'selected="selected"';?>>돌출 선</option>
<option value="inset" <?php if($skin->op->logop_border_type=='inset') echo 'selected="selected"';?>>내부 엠보싱</option>
<option value="outset" <?php if($skin->op->logop_border_type=='outset') echo 'selected="selected"';?>>외부 엠보싱</option>
</select>
<p class="help-inline">로그 옵션 창 선 색과 굵기를 입력하여 주세요.예 > <code>#ffffff 1px</code></p></br></br>
<input class="input-xlarge" type="text" name="op[logop_background_color]" placeholder="로그 옵션 레이어 배경색" value="<?php echo $skin->op->logop_background_color;?>">
<p class="help-inline">로그 옵션 레이어의 배경 색상을 지정할 수 있습니다.</p>
</td></tr>
<tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 로그 옵션/삭제/이어그리기 레이어 배경 색/배경 색 투명도 설정 </a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[logop_background_color_R]" placeholder="배경색 R 값" value="<?php echo $skin->op->logop_background_color_R;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[logop_background_color_G]" placeholder="배경색 G 값" value="<?php echo $skin->op->logop_background_color_G;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[logop_background_color_B]" placeholder="배경색 B 값" value="<?php echo $skin->op->logop_background_color_B;?>" style="width:65px;">
<p class="help-inline">로그 옵션 배경색 <b>RGB 값(R,G,B)</b>을 입력하여 주세요. 예 > R <code>255</code> G <code>255</code> B <code>255</code></p></br></br>
<input class="input-xlarge" type="text" name="op[logop_background_alpha]" placeholder="로그 옵션 레이어 배경 불투명도" value="<?php echo $skin->op->logop_background_alpha;?>">
<p class="help-inline">(선택 - 기본:투명도 없음) 로그 옵션 배경색의 불투명도를 설정할 수 있습니다. (0~1 범위) 예 > 40% : <code>0.4</code></p>
<p class="help-block"><font color=#28c5ff><b>[ RGB 배경 값 전부를 입력해야 불투명도 기능이 정상 작동합니다. (배경색 RGB 값) ]</b></font></p>
</div>
</td></tr>
<tr class="selecelement"><td class="span3 td-left" rowspan="2">
(선택) 로그 옵션 입력란 설정
</td><td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[logopinp_border_color]" placeholder="로그 옵션 입력란 선 색 & 굵기" value="<?php echo $skin->op->logopinp_border_color;?>">
<select name="op[logopinp_border_type]">
<option value="">선 종류</option>
<option value="solid" <?php if($skin->op->logopinp_border_type=='solid') echo 'selected="selected"';?>>일반 선</option>
<option value="dotted" <?php if($skin->op->logopinp_border_type=='dotted') echo 'selected="selected"';?>>점(・) 선</option>
<option value="dashed" <?php if($skin->op->logopinp_border_type=='dashed') echo 'selected="selected"';?>>대쉬(-) 선</option>
<option value="double" <?php if($skin->op->logopinp_border_type=='double') echo 'selected="selected"';?>>이중 선</option>
<option value="groove" <?php if($skin->op->logopinp_border_type=='groove') echo 'selected="selected"';?>>홈 모양 선</option>
<option value="ridge" <?php if($skin->op->logopinp_border_type=='ridge') echo 'selected="selected"';?>>돌출 선</option>
<option value="inset" <?php if($skin->op->logopinp_border_type=='inset') echo 'selected="selected"';?>>내부 엠보싱</option>
<option value="outset" <?php if($skin->op->logopinp_border_type=='outset') echo 'selected="selected"';?>>외부 엠보싱</option>
</select>
<p class="help-inline">입력란의 선 색과 굵기를 입력하여 주세요.예 > <code>#ffffff 1px</code></p></br></br>

<input class="input-xlarge" type="text" name="op[logopinp_font_color]" placeholder="로그 옵션 입력란 글씨 색상" value="<?php echo $skin->op->logopinp_font_color;?>">
<p class="help-inline">입력란 글씨 색상을 지정할 수 있습니다. 예 > <code>#ffffff</code></p></br></br>

<input class="input-xlarge" type="text" name="op[logopinp_background_color]" placeholder="로그 옵션 입력란의 배경색" value="<?php echo $skin->op->logopinp_background_color;?>">
<p class="help-inline">입력란의 배경 색상을 지정할 수 있습니다. 예 > <code>#ffffff</code></p>
</td></tr><tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 로그 옵션/삭제/이어그리기 입력란 배경 색/배경 색 투명도 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[logopinp_background_color_R]" placeholder="배경색 R 값" value="<?php echo $skin->op->logopinp_background_color_R;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[logopinp_background_color_G]" placeholder="배경색 G 값" value="<?php echo $skin->op->logopinp_background_color_G;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[logopinp_background_color_B]" placeholder="배경색 B 값" value="<?php echo $skin->op->logopinp_background_color_B;?>" style="width:65px;">
<p class="help-inline">입력란 배경색 <b>RGB 값(R,G,B)</b>을 입력하여 주세요. 예 > R <code>255</code> G <code>255</code> B <code>255</code></p></br></br>
<input class="input-xlarge" type="text" name="op[logopinp_background_alpha]" placeholder="로그 옵션 입력란 배경 불투명도" value="<?php echo $skin->op->logopinp_background_alpha;?>">
<p class="help-inline">(선택 - 기본:투명도 없음) 입력란 배경색의 불투명도를 설정할 수 있습니다. (0~1 범위) 예 > 40% : <code>0.4</code></p>
<p class="help-block"> <font color=#28c5ff><b>[ RGB 배경 값 전부를 입력해야 불투명도 기능이 정상 작동합니다. (배경색 RGB 값) ]</b></font></p>
</div>
</td>
</tr>






<tr>
<th colspan="2" class="span12" id="ndd_replybase">
리플 기본 설정
</th>
</tr>

<tr>
<td class="span3 td-left">
<p>리플 간 줄 간격</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[reply_bmargin]" placeholder="리플 사이 줄 간격" value="<?php echo $skin->op->reply_bmargin;?>"  >
<p class="help-block">리플 간 줄 간격(여백)을 설정 할 수 있습니다. 예 > <code>10px</code></p>
</td>
</tr>

<tr>
<td class="span3 td-left" rowspan="2">
<p>코멘트 테이블 배경 색</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[reply_background_color]" placeholder="코멘트 배경 색"  value="<?php echo $skin->op->reply_background_color;?>">
<p class="help-block">코멘트 테이블의 배경 색을 지정하여 주세요. 예 > <code>#ffffff</code></p>
</td></tr><tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 코멘트 테이블 배경 색/배경 투명도 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[reply_background_color_R]" placeholder="배경색 R 값" value="<?php echo $skin->op->reply_background_color_R;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[reply_background_color_G]" placeholder="배경색 G 값" value="<?php echo $skin->op->reply_background_color_G;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[reply_background_color_B]" placeholder="배경색 B 값" value="<?php echo $skin->op->reply_background_color_B;?>" style="width:65px;">
<p class="help-inline">코멘트 배경색 <b>RGB 값(R,G,B)</b>을 입력하여 주세요. 예 > R <code>255</code> G <code>255</code> B <code>255</code></p></br></br>
<input class="input-xlarge" type="text" name="op[reply_background_alpha]" placeholder="코멘트 배경 불투명도" value="<?php echo $skin->op->reply_background_alpha;?>">
<p class="help-inline">(선택 - 기본:투명도 없음) 코멘트 배경색의 불투명도를 설정할 수 있습니다. (0~1 범위) 예 > 40% : <code>0.4</code></p>
<p class="help-block"> <font color=#28c5ff><b>[ RGB 배경 값 전부를 입력해야 불투명도 기능이 정상 작동합니다. (배경색 RGB 값) ]</b></font></p>
</div>
</td>
</tr>
</tr>
<tr>
<td class="span3 td-left">
<p>리플 작성자 정보 ON/OFF</p>
</td>
<td class="span9 td-right">
<div class="controls-group"><p>
<label class="checkbox inline">
<input type="checkbox" id="op['reply_nameoff']" name="op[reply_oponoff]" value="show" <?php if($skin->op->reply_oponoff=="show") echo "checked";?>>코멘트 작성자명</label>
<label class="checkbox inline">
<input type="checkbox" id="op['reply_dataoff']" name="op[reply_dataoff]" value="show" <?php if($skin->op->reply_dataoff=="show") echo "checked";?>>코멘트 작성 날짜</label>
<label class="checkbox inline">
<input type="checkbox" id="op['reply_ipoff']" name="op[reply_ipoff]" value="show" <?php if($skin->op->reply_ipoff=="show") echo "checked";?>>코멘트 작성자 IP</label>
</p></div>
<p class="help-block">리플에 해당 코멘트 작성자의 정보를 표시합니다. 작성자에 무관하게 게시판 전체의 작성자명/코멘트 작성 날짜/작성자 IP 표시를 설정할 수 있습니다.</p>	
</td></tr>
<tr>
<td class="span3 td-left" rowspan="3">
<p>코멘트 작성자명 설정</br>
- 작성자명 색상, 글씨체, 크기</br>
- 작가글 색상  
<a class="retina" href="http://rammenta.ncity.net/wordpress/wp-content/uploads/2015/03/writername.png" title="리플 기본 설정 - 작가글 색상 설명서"><abbr title="작가글 색상 설명" class="initialism">HELP! </abbr></a>
</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[rename_color]" placeholder="작성자명 색상" value="<?php echo $skin->op->rename_color;?>"  >
<p class="help-inline">작성자명 색상을 입력하여 주세요. 예 > <code>#ffffff</code></p></br></br>
<input class="input-xlarge" type="text" name="op[rename_font]" placeholder="작성자명 글씨체" value="<?php echo $skin->op->rename_font;?>"  >
<p class="help-inline">작성자명 글씨체를 설정할 수 있습니다. 예 > <code>tahoma,돋움</code></p><br/><br/>
<input class="input-xlarge" type="text" name="op[rename_size]" placeholder="작성자명 크기" value="<?php echo $skin->op->rename_size;?>"  >
<p class="help-inline">작성자명 크기를 설정할 수 있습니다. 예 > <code>8pt, 12px, 0.8em</code></p>
</td></tr><Tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 리플/리리플 작성자명 그림자/선/굵기 설정 </a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[rename_shadow]" placeholder="작성자명 그림자 옵션" value="<?php echo $skin->op->rename_shadow;?>"  >
<p class="help-inline">작성자명 그림자 옵션을 변경할 수 있습니다. [ text-shadow ] <a href="http://superkts.com/css/text-shadow" target="_blank">[ 해당 옵션 이해를 위한 참고 페이지 ]</a></br>
왼쪽 그림자 시작 위치,위쪽 그림자 시작 위치,그림자 번지기,색상 순서.  예>  <code>1px 1px 2px black</code></p><br/><br/>
<select name="op[rename_deco]">
<option value="none">작성자명 선 설정</option>
<option value="none" <?php if($skin->op->rename_deco=='none') echo 'selected="selected"';?>>선 없음</option>
<option value="underline" <?php if($skin->op->rename_deco=='underline') echo 'selected="selected"';?>>밑줄</option>
<option value="overline" <?php if($skin->op->rename_deco=='overline') echo 'selected="selected"';?>>윗줄</option>
<option value="overline underline" <?php if($skin->op->rename_deco=='overline underline') echo 'selected="selected"';?>>윗+밑줄</option>
<option value="line-through" <?php if($skin->op->rename_deco=='line-through') echo 'selected="selected"';?>>취소선</option>
</select>
<p class="help-inline">작성자명 선 설정을 변경할 수 있습니다. [ text-decoration ] </p><br/><br/>
<select name="op[rename_weight]">
<option value="normal" selected>작성자명 굵기</option>
<option value="normal" <?php if($skin->op->rename_weight=='normal') echo 'selected="selected"';?>>굵기 없음</option>
<option value="bold" <?php if($skin->op->rename_weight=='bold') echo 'selected="selected"';?>>굵음</option>
<option value="100" <?php if($skin->op->rename_weight=='100') echo 'selected="selected"';?>>100</option>
<option value="900" <?php if($skin->op->rename_weight=='900') echo 'selected="selected"';?>>900</option>
</select>
<p class="help-inline">작성자명의 텍스트 굵기를 변경할 수 있습니다. [ font-weight ]</p>
</p>
</td>
</tr>
<tr><td  class="span9 td-right">
<input class="input-xlarge" type="text" name="op[renamewr_color]" placeholder="작가글 색상" value="<?php echo $skin->op->renamewr_color;?>"  >
<p class="help-inline">작가글 색상을 입력하여 주세요. 예 > <code>#ffffff</code></p>
</td></tr>
<tr>
<td class="span3 td-left" rowspan="2">
<p>코멘트 작성 시간 설정  
<a class="iframe" href="http://rammenta.ncity.net/wordpress/?p=132" title="리플 기본 설정 - 시간 정보 표기 설명"><abbr title="시간 정보 표기법 설명서" class="initialism">HELP!</abbr></a></br>
- 작성 시간 색상/글씨체/크기</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[time_type_reply]" placeholder="코멘트 시간 표시 방법" value="<?php echo $skin->op->time_type_reply;?>" required>
<p class="help-inline">코멘트 시간 표시 방법을 설정합니다. 예> <code>Y년m월d일 H시i분s초</code></p>
</td></tr><tr>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[retime_color]" placeholder="코멘트 시간 색상" value="<?php echo $skin->op->retime_color;?>"  >
<p class="help-inline">(선택 - 기본 : #aaaaaa) 코멘트 시간 텍스트 색상을 입력하여 주세요. 예 > <code>#ffffff</code></p></br></br>
<input class="input-xlarge" type="text" name="op[retime_font]" placeholder="코멘트 시간 글씨체" value="<?php echo $skin->op->retime_font;?>"  >
<p class="help-inline">(선택 - 기본 : tahoma) 코멘트 시간 텍스트 글씨체를 설정할 수 있습니다. 예 > <code>tahoma,돋움</code></p><br/><br/>
<input class="input-xlarge" type="text" name="op[retime_size]" placeholder="코멘트 시간 크기" value="<?php echo $skin->op->retime_size;?>"  >
<p class="help-inline">(선택 - 기본 : 7pt) 코멘트 시간 텍스트 크기를 설정할 수 있습니다. 예 > <code>8pt, 12px, 0.8em</code></p>
</td>
</tr>
<tr>
<td class="span3 td-left" rowspan="2">
<p>코멘트 설정</br>
- 코멘트 색상/글씨체/크기</p>
</td>
<td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[reply_text_color]" placeholder="리플 텍스트 색상" value="<?php echo $skin->op->reply_text_color;?>"  required>
<p class="help-inline">(선택 - 기본:#666666) 코멘트 텍스트 색상을 입력하여 주세요. 예 > <code>#ffffff</code></p></br></br>
<input class="input-xlarge" type="text" name="op[reply_text_font]" placeholder="리플 텍스트 글씨체" value="<?php echo $skin->op->reply_text_font;?>"  >
<p class="help-inline">(선택 - 기본:verdana,돋움) 코멘트 텍스트 글씨체를 설정할 수 있습니다. 예 > <code>tahoma,돋움</code></p><br/><br/>
<input class="input-xlarge" type="text" name="op[reply_text_size]" placeholder="리플 텍스트 크기" value="<?php echo $skin->op->reply_text_size;?>"  >
<p class="help-inline">(선택 - 기본:8pt) 코멘트 텍스트 크기를 설정할 수 있습니다. 예 > <code>8pt, 12px, 0.8em</code></p>
</td>
</tr>
<Tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 리플 그림자/밑줄/굵기 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[reply_text_shadow]" placeholder="리플 텍스트 그림자 옵션" value="<?php echo $skin->op->reply_text_shadow;?>"  >
<p class="help-inline">코멘트 텍스트 그림자 옵션을 변경할 수 있습니다. [ text-shadow ] <a href="http://superkts.com/css/text-shadow" target="_blank">[ 해당 옵션 이해를 위한 참고 페이지 ]</a></br>
왼쪽 그림자 시작 위치,위쪽 그림자 시작 위치,그림자 번지기,색상 순서.  예>  <code>1px 1px 2px black</code></p><br/><br/>
<select name="op[reply_text_deco]">
<option value="none">코멘트 텍스트 선 설정</option>
<option value="none" <?php if($skin->op->reply_text_deco=='none') echo 'selected="selected"';?>>선 없음</option>
<option value="underline" <?php if($skin->op->reply_text_deco=='underline') echo 'selected="selected"';?>>밑줄</option>
<option value="overline" <?php if($skin->op->reply_text_deco=='overline') echo 'selected="selected"';?>>윗줄</option>
<option value="overline underline" <?php if($skin->op->reply_text_deco=='overline underline') echo 'selected="selected"';?>>윗+밑줄</option>
<option value="line-through" <?php if($skin->op->reply_text_deco=='line-through') echo 'selected="selected"';?>>취소선</option>
</select>
<p class="help-inline">코멘트 텍스트 선 설정을 변경할 수 있습니다. [ text-decoration ] </p><br/><br/>
<select name="op[reply_text_weight]">
<option value="normal" selected>코멘트 텍스트 굵기</option>
<option value="normal" <?php if($skin->op->reply_text_weight=='normal') echo 'selected="selected"';?>>굵기 없음</option>
<option value="bold" <?php if($skin->op->reply_text_weight=='bold') echo 'selected="selected"';?>>굵음</option>
<option value="100" <?php if($skin->op->reply_text_weight=='100') echo 'selected="selected"';?>>100</option>
<option value="900" <?php if($skin->op->reply_text_weight=='900') echo 'selected="selected"';?>>900</option>
</select>
<p class="help-inline">코멘트 텍스트 굵기를 변경할 수 있습니다. [ font-weight ]</p>
</p>
</td>
</tr>
<tr><td class="span3 td-left">
<p>코멘트 주사위 출력 위치 선택 
<a class="retina" href="http://rammenta.ncity.net/wordpress/wp-content/uploads/2015/03/diceposition.png" title="리플 기본 설정 - 코멘트 주사위 출력 위치 설명서"><abbr title="코멘트 주사위 출력 위치 설명" class="initialism">HELP!</abbr></a></p>
</td><td class="span9 td-right">
<div class="controls-group"><p>
<label class="radio inline">
<input type="radio" id="op['dice_position']" name="op[dice_position]" value="base" <?php if($skin->op->dice_position=="base") echo "checked";?>>기존 위치(작성자명 우측)</label>
<label class="radio inline">
<input type="radio" id="op['dice_position']" name="op[dice_position]" value="front" <?php if($skin->op->dice_position=="front") echo "checked";?>>코멘트 앞쪽</label>
</p>
</div><p class="help-block">주사위 출력 위치를 지정할 수 있습니다. 기존 위치의 경우 작성자명의 우측에, 코멘트 앞쪽의 경우 코멘트 앞쪽에 주사위가 출력 됩니다.</p>
</td>
</tr>

<tr class="selecelement">
<td class="span3 td-left">
<p>(선택) 코멘트 IP 설정 <a class="retina" href="http://rammenta.ncity.net/wordpress/wp-content/uploads/2015/03/ip_comment.png" title="리플 기본 설정 - 코멘트 IP 설정 설명서"><abbr title="코멘트 IP 설정 설명" class="initialism">HELP!</abbr></a></br>
- 코멘트 IP 색상/글씨체/크기</p>
</td><td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[replyip_color]" placeholder="코멘트 IP 색상" value="<?php echo $skin->op->replyip_color;?>"  >
<p class="help-inline">(선택 - 기본:#dddddd) 코멘트 IP 색상을 입력하여 주세요. 예 > <code>#ffffff</code></p></br></br>
<input class="input-xlarge" type="text" name="op[replyip_font]" placeholder="코멘트 IP 글씨체" value="<?php echo $skin->op->replyip_font;?>"  >
<p class="help-inline">(선택 - 기본:tahoma) 코멘트 IP 글씨체를 설정할 수 있습니다. 예 > <code>tahoma,돋움</code></p><br/><br/>
<input class="input-xlarge" type="text" name="op[replyip_size]" placeholder="코멘트 IP 크기" value="<?php echo $skin->op->replyip_size;?>"  >
<p class="help-inline">(선택 - 기본:7pt) 코멘트 IP 크기를 설정할 수 있습니다. 예 > <code>8pt, 12px, 0.8em</code></p>
</td></tr>
<tr>
<td class="span3 td-left">
<p>- (선택) 리리플 좌측 여백/구분 바 설정</p>
</td><td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[rereply_mleft]" placeholder="리리플 좌측 여백"  value="<?php echo $skin->op->rereply_mleft;?>">
<p class="help-inline">리리플 좌측 여백 값을 지정 할 수 있습니다.</p></br></br>
<input class="input-xlarge" type="text" name="op[rereply_bar_width]" placeholder="리리플 구분 바 두께"  value="<?php echo $skin->op->rereply_bar_width;?>">
<p class="help-inline">리리플 구분 바의 두께를 지정 할 수 있습니다.</p></br></br>
<input class="input-xlarge" type="text" name="op[rereply_bar_color]" placeholder="리리플 구분 바 색"  value="<?php echo $skin->op->rereply_bar_color;?>">
<p class="help-inline">리리플 구분 바의 색상을 지정 할 수 있습니다.</p>
</td>
</tr>

<tr>
<td class="span3 td-left" rowspan="3">
<p>메모 설정</br>
- 메모 배경색/색상/글씨체/크기</p>
</td><td class="span9 td-right">

<input class="input-xlarge" type="text" name="op[memo_background_color]" placeholder="메모 배경색" value='<?php echo $skin->op->memo_background_color;?>'>
<p class="help-inline">(선택 - 기본:#ffcbbf) 메모 배경색을 지정 할 수 있습니다.</p></br></br>
<input class="input-xlarge" type="text" name="op[memo_color]" placeholder="메모 색상" value="<?php echo $skin->op->memo_color;?>"  >
<p class="help-inline">(선택 - 기본:white) 메모 색상을 입력하여 주세요. 예 > <code>#ffffff</code></p></br></br>
<input class="input-xlarge" type="text" name="op[memo_font]" placeholder="메모 글씨체" value="<?php echo $skin->op->memo_font;?>"  >
<p class="help-inline">(선택 - 기본:tahoma,돋움) 메모 글씨체를 설정할 수 있습니다. 예 > <code>tahoma,돋움</code></p><br/><br/>
<input class="input-xlarge" type="text" name="op[memo_size]" placeholder="메모 크기" value="<?php echo $skin->op->memo_size;?>"  >
<p class="help-inline">(선택 - 기본:8pt) 메모 크기를 설정할 수 있습니다. 예 > <code>8pt, 12px, 0.8em</code></p>
</td></tr>
<tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 메모 그림자/밑줄/굵기 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[memo_shadow]" placeholder="메모 텍스트 그림자 옵션" value="<?php echo $skin->op->memo_shadow;?>"  >
<p class="help-inline">메모 텍스트의 그림자 옵션을 변경할 수 있습니다. [ text-shadow ] <a href="http://superkts.com/css/text-shadow" target="_blank">[ 해당 옵션 이해를 위한 참고 페이지 ]</a></br>
왼쪽 그림자 시작 위치,위쪽 그림자 시작 위치,그림자 번지기,색상 순서.  예>  <code>1px 1px 2px black</code></p><br/><br/>
<select name="op[memo_deco]">
<option value="none">메모 선 설정</option>
<option value="none" <?php if($skin->op->memo_deco=='none') echo 'selected="selected"';?>>선 없음</option>
<option value="underline" <?php if($skin->op->memo_deco=='underline') echo 'selected="selected"';?>>밑줄</option>
<option value="overline" <?php if($skin->op->memo_deco=='overline') echo 'selected="selected"';?>>윗줄</option>
<option value="overline underline" <?php if($skin->op->memo_deco=='overline underline') echo 'selected="selected"';?>>윗+밑줄</option>
<option value="line-through" <?php if($skin->op->memo_deco=='line-through') echo 'selected="selected"';?>>취소선</option>
</select>
<p class="help-inline">메모 선 설정을 변경할 수 있습니다. [ text-decoration ] </p><br/><br/>
<select name="op[memo_weight]">
<option value="normal" selected>메모 텍스트의 굵기</option>
<option value="normal" <?php if($skin->op->memo_weight=='normal') echo 'selected="selected"';?>>굵기 없음</option>
<option value="bold" <?php if($skin->op->memo_weight=='bold') echo 'selected="selected"';?>>굵음</option>
<option value="100" <?php if($skin->op->memo_weight=='100') echo 'selected="selected"';?>>100</option>
<option value="900" <?php if($skin->op->memo_weight=='900') echo 'selected="selected"';?>>900</option>
</select>
<p class="help-inline">메모 텍스트의 굵기를 설정할 수 있습니다. [ font-weight ]</p>
</div>
</td></tr>
<tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 메모 배경색/배경색 투명도 설정 </a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[memo_background_color_R]" placeholder="배경색 R 값" value="<?php echo $skin->op->memo_background_color_R;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[memo_background_color_G]" placeholder="배경색 G 값" value="<?php echo $skin->op->memo_background_color_G;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[memo_background_color_B]" placeholder="배경색 B 값" value="<?php echo $skin->op->memo_background_color_B;?>" style="width:65px;">
<p class="help-inline">메모 배경색 <b>RGB 값(R,G,B)</b>을 입력하여 주세요. 예 > R <code>255</code> G <code>255</code> B <code>255</code></p></br></br>
<input class="input-xlarge" type="text" name="op[memo_background_alpha]" placeholder="메모 배경 불투명도" value="<?php echo $skin->op->memo_background_alpha;?>">
<p class="help-inline">(선택 - 기본:투명도 없음) 로그 옵션 배경색의 불투명도를 설정할 수 있습니다. (0~1 범위) 예 > 40% : <code>0.4</code></p>
<p class="help-block"><font color=#28c5ff><b>[ RGB 배경 값 전부를 입력해야 불투명도 기능이 정상 작동합니다. (배경색 RGB 값) ]</b></font></p>

</div>
</td></tr>
<tr><td class="span3 td-left">
<p>- 메모 출력 위치 선택 <a class="retina" href="http://rammenta.ncity.net/wordpress/wp-content/uploads/2015/03/memoposition.png" title="리플 기본 설정 - 메모 출력 위치 설명서"><abbr title="메모 출력 위치 설명" class="initialism">HELP!</abbr></a></p>
</td><td class="span9 td-right">
<div class="controls-group"><p>
<label class="radio inline">
<input type="radio" id="op['memo_posit']" name="op[memo_posit]" value="top" <?php if($skin->op->memo_posit=="top") echo "checked";?> required>비밀글/접기 문구 위</label>
<label class="radio inline">
<input type="radio" id="op['memo_posit']" name="op[memo_posit]" value="bottom" <?php if($skin->op->memo_posit=="bottom") echo "checked";?> required>비밀글/접기 문구 아래</label>
</p>
</div><p class="help-block">메모 내용 출력 위치를 지정할 수 있습니다. 비밀글/접기 위의 경우 리플의 비밀글/접기 설정에 상관 없이 출력됩니다.</p>
</td>
</tr>

<tr class="selecelement">
<td class="span3 td-left">
- (선택) 메모-링크-접기 연동 설정 <a class="retina" href="http://rammenta.ncity.net/wordpress/wp-content/uploads/2015/03/memolinkmore.png" title="리플 기본 설정 - 메모/링크/접기 연동 설명서"><abbr title="메모/링크/접기 연동 설명" class="initialism">HELP!</abbr></a>
</td><td class="span9 td-right">
<select name="op[melinmore]">
<option value="none">메모-링크-접기 연동</option>
<option value="none" <?php if($skin->op->melinmore=='none') echo 'selected';?>>사용하지 않음</option>
<option value="linkfirst" <?php if($skin->op->melinmore=='linkfirst') echo 'selected';?>>메모-링크-접기 연동(링크 우선)</option>
<option value="morefirst" <?php if($skin->op->melinmore=='morefirst') echo 'selected';?>>메모-링크-접기 연동(접기 우선)</option>
<option value="link" <?php if($skin->op->melinmore=='link') echo 'selected';?>>메모-링크 연동</option>
<option value="more" <?php if($skin->op->melinmore=='more') echo 'selected';?>>메모-접기 연동</option>
</select>
<p class="help-inline">메모가 있을 때 <b>메모 클릭 시</b> 코멘트 접기/링크 기능이 작동하도록 설정할 수 있습니다.</p>
</td>
</tr>

<tr>
<th colspan="2" class="span12" id="ndd_replywrite">
리플 작성창 설정
</th>
</tr>
<tr>
<td class="span3 td-left">
<p>리플 작성창 설정</p>
</td>
<td class="span9 td-right">
<div class="controls-group"><p>
<label class="checkbox inline">
<input type="checkbox" id="op['comf_rreset']" name="op[comf_rreset]" value="show" <?php if($skin->op->comf_rreset=="show") echo "checked";?>>리플 리셋 버튼</label>
<label class="checkbox inline">
<input type="checkbox" id="op['comf_emo']" name="op[comf_emo]" value="show" <?php if($skin->op->comf_emo=="show") echo "checked";?>>이모티콘 버튼</label>
<label class="checkbox inline">
<input type="checkbox" id="op['comf_more']" name="op[comf_more]" value="on" <?php if($skin->op->comf_more=="on") echo "checked";?>>작성창 접기</label>
<label class="checkbox inline">
<input type="checkbox" id="op['comf_tline']" name="op[comf_tline]" value="on" <?php if($skin->op->comf_tline=="on") echo "checked";?>>이름/비밀번호 입력창 단락 내리기</label>
</p></div>
<p class="help-block">리플 작성창 기능들의 ON/OFF를 설정할 수 있습니다.</p>
</td>
</tr>
<tr class="selecelement">
<td class="span3 td-left" rowspan="2">
<p>- (선택) 리플 작성창 디자인 설정</p>
</td><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 이모티콘창/코멘트창 접기 아이콘을 텍스트로 사용할 경우 텍스트 색상/글씨체/크기 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[comf_color]" placeholder="이모티콘/코멘트 표시 텍스트 색상" value="<?php echo $skin->op->comf_color;?>"  >
<p class="help-inline">(선택 - 기본 :#fcff96) 코멘트 시간 텍스트 색상을 입력하여 주세요. 예 > <code>#ffffff</code></p></br></br>
<input class="input-xlarge" type="text" name="op[comf_font]" placeholder="이모티콘/코멘트 표시 텍스트 글씨체" value="<?php echo $skin->op->comf_font;?>"  >
<p class="help-inline">(선택 - 기본 :tahoma) 코멘트 시간 텍스트 글씨체를 설정할 수 있습니다. 예 > <code>tahoma,돋움</code></p><br/><br/>
<input class="input-xlarge" type="text" name="op[comf_size]" placeholder="이모티콘/코멘트 표시 텍스트 크기" value="<?php echo $skin->op->comf_size;?>"  >
<p class="help-inline">(선택 - 기본 :7pt) 코멘트 시간 텍스트 크기를 설정할 수 있습니다. 예 > <code>8pt, 12px, 0.8em</code></p>
</div>
</td></tr>
<tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 이모티콘창/코멘트창 접기 아이콘을 텍스트로 사용할 경우 그림자/밑줄/굵기 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[comf_shadow]" placeholder="이모티콘/코멘트 텍스트 그림자 옵션" value="<?php echo $skin->op->comf_shadow;?>"  >
<p class="help-inline">해당 텍스트의 그림자 옵션을 변경할 수 있습니다. [ text-shadow ] <a href="http://superkts.com/css/text-shadow" target="_blank">[ 해당 옵션 이해를 위한 참고 페이지 ]</a></br>
왼쪽 그림자 시작 위치,위쪽 그림자 시작 위치,그림자 번지기,색상 순서.  예>  <code>1px 1px 2px black</code></p><br/><br/>
<select name="op[comf_deco]">
<option value="none"> 텍스트  선 설정</option>
<option value="none" <?php if($skin->op->comf_deco=='none') echo 'selected="selected"';?>>선 없음</option>
<option value="underline" <?php if($skin->op->comf_deco=='underline') echo 'selected="selected"';?>>밑줄</option>
<option value="overline" <?php if($skin->op->comf_deco=='overline') echo 'selected="selected"';?>>윗줄</option>
<option value="overline underline" <?php if($skin->op->comf_deco=='overline underline') echo 'selected="selected"';?>>윗+밑줄</option>
<option value="line-through" <?php if($skin->op->comf_deco=='line-through') echo 'selected="selected"';?>>취소선</option>
</select>
<p class="help-inline">이모티콘/코멘트 텍스트의 선 설정을 변경할 수 있습니다. [ text-decoration ] </p><br/><br/>
<select name="op[comf_weight]">
<option value="normal" selected>이모티콘/코멘트 텍스트의 굵기</option>
<option value="normal" <?php if($skin->op->comf_weight=='normal') echo 'selected="selected"';?>>굵기 없음</option>
<option value="bold" <?php if($skin->op->comf_weight=='bold') echo 'selected="selected"';?>>굵음</option>
<option value="100" <?php if($skin->op->comf_weight=='100') echo 'selected="selected"';?>>100</option>
<option value="900" <?php if($skin->op->comf_weight=='900') echo 'selected="selected"';?>>900</option>
</select>
<p class="help-inline">이모티콘/코멘트 텍스트의 굵기를 설정할 수 있습니다. [ font-weight ]</p>
</div>
</td></tr>
<tr class="selecelement">
<td class="span3 td-left" rowspan="2">
<p>- (선택) 리플 작성창 입력란 설정</p>
</td><td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[comfinp_border_color]" placeholder="리플 입력란 선 색 & 굵기" value="<?php echo $skin->op->comfinp_border_color;?>">
<select name="op[comfinp_border_type]">
<option value="">선 종류</option>
<option value="solid" <?php if($skin->op->comfinp_border_type=='solid') echo 'selected="selected"';?>>일반 선</option>
<option value="dotted" <?php if($skin->op->comfinp_border_type=='dotted') echo 'selected="selected"';?>>점(・) 선</option>
<option value="dashed" <?php if($skin->op->comfinp_border_type=='dashed') echo 'selected="selected"';?>>대쉬(-) 선</option>
<option value="double" <?php if($skin->op->comfinp_border_type=='double') echo 'selected="selected"';?>>이중 선</option>
<option value="groove" <?php if($skin->op->comfinp_border_type=='groove') echo 'selected="selected"';?>>홈 모양 선</option>
<option value="ridge" <?php if($skin->op->comfinp_border_type=='ridge') echo 'selected="selected"';?>>돌출 선</option>
<option value="inset" <?php if($skin->op->comfinp_border_type=='inset') echo 'selected="selected"';?>>내부 엠보싱</option>
<option value="outset" <?php if($skin->op->comfinp_border_type=='outset') echo 'selected="selected"';?>>외부 엠보싱</option>
</select>
<p class="help-inline">리플 입력란의 선 색과 굵기를 입력하여 주세요.예 > <code>#ffffff 1px</code></p></br></br>

<input class="input-xlarge" type="text" name="op[comfinp_font_color]" placeholder="리플 입력란 글씨 색상" value="<?php echo $skin->op->comfinp_font_color;?>">
<p class="help-inline">리플 입력란 글씨 색상을 지정할 수 있습니다.</p></br></br>

<input class="input-xlarge" type="text" name="op[comfinp_background_color]" placeholder="리플 입력란의 배경색" value="<?php echo $skin->op->comfinp_background_color;?>">
<p class="help-inline">리플 입력란의 배경 색상을 지정할 수 있습니다.</p>
</td></tr><tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 리플 작성창 입력란 배경 색/배경 투명도 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[comfinp_background_color_R]" placeholder="배경색 R 값" value="<?php echo $skin->op->comfinp_background_color_R;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[comfinp_background_color_G]" placeholder="배경색 G 값" value="<?php echo $skin->op->comfinp_background_color_G;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[comfinp_background_color_B]" placeholder="배경색 B 값" value="<?php echo $skin->op->comfinp_background_color_B;?>" style="width:65px;">
<p class="help-inline">입력란 배경색 <b>RGB 값(R,G,B)</b>을 입력하여 주세요. 예 > R <code>255</code> G <code>255</code> B <code>255</code></p></br></br>
<input class="input-xlarge" type="text" name="op[comfinp_background_alpha]" placeholder="리플 작성창 입력란 배경 불투명도" value="<?php echo $skin->op->comfinp_background_alpha;?>">
<p class="help-inline">(선택 - 기본:투명도 없음) 입력란 배경색의 불투명도를 설정할 수 있습니다. (0~1 범위) 예 > 40% : <code>0.4</code></p>
<p class="help-block"> <font color=#28c5ff><b>[ RGB 배경 값 전부를 입력해야 불투명도 기능이 정상 작동합니다. (배경색 RGB 값) ]</b></font></p>
</div>
</td>
</tr>

<tr>
<th colspan="2" class="span12" id="ndd_icons">
스킨 아이콘  ▶ <font color=28c5ff>아이콘을 스킨 파일 중 images 폴더 내의 이미지로 사용하려면 다음의 주소 사용 <code>< img src="skin/MnM/images/파일명.확장자명"></code></font>

</th>
</tr>
<tr>
<td class="span3 td-left">
<p>업로드 - 치비툴 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[chibi_icon]" placeholder="치비툴 아이콘" required value='<?php echo $skin->op->chibi_icon;?>'>
<p class="help-block">치비툴 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>업로드 - 로드 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[load_icon]" placeholder="로드 아이콘" required value='<?php echo $skin->op->load_icon;?>'>
<p class="help-block">로드 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>상단 메뉴 - 1페이지 이동 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[topmtop_icon]" placeholder="1페이지로 이동 아이콘" required value='<?php echo $skin->op->topmtop_icon;?>'>
<p class="help-block">새로고침 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>상단 메뉴 - 새로고침 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[reflash_icon]" placeholder="새로고침 아이콘" required value='<?php echo $skin->op->reflash_icon;?>'>
<p class="help-block">새로고침 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>상단 메뉴 - 로그인 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[login_icon]" placeholder="로그인 아이콘" required value='<?php echo $skin->op->login_icon;?>'>
<p class="help-block">로그인 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>상단 메뉴 - 로그아웃 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[logout_icon]" placeholder="로그아웃 아이콘" required value='<?php echo $skin->op->logout_icon;?>'>
<p class="help-block">로그아웃 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>상단 메뉴 - 게시판 관리 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[admin_icon]" placeholder="게시판 관리 아이콘" required value='<?php echo $skin->op->admin_icon;?>'>
<p class="help-block">게시판관리 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>상단 메뉴 - 멤버 로그인 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[icon]" placeholder="멤버 로그인 아이콘" value='<?php echo $skin->op->icon;?>'>
<p class="help-block">멤버 로그인 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>상단 메뉴 - 이모티콘 리스트 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[emoticon_icon]" placeholder="이모티콘 리스트 아이콘" required value='<?php echo $skin->op->emoticon_icon;?>'>
<p class="help-block">이모티콘 리스트 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>상단 메뉴 - 멤버 가입 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[topmjoin_icon]" placeholder="멤버 가입 아이콘" value='<?php echo $skin->op->topmjoin_icon;?>'>
<p class="help-block">멤버 가입 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>상단 메뉴 - 멤버 프로필 수정 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[topmpm_icon]" placeholder="멤버 프로필 수정 아이콘" value='<?php echo $skin->op->topmpm_icon;?>'>
<p class="help-block">멤버 프로필 수정 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>리플/로그 공통 - 접기 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[more_icon]" placeholder="접기 아이콘" required value='<?php echo $skin->op->more_icon;?>'>
<p class="help-block">접기 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>리플/로그 공통 - 비공개 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[secret_icon]" placeholder="비공개 아이콘" required value='<?php echo $skin->op->secret_icon;?>'>
<p class="help-block">비공개(비밀글/비밀로그) 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>리플/로그 공통 - 멤버 공개 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[msecret_icon]" placeholder="멤버 비밀 아이콘" value='<?php echo $skin->op->msecret_icon;?>'>
<p class="help-block">멤버 공개 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>리플/로그 공통 - 비밀글 표시 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[secret_icon_self]" placeholder="비공개 표시 아이콘" required value='<?php echo $skin->op->secret_icon_self;?>'>
<p class="help-block">작성한 비공개 로그/글 표시 아이콘(관리자/작성자인 경우)을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>리플/로그 공통 - IP 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[replyip_icon]" placeholder="IP 표시 아이콘" value='<?php echo $skin->op->replyip_icon;?>'>
<p class="help-block">IP 표시 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>로그 - 로그 번호 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[lognum_icon]" placeholder="로그 번호 아이콘" value='<?php echo $skin->op->lognum_icon;?>'>
<p class="help-block">로그 번호 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>로그 - 그림 옵션 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[op_icon]" placeholder="그림 옵션 아이콘" required value='<?php echo $skin->op->op_icon;?>'>
<p class="help-block">그림 옵션 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>로그 - 이어그리기 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[continue_icon]" placeholder="이어그리기 아이콘" required value='<?php echo $skin->op->continue_icon;?>'>
<p class="help-block">이어그리기 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>로그 - 축소 표시 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[expand_icon]" placeholder="축소 표시 아이콘" value='<?php echo $skin->op->expand_icon;?>'>
<p class="help-block">이미지 축소 표시 아이콘 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>로그 -  새 창으로 열기 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[logwin_icon]" placeholder="새 창으로 열기 아이콘" value='<?php echo $skin->op->logwin_icon;?>'>
<p class="help-block">새 창으로 열기 기능을 설정했을 때 새 창으로 열기 아이콘을 변경할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>로그 -  로그 리플 전체 접기 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[logmore_icon]" placeholder="로그 리플 접기 아이콘" required value='<?php echo $skin->op->logmore_icon;?>'>
<p class="help-block">로그 리플 전체 접기 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>리플 - 글쓰기 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[write_icon]" placeholder="글쓰기 아이콘" required value='<?php echo $skin->op->write_icon;?>'>
<p class="help-block">글쓰기 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>리플 - 작성창 이모티콘 리스트 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[comf_emo_icon]" placeholder="작성창 이모티콘 리스트 아이콘" value='<?php echo $skin->op->comf_emo_icon;?>'>
<p class="help-block">작성창 이모티콘 리스트 아이콘을 설정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>리플 - 코멘트 작성창 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[comf_more_icon]" placeholder="코멘트 작성창 아이콘" value='<?php echo $skin->op->comf_more_icon;?>'>
<p class="help-block">코멘트 작성창 아이콘을 설정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>리플 - 리플 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[reply_icon]" placeholder="리리플 아이콘" required value='<?php echo $skin->op->reply_icon;?>'>
<p class="help-block">리리플 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>리플 - 수정 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[modify_icon]" placeholder="수정 아이콘" required value='<?php echo $skin->op->modify_icon;?>'>
<p class="help-block">수정 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>리플 - 삭제 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[del_icon]" placeholder="삭제 아이콘" required value='<?php echo $skin->op->del_icon;?>'>
<p class="help-block">삭제 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>리플 - 작가글 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[painter_icon]" placeholder="작가글 아이콘" value='<?php echo $skin->op->painter_icon;?>'>
<p class="help-block">작가글 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>리플 - 홈페이지 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[hp_icon]" placeholder="링크 아이콘" required value='<?php echo $skin->op->hp_icon;?>'>
<p class="help-block">링크(=홈페이지) 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>리플 - 메모 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[memo_icon]" placeholder="메모 아이콘" value='<?php echo $skin->op->memo_icon;?>'>
<p class="help-block">메모 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>

<tr>
<th colspan="2" class="span12" id="ndd_secretmode">
비공개 게시판 설정 (2015.09.22 업데이트)
</th>
</tr>








<tr>
<td class="span3 td-left">
<p>게시판 비공개 알림 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[secretboard_word]" placeholder="게시판 비공개 알림 아이콘" value='<?php echo $skin->op->secretboard_word;?>'>
<p class="help-block">게시판 비공개 알림 아이콘을 지정 할 수 있습니다. (이미지 태그로 이미지 사용 가능)</p>
</td>
</tr>
<tr class="selecelement">
<td class="span3 td-left" rowspan="3">
<p>- (선택) 게시판 비공개 알림 아이콘 디자인 설정</p>
</td><td class="span9 td-right selecelement">
<input class="input-xlarge" type="text" name="op[secretboard_wcolor]" placeholder="게시판 비공개 알림 텍스트 색상" value="<?php echo $skin->op->secretboard_wcolor;?>"  >
<p class="help-inline">(선택 - 기본 :#fafafa) 게시판 비공개 알림 색상을 입력하여 주세요. 예 > <code>#ffffff</code></p></br></br>
<input class="input-xlarge" type="text" name="op[secretboard_wfam]" placeholder="게시판 비공개 알림 텍스트 글씨체" value="<?php echo $skin->op->secretboard_wfam;?>"  >
<p class="help-inline">(선택 - 기본 :Franklin Gothic) 게시판 비공개 알림 글씨체를 설정할 수 있습니다. 예 > <code>tahoma,돋움</code></p><br/><br/>
<input class="input-xlarge" type="text" name="op[secretboard_wsize]" placeholder="게시판 비공개 알림 텍스트 크기" value="<?php echo $skin->op->secretboard_wsize;?>"  >
<p class="help-inline">(선택 - 기본 :20px) 게시판 비공개 알림 글씨 크기를 설정할 수 있습니다. 예 > <code>8pt, 12px, 0.8em</code></p></br></br>

<input class="input-xlarge" type="text" name="op[secretboard_wbg]" placeholder="게시판 비공개 알림 텍스트의 배경색" value="<?php echo $skin->op->secretboard_wbg;?>">
<p class="help-inline">(선택 - 기본 :transparent) 게시판 비공개 알림 텍스트의 배경 색상을 지정할 수 있습니다.</p>

</td></tr>

<tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 게시판 비공개 알림 아이콘을 텍스트로 사용할 경우 그림자/밑줄/굵기 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[secretboard_wshadow]" placeholder="게시판 비공개 알림 텍스트 그림자 옵션" value="<?php echo $skin->op->secretboard_wshadow;?>"  >
<p class="help-inline">해당 텍스트의 그림자 옵션을 변경할 수 있습니다. [ text-shadow ] <a href="http://superkts.com/css/text-shadow" target="_blank">[ 해당 옵션 이해를 위한 참고 페이지 ]</a></br>
왼쪽 그림자 시작 위치,위쪽 그림자 시작 위치,그림자 번지기,색상 순서.  예>  <code>1px 1px 2px black</code></p><br/><br/>
<select name="op[secretboard_wdeco]">
<option value="none"> 텍스트  선 설정</option>
<option value="none" <?php if($skin->op->secretboard_wdeco=='none') echo 'selected="selected"';?>>선 없음</option>
<option value="underline" <?php if($skin->op->secretboard_wdeco=='underline') echo 'selected="selected"';?>>밑줄</option>
<option value="overline" <?php if($skin->op->secretboard_wdeco=='overline') echo 'selected="selected"';?>>윗줄</option>
<option value="overline underline" <?php if($skin->op->secretboard_wdeco=='overline underline') echo 'selected="selected"';?>>윗+밑줄</option>
<option value="line-through" <?php if($skin->op->secretboard_wdeco=='line-through') echo 'selected="selected"';?>>취소선</option>
</select>
<p class="help-inline">(선택 - 기본:선 없음)게시판 비공개 알림 텍스트의 선 설정을 변경할 수 있습니다. [ text-decoration ] </p><br/><br/>
<select name="op[secretboard_wbold]">
<option value="normal" selected>텍스트의 굵기</option>
<option value="normal" <?php if($skin->op->secretboard_wbold=='normal') echo 'selected="selected"';?>>굵기 없음</option>
<option value="bold" <?php if($skin->op->secretboard_wbold=='bold') echo 'selected="selected"';?>>굵음</option>
<option value="100" <?php if($skin->op->secretboard_wbold=='100') echo 'selected="selected"';?>>100</option>
<option value="900" <?php if($skin->op->secretboard_wbold=='900') echo 'selected="selected"';?>>900</option>
</select>
<p class="help-inline">(선택 - 기본:굵음) 게시판 비공개 알림 텍스트의 굵기를 설정할 수 있습니다. [ font-weight ]</p>
</div>
</td></tr>


<tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 게시판 비공개 알림 아이콘을 텍스트로 사용할 경우 배경 투명도/테두리 색/테두리 굵기/테두리 곡률 설정</a><div style="display: none;">

<input class="input-xlarge" type="text" name="op[secretboard_wbgr]" placeholder="배경색 R 값" value="<?php echo $skin->op->secretboard_wbgr;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[secretboard_wbgg]" placeholder="배경색 G 값" value="<?php echo $skin->op->secretboard_wbgg;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[secretboard_wbgb]" placeholder="배경색 B 값" value="<?php echo $skin->op->secretboard_wbgb;?>" style="width:65px;">
<p class="help-inline">텍스트 배경색 <b>RGB 값(R,G,B)</b>을 입력하여 주세요. 예 > R <code>255</code> G <code>255</code> B <code>255</code></p></br></br>
<input class="input-xlarge" type="text" name="op[secretboard_wbga]" placeholder=" 게시판 비공개 알림 아이콘 배경 불투명도" value="<?php echo $skin->op->secretboard_wbga;?>">
<p class="help-inline">(선택 - 기본:0) 텍스트 배경색의 불투명도를 설정할 수 있습니다. (0~1 범위) 예 > 40% : <code>0.4</code></p>
<p class="help-block"> <font color=#28c5ff><b>[ RGB 배경 값 전부를 입력해야 불투명도 기능이 정상 작동합니다. (배경색 RGB 값) ]</b></font></p><br>
<input class="input-xlarge" type="text" name="op[secretboard_wbcr]" placeholder="게시판 비공개 알림 아이콘 선 색 & 굵기" value="<?php echo $skin->op->secretboard_wbcr;?>">
<select name="op[secretboard_wbty]">
<option value="">선 종류</option>
<option value="solid" <?php if($skin->op->secretboard_wbty=='solid') echo 'selected="selected"';?>>일반 선</option>
<option value="dotted" <?php if($skin->op->secretboard_wbty=='dotted') echo 'selected="selected"';?>>점(・) 선</option>
<option value="dashed" <?php if($skin->op->secretboard_wbty=='dashed') echo 'selected="selected"';?>>대쉬(-) 선</option>
<option value="double" <?php if($skin->op->secretboard_wbty=='double') echo 'selected="selected"';?>>이중 선</option>
<option value="groove" <?php if($skin->op->secretboard_wbty=='groove') echo 'selected="selected"';?>>홈 모양 선</option>
<option value="ridge" <?php if($skin->op->secretboard_wbty=='ridge') echo 'selected="selected"';?>>돌출 선</option>
<option value="inset" <?php if($skin->op->secretboard_wbty=='inset') echo 'selected="selected"';?>>내부 엠보싱</option>
<option value="outset" <?php if($skin->op->secretboard_wbty=='outset') echo 'selected="selected"';?>>외부 엠보싱</option>
</select>
<p class="help-inline">게시판 비공개 알림 아이콘의 테두리 선 색과 굵기를 입력하여 주세요.예 > <code>#ffffff 1px</code></p></br></br>
<input class="input-xlarge" type="text" name="op[secretboard_wrad]" placeholder="비밀번호 입력란 외곽 둥글기" value="<?php echo $skin->op->secretboard_wrad;?>">
<p class="help-inline">(선택 - 기본:0px) 게시판 비공개 알림 아이콘 외곽의 둥글기를 지정할 수 있습니다.</p>
</div>
</td></tr>


<tr>
<td class="span3 td-left" rowspan="2">
<p>비공개 게시판 비밀번호 입력란 설정</p>
</td><td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[secretboard_passbcr]" placeholder="비밀번호 입력란 선 색 & 굵기" value="<?php echo $skin->op->secretboard_passbcr;?>">
<select name="op[secretboard_passbty]">
<option value="">선 종류</option>
<option value="solid" <?php if($skin->op->secretboard_passbty=='solid') echo 'selected="selected"';?>>일반 선</option>
<option value="dotted" <?php if($skin->op->secretboard_passbty=='dotted') echo 'selected="selected"';?>>점(・) 선</option>
<option value="dashed" <?php if($skin->op->secretboard_passbty=='dashed') echo 'selected="selected"';?>>대쉬(-) 선</option>
<option value="double" <?php if($skin->op->secretboard_passbty=='double') echo 'selected="selected"';?>>이중 선</option>
<option value="groove" <?php if($skin->op->secretboard_passbty=='groove') echo 'selected="selected"';?>>홈 모양 선</option>
<option value="ridge" <?php if($skin->op->secretboard_passbty=='ridge') echo 'selected="selected"';?>>돌출 선</option>
<option value="inset" <?php if($skin->op->secretboard_passbty=='inset') echo 'selected="selected"';?>>내부 엠보싱</option>
<option value="outset" <?php if($skin->op->secretboard_passbty=='outset') echo 'selected="selected"';?>>외부 엠보싱</option>
</select>
<p class="help-inline">비밀번호 입력란의 선 색과 굵기를 입력하여 주세요.예 > <code>#ffffff 1px</code></p></br></br>

<input class="input-xlarge" type="text" name="op[secretboard_passcolor]" placeholder="비밀번호 입력란 글씨 색상" value="<?php echo $skin->op->secretboard_passcolor;?>">
<p class="help-inline">비밀번호 입력란 글씨 색상을 지정할 수 있습니다.</p></br></br>

<input class="input-xlarge" type="text" name="op[secretboard_passbg]" placeholder="비밀번호 입력란의 배경색" value="<?php echo $skin->op->secretboard_passbg;?>">
<p class="help-inline">비밀번호 입력란의 배경 색상을 지정할 수 있습니다.</p></br></br>

<input class="input-xlarge" type="text" name="op[secretboard_passwidth]" placeholder="비밀번호 입력란의 너비" value="<?php echo $skin->op->secretboard_passwidth;?>">
<p class="help-inline">비밀번호 입력란의 너비를 지정할 수 있습니다.</p>
</td></tr><tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 비밀번호 입력란 배경 색/배경 투명도/테두리 곡률 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[secretboard_passbgr]" placeholder="배경색 R 값" value="<?php echo $skin->op->secretboard_passbgr;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[secretboard_passbgg]" placeholder="배경색 G 값" value="<?php echo $skin->op->secretboard_passbgg;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[secretboard_passbgb]" placeholder="배경색 B 값" value="<?php echo $skin->op->secretboard_passbgb;?>" style="width:65px;">
<p class="help-inline">입력란 배경색 <b>RGB 값(R,G,B)</b>을 입력하여 주세요. 예 > R <code>255</code> G <code>255</code> B <code>255</code></p></br></br>
<input class="input-xlarge" type="text" name="op[secretboard_passbga]" placeholder="비밀번호 입력란 배경 불투명도" value="<?php echo $skin->op->secretboard_passbga;?>">
<p class="help-inline">(선택 - 기본:1) 입력란 배경색의 불투명도를 설정할 수 있습니다. (0~1 범위) 예 > 40% : <code>0.4</code></p>
<p class="help-block"> <font color=#28c5ff><b>[ RGB 배경 값 전부를 입력해야 불투명도 기능이 정상 작동합니다. (배경색 RGB 값) ]</b></font></p><br>
<input class="input-xlarge" type="text" name="op[secretboard_passrad]" placeholder="비밀번호 입력란 외곽 둥글기" value="<?php echo $skin->op->secretboard_passrad;?>">
<p class="help-inline">(선택 - 기본:0px) 비밀번호 입력란 외곽의 둥글기를 지정할 수 있습니다.</p>
</div>
</td>
</tr>
<tr>
<td class="span3 td-left">
<p>비공개 게시판 로그인 아이콘</p>
</td>
<td class="span9 td-right">
<input class="input-xxlarge" type="text" name="op[secretboard_goword]" placeholder="게시판 비공개 로그인 아이콘" value='<?php echo $skin->op->secretboard_goword;?>'>
<p class="help-block">비공개 게시판 로그인 아이콘을 지정 할 수 있습니다.</p>
</td>
</tr>

<td class="span3 td-left" rowspan="3">
<p>- (선택) 비공개 게시판 로그인 아이콘 디자인 설정</p>
</td><td class="span9 td-right selecelement">
<input class="input-xlarge" type="text" name="op[secretboard_gocolor]" placeholder="게시판 비공개 알림 텍스트 색상" value="<?php echo $skin->op->secretboard_gocolor;?>"  >
<p class="help-inline">(선택 - 기본:white) 비공개 게시판 로그인 아이콘 글씨 색상을 입력하여 주세요. 예 > <code>#ffffff</code></p></br></br>
<input class="input-xlarge" type="text" name="op[secretboard_gofam]" placeholder="게시판 비공개 알림 텍스트 글씨체" value="<?php echo $skin->op->secretboard_gofam;?>"  >
<p class="help-inline">(선택 - 기본:tahoma) 비공개 게시판 로그인 아이콘  글씨체를 설정할 수 있습니다. 예 > <code>tahoma,돋움</code></p><br/><br/>
<input class="input-xlarge" type="text" name="op[secretboard_gosize]" placeholder="게시판 비공개 알림 텍스트 크기" value="<?php echo $skin->op->secretboard_gosize;?>"  >
<p class="help-inline">(선택 - 기본:8px) 비공개 게시판 로그인 아이콘 글씨 크기를 설정할 수 있습니다. 예 > <code>8pt, 12px, 0.8em</code></p></br></br>

<input class="input-xlarge" type="text" name="op[secretboard_gobg]" placeholder="비공개 게시판 로그인 텍스트의 배경색" value="<?php echo $skin->op->secretboard_gobg;?>">
<p class="help-inline">(선택 - 기본:#ffa89e) 비공개 게시판 로그인 텍스트의 배경 색상을 지정할 수 있습니다.</p>

</td></tr>

<tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 비공개 게시판 로그인 아이콘을 텍스트로 사용할 경우 그림자/밑줄/굵기 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[secretboard_goshadow]" placeholder="비공개 게시판 로그인 텍스트 그림자 옵션" value="<?php echo $skin->op->secretboard_goshadow;?>"  >
<p class="help-inline">해당 텍스트의 그림자 옵션을 변경할 수 있습니다. [ text-shadow ] <a href="http://superkts.com/css/text-shadow" target="_blank">[ 해당 옵션 이해를 위한 참고 페이지 ]</a></br>
왼쪽 그림자 시작 위치,위쪽 그림자 시작 위치,그림자 번지기,색상 순서.  예>  <code>1px 1px 2px black</code></p><br/><br/>
<select name="op[secretboard_godeco]">
<option value="none"> 텍스트  선 설정</option>
<option value="none" <?php if($skin->op->secretboard_godeco=='none') echo 'selected="selected"';?>>선 없음</option>
<option value="underline" <?php if($skin->op->secretboard_godeco=='underline') echo 'selected="selected"';?>>밑줄</option>
<option value="overline" <?php if($skin->op->secretboard_godeco=='overline') echo 'selected="selected"';?>>윗줄</option>
<option value="overline underline" <?php if($skin->op->secretboard_godeco=='overline underline') echo 'selected="selected"';?>>윗+밑줄</option>
<option value="line-through" <?php if($skin->op->secretboard_godeco=='line-through') echo 'selected="selected"';?>>취소선</option>
</select>
<p class="help-inline">(선택 - 기본:선 없음) 비공개 게시판 로그인 텍스트의 선 설정을 변경할 수 있습니다. [ text-decoration ] </p><br/><br/>
<select name="op[secretboard_gobold]">
<option value="normal" selected>텍스트의 굵기</option>
<option value="normal" <?php if($skin->op->secretboard_gobold=='normal') echo 'selected="selected"';?>>굵기 없음</option>
<option value="bold" <?php if($skin->op->secretboard_gobold=='bold') echo 'selected="selected"';?>>굵음</option>
<option value="100" <?php if($skin->op->secretboard_gobold=='100') echo 'selected="selected"';?>>100</option>
<option value="900" <?php if($skin->op->secretboard_gobold=='900') echo 'selected="selected"';?>>900</option>
</select>
<p class="help-inline">(선택 - 기본:굵기 없음) 비공개 게시판 로그인 아이콘 텍스트의 굵기를 설정할 수 있습니다. [ font-weight ]</p>
</div>
</td></tr>


<tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 비공개 게시판 로그인 아이콘을 텍스트로 사용할 경우 배경 투명도/테두리 색/테두리 굵기/테두리 곡률 설정</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[secretboard_gobgr]" placeholder="배경색 R 값" value="<?php echo $skin->op->secretboard_gobgr;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[secretboard_gobgg]" placeholder="배경색 G 값" value="<?php echo $skin->op->secretboard_gobgg;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[secretboard_gobgb]" placeholder="배경색 B 값" value="<?php echo $skin->op->secretboard_gobgb;?>" style="width:65px;">
<p class="help-inline">텍스트 배경색 <b>RGB 값(R,G,B)</b>을 입력하여 주세요. 예 > R <code>255</code> G <code>255</code> B <code>255</code></p></br></br>
<input class="input-xlarge" type="text" name="op[secretboard_gobga]" placeholder="비공개 게시판 로그인 아이콘 배경 불투명도" value="<?php echo $skin->op->secretboard_gobga;?>">
<p class="help-inline">(선택 - 기본:0) 텍스트 배경색의 불투명도를 설정할 수 있습니다. (0~1 범위) 예 > 40% : <code>0.4</code></p>
<p class="help-block"> <font color=#28c5ff><b>[ RGB 배경 값 전부를 입력해야 불투명도 기능이 정상 작동합니다. (배경색 RGB 값) ]</b></font></p><br>
<input class="input-xlarge" type="text" name="op[secretboard_gobcr]" placeholder="비공개 게시판 로그인 아이콘 선 색 & 굵기" value="<?php echo $skin->op->secretboard_gobcr;?>">
<select name="op[secretboard_gobty]">
<option value="">선 종류</option>
<option value="solid" <?php if($skin->op->secretboard_gobty=='solid') echo 'selected="selected"';?>>일반 선</option>
<option value="dotted" <?php if($skin->op->secretboard_gobty=='dotted') echo 'selected="selected"';?>>점(・) 선</option>
<option value="dashed" <?php if($skin->op->secretboard_gobty=='dashed') echo 'selected="selected"';?>>대쉬(-) 선</option>
<option value="double" <?php if($skin->op->secretboard_gobty=='double') echo 'selected="selected"';?>>이중 선</option>
<option value="groove" <?php if($skin->op->secretboard_gobty=='groove') echo 'selected="selected"';?>>홈 모양 선</option>
<option value="ridge" <?php if($skin->op->secretboard_gobty=='ridge') echo 'selected="selected"';?>>돌출 선</option>
<option value="inset" <?php if($skin->op->secretboard_gobty=='inset') echo 'selected="selected"';?>>내부 엠보싱</option>
<option value="outset" <?php if($skin->op->secretboard_gobty=='outset') echo 'selected="selected"';?>>외부 엠보싱</option>
</select>
<p class="help-inline">비공개 게시판 로그인 아이콘의 테두리 선 색과 굵기를 입력하여 주세요.예 > <code>#ffffff 1px</code></p></br></br>
<input class="input-xlarge" type="text" name="op[secretboard_gorad]" placeholder="비밀번호 입력란 외곽 둥글기" value="<?php echo $skin->op->secretboard_gorad;?>">
<p class="help-inline">(선택 - 기본:3px) 비공개 게시판 로그인 아이콘 외곽의 둥글기를 지정할 수 있습니다.</p>
</div>
</td></tr>


<tr>
<th colspan="2" class="span12" id="ndd_chromescroll">
(크롬 전용) 스크롤바 설정 (2015.09.22 업데이트)
</th>
</tr>

<tr><td class="span3 td-left">
<p>스크롤바 사용 설정<p>
</td><td class="span9 td-right">
<div class="controls-group"><p>
<label class="radio inline">
<input type="radio" id="op['scrollbar_on']" name="op[scrollbar_on]" value="on" <?php if($skin->op->scrollbar_on=="on") echo "checked";?>>ON</label>
<label class="radio inline">
<input type="radio" id="op['scrollbar_on']" name="op[scrollbar_on]" value="off" <?php if($skin->op->scrollbar_on=="off") echo "checked";?>>OFF</label>
</p>
</div><p class="help-block"> 스크롤바 설정 사용을 지정 할 수 있습니다. OFF 시 일반적인 스크롤바를 사용합니다.</p>
</td>
</tr>


<tr><td class="span3 td-left">
<p>
스크롤바 너비 설정
</p>
</td><td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[scrollbar_width]" placeholder="스크롤바 너비" value="<?php echo $skin->op->scrollbar_width;?>"  >
<p class="help-inline">스크롤바 너비(=수직 스크롤바의 너비, 수평 스크롤바의 높이)를 입력하여 주세요. 예 > <code>8px</code></p>
</td></tr>

<tr><td class="span3 td-left" rowspan="3">
<p>
스크롤바 버튼 설정
</p>
</td><td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[scrollbar_height]" placeholder="스크롤바 버튼 높이" value="<?php echo $skin->op->scrollbar_height;?>"  >
<p class="help-inline">스크롤바 버튼 높이(=수직 스크롤바 버튼 높이, 수평 스크롤바 버튼 너비)를 입력하여 주세요.   예 > <code>10px</code></p>
</td></tr>

<tr><td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[scrollbar_btbc]" placeholder="스크롤바 버튼 테두리 색 & 굵기" value="<?php echo $skin->op->scrollbar_btbc;?>">
<select name="op[scrollbar_btbty]">
<option value="">테두리 종류</option>
<option value="solid" <?php if($skin->op->scrollbar_btbty=='solid') echo 'selected="selected"';?>>일반 선</option>
<option value="dotted" <?php if($skin->op->scrollbar_btbty=='dotted') echo 'selected="selected"';?>>점(・) 선</option>
<option value="dashed" <?php if($skin->op->scrollbar_btbty=='dashed') echo 'selected="selected"';?>>대쉬(-) 선</option>
<option value="double" <?php if($skin->op->scrollbar_btbty=='double') echo 'selected="selected"';?>>이중 선</option>
<option value="groove" <?php if($skin->op->scrollbar_btbty=='groove') echo 'selected="selected"';?>>홈 모양 선</option>
<option value="ridge" <?php if($skin->op->scrollbar_btbty=='ridge') echo 'selected="selected"';?>>돌출 선</option>
<option value="inset" <?php if($skin->op->scrollbar_btbty=='inset') echo 'selected="selected"';?>>내부 엠보싱</option>
<option value="outset" <?php if($skin->op->scrollbar_btbty=='outset') echo 'selected="selected"';?>>외부 엠보싱</option>
</select>
<p class="help-inline">버튼 테두리 색과 굵기를 입력하여 주세요.예 > <code>#ffffff 1px</code></p></br></br>
<input class="input-xlarge" type="text" name="op[scrollbar_btbg]" placeholder="스크롤바 버튼 배경색" value="<?php echo $skin->op->scrollbar_btbg;?>"  >
<p class="help-inline">스크롤바 버튼 배경색을 입력하여 주세요. 예 > <code>#ffffff</code></p>
</td></tr>

<tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 스크롤바 버튼 배경 투명도/외곽의 둥글기</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[scrollbar_btbgr]" placeholder="배경색 R 값" value="<?php echo $skin->op->scrollbar_btbgr;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[scrollbar_btbgg]" placeholder="배경색 G 값" value="<?php echo $skin->op->scrollbar_btbgg;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[scrollbar_btbgb]" placeholder="배경색 B 값" value="<?php echo $skin->op->scrollbar_btbgb;?>" style="width:65px;">
<p class="help-inline">스크롤바 버튼의 배경색 <b>RGB 값(R,G,B)</b>을 입력하여 주세요. 예 > R <code>255</code> G <code>255</code> B <code>255</code></p></br></br>
<input class="input-xlarge" type="text" name="op[scrollbar_btbga]" placeholder="스크롤바 버튼 배경 불투명도" value="<?php echo $skin->op->scrollbar_btbga;?>">
<p class="help-inline">(선택 - 기본:0.15) 스크롤바 버튼 배경색의 불투명도를 설정할 수 있습니다. (0~1 범위) 예 > 40% : <code>0.4</code></p><br><br>

<input class="input-xlarge" type="text" name="op[scrollbar_btrad]" placeholder="스크롤바 버튼 외곽 둥글기" value="<?php echo $skin->op->scrollbar_btrad;?>">
<p class="help-inline">(선택 - 기본:0px) 스크롤바 버튼의 외곽 둥글기를 지정할 수 있습니다.</p>
</div>
</td></tr>

<tr><td class="span3 td-left" rowspan="2">
<p>
스크롤바 트랙 설정
</p>
</td><td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[scrollbar_trackbc]" placeholder="스크롤바 트랙 테두리 색 & 굵기" value="<?php echo $skin->op->scrollbar_trackbc;?>">
<select name="op[scrollbar_trackbty]">
<option value="">테두리 종류</option>
<option value="solid" <?php if($skin->op->scrollbar_trackbty=='solid') echo 'selected="selected"';?>>일반 선</option>
<option value="dotted" <?php if($skin->op->scrollbar_trackbty=='dotted') echo 'selected="selected"';?>>점(・) 선</option>
<option value="dashed" <?php if($skin->op->scrollbar_trackbty=='dashed') echo 'selected="selected"';?>>대쉬(-) 선</option>
<option value="double" <?php if($skin->op->scrollbar_trackbty=='double') echo 'selected="selected"';?>>이중 선</option>
<option value="groove" <?php if($skin->op->scrollbar_trackbty=='groove') echo 'selected="selected"';?>>홈 모양 선</option>
<option value="ridge" <?php if($skin->op->scrollbar_trackbty=='ridge') echo 'selected="selected"';?>>돌출 선</option>
<option value="inset" <?php if($skin->op->scrollbar_trackbty=='inset') echo 'selected="selected"';?>>내부 엠보싱</option>
<option value="outset" <?php if($skin->op->scrollbar_trackbty=='outset') echo 'selected="selected"';?>>외부 엠보싱</option>
</select>
<p class="help-inline">트랙 테두리 색과 굵기를 입력하여 주세요.예 > <code>#ffffff 1px</code></p></br></br>
<input class="input-xlarge" type="text" name="op[scrollbar_trackbg]" placeholder="스크롤바 트랙 배경색" value="<?php echo $skin->op->scrollbar_trackbg;?>"  >
<p class="help-inline">스크롤바 트랙 배경색을 입력하여 주세요. 예 > <code>#ffffff</code></p>
</td></tr>

<tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 스크롤바 트랙 배경 투명도</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[scrollbar_trackbgr]" placeholder="배경색 R 값" value="<?php echo $skin->op->scrollbar_trackbgr;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[scrollbar_trackbgg]" placeholder="배경색 G 값" value="<?php echo $skin->op->scrollbar_trackbgg;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[scrollbar_trackbgb]" placeholder="배경색 B 값" value="<?php echo $skin->op->scrollbar_trackbgb;?>" style="width:65px;">
<p class="help-inline">스크롤바 트랙 배경색 <b>RGB 값(R,G,B)</b>을 입력하여 주세요. 예 > R <code>255</code> G <code>255</code> B <code>255</code></p></br></br>
<input class="input-xlarge" type="text" name="op[scrollbar_trackbga]" placeholder="비공개 게시판 로그인 아이콘 배경 불투명도" value="<?php echo $skin->op->scrollbar_trackbga;?>">
<p class="help-inline">(선택 - 기본:0) 텍스트 배경색의 불투명도를 설정할 수 있습니다. (0~1 범위) 예 > 40% : <code>0.4</code></p>
</div>
</td></tr>


<tr><td class="span3 td-left" rowspan="2">
<p>
스크롤바 컨트롤러 설정
</p>
</td><td class="span9 td-right">
<input class="input-xlarge" type="text" name="op[scrollbar_thumbbc]" placeholder="스크롤바 컨트롤러 테두리 색 & 굵기" value="<?php echo $skin->op->scrollbar_thumbbc;?>">
<select name="op[scrollbar_thumbbty]">
<option value="">테두리 종류</option>
<option value="solid" <?php if($skin->op->scrollbar_thumbbty=='solid') echo 'selected="selected"';?>>일반 선</option>
<option value="dotted" <?php if($skin->op->scrollbar_thumbbty=='dotted') echo 'selected="selected"';?>>점(・) 선</option>
<option value="dashed" <?php if($skin->op->scrollbar_thumbbty=='dashed') echo 'selected="selected"';?>>대쉬(-) 선</option>
<option value="double" <?php if($skin->op->scrollbar_thumbbty=='double') echo 'selected="selected"';?>>이중 선</option>
<option value="groove" <?php if($skin->op->scrollbar_thumbbty=='groove') echo 'selected="selected"';?>>홈 모양 선</option>
<option value="ridge" <?php if($skin->op->scrollbar_thumbbty=='ridge') echo 'selected="selected"';?>>돌출 선</option>
<option value="inset" <?php if($skin->op->scrollbar_thumbbty=='inset') echo 'selected="selected"';?>>내부 엠보싱</option>
<option value="outset" <?php if($skin->op->scrollbar_thumbbty=='outset') echo 'selected="selected"';?>>외부 엠보싱</option>
</select>
<p class="help-inline">컨트롤러 테두리 색과 굵기를 입력하여 주세요.예 > <code>#ffffff 1px</code></p></br></br>
<input class="input-xlarge" type="text" name="op[scrollbar_thumbbg]" placeholder="스크롤바 컨트롤러 배경색" value="<?php echo $skin->op->scrollbar_thumbbg;?>"  >
<p class="help-inline">스크롤바 컨트롤러 배경색을 입력하여 주세요. 예 > <code>#ffffff</code></p>
</td></tr>

<tr><td class="span9 td-right selecelement">
&nbsp;<a href="#none" onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';">(선택/세부 설정) 스크롤바 컨트롤러 배경 투명도/외곽의 둥글기</a><div style="display: none;">
<input class="input-xlarge" type="text" name="op[scrollbar_thumbbgr]" placeholder="배경색 R 값" value="<?php echo $skin->op->scrollbar_thumbbgr;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[scrollbar_thumbbgg]" placeholder="배경색 G 값" value="<?php echo $skin->op->scrollbar_thumbbgg;?>" style="width:65px;">
<input class="input-xlarge" type="text" name="op[scrollbar_thumbbgb]" placeholder="배경색 B 값" value="<?php echo $skin->op->scrollbar_thumbbgb;?>" style="width:65px;">
<p class="help-inline">스크롤바 컨트롤러의 배경색 <b>RGB 값(R,G,B)</b>을 입력하여 주세요. 예 > R <code>255</code> G <code>255</code> B <code>255</code></p></br></br>
<input class="input-xlarge" type="text" name="op[scrollbar_thumbbga]" placeholder="스크롤바 컨트롤러 배경 불투명도" value="<?php echo $skin->op->scrollbar_thumbbga;?>">
<p class="help-inline">(선택 - 기본:0.15) 스크롤바 컨트롤러 배경색의 불투명도를 설정할 수 있습니다. (0~1 범위) 예 > 40% : <code>0.4</code></p><br><br>

<input class="input-xlarge" type="text" name="op[scrollbar_thumbrad]" placeholder="스크롤바 컨트롤러 외곽 둥글기" value="<?php echo $skin->op->scrollbar_thumbrad;?>">
<p class="help-inline">(선택 - 기본:0px) 스크롤바 컨트롤러 외곽 둥글기를 지정할 수 있습니다.</p>
</div>
</td></tr>



<tr>
<td colspan="2" class="td-left" id="nbb_setup">
<p class="text-right">
  <button type="submit" class="btn btn-success">설정 저장</button>
  <a class="btn" href="admin.php?cAct=adminBoardList">취소</a>
</p>
</td>
</tr>


</tbody>
</table>
</form>
<div style="position:fixed;right:5px;bottom:5px;padding:5px;margin:0 !important;height:20px;z-index:101;">
   <ul class="unstyled nav-pills">
      <li class="dropup">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><b>Nabigation ▲</b></a>
        <ul class="dropdown-menu pull-right">
          <li><a href="#real_top">스킨 디자인 수정</a></li>
		  <li role="presentation" class="divider"></li>
          <li><a href="#nbb_quick">스킨 디자인 퀵 설정</a></li>
          <li><a href="#nbb_skinbase">스킨 기본 설정</a></li>
		  <li role="presentation" class="divider"></li>
          <li><a href="#nbb_cidbop">게시판 디자인/기본 설정</a></li>
          <li><a href="#nbb_link ">링크 기본 설정</a></li>
		  <li role="presentation" class="divider"></li>
		  <li><a href="#nbb_noticebase">공지사항 기본 설정</a></li>
		  <li><a href="#nbb_topmenubase">상단 메뉴 기본 설정</a></li>
		  <li role="presentation" class="divider"></li>
		  <li><a href="#nbb_tablebase">테이블 기본 설정</a></li>
          <li><a href="#nbb_loginfo">로그 정보 테이블 설정</a></li>
          <li><a href="#nbb_infobase">로그 테이블 설정</a></li>
		  <li><a href="#ndd_replybase">리플 테이블 설정</a></li>
		  <li><a href="#ndd_replywrite">리플 작성창 설정</a></li>
		  <li role="presentation" class="divider"></li>
		  <li><a href="#ndd_icons">스킨 아이콘</a></li>
		  <li role="presentation" class="divider"></li>
		  <li><a href="#ndd_secretmode">비공개 게시판 설정</a></li>
		  <li><a href="#ndd_chromescroll">(크롬 전용) 스크롤바 설정</a></li>
		  <li role="presentation" class="divider"></li>
		  <li><a href="../index.php?cid=<?=$cid?>" target="_blank">게시판으로</a></li>
		  <li><a href="#nbb_setup">설정 저장 버튼으로</a></li>
        </ul>
      </li>
    </ul>
</div>
<div class="pickerdiv">
<input type="text" id="picker" placeholder="Color picker! 사용 시 클릭해주세요."></input>
</div>

<?php
}else{
?>
<div class="span6 offset3 alert alert-error margin20">
<a class="close" href="javascript:history.go(-1);">&times;</a>
접속권한이 없습니다.<br/>
해당 게시판 관리자만 접속 가능한 페이지 입니다.<br/><br/>
<a class="btn btn-danger" href="javascript:history.go(-1);">돌아가기</a>
</div>
<?php
}
?>
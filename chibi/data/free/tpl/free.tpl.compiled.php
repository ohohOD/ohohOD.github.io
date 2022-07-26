		<script type="text/javascript">
		jQuery(window).resize(function(){
			var img_w = $("pic_log").width();
			if(<?=$skin->op->resize?>>img_w){
			$("pic_log > a > img").width(img_w);
			}

		});
		jQuery(document).ready(function(){
		$("#loadSelect2").change(function () {
			var str = ""		  
			  $("#loadSelect2 > option:selected").each(function(){
				 str = $(this).val();
			if(str == "picture"){
				$(".video").hide();
				$(".text").hide();
				$(".loadpic").show();
				$('#closecLoad').show();
				$(".type").val("picture");
				str = '';
			  }else if(str == "youtube" || str == "naver"){
				$(".loadpic").hide();
				$(".text").hide();
				$(".video").show();
				$('#closecLoad').show();
				$(".type").val(str);
				str = '';
			  }else{
				$(".testing").show();
				$(".loadpic").hide();
				$(".video").hide();
				$(".text").show();
				$('#closecLoad').show();
				$(".type").val("text");
				str = '';
			  }
		  });
		});


		});
		</script>

		<?php 
		if ($connect_permission==true||empty($permission)==false) $member_permission=1; // 멤버 로그인 확인
		if($bbs->op->use_permission =="all"||($bbs->op->use_permission=="admin"&&$permission=="true"))$bbs_use_permission=1; // 게시판 설정 업로드 권한
		if($skin->op->onop_upright=="all"||($skin->op->onop_upright=="admin"&&$permission=="true")||($member_permission==1&&$skin->op->onop_upright=="member")) $skin_user_logperm=1; // 스킨 설정 업로드 권한
		if($skin->op->onop_reright=="all"||($skin->op->onop_reright=="admin"&&$permission=="true")||($member_permission==1&&$skin->op->onop_reright=="member")) $skin_user_reperm=1; // 스킨 설정 리플 권한
		if($skin->op->onop_rreright=="all"||($skin->op->onop_rreright=="admin"&&$permission=="true")||($member_permission==1&&$skin->op->onop_rreright=="member")) $skin_user_rreperm=1; // 스킨 설정 리리플 권한
		?>
		<!--// 스킨 디자인 시작 //-->
		<!--// 상단 공지사항 시작 //-->
		<?php if($bbs->notice->head){?>
		<br>
		<div class="container" align="<?=$skin->op->notice_align?>">
			<div class="alert alert-info user_notice_border_color user_notice_border_type user_notice_background_color user_notice_etc user_notice_border_radius"  style="padding:5px;">
				<?php echo $bbs->notice->head;?>
			</div>
		</div>
		<br><br>
		<?}?>
		<!--// 상단 공지사항 끝 //-->

		<?php
		if(($bbs_use_permission==true&&$skin_user_logperm==1)||$skin_user_logperm==1){?>
		
		<!--// 툴바 시작 //-->
		<?php if($skin->op->onop_chib=="on") {?> 
		<div class="container">
		<div class="span8 offset2 text-center">
				<form id="drawForm" method="POST" class="form-inline" action="./index.php?cid=<?=$cid?>&cAct=picDraw">
					<input id="tool" type="hidden" name="tool" value="">
					<input id="chi_file" type="hidden" name="chi_file" value="">
					<input type="text" class="input-hw" id="width" name="width" placeholder="<?=$bbs->op->pic_min_width?>-<?=$bbs->op->pic_max_width?>">
					<font class="sm-font">&nbsp;x&nbsp;</font>
					 <input type="text" class="input-hw" id="height" name="height" placeholder="<?=$bbs->op->pic_min_width?>-<?=$bbs->op->pic_max_width?>">&nbsp;
					<a href="javascript:;" onclick="selectTool('chibi')"><span class="loadbtn_plus"><?=$skin->op->chibi_icon?></span></a>
					<a id="openLoad" href="javascript:;" ><span class="loadbtn_plus"><?=$skin->op->load_icon?></span></a>
				</form>
		</div>
		</div>
		<?}?>
		<!--// 툴바 종료 //-->

		<!--// 로드 폼 시작 //-->
		<div id="loadForm" class="text-center" <?php if($skin->op->onop_chib!="on") echo "style=display:block !important;";?>>
		<ul class="unstyled text-center">
		<li style="padding-bottom:5px;">
		<select id="loadSelect2" class="topmtex" style="width:100px;">
		<option selected="selected">로드 방식 선택</option>
		<option value="picture">그림</option>
		<option value="youtube">유튜브</option>
		<option value="naver">네이버 동영상</option>
		<option value="text">텍스트</option>
		</select>&nbsp; &nbsp;<?php if($skin->op->onop_chib!="on"){?><a id="closecLoad" href="javascript:;" style="display:none;">CLOSE</a>
		<?}else{?><a id="closeLoad" href="javascript:;">CLOSE</a><?}?>
		</li>

		<li>
		<div class="loadpic"><form class="form-horizontal" id="uploadForm" action="lib/load.submit.php" onsubmit="return upload()" method="post" enctype="multipart/form-data">
		<input type="hidden" id="type" class="type" name="type">
		<input type="hidden" id="cid" name="cid" value="<?=$cid?>">
		<input type="hidden" id="user_id" name="user_id" value="<?=$member->user_id?>">
		<table align="center" cellpadding="0" cellspacing="0" style="width:320px;"><tr><td colspan="3" style="padding-bottom:3px;">
			<input name="image" id="inputFile" type="file" class="topmtex Upl" required></td></tr>
			<Tr><td width="80">
			<select id="op" name="op[pic]" class="topmtex" style="width:80px !important;">
			<option selected="selected" >옵션</option>
			<option value="more">접기</option>
			<option value="secret">비밀</option>
			<option value="moresecret">접기+비밀</option>
			<option value="logHeight">원고로그축소</option>
			</select>
		</td><td align="left" width="*">&nbsp;
			<label class="checkbox inline sm-font"><input type="checkbox" name="op[log]" value="adminonly"  class="boxsize">SEC</label><?php if($skin->op->onop_mem=="on"){?>
			<label class="checkbox inline sm-font"><input type="checkbox" name="op[member]" value="secret" class="boxsize">MSEC</label><?}?> 
			<label class="checkbox inline sm-font"><input type="checkbox" name="op[logauto]" value="enforbottom"  class="boxsize">RB</label>
			<label class="checkbox inline sm-font"><input type="checkbox" name="op[logmore]" value="moreply"  class="boxsize">RM</label>
		</td><td align="right" style="width:80px !important;">
		<input type="password" name="passwd" placeholder="PASS" class="input-pass">
		<button  id="uploadBtn" class="loadbtn_add">LOAD</button></td></tr>
		</table>
		</form>
		</div>
		<div class="video"><form class="form-horizontal" id="uploadVForm" action="lib/load.submit.php" onsubmit="return uploadV()" method="post" enctype="multipart/form-data">
		<input type="hidden" id="type" class="type" name="type">
		<input type="hidden" id="cid" name="cid" value="<?=$cid?>">
		<input type="hidden" id="user_id" name="user_id" value="<?=$member->user_id?>">
		<table align="center" cellpadding="0" cellspacing="0" style="width:320px;"><tr><td colspan="3" style="padding-bottom:3px;">
			<textarea rows="2" class="topmtex" id="video" name="image" style="resize:none;overflow-y:visible;height:auto;" required placeholder="동영상의 <iframe> 태그를 입력해주세요"></textarea></td></tr>
			<Tr><td width="80">
			<select id="op" name="op[pic]" class="topmtex" style="width:80px !important;">
			<option selected="selected" >옵션</option>
			<option value="more">접기</option>
			<option value="secret">비밀</option>
			<option value="moresecret">접기+비밀</option>
			</select>
		</td><td align="left" width="*">&nbsp;
			<label class="checkbox inline sm-font"><input type="checkbox" name="op[log]" value="adminonly"  class="boxsize">SEC</label><?php if($skin->op->onop_mem=="on"){?>
			<label class="checkbox inline sm-font"><input type="checkbox" name="op[member]" value="secret" class="boxsize">MSEC</label><?}?> 
			<label class="checkbox inline sm-font"><input type="checkbox" name="op[logauto]" value="enforbottom"  class="boxsize">RB</label>
			<label class="checkbox inline sm-font"><input type="checkbox" name="op[logmore]" value="moreply"  class="boxsize">RM</label>
		</td><td align="right" style="width:80px !important;">
			<input type="password" name="passwd"  placeholder="PASS" required class="input-pass">
			<button  id="uploadVBtn" class="loadbtn_add">LOAD</button></td></tr>
		</table>
		</form>
		</div>
		<div class="text"><form class="form-horizontal" id="uploadTForm" action="lib/load.submit.php" onsubmit="return uploadT()" method="post" enctype="multipart/form-data">
		<input type="hidden" id="type" class="type" name="type">
		<input type="hidden" id="cid" name="cid" value="<?=$cid?>">
		<input type="hidden" id="user_id" name="user_id" value="<?=$member->user_id?>">
		<table align="center" cellpadding="0" cellspacing="0" style="width:320px;"><tr><td colspan="3" style="padding-bottom:3px;">
			<textarea rows="2" class="topmtex" id="text" name="image" style="resize:none;overflow-y:visible;height:auto;" required placeholder="텍스트 입력"></textarea></td></tr>
			<Tr><td width="80">
			<select id="op" name="op[pic]" class="topmtex" style="width:80px !important;">
			<option selected="selected" >옵션</option>
			<option value="more">접기</option>
			<option value="secret">비밀</option>
			<option value="moresecret">접기+비밀</option>
			</select>
		</td><td align="left" width="*">&nbsp;
			<label class="checkbox inline sm-font"><input type="checkbox" name="op[log]" value="adminonly"  class="boxsize">SEC</label><?php if($skin->op->onop_mem=="on"){?>
			<label class="checkbox inline sm-font"><input type="checkbox" name="op[member]" value="secret" class="boxsize">MSEC</label><?}?> 
			<label class="checkbox inline sm-font"><input type="checkbox" name="op[logauto]" value="enforbottom"  class="boxsize">RB</label>
			<label class="checkbox inline sm-font"><input type="checkbox" name="op[logmore]" value="moreply"  class="boxsize">RM</label>
		</td><td align="right" style="width:80px !important;">
			<input type="password" name="passwd" placeholder="PASS" required class="input-pass">
			<button  id="uploadTBtn" class="loadbtn_add">LOAD</button></td></tr>
		</table>
		</form>
		</div>
		</li>
		</ul>
		<iframe id="uploadIFrame" name="uploadIFrame" src="" style="display:none;"></iframe>
		</div>
		<!--// 로드 폼 종료 //-->
		
		<?php 
		}
		?>
		<!--// 상단 메뉴 시작 //-->
		<div class="container">
		<div class="pagination-text span8 offset2 text-center">
			<form class="form-horizontal" id="secretForm" method="post" enctype="multipart/form-data"><font class="top_font">
			<?php if($skin->op->topm_top=="show"){?>
			<a href="./index.php?cid=<?=$cid?>"><font class="top_font"><?=$skin->op->topmtop_icon?></font></a>
			<?php } if($skin->op->topm_refre=="show"){?>
			| <a href="./index.php?cid=<?=$cid?>&page=<?=$_GET['page']?>"><font class="top_font"><?=$skin->op->reflash_icon?></font></a><?php 
			}?><?php		
			if(empty($permission)==true){ ?>
				| <a href="./login.php?cid=<?=$cid?>"><font class="top_font"><?=$skin->op->login_icon?></font></a><?php 
			}else {
				if($permission=="true"){  ?>
					| <a href="./admin/admin.php?cid=<?=$cid?>" target="_blank">ADMIN MODE</a>
					| <a href="./admin/admin.php?cAct=adminSkinSetup&cid=<?=$cid?>&skin=<?=$skin->skin_name?>" target="_blank"><font class="top_font"><?=$skin->op->admin_icon?></font></a><?php
				}?>
				| <a href="./logout.php?user_id=<?=$member->user_id?>"><font class="top_font"><?=$skin->op->logout_icon?></font></a><?php 
			}?><?php 
			if($skin->op->onop_mem=="on"){
				if(!$member->user_id&&$skin->op->topm_member=="show"){
				if($connect_permission==false){?>
						| <a href="javascript:secret();"><font class="top_font">MEMBER : </font></a>
						<input class="input-hw" id="bbs_passwd" type="password" style="height:10px !important;"><?php 
					}else{?>
						| <a href="javascript:member_logout();"><font class="top_font" style="color:<?=$skin->op->point_color1?> !important;">MEMBER MODE</font></a><?php 
					}
				}?>
				<?php if(empty($member->user_id)&&$skin->op->topm_join=="show"){?>
				| <a href="./member.php?cAct=memberJoin" target="_blank"><font class="top_font">JOIN</font></a><?php 
				} if($member->user_id&&$skin->op->topm_pm=="show") {?>
				| <a href="./member.php?cAct=memberModify" target="_blank"><font class="top_font">PROFILE</font></a><?php 
				} 
			}?><?php
			if($skin->op->topm_emoti=="show"){?>
				| <a href="javascript:;" onclick="javascript:window.open('./emoticon.php?cid=<?=$cid?>','이모티콘리스트','scrollbars=yes,toolbar=no,menubar=no,width=300,height=500')"><font class="top_font"><?=$skin->op->emoticon_icon?></font></a><?php 
			} if($skin->op->topm_pb=="show") {?>
				<div <?php if($device=="mobile"){?>class="span8 offset2 pagination pagination-centered" style="margin-top:20px;"><?}else{?>class="pagination_top" style="display:inline-block;">|<?}?>
				<ul>
					<?php echo $paging;?>
				  </ul>
				</div><?php 
			} ?>
			</font>
		</form>
		</div>
		</div>
		<!--// 상단 메뉴 종료 //-->

		<!--// 관리자 패널 //-->
		<?php if(empty($permission)==false && $permission=="true"){ ?>
		<script type="text/javascript">
		$(document).ready(function(){
				$("#check_all").click(function() {
						$("input[name=picidx]:checkbox").prop("checked", true);
				});
				$("#uncheck_all").click(function() {
						$("input[name=picidx]:checkbox").prop("checked", false);
				});
				$("#check_all_r").click(function() {
						$("input[name=idx]:checkbox").prop("checked", true);
				});
				$("#uncheck_all_r").click(function() {
						$("input[name=idx]:checkbox").prop("checked", false);
				});
		});
		</script>
		<div class="text-center adminpanel" >
			<p>
				<button type="button" id="check_all" class="btn adminpanelbt"  style="background:#fff;padding:3px !important;">All Log<br/>Check</button></br>&nbsp;
			</p>
			<p>
				<button type="button" id="uncheck_all" class="btn adminpanelbt"  style="background:#fff;padding:3px !important;">All Log<br/>Unchk</button></br>&nbsp;
			</p>
			<p>
				<form class="adminPicDel margin0" action="#">
					<button type="submit" id="admindelbtn" class="btn adminpanelbt"  style="background:#ccc;padding:3px !important;">Log<br/>Delete</button></br>&nbsp;
				</form>
			</p>	
			<p>
				<button type="button" id="check_all_r" class="btn adminpanelbt"  style="background:#fff;padding:3px !important;">All Reply<br/>Check</button></br>&nbsp;
			</p>
			<p>
				<button type="button" id="uncheck_all_r" class="btn adminpanelbt"  style="background:#fff;padding:3px !important;">All Reply<br/>Unchk</button></br>&nbsp;
			</p>

			<p>
				<form class="adminCmtDel margin0" action="#">
					<button type="submit" id="admindelbtn" class="btn adminpanelbt" style="background:#ccc;!important;padding:3px !important;">Reply<br/>Delete</button>
				</form>
			</p>		
		</div>
		<?php } ?>
		<!--// 관리자 패널 //-->

		<!--// 그림을 불러오기 위한 반복문 시작 //-->
		<?php
		$pic_query = pic($cid,$start,$limit,$chibi_conn,$search,$keyword); /* 그림 불러오기 */
		while($pic = mysqli_fetch_array($pic_query)){ /* 반복문 시작 */
		$pic = (object) $pic;  
		if(empty($pic->op)==false){
		$pic->op = unserialize($pic->op);
		$pic->op = (object) $pic->op;
		}
		if($pic->type=="youtube"){// 유투브 동영상
	if(get_magic_quotes_gpc()) $pic->src = stripslashes($pic->src); /* magic_quotes_gpc가 off일경우 slashes설정 */
	preg_match('@src="([^"]+)"@',$pic->src,$src);
	preg_match('@width="([^"]+)"@',$pic->src,$width);
	preg_match('@height="([^"]+)"@',$pic->src,$height);
	$size[0] = $width[1];
	$size[1] = $height[1];
	if((($pic->op->pic=="secret" || $pic->op->pic=="moresecret") && $pic->pic_ip != $_SERVER['REMOTE_ADDR'])&& $permission!="true") $picture = "<p class=\"text-center\">".$skin->op->secret_icon."</p>"; // 비밀 그림 일경우
	else{
		if($pic->op->pic=="more" || $pic->op->pic=="moresecret"){
			$more = "display:none;";
			$more_btn = "<a class=\"movie_more\" more=\"0\" href=\"javascript:;\">".$skin->op->more_icon."</a>";
		}else{
			$more = "";
			$more_btn = "";
		}
		$picture = $more_btn."<p class=\"movie\" style=\"max-height:".$size[1]."px;\"><iframe width=\"100%\" height=\"100%\" src=\"".$src[1]."\" style=\"max-width:".$size[0]."px;max-height:".$size[1]."px;".$more."\"frameborder=\"0\" allowfullscreen></iframe></p>";
		if($pic->op->pic=="secret" || $pic->op->pic=="moresecret") $picture = "<p class=\"text-center\">".$skin->op->secret_icon."</p>".$picture;
	}
}else if($pic->type=="naver"){// 네이버 동영상
	if(get_magic_quotes_gpc()) $pic->src = stripslashes($pic->src); /* magic_quotes_gpc가 off일경우 slashes설정 */
	preg_match( '@src="([^"]+)"@' , $pic->src , $src );
	preg_match('@width="([^"]+)"@',$pic->src,$width);
	preg_match('@height="([^"]+)"@',$pic->src,$height);
	$size[0] = $width[1];
	$size[1] = $height[1];
	if((($pic->op->pic=="secret" || $pic->op->pic=="moresecret") && $pic->pic_ip != $_SERVER['REMOTE_ADDR'])&& $permission!="true") $picture = "<p class=\"text-center\">".$skin->op->secret_icon."</p>"; // 비밀 그림 일경우
	else{
		if($pic->op->pic=="more" || $pic->op->pic=="moresecret"){
			$more = "display:none;";
			$more_btn = "<a class=\"movie_more\" more=\"0\" href=\"javascript:;\">".$skin->op->more_icon."</a>";
		}else{
			$more = "";
			$more_btn = "";
		}
		$picture = $more_btn."<p class=\"movie\" style=\"max-height:".$size[1]."px;\"><iframe width=\"100%\" height=\"100%\" src=\"".$src[1]."\" style=\"max-width:".$size[0]."px;max-height:".$size[1]."px;".$more."\"frameborder=\"0\" allowfullscreen></iframe></p>";
		if($pic->op->pic=="secret" || $pic->op->pic=="moresecret") $picture = "<p class=\"text-center\">".$skin->op->secret_icon."</p>".$picture;
	}
}else if($pic->type=="picture"){//그림 일 경우
	$size = GetImageSize($pic->src); // 그림 크기 취득
	if((($pic->op->pic=="secret" || $pic->op->pic=="moresecret") && $pic->pic_ip != $_SERVER['REMOTE_ADDR'])&& $permission!="true") $picture = "<p class=\"text-center\">".$skin->op->secret_icon."</p>"; // 비밀 그림 일경우
	else{
		if($pic->op->pic=="more" || $pic->op->pic=="moresecret"){
			 $more = "style=\"display:none;\"";
			 $more_btn = "<a class=\"pic_more\" more=\"0\" href=\"javascript:;\">".$skin->op->more_icon."</a>";
		}else{
			$more = "";
			$more_btn = "";
		}
		if($skin->op->resize>=$size[0]) $pic_size = $size[0];
		else $pic_size = $skin->op->resize; 
		$picture = $more_btn."<a class=\"lightbox_trigger\" href=\"".$pic->src."\" size=\"".$size[1]."\" ".$more." ><img src=\"".$pic->src."\" id=\"".$pic->idx."\"style=\"width:100%;max-width:".$pic_size."px;\"></a>"; //리사이즈
		if($pic->op->pic=="secret" || $pic->op->pic=="moresecret") $picture = "<p class=\"text-center\">".$skin->op->secret_icon."</p>".$picture;
	}
}else if($pic->type=="text"){// 텍스트 일 경우
	if((($pic->op->pic=="secret" || $pic->op->pic=="moresecret") && $pic->pic_ip != $_SERVER['REMOTE_ADDR'])&& $permission!="true") $picture = "<p class=\"text-center\">".$skin->op->secret_icon."</p>"; // 비밀 그림 일경우
	else{
		if($pic->op->pic=="more" || $pic->op->pic=="moresecret"){
			$more = "style=\"display:none;\"";
			$more_btn = "<a class=\"cmt_more\" more=\"0\" href=\"javascript:;\">".$skin->op->more_icon."</a>";
		}else{
			$more = "";
			$more_btn = "";
		}
		if(get_magic_quotes_gpc()) $pic->src = stripslashes($pic->src); 
		$pic->src = htmlFilter($pic->src,1,$bbs->tag);
		$pic->src = nl2br($pic->src);
		if($skin->op->resize>=$size[0]) $pic_size = $size[0];
		else $pic_size = $skin->op->resize;
		$picture = $more_btn."<p ".$more." style=\"text-align:left;padding:10px;\">".$pic->src."</p>"; //리사이즈
		if($pic->op->pic=="secret" || $pic->op->pic=="moresecret") $picture = "<p class=\"text-center\">".$skin->op->secret_icon."</p>".$picture;
	}
}
?>

		<!-- //관리자전용 로그일때 로그 자체 숨기기 // -->
		<?php if(($pic->op->log=="adminonly"&&($permission=="true"||$pic->pic_ip==$_SERVER['REMOTE_ADDR']))|| $pic->op->log != "adminonly"){ ?>
		<!--// 본문 시작 //-->
			<div class="container">
				<table class="log table user_table_border_color user_table_border_size user_table_border_type user_table_border_radius" align="center">
					<thead>
						<tr>
							<th class="user_table_background_color" colspan="2" style="padding:3px 5px;">
										<span style="padding-left:5px;">
										<!--// 관리자용 체크박스 //-->
										<?php if(empty($permission)==false && $permission=="true"){?>
										<input type="checkbox" class="picidx" name="picidx" value="<?=$pic->idx?>">
										<?php } ?>
										<!--// 관리자용 체크박스 //-->

										<!--// 그림번호 //--><!--// 삭제 아이콘 //-->
										<a href="javascript:;" idx="<?=$pic->idx?>" class="picdelBtn"><font class="recolor"><?=$skin->op->lognum_icon?><?=$pic->no?></font></a>
										<!--// 삭제 아이콘 //--><!--// 그림번호 //-->
								
										<font class="nonsize">
										<!--// 그림옵션 아이콘 //-->
										<?php if($pic->pic_ip==$_SERVER['REMOTE_ADDR']||$permission=="true"){ ?>
										&nbsp;<a href="javascript:;" idx="<?=$pic->idx?>" class="opBtn"><font class="nonsize"><?=$skin->op->op_icon?></font></a>
										<?php }?>
										<!--// 그림옵션 아이콘 //-->
										<!--// 이어그리기 아이콘 //-->
										<?php if($pic->type=="picture"&&$skin->op->onop_chib=="on"){ ?> |
										<a href="javascript:;" idx="<?=$pic->idx?>" class="continueBtn"><font class="nonsize"><?=$skin->op->continue_icon?></font></a>
										<?php } ?>
										<!--// 이어그리기 아이콘 //-->
			
										<!--// 트위터로 그림보내기 //-->
										<?php if($pic->type=="picture"){ ?> |
										<a href="javascript:;" onclick="javascript:window.open('http://chibi.kr/twitteroauth/index.php?image=<?=$path.$pic->src?>&type=<?=$size['mime']?>','트위터로 그림&글 트윗하기','scrollbar=no,toolbar=no,menubar=no,width=510,height=170')"><font class="nonsize">TWEET</font></a>
										<?php } ?>
										<!--// 트위터로 그림보내기 //-->

														
										<?php if($pic->type=="picture"){?>
										<?php if($skin->op->size=="show"){?>
										| 
										<script type="text/javascript">
										function resize<?=$pic->idx?>(){
											var resize_w = $("#<?=$pic->idx?>").width();
											var resize_h = $("#<?=$pic->idx?>").height();
											if(<?=$skin->op->resize?> < resize_w || <?=$size[0]?> > resize_w){
											$('#resize<?=$pic->idx?>').html('<?=$skin->op->expand_icon?>'); 
											}else{
											$('#resize<?=$pic->idx?>').html('');
											}
										}
										$(window).load(function(){
											resize<?=$pic->idx?>();
										});	
										$(window).resize(function(){
											resize<?=$pic->idx?>();
										});
										</script>
										<span id="resize<?=$pic->idx?>"></span>
										<?=$size[0]?> x <?=$size[1]?>
										<?php } 
										 ?>
										<?php if($skin->op->tool=="show"){
										if($skin->op->size=="show"&&$skin->op->tool=="show") { echo " : "; }
										else echo " | ";
										?>
										<?php if(strstr($pic->agent,"ChibiPaint")){ echo "CHIBI"; }else{ echo "LOAD"; } ?>
										<?php } ?>
										
										<?php } ?>
										
										
										<?php if($skin->op->logip=="show"&&($bbs->op->showip=="all"||($bbs->op->showip=="admin"&&$permission==true))){ echo "| ".$skin->op->replyip_icon." ".$pic->pic_ip; }?>

										<?php
										if (($pic->op->member=="secret"||$pic->op->pic=="secret"||$pic->op->pic=="moresecret"||$pic->op->log=="adminonly")&&($pic->pic_ip==$_SERVER['REMOTE_ADDR'])){
										echo " | ".$skin->op->secret_icon_self;}?>
										</font>
										</span>
									<!--// 로그정보 //-->
										<span style="float:right;">
										<font class="nonsize">
										<?php if($skin->op->time=="show"){?>
										<?=date($skin->op->time_type,$pic->time)?>
										<?php }
										
									if($skin->op->time=="show"&&$skin->op->logurl=="show") echo " | ";

									if($skin->op->logurl=="show"){echo '<font class="nonsize">';
										if ($skin->op->logurl_link=="original"||($skin->op->logurl_link=='pic'&&$pic->type=="picture")) {?>
										<a href="<?php if ($skin->op->logurl_url=="mix"&&$pic->type=="picture") echo $path.$pic->src; else echo $path.$cid."/".$pic->no;?>">
										<?}?>
										<? echo $path.$cid."/".$pic->no;?>
										</font>
										<?php  if ($skin->op->logurl_link=="original"||($skin->op->logurl_link=='pic'&&$pic->type=="picture")) {?></a><?}?>
									<?}?>
										<?php if (($pic->op->member!="secret"&&$pic->op->pic!="secret"&&$pic->op->pic!="moresecret"&&$pic->op->log=="adminonly")||($pic->op->member!="secret"&&$pic->op->pic!="secret")||(($pic->op->member=="secret"||$pic->op->pic=="secret")&&$permission=="true")||($pic->op->member=="secret"&&$member_permission==1)||$pic->pic_ip!= $_SERVER['REMOTE_ADDR']) { ?>
										<?php if ($skin->op->logurl_new=="original"||($skin->op->logurl_new=="pic"&&$pic->type=="picture")) {?>
										<a href="<?php if ($skin->op->logurl_url=="mix"&&$pic->type=="picture") echo $path.$pic->src; else echo $path.$cid."/".$pic->no;?>" target="_blank">
										<font class="nonsize"><?=$skin->op->logwin_icon?></font>
										</a> 
										<?}?>
										<?}?>
										</font>
										</span>
									<!--// 로그정보 //-->
							</th>
						</tr>
					</thead>
				<tbody>
					<tr>
						<!--//그림 출력//-->
						<td class="pic_log user_pic_background_color user_table_inner_border_top_size user_table_inner_border_top_type user_table_inner_border_color user_table_pic_etc<?if($pic->type=="text") echo " logtext_align";?>" <?php if($skin->op->table_down<=$size[0] || $device=="mobile" || $pic->op->logauto == "enforbottom") echo "colspan=\"2\"";?> style="width:<?php if ($pic->op->pic=="logHeight"){ echo $skin->op->autowidth; }elseif($size[0]<=$skin->op->resize){ echo $size[0]; } else{ echo $skin->op->resize; }?>px;">
							<?php
							if($pic->type=="picture"&&($pic->op->logauto == "enforbottom"||$skin->op->table_down<=$size[0]||$device=="mobile")) {
							if($skin->op->vertical_imagew<=$size[0]) $picture=str_replace("max-width:".$pic_size,"max-width:".$skin->op->vertical_imagew,$picture);
							else $picture=str_replace("max-width:".$pic_size,"max-width:".$size[0],$picture);
							}
							
							if($pic->op->member == "secret"&&$member_permission!=1&&$permission!=true&&$pic->pic_ip != $_SERVER['REMOTE_ADDR']){ 
							echo $skin->op->msecret_icon; 
							}else{ 
								if($pic->op->member == "secret"&&$pic->op->pic!="secret") echo $skin->op->msecret_icon."</br>"; 
								if($size[1]>=$skin->op->autoheight&&$pic->op->pic!="more"&&$pic->type=="picture") { 
								$picture="<a class='autopicmore' more='0' href='javascript:;'>".$skin->op->more_icon."</a><div style='display:none;'>".$picture."</div>"; }
								echo $picture;
							}
							?>
						</td>
						<!--//그림 출력//-->
						
						<!--// 모바일 사이즈 조절 & 반응형디자인 사이즈 조절 //-->
						<?php if($pic->op->logauto == "enforbottom"||$skin->op->table_down<=$size[0]|| $device=="mobile") echo "</tr><tr>";?>
						<!--//코멘트 출력//-->
						<td class="com_log user_reply_background_color user_table_inner_border_top_size user_table_inner_border_top_type user_table_inner_border_color <?php if($pic->op->logauto !="enforbottom"&&$skin->op->table_down>$size[0] && $device!="mobile") {echo "user_table_inner_border_left_size user_table_inner_border_left_type";}else {?>" style="padding-left:10px;<?}?>">
							<? if ($pic->op->logmore=="moreply") {?><a class="rp_more" more="0" href="javascript:;"><p align="right"><?=$skin->op->logmore_icon?></p></a><ul class="unstyled" style="display:none;"><?}
							else{?><ul class="unstyled"><?}?>
							<!--// 코멘트를 불러오기 위한 반복문 시작 //-->
							<?php
		$no = 0;
		$cmt_query = comment($cid,$pic->no,$chibi_conn);
		while($comment = mysqli_fetch_array($cmt_query)){
		$comment = (object) $comment;
		if(empty($comment->op)==false){
		$comment->op = unserialize($comment->op);
		$comment->op = (object) $comment->op;
		$no = $comment->no;
		if(get_magic_quotes_gpc()) $comment->comment = stripslashes($comment->comment); 
		}	
				if(($comment->op->secret=="secret" && $comment->ip != $_SERVER['REMOTE_ADDR']) && $permission!="true" ){ 
						$comment->comment = ''; //비밀글 일때
						}else{
						$comment->comment = htmlFilter($comment->comment,1,$bbs->tag); //HTML 필터링(코멘트)
						$comment->name = htmlFilter($comment->name,1,$bbs->tag); //HTML 필터링(이름)
						$comment->memo = htmlFilter($comment->memo,1,$bbs->tag); //HTML 필터링(메모)
						$comment->comment = emoticon($comment->comment,$cid,$chibi_conn); //이모티콘
						$comment->comment = nl2br($comment->comment); //줄바꿈
						if($keyword && $search=="comment") $comment->comment = str_replace($keyword,"<span style='color:#FF001E;background-color:#FFF000;'>".$keyword."</span>",$comment->comment);
						if($keyword && $search=="name") $comment->name = str_replace($keyword,"<span style='color:#FF001E;background-color:#FFF000;'>".$keyword."</span>",$comment->name);
						}
						if($comment->op->dice) $dice = explode("+",$comment->op->dice); //주사위가 있을경우 주사위 배치
						else $dice = ''; //주사위가 없을 경우

		?>
							<li class="user_reply_text_color">
								<?php // 기본 설정 로딩
								if(($comment->op->msec!="msec"&&$comment->op->secret!="secret")||(($_SERVER['REMOTE_ADDR']==$comment->ip||$permission=="true")&&$comment->op->secret=="secret")||($comment->op->msec=="msec"&&($_SERVER['REMOTE_ADDR']==$comment->ip||$member_permission==1))) $reply_permission=1;
								else $reply_permission="";
								$reply_memo="<span class=\"cmt_memo\">".$skin->op->memo_icon." ".$comment->memo."</span></br>";
								$reply_more="<a class=\"cmt_more\" more=\"0\" href=\"javascript:;\">".$skin->op->more_icon."</a><p class=\"comment\" style=\"display:none;\">";
								?>
								<?php if($comment->depth >1) for($i=1;$i<$comment->depth;$i++) { echo "<blockquote class=\"user_rereply_bar_color user_rereply_text_color \""; if($i==1) {echo " style=\"margin-left:".$skin->op->rereply_mleft*$comment->depth."px !important;\""; } echo ">";} ?>
									<p style="padding:0;margin:0px;<?if($comment->depth > 1)echo"padding-left:5px;";?>">

										<!--// 소속아이콘이 있을 경우 출력//-->
										<?php if(empty($bbs->op->inst)==false) echo position($comment->op->position,$bbs->op->inst,$bbs->op->position); ?>
										<!--소속2 -->
										<?php if($bbs->op->inst2) echo position($comment->op->position2,$bbs->op->inst2,$bbs->op->position2);?>
										<!--// 소속아이콘이 있을 경우 출력//-->

										<?if($skin->op->reply_oponoff=="show") {?>
										<font class="name" <?php if($pic->pic_ip == $comment->ip) echo "style='color:".$skin->op->renamewr_color." !important;'";?>>
										<?=$comment->name?><?php if($pic->pic_ip == $comment->ip) echo $skin->op->painter_icon; //작가글 아이콘 ?>
										</font>
										<?}?>
										<font class="cmt_datef">
										
										<?php if($comment->hpurl&&$reply_permission==1) { // 홈페이지 아이콘
										echo "<a href=\"".$comment->hpurl."\" target=\"_blank\">".$skin->op->hp_icon."</a>" ;
										}?>

										<?php if($skin->op->dice_position=="base"&&empty($dice)==false) {// 기존 주사위 출력
										if(empty($dice)==false) echo "<img src=\"images/".$dice[0].".gif\"><img src=\"images/".$dice[1].".gif\">"; //주사위 출력
										}?>
										
										<?if($skin->op->reply_dataoff=="show") {?>
										<?=date($skin->op->time_type_reply,$comment->rtime)//작성시간출력?>&nbsp;
										<?}?>
										</font>
										
										<!--//리리플 아이콘 시작//-->
										<?php if($skin_user_rreperm==1||($skin->op->onop_rreright =="both"&&(($pic->pic_ip==$_SERVER['REMOTE_ADDR'])||$member_permission==1))||($skin->op->onop_rreright =="author"&&($pic->pic_ip==$_SERVER['REMOTE_ADDR']))) {?>
										<a href="javascript:;" no="<?=$comment->no?>" pic_no="<?=$comment->pic_no?>" depth="<?=$comment->depth?>" class="reply"><font class="cmt_datefre"><?=$skin->op->reply_icon?></font></a><?php }?>
										<!--//리리플 아이콘 끝//-->
										<!--//수정 아이콘 시작//-->
										<?php if($comment->op->secret!="secret"||($_SERVER['REMOTE_ADDR'] == $comment->ip && $comment->op->secret=="secret")||$permission=="true"){?>
										<a href="javascript:;" no="<?=$comment->no?>" idx="<?=$comment->idx?>" pic_no="<?=$comment->pic_no?>" depth="<?=$comment->depth?>" class="modify"><font class="cmt_datefre"><?=$skin->op->modify_icon?></font></a>
										<?php } ?>
										<!--//수정 아이콘 끝//-->
										<!--//리플 삭제 아이콘 시작//-->
										<a href="javascript:;" no="<?=$comment->no?>" idx="<?=$comment->idx?>" pic_no="<?=$comment->pic_no?>" depth="<?=$comment->depth?>" rtime="<?=$comment->rtime?>" class="delBtn"><font class="cmt_datefre"><?=$skin->op->del_icon?></font></a>
										<!--//리플 삭제 아이콘 끝//-->
										<!--// 관리자용 체크박스 //-->
										<?php if(empty($permission)==false && $permission=="true"){?><input type="checkbox" class="idx" name="idx" value="<?=$comment->idx?>"><?php } ?>
										<!--// 관리자용 체크박스 //-->
										</p>
									<!--//코멘트//-->
									<div class="comar" <?if($comment->depth > 1)echo"style='padding-left:5px;'";?>>
									<?php // 메모-링크-접기 연동 설정
									if ($reply_permission==1){
										if($comment->hpurl&&$comment->memo&&($skin->op->melinmore=="link"||$skin->op->melinmore=="linkfirst"||($skin->op->melinmore=="morefirst"&&empty($comment->op->more)))){
										$reply_memo="<a href=\"".$comment->hpurl."\" target=\"_blank\">".$reply_memo."</a>";
										$reply_more="";
										}else if (!empty($comment->op->more)&&$comment->memo&&($skin->op->melinmore=="more"||$skin->op->melinmore=="morefirst"||($skin->op->melinmore=="linkfirst"&&!$comment->hpurl))){
										$reply_memo="<a class=\"cmt_more\" more=\"0\" href=\"javascript:;\"><span class=\"cmt_memo\">".$skin->op->memo_icon." ".$comment->memo." ▼</span></a><p class=\"comment\" style=\"display:none;\">";
										$reply_more="";
										}
										}
										
										if($comment->memo&&$skin->op->memo_posit=="top") { echo $reply_memo;} // 메모 표시 1
										
										if (($comment->op->msec=="msec"||$comment->op->secret=="secret")&&$_SERVER['REMOTE_ADDR']==$comment->ip) { // 비밀글 작성자일 때 출력 문구
										echo $skin->op->secret_icon_self."</br>"; // 해당 비밀글 출력 아이콘 
										}else { // 비밀글 작성자가 아닐 때 출력 문구
										if($comment->op->secret=="secret") echo $skin->op->secret_icon."</br>"; // 비밀글 표시 아이콘
										else if($comment->op->msec=="msec") echo $skin->op->msecret_icon."</br>"; // 멤버 비밀글 표시 아이콘
										}
									?>	
									<!--// 접기 표시 //-->
										<?php if (empty($comment->op->more)==false){
										echo $reply_more;
										}else{ echo "<p class=\"comment\">";}?>
									<!--// 접기 표시 //-->
										<?php if($comment->memo&&$skin->op->memo_posit=="bottom") {echo $reply_memo;} // 메모 표시 2
										?>
										<font class="com_reclass">
										<?php if($skin->op->dice_position=="front"&&empty($dice)==false) echo "<img src=\"images/".$dice[0].".gif\"><img src=\"images/".$dice[1].".gif\">"; //주사위 출력?>
										<!--// 코멘트 표시 //-->
										<?if ($comment->op->msec=="msec"&&($comment->ip!=$_SERVER['REMOTE_ADDR']&&$permission!="true"&&$member_permission!=1)){ $comment->comment =""; 
										}else { echo $comment->comment; }
										?>
										<!--// 코멘트 표시 //-->
										<!--// IP표시 //-->
										<?php if((($permission=="true"&&$bbs->op->showip=="admin")||$bbs->op->showip=="all")&&$skin->op->reply_ipoff=="show") echo "<p style='margin:0;padding:0;'><font class=\"cmt_ip\">".$skin->op->replyip_icon." ".$comment->ip."</font></p>";?>
										<!--// IP표시 //-->
										</font>
										</p>
									</div>
									<!--//코멘트//-->
							<?php if($comment->depth > 1) for($i=0;$i<$comment->depth;$i++) echo "</blockquote>"; //리플 구분바?>
								</li>
							<?php } ?>
							<li class="user_reply_text_color">
								<!--// 코멘트 작성 폼 //-->
								<?php if($skin_user_reperm==1||($skin->op->onop_reright=="both"&&($pic->pic_ip==$_SERVER['REMOTE_ADDR']||$member_permission==1))||($skin->op->onop_reright=="author"&&($pic->pic_ip==$_SERVER['REMOTE_ADDR']))) {?>
								<div class="text-right">
									<form class="margin0 cmtForm" method="POST" action="./lib/comment.submit.php">
										<input type="hidden" name="cid" value="<?=$cid?>">
										<input type="hidden" name="page" value="<?=$page?>">
										<input type="hidden" name="no" value="<?=$no?>">
										<input type="hidden" name="children" value="0">
										<input type="hidden" name="pic_no" value="<?=$pic->no?>" id="pic_no">
										<input type="hidden" name="op[user_id]" value="<?=$member->user_id?>">
										<?if($skin->op->comf_emo=="show"){?>
										<font class="com-mfont">
										<a href="javascript:;" onclick="javascript:window.open('./emoticon.php?cid=<?=$cid?>','이모티콘리스트','scrollbars=yes,toolbar=no,menubar=no,width=300,height=500')">
										<font class="com-mfont"><?=$skin->op->emoticon_icon?></font></a> | </font><?}?>
										<?if($skin->op->comf_more=="on"){?><a href="javascript:;" class="copen" more="0"><?}?><font class="com-mfont"><?=$skin->op->comf_more_icon;?></font><?if($skin->op->comf_more=="on"){?></a><?}?><div id="comForm" style="<?if($skin->op->comf_more=="on"){?>display:none;<?}?>margin-top:5px;">
										<input type="text" id="memo" class="cinput" name="memo" placeholder="Memo" style="<?if ($device=="mobile") echo "width:141px;";?>margin-right:3px;"><input type="url" id="hpurl" class="cinput" name="hpurl" placeholder="Link" <?php if($_COOKIE['hpurl']) echo 'value="'.$_COOKIE['hpurl'].'"';?> <?if ($device=="mobile") echo "style=\"width:141px;\"";?>></br>
										<textarea rows="1" id="comment" name="comment" class="cinput" style="overflow-y:visible;height:auto;<?if ($device=="mobile") {echo "width:100%;max-width:290px !important;";}?>"></textarea></br>
										<?php // 소속 없을 때 닉/비밀번호 시작
										if(empty($bbs->op->inst)==true&&empty($bbs->op->inst2)==true&&$skin->op->comf_tline!="on"&&$device!="mobile"){ ?>
										<input type="text" id="name" class="cinput-np" name="name" placeholder="Name" <?php if($_COOKIE['nickname']) {echo 'value="'.$_COOKIE['nickname'].'"'; }elseif($member->user_id) {echo 'value="'.$member->nickname.'"';}?>>
										<input type="password" id="passwd" class="cinput-np" name="passwd" placeholder="Pass" <?php if($_COOKIE['passwd']) {echo 'value="'.$_COOKIE['passwd'].'"'; } elseif($member->user_id) {echo 'value="'.$member->passwd.'"';} ?>>
										&nbsp;<? } // 소속 없을 때 닉/비밀번호 끝
										?><font class="com-font">
										<label class="checkbox inline com-font">
										<input type="checkbox" id="op[dice]" name="op[dice]" value="dice" class="boxsize">dice</label>
										<label class="checkbox inline com-font">
										<input type="checkbox" id="op[more]" name="op[more]" value="more" class="boxsize">more</label>
										<label class="checkbox inline com-font">
										<input type="checkbox" id="op[secret]" name="op[secret]" value="secret" class="boxsize">sec</label>
										<?php if($skin->op->onop_mem=="on"){?>
										<label class="checkbox inline com-font">
										<input type="checkbox" id="op[msec]" name="op[msec]" value="msec" class="boxsize">msec</label>
										<?}?>
										<label class="checkbox inline com-font">
										<input type="checkbox" id="op[cookie]" name="op[cookie]" value="cookie" class="boxsize" <?php if($_COOKIE['cookie']) echo 'checked';?>>coo</label>
										</font>
										<?php // 소속 없을 때 글쓰기 버튼 시작
										if(empty($bbs->op->inst)==true&&empty($bbs->op->inst2)==true&&$skin->op->comf_tline!="on"&&$device!="mobile"){?>&nbsp;
										<button class="cmtmodify-submit"/><?=$skin->op->write_icon;?></button>
										<?} // 소속 없을 때 글쓰기 버튼 끝
										?>
										<?php if(empty($bbs->op->inst)==false||empty($bbs->op->inst2)==false||$skin->op->comf_tline=="on"||$device=="mobile") echo "</br>"; ?>
										<?php if(empty($bbs->op->inst)==false){ ?>
										<input type="text" name="op[position]" id="op[position]" class="cinput-np" placeholder="Position" <?php if($_COOKIE['position']) echo 'value="'.$_COOKIE['position'].'"';?> style="width:40px;">
										<?php }?>
										<?php if(empty($bbs->op->inst2)==false){ ?>
										<input type="text" name="op[position2]" id="op[position2]" class="cinput-np"  placeholder="Position2" <?php if($_COOKIE['position2']) echo 'value="'.$_COOKIE['position2'].'"';?> style="width:40px;">
										<?php };?>
										
										<?php // 소속 있을 때 닉/비밀번호/글쓰기 버튼 시작echo $skin->op->write_icon;
										if(!empty($bbs->op->inst)||!empty($bbs->op->inst2)||$skin->op->comf_tline=="on"||$device=="mobile"){	?>
										<input type="text" id="name" class="cinput-np" name="name" placeholder="Name" <?php if($_COOKIE['nickname']) {echo 'value="'.$_COOKIE['nickname'].'"'; }elseif($member->user_id) {echo 'value="'.$member->nickname.'"';}?>>
										<input type="password" id="passwd" class="cinput-np" name="passwd" placeholder="Pass" <?php if($_COOKIE['passwd']) {echo 'value="'.$_COOKIE['passwd'].'"'; } elseif($member->user_id) {echo 'value="'.$member->passwd.'"';} ?>>
										<button class="cmtmodify-submit"><?=$skin->op->write_icon;?></button>
										<? } 
										?>
									</div>
									</form>						
								</div>
								<?php }?>
								<!--// 코멘트 작성 종료 //-->
							</li>
							<!--// 코멘트를 불러오기 위한 반복문 종료 //-->
							</ul>
						</td>
						<!--//코멘트 출력//-->
					</tr>
				</tbody>
			</table>
		</div>
		<!--// 본문 종료 //-->
		<?php } ?>
		<?php } ?>
		<!--// 그림 불러오기 위한 반복문 종료 //-->

		<!--// 하단 페이지바 시작 //-->
		<div class="container">
		<div <?php if($device=="mobile"){?>class="pagination pagination-centered"<?}else{?>class="text-center pagination_top pg_bottom"<?}?> style="margin-top:20px;">
		<ul>
			<?php echo $paging;?>
		  </ul>
		</div>
		</div>
		<!--// 하단 페이지바 종료 //-->	
		
		<!--// 하단 공지사항 시작 //-->
		<?php if($bbs->notice->foot){?>
		<br><br>
		<div class="container" align="<?=$skin->op->notice_align?>">
			<div class="alert alert-info user_notice_border_color user_notice_border_type user_notice_background_color user_notice_etc user_notice_border_radius" style="padding:5px;">
				<?php echo $bbs->notice->foot;?>
			</div>
		</div>
		<br>
		<?}?>
		<!--// 하단 공지사항 끝 //-->
		<!--// 스킨 디자인 종료 //-->


		<!--// 리리플 폼 시작 //-->
		<div id="replyForm" class="text-right">
			<form class="margin0 cmtForm" method="POST" action="./lib/comment.submit.php" name="rre">
					<input type="hidden" name="idx" id="idx" value="">
					<input type="hidden" name="mode" id="mode" value="">
					<input type="hidden" name="cid" value="<?=$cid?>">
					<input type="hidden" name="page" value="<?=$page?>">
					<input type="hidden" id="no" name="no" value="">
					<input type="hidden" id="children" name="children" value="">
					<input type="hidden" id="pic_no" name="pic_no" value="">
					<input type="hidden" id="depth" name="depth" value="">
					<input type="hidden" name="op[user_id]" value="<?=$member->user_id?>">

					<font class="com-mfont">
					<?if($skin->op->comf_rreset=="show"){?><a href="javascript:rre.reset();"><font class="com-mfont">RESET</font></a> | <?}?>
					<?if($skin->op->comf_emo=="show"){?>
					<a href="javascript:;" onclick="javascript:window.open('./emoticon.php?cid=<?=$cid?>','이모티콘리스트','scrollbars=yes,toolbar=no,menubar=no,width=300,height=500')">
					<font class="com-mfont"><?=$skin->op->emoticon_icon?></font></a> | <?}?>
					<a href="javascript:;" class="replyClose"><font class="com-mfont">CLOSE : REPLY MODE</font></a></br></font>
					<input type="text"  class="cinput" name="memo" id="memo" placeholder="Memo" style="<?if ($device=="mobile") echo "width:141px;";?>margin-right:3px;"><input type="text" class="cinput" name="hpurl" id="hpurl" placeholder="Link"  <?php if($_COOKIE['hpurl']) echo 'value="'.$_COOKIE['hpurl'].'"';?><?if ($device=="mobile") echo "style=\"width:141px;\"";?>><br>
					<textarea rows="1" class="cinput" name="comment" id="comment" style="overflow-y:visible;height:auto;<?if ($device=="mobile") {echo "width:100%;max-width:290px !important;";}?>"></textarea><br>
					<?php // 소속 없을 때 닉/비밀번호 시작
					if(empty($bbs->op->inst)==true&&empty($bbs->op->inst2)==true&&$skin->op->comf_tline!="on"&&$device!="mobile"){ ?>
					<input type="text" id="name" class="cinput-np" name="name" placeholder="Name" <?php if($_COOKIE['nickname']) {echo 'value="'.$_COOKIE['nickname'].'"'; }elseif($member->user_id) {echo 'value="'.$member->nickname.'"';}?>>
					<input type="password" id="passwd" class="cinput-np" name="passwd" placeholder="Pass" <?php if($_COOKIE['passwd']) {echo 'value="'.$_COOKIE['passwd'].'"'; } else if($member->user_id) {echo 'value="'.$member->passwd.'"';} ?>>
					&nbsp;<? } // 소속 없을 때 닉/비밀번호 끝
					?><font class="com-font">
					<label class="checkbox inline com-font">
					<input type="checkbox" id="op[dice]" name="op[dice]" value="dice" class="boxsize">dice</label>
					<label class="checkbox inline com-font">
					<input type="checkbox" id="op[more]" name="op[more]" value="more" class="boxsize">more</label>
					<label class="checkbox inline com-font">
					<input type="checkbox" id="op[secret]" name="op[secret]" value="secret" class="boxsize">sec</label>
					<?php if($skin->op->onop_mem=="on"){?>
					<label class="checkbox inline com-font">
					<input type="checkbox" id="op[msec]" name="op[msec]" value="msec" class="boxsize">msec</label>
					<?}?>	
					<label class="checkbox inline com-font">
					<input type="checkbox" id="op[cookie]" name="op[cookie]" value="cookie" class="boxsize" <?php if($_COOKIE['cookie']) echo 'checked';?>>coo</label>
					</font>
					<?php // 소속 없을 때 글쓰기 버튼 시작
					if(empty($bbs->op->inst)==true&&empty($bbs->op->inst2)==true&&$skin->op->comf_tline!="on"&&$device!="mobile"){ ?>&nbsp;
					<button class="cmtmodify-submit"/><?=$skin->op->write_icon;?></button>
					<?} // 소속 없을 때 글쓰기 버튼 끝
					?>
					<?php if(empty($bbs->op->inst)==false||empty($bbs->op->inst2)==false||$skin->op->comf_tline=="on"||$device=="mobile") echo "</br>"; ?>
					<?php if(empty($bbs->op->inst)==false){//소속아이콘이 있다면 입력폼 출력 ?>
					<input type="text" class="cinput-np" name="op[position]"  placeholder="Position" <?php if($_COOKIE['position']) echo 'value="'.$_COOKIE['position'].'"';?> style="width:40px;">
					<?php }?>
					<?php if(empty($bbs->op->inst2)==false){//소속2아이콘이 있다면 입력폼 출력 ?>
					<input type="text" class="cinput-np" name="op[position2]"  placeholder="Position2" <?php if($_COOKIE['position2']) echo 'value="'.$_COOKIE['position2'].'"';?> style="width:40px;">
					<?php }?>
					<?php if(!empty($bbs->op->inst)||!empty($bbs->op->inst2)||$skin->op->comf_tline=="on"||$device=="mobile"){?>
					<input type="text" id="name" class="cinput-np" name="name" placeholder="Name" <?php if($_COOKIE['nickname']) {echo 'value="'.$_COOKIE['nickname'].'"'; }elseif($member->user_id) {echo 'value="'.$member->nickname.'"';}?>>
					<input type="password" id="passwd" class="cinput-np" name="passwd" placeholder="Pass" <?php if($_COOKIE['passwd']) {echo 'value="'.$_COOKIE['passwd'].'"'; } else if($member->user_id) {echo 'value="'.$member->passwd.'"';} ?>>
					<button class="cmtmodify-submit"/><?=$skin->op->write_icon;?></button>
					<? } // 소속 있을 때 닉/비밀번호/글쓰기 버튼 끝
				?>
			</form>
		</div>
		<!--// 리리플 폼 종료 //-->

		<!--// 리플 삭제 폼 //-->
		<div id="delForm" class="text-right" style="display:none;">
		<form class="cmtdelForm form-inline margin0" action="#">
		<input type="hidden" name="cid" value="<?=$cid?>">
		<input type="hidden" id="pic_no" name="pic_no" value="">
		<input type="hidden" id="idx" name="idx" value="">
		<input type="hidden" id="member" name="member" value="<?=session_id()?>">
		<input type="password" class="cinput-np" name="passwd" placeholder="Pass"> &nbsp;
		<button class="cmsubmit com-mfont">DELETE</button> &nbsp; 
		<a href="javascript:;" class="delClose"><font class="com-mfont">CLOSE</font></a>
		</form>
		</div>
		<!--// 리플 삭제 폼 //-->

		<!--// 수정 폼 //-->
		<div id="modifyForm" class="text-right" style="display:none;margin-top:10px;" >
					<form method="POST" class="margin0 cmtmodifyForm" action="./lib/comment.modify.ok.php" name="mmd">
					<input type="hidden" name="mode" id="mode" value="modify">
					<input type="hidden" name="cid" value="<?=$cid?>">
					<input type="hidden" name="op[dice]" value="">
					<input type="hidden" id="idx" name="idx" value="">
					<input type="hidden" id="page" name="page" value="<?=$page?>">
					<input type="hidden" name="op[user_id]" value="<?=$member->user_id?>">
					<input type="hidden" name="adminper" value="<?=$permission?>">
					<font class="com-mfont">
					<?if($skin->op->comf_rreset=="show"){?><a href="javascript:mmd.reset();"><font class="com-mfont">RESET</font></a> | <?}?>
					<?if($skin->op->comf_emo=="show"){?>
					<a href="javascript:;" onclick="javascript:window.open('./emoticon.php?cid=<?=$cid?>','이모티콘리스트','scrollbars=yes,toolbar=no,menubar=no,width=300,height=500')">
					<font class="com-mfont"><?=$skin->op->emoticon_icon?></font></a> | <?}?>
					<a href="javascript:;" class="modifyClose"><font class="com-mfont">CLOSE : MODIFY MODE</font></a><br></font>
					<input type="text" id="memo"  class="cinput" name="memo" placeholder="Memo" style="<?if ($device=="mobile") echo "width:141px;";?>margin-right:3px;"><input type="text" id="hpurl" class="cinput" name="hpurl" placeholder="Link" <?if ($device=="mobile") echo "style=\"width:141px;\"";?>></br>
					<textarea rows="2" id="comment" class="cinput" name="comment" style="margin-top:3px;overflow-y:visible;height:auto;<?if ($device=="mobile") {echo "width:100%;max-width:290px !important;";}?>"></textarea></br>
					
					<?php // 소속 없을 때 닉/비밀번호 버튼 시작
					if(empty($bbs->op->inst)==true&&empty($bbs->op->inst2)==true&&$skin->op->comf_tline!="on"&&$device!="mobile"){ ?>
					<input type="text" id="name" name="name" class="cinput-np" placeholder="Name" value="">
					<input type="password"  name="passwd" class="cinput-np" placeholder="Pass" <?php if ($permission=="true") {echo "value='fake'";}else{echo "required";}?>>
					&nbsp; <?} ?>
					<font class="com-font">
					<label class="checkbox inline com-font">
					<input type="checkbox" id="op[more]" name="op[more]" value="more" class="boxsize">more</label>
					<label class="checkbox inline com-font">
					<input type="checkbox" id="op[secret]" name="op[secret]" value="secret" class="boxsize">sec</label>
					<?php if($skin->op->onop_mem=="on"){?>
					<label class="checkbox inline com-font">
					<input type="checkbox" id="op[msec]" name="op[msec]" value="msec" class="boxsize">msec</label>
					<?}?>
					</font>
					<?php // 소속 없을 때 글쓰기 버튼 시작
					if(empty($bbs->op->inst)==true&&empty($bbs->op->inst2)==true&&$skin->op->comf_tline!="on"&&$device!="mobile"){?>&nbsp;
					<button class="cmtmodify-submit"/><?=$skin->op->write_icon;?></button>
					<?} ?>
					<?php if(empty($bbs->op->inst)==false||empty($bbs->op->inst2)==false||$skin->op->comf_tline=="on"||$device=="mobile") echo "</br>"; ?>
					<?php if(empty($bbs->op->inst)==false){ ?>
					<input type="text" class="cinput-np" name="op[position]" id="op[position]"  placeholder="Position" style="width:40px;">
					<?php }?>
					<?php if(empty($bbs->op->inst2)==false){?>
					<input type="text" class="cinput-np" name="op[position2]" id="op[position2]" placeholder="Position2" style="width:40px;">
					<?php }?>
					
					<?php // 소속 있을 때 닉/비밀번호/글쓰기 버튼 시작
					if(!empty($bbs->op->inst)||!empty($bbs->op->inst2)||$skin->op->comf_tline=="on"||$device=="mobile"){	?>
					<input type="text" id="name" class="cinput-np" name="name" placeholder="Name" value="">
					<input type="password" class="cinput-np" name="passwd" placeholder="Pass" <?php if ($permission=="true") {echo "value='fake'";}else{echo "required";}?>>
					<button class="cmtmodify-submit"><?=$skin->op->write_icon;?></button>
					<?}?>
			</form>
		</div>
		<!--// 수정 폼 //-->

		<!--// 그림 삭제 폼 //-->
		<div id="delpicForm" class="text-center marginTop5 logopt" style="display:none;position:absolute;width:210px;height:45px;">
		<form class="picdelForm form-inline margin0" action="#">
		<input type="hidden" name="cid" value="<?=$cid?>">
		<input type="hidden" id="idx" name="idx" value="">
		<input type="password" class="logopip_pass" name="passwd" placeholder="Pass"> &nbsp;&nbsp;
		<button class="cmsubmit com-mfont">DELETE</button> &nbsp; 
		<a href="javascript:;" class="picdelClose"><font class="com-mfont">CLOSE</font></a>
		</form>
		</div>
		<!--// 그림 삭제 폼 //-->
		<!--// 이어 그리기 폼 //-->
		<div id="continuepicForm" class="text-center marginTop5 logopt" style="display:none;position:absolute;width:210px;height:45px;">
		<form class="piccontinueForm form-inline margin0" method="POST" action="./index.php?cAct=picContinue&cid=<?=$cid?>">
		<input type="hidden" name="cid" value="<?=$cid?>">
		<input type="hidden" id="chi_idx" name="chi_idx" value="">
		<input type="password" class="logopip_pass" name="continue_passwd" id="continue_passwd" placeholder="Pass"> &nbsp;&nbsp;
		<button class="cmsubmit com-mfont">CONTINUE</button> &nbsp; 
		<a href="javascript:;" class="continueClose"><font class="com-mfont">CLOSE</font></a>
		</form>
		</div>
		<!--// 이어 그리기 폼 //-->
		<!--// 옵션 폼 //-->
		<div id="opFormDiv" class="text-center marginTop5 logopt" style="display:none;position:absolute;width:270px;height:60px;line-height:20px !important;padding-top:15px;">
		<form class="opForm form-inline margin0" method="POST" action="#">
		<input type="hidden" name="cid" value="<?=$cid?>">
		<input type="hidden" id="idx" name="idx" value="">
		<input type="hidden" name="op[user_id]" value="<?=$member->user_id?>">
		<select id="op" name="op[pic]" class="logopip" style="width:80px;">
		<option selected="selected" >옵션</option>
		<option>옵션 해제</option>
		<option value="more">접기</option>
		<option value="secret">비밀</option>
		<option value="moresecret">접기+비밀</option>
		<option value="logHeight">원고로그축소</option>
		</select>
		&nbsp;
		<label class="checkbox inline logop-font"><input type="checkbox" id="op[log]" name="op[log]" value="adminonly" class="boxsize">SEC</label>
		<?php if($skin->op->onop_mem=="on"){?>
		<label class="checkbox inline logop-font"><input type="checkbox" id="op[member]" name="op[member]" value="secret" class="boxsize">MSEC</label><?}?>
		<label class="checkbox inline logop-font"><input type="checkbox" id="op[logauto]" name="op[logauto]" value="enforbottom" class="boxsize">RB</label>
		<label class="checkbox inline logop-font"><input type="checkbox" id="op[logmore]" name="op[logmore]" value="moreply" class="boxsize">RM</label>
		<br/>
		<button class="cmsubmit com-mfont">OK</button> &nbsp; 
		<a href="javascript:;" class="opClose"><font class="com-mfont">CLOSE</font></a>
		</form>
		</div>
		<!--// 옵션 폼 //-->


		<!--// 그림 원본 박스용 스크립트 //-->
		<script>
		(function($) {
			$.fn.drags = function(opt) {

				opt = $.extend({handle:"",cursor:"move"}, opt);

				if(opt.handle === "") {
					var $el = this;
				} else {
					var $el = this.find(opt.handle);
				}

				return $el.css('cursor', opt.cursor).on("mousedown", function(e) {
					if(opt.handle === "") {
						var $drag = $(this).addClass('draggable');
					} else {
						var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
					}
					var z_idx = $drag.css('z-index'),
						drg_h = $drag.outerHeight(),
						drg_w = $drag.outerWidth(),
						pos_y = $drag.offset().top + drg_h - e.pageY,
						pos_x = $drag.offset().left + drg_w - e.pageX;
					$drag.css('z-index', 1000).parents().on("mousemove", function(e) {
						$('.draggable').offset({
							top:e.pageY + pos_y - drg_h,
							left:e.pageX + pos_x - drg_w
						}).on("mouseup", function() {
							$(this).removeClass('draggable').css('z-index', z_idx);
						});
					});
					e.preventDefault(); // disable selection
				}).on("mouseup", function() {
					if(opt.handle === "") {
						$(this).removeClass('draggable');
					} else {
						$(this).removeClass('active-handle').parent().removeClass('draggable');
					}
				});

			}
		})(jQuery);
		jQuery(document).ready(function($) {
			$('.lightbox_trigger').click(function(e) {
				e.preventDefault();
				var image_href = $(this).attr("href");
				var image_height = ($(window).scrollTop()+($(window).height()/2))-($(this).attr("size")/2);
				var scrolltop = $(window).scrollTop();
				if ($('#lightbox').length > 0) { 
					$('#lightbox').css('top',0);
					if($(window).height()>$(this).attr("size")){
					$('#content').css('top',image_height+'px');
					}else{
						$('#content').css('top',scrolltop);
					}
					$('#lightbox').show();
					$('#overlay').show();
					$('#content').html('<img src="' + image_href +'" /><a href="javascript:close();"><img src="skin/MnM/images/x.png" style="position:absolute;margin-left:-10px;"/></a>');			
				}
				else { 
					var lightbox = 
					'<div id="overlay"></div>'+
					'<div id="lightbox">' +
						'<div id="content">' + 
							'<img src="' + image_href +'" /><a href="javascript:close();"><img src="skin/MnM/images/x.png" style="position:absolute;margin-left:-10px;"/></a>' +
						'</div>' +	
					'</div>';
					$('body').append(lightbox);
					$('#lightbox').css('top',0);
					if($(window).height()>$(this).attr("size")){
						$('#content').css('top',image_height+'px');
						}else{
							$('#content').css('top',scrolltop);
						}
					var win_h = $(document).height();
					$('#lightbox').height(win_h);
				}
				$("#content").drags();
				
			document.onkeydown = function(){
			if(event.keyCode==27){
			close();
			return false;
			}}
			
			});
		});
		jQuery(window).resize(function(){
			var win_h = $(document).height();
			$('#lightbox').height(win_h);
		});
		function close() { 
				$('#lightbox').hide();
				$('#overlay').hide();
			}

		</script>
		<!--// 그림 원본 박스용 스크립트 //-->
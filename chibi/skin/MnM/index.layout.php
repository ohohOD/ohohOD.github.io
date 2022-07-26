<!DOCTYPE html>
<html lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0,maximum-scale=1.0">
<meta name="robots" content="noindex,nofollow">
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">

<script type="text/javascript">
$(document).ready(function() {

    $("#bbs_passwd").keypress(function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);

        if (code == 13) {
        	secret();
            return false;
        }
    });

$('.copen').click(function(){
	if($(this).attr('more')==0){
	$(this).attr('more','1');
	$(this).next('div').attr('style','display:block;');
	}else{
	$(this).attr('more','0');
	$(this).next().attr('style','display:none;');
	}
});

});
function secret(){
	$.ajax({
   url: './admin/admin.board.secret.check.php',
   type: 'POST',
   data: {'cid':"<?=$cid?>",'passwd':$('#bbs_passwd').val()},
   dataType: 'html',
   success: function(data){
	   if(data == true){
			location.href="./index.php?cid=<?=$cid?>";
	   }else{
	    alert("비밀번호가 틀립니다.");
	   }
   }
  });
}
function member_logout(){
	$.ajax({
   url: './member_logout.php',
   type: 'POST',
   data: {'cid':"<?=$cid?>"},
   dataType: 'html',
   success: function(data){
	   if(data == true){
			location.href="./index.php?cid=<?=$cid?>";
	   }else{
	    alert("멤버 로그인 상태가 아닙니다.");
	   }
   }
  });
}

</script>
<script src="skin/<?=$bbs->skin?>/user_fn.js"></script>
<title><?php echo $bbs->title?></title>
<style type="text/css">
.marginTop20{margin-top:20px;}
.secret-passwd{border-bottom:1px solid #3a87ad !important;}
.offsetreset{width:0px !important;height:0px;min-height:0px !important;}
</style>
<link href="skin/<?=$bbs->skin?>/skin.css" rel="stylesheet">
<style type="text/css">
<?php include "skin/".$bbs->skin."/skin.css.php"; /* 유저설정 CSS */ ?>
</style>
</head>
<body>
<div class="row-fluid">
<div class="span12 marginTop20">
<input type="hidden" id="bbs_cid" value="<?=$cid?>">
<input type="hidden" id="bbs_page" value="<?=$page?>">
<input type="hidden" id="bbs_session_id" value="<?=session_id()?>">
<input type="hidden" id="pic_d_width" value="<?=$bbs->op->pic_d_width?>">
<input type="hidden" id="pic_d_height" value="<?=$bbs->op->pic_d_height?>">
<?php 
if($bbs->op->include_head){include_once $bbs->op->include_head;
}?>

<?php	if($bbs->op->secret=="on"&&$connect_permission == false){
?>
<div class="secret_div">
<span class="secretboard_word" style="padding:5px 10px;"><?=$skin->op->secretboard_word?></span>
<br><br>
<form class="form-horizontal" id="secretForm" method="post" enctype="multipart/form-data" style="display:inline;">
<input name="passwd" id="bbs_passwd" type="password" placeholder="BOARD PASSWORD" class="secretboard_pass" required style="font-size:8px;height:20px;padding:0px 5px;">
&nbsp; <a href="javascript:secret();" id="addEmoticon"><span style="height:20px;padding:5px 10px;" class="secretboard_join"><?=$skin->op->secretboard_goword?></span></a>
</form>
</div>
<?php }else{

	switch($cAct){
	case "picDraw" :
		include "lib/draw.php";
		break;
	case "picContinue" :
		include "lib/draw.php";
		break;
	default:
		include "data/".$bbs->cid."/tpl/".$bbs->cid.".tpl.compiled.php";
		break;
	}?>
<div class="container text-right">
<?php if(empty($cAct)==true){?>
<form class="form-search form-inline" method="GET" action="index.php">
<input type="hidden" name="cid" value="<?=$cid?>">
<select class="Searchscss" name="search" style="width:90px;height:22px;" >
<option>선택</option>
<option value="no" <?php if($search=="no") echo "selected=\"selected\"";?>>로그 번호</option>
<option value="name" <?php if($search=="name") echo "selected=\"selected\"";?>>이름</option>
<option value="memo" <?php if($search=="memo") echo "selected=\"selected\"";?>>메모</option>
<option value="comment" <?php if($search=="comment") echo "selected=\"selected\"";?>>내용</option>

</select>
<input class="Searchbcss" name="keyword" type="search" style="width:70px;" value="<?=$keyword?>">

<button type="submit" class="Searchb2css" style="width:50px;">SEARCH</button>
</form>
<?php } ?>
<p class="sm-font">
Chibi Tool BBS ver <?=$chibi_ver?> &copy; <a href='http://canto.btool.kr' target='_blank'>Canto</a>
<?php if($skin->op->author){?>
| Skin by <?=$skin->op->author?>
<?}?>
</p></br>
</div>
<?php } ?>
<?php 
if($bbs->op->include_foot){
	include_once $bbs->op->include_foot;
}
?>
</div>
</div>
</body>
</html>

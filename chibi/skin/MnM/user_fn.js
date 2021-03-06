/* jQuery 스타트 */
$(window).resize(function(){
var m_height = ($(".movie").width()/4)*3;
$(".movie").height(m_height);
});
$(window).load(function(){
	var m_height = ($(".movie").width()/4)*3;
	$(".movie").height(m_height);
	});
jQuery.fn.autolink = function () {
	return this.each( function(){
		var re = /((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g;
		$(this).html( $(this).html().replace(re, '<a href="$1" target="_blank">$1</a> ') );
	});
}


$(document).ready(function(){	
$(".comment").autolink();
$("textarea").autoGrow(); 

$('#openLoad').click(function(){
	$('#loadForm').show();
});
$('#closeLoad').click(function(){
	$('#loadForm').hide();
});


$("#loadSelect").change(function () {
          var str = ""		  
		  $("#loadSelect > option:selected").each(function(){
			  str = $(this).val();
          if(str == "picture"){
				$(".video").hide();
				$(".loadpic").show();
				$(".type").val("picture");
				str = '';
		  }else if(str == "youtube" || str == "naver"){
				$(".loadpic").hide();
				$(".video").show();
				$(".type").val(str);
				str = '';
		  }
        });
});


/* 관리자패널 그림 삭제 */
$(".adminPicDel").submit(function(){
if($(document).find(".picidx").is(':checked')){
	  $.ajax({
   url: './lib/pic.admin.del.php',
   cache: false,
   type: 'POST',
   data: {'idx':$('input:checkbox[class=picidx]').serialize(),'cid':jQuery("#bbs_cid").val()},
   dataType: 'html',
   success: function(data){
	   if(data == true){
		 location.href="./index.php?cid="+jQuery("#bbs_cid").val()+"&page="+jQuery("#bbs_page").val();
	   }else{
		 alert("그림 삭제 실패!!");
 		 return false;
	   }
   
   }
  });
	  return false;
}else{
	 alert('삭제할 그림을 선택하여 주세요.');
	 return false;
}
  return false;
});
/* 관리자패널 그림 삭제 */


/* 코멘트(리플) 삭제 */
$(".delBtn").click(function(){
	$('#delForm').appendTo($(this).parent());
	$('#delForm').show();
	$("#delForm").find("#idx").val($(this).attr("idx"));
    $("#delForm").find("#no").val($(this).attr("no"));
	$("#delForm").find("#pic_no").val($(this).attr("pic_no"));
});
$(".delClose").click(function(){
	$('#delForm').hide();
});
$(".cmtdelForm").submit(function(){
if($(this).find("#passwd").val() == ""){
	  alert('패스워드를 입력하여 주세요.');
	  $(this).find("#passwd").focus();
	  $('#delForm').show();
	  return false;
}else{
		var formData = $(this).serialize();
   $.ajax({
   url: './lib/comment.del.php',
   cache: false,
   type: 'POST',
   data: formData,
   dataType: 'html',
   success: function(data){
	   if(data == true){
		 location.href="./index.php?cid="+jQuery("#bbs_cid").val()+"&page="+jQuery("#bbs_page").val();
	   }else{
		 alert("리플 삭제 실패!!");
 		 return false;
	   }
   }
  });
}
  return false;
});
/* 코멘트(리플) 삭제 */

/* 옵션창 */
$(".opBtn").click(function(){
   $.ajax({
   url: './skin/MnM/picloadmodify.php',
   cache: false,
   type: 'POST',
   data: {'idx':$(this).attr("idx")},
   dataType: 'json',
   success: function(data){
		$(".opForm").find("input[name='op[pic]']").val(data['default']);
	   $(".opForm").find("#op").val(data['default']);
	   if(data['secret']=="adminonly") $(".opForm").find("input:checkbox[id='op[log]']").prop("checked",true);else $(".opForm").find("input:checkbox[id='op[log]']").prop("checked",false);
	   if(data['member']=="secret") $(".opForm").find("input:checkbox[id='op[member]']").prop("checked",true);else $(".opForm").find("input:checkbox[id='op[member]']").prop("checked",false);
	   if(data['enforbottom']=="enforbottom") $(".opForm").find("input:checkbox[id='op[logauto]']").prop("checked",true);else $(".opForm").find("input:checkbox[id='op[logauto]']").prop("checked",false);
	   if(data['moreply']=="moreply") $(".opForm").find("input:checkbox[id='op[logmore]']").prop("checked",true);else $(".opForm").find("input:checkbox[id='op[logmore]']").prop("checked",false);
	   }
   });
    $(".opForm").find("#idx").val($(this).attr("idx"));
	$("#opFormDiv").appendTo($(this).parent());
	$("#opFormDiv").show();
});

$(".opClose").click(function(){
	$("#opFormDiv").hide();
});
$(".opForm").submit(function(){
	var formData = $(this).serialize();
   $.ajax({
   url: './lib/pic.update.php',
   cache: false,
   type: 'POST',
   data: formData,
   dataType: 'html',
   success: function(data){
	   if(data == true){
		 location.href="./index.php?cid="+jQuery("#bbs_cid").val()+"&page="+jQuery("#bbs_page").val();
	   }else{
		 alert("옵션 적용 실패!!");
 		 return false;
	   }
   }
  });
  return false;
});
/* 옵션창 */

/* 이어그리기 */
$(".continueBtn").click(function(){
    $(".piccontinueForm").find("#chi_idx").val($(this).attr("idx"));
	$("#continuepicForm").appendTo($(this).parent());
	$("#continuepicForm").show();
});
$(".continueClose").click(function(){
	$("#continuepicForm").hide();
});
$(".piccontinueForm").submit(function(){
	return true;
});
/* 이어그리기 */


/* 그림 삭제 */
$(".picdelBtn").click(function(){
	$('#delpicForm').appendTo($(this).parent());
	$('#delpicForm').show();
    $("#delpicForm").find("#idx").val($(this).attr("idx"));
});
$(".picdelClose").click(function(){
	$('#delpicForm').hide();
});
$(".picdelForm").submit(function(){
if($(this).find("#passwd").val() == ""){
	  alert('패스워드를 입력하여 주세요.');
	  $('#delpicForm').show();
	  $(this).find("#passwd").focus();
	  return false;
}else{
		var formData = $(this).serialize();
   $.ajax({
   url: './lib/pic.del.php',
   cache: false,
   type: 'POST',
   data: formData,
   dataType: 'html',
   success: function(data){
	   if(data == true){
		 location.href="./index.php?cid="+jQuery("#bbs_cid").val()+"&page="+jQuery("#bbs_page").val();
	   }else{
		 alert("그림 삭제 실패!!");
 		 return false;
	   }
   }
  });
}
  return false;
});
/* 그림 삭제 */


/* 관리자패널 코멘트(리플) 삭제 */
$(".adminCmtDel").submit(function(){
if($(document).find(".idx").is(':checked')){
	  $.ajax({
   url: './lib/comment.admin.del.php',
   cache: false,
   type: 'POST',
   data: {'idx':$('input:checkbox[class=idx]').serialize(),'cid':jQuery("#bbs_cid").val(),'session':jQuery("#bbs_session_id").val()},
   dataType: 'html',
   success: function(data){
	   if(data == true){
		 location.href="./index.php?cid="+jQuery("#bbs_cid").val()+"&page="+jQuery("#bbs_page").val();
	   }else{
		 alert("리플 삭제 실패!!");
 		 return false;
	   }
   return false;
   }
  });
	  return false;
}else{
	 alert('삭제할 리플을 선택하여 주세요.');
	 return false;
}
  return false;
});
/* 관리자패널 코멘트(리플) 삭제 */


$(".modify").click(function(){
	$(this).hide();
	  $.ajax({
   url: './skin/MnM/comment.modify.php',
   type: 'POST',
   data: {'idx':$(this).attr("idx"),'cid':jQuery("#bbs_cid").val(),'page':jQuery("#bbs_page").val()},
   dataType: 'json',
   success: function(data){
	   $(".cmtmodifyForm").find("#comment").val(data['comment']);
	   $(".cmtmodifyForm").find("#name").val(data['name']);
	   $(".cmtmodifyForm").find("#idx").val(data['idx']);
	   $(".cmtmodifyForm").find("#memo").val(data['memo']);
	   $(".cmtmodifyForm").find("#hpurl").val(data['hpurl']);
	   if(data['more']=="more") $(".cmtmodifyForm").find("input:checkbox[id='op[more]']").prop("checked",true);else $(".cmtmodifyForm").find("input:checkbox[id='op[more]']").prop("checked",false);
	   if(data['secret']=="secret") $(".cmtmodifyForm").find("input:checkbox[id='op[secret]']").prop("checked",true);else $(".cmtmodifyForm").find("input:checkbox[id='op[secret]']").prop("checked",false);
	   if(data['msec']=="msec") $(".cmtmodifyForm").find("input:checkbox[id='op[msec]']").prop("checked",true);else $(".cmtmodifyForm").find("input:checkbox[id='op[msec]']").prop("checked",false);
	   if(data['dice']) $(".cmtmodifyForm").find("input[name='op[dice]']").val(data['dice']);
   }
  });
  $('#modifyForm').appendTo($(this).parent());
  $("#modifyForm").show();
});

/*리플+코멘트 등록*/
$(".reply").click(function(){
	$(this).hide();
    $("#replyForm").find("#no").val($(this).attr("no"));
	$("#replyForm").find("#pic_no").val($(this).attr("pic_no"));
	$("#replyForm").find("#depth").val($(this).attr("depth"));
	$("#replyForm").find("#children").val($(this).attr("children"));
	$('#replyForm').appendTo($(this).parent().next());
	$("#replyForm").show();
});

$(".replyClose").click(function(){
	$('#replyForm').hide();
	$('.reply').show();
});
$(".modifyClose").click(function(){
	$('#modifyForm').hide();
	$('.modify').show();
});

$(".cmtForm").submit(function(){
	$(this).find("button").hide();
	if($(this).find("#name").val() == ""){
	  $(this).find("#name").focus();
	  $(this).find("button").show();
	  return false;
	}else if($(this).find("#passwd").val() == ""){
	  alert('패스워드를 입력하여 주세요.');
	  $(this).find("#passwd").focus();
	  $(this).find("button").show();
	  return false;
	}else if($(this).find("#comment").val() == ""){
	  alert('코멘트를 입력하여 주세요.');
	  $(this).find("#comment").focus();
	  $(this).find("button").show();
	  return false;
}else{
$(this).find("button").show();
return true;
}
 return false;
}
);
/*리플+코멘트 등록*/

$('.more').click(function(){
	if($(this).attr('more')==0){
	$(this).attr('more','1');
	$(this).next('p').attr('style','display:block;');
	$(this).children('i').attr('class','icon-chevron-up');
	}else{
	$(this).attr('more','0');
	$(this).next().attr('style','display:none;');
	$(this).children('i').attr('class','icon-chevron-down');
	}
});

$('.rp_more').click(function(){
	if($(this).attr('more')==0){
	$(this).attr('more','1');
	$(this).next('ul').attr('style','display:block;');
	}else{
	$(this).attr('more','0');
	$(this).next('ul').attr('style','display:none;');
	}
});

$('.autopicmore').click(function(){
	if($(this).attr('more')==0){
	$(this).attr('more','1');
	$(this).next('div').attr('style','display:block;');
	$(this).children('i').attr('class','icon-chevron-up');
	}else{
	$(this).attr('more','0');
	$(this).next().attr('style','display:none;');
	$(this).children('i').attr('class','icon-chevron-down');
	}
});

$('.picmore').click(function(){
	if($(this).attr('more')==0){
	$(this).attr('more','1');
	$(this).next('a').attr('style','display:block;');
	$(this).children('i').attr('class','icon-chevron-up');
	}else{
	$(this).attr('more','0');
	$(this).next('a').attr('style','display:none;');
	$(this).children('i').attr('class','icon-chevron-down');
	}
});
$('.cmt_more').click(function(){
	if($(this).attr('more')==0){
	$(this).attr('more','1');
	$(this).children('img').attr('src','skin/default/images/close.png');
	$(this).next('p').attr('style','display:block;');
	}else{
	$(this).attr('more','0');
	$(this).children('img').attr('src','skin/default/images/more.png');
	$(this).next().attr('style','display:none;');
	}
});

$('.pic_more').click(function(){
	if($(this).attr('more')==0){
	$(this).attr('more','1');
	$(this).children('img').attr('src','skin/default/images/close.png');
	$(this).next('a').attr('style','display:block;');
	}else{
	$(this).attr('more','0');
	$(this).children('img').attr('src','skin/default/images/more.png');
	$(this).next('a').attr('style','display:none;');
	}
});

$('.movie_more').click(function(){
	var max_height = ($(this).next('p').width()/4)*3;
	var min_height = $(this).parent('td').height();
	if($(this).attr('more')==0){
	$(this).attr('more','1');
	$(this).children('img').attr('src','skin/default/images/close.png');
	$(this).next('p').children('iframe').show();
	$(this).next('p').height(max_height);
	}else{
	$(this).attr('more','0');
	$(this).children('img').attr('src','skin/default/images/more.png');
	$(this).next('p').children('iframe').hide();
	$(this).next('p').height('0');
	}
});

$('#closecLoad').click(function(){
		$(".loadpic").hide();
		$(".text").hide();
		$(".video").hide();
		$('#closecLoad').hide();
});
});
/* jQuery 종료 */

/* 툴 선택 (비툴&치비) */
function selectTool(tool){
	if(tool=='chibi') jQuery("#tool").val('chibi');
	if(tool=='btool') jQuery("#tool").val('btool');
	if(jQuery("#width").val()==""){
		jQuery("#width").val(jQuery("#pic_d_width").val());
	}
	if(jQuery("#height").val()==""){
		jQuery("#height").val(jQuery("#pic_d_height").val());
	}
	jQuery("#drawForm").submit();
}

/* 툴 선택 (비툴&치비) */
function upload(){
	jQuery("#uploadBtn").hide();
	 document.getElementById("uploadForm").target = "uploadIFrame";
	 document.getElementById("uploadIFrame").onload = function()
	{
			location.href="index.php?cid="+jQuery("#bbs_cid").val()+"&page="+jQuery("#bbs_page").val();
			
	}
	return true;
}
function uploadV(){
	jQuery("#uploadVBtn").hide();
	 document.getElementById("uploadVForm").target = "uploadIFrame";
	 document.getElementById("uploadIFrame").onload = function()
	{
			location.href="index.php?cid="+jQuery("#bbs_cid").val()+"&page="+jQuery("#bbs_page").val();
			
	}
	return true;
}
function uploadT(){
	jQuery("#uploadTBtn").hide();
	 document.getElementById("uploadTForm").target = "uploadIFrame";
	 document.getElementById("uploadIFrame").onload = function()
	{
			location.href="index.php?cid="+jQuery("#bbs_cid").val()+"&page="+jQuery("#bbs_page").val();
			
	}
	return true;
}
//Private variables
	var colsDefault = 0;
	var rowsDefault = 0;
	//var rowsCounter = 0;

	//Private functions
	function setDefaultValues(txtArea) {
		colsDefault = txtArea.cols;
		rowsDefault = txtArea.rows;
		//rowsCounter = document.getElementById("rowsCounter");
	}

	function bindEvents(txtArea) {
		txtArea.onkeyup = function () {
			grow(txtArea);
		}
	}

	//Helper functions
	function grow(txtArea) {
		var linesCount = 0;
		var lines = txtArea.value.split('\n');

		for (var i = lines.length - 1; i >= 0; --i) {
			linesCount += Math.floor((lines[i].length / colsDefault) + 1);
		}

		if (linesCount >= rowsDefault)
			txtArea.rows = linesCount + 1;
		else
			txtArea.rows = rowsDefault;
		//rowsCounter.innerHTML = linesCount + " | " + txtArea.rows;
	}

	//Public Method
	jQuery.fn.autoGrow = function () {
		return this.each(function () {
			setDefaultValues(this);
			bindEvents(this);
		});
	};



	
function Twitter(msg,url) {
 var href = "https://twitter.com/intent/tweet?text="+encodeURIComponent(msg)+"&lang=ko&url="+encodeURIComponent(url);
 var a = window.open(href, 'twitter', '');
 if ( a ) {
  a.focus();
 }
}

function FaceBook(msg,url,img) {
 var href = "https://m.facebook.com/sharer.php?u=" + url + "&t=" + encodeURIComponent(msg);
 var a = window.open(href, 'facebook', '');
 if ( a ) {
  a.focus();
 }
}

function FaceBook2(msg,url,img) {
 var href = "http://www.facebook.com/sharer.php?s=100&p[title]="+encodeURIComponent(msg) + "&p[url]=" + encodeURIComponent(url) + "&p[images][0]=" + encodeURIComponent(img);
// var href = "http://www.facebook.com/sharer.php?u=" + url + "&t=" + encodeURIComponent(msg);
 var a = window.open(href, 'facebook', '');
 if ( a ) {
  a.focus();
 }
}
<?php
header('P3P: CP="ALL CURa ADMa DEVa TAIa OUR BUS IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC OTC"');
header ('Cache-Control: no-cache, must-revalidate'); 
header ('Pragma: no-cache');
header ('Content-type: text/html; charset=UTF-8');
define("__CHIBI__",time());
$cid = $_POST['cid'];
$idx = $_POST['idx'];
$page = $_POST['page'];
/* DB정보취득 */
include_once "../../data/config/db.config.php";
include_once "../../lib/db.conn.php";
include_once "../../lib/bbs.fn.php";
$select = "SELECT * FROM `chibi_comment` WHERE `idx`='".mysqli_real_escape_string($chibi_conn, $_POST['idx'])."'";
$comment_query = mysqli_query($chibi_conn, $select);
$comment = mysqli_fetch_array($comment_query);
$comment = (object) $comment;
$comment->op = unserialize($comment->op);
$op = (object) $comment->op;
$return = array(
	'cid'=>$comment->cid,
	'idx'=>$comment->idx,
	'name'=>$comment->name,
	'memo'=>$comment->memo,
	'hpurl'=>$comment->hpurl,
	'comment'=>stripslashes($comment->comment),
	'secret'=>$op->secret,
	'more'=>$op->more,
	'dice'=>$op->dice,
	'msec'=>$op->msec
);
echo json_encode($return);
?>
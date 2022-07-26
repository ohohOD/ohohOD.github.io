<?php
header('P3P: CP="ALL CURa ADMa DEVa TAIa OUR BUS IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC OTC"');
header ('Cache-Control: no-cache, must-revalidate'); 
header ('Pragma: no-cache');
header ('Content-type: text/html; charset=UTF-8');
define("__CHIBI__",time());
$idx = $_POST['idx'];

/* DB정보취득 */
include_once "../../data/config/db.config.php";
include_once "../../lib/db.conn.php";
include_once "../../lib/bbs.fn.php";
$select = "SELECT * FROM `chibi_pic` WHERE `idx`='".mysql_real_escape_string($_POST['idx'])."'";
$s_query = mysql_query($select,$chibi_conn);
$picture = mysql_fetch_array($s_query);
$picture = (object) $picture;
$picture->op = unserialize($picture->op);
$op = (object) $picture->op;
$return = array(
	'default'=>$op->pic,
	'secret'=>$op->log,
	'member'=>$op->member,
	'enforbottom'=>$op->logauto,
	'moreply'=>$op->logmore
);
echo json_encode($return);
?>
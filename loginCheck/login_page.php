<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>AdminPage</title>
</head>
	<body>
		<?php
			// 만약, 들어온 값을 해시한 값이 원래 값이랑 같으면
			if(isset($_POST[password])){
				$password = $_POST[password];
				$password_hash = hash("sha256", $password);

				$right_answer = "414652221938e3105f926175981f34c03087b06adb667a31f386e3413df992c6";

				$str = strcmp($password_hash, $right_answer);
				
				if($str) {
		?>

		<p><font face="나눔고딕, NanumGothic, 돋움"><span style="color:#F4C0AF;"style="font-weight:bold;"style="font-size: 10pt;">비밀번호가 틀렸습니다.</span></font>
	<font face="나눔고딕, NanumGothic, 돋움"><a href="http://bydarti.dothome.co.kr"><span style="font-size: 10pt;">돌아가기</span></a></font></p>
		

		<?php
				} else{
					echo "로그인 되었습니다. 곧 페이지로 이동합니다. </br>";
					Header("Location:../chibi/free");
				}
	
			}else{
		?>

		<p><font face="나눔고딕, NanumGothic, 돋움"><span style="color:#F4C0AF;"style="font-weight:bold;"style="font-size: 10pt;">▶ 비밀번호를 입력해주세요.</span></font>
	<font face="나눔고딕, NanumGothic, 돋움"><a href="http://bydarti.dothome.co.kr"><span style="font-size: 10pt;">돌아가기</span></a></font></p>

		<?php
			}
		?>
	</body>
</html>
$(document).ready(function(){

	$("#login .user-name").focus(function(){
		if ($(this).val()=="用户名") {
			$(this).val("").focus();
			$(this).css("color","");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("用户名").css("color","#ccc");
		}
	});

	$('#login .password').blur(function(){
		if($(this).val()==""){
			$(this).hide();
			$('#login .password_txt').show();
		}else{
			$('#login .password_txt').hide();
		}
	});

	$('#login .password_txt').focus(function(){
		$(this).hide();
		$('#login .password').show().focus();
	});

	$("#login .user-name").blur();
	// $('#login .password').blur();	
	//$('#login .password').hide();
	$('#login .password_txt').show();

});

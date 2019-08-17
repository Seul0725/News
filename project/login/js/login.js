$(function(){
	function loginSuccess(obj){
		getAjax('/login_success','GET',obj,function(res){
			if(res.status==200){
				swal('登录成功', '', 'success');
			}
		},function(err){
			console.log(err);
		});
	}
	function reg(obj){
		getAjax('/reg','GET',obj,function(res){
			if(res.status==200){
				swal('注册成功', '', 'success');
			}
		},function(err){
			console.log(err);
		});
	}
	//注册
	$('input[value="Sign Up"]').click(function(event){
		var target = event.target;
		var inputs = $(target).parent().parent();
		var username = inputs.find('#user').val();
		var password = inputs.find('[type=password]').val();
		var nickname = inputs.find('#nickname').val();
		var email = inputs.find('[type=email]').val();
		console.log(inputs.find('[type=email]').val());
		if(username&&password&&nickname&&email){
			var obj = {
				username:username,
				password:password,
				nickname:nickname,
				email:email
			}
			console.log(obj.email);
			$('.sign-up-htm').find('[value="Sign Up"]').attr('type','submit');
			reg(obj);
		}else{
			swal('注册失败', '请输入详细信息', 'error');
		}
	});
	//登录
	$('input[value="Sign In"]').click(function(event){
		var target = event.target;
		var inputs = $(target).parent().parent();
		var username = inputs.find('[type=text]').val();
		var password = inputs.find('[type=password]').val();
		if(username&&password){
			var obj = {
				username:username,
				password:password
			}
			$('.sign-in-htm').find('[value="Sign In"]').attr('type','submit');
			loginSuccess(obj);
		}else if(username){
			swal('登录失败', '请输入密码', 'error');
		}else if(password){
			swal('登录失败', '请输入用户名', 'error');
		}else{
			swal('登录失败', '请输入用户名和密码', 'error');
		}
		
	});
});
//点击左侧导航，右侧出现对应内容
$(function(){
	//左侧导航栏颜色
	$('.info-left li:first').css('backgroundColor','#169FE6');
	$('.info-left ul').click(function(event){
		var target = event.target;
		if($(target).is('li')){
			$('.info-left li').each(function(index,item){
				$(item).css('backgroundColor','#f5f6fa');
			});
			$(target).css('backgroundColor','#169FE6');
		}
	});
	//铃铛
	$('.info-right>header>i').dblclick(function(){
		$(this).toggleClass('fa-bell-slash');
		$(this).next().toggle();
	});
	$('.info-content').load('./pages/home.html');
	$('.info-left li').click(function(){
		var title = $(this).text().trim();
		switch(title){
			case '首页':
				$('.info-content').load('./pages/home.html');
				break;
			case '栏目管理':
				$('.info-content').load('./pages/category.html');
				break;
			case '资讯管理':
				$('.info-content').load('./pages/info.html');
				break;
			case '用户管理':
				$('.info-content').load('./pages/user.html');
				break;
			default:
				break;
		}
	});
});
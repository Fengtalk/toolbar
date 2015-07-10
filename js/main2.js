requirejs.config({
	paths:{
		jquery:'jquery-1.9.1.min'
	}
});

requirejs(['jquery','backTop'],function($,backTop){
	/**
	var scroll = new scrollTo.ScrollTo({

	});

	$('#backTop').on('click',$.proxy(scroll.move,scroll));
	$(window).on('scroll',function(){
		//console.log($(window).height());
		checkPosition($(window).height());
	});
	checkPosition($(window).height());
	function move(){
		$('html, body').animate({
			scrollTop:0
		},800);
	};

	function checkPosition(pos){
		if($(window).scrollTop() > pos){
			$('#backTop').fadeIn();
		}else{
			$('#backTop').fadeOut();
		}
	}**/
/**自定义组件调用**/
	new backTop.BackTop($('#backTop'),{
		mode:'move'
	});

/**插件方式调用
$('#backTop').backTop({

});**/
});
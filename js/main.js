/**
 * [paths description] 配置
 * @type {Object}
 */
requirejs.config({
	paths:{
		jquery:'jquery-1.9.1.min'
	}
});

/**
requirejs(['jquery','validata'],function($,validata){
	//$('body').css('background-color','red');
	console.log(validata.isEqual('a','a'));
});**/

requirejs(['jquery'],function($){
	
});
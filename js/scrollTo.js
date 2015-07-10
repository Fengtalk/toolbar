define(['jquery'],function($){
	/**
	 * [ScrollTo description]
	 * @Author   KENFO
	 * @Email    xxg3053@qq.com
	 * @DateTime 2015-06-26T15:24:07+0800
	 * @Describe  构造函数
	 * @param    {[type]}                 opts [description]
	 */
	function ScrollTo(opts){
		this.opts = $.extend({},ScrollTo.DEFAULTS,opts);
		this.$el = $('html, body');
	}
	/**
	 * [move description]
	 * @Author   KENFO
	 * @Email    xxg3053@qq.com
	 * @DateTime 2015-06-26T15:44:07+0800
	 * @Describe  缓慢移动到desc
	 * @return   {[type]}                 [description]
	 */
	ScrollTo.prototype.move = function(){
		var opts = this.opts,
			dest = opts.dest;
		if($(window).scrollTop() != dest){
			if(!this.$el.is(':animated')){
				this.$el.animate({
					scrollTop:dest
				},opts.speed);
			}
		}
	}
	/**
	 * [go description]
	 * @Author   KENFO
	 * @Email    xxg3053@qq.com
	 * @DateTime 2015-06-26T15:44:20+0800
	 * @Describe  直接移动
	 * @return   {[type]}                 [description]
	 */
	ScrollTo.prototype.go = function(){
		var dest = this.opts.dest;
		if($(window).scrollTop() != dest){
			this.$el.scrollTop(dest);
		}
	}
	ScrollTo.DEFAULTS = {
		dest:0,
		speed:800
	};

	return {
		ScrollTo:ScrollTo
	};
});
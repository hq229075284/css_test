(function() {

	var snowflakeURl = [
		'http://images.cnblogs.com/cnblogs_com/LoveOrHate/723567/o_1.png',
		'http://images.cnblogs.com/cnblogs_com/LoveOrHate/723567/o_2.png',
		'http://images.cnblogs.com/cnblogs_com/LoveOrHate/723567/o_3.png',
		'http://images.cnblogs.com/cnblogs_com/LoveOrHate/723567/o_4.png',
		'http://images.cnblogs.com/cnblogs_com/LoveOrHate/723567/o_5.png',
		'http://images.cnblogs.com/cnblogs_com/LoveOrHate/723567/o_6.png'
	]; //js设置数组存储6张花瓣的图片
	var content=$(".content");
	function createSnow() {
		return $("<div class='snow' />");
	}
	// setTimeout(function() {}, 10);
	var timer = setInterval(function() {
		var random_img = Math.random();
		var random_pos = Math.random();
		var random_direction=Math.random();
		var start_left=Math.floor(random_pos*content.width());
		var end_left=start_left+400*random_direction-200;
		var end_top=content.height()-41;
		var snowBox = createSnow().css({
			"background-image": "url("+snowflakeURl[Math.floor(random_img * 6)]+")",
			"left":start_left,
		});
		content.append(snowBox);
		snowBox.animate({
			left: end_left,
			top: end_top,
		},
			6000, function() {
			/* stuff to do after animation is complete */
			$(this).remove(); 
		});
	}, 100);

})(jQuery || Zepto);
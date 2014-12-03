$(function()
{
	var sticky_navigation_offset_top = $('#sticky_navigation').offset().top;
	var sticky_navigation = function()
	{
		var scroll_top = $(window).scrollTop();
		if (scroll_top > sticky_navigation_offset_top) { 
			$('#sticky_navigation').css({ 'position': 'fixed', 'top':0, 'left':0 });
		} else {
			$('#sticky_navigation').css({ 'position': 'relative' }); 
		}   
	};
	
	$("#btn1").on("click",function()
	{
	
	});
	
	sticky_navigation();
	$(window).scroll(function() 
	{
		 sticky_navigation();
	});
});
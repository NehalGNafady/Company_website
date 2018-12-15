/*global $ , alert , JQuery */
$(document).ready(function () {
	
	"use strict";
   
    $("html").niceScroll();

	$('.carousel').carousel({interval: 6000 });
    
    //show color option div when click on the gear
     
	$(".gear-check").click(function () { $(".color-option").fadeToggle(); });
    
    //change theme color on click
    
    var colorLi = $(".color-option ul li"),
		
		scrollButton = $("#scroll-top");
    
	colorLi.eq(0).css("backgroundColor", "#d872a9").end()
		.eq(1).css("backgroundColor",  "#E41B17").end()
		.eq(2).css("backgroundColor", "#f26a44").end()
		.eq(3).css("backgroundColor", "#f6db68").end()
		.eq(4).css("backgroundColor", "#3aa6a9");

    colorLi.click(function () {	$("link[href*='theme']").attr("href", $(this).attr("data-value")); });
  
	//catch scroll top
	
	$(window).scroll(function () {
		
		if ($(this).scrollTop() >= 700) {scrollButton.show(); } else {
		
			scrollButton.hide();
		}
	});
	
	scrollButton.click(function () { $("html,body").animate({ scrollTop: 0}, 600); }); });

    //loading screen

$(window).load(function () {
  
	"use strict";
	
	$(".loading-overlay .spinner").fadeOut(2000, function () {
		
		        // Show The Scroll

		
		$("body").css("overflow", "auto");
		
		$(this).parent().fadeOut(2000, function () {
			
			$(this).remove();
		});
	});
});
jQuery(window).scroll(function () {
	var pxFromTop = 575;
	var scrolledFromTop = jQuery(window).scrollTop();
	if (scrolledFromTop > pxFromTop) {
		jQuery("#navbar").addClass("js-fixed");
	} else {
		jQuery("#navbar").removeClass("js-fixed");
	}
});
$(".img-parallax").each(function () {
	var img = $(this);
	var imgParent = $(this).parent();
	function parallaxImg() {
		var speed = img.data("speed");
		var imgY = imgParent.offset().top;
		var winY = $(window).scrollTop();
		var winH = $(window).height();
		var parentH = imgParent.innerHeight();

		// The next pixel to show on the screen
		var winBottom = winY + winH;

		// If the block is shown on the screen
		if (winBottom > imgY && winY < imgY + parentH) {
			// Number of pixels shown after the block appears
			var imgBottom = (winBottom - imgY) * speed;
			// Max number of pixels until the block disappears
			var imgTop = winH + parentH;
			// Percentage between start showing until disappearing
			var imgPercent = (imgBottom / imgTop) * 100 + (50 - speed * 50);

			// Set the CSS properties
			img.css({
				top: imgPercent + "%",
				transform: "translate(-50%, -" + imgPercent + "%)",
			});
		}
	}
	$(document).on({
		scroll: function () {
			parallaxImg();
		},
		ready: function () {
			parallaxImg();
		},
	});
});

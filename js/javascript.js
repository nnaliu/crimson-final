$(document).ready(function(){
	$('#title').hide();
	$('#main-text').hide();
	$('.features-container').hide();

	
	$('#right.arrow').click(function() {
		var current = $('.features-container').find('.feature:first');
		$(current).fadeOut();
	    $(current).animate({left: '-50%' }, 1000, function() {
	        $(current).css('left', '150%');
	        $(current).appendTo('.features-container');
	    });
	    $(current).next().animate({ left: '50%' }, 500);
	    $(current).next().fadeIn();
	});
});

$(document).scroll(function() {
	if ($(this).scrollTop() > 20) {
		$('#title').fadeIn();
		$('#main-text').fadeIn();
	}

	if ($(this).scrollTop() > 400) {
		$('.features-container').fadeIn();
	}
});
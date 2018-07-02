$(document).ready(function(){
    $(".meddy-link").hover(function(){
		
		var image = $(".company-logo");

	    image.fadeOut('fast', function () {
	        image.attr('src', 'img/meddy.png');
	        image.fadeIn('600');
	    });

        }, function(){
        
		var image = $(".company-logo");

	    image.fadeOut('fast', function () {
	        image.attr('src', 'img/kik.png');
	        image.fadeIn('600');
	    });
    });
});
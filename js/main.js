$(function() {

	$(window).mouseleave(function(e){			
		if (e.clientY < 10) {			
			if (!$.cookie('hideModal')) {	
				$('[href="#exit"]')[0].click();		
				$.cookie('hideModal', true, {	
					expires: 30,
					path: '/'
				});
			};			
		};		
	});

	$(window).scroll(function(){		
		var scrollTop = 45;
		if ($(this).scrollTop() > scrollTop) {
			$(".navbar").addClass("is-fixed");					
		} else {
			$(".navbar").removeClass("is-fixed");	
		};
	});		

	var scrollTop = 45;
	if ($(this).scrollTop() > scrollTop) {
		$(".navbar").addClass("is-fixed");					
	} else {
		$(".navbar").removeClass("is-fixed");	
	};

	$('.hamburger').click(function() {
		var menu = $('.mobile-menu');		
		if (menu.hasClass('visible')) {				
			menu.removeClass("visible");		
			$('.overlay').removeClass('is-visible');
			$('body').removeClass('noscroll');	
		} else {						
			menu.addClass('visible');	
			$('.overlay').addClass('is-visible');
			$('body').addClass('noscroll');
		};
	});	

	$('.overlay').click(function(){
		var menu = $('.mobile-menu');				
		menu.removeClass("visible");		
		$(this).removeClass('is-visible');
		$('body').removeClass('noscroll');		
	});	

	if($(window).width() < 1200) {
		$(".menu__link, .mobile-menu__btn").click(function(){
			var menu = $('.mobile-menu');				
			menu.removeClass("visible");		
			$('.overlay').removeClass('is-visible');
			$('body').removeClass('noscroll');		
		});
	};

	$(".scroll").on("click", function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top - 70;
		$('body,html').animate({scrollTop:top}, 1000);
	});	

	$('.faq__item').click(function(){
		event.preventDefault();
		if(!$(this).hasClass('active')) {		
			$('.faq__item').removeClass('active');
			$('.faq__item').find('.faq__a').slideUp();	
			$(this).addClass('active');	
			$(this).find('.faq__a').slideDown();			
		}	else {
			$('.faq__item').removeClass('active');
			$('.faq__item').find('.faq__a').slideUp();	
			$(this).removeClass('active');	
			$(this).find('.faq__a').slideUp();
		}
	});	

	$('.faq__item').each(function(){		
		if($(this).hasClass('active')) {			
			$(this).find('.faq__a').slideDown();			
		}
	});

    $('[href="#callback"], [href="#request"], [href="#offer"], [href="#exit"]').fancybox({
		touch: false
	});

	$(".faq__link").on("click", function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top - 70;
		$('body,html').animate({scrollTop:top}, 1000);
		$.fancybox.close();
	});	

	$.fancybox.defaults.beforeShow = function(){
		$('.navbar, .up.is-visible').addClass('open-popup');			
	};
	$.fancybox.defaults.afterClose = function(){
		$('.navbar, .up.is-visible').removeClass('open-popup');				
	};	

	$(".menu__link").mPageScroll2id({
		offset : 70,
		forceSingleHighlight: true
	});

	//Маска для телефона
	$('[type="tel"]').mask("+7 (999) 999-99-99", {
		placeholder: "_"
	});	

	$('.thanks__btn').click(function(){		
		$.fancybox.close();
	});
	
	$('.footer__logo').click(function() {
		$('body,html').animate({scrollTop: 0}, 1000);
	});	

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".form").submit(function() {
		var th = $(this);
		if (!event.target.checkValidity()) {
			event.preventDefault(); 
			th.find("[required]").focus();
		} else {
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: th.serialize()
			}).done(function() {
				$.fancybox.close();
				setTimeout(function(){
					$('[href="#thanks"]')[0].click();		
				}, 500);							
				th.trigger("reset");										
			});	
			return false;
		}
	});

	// Replace all SVG images with inline SVG
	$('img.svg').each(function(){
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
					// Get the SVG tag, ignore the rest
					var $svg = $(data).find('svg');

					// Add replaced image's ID to the new SVG
					if(typeof imgID !== 'undefined') {
						$svg = $svg.attr('id', imgID);
					}
					// Add replaced image's classes to the new SVG
					if(typeof imgClass !== 'undefined') {
						$svg = $svg.attr('class', imgClass+' replaced-svg');
					}

					// Remove any invalid XML tags as per http://validator.w3.org
					$svg = $svg.removeAttr('xmlns:a');

					// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
					if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
						$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
					}

					// Replace image with new SVG
					$img.replaceWith($svg);

				}, 'xml');
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
	var lastWidth = $(window).width();
	$(window).resize(function(){
		if($(window).width()!=lastWidth) {
			location.reload();
		};		
	});

});
/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Initialize Rotator
3. Initialize Gallery
4. Initialize Parallax
5. Initialize Clients
6. Initialize Stats
7. Initialize Testimonials
8. Initialize Menu
9. Initialize Scrolling
10. Initialize Reel


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	initRotator();
	initGallery();
	initParallax();
	initClients();
	initStats();
	initTestimonials();
	initMenu();
	initScrolling();
	initReel();

	var header = $('.header');

	$(document).on('scroll', function()
	{
		if(window.innerWidth > 767)
		{
			if($(window).scrollTop() > 100)
			{
				header.css({'height':"60px", "marginTop":"0px", "background":"rgba(37, 40, 57, 0.8)"});
			}
			else
			{
				header.css({'height':"80px", "marginTop":"40px", "background":"transparent"});
			}
		}
		else
		{
			if($(window).scrollTop() > 100)
			{
				header.css({"background":"rgba(37, 40, 57, 0.8)"});
			}
			else
			{
				header.css({"background":"transparent"});
			}
		}	
	});

	/* 

	2. Initialize Rotator

	*/

	function initRotator()
	{
		$('.rotate').Morphext(
		{
			// The [in] animation type. Refer to Animate.css for a list of available animations.
		    animation: "fadeIn",
		    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
		    separator: ",",
		    // The delay between the changing of each phrase in milliseconds.
		    speed: 3000
		});

		$('.skill_rotate').Morphext(
		{
			// The [in] animation type. Refer to Animate.css for a list of available animations.
		    animation: "flipInX",
		    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
		    separator: ",",
		    // The delay between the changing of each phrase in milliseconds.
		    speed: 3000
		});
	}

	/*
	
	3. Initialize Gallery
	
	*/

	function initGallery()
	{
		var carousel = $('#gallery_slider');
		carousel.owlCarousel(
		{
			items:4,
			loop:true,
			mouseDrag:false,
			touchDrag:false,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			navSpeed: 500,
			smartSpeed: 500,
			dotsSpeed: 500,
			autoplay:true,
			autoplaySpeed: 500,
			dots:false,
			responsive:
			{
				0:{items:1},
				640:{items:2},
				1024:{items:3},
				1440:{items:4}
			}
		});

		var galleryLeft = $('.gallery_left');
		var galleryRight = $('.gallery_right');

		galleryLeft.on('click', function()
		{
			carousel.trigger('next.owl.carousel');
		});

		galleryRight.on('click', function()
		{
			carousel.trigger('prev.owl.carousel');
		});

		$('.owl-item .gallery_item').not('.cloned .gallery_item').magnificPopup(
		{
	        type: 'image',
	        closeOnContentClick: true,
	        closeBtnInside: false,
	        fixedContentPos: true,
	        mainClass: 'mfp-no-margins mfp-with-zoom', 
	        image: {
	            verticalFit: true
	        },
	        zoom:
	        {
	            enabled: true,
	         	duration:300
	     	},
	     	gallery: {
			    // options for gallery
			    enabled: true
			},
		});
	}

	/*
	
	4. Initialize Parallax

	*/

	function initParallax()
	{
		$('.parallax-window').parallax({imageSrc: 'http://via.placeholder.com/1920x1008'});
		$('.stats_background').parallax({imageSrc: 'http://via.placeholder.com/1920x1080'});
	}

	/*

	5. Initialize Clients

	*/

	function initClients()
	{
		var clientsFull = $('.full_client_list');
		var activateBtn = $('.clients_all span');
		var isFull = false;

		activateBtn.on('click', function()
		{
			if(!isFull)
			{
				clientsFull.css(
				{
					"visibility":"visible",
					"opacity":"1",
					"height":"auto",
					"marginTop":"60px"
				});
				isFull = true;
			}
			else
			{
				clientsFull.css(
				{
					"visibility":"hidden",
					"opacity":"0",
					"height":"0",
					"marginTop":"0px"
				});
				isFull = false;
			}
		});
	}

	/*

	6. Initialize Stats

	*/

	function initStats()
    {
    	var ctrl = new ScrollMagic.Controller();
    	var statsItems = $('.stats_counter');

    	statsItems.each(function(i)
    	{
    		var ele = $(this);
    		var endValue = ele.data('end-value');
    		var eleValue = ele.text();

    		var statsScene = new ScrollMagic.Scene({
	    		triggerElement: this,
	    		triggerHook: 'onEnter',
	    		reverse:false
	    	})
	    	.on('start', function()
	    	{
	    		var counter = {value:eleValue};
	    		var counterTween = TweenMax.to(counter, 4,
	    		{
	    			value: endValue,
	    			roundProps:"value", 
					ease: Circ.easeOut, 
					onUpdate:function()
					{
						document.getElementsByClassName('stats_counter')[i].innerHTML = counter.value;
					}
	    		});
	    	})
		    .addTo(ctrl);
    	});
    }

    /*

	7. Initialize Testimonials

	*/

    function initTestimonials()
    {
    	var slider = $('.testimonial_slider');

    	slider.owlCarousel(
    	{
    		items:1,
			loop:true,
			mouseDrag:true,
			touchDrag:true,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			navSpeed: 500,
			smartSpeed: 500,
			dotsSpeed: 500,
			autoplay:true,
			autoplaySpeed: 500,
			dots:true
    	});
    }

    /*

	8. Initialize Menu

    */

    function initMenu()
    {
    	var ctrl = new ScrollMagic.Controller();
    	var menu = $('.menu_container');
    	var fsMenu = $('.fs_menu_container');
    	var fsMenuItems = $('.fs_menu li');

    	var line1 = $('.line_1');
    	var line2 = $('.line_2');
    	var line3 = $('.line_3');
		
    	menu.on('click', function()
    	{
    		if(fsMenu.css("visibility") !== "visible")
    		{
    			openMenu();
    		}
    		else
    		{
    			closeMenu();
    		}
    	});

    	function openMenu()
    	{
    		if(window.innerWidth < 480)
    		{
    			var hamburgerTween1 = TweenMax.to(line1, 0.2, {transform:"translateY(3px) rotate(45deg)", ease: Circ.easeOut});
	    		var hamburgerTween2 = TweenMax.to(line3, 0.2, {transform:"translateY(-3px) rotate(-45deg)", ease: Circ.easeOut});
	    		var hamburgerTween3 = TweenMax.to(line2, 0.2, {autoAlpha:0, ease: Circ.easeOut});
	    		var menuOpenTween = TweenMax.to(fsMenu, 0.8, {visibility:"visible", opacity:"0.9", ease: Power3.easeIn});
	    		var itemsTween = TweenMax.staggerFromTo(fsMenuItems, 0.4, {y:-15, autoAlpha:0}, {y:0, autoAlpha:1, delay:0.8, ease: Power3.easeOut}, 0.05);
    		}
    		else
    		{
    			var hamburgerTween4 = TweenMax.to(line1, 0.2, {transform:"translateY(5px) rotate(45deg)", ease: Circ.easeOut});
	    		var hamburgerTween5 = TweenMax.to(line3, 0.2, {transform:"translateY(-5px) rotate(-45deg)", ease: Circ.easeOut});
	    		var hamburgerTween6 = TweenMax.to(line2, 0.2, {autoAlpha:0, ease: Circ.easeOut});
	    		var menuOpenTween = TweenMax.to(fsMenu, 0.8, {visibility:"visible", opacity:"0.9", ease: Power3.easeIn});
	    		var itemsTween = TweenMax.staggerFromTo(fsMenuItems, 0.4, {y:-15, autoAlpha:0}, {y:0, autoAlpha:1, delay:0.8, ease: Power3.easeOut}, 0.05);
    		}
    	}

    	// Change color for the main navigation active item

    	var navItems = $('.main_nav ul li');

    	navItems.each(function()
    	{
    		var ele = $(this);
    		var linkEle = $($(this).data('scroll-to'));
    		var offsetValue = linkEle.height();
    		var navScene1 = new ScrollMagic.Scene(
    		{
    			triggerElement:$(this).data('scroll-to'),
    			triggerHook:'onLeave',
    			offset:offsetValue
    		})
    		.on('start', function()
    		{
    			if(ele.hasClass('nav_active'))
    			{
    				ele.removeClass('nav_active');
    			}
    			else
    			{
    				ele.addClass('nav_active');
    			}
    		})
    		.addTo(ctrl);
    	});

    	navItems.each(function()
    	{
    		var ele = $(this);
    		var navScene2 = new ScrollMagic.Scene(
    		{
    			triggerElement:$(this).data('scroll-to'),
    			triggerHook:'onLeave',
    			offset:-70
    		})
    		.on('start', function()
    		{
    			if(ele.hasClass('nav_active'))
    			{
    				ele.removeClass('nav_active');
    			}
    			else
    			{
    				ele.addClass('nav_active');
    			}
    		})
    		.addTo(ctrl);
    	});

    }

    function closeMenu()
	{
		var line1 = $('.line_1');
    	var line2 = $('.line_2');
    	var line3 = $('.line_3');
    	var fsMenu = $('.fs_menu_container');
    	var fsMenuItems = $('.fs_menu li');
			
		var hamburgerTween1 = TweenMax.to(line1, 0.2, {transform:"translateY(0px) rotate(0deg)", ease: Circ.easeOut});
		var hamburgerTween2 = TweenMax.to(line3, 0.2, {transform:"translateY(0px) rotate(0deg)", ease: Circ.easeOut});
		var hamburgerTween3 = TweenMax.to(line2, 0.2, {autoAlpha:1, ease: Circ.easeOut});
		var itemsTween = TweenMax.staggerTo(fsMenuItems, 0.4, {y:-15, autoAlpha:0, ease: Circ.easeOut, delay:0.2}, 0.05);
		var menuCloseTween = TweenMax.to(fsMenu, 1.2, {opacity:"0", ease: Power3.easeOut, delay:0.5});
		var menuCloseTween2 = TweenMax.set(fsMenu, {visibility:"hidden", delay:1.5});
	}

	/*

	9. Initialize Scrolling

	*/

	function initScrolling()
    {
    	var links = $('.nav_links');
    	links.each(function()
    	{
    		var ele = $(this);
    		var target = ele.data('scroll-to');
    		ele.on('click', function(e)
    		{
    			e.preventDefault();
    			$(window).scrollTo(target, 1500, {offset: -60, easing: 'easeInOutQuart'});
    		});
    	});

    	var fsMenuLinks = $('.fs_menu li a');
    	fsMenuLinks.each(function()
    	{
    		var ele = $(this);
    		var target = ele.data('scroll-to');
    		ele.on('click', function(e)
    		{
    			e.preventDefault();
    			closeMenu();
    			$(window).scrollTo(target, 1500, {offset: -60, easing: 'easeInOutQuart'});
    		});
    	});

    	// Scroll To Buttons

    	var btn = $('.scroll_to_button');
    	btn.each(function()
    	{
    		var ele = $(this);
    		ele.on('click', function()
	    	{
	    		$(window).scrollTo(ele.data('scroll-to'), 1500, {offset: -60, easing: 'easeInOutQuart'});
	    	});
    	});

    	// Get In Touch Link
    	var getInTouch = $('#get_in_touch div');
    	getInTouch.on('click', function()
    	{
    		$(window).scrollTo('#contact_form', 1500, {offset: -60, easing: 'easeInOutQuart'});
    	});
    }

    /*

	10. Initialize Reel

    */

    function initReel()
    {
    	$('.video').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });
    }
});
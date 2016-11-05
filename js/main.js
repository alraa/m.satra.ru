$(document).ready(function() {
	//placeholder
	$('[placeholder]').focus(function() {
		var input = $(this);
		if(input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}
	}).blur(function() {
		var input = $(this);
		if(input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	}).blur();
	$('[placeholder]').parents('form').submit(function() {
		$(this).find('[placeholder]').each(function() {
			var input = $(this);
			if(input.val() == input.attr('placeholder')) {
				input.val('');
			}
		})
	});
	//
	$('.mobile-button').click(function() {
		$('.nav').toggle();
		$(this).toggleClass('open');
		$('body').toggleClass('hid');
	});
	$('.search-button').click(function() {
		$('.search').toggle();
		$(this).toggleClass('open');
	});
	$(".nav li a").each(function() {
		if($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	});
	$('.nav .parent').click(function() {
		$(this).next('ul').slideToggle(300);
		$(this).toggleClass('open');
	});
	//
	$(".text-opener").click(function() {
		$(this).prev('.text-limit').toggleClass('open');
		$(this).text(function(i, text) {
			return text === "развернуть текст" ? "свернуть текст" : "развернуть текст";
		})
		return false;
	});
	//
	$('select, .file-inp, .check input').styler();
	//range
	jQuery("#filter-slider").slider({
		min: 5500,
		max: 900000,
		values: [5500, 765400],
		range: true,
		stop: function(event, ui) {
			jQuery("input#minCost").val(jQuery("#filter-slider").slider("values", 0));
			jQuery("input#maxCost").val(jQuery("#filter-slider").slider("values", 1));
		},
		slide: function(event, ui) {
			jQuery("input#minCost").val(jQuery("#filter-slider").slider("values", 0));
			jQuery("input#maxCost").val(jQuery("#filter-slider").slider("values", 1));
		}
	});
	//
	$('.head-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false
	});
	$('.slider-partns').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1
	});
	$('.tov-slider-f').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1
	});
	$('.tov-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1
	});
	/*$('.team-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1
	});
	
	$('.doc-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1 
	});*/
	//
	$('.fancy').fancybox();
	//	
	$('.js-open').click(function() {
		$(this).hide();
		$(this).parent().next('.info-more').slideDown(300);
		return false;
	});
	$('.address-items .opener').click(function() {
		$(this).toggleClass('closed');
		$(this).next('.toggle-addr').slideToggle(300);
		return false;
	});
	$('.cat-opener').click(function() {
		$(this).next('.cat-drop').slideToggle(300);
		$(this).parent().toggleClass('closed');
		return false;
	});
	$('.js-opener').click(function() {
		$(this).next('.js-drop').slideToggle(300);
		$(this).parent().toggleClass('closed');
		return false;
	});
	$('.search .clear-search').click(function() {
		$('.search').toggleClass('open');
		return false;
	});
	//
	$('.deliv-list a, .ancors a').on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top - 10
		}, 800);
	});
	//
	$(".acc .opener").click(function() {
		$(this).parent().parent().find('.opener').not($(this)).removeClass('active');
		$(this).parent().parent().find('.drop').not($(this).next('.drop')).hide();
		$(this).toggleClass('active');
		$(this).next('.drop').toggle();
		return false;
	});
	//.open-search
	$(".open-search").click(function() {
		$('.acc > li.hid').show();
		$(this).hide();
		$('.close-search').show();
		return false;
	});
	$(".close-search").click(function() {
		$('.acc > li.hid').hide();
		$(this).hide();
		$('.open-search').show();
		return false;
	});
	//js-open-pop
	$(".js-open-pop").click(function() {
		$('.search-pop').fadeIn(300);
		return false;
	});
	$(".search-pop .close").click(function() {
		$(this).parent('.search-pop').fadeOut(300);
		return false;
	});
	//
	$('.numb').each(function() {
		var asd = $(this);
		asd.find('span.minus').click(function() {
			var data = asd.find('input').val();
			if(data > 0) {
				asd.find('input').val(parseInt(data) - 1);
			}
			return false
		});
		asd.find('span.plus').click(function() {
			var data = asd.find('input').val();
			asd.find('input').val(parseInt(data) + 1);
			return false
		});
	});
	//tabs
	$('.pane:first-child').addClass('active');
	$('.tabs li:first-child').addClass('active');
	$('.tabs li a').click(function() {
		var idx = $(this).parent().index();
		$('.pane').not($('.pane').eq(idx)).removeClass('active');
		$('.pane').eq(idx).addClass('active');
		$('.tabs li').removeClass('active');
		$(this).parent('li').addClass('active');
		return false;
	});
	//
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: true
	});
	//
	$(".more-par").click(function() {
		$('.table-ch .hid').show();
		$(this).hide();
		return false;
	});
	//show-map
	$(".show-map").click(function() {
		$(this).parents('.address-item').find('.map-hid').toggleClass('open');
		return false;
	});
	//more-local
	$(".acc .more-local").click(function() {
		$(this).parent('.drop').find('.hid').toggle();
		return false;
	});
	// op-drop
	$(".op-drop").click(function() {
		$(this).parents('.state-in').find('.drop-block').toggle();
		return false;
	});
	//close-block
	$(".close-block").click(function() {
		$(this).next('.b-toggle').toggle();
		$(this).addClass('closed');
		return false;
	});
	//
	$(".b-toggle .show-all").click(function() {
		$(this).parents('.b-toggle').find('.state-in.hid').toggle();
		return false;
	});
	//
	$(".acc-li .opener").click(function() {
		$(this).next('.drop').toggle();
		$(this).toggleClass('active');
	});
	//	
	$(window).on("load", function() {
		$(".hor-scroll").mCustomScrollbar({
			axis: "x",
			autoExpandScrollbar: true,
			advanced: {
				autoExpandHorizontalScroll: true
			},
			scrollInertia: 50
		});
	});
	$(".js-filter-header").on('click', function() {
		if($(this).hasClass("filter-header-opened")) {
			$(this).text("Добавить фильтр").removeClass("filter-header-opened").siblings('.filter-body').slideUp();
		}
		else {
			$(this).text("Свернуть фильтр").addClass("filter-header-opened").siblings('.filter-body').slideDown();
		}
	});
	/*$(".js-filter-list-title").on('click', function() {
		if($(this).hasClass("filter-list-title-opened")) {
			$(this)
				.removeClass("filter-list-title-opened")
				.siblings('.filter-sub-list').slideUp();
		} else {
			$(this)
				.addClass("filter-list-title-opened")
				.siblings('.filter-sub-list').slideDown();
		}
	});*/
	$(".js-filter-list-title").on('click', function() {
		if($(this).hasClass("filter-list-title-opened")) {
			if($(this).hasClass("filter-list-title-special")) {
				$(this).text("ВСЕ ХАРАКТЕРИСТИКИ (20)").removeClass("filter-list-title-opened").siblings('.filter-sub-list').slideUp();
			}
			else {
				$(this).removeClass("filter-list-title-opened").siblings('.filter-sub-list').slideUp();
			}
		}
		else {
			if($(this).hasClass("filter-list-title-special")) {
				$(this).text("Свернуть").addClass("filter-list-title-opened").siblings('.filter-sub-list').slideDown();
			}
			else {
				$(this).addClass("filter-list-title-opened").siblings('.filter-sub-list').slideDown();
			}
		}
	});
	$(".js-table-ch-row").closest("table").siblings('.table-hidden').hide();
	$(".js-table-ch-row").on('click', function() {
		if($(this).hasClass("table-ch-row-opened")) {
			$(this).removeClass("table-ch-row-opened").closest("table").siblings('.table-hidden').slideUp();
			$(this).find('th').text('Подробнее');
		}
		else {
			$(this).addClass("table-ch-row-opened").closest("table").siblings('.table-hidden').slideDown();
			$(this).find('th').text('Свернуть');
		}
	});
	$(".js-block-wrap-item-header").on('click', function() {
		if($(this).hasClass("block-wrap-item-header-opened")) {
			$(this).removeClass("block-wrap-item-header-opened").siblings('.block-wrap-item-body').slideUp();
		}
		else {
			$(this).addClass("block-wrap-item-header-opened").siblings('.block-wrap-item-body').slideDown();
		}
	});
	$('.js-options-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		infinite: false,
		responsive: [
			/*{
				breakpoint: 60,
				settings: {
					slidesToShow: 3
				}
			},*/
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	if($(".fancy-registry").length) {
		$(".fancy-registry").fancybox({
			helpers: {
				overlay: {
					css: {
						'background': 'rgba(107, 149, 185, 0.9)'
					}
				}
			},
			width: '100%',
			minWidth: '100%',
			closeBtn: false
		});
	}
	if($(".fancy-click").length) {
		$(".fancy-click").fancybox({
			closeBtn: false
		});
	}
	//choosed pay
	$(".js-pay-choose").click(function() {
		$(this).parent().addClass('choosed-pay');
		$(this).parent().siblings().removeClass('choosed-pay');
		return false;
	});
	//order-tab
	$('.nav-tab-list li a').click(function() {
		$(this).parents('.box-tab').find('.tabs-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		$(window).resize();
		return false;
	});
	//show map
	$(".show-map__link").click(function() {
		$(this).parent().find('.box-map-delivery').slideToggle();
		return false;
	});
	//climb
	$(".js-open-climb").click(function(e) {
		e.preventDefault();
		if($(this).parent().hasClass("choosed-climb")) {
			return false;
		}
		else {
			$(this).parent().siblings().removeClass('choosed-climb');
			$(this).parent().addClass('choosed-climb');
			$('.order-climb').slideUp();
			$(this).parent().find('.order-climb').slideDown();
			return false;
		};
	});
	//show password
	$(".js-pass").click(function() {
		$(this).closest(".box-field").toggleClass("show-pass");
		var inputType = $(this).closest(".box-field").find("input").attr("type");
		if(inputType == "password") {
			$(this).closest(".box-field").find("input").attr("type", "text");
		}
		else {
			$(this).closest(".box-field").find("input").attr("type", "password");
		}
	});
});
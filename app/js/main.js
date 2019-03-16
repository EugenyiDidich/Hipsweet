jQuery(document).ready(function(){
  $('.bxslider').bxSlider();

  // табы
	(function(){
		$('.team__nav-link').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this),
				item = $this.closest('.team__nav-item'),
				container = $this.closest('.team'),
				content = container.find('.team__item'),
				ndx = item.index(),
				reqItem = content.eq(ndx),
				activeItem = content.filter('.active');

			item.addClass('team__nav_active')
				.siblings()
				.removeClass('team__nav_active');

			activeItem.fadeOut(500, function () {
				reqItem.fadeIn(500, function () {
					$(this).addClass('active')
						.siblings()
						.removeClass('active');
				});
			});
		});
	}());

	//akordion
	(function(){
		var flag = true;

		$('.acco__link').on('click', function(e){
		    e.preventDefault();

			var
				$this = $(this),
				container = $this.closest('.faq__acco'),
				item = $this.closest('.acco__item'),
				currentContent = item.find('.acco__content'),
				duration = 500;

			if (flag) {
				flag = false;
				if (!item.hasClass('active')) {

					item
						.addClass('active')
						.siblings()
						.removeClass('active')
						.find('.acco__content')
						.slideUp(duration);

					currentContent.slideDown(duration, function () {
						flag = true
					});
				} else {

					item.removeClass('active');
					currentContent.slideUp(function() {
						flag = true
					});
				}
			}
		});
	})();

	//scroll
	(function(){
		$("#botDiv").click(function () {
	        var elementClick = $(this).attr("href");
	        var destination = $(elementClick).offset().top;
	        if ($.browser.safari) {
	            $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость прокрутки
	        } else {
	            $('html').animate({ scrollTop: destination }, 1100);
	        }
	        return false; 
    	});
	})();
});
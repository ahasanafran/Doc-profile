//==== Isotope filter
var $grid = $('.about-item').isotope();

//==== filter items on menu click
$('.about-menu').on('click', 'li', function () {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({
		filter: filterValue
	});
});

//==== filter items menu active
$('.about-menu').on('click', 'li', function () {
	$(this).addClass('active').siblings().removeClass('active');
});

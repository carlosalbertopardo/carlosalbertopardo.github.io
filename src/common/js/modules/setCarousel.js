;(function(App){

	/*
	App.SetCarousel.Initialize()
		Initializes the Product Carousel with chico.
	@params:
		none
	*/
	App.SetCarousel.Initialize = function () {
		 var carousel = $('.ch-carousel').carousel({
    		'limitPerPage': 3
  		});

	}; //-- App.SetCarousel.Initialize()

	App.SetCarousel.Initialize();

}(window.App));
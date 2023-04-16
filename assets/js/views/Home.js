WED.views.home = {};

WED.views.home.load = function(){
	this.pages = [ 'RSVP', 'Travel', 'Attire', 'Food & Drink', 'Wedding Day', 'Registry' ];

	this.draw();
};

WED.views.home.draw = function(){
	WED.view.draw({
		content : this.pages.map(function( x ){
			return '<a href="' + WED.hashlink.get_url({ include : { view : x.toLowerCase() } }) + '">' +
				'<div class="home-button">' + 
					'<img class="curly-line-break" src="./assets/img/curly_line_break.png" />' +
					x + 
					'<img class="curly-line-break" src="./assets/img/curly_line_break.png" />' +
				'</div>' +
			'</a>';
		}).join('<br>'),
	});
};
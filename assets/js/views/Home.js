WED.views.home = {};

WED.views.home.load = function(){
	this.pages = [ 'RSVP', 'Ceremony', 'Reception', 'Registry', 'Attire', 'Guests' ];

	this.draw();
};

WED.views.home.draw = function(){
	var self = this;

	$( 'body' ).html(
		'<div id="view-home">' +
			'<div class="home-content">' +
				'<table>' +
					'<tr>' +
						'<td class="title">' + 
							'Jenni and Clayton<hr>' + 
							'<div class="sub-title">May 4, 2024 &nbsp; &bull; &nbsp; Lake Windsor Country Club</div>' +
						'</td>' +
					'</tr>' +
					'<tr>' +
						'<td class="button-column">' +
							this.pages.map(function( x ){
								return '<div class="home-button">' + 
									'<img class="curly-line-break" src="./assets/img/curly_line_break.png" />' +
									x + 
									'<img class="curly-line-break" src="./assets/img/curly_line_break.png" />' +
								'</div>';
							}).join('<br>') +
						'</td>' +
					'</tr>' +
				'</table>' +
			'</div>' +
		'</div>'
	);

	$( 'html' ).fadeIn( 1000 );
};
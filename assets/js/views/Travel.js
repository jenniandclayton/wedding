WED.views.travel = { name : 'Travel' };

WED.views.travel.load = function(){
	this.map_iframe = '<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d372237.51918924553!2d-89.352446!3d43.207274!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8806fee27ba516d5%3A0x735ecaa83ef0ea42!2sLake%20Windsor%20Country%20Club%2C%204628%20Golf%20Dr%2C%20Windsor%2C%20WI%2053598!3m2!1d43.2072739!2d-89.3524458!5e0!3m2!1sen!2sus!4v1676867984750!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

	this.draw();
};

WED.views.travel.draw = function(){
	WED.view.draw({
		content : WED.view.html_page_header( this.name ) + 
			'<div class="address">' +
				[
					'Lake Windsor Country Club',
					'4628 Golf Road',
					'Windsor, WI 53598',
				].map(function( line ){
					return '<div class="line">' + line + '</div>';
				}).join('') +
			'</div>' +
			this.map_iframe +
			'<br><br><br>' +
			WED.view.html_page_header( 'Hotels', true ) +
			'<br>' +
			'<div class="content-desc">' + 
				[ 
					'Still to be decided.'
				].join('<br><br>') +
			'</div>',
	});
};
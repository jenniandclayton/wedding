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
			'<div class="address">' +
				[
					'Cambria Hotel - Madison East',
					'5045 Eastpark Blvd',
					'Madison, WI 53718',
				].map(function( line ){
					return '<div class="line">' + line + '</div>';
				}).join('') +
			'</div>' +
			'<div class="content-desc">' + 
				[ 
					'If you are looking for a hotel room nearby, we have reserved a room block at the Cambria Hotel - Madison East.',
					'To reserve a room, please call the front desk at 608-241-7070 and mention your <b>arrival date</b> and the <b>Sterk - Suplinski Wedding</b> OR book online using this link',
					'<a class="contact-link" href="https://www.choicehotels.com/reservations/groups/rh28i9" target="_blank">https://www.choicehotels.com/reservations/groups/rh28i9</a>',
					'We have rooms available for May 3rd and May 4th.',
					'For best availability, please book by <b>Saturday, February 3rd</b>. The final day to book at the discounted rate is <b>Wednesday, April 3rd</b>.',
					'Hotel check-in time is 3:00 PM on the day of arrival. Check-out is by 11:00 AM on the day of departure.',
					'If you are traveling to/from the Dane County Regional Airport (Madison airport), the Cambria Hotel offers a shuttle van service for guests on request. Shuttle rides can be set up in advance to accommodate flights. Otherwise, you can call the hotel upon arrival in Madison and it\'ll be about a 15 minute wait for pickup.',
				].join('<br><br>') +
			'</div>',
	});
};
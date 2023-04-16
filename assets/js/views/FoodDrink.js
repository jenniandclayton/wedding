WED.views.food__drink = { name : 'Food & Drink' };

WED.views.food__drink.load = function(){
	this.draw();
};

WED.views.food__drink.draw = function(){
	WED.view.draw({
		content : WED.view.html_page_header( this.name ) +
			'<br>' +
			'<div class="content-desc">' + 
				[ 
					'Food and beverages will be provided by Lake Windsor County Club after the ceremony.', 
					'No outside food or beverages are allowed at the venue.',
					'A cash bar will be available for alcoholic beverages.',
					'If you have any special dietary concerns, feel free to contact us at ' + WED.view.html_email_us() + '.',
				].join('<br><br>') +
			'</div>' +
			'<br>' +
			WED.view.html_page_header( 'Appetizers', true ) +
			'<br>' +
			WED.view.html_page_header( 'Dinner Options', true ),
	});
};
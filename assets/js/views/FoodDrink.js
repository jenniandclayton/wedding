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
					'Food and beverages will be provided by Lake Windsor Country Club after the ceremony.', 
					'No outside food or beverages are allowed at the venue.',
					'A cash bar will be available for alcoholic beverages.',
					'If you have any special dietary concerns, feel free to contact us at ' + WED.view.html_email_us() + '.',
				].join('<br><br>') +
			'</div>' +
			'<br>' +
			WED.view.html_page_header( 'Dinner Options', true ) +
			'<br>' +
			'<div class="timeline">' + 
				[ 
					{ name : 'New York Strip Steak', sides : [ 'America\'s most popular steak. Expertly cut and rubbed with house seasoning. (Gluten-free)'                                                        , 'Served with a garden salad, roasted garlic mashed potatoes, and yellow squash with baby zucchini.' ], },
					{ name : 'Bruschetta Chicken'  , sides : [ 'Boneless skinless grilled Italian marinated chicken breast. Topped with tomato, onion, basil, and shredded Parmesan. (Gluten-free, contains dairy)', 'Served with a garden salad, roasted garlic mashed potatoes, and yellow squash with baby zucchini.' ], },
					{ name : 'Roasted Red Pepper'  , sides : [ 'Roasted fresh red pepper stuffed with a rice pilaf and mixture of vegetables. Served over marinara sauce. (Vegan)'                                 , 'Served with a garden salad.' ], },
					{ name : 'Kid\'s Meal'         , sides : [ 'Chicken strips with a side of french fries and garden salad.', 'Include age of person ordering this meal.' ], },
				].map(function( r ){
					return '<div class="event">' +
						'<div class="name">' + r.name + '</div>' +
						'<hr>' +
						'<div class="loc">' + r.sides.join('<br>&bull;<br>') + '</div>' +
					'</div>';
				}).join('<br><br>') +
			'</div>',
	});
};
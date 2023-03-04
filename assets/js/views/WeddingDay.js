WED.views.wedding_day = { name : 'Wedding Day' };

WED.views.wedding_day.load = function(){
	var locations = {
		'upper' : 'Upper Level (Crystal Commons)',
		'lower' : 'Lower Level (Pinnacle Room)'  ,
		'both'  : 'Both Levels',
	};

	this.timeline = [
		{
			name     : 'Ceremony',
			location : locations[ 'upper' ],
			time     : '4:00 PM',
		},
		{
			name     : 'Cocktail Hour',
			location : locations[ 'lower' ],
			time     : '4:45 PM',
		},
		{
			name     : 'Dinner',
			location : locations[ 'upper' ],
			time     : '6:00 PM',
		},
		{
			name     : 'Dance / Reception',
			location : locations[ 'both' ],
			time     : '8:00 PM - midnight',
		},
	];

	this.draw();
};

WED.views.wedding_day.draw = function(){
	WED.view.draw({
		content : WED.view.html_page_header( this.name ) + 
			'<div class="timeline">' +
				this.timeline.map(function( event ){
					return '<div class="event">' +
						'<div class="name">' + event.name     + '</div>' +
						'<hr>' +
						'<div class="loc" >' + event.location + '</div>' +
						'<div class="time">' + event.time     + '</div>' +
					'</div>';
				}).join('<div class="divider">&bull;</div>') +
			'</div>',
	});
};
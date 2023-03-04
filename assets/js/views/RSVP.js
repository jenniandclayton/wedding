WED.views.rsvp = { name : 'RSVP' };

WED.views.rsvp.load = function(){
	this.draw();
};

WED.views.rsvp.draw = function(){
	WED.view.draw({
		content : WED.view.html_page_header( this.name ) + 
			'',
	});
};
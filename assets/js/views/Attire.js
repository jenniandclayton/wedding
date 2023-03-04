WED.views.attire = { name : 'Attire' };

WED.views.attire.load = function(){
	this.draw();
};

WED.views.attire.draw = function(){
	WED.view.draw({
		content : WED.view.html_page_header( this.name ) + 
			'',
	});
};
WED.views.registry = { name : 'Registry' };

WED.views.registry.load = function(){
	this.draw();
};

WED.views.registry.draw = function(){
	WED.view.draw({
		content : WED.view.html_page_header( this.name ) + 
			'',
	});
};
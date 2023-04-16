WED.views.registry = { name : 'Registry' };

WED.views.registry.load = function(){
	this.links = [
		{ name : 'Amazon', url : 'https://www.amazon.com/' },
		{ name : 'Target', url : 'https://www.target.com/' },
	];

	this.draw();
};

WED.views.registry.draw = function(){
	WED.view.draw({
		content : WED.view.html_page_header( this.name ) + 
			this.links.map(function( link ){
				return '<a href="' + link.url + '" target="_blank">' +
					'<div class="registry-link">' +
						'<img src="./assets/img/registry_logos/' + link.name.toLowerCase() + '.png" />' +
						link.name +
					'</div>' +
				'</a>';
			}).join('<br>'),
	});
};
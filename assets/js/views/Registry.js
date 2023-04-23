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
			'<br>' +
			'<div class="content-desc">' + 
				[ 
					'We look forward to celebrating with you on our big day. Having you attend our wedding is the greatest gift of all!', 
					'However, if you would like to honor us with a gift, we are registered with Target and Amazon. Links to our registries are provided below.',
				].join('<br><br>') +
			'</div>' +
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
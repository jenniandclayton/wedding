WED.views.attire = { name : 'Attire' };

WED.views.attire.load = function(){
	this.draw();
};

WED.views.attire.get_html_images = function( group, num ){
	var output = '';
	for( var i = 1; i <= num; i++ ){
		var url = './assets/img/attire/' + group + '_0' + i + '.jpg';
		output += '<a href="' + url + '" target="_blank">' +
			'<img src="' + url + '" />' +
		'</a>';
	}
	return output;
};

WED.views.attire.draw = function(){
	WED.view.draw({
		content : WED.view.html_page_header( this.name ) + 
			'<div class="attire-label">Semi-Formal</div>' +
			'<div class="content-desc">' + 
				[ 
					'We recommend semi-formal attire.', 
					'Our ceremony and reception will be indoors.',
					'Several examples of semi-formal attire are included below.',
				].join('<br><br>') +
			'</div>' +
			'<div class="attire-photos">' + 
				this.get_html_images( 'women', 3 ) + 
			'</div>' +
			'<div class="attire-photos">' + 
				this.get_html_images( 'men', 3 ) + 
			'</div>'
	});
};
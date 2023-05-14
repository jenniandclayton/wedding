WED.views.photos = { name : 'Photos' };

WED.views.photos.load = function(){
	this.num_photos = 10;

	this.draw();
};

WED.views.photos.get_html_images = function( mod ){
	var output = '';
	for( var i = 1; i <= this.num_photos; i++ ){
		if( i % 2 == mod ){
			var url = './assets/img/photos/' + i + '.jpg';
			output += '<a href="' + url + '" target="_blank">' +
				'<img src="' + url + '" />' +
			'</a>';
		}
	}
	return output;
};

WED.views.photos.draw = function(){
	WED.view.draw({
		content : WED.view.html_page_header( this.name ) + 
			'<br>' +
			'<div class="attire-photos">' + 
				this.get_html_images( 1 ) + 
			'</div>' +
			'<div class="attire-photos">' + 
				this.get_html_images( 0 ) + 
			'</div>',
	});
};
WED.views.home = {};

WED.views.home.load = function(){
	this.left_views  = [ 'Ceremony' , 'Test 3' ];
	this.right_views = [ 'Reception', 'Test 4' ];

	this.num_rows = Math.max( this.left_views.length, this.right_views.length );

	this.draw();
};

WED.views.home.draw = function(){
	var self = this;

	$( 'body' ).html(
		'<div id="view-home">' +
			'<table>' +
				'<tr>' +
					'<td class="title" colspan="3">' + 
						'Jenni and Clayton<hr>' + 
						'<div class="sub-title">May 4, 2024 &nbsp; &bull; &nbsp; Lake Windsor Country Club</div>' +
					'</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="left-view">' + this.left_views[ 0 ] + '</td>' +
					'<td class="photo" rowspan="' + this.num_rows + '"></td>' +
					'<td class="right-view">' + this.right_views[ 0 ] + '</td>' +
				'</tr>' +
				this.left_views.slice( 1 ).map(function( x, i ){
					var idx = i + 1;
					return '<tr>' +	
						'<td class="left-view">'  + self.left_views[  idx ] + '</td>' +
						'<td class="right-view">' + self.right_views[ idx ] + '</td>' +
					'</tr>';
				}).join('') +
				'<tr><td class="padding" colspan="3" ></td></tr>' +
			'</table>' +
		'</div>'
	);
};
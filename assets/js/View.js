WED.view = {};

WED.view.draw = function( p ){
	$( 'body' ).html(
		'<div class="content">' +
			'<table>' +
				'<tr>' +
					'<td class="title">' + 
						'Jenni and Clayton<hr>' + 
						'<div class="sub-title">May 4, 2024 &nbsp; &bull; &nbsp; Lake Windsor Country Club</div>' +
						'<img class="line-break" src="./assets/img/simple_line_break.png" />' +
					'</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="button-column">' + p.content + '</td>' +
				'</tr>' +
			'</table>' +
		'</div>'
	);

	$( 'html' ).fadeIn( 1000 );
};
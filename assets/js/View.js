WED.view = {};

WED.view.html_page_header = function( name, top ){
	return '<div class="page-header">' +
		( top ? '<img class="line-break" src="./assets/img/simple_line_break.png" />' : '' ) +
		name + 
		'<img class="line-break" src="./assets/img/simple_line_break.png" />' +
	'</div>';
};

WED.view.html_email_us = function(){
	return '<a class="contact-link" href="mailto:' + WED.config.email_address + '">' + WED.config.email_address + '</a>';
};

WED.view.draw = function( p ){
	$( 'body' ).fadeOut( 500, function(){
		$( 'body' ).html(
			'<div class="content">' +
				'<table>' +
					'<tr>' +
						'<td class="title">' + 
							'<a href="index.html"></a>' +
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
		).fadeIn( 500 );
	});

	// $( 'html' ).fadeIn( 1000 );
};
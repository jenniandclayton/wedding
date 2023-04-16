WED.views.rsvp = { name : 'RSVP' };

WED.views.rsvp.load = function(){
	this.draw();
};

WED.views.rsvp.draw = function(){
	WED.view.draw({
		content : WED.view.html_page_header( this.name ) + 
			'<br>' +
			'<div class="content-desc">' + 
				[ 
					'The deadline to RSVP is March 1st, 2024.', 
					'RSVPs will be done through email.', 
					'To RSVP for our wedding, send us an email at ' + WED.view.html_email_us(),
					'Include the names of people attending and their dinner selections. The full list of dinner options can be found <a class="contact-link" href="#view:food & drink;" target="_blank">here</a>.',
					'For your convenience, an example email is provided below.',
				].join('<br><br>') +
			'</div>',
	});
};
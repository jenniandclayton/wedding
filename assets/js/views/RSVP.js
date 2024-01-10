WED.views.rsvp = { name : 'RSVP' };

WED.views.rsvp.load = function(){
	this.draw();
};

WED.views.rsvp.draw = function(){
	WED.view.draw({
		content : WED.view.html_page_header( 'Invitation' ) +
			'<br>' +
			'<div class="content-desc">' + 
				[ 
					'Invitations will be sent via email in early 2024.',
					'If you haven\'t done so already, please send your preferred email address to ' + WED.view.html_email_us(),
					'After receiving your invitation email, please send us your RSVP response.',
				].join('<br><br>') +
			'</div>' +
			'<br>' +
			WED.view.html_page_header( this.name, true ) + 
			'<br>' +
			'<div class="content-desc">' + 
				[ 
					'The deadline to RSVP is March 1st, 2024.', 
					'RSVPs will be done through email.', 
					'To RSVP for our wedding, send us an email at ' + WED.view.html_email_us(),
					'Include the names of people attending and their dinner selections. The full list of dinner options can be found <a class="contact-link" href="#view:food & drink;" target="_blank">here</a>.',
					'Also include any special accommodations and/or dietary concerns in your RSVP email.',
					'For your convenience, an example email is provided below.',
				].join('<br><br>') +
			'</div>' +
			'<br>' +
			WED.view.html_page_header( 'Example Email', true ) +
			'<br>' +
			'<div class="example-email">' + 
				'<div class="subject-line">' + 
					'<span class="label">To:</span>' + WED.config.email_address +
				'</div>' +
				'<div class="subject-line">' + 
					'<span class="label">Subject:</span>RSVP for Jenni and Clayton\'s Wedding' +
				'</div>' +
				'<div class="email-contents">' +
						[
							'Guests Attending:',
							'    1) Anakin Skywalker',
							'        -Roasted Red Pepper',
							'    2) Padmé Amidala',
							'        -Bruschetta Chicken',
							'    3) Leia Organa',
							'        -Kid\'s Meal (age 4)',
							'    4) Luke Skywalker',
							'        -Kid\'s Meal (age 4)',
							'        -Will need booster seat',
						].join('<br>') +
				'</div>' +
			'</div>' +
			'<br>' +
			WED.view.html_page_header( 'Guest Policy', true ) +
			'<br>' +
			'<div class="content-desc">' + 
				[ 
					'Although we would love to have everyone who wants to come celebrate our big day with us, we can only accommodate those noted on the invitation.',
					'Those who can bring a guest will have "and guest" included in their invitation.',
				].join('<br><br>') +
			'</div>',
	});
};
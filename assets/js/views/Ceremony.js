WED.views.ceremony = { name : 'Ceremony' };

WED.views.ceremony.load = function(){
	this.draw();
};

WED.views.ceremony.draw = function(){
	WED.view.draw({
		content : '<div class="page-header">' +
			'Ceremony' + 
			'<img class="line-break" src="./assets/img/simple_line_break.png" />' +
		'</div>',
	});
};
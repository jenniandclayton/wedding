WED.hashlink = new JL.hashlinks({
	view : {},
});

WED.hashlink.on_start = function(){
	var view_name = ( this.params.view.value || '' ).split(' ').join('_');

	var view = WED.views[ view_name ] || WED.views[ WED.config.default_view ];

	document.title = WED.config.document_title + ( view.name ? ' - ' + view.name : '' );
	
	view.load();
};

window.onhashchange = function(){ WED.hashlink.start(); };
window.onload       = function(){ WED.hashlink.start(); };
WED.hashlink = new JL.hashlinks({
	view : {},
});

WED.hashlink.on_start = function(){
	var view_name = this.params.view.value;

	document.title = WED.config.document_title + ( view_name ? ' - ' + view_name : '' );

	var view = WED.views[ view_name ] || WED.views[ WED.config.default_view ];

	view.load();
};

window.onhashchange = function(){ WED.hashlink.start(); };
window.onload       = function(){ WED.hashlink.start(); };
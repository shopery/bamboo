FrontendCore.define('add-to-cart', [], function () {
    return {
        onStart: function () {

	        var aTargets = FrontendTools.getDataModules('add-to-cart'),
		        self = this;

	        $(aTargets).each(function () {
		        self.autobind(this);
	        });

        },
	    autobind: function(oTarget) {
		    $('.js-add-to-cart-button', oTarget).click(function(e){
			    // Disables the link redirection
			    e.preventDefault();

			    var nItems = $('select', oTarget)[0] !== undefined ? $('select', oTarget).val() : 1, // Get the number of items to add
				    sHref = this.href; // Url to post the ajax

			    $.ajax({
				    url: sHref
			    }).done(function( response ) {

			    });

			    FrontendMediator.publish( 'cart:add', { nItems : nItems } );

		    });
	    }
    };
});


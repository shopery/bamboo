FrontendCore.define('cart', [], function () {
    return {
        onStart: function () {

	        var self = this;

	        console.log('dentro');

	        FrontendMediator.subscribe( 'cart:add', self.AddToCart );

        },
	    AddToCart: function( oParameters ) {

		    console.log('addToCart');

			$('.js-cart-items').each(function(){
				this.innerHTML = Math.round( this.innerHTML, 10) + oParameters.items;
			});
        }
    };
});


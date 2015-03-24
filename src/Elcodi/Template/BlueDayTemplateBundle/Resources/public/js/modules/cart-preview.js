FrontendCore.define('cart-preview', [], function () {
    return {
        onStart: function () {

	        var self = this;

	        FrontendMediator.subscribe( 'cart:add', self.AddToCart );

        },
	    AddToCart: function( oParameters ) {

			$('.js-cart-items').each(function(){

				var oTarget = this,
					sClass = 'animated bounce';

				$(oTarget).removeClass(sClass);

				setTimeout( function() {
					$(oTarget).addClass(sClass);
					oTarget.innerHTML = Math.round( oTarget.innerHTML, 10) + Math.round(oParameters.data.nItems, 10);
				}, 10);

			});
        }
    };
});


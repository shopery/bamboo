FrontendCore.define('on-click', [], function () {
	return {
		onStart: function () {
			$('body').click( function( event ) {

				var sClassName = event.target.className + ' ' + $(event.target).closest('a').attr('class');


				if ( sClassName.indexOf('js-add-to-cart-button') !== -1 ) {

					event.preventDefault();
					FrontendMediator.publish('cart:action-button', { oTarget: event.target });
				}

			});

		}
	};
});


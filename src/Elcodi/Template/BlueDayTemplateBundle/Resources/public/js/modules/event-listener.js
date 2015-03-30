FrontendCore.define('event-listener', [], function () {
	return {
		onStart: function () {

			this.onClick();
			this.onChange();
		},
		onChange : function() {
			$('select').change( function( event ) {

				var sClassName = event.target.className;

				if ( sClassName.indexOf('js-product-variants') !== -1 ) {

					event.preventDefault();
					FrontendMediator.publish('variant:change', { oTarget: event.target });
				}

			});
		},
		onClick : function() {
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


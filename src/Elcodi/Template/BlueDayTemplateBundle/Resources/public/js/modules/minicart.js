FrontendCore.define('minicart', [], function () {
	return {
		onStart: function () {

			var self = this;

			FrontendMediator.subscribe('cart:add', self.AddToCart);
			FrontendMediator.subscribe('cart:action-button', self.actionButton);

		},
		actionButton: function (oParameters) {

			var oTarget = oParameters.data.oTarget,
				$SelectItems =  $('select', oTarget.parentNode),
				$SelectVariant = $("select", "[data-product='" + oTarget.parentNode.getAttribute('data-product') + "'][data-attribute=variant]"),
				nItems = $SelectItems.length > 0 ? $SelectItems.val() : 1, // Get the number of items to add
				sHref = oTarget.href !== undefined ? oTarget.href : oTarget.parentNode.href,
				sUrl = $SelectVariant.length > 0 ? $SelectVariant.val() : sHref,
				oLoader = oTarget.nodeName === 'A' ? oTarget : oTarget.parentNode,
				sHtml = oLoader.innerHTML; // Url to post the ajax

			$(oLoader).css({
				"opacity": ".5",
				"width": $(oTarget).outerWidth(),
				"height": $(oTarget).outerHeight(),
				"text-align": "center"
			}).removeClass('icon-shopping-cart').html('<i class="icon-spin icon-circle-o-notch"></i>');

			$.ajax({
				url: sUrl
			}).done(function (response) {

				if ( $(oTarget).closest('#cboxContent').length > 0 ) {

					var oModal = FrontendCore.instantiate('modal');
					oModal.close();
				}

				FrontendMediator.publish('cart:add', {nItems: nItems});

				$(oLoader).css({
					"opacity": "1",
					"width": "auto",
					"height": "auto"
				}).html(sHtml);

				if (oLoader === oTarget) {
					$(oLoader).addClass('icon-shopping-cart');
				}


			});

		},
		AddToCart: function (oParameters) {

			$('.js-cart-items').each(function () {

				var oTarget = this,
					sClass = 'animated bounce',
					sClassOk = 'button-ok',
					nCurrent = Math.round(oTarget.innerHTML, 10),
					nResult = nCurrent + Math.round(oParameters.data.nItems, 10);

				if (nCurrent === 0) {
					$(oTarget).parent().addClass(sClassOk);
				}

				if (nResult === 0) {
					$(oTarget).parent().removeClass(sClassOk);
				}

				$(oTarget).removeClass(sClass);

				setTimeout(function () {
					$(oTarget).addClass(sClass);
					oTarget.innerHTML = nResult;
				}, 50);

			});
		}
	};
});
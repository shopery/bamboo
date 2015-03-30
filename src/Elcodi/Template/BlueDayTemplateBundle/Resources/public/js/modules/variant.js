FrontendCore.define('variant', [], function () {
	return {
		onStart: function () {

			var self = this;

			FrontendMediator.subscribe('variant:change', self.changeVariant);

		},
		changeVariant: function (oParameters) {

			console.log(oParameters.data.oTarget);

			var oTarget = oParameters.data.oTarget,
				nIdProduct = oTarget.getAttribute('data-product'),
				oSelected = $('option:selected', oTarget)[0],
				sImage = oSelected.getAttribute('data-variant-image'),
				sImageHref = oSelected.getAttribute('data-variant-image-href'),
				sPrice = oSelected.getAttribute('data-variant-price'),
				sName = oSelected.getAttribute('data-variant-name'),
				bStock = oSelected.getAttribute('data-variant-stock'),
				sHref = $(oTarget).val();

			// Updates the price
			$("[data-product='" + nIdProduct + "'][data-attribute=price]").hide().html(sPrice).fadeIn();

			// Updates the href to add to cart
			$("[data-product='" + nIdProduct + "'][data-attribute=img").attr('src', sImage);
			$("[data-product='" + nIdProduct + "'][data-attribute=img-href").attr('href', sImageHref);

			if (bStock >= 1) {
				$("[data-product='" + nIdProduct + "'][data-attribute='add-to-cart'").removeClass('d-n').fadeIn();
				$("[data-product='" + nIdProduct + "'][data-attribute=no-stock").removeClass('d-n').hide();
			} else {
				$("[data-product='" + nIdProduct + "'][data-attribute='add-to-cart'").removeClass('d-n').hide();
				$("[data-product='" + nIdProduct + "'][data-attribute=no-stock").removeClass('d-n').fadeIn();
			}
		}
	};
});
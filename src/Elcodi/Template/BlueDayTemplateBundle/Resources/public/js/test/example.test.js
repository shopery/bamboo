// Don't catch errors.
TinyCore.debugMode = true;

describe('Example', function() {

	beforeEach(function(done) {
		TinyCore.AMD.require(['example'], function() {
			if (done !== undefined) {
				done();
			}
		});
	});

	it('should exist', function( done ) {
		oTestedModule = TinyCore.Module.instantiate( 'example' );
		expect(oTestedModule).toBeTruthy();
	});

	describe('onStart', function() {

		beforeEach(function() {
			oTestedModule.onStart();
		});

		it('should exist', function( done ) {
			expect(oTestedModule.onStart).toBeTruthy();
		});


	});

});

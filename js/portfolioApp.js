angular.module('portfolioApp', [])
.controller('mainCtrl', function() {
	var vm = this;

	vm.paintings = ['painting1.JPG', 'painting2.JPG', 'painting3.JPG', 'painting4.JPG', 'painting5.JPG'];

	// Reset calculation variables for research demo
	vm.initPrimeVars = function() {
		vm.sValue = undefined;
		vm.tooLarge = false;
		vm.validationError = false;
	};

	// Find s value for research demo
	vm.findValue = function() {
		var n = vm.evenInt;
		if((n <= 0) || (n%2 != 0)) {
			vm.validationError = true;
			return;
		}
		if(n > 2468000000) {
			vm.tooLarge = true;
			return;
		}

		for(var s = 1; s < n; s++) {
			if(isPrime(n+s) && isPrime(2*n+s)) {
				vm.sValue = s;
				return;
			}
		}
	};

	function isPrime(num) {
		for(var i = 2; i <= Math.sqrt(num); i++) {
			if(num%i === 0) {
				return false;
			}
		}
		return true;
	}

});

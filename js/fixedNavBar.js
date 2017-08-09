angular.module('portfolioApp')
.directive('fixedNavBar', function($window) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var originalOffset = element.prop('offsetTop');
			angular.element($window).bind("scroll", function() {
				if($window.pageYOffset >= originalOffset) {
					element.addClass(attrs.fixedNavBar);
				} else {
					element.removeClass(attrs.fixedNavBar);
				}
			});
		}
	}
});

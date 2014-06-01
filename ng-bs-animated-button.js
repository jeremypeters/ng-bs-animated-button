angular.module('jp.ng-bs-animated-button', []).
  directive('jpNgBsAnimatedButton', function($timeout) {
    return {
      restrict: 'AE',
      replace: true,
      scope: {
        progressIsSubmit: '=',
        progressIsComplete: '=',
        formIsInvalid: '=',
        animationCompleteTime: '@',
        buttonClass: '@',
        buttonText: '@'
      },
      template:
        '<button type="submit" class="btn {{buttonClass}} btn-ng-bs-animated clearfix" ng-disabled="formIsInvalid">' +
          '<div class="icons pull-left">' +
            '<span id="" class="glyphicon glyphicon-refresh icon-spinner icon-submit hidden"></span>' +
            '<span id="" class="glyphicon glyphicon-ok icon-complete hidden"></span>' +
          '</div>' +
          '<div class="text pull-right">{{buttonText}}</div>' +
        '</button>',
      link: function(scope, element) {
        var el = angular.element(element);
        var iconSubmitting = angular.element(el[0].querySelector('.icon-submit'));
        var iconComplete = angular.element(el[0].querySelector('.icon-complete'));
        var endAnimation = function() {
          el.removeClass('is-active').attr('disabled', false);
          iconComplete.addClass('hidden');
          scope.progressIsComplete = false;
        };
        scope.$watch('progressIsSubmit', function(newValue) {
            if (newValue) {
              el.attr('disabled', true).addClass('is-active');
              iconSubmitting.removeClass('hidden');
            }
          }, true).bind(this);
        scope.$watch('progressIsComplete', function(newValue) {
            if (newValue) {
              iconSubmitting.addClass('hidden');
              iconComplete.removeClass('hidden');
              scope.progressIsSubmit = false;
              $timeout(endAnimation, scope.animationCompleteTime);
            }
          }, true).bind(this);
      }
    };
  });

angular.module('jeremy-peters.ng-bs-animated-button', []).
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
            '<span class="glyphicon glyphicon-refresh icon-spinner" data-icon="submitting"></span>' +
            '<span class="glyphicon glyphicon-ok" data-icon="complete"></span>' +
          '</div>' +
          '<div class="text pull-right">{{buttonText}}</div>' +
        '</button>',
      link: function(scope, element) {
        var el = element;
        var iconSubmitting = el.find('[data-icon="submitting"]');
        var iconComplete = el.find('[data-icon="complete"]');
        var endAnimation = function() {
          el.removeClass('is-active').attr('disabled', false);
          iconComplete.hide();
          scope.progressIsComplete = false;
        };
        scope.$watch('progressIsSubmit', function(newValue) {
            if (newValue) {
              el.attr('disabled', true).addClass('is-active');
              iconSubmitting.show();
            }
          }, true).bind(this);
        scope.$watch('progressIsComplete', function(newValue) {
            if (newValue) {
              iconSubmitting.hide();
              iconComplete.show();
              scope.progressIsSubmit = false;
              $timeout(endAnimation, scope.animationCompleteTime);
            }
          }, true).bind(this);
      }
    };
  });

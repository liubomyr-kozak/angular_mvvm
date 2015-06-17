'use strict';
app.directive('menuAccess', function () {
    return {
      restrict: 'A',
      link: function (scope) {

        if (isAccessDeclared()) {
          scope.$watch(evaluateAccess, updateAccess);
        } else {
          scope.evaluatedAccess = true;
        }

        function isAccessDeclared(){
          return angular.isDefined(scope.item.access);
        }

        function evaluateAccess() {
          return scope.$eval(scope.item.access);
        }

        function updateAccess(newCondition) {
          scope.evaluatedAccess = newCondition;
        }

      }
    };
  });
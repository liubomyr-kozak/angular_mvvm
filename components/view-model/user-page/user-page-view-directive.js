app.directive('userPageView', function(){
  return {
    restrict:'E',
    scope: true,
    replace: 'true',
    require: '^userPageModel',
    templateUrl: '/components/view-model/user-page/user-page-view.html',
    link: function(scope, iElm, iAttrs, ctrl){

      scope.user = ctrl.user;
      scope.menu = ctrl.menu;

    }
  }
});
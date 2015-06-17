app.directive('userPage', function(){
  return {
    restrict:'E',
    scope: true,
    replace: 'true',
    templateUrl: '/components/view-model/user-page/user-page.html'
  }
});
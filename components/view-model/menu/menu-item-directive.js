app.directive('menuItem', function(){
  return {
    restrict: 'E',
    scope:{
      icon:'@',
      access: '@',
      title: '@'
    },
    require:'^menu',
    link: function(scope, iElm, iAttrs, ctrl){

      console.log("scope", scope);

      var menuCtrl = ctrl;

      var items = {
        access: scope.access,
        icon: scope.icon || 'fa fa-file-o',
        title: scope.title
      };

      menuCtrl.addMenuItems(items);

      iElm.remove();
    }
  }
});
app.directive('menu', function(){
  return {
    restrict: 'E',
    scope: true,
    require:['menu','^userPageModel'],
    controller:function(){

      this.menuItems = [];

      this.addMenuItems = function(item){
        this.menuItems.push(item);
      };
    },
    link: function(scope, iElm, iAttrs, ctrl){

      var menuCtrl = ctrl[0];
      var userPageModel = ctrl[1];

      userPageModel.addMenu(menuCtrl.menuItems);

    }
  }
});
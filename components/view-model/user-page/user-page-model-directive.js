app.directive('userPageModel', function(){
  return {
    restrict:'E',
    scope: true,
    replace: 'true',
    controller: function(){

      this.addUser = function(user){
        this.user = user;
      };

      this.addMenu = function(menu){
        this.menu = menu;
      }
    }
  }
});
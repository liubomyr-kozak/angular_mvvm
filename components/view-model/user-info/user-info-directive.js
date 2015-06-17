app.directive('userInfo', function(){
  return {
    restrict: 'E',
    scope: true,
    require:['userInfo','^userPageModel'],
    controller:function(){

      this.metaData = {};

      this.addImage = function(image){
        this.metaData.image = image;
      };

      this.addDescriptions = function(des){
        this.metaData.descpritions = des;
      }
    },
    link: function(scope, iElm, iAttrs, ctrl){

      var userCtrl = ctrl[0];
      var userPageModel = ctrl[1];

      userPageModel.addUser(userCtrl.metaData);

      iElm.remove();
    }
  }
});
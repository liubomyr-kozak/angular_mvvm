app.directive('userImage', function(){
  return {
    restrict: 'E',
    scope: {
      imageUrl:'@'
    },
    require:'^userInfo',
    link: function(scope, iElm, iAttrs, ctrl){

      scope.$watch('imageUrl', function(nv){
        if(nv){
          ctrl.addImage(scope.imageUrl);
        }
      });

      iElm.remove();
    }
  }
});
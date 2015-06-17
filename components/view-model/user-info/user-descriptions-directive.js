app.directive('userDescriptions', function(){
  return {
    restrict: 'E',
    scope: true,
    require:'^userInfo',
      link: function(scope, iElm, iAttrs, ctrl){
        
      	ctrl.addDescriptions({
      		name: 'Liubomyr',
      		surename: 'Kozak',
      		bestCommunity: 'KOTTANS',
      		leng: 'javascript'
      	});

        iElm.remove();

    }
  }
});
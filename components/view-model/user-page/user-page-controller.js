app.controller('userPageCtrl', ['$scope', '$http', 'md5', function ($scope, $http, md5) {

  var email = "kozak_lubomur@ukr.net";

  function getAvatarUrl() {
    var md5HASH = md5.createHash(email);
    return 'http://www.gravatar.com/' + md5HASH + '.json' + '?callback=JSON_CALLBACK';
  }

  $http.jsonp(getAvatarUrl()).success(function (data) {
    $scope.image_url = data.entry[0].thumbnailUrl;
  });

}]);
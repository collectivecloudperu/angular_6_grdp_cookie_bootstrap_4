var app = angular.module('myApp', ['ngMap']);

app.controller('mapCtrl', function(NgMap, $scope, $http) {

  var url = "places.json";
  $http({
      method: 'GET',
      url: url
    }).then(function(response) {
      // success
      console.log(response);
      $scope.cx = response.data.cx;
      $scope.places = response.data.places;

      NgMap.getMap().then(function(map) {
        var cx = map.getCenter();
        var txt = "center is: lat=" + cx.lat() + ", lng=" + cx.lng();
        console.log(txt);
        $scope.map = map;
      });

    }, function(err) {
      // error
    });

    $scope.showDrawControl = true;

    $scope.toggleDrawControl = function() {
      $scope.showDrawControl = !$scope.showDrawControl;
      $scope.map.mapDrawingManager[0].setOptions({drawingControl:$scope.showDrawControl})
    }

    $scope.onMapOverlayCompleted = function() {
      console.log("onMapOverlayCompleted()");
      $scope.toggleDrawControl();
    }
});

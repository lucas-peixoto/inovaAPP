angular.module('inovaAPP')

.controller('LoginCtrl', function($scope, AuthService, $ionicPopup, $state) {
  $scope.user = {
    username: '',
    password: ''
  };

  $scope.login = function() {
    AuthService.login($scope.user).then(function(msg) {
      $state.go('inside');
    }, function(errMsg) {
      var alertPopup = $ionicPopup.alert({
        title: 'Login failed!',
        template: errMsg
      });
    });
  };
})

.controller('InsideCtrl', function($scope, AuthService, API_ENDPOINT, $http, $state, $ionicSideMenuDelegate) {
  // $scope.destroySession = function() {
  //   AuthService.logout();
  // };
  //
  // $scope.getInfo = function() {
  //   $http.get(API_ENDPOINT.url + '/get/1/' + AuthService.token).then(function(result) {
  //     $scope.memberinfo = result.data.nome;
  //   });
  // };

  $scope.selectCurso = function(curso_id) {
    $http.get(API_ENDPOINT.getCurso + curso_id + '/' + AuthService.token).then(function(result) {
      $scope.selectedCurso = result.data;
    });
    $ionicSideMenuDelegate.toggleRight(true);
  };

  $scope.logout = function() {
    AuthService.logout();
    $state.go('login');
  };

  $http.get(API_ENDPOINT.getCursos + AuthService.token).then(function(result) {
    $scope.cursos = result.data;
  });
})

.controller('AppCtrl', function($scope, $state, $ionicPopup, AuthService, AUTH_EVENTS) {
  $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
    AuthService.logout();
    $state.go('login');
    var alertPopup = $ionicPopup.alert({
      title: 'Session Lost!',
      template: 'Sorry, You have to login again.'
    });
  });
});

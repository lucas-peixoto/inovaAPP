angular.module('inovaAPP')

.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated'
})

.constant('API_ENDPOINT', {
  url: 'http://127.0.0.1:8080/index.php/',
  authenticate: 'http://127.0.0.1:8080/index.php/authenticate',
  getCurso: 'http://127.0.0.1:8080/index.php/get/',
  getCursos: 'http://127.0.0.1:8080/index.php/get/all/'
});

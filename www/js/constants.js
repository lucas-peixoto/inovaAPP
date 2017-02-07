angular.module('inovaAPP')

.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated'
})

.constant('API_ENDPOINT', {
  url: 'http://inovaapi.000webhostapp.com/public/index.php/',
  authenticate: 'http://inovaapi.000webhostapp.com/public/index.php/authenticate',
  getCurso: 'http://inovaapi.000webhostapp.com/public/index.php/get/',
  getCursos: 'http://inovaapi.000webhostapp.com/public/index.php/get/all/'
});

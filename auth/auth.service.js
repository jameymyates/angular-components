'use strict';

(function () {

  class AuthService {
    constructor() {

    }

    static serviceFactory() {
      AuthService.instance = new AuthService();
      return AuthService.instance;
    }
  }

  angular.module('mmmApp.auth')
    .factory('Auth', AuthService.serviceFactory);

})();

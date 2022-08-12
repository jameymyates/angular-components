'use strict';

(function () {

  class InterceptorService {
    constructor() {

    }

    static serviceFactory() {
      InterceptorService.instance = new InterceptorService();
      return InterceptorService.instance;
    }
  }

  angular.module('mmmApp.auth')
    .factory('Interceptor', InterceptorService.serviceFactory);

})();

'use strict';

angular.module('mmmApp.auth', [
  'mmmApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

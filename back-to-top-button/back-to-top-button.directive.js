'use strict';

(function () {

  class BackToTopButtonDirective {
    constructor() {
      this.templateUrl = 'app/components/back-to-top-button/back-to-top-button.html';
      this.restrict = 'E';
      this.controller = 'BackToTopButtonController';
      this.controllerAs = 'nav';
    }

    static directiveFactory(){
      BackToTopButtonDirective.instance = new BackToTopButtonDirective();
      return BackToTopButtonDirective.instance;
    }
  }

  angular
    .module('mmmApp')
    .directive('backToTopButton', BackToTopButtonDirective.directiveFactory);

})();

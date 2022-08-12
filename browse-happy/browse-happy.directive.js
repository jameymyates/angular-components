'use strict';

(function () {

  class BrowseHappyDirective {
    constructor() {
      this.templateUrl = 'app/components/browse-happy/browse-happy.html';
      this.restrict = 'E';
      this.controller = 'BrowseHappyController';
      this.controllerAs = 'browseHappy';
    }

    static directiveFactory(){
      BrowseHappyDirective.instance = new BrowseHappyDirective();
      return BrowseHappyDirective.instance;
    }
  }

  angular
    .module('mmmApp')
    .directive('browseHappy', BrowseHappyDirective.directiveFactory);

})();

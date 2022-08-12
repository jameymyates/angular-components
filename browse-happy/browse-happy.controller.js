'use strict';

(function () {

  class BrowseHappyController {

    constructor() {
      this.isHidden = false;
    }
    
    close() {
      this.isHidden = true;
    }
    
  }

  angular.module('mmmApp')
    .controller('BrowseHappyController', BrowseHappyController);

})();

'use strict';



(function () {

  class AutoHideStickyHeaderController {
    constructor($window, $document, lodash, Scrolling, screenSize) {
      this.$window = $window;
      this.$document = $document;
      this.lodash = lodash;
      this.Scrolling = Scrolling;
      this.screenSize = screenSize;
    }

    getOnChange(element) {
      return function (hidden) {
        element.toggleClass('header--hidden', hidden);
      }.bind(this);
    }

    getHandle(element) {
      this.changeFn = this.getOnChange(element);
      return this.lodash.throttle(angular.bind(this, this.handle), 250);
    }

    handle() {
      var hidden = false;
      var scrolling = this.Scrolling.update(this.$window, this.$document);

      if (this.Scrolling.current >= 1) {
        if (scrolling.down()) {
          if (this.screenSize.is('xs, sm')) {
            var bottom = scrolling.atBottom();
            hidden = !bottom;
          } else {
            hidden = true;
          }
        }
      }

      this.changeFn(hidden);
    }
  }

  angular
    .module('mmmApp')
    .controller('AutoHideStickyHeaderController', AutoHideStickyHeaderController);

})();

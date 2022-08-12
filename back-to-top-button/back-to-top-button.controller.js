'use strict';

(function () {

  class BackToTopButtonController {
    constructor($window, $document, lodash, Scrolling) {
      this.$window = $window;
      this.lodash = lodash;

      this.Scrolling = Scrolling;
      this.Scrolling.$document = $document;
      this.Scrolling.$window = $window;
      this.Scrolling.showAtBottom = this.showAtBottom ? this.showAtBottom === 'true' : true;

      this.cssClassVisible = this.cssClassVisible || 'visible';
    }

    getOnChange(element) {
      return function (visible) {
        element.toggleClass(this.cssClassVisible, visible);
      }.bind(this);
    }

    getHandle(element) {
      this.changeFn = this.getOnChange(element);
      return this.lodash.throttle(angular.bind(this, this.handle), 250);
    }

    handle() {
      this.Scrolling.update();
      var visible = (this.Scrolling.current > angular.element('body').css('padding-top'));
      this.changeFn(visible);
    }
  }

  angular.module('mmmApp')
    .controller('BackToTopButtonController', BackToTopButtonController);

})();

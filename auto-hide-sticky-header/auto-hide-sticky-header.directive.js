'use strict';

(function () {

  class AutoHideStickyHeaderDirective {
    constructor() {
      this.templateUrl = 'app/components/auto-hide-sticky-header/auto-hide-sticky-header.html';
      this.restrict = 'A';
      this.controller = 'AutoHideStickyHeaderController';
      this.controllerAs = 'autoHideStickyHeader';
    }

    link(scope, element, attrs, controller) {
      var handle = controller.getHandle(element);
      var $el = angular.element(controller.$window).on('scroll', handle);

      scope.$on('isCollapsed', function (event, data) {
        if (data) {
          $el.off('scroll', handle).on('scroll', handle);
        } else {
          $el.off('scroll', handle);
        }
      });

      scope.$on('destroy', function () {
        $el.off('scroll', handle);
      });
    }

    static directiveFactory(){
      AutoHideStickyHeaderDirective.instance = new AutoHideStickyHeaderDirective();
      return AutoHideStickyHeaderDirective.instance;
    }
  }

  angular
    .module('mmmApp')
    .directive('autoHideStickyHeader', AutoHideStickyHeaderDirective.directiveFactory);

})();

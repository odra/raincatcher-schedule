var ngModule;
try {
  ngModule = angular.module('wfm.schedule.directives');
} catch (e) {
  ngModule = angular.module('wfm.schedule.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/workorder-item.tpl.html',
    '<span class="wfm-chip wfm-chip-no-picture" style="width:300px">\n' +
    '  <span class="wfm-chip-name">{{workorder.type}} - {{workorder.title}}</span>\n' +
    '</span>\n' +
    '');
}]);

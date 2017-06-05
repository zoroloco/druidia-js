//directive
angular.module('quiz-module',[]).directive('alertButton',function(){
  return {
    template: '<button ng-transclude></button>',
    scope: {
      content: '@'
    },
    replace: true,
    restrict: 'E',
    transclude: true,
    link: function (scope,el){
      el.click(function(){
        alert(scope.content);
      });
    }
  };
});

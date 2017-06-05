
angular.module('quiz-module',[]).filter('uppercase', function(){
  return function (str){
    return (str || '').toUppercase();
  }
});

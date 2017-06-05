/*
angular.module('quiz-module',[]).controller('QuizController',['$log','$scope',function($log,$scope){
  var self = this;

  self.init = function(){
    $log.log("i am instantiating the quiz controller.");
    $scope.question = "question 1:";
  }
}]);
*/

//controller
QuizController =function($log,$scope){
  var self = this;

  self.init = function(){
    $log.log("I am instantiating the quick controller.");
    $scope.question = "Question 1:";
  }
}
angular.module('quiz-module',[]).controller('QuizController',['$log','$scope',QuizController]);


//service
/*
function QuizService($log){
  var self = this;
}
angular.module('quiz-module',[]).service('QuizService',['$log',QuizService]);
*/

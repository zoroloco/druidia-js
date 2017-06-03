angular.module('index-module', ['ngMaterial']).
  controller('IndexController',['$log','$location','$window',
             'CommonService',function($log,$location,$window,commonService) {

    var self = this;

    $log.log("Instantiated index controller.");

    self.init = function(){
      $log.log("Init of index controller.");
      //self.fetchUser();
    }

    self.fetchUser = function(){
      $log.log("Fetching user information.");
      commonService.fetchUser(function(fetchedUser){
          $log.log("Fetched user:"+fetchedUser);
          self.user = fetchedUser;
      });
    }

    self.onLogOff = function(){
      $log.log("User is logging off.");
      commonService.processLogOff(function(result){
        if(result === true){
          $log.log("Session destroyed. Re-directing back to index.");
          $window.location.href = "/";//reload entire page.
        }
      });
    }

  }]);

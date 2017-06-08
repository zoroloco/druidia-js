angular.module('index-module', ['ngMaterial','base64']).
  controller('IndexController',['$base64','$http','$scope','$log','$location','$window', '$rootScope',
             'CommonService',function($base64,$http,$scope,$log,$location,$window,$rootScope,commonService) {

    var self = this;
    $rootScope.question2="Question 2:";

    $log.log("Instantiated index controller.");

    self.init = function(){
      $log.log("Init of index controller.");

      //load the default template
      //$window.location.href = '/home';
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

    $scope.printPdf = function (uuid){
            $http({
                url : 'https://localhost/testPdf',
                method : 'GET',
                headers : {
                    'Content-type' : 'application/json'
                },
                responseType : 'json'
            }).then(function(data, status, headers, config) {

                var pdfFile = new Blob([ data.data.pdf ], {
                    type : 'application/pdf'
                });

                //var dataObj =

                $log.log("encoded pdf file:"+data.data.pdf);
                //var decodedPdf = $base64.decode(data.data.pdf);
                var pdfUrl = URL.createObjectURL(pdfFile);
                var printwWindow = $window.open(pdfUrl);
                printwWindow.print();
            });
        };

  }]);

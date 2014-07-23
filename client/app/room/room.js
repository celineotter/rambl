angular.module('ramblApp.room', [])

.controller('roomController', ['$scope', '$window', '$location', 'EasyRTC', 'InterviewQuestions', 'Auth',
  function ($scope, $window, $location, EasyRTC, InterviewQuestions, Auth) {
    $scope.data = {};
    $scope.data.currentRoom = EasyRTC.getCurrentRoom();
    $scope.data.userName = $window.localStorage.getItem('ramblUsername');
    $scope.data.questions = InterviewQuestions.questions;

    $scope.shuffleQuestions = function () {
      $scope.data.questions = $window._.shuffle($scope.data.questions);
    };
    $scope.signout = Auth.signout;
    $scope.showQuestions = false;
    $scope.leaveRoom = EasyRTC.leaveRoom;

    // set up elements for local and remote streams, set up room occupant listener
    EasyRTC.interviewInit();

    $scope.videoCheckout = function(easyrtcid) {
      // function performCall(otherEasyrtcid) {
      //   easyrtc.hangupAll();
      //
      //   var successCB = function() {};
      //   var failureCB = function() {};
      //   easyrtc.call(otherEasyrtcid, successCB, failureCB);
      // };
      //
      // return function() {
      //   performCall(easyrtcid);
      // };
    };


}]);

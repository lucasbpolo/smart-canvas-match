angular.module('starter.controllers', [])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FindCtrl', function($scope, TDCardDelegate, Partners) {
  $scope.cards = Array.prototype.slice.call(Partners.all(), 0);

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
  };

  $scope.$on('$ionicView.enter', function(e) {
    $scope.cards = Array.prototype.slice.call(Partners.all(), 0);
  });
});
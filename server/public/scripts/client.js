const app = angular.module('imageApp', ['ngMaterial']);

const imageController = app.controller('ImageController', ['$http', '$mdDialog', function($http, $mdDialog){
  let self = this;
  console.log('AJS');
  self.myGallery = true;

self.imagesArray = [];
self.commentsArray = [];
self.newComment = {};
self.addComment = {};
self.myArray = [];
self.status = ' ';


self.createComment = function(thing){
  if (thing) {
    console.log('image', thing);
    self.myArray.push(angular.copy(thing));
  } else if (self.newComment) {
    console.log(self.newComment);
  self.myArray.push(angular.copy(self.newComment));
  console.log(self.myArray);
  } // end else if
  self.createFinalComment(self.myArray);
};

self.createFinalComment= function(array) {
 console.log(array);
  self.finalComment = {
    "image_id": array[0].image_id,
    "name": array[1].name,
    "comment": array[1].comment,
  }
  console.log(self.finalComment);
  self.addComment(self.finalComment);
}


self.getImages = function() {
  $http({
    method: 'GET',
    url: '/images'
  }).then(function(response){
    console.log('response', response.data);
    self.imagesArray = response.data;
  }).catch(function(error){
    console.log('Error getting images', error);
  })
} //end getSongs

self.addLike = function(image) {
  console.log(image, 'Liked!');
  $http({
    method: 'PUT',
    url: `/images/likes/${image.image_id}`,
    data: { image: image }
  }).then(function(response){
    console.log('response', response);
    self.getImages();
  }).catch(function(error){
    console.log('Error updating image likes', error);
  })
} // end addLike

self.addView = function(image) {
  console.log(image, 'Liked!');
  $http({
    method: 'PUT',
    url: `/images/views/${image.image_id}`,
    data: { image: image }
  }).then(function(response){
    console.log('response', response);
    self.getImages();
  }).catch(function(error){
    console.log('Error updating image views', error);
  })
} // end addLike

self.viewComment = function(image) {
  console.log('comment', image);
  self.commentForm = true;
  self.myGallery = false;
  self.comment = true;
  $http({
    method: 'GET',
    url: `/images/comments/${image.image_id}`
  }).then(function(response){
    console.log('response', response.data);
    self.commentsArray = response.data;
  }).catch(function(error){
    console.log('Error getting comments', error);
  })
} // end viewComment


self.addComment = function(finalComment) {
  console.log('in POST comment', finalComment);
  $http({
    method: 'POST',
    url: `/images/comments/${finalComment.image_id}`,
    data: { finalComment: finalComment } 
  }).then(function(response){
    console.log('response', response.data);
    self.viewComment(finalComment);
    self.clearComment();
  }).catch(function(error){
    console.log('Error getting comments', error);
  })
} // end addComment

self.cancelComment = function() {
  self.addCommentForm = false;
} // end cancelComment

self.clearComment = function() {
  self.newComment.name = null
  self.newComment.comment = null
  self.addCommentForm = false
  self.comment = false
  self.newComment = {}
  self.addComment = {}
  self.finalComment = {}
  self.myArray = []
} // end clearComment

self.showForm = function() {
  self.addCommentForm = true;
} // end show form

self.backToPhotos = function() {
  location.reload(true);
} //end back to photos

self.getImages();

self.showAdvanced = function(ev) {
  $mdDialog.show({
    controller: DialogController,
    templateUrl: 'dialog1.tmpl.html',
    parent: angular.element(document.body),
    targetEvent: ev,
    clickOutsideToClose:true,
    fullscreen: self.customFullscreen // Only for -xs, -sm breakpoints.
  })
  .then(function(answer) {
    self.status = 'You said the information was "' + answer + '".';
  }, function() {
    self.status = 'You cancelled the dialog.';
  });
};

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}


}]);
const app = angular.module('imageApp', []);

const imageController = app.controller('ImageController', ['$http', function($http){
  let self = this;
  console.log('AJS');

self.imagesArray = [];

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
    url: `/images/likes/${image.id}`,
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
    url: `/images/views/${image.id}`,
    data: { image: image }
  }).then(function(response){
    console.log('response', response);
    self.getImages();
  }).catch(function(error){
    console.log('Error updating image views', error);
  })
} // end addLike


self.getImages();

}]);
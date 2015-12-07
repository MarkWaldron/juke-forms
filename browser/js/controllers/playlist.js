app.controller('PlaylistCtrl', function ($scope, $state, PlaylistFactory, getPlaylists) {
  $scope.playlists = getPlaylists;
  // $scope.playlist = getPlaylist;
  $scope.create = function(){
    PlaylistFactory.create($scope.playlist)
    .then(function(data){
      $scope.playlist = {};
      $state.go('playlist', {playlistId: data._id});
    })
  }
});

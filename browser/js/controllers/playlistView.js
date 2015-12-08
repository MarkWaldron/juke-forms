app.controller('PlaylistViewCtrl', function ($scope, PlaylistFactory, SongFactory, getPlaylist) {
  $scope.playlist = getPlaylist;
  SongFactory.fetchAll()
  .then(function(allSongs){
    $scope.allSongs = allSongs;
  })
  $scope.addSong = function(){
    PlaylistFactory.addSong($scope.addSong)
    .then(function(data){
      console.log(data)
    })
  }


});

app.controller('PlaylistViewCtrl', function ($scope, PlaylistFactory, getPlaylist) {
  $scope.playlist = getPlaylist;
  // $scope.playlist = getPlaylist;
});

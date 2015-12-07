app.controller('SidebarCtrl', function ($scope, PlaylistFactory) {

  PlaylistFactory.fetchAll()
  .then(function(data){
    $scope.playlists = data;
    return data;
  });

});

app.config(function ($stateProvider) {
	$stateProvider.state('newPlaylist', {
		url: '/playlists/new',
		templateUrl: '/templates/playlist-form.html',
    controller: 'PlaylistCtrl',
		resolve: {
			getPlaylists: function(PlaylistFactory){
				return PlaylistFactory.fetchAll();
			}
		}
  })

	$stateProvider.state('playlist', {
		url: '/playlists/:playlistId',
		templateUrl: '/templates/playlist.html',
		controller: 'PlaylistViewCtrl',  //annoying ass problem
		resolve: {
			getPlaylist: function(PlaylistFactory, $stateParams){
				return PlaylistFactory.fetchById($stateParams.playlistId);
			}
		}
		})
	});

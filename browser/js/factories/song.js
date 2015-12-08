app.factory('SongFactory', function ($http) {
	var SongFactory = {};
	SongFactory.fetchAll = function(){
		return $http.get('/api/songs')
		.then(function (response) {
			return response.data;
		})
	}

	SongFactory.convert = function (raw, artistObjs) {
		if (typeof artistObjs == 'object') {
			var artistsById = _.indexBy(artistObjs, '_id');
			raw.artists = raw.artists.map(function (artistId) {
				return artistsById[artistId];
			});
		}
		raw.audioUrl = '/api/songs/' + raw._id + '.audio';
		return raw;
	};
	return SongFactory;
});

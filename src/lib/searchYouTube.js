var searchYouTube = (options, callback) => {
  const data = {
  	q: options.query || "kitties",
  	maxResults: options.max || 5,
  	key: options.key || window.YOUTUBE_API_KEY,
  	videoEmbeddable: true,
  	part: 'snippet',
  	type: 'video'
  }

  $.ajax({
  	url: 'https://www.googleapis.com/youtube/v3/search',
  	type: 'GET',
  	data: data,
  	success: (data) => callback(data),
  	error: (error) => console.log(error) 
  })
};



window.searchYouTube = searchYouTube;

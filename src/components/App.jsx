class App extends React.Component {
  constructor() {
  	super();
  	this.state = {
  		videos: window.exampleVideoData,
  		currentVideo: window.exampleVideoData[0]
  	}
  	this.setCurrentVideo = this.setCurrentVideo.bind(this);
  }
  
  setCurrentVideo(video) {
  	this.setState({currentVideo: video})
  }

  render() {
  	return (
	  <div>
	    <Nav />
	    <div className="col-md-7">
	      <VideoPlayer video={this.state.currentVideo} />
	    </div>
	    <div className="col-md-5">
	      <VideoList videos={this.state.videos} setCurrentVideo={this.setCurrentVideo} />
	    </div>
	  </div>
  	)
  }
} 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

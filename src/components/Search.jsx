class Search extends React.Component {
  constructor(props) {
    super(props);
  }

    // handleChange (e) {
    //   _.debounce((event) => {
    //     console.log('hi')
    //      this.props.updateVideos(event.target.value), 1000)
     //  }
    // }
  

  render () {
    return (
      <div className="search-bar form-inline">
        <input id="form-control" className="form-control" type="text" onChange={
          _.debounce(() => this.props.updateVideos(document.getElementById('form-control').value), 1000)
        } />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

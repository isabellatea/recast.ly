class Search extends React.Component {
  constructor(props) {
    super(props);
    this.debounced = _.debounce((e) => this.props.updateVideos(e.target.value), 1000).bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.persist();
    this.debounced(e);
  }

  render () {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.handleChange}/>
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

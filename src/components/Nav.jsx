var Nav = (props) => (
  <nav className="navbar">
    <div className="container">
      <Search updateVideos={props.updateVideos}/>
    </div>
  </nav>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Nav = Nav;

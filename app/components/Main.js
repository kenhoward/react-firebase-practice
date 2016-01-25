var React = require('react');
// var ReactDOM = require('react-dom');
//Used when Main.js was rendering our app

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop:15}}>
            MENU
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

/*
  Previously:
  ReactDOM.render(<Main />, document.getElementById('app'))
    - When I had it there, I had my webpack entry set up as Main.js, just FYI
*/

module.exports = Main;

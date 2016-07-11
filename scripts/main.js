var React = require('react');
var ReactDOM = require('react-dom');

var WelcomeStatement = React.createClass({

	render : function(){
		return (
			<p>Welcome to Planet React!</p>
			)
	}
});

ReactDOM.render(<WelcomeStatement/>, document.querySelector('#main'));


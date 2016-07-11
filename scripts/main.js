var React = require('react');
var ReactDOM = require('react-dom');

/*
	App
*/
var App = React.createClass({

	render : function(){
		return (
			<div className="planet-react">
				<div className="form">
					<Form />
				</div>

				<div className="entry">
					<Entry />
				</div>
			</div>
			)
	}
});

/*
	Form
*/
var Form = React.createClass({
	render : function() {
		return (
			<p>Form</p>
			)
	}
});

/*
	Entry
*/
var Entry = React.createClass({
	render : function() {
		return (
			<p>Entry</p>
			)
	}
});





var WelcomeStatement = React.createClass({

	render : function(){
		return (
			<p>Welcome to Planet React!</p>
			)
	}
});

ReactDOM.render(<App/>, document.querySelector('#main'));


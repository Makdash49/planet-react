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
					<p>Form</p>
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
	createPerson : function(event) {
		// 1. Stop the form from submitting.
		event.preventDefault();
		// 2. Take the data from the form and create an object
		var person = {
			name : this.refs.name.value,
			story : this.refs.story.value,
		}

		// 3. Add the person to the App State
		this.props.addFish(person);
		this.refs.fishForm.reset();
	},
	render : function() {
		return (
			<form className="fish-edit2" ref="fishForm" onSubmit={this.createPerson}>
				<input type="text" ref="name" placeholder="Your Name" />
				<textarea type="text" ref="story" placeholder="Your Story"></textarea>
				<button type="submit">Submit </button>
			</form>
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



// Not using this WelcomeStatement
var WelcomeStatement = React.createClass({

	render : function(){
		return (
			<p>Welcome to Planet React!</p>
			)
	}
});

ReactDOM.render(<App/>, document.querySelector('#main'));

/*
Next goals:
	1. Get the data from the form and save it to the state in the app.
	2. Get the data to display in the Entry component.
	3. Get the data to save to Firebase.
*/





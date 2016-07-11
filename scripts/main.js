var React = require('react');
var ReactDOM = require('react-dom');

/*
	App
*/
var App = React.createClass({

	render : function(){
		return (
			<div className="planet-react">
				<div className="menu">
					<Header />
				</div>
				<Order />
				<Inventory/>
				</div>
			)
	}
});

/*
	Header
*/
var Header = React.createClass({
	render : function() {
		return (
			<p>Header</p>
			)
	}
})

/*
	Order
*/
var Order = React.createClass({
	render : function() {
		return (
			<p>Order</p>
			)
	}
})

/*
	Inventory
*/

var Inventory = React.createClass({
	render : function() {
		return (
			<p>Inventory</p>
			)
	}
})





var WelcomeStatement = React.createClass({

	render : function(){
		return (
			<p>Welcome to Planet React!</p>
			)
	}
});

ReactDOM.render(<App/>, document.querySelector('#main'));


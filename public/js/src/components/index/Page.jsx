/**
 * @jsx React.DOM
 */

var React = require('react'),
	Hello = require('../common/Hello'),
	MyReactComponent = require('../common/MyReactComponent');

var Page = React.createClass({

	getInitialState: function(){
		return {};
	},

	render: function() {

		return (
			<div>
					<MyReactComponent someProperty={this.state.someProperty}/>
					<input type="button" value="Change page state" onClick={this._handleClick}/>
			</div>
		);
		
	},

	_handleClick: function(){
		console.log('==Updating page state==');
		this.setState({
			someProperty: true
		});
	}

});

module.exports = Page;
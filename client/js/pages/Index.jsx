var React = require('react'),
	Hello = require('../components/Hello.jsx'),
  mountPoint = document.querySelector('body');

var Index = React.createClass({

	render: function() {

		return (
			<div>
					<Hello messageText="Index Page" />
			</div>
		);

	}

});

React.render(<Index /> , mountPoint);

module.exports = Index;

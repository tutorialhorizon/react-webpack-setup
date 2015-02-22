var React = require('react'),
	Hello = require('../components/Hello.jsx'),
  mountPoint = document.querySelector('body');

var AnotherPage =  React.createClass({

	render: function() {

		return (
			<div>
					<Hello messageText="Another Page" />
			</div>
		);
	}

});


React.render(<AnotherPage /> , mountPoint);
module.exports = AnotherPage;

var React = require('react'),
	// Require the appropriate top level component
	Page = require('./components/notes/Page'),
	mountPoint = document.querySelector('body');

React.renderComponent( Page(null) , mountPoint );
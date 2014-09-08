/**
 * @jsx React.DOM
 */

var React = require('react'),
	NoteModel = require('../../models/Note'),
	Note = require('./Note'),
	note = new NoteModel();

var Page = React.createClass({

	render: function() {

		return (
			<div>
				<Note model={note}/>
			</div>
		);
		
	}

});

module.exports = Page;
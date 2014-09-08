/**
 * @jsx React.DOM
 */

var React = require('react'),
	ModelUpdateMixin = require('../../mixins/ModelUpdateMixin');

var Note = React.createClass({

	mixins:[ModelUpdateMixin],

	render: function() {

		var p = this.props;

		return (
			<div>

				<div className="editor">
					<h5>Notes Editor</h5>
					<textarea rows="3" cols="50"
						ref="noteDetails"
						placeholder="Enter some notes"
						onChange={this._onDetailChange}>
						{p.model.get('details')}
					</textarea>
				</div>

				<div className="viewer">
					<h5>Viewer</h5>
					<i>{p.model.get('details')}</i>
				</div>

			</div>
		);
		
	},

	_onDetailChange: function(e){
		var p = this.props,
			noteDetails = this.refs.noteDetails.getDOMNode().value;

		p.model.set('details', noteDetails);
	}

});

module.exports = Note;
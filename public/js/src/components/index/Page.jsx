/**
 * @jsx React.DOM
 */

var React = require('react'),
	D3Tree = require('./D3Tree'),
	treeData = [
	  {
	    "name": "Top Level",
	    "parent": "null",
	    "children": [
	      {
	        "name": "Level 2: A",
	        "parent": "Top Level",
	        "children": [
	          {
	            "name": "Son of A",
	            "parent": "Level 2: A"
	          },
	          {
	            "name": "Daughter of A",
	            "parent": "Level 2: A"
	          }
	        ]
	      },
	      {
	        "name": "Level 2: B",
	        "parent": "Top Level"
	      }
	    ]
	  }
	];

var Page = React.createClass({

	render: function() {

		return (
			<div>
				<D3Tree treeData={treeData} />
			</div>
		);
		
	}

});

module.exports = Page;
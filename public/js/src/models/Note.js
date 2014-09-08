var Model = require('backbone-model').Model,
	Note = Model.extend({
	  title: "",
	  details: ""
	});

module.exports = Note;
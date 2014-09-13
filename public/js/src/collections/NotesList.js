var Collection = require('backbone-collection').Collection,
	Note = require('../models/Note'),
	NotesList = Backbone.Collection.extend({
	  model: Note
	});

module.exports = NotesList;
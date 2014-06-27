var Backbone = require('../backbone');
var CommentModel = require('../models/commentModel');

module.exports = Backbone.Collection.extend({
    model: CommentModel,
    url: 'http://localhost:3000/api/comments/'
});

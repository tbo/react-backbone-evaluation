var Backbone = require('../backbone');

module.exports = Backbone.Model.extend({
    urlRoot : 'http://localhost:3000/api/comments/',
    idAttribute: "id"
});

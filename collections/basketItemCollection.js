var Backbone = require('../backbone');
var BasketItemModel = require('../models/basketItemModel');

module.exports = Backbone.Collection.extend({
    model: BasketItemModel,
    url: 'http://localhost:3000/api/basket/'
});

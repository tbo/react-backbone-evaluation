'use strict';

var React = require('react');

var async = require('react-async').Mixin;
var backbone = require('../../mixins/backboneMixin');
var events = require('../../mixins/eventsMixin');

var ProductModel = require('../../models/productModel');
var CommentListing = require('./commentsComponent');
var SizeFacet = require('./sizeFacetComponent');

module.exports = React.createClass({displayName: 'exports',
    mixins: [async, backbone, events],

    statics: {
        model: ProductModel
    },

    addToBasket: function() {
        this.trigger('basket:add', this.state.model);
    },

    getProductTitle: function() {
        return (React.DOM.h1(null, this.state.model.get('name')));
    },

    getProductImage: function() {
        return (React.DOM.img( {src:this.state.model.get('images')[0].url, className:"product-image"}));
    },

    getOrderButton: function() {
        return (
            React.DOM.div( {className:"add-to-basket"},
                React.DOM.span( {onClick:this.addToBasket}, "Add to Basket")
            )
        );
    },

    render: function () {
        return (
            React.DOM.div( {className:"product-page"},
                this.getProductTitle(),
                this.getProductImage(),
                this.getOrderButton(),
                SizeFacet( {facet:this.state.model.get('facetGroups')[0]}),
                React.DOM.div( {className:"clearfix"}),
                CommentListing( {comments:this.state.model.get('comments')})
            )
        );
    }
});

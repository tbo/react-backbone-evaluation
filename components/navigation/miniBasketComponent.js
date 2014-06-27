/** @jsx React.DOM */
'use strict';

var React = require('react');
var async = require('react-async').Mixin;
var backbone = require('../../mixins/backboneMixin');
var BasketItemCollection = require('../../collections/basketItemCollection');
var events = require('../../mixins/eventsMixin');

module.exports = React.createClass({
    mixins: [async, backbone, events],

    statics: {
        model: BasketItemCollection
    },

    events: {
        'basket:add': 'addToBasket'
    },

    addToBasket: function(product) {
        this.state.model.create({name: product.get('name')});
    },

    render: function () {
        return (
            <div className="mini-basket">
                {this.state.model.length} Items in Basket
            </div>
        );
    }
});

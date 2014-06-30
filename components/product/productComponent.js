/** @jsx React.DOM */
'use strict';

var React = require('react');

var async = require('react-async').Mixin;
var backbone = require('../../mixins/backboneMixin');
var events = require('../../mixins/eventsMixin');

var ProductModel = require('../../models/productModel');
var CommentListing = require('./commentsComponent');
var SizeFacet = require('./sizeFacetComponent');

module.exports = React.createClass({
    mixins: [async, backbone, events],

    statics: {
        model: ProductModel
    },

    addToBasket: function() {
        this.trigger('basket:add', this.state.model);
    },

    getProductTitle: function() {
        return (<h1>{this.state.model.get('name')}</h1>);
    },

    getProductImage: function() {
        return (<img src={this.state.model.get('images')[0].url} className="product-image"/>);
    },

    getOrderButton: function() {
        return (
            <div className="add-to-basket">
                <span onClick={this.addToBasket}>Add to Basket</span>
            </div>
        );
    },

    render: function () {
        return (
            <div className="product-page">
                {this.getProductTitle()}
                {this.getProductImage()}
                {this.getOrderButton()}
                <SizeFacet facet={this.state.model.get('facetGroups')[0]}/>
                <div className="clearfix"/>
                <CommentListing comments={this.state.model.get('comments')}/>
            </div>
        );
    }
});

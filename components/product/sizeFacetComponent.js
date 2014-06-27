/** @jsx React.DOM */
'use strict';

var React = require('react');
var CommentCollection = require('../../collections/commentCollection');

var sizeItem = React.createClass({
    render: function () {
        return (
            <div className="size-item">
                {this.props.facetOption.name}
            </div>
        );
    }
});

module.exports = React.createClass({

    propTypes: {
        facet: React.PropTypes.object.isRequired
    },

    render: function () {
        var items = this.props.facet.facets.map(function(item) {
            return (<sizeItem facetOption={item} key={item.id}/>);
        });
        return (
            <div className="size-list">
                <h2>Available Sizes</h2>
                {items}
            </div>
        );
    }
});

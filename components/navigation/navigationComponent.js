/** @jsx React.DOM */
'use strict';

var React = require('react');
var Menu = require('./menuComponent');
var Basket = require('./miniBasketComponent');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="navigation">
                <div className="navigation-container">
                    <Basket/>
                    <Menu/>
                </div>
            </div>
        );
    }
});

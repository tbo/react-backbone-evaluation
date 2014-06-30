/**
 * @jsx React.DOM
 */
'use strict';

var React       = require('react');
var ReactRouter = require('react-router-component');

var Locations = ReactRouter.Locations;
var Location = ReactRouter.Location;
var NotFound = ReactRouter.NotFound;
var Link = ReactRouter.Link;

var Navigation = require('./components/navigation/navigationComponent');

var ProductPage = require('./components/product/productComponent');
var MainPage = require('./components/mainComponent');
var NotFoundPage = require('./components/notFoundComponent');

var App = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/assets/style.css" />
          <script src="/assets/bundle.js" />
        </head>
        <Navigation/>
        <Locations className="App" path={this.props.path}>
          <Location path="/" handler={MainPage} />
          <Location path="/products/:id" handler={ProductPage} />
          <NotFound handler={NotFoundPage} />
        </Locations>
      </html>
    );
  }
});

module.exports = App;

if (typeof window !== 'undefined') {
  //Fix for react tools
  window.React = React;
  window.onload = function() {
    React.renderComponent(App(), document);
  }
}

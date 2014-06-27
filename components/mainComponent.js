/** @jsx React.DOM */
'use strict';

var React = require('react');
var Link = require('react-router-component').Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="MainPage">
        <h1>Welcome to this little example</h1>
        <p><Link href="/products/222">Product Page Example</Link></p>
      </div>
    );
  }
});

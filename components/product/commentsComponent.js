/** @jsx React.DOM */
'use strict';

var React = require('react');
var CommentCollection = require('../../collections/commentCollection');

var Comment = React.createClass({
    render: function () {
        return (
            <div className="comment-item">
                <p>{this.props.comment.get('date')} <b>{this.props.comment.get('user')}</b>:</p>
                <p>{this.props.comment.get('text')}</p>
            </div>
        );
    }
});

module.exports = React.createClass({

    propTypes: {
        comments: React.PropTypes.array.isRequired
    },

    getComments: function(comments) {
        return comments.map(function(item) {
            return (<Comment comment={item} key={item.get('username')+item.get('date')}/>);
        });
    },

    render: function () {
        var comments = new CommentCollection(this.props.comments);
        return (
            <div className="comment-list">
                <h1>Comments</h1>
                {this.getComments(comments)}
            </div>
        );
    }
});

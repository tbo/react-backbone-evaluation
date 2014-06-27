var Backbone    = require('backbone');
var _ = require('underscore');

var sharedEvents = {};

var eventDispatcher = _.extend(Backbone.Events, {
    _events: sharedEvents,

    getDefaultProps: function() {
        if(this.events) {
            for(var pattern in this.events) {
                var handler = this.events[pattern];
                if(this[handler]) {
                    this.on(pattern, this[handler]);
                } else {
                    console.error('Unable to find event handler "' + handler + '"');
                }
            }
        }
    }
});

module.exports = eventDispatcher;

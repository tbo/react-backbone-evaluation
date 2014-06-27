var _ = require('underscore');

module.exports = {
    getInitialStateAsync: function (cb) {
        var model = new this.type.model();
        model.set('id', this.props[model.__proto__.idAttribute]);
        model.fetch().done(function () {
            cb(null, {
                'model': model
            });
        });
    },

    stateFromJSON: function (state) {
        return _.extend(state, {
            'model': new this.type.model(state.model)
        });
    },

    componentDidMount: function() {
        this.state.model.on('add', this.deferUpdate)
    },

    deferUpdate: function() {
      var state = this.state;
      if (!state._deferUpdate) {
        state._deferUpdate = true;
        var self = this;
        setTimeout(function() {
          delete state._deferUpdate;
          if (self.isMounted()) {
            self.forceUpdate();
          }
        }, 0);
      }
    }
};

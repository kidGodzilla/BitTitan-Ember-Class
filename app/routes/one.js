import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.findAll('color');
  },

  actions: {
    addItem: function (newItem) {
      var newColor = this.store.createRecord('color', {
        name: newItem
      });

      //newColor.save();
    }
  }
});

import DS from 'ember-data';

var Color = DS.Model.extend({
  name: DS.attr('string')
});

Color.reopenClass({
  FIXTURES: []
});


export default Color;

import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  organization_id: DS.attr('integer'),
  name: DS.attr('string')
});

// The organization route is only used by an admin for updating an organization, currently

import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

// look up the organization record that matches the user's organization id
export default Ember.Route.extend({
  form: {},
  credentials: storageFor('auth'),
  model: function(){
  return this.store.find('organization', this.get('credentials.organization_id'));
  },

  actions: {
      createOrganization: function(properties){
        console.log('Route Action : createOrganization');
        this.store.createRecord('organization', properties)
          .save().then(()=>console.log('record created'));
      },
      updateOrganization: function(organization) {
        console.log('Route Action : updateOrganization');
        organization.save();
      },
      destroyOrganization: function(id){
        console.log('Route Action : destroyOrganization');
        this.store.findRecord('organization', id).then((organization) => {
          this.store.deleteRecord(organization);
          console.log(`record ${id} destroyed`);
        });
      }
    }
});

// updateOrganization:  function() {console.log('Route Action: Update Organization');},
// destroyOrganization:  function() {console.log('Route Action: Destroy Organization');},

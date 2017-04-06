import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: true,
  isDisabled: true,
  // isDisabled: Ember.computed.not('isEditing'),
  flashMessage: Ember.get(this, 'flashMessages'),
  representingFilter: Ember.computed.filterBy(
    'model.officers',
    'entityKind',
    'Chorus'
  ),
  representingOptions: Ember.computed.mapBy(
    'representingFilter',
    'entity'
  ),
  officeCall: Ember.computed(function() {
    return this.get('store').query('office', {
      'kind': 32, //TODO Hardcoded
      // 'judges__status': 1,
      // 'judges__kind': 40,
      'page_size': 1000,
    });
  }),
  officeOptionsProperties: [
    'name:asc',
  ],
  officeOptions: Ember.computed.sort(
    'officeCall',
    'officeOptionsProperties'
  ),
  actions: {
    editOfficer() {
      this.set('isEditing', true);
    },
    cancelOfficer() {
      this.model.rollbackAttributes();
      this.set('isEditing', false);
    },
    deleteOfficer() {
      this.model.destroyRecord()
      .then(() => {
        this.get('flashMessages').warning('Deleted');
        this.set('isEditing', false);
        this.transitionToRoute('admin.quartet-manager.quartet.details');
      })
      .catch(() => {
        this.get('flashMessages').danger('Error');
      });
    },
    saveOfficer() {
      this.model.save()
      .then(() => {
        this.set('isEditing', false);
        this.get('flashMessages').success('Saved');
      })
      .catch(() => {
        this.get('flashMessages').danger('Error');
      });
    },
  },
});

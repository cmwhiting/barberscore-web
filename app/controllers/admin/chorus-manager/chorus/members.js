import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Controller.extend({
  isEditing: false,
  isDisabled: Ember.computed.not('isEditing'),
  searchTask: task(function* (term){
    yield timeout(600);
    return this.get('store').query('person', {
      'nomen__icontains': term,
      'page_size': 100,
    }).then((data) => data);
  }),
  openModal: false,
  partOptions: [
    'Director',
  ],
  sortedMembershipsProperties: [
    'status:desc',
    'partSort',
  ],
  sortedMemberships: Ember.computed.sort(
    'model.memberships',
    'sortedMembershipsProperties'
  ),
  actions: {
    createMembership(){
      let membership = this.get('store').createRecord('membership', {
        entity: this.get('model'),
        person: this.get('person'),
        part: this.get('part'),
      });
      membership.save()
      .then(() => {
        this.set('person', null);
        this.set('part', null);
        this.set('openModal', false);
        this.get('flashMessages').success('Success');
        this.transitionToRoute('admin.chorus-manager.chorus.members');
      })
      .catch(() => {
        membership.deleteRecord();
        this.get('flashMessages').danger('Error');
      });
    },
    clearMembership() {
      this.set('person', null);
      this.set('part', null);
      this.set('openModal', false);
    },
  }
});
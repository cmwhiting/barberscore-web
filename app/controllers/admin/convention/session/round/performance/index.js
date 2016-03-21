import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  judgeSortProperties: ['slot',],
  sortedJudges: Ember.computed.sort(
    'model.round.session.judges',
    'judgeSortProperties'
  ),
  scoreSortProperties: ['points',],
  sortedScores: Ember.computed.sort(
    'model.scores',
    'scoreSortProperties'
  ),
  actions: {
    saveSong(song) {
      console.log(song);
    }
  },
});
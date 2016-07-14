import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', { path: '/admin' }, function() {
    this.route('contest-manager', {path: '/contest-manager'}, function() {
      this.route('session', { path: '/session/:session_id' }, function() {
        this.route('judges', { path: '/panel'}, function() {
          this.route('judge', { path: '/:judge_id'});
        });
        this.route('contests', { path: '/contest'}, function() {
          this.route('contest', { path: '/:contest_id'});
        });
        this.route('performers', { path: '/entrant'}, function() {
          this.route('performer', { path: '/:performer_id'});
        });
        this.route('rounds', { path: '/round'}, function() {
          this.route('round', { path: '/:round_id'});
        });
        this.route('schedules', { path: '/schedule'});
        this.route('reports', { path: '/report'});
        this.route('sa', { path: '/sa'});
        this.route('announcement', { path: '/announcement'});
        this.route('oss', { path: '/oss'});
        this.route('csa', { path: '/csa/:performer_id'});
      });
    });
    this.route('sm', {path: '/scoring-manager'}, function() {
      this.route('session', { path: '/session/:session_id' }, function() {
        this.route('rounds', { path: '/round'}, function() {
          this.route('round', { path: '/:round_id'}, function() {
            this.route('performances', { path: '/performance'}, function() {
              this.route('performance', { path: '/:performance_id'});
            });
          });
        });
        this.route('schedules', { path: '/schedule'});
        this.route('reports', { path: '/report'});
        this.route('sa', { path: '/sa'});
        this.route('announcement', { path: '/announcement'});
        this.route('oss', { path: '/oss'});
        this.route('cursor', { path: '/cursor/'});
        this.route('csa', { path: '/csa/:performer_id'});
      });
    });
    this.route('jm', {path: '/certification-manager'}, function() {
      this.route('certification', { path: '/certification/:certification_id'});
    });
    this.route('qm', {path: '/quartet-manager'}, function() {
      this.route('quartet', { path: '/:group_id'});
    });
    this.route('hm', {path: '/chorus-manager'}, function() {
      this.route('chorus', { path: '/:group_id'});
    });
    this.route('dm', {path: '/district-manager'}, function() {
      this.route('organization', { path: '/district/:district_id'});
    });
    this.route('rm', {path: '/chart-manager'}, function() {
      this.route('chart', { path: '/chart/:chart_id'});
    });
  });
  this.route('public', { path: '/' }, function() {
    this.route('login');
    this.route('about');
    this.route('faq');
    this.route('conventions', { path: '/convention/' }, function() {
    });
    this.route('convention', { path: '/convention/:convention_id' }, function() {
      this.route('oss', { path: '/oss/:session_id'}, function() {
      });
      this.route('session', { path: '/session/:session_id' }, function() {
        this.route('judge', { path: '/judge/:judge_id'}, function() {
        });
        this.route('performer', { path: '/performer/:performer_id'}, function() {
        });
        this.route('round', { path: '/round/:round_id'}, function() {
        });
        this.route('current', { path: '/current/:performance_id'}, function() {
        });
        this.route('contest', { path: '/contest/:contest_id'}, function() {
        });
      });
    });
    this.route('groups', { path: '/group/' }, function() {
      this.route('group', { path: '/:group_id' }, function () {
      });
    });
    this.route('organizations', { path: '/organization/' }, function() {
      this.route('organization', { path: '/:organization_id' }, function() {
      });
    });
    this.route('persons', { path: '/person/' }, function() {
      this.route('person', { path: '/:person_id' }, function() {
      });
    });
  });
  this.route('404', { path: '/*wildcard' });
});

export default Router;

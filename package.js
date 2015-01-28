Package.describe({
  name: 'okgrow:iron-router-autoscroll',
  version: '0.0.2',
  summary: 'Scroll to the top of the page (or to a hash if given) after a route change if using Iron Router',
  git: 'https://github.com/okgrow/iron-router-autoscroll',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('iron:router@1.0.7', 'client', {weak: true});
  api.addFiles('lib/iron-router-autoscroll.js');
});

// TODO
// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('iron-router-autoscroll');
//   api.addFiles('test/iron-router-autoscroll-tests.js');
// });
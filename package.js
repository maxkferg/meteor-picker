Package.describe({
  name: 'picker',
  version: '0.0.1',
  summary: 'Open files from any major cloud service',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('picker.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('picker');
  api.addFiles('picker-tests.js');
});

Package.describe({
  summary: 'Parse CSV (Comma Separated Values) to Javascript arrays or dictionaries.'
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'lib/jquery-csv.min.js'
  ], 'client');
});
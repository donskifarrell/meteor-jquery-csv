Package.describe({
  summary: 'Parse CSV (Comma Separated Values) to Javascript arrays or dictionaries. Note: The JQuery-CSV.js file has been slightly modified from the official released version. This was to add in a "headerIndex" option to the toObjects(..) method.'
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'lib/jquery-csv.min.js'
  ], 'client');
});
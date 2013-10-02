# JQuery CSV for Meteor

Parse CSV (Comma Separated Values) to Javascript arrays or dictionaries

_**Note: The JQuery-CSV.js file has been slightly modified from the official released version. This was to add in a 'headerIndex' option to the toObjects(..) method.**_

## Scope

I am using this library for client side parsing of CSV files. If you are looking for server-side parsing, more complete NPM solutions can be found [here](https://npmjs.org/search?q=csv).

## Syntax (taken from the JQuery CSV page)

### Importing
**Client-Side:** (ie. browser) - import via the script element.

```
<script src="jquery-csv.js"></ script>
```

**Server-Side:** (ie. Node.js) - Import via the standard CommonJS approach.
```
var $ = jQuery = require('jquery');
require('./jquery.csv.js');
```

### Usage

A basic usage example can be found [here](http://jquery-csv.googlecode.com/git/examples/basic-usage.html).

Each one of the JQuery-CSV methods can be called with the following form:

```
$.csv.function(csv, {options}, callback);
```

**csv** (required) - The csv data to be transformed.

**options**	 (optional) - An object containing user-defined overrides for the default options.

**callback** (optional) - Used for Node.js-style async callbacks. Uses the form function(err, data).



### Methods
**toArray**

Parse a single entry string to an array

```
$.csv.toArray(csv);
```

**toArrays**

Parse a multi-line CSV string to a 2D array

```
$.csv.toArrays(csv);
```

**toObjects**

Parse a multi-line CSV string to an array of objects

```
$.csv.toObjects(csv);
```

## Requirements

* NPM


## How do I install this?

1. Install Meteorite: `npm install -g meteorite`
2. Create your project: `mrt create mynewapp`
3. Add jquery-csv: `mrt add jquery-csv`


## References

[Meteor](http://docs.meteor.com/)

[Meteorite](http://oortcloud.github.com/meteorite/)

[Atmosphere (Smart Packages)](https://atmosphere.meteor.com/wtf/package)

[JQuery CSV Homepage](https://code.google.com/p/jquery-csv/)

[JQuery CSV API](https://code.google.com/p/jquery-csv/wiki/API)

*Thanks to [AdaptiveLab](https://github.com/adaptivelab) for the smart package template*

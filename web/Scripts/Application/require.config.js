var require = {
  baseUrl: base + 'Scripts',
  urlArgs: "bust=" + (new Date()).getTime(),
  paths: {
    "jquery": "jquery-2.1.4.min",
    "bootstrap": "bootstrap.min",
    "knockout": "knockout-3.3.0",
    "knockout.mapping": "knockout.mapping-latest",
    "knockout.postbox": "knockout-postbox.min",
    "text": "text"
  },
  shim: {
    "jquery": {
      exports: '$'
    },
    "bootstrap": {
      deps: ["jquery"]
    },
    "knockout.postbox": {
      deps: ["knockout"]
    },
    "knockout.mapping": {
      deps: ["knockout"]
    }
  }
}

import Marionette from 'backbone.marionette'

import * as controller from 'assets/js/controller'
import textmapper from 'assets/js/TextDepthMapper'

$(function(){
  var App = new Marionette.Application();
  App.addRegions({
    main: '#main-region',
    sub: '#sub-region'
  });

// start app
  App.onStart = function(){
    controller.init(App);
    $('input[name=textRadio]:first').focus();
  };
  App.start();
});

/**
 * Execute the given function when user stops.
 */

var events = require('event');

module.exports = function(el, func, options) {
  options = options || {};

  // micro seconds
  var duration = options.duration || 400;

  var timer = [];

  var clear = function() {
    while (timer.length) {
      clearTimeout(timer.pop());
    }
  };


  var ev = options.event || 'keyup';
  var altEv = options.clearEvent;
  if (!altEv && ev === 'keyup') {
    altEv = 'keydown';
  }

  events.bind(el, ev, function() {
    if (!altEv) {
      clear();
    }
    timer.push(setTimeout(func, duration));
  });

  if (altEv) {
    events.bind(altEv, clear);
  }
};

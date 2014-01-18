/**
 * Execute the given function when user stops typing.
 */

var events = require('event');

module.exports = function(el, func, time) {
  // micro seconds
  time = time || 400;

  var timer;
  events.bind(el, 'keyup', function() {
    timer = setTimeout(func, time);
  });

  events.bind(el, 'keydown', function() {
    clearTimeout(timer);
  });
};

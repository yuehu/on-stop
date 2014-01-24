
# on-stop

  Execute when user stops.

## Installation

  Install with [component(1)](http://component.io):

    $ component install yuehu/on-stop

## API

```js
var stop = require('on-stop');

// stop(el, func, options)

stop(el, function() {
    console.log('stop');
})
```

### Options

1. **duration**: delay duration for an event, default is 400ms
2. **event**: stop on the given event, default is `keyup`
3. **clearEvent**: event for clearTimeout, usually you don't need set this value


## License

  MIT

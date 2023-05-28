# Sappling

# Debugging
In case of your remote JS debugger not working, add this to `/node_modules/open/open-main.js`

```javascript
'use strict';
var open = require('./index.js');

module.exports = {
    openMain: function (target, opts) {
        if (process.env.REACT_DEBUGGER) {
            if (opts.app) {
                console.log("Debugger for React Native is configured. Skipping launch of " + opts.app);
            }
            return;
        }

        return open(target, opts);
    },
    openApp: open.openApp,
};
```

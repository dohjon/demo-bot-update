# demo-bot-update [![Build Status](https://travis-ci.org/dohjon/demo-bot-update.svg?branch=master)](https://travis-ci.org/dohjon) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Demo Bot update functionality


## Install

```
$ npm install --save demo-bot-update
```


## Usage

```js
const m = require('demo-bot-update');

m.updateAvailable().then(result => {
	if (result) {
		m.applyUpdate();
	}
});
```

## Related

- [demo-bot](https://github.com/dohjon/demo-bot) - Demo Bot
- [demo-bot-plugin](https://github.com/dohjon/demo-bot-plugin) - Demo Bot Plugin

## License

MIT © [Jonathan Doherty](https://github.com/dohjon)

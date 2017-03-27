# demo-bot-update [![Build Status](https://travis-ci.org/dohjon/demo-bot-update.svg?branch=master)](https://travis-ci.org/dohjon) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Demo Bot update functionality


## Install

```
$ npm install --save demo-bot-update
```


## Usage

```js

```


## API

### Plugin(config)

Returns a `Plugin` instance.

#### config

##### id

Type: `string`<br>
Required: `true`

Plugin identifier.

##### questions

Type: `object[]`<br>
Default: `[]`

Questions to be prompted ([`Inquerier Questions`](https://github.com/SBoudrias/Inquirer.js#questions))

##### handler

Type: `Function`<br>
Default: `answers => {}`

Handler that gets called with answers after user answers questions.

##### before

Type: `Function`<br>
Default: `() => {}`

Hook that gets called before. Makes it possible to perform any actions before questions, handler or run is called.

```js
```

## Related

- [demo-bot](https://github.com/dohjon/demo-bot) - Demo Bot

## License

MIT © [Jonathan Doherty](https://github.com/dohjon)

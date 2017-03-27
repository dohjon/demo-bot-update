'use strict';

const path = require('path');
const execa = require('execa');

// eslint-disable-next-line no-unused-vars
const [execPath, execFile] = process.argv;

module.exports.updateAvailable = () => {
	return execa.stdout('git', ['-C', `${path.dirname(execFile)}`, 'rev-list', '--count', '--left-only', '@{u}...HEAD'])
		.then(result => {
			if (result !== '0') {
				return true;
			}
			return false;
		});
};

module.exports.applyUpdate = () => {
	return execa.stdout('git', ['-C', `${path.dirname(execFile)}`, 'pull']);
};

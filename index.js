'use strict';

const path = require('path');
const execa = require('execa');
const Listr = require('listr');
const debug = require('debug')('demo-bot-update');

const [execPath, execFile] = process.argv;

module.exports.check = () => {
	const tasks = [
		{
			title: 'Check current branch',
			task: () => execa.stdout('git', ['-C', `${path.dirname(execFile)}`, 'symbolic-ref', '--short', 'HEAD']).then(branch => {
				if (branch !== 'master') {
					throw new Error('Not on `master` branch. Use --any-branch to publish anyway.');
				}
			})
		},
		{
			title: 'Check local working tree',
			task: () => execa.stdout('git', ['-C', `${path.dirname(execFile)}`, 'status', '--porcelain']).then(status => {
				if (status !== '') {
					throw new Error('Unclean working tree. Commit or stash changes first.');
				}
			})
		},
		{
			title: 'Check remote history',
			task: () => execa.stdout('git', ['-C', `${path.dirname(execFile)}`, 'rev-list', '--count', '--left-only', '@{u}...HEAD']).then(result => {
				if (result !== '0') {
					throw new Error('Remote history differs. Please pull changes.');
				}
			})
		}
	];

	return new Listr(tasks).run()
		.then(result => {
			console.log('success', result);
		})
		.catch(err => {
			console.log('err', err);
		});
};

module.exports.update = () => {

};

module.exports.check()
		.then(result => {
			console.log('success2', result);
		})
		.catch(err => {
			console.log('err2', err);
		});



// 1. find the absolute path to the executing cli

// 2. check if the remote git repository is ahead of the local git repository

// 3. prompt user to update


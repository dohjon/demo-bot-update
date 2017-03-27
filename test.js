'use strict';

import test from 'ava';
import {updateAvailable, applyUpdate} from './';

test(`exports updateAvailable`, t => {
	t.not(typeof updateAvailable, 'undefined');
	t.is(typeof updateAvailable, 'function');
});

test(`calling updateAvailable should return a promise`, t => {
	t.is(typeof updateAvailable().then, 'function');
});

test(`exports applyUpdate`, t => {
	t.not(typeof applyUpdate, 'undefined');
	t.is(typeof applyUpdate, 'function');
});

test(`calling applyUpdate should return a promise`, t => {
	t.is(typeof applyUpdate().then, 'function');
});

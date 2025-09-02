'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { runMissions } = require('./missions');

// Fakes to force each path deterministically
const alwaysSuccess = () => { };                         // never throws
const alwaysFail = () => { throw new Error('boom'); };  // always throws

test('all missions succeed → 20 * (13 + 3) = 320', () => {
    const days = runMissions(20, alwaysSuccess);
    assert.equal(days, 320);
});

test('all missions fail → 20 * (1 + 3) = 80', () => {
    const days = runMissions(20, alwaysFail);
    assert.equal(days, 80);
});

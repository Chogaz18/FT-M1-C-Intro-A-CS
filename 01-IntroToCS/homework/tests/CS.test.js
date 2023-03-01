/* eslint-disable no-undef */
'use strict'

const {
  BinarioADecimal,
  DecimalABinario,
} = require('../homework.js');

describe('BinarioADecimal(num)', function() {
  it('should return 100', function() {
    expect(BinarioADecimal('1100100')).toBe(100);
  });
  it('should return 7', function() {
    expect(BinarioADecimal('111')).toBe(7);
  });
});

describe('DecimalABinario(num)', function() {
  it('should return "100"', function() {
    expect(DecimalABinario(4)).toBe('100');
  });
  it('should return "111"', function() {
    expect(DecimalABinario(7)).toBe('111');
  });
});

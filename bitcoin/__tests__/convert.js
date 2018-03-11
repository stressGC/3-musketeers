'use strict';

const convert = require('..');
const Big = require('big.js');

test('should default to returning a Number', () => {
  expect(convert(2, 'BTC', 'BTC')).toEqual(expect.any(Number));
});

test('should return a Number', () => {
  expect(convert(2, 'BTC', 'BTC', 'Number')).toEqual(expect.any(Number));
});

test('should return a Big number', () => {
  expect(convert(2, 'BTC', 'BTC', 'Big')).toEqual(expect.any(Big));
});

test('should return a String', () => {
  expect(convert(2100, 'mBTC', 'BTC', 'String')).toEqual(expect.any(String));
});

test('should convert an integer', () => {
  expect(convert(123456789012345, 'Satoshi', 'BTC', 'Number')).toBeDefined();
});

test('should convert a number', () => {
  expect(convert(1234567.89012345, 'BTC', 'Satoshi', 'Number')).toBeDefined();
});

test('should convert a string', () => {
  expect(convert('2', 'BTC', 'BTC', 'Number')).toBeDefined();
});

test('should convert a Big number', () => {
  expect(convert(new Big(2), 'BTC', 'BTC', 'Number')).toBeDefined();
});

test('should convert a NaN to a Number', () => {
  expect(convert(NaN, 'BTC', 'BTC', 'Number')).toEqual(expect.any(Number));
  expect(convert(NaN, 'BTC', 'mBTC', 'Number')).toEqual(expect.any(Number));
});

test('should convert a NaN to a String', () => {
  expect(convert(NaN, 'BTC', 'BTC', 'String')).toEqual(expect.any(String));
  expect(convert(NaN, 'BTC', 'mBTC', 'String')).toEqual(expect.any(String));
});

test('should not convert a NaN to a Big', () => {

  expect(() => {convert(NaN, 'BTC', 'BTC', 'Big')}).toThrow();
});

test('should handle rounding errors', () => {
  expect(convert(4.6, 'Satoshi', 'BTC', 'Number')).toBeDefined();
  expect(convert(0.000000046, 'BTC', 'Satoshi', 'Number')).toBeDefined();
});

test('should throw when untest is undefined', () => {
  expect(()=>{convert(new Big(2), 'x', 'BTC', 'Number')}).toThrow();
  expect(()=>{convert(new Big(2), 'BTC', 'x', 'Number')}).toThrow();
  expect(()=>{convert(NaN, 'x', 'BTC', 'Number')}).toThrow();
  expect(()=>{convert(NaN, 'BTC', 'x', 'Number')}).toThrow();
});

test('should throw when representaion is undefined', () => {
  expect(()=>{convert(2, 'BTC', 'mBTC', 'x')}).toThrow();
  expect(()=>{convert(NaN, 'BTC', 'mBTC', 'x')}).toThrow();
});

test('should allow untest aliases', () => {
  expect(()=>{convert(4.6, 'Satoshi', 'sat')}).toBeDefined();
  expect(()=>{convert(4.6, 'μBTC', 'btest')}).toBeDefined();
});
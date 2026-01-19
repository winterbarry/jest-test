import capitalize from './capitalize.js';

test('capitalizes first character of a lowercase word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

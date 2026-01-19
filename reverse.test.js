import reverseString from './reverse.js';

test('reverse all letters from original string', () => {
    expect(reverseString('hello')).toBe('olleh');
});
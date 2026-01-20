import analyzeArray from './analyze.js';

describe('analyzeArray', () => {
  test('returns correct average, min, max, and length for a non-empty array', () => {
    const input = [1, 8, 3, 4, 2];
    const result = analyzeArray(input);

    expect(result).toEqual({
      average: 3.6,
      min: 1,
      max: 8,
      length: 5
    });
  });

  test('handles an empty array', () => {
    const input = [];
    const result = analyzeArray(input);

    expect(result).toEqual({
      average: null,
      min: null,
      max: null,
      length: 0
    });
  });

  test('works with a single-element array', () => {
    const input = [7];
    const result = analyzeArray(input);

    expect(result).toEqual({
      average: 7,
      min: 7,
      max: 7,
      length: 1
    });
  });

  test('works with negative numbers', () => {
    const input = [-5, -2, -9];
    const result = analyzeArray(input);

    expect(result).toEqual({
      average: -5.333333333333333,
      min: -9,
      max: -2,
      length: 3
    });
  });
});

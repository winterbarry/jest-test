import calculator from './calculator.js';

describe('Calculator operations', () => {

  test('adds two positive numbers', () => {
    expect(calculator(2, 3, '+')).toBe(5);
  });

  test('subtracts two numbers', () => {
    expect(calculator(10, 5, '-')).toBe(5);
  });

  test('multiplies two numbers', () => {
    expect(calculator(4, 5, '*')).toBe(20);
  });

  test('divides two numbers', () => {
    expect(calculator(20, 4, '/')).toBe(5);
  });

  test('division by zero returns error', () => {
    expect(calculator(10, 0, '/')).toBe('Error: Division by zero');
  });

  test('invalid operator returns error', () => {
    expect(calculator(2, 2, '%')).toBe('Error: Invalid operator');
  });

});

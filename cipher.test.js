import caeserCipher from './cipher.js';

describe('Cipher Operations', () => {

    test('encrypt lowercase letters', () => {
        expect(caeserCipher('xyz', 3)).toBe('abc');
    });

    test('encrypt uppercase letters', () => {
        expect(caeserCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('encrypt non-alphabetical characters', () => {
        expect(caeserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
});
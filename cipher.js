export default function caeserCipher(str, shift) {
    return str
        .split('')
        .map(char => {

            if (char >= 'a' && char <= 'z') {
                const code = char.charCodeAt(0) - 97;
                const shifted = (code + shift) % 26;
                return String.fromCharCode(shifted + 97);
            }

            if (char >= 'A' && char <= 'Z') {
                const code = char.charCodeAt(0) - 65;
                const shifted = (code + shift) % 26;
                return String.fromCharCode(shifted + 65);
            }

            return char;

        })
        .join('');
}
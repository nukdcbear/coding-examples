import { isPangram } from '../src/app';

describe('Testing app file', () => {
    test('Sending pangram should be true', () => {
        expect(isPangram('The quick brown fox jumps over the lazy dog.')).toBeTruthy();
    });

    test('Sending non-pangram should be false', () => {
        expect(isPangram('This is not a pangram.')).toBeFalsy();
    });
});
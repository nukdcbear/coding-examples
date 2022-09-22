import { to_jaden_case } from '../src/app';

describe('testing_app_file', () => {
    test('Word capitalization', () => {
        expect(to_jaden_case('This sentence should have all words capitalized.')).toMatch('This Sentence Should Have All Words Capitalized.');
    })
});
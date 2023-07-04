import { expect } from "chai";
import { RandomWordsGenerator } from "../src/random-words-generator";

describe('RandomWordsGenerator Tests', () => {
    it('generate first letters works correctly', async () => {
        const generator = new RandomWordsGenerator();
        const words = ['banana', 'apple', 'cabbage', 'cucumber'];
        expect(generator.generateFirstLettersSelection(words)).to.eql(['b', 'a', 'c']);
    });

    it('generate last letters works correctly', async () => {
        const generator = new RandomWordsGenerator();
        const words = ['banana', 'apple', 'cabbage', 'cucumber'];
        expect(generator.generateLastLettersSelection(words)).to.eql(['a', 'e', 'r']);
    });

    it('generate letter pairs works correctly', async () => {
        const generator = new RandomWordsGenerator();
        const words = ['banana', 'apple', 'cabbage'];
        const letterPairs = generator.generatePossibleLetterPairs(words);
        expect(letterPairs.size).to.equal(7);
        expect(letterPairs.get('b')).to.eql(new Set(['a', 'b']));
        expect(letterPairs.get('a')).to.eql(new Set(['n', 'p', 'b', 'g']));
        expect(letterPairs.get('n')).to.eql(new Set(['a']));
        expect(letterPairs.get('p')).to.eql(new Set(['p', 'l']));
        expect(letterPairs.get('l')).to.eql(new Set(['e']));
        expect(letterPairs.get('c')).to.eql(new Set(['a']));
        expect(letterPairs.get('g')).to.eql(new Set(['e']));
    });

    it('generate with empty words delivers undefined', async () => {
        const generator = new RandomWordsGenerator();
        expect(generator.generate([])).to.not.exist;
    });
})

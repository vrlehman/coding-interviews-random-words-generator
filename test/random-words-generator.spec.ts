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

    it('generate with empty words delivers undefined', async () => {
        const generator = new RandomWordsGenerator();
        expect(generator.generate([])).to.not.exist;
    });
})

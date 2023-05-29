import { expect } from "chai";
import { RandomWordsGenerator } from "../src/random-words-generator";

describe('RandomWordsGenerator Tests', () => {
    it('generate with empty words delivers undefined', async () => {
        const generator = new RandomWordsGenerator();
        expect(generator.generate(['a'])).to.not.exist;
    });
})

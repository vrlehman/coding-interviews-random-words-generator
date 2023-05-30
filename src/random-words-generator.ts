export class RandomWordsGenerator {
    
    public generate(words: string[]): string | undefined {
        if (words === null || words === undefined || words.length === 0) return undefined;

        const firtsLettersArray: string[] = this.generateFirstLettersSelection(words);

        return 'random_word1';
    }

    public generateFirstLettersSelection(words: string[]): string[] {
        return [...new Set(words.map((word: string) => word.charAt(0)))];
    }
    public generateLastLettersSelection(words: string[]): string[] {
        return [...new Set(words.map((word: string) => word.charAt(word.length - 1)))];
    }
}

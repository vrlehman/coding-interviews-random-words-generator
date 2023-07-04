export class RandomWordsGenerator {

    public generate(words: string[]): string | undefined {
        if (words === null || words === undefined || words.length === 0) return undefined;

        const firtsLettersSelection: string[] = this.generateFirstLettersSelection(words);
        const possibleLetterPairs = this.generatePossibleLetterPairs(words);
        const lastLettersSelection: string[] = this.generateLastLettersSelection(words);

        const randomFirstLetter = firtsLettersSelection[Math.floor(Math.random() * firtsLettersSelection.length)];

        return 'random_word1';
    }

    public generateFirstLettersSelection(words: string[]): string[] {
        return [...new Set(words.map((word: string) => word.charAt(0)))];
    }
    public generateLastLettersSelection(words: string[]): string[] {
        return [...new Set(words.map((word: string) => word.charAt(word.length - 1)))];
    }

    public generatePossibleLetterPairs(words: string[]) {

        let letterPairs = new Map<string, Set<string>>();

        words.forEach((word: string) => {
            for(let i = 0; i <= word.length - 2; i++) {
                if(letterPairs.has(word[i])) {
                    let values = letterPairs.get(word[i]) ?? new Set<string>();
                    values.add(word[i+1]);
                } else {
                    let values = new Set<string>(word[i+1]);
                    letterPairs.set(word[i], values);
                }
            }


        })



        return letterPairs;
    }
}

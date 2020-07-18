export default class GeneratorPassword {
    constructor(amount, capitalLetters, smallLetters, numbers, symbols) {
        this.amount = amount;
        this.capitalLetters = capitalLetters;
        this.smallLetters = smallLetters;
        this.numbers = numbers;
        this.symbols = symbols;
    }

    rand(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    generatePassword() {
        const symbols = '+-)(*&%$#@!;/?^~';
        const genCapitalLetters = () => String.fromCharCode(this.rand(65, 91));
        const genSmallLetters = () => String.fromCharCode(this.rand(97, 123));
        const genNumbers = () => String.fromCharCode(this.rand(48, 58));
        const genSymbols = () => symbols[this.rand(0, symbols.length)];

        const arrayPassword = []

        for (let i = 0; i < this.amount; i++) {
            this.capitalLetters && arrayPassword.push(genCapitalLetters());
            this.smallLetters && arrayPassword.push(genSmallLetters());
            this.numbers && arrayPassword.push(genNumbers());
            this.symbols && arrayPassword.push(genSymbols());
        }

        return arrayPassword.join('').slice(0, this.amount);
    }

}

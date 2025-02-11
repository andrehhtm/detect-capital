/**
 * segui a ideia de validar a partir dos métodos "toUpperCase" e "toLowerCase" do javascript
 * @author André Ramos
 */
function detectCapitalUse(word: string): boolean {
    // valida os cenários caso a string seja inteiramente "CAPS"
    const isFullCapital = word == word.toUpperCase();
    // valida os cenários caso a string seja inteiramente "nocaps"
    const haveNoCapital = word == word.toLowerCase();

    // se a string começa com letra maiscula e se o restante é minusculo (olhando a primeira letra e depois o restante da string)
    const startsWithCapital = word.startsWith(word[0]);
    const wordRemains = word.slice(1, word.length);
    const wordRemainsIsLowerCased = wordRemains == wordRemains.toLowerCase();

    return isFullCapital || haveNoCapital || (startsWithCapital && wordRemainsIsLowerCased);
};

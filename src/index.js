module.exports = function toReadable(number) {
    const numbersWord = [
        {
            0: 'zero',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
        },
        {
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
        },
        {
            1: 'ten',
            2: 'twenty',
            3: 'thirty',
            4: 'forty',
            5: 'fifty',
            6: 'sixty',
            7: 'seventy',
            8: 'eighty',
            9: 'ninety',
        }
    ]

    if (number < 10) {
        return numbersWord[0][number];
    } else if (number >= 10 && number < 20) {
        return numbersWord[1][number];
    }

    const numberText = ('' + number).split('');
    const numberLength = numberText.length;

    let firstNUmber = '';
    let secondNUmber = '';
    let therdNUmber = '';


    if (numberLength === 2) {

        firstNUmber = numbersWord[2][numberText[0]];

        if (numberText[1] !== '0') {
            secondNUmber = ' ' + numbersWord[0][numberText[1]];
        }


    } else {
        firstNUmber = numbersWord[0][numberText[0]] + ' hundred';

        if (numberText[1] === '1') {

            secondNUmber = ' ' + numbersWord[1][numberText[1] + numberText[2]];

        } else if (numberText[1] !== '0' && numberText[2] !== '0' ) {

            secondNUmber = ' ' + numbersWord[2][numberText[1]];
            therdNUmber = ' ' + numbersWord[0][numberText[2]];

        } else if ( numberText[1] === '0' && numberText[2] !== '0' ) {

            therdNUmber = ' ' + numbersWord[0][numberText[2]];

        } else if ( numberText[1] !== '0' && numberText[2] === '0' ) {

            secondNUmber = ' ' + numbersWord[2][numberText[1]];

        }
    }

    return firstNUmber + secondNUmber + therdNUmber;

}

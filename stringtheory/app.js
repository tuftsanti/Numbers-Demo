// console.log('works');
$('#output-box').html(0);
// $('#input-box').attr('value', '1';
// let input = $('#input-box').val();
// console.log(input);

let string1 = 'radar bob radar';
let string2 = 'obb rrdaa daarr';
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let string1Counts, string2Counts = [];

const countLetters = (string) => {
    const splitString = string.split('');
    // console.log(splitString)
    for (let i=0; i<splitString.length; i++) {
        if (splitString[i] == ' ') {
            i++;
        }
        for (let x=0; x < alphabet.length; x++) {
            string1Counts[i] = string.match(alphabet[i])
        }
    }

}
countLetters(string1);

if (string1.length === string2.length) {
    console.log('same length')
    // string1.find()
} else {
    console.log('They are not the same length')
}




$('#submit').on('click', () => {
    let input = $('#input-box').val();
    const origNumber = $('#output-box').val();
    // console.log($origNumber)
    const newNumber = parseInt(origNumber) - parseInt(input)
    if (newNumber < 0) {
        $('#output-box').addClass('output-box-negative')
    }
    $('#output-box').html(newNumber);
})
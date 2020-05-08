// console.log('works');
$('#output-box').html(0);
// $('#input-box').attr('value', '1';
// let input = $('#input-box').val();
// console.log(input);

$('#plus').on('click', () => {
    let input = $('#input-box').val();
    const origNumber = $('#output-box').val();
    // console.log($origNumber)
    const newNumber = parseInt(origNumber) + parseInt(input)
    $('#output-box').html(newNumber);
})

$('#minus').on('click', () => {
    let input = $('#input-box').val();
    const origNumber = $('#output-box').val();
    // console.log($origNumber)
    const newNumber = parseInt(origNumber) - parseInt(input)
    $('#output-box').html(newNumber);
})
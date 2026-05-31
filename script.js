
const form = document.getElementById('myform');
const ocult = document.getElementById('ocult');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const answer = document.getElementById('answer').value.toLowerCase();
    if (answer === 'ciber_mark') {
        ocult.classList.remove('ocult');
    } else {
        alert('Please answer correctly to see the content.');
    }
});
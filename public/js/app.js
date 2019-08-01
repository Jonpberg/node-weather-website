console.log('Client side JS file is loaded');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    fetch(`http://localhost:3000/weather?address=${location}`)
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                messageOne.textContent = `Error: ${data.error}`;
            }
            else {
                messageOne.textContent = data[0].location;
                messageTwo.textContent = data[0].forecast;
            }
        });
});
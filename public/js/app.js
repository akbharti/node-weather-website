//console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')

// messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit' , (e) => {
    
    e.preventDefault();

    const location = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch(`/weather?address=${location}`)
    .then((response) => {
        response.json().then((data) => {
            if(data.error){
                // console.log(data.error)
                messageOne.textContent = data.error
            } else {
                //  console.log(data.location); 
                //  console.log(data.forecast)
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        })
    } ) 
})
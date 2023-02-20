// Form JavaScript

const scriptURL = 'https://script.google.com/macros/s/AKfycbzslf3q--f1Ff7F_6nZShVhW3yVJ0x-LRBK1Dzz3dpExcSqW9hq-OPG-ZHTlBLO33RF/exec'
const form = document.forms['word-family-fund-project']
const form2 = document.forms['form2']

// Form1 JavaScript

form.addEventListener('submit', e => {
    e.preventDefault()
        const fullName = form.querySelector('#fullName').value
        const email = form.querySelector('#email').value
        const phoneNumber = form.querySelector('#phoneNumber').value
        const message = form.querySelector('#message').value

    if (!fullName || !email || !phoneNumber || !message) {
        alert('Please fill in all fields before submitting')
        return
    }

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(() => {
            form.reset()
                alert('Thank you for your response, we will get back to you soon!')
        })
})

// End Of Form1 JavaScript

// Form2 JavaScript

form2.addEventListener('submit', e => {
    e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form2) })
            .then(() => {
                form2.reset();
                    alert('Thank you for your response, you will soon start getting our newsletter on your mail!');
            });
});

// End Of Form2 JavaScript

// End Of Form JavaScript
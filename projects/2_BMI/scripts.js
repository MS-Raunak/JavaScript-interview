const form = document.querySelector('form');


form.addEventListener('submit', e => {
    e.preventDefault()
    //console.log("clicked");

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('p')

    const box = document.querySelector('.box');

    const btn = document.querySelector('#btn');
    // const result = document.querySelector('p');

    btn.addEventListener('click', e => {
        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);


        const bmi = weight / height;

        if (isNaN(height) || isNaN(weight) || height === 0 || weight === 0) {
            result.innerText = `Please enter valid input`
            result.style.color = 'red'
            return;
        }
        if (bmi < 11) {
            result.innerText = `Underweight: ${bmi}`
            result.style.color = 'orange'
        }
        else if (bmi >= 11 && bmi <= 14) {
            result.innerText = `Normal: ${bmi}`
            result.style.color = 'green'
        }
        else {
            result.innerText = `Overweight: ${bmi}`
            result.style.color = 'red'
        }
    })

})

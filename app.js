const inputBirthday = document.querySelector('#birthday');
const result = document.querySelector('#result');


function calculateDays () {
    let birthday = inputBirthday.value;

    if (birthday === '') {
        result.textContent = 'Пожалуйста, введите дату рождения'
        result.classList.toggle('error');
    } else {
        result.textContent = '';
        result.classList.toggle('error');
    }
    let date = Date.parse(birthday);
    console.log(date)
    let currentDate = new Date().getTime();
    console.log(birthday)
    console.log (currentDate)
    let days = (date - currentDate)/(1000*60*60*24);
    console.log (days)


}


const btn = document.querySelector('#btn');
btn.addEventListener('click', calculateDays )




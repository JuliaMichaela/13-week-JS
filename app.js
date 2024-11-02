const inputBirthday = document.querySelector('#birthday');
const result = document.querySelector('#result');
const error = document.querySelector('#error');

function calculateDays () {
    let birthday = inputBirthday.value;

    if (birthday === '') {
        error.textContent = 'Пожалуйста, введите дату рождения'
        error.classList.toggle('error');
    } else {
        error.textContent = '';
        error.classList.toggle('error');
    }
    let date = Date.parse(birthday);
    let currentDate = new Date().getTime();
    let days = Math.ceil((date - currentDate)/(1000*60*60*24));
    let strDay= 'день';
    result.textContent= `До Вашего дня рождения осталось ${days}  ${strDay} `
    return days;
    
}
    

const btn = document.querySelector('#btn');
btn.addEventListener('click', calculateDays )




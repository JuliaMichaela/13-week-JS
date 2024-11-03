const inputBirthday = document.querySelector('#birthday');
const result = document.querySelector('#result');
const error = document.querySelector('#error');

function calculateDays () {
    let birthday = inputBirthday.value;

    if (birthday === '') {
        error.textContent = 'Пожалуйста, введите дату рождения'
        error.classList.add('error');
    } else {
        error.textContent = '';
        error.classList.remove('error');

        let date = Date.parse(birthday);
        let currentDate = new Date().getTime();
        let days = Math.ceil((date - currentDate)/(1000*60*60*24));

        let strDay;
        if (days === 1){
            strDay = 'день'
        } else if (days>=2 && days<=4){
            strDay = 'дня'
        } else if(days.toString().slice(-1) === '1'){
            strDay = 'день'
        } else if (days.toString().slice(-1) === '2' || days.toString().slice(-1) === '3' || days.toString().slice(-1) === '4'){
            strDay = 'дня'
        } else {
            strDay = 'дней'
        }

        result.textContent= `До Вашего дня рождения осталось ${days} ${strDay} `
        return days;
    }
}
    
const btn = document.querySelector('#btn');
btn.addEventListener('click', calculateDays)




// Miejsce na Twój kod
// 1. Pobierz input i div komunikatu
// 2. Obsłuż zdarzenie blur
// 3. Sprawdź warunki i manipuluj klasami (error/warning/success)


const input = document.querySelector('#ageInput');
const msg = document.querySelector('#msgBox');

input.addEventListener('blur', function(){
    const wiek = parseInt(input.value);
    if (isNaN(wiek)){
        msg.classList.add('error');
        msg.classList.remove('warning', 'success');
        msg.innerHTML = 'Złe dane, wpisz poprawny wiek';
    }
    else if (wiek < 0){
        msg.classList.add('error');
        msg.classList.remove('warning', 'success');
        msg.innerHTML = 'Złe dane, wpisz poprawny wiek';
    }
    else if (wiek == 0){
        msg.classList.add('error');
        msg.classList.remove('warning', 'success');
        msg.innerHTML = 'Złe dane, wpisz poprawny wiek';
    }
    else if (wiek < 18){
        msg.classList.add('warning');
        msg.classList.remove('error', 'success');
        msg.innerHTML = 'Potrzeba zgody rodzica';
    }
    else if (wiek > 18){
        msg.classList.add('success');
        msg.classList.remove('error', 'warning');
        msg.innerHTML = 'Wiek został zweryfikowany';
    }

})
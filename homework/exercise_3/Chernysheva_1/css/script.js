function calculate() {
    var num1 = parseInt(document.getElementById('number1').value);
    var num2 = parseInt(document.getElementById('number2').value);
    var results = `Арифметические операции:<br>
            - Сложение: ${num1 + num2}<br>
            - Вычитание: ${num1 - num2}<br>
            - Умножение: ${num1 * num2}<br>
            - Деление: ${num1 / num2}<br><br>
            Тип данных:<br>
            - первого числа: ${typeof(num1)}<br>
            - второго числа: ${typeof(num2)}`;
    document.getElementById('results').innerHTML = results;
}

function guessNumber() {
    var guessedResult = parseInt(document.getElementById('guessedNumber').value);
    var originalNumber = (guessedResult - 7) / 2;
    document.getElementById('results').innerHTML = `Задуманное число: ${originalNumber}<br><br>           
            Тип данных введенного числа: ${typeof(guessedResult)}`;
}

function calculateAge() {
    var userName = document.getElementById('userName').value;
    var yearOfBirth = parseInt(document.getElementById('yearOfBirth').value);
    var currentYear = new Date().getFullYear();
    var age = currentYear - yearOfBirth;
    document.getElementById('results').innerHTML = `${userName}: ${age}<br><br>
            Тип данных:<br>
            - имени: ${typeof(userName)}<br>
            - возраста: ${typeof(yearOfBirth)}`;
}

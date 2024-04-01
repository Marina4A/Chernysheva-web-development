var count = 0; // Глобальная переменная

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function mystery1() {
  var str1 = document.getElementById('string1').value;

  var check = (capitalizeFirstLetter(str1) == "Книги") ? 1: 0;
  window.count += check; // Явное обращение к глобальной переменной
  var results = `Количество отгаданных: ${window.count}`; // Обратные кавычки
  document.getElementById('results').innerHTML = results;
}

function mystery2() {
  var str1 = document.getElementById('string1').value;
  var check = (capitalizeFirstLetter(str1) == "Кровать") ? 1: 0;
  window.count += check; // Явное обращение к глобальной переменной
  var results = `Количество отгаданных: ${window.count}`; // Обратные кавычки
  document.getElementById('results').innerHTML = results;
}

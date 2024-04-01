function generateArray() {
    const arr = Array.from({length: 15}, () => Math.floor(Math.random() * (31 + 10) - 10));
    return arr;
}

function arrayOperations() {
    let arr = generateArray();
    const positiveAvg = arr.filter(n => n > 0).reduce((acc, n, _, array) => acc + n / array.length, 0);
    arr = arr.map(n => n < 0 ? n * n : n);
    const negativeAvg = arr.filter(n => n < 0).reduce((acc, n, _, array) => acc + n / array.length, 0, 0);
    const zerosCount = arr.filter(n => n === 0).length;

    document.getElementById('results').innerHTML = `
        <p>Сгенерированный массив: ${arr}</p>
        <p>Среднее арифметическое положительных чисел: ${positiveAvg.toFixed(2)}</p>
        <p>Среднее арифметическое отрицательных чисел (после изменений): ${negativeAvg.toFixed(2)}</p>
        <p>Число нулей: ${zerosCount}</p>
    `;
}

function simulator() {
    const outcomes = {red: 0, black: 0, white: 0};
    let maxRedStreak = 0;
    let currentStreak = 0;

    for (let i = 0; i < 1000000; i++) {
        const outcome = Math.floor(Math.random() * 3);
        outcome === 0 ? currentStreak++ : currentStreak = 0;
        maxRedStreak = Math.max(maxRedStreak, currentStreak);

        switch (outcome) {
            case 0:
                outcomes.red++;
                break;
            case 1:
                outcomes.black++;
                break;
            case 2:
                outcomes.white++;
                break;
        }
    }

    document.getElementById('results').innerHTML = `
        <p>Максимальное число раз подряд выпало красное: ${maxRedStreak}</p>
    `;
}

document.getElementById('arrayOperations').addEventListener('click', arrayOperations);
document.getElementById('simulator').addEventListener('click', simulator);

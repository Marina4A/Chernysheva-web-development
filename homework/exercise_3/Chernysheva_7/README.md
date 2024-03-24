# Задание 3.7

---

1. Сравните два варианта:

- Решение задачи без использования функций высшего порядка

```
const arr1 = [1, 2, 3];
const arr2 = [];
for(let i = 0; i < arr1.length; i++) {
arr2.push(arr1[i] * 2);
}
// выводит [ 2, 4, 6 ]
console.log(arr2);
```

- Решение задачи с помощью функции высшего порядка map

```
const arr1 = [1, 2, 3];
const arr2 = arr1.map(function(item) {
return item * 2;
});
console.log(arr2);
```

- Объём этого кода можно даже сократить, если воспользоваться стрелочной функцией:

```
const arr1 = [1, 2, 3];
const arr2 = arr1.map(item => item * 2);
console.log(arr2);
```

- Воспользовавшись методом map(), создайте новый массив из имеющегося, который содержит увеличенные элементы на 10 и в
  три
  раза.

2. Имеется массив «год рождения». Необходимо вывести их возраст.
3. Предположим, у нас имеется массив, содержащий объекты, в свойствах которых хранятся сведения об имени и возрасте
   представителей некой группы людей. Нам надо создать массив, в котором будут сведения только о совершеннолетних
   представителях этой группы (тех, чей возраст достиг 18 лет).

- Решение задачи без использования функций высшего порядка

```
const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
];
const fullAge = [];
for(let i = 0; i < persons.length; i++) {
    if(persons[i].age >= 18) {
        fullAge.push(persons[i]);
    }
}
console.log(fullAge);
```

- Решение задачи с помощью функции высшего порядка filter

```
const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24},
];
const fullAge = persons.filter(person => person.age >= 18);
console.log(fullAge);
```
- Используя данный пример, реализуйте проверку по условию на право редактирования сайта и вывод имени админа.

4. Используя синтаксис:

```
const sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
```

- Вычислите средний балл студентов.

5. Используя синтаксис, создайте собственную функцию высшего порядка, которая из заданного массива возвращает массив,
состоящий из нулей (для тех элементов длинна которых меньше либо равна 3) и единиц (в другом случае).

```
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapForEach(arr, fn) {
const newArray = [];
for(let i = 0; i < arr.length; i++) {
    newArray.push(
        fn(arr[i])
    );
}
    return newArray;
}
const lenArray = mapForEach(strArray, function(item) {
    return item.length;
});
// выводит [ 10, 6, 3, 4, 1 ]
console.log(lenArray);
```
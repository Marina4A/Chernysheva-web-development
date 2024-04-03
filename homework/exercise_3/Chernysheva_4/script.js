/*1. Анализ работы кода объекта user*/
let user = {
    name: "Джон",
    age: 30
};

user.sayHi = function () {
    alert("Привет!");
};

user.sayHi(); // Привет!

/*2. Создание объекта – информация о покупателе*/
let customer = {
    name: "Мария",
    age: 28,
    email: "maria@example.com",
    phone: "+79991234567",
    city: "Москва"
};

// Выводим три свойства объекта
console.log(customer.name);
console.log(customer.email);
console.log(customer.city);

/*3. Создание объектов пользователи, заказы и рестораны:*/
let users = {
    userId1: {name: "Иван", age: 25},
    userId2: {name: "Елена", age: 32}
};

let orders = {
    order1: {userId: "userId1", orderDetails: "Салат Цезарь"},
    order2: {userId: "userId2", orderDetails: "Пицца Маргарита"}
};

let restaurants = {
    restaurantId1: {name: "Борщ и Пельмени", location: "Центр города"},
    restaurantId2: {name: "Итальянское бистро", location: "Старый город"}
};

// Вывод информации по условию (например, все заказы пользователя с userId1)
for (let orderKey in orders) {
    if (orders[orderKey].userId === "userId1") {
        console.log(`Заказ пользователя Иван: ${orders[orderKey].orderDetails}`);
    }
}

/*4. Использование функции-конструктора для создания объектов*/
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Вася");

alert(user.name); // Вася
alert(user.isAdmin); // false

function Student(name) {
    this.name = name;

    this.sayHi = function () {
        alert("Меня зовут: " + this.name);
    };
}

let student = new Student("Петр");

student.sayHi();


/*5. Создание объекта Калькулятор*/
let calculator = {
    sum(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    },
    div(a, b) {
        return a / b;
    }
};

// Использование калькулятора
console.log(calculator.sum(5, 2)); // 7
console.log(calculator.sub(5, 2)); // 3
console.log(calculator.mul(5, 2)); // 10
console.log(calculator.div(5, 2)); // 2.5

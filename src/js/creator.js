import defineAndFilter from "./defineAndFilter";
import { defineAndSort } from "./defineAndSort"
import deleteFields from "./deleteFields";
let _ = require('lodash')
let data = [
    {
        name: 'Яков',
        status: 3,
        price: 20000,
        confidence: 20,
        month: 'Июнь',
        number: 12,
        year: 2015,
        priority: false,
        tel: '+74642005646',
        email: 'iamjs@gmail.com'
    },

    {
        name: 'Саша',
        status: 4,
        price: 96320,
        confidence: 53,
        month: 'Апрель',
        number: 30,
        year: 2018,
        priority: false,
        tel: '+79463024659',
        email: 'ihatejs@gmail.com'
    },

    {
        name: 'Иван',
        status: 2,
        price: 987000,
        confidence: 86,
        month: 'Декабрь',
        number: 31,
        year: 2006,
        priority: true,
        tel: '+79623106556',
        email: 'ilikejs@gmail.com'
    },

]

// так как я сделал лишь одно поле для выборта значений для сортировки или фильтрации, понадобилась следущий код
let selectedBtnID; // переменная нужны для поерделения по какой кнопке нажал пользователь, и дальнейшег определения что делать
let allBtns = [...document.querySelectorAll('.tools-bar__tool')] // все кнопки с заданным классом, для удобства сразу превратил в массив
allBtns.splice(0, 3) // обрезал первые три кнопки, так как такой же класс присутсвует и в header
for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener('click', () => {
        selectedBtnID = event.target.id // сразу определяется id той кнопки на которую нажал пользователь
        if (selectedBtnID == 'sort') { // selectedBtnID равен sort то выполняется сценарий действий для сортировки
            document.querySelector('.tools-variants__make').addEventListener('click', () => {
                let copy = _.cloneDeep(data) // сам data уже не будет участвовать ни в фильтрации ни  сортировке, так как это бы помешало исрользоать кнопку "отменить изменения", вместо этого создается глубокая копия data и используется она
                defineAndSort(copy)
                deleteFields()
                createTable(copy)
                // тут изначально формируется сам массив с объектами в функции defineAndSort, затем очищаются все поля с помощью deleteFields для того чтобы createTable могла заново построить таблицу уже с отсортированным массивом
            })
        }
        else if (selectedBtnID == 'filter') { // так как функцию фильрации я еще не успел сделать, то тут будет просто console.log('работает');
            document.querySelector('.tools-variants__make').addEventListener('click', () => {
                let copy = _.cloneDeep(data) // тут создается глубокая копия массива data для того чтобы можно было его здесь локально обрезать не делая ничего с оригинальным массивом
                defineAndFilter(copy)
                copy.splice(1, copy.length) // обрезаю чтобы выводилось только первое значение
                deleteFields()
                createTable(copy) // вызывается функция для создания строк таблицы с глубоко скопированным массивом
            })
        }
    })
}

document.querySelector('.tools-variants__return-to-default').addEventListener('click', () => {
    deleteFields()
    createTable(data)
}) // небольшая функция для отмены всех изменений произошедших с сортировкой или фильрацией

function createTable(array) { // я специально здесь поставил параметр array, для того чтобы при фильтрации вызывать эту функцию с глубоко скопированным массивом

    for (let i = 0; i < array.length; i++) {
        let tbody = document.createElement('tbody')
        tbody.classList.add('table__todo-tbody')

        let name = document.createElement('td')
        name.classList.add('name')
        name.innerHTML = `<i class="far fa-file-alt"></i> <span class="name-span">${array[i].name}</span>`;
        // так как встраивать react в проект достаточно сложно, а переписывать весь существующий код под react не хотелось я начал делать так

        let status = document.createElement('td')
        if (array[i].status == 1) {
            status.innerHTML = '<span class="status-span">Закрыт</span>'
        } else if (array[i].status == 2) {
            status.innerHTML = '<span class="status-span">Ведется</span>'
        } else if (array[i].status == 3) {
            status.innerHTML = '<span class="status-span">Планируется</span>'
        } else if (array[i].status == 4) {
            status.innerHTML = '<span class="status-span">Связался</span>'
        } else if (array[i].status == 5) {
            status.innerHTML = '<span class="status-span">Потерянный</span>'
        }

        let price = document.createElement('td')
        price.classList.add('price')
        price.innerHTML = `$<span class="price-span">${array[i].price}</span>`

        let confidence = document.createElement('td')
        confidence.classList.add('confidence')
        confidence.innerHTML = `${array[i].confidence}%`

        let date = document.createElement('td')
        let [month, number, year] =
            [
                `<span class="month">${array[i].month}</span>`,
                `<span class="number">${array[i].number}</span>`,
                `<span class="year">${array[i].year}</span>`,
            ]
        date.innerHTML += `${month} ${number}, ${year}`

        let priority = document.createElement('td')
        array[i].priority ? priority.innerHTML = '<input class="check-priority" disabled checked type="checkbox">' : priority.innerHTML = '<input class="check-priority" disabled type="checkbox">'
        // здесь идет проверка на то является ли свойство true или false и в щависимости от этого input будет выделяться

        let tel = document.createElement('td')
        let linkToPhone = document.createElement('a')
        linkToPhone.setAttribute('href', `tel: ${array[i].tel}`)
        linkToPhone.innerHTML = array[i].tel
        linkToPhone.classList.add('tel')
        tel.append(linkToPhone)

        let email = document.createElement('td')
        email.classList.add('email')
        email.innerHTML = `${array[i].email}`


        tbody.append(name, status, price, confidence, date, priority, tel, email)
        document.querySelector('table').append(tbody)

        let statuses = document.querySelectorAll('.status-span')
        Array.from(statuses).map(item => {
            if (item.innerHTML == 'Ведется') {
                item.style.background = '#e1cee4'
            } else if (item.innerHTML == 'Связался') {
                item.style.background = '#d3d6e8'
            } else if (item.innerHTML == 'Планируется') {
                item.style.background = '#d6eff8'
                item.innerHTML += '<img src="assets/eyes.png">'
            } else if (item.innerHTML == 'Закрыт') {
                item.style.background = '#d1e7e5'
                item.innerHTML += '<img src="assets/biceps.png">'
            } else if (item.innerHTML == 'Потерянный') {
                item.style.background = '#f0f0f0'
            }
        })
        // так как изначально statuses был NodeListом то через такую форму я дал ему возмоность использовать методы обычного массива
        // здесь просто определяется цвет под статус каждой задачи
    }

    document.querySelector('#counts').innerHTML = array.length
    let prices = document.querySelectorAll('.price-span')
    let sum = 0
    for (let i = 0; i < prices.length; i++) {
        sum = sum + Number(prices[i].innerHTML)
    }
    document.querySelector('#sum').innerHTML = sum + '$'

}

export { createTable, data }
import createNewRow from "./createNewRow";
import defineAndFilter from "./defineAndFilter";
import { defineAndSort } from "./defineAndSort"
import deleteFields from "./deleteFields";
let _ = require('lodash')

let data = []
// так как я сделал лишь одно поле для выборта значений для сортировки или фильтрации, понадобилась следущий код
let selectedBtnData; // переменная нужны для поерделения по какой кнопке нажал пользователь, и дальнейшег определения что делать

const allBtns = [...document.querySelectorAll('.tools-bar__tool')] // все кнопки с заданным классом, для удобства сразу превратил в массив
allBtns.splice(0, 3) // обрезал первые три кнопки, так как такой же класс присутсвует и в header
for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener('click', () => {
        selectedBtnData = event.target.dataset.method // сразу определяется data той кнопки на которую нажал пользователь
        if (selectedBtnData == 'sort') { // selectedBtnID равен sort то выполняется сценарий действий для сортировки
            document.querySelector('.tools-variants__make').addEventListener('click', () => {
                let copy = _.cloneDeep(data) // сам data уже не будет участвовать ни в фильтрации ни  сортировке, так как это бы помешало исрользоать кнопку "отменить изменения", вместо этого создается глубокая копия data и используется она
                defineAndSort(copy)
                deleteFields()
                createTable(copy)
                // тут изначально формируется сам массив с объектами в функции defineAndSort, затем очищаются все поля с помощью deleteFields для того чтобы createTable могла заново построить таблицу уже с отсортированным массивом
            })
        }
        else if (selectedBtnData == 'filter') { // так как функцию фильрации я еще не успел сделать, то тут будет просто console.log('работает');
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
    try {
        document.querySelector('.tools-variants__variant input[type="radio"]:checked').checked = false
    } catch (e) { } // при отмене изменений с input`а снимается выделение, а в trycatch`е это потому что будет ошибка если пользователей нажмет на кнопку отменить просто так

}) // небольшая функция для отмены всех изменений произошедших с сортировкой или фильрацией

let switcher1 = false
document.querySelector('.tools-bar__btn').addEventListener('click', () => {
    if (!switcher1) {
        document.querySelector('.table-container__new-row-configurator').style.display = 'flex'
        document.querySelector('.tools-bar__btn').innerText = 'Отменить'
        switcher1 = true
    } else {
        document.querySelector('.table-container__new-row-configurator').style.display = 'none'
        document.querySelector('.tools-bar__btn').innerText = 'Новая строка'
        switcher1 = false
    }
}) // небольшой код для того чтобы можно было показывать и прятать панель настроек новой строки

document.querySelector('.new-row-configurator__make').addEventListener('click', () => {
    createNewRow(data)
    deleteFields()
    createTable(data)
    document.querySelector('.table-container__new-row-configurator').style.display = 'none'
    document.querySelector('.tools-bar__btn').innerText = 'Новая строка'
})

let switcher2 = false
document.querySelector('.table-container__add-row').addEventListener('click', () => {
    if (!switcher2) {
        document.querySelector('.table-container__new-row-configurator').style.display = 'flex'
        switcher2 = true
    } else {
        document.querySelector('.table-container__new-row-configurator').style.display = 'none'
        switcher2 = false
    }
}) // небольшой код для того чтобы можно было показывать и прятать панель настроек новой строки

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
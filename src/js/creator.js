import { defineAndSort } from "./defineAndSort"
import deleteFields from "./deleteFields";

let data = [
    {
        name: 'Дмитрий',
        status: 3,
        price: 56480,
        confidence: 98,
        month: 'Июнь',
        number: 12,
        year: 2015,
        priority: true,
        tel: 74642005646,
        email: 'iamjs@gmail.com'
    },

    {
        name: 'Саша',
        status: 5,
        price: 96320,
        confidence: 53,
        month: 'Апрель',
        number: 30,
        year: 2018,
        priority: false,
        tel: 79463024659,
        email: 'ihatejs@gmail.com'
    },

    {
        name: 'Иван',
        status: 1,
        price: 987000,
        confidence: 86,
        month: 'Декабрь',
        number: 31,
        year: 2006,
        priority: true,
        tel: 79623106556,
        email: 'ilikejs@gmail.com'
    },

]

document.querySelector('.sort-variants__make').addEventListener('click', () => {
    defineAndSort(data)
    deleteFields()
    createTable()
}) /*   
    здесь происходит следующее:
    1) определяется по какому принципу будет идти сортировка
    2) удаляются все поля таблицы, для того чтобы функция createTable могла заново строить таблицу с пересформированным data
*/

function createTable() {

    for (let i = 0; i < data.length; i++) {
        let tbody = document.createElement('tbody')
        tbody.classList.add('table__todo-tbody')

        let name = document.createElement('td')
        name.classList.add('name')
        name.innerHTML = `<i class="far fa-file-alt"></i> <span class="name-span">${data[i].name}</span>`;
        // так как встраивать react в проект достаточно сложно, а переписывать весь существующий код под react не хотелось я начал делать так

        let status = document.createElement('td')
        if (data[i].status == 1) {
            status.innerHTML = '<span class="status-span">Closed</span>'
        } else if (data[i].status == 2) {
            status.innerHTML = '<span class="status-span">Lead</span>'
        } else if (data[i].status == 3) {
            status.innerHTML = '<span class="status-span">Proposed</span>'
        } else if (data[i].status == 4) {
            status.innerHTML = '<span class="status-span">Contacted</span>'
        } else if (data[i].status == 5) {
            status.innerHTML = '<span class="status-span">Lost</span>'
        }

        let price = document.createElement('td')
        price.classList.add('price')
        price.innerHTML = `$<span class="price-span">${data[i].price}</span>`

        let confidence = document.createElement('td')
        confidence.classList.add('confidence')
        confidence.innerHTML = `${data[i].confidence}%`

        let date = document.createElement('td')
        let [month, number, year] =
            [
                `<span class="month">${data[i].month}</span>`,
                `<span class="number">${data[i].number}</span>`,
                `<span class="year">${data[i].year}</span>`,
            ]
        date.innerHTML += `${month} ${number}, ${year}`

        let priority = document.createElement('td')
        data[i].priority ? priority.innerHTML = '<input class="check-priority" disabled checked type="checkbox">' : priority.innerHTML = '<input class="check-priority" disabled type="checkbox">'
        // здесь идет проверка на то является ли свойство true или false и в щависимости от этого input будет выделяться

        let tel = document.createElement('td')
        let linkToPhone = document.createElement('a')
        linkToPhone.setAttribute('href', `tel: ${data[i].tel}`)
        linkToPhone.innerHTML = `+${data[i].tel}`
        linkToPhone.classList.add('tel')
        tel.append(linkToPhone)

        let email = document.createElement('td')
        email.classList.add('email')
        email.innerHTML = `${data[i].email}`


        tbody.append(name, status, price, confidence, date, priority, tel, email)
        document.querySelector('table').append(tbody)

        let statuses = document.querySelectorAll('.status-span')
        Array.from(statuses).map(item => {
            if (item.innerHTML == 'Lead') {
                item.style.background = '#e1cee4'
            } else if (item.innerHTML == 'Contacted') {
                item.style.background = '#d3d6e8'
            } else if (item.innerHTML == 'Proposed') {
                item.style.background = '#d6eff8'
                item.innerHTML += '<img src="assets/eyes.png">'
            } else if (item.innerHTML == 'Closed') {
                item.style.background = '#d1e7e5'
                item.innerHTML += '<img src="assets/biceps.png">'
            } else if (item.innerHTML == 'Lost') {
                item.style.background = '#f0f0f0'
            }
        })
        // так как изначально statuses был NodeListом то через такую форму я дал ему возмоность использовать методы обычного массива
        // здесь просто определяется цвет под статус каждой задачи
    }

    document.querySelector('#counts').innerHTML = data.length
    let prices = document.querySelectorAll('.price-span')
    let sum = 0
    for (let i = 0; i < prices.length; i++) {
        sum = sum + Number(prices[i].innerHTML)
    }
    document.querySelector('#sum').innerHTML = sum + '$'

}

export default createTable
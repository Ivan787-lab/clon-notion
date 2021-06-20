let data = [
    {
        name: 'Sasha',
        status: 'Proposed',
        price: 2,
        confidence: 110,
        month: 'May',
        number: 19,
        year: 2006,
        highPriority: true,
        tel: 79623106556,
        email: 'ivanulanovskij143@gmail.com'
    }, {
        name: 'Sasha',
        status: 'Proposed',
        price: 2,
        confidence: 110,
        month: 'May',
        number: 19,
        year: 2006,
        highPriority: true,
        tel: 79623106556,
        email: 'ivanulanovskij143@gmail.com'
    },
    {
        name: 'Sasha',
        status: 'Proposed',
        price: 3,
        confidence: 110,
        month: 'May',
        number: 19,
        year: 2006,
        highPriority: true,
        tel: 79623106556,
        email: 'ivanulanovskij143@gmail.com'
    },

] // сейчас здесь просто обычный массив с объектом, в будущем планирую брать сведения с бд

export default function createTable() {
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement('tr')
        tr.classList.add('table__todo-tr')

        let name = document.createElement('td')
        name.classList.add('name')
        name.innerHTML = `<i class="far fa-file-alt"></i> <span class="name-span">${data[i].name}</span>`;
        // так как встраивать react в проект достаточно сложно, а переписывать весь существующий код под react не хотелось я начал делать так

        let status = document.createElement('td')
        status.innerHTML = `<span class="status-span">${data[i].status}</span>`

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
        data[i].highPriority ? priority.innerHTML = '<input class="check-priority" checked type="checkbox">' : priority.innerHTML = '<input class="check-priority" type="checkbox">'
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


        tr.append(name, status, price, confidence, date, priority, tel, email)
        document.querySelector('table').append(tr)

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



export default function createNewRow(array) {
    const name = document.getElementById('configure-the-name')
    const status = document.querySelector('.select-status__container input:checked')
    const price = document.getElementById('configure-the-price')
    const confidence = document.getElementById('configure-the-trust')
    const lastContact = document.getElementById('configure-the-last-contact').value.split("-")
    const priority = document.querySelector('.select-priority input:checked')
    const tel = document.getElementById('configure-the-tel')
    const email = document.getElementById('configure-the-email')

    // определяются переменные для полей ввода

    array.push({
        name: name.value,
        status: status.dataset.status,
        price: price.value,
        confidence: confidence.value,
        month: defineMonth(lastContact),
        year:lastContact[0],
        number:lastContact[2],
        priority: Boolean(priority.dataset.agreee),
        tel: tel.value,
        email: email.value
    }) // все их содержимое добавляется в масссив

    name.value = ''
    status.checked = false
    price.value = ''
    confidence.value = ''
    priority.checked = false
    document.getElementById('configure-the-last-contact').value = ''
    tel.value = ''
    email.value = '' 
    // удаляется значение из поля для ввода

    console.log(array);
}

function defineMonth(lastContact) {
    if (lastContact[1] == '01') return "Январь"
    if (lastContact[1] == '02') return "Февраль"
    if (lastContact[1] == '03') return "Март"
    if (lastContact[1] == '04') return "Апрель"
    if (lastContact[1] == '05') return "Май"
    if (lastContact[1] == '06') return "Июнь"
    if (lastContact[1] == '07') return "Июль"
    if (lastContact[1] == '08') return "Август"
    if (lastContact[1] == '09') return "Сентябрь"
    if (lastContact[1] == '10') return "Октябрь"
    if (lastContact[1] == '11') return "Ноябрь"
    if (lastContact[1] == '12') return "Декабрь"
} // так как через обычный календарь в HTML выдается номер месяца, эта функция преобразовывает его в слово
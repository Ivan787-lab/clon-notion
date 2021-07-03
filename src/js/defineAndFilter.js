
export default function defineAndFilter(array) {
    try {
        var method = document.querySelector('input[name = "variant"]:checked').nextElementSibling.innerHTML.toLowerCase() // здесь присваиваю переменной значение следущего элемента после инпута на который кликнули
    } catch (error) { }
    // завернул объявление переменной в trycatch во избежаниии ощибок если пользователь ничего не выбрал но нажал на кнопку
    if (method == 'имени') {
        array.sort((a, b) => {
            if (a.name > b.name) return 1
            if (a.name < b.name) return -1
            return 0
        })
    } else if (method == 'статусу') {
        array.sort((a, b) => {
            if (a.status > b.status) return 1
            if (a.status < b.status) return -1
            return 0
        })
    } else if (method == 'оценочной стоимости') {
        array.sort((a, b) => {
            if (a.price < b.price) return 1
            if (a.price > b.price) return -1
            return 0
        })
    } else if (method == 'доверию') {
        array.sort((a, b) => {
            if (a.confidence < b.confidence) return 1
            if (a.confidence > b.confidence) return -1
            return 0
        })
    } else if (method == 'приоритету') {
        array.sort((a, b) => {
            if (a.priority < b.priority) return 1
            if (a.priority > b.priority) return -1
            return 0
        })
    }
}
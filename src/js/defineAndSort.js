
function accordeon() {
    const sortBtn = document.querySelector("#sort")
    let switcher = false

    sortBtn.addEventListener('click', () => {
        if (!switcher) {
            sortBtn.innerHTML += ' by';
            switcher = true;
            document.querySelector(".table-container__sort-variants").style.maxHeight = '350px';
        } else {
            sortBtn.innerHTML = 'Sort'
            switcher = false;
            document.querySelector(".table-container__sort-variants").style.maxHeight = null
        }
    });
} // простая функция для кнопки "Сортировать"

function defineAndSort(array) {
    let method = document.querySelector('input[name = "variant"]:checked').nextElementSibling.innerHTML.toLowerCase() // здесь присваиваю переменной значение следущего элемента после инпута на который кликнули

    if (method == 'name') {
        array.sort((a, b) => {
            if (a.name > b.name) return 1
            if (a.name < b.name) return -1
            return 0
        })
    } else if (method == 'status') {
        array.sort((a, b) => {
            if (a.status > b.status) return 1
            if (a.status < b.status) return -1
            return 0
        })
    } else if (method == 'price') {
        array.sort((a, b) => {
            if (a.price < b.price) return 1
            if (a.price > b.price) return -1
            return 0
        })
    } else if (method == 'confidence') {
        array.sort((a, b) => {
            if (a.confidence < b.confidence) return 1
            if (a.confidence > b.confidence) return -1
            return 0
        })
    } else if (method == 'priority') {
        array.sort((a, b) => {
            if (a.priority < b.priority) return 1
            if (a.priority > b.priority) return -1
            return 0
        })
    }
}

export { accordeon, defineAndSort }
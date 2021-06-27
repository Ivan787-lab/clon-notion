export default function deleteFields () {
    let table = document.querySelector('table')
    let children = table.querySelectorAll('tbody') // определяются все потомки таблицы с тегом tbody
    for (let i = 0; i < children.length; i++) {
        children[i].remove() // удаляются чтобы потом заново отрисовывать таблицу
    }
}
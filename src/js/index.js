import '../css/style.css'
import '../css/style.scss'
import createTable from './creator'
import { accordeon } from './defineAndSort'
createTable()
accordeon('#sort', 'Сортировка', '.table-container__sort-variants', '350px', false)
// немного переделана функция аккордеон для возможно ее многократного использования в других блоках
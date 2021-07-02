import '../css/style.css'
import '../css/style.scss'
import createTable from './creator'
import { accordeon } from './defineAndSort'
createTable()
// немного переделана функция аккордеон для возможно ее многократного использования в других блоках
accordeon('#sort', 'Сортировка', '.table-container__tools', '60px', false)
accordeon('#filter', 'Фильр', '.table-container__tools', '60px', false)

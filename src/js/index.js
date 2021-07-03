import '../css/style.css'
import '../css/style.scss'
import accordeon from './accordeon'
import { createTable, data } from './creator'
createTable(data)
// немного переделана функция аккордеон для возможно ее многократного использования в других блоках
accordeon('#sort',  '.table-container__tools-variants', '60px', false)
accordeon('#filter',  '.table-container__tools-variants', '60px', false)

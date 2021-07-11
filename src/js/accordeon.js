export default function accordeon(sortBtn) {
    const btn = document.querySelector(sortBtn)
    btn.addEventListener('click', () => {
        let allActiveBtns = document.querySelectorAll('.tools-bar__tool_active')
        btn.classList.add('tools-bar__tool_active')
        if (allActiveBtns.length >= 1) {
            for (let i = 0; i < allActiveBtns.length; i++) {
                allActiveBtns[i].classList.remove('tools-bar__tool_active')
            }
        }
    });
} // простая функция для кнопки "Сортировать"
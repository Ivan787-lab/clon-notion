export default function accordeon(sortBtn, containerClass, maxHeight, aLotOfInfo) {
    const btn = document.querySelector(sortBtn)
    let switcher = false

    btn.addEventListener('click', () => {
        let allActiveBtns = document.querySelectorAll('.tools-bar__tool_active')
        btn.classList.add('tools-bar__tool_active')
        if (allActiveBtns.length >= 1) {
            for (let i = 0; i < allActiveBtns.length; i++) {
                allActiveBtns[i].classList.remove('tools-bar__tool_active')
            }
        }

        if (!switcher) {
            switcher = true;
            document.querySelector(containerClass).style.maxHeight = maxHeight;
            if (aLotOfInfo) {
                document.querySelector(containerClass).style.marginTop = '15px';
                document.querySelector(containerClass).style.overflow = 'auto';
            }
        } else {
            switcher = false;
            document.querySelector(containerClass).style.maxHeight = null
        }
    });
} // простая функция для кнопки "Сортировать"
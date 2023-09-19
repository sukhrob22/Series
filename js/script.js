window.addEventListener('DOMContentLoaded', () => {
    const tabsParent = document.querySelector('.tabheader__items'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        loader = document.querySelector('.loader');

    console.log(loader);

    // Loader
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);

    // Tabs
    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showtabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showtabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, idx) => {
                if (target == item) {
                    hideTabContent();
                    showtabContent(idx);
                }
            });
        }
    });

    // Timer

    const deadline = '2023-09-22';

    function getTimeRemaining(endtime) {
        const timer = Date.parse(deadline) - Date.parse(new Date()),
            days = Math.floor(timer / (1000 * 60 * 60 * 24)),
            hours = Math.floor((timer / (1000 * 60)) % 60),
            minutes = Math.floor(((timer / 1000) * 60) % 60),
            seconds = Math.floor((timer / 1000) % 60);

        return { timer, days, hours, minutes, seconds };
    }
});

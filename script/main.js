
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',

    loop: true,
    // autoplay: true,
});




const videos = [
    'video/nevo_banner.mp4',
    'video/deepal_banner.mp4',
    'video/avatr_banner.mp4'
];

let videoIndex = 0;
const videoPlayer = document.getElementById('videoPlayer');

if (videoPlayer) {
    function playNextVideo() {
        if (videoIndex < videos.length) {
            videoPlayer.src = videos[videoIndex];
            videoPlayer.play();
            videoIndex++;
        } else {
            videoIndex = 0;
            playNextVideo();
        }
    }


    videoPlayer.onended = playNextVideo;


    playNextVideo();
}



let closeNav = document.getElementById('close-nav');
let brands = document.querySelectorAll('.brands'); // Получаем все элементы с классом brands
let navListItem = document.querySelectorAll('.nav_list-item'); // Получаем все элементы списка навигации
let brandsBlock = document.querySelector('.brands_block'); // Блок с брендами
let aboutCompany = document.querySelector('.about_company'); // Блок с информацией о компании
let headerNav = document.querySelector('.header_nav'); // Навигация (header)
let activeIndex = -1; // Индекс активного элемента

// Проверяем наличие элементов .brands
if (brands) {
    brands.forEach((brand, index) => {
        brand.addEventListener('click', () => {
            // Удаляем активные классы у предыдущего активного элемента
            if (activeIndex !== -1) {
                brandsBlock.classList.remove('active');
                aboutCompany.classList.remove('active');
                headerNav.classList.remove('active');
                navListItem[activeIndex].classList.remove('active');
            }

            // Логика для открытия правильного блока в зависимости от того, какой пункт меню был выбран
            if (index === 0) { // Если выбран пункт "Компания"
                aboutCompany.classList.add('active'); // Показываем блок about_company
            } else if (index === 1) { // Если выбран пункт "Бренды"
                brandsBlock.classList.add('active'); // Показываем блок brands_block
            }

            // Добавляем активные классы к header и текущему элементу меню
            headerNav.classList.add('active');
            navListItem[index].classList.add('active');

            // Обновляем индекс активного элемента
            activeIndex = index;
        });
    });
}

if (closeNav) {
    closeNav.addEventListener('click', () => {
        // Удаляем класс active у всех блоков брендов
        brandsBlock.classList.remove('active');

        // Удаляем класс active у шапки навигации
        headerNav.classList.remove('active');

        // Удаляем класс active у всех элементов списка навигации
        navListItem.forEach(item => item.classList.remove('active'));
    });
}

//смена картинок брендов
document.querySelectorAll('.brands_list').forEach(item => {
    item.addEventListener('mouseover', function () {
        const newImage = this.getAttribute('data-image');
        const newLogo = this.getAttribute('data-logo');

        // Меняем изображение и логотип
        document.getElementById('brandImage').src = newImage;
        document.getElementById('brandLogo').src = newLogo;
    });
});




document.querySelectorAll('.color-circle').forEach(circle => {
    circle.addEventListener('click', () => {
        const imgSrc = circle.getAttribute('data-img');
        document.querySelector('.style1_bg').src = imgSrc;
    });
});

document.querySelectorAll('.color-circle1').forEach(circle => {
    circle.addEventListener('click', () => {
        const imgSrc = circle.getAttribute('data-src');
        document.querySelector('.style2_bg').src = imgSrc;
    });
});



const openBlock = document.querySelector('.open_block');
const openBtn = document.querySelector('.battery_info-add');

if (openBlock) {
    openBtn.addEventListener('click', () => {
        if (openBlock.classList.contains('active')) {
            openBlock.classList.remove('active');
        } else {
            openBlock.classList.add('active');

        }
    })
}

// Установка начального языка при загрузке страницы
// document.addEventListener('DOMContentLoaded', () => {
//     const savedLanguage = localStorage.getItem('language') || 'ru';
//     changeLanguage(savedLanguage);

//     // Обработчики кликов по элементам меню
//     document.querySelectorAll('.dropdown-item').forEach(item => {
//         item.addEventListener('click', (e) => {
//             e.preventDefault();
//             const lang = e.target.getAttribute('data-lang');
//             changeLanguage(lang);
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    // Получаем язык из localStorage или устанавливаем 'ru' по умолчанию
    const savedLanguage = localStorage.getItem('language') || 'ru';
    changeLanguage(savedLanguage);

    // Обработчики кликов по элементам меню
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            // e.preventDefault(); // предотвращаем переход по ссылке
            const lang = e.currentTarget.getAttribute('data-lang'); // используем currentTarget
            if (lang) { // Проверка на наличие значения
                changeLanguage(lang);
            } else {
                console.error('Selected language is not defined.'); // логируем ошибку
            }
        });
    });
});
//перевод
const translations = {
    ru: {
        company: 'Компания',
        brends: 'Бренды',
        main: 'Главная',
        models: 'Модельный ряд',
        contacts: 'Контакты',
        service: 'Сервис',
        dealers: 'Дилеры',

        bookService: 'Записаться на сервис',
        warranty: 'Гарантия',
        testdrive: 'Тест-драйв',
        modelAbout: 'Подробнее',
        selectModel: ' Выберите свой автомобиль',
    },
    uz: {
        company: 'Kompaniya',
        brends: 'Brendlar',
        main: 'Bosh sahifa',
        models: 'Model diapazoni',
        contacts: 'Kontaktlar',
        service: 'Xizmat',
        dealers: 'Dilerlar',

        bookService: 'Xizmatga yozilish',
        warranty: 'Kafolat',
        testdrive: 'Test-drive',
        modelAbout: 'Batafsil',
        selectModel: 'Avtomobilingizni tanlang',
    }
};
function changeLanguage(lang) {
    // Сохраняем язык в localStorage
    if (!translations[lang]) {
        console.error(`Language '${lang}' is not supported.`);
        return; // Выход из функции, если язык не поддерживается
    }
    localStorage.setItem('language', lang);

    // Меняем текст на странице
    let company = document.querySelector('.brands[data-model-company]');
    if (company) {
        company.textContent = translations[lang].company;
    }
    let brands = document.querySelector('.brands[data-model-brends]');
    if (brands) {
        brands.textContent = translations[lang].brends;
    }
    // document.querySelector('.nav-link[data-models]').textContent = translations[lang].models;
    // document.querySelector('.nav-link[data-contacts]').textContent = translations[lang].contacts;
    // document.querySelector('.nav-link[data-service]').textContent = translations[lang].service;
    // document.querySelector('.nav-link[data-dealers]').textContent = translations[lang].dealers;
    // document.querySelector('.dropdown-item[data-book-service]').textContent = translations[lang].bookService;
    // document.querySelector('.dropdown-item[data-warranty]').textContent = translations[lang].warranty;
    // document.querySelector('.btn-outline-success[data-testdrive]').textContent = translations[lang].testdrive;
    // document.querySelectorAll('.swiper_btn[data-model-about]').forEach((item) => {
    //     item.textContent = translations[lang].modelAbout;
    // });

    // Перебираем элементы и обновляем их текст
    document.querySelectorAll('.nav-link[data-main]').forEach(el => {
        el.textContent = translations[lang].main;
    });
    document.querySelectorAll('.nav-link[data-models]').forEach(el => {
        el.textContent = translations[lang].models;
    });
    document.querySelectorAll('.nav-link[data-contacts]').forEach(el => {
        el.textContent = translations[lang].contacts;
    });
    document.querySelectorAll('.nav-link[data-service]').forEach(el => {
        el.textContent = translations[lang].service;
    });
    document.querySelectorAll('.nav-link[data-dealers]').forEach(el => {
        el.textContent = translations[lang].dealers;
    });
    document.querySelectorAll('.dropdown-item[data-book-service]').forEach(el => {
        el.textContent = translations[lang].bookService;
    });
    document.querySelectorAll('.dropdown-item[data-warranty]').forEach(el => {
        el.textContent = translations[lang].warranty;
    });
    document.querySelectorAll('.btn-outline-success[data-testdrive]').forEach(el => {
        el.textContent = translations[lang].testdrive;
    });
    document.querySelectorAll('.swiper_btn[data-model-about]').forEach(el => {
        el.textContent = translations[lang].modelAbout;
    });



    const selectModelElements = document.querySelector('.main_tabs-title[data-select-model]');
    if (selectModelElements) {
        selectModelElements.textContent = translations[lang].selectModel;
    }
    // Обновляем отображение текущего языка
    const currentLanguageElement = document.getElementById('current-language');
    if (currentLanguageElement) {
        currentLanguageElement.textContent = lang.toUpperCase();
    }
}





let s7Btn = document.querySelector('.s7_btn');
let sl03Btn = document.querySelector('.sl03_btn');
let nevoBtn = document.querySelector('.nevo_btn');
let s7Bloc = document.querySelector('.s7_bloc');
let sl03Bloc = document.querySelector('.sl03_bloc');
let nevoBloc = document.querySelector('.nevo_bloc');

if (s7Btn) {
    s7Btn.addEventListener('click', (e) => {
        // e.preventDefault();
        sl03Bloc.classList.remove('active');
        s7Bloc.classList.add('active');
    });
}
if (sl03Btn) {
    sl03Btn.addEventListener('click', (e) => {
        // e.preventDefault();
        s7Bloc.classList.remove('active');
        sl03Bloc.classList.add('active');

    });
}
if (nevoBtn) {
    nevoBtn.addEventListener('click', (e) => {
        // e.preventDefault();
        if (nevoBloc.classList.contains('active')) {
            nevoBloc.classList.remove('active');
        } else {
            nevoBloc.classList.add('active');

        }

    });
}

let preBtns = document.querySelectorAll('.style_pre-btn');
let preOrder = document.querySelectorAll('.pre_order');

for (let i = 0; i < preBtns.length; i++) {
    preBtns[i].addEventListener('click', (e) => {
        e.preventDefault();

        for (let j = 0; j < preBtns.length; j++) {
            preOrder[j].classList.remove('active');

        }
        preOrder[i].classList.add('active');
    });

}

let fixedHead = document.querySelector('.fixed_head');
let fixedEl = document.querySelector('.fixed-element');

if (fixedHead) {
    fixedHead.addEventListener('click', () => {
        if (fixedEl.classList.contains('active')) {
            fixedEl.classList.remove('active')
        } else {
            fixedEl.classList.add('active')
        }
    })
}



// Send data from  pages
document.addEventListener('DOMContentLoaded', () => {
    const formButton = document.querySelector('.form_btn');

    if (formButton) {
        formButton.addEventListener('click', sendForm);
    }
});

function sendForm() {
    const model = document.getElementById("model-select")?.value;
    const diler = document.getElementById("diler-select")?.value;
    const name = document.getElementById("crm-name")?.value;
    const phone = document.getElementById("crm-phone")?.value;
    const radio = document.querySelector('input[name="individual"]:checked') ? "Физическое лицо" : "Юридическое лицо";

    if (!model || !diler || !name || !phone) {
        alert("Заполните все поля!");
        return;
    }

    const templateParams = {
        model: model,
        diler: diler,
        name: name,
        phone: phone,
        radio: radio
    };

    emailjs.send('service_6tmu039', 'template_38ss1ii', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Форма отправлена успешно!');
        }, function (error) {
            console.log('FAILED...', error);
            alert('Произошла ошибка при отправке формы.');
        });
}


// let tableData = document.querySelectorAll('.table tbody tr td');

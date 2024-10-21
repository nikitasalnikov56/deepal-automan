
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',

    loop: true,
    // autoplay: true,
});
const testdriveSwiper = new Swiper('.test_drive-swiper', {
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
            if (window.innerWidth > 820) {
                headerNav.classList.add('active');
            }
            // Добавляем активные классы к header и текущему элементу меню
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




// document.querySelectorAll('.color-circle').forEach(circle => {
//     circle.addEventListener('click', () => {
//         const imgSrc = circle.getAttribute('data-img');
//         document.querySelector('.style1_bg').src = imgSrc;
//     });
// });

// document.querySelectorAll('.color-circle1').forEach(circle => {
//     circle.addEventListener('click', () => {
//         const imgSrc = circle.getAttribute('data-src');
//         document.querySelector('.style2_bg').src = imgSrc;
//     });
// });



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
        currency: 'сум',
        bookService: 'Записаться на сервис',
        warranty: 'Гарантия',
        testdrive: 'Тест-драйв',
        modelAbout: 'Подробнее',
        selectModel: ' Выберите свой автомобиль',
        configuration: 'Конфигурация',
        interior: 'Интерьер',
        exterior: 'Экстерьер',
        complection: 'Комплектации',
        titleStyle: 'Выбери свой стиль',
        preBtn: 'Предзаказ',
        preTitle: 'Автомобиль',
        preComplection: 'Комплектация',
        chooseCcomplection: '--ВЫБЕРИТЕ КОМПЛЕКТАЦИЮ',
        dilerSelect: 'ВЫБОР ДИЛЛЕРА',
        dilerTashkent: 'Ташкент',
        dilerKibrai: 'Кибрай',
        preOrderSectionTitle: 'Ваши данные',
        invidual: 'Физическое лицо',
        legal: 'Юридическое лицо',
        name: 'Имя',
        phone: 'Телефон',
        send: 'Отправить',
        inside: 'Почувствуйте себя в салоне автомобиля ↓',
        outside: 'Оцените внешний вид автомобиля не выходя из дома ↓',
        download: 'Скачать файл комплектаций',
        news: 'Новости',
        promotions: 'Акции',
        advantages: 'Преимущества',
        pressCenter: 'Пресс-центр',
        buyer: 'Покупателю',
        dataContacts: 'Где купить',
        tashkentAddress: 'Яшнабадский район, улица Махтумкули, дом 79',
        tashkentNumber: 'Номер телефона: ',
        serviceRequest: 'Причина обращения',
        carMileage: 'Пробег',
    },

    uz: {
        company: 'Kompaniya',
        brends: 'Brendlar',
        main: 'Bosh sahifa',
        models: 'Model diapazoni',
        contacts: 'Kontaktlar',
        service: 'Xizmat',
        dealers: 'Dilerlar',
        currency: "so'mdan",
        bookService: 'Xizmatga yozilish',
        warranty: 'Kafolat',
        testdrive: 'Test-drive',
        modelAbout: 'Batafsil',
        selectModel: 'Avtomobilingizni tanlang',
        configuration: 'Konfiguratsiya',
        interior: 'Ichki',
        exterior: "Tashqi ko'rinish",
        complection: 'Variantlar',
        titleStyle: "O'z uslubingizni tanlang",
        preBtn: 'Oldindan buyurtma',
        preTitle: 'Avtomobil',
        preComplection: 'Avtomobil jihozlari',
        chooseCcomplection: '--USBUKTANI TANLAS',
        dilerSelect: 'DILER TANLASH',
        dilerTashkent: 'Toshkent',
        dilerKibrai: 'Qibray',
        preOrderSectionTitle: 'Sizning tafsilotlaringiz',
        invidual: 'Individual',
        legal: 'Yuridik shaxs',
        name: 'Ismingiz',
        phone: 'Telefon',
        send: 'Yuborish',
        inside: "O'zingizni mashina ichida his eting ↓",
        outside: "Uydan chiqmasdan mashinaning tashqi ko'rinishini baholang ↓",
        download: 'Konfiguratsiya faylini yuklab oling',
        news: 'Yangiliklar',
        promotions: 'Аksiyalar',
        advantages: 'Afzalliklari',
        pressCenter: 'Matbuot markazi',
        buyer: 'Xaridorga',
        dataContacts: 'Qayerdan sotib olish kerak',
        tashkentAddress: 'Yashnobod tumani, Mahtumkuli ko‘chasi, 79-uy',
        tashkentNumber: 'Telefon raqami: ',
        serviceRequest: "So'rov sababi",
        carMileage: 'Kilometr',
    }
};
function changeLanguage(lang) {
    // Сохраняем язык в localStorage
    if (!translations[lang]) {
        console.error(`Language '${lang}' is not supported.`);
        return; // Выход из функции, если язык не поддерживается
    }
    localStorage.setItem('language', lang);
    const pretextElement = document.querySelectorAll('.pretext');
    if (pretextElement) {
        pretextElement.forEach(el => {
            if (lang === 'uz') {
                el.style.display = 'none';

            } else {
                el.style.display = ''; // Восстанавливаем отображение для других языков
            }

        })

    }
    // Меняем текст на странице
    let company = document.querySelector('.brands[data-model-company]');
    if (company) {
        company.textContent = translations[lang].company;
    }
    let brands = document.querySelector('.brands[data-model-brends]');
    if (brands) {
        brands.textContent = translations[lang].brends;
    }

    let promotions = document.querySelector('[data-promotions]');
    if (promotions) {
        promotions.textContent = translations[lang].promotions;
    }
    let advantages = document.querySelector('[data-advantages]');
    if (advantages) {
        advantages.textContent = translations[lang].advantages;
    }
    let pressCenter = document.querySelector('[data-pressCenter]');
    if (pressCenter) {
        pressCenter.textContent = translations[lang].pressCenter;
    }
    let buyer = document.querySelector('[data-buyer]');
    if (buyer) {
        buyer.textContent = translations[lang].buyer;
    }
    let dataContacts = document.querySelector('[data-whereBuy]');
    if (dataContacts) {
        dataContacts.textContent = translations[lang].dataContacts;
    }
    let serviceRequest = document.querySelector('[data-service-request]');
    if (serviceRequest) {
        serviceRequest.textContent = translations[lang].serviceRequest;
    }
    let carMilliage = document.querySelector('[data-milliage]');
    if (carMilliage) {
        carMilliage.textContent = translations[lang].carMileage;
    }
    let currency = document.querySelectorAll('.currency[data-currency]');
    if (currency) {
        currency.forEach(el => {
            el.textContent = translations[lang].currency;
        });

    }
    let tashkentAddress = document.querySelector('[data-tashkent-address]');
    if (tashkentAddress) {

        tashkentAddress.textContent = translations[lang].tashkentAddress;


    }
    let tashkentNumber = document.querySelector('[data-tashkent-number]');
    if (tashkentNumber) {

        tashkentNumber.textContent = translations[lang].tashkentNumber;


    }
    let news = document.querySelectorAll('[data-news]');
    if (news) {
        news.forEach(el => {
            el.textContent = translations[lang].news;
        });

    }
    let perOrder = document.querySelectorAll('[data-preorder]');
    if (perOrder) {
        perOrder.forEach(el => {
            el.textContent = translations[lang].preBtn;
        });

    }


    let dealers = document.querySelector('[data-dilers]');
    if (dealers) {
        dealers.textContent = translations[lang].dealers;
    }

    let testDrive = document.querySelector('[data-test-drive]');
    if (testDrive) {
        testDrive.textContent = translations[lang].testdrive;
    }
    let contactTitle = document.querySelector('.contact_title[data-contacts]');
    if (contactTitle) {
        contactTitle.textContent = translations[lang].contacts;
    }


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
    document.querySelectorAll('[data-service]').forEach(el => {
        el.textContent = translations[lang].service;
    });
    document.querySelectorAll('.nav-link[data-dealers]').forEach(el => {
        el.textContent = translations[lang].dealers;
    });
    document.querySelectorAll('[data-book-service]').forEach(el => {
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

    document.querySelectorAll('.main_list-item-link[data-model-configuration]').forEach(el => {
        el.textContent = translations[lang].configuration;
    });
    document.querySelectorAll('.main_list-item-link[data-model-interior]').forEach(el => {
        el.textContent = translations[lang].interior;
    });
    document.querySelectorAll('.main_list-item-link[data-model-exterior]').forEach(el => {
        el.textContent = translations[lang].exterior;
    });
    document.querySelectorAll('.main_list-item-link[data-model-complection]').forEach(el => {
        el.textContent = translations[lang].complection;
    });
    document.querySelectorAll('[data-model-complection]').forEach(el => {
        el.textContent = translations[lang].complection;
    });
    document.querySelectorAll('.main_style-title[data-model-titleStyle]').forEach(el => {
        el.textContent = translations[lang].titleStyle;
    });
    document.querySelectorAll('.style_pre-btn[data-model-preBtn]').forEach(el => {
        el.textContent = translations[lang].preBtn;
    });
    document.querySelectorAll('.preOrder-section-title[data-model-preTitle]').forEach(el => {
        el.textContent = translations[lang].preTitle;
    });
    document.querySelectorAll('.data-model-preComplection[data-model-preComplection]').forEach(el => {
        el.textContent = translations[lang].preComplection;
    });
    document.querySelectorAll('.data-model-choose-complection[data-model-choose-complection]').forEach(el => {
        el.textContent = translations[lang].chooseCcomplection;
    });
    document.querySelectorAll('.diler_select[data-model-diler]').forEach(el => {
        el.textContent = translations[lang].dilerSelect;
    });
    document.querySelectorAll('[data-model-tashkent]').forEach(el => {
        el.textContent = translations[lang].dilerTashkent;
    });
    document.querySelectorAll('.kibrai-diler[data-model-kibrai]').forEach(el => {
        el.textContent = translations[lang].dilerKibrai;
    });
    document.querySelectorAll('.preOrder-section-title[data-model-preOrder-section-title]').forEach(el => {
        el.textContent = translations[lang].preOrderSectionTitle;
    });
    document.querySelectorAll('.radio-label[data-model-invidual]').forEach(el => {
        el.textContent = translations[lang].invidual;
    });
    document.querySelectorAll('.radio-label[data-model-legal]').forEach(el => {
        el.textContent = translations[lang].legal;
    });
    document.querySelectorAll('.input-label[data-name]').forEach(el => {
        el.textContent = translations[lang].name;
    });
    document.querySelectorAll('.input-label[data-phone]').forEach(el => {
        el.textContent = translations[lang].phone;
    });
    document.querySelectorAll('.form_btn[data-send]').forEach(el => {
        el.textContent = translations[lang].send;
    });
    document.querySelectorAll('.interior_title[data-model-interior]').forEach(el => {
        el.textContent = translations[lang].interior;
    });
    document.querySelectorAll('.interior_title[data-model-exterior]').forEach(el => {
        el.textContent = translations[lang].exterior;
    });
    document.querySelectorAll('.interior1 span[data-model-inside]').forEach(el => {
        el.textContent = translations[lang].inside;
    });
    document.querySelectorAll('.interior1 span[data-model-outside]').forEach(el => {
        el.textContent = translations[lang].outside;
    });
    document.querySelectorAll('[data-model-download]').forEach(el => {
        el.textContent = translations[lang].download;
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
let preOrderBtn = document.querySelector('.pre_order-btn');
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

// ******************

let isSending = false; // Глобальная переменная для отслеживания состояния отправки

window.onload = function () {
    const firstCircle1 = document.querySelector('#style1 .color-circle');
    const firstCircle2 = document.querySelector('#style2 .color-circle1');
    const firstCircle3 = document.querySelector('#style3 .color-circle1');

    if (firstCircle1) {
        firstCircle1.classList.add('selected'); // Добавляем selected для первого цвета в style1
        document.querySelector('.style1_bg').src = firstCircle1.getAttribute('data-img'); // Меняем картинку
    }

    if (firstCircle2) {
        firstCircle2.classList.add('selected'); // Добавляем selected для первого цвета в style2
        document.querySelector('.style2_bg').src = firstCircle2.getAttribute('data-src'); // Меняем картинку
    } 
    if (firstCircle3) {
        firstCircle3.classList.add('selected'); // Добавляем selected для первого цвета в style2
        document.querySelector('.style3_bg').src = firstCircle3.getAttribute('data-src'); // Меняем картинку
    }
};
const colorNames = {
    "#FFFFFF": "Белый",
    "#A7BBBE": "Светло-серый",
    "#1F2632": "Темно-синий",
    "#485059": "Темно-серый",
    "#B8C86E": "Оливковый",
    "#CD7161": "Красный",
    "#091D37": "Темно-синий",
    "#506D6F": "Серый",
    "#3E4247": "Графитовый",
    "#E6E8EA": "Серебристый",
    "#1C1F22": "Черный"
};
function rgbToHex(rgb) {
    const result = rgb.match(/\d+/g);
    return result ? `#${((1 << 24) + (parseInt(result[0]) << 16) + (parseInt(result[1]) << 8) + parseInt(result[2]))
        .toString(16)
        .slice(1)
        .toUpperCase()}` : rgb;
}

// Функция для получения названия цвета по hex
function getColorName(hex) {
    return colorNames[hex] || "Цвет не найден"; // Если цвет не найден в списке, вернем дефолтное сообщение
}
// Функция для получения выбранного цвета
function getSelectedColor(wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    console.log("Wrapper ID:", wrapperId, "Found:", !!wrapper); // Логируем, что wrapper найден
    if (!wrapper) {
        console.log("Контейнер с ID " + wrapperId + " не найден");
        return 'Цвет не выбран'; // Если контейнер не найден, возвращаем текст
    }

    // В зависимости от того, какой это блок (style1 или style2), ищем выбранный цвет
    const selectedCircle = wrapper.querySelector('.color-circle.selected, .color-circle1.selected');
    console.log("Selected Circle:", selectedCircle);
    const rgbColor = selectedCircle ? selectedCircle.style.backgroundColor : null;
    const hexColor = rgbColor ? rgbToHex(rgbColor) : null;
    const colorName = hexColor ? getColorName(hexColor) : 'Цвет не выбран';
    console.log("Selected Color:", colorName); // Логируем цветовое название
    return colorName;
}

async function sendForm(formNumber, wrapperId) {
    if (isSending) return; // Если уже идет отправка, выходим из функции
    isSending = true; // Устанавливаем состояние отправки в true

    console.log("Отправляем форму с номером:", formNumber, "и ID контейнера:", wrapperId); // Логируем номер формы и ID

    const button = document.getElementById(`submitButton${formNumber}`);
    button.disabled = true; // Отключаем кнопку после первого нажатия

    const model = document.getElementById(`model-select-${formNumber}`).value;
    const dilerValue = document.getElementById(`diler-select-${formNumber}`).value;

    // Преобразуем значение дилера в более читаемое
    const diler = dilerValue === 'tashkent-diler' ? 'Ташкент' :
        dilerValue === 'kibrai-diler' ? 'Кибрай' :
            'Не выбрано';

    // Получаем выбранное значение радио-кнопки для данной формы
    const entityType = document.querySelector(`input[name="entity_type_${formNumber}"]:checked`);

    // Преобразуем тип в более читаемое значение
    const type = entityType ? (entityType.value === '2' ? 'Физическое лицо' : 'Юридическое лицо') : 'Не выбрано';

    const name = document.getElementById(`crm-name-${formNumber}`).value;
    const phone = document.getElementById(`crm-phone-${formNumber}`).value;

    // Получаем выбранный цвет для данного блока
    const selectedColor = getSelectedColor(wrapperId);
    console.log("Выбранный цвет:", selectedColor); // Логируем выбранный цвет
    // Собираем сообщение
    const message = `Предзаказ:\n\n` +
        `Комплектация: ${model}\n` +
        `Дилер: ${diler}\n` +
        `Тип: ${type}\n` + // Используем преобразованное значение типа
        `Имя: ${name}\n` +
        `Телефон: ${phone}\n` +
        `Цвет: ${selectedColor}`; // Добавляем информацию о цвете

    const token = '7580810012:AAEWjuksO8A8s6Fk6oar3CVsx0eUNhNfSE8'; // Ваш токен API бота
    const chatId = '-1002361522963'; // Ваш chat_id

    // Отправляем данные на Telegram
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.ok) {
            alert('Ваши данные отправлены!');
        } else {
            alert('Ошибка отправки данных: ' + data.description);
        }
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз.');
    } finally {
        button.disabled = false; // Включаем кнопку обратно
        isSending = false; // Сбрасываем состояние отправки
    }
}

// Обработчик для первого набора цветов и смены картинки
document.querySelectorAll('.color-circle').forEach(circle => {
    circle.addEventListener('click', () => {
        const imgSrc = circle.getAttribute('data-img');
        document.querySelector('.style1_bg').src = imgSrc;

        // Удаляем класс "selected" у всех кругов и добавляем его к текущему
        document.querySelectorAll('#style1 .color-circle').forEach(c => c.classList.remove('selected'));
        circle.classList.add('selected');
    });
});

// Обработчик для второго набора цветов и смены картинки
document.querySelectorAll('.color-circle1').forEach(circle => {
    circle.addEventListener('click', () => {
        const imgSrc = circle.getAttribute('data-src');
        document.querySelector('.style2_bg').src = imgSrc;

        // Удаляем класс "selected" у всех кругов и добавляем его к текущему
        document.querySelectorAll('#style2 .color-circle1').forEach(c => c.classList.remove('selected'));
        circle.classList.add('selected');
    });
});
document.querySelectorAll('#style3 .color-circle1').forEach(circle => {
    circle.addEventListener('click', () => {
        const imgSrc = circle.getAttribute('data-src');
        document.querySelector('.style2_bg').src = imgSrc;
        document.querySelectorAll('#style3 .color-circle1').forEach(c => c.classList.remove('selected'));
        circle.classList.add('selected');
    });
});


//зеленые ячейки в таблице
const cells = document.querySelectorAll('table td');

// Проходим по каждой ячейке и проверяем содержимое

cells.forEach(cell => {
    if (cell.textContent.includes('√')) { // Проверяем, содержит ли ячейка символ "√"
        const content = cell.textContent; // Получаем содержимое ячейки
        const updatedContent = content.replace(/√/g, '<span style="color: #0df10d;">√</span>'); // Заменяем "√" на зеленый
        cell.innerHTML = updatedContent; // Обновляем содержимое ячейки
    }
});

// mobile menu
let menu = document.querySelector('.mobile_menu');
let navList = document.querySelector('.nav_list');

if (menu) {
    menu.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            navList.classList.remove('active');
        } else {
            menu.classList.add('active');
            navList.classList.add('active');
        }
    });
}

let isSendingNewForm = false; // Глобальная переменная для отслеживания состояния отправки новой формы

async function sendNewForm(newFormNumber) {
    if (isSendingNewForm) return; // Если уже идет отправка, выходим из функции
    isSendingNewForm = true; // Устанавливаем состояние отправки в true

    const newButton = document.getElementById(`submitButton${newFormNumber}`);
    newButton.disabled = true; // Отключаем кнопку после первого нажатия

    // Получаем значения формы
    const newModel = document.getElementById(`model-select-${newFormNumber}`).value;
    const newDilerValue = document.getElementById(`diler-select-${newFormNumber}`).value;

    // Преобразуем значение дилера в более читаемое
    const newDiler = newDilerValue === 'tashkent-diler' ? 'Ташкент' :
        newDilerValue === 'kibrai-diler' ? 'Кибрай' :
            'Не выбрано';

    // Получаем выбранное значение радио-кнопки для данной формы
    const newEntityType = document.querySelector(`input[name="entity_type_${newFormNumber}"]:checked`);

    // Преобразуем тип в более читаемое значение
    const newType = newEntityType ? (newEntityType.value === '2' ? 'Физическое лицо' : 'Юридическое лицо') : 'Не выбрано';

    const newName = document.getElementById(`crm-name-${newFormNumber}`).value;
    const newPhone = document.getElementById(`crm-phone-${newFormNumber}`).value;

    // Получаем данные из textarea
    const newReason = document.getElementById('form_request').value || 'Не указана';
    const newMileage = document.querySelector('.input_model').value || 'Не указан';

    // Собираем сообщение
    const newMessage = `Запись на сервис:\n\n` +
        `Комплектация: ${newModel}\n` +
        `Дилер: ${newDiler}\n` +
        `Тип: ${newType}\n` +
        `Имя: ${newName}\n` +
        `Телефон: ${newPhone}\n` +
        `Причина обращения: ${newReason}\n` +
        `Пробег: ${newMileage}`;

    const newToken = '7580810012:AAEWjuksO8A8s6Fk6oar3CVsx0eUNhNfSE8'; // Ваш токен API бота
    const newChatId = '-1002361522963'; // Ваш chat_id

    // Отправляем данные на Telegram
    const newUrl = `https://api.telegram.org/bot${newToken}/sendMessage?chat_id=${newChatId}&text=${encodeURIComponent(newMessage)}`;

    try {
        const newResponse = await fetch(newUrl);
        const newData = await newResponse.json();
        if (newData.ok) {
            alert('Ваши данные отправлены!');
        } else {
            alert('Ошибка отправки данных: ' + newData.description);
        }
    } catch (newError) {
        console.error('Ошибка:', newError);
        alert('Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз.');
    } finally {
        newButton.disabled = false; // Включаем кнопку обратно
        isSendingNewForm = false; // Сбрасываем состояние отправки
    }
}

let isSendingNew = false;

async function sendNewForm(formNumber) {
    if (isSendingNew) return;
    isSendingNew = true;

    const button = document.getElementById(`submitButton${formNumber}`);
    button.disabled = true;

    // Получаем значения формы
    const newModel = document.getElementById(`model-select-${formNumber}`).value;
    const newDilerValue = document.getElementById(`diler-select-${formNumber}`).value;
    const newDiler = newDilerValue === 'tashkent-diler' ? 'Ташкент' : newDilerValue === 'kibrai-diler' ? 'Кибрай' : 'Не выбрано';
    const newEntityType = document.querySelector(`input[name="entity_type_${formNumber}"]:checked`);
    const newType = newEntityType ? (newEntityType.value === '2' ? 'Физическое лицо' : 'Юридическое лицо') : 'Не выбрано';
    const newName = document.getElementById(`crm-name-${formNumber}`).value;
    const newPhone = document.getElementById(`crm-phone-${formNumber}`).value;

    // Получаем значения даты и времени тест-драйва
    const testDriveDate = document.getElementById('test-drive-date').value;
    const testDriveTime = document.getElementById('test-drive-time').value;

    // Собираем сообщение
    const newMessage = `Запись на тест-драйв:\n\n` +
    `Здравствуйте, запишите меня пожалуйста на Test-Drive\n`+
        `Автомобиль: ${newModel}\n` +
        `Дилер: ${newDiler}\n` +
        `Тип: ${newType}\n` +
        `Имя: ${newName}\n` +
        `Телефон: ${newPhone}\n` +
        `Дата тест-драйва: ${testDriveDate}\n` +
        `Время тест-драйва: ${testDriveTime}`;

    const token = '7580810012:AAEWjuksO8A8s6Fk6oar3CVsx0eUNhNfSE8';
    const chatId = '-1002361522963';

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(newMessage)}`;

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
        button.disabled = false;
        isSendingNew = false;
    }
}



// chat_id: -1002361522963
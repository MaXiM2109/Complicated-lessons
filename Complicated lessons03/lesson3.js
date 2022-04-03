let lang = prompt('Какой язык предпочитаете?', 'ru');

if (lang === 'ru') {
    console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
} else if (lang === 'en') {
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
} else {
    console.log('Я не знаю такого языка. Моя твоя не понимать)');
}

switch (lang) {
    case 'ru':
        console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
        break;
    case 'en':
        console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
        break;
    default:
        console.log('Я не знаю такого языка. Моя твоя не понимать)');
}

let langArr = [];
langArr.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
langArr.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(langArr[lang]);

const namePerson = prompt('Как вас зовут?', 'Максим');
console.log((namePerson === 'Артем') ? 'директор' :(namePerson === 'Максим') ? 'преподаватель' :'студент');
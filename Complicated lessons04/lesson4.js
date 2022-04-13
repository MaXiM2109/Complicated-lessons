'use strict';

let rez=prompt('Введите текст...','Гуляй шальная, императрица)');

const f = (arg) => {
    if (typeof arg === "string") {
        const max = 30;
        const str = arg.trim();
        if (str.length > max) {
            rez = str.substring(0,max) + '...';
        } else {
            rez = str;
        }
    }
    return rez;
};


console.log(f(rez));

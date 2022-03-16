const num = 266219;
console.log("Переменная:",num);//ввод переменной
console.log("Проверка типа данных переменной: ",typeof(num));//вывод типа данных

numSTR = String(num);// преобразование number в string
console.log("Проверка преобразованного типа данных переменной:",typeof(numSTR));//вывод типа данных

let rez = 1;//умножение цыфр числа между собой
for(let i = 0; i <= numSTR.length-1; i++){
  rez = rez * Number(numSTR[i]) 
}
console.log("Полученный результат произведения цыфр числа:",rez);//вывод полученного значения
console.log("Проверка типа данных результата:",typeof(rez));//вывод типа данных

console.log('Результат возведения в 3 степень:',degree=rez**3); 

console.log("Первые 2 цыфры данного числа:",String(degree).slice(0,2));



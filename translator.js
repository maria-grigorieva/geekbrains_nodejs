// Создать переводчик слов с английского на русский, который будет обрабатывать входящие GET запросы и возвращать ответы,
// полученные через API Яндекс.Переводчика. 

// http://api.yandex.ru/key/form.xml?service=trnsl 
// https://translate.yandex.net/api/v1.5/tr.json/translate?key={сюда-подставить- ключ}&lang=ru-en

var urlutils = require('url');
var request = require('request');
const key = '<API_KEY>';

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout

});

rl.question('Введите слово для перевода:', word => {
	request(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${word}&lang=en-ru&format=html`, function(error, response, body) {
		console.dir(body);
	});
	rl.close();
});


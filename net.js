// неудобный - лучше не использовать
const https = require('https');
const http = require('http');

https.get('https://geekbrains.ru', res => {
	console.log('Response:', res.statusCode);
}).on('error', error => console.error);


// универсальный, широко используется
const request = require('request');

// цикломатическая сложность - кол-во способов, с помощью которых можно вызвать одну и ту же функцию
// самая высокая цикломатическая сложность - ajax в jquery (около 15 способов вызова)
// request - тоже обладает высокой цикломатической сложностью 

request('https://geekbrains.ru', (err, response, body) => {
	if (!err && response.statusCode === 200) {
		console.log(body);
	}	
});

// отправка почты nodemailer
const nodemailer = require('nodemailer');
smtpTransport = nodemailer.createTransport('smtp', {
	service: 'Gmail', 
	auth: {
		user: 'magsend@gmail.com',
		pass: 'pass'
	}
});

smtpTransport.sendMail({
	from: 'Maria Grigorieva',
	subject: 'test from GeekGrains', 
	to: 'magsend@gmail.com', 
	text: 'This is a test message, send from NodeJS program!'
}, (err, response) => {
	if (err) {
		throw error
	}
	smtpTransport.close();
});






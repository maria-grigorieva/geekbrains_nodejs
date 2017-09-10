const argv = require('minimist')(process.argv.slice(2));

console.log(argv);

console.log(process.env);

console.log('111', '222');
console.error('111', '222');

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout

});

rl.on('line', cmd => {
	console.log(`You input: ${cmd}`);
	rl.close();
}); 

rl.question('Input your name:', name => {
	console.log(`Hi, ${name}`);
});
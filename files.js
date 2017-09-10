const fs = require('fs');

// fs.readFile(filename, [options], callback)
// fs.writeFile(filname, data, [options], callback)
// fs.appendFile(filename, data, [options], callback)
// *Sync

fs.readFile('./package.json', (err, data) => {
if (err) throw err;
	console.log('data :', data.toString());
});

// encoding --- iconv

// better not to use Sync mode, because the syncronize procedures 
// are blocking all other commands
const data = fs.readFileSync('./package.json');
console.log('data:', data.toString());


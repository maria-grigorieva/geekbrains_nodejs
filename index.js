const ansi = require('ansi');
const cursor = ansi(process.stdout);
var csv = require('csv');

cursor.beep();

cols = [ ["\x1b[31m","\x1b[39m"], ["\x1b[32m","\x1b[39m"], ["\x1b[34m","\x1b[49m"] ];
var index = 0; 
for (index = 0; index < cols.length; index++ ) {
	(function(i) {
		csv.generate({seed: 1, columns: 2, length: 20}, function(err, data){
		  csv.parse(data, function(err, data){
		    csv.transform(data, function(data){
		      return data.map(function(value){return value.toUpperCase()});
		    }, function(err, data){
			      	csv.stringify(data, function(err, data){
				      	var lines = data.split('\n'); 
				      	for (var j=0; j<lines.length; j++) {
				        	console.log(cols[i][0]+lines[j]+cols[i][1]);
				      	}
			     	});
		   		 });
		 	});
		 });
	})(index)
}


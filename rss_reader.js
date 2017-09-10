var request = require('request'); 
var cheerio = require('cheerio'); 
 
request('http://rss.cnn.com/rss/edition.rss', function (error, response, body) {    
	if (!error && response.statusCode == 200) { 
   		const $ = cheerio.load(body);
   		$('item title').each(function(i ,element) {
   			console.dir($(this).text().replace('<![CDATA[','').replace(']]',''));
   		});
  } 
}); 
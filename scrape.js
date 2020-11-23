const request = require('request');
const cheerio = require('cheerio');

request('https://fieldskjellerup.github.io/index.html',(error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html); 

        const quote = $('.quote');

        console.log(quote)
    } 
});
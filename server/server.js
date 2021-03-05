let path = require('path');
let fs = require('fs');
let request = require('request');

let dataPath = (path.join(__dirname, '../date.json'));

request('https://reddit.com/r/popular.json', (err, res, body) => {
    
    if(err) console.log(err);

    fs.writeFile(dataPath, red.body, err => {
        if(err) console.log(err);
    });

});
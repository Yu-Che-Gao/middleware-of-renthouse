const request = require('request');

exports.insertDB = function (url, phone, urlId, res) {
    request.post({
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: 'http://x.rce.tw/s/h3584935/insert_url_and_phone.php',
        body: 'url=' + url + '&phone=' + phone + '&url_id=' + urlId
    }, function (error, response, body) {
        let bodyParser = JSON.parse(body);
        switch (bodyParser.result) {
            case '1':
                console.log('code 1: database has the same data.');
                selectDBByPhone(phone, res);
                break;
            case '2':
                console.log('code 2: start to send request to disqus.');
                selectDBByPhone(phone, res);
                break;
            case '3':
                console.log('code 3: database problem occurs.');
                break;
        }
    });
}

function sendDisqus(str) {
    console.log(str);
}

function selectDBByPhone(phone, res) {
    request.post({
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: 'http://x.rce.tw/s/h3584935/select_where_phone.php',
        body: 'phone=' + phone
    }, function (error, response, body) {
        let bodyParser = JSON.parse(body);
        let urlArray = new Object();
        for (let i = 0; i < bodyParser.length; i++) {
            urlArray[i].url = bodyParser[i].url;
        }

        selectDisqus(urlArray, res);
    });
}

function selectDisqus(urlArray, res) {
    request.post({
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: 'http://disqus-crawler.azurewebsites.net/listThreads',
        body: 'urlJSON=' + JSON.stringify(urlArray)
    }, function (error, response, body) {
        res.send(body);
    });
}
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
                selectDBByPhone(phone);
                break;
            case '2':
                console.log('code 2: start to send request to disqus.');
                selectDBByPhone(phone);
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

function selectDBByPhone(phone) {
    request.post({
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url: 'http://x.rce.tw/s/h3584935/select_where_phone.php',
        body: 'phone=' + phone
    }, function (error, response, body) {
        let bodyParser = JSON.parse(body);
        for (let i = 0; i < bodyParser.length; i++) {
            console.log(bodyParser[i].url);
            //selectDisqus(bodyParser[i].url);
        }
    });
}

function selectDisqus(url) {
     //TODO: 去disqus把所有討論串爬回來
}
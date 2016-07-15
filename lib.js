exports.insertDB=function(url, phone, urlId) {
  request.post({
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: 'http://x.rce.tw/s/h3584935/insert_url_and_phone.php',
    body: 'url=' + url + '&phone=' + phone + '&url_id=' + urlId
  }, function (error, response, body) {
    let bodyParser=JSON.parse(body);
    switch(bodyParser.result){
        case 1:
            console.log('code 1: database has the same data.');
            break;
        case 2:
            console.log('code 2: start to send request to disqus.');
            //TODO: 查出所有有相童手機的人
            //TODO: 去disqus把所有討論串爬回來
            break;

        case 3:
            console.log('code 3: database problem occurs.');
            break;
    }
  });
}

function sendDisqus(str) {
    console.log(str);
}
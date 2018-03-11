/**
 * Make a X-Domain request to url and callback.
 *
 * @param url {String}
 * @param method {String} HTTP verb ('GET', 'POST', 'DELETE', etc.)
 * @param data {String} request body
 * @param callback {Function} to callback on completion
 * @param errback {Function} to callback on error
 */

 //let data = {id:"2",name:"simone",company:"thinkweb",cost:"null"};
 var data = {xid: "1", name: "Marie", company: "thinkweb", cost: "zero"};
console.log(data);

xdr('http://web-api.swestphal.net/check.php','POST',data,onDone,onError);

//xdr('http://web-api.swestphal.net/check.php','GET',data,onDone,onError);

function onDone() {
    console.log("ok");
}

function onError() {
    console.log("fail");
}


function xdr(url, method, data, callback, errback) {
    var req;
    
    if(XMLHttpRequest) {
        req = new XMLHttpRequest();

        if('withCredentials' in req) {
            req.open(method, url, true);
            req.onerror = errback;
            req.onreadystatechange = function() {
                if (req.readyState === 4) {
                    if (req.status >= 200 && req.status < 400) {
                        callback(req.responseText);
                    } else {
                        errback(new Error('Response returned with non-OK status'));
                    }
                }
            };
            req.send(data);
        }
    } else if(XDomainRequest) {
        req = new XDomainRequest();
        req.open(method, url);
        req.onerror = errback;
        req.onload = function() {
            callback(req.responseText);
        };
        req.send(data);
    } else {
        errback(new Error('CORS not supported'));
    }
}
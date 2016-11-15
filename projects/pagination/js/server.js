var http = require("http");
var url = require("url");

function onRequest(request, response) {
  var params = getPageParams(url.parse(request.url).search);
  //console.log(JSON.stringify(params));
  response.writeHead(200, {"Content-Type": "application/json", 'Access-Control-Allow-Origin' : '*'});
  //console.log(JSON.stringify(findPrimes(+params.start, +params.end)));
  response.write(JSON.stringify(findPrimes(+params.start || 0, +params.end || 0)));
  response.end();
}

function getPageParams(search){
	var result = {};
	if(search){
		result = search.substr(1).split('&').map(function(pair){
			var eqIndex = pair.indexOf('=');
			if(~eqIndex)
				return{
					key: pair.substr(0, eqIndex),
					value: pair.substr(eqIndex + 1)
				}
			else
				return {
					key: pair,
					value: null
				}
		}).reduce(function(result, kv){
			if(kv.key in result){
				if(result[kv.key] instanceof Array)
					result[kv.key].push(kv.value);
				else
					result[kv.key] = [result[kv.key], kv.value];
			}else
				result[kv.key] = kv.value;
			return result;
		}, {});
	}
	return result;
}

function findPrimes(start, end){
	var result = [];
	for(var i = start; i < end; ++i){
		if(isPrime(i))
			result.push(i);
	}
	return result;
}

function isPrime(p){
  if(p % 1) return false;
  if(p < 9)
  	return p == 2 || p == 3 || p == 5 || p == 7;
  if(!(p & 1)) return false;
  var l = Math.floor(Math.sqrt(p));
  for(var i = 3; i <= l; i += 2)
  	if(p % i == 0){
    	return false;
    }
  return true;
}

http.createServer(onRequest).listen(8888);
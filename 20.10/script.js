function getPageParams(){
	var search = location.search,
		result = {};
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

$(document).ready(function(){
	var example = $('#example');
	var saveButton = $('#save');

	example.val(sessionStorage.getItem("example") || "");

	saveButton.click(function(){
		sessionStorage.setItem("example", example.val());
	});
})
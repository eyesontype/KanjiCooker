if(window.navigator.userAgent.match(/MSIE\s8\.0/) != null){
	var urls = new Array("/ie8/01.html", "/ie8/02.html");
	window.location.href = urls[Math.floor(urls.length*Math.random())];
}

var body = document.getElementsByTagName('body')[0];
var $body = $(body);

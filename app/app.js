var http = require('http');

var myServer = http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write("<b>Hola que tal como estamos</b>");
	response.end();
});

myServer.listen(3000, function(){
	console.log("Se ha iniciado el servidor en ip " + this.address().address + " por el puerto " + this.address().port);
});
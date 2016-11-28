var http = require('http');

var file_content ;



var fs = require('fs');


console.log(__dirname);

var filename = __dirname + '\\index.html';
console.log(filename);


fs.readFile(filename,'utf8', function(err, content) {
    if (err) {
        console.log('Failed to read');
        return;
    }
    console.log(content);
    file_content = content;

});




var server = http.createServer(function(req,res){
     res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello World\n');
 
    var a = Math.random()*100;
    res.write(a+'\n');
    var b = Math.random()*100;
    res.write(b+'\n');
    res.write(file_content);
    res.write('\n');
    res.end('END');

  
  
});

server.listen(2222);
console.log('Server running at http://127.0.0.1:2222/');
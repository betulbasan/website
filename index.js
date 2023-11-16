// request - response => server
// require kütüphaneyi projeye dahil eder
// node modules http,fs,os

var http = require("http");
var fs = require("fs"); 
// file system dosya ile çalışırken dosya okuma, silme, isim değiştirme gibi temel işlemler
 
var server = http.createServer((req, res) => {
    if(req.url == "/"){
        fs.readFile("index.html", (err,html) => {
            res.write(html);
            res.end();
        });
        
    } else if(req.url == "/products"){
        fs.readFile("urunler.html", (err,html) => {
            res.write(html);
            res.end();
        });
    }else{
        fs.readFile("404.html", (err,html) => {
            res.write(html);
            res.end();
        });
    }
    
});

//belirli bir port altında hizmete açma
server.listen(3000, () => {
    console.log("node.js server at port 3000");
});
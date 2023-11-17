const mysql = require("mysql2"); //kütüphaneyi tanımladık

const config = require("../config"); // index ve config aynı sırada olduğu için ./ yeterli oldu. bir üste çıkmak için başa bir nokta daha koymak gerekli



// veri tabanı bağlantısını yapıyoruz
// bağlantı kurma methodu
let connection = mysql.createConnection(config.db); 
// connection üzerinden connect methodunu çağırıyoruz
connection.connect(function(err) { //hata verme durumu için
    if (err){
        console.log(err);
    }
    /*connection.query("select * from products", function(err, result){
        console.log(result);
    });*/
    // sorguyu yukarıdaki gibi yazmak yerine
    console.log("mysql baglantisi yapildi");
});

module.exports = connection.promise(); // dışarıya açıyoruz
// promise döndürmesini istiyoruz çünkü sorguları then catch mantığı ile yapacağız. 
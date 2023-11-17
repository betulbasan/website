// request - response => server
// require kütüphaneyi projeye dahil eder
// node modules http,fs,os 
// file system dosya ile çalışırken dosya okuma, silme, isim değiştirme gibi temel işlemler
// belirli bir port altında hizmete açma server listen

const express = require("express"); //kütüphaneyi alıyoruz. kütüphane üzerinden uygulama oluşturacağız.
const app = express(); 

app.set("view engine","ejs");
app.use(express.static('public')); //dışarı açma işlemi 
app.use(express.static('node_modules')); //bu dosya altındaki herhangi bir klasöre erişebilmek için

const data = [
    {id: 1, name: "iphone 14", price:40000, isActive:true, imageUrl: "1.jpeg" },
    {id: 2, name: "iphone 15", price:50000, isActive:true, imageUrl: "2.jpeg" },
    {id: 3, name: "iphone 16", price:60000, isActive:false,imageUrl: "3.jpeg" },
    {id: 4, name: "iphone 17", price:70000, isActive:true,imageUrl: "4.jpeg" }
];

// routes
// kriterler :price gibi eklenmeye devam edebilir
app.use("/products/:id", function(req, res){
    const urun = data.find(u => u.id == req.params.id);
    res.render("product-details", urun);
});
//sıralama önemli yukarıdan aşağı okuyor. ilk karşılaşılan değer "/" olursa tüm sayfalarda anasayfayı çağırır. en özelini en yukarı yazmalıyız.
app.use("/products", function(req, res){
    res.render("products", {//bir obje içerisine bunları paketliyor olmak gerekiyor. ikinci bir parametre olarak yazıyoruz
        urunler: data //datanın kendisi liste bu yüzden obje içine aldı urunlerin içine 
    });
});
//middle değer
// uygulama "/" dediğinde ana dizine gidecek
app.use("/", function(req, res){
    res.render("index");
});

app.listen(3000, () => {
    console.log("listening on port 3000 ")
});
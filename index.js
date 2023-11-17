// request - response => server
// require kütüphaneyi projeye dahil eder
// node modules http,fs,os 
// file system dosya ile çalışırken dosya okuma, silme, isim değiştirme gibi temel işlemler
// belirli bir port altında hizmete açma server listen

const express = require("express"); //kütüphaneyi alıyoruz. kütüphane üzerinden uygulama oluşturacağız.
const app = express(); 
const userRoutes = require("./routes/users");

app.set("view engine","ejs");
app.use(express.static('public')); //dışarı açma işlemi 
app.use(express.static('node_modules')); //bu dosya altındaki herhangi bir klasöre erişebilmek için
app.use(userRoutes);

/* const data = [
    {id: 1, name: "iphone 14", price:40000, isHome:true, isActive:true, imageUrl: "1.jpeg" },
    {id: 2, name: "iphone 15", price:50000, isHome:false, isActive:true, imageUrl: "2.jpeg" },
    {id: 3, name: "iphone 16", price:60000, isHome:true,isActive:false,imageUrl: "3.jpeg" },
    {id: 4, name: "iphone 17", price:70000, isHome:true,isActive:true,imageUrl: "4.jpeg" }
]; */


app.listen(3000, () => {
    console.log("listening on port 3000 ")
});
const express = require('express');
const router = express.Router();
const db = require("../data/db");
// routes
// kriterler :price gibi eklenmeye devam edebilir
router.use("/products/:id", async function(req, res){
    try{
        const [product,]= await db.execute("select * from products where id=?",[req.params.id]);
        res.render("product-details", {
            urun: product[0]
        });
    }
    catch(err){
        console.log(err);
    }
});
//sıralama önemli yukarıdan aşağı okuyor. ilk karşılaşılan değer "/" olursa tüm sayfalarda anasayfayı çağırır. en özelini en yukarı yazmalıyız.
router.use("/products", async function(req, res){
    try{
        const [products,]= await db.execute("select * from products where isActive=1");
        res.render("products", {
            urunler: products
        });
    }
    catch(err){
        console.log(err);
    }
    /*res.render("products", {//bir obje içerisine bunları paketliyor olmak gerekiyor. ikinci bir parametre olarak yazıyoruz
        urunler: data //datanın kendisi liste bu yüzden obje içine aldı urunlerin içine 
    });*/
});
//middle değer
// uygulama "/" dediğinde ana dizine gidecek
router.use("/", async function(req, res){
    // async - await 
    try{
        const [products,]= await db.execute("select * from products where isHome=1 and isActive=1");
        res.render("index", {
            urunler: products
        });
    }
    catch(err){
        console.log(err);
    }
    /* db.execute("select * from products")
        .then(result => {
            console.log(result[0]);
            res.render("index",{
                urunler : result[0]
            });
        }) //başarılı bir cevap geliyorsa
        .catch(err => console.log(err)); //hatalı bir cevap geliyorsa
        //ilk yöntem burası
    */
});

module.exports = router;
const { json } = require("body-parser");
var mysql = require("./mysql")
module.exports = function (app) {

    app.get("/api/products/:maLoai", function (req, res) {
      mysql.getProduct(req.params.maLoai).then(result => {
        res.json(result[0])
      })
    });

    app.post("/api/products", function (req, res) {
        let sanPham = {...req.body};
        console.log(sanPham);
        mysql.addProduct(sanPham).then(result =>{
          res.status(201).json(result);
        })
    });
}
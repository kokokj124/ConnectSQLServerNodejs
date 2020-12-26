const mysql = require('mssql')
var config = require('./config')

async function getProduct(maLoai) {
    try {
        let pool = await mysql.connect(config);
        let product = await pool.request().input('maLoai', mysql.Int, maLoai)
        .query('SELECT * FROM SanPham where MaLoai = @maLoai');
        return product.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function addProduct(product) {
    try {
        let pool = await mysql.connect(config);
        let insertProduct = await pool.request()
            .input('MaSanPham', mysql.Int, product.MaSanPham)
            .input('MaLoai', mysql.Int, product.MaLoai)
            .input('MaThuongHieu',mysql.Int, product.MaThuongHieu)
            .input('Ten', mysql.NText, product.Ten)
            .input('BaoHanh',mysql.NVarChar, product.BaoHanh)
            .input('KhuyenMai',mysql.Int, product.KhuyenMai)
            .input('GiaBan',mysql.Float, product.GiaBan)
            .input('GiaMua',mysql.Float, product.GiaMua)
            .input('MauSac',mysql.NVarChar, product.MauSac)
            .input('Anh',mysql.NText, product.Anh)
            .input('SoLuong',mysql.Int, product.SoLuong)
            .input('TinhTrang',mysql.NVarChar, product.TinhTrang)
            .input('GhiChu',mysql.NVarChar, product.GhiChu)
            .query('INSERT INTO SanPham VALUES (@MaSanPham, @MaLoai, @MaThuongHieu, @Ten, @BaoHanh, @KhuyenMai, @GiaBan, @GiaMua, @MauSac, @Anh, @SoLuong, @TinhTrang, @GhiChu)');
        return insertProduct.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = {
    getProduct : getProduct,
    addProduct : addProduct
}
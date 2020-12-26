const config = {
    server: '127.0.0.1',
    // user: 'sa',
    // password: 'aa',
    user: 'root',
    password: '',
    database: "QuanLyBanHang",
    port: 1433,
    option:{
        trustedconnection: true,
        enableArithAort: true,
    }
}

module.exports = config
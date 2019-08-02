let mysql = require('mysql');
let db = require('../db');
let pool = mysql.createPool(db);

module.exports = {
    connPool (sql, val, cb) {
        pool.getConnection((err, connection) => {
            let q = connection.query(sql, val, (err, rows) => {
                if (err) {
                    console.log(err);
                }

                cb(err, rows);

                connection.release();
            });
        });
    },

    // json格式
    writeJson(ctx, code = 200, msg = 'ok', data = null) {
        
    }
};
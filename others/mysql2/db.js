async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://user:password@ip:port/instance");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selectCustomers() {
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM Clientes;');
    return rows;
}

module.exports = { selectCustomers }
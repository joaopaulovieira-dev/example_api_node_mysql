function execSQLQuery(sqlQry, res) {
    const connection = mysql.createConnection({
        host: 'IP ',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'instance'
    });

    connection.query(sqlQry, function (error, results, fields) {
        if (error)
            res.json(error);
        else
            res.json(results);
        connection.end();
        console.log('executou!');
    });
}

function createTable(conn) {

    const sql = "CREATE TABLE IF NOT EXISTS Clientes (" +
        "ID int NOT NULL AUTO_INCREMENT," +
        "Nome varchar(150) NOT NULL," +
        "CPF char(11) NOT NULL," +
        "PRIMARY KEY (ID)" +
        ");";

    conn.query(sql, function (error, results, fields) {
        if (error) return console.log(error);
        console.log('criou a tabela!');
    });
}

function addRows(conn) {
    const sql = "INSERT INTO Clientes(Nome,CPF) VALUES ?";
    const values = [
        ['teste1', '12345678901'],
        ['teste1', '09876543210'],
        ['teste3', '12312312399']
    ];
    conn.query(sql, [values], function (error, results, fields) {
        if (error) return console.log(error);
        console.log('adicionou registros!');
        conn.end();//fecha a conexão
    });
}
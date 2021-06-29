// Servidor da API para tratar as requisições
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');

//Função Para Executar o SLQ
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

//inicia o servidor
app.listen(port);
console.log('API On-line');

//Configurando o express para pegar POSTS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Rota default' }));
app.use('/', router);

router.get('/clientes', (req, res) => {
    execSQLQuery('SELECT * FROM Clientes', res);
})




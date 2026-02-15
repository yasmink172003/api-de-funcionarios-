
//importou dependencias
const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(express.json());

// Criar / conectar banco
const db = new sqlite3.Database("./database.db");

// Criar tabela se não existir
db.run(`
    CREATE TABLE IF NOT EXISTS funcionarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        salario REAL
    )
`);

// 🔹 Rota para listar funcionários
app.get("/funcionarios", (req, res) => {
    db.all("SELECT * FROM funcionarios", [], (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
});

// 🔹 Rota para adicionar funcionário
app.post("/funcionarios", (req, res) => {
    const { nome, salario } = req.body;

    db.run(
        "INSERT INTO funcionarios (nome, salario) VALUES (?, ?)",
        [nome, salario],
        function (err) {
            if (err) return res.status(500).json(err);

            res.json({
                id: this.lastID,
                nome,
                salario
            });
        }
    );
});

// 🔹 Rota para deletar funcionário
app.delete("/funcionarios/:id", (req, res) => {
    db.run(
        "DELETE FROM funcionarios WHERE id = ?",
        [req.params.id],
        function (err) {
            if (err) return res.status(500).json(err);

            res.json({ mensagem: "Funcionário deletado" });
        }
    );
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
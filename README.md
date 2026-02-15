
# 🚀 API de Funcionários

API REST simples para gerenciamento de funcionários usando:

- Node.js
- Express
- SQLite

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/api-funcionarios.git
cd api-funcionarios
npm install

▶️ Executar

node server.js

Servidor: http://localhost:3000

📌 Rotas

🔹 Listar funcionários

GET /funcionarios

🔹 Criar funcionário

POST /funcionarios

Body:

{
  "nome": "Yasmin",
  "salario": 3000
}

🔹 Deletar funcionário

DELETE /funcionarios/:id

⸻

🗄 Banco de Dados

SQLite (criado automaticamente)

Tabela:

funcionarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  salario REAL
)
👩‍💻 Desenvolvido por Yasmin Karolayne

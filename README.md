# 🛒 Carrinho de Compras - Backend em JavaScript

Este projeto simula a lógica de um carrinho de compras utilizando JavaScript puro, com foco em organização, clareza e boas práticas de código.

## 📦 Funcionalidades

- Criar itens com nome, preço e quantidade
- Adicionar e remover itens do carrinho
- Calcular subtotal por item e total geral da compra
- Exibir resumo detalhado do carrinho formatado em moeda brasileira

## 🧠 Estrutura do Projeto

```bash
├── index.js               # Script principal que simula o uso do carrinho
├── services/
│   ├── cart.js            # Funções para manipular o carrinho
│   └── item.js            # Função para criar itens
├── utils/
│   └── formatter.js       # Função para formatar valores monetários
````
🚀 Como executar
------
Clone o repositório

https://github.com/sergio-l-h-a/Carrinho-de-compras.git

Execute com Node.js:
------
node index.js

📌 Exemplo de saída
-----
 1. Celular Samsung A30 = Und: 1x
  Preço unitário: R$ 1.350,00
  Subtotal: R$ 1.350,00

 2. Notebook Asus = Und: 1x
  Preço unitário: R$ 2.370,00
  Subtotal: R$ 2.370,00

 3. Fone de ouvido = Und: 2x
  Preço unitário: R$ 3.000,00
  Subtotal: R$ 6.000,00

   Total de itens: 4
   Valor total: R$ 9.720,00


  📚 Próximos passos
  ----
Criar testes automatizados

Integrar com frontend (React, Vue, etc.)

Transformar em API REST com Express

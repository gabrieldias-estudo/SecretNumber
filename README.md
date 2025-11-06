# 🎯 Secret Number

Um pequeno jogo web de **adivinhação de números** desenvolvido em **HTML, CSS e JavaScript**, com o objetivo de praticar lógica de programação, manipulação de DOM e estruturação de código limpo.  

Este projeto faz parte dos **desafios do curso de Lógica de Programação da Alura**, mas foi totalmente desenvolvido e aprimorado manualmente.

---

## 🚀 Funcionalidades

- 🔢 Gera um número aleatório secreto entre um intervalo definido  
- 🎮 Permite que o usuário chute valores até acertar  
- 💬 Exibe mensagens dinâmicas de acerto ou erro  
- 🔁 Permite reiniciar o jogo sem recarregar a página  
- 🧠 Implementa lógica condicional e controle de tentativas

---

## 🧩 Tecnologias Utilizadas

- **HTML5** – Estrutura base da página  
- **CSS3** – Estilos, cores e responsividade  
- **JavaScript (ES6)** – Lógica principal do jogo  

---

## 🧠 Lógica do Jogo

1. Um número aleatório é gerado assim que a página carrega.  
2. O jogador insere um chute no campo de entrada.  
3. O programa compara o valor do chute com o número secreto:
   - Se for **maior**, exibe “O número secreto é menor!”
   - Se for **menor**, exibe “O número secreto é maior!”
   - Se for **igual**, exibe uma mensagem de vitória e libera o botão de reiniciar.  
4. As tentativas são contadas e exibidas dinamicamente.  

---

## 📂 Estrutura do Projeto

```css
SecretNumber/
│
├── index.html # Estrutura principal
├── style.css # Estilos e layout
└── app.js # Lógica do jogo (JavaScript)
```

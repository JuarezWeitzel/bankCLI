# BankCLI

Um projeto simples de linha de comando para demonstrar operações bancárias básicas em Node.js.

## Sobre

O **BankCLI** é uma aplicação desenvolvida como um exercício de demonstração, sem fins comerciais ou uso em produção. Seu objetivo é simular um sistema bancário básico, permitindo ao usuário criar contas, consultar saldos, realizar depósitos e saques, tudo por meio de uma interface de terminal interativa. Este projeto foi criado para praticar conceitos de programação em JavaScript, manipulação de arquivos e interação com o usuário via CLI.

## Funcionalidades

- **Criar Conta**: Adicione uma nova conta com nome personalizado.
- **Consultar Saldo**: Veja o saldo atual de uma conta existente.
- **Depositar**: Adicione dinheiro a uma conta.
- **Sacar**: Retire dinheiro de uma conta (se houver saldo suficiente).
- **Sair**: Encerre a aplicação.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 14 ou superior recomendada), incluindo o módulo nativo [fs](https://nodejs.reativa.dev/0046-node-module-fs/index) para manipulação de arquivos.
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js).
- [Inquirer](https://www.npmjs.com/package/inquirer): Biblioteca para prompts interativos no terminal.
- [Chalk v4.1.2](https://www.npmjs.com/package/chalk/v/4.1.2): Versão específica para estilização de texto no console.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/bank-cli.git
   cd bank-cli
2. Instale os módulos: 
   ```bash
   npm i inquirer chalk@4.1.2

## Uso como Executável

1. Baixe o arquivo `BankCLI.exe` (Windows).
2. Clique duas vezes no executável para abrir.
3. Siga as instruções no terminal para usar o programa.

## Inicialização

Após realizar a instalação conforme descrito na seção anterior, siga os passos abaixo para inicializar o `bank-cli`. Você pode usar o **Prompt de Comando (CMD)** no Windows ou o **terminal integrado do Visual Studio Code (VS Code)**. As instruções funcionam em ambos.

### Passos para inicializar

1. **Certifique-se de estar no diretório correto**:
   - Após clonar o repositório e instalar os módulos, você já deve estar dentro da pasta `bank-cli`. Para confirmar, execute:
     ```bash
     node index.js
    
   - Outra opção:
     ```bash
     npm start
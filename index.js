// importando modulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

// importando modulos internos
const fs = require("fs");
const { exit } = require("process");
const { parse } = require("path");

operation();

function operation() {
  inquirer.default
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Qual operação deseja realizar?",
        choices: [
          "Criar Conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (action === "Criar Conta") {
        createAccount();
      } else if (action === "Consultar Saldo") {
        getAccountBalance();
      } else if (action === "Depositar") {
        deposit();
      } else if (action === "Sacar") {
        withdraw();
      } else if (action === "Sair") {
        leaveBank();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function createAccount() {
  console.log(chalk.bgGreen.black("Obrigado por escolher nosso Banco!"));
  console.log(chalk.green("Parabéns, sua conta foi criada!"));
  buildAccount();
}

function buildAccount() {
  inquirer.default
    .prompt([
      {
        name: "accountName",
        message: "Qual nome deseja dar para sua conta:",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (accountName === "" || !isNaN(Number(accountName))) {
        console.log(chalk.bgRed.black("Nome da conta inválido!"));
        return buildAccount();
      }

      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }

      if (!checkAccountExist(accountName)) {
        buildAccount();
      } else {
        fs.writeFileSync(
          `accounts/${accountName}.json`,
          '{"balance": 0}',
          function (err) {
            console.log(err);
          }
        );

        console.log(
          chalk.green("Parabéns, sua conta foi criada! Conta: " + accountName)
        );
        operation();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function deposit() {
  inquirer.default
    .prompt([
      {
        name: "accountName",
        message: "Qual conta você deseja depositar:",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      console.log(accountName)

    })
    .catch((err) => {
      console.log(err);
    });
}

function getAccountBalance() {
  inquirer.default
    .prompt([
      {
        name: "accountName",
        message: "Qual nome da conta que deseja consultar:",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!checkAccountNotExist(accountName)) {
        return getAccountBalance();
      }

      const accountBalance = getAccount(accountName);

      console.log(
        chalk.bgBlue(
          `O saldo da sua conta é: R$${accountBalance.balance.toFixed(2)}`
        )
      );
      operation();
    })
    .catch((err) => {
      console.log(err);
    });
}

function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: "utf8",
    flag: "r",
  });

  const accountData = JSON.parse(accountJSON);

  return accountData;
}

function checkAccountNotExist(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black("Essa conta não existe!"));
    return false;
  }

  return true;
}

function checkAccountExist(accountName) {
  if (fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black("Esta conta já existe, escolha outro nome!"));
    return false;
  }

  return true;
}

function leaveBank() {
  console.log(chalk.bgBlue.black("Obrigado por usar o BankCLI!"));
}

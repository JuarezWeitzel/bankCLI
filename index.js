// importando modulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

// importando modulos internos
const fs = require("fs");
const { exit } = require("process");

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
                    "Sair"
                ]
            }
        ]).then((answer) => {

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

        }).catch((err) => {
            console.log(err);
        })
}

function createAccount() {
    console.log(chalk.bgGreen.black("Obrigado por escolher nosso Banco!"));
    console.log(chalk.green("Parabéns, sua conta foi criada!"));
    operation();
}

function leaveBank() {
    console.log(chalk.bgBlue.black("Obrigado por usar o BankCLI!"));
}
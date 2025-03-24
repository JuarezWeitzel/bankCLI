// importando modulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");

// importando modulos internos
const fs = require("fs");
const { exit } = require("process");
const { create } = require("domain");

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

function leaveBank() {
    console.log(chalk.bgBlue.black("Obrigado por usar o BankCLI!"));
}
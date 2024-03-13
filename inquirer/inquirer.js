import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: "userName",
        type: "sting",
        message: "what is your name",
    }]);
console.log(("hello " + answer.userName));

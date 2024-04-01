#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.magenta.bold("\n \t ***==== Welcome to SHAHI todo's Application ====*** \n"));
async function main() {
    while (conditions) {
        let addTask = await inquirer.prompt([
            {
                name: "task",
                type: "input",
                message: chalk.green("Enter your new task:")
            }
        ]);
        todoList.push(addTask.task);
        console.log(chalk.green(`${addTask.task} Task added in Todo list successfully`));
        let options = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.yellow("Select an option:"),
                choices: ["Add Task", "View Tasks", "Delete Task", "Update Todo List", "Exit"]
            }
        ]);
        switch (options.choice) {
            case "View Tasks":
                console.log(chalk.blue("Your Todo list:"), todoList.join(", "));
                break;
            case "Delete Task":
                let deleteTask = await inquirer.prompt([
                    {
                        name: "taskToDelete",
                        type: "input",
                        message: chalk.red("Enter the task to delete:")
                    }
                ]);
                let index = todoList.indexOf(deleteTask.taskToDelete);
                if (index !== -1) {
                    todoList.splice(index, 1);
                    console.log(chalk.yellow(`${deleteTask.taskToDelete} deleted from Todo list`));
                }
                else {
                    console.log(chalk.red("Task not found"));
                }
                break;
            case "Update Todo List":
                break;
            case "Exit":
                conditions = false;
                console.log(chalk.cyan("Goodbye! Have a nice day ahead."));
                break;
            default:
                break;
        }
    }
}
main();

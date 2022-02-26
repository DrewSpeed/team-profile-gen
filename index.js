const fs = require('fs');
const inquirer = require('inquirer');

// require the different constructors needed from lib folder
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// require the page HTML
const generatePage = require('./src/generateHTML');

// Empty array to push to and generate page with
const teamArray = [];

// prompts to add team Manager information
const addManager = () => {
    var MgrQuestions = [
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of your team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's Employee ID.",
            validate: nameInput => {
                if (isNaN(nameInput) || !nameInput) {
                    console.log ('Please enter a valid Employee ID!')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter a valid Office number!')
                    return false;
                }
            }
        }
    ]
    
    inquirer.prompt(MgrQuestions)
    .then(managerInput => {
        const { name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber)
        
        //push above to teamArray
        teamArray.push(manager);
        console.log(`
        =====================================
        Manager ${name} added to the team.
        -------------------------------------
        `)
        employeeAddOption()
    })
};

// lets user choose whether or not to add a new employee
const employeeAddOption = () => {
    var addOption = [{
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add more team members?',
        default: false
    }]

    inquirer.prompt(addOption)
    .then(response => {
        choice = response.confirmAddEmployee
        if (choice === false) {
           return console.log(`
        Team Complete. Check the 'dist' folder for your generated page.
        -------------------------------------
            `)
        } else {
        return addEmployee()
        }
    })
}

// adds employee if answered yes to employeeAddOption
const addEmployee = () => {
        console.log(`
        Now adding new team member...
        -------------------------------------
        `);
    var employeeQuestions = [
        {
            type: 'input',
            name: 'name',
            message: "What's the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
            
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if (isNaN(nameInput) || !nameInput) {
                    console.log ('Please enter a valid Employee ID!')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Please choose the employee's role.",
            choices: ['Engineer', 'Intern']
        }
    ]

    inquirer.prompt(employeeQuestions)
}

addManager()
    // if (answers) {
    //     return console.log(`
    //     Team Complete. Check the 'dist' folder for your generated page.
    //     `)
    // } else {
    //     return addEmployee()
    // }

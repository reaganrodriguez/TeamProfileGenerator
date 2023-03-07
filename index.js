const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const team = require("./src/page-template");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const stack = []; 
// TODO: Write Code to gather information about the development team members, and render the HTML file.
const createManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager ?', 
  
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID.",

        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email.",

        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number",
    
        }
    ])
    .then(m => {
        const  { name, id, email, officeNumber } = m; 
        const manager = new Manager (name, id, email, officeNumber);

        stack.push(manager); 
        
    })
};


const createEmployee = () => {


    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 

        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
    
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
    
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
 
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",

        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeDetails => {
       

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeDetails; 
        

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            
        }

        stack.push(employee); 

        if (confirmAddEmployee) {
            return createEmployee(); 
        } else {
            return stack;
        }
    })

};


const writetoFile = data => {
    fs.writeFile(outputPath, data,err=>console.log(err));
}; 

createManager()
  .then(createEmployee)
  .then(stack => {
    return team(stack);
  })
  .then(htmls => {
    return writetoFile(htmls);
  })
  .catch(err => {
 console.log(err);
  });

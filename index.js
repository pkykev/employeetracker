const fs = require(`fs`)
const express = require('express');
const inquirer = require("inquirer")
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Operation',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);





function selectAll(query) {
  db.query(`SELECT * FROM ${query}`, (err, res) => {
    console.table(res)
  })
}

function departmentAdd() {
  inquirer.prompt({
    type: 'input',
    message: 'What is the department name?',
    name: 'newdpt',
  })
    .then((response) => {
      db.query(
        `INSERT INTO department (name)
      VALUES
        ('${response.newdpt}')`
      )
      viewAll()
    })
}

function roleAdd() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the role title?',
      name: 'newrole',
    },
    {
      type: 'input',
      message: 'What is the salary for the new role?',
      name: 'newrolesalary',
    },
    {
      type: 'input',
      message: 'What department does this new role belong to?',
      name: 'newroledpt'
    }
  ])
    .then((response) => {
      db.query(
        `INSERT INTO role (title, salary, department_id)
      VALUES
        ('${response.newrole}', '${response.newrolesalary}', '${response.newroledpt}')`
      )
      viewAll()
    })

}




function viewAll() {
  const mainstreet = {
    type: 'list',
    message: 'What would you like to do?',
    name: 'mainselect',
    choices: ['View all departments', 'View all roles', 'View all employees',
      'Add a department', 'Add a role', 'Add an employee', 'Update employee role', 'QUIT']
  };
  inquirer.prompt(mainstreet)
    .then((response) => {
      switch (response.mainselect) {
        case 'View all departments':
          // this may need to be an asyn function to look better
          // selectAll('department')
          //I have no err handling, I have deemed this ok xD
          db.query('SELECT * FROM department', (err, res) => {
            console.table(res)
            viewAll()
          })
          break;
        case 'View all roles':
          db.query('SELECT * FROM role', (err, res) => {
            console.table(res)
            viewAll()
          })
          break;
        case 'View all employees':
          db.query('SELECT * FROM employee', (err, res) => {
            console.table(res)
            viewAll()
          })
          break;
        case 'Add a department':
          departmentAdd()
          break;
        case 'Add a role':
          roleAdd()
          break;
        case 'QUIT':
          // make this a function
          inquirer.prompt({
            type: 'confirm',
            message: 'Are you sure?',
            name: 'quit'
          })
            .then((answer) => {
              if (!answer.quit)
                return viewAll()
            })

        default:
      }
      //this could be a switch case for each choice and call functions for the choices and those functiosn can have more inquirer questions
    })
}
viewAll()




// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

























app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

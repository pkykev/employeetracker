const fs = require(`fs`)
const inquirer = require("inquirer")



function viewAll(){
  const viewAll = {
    type:'list',
    message: 'What would you like to do?',
    name:'mainselect',
    choices: ['View all departments', 'View all roles', 'View all employees',
    'Add a department', 'Add a role', 'Add an employee', 'Update employee role']
  };
  inquirer.prompt(viewAll)
  .then((viewAll) => {
    //this could be a switch case for each choice and call functions for the choices
    console.log(viewAll.mainselect)
  })
  }
  viewAll()

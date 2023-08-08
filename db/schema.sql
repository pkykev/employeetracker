--Use this to populate workbench to grab all the info for the command line interface--

DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

-- Use inventory_db --
USE employee_db_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
)

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
    --IDK if this will cuase problems with deletion becuase not null is a constraint
  ON DELETE SET NULL,
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  FOREIGN KEY (role_id)
  REFERENCES role(id)
  ON DELETE SET NULL,
  --NEED to check on this one to see how relations work within the same table
  manager_id INT NOT NULL,
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE SET NULL,
);













-- See database in use LOOK UP WHAT THIS DOES--
SELECT DATABASE();

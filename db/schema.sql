-- Use this to populate workbench to grab all the info for the command line interface --

DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

-- Use inventory_db --
USE employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
    -- IDK if this will cuase problems with deletion becuase not null is a constraint --
  
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager BOOLEAN NOT NULL,

  role_id INT,
  FOREIGN KEY (role_id)
  REFERENCES role(id),
  -- NEED to check on this one to see how relations work within the same table --
  manager_id INT,
  REFERENCES employee(id)
);



SELECT DATABASE();



-- example update syntax--
UPDATE role
  SET salary = 90000
  WHERE id = 1;
INSERT INTO department (name)
VALUES 
      ('Sales'),
      ('Operations'),
      ('Manager'),
      ('R&D');

INSERT INTO role (title, salary, department_id)
VALUES 
      ('Salesperson', 80000, 1),
      ('Mail Clerk', 50000, 2),
      ('Manager', 100000, 3),
      ('Researcher', 120000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id, manager)
VALUES 
      ('Barak', 'Obama', 3, NULL, 1),
      ('Jimmy', 'Carter', 1, 1, 0),
      ('Harry', 'Truman', 2, 1, 0),
      ('Richard', 'Nixon', 4, 1, 0);
      

SELECT
  role.department_id


       

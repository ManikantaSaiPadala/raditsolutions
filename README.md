# Employee Management System

This is a full-stack web application for managing employee data. It provides functionality to create, read, update, and delete (CRUD) employee records. The frontend is built using React, and the backend is developed with Node.js and Express. MySQL is used as the database.

## Features

- View a list of all employees
- Add a new employee
- Update an existing employee's information
- Delete an employee
- Responsive design using Bootstrap

## Technologies Used

- **Frontend:**
  - React
  - React Router
  - Bootstrap
  - Axios

- **Backend:**
  - Node.js
  - Express
  - MySQL
  - CORS

## Prerequisites

- Node.js and npm installed
- MySQL installed and running

## Setup

### Backend

1. **Clone the repository:**

   ```sh
   git clone https://github.com/ManikantaSaiPadala/raditsolutions.git
   cd raditsolutions/backend
   
2. **Install Dependies:**
   
    npm install
   
3. **Configure the MySQL database connection in server.js:**
   
     const db = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "",
     database: "crud",
     port: 3307 // Update if necessary
}); 

4.  **Create the MySQL database and table:**
   
     CREATE DATABASE crud;
     USE crud;
     CREATE TABLE employee (
         ID INT AUTO_INCREMENT PRIMARY KEY,
         Name VARCHAR(255) NOT NULL,
         Office VARCHAR(255) NOT NULL,
         Email VARCHAR(255) NOT NULL
   );

5. **CRUD Operations:**

    View Employees: Visit the homepage to see the list of employees.
    Add Employee: Click on "Add +" and fill in the form to add a new employee.
    Update Employee: Click on the "Update" button next to an employee's record to edit their details.
    Delete Employee: Click on the "Delete" button next to an employee's record to remove them.

6. **License:**

   This project is licensed under the MIT License.

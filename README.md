# E-commerce Inventory Backend System

![License](https://img.shields.io/badge/License-MIT-green.svg)<br>

## Description:<br>

The E-commerce Inventory Backend System is an ExpressJS and MySQL database server backend application for managing inventory and product data for an online store environment. MySQL stores the data tables for categories and products as well as the tag relationships to those products.<br>

The applicaton allows the user to create, update and delete categories, products and tags while establishing the associated relationships between the table records where applicable. The system stores product names, prices, stock units available, and applied tags or keywords.<br>

The E-commerce Inventory Backend System utilizes the following technologies:
  * JavaScript
  * NODE.JS
  * NPM packages:
    * Sequelize
    * MySQL2
    * DOTENV
    * Express

---


## Table of Contents<br>

[Installation](#installation)<br>

[Usage](#usage)<br>

[License](#license)<br>

[Contributors](#contributors)<br>

[Tests](#tests)<br>

[Questions](#Questions)<br>

---

## Installation:<br>

My files can be accessed in the repository [HERE](https://github.com/arcangyl1963/ecommerce-inventory-backend-system)<br>

The image below shows the repository where my project files are located:

![E-commerce Inventory Backend System Repository](./images/ecommerce_repo.png)<br>


Begin setting up your local repository by cloning the repo from the link above or by downloading the files to your local drive.<br>

The repository will contain all of the files needed to run the application:<br>

* A 'config' directory containing the database connection script.
* A 'db' directory containing the schema for creating the database.
* A 'seeds' directory that houses the seed scripts to populate the database with tables of data.
* A 'models' directory containing the model classes for the categories, products, and product tags.
* A 'routes' directory that contains the API routes for fetching, creating, updating and deleting the categories, products, and tags.
* An 'images' directory containing the image files for the README document.
* A package.json file that contains the package dependencies required for the application to run and the application script information.
* An server.js script file that is invoked in NodeJS to run the server application.

Next proceed by creating the database using the MySQl CLI (or you may use a GUI software application such as MySQL Workbench or Sequel Pro):

  In Terminal or a similar BASH utility, enter:
  ~~~
  mysql -u root -p
  ~~~
  When prompted for password enter the password for the root MySQL user you set during installation of MySQL.
  You should then see the mysql prompt indicating you are now in the MySQL CLI:
  ~~~
  mysql>
  ~~~
  Copy the SQL commands from the schema.sql file in sql directory and paste them in the CLI:
  ~~~
For example, to remove the database if it exists and create a new database you would paste this:

mysql> DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE ecommerce_db;
~~~
<br>

Once the database has been created, you will install any package dependencies required to run the server application and to setup the development environment on your local repository.<br>

In Terminal or a similar bash command-line utility, navigate to the working directory and enter:<br>

~~~
npm install OR npm i
~~~

This will install any package dependencies defined in the package.json file.<br>

If you do not have MySQL installed on your system, you will need to install it as well. Download the appropriate installer for your operating system from [here](https://dev.mysql.com/downloads/installer/) and follow the instructions provided by the installer.<br>

Additionally, you will need to create a .env file with your MySQL user and password information. Use the .envEXAMPLE file as a guide.<br> 

---

## Usage:<br>
To run the application locally type the following into Terminal or the command-line utility of your choice:<br>

~~~
node server.js
~~~

The server application will launch and you will see 'App listening on port 3001!' when the appliction lauches successfully.

![E-commerce Inventory Backend System running app Terminal screen](./images/ecommerce_serverapplaunchscreen.png)<br>

Please view the walk-through video demonstrating the CRUD functions on each of the tables for categories, products, and tags. The video can be viewed [here](https://youtu.be/qLgyzgpITE8).<br>

## Postman GET, POST, PUT Tests:<br>

Find all categories:<br>

![E-commerce Inventory Backend System Postman tests](./images/ecommerce_PM_findAllCat.png)<br>

Find one category:<br>

![E-commerce Inventory Backend System Postman tests](./images/ecommerce_PM_findOneCat.png)<br>

Find all products:<br>

![E-commerce Inventory Backend System Postman tests](./images/ecommerce_PM_findAllProds.png)<br>

Find one product:<br>

![E-commerce Inventory Backend System Postman tests](./images/ecommerce_PM_findOneProd.png)<br>

Create (POST) a category:<br>

![E-commerce Inventory Backend System Postman tests](./images/ecommerce_PM_POST-Cat.png)<br>

Create (POST) a product:<br>

![E-commerce Inventory Backend System Postman tests](./images/ecommerce_PM_POST-Prod.png)<br>
![E-commerce Inventory Backend System Postman tests](./images/ecommerce_PM_POST-Prod-success.png)<br>

Update (PUT) a product:<br>

![E-commerce Inventory Backend System Postman tests](./images/ecommerce_PM_PUT-Prod.png)<br>
![E-commerce Inventory Backend System Postman tests](./images/ecommerce_PM_PUT-Prod-success.png)<br>


---

## License:<br>

![License](https://img.shields.io/badge/License-MIT-green.svg)<br>This software is licensed under an MIT license:<br><br>Copyright © 2021 Arcangyl Studios<br><br>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br>THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.<br>

---

## Contributors:<br>

James Harris<br>

---

## Tests:<br>

There were no test scripts created for this application.<br>

---

## Questions:<br>


- Feel free to email me with any questions about this project at: arcangyl@gmail.com<br>

![GitHubAvatar](https://avatars.githubusercontent.com/u/77169680?v=4)<br>

- My GitHub profile may be viewed by clicking [here](https://github.com/arcangyl1963).
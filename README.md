# Third Triad Mojo Tech Blog

![License](https://img.shields.io/badge/License-MIT-green.svg)<br>

## Description:<br>

The Third Triad Mojo Tech Blog is a CMS-style blog where users can register and enter posts related to technology and related information. It uses the Handlebars Node package to generate the blog site views pages for it frontend and a MySQL database to store entered data coupled with the Sequelize Node package to create the queries to insert into and retrieve the data from the database tables.<br>


The Third Triad Mojo Tech Blog utilizes the following technologies:
  * JavaScript
  * NODE.JS
  * NPM packages:
    * Sequelize
    * connect-session-sequelize
    * MySQL2
    * DOTENV
    * Express
    * Express-session
    * Express-handlebars
    * Handlebars
    * Bcrypt

---


## Table of Contents<br>

[Installation](#installation)<br>

[Usage](#usage)<br>

[Heroku](#heroku)<br>

[License](#license)<br>

[Contributors](#contributors)<br>

[Tests](#tests)<br>

[Questions](#Questions)<br>

---

## Installation:<br>

My files can be accessed in the repository [HERE](https://github.com/arcangyl1963/third-triad-mojo-tech-blog)<br>

The image below shows the repository where my project files are located:

![Third Triad Mojo Tech Blog Repo](./images/TTMBlog_repo.png)<br>


Begin setting up your local repository by cloning the repo from the link above or by downloading the files to your local drive.<br>

The repository will contain all of the files needed to run the application and follows the MVC paradigm for directory structure:<br>

* A 'config' directory containing the database connection script.
* A 'controllers' containing the route scripts for API calls and for the views.
* A 'db' directory containing the schema for creating the database.
* A 'public' directory that houses the javascripts and the CSS stylesheet.
* A 'models' directory containing the model classes for the Users, Posts, and Comments.
* A 'utils' directory that the authentication script for the user login feature and a helpers script used to manage the date formats.
* An 'images' directory containing the image files for the README document.
* A package.json file that contains the package dependencies required for the application to run and the application script information.
* A server.js script file that is invoked in NodeJS to run the server backend which serves the blog site.

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

mysql> DROP DATABASE IF EXISTS tech_blog_db;
CREATE DATABASE tech_blog__db;
~~~
<br>

Once the database has been created, you will install any package dependencies required to run the server application and to setup the development environment on your local repository.<br>

In Terminal or a similar bash command-line utility, navigate to the working directory and enter:<br>

~~~
npm install OR npm i
~~~

This will install any package dependencies defined in the package.json file.<br>

If you do not have MySQL installed on your system, you will need to install it as well. Download the appropriate installer for your operating system from [here](https://dev.mysql.com/downloads/installer/) and follow the instructions provided by the installer.<br>

Additionally, you will need to create a .env file with your MySQL user and password information. Use the dotenvEXAMPLE file as a guide.<br> 

---

## Usage:<br>
To run the application locally type the following into Terminal or the command-line utility of your choice:<br>

~~~
node server.js
~~~

The server application will launch and you will see 'App listening on port 3001!' as well as the Sequelize queries inserting the tables into the database.
Enter https://localhost:3001/ into the address field of your web browser.<br>

You will be presented with the home screen.

![Third Triad Mojo Tech Blog Home screen](./images/TTMBlog_home.png)<br>

If this is the first time launching the app, you will need to register as a user by clicking 'New User Registration' in the navbar or on the 'Register here' link of the Login panel.

![Third Triad Mojo Tech Blog New User Registration](./images/TTMBlog_register.png)<br>

Once logged in the user's dashboard will display.

![Third Triad Mojo Tech Blog User Dashboard](./images/TTMBlog_dashboard.png)<br>

If the user has posted entries prior to the session, those will display in the dashboard list.

![Third Triad Mojo Tech Blog Dashboard with Entries](./images/TTMBlog_dashboard_postlist.png)<br>

Click the New Post button to enter a new post.

![Third Triad Mojo Tech Blog New Post Entry](./images/TTMBlog_dashboard_newpost.png)<br>

Click on a posts name to bring up the Post Editor.

![Third Triad Mojo Tech Blog Edit Post](./images/TTMBlog_dashboard_editpost.png)<br>

## Heroku:

The Third Triad Mojo Tech Blog site can be accessed from this Heroku Deployment link:
[Heroku app](https://third-triad-mojo-tech-blog.herokuapp.com/)

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
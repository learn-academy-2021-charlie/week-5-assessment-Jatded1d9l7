# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?

SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.

2. Whats the PostgreSQL query that would return all the content in a particular table?

The select statement used in combination with the astrisk and followed by the name of the table. 



3. What is the command to create a new Rails application with a PostgreSQL database?
open in terminal:
rails new app_name -d postgresql -T

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?
In terminal:
rails generate model MealsModel breakfast: () Lunch: () dinner: ()

5. What is a migration? Why would you use one?

Migrations are a tool that allows you to change the shape of your database over time. We will explore migrations in detail in a later section, but for now we need migrations to establish the initial setup of our database. Migrations are files that run SQL commands. Rails maintains a history with the migrations that have already run, and those that need to be run.

6. What is the command to generate a migration file?
rail g migrate add_column
rails db:migrate

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
model- Uppercase (PascalCase) and singular
table- snake_case and plural

The namining convention for generating a rails model is uppercase and singular.

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?
You cannot modify the schema directlty. The schema is the "shape" of the database". It is a snapshot of your database. 

9. What is the Rails console?
The rails console is the command line program for itneractig with rails applications. 

10. What is the Rails console command to see all the content in a particular table? You can use the .all command to view all the content in a particular table. You must have the name of the table and then .all

Tablename.all
Uppercase and singlular 
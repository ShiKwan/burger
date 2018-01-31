/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database movie_planner_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger varchar (255) NOT NULL,
    PRIMARY KEY (id)
);

    -- Insert a set of records.
    INSERT INTO burgers (burger) VALUES ('Cumin Lamb with sesame buns'), ('quarter pounder cheese burger'), ('vege delight sandwich');

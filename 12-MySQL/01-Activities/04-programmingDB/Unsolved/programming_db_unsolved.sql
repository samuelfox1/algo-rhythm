-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --
USE programming_db;

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER NOT NULL AUTO_INCREMENT,
  -- Create a string column called "language" --
  language VARCHAR(100),
  -- Create an integer column called "rating" --
  rating INTEGER NOT NULL,
  -- Create a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
  mastered BOOLEAN DEFAULT true,

  -- Set the id as this table's primary key
  PRIMARY KEY (id)
);


-- Create new example rows
INSERT INTO programming_languages (language, rating) VALUES ('JavaScript', 10);
INSERT INTO programming_languages (language, rating, mastered) VALUES ('CSS', 7, false);
INSERT INTO programming_languages (language, rating, mastered) VALUES ('JavaScript', 7, false);
INSERT INTO programming_languages (language, rating, mastered) VALUES ('Node.Js', 7, false);


UPDATE programming_languages SET language = "CSS" WHERE id=2;
UPDATE programming_languages SET rating = "5" WHERE id=2;

DELETE FROM programming_languages WHERE id = 1;

SELECT * FROM programming_languages WHERE mastered = true; 
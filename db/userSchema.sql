CREATE DATABASE virtually_apex;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR (100) NOT NULL,
  email VARCHAR(320) UNIQUE NOT NULL,
  password VARCHAR(60) NOT NULL
);

-- CREATE EXTENSION citext;
-- CREATE DOMAIN email AS citext
--   CHECK ( value ~ '^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$' );

-- SELECT 'asdf@foobar.com'::email;
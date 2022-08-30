BEGIN;

DROP TABLE IF EXISTS users, questions, answers CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(20) NOT NULL
);

CREATE TABLE questions(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  user_id INTEGER ,
    date timestamp default now(),
  foreign key (user_id) REFERENCES users(id) 
);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  votes INTEGER,
  question_id INTEGER,
  user_id INTEGER,
    date timestamp default now(),
  foreign key (question_id) REFERENCES questions(id) ,
  foreign key (user_id) REFERENCES  users(id) 

);

INSERT INTO users (username, email, password) VALUES
  ('bayan', 'bayan@gmail.com', '123456'),
  ('yazeed', 'yazeed@gmail.com', '123456')
;

INSERT INTO questions ( title,category,content,user_id,date) VALUES
('test','test','tesssssssssssssstttt',1 ,'2022-10-19 10:23:54'),
('test1','test1','tesssssssssssssstttt',1 ,'2020-10-19 10:23:54')
;

INSERT INTO answers (content,votes,question_id , user_id, date) VALUES
('nice question',0,1,1,'2022-10-19 10:23:54'),
('nice question',0,2,1,'2022-10-19 10:23:54')
;

COMMIT;
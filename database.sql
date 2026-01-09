
CREATE DATABASE IF NOT EXISTS voxarcadia;
USE voxarcadia;

-- DDL

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('user','admin') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- DML

INSERT INTO users (username, email, password, role) VALUES
('adminvox', 'admin@voxarcadia.com', 'admin123', 'admin'),
('player03', 'player03@gmail.com', 'password123', 'user'),
('player04', 'player04@gmail.com', 'password123', 'user'),
('player05', 'player05@gmail.com', 'password123', 'user'),
('player06', 'player06@gmail.com', 'password123', 'user'),
('player07', 'player07@gmail.com', 'password123', 'user'),
('moderator01', 'mod01@voxarcadia.com', 'mod123', 'admin'),
('support01', 'support01@voxarcadia.com', 'support123', 'admin');

SELECT * FROM users;


SELECT id, username, email
FROM users
WHERE role = 'user';

SELECT id, username, email, created_at
FROM users
WHERE role = 'admin';


UPDATE users
SET password = 'newpassword123'
WHERE email = 'player05@gmail.com';

UPDATE users
SET username = 'player07_pro'
WHERE id = 6;

DELETE FROM users
WHERE email = 'player06@gmail.com';

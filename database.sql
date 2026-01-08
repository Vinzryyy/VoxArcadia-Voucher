
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
('player01', 'player01@gmail.com', 'password123', 'user'),
('player02', 'player02@gmail.com', 'password123', 'user');

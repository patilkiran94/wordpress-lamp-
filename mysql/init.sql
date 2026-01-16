CREATE DATABASE wordpress;
CREATE USER 'wpuser'@'%' IDENTIFIED BY 'wppassword';
GRANT ALL PRIVILEGES ON wordpress.* TO 'wpuser'@'%';
FLUSH PRIVILEGES;

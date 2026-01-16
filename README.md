👉 Linux + Apache + MySQL + PHP (WordPress)

This is industry-standard, easy to deploy, and interview-ready.

✅ WordPress LAMP Stack – Docker Project
🏗 Architecture
Browser
   ↓
Apache + PHP (WordPress)
   ↓
MySQL Database

📁 Project Structure
wordpress-lamp/
│
├── docker-compose.yml
│
├── apache/
│   └── Dockerfile
│
├── mysql/
│   └── init.sql
│
└── wordpress/
    └── wp-config.php   (optional)



▶️ Run the Project
docker compose up -d

🌐 Access WordPress

Open browser:

http://localhost:8080/wordpress


Complete WordPress setup:

Database: wordpress

User: wpuser

Password: wppassword

Host: mysql

🔐 LAMP Stack Components Confirmed
Layer	Technology
OS	Linux (Docker)
Web Server	Apache
Backend	PHP 8.2
Database	MySQL 8
CMS	WordPress
🧠 What This Setup Teaches

✔ Real LAMP stack
✔ Docker volumes (persistent data)
✔ Service-to-service networking
✔ WordPress production basics
✔ MySQL initialization

# 📚 Library Management System

A full-stack **Library Management System** built using **Spring Boot**, **MySQL**, and a simple **HTML/CSS/JavaScript** frontend. The system allows library administrators to manage books, users, and track borrow/return transactions in real-time.

---

## 🚀 Features

* ✅ **Add & View Books**
* ✅ **Register & View Users**
* ✅ **Borrow and Return Books**
* ✅ **Transaction History View**
* ✅ **Pop-up notifications for actions**
* ✅ **Modern Sidebar Navigation**
* ✅ **Clean, Responsive Frontend Design**

---

## 🖥️ Tech Stack

| Backend         | Frontend              | Database |
| --------------- | --------------------- | -------- |
| Spring Boot 3.x | HTML, CSS, Vanilla JS | MySQL    |
| Hibernate (JPA) | Fetch API             |          |
| Lombok          |                       |          |

---

## 📂 Project Structure

```
library-management-system/
│
├── src/main/java/com/library/
│   ├── controller/
│   ├── model/
│   ├── repository/
│   ├── service/
│   └── LibraryManagementApplication.java
│
├── src/main/resources/
│   ├── application.properties
│
├── frontend/
│   ├── index.html
│   ├── add-book.html
│   ├── add-user.html
│   ├── books.html
│   ├── transactions.html
│   ├── styles.css
│   └── script.js
│
└── pom.xml
```

---

## 🛠️ Setup Instructions

### ✅ Backend Setup

1. Clone the repository:

   ```bash
   git clone <repo-url>
   ```
2. Open in **IntelliJ IDEA** or **VS Code**.
3. Configure your MySQL database:

   ```sql
   CREATE DATABASE library_db;
   ```
4. Update `src/main/resources/application.properties` with your database username and password.
5. Run the Spring Boot application:

   ```bash
   ./mvnw spring-boot:run
   ```

### ✅ Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```
2. Open `index.html` using **Live Server** (recommended).
3. All API calls run on `http://localhost:8080` by default.

---

## 📢 API Endpoints Summary

| Entity           | Endpoint               | Method           | Description              |
| ---------------- | ---------------------- | ---------------- | ------------------------ |
| **Books**        | `/books`               | GET, POST        | Get all books, add book  |
|                  | `/books/{id}`          | GET, PUT, DELETE | Get, update, delete book |
| **Users**        | `/users`               | GET, POST        | Get all users, add user  |
| **Transactions** | `/transactions`        | GET              | Get all transactions     |
|                  | `/transactions/borrow` | POST             | Borrow a book            |
|                  | `/transactions/return` | PUT              | Return a book            |

---

## 🎉 Screens Included

* Home Page (`index.html`)
* View Books + Borrow/Return (`books.html`)
* Add Book (`add-book.html`)
* Add User + View Users (`add-user.html`)
* Transaction History (`transactions.html`)

---

## 💡 Notes

* Popups used for action feedback (success/failure).
* Frontend connected using vanilla JS Fetch API.
* Clean backend response handling with `ResponseEntity`.

---
---

## 👨‍💻 Author

| Name                | GitHub                                                  | LinkedIn                                                                 | E-Mail                                                              | Photo                                                                                                                                                                               |
| ------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------- |                                                                                                                                                                                     |
| **Kapil Prajapati** | [Prajapatikapil41](https://github.com/Prajapatikapil41) | [Kapil LinkedIn](https://www.linkedin.com/in/kapil-prajapati-7ba4b51b7/) | [kapilprajapati0403@gmail.com](mailto:kapilprajapati0403@gmail.com) | [<img src="https://avatars.githubusercontent.com/u/81869156?s=400&u=ff6de7017b51e4d96dbfb1ae39c7a459d5e13ea8&v=4" align="right" height="100">](https://github.com/Prajapatikapil41) |


```

# Todo App Backend API

A simple Todo Backend API built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, and **JWT Authentication**.

## Features

* User Signup
* User Signin with JWT Token
* Create Todos
* Get User Todos
* Protected Routes using Middleware Authentication

---

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JSON Web Token (JWT)

---

## Project Structure

```bash
project-folder/
│
├── index.js        # Main server file
├── db.js           # Database models
├── auth.js         # JWT authentication middleware
├── package.json
```

---

## Installation

### Clone the repository

```bash
git clone <your-repo-url>
```

### Install dependencies

```bash
npm install
```

### Start the server

```bash
node index.js
```

Server runs on:

```bash
http://localhost:3000
```

---

## API Endpoints

### 1. Signup User

#### POST `/signup`

```json
{
  "name": "Swapnil",
  "email": "swapnil@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "Signup successfully..!"
}
```

---

### 2. Signin User

#### POST `/signin`

```json
{
  "email": "swapnil@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "token": "your_jwt_token"
}
```

---

### 3. Create Todo

#### POST `/todo`

Headers:

```bash
token: your_jwt_token
```

Body:

```json
{
  "title": "Learn Backend",
  "done": false
}
```

Response:

```json
{
  "message": "Todo Create Successfully.."
}
```

---

### 4. Get Todos

#### GET `/todos`

Headers:

```bash
token: your_jwt_token
```

Response:

```json
{
  "response": {
    "_id": "todo_id",
    "title": "Learn Backend",
    "done": false
  }
}
```

---

## Authentication

This project uses JWT token authentication.

After signin, copy the generated token and send it in request headers:

```bash
token: your_jwt_token
```

---

## Database

MongoDB Atlas is used as the cloud database.

---

## Author

Developed by Swapnil Shende

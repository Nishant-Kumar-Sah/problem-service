# 📘 Problem Admin Service

This microservice is responsible for managing coding problems in a larger coding platform ecosystem. Admin users can create and manage problems including their descriptions, test cases, and language-specific code stubs. Other services interact with this service to fetch problem details and validate user submissions.

---

## 🏗️ Tech Stack

- **Node.js** with **Express**
- **MongoDB Atlas** (cloud-hosted)
- **Winston** for logging (to console, file, and MongoDB)
- **Docker** for containerization
- **dotenv** for managing environment variables

---

## 🧪 Features

- Create, fetch, update coding problems
- Manage language-specific code snippets and test cases
- Log errors and activities to:
  - Console
  - File (`error.log`)
  - MongoDB (`logs` collection)
- Structured API routing and error handling

---

## 🔌 API Endpoints (Sample)

| Method | Endpoint              | Description          |
|--------|-----------------------|----------------------|
| GET    | `/ping`               | Health check         |
| POST   | `/api/problems`       | Create a new problem |
| GET    | `/api/problems/:id`   | Get problem by ID    |
| PUT    | `/api/problems/:id`   | Update problem       |
| GET    | `/api/problems`       | Get all problems     |
| DELETE | `/api/problems/:id`    | Delete problem by ID |

---


## ✨ Running Locally

### 🧱  Prerequisites

- Node.js (v16+)

- MongoDB (local or hosted via Atlas)

### 📦 Installation
1. Clone the Repository
   ```
   git clone <repo-url>
   cd problem-service
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Setup .env file
4. Run the Service
    ```
    npm run dev 
    ```
5. Verify the service
     ```
     http://localhost:3000/ping
     ```
     
   





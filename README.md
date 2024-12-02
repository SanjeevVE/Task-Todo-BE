## Backend Task-Todo Project

This project provides a comprehensive backend setup to support a user authentication system and task management functionality. It interacts with a PostgreSQL database to manage users and tasks securely.

Currently, the following features are available:

- **User Registration:** Users can register, and their data is securely stored in the database.
- **User Login:** Users authenticate using JWT tokens, ensuring secure session management.
- **Task Management:** Users can create, view, edit, and delete tasks through the backend API.

---

## About

The Backend Task-Todo Project serves as the backend API for a task management application. It handles user authentication and task management, using JWT tokens for secure login sessions and managing user data in a PostgreSQL database.

The backend communicates with the frontend via RESTful API endpoints, allowing the frontend to interact with the database for user registration, authentication, and task management.

---

## Setup

### Prerequisites

Before you begin, ensure that the following software is installed on your machine:

- **Node.js** and **npm** (Node package manager)
- **PostgreSQL** installed and running on your machine
- **Frontend application (FE)** running and connected to the backend

### Installation

#### 1. Clone the repository

First, clone the backend repository to your local machine using the following command:
```bash
git clone https://github.com/yourusername/yourproject-backend.git

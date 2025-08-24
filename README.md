# Task-App

## Introduction
Small full stack application for managing stand alone and recurring projects and tasks. This repo contains both the app"s frontend and backend. 

---

## Backend

### Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [License](#license)

### Features
- Create, read, update, and delete tasks and projects
- Link tasks to projects
- Mark tasks and projects as completed
- RESTful API with Express and MongoDB

### Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your `.env` file with your MongoDB URI
4. Start the backend server: `npm run devstart`

### API Endpoints
#### Tasks
- `POST /task` — Create a new task
- `GET /task` — List all tasks
- `GET /task/:id` — Get a task by ID
- `PUT /task/:id` — Update a task by ID
- `DELETE /task/:id` — Delete a task by ID

#### projects
- `POST /project` — Create a new project
- `GET /project` — List all projects
- `GET /project/:id` — Get a project by ID
- `PUT /project/:id` — Update a project by ID
- `DELETE /project/:id` — Delete a project by ID

### Testing
You can use [curl](https://curl.se/) or [Postman](https://www.postman.com/) to test API endpoints.

### License
MIT

---

## Frontend

*To be added.*
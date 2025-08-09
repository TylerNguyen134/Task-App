# Task-App

## Introduction
Small full stack application for managing stand alone and recurring goals and tasks. This repo contains both the app's frontend and backend. 

---

## Backend

### Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [License](#license)

### Features
- Create, read, update, and delete tasks and goals
- Link tasks to goals
- Mark tasks and goals as completed
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

#### Goals
- `POST /goal` — Create a new goal
- `GET /goal` — List all goals
- `GET /goal/:id` — Get a goal by ID
- `PUT /goal/:id` — Update a goal by ID
- `DELETE /goal/:id` — Delete a goal by ID

### Testing
You can use [curl](https://curl.se/) or [Postman](https://www.postman.com/) to test API endpoints.

### License
MIT

---

## Frontend

*To be added.*
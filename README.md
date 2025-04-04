# Multi-Vendor Order Management System

# Node.js Application with MongoDB and Redis Caching

This repository contains a Node.js application that uses MongoDB for data storage and Redis for caching product listings. The application is containerized using Docker and managed with Docker Compose.

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setup Instructions

### 1. Clone the Repository


### 2. Install Dependencies

Install the necessary Node.js dependencies:

    Run `npm install` to install dependencies.
    Create a `.env` file based on `.env.example`.
    Run `npm start` to start the server.



### 3. Docker Setup

#### Build and Start Services

Use Docker Compose to build and start the services:



This command will start the following services:
- **App**: The Node.js application running on port 5000.
- **MongoDB**: The database service running on port 27017.
- **Redis**: The caching service running on port 6379.

### 4. Access the Application

Once the services are up, you can access the application at:


### 5. Running Tests

To run the Jest tests inside the Docker container, use:


## Environment Variables

The application uses the following environment variables:

- `MONGO_URI`: The MongoDB connection string. Set to `mongodb://mongo:27017/testdb` by default in `docker-compose.yml`.
- `REDIS_HOST`: The Redis host. Set to `redis` by default in `docker-compose.yml`.
- `REDIS_PORT`: The Redis port. Set to `6379` by default in `docker-compose.yml`.

## Caching with Redis

The application uses Redis to cache product listings for one hour. This reduces the load on the MongoDB database and improves response times for frequently accessed data.

## Project Structure

- `src/`: Contains the application source code.
  - `services/`: Contains service logic, including the product service with caching.
  - `models/`: Contains Mongoose models.
  - `tests/`: Contains test setup and test cases.
  - `controllers/`: Contains request handling logic for different routes.
  - `middlewares/`: Contains middleware functions for request processing (e.g., authentication, logging).
  - `routes/`: Defines the application routes and associates them with controllers.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

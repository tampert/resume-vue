# resume-vue

Authenication developing with Vue 3 in Vite, Express and PostgreSQL

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload frontend for Development

```sh
npm run dev
```

### Compile and Hot-Reload backend for Development

```
npx nodemon server.cjs
```

### Compile and Minify for Production

```sh
npm run build
```

### ENV
JWT_SECRET=<br />
VITE_NODE_PORT=<br />
VITE_NODE_URL=<br />

### PostgreSQL Credentials
POSTGRES_USER=<br />
POSTGRES_PASSWORD=<br />
POSTGRES_DATABASE=<br />
POSTGRES_PORT=<br />
POSTGRES_URL=<br />

### DOCKER & DOCKER-COMPOSE

```
# Stop and remove containers + volumes
docker-compose down -v  

# Rebuild and start fresh
docker-compose up --build  
```

In postgres_db container 
```
psql -U ${POSTGRES_USER} -d ${POSTGRES_DB}
```

Create user table if not exist
```
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

CREATE USER dirk WITH PASSWORD '1234';
GRANT ALL PRIVILEGES ON DATABASE root_db TO dirk;

## Test API Calls
Using Postman or Curl

### Register a User
```
curl -X POST http://localhost:5000/register -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com","password":"123456"}'
```

### Login
```
curl -X POST http://localhost:5000/login -H "Content-Type: application/json" -d '{"email":"john@example.com","password":"123456"}'
```

### Get User Info
```
curl -X GET http://localhost:5000/user -H "Authorization: Bearer YOUR_JWT_TOKEN"
```
# planpal-backend

### Description
This is the Backend for PlanPal, an application for Group 2's project for CS320 Section 2 Fall23.

## Routes

### POST /auth/register

Requires json such as:

```
{
    "email": "boffa@deez.com",
    "password": "123",
    "username": "nutz"
}
```

### POST /auth/login

Requires json such as:

```
{
    "email": "boffa@deez.com",
    "password": "123"
}
```

### GET /users

Requires login session cookie

### DELETE /users/:id

Requires login session cookie and user object id that matches

### PATCH /users/:id

Requires login session cookie and user object id that matches

Requires json such as:

```
{
    "username": "johndoe"
}
```

### POST /events/:id



### GET /events/:id



### PATCH /events/:id/:eventId



### DELETE /events/:id/:eventId



## File Structure

### controllers

### db

### helpers

### middlewares

### router


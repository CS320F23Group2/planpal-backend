# planpal-backend

### TODO
* Create Events Object and Schema
* Create, Read, Update, and Delete Routes for Events
* Create Calender Object and Schema
* Create, Read, Update, and Delete Routes for Calender
* Migrate to Prisma ORM (currently using mongoose, will change after first release)

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

## File Structure

### controllers

### db

### helpers

### middlewares

### router


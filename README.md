# planpal-backend

### Description
This is the Backend for PlanPal, an application for Group 2's project for CS320 Section 2 Fall23.

### Public Base Url: https://planpal-backend-xig7.onrender.com
### Running Locally Base Url: http://localhost:8080

## Routes

### POST /auth/register

#### Description: 
Register the user into the database

Requires json such as:

```
{
    "email": "boffa@deez.com",
    "password": "123",
    "username": "nutz"
}
```

#### Output:

```
{
    "username": "",
    "email": "",
    "authentication": {
        "password": "",
        "salt": ""
    },
    "_id": "",
    "__v": 
}
```

### POST /auth/login

#### Description: 
Log in the user and give back a cookie and other things for browser storage

Requires json such as:

```
{
    "email": "boffa@deez.com",
    "password": "123"
}
```

#### Output:

```
{
    "authentication": {
        "password": "",
        "salt": "",
        "sessionToken": ""
    },
    "_id": "",
    "username": "",
    "email": "",
    "__v": 
}
```

### GET /users

#### Description: 
Get back all users in database

Requires login session cookie

#### Output:

```
[
    {
        "_id": "",
        "username": "",
        "email": "",
        "__v": 
    },
    {
        "_id": "",
        "username": "",
        "email": "",
        "__v": 
    },
    {
        "_id": "",
        "username": "",
        "email": "",
        "__v": 
    },
    ...
]
```

### DELETE /users/:id

#### Description: 
Delete user from the database

Requires login session cookie and user object id that matches

#### Output:

```
{
    "_id": "",
    "username": "",
    "email": "",
    "__v": 
}
```

### PATCH /users/:id

#### Description: 
CHange the user's username

Requires login session cookie and user object id that matches

Requires json such as:

```
{
    "username": "johndoe"
}
```

#### Output:

```
{
    "_id": "",
    "username": "johndoe",
    "email": "",
    "__v": 
}
```

### POST /events/:id

#### Description: 
Create an event

Requires login session cookie and user object id that matches the object id of the user that is logged in 

Requires json such as:

```
{
    "ownerId": <:id parameter>,
    "title": "CS320 Assignment",
    "description": "GONNA DO DA THING",
    "start_date": "2023-10-01",
    "end_date": "2023-10-02"
}
```

#### Output:

```
{
    "ownerId": <:id parameter>,
    "users": [],
    "title": "CS320 Assignment",
    "description": "GONNA DO DA THING",
    "start_date": "2023-01-01T00:00:00.000Z",
    "end_date": "2023-02-02T00:00:00.000Z",
    "_id": "",
    "date": "",
    "__v": 
}
```

### GET /events/:id

#### Description: 
Get all of a user's events

Requires login session cookie and user object id that matches the object id of the user that is logged in 

#### Output:

```
[
    {
        "_id": "",
        "ownerId": "",
        "users": [],
        "title": "",
        "description": "",
        "start_date": "",
        "end_date": "",
        "date": "",
        "__v": 
    },
    {
        "_id": "",
        "ownerId": "",
        "users": [],
        "title": "",
        "description": "",
        "start_date": "",
        "end_date": "",
        "date": "",
        "__v": 
    },
    ...
]
```

### PATCH /events/:id/:eventId

#### Description: 
Changes a user's event details

Requires login session cookie and user object id that matches the object id of the user that is logged in  and event object id that matches the object id of the event the user wishes to modify

If you to not modify an field, then put "null" as the value

Requires json such as:

```
{
    "title": "null",
    "description": "GONNA DO DA THING Bigly",
    "start_date": "null",
    "end_date": "2023-10-03"
}
```

#### Output:

```
{
        "_id": "",
        "ownerId": "",
        "users": [],
        "title": "",
        "description": "GONNA DO DA THING Bigly",
        "start_date": "",
        "end_date": "2023-03-03T00:00:00.000Z",
        "date": "",
        "__v": 
    },
```

### DELETE /events/:id/:eventId

#### Description: 
Delete a user's event from database

Requires login session cookie and user object id that matches the object id of the user that is logged in  and event object id that matches the object id of the event the user wishes to delete

#### Output

```
{
    "_id": "",
    "ownerId": "",
    "users": [],
    "title": "",
    "description": "",
    "start_date": "",
    "end_date": "",
    "date": "",
    "__v": 
}
```

or null

## File Structure

### controllers

Logic of handling various http API calls

### db

Create/Define Schemas and define basic helper functions per Schema to interact with the tables

### helpers

Basic general use functions that are repeatdely used throughout the repo

### middlewares

Preprocessing protocol on http requests to do stuff like security

### router

Mapping routes to function calls

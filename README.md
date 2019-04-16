# Nodejs Role-Login with JWT-Auth, Bcrypt and PostgreSQL-Sequelize-ORM

Steps:

1: git clone https://github.com/webdelin/node-jwt-pg.git

2: cd node-jwt-pg

3: Edit DB Connection file app/config/env.js

4: npm i //sudo ? linux/mac

5: npm start


Postman POST method

http://localhost:8080/api/auth/signup

Body: -> raw: -> JSON(application/json)

<code>

{

"name": "name",\
"username": "loginname",\
"email": "test@test.test",\
"roles": ["USER"],\
"password": "123456789"

}</code>

--User registered successfully!

Postman POST method

http://localhost:8080/api/auth/signin

Body: -> raw: -> JSON(application/json)

<code>

{

"username": "loginname",\
"password": "123456789"

}</code>

copy this accessToken

{
    "auth": true,
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTU1NDU2MjUyLCJleHAiOjE1NTU1NDI2NTJ9.1oP5PIQyRNnQZ_-yXFl_tpWL5KBt2Hw1EiMUmOJjP-M"
}


Postman GET method

http://localhost:8080/api/test/user

Headers

key: x-access-token

VALUE: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTU1NDU2MjUyLCJleHAiOjE1NTU1NDI2NTJ9.1oP5PIQyRNnQZ_-yXFl_tpWL5KBt2Hw1EiMUmOJjP-M

<code>

{\
    "description": "User Content Page",\
    "user": {\
        "name": "name",\
        "username": "loginname",\
        "email": "test@test.test",\
        "roles": [\
            {\
                "id": 1,\
                "name": "USER",\
                "user_roles": {\
                    "userId": 4,\
                    "roleId": 1\
                }\
            }\
        ]\
    }\
}

</code>

http://localhost:8080/api/test/pm

http://localhost:8080/api/test/admin

Require PM or Admin Roles!

Can NOT access /api/test/admin url.

:-)

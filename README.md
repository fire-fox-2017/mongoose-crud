# Mongoose-CRUD

Mongoose-CRUD is example of create, read, update, and delete of MongoDB database using nodejs and mongoose module.

## Routes

| Routes | HTTP method | Description |
| ------ | ----------- | ----------- |
| /api/books | GET | Show all books info |
| /api/books | POST | Add new book to database |
| /api/books/:id | GET | Show one book info |
| /api/books/:id | PUT | Update info of a book |
| /api/books/:id | DELETE | Delete a book from database |
|         |            |             |
| /api/transactions | GET | Show all transactions info |
| /api/transactions | POST | Add new transactions to database |
| /api/transactions/:id | GET | Show one transactions info |
| /api/transactions/:id | PUT | Update info of a transactions |
| /api/transactions/:id | DELETE | Delete a transactions from database |
|         |            |             |
| /api/customers | GET | Show all customers info |
| /api/customers | POST | Add new customers to database |
| /api/customers/:id | GET | Show one customers info |
| /api/customers/:id | PUT | Update info of a customers |
| /api/customers/:id | DELETE | Delete a customers from database |


## How to Use

First install the dependencies and then start the server as follows:

```sh
$ npm install
$ npm start
```
The routes can be accessed via http://localhost:3000, recommended to be accessed using Postman etc.

# mongoose-crud

Authors: Haryana Wisnu Wardhana

Key : mongodb, CRUD

### Definition

Implementation mongoose dengan CRUD pada collection books,transactions,customers.

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd mongoose-crud
$ npm install
$ npm start
```

### Access CRUD

| Route | HTTP | Description|
| ------ | ------ | ------ |
| /books | GET | Get all the books |
| /books | POST | Create a books |
| /books/:id | DELETE | Delete a books |
| /books/:id | PUT | Update a books with new info |
| ------ | ------ | ------ |
| /transactions | GET | Get all the transactions |
| /transactions | POST | Create a transactions |
| /transactions/:id | DELETE | Delete a transactions |
| /transactions/:id | PUT | Update a transactions with new info |
| ------ | ------ | ------ |
| /customers | GET | Get all the customers |
| /customers | POST | Create a customers |
| /customers/:id | DELETE | Delete a customers |
| /customers/:id | PUT | Update a customers with new info |

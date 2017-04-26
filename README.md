# mongoose-crud

mongoose-crud merupakan aplikasi untuk menyimpan data buku, transaksi, dan customer menggunakan mongo db dan framework mongoose

# List Route
## Route Book
Route | HTTP | Description
--- | --- | ---
/api/books | GET | Mendapatkan data semua buku
/api/books | POST | Menambah data buku
/api/books/:id | GET | Mencari data buku berdasarkan id
/api/books/:id | PUT | Mengubah data buku
/api/books/:id | DELETE | Menghapus data buku

## Route Transaction
Route | HTTP | Description
--- | --- | ---
/api/transaction | GET | Mendapatkan data semua transaction
/api/transactions | POST | Menambah data transaction
/api/transactions/:id | GET | Mencari data transaction berdasarkan id
/api/transactions/:id | PUT | Mengubah data transaction
/api/transactions/:id | DELETE | Menghapus data transaction

## Route Customers
Route | HTTP | Description
--- | --- | ---
/api/customers | GET | Mendapatkan data semua customer
/api/customers | POST | Menambah data customer
/api/customers/:id | GET | Mencari data customer berdasarkan id
/api/customers/:id | PUT | Mengubah data customer
/api/customers/:id | DELETE | Menghapus data customer

# Usage

1. Install package depedency

    npm install

2. Pastikan database di mongo db memiliki database library

    use library

3. Jalankan aplikasi dengan menggunakan nodemon

    npm start

    Jika belum terinstall nodemon, di package.json,
    ubah

    "start": "nodemon ./bin/www"

    menjadi

    "start": "node ./bin/www"

    lalu jalankan menggunakan perintah

    npm start

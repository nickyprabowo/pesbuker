Aplikasi Pesbuker dibangun Create React App dan menggunakan Redux sebagai State Management dan saya berusaha menyusun projek
dengan konsep Duck untuk memisahkan fungsionalitas ke dalam beberapa modul, yaitu :

    1. Modul Home
        - Berisi komponen dan halaman untuk tampilan Home
    2. Modul Photo 
        - Berisi komponen, halaman, action creator, dan juga reducer untuk mengolah tampilan foto dan album
    3. Modul Post
        - Berisi komponen, halaman, action creator, dan juga reducer untuk mengolah tampilan post dan comment
    4. Modul User
        - Berisi komponen, halaman, action creator, dan juga reducer untuk mengolah tampilan user

Setiap modul paling tidak memiliki Pages, Component, Action Creator, Model, Request, dan Reducer nya sendiri. Terkecuali modul Home yang ternyata saat saya buat hanya mengambil fungsionalitas yang telah ada di modul lain.

    1. Pages, kumpulan dari berbagai komponen yg membentuk 1 halaman utuh
    2. Component, bagian kecil dari halaman
    3. Action Creator, fungsi yang menjadi perantara aplikasi dan Redux
    4. Model, fungsi untuk memproses data kembalian dari API (data preprocessing). (ex: ubah format tanggal, menyatukan variabel, pengecekan variabel)
    5. Request, kumpulan fungsi untuk mengakses API
    6. Reducer, kumpulan fungsi untuk mengubah data di Redux Store

Pada projek ini digunakan konsep Smart and Dummy Component, dimana di tiap modul terdapat komponen Container (Smart Component) untuk berhubungan Redux. Container bertugas untuk menentukan data dan action apa saja yang bisa diakses oleh suatu modul.

Note
1. Disini saya asumsikan pengguna sebagai user dengan userId = 1

Langkah-langkah instalasi untuk Development
1. masuk ke folder aplikasi
2. npm install / yarn install
3. npm start

Langkah-langkah instalasi untuk Production
1. masuk ke folder aplikasi
2. npm install / yarn install
3. npm run build / yarn build
4. yarn global add serve
5. serve -s build

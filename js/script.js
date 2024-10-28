// Mengambil elemen dengan class 'navbar' dan menyimpannya di variabel 'navbar'
let navbar = document.querySelector('.navbar');

// Mengambil elemen dengan id 'menu-btn' dan menyimpannya di variabel 'menuBtn'
let menuBtn = document.getElementById('menu-btn');

// Menambahkan event listener untuk 'click' pada tombol menu
menuBtn.addEventListener('click', () => {
    // Menambahkan atau menghapus class 'active' pada elemen navbar saat tombol diklik
    navbar.classList.toggle('active');
    
    // Menghapus class 'active' dari elemen searchForm saat tombol menu diklik
    searchForm.classList.remove('active');
    
    // Menghapus class 'active' dari elemen cartItem saat tombol menu diklik
    cartItem.classList.remove('active');
});

// Mengambil elemen dengan class 'search-form' dan menyimpannya di variabel 'searchForm'
let searchForm = document.querySelector('.search-form');

// Menambahkan event listener untuk 'click' pada tombol search dengan id 'search-btn'
document.querySelector('#search-btn').onclick = () => {
    // Menambahkan atau menghapus class 'active' pada elemen searchForm saat tombol search diklik
    searchForm.classList.toggle('active');
    
    // Menghapus class 'active' dari elemen navbar saat tombol search diklik
    navbar.classList.remove('active');
    
    // Menghapus class 'active' dari elemen cartItem saat tombol search diklik
    cartItem.classList.remove('active');
}

// Mengambil elemen dengan class 'cart-items-container' dan menyimpannya di variabel 'cartItem'
let cartItem = document.querySelector('.cart-items-container');

// Menambahkan event listener untuk 'click' pada tombol cart dengan id 'cart-btn'
document.querySelector('#cart-btn').onclick = () => {
    // Menambahkan atau menghapus class 'active' pada elemen cartItem saat tombol cart diklik
    cartItem.classList.toggle('active');
    
    // Menghapus class 'active' dari elemen navbar saat tombol cart diklik
    navbar.classList.remove('active');
    
    // Menghapus class 'active' dari elemen searchForm saat tombol cart diklik
    searchForm.classList.remove('active');
}

// Menambahkan event listener untuk 'scroll' pada window
window.onscroll = () => {
    // Menghapus class 'active' dari elemen navbar saat pengguna melakukan scroll
    navbar.classList.remove('active');
    
    // Menghapus class 'active' dari elemen searchForm saat pengguna melakukan scroll
    searchForm.classList.remove('active');
    
    // Menghapus class 'active' dari elemen cartItem saat pengguna melakukan scroll
    cartItem.classList.remove('active');
}

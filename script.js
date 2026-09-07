/**
 * Fungsi untuk memproses klik kotak nominal uang.
 * Langsung mengalihkan pengguna ke halaman login tanpa pop-up.
 * @param {string} nominal - Besar nominal hadiah (tidak dipakai karena langsung redirect)
 */
function prosesKlik(nominal) {
    window.location.href = "login.html";
}

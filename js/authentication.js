let username, password;
username = document.getElementById('username');
password = document.getElementById('password');
function check() {
if (username.value == 'ss' && password.value == '1234') {
    window.location.href = 'success.html';
} else {
    alert('Login Gagal! Username atau Password anda tidak tepat');
}
}
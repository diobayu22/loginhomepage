function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Data dummy (simulasi tanpa database)
    const validEmail = "admin@gmail.com";
    const validPassword = "12345";

    if (email === validEmail && password === validPassword) {
        alert("Login berhasil!");
    } else {
        alert("email/password yang anda masukkan salah");
    }
}

// Modal
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Klik luar modal untuk menutup
window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const validEmail = "admin@gmail.com";
    const validPassword = "12345";

    if (email === validEmail && password === validPassword) {
        alert("Login berhasil!");
    } else {
        openModal("errorModal");
    }
}

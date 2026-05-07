function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const validEmail = "admin@gmail.com";
    const validPassword = "12345";

    if (email === validEmail && password === validPassword) {
        openModal("succesLoginModal");
    } else {
        openModal("errorModal");
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


document.addEventListener("DOMContentLoaded", () => {
  console.log("VoxArcadia Loaded 🚀");

  initSmoothScroll();
  initNavbarScroll();
  initTopupForm();
  initRegisterForm();
  initLoginForm();
});

/* ================= SMOOTH SCROLL ================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      if (targetId.length > 1) {
        e.preventDefault();
        document.querySelector(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* ================= NAVBAR SCROLL EFFECT ================= */
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
}

function initTopupForm() {
  const topupForm = document.getElementById("topupForm");
  if (!topupForm) return;

  const gameSelect = document.getElementById("gameSelect");
  const nominalSelect = document.getElementById("nominalSelect");
  const totalHarga = document.getElementById("totalHarga");
  const userIdInput = document.getElementById("userIdInput");
  const paymentInputs = document.querySelectorAll('input[name="payment"]');

  const summaryGame = document.getElementById("summaryGame");
  const summaryUser = document.getElementById("summaryUser");
  const summaryNominal = document.getElementById("summaryNominal");
  const summaryPayment = document.getElementById("summaryPayment");

  // Nominal change
  nominalSelect.addEventListener("change", () => {
    const harga = Number(nominalSelect.value || 0);
    totalHarga.textContent = "Rp " + harga.toLocaleString("id-ID");
    summaryNominal.textContent =
      nominalSelect.options[nominalSelect.selectedIndex]?.text || "-";
  });

  // Game change
  gameSelect.addEventListener("change", () => {
    summaryGame.textContent = gameSelect.value || "-";
  });

  // User ID input
  userIdInput.addEventListener("input", () => {
    summaryUser.textContent = userIdInput.value || "-";
  });

  // Payment change
  paymentInputs.forEach(input => {
    input.addEventListener("change", () => {
      summaryPayment.textContent = input.value;
    });
  });

  // Submit
  topupForm.addEventListener("submit", e => {
    e.preventDefault();

    if (!gameSelect.value || !nominalSelect.value) {
      alert("Lengkapi data top-up terlebih dahulu!");
      return;
    }

    alert(
      "Top-Up Berhasil 🎮\n\n" +
      "Game: " + gameSelect.value + "\n" +
      "User ID: " + userIdInput.value + "\n" +
      "Nominal: Rp " +
      Number(nominalSelect.value).toLocaleString("id-ID")
    );

    topupForm.reset();
    totalHarga.textContent = "Rp 0";
    summaryGame.textContent = "-";
    summaryUser.textContent = "-";
    summaryNominal.textContent = "-";
    summaryPayment.textContent = "-";
  });
}


/* ================= REGISTER (SIMULASI) ================= */
function initRegisterForm() {
  const registerForm = document.getElementById("registerForm");
  if (!registerForm) return;

  registerForm.addEventListener("submit", e => {
    e.preventDefault();

    alert("Register berhasil (simulasi)");

    localStorage.setItem("userRegistered", "true");
    window.location.href = "login.html";
  });
}

/* ================= LOGIN (SIMULASI) ================= */
function initLoginForm() {
  const loginForm = document.getElementById("loginForm");
  if (!loginForm) return;

  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    alert("Login berhasil 🎉");

    localStorage.setItem("isLogin", "true");
    window.location.href = "index.html";
  });
}

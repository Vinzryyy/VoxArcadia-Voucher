

document.addEventListener("DOMContentLoaded", () => {
  console.log("VoxArcadia Loaded 🚀");

  smoothScroll();
  navbarScrollEffect();
  fakeFormHandler();
});


function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId.length > 1) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
}

function navbarScrollEffect() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });
}



document.addEventListener("DOMContentLoaded", () => {
  const topupForm = document.getElementById("topupForm");
  const gameSelect = document.getElementById("gameSelect");
  const nominalSelect = document.getElementById("nominalSelect");
  const totalHarga = document.getElementById("totalHarga");

  // Update harga saat nominal dipilih
  if (nominalSelect && totalHarga) {
    nominalSelect.addEventListener("change", () => {
      const harga = nominalSelect.value || 0;
      totalHarga.textContent =
        "Rp " + Number(harga).toLocaleString("id-ID");
    });
  }

  if (topupForm) {
    topupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!gameSelect.value || !nominalSelect.value) {
        alert("⚠️ Lengkapi data top-up terlebih dahulu.");
        return;
      }

      alert(
        "Top-Up Berhasil\n\n" +
        "Game: " + gameSelect.value + "\n" +
        "Nominal: Rp " + Number(nominalSelect.value).toLocaleString("id-ID") +
        "\n\nTerima kasih telah menggunakan VoxArcadia!"
      );

      topupForm.reset();
      totalHarga.textContent = "Rp 0";
    });
  }
});
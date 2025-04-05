document.addEventListener("DOMContentLoaded", function () {
  const images = [
    {
      src: "assets/img/kabinet_sarif_banin.jpg",
      desc: "Kabinet Sarif Banin - Kepengurusan Periode 2025-2026",
    },
    {
      src: "assets/img/kabinet_sarif_banat.jpg",
      desc: "Kabinet Sarif Banat - Kepengurusan Periode 2025-2026",
    },
    {
      src: "assets/img/Foto Web/1.png",
      desc: "Raker & RAPBO - Kepengurusan Periode 2025-2026",
    },
    {
      src: "assets/img/Foto Web/2.png",
      desc: "Raker & RAPBO - Kepengurusan Periode 2025-2026",
    },
    {
      src: "assets/img/Foto Web/3.png",
      desc: "Tarling IKADU Banin - Masjid Madrasah Sultan Hasan",
    },
    {
      src: "assets/img/Foto Web/4.png",
      desc: "Tarling IKADU Banat - Masjid Madrasah Sultan Hasan",
    },
    {
      src: "assets/img/Foto Web/5.png",
      desc: "Tarling IKADU Banin - Masjid El Mosheer Tantawy",
    },
    {
      src: "assets/img/Foto Web/6.png",
      desc: "Tarling IKADU Banat - Masjid El Mosheer Tantawy",
    },
    {
      src: "assets/img/Foto Web/7.png",
      desc: "Bukber IKADU Banat",
    },
    {
      src: "assets/img/Foto Web/8.png",
      desc: "Ta'jil On The Road bersama Kabinet Sarif- Ta'rif",
    },
    {
      src: "assets/img/Foto Web/9.png",
      desc: "Ta'jil On The Road bersama Kabinet Sarif- Ta'rif",
    },
    {
      src: "assets/img/Foto Web/10.png",
      desc: "Bukber IKADU Banin",
    },
    {
      src: "assets/img/Foto Web/11.png",
      desc: "Kajian Kitab Ta'limul Muta'allim",
    },
    {
      src: "assets/img/Foto Web/12.png",
      desc: "Kajian Kitab Ta'limul Muta'allim",
    },
    {
      src: "assets/img/Foto Web/13.png",
      desc: "I'tikaf IKADU Banat",
    },
  ]; // Ganti dengan URL gambar dan deskripsinya

  const grid = document.getElementById("photoGrid");
  const modal = document.getElementById("photoModal");
  const modalImg = document.getElementById("modalImg");
  const modalDesc = document.getElementById("modalDesc"); // Elemen untuk deskripsi
  const closeBtn = document.querySelector(".close");

  images.forEach((item) => {
    let img = document.createElement("img");
    img.src = item.src;
    img.classList.add("thumbnail");
    img.onclick = function () {
      openModal(item.src, item.desc);
    };
    grid.appendChild(img);
  });

  function openModal(src, desc) {
    modal.style.display = "flex";
    modalImg.src = src;
    modalDesc.textContent = desc; // Menampilkan deskripsi
  }

  function closeModal() {
    modal.style.display = "none";
  }

  // Tutup modal jika klik di luar gambar
  modal.addEventListener("click", function (event) {
    if (event.target !== modalImg && event.target !== modalDesc) {
      closeModal();
    }
  });

  // Tutup modal jika klik tanda silang
  closeBtn.addEventListener("click", closeModal);
});

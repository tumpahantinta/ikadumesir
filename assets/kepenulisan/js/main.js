document.addEventListener("DOMContentLoaded", function () {
  const kepenulisanData = [
    { name: "Ulyanisa Imtitsalillah", role: "Kepenulisan", image: "foto.jpg" },
    { name: "Afifah Azmi Saiyidah", role: "Kepenulisan", image: "foto.jpg" },
    { name: "Arina Husna Nabila", role: "Kepenulisan", image: "foto.jpg" },
    { name: "Fairuza Usman", role: "Kepenulisan", image: "foto.jpg" },
    { name: "Marinda Sekar Ayu", role: "Kepenulisan", image: "foto.jpg" },
    {
      name: "Mariyah Qibtiyah Khoirunisa",
      role: "Kepenulisan",
      image: "foto.jpg",
    },
    { name: "Moch. Fikri Abdul Aziz", role: "Kepenulisan", image: "foto.jpg" },
    { name: "Muhammad Firas", role: "Kepenulisan", image: "foto.jpg" },
    { name: "Salma Amirotuz Zahri", role: "Kepenulisan", image: "foto.jpg" },
    {
      name: "Muhammad Yafi Dwi Ari Kusuma",
      role: "Kepenulisan",
      image: "foto.jpg",
    },
    { name: "Zidan Muhammad Faiz", role: "Kepenulisan", image: "foto.jpg" },
    { name: "Zukhrufa Redina Izza", role: "Kepenulisan", image: "foto.jpg" },
  ];

  const container = document.getElementById("kepenulisan");

  kepenulisanData.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}" class="card-img">
      <h2 class="card-title">${member.name}</h2>
      <p class="card-role">${member.role}</p>
    `;

    container.appendChild(card);
  });
});

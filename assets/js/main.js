$(document).ready(function () {
  $("#slider-hero").owlCarousel({
    loop: true,
    nav: true,
    // mouseDrag: true
    items: 1,
    dots: false,
    margin: 0,
    navText: [
      "<i class='fas fa-angle-left'><i>",
      "<i class='fas fa-angle-right'><i>",
    ],
    navContainer: "#slider-hero-nav",
  });
  $("#struktural-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
    navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>",
    ],
    navContainer: "#slider-tools-1",
  });
  $(document).ready(function () {
    // Inisialisasi Owl Carousel
    $("#dokumentasi-slider").owlCarousel({
      loop: true,
      nav: true,
      items: 4, // Jumlah item yang ditampilkan
      dots: false,
      margin: 20,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
      },
      navText: [
        "<i class='fas fa-angle-left'></i>",
        "<i class='fas fa-angle-right'></i>",
      ],
      navContainer: "#slider-tools-3", // Tempat tombol navigasi
    });
  });
});

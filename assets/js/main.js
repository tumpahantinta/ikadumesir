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
    nav: true,
    // mouseDrag: true
    items: 3,
    dots: false,
    margin: 20,
    navText: [
      "<i class='fas fa-angle-left'><i>",
      "<i class='fas fa-angle-right'><i>",
    ],
    navContainer: "#slider-tools-1",
  });
  $("#alumni-slider").owlCarousel({
    loop: true,
    nav: true,
    // mouseDrag: true
    items: 2,
    dots: false,
    margin: 20,
    navText: [
      "<i class='fas fa-angle-left'><i>",
      "<i class='fas fa-angle-right'><i>",
    ],
    navContainer: "#slider-tools-2",
  });
  $(document).ready(function () {
    // Inisialisasi Owl Carousel
    $("#dokumentasi-slider").owlCarousel({
      loop: true,
      nav: true,
      items: 4, // Jumlah item yang ditampilkan
      dots: false,
      margin: 20,
      navText: [
        "<i class='fas fa-angle-left'></i>",
        "<i class='fas fa-angle-right'></i>",
      ],
      navContainer: "#slider-tools-3", // Tempat tombol navigasi
    });
  });
});

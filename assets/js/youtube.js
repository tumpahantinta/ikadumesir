document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".youtube-video");

  let playingVideo = null; // Untuk menyimpan video yang sedang dimainkan

  function checkVideoVisibility() {
    videos.forEach((video) => {
      const rect = video.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (!isVisible) {
        stopVideo(video); // Hentikan video jika keluar dari tampilan
      }
    });
  }

  function stopVideo(video) {
    const src = video.src;
    video.src = ""; // Reset src untuk menghentikan video
    video.src = src; // Kembalikan src agar bisa diputar lagi nanti
  }

  function pauseOtherVideos(currentVideo) {
    videos.forEach((video) => {
      if (video !== currentVideo) {
        stopVideo(video); // Hentikan semua video kecuali yang sedang dimainkan
      }
    });
  }

  videos.forEach((video) => {
    video.addEventListener("play", function () {
      pauseOtherVideos(video); // Pause semua video lain saat ini diputar
      playingVideo = video; // Simpan referensi ke video yang sedang dimainkan
    });
  });

  window.addEventListener("scroll", checkVideoVisibility);
});

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 100,
    freeMode: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
  });


  // 카운트

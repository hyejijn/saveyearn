


// 슬라이드


 const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
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


 
  
// 차트
  document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d');
  
    const config = {
      type: 'doughnut',
      data: {
        labels: ['구조·치료비', '입양·임보 지원비', '시설 운영비', '인건비·인력지원', '홍보·교육비', '행정·관리비'],
        datasets: [{
          label: '재정보고현황',
          data: [40, 20, 15, 10, 10, 5],
          backgroundColor: ['#FF944D', '#FFA573', '#FFD266', '#B6C867', '#D3D3D3', '#B95C94'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 20
            }
          }
        }
      }
    };

  
    new Chart(ctx, config);

  });



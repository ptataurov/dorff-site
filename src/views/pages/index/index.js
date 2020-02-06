import 'swiper/css/swiper.css'
import Swiper from 'swiper/js/swiper'

document.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('index-pg')

  if (!page) return

  new Swiper('._slider.swiper-container', {
    slidesPerView: 1,
    loop: true,

    navigation: {
      prevEl: '._slider ._prev',
      nextEl: '._slider ._next'
    },

    pagination: {
      el: '._slider ._pagination',
      clickable: true,
      bulletClass: '_bullet',
      bulletActiveClass: 'active',
      modifierClass: null,
      renderBullet: (index, className) => {
        return `<span class="${className}"><span></span></span>`
      }
    }
  })
})

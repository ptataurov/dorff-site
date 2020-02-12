import 'swiper/css/swiper.css'
import Swiper from 'swiper/js/swiper'

document.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('index-pg')

  if (!page) return

  const collection = page.querySelector('._collection')
  const collectionText = collection.querySelector('._text')
  const collectionLink = collection.querySelector('._link')

  const slider = new Swiper('._slider.swiper-container', {
    init: false,
    slidesPerView: 1,
    navigation: {
      prevEl: '._slider-nav ._prev',
      nextEl: '._slider-nav ._next',
      disabledClass: 'disabled'
    },

    pagination: {
      el: '._slider ._pagination',
      clickable: true,
      bulletClass: '_bullet',
      bulletActiveClass: 'active',
      modifierClass: null,
      renderBullet: (idx, className) => {
        return `<span class="${className}"><span></span></span>`
      }
    }
  })

  const handler = () => {
    const { slides, activeIndex } = slider

    const activeSlide = slides[activeIndex]

    const text = activeSlide.dataset.text
    const href = activeSlide.dataset.href

    collectionText.innerHTML = text
    collectionLink.href = href
  }

  slider.on('init', handler)

  slider.on('slideChange', handler)

  slider.init()
})

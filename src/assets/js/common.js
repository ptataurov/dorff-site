const isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints

const { body } = document

isTouchDevice && body.classList.add('_touch-device')

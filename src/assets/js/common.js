const isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints

const { body } = document

isTouchDevice && body.classList.add('touch-device')

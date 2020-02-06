import isTouchDevice from 'assets/js/is-touch-device.js'

const { body } = document

isTouchDevice && body.classList.add('is-touch-device')

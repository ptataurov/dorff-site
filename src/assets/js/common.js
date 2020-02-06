import isTouchDevice from 'assets/js/is-touch-device.js'

const { body } = document

isTouchDevice && body.classList.add('touch-device')

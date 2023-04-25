const BACKEND_URL = 'https://bc83-2402-8100-27f9-bfef-3bad-ff1d-485c-3b32.ngrok-free.app'

const AUTH_URL = '/api/auth'
const IMAGE_URL = '/api/image'

export const REGISTER_URL =         BACKEND_URL + AUTH_URL + '/register'
export const LOGIN_URL =            BACKEND_URL + AUTH_URL + '/login'
export const LOGOUT_URL =           BACKEND_URL + AUTH_URL + '/logout'

export const GET_IMAGE_URL =        BACKEND_URL + IMAGE_URL + '/get/from/url'
export const GET_PROFILE_PIC =      BACKEND_URL + IMAGE_URL + '/get/profile/pic'
export const GET_SIMILARITY_URL =   BACKEND_URL + IMAGE_URL + '/get/matches'
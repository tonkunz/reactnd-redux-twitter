export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser (id) {
  return {
    id: SET_AUTHED_USER,
    id
  }
}
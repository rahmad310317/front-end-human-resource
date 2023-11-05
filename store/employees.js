// state global variables
export const state = () => ({
  name: '',
  email: '',
  age: '',
  gender: '',
  phone: '',
  team_id: '',
  role_id: '',


})

export const mutations = {
  updateName(state, payload) {
    state.name = payload
  },
  updateEmail(state, payload) {
    state.email = payload
  },
  updateGender(state, payload) {
    state.email = payload
  },
  updateAge(state, payload) {
    state.age = payload
  },
  updatePhone(state, payload) {
    state.phone = payload
  },
  updateTeam_id(state, payload) {
    state.team_id = payload
  },
  updateRole_id(state, payload) {
    state.role_id = payload
  }


}
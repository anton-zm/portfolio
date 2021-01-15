export const state = () => ({
  ru: false,
  eng: true,
})

// change state from here

export const mutations = {
  toggleLang(state) {
    state.ru = !state.ru
    state.eng = !state.eng
  },
}

// get data about my state
export const getters = {
  getRu(state) {
    return state.ru
  },
  getEng(state) {
    return state.eng
  },
}

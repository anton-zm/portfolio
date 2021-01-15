export const state = () => ({
  ru: false,
  eng: true,
})

export const mutations = {
  toggleLang(state) {
    state.ru = !state.ru
    state.eng = !state.eng
  },
}

export const getters = {
  getRu(state) {
    return state.ru
  },
  getEng(state) {
    return state.eng
  },
}

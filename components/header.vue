<template>
  <header class="header">
    <div class="header__line"></div>
    <content-box class="header__headings">
      <img
        @click="changeLang"
        src="/gb.jpg"
        alt="English"
        class="header__lang"
        :class="{ active: eng }"
      />
      <img
        @click="changeLang"
        src="/ru.jpg"
        alt="Russian"
        class="header__lang"
        :class="{ active: ru }"
      />
    </content-box>
  </header>
</template>

<script>
import Content from '@/components/content'
export default {
  components: {
    'content-box': Content,
  },
  methods: {
    changeLang() {
      this.$store.commit('lang/toggleLang')
    },
  },
  computed: {
    ru() {
      return this.$store.getters['lang/getRu']
    },
    eng() {
      return this.$store.getters['lang/getEng']
    },
  },
}
</script>

<style scoped>
.header {
  width: 100%;
  min-height: 80px;
  background-color: transparent;
  border-bottom: 1px solid whitesmoke;
}
.active {
  border: 2px solid white;
}
/* .header__line {
  width: 100%;
  opacity: 0.5;
  border: 1px solid #a1a1a1;
  transform: translateY(-2px);
}
.header__headings {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}
.header__title {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  margin: 0 auto;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.header__subtitle {
  font-weight: 200;
  font-size: 48px;
  line-height: 64px;
  text-align: center;
  color: #ffffff;
  width: 75%;
  margin: 20px auto 0;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
}
.header__title_under {
  font-size: 12px;
}
@media (max-width: 768px) {
  .header {
    min-height: 70vh;
  }
  .header__line {
    display: none;
  }
  .header__title {
    font-size: 12px;
  }
  .header__title_under {
    font-size: 10px;
  }
  .header__subtitle {
    font-size: 32px;
  }
}
@media (max-width: 425px) {
  .header__subtitle {
    font-size: 24px;
  }
} */
</style>

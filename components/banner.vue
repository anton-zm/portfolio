<template>
  <section class="banner">
    <content-box class="banner__content">
      <h1 class="banner__title">{{ title }}</h1>
      <p class="banner__subtitle">{{ subtitle }}</p>
      <p class="banner__stack">
        JavaScript HTML5 CSS3 Vue.js Nuxt.js NPM Webpack Git BEM Grid Flexbox
        Express.js MongoDB GitHub Figma Node.js Responsive Jest REST API React MobX 
        React Native Android Studio Styled Components TypeScript Yarn 
      </p>
    </content-box>
  </section>
</template>

<script>
import Content from '@/components/content'

export default {
  components: {
    'content-box': Content,
  },
  computed: {
    ru() {
      return this.$store.getters['lang/getRu']
    },
    eng() {
      return this.$store.getters['lang/getEng']
    },
    title() {
      if (this.ru) {
        return this.titleRu
      } else {
        return this.titleEng
      }
    },
    subtitle() {
      if (this.ru) {
        return this.subtitleRu
      } else {
        return this.subtitleEng
      }
    },
  },

  data() {
    return {
      titleRu: 'Портфолио',
      titleEng: 'My Portfolio',
      subtitleRu: 'Вэб-разработка',
      subtitleEng: 'Web development',
    }
  },
}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 60vh;
  color: white;
  position: relative;
  overflow: hidden;
}
.banner__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.banner__title {
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  font-size: 4rem;
  font-weight: 100;
  margin-left: 80px;
}
.banner__subtitle {
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  font-size: 1.75rem;
  text-transform: uppercase;
  margin-left: 80px;
  margin-top: 24px;
  font-weight: 100;
}
.banner__stack {
  position: absolute;
  top: 70px;
  left: 100px;
  font-weight: bold;
  font-size: 55px;
  transform: rotate(-15deg);
  opacity: 0.08;
}
@media screen and (max-width: 540px) {
  .banner__title,
  .banner__subtitle {
    margin-left: 0;
  }
}
</style>

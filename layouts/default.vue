<template>
  <div>
    <Header />
    <Nuxt class="page" />
    <Footer />
    <go-up />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import goUpBtn from '@/components/ui/goUpBtn'
export default {
  components: {
    Header,
    Footer,
    'go-up': goUpBtn,
  },
}
</script>

<style>
html {
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.page {
  background-image: url(../static/a100bg.png);
  background-attachment: fixed;
}
@media screen and (max-width: 768px) {
  html {
    font-size: 14px;
  }
}
</style>

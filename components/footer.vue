<template>
  <footer class="footer">
    <content-box class="footer__content">
      <div class="footer__copyright">2019 - {{ year }}</div>
    </content-box>
  </footer>
</template>

<script>
import Content from '@/components/content'
export default {
  components: {
    'content-box': Content,
  },
  data() {
    return {
      year: ``,
    }
  },
  mounted() {
    this.year = new Date().getFullYear()
  },
}
</script>

<style scoped>
.footer {
  color: #cac7c7;
  margin: 60px 0 0;
  padding-bottom: 48px;
  padding-top: 48px;
  border-top: 1px solid white;
}
.footer__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer__copyright {
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
}
</style>

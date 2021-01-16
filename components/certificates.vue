<template>
  <section class="certificates">
    <content-box class="certificates__content">
      <ContentTitle :title="title" />
      <div class="certificates__container"></div>
    </content-box>
  </section>
</template>

<script>
import Content from '@/components/content'
import ContentTitle from '@/components/content-title'
export default {
  components: {
    'content-box': Content,
    ContentTitle,
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
  },
  data() {
    return {
      titleRu: 'Сертификаты',
      titleEng: 'Certificates',
    }
  },
}
</script>

<style lang="scss" scoped></style>

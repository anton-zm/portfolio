<template>
  <section class="contacts" id="contacts">
    <content-box class="contacts__content">
      <ContentTitle :title="title" />
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
      titleRu: 'Контакты',
      titleEng: 'Contacts',
    }
  },
}
</script>

<style scoped>
.contacts {
  width: 100%;
  padding: 40px 0;
}
.contacts__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

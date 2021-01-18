<template>
  <section class="contacts" id="contacts">
    <content-box class="contacts__content">
      <ContentTitle :title="title" />
      <div class="contacts__container">
        <p class="contacts__item contacts__item_email">antonzm34@gmail.com</p>
        <p class="contacts__item contacts__item_tlg">@Antonzm</p>
      </div>
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
.contacts__container {
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  margin-top: 32px;
}
.contacts__item {
  color: white;
  font-size: 1.375rem;
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
}
.contacts__item_email,
.contacts__item_tlg {
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
}
.contacts__item_email::before {
  content: url('../static/email.png');
  margin-right: 15px;
  position: absolute;
  top: 4px;
  left: -40px;
}
.contacts__item_tlg::before {
  content: url('../static/tlg.png');
  margin-right: 10px;
  position: absolute;
  top: 0;
  left: -40px;
}
@media screen and (max-width: 768px) {
  .contacts__container {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .contacts__item {
    margin-bottom: 20px;
  }
}
</style>

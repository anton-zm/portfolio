<template>
  <section class="certificates" id="certificates">
    <content-box class="certificates__content">
      <ContentTitle :title="title" />
      <div class="certificates__container">
        <img
          @click="openPopup(item)"
          v-for="item in certificates"
          :key="item"
          :src="item"
          alt="YandexPractikum Certificate"
          class="certificates__item"
        />
      </div>
    </content-box>
    <Popup v-if="popup" @closePopup="togglePopup"
      ><img :src="popupImg" class="popupImg"
    /></Popup>
  </section>
</template>

<script>
import Content from '@/components/content'
import ContentTitle from '@/components/content-title'
import Popup from '@/components/popup'
export default {
  components: {
    'content-box': Content,
    ContentTitle,
    Popup,
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
  methods: {
    openPopup(img) {
      this.popupImg = img
      this.togglePopup()
    },
    togglePopup() {
      this.popup = !this.popup
    },
  },
  data() {
    return {
      titleRu: 'Сертификаты',
      titleEng: 'Certificates',
      certificates: [
        '/cert1_eng.jpg',
        '/cert2_eng.jpg',
        '/cert1_ru.jpg',
        '/cert2_ru.jpg',
      ],
      popupImg: ``,
      popup: false,
    }
  },
}
</script>

<style scoped>
.certificates {
  width: 100%;
  padding: 40px 0;
}
.certificates__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.certificates__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  gap: 24px;
  margin-top: 32px;
}
.certificates__item {
  cursor: pointer;
  width: 100%;
}
.popupImg {
  width: 100%;
  max-height: 90vh;
}
</style>

<template>
  <section class="certificates" id="certificates">
    <content-box class="certificates__content">
      <ContentTitle :title="title" />
      <div class="certificates__container">
        <img
          :src="cert1"
          alt="YandexPractikum Certificate"
          class="certificates__item"
        />
        <img
          :src="cert2"
          alt="YandexPraktikum Certificate"
          class="certificates__item"
        />
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
    cert1() {
      if (this.ru) {
        return this.cert1Ru
      } else {
        return this.cert1Eng
      }
    },
    cert2() {
      if (this.ru) {
        return this.cert2Ru
      } else {
        return this.cert2Eng
      }
    },
  },
  data() {
    return {
      titleRu: 'Сертификаты',
      titleEng: 'Certificates',
      cert1Ru: '/cert1_ru.jpg',
      cert1Eng: '/cert1_eng.jpg',
      cert2Ru: '/cert2_ru.jpg',
      cert2Eng: '/cert2_eng.jpg',
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 32px;
}
.certificates__item {
  width: calc(100% / 4);
  margin-right: 24px;
  cursor: pointer;
}
</style>

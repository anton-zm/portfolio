<template>
  <header class="header">
    <content-box class="header__content">
      <div class="header__icons-cont">
        <a
          href="https://github.com/anton-zm"
          target="_blanc"
          class="header__icons"
          title="My GitHub"
        >
          <img src="/gh.png" alt="GitHub" class="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/anton-zmanovski-1290591bb/"
          target="_blanc"
          class="header__icons"
          title="My LinkedIn"
        >
          <img src="/linkedin.jpg" alt="LinkedIn" class="icon" />
        </a>
      </div>

      <nav class="header__menu">
        <a
          @click="scroll(link.to)"
          v-for="link in menu"
          :key="link.name"
          href="#"
          class="menu__link"
          >{{ link.name }}</a
        >
      </nav>
      <div class="header__langs">
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
      </div>
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
      if (!event.target.classList.contains('active')) {
        this.$store.commit('lang/toggleLang')
      }
    },
    scroll(id) {
      event.preventDefault()
      const site = document.querySelector(`#${id}`)
      site.scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
  computed: {
    ru() {
      return this.$store.getters['lang/getRu']
    },
    eng() {
      return this.$store.getters['lang/getEng']
    },
    menu() {
      if (this.ru) {
        return this.ruMenu
      } else {
        return this.engMenu
      }
    },
  },
  data() {
    return {
      ruMenu: [
        { name: 'Проекты', to: 'projects' },
        { name: 'Контакты', to: 'contacts' },
        { name: 'Сертификаты', to: 'certificates' },
      ],
      engMenu: [
        { name: 'Projects', to: 'projects' },
        { name: 'Contacts', to: 'contacts' },
        { name: 'Certificates', to: 'certificates' },
      ],
    }
  },
}
</script>

<style scoped>
.header {
  width: 100%;
  min-height: 80px;
  background-color: transparent;
  border-bottom: 1px solid whitesmoke;
  padding: 20px 0;
}

.header__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header__icons-cont {
  display: flex;
}
.header__icons {
  display: block;
  width: 30px;
  margin-right: 15px;
}
.icon {
  width: 100%;
}

.menu__link {
  color: white;
  text-decoration: none;
  margin: 0 20px;
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  transition: 0.3s;
  letter-spacing: 1px;
}
.menu__link:hover {
  opacity: 0.7;
}
.header__langs {
  display: flex;
  flex-direction: row;
}
.header__lang {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
}
.header__lang:last-of-type {
  transform: translateX(-10px);
  position: relative;
  z-index: 1;
}
.active {
  opacity: 1;
  position: relative;
  z-index: 2;
  box-shadow: 3px 0 15px, -3px 0 15px;
  cursor: default;
}
@media screen and (max-width: 540px) {
  .header__menu {
    display: flex;
    flex-direction: column;
  }
  .menu__link {
    text-align: center;
    margin-bottom: 8px;
  }
}
</style>

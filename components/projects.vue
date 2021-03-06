<template>
  <section class="projects" id="projects">
    <content-box class="projects__content">
      <ContentTitle :title="title" />
      <div class="projects__container">
        <Card
          @clickCard="openPopup(project)"
          v-for="project in projects"
          :key="project.img"
          :title="project.title"
          :img="project.img"
          :alt="project.title"
        />
      </div>
    </content-box>
    <Popup v-if="popup" @closePopup="togglePopup">
      <div class="popup__container">
        <img :src="popupImg" class="popupImg" />
        <div class="popup__info">
          <div class="popup__data">
            <h2 class="popup__title">{{ popupTitle }}</h2>
            <p class="popup__description popup__text">{{ popupDescription }}</p>
            <p class="popup__stack popup__text">Stack: {{ popupStack }}</p>
          </div>
          <div class="popup__buttons">
            <a :href="webLink" target="_blanc" class="popup__button">{{
              web
            }}</a>
            <!-- <a :href="gitLink" target="_blanc" class="popup__button" id="gh">{{
              git
            }}</a> -->
            <button @click="toGitHub" class="popup__button" id="gh">{{
              git
            }}</button>
          </div>
        </div>
      </div>
    </Popup>
  </section>
</template>

<script>
import Content from '@/components/content'
import ContentTitle from '@/components/content-title'
import Card from '@/components/project-card'
import Popup from '@/components/popup'

export default {
  components: {
    'content-box': Content,
    ContentTitle,
    Card,
    Popup,
  },
  methods: {
    openPopup(item) {
      this.NDA = false    
      this.popupImg = item.img
      this.popupTitle = item.title
      this.popupDescription = item.description
      this.popupStack = item.stack
      this.webLink = item.url
      this.gitLink = item.github
      this.togglePopup()
      setTimeout(()=>{
        if(item.nda){
          this.NDA = true
          this.setNDA();
      }
      },1000)
      
    },
    togglePopup() {
      document.body.classList.toggle('popup-is-opened')
      this.popup = !this.popup
    },
    setNDA(){
      const gh = document.querySelector('#gh')
      gh.addEventListener('mouseover', (event)=>{
        event.target.textContent = this.gitNDA
      })
      gh.addEventListener('mouseout', (event)=>{
        event.target.textContent = this.git
      })
    },
    toGitHub(event){
      event.preventDefault();
      if(!this.NDA){
        window.open(this.gitLink, '_blank')
      }
    }
    
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
    web() {
      if (this.ru) {
        return this.webRu
      } else {
        return this.webEng
      }
    },
    
    projects() {
      if (this.ru) {
        return this.projectsRu
      } else {
        return this.projectsEng
      }
    },
    projectsEng() {
      return this.$store.getters['projects/getEng']
    },
    projectsRu() {
      return this.$store.getters['projects/getRu']
    },
  },

  data() {
    return {
      titleRu: 'Проекты',
      titleEng: 'Projects',
      webRu: 'Смотреть в браузере',
      webEng: 'Watch in browser',
      gitRu: 'Смотреть код на GitHub',
      gitEng: 'Repository on GitHub',
      gitNDA: 'Sorry, NDA project',
      NDA: false,
      git: 'GitHub',
      popupImg: ``,
      popupTitle: '',
      popupDescription: '',
      popupStack: '',
      webLink: '',
      gitLink: '',
      popup: false,
      
    }
  },
}
</script>

<style scoped>
.projects {
  width: 100%;
  padding: 40px 0;
}
.projects__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.projects__container {
  margin-top: 52px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}
.popup__container {
  display: flex;
  flex-direction: row;
  height: 100%;
}
.popupImg {
  max-width: 35%;
}
.popup__info {
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  max-width: 500px;
}
.popup__title {
  color: #5f5b5b;
}
.popup__description {
  margin-top: 48px;
}
.popup__text {
  color: #5f5b5b;
  line-height: 1.5;
}
.popup__stack {
  margin-top: 48px;
}
.popup__buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.popup__button {
  display: block;
  text-decoration: none;
  color: white;
  font-size: 16px;
  text-align: center;
  padding: 10px 24px;
  background-color: #4438f1;
  border-radius: 5px;
  transition: 0.3s;
  margin-right: 10px;
  outline: none;
  border:none;
  cursor: pointer;
}
.popup__button:hover {
  opacity: 0.8;
}
@media screen and (max-width: 890px) {
  .projects__container {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  .popup__buttons {
    flex-direction: column;
  }
  .popup__button {
    margin-top: 12px;
  }
}
@media screen and (max-width: 600px) {
  .projects__container {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
}
@media screen and (max-width: 490px) {
  .projects__container {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .popupImg {
    display: none;
  }
  .popup__info {
    margin-left: 0;
    max-width: 100%;
  }
}
</style>

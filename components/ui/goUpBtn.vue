<template>
  <div class="go-up go-up_hidden" @click="goUp">
    <img src="/up.png" alt="To top" class="up" />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    window.addEventListener('scroll', function () {
      const btn = document.querySelector('.go-up')
      if (pageYOffset > 500) {
        btn.classList.remove('go-up_hidden')
      } else {
        btn.classList.add('go-up_hidden')
      }
    })
  },
  methods: {
    goUp() {
      const top = document.querySelector('.header')
      top.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
.go-up {
  width: 30px;
  position: fixed;
  bottom: 40px;
  right: 30px;
  z-index: 200;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.up {
  width: 100%;
}

.go-up_hidden {
  display: none;
}
@media screen and (max-width: 600px) {
  .go-up {
    width: 20px;
  }
}
</style>

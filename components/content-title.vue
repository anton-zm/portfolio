<template>
  <h2 class="content-title">{{ title }}</h2>
</template>

<script>
export default {
  props: {
    title: String,
  },
}
</script>

<style scoped>
.content-title {
  font-size: 34px;
  letter-spacing: 1px;
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: 100;
  position: relative;
  display: inline;
  padding-bottom: 10px;
  color: #ffffff;
}
.content-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 80%;
  height: 1px;
  background-color: #ffffff;
}
@media screen and (max-width: 768px) {
  .content-title {
    font-size: 26px;
  }
}
</style>

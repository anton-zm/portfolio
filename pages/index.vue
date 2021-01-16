<template>
  <main>
    <Banner />
    <Projects />
    <Certificates />
    <Contacts />
  </main>
</template>

<script>
import Banner from '@/components/banner'
import Projects from '@/components/projects'
import Certificates from '@/components/certificates'
import Contacts from '@/components/contacts'
export default {
  components: {
    Certificates,
    Contacts,
    Projects,
    Banner,
  },
  data() {
    return {}
  },
}
</script>

<style></style>

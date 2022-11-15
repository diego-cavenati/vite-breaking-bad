<script>
import { onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppMain from './components/AppMain.vue'

import { store as state } from './store'

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(response => {
          this.state.actors = response.data;
          this.state.loading = false;
        })
        .catch(err);
    },
    mounted() {
      this.callApi("this.state.API_url");
    }
  },
  components: { AppHeader }
}
</script>

<template>

  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>

</template>

<style lang="sass">

</style>

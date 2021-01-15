<template>
  <div class="Top">
    <Header></Header>
    <Listing :movies="movies"></Listing>
  </div>
</template>

<script>
import Header from "./Header";
import Listing from "./Listing";

export default {
 name: 'top',
  data () {
    return {
      movies: {}
    }
  },
  components: {
   Listing,
   Header
  },
 async mounted () {
   let params = {
     api_key: localStorage.getItem('api_key')
   }
   await this.axios.get('/movie/top_rated', {params}).then((res) => {
     // handling request in callback
     // setting the response data to movies property
     this.movies = res.data
   }).catch((e) => {
     // handling errors
     console.error(e)
   })
 }
}
</script>

<style scoped>

</style>

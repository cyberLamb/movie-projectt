<template>
<div class="Popular">
  <Header></Header>
  <Listing :movies="movies" />
</div>
</template>

<script>
import Listing from './Listing'
import Header from './Header'

export default {
  name: 'Popular',
  data () {
    return {
      movies: {},
    }
  },
  async mounted () {
    // creating data for sending a request
    let params = {
      api_key: localStorage.getItem('api_key')
    }
    // create and send axios request with data we are already created
    await this.axios.get('/movie/popular', {params}).then((res) => {
      // handling request in callback
      // setting the response data to movies property
      console.log(res)
      this.movies = res.data

      console.log(this.movies)
    }).catch((e) => {
      // handling errors
      console.error(e)
    })
  },
  components: {
    Listing, Header
  }
}
</script>

<style scoped>

</style>

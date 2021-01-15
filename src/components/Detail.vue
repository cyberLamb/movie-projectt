<template>
  <div class="detail">
    <Header></Header>
    <div :style="`background: url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})`" class="h-100 p-15">
      <div class="detail-container container bordered bg-white p-15">
         <div class="detail-flex">
             <div class="">
               <h1> {{ detail.original_title }} </h1>
               <h5>Popularity: {{detail.popularity}}</h5>
               <div v-if="detail.adult">For Adults</div>
               <div v-else>For All family</div>
               <p>{{detail.overview}}</p>
             </div>
           <img :src="'https://image.tmdb.org/t/p/w500' + detail.backdrop_path" alt="">
         </div>
      </div>
    </div>
    <Similar :currentMovie = "currentMovie"/>
  </div>
</template>

<script>
import Header from './Header'
import Similar from './Similar'

export default {
  name: "Detail",
  components: {
    Header,
    Similar
  },
  data(){
    return {
      detail: {},
      currentMovie: this.$route.query.id,
    }
  },
  async mounted(){
    let params = {
      api_key: localStorage.getItem('api_key')
    }
    await this.axios.get('movie/' + this.currentMovie,{params}).then((res) => {
      this.detail = res.data
    })
    .catch((e) =>{
      console.log(e)
    })
  },

}
</script>

<style scoped>
.detail-container{
  margin-top: 30px;
}
.detail-flex{
  display: flex;
}

</style>

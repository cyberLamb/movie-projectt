<template>
  <div class="container">
    <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="movie swiper-slide" v-for="movie in movies.results" :key='movies.id'>
          <router-link :to="'detail?id=' + movie.id">
            <div>
              <h3>{{movie.original_title}}</h3>
              <img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path" :alt="movie.original_title">
            </div>
          </router-link>
        </div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>

  </div>
</template>

<script>

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default {
  name: "similar",
  data () {
    return {
      movies: {},
    }
  },
  props: ['currentMovie'],
  async mounted () {
    // creating data for sending a request
    let params = {
      api_key: localStorage.getItem('api_key')
    }
    // create and send axios request with data we are already created
    await this.axios.get(`/movie/${this.currentMovie}/similar`,  {params}).then((res) => {
      // handling request in callback
      // setting the response data to movies property
      console.log(res)
      this.movies = res.data

      console.log(this.movies)
    }).catch((e) => {
      // handling errors
      console.error(e)
    })

    this.initSwiper();
  },
  methods: {
    initSwiper(){

      let swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
    }
  }
}
</script>

<style scoped>
.swiper-container {
  height: 300px;
}
</style>

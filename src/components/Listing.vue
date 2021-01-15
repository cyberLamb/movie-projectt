<template>
<div class="Listing">
  <div class="container">
    <div class="movies container">
      <div class="movie" v-for="movie in movies.results" :key='movies.id'>
        <router-link :to="'detail?id=' + movie.id">
          <div>
            <h3>{{movie.original_title}}</h3>
            <img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path" :alt="movie.original_title">
          </div>
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Listing',
  props: ['movies'],
  mounted(){
    console.log(this.movies)
  }
}
</script>

<style scoped>
.movies {
  display: flex;
  flex-wrap: wrap;
}
.movie {
  margin: 20px;
}
.movie a {
  text-decoration: none;
  color: #272727;
}
.movie a img{
  transition: .5s ease-in-out;
  border: 3px solid transparent;
}
.movie a img:hover{
  border: 3px solid forestgreen;
  box-shadow: 2px 2px 20px forestgreen;
}
h3 {
  font-size: 15px;
}
</style>

f<template>
  <div class="home">
    <Header></Header>
    <div class="cover">
      <h1>Best Movie</h1>
    </div>
<!--    <h1>{{ msg }}</h1>-->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'


export default {
  name: 'Homepage',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cover {
  background: url("../assets/avangers.jpg") top center no-repeat;
  height: 700px;
  background-size: 100%;
  color: white;
}
.home div{
  display: flex;
  justify-content: center;
}
.home img{
  width: 1050px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="header">
    <div class="container">
      <div class="navbar">
        <router-link to="/">
          <div class="logo"></div>
        </router-link>
        <div class="menu">
          <router-link to="/popular">Popular Movies</router-link>
          <router-link to="/top">Top Movies</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  min-width: 375px;
  background-color: #2c3e50;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo{
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 50px;
  margin: 10px 0;
}
.navbar{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.menu a{
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  margin: 0 10px;
}
</style>

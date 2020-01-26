<template>
  <div id="app">
    <img src="">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
}
a {
  text-decoration: none;
}
html {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
  background-color:#2c3e50;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
form {
  width: 80%;
  margin: auto;
}
input {
  display: block;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px
}
button {
  display: block;
  padding: 20px;
  width: 50%;
  margin: auto;
  background-color:rebeccapurple;
  border: 1px solid rebeccapurple;
  color: #ffffff;
  font-size: 24px;
}
</style>

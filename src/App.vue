<template>
  <section class="title">
      <div class="container">
          <h1>Hi, I'm Pryt Liubomyr</h1>
      </div>
      <ShellBackground/>
  </section>
</template>

<script>
import ShellBackground from './components/ShellBackground.vue'

export default {
  name: 'App',
  components: {
      ShellBackground
  }
}
</script>

<style>
body{
    margin: 0;
    padding: 0;
    background-color: rgba(20, 20, 20, 1);
    color: #f8f8f8;
}
.container{
    width: 100%;
    padding: 0 7em;
}

section{
    display: block;
    min-height: 100vh;
}

.title{
    height: 100vh;
}

.title .container{
    position: absolute;
    padding-top: 10em;
}

.title h1{
    text-align: center;
}
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/

</style>

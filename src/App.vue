<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg="Whatevs"/>-->
    <HelloWorld msg="Whatevs">
      <p slot="a1">data for slots</p>
      <p slot="a2">another data for slots here</p>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    ///defineste aici pt a o putea folosi ca si componenta
    //as best practice se pune litera "v" pentru a sti ca e vue framework
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <v-cons-list :showList="true" :lists="myList"/>
    <hr/>
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg="Whatevs"/>-->
    <HelloWorld msg="Whatevs" @updatedNrInStore="clicked">
      <p slot="a1">data for slots</p>
      <p slot="a2">another data for slots here</p>
    </HelloWorld>
    <hr/>
    <vComp></vComp>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Comp from './components/Comp.vue';
import ConsList from './components/ConsList.vue'

export default {
  name: 'app',
  components: {
    ///defineste aici pt a o putea folosi ca si componenta
    //as best practice se pune litera "v" pentru a sti ca e vue framework
    HelloWorld,
    vComp: Comp,
    vConsList: ConsList
  },
  data(){
    return{
      myList: ['sudhf', 'sdf']
    }
  },
  methods:{
    clicked(data){
        console.log('button activated', data);
      }
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

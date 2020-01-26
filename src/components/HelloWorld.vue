<template>
  <div class="hello">
    <h1>{{ storeClicks }}</h1>
    <h1>{{ msg }}</h1>
    <slot name="a1"></slot>
    <button @click="increaseClicks">Click it</button>
    <slot name="a2"></slot>
    <p>{{ showRandomText(' something') }}</p>
    
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

//try not to use slots, dar daca le folosesti incearca sa pui tag-uri html native, use stores instead of slot
export default {
  name: 'HelloWorld',

  props: {
    //metode de a aduce informatii in interiorul unei componente
    msg: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      clicks: 0
    }
  },
  watch: {
    //se uita la ceva si se definesc ca metoda
    //definesc in watchers numele variabilei pe car evreau sa o vad si primesc 2 parametri la callback(newvalue si oldvalue)
    clicks(newvalue, oldvalue){
      console.log('called', 'new', newvalue, ' - ', 'old', oldvalue); //es-lint no-console
}
  },
  computed: {
    //reactiva si aduci informatia printr-un computed
    //sutn metode dar getters
    //nu le apelezi cu paranteze rotunde in tag-ul html
    //read only, ca tot ce e in store
  ...mapGetters([
    'storeClicks'
  ])
  },
  methods: {
    ...mapActions([
      'updateClickOnClick'
    ]),
    increaseClicks(){
      //this.clicks++;
      //without mapAction this.$store.dispatch('updateClickOnClick', this.storeClicks +1)
      this.updateClickOnClick(this.storeClicks +1);
      //in cazul computed nu se poate apela ca functie (no () braces)
    },
    showRandomText(a){
        return 'Random' + a;
        //in this case we will call it as a method in the html tag
    }
  },

}

//lodash-ul nu e bun pt shadow events (like onlick etc)
//bun pt orice nu e shadow event
///lodash: reduci, flatten arrays, filtrezi, sa scoti cheile dintr-un obiect etc, daca un parametru e safe
//mostly useful: array, objects, Maths, collection
//mostly usefull for verifications
//checks in raspunsuri pe api's


//props, data, computed -> sunt getters (read only si reactiv)
//data -> poate folosi si ca setter(this.click = ceva)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

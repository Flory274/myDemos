<template>
  <div>
    <template>
      <p>sdtghjs</p>
    </template>
    <template>
      <button @click="compInc(2)">YES</button>
    </template>
    <h2>Boom!</h2>
    <p>{{ storeClicks }}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  data: () => {return{
    myLocalData: 'local data'
  }},
  computed:{
    ...mapGetters([
      'storeClicks'
    ])
  },
  methods:{
    compInc(amount){
      const newAmount = this.storeClicks + amount;
      this.$store.dispatch('updateClickOnClick', newAmount);
    }
  }

}
</script>

<style scoped>
/*scoped iti izoleaza css-ul pt aceasta componenta*/
p{
  color: #33ddff;
}

</style>
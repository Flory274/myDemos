<template>
  <div>
    <p v-if="showList && showTheList && showComputed && above">SHOW ME THE MONEYZ</p>
    <p v-else>DON't SHOW ME THE MONEYZ</p>
    <div class="list" v-if="list.length > 0">
      <div class="itemHolder" v-for="data in list" :key="data.id">
          <v-item :dataSet="data" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Item from './Item.vue'
export default {
  props: {
    showList: {
      type: Boolean,
      required: true
    },
    lists: {
      type: Array,
      required: false,
      default: () => ['No Data']
    }
  },
  data: () => {
    return{
      showTheList: true,
      list: []
    };
  },
  computed:{
    ...mapGetters([
      'storeClicks'
    ]),
    showComputed(){
      return true;
    },
    above(){
      return this.storeClicks > 10;
    }
  },
  mounted(){
      console.log(this.lists);
      if(this.lists.length < 2) return;

//forEach -> metoda nu intoarce nimic
//map iti intoarce un alt array
      const data = this.lists.map((item, index) => ({
        id: index+1,
        name: item
      }));
      this.list = data;
      //console.log(data);
  },
  components: {
    vItem: Item
  }
}
</script>

<style>

</style>
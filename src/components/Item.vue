<template>
  <div class="item">
    <div class="id">
      {{dataSet.id}}
    </div>
    <div class="name">
      {{dataSet.name}}
    </div>
  </div>
</template>

<script>
export default {
  props:{
    dataSet: {
      type: Object,
      required: true
    }

  }
}
</script>

<style scoped>

div.item{
  display: flex;
  justify-content: flex-end;
}

</style>
<template>
  <div class="card">
    <div v-if="title" class="card-header">
      {{ title }}
    </div>

    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: ['title']
}
</script>
<style lang="scss" scope>
.card{
    box-shadow: 0px 3px 10px rgb(41, 45, 56);
    color: #dce2ec;
    border: 0;
    background-color: #353c48;
    .card-header{
        color: #dce2ec;
        border: 0;
        background-color: #2f3540;
    }
}
</style>

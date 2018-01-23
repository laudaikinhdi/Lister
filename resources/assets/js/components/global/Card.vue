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
    .card {
        color: white;
        border-color: #717171;
        background-color: #505050;
    }
    .card-header {
        color: #8980fe;
        border-color: #717171;
        background-color: #3A3A3A;
    }
</style>

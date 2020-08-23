<template>
  <div>
    <div>codeRouter.vue</div>
  </div>
</template>
<script>
export default {
  name: 'codeRouter',
  created () {
    console.log(this.$route.params.param)
    console.log(this.$route.query.param1)
  }
}
</script>

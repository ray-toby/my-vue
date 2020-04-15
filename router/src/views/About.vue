<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{id}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    props: ['id'],
    created() {
      console.log(this.$route)
    },
  }
</script>

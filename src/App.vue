<template>
  <div>
    <router-view />
    Hello {{ name }}
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  setup() {
    const name = 'aliens'
    return {
      name
    }
  }
}
</script>

<style>
</style>

<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{ touch-action: pan-y; }
</style>

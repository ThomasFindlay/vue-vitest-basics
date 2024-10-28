<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Tabs from './components/Tabs.vue'
const tabs = ['Home', 'Profile', 'About', 'Settings']
const activeTab = ref(tabs[0])
</script>

<template>
  <div>
    <Tabs :tabs="tabs" v-model="activeTab" />
  </div>
</template>

<style scoped>

</style>

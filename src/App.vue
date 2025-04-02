<script setup>
import Tabs from "./components/Tabs.vue";
const tabs = ["Home", "Profile", "About", "Settings"];
const activeTab = defineModel("activeTab");
</script>

<template>
  <div>
    <Tabs :tabs="tabs" v-model="activeTab" />
  </div>
</template>

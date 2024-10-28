<script setup>
  const props = defineProps({
    tabs: {
      type: Array,
      default: () => ([])
    },
    activeTab: {
      type: String
    }
  })
</script>

<template>
  <div :class="$style.root">
    <ul :class="$style.tab_list">
      <li :class="$style.tab_list_item" v-for="tab of tabs" :key="tab">
        <button type="button" @click="">{{ tab }}</button>
      </li>
    </ul>
  </div>
</template>
<style module>
.root {}

.tab_list {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.tab_list_item {
  
}
</style>

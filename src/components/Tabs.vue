<script setup>
const props = defineProps({
  tabs: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <ul :class="$style.tab_list" role="tablist">
      <li v-for="tab of tabs" :key="tab" role="presentation">
        <button
          type="button"
          :class="[
            $style.tab_button,
            tab === props.modelValue && $style.active,
          ]"
          role="tab"
          :id="`tab-${tab}`"
          :aria-selected="tab === props.modelValue"
          @click="emit('update:modelValue', tab)"
        >
          {{ tab }}
        </button>
      </li>
    </ul>
  </div>
</template>
<style module>
.tab_list {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #ccc;
  padding: 0;
}

.tab_button {
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: #007bff;
}

.active {
  border-bottom: 2px solid #007bff;
  background-color: green;
  color: white;
}
</style>

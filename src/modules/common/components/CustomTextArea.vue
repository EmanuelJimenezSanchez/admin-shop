<script setup lang="ts">
interface Props {
  modelValue?: string;
  error?: string;
}

defineProps<Props>();

defineEmits(['update:modelValue', 'blur']);
</script>

<template>
  <div>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value ?? '')"
      @blur="$emit('blur')"
      class="shadow h-32 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :class="['form-control', { 'border-red-400': error }]"
    ></textarea>

    <span class="text-red-400" v-if="error">{{ error }}</span>
  </div>
</template>

<style scoped>
@reference "@/assets/main.css";

.form-control {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none;
}
</style>

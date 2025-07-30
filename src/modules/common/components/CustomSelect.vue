<script lang="ts" setup>
interface Props {
  modelValue?: string;
  error?: string;
  options?: Record<string, string>;
}

defineProps<Props>();

defineEmits(['update:modelValue', 'blur']);
</script>

<template>
  <div>
    <select
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value ?? '')"
      @blur="$emit('blur')"
      class="form-control"
      :class="['form-control', { 'border-red-400': error }]"
    >
      <option value="">Seleccione</option>
      <option v-for="option in Object.keys(options ?? {})" :key="option" :value="option">
        {{ options?.[option] }}
      </option>
      <!-- <option value="kid">Niño</option>
      <option value="women">Mujer</option>
      <option value="men">Hombre</option>
      <option value="unisex">Unisex</option> -->
    </select>

    <span class="text-red-400" v-if="error">{{ error }}</span>
  </div>
</template>

<style scoped>
@reference "@/assets/main.css";

.form-control {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none;
}
</style>

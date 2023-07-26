<template>
    <select :value="modelValue" @change="changeOption">
      <option disabled value="">Filter by</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.name }}
      </option>
    </select>
  </template>
  
  <script>
  export default {
    name: 'Select',
    props: {
      modelValue: {
        type: String
      },
      options: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      changeOption(e) {
        this.$emit('update:modelValue', e.target.value);
      }
    }
  }
  </script>
  
  <style scoped>
    .select{
      padding: 10px;
    border: none;
    border-radius: 5px;
    background: #0d1c1c;
    margin-right: 10px;
    }
  </style>
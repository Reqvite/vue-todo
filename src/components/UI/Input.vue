<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
  </template>
  
  <script>
  export default {
    name: 'Input',
    props: {
      modelValue: [String, Number]
    },
    methods: {
      updateInput(e) {
        this.$emit('update:modelValue', e.target.value)
      }
    }
  }
  </script>
  
  <style scoped>
  .input {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.08);
    margin-right: 10px;
  }
  
  </style>
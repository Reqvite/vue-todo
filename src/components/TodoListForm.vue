<template>
    <div>
    <h1>Todo List</h1>
    <Input
      v-model="todo"
      type="text"
      placeholder="Write todo"
      @input="todo = $event.target.value"
    />
    <Button @click="createTodo">Add todo</Button>
</div>
  </template>
  
  <script>
  export default {
    emits: ['create'],
    data() {
      return {
        todo: ''
      };
    },
    methods: {
      createTodo() {
        if (!this.todo) return;
        const newTodo = {
          id: Date.now(),
          text: this.todo,
          completed: false
        };
        this.$emit('create', newTodo);
        this.todo = '';
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
<script>
import TodoItem from './TodoListItem.vue'

export default {
  components: {
    TodoItem
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    save(data){
      this.$emit('edit', data)
  }
}
}
</script>

<template>
  <div>
    <ul v-if="todos.length > 0" class="list">
      <transition-group name="todo-list">
      <TodoItem
       v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @edit="save"
        @remove="$emit('remove', todo)"
        @update="$emit('update', todo)" />
      </transition-group>
    </ul>
    <p v-else>No todos</p>
  </div>
</template>

<style scoped>
.list{
  display: grid;
  gap: 10px
}

.todo-list-item {
  display: inline-block;
  margin-right: 10px;
}
.todo-list-enter-active,
.todo-list-leave-active {
  transition: all 0.2s ease;
}
.todo-list-enter-from,
.todo-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.todo-list-move {
  transition: transform 0.2s ease;
}
</style>

<script>
import TodoList from "./components/TodoList.vue";
import TodoListForm from "./components/TodoListForm.vue";

export default {
  components: {
    TodoList,
    TodoListForm,
  },
  data() {
    return {
      todos: [
        {
          id: "1",
          text: "ffffffffffffffffffffffffffffffffxt",
          completed: false,
        },
        { id: "2", text: "texfffdfdst", completed: false },
        { id: "3", text: "texfsdfdst", completed: false },
      ],
      selectedSort: "",
      sortOptions: [
        { value: "all", name: "All" },
        { value: "completed", name: "Completed" },
        { value: "todo", name: "To do" },
      ],
    };
  },
  methods: {
    createTodo(newTodo) {
      this.todos.push(newTodo);
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((item) => item.id !== todo.id);
    },
    updateTodo(todo) {
      if (!todo.completed) {
        this.todos.find((item) => item.id === todo.id).completed = true;
      } else {
        this.todos.find((item) => item.id === todo.id).completed = false;
      }
    },
    editTodo(todo){
      this.todos.find((item) => item.id === todo.id).text = todo.text;
    }
  },
  mounted() {
    if (localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'));
      } catch(e) {
        localStorage.removeItem('todos');
      }
    }
  },
  computed: {
    filterTodos() {
      switch (this.selectedSort) {
        case "completed":
        return [...this.todos.filter(todo => todo.completed)]
        case "todo":
        return [...this.todos.filter(todo => !todo.completed)]
        default:
          return [...this.todos].reverse();
      }
    },
  },
  watch:{
    todos: {
      handler(){
        const parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
      },
      deep: true
    }
  }
};
</script>

<template>
  <TodoListForm @create="createTodo" />
  <Select class="select" v-model="selectedSort" :options="sortOptions" />
  <TodoList 
  :todos="filterTodos"
   @remove="removeTodo"
    @update="updateTodo"
     @edit="editTodo"/>
</template>

<style scoped>
.select {
  margin-top: 20px;
}
</style>

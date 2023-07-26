<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      disabled: true,
      text: this.todo.text,
    };
  },
  methods: {
    edit(){
      this.disabled = false
      this.editedText = this.text; 
    },
    save(){
      const todo = this.todo
      this.$emit('edit', {
      ...todo,
      text: this.text
    })
    this.disabled = true
    }
  }
};
</script>

<template>
  <li class="listItem">
    <input  
    class="input"
    :disabled="disabled"
     :class="{'todo-completed': todo.completed }"
      :text="text"
      v-model="text"
      @input="text = $event.target.value"
      />
    <div class="block">
      <Button v-if="!todo.completed" @click="disabled ? edit() : save()">{{ disabled ? 'Edit' : 'Save' }}</Button>
      <Button @click="$emit('update', todo)">{{ todo.completed ? 'Incomplete' : 'Complete' }}</Button>
      <Button @click="$emit('remove', todo)">Delete</Button>
    </div>
  </li>
</template>

<style scoped>
.listItem {
  padding: 15px 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 550px;
  background: rgba(255, 255, 255, 0.08);
}

.input{
    background: none;
    border: none;
  }
.todo-completed {
  text-decoration: line-through;
  color: gray;
}

.block {
  display: flex;
  gap: 5px;
}
</style>
  
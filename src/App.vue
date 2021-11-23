<template>
  <home-screen>
    <ul>
      <todo-item
        v-for="todo in todoList"
        v-bind:key="todo.id"
        :id="todo.id"
        :title="todo.title"
        :desc="todo.desc"
        :done="todo.done"
      ></todo-item>
    </ul>
  </home-screen>
</template>
<script>
import HomeScreen from "./components/HomeScreen.vue";
import TodoItem from "./components/todoItem.vue";

export default {
  components: { HomeScreen, TodoItem },
  data() {
    return {
      todoList: [
        {
          id: "manuel",
          title: "Manuel xxx",
          desc: "0123 45678 90",
          done: true,
        },
        {
          id: "manuelyssssyyy",
          title: "Manuel yyy",
          desc: "0123 45678 90",
          done: false,
        },
                {
          id: "manueldsfsdfyyy",
          title: "Manuel yyfdy",
          desc: "0123 4567dd8 90",
          done: false,
        },
                 {
          id: "manuelyqqyyy",
          title: "Manuelqq yyy",
          desc: "0123 45qq678 90",
          done: false,
        },
                 {
          id: "manwdeuelyyyy",
          title: "dddd yyy",
          desc: "0123 45678 90",
          done: false,
        },
      ],
    };
  },
};
</script>
<style scoped>
* {
  
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
ul {
  overflow:hidden;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex-block;
  justify-content: center;
}
</style>
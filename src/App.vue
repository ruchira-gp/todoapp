<template>
  <home-screen>
    <div>
      <div v-if="isLoading">Loading...</div>
      <div v-else>
        <ul>
          <todo-item
            @click.native="deleteItem(todo)"
            v-for="(todo, index) in todoList"
            :key="index + '-todo'"
            :id="todo.id"
            :title="todo.title"
            :desc="todo.desc"
            :done="todo.done"
          ></todo-item>
        </ul>
      </div>
    </div>
  </home-screen>
</template>
<script>
import HomeScreen from "./components/HomeScreen.vue";
import TodoItem from "./components/todoItem.vue";
import { db } from "./firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";

export default {
  components: { HomeScreen, TodoItem },
  data() {
    return {
      todoList: [],
      isLoading: false,
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    reload() {
      this.$forceUpdate();
    },
    async getList() {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const x = doc.data();
        this.todoList.push(x);
        this.isLoading = false;
      });
      this.$forceUpdate();
    },
    async deleteItem(docu) {
      await deleteDoc(doc(db, "tasks", docu.id));
      console.log("deleted");
      this.todoList = this.todoList.filter(() => {
        return this.todoList.id !== docu;
      });
      this.$forceUpdate();
      
      // this.todoList = this.todoList.filter(this.todoList.id => this.todoList.id !== docu);
      // this.todoList.remove();
    },
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
  overflow: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex-block;
  justify-content: center;
}
</style>
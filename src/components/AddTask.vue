<template>
  <a>
    <b-button
      variant="dark"
      class="mb-2"
      id="addButton"
      type="dark"
      @click="modalShow = !modalShow"
    >
      <b-icon icon="plus-circle" aria-hidden="true"></b-icon>
      Add task
    </b-button>

    <b-modal hide-footer title="Add task" v-model="modalShow">
      <div class="modal-body">
        <p>
          <b-form>
            <b-form-group id="title-grp" label="Task Title:" label-for="title">
              <b-form-input
                id="title"
                v-model="taskTitle"
                type="text"
                placeholder="Enter title"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="desc-grp"
              label="Task Description:"
              label-for="desc"
              description="Enter a short description of the task."
            >
              <b-form-input
                id="desc"
                v-model="taskDesc"
                type="text"
                placeholder="Enter description"
                required
              ></b-form-input>
            </b-form-group>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="addTask">
                Add Task
              </button>
            </div>
          </b-form>
        </p>
      </div>
    </b-modal>
  </a>
</template>
<script>
import { collection, setDoc , doc } from "firebase/firestore";
import { db } from "../firebase";
// import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
// import { doc, updateDoc } from "firebase/firestore";
export default {
  methods: {
    async addTask() {
      this.modalShow=!this.modalShow
      const newDocRef = doc(collection(db, "tasks"));
      await setDoc(
       newDocRef, 
       {
         id:newDocRef.id,
        title: this.taskTitle,
        desc: this.taskDesc,
        done: 0,
       }
   );
      // const docRef = await addDoc(collection(db, "tasks"), {
      //   id:docRef.id,
      //   title: this.taskTitle,
      //   desc: this.taskDesc,
      //   done: 0,
      // });
      console.log("Document written with ID: ", newDocRef.id);
      this.done='';
      this.taskDesc='';
      this.taskTitle='';
      this.$emit('myEvent')

    },
  },
  data() {
    return {
      taskDesc: null,
      taskTitle: null,
      done: false,
      modalShow: false,
    };
  },
};
</script>
<style scoped>
#addButton {
  position: fixed;
  bottom: 10px;
  border-radius: 10%;
  padding: 20px;
  margin-left: 90%;

  z-index: 99;

  text-align: center;

  /* 
  display: block;
  border-radius: 20%;
  text-align: center;
  position: sticky;
  bottom: 10%;
  left: 90%; */
}
</style>
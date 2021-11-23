<template>
<a>
  <b-button variant="dark" class="mb-2" id="addButton" type="dark" @click="modalShow = !modalShow">
    <b-icon icon="plus-circle" aria-hidden="true"></b-icon> Add task
  </b-button>
 
  <!-- <b-modal ref="my-modal" hide-footer title="Using Component Methods" >
    <div class="d-block text-center">
      <h3>Hello From My Modal!</h3>
    </div>
    
  </b-modal>-->
  <b-modal hide-footer title="Add task" v-model="modalShow">Hello From Modal!</b-modal>
  
</a>
</template>
<script>

export default {
  methods: {},
  data() {
    return {
        modalShow: false
    
    };
  },
};
</script>
<style scoped>
#addButton {
  padding: 20px;
  display: block;
  border-radius: 20%;
  text-align: center;
  position: sticky;
  bottom: 10px;
  left: 90%;
}
</style>
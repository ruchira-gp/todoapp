<template>
<div id=navi>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="fixed-top">
    <b-navbar-brand href="#" style="padding-left:20px">To-do</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
  
      <b-navbar-nav class="ms-auto">
        <b-nav-item href="#" @click="modalShow=!modalShow">View Progress</b-nav-item>
        <b-nav-item href="#" @click="modalShow=!modalShow">Done</b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div style="height:70px"></div>
  <b-modal hide-footer title="Feature yet to be added" v-model="modalShow"></b-modal>
  <slot>

  </slot>
<add-task>
    
</add-task>
</div>    
</template>
<script>
import AddTask from './AddTask.vue'
export default {
  components: { AddTask },
  data(){
    return{
      modalShow: false,
    }
  },
  methods: { 
    shw(){
      this.modalShow=true;
    }
  }
    
}
</script>
<style scoped>
b-navbar-nav,b-nav-item,navbar-collapse{
  padding:20px

}
#nav-collapse{
  padding:10px
}


</style>
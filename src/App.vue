<template>
<div id=navi>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#" style="padding-left:20px">To-do</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
  
      <b-navbar-nav class="ms-auto">
        <b-nav-item href="#">View Progress</b-nav-item>
        <b-nav-item href="#">Done</b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <b-button variant="outline-info" class="mb-2" id="addButton">
      <b-icon icon="plus-circle" aria-hidden="true"></b-icon> Add task
    </b-button>
</div>
</template>
<style scoped>
b-navbar-nav,b-nav-item,navbar-collapse{
  padding:10px

}
#nav-collapse{
  padding:10px
}
#addButton{
    padding: 30px;
    display:block;
    
    text-align:center;
    position: absolute;
    bottom: 10px;
    right: 10px;
}

</style>
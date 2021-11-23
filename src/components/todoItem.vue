<template>
    <li>
        <h1>{{title}}</h1>
        <h3>{{desc}}</h3>
    </li>
</template>
<script>
export default {
    data(){

    },
    methods:{

    },
    props:{
        title:String,
        desc:String,
        done:Boolean,
        id:String,
    }
}
</script>
<style scoped>
li{
      border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 20rem;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
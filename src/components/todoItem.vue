<template>
    <li @click="doThis(title)">
        <h1>{{title}}</h1>
        <h3>{{desc}}</h3>
    </li>
</template>
<script>
export default {
    props:{
        title:String,
        desc:String,
        done:Number,
        id:String,
    },
    methods:{
        doThis(id){
            let x=id.toString();
            console.log(x);
        }

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
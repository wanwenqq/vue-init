<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg:'webpack4 vue2 demo'
    }
  }
}
</script>

<style lang="less">
h2{
  text-align: center;
}
   
</style>>

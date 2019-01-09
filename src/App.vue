<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
    background: #f4f4f4;
    font-family: "微软雅黑",PingFang SC, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif;
}
.mint-navbar .mint-tab-item.is-selected{
    border-bottom: 3px solid #0076FF;
    color: #0076FF;
}
</style>

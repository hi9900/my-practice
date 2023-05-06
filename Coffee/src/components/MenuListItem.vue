<template>
  <div id="MenuListItem">
    <div><img :src="`${menu.image}`" alt=""></div>
    <div>{{ menu.title }}</div>
    <div>{{ menu.price }}원</div>
  </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
}
</script>

<style scoped>
#MenuListItem {
  border: solid 1px;
  border-radius: 10px;
}

img {
  height: 50px;
  width: 50px;
  border-radius: 10px;
}
</style>
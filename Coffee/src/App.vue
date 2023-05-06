<template>
  <div id="app">
    <h1>Coffee Order App</h1>
    <div id="menu">
    <MenuList />
    </div>
  </div>
</template>

<script>
import MenuList from '@/components/MenuList'

export default {
  name: 'App',
  components: {
    MenuList,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}

h1 {
  text-align: center;
}

/* #menu {
  background-color: rgba(227, 227, 227, 0.437);
  border: round;
  width: 90%;
} */

</style>

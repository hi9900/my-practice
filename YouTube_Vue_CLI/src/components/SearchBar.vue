<template>
  <div>
  <input type="text" v-model="searchData" 
  @keyup.enter="searchInputData">
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchData: ''
    }
  },
  methods: {
    searchInputData() {
      this.$emit('search-input-data', this.searchData)
    }
  }
}
</script>

<style>

</style>
<template>

<li @click="onClickVideo">
  <img :src="video.snippet.thumbnails.default.url" alt="">
  <span>{{ video.snippet.title }}</span>
</li>

</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    video: Object
  },
  methods: {
    onClickVideo() {
      this.$emit('video-detail-show', this.video)
    }
  }

}
</script>

<style>

</style>
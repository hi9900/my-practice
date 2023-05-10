<template>
  <div v-if="detailVideo.id">
    <iframe 
    :src="`https://www.youtube.com/embed/${detailVideo.id.videoId}`" allowfullscreen>
    </iframe>
    <hr>
    <h2>{{ detailVideo.snippet.title }}</h2>
    <p>{{ detailVideo.snippet.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    detailVideo: Object,
  },
  data() {
    return {
    }
  }
}
</script>

<style>

</style>
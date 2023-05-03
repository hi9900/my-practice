<template>
  <ul>
    <VideoListItem 
    v-for="item in appItems"
    :key="item.id.videoid"
    :video="item"
    @video-detail-show="onClickVideo"
    />
  </ul>
</template>

<script>
import VideoListItem from '@/components/VideoListItem'

export default {
  data() {
    return {
      detailVideo: ''
    }
  },
  components: {
    VideoListItem
  },
  props: {
    appItems: Array
  },
  methods: {
    onClickVideo(detailVideo) {
      this.detailVideo = detailVideo
      this.$emit('video-detail-show', this.detailVideo)
    }
  }
}
</script>

<style>

</style>
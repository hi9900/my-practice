<template>
  <div id="app">
    <h1>My first youtube project</h1>
    <SearchBar 
    @search-input-data="searchInputData"
    />
    <!-- <p>이게 검색 온거임 엔터쳐야함: {{ searchData }}</p> -->
    <VideoDetail 
    :detail-video="detailVideo"
    />
    <VideoList 
    :app-items="appItems"
    @video-detail-show="onClickVideo"
    />
    
  </div>
</template>

<script>
import axios from 'axios'

import SearchBar from '@/components/SearchBar'
import VideoDetail from '@/components/VideoDetail'
import VideoList from '@/components/VideoList'

export default {
  name: 'App',
  data() {
    return {
      searchData: '',
      appItems: [],
      detailVideo: {},
    }
  },
  components: {
    SearchBar,
    VideoDetail,
    VideoList,
  },
  methods: {
    searchInputData(inputData) {
      this.searchData = inputData
      axios({
        method: 'get',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: process.env.VUE_APP_API_KEY,
          part: 'snippet',
          type: 'video',
          q: this.searchData
        }
      })
      .then( (res) => {
        // console.log(res.data)
        console.log(res.data.items)
        // 얘를 VideoList로 넘기기
        this.appItems = res.data.items
      })
      .catch((err) => {
        console.log(err)
      })
    },
    onClickVideo(detailVideo) {
      this.detailVideo = detailVideo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<template>
  <div class="TalkRoom">
    <h4>
      comming soon ...<br />
      イメージはこんなかんじ
    </h4>

    <v-col cols="12">
      <v-img
        :src="require('../assets/image_talkroom.jpg')"
        class="my-3"
        contain
        height="450"
      />
    </v-col>

    <v-container class="text-center justify-center py-6">
      <v-btn @click="open" to="/MyPage2" color="secondary">戻る</v-btn>
    </v-container>
  </div>
</template>

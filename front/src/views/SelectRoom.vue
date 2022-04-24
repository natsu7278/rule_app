<template>
  <div>
    <v-container class="text-left justify-center py-6">
      <v-btn @click="open" to="/MyPage">My Page</v-btn>

      &nbsp; &nbsp; &nbsp;&nbsp;
    </v-container>

    <v-container class="text-center justify-center py-1">
      <h1>Select Room</h1>
      <p style="white-space: pre-wrap"></p>
      <p style="white-space: pre-wrap"></p>
      <p style="white-space: pre-wrap"></p>
      <v-btn @click="open" color="secondary" elevation="2">Make Room</v-btn>
      <v-dialog v-model="dialog1" max-width="600px">
        <v-card-text class="text-center white">
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="8">
              <br />
              <v-text-field
                label="ルーム名を入力（例）SNSやめようの会"
                v-model="roomname"
              >
              </v-text-field>
              <br />
              <v-text-field
                label="ルームの決まりごとを入力
              （例）1時間以上SNSを見ない"
                v-model="promise"
              >
              </v-text-field>
              <br />
              <v-btn @click="submit">Make Room</v-btn>
              <br />
            </v-col>
            <v-col cols="2"></v-col>
          </v-row>
        </v-card-text>
      </v-dialog>
    </v-container>

    <v-container fill-height>
      <v-card width="400px" class="mx-auto mt-5">
        <v-card-actions>
          <v-col>
            Room一覧
            <v-btn
              block
              @click="open2"
              class="text-transform py-4 my-2"
              color="secondary"
            >
              スマホ封印したい人集まれ！
            </v-btn>

            <v-dialog v-model="dialog2" max-width="600px">
              <v-card-text class="text-center white">
                ルール
                <p style="white-space: pre-wrap"></p>
                一日のSNS視聴時間15分以内!<br />
                スクリーンタイム要提出
                <br />
                <p style="white-space: pre-wrap"></p>
                明日の参加人数：105人
                <p style="white-space: pre-wrap"></p>
                <v-btn @click="close2">back</v-btn>&nbsp; &nbsp; &nbsp;&nbsp;
                <v-btn @click="open" to="/JoinIn">join</v-btn>
              </v-card-text>
            </v-dialog>
            <p style="white-space: pre-wrap"></p>
            <p style="white-space: pre-wrap"></p>
            <p style="white-space: pre-wrap"></p>
            <v-btn
              block
              @click="open3"
              class="text-transform py-4 my-2"
              color="secondary"
            >
              禁煙一緒に頑張ろうの会
            </v-btn>
            <v-dialog v-model="dialog3" max-width="600px">
              <v-card-text class="text-center white">
                ルール
                <p style="white-space: pre-wrap"></p>
                脱ヤニヤニパニック！<br />
                節約したぶんだけ貯金
                <br />
                <p style="white-space: pre-wrap"></p>
                明日の参加人数：46人
                <p style="white-space: pre-wrap"></p>
                <v-btn @click="close3">back</v-btn>&nbsp; &nbsp; &nbsp;&nbsp;
                <v-btn @click="open" to="/JoinIn">join</v-btn>
              </v-card-text>
            </v-dialog>
            <p style="white-space: pre-wrap"></p>
            <p style="white-space: pre-wrap"></p>
            <p style="white-space: pre-wrap"></p>
            <v-btn block class="text-transform py-4 my-2" color="secondary">
              早寝早起き朝ごはん
            </v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
      roomname: null,
      promise: null,
      show1: false,
    };
  },
  methods: {
    open: function () {
      this.dialog1 = true;
    },

    open2: function () {
      this.dialog2 = true;
    },

    close2: function () {
      this.dialog2 = false;
    },

    open3: function () {
      this.dialog3 = true;
    },

    close3: function () {
      this.dialog3 = false;
    },

    submit: function () {
      const url = process.env.VUE_APP_URL + "/api/auth/sign_in";
      var params = new URLSearchParams();

      params.append("roomname", this.roomname);
      params.append("promise", this.promise);
      axios.defaults.headers.common["Content-Type"] = "application/json";
      axios.post(url, params).then(
        (response) => {
          localStorage.setItem(
            "access-token",
            response.headers["access-token"]
          );
          localStorage.setItem("client", response.headers["client"]);
          localStorage.setItem("uid", response.headers["uid"]);
          localStorage.setItem("token-type", response.headers["token-type"]);
          this.$router.push(".");
        },
        (error) => {
          return error;
        }
      );
    },
  },
};
</script>

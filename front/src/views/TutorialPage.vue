<template>
  <div>
    <v-container class="text-center justify-center py-6">
      <h1>Tutorial Page</h1>
      <p style="white-space: pre-wrap"></p>
      <p style="white-space: pre-wrap"></p>
      <p style="white-space: pre-wrap"></p>

      このアプリは，何か達成したいことがあるのになかなか達成できない，生産性を向上できないために悩んでいる人へ向けたものです．同じ目標を持った人とランダムでマッチングし，お互いに成果報告をしてもらいます．使い方は以下のとおりです．

      <p style="white-space: pre-wrap"></p>
      <p style="white-space: pre-wrap"></p>
      <p style="white-space: pre-wrap"></p>
      <v-container class="text-left justify-center py-1">
        <ol>
          <li>登録後ログイン</li>
          <li>参加したいルームを選択or作成</li>
          <li>翌日にマッチング</li>
          <li>達成報告</li>
          <li>お互い評価</li>
        </ol>
      </v-container>

      <p style="white-space: pre-wrap"></p>
      <p style="white-space: pre-wrap"></p>
      <p style="white-space: pre-wrap"></p>

      <v-btn @click="open">ログインはこちら</v-btn>
      <v-dialog v-model="dialog" max-width="600px">
        <v-card-text class="text-center white">
          <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="8">
              <br />
              <v-text-field label="email" v-model="email"> </v-text-field>
              <br />
              <v-text-field
                label="password"
                v-model="password"
                :type="show1 ? 'text' : 'password'"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show1 = !show1"
              >
              </v-text-field>
              <br />
              <v-btn @click="open" to="/MyPage">ログイン</v-btn>
              <br />
            </v-col>
            <v-col cols="2"></v-col>
          </v-row>
        </v-card-text>
      </v-dialog>
      &nbsp; &nbsp; &nbsp;
      <v-btn @click="open" to="/signup">登録して始める</v-btn>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      email: null,
      password: null,
      show1: false,
    };
  },
  methods: {
    open: function () {
      this.dialog = true;
    },

    submit: function () {
      const url = process.env.VUE_APP_URL + "/api/auth/sign_in";
      var params = new URLSearchParams();

      params.append("email", this.email);
      params.append("password", this.password);
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
          this.$router.push("/work");
        },
        (error) => {
          return error;
        }
      );
    },
  },
};
</script>


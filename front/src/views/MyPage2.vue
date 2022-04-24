<template>
  <div>
    <!-- すでに参加していたらsnackbarを表示 -->
    <UserHeader></UserHeader>
    <v-container class="text-center justify-center py-6">
      <h1>My Account</h1>
      <p align="right">ようこそ{{ (this.name = "森楓") }}さん【管理者】</p>
      <!-- User情報 -->
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <v-card elevation="2">
            name
            <br />
            <h4>{{ this.name }}</h4>
          </v-card>
          <br />
          <v-card elevation="2">
            rate
            <br />
            <h4>{{ (this.rate = "1500") }}</h4>
          </v-card>
          <br />
          <v-card @click="openroom" elevation="2">
            参加中のルーム
            <br />
            <h4>{{ (this.roomname = "スマホ封印したい人集まれ！") }}</h4>
            <v-dialog v-model="roomdialog">
              <v-card
                ><v-container class="text-center justify-center py-6"
                  >stasus:マッチング済み
                  <p style="white-space: pre-wrap"></p>
                  <div class="btnspace">
                    <v-btn @click="closeroom">戻る</v-btn>
                    <v-btn @click="open" to="/TalkRoom" color="secondary"
                      >roomへ行く</v-btn
                    >
                  </div></v-container
                ></v-card
              >
            </v-dialog>
          </v-card>
          <br />
          <p style="white-space: pre-wrap"></p>
          <p style="white-space: pre-wrap"></p>
          <p style="white-space: pre-wrap"></p>
          <p style="white-space: pre-wrap"></p>
          <p style="white-space: pre-wrap"></p>
          <p style="white-space: pre-wrap"></p>
          <p style="white-space: pre-wrap"></p>
          <p style="white-space: pre-wrap"></p>
          <v-btn @click="open">名前の編集はこちら</v-btn>
          <!-- 編集ダイアログ -->
          <v-dialog v-model="dialog">
            <v-card>
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="10">
                  <v-container class="text-center justify-center py-6">
                    <h4>Account edit</h4>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-text-field
                        label="name"
                        v-model="name"
                        :rules="rules"
                        required
                      >
                      </v-text-field>
                      <br />
                      <div class="btnspace">
                        <v-btn @click="close">戻る</v-btn>
                        <v-btn
                          @click="
                            validate;
                            edit();
                          "
                          >編集の確定</v-btn
                        >
                      </div>
                    </v-form>
                  </v-container>
                </v-col>
                <v-col cols="1"></v-col>
              </v-row>
            </v-card>
          </v-dialog>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>

      <p style="white-space: pre-wrap"></p>
      <p style="white-space: pre-wrap"></p>
      <p style="white-space: pre-wrap"></p>
      <p style="white-space: pre-wrap"></p>
      <p style="white-space: pre-wrap"></p>
      <p style="white-space: pre-wrap"></p>
      <v-btn @click="open" to="/SelectRoom">Room選択画面へ</v-btn>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      rate: "1500",
      tel: "",
      course: "",
      dialog: false,
      roomdialog: false,
      valid: true,
      select: { course: "例)機械創造工学課程", grade: "例)B4" },
      //入力規則
      rules: [(v) => !!v || "必須項目"],
      //email規則
      emailRules: [
        (v) => !!v || "必須項目",
        (v) => /.+@.+\..+/.test(v) || "不適切なメールアドレスです",
      ],
      //tel規則
      //telRules: [(v) => !!v || "必須項目"],
    };
  },

  //ダイアログオープン
  methods: {
    open: function () {
      this.dialog = true;
    },
    //ダイアログクローズ
    close: function () {
      this.dialog = false;
    },
    openroom: function () {
      this.roomdialog = true;
    },
    closeroom: function () {
      this.roomdialog = false;
    },
    //入力規則
    validate() {
      this.$refs.form.validate();
      console.log(this.valid);
    },
    //編集の確定
    edit: function () {
      console.log(this.valid);
      if (this.valid == true) {
        const url = process.env.VUE_APP_URL;
        var params = {
          name: this.name,
        };
        axios
          .put(url + "/api/auth", params, {
            headers: {
              "Content-Type": "application/json",
              "access-token": localStorage.getItem("access-token"),
              client: localStorage.getItem("client"),
              uid: localStorage.getItem("uid"),
            },
          })
          .then((response) => {
            console.log(response);
            location.reload();
          });
      }
    },
  },
  //User情報取得
  mounted: async function () {
    const url = process.env.VUE_APP_URL;
    axios
      .get(url + "/api/v1/current_user/show", {
        headers: {
          "Content-Type": "application/json",
          "access-token": localStorage.getItem("access-token"),
          client: localStorage.getItem("client"),
          uid: localStorage.getItem("uid"),
        },
      })
      .then((response) => {
        console.log(response.data.data);
        this.name = response.data.data.name;
      });
  },
};
</script>
<style>
.btnspace {
  display: flex;
  justify-content: space-around;
}
</style>

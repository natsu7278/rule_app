<template>
  <div>
    <v-container class="text-center justify-center py-6">
      <h1>新規登録ページ</h1>
      <v-card-text class="text-center white">
        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field label="name" v-model="name" :rules="rules" required>
              </v-text-field>
              <br />
              <v-select
                v-model="grade"
                :hint="`${select.grade}`"
                :items="grades"
                item-text="grade"
                label="grade"
                persistent-hint
                return-object
                single-line
                :rules="rules"
                required
              ></v-select>
              <br />
              <v-text-field label="tel" v-model="tel" :rules="rules" required>
              </v-text-field>
              <br />
              <v-text-field
                label="email"
                v-model="email"
                :rules="emailRules"
                required
              >
              </v-text-field>
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
              <v-text-field
                label="password_confirmation"
                v-model="password_confirmation"
                :type="show2 ? 'text' : 'password'"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show2 = !show2"
              >
              </v-text-field>
              <br />
              <v-btn
                @click="
                  validate;
                  register();
                "
                >新規作成</v-btn
              >
              <br />

              <p style="white-space: pre-wrap"></p>
              <v-btn @click="open" to="/" color="secondary">戻る</v-btn>
              <br />
            </v-form>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
      </v-card-text>
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
      password: "",
      course: "",
      grade: "",
      tel: "",
      show1: false,
      show2: false,
      password_confirmation: null,

      //送信が成功したかどうかのフラグ
      valid: true,
      //name,grade,course,規則
      rules: [(v) => !!v || "必須項目"],
      //email規則
      emailRules: [
        (v) => !!v || "必須項目",
        (v) => /.+@.+\..+/.test(v) || "不適切なメールアドレスです",
      ],
      //tel規則
      telRules: [
        (v) => !!v || "必須項目",
        (v) => (v && /^[0-9０-９]+$/) || "適切に入力してください",
        (v) => (v && v.length == 11) || "電話番号が足りません",
      ],
      //セレクトボックス値
      select: { course: "例)機械創造工学課程", grade: "例)B4" },

      grades: [
        { grade: "B1" },
        { grade: "B2" },
        { grade: "B3" },
        { grade: "B4" },
        { grade: "M1" },
        { grade: "M2" },
        { grade: "D1" },
        { grade: "D2" },
        { grade: "D3" },
      ],
    };
  },
  methods: {
    register: async function () {
      if (this.valid == true) {
        const url = process.env.VUE_APP_URL + "/api/auth";
        var params = new URLSearchParams();
        params.append("name", this.name);
        params.append("email", this.email);
        params.append("tel", this.tel);
        params.append("grade", this.grade.grade);
        params.append("course", this.course.course);
        params.append("password", this.password);
        params.append("password_confirmation", this.password_confirmation);
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
            console.log(error);
            return error;
          }
        );
      }
    },
    //入力規制
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

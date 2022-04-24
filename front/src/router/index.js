import Vue from "vue";
import VueRouter from "vue-router";
import Work from "../views/Work.vue";
//import Welcome from "../views/Welcome.vue";
import Signup from "../views/Signup.vue";
import WorkRegister from "../views/WorkRegister.vue";
import AdminSignin from "../views/AdminSignin.vue";
import WorkEdit from "../views/WorkEdit.vue";
import AdminAllUser from "../views/AdminAllUser.vue";
import UserInformation from "../views/UserInformation.vue";
import MyAccount from "../views/MyAccount.vue";

import SelectRoom from "../views/SelectRoom.vue";
import TutorialPage from "../views/TutorialPage.vue";
import MyPage from "../views/MyPage.vue";
import MyPage2 from "../views/MyPage2.vue";
import JoinIn from "../views/JoinIn.vue";
import TalkRoom from "../views/TalkRoom.vue";

Vue.use(VueRouter);

const routes = [
  //一番最初のページ
  {
    path: "/",
    name: "TutorialPage",
    component: TutorialPage,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  //userが案件の参加取り消しができるページ
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  //roomを作ったり選んだりするページ
  {
    path: "/SelectRoom",
    name: "SelectRoom",
    component: SelectRoom,
  },
  //userが案件の参加取り消しができるページ
  {
    path: "/TalkRoom",
    name: "TalkRoom",
    component: TalkRoom,
  },
  //Joinしましたよーの確認ページ
  {
    path: "/JoinIn",
    name: "JoinIn",
    component: JoinIn,
  },
  //Myページ
  {
    path: "/mypage",
    name: "MaPage",
    component: MyPage,
  },
  //Myページ2（ハッカソンで見せる用のチートページ）
  {
    path: "/mypage2",
    name: "MaPage2",
    component: MyPage2,
  },
  //新規登録ページ
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  //管理者が案件を登録できるページ
  {
    path: "/workregister",
    name: "WorkRegister",
    component: WorkRegister,
  },
  //管理者のサインインページ
  {
    path: "/adminsignin",
    name: "AdminSignin",
    component: AdminSignin,
  },
  //管理者が案件を編集消去できるページ
  {
    path: "/workedit",
    name: "WorkEdit",
    component: WorkEdit,
  },
  //管理者が全User情報を見れるページ
  {
    path: "/adminalluser",
    name: "AdminAllUser",
    component: AdminAllUser,
  },
  //管理者が全User情報を見れるページ
  {
    path: "/userinformation",
    name: "UserInformation",
    component: UserInformation,
  },
  {
    path: "/myaccount",
    name: "MyAccount",
    component: MyAccount,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

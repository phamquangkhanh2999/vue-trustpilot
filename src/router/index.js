import Vue from "vue";
import Router from "vue-router";

import Home from "@/pages/Home.vue";
import WhyTrustpilot from "@/pages/WhyTrustpilot.vue";
import ManageReviw from "@/pages/ManageReviews.vue";
import ShowCaseReviews from "@/pages/ShowCaseReviews.vue";
import AnalyzeReviews from "@/pages/AnalyzeReviews.vue";
import GetReviews from "@/pages/GetReviews.vue";

import Error from "@/pages/Error.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/why-trustpilot",
      name: "why-trustpilot",
      component: WhyTrustpilot,
    },
    {
      path: "/features/get-reviews",
      name: "get-reviews",
      component: GetReviews,
    },
    {
      path: "/features/manage-reviews",
      name: "manage-reviews",
      component: ManageReviw,
    },
    {
      path: "/features/showcase-reviews",
      name: "showcase-reviews",
      component: ShowCaseReviews,
    },
    {
      path: "/features/analyze-reviews",
      name: "analyze-reviews",
      component: AnalyzeReviews,
    },
    {
      path: "*",
      name: "Error",
      component: Error,
    },
  ],
});

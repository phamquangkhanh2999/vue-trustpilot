<template>
  <div>
    <Jumbotron :data="jumbotron[0]" />
    <Card :card="cards[0]" />
    <Quote />
    <EmailSignup :color="colorEmail" />
  </div>
</template>
<script>
import Jumbotron from "@/components/features/Jumbotron.vue";
import Quote from "@/components/features/Quote.vue";
import Card from "@/components/CardBottom.vue";
import EmailSignup from "@/components/EmailSignup.vue";
export default {
  name: "ShowCaseReviews",
  data() {
    return {
      colorEmail: "#550f62",
      cards: [
        {
          name: "",
          cards: [
            {
              id: 1,
              category: "Review SEO",
              title: "Stand out in search results",
              desc: "Climb to the top of search. Make your brand more visible in both paid and organic search, and drive more traffic to your site with Trustpilot reviews.",
              image:
                "https://images.ctfassets.net/b7g9mrbfayuu/3HHbGkiVSoLJsGQGqX5tV5/76bd27b46d84e1be5c6e0d329768fe71/Review_Seo.png?q=80&fm=png&w=800",
            },
            {
              id: 2,
              category: "Trustpilot Widgets",
              title: "Turn reviews into revenue",
              desc: "Display Trustpilot reviews on your site with Trustpilot widgets. With a cut and paste of code, you can increase conversion and sales by sharing Trustpilot reviews on your site, email signatures, and newsletters. ",
              image:
                "https://images.ctfassets.net/b7g9mrbfayuu/7knOXZwdlViX4nUWsTydlo/7fdb0d8ec10297fbe8b86adb08ca0778/Trustbox_widgets.png?q=80&fm=png&w=800",
            },
            {
              id: 3,
              category: "Social Media Tools",
              title: "Social Media Tools",
              desc: "Share trust on every social network. Automatically share Trustpilot reviews on your company’s Facebook page, and turn your best reviews into attention grabbing images that stand out on social media.",
              image:
                "https://images.ctfassets.net/b7g9mrbfayuu/4Q3iOWh0wsodZcaw7jH7jZ/c6870ec5304d8b8e46ab25b1ab1142a7/Social_media_tools.png?q=80&fm=png&w=800",
            },

            {
              id: 4,
              category: "Marketing Assets",
              title: "Marketing Assets",
              desc: "The power of Trustpilot reviews goes far beyond the boundaries of your website. With Trustpilot Marketing Assets, you can add credibility and improve the performance of TV Ads, display ads, retargeting ads, brochures and print media, packaging and delivery boxes.",
              image:
                "https://images.ctfassets.net/b7g9mrbfayuu/nGS3IvXCqmBFn4go5GV7f/9dbed51a80c0d204384a163db8692f9f/Marketing_Assets.png?q=80&fm=png&w=800",
            },
          ],
        },
      ],
      jumbotron: [
        {
          id: 1,
          subheader: "Attract new customers",
          title: "Turn reviews into revenue",
          desc: "Turn more browsers into buyers by showcasing your reviews across your site and marketing materials.",
          btn: "Get a demo",
          image:
            "https://images.ctfassets.net/b7g9mrbfayuu/21oaOnUT3YyPWolJK78QV4/3617545567532e269da23b7aa287dfa6/Mobile.png?q=80&fm=png&w=1360",

          color: "#dfc2f0",
        },
      ],
    };
  },
  components: {
    Jumbotron,
    Card,
    EmailSignup,
    Quote,
  },
};
</script>
<style lang=""></style>

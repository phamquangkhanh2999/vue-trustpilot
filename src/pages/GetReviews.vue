<template>
  <div>
    <Jumbotron :data="jumbotron[0]" />
    <Card :card="cards[0]" />
    <Quote />
    <EmailSignup />
  </div>
</template>
<script>
import Jumbotron from "../components/features/Jumbotron.vue";
import Quote from "../components/features/Quote.vue";
import Card from "../components/CardBottom.vue";
import EmailSignup from "../components/EmailSignup.vue";
export default {
  name: "GetReviews",
  data() {
    return {
      cards: [
        {
          name: "",
          cards: [
            {
              id: 1,
              category: "Service Reviews",
              title: "Join the conversation",
              desc: "Every two seconds, a new review is written on Trustpilot’s consumer-facing site. Collecting reviews on Trustpilot gives your current and future customers a place to learn about fellow shoppers’ experiences with your business.",
              image:
                "https://images.ctfassets.net/b7g9mrbfayuu/24WKmLuAvUr1YOx89fWDx2/f8ed9cda46c052dc36a71bbedef5dccb/Company_Reviews.png?q=80&fm=png&w=800",
            },
            {
              id: 2,
              category: "Product Reviews",
              title: 'Make " Add&quot " To Cart an easy choice',
              desc: "Share product reviews throughout your site to create confidence wherever shoppers are thinking about making a purchase. Match them to the look and feel of your brand, and include customer photos and product attributes. ",
              image:
                "https://images.ctfassets.net/b7g9mrbfayuu/3cLowRt8ugqZKu1XItboti/2b8f55232be3f596fe3ffbb2253d5037/Product_Reviews.png?q=80&fm=png&w=800",
            },
            {
              id: 3,
              category: "Location Reviews",
              title: "Connect with local customers",
              desc: "Learn more about your locations and drive new business to all of your stores by collecting location-specific reviews. Location profile pages appear higher in local search results, driving more traffic to your site and more shoppers to your stores.",
              image:
                "https://images.ctfassets.net/b7g9mrbfayuu/7zQWKOt90vHZ4qcGIUhbhr/7877014491a66ce01d9c91fc0a64099f/Location_Reviews-min.png?q=80&fm=png&w=800",
            },
            {
              id: 4,
              category: "Review Invitations",
              title: "All you have to do is ask",
              desc: "Our robust selection of review invitation methods means you’ll never miss an opportunity for customer feedback. Start earning more verified reviews more quickly, so you can start celebrating the uptick in ROI.",
              image:
                "https://images.ctfassets.net/b7g9mrbfayuu/1AWimyr32r2l0UFA6jnBJa/f39fca92cd54e1d04b7f75711bf56e36/Review_Invitations.png?q=80&fm=png&w=800",
            },
          ],
        },
      ],
      jumbotron: [
        {
          id: 1,
          subheader: "Ask for reviews",
          title: "Earn trust with verified reviews",
          desc: "Reviews help you build a stellar online presence right where shoppers are researching their next purchase.",
          btn: "Get a demo",
          image:
            "https://images.ctfassets.net/b7g9mrbfayuu/8auPy9vlojpVcviTO5tGb/f09addf01fdc4e087224047ccbe21ff8/Mobile.png?q=80&fm=webp&w=1360",

          color: "#faeda5",
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

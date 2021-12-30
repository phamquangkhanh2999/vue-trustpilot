<template>
  <div>
    <PageHero />
    <CardTop />
    <Content :data="content[0]" />
    <Content :data="content[2]" />
    <Content :data="content[1]" />
    <CardBottom :card="cards" />
    <ContentRate />
    <EmailSignup />
  </div>
</template>
<script>
import PageHero from "../components/PageHero.vue";
import CardTop from "../components/CardTop.vue";
import Content from "../components/ContentTop.vue";
import CardBottom from "../components/CardBottom.vue";
import ContentRate from "../components/ContentRate.vue";
import EmailSignup from "../components/EmailSignup.vue";

export default {
  name: "Home",
  data() {
    return {
      content: [
        {
          title: "Star ratings in the right place, at the right time.",
          desc: " Whether you need reviews for your services, products, or business locations — Trustpilot reviews help you drive more traffic from paid and organic search results, and make the purchasing decision easy once those shoppers get to your site.",
          btn: "All the features",
          img: "https://images.ctfassets.net/b7g9mrbfayuu/5rm4rZZkOAx5OPByzJJ1Gb/7fd0368f2aaff8236c6b07af5e179972/Company_Profile_Page_-_desktop-min.png?q=80&fm=webp&w=715",
          isCheck: true,
        },
        {
          title: "Keep your customers coming back for life.",
          desc: "You’ve built a trusted brand. You’re attracting more customers. Now you can apply practical learnings from your review data to drive customer loyalty.",
          btn: "Our plans & pricing",
          img: "https://images.ctfassets.net/b7g9mrbfayuu/1tQbsElfYf7BERPigHbD9A/9e0c0595553f44338b1fa703ea9a49f7/Turn_browsers_into_buyers_-_desktop-min.png?q=80&fm=webp&w=1430",
          isCheck: true,
        },
        {
          title: "Reviews onsite take sales to new heights.",
          desc: " Collecting and displaying reviews across your website has never been so easy. Sit back, relax, and watch your online sales and organic traffic skyrocket.",
          btn: "Create free account",
          img: "https://images.ctfassets.net/b7g9mrbfayuu/5FapDVz1zxHyc0QIotYbM4/c829cfc48a901ed6ba909a8fbd6fbf98/Embedded_Review_Form_____desktop-min.png?q=80&fm=webp&w=715",
          isCheck: false,
        },
      ],
      cards: [
        {
          name: "Get inspired",
          cards: [
            {
              id: 1,
              title:
                " Trustpilot consumer insights 2021 - 7 Must-knows for this holiday season",
              desc: " As we begin the countdown to winter festivities and the peak shopping season that comes with them, Trustpilot looked into consumer expectations and consumer behaviour trends to better understand what matters most to shoppers this holiday season.",
              image:
                "https://images.ctfassets.net/b7g9mrbfayuu/2h3EjFAOLmn6cUjfFDFJTT/a6686dded4dd5b8ef6162ff430ee3283/holidayimg.png?q=80&fm=webp&w=800",
            },
            {
              id: 2,
              title: "What are consumer insights and how do I use them?",
              desc: "Understanding your consumers' needs and wants has become essential to ensure your company is future-proof. Get familiar with consumer insights and how you could use them.",
              image:
                "https://images.ctfassets.net/b7g9mrbfayuu/4l2kxipGXiy4sfnvzmHezS/ebb56fb6569729313d23576bb83b637f/Consumer_insights_04.jpg?q=80&fm=png&w=444",
            },
            {
              id: 3,
              title: "Improving your online reputation in 3 easy steps",
              desc: "In this article, we give you 3 easy ways you can change your badreputation into a good one, and navigate consumer trust to power your business forward.",
              image:
                "https://images.ctfassets.net/b7g9mrbfayuu/1uZabZSyH8AOEZFh75BYgL/80aa39a72ec291621184de695b9e6cb8/Reputation_managment_02.jpg?q=80&fm=png&w=444",
            },
          ],
        },
      ],
    };
  },
  components: {
    PageHero,
    CardTop,
    Content,
    CardBottom,
    ContentRate,
    EmailSignup,
  },
};
</script>

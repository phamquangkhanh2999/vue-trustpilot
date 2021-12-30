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
import Card from "@/components/CardBottom.vue";
import Quote from "@/components/features/Quote.vue";
import EmailSignup from "@/components/EmailSignup.vue";
export default {
  name: "ManageReviews",
  data() {
    return {
      colorEmail: "#753c47",
      cards: [
        {
          name: "",
          cards: [
            {
              id: 1,
              category: "Customer engagememt",
              title: "Respond to Reviews",
              desc: "Write back to your customers to thank them, solve issues, and show the world that you genuinely care about your customers. Trustpilot makes it easy to keep up with all your reviews with notification emails and smart integrations.",
              image:
                "https://images.ctfassets.net/b7g9mrbfayuu/1ykpeSnOPvOiI1JrPdXYAq/4d1bc063a4bbe7dd830f4ca64e90c767/Respond_to_review.png?q=80&fm=png&w=800",
            },
            {
              id: 2,
              category: "Flag and report reviews",
              title: "Find Reviewer",
              desc: "Don’t recognize a reviewer? No worries. You can use the Find Reviewer tool to identify the customer and hear more about their experience. We also provide clear guidelines so companies and consumers can report what they believe are false reviews.",
              image:
                "https://images.ctfassets.net/b7g9mrbfayuu/4AjrdvuoQrPHFQ64pyesBK/b6b1d67103a23d89dd16eb462076dd10/Flag_and_report_reviews.png?q=80&fm=png&w=800",
            },
            {
              id: 3,
              category: "Platform Safeguards",
              title: "Keeping Trustpilot reviews Trustworthy",
              desc: "Our custom fraud-detection software and full-time Content Integrity Team help protect your brand and our platform from fake reviews and keep things running smoothly.",
              image:
                "https://images.ctfassets.net/b7g9mrbfayuu/1Uv3kJSanMmauaxTW21THB/74069ef6bbfb3189a7e10b049482977e/Platform_Safeguards.png?q=80&fm=png&w=800",
            },
          ],
        },
      ],
      jumbotron: [
        {
          id: 1,
          subheader: "Manage reviews",
          title: "Manage your reviews all in one place",
          desc: "Access a single easy-to-use platform to engage with and gain real insights from the people who matter most — your customers.",
          btn: "Get a demo",
          image:
            "https://images.ctfassets.net/b7g9mrbfayuu/3pS7b7RnkhGG4hdsL2Ddd3/66b8ef2710b0c3c43062c23ad06bbaf4/Mobile.png?q=80&fm=webp&w=1360",

          color: "#f7c1cb",
        },
      ],
    };
  },
  components: {
    Jumbotron,
    Card,
    Quote,
    EmailSignup,
  },
};
</script>
<style lang="scss" scoped></style>

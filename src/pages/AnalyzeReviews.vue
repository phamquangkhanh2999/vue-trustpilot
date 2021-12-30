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
  name: "AnalyzeReviews",
  data() {
    return {
      colorEmail: "#12595f",
      cards: [
        {
          name: "",
          cards: [
            {
              id: 1,
              category: "Review Insights",
              title: "Make data-driven decisions",
              desc: "Machine learning sorts all of your reviews and categorizes customer sentiment by our default options — or your own custom review topics — so you can monitor any changes to customer satisfaction in the areas that are most important to your business.",
              image:
                "https://images.ctfassets.net/b7g9mrbfayuu/k10qDNMlSltJmTQV88Ft6/96a2e7d260cf0f1e2a904b242d3a7cea/Review_Insights.png?q=80&fm=png&w=800",
            },
            {
              id: 2,
              category: "Analytics",
              title: 'Your HQ for review performance',
              desc: "Get at-a-glance performance metrics and engage with customers all in one place. Monitor review invitation performance and tweak your strategy accordingly to collect more feedback — because more reviews mean more opportunity for ROI.",
              image:
                "https://images.ctfassets.net/b7g9mrbfayuu/7HVbesIJygtcm3HTybw5WS/37174114a406cdaa16777485c7d4d463/Dashboard_and_split_testing.png?q=80&fm=png&w=800",
            },
            {
              id: 3,
              category: "Review Tags",
              title: "Segment your feedback",
              desc: "Organize your reviews with the tag identifiers that work best for you, like location, sales agent, or vendor. Use them to create highly targeted website widgets on specific pages, or to dig even deeper into your review analytics and insights by key topics.",
              image:
                "https://images.ctfassets.net/b7g9mrbfayuu/37FwPGNx6PW8cU1F5djwfV/946a57fd4a40186f5ce00e31db29b2dc/Review_Tagging.png?q=80&fm=png&w=800",
            },

          ],
        },
      ],
      jumbotron: [
        {
          id: 1,
          subheader: "Analyze your reviews",
          title: "Unlock real-time consumer insights",
          desc: "Discover trends in your customer reviews on what’s working, and what’s not, to increase customer loyalty, retention, and lifetime value.",
          btn: "Get a demo",
          image:
            "https://images.ctfassets.net/b7g9mrbfayuu/6DUm1RocDn9Cu02NACyJiL/0f1ca6a499264e0e40ad19caf2cb7e67/Mobile.png?q=80&fm=webp&w=1360",

          color: "#b1ded8",
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

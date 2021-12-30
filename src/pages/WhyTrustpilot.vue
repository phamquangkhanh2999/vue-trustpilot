<template>
  <div>
    <Headline />
    <Statements :statements="statements" />
    <ContentWrapper :data="content[0]" />
    <div class="ContentWrapper wrapper">
      <h4>Did you know?</h4>
      <h1>
        Trustpilot is one of the world's most popular websites - with an Alexa
        ranking of 393 in September 2021
      </h1>
    </div>
    <ContentWrapper :data="content[1]" />
    <div class="ContentWrapper1 wrapper">
      <h4>Did you know?</h4>
      <h1>
        Plans start at $0 - so no matter the size of your business, we can help
        you grow.
      </h1>
    </div>
    <ContentWrapper :data="content[2]" />

    <div class="didYouKnow wrapper">
      <h4>Did you know?</h4>
      <div class="didYouKnow__inner">
        <div class="didYouKnow__inner__left">
          <h1>
            We are working to establish industry standards in online reviews.
          </h1>
        </div>
        <div class="didYouKnow__inner__right">
          <p>
            As one of the world's biggest online review communities, we consider
            it our responsibility to set a good example. That means working
            internationally to help establish standards that will safeguard
            consumer interests.
          </p>
        </div>
      </div>
    </div>
    <ContentRate />
    <EmailSignup />
  </div>
</template>
<script>
import Headline from "@/components/why-trustpilot/Headline.vue";
import Statements from "@/components/why-trustpilot/Statements.vue";
import ContentWrapper from "@/components/why-trustpilot/ContentWrapper.vue";
import ContentRate from "../components/ContentRate.vue";
import EmailSignup from "../components/EmailSignup.vue";

export default {
  name: "WhyTrustpilot",
  components: {
    ContentRate,
    EmailSignup,
    Headline,
    Statements,
    ContentWrapper,
  },
  data() {
    return {
      statements: [
        {
          id: 1,
          title: "+144m",
          desc: "Over 144 million written reviews of 626,000+ websites",
          text: "Tools and insights backed by a ton of data that can supercharge your business.",
        },
        {
          id: 2,
          title: "$0",
          desc: "Starting at a price every business can afford",
          text: "Our Free plan helps you get more reviews and showcase them online to grow your business.",
        },
        {
          id: 3,
          title: "87%",
          desc: "Built on trust that people count on",
          text: "Independent consumer research from Sirkin Research showed that 87% of consumers in the UK and US find ads more trustworthy with the Trustpilot logo and star rating than without.",
        },
      ],
      content: [
        {
          id: 1,
          subHeader: "Neutral platform",
          title: "See your brand from your customers' point-of-view",
          desc1:
            "Trustpilot is a platform for people. Every month, people share over 4 million reviews on Trustpilot to help each other find great companies and make better buying decisions.",
          desc2:
            "More than just a rating, Trustpilot stars signify to the world that people love your company and you love them right back.",
          strong: "Join the conversation and stand out as a brand people love.",
          img: "https://images.ctfassets.net/b7g9mrbfayuu/NHL2e6V010ixJvpnYNHbu/d6f0876c5298e37af4e2c08b92a0b9d5/See_your_brand_from_your_customers_-_desktop.png?q=80&fm=webp&w=715",
          isCheck: true,
        },
        {
          id: 2,
          subHeader: "Drive growth",
          title: "Powerfully simple review tools for companies of every size",
          desc1:
            "Trustpilot reviews drive growth by helping your company get seen, get sold, and get better.",
          desc2:
            "Our business tools make it easy to get more reviews, promote your best feedback, engage with customers, and analyze the results to improve. Over 626,000 websites are rated on Trustpilot - ",
          strong: "Join one of the world's leading review platforms.",
          img: "https://images.ctfassets.net/b7g9mrbfayuu/3uUFvVVDOVY5HF0r0a0NA/479b3d55f605473d0b198caf1da3abc6/Poweful_simple_review_tools_-_desktop.png?q=80&fm=webp&w=715",
          isCheck: false,
        },
        {
          id: 3,
          subHeader: "Inspire trust",
          title: "Build trust in your brand",
          desc1:
            "At Trustpilot, we're serious about trust. In fact, it's so important to us that it's in our name.",
          desc2:
            "At Trustpilot, we're serious about trust. In fact, it's so important to us that it's in our name.",
          strong: "join the review platform that starts with Trust.",
          img: "https://images.ctfassets.net/b7g9mrbfayuu/YALJAWenb8y5vt0D8kuAV/ed0543c64166c6e38918e5bc50abd1ff/Build_trust_in_your_brand_-_desktop-min.png?q=80&fm=webp&w=715",
          isCheck: true,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.ContentWrapper {
  color: #6f6f87;
  h4 {
    font-size: 1.5rem;
  }
  h1 {
    line-height: 1.4;
    font-size: 2.9rem;
  }
}

.ContentWrapper1 {
  color: #6f6f87;
  h4 {
    font-size: 1.5rem;
    text-align: right;
  }
  h1 {
    line-height: 1.4;
    font-size: 2.9rem;
    text-align: right;
  }
}

.didYouKnow {
  color: #6f6f87;
  padding: 100px 0 100px;
  h4 {
    font-size: 1.5rem;
  }

  &__inner {
    display: flex;

    /* @include media_tablet {
      padding-left: 10px;
      flex-direction: column;
    } */

    &__left {
      flex: 1 1 100%;
      h1 {
        line-height: 1.3;
        font-size: 2rem;
      }
    }

    &__right {
      flex: 1 1 100%;
      p {
        line-height: 2;
        font-size: 1.2rem;
      }
    }
  }
}
</style>

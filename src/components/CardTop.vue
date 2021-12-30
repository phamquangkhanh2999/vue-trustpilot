<template>
  <div class="cardTop">
    <div class="cardTop__inner wrapper">
      <div class="cardTop__inner__relatedPages">
        <div class="cardTop__inner__relatedPages__pageText">
          Build more trust in your brand
        </div>
        <div class="cardTop__inner__relatedPages__formMarkdown">
          <p>
            Reviews help you build a stellar online presence right where
            shoppers are researching their next purchase.
          </p>
          <p>Get reviews with Trustpilot</p>
        </div>
      </div>
      <div class="cardTop__inner__relatedPages">
        <div class="cardTop__inner__relatedPages__pageText">
          Attract new customers
        </div>
        <div class="cardTop__inner__relatedPages__formMarkdown">
          <p>
            Turn more browsers into buyers by showcasing your reviews across
            your site and marketing materials.
          </p>
          <p>Showcase your reviews</p>
        </div>
      </div>
      <div class="cardTop__inner__relatedPages">
        <div class="cardTop__inner__relatedPages__pageText">
          Unlock real-time consumer insights
        </div>
        <div class="cardTop__inner__relatedPages__formMarkdown">
          <p>
            Drive customer loyalty with learnings from consumer behavior and
            sentiment trends across locations and markets.
          </p>
          <p>Analyze and learn</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
};
</script>
<style lang="scss" scoped>
.cardTop {
  background-color: #f9f9fa;
  width: 100%;

  &__inner {
    grid-column-gap: 25px;
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 50px 0 50px;
    margin: 0 auto;
    /* display: flex;
    padding: 50px 30px 40px; */

    @include media_tablet {
      display: grid;
      grid-template-columns: auto auto;
      max-width: 100%;
      padding: 40px 100px 40px;
    }

    @include media_mobile {
      grid-template-columns: auto;
      padding: 20px 20px 20px;

      &__relatedPages {
        &__pageText {
          font-size: 1.6rem !important;
        }

        &__formMarkdown {
          p:nth-child(1) {
            font-size: 1.5rem !important;
          }
          p:nth-child(2) {
            font-size: 1.3rem !important;
          }
        }
      }
    }
    &__relatedPages {
      padding: 0 30px 0;
      &__pageText {
        color: $txt-main-color;
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 2.8rem;
        margin-bottom: 12px;
      }

      &__formMarkdown {
        p:nth-child(1) {
          margin-bottom: 20px;
          color: #454554;
          font-size: 1.2rem;
          line-height: 1.5;
        }
        p:nth-child(2) {
          font-size: 1.1rem;
          color: $txt-blue;
          font-weight: 600;
        }
      }
    }
  }
}
</style>

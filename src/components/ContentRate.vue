<template>
  <div class="rate">
    <div class="rate__inner wrapper">
      <div class="rate__inner__top">
        <h2>See what our customers are saying about&nbsp; Trustpilot</h2>
        <p>
          Trustpilot is one of the world’s leading review platforms. Every
          heartfelt review helps create ever-improving experiences for both
          people and companies.
        </p>
      </div>
      <div class="rate__inner__bottom">
        <CarouselRate />
        <div class="rate__inner__bottom__rating">
          <p>
            Rated <strong>4.2</strong>/ 5 based on
            <u>150,102 reviews.</u> Showing our favorite reviews
          </p>
          <div class="rate__inner__bottom__rating--logo">
            <img
              src="https://cdn.trustpilot.net/brand-assets/1.6.0/favicons/favicon-16x16.png"
              alt=""
            />
            <span>Trustpilot</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CarouselRate from "./CarouselRate.vue";
export default {
  name: "ContentRate",
  components: {
    CarouselRate,
  },
};
</script>
<style lang="scss" scoped>
.rate {
  background-color: #f9f9fa;
  &__inner {
    padding: 100px 0 100px;
    &__top {
      max-width: 730px;
      margin: 0px auto;
      text-align: center;
      margin-bottom: 32px;

      h2 {
        font-size: 2.6rem;
        line-height: 1.3;
        margin-bottom: 15px;
      }

      p {
        font-size: 1.1rem;
        line-height: 1.4;
      }
    }

    &__bottom {
      text-align: center;
      &__rating {
        &--logo {
          @include flex(center, center);

          span {
            font-weight: 600;
            font-size: 1.2rem;
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>

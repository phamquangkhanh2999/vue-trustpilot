<template>
  <div class="cardTop">
    <h2>{{ card.name }}</h2>
    <div class="cardTop__inner wrapper">
      <div
        class="cardTop__inner__relatedPages"
        v-for="(item, index) in card.cards"
        :key="index"
      >
        <div class="cardTop__inner__relatedPages__imageWrapper">
          <img :src="item.image" alt="" />
        </div>
        <div class="cardTop__inner__relatedPages__pageText">
          <p class="cardTop__inner__relatedPages__pageText__category">
            {{ item.category }}
          </p>
          {{ item.title }}
        </div>
        <div class="cardTop__inner__relatedPages__formMarkdown">
          <p>
            {{ item.desc }}
            <b>Read more</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["card"],
};
</script>
<style lang="scss" scoped>
.cardTop {
  background-color: $main-white;
  h2 {
    text-align: center;
    font-size: 4rem;
    font-weight: 600;
    color: $main-color;
  }
  &__inner {
    /* display: flex; */
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 100px 30px 100px;

    @include media_tablet {
      grid-template-columns: auto auto;
      max-width: 100%;
    }
    @include media_mobile {
      grid-template-columns: auto;
      max-width: 100%;
    }
    &__relatedPages {
      /* width: calc(33.3333%); */
      padding: 0px 10px 74px;

      @include media_mobile {
        width: calc(100%);
      }

      &__pageText {
        color: $txt-main-color;
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 2rem;
        margin-bottom: 12px;

        &__category {
          font-size: 1.1rem;
          font-weight: 400;
          margin-bottom: 10px;
        }
      }

      &__formMarkdown {
        p:nth-child(1) {
          margin-bottom: 20px;
          color: #454554;
          font-size: 1.1rem;
          line-height: 1.5;
        }
        b {
          font-size: 1.1rem;
          color: $txt-blue;
          font-weight: 600;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>

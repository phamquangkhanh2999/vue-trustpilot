<template>
  <div class="cards">
    <div class="cards__inner wrapper">
      <div
        class="cards__inner__relatedPages"
        v-for="item in statements"
        :key="item.id"
      >
        <h3>{{ item.title }}</h3>
        <div class="cards__inner__relatedPages__pageText">
          {{ item.desc }}
        </div>
        <div class="cards__inner__relatedPages__formMarkdown">
          <p>
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Statements",
  props: ["statements"],
};
</script>
<style lang="scss" scoped>
.cards {
  background-color: $main-white;
  width: 100%;

  &__inner {
    display: flex;
    padding: 50px 30px 40px;

    @include media_tablet {
      flex-direction: column;
      max-width: 100%;
      padding: 40px 100px 40px;
    }

    &__relatedPages {
      flex: 1;
      h3 {
        font-size: 3rem;
      }
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
          font-size: 1rem;
          line-height: 1.5;
        }
      }
    }
  }
}
</style>

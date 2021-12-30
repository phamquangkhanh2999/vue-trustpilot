<template>
  <div class="jumbotron" :style="{ backgroundColor: data.color }">
    <div class="jumbotron__inner wrapper">
      <div class="jumbotron__inner__left">
        <h4 class="jumbotron__inner__left__subheader">{{ data.subheader }}</h4>
        <h1 class="jumbotron__inner__left__header">
          {{ data.title }}
        </h1>
        <p class="jumbotron__inner__left__text">
          {{ data.desc }}
        </p>
        <button class="jumbotron__inner__left__btn">{{ data.btn }}</button>
      </div>
      <div class="jumbotron__inner__right">
        <div class="jumbotron__inner__right__image">
          <img :src="data.image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Jumbotron",
  data() {
    return {
      activeColor: "#faeda5",
    };
  },
  props: ["data"],
};
</script>
<style lang="scss" scoped>
.jumbotron {
  /* background: $jumbotron-yellow; */
  width: 100%;
  max-width: 100%;
  &__inner {
    display: flex;
    align-items: center;
    height: 630px;
    max-height: 630px;
    flex-direction: row;

    @include media_tablet {
      height: 750px;
      max-height: 750px;
      flex-direction: column;
    }

    @include media_mobile {
      height: 550px;
      max-height: 550px;
      flex-direction: column;
    }
    &__left {
      flex: 1 0 500px;
      text-align: left;
      margin-bottom: 0px;
      margin-right: 50px;

      @include media_tablet {
        max-width: 500px;
        margin-right: 0px;
        text-align: center;
        flex: auto;

        &__header {
          font-size: 2.4rem !important;
        }
      }

      @include media_mobile {
        max-width: 300px;
        margin-right: 0px;
        text-align: center;
        flex: auto;

        &__header {
          font-size: 3.4rem !important;
        }

        &__btn {
          margin: 0 !important;
        }
      }
      &__subheader {
        font-size: 1.6rem;
      }

      &__header {
        font-size: 3.2rem;
        line-height: 1.4;
      }

      &__text {
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.4;
        margin-top: 10px;
        color: #454554;
        margin-bottom: 30px;
      }

      &__btn {
        background-color: $txt-blue;
        color: $txt-white;
        border: none;
        text-align: center;
        border-radius: 3px;
        transition: all 0.15s ease-in-out 0s;
        cursor: pointer;
        padding: 16px 24px;
        font-weight: 600;
        font-size: 1.2rem;
        margin: 30px 0 30px;
      }
    }

    &__right {
      width: 100%;
      margin: 0px auto;
      max-width: 680px;

      @include media_tablet {
        max-width: 860px;
      }

      &__image {
        width: 100%;
        position: relative;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>

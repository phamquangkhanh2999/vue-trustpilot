<template>
  <div class="content">
    <div class="content__inner wrapper" v-if="data.isCheck">
      <div class="content__inner__left">
        <span>{{ data.subHeader }}</span>
        <h3>{{ data.title }}</h3>
        <div class="content__inner__left__text">
          <p>
            {{ data.desc1 }}
          </p>
          <p>
            {{ data.desc2 }} <strong> {{ data.strong }}</strong>
          </p>
        </div>
      </div>
      <div class="content__inner__right">
        <img :src="data.img" alt="" />
      </div>
    </div>

    <div class="content__inner wrapper" v-else>
      <div class="content__inner__img">
        <img :src="data.img" alt="" />
      </div>
      <div class="content__inner__left">
        <span>{{ data.subHeader }}</span>
        <h3>{{ data.title }}</h3>
        <div class="content__inner__left__text">
          <p>
            {{ data.desc1 }}
          </p>
          <p>
            {{ data.desc2 }} <strong> {{ data.strong }}</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContentWrapper",
  props: ["data"],
};
</script>
<style lang="scss" scoped>
.content {
  background: $main-white;

  &__inner {
    @include flex(center, space-between);
    padding-top: 100px !important;
    @include media_mobile {
      flex-direction: column;
    }

    &__left {
      span {
        font-size: 1.1rem;
        color: $txt-footer;
        font-weight: 400;
      }
      flex: 1 1 30%;
      padding-right: 30px;
      @include media_tablet {
        flex: 1 1 42%;
      }
      h3 {
        color: $main-color;
        font-size: 2.4rem;
        line-height: 1.2;
        margin-bottom: 36px;
      }

      &__text {
        margin-bottom: 36px;

        p {
          font-size: 1.1rem;
          line-height: 2;
          color: #454554;
        }
        p:nth-child(2) {
          margin-top: 10px;
        }
        strong {
          color: $txt-blue;
        }
      }
    }
    &__right,
    &__img {
      flex: 1 1 50%;
      @include media_tablet {
        flex: 1 1 58%;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }

    &__img {
      margin-right: 70px;
    }

    button {
      color: $main-color;
      border: 2px solid $main-color;
      margin: 5px 0 5px;
      padding: 16px 24px;
      font-weight: 600;
      background-color: white;
      border-radius: 3px;

      &:hover {
        background-color: $main-color;
        color: $txt-white;
      }
    }
  }
}
</style>

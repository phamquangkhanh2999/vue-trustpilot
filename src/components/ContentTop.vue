<template>
  <div class="content">
    <div class="content__inner wrapper" v-if="data.isCheck">
      <div class="content__inner__left">
        <span>{{ data.subHeader }}</span>
        <h3>{{ data.title }}</h3>
        <div class="content__inner__left__text">
          <p>
            {{ data.desc }}
          </p>
        </div>
        <button>{{ data.btn }}</button>
      </div>
      <div class="content__inner__right">
        <img :src="data.img" alt="" />
      </div>
    </div>

    <div class="content__inner content__test wrapper" v-else>
      <div class="content__inner__right">
        <img :src="data.img" alt="" />
      </div>
      <div class="content__inner__left">
        <h3>{{ data.title }}</h3>
        <div class="content__inner__left__text">
          <p>
            {{ data.desc }}
          </p>
        </div>
        <button>
          {{ data.btn }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Content",
  props: ["data"],
};
</script>
<style lang="scss" scoped>
.content {
  background: $main-white;

  &__test {
    grid-template-columns: 64.5% 35.5% !important;
    @include media_tablet {
      padding: 200px 30px !important;
      grid-template-columns: auto !important;
      grid-column-gap: 0 !important;
    }

    @include media_mobile {
      display: block !important;
    }
  }
  &__inner {
    display: grid;
    grid-column-gap: 80px;
    grid-template-columns: 35.5% 64.5%;
    padding: 100px 30px !important;
    align-items: center;

    @include media_tablet {
      padding: 200px 30px !important;
      grid-template-columns: auto;
      grid-column-gap: 0 !important;
    }

    &__left {
      @include media_tablet {
        margin-bottom: 100px;
        &__text {
          p {
            font-size: 1.5rem !important;
          }
        }
      }

      span {
        font-weight: 400;
        font-size: 1.3rem;
      }

      h3 {
        color: $main-color;
        font-size: 2.4rem;
        line-height: 1.5;
        margin-bottom: 36px;
      }

      &__text {
        margin-bottom: 36px;

        p {
          font-size: 1.1rem;
          line-height: 1.7;
          font-weight: 400;
          color: #454554;
        }
      }
    }
    &__right,
    &__img {
      @include media_tablet {
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

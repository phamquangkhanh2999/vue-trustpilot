<template>
  <div class="category">
    <div class="category__inner wrapper">
      <div class="category__inner__top">
        <h3>Explore categories</h3>
        <a href="#">View all</a>
      </div>
      <carousel
        class="story-carousel story-carousel--colors"
        :hideArrowsOnBound="true"
      >
        <slide class="story-carousel__slide">
          <div class="categoriesPage">
            <div class="categoriesPage__card">
              <router-link to="#">
                <span> <fa :icon="['fas', 'chevron-down']" /></span>
                Banks
              </router-link>
            </div>
            <div class="categoriesPage__card">
              <router-link to="#">
                <span> <fa :icon="['fas', 'chevron-down']" /></span>
                Banks
              </router-link>
            </div>
            <div class="categoriesPage__card">
              <router-link to="#">
                <span> <fa :icon="['fas', 'chevron-down']" /></span>
                Banks
              </router-link>
            </div>
            <div class="categoriesPage__card">
              <router-link to="#">
                <span> <fa :icon="['fas', 'chevron-down']" /></span>
                Banks
              </router-link>
            </div>
            <div class="categoriesPage__card">
              <router-link to="#">
                <span> <fa :icon="['fas', 'chevron-down']" /></span>
                Banks
              </router-link>
            </div>
            <div class="categoriesPage__card">
              <router-link to="#">
                <span> <fa :icon="['fas', 'chevron-down']" /></span>
                Banks
              </router-link>
            </div>
            <div class="categoriesPage__card">
              <router-link to="#">
                <span> <fa :icon="['fas', 'chevron-down']" /></span>
                Banks
              </router-link>
            </div>
            <div class="categoriesPage__card">
              <router-link to="#">
                <span> <fa :icon="['fas', 'chevron-down']" /></span>
                Banks
              </router-link>
            </div>
            <div class="categoriesPage__card">
              <router-link to="#">
                <span> <fa :icon="['fas', 'chevron-down']" /></span>
                Banks
              </router-link>
            </div>
            <div class="categoriesPage__card">
              <router-link to="#">
                <span> <fa :icon="['fas', 'chevron-down']" /></span>
                Banks
              </router-link>
            </div>
            <div class="categoriesPage__card">
              <router-link to="#">
                <span> <fa :icon="['fas', 'chevron-down']" /></span>
                Banks
              </router-link>
            </div>
            <div class="categoriesPage__card">
              <router-link to="#">
                <span> <fa :icon="['fas', 'chevron-down']" /></span>
                Banks
              </router-link>
            </div>
          </div>
        </slide>
        <slide class="story-carousel__slide"> Slide 2 </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoriesCarouse",
};
</script>
<style lang="scss" scoped>
.category {
  height: 100%;
  width: 100%;
  background-color: #dcdce6;
  margin-bottom: 50px;

  &__inner {
    position: relative;
    top: -90px;

    &__top {
      @include flex(center, space-between);
      margin-bottom: 20px;
      h3 {
        font-size: 1.6rem;
        font-weight: 500;
      }
      a {
        background-color: $main-white;
        color: $txt-blue;
        padding: 2px 16px;
        width: auto;
      }
    }
  }
}

.categoriesPage {
  display: grid;
  width: 100%;
  height: calc(100% - 16px);
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;

  @include media_tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  &__card {
    background-color: #fff;
    position: relative;
    bottom: 0;
    border-radius: 2px;
    transition: all 0.2s ease;

    &:hover {
      cursor: pointer;
      background: #fafafc;
      bottom: -2px;
      box-shadow: 0px 4px 8px;
    }

    a {
      display: flex;
      align-items: center;
      padding: 24px 32px 24px;
      color: $main-color;

      span {
        margin-right: 20px;
      }
    }
  }
  .vs-carousel__arrows--right {
    right: 0;
    background-color: $main-green !important;
  }
}
.vs-carousel__arrows--right {
  right: 0;
  background-color: $main-green !important;
}
</style>

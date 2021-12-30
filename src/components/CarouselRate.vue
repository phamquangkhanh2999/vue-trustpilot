<template>
  <cat-carousel
    :items="items"
    :item-per-page="5"
    :indicators-config="{ hideIndicators: true }"
  >
    <template slot="item" slot-scope="{ data }">
      <div class="carousel">
        <div class="carousel__stars">
          <div
            class="carousel__stars__icons"
            v-for="(item, index) in data.icon"
            :key="index"
          >
            <span class="carousel__stars__icons--item">
              <fa :icon="['fas', 'star']" />
            </span>
          </div>
          <div class="carousel__stars__hours">
            <span>{{ data.hours }}</span>
          </div>
        </div>
        <h4>{{ data.title }}</h4>
        <p class="carousel__desc">{{ data.desc }}</p>
        <p class="carousel__name">{{ data.name }}</p>
      </div>
    </template>
  </cat-carousel>
</template>
<script>
export default {
  name: "CarouselRate",
  data() {
    return {
      items: [
        {
          name: "Philip John",
          icon: 4,
          desc: "Trustpillot have been good and nice for business and advertising.",
          title: "Trustpillot have been g…",
          hours: "2 days ago",
        },
        {
          name: "Paul",
          icon: 3,
          desc: "I’ve run my business for Nearly ten years, only just started using Trust Pilot in",
          title: "I’ve run my business fo…",
          hours: "4 days ago",
        },
        {
          name: "MARK GRIFFITHS",
          icon: 4,
          desc: "So far it seems pretty good.",
          title: "So far it seems pretty g...",
          hours: "4 days ago",
        },
        {
          name: "Shanny",
          icon: 3,
          desc: "Great. Does it job as expected.",
          title: "Great",
          hours: "2 days ago",
        },
        {
          name: "Asif Mahmood",
          icon: 4,
          desc: "simply perfect",
          title: "simply perfect",
          hours: "2 days ago",
        },
        {
          name: "MARK GRIFFITHS",
          icon: 4,
          desc: "So far it seems pretty good.",
          title: "So far it seems pretty g...",
          hours: "4 days ago",
        },
        {
          name: "Shanny",
          icon: 2,
          desc: "Great. Does it job as expected.",
          title: "Trustpillot have been g…",
          hours: "2 days ago",
        },
        {
          name: "Asif Mahmood",
          icon: 4,
          desc: "simply perfect",
          title: "simply perfect",
          hours: "2 days ago",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.carousel {
  width: 200.8px;
  line-height: 16px;
  border-bottom: 1px solid $txt-footer;
  &__stars {
    @include flex(center, flex-start);
    margin-bottom: 10px;
    &__icons {
      background: $main-green;
      margin-right: 3px;
      padding: 1px;
      &--item {
        font-size: 0.9rem;
        color: white;
      }
    }

    &__hours {
      color: $txt-footer;
      font-size: 12px;
      line-height: 14px;
      margin-left: 7px;
    }
  }

  &__desc {
    color: #191919;
    font-size: 13px;
    line-height: 16px;
    max-height: 50px;
    overflow: hidden;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  &__name {
    color: $txt-footer;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 10px;
  }
}
</style>

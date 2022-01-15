<template>
  <div class="reviewCategory">
    <div class="reviewCategory__inner wrapper">
      <!-- header -->
      <div class="reviewCategory__inner__Evaluate">
        <div class="reviewCategory__inner__Evaluate__avatar">
          <img
            src="https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
            alt=""
          />
          <div class="reviewCategory__inner__Evaluate__avatar__name">
            <p>User Name</p>
            <a href="#"> Write a review</a>
          </div>
        </div>
        <div class="reviewCategory__inner__Evaluate__rating">
          <star-rating
            v-model="rating"
            :show-rating="false"
            active-color="#00b67a"
          ></star-rating>
        </div>
      </div>
      <!-- container -->
      <div class="reviewCategory__inner__reviewsOverview">
        <!-- header -->
        <div class="reviewCategory__inner__reviewsOverview__header">
          <h2>Reviews &nbsp;&nbsp; <span>9,151</span></h2>
          <div
            class="reviewCategory__inner__reviewsOverview__header__filterButtonsDesktop"
          >
            <span>Filter by:</span>
            <button>
              <span>Rating</span> <fa :icon="['fas', 'plus-circle']" />
            </button>
            <button>
              <span>English</span>
              <fa :icon="['fas', 'chevron-circle-right']" />
            </button>
          </div>
        </div>
        <hr style="margin-bottom: 20px" />
        <!-- end header -->
        <!-- container -->
        <ul class="reviewCategory__inner__reviewsOverview__container">
          <li v-for="skill in skills" :key="skill.lang">
            <label :for="skill.id">
              <div
                class="reviewCategory__inner__reviewsOverview__container__checkbox"
              >
                <input type="checkbox" :id="skill.id" />
                <p>{{ skill.lang }}</p>
              </div>
              <div
                class="reviewCategory__inner__reviewsOverview__container__barCell"
              >
                <span
                  class="reviewCategory__inner__reviewsOverview__container__barCell__barValue"
                  v-bind:style="{
                    background: skill.color,
                    width: skill.percent + '%',
                  }"
                ></span>
              </div>
              <p>{{ skill.percent }}%</p>
            </label>
          </li>
        </ul>

        <!-- search -->
        <div class="reviewCategory__inner__reviewsOverview__search">
          <span> <fa :icon="['fas', 'search']" /></span>
          <input type="text" placeholder="Search reviews" />
        </div>
      </div>

      <!-- comment -->
      <div class="reviewCategory__inner__comment">
        <article class="comment">
          <aside>
            <router-link to="/">
              <div class="comment__avatar">
                <div class="comment__avatar__img">
                  <img
                    src="https://static2.yan.vn/YanNews/2167221/202003/dan-mang-du-trend-thiet-ke-avatar-du-kieu-day-mau-sac-tu-anh-mac-dinh-f4781c7a.jpg"
                    alt=""
                  />
                </div>
                <div class="comment__avatar__details">
                  <h1>Demo</h1>
                </div>
              </div>
            </router-link>
          </aside>

          <hr style="margin: 20px 0 20px" />

          <section>
            <h2 class="comment__title">Cars that are brand new and at a…</h2>
            <p class="comment__content">
              Cars that are brand new and at a terrific price. This is a store
              with which I would gladly do business.
            </p>
          </section>

          <hr style="margin: 20px 0 20px" />
          <div class="comment__secondary">
            <button class="comment__secondary__useful">
              <fa :icon="['fas', 'thumbs-up']" />
              <span>Useful</span>
            </button>
            <button class="comment__secondary__useful">
              <fa :icon="['fas', 'share-alt']" />
              <span>Share</span>
            </button>
          </div>
        </article>
      </div>
      <div class="reviewCategory__inner__comment">
        <article class="comment">
          <aside>
            <router-link to="/">
              <div class="comment__avatar">
                <div class="comment__avatar__img">
                  <img
                    src="https://static2.yan.vn/YanNews/2167221/202003/dan-mang-du-trend-thiet-ke-avatar-du-kieu-day-mau-sac-tu-anh-mac-dinh-f4781c7a.jpg"
                    alt=""
                  />
                </div>
                <div class="comment__avatar__details">
                  <h1>Demo</h1>
                </div>
              </div>
            </router-link>
          </aside>

          <hr style="margin: 20px 0 20px" />

          <section>
            <h2 class="comment__title">Cars that are brand new and at a…</h2>
            <p class="comment__content">
              Cars that are brand new and at a terrific price. This is a store
              with which I would gladly do business.
            </p>
          </section>

          <hr style="margin: 20px 0 20px" />
          <div class="comment__secondary">
            <button class="comment__secondary__useful">
              <fa :icon="['fas', 'thumbs-up']" />
              <span>Useful</span>
            </button>
            <button class="comment__secondary__useful">
              <fa :icon="['fas', 'share-alt']" />
              <span>Share</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      skills: [
        {
          lang: "Excellent",
          percent: 95,
          color: "#00b67a",
          id: "star-filter-page-filter-five",
        },
        {
          lang: "Great",
          percent: 40,
          color: "#73cf11",
          id: "star-filter-page-filter-four",
        },
        {
          lang: "Average",
          percent: 30,
          color: "#ffce00",
          id: "star-filter-page-filter-three",
        },
        {
          lang: "Poor",
          percent: 24,
          color: "#ff8622",
          id: "star-filter-page-filter-two",
        },
        {
          lang: "Bad",
          percent: 13,
          color: "#ff3722",
          id: "star-filter-page-filter-one",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.reviewCategory {
  width: 100%;
  background-color: #f2f2f5;
  padding-top: 20px;

  &__inner {
    &__Evaluate {
      @include flex(center, space-between);
      padding: 20px 20px 20px;
      background-color: $txt-white;
      margin-bottom: 16px;
      &__avatar {
        @include flex(center, space-between);
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 30px;
        }
        &__name {
          line-height: 1.3;

          p {
            font-size: 2rem;
            font-weight: 600;
          }
          a {
            font-size: 1.2rem;
            color: $txt-blue;
          }
        }
      }
    }

    &__reviewsOverview {
      background-color: $main-white;
      background-color: $txt-white;
      padding: 20px 20px 20px;
      margin-bottom: 16px;
      &__header {
        @include flex(center, space-between);

        h2 {
          font-size: 2.2rem;
          font-weight: 600;
          span {
            color: #6f6f87;
          }
        }

        &__filterButtonsDesktop {
          span {
            color: #6f6f87;
            font-weight: 500;
            padding-right: 10px;
            font-size: 1.2rem;
          }

          button {
            height: 32px;
            padding: 0 12px;
            font-weight: 400;
            background-color: transparent;
            border: 1px solid $main-color;
            transition: border-color 0.2s linear, opacity 0.2s linear;
            margin-left: 10px;
            cursor: pointer;
            span {
              color: $main-color;
            }
          }
        }
      }

      &__container {
        width: 100%;

        label {
          @include flex(center, space-between);
        }
        &__checkbox {
          display: flex;
          align-items: center;

          width: 9%;

          input {
            height: 16px;
            width: 16px;
            border: 1px solid #c5c5d6;
            border-radius: 2px;
            padding-right: 16px;
            margin-right: 10px;
          }
        }

        &__barCell {
          height: 12px;
          width: 100%;
          display: flex;
          background-color: #f2f2f5;
          border-radius: 2px;
          position: relative;
          margin: 0 20px 0;

          &__barValue {
            background-color: #6f6f87;
            position: absolute;
            left: 0;
            top: 0;
            width: 50%;
            height: 12px;
            border-radius: 2px;
          }
        }
      }

      &__search {
        display: flex;
        border: 1px solid $main-color;
        margin-top: 50px;
        span {
          font-size: 1.2rem;
          margin: 0 10px 0;
        }
        input {
          border: none;
          outline: none;
        }
      }
    }

    &__comment {
      background-color: $main-white;
    }
  }
}

.comment {
  padding: 15px;
  margin-top: 20px;
  &__avatar {
    display: flex;

    &__img {
      width: 44px;
      min-width: 44px;
      height: 44px;
      min-height: 44px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    &__details {
      margin-left: 20px;
    }
  }
  &__title {
    font-size: 1.2rem;
  }
  &__content {
    font-size: 1.2rem;
  }

  &__secondary {
    &__useful {
      border: none;
      background-color: transparent;
      color: $main-icon;
      font-size: 1.2rem;
      span {
        margin-left: 10px;
      }

      &:hover {
        color: $main-color;
      }
    }
    &__useful:nth-child(1) {
      margin-right: 10px;
    }
  }
}
</style>

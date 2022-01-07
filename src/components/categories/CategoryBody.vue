<template>
  <div class="categoryBody">
    <div class="categoryBody__inner wrapper">
      <div class="categoryBody__inner__right">
        <div class="categoryBody__search">
          <div class="categoryBody__search__top">
            <h3>Categories</h3>
            <div class="categoryBody__search__top__wrapper">
              <a href="#">
                <span
                  style="
                    border: 1px solid black;
                    padding: 0 6px 0;
                    border-radius: 50%;
                  "
                >
                  &lt;</span
                >
                Money & Insurance
              </a>
              <ul>
                <li v-for="(item, index) in filteredItems" :key="index">
                  <p>{{ item }}</p>
                </li>
                <li
                  v-show="show"
                  v-for="(item, index) in filteredItems1"
                  :key="index"
                >
                  <p>{{ item }}</p>
                </li>
                <li>
                  <button @click="show = !show">Show more</button>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div class="categoryBody__search__bottom">
            <form>
              <div class="categoryBody__search__bottom__header">
                <h4>Filters</h4>
                <p>Reset filters</p>
              </div>
              <div class="categoryBody__search__bottom__group">
                <label>City or Zip code</label>
                <input type="text" />
                <button>Apply</button>
              </div>
              <div class="categoryBody__search__bottom__group">
                <p>No. of reviews</p>
                <div>
                  <div class="categoryBody__search__bottom__group__radio">
                    <input
                      type="radio"
                      value="all"
                      checked
                      name="minimumReviews"
                    />
                    <label>All</label>
                  </div>
                  <div class="categoryBody__search__bottom__group__radio">
                    <input type="radio" value="25" name="minimumReviews" />
                    <label>25+</label>
                  </div>
                  <div class="categoryBody__search__bottom__group__radio">
                    <input type="radio" value="50" name="minimumReviews" />
                    <label>50+</label>
                  </div>
                  <div class="categoryBody__search__bottom__group__radio">
                    <input type="radio" value="100" name="minimumReviews" />
                    <label>100+</label>
                  </div>
                  <div class="categoryBody__search__bottom__group__radio">
                    <input type="radio" value="150" name="minimumReviews" />
                    <label>250+</label>
                  </div>
                  <div class="categoryBody__search__bottom__group__radio">
                    <input type="radio" value="500" name="minimumReviews" />
                    <label>500+</label>
                  </div>
                </div>
              </div>
              <div class="categoryBody__search__bottom__group">
                <p>Time period</p>
                <div>
                  <div class="categoryBody__search__bottom__group__radio">
                    <input
                      type="radio"
                      value="0"
                      checked
                      name="timePeriodMonths"
                    />
                    <label>All time</label>
                  </div>
                  <div class="categoryBody__search__bottom__group__radio">
                    <input type="radio" value="6" name="timePeriodMonths" />
                    <label>6 months</label>
                  </div>
                  <div class="categoryBody__search__bottom__group__radio">
                    <input type="radio" value="12" name="timePeriodMonths" />
                    <label>12 months</label>
                  </div>
                  <div class="categoryBody__search__bottom__group__radio">
                    <input type="radio" value="18" name="timePeriodMonths" />
                    <label>18 months</label>
                  </div>
                </div>
              </div>
              <div class="categoryBody__search__bottom__group">
                <p>Company status</p>
                <div>
                  <div class="categoryBody__search__bottom__group__radio">
                    <input
                      type="radio"
                      value="collecting"
                      checked
                      name="status"
                    />
                    <label>Asking for reviews</label>
                    <p>
                      List companies that are regularly asking their customers
                      for reviews — whether positive or negative.
                    </p>
                  </div>
                  <div class="categoryBody__search__bottom__group__radio">
                    <input type="radio" value="claimed" name="status" />
                    <label>Claimed</label>
                    <p>
                      List companies that have a Trustpilot account but we have
                      no records of them asking their customers for reviews.
                    </p>
                  </div>
                  <div class="categoryBody__search__bottom__group__radio">
                    <input type="radio" value="unclaimed" name="status" />
                    <label>Unclaimed</label>
                    <p>
                      List companies that haven’t claimed their Trustpilot
                      account.
                    </p>
                  </div>
                  <div class="categoryBody__search__bottom__group__radio">
                    <input type="radio" value="all" name="status" />
                    <label>All</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="categoryBody__inner__left">
        <div class="categoryBody__card">
          <div class="categoryBody__card__title">
            <h2>Best companies in this category</h2>
            <p>
              1-20 of 22 results based on current filters. Ordered by TrustScore
              and number of reviews. Default filter settings show companies as
              best in this category if they’re actively asking for reviews and
              have received 25+ in the past 12 months. You can adjust these
              filters.
            </p>
          </div>
          <categories-rate />
          <categories-rate />
          <categories-rate />
          <categories-rate />
          <categories-rate />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import categoriesRate from "./categoriesRate.vue";
export default {
  components: { categoriesRate },
  data() {
    return {
      show: false,
      data: [
        " Accident Insurance Company (14)",
        " Auto Insurance Agency (92)",
        " Business Insurance Company (51)",
        " Caravan and Motorhome Insurance Company (3)",
        " Commercial Insurance Company (29)",
        " Cycle Insurance Company (4)",
        " Disability Insurance Company (12)",
        " Funeral Insurance Company (13)",
        " Gadget Insurance Company (6)",
        " Health Insurance Agency (107)",
        " Income Protection Insurance Company (11)",
        " Insurance Agency (325)",
        " Insurance Broker (118)",
        " Insurance Company (87)",
        " Jewelry and Watch Insurance Company (5)",
        " Key Man Insurance Company (4)",
        " Landlord Insurance Company (5)",
        " Liability Insurance Company (5)",
        " Life Insurance Agency (113)",
        "Mobility Insurance Company (3)",
        " Motorcycle Insurance Agency (13)",
        " Personal Insurance Company (12)",
        "Pet Insurance Company (23)",
        "Renter's Insurance Agency (18)",
        "Storage Insurance Company (1)",
        "Student Insurance Company (1)",
        "Tax Investigation Insurance Company (1)",
        "Taxi Insurance Company (1)",
        "Term Life Insurance Provider Company (22)",
      ],
    };
  },
  computed: {
    filteredItems() {
      return this.data.filter((item, index) => index < 11);
    },
    filteredItems1() {
      return this.data.filter((item, index) => index > 11);
    },
  },
};
</script>
<style lang="scss">
.categoryBody {
  background-color: #f2f2f5;

  &__inner {
    padding-top: 50px;
    display: grid;
    margin-left: auto;
    margin-right: auto;
    grid-template-rows: auto;
    grid-gap: 24px;
    max-width: 1056px;
    grid-template-columns: 296px 728px;
  }

  // category right
  &__search {
    padding: 24px;
    background-color: $main-white;
    &__top {
      margin-bottom: 30px;
      h3 {
      }
      &__wrapper {
        ul {
          margin-top: 0;
          padding-left: 25px;

          li {
            margin-top: 10px;
            font-size: 1.2rem;
            line-height: 1.3;
          }
        }
      }
    }

    &__bottom {
      margin-top: 30px;
      &__header {
        @include flex(center, space-between);

        h4 {
          font-size: 1.3rem;
        }
        p {
          cursor: pointer;
        }
      }

      &__group {
        width: 100%;
        margin-bottom: 24px;

        label {
          font-weight: bold;
        }

        input {
          padding: 16px 16px 16px;
          width: 100%;
        }

        button {
          margin-top: 10px;
          height: 32px;
          padding: 0 12px;
          font-weight: 600;
          font-size: 1.1rem;
          background-color: $main-white;
          color: $main-color;
          border: 1px solid $txt-footer;
        }

        &__radio {
          input {
            width: 16px;
            height: 16px;
          }

          label {
            font-weight: unset;
            margin-left: 10px;
          }

          p {
            color: $txt-footer;
            line-height: 1.5;
          }
        }
      }
    }
  }

  // category left

  &__card {
    &__title {
      margin-bottom: 30px;
      p {
        line-height: 1.5;
        color: #6f6f87;
        font-size: 1.1rem;
      }
    }

    &__businessUnitCard {
      display: flex;
      align-items: baseline;
      background-color: $main-white;
      margin: 10px 0 20px;

      &:hover {
        box-shadow: 0 12px 20px 0 #0000321f;
      }
      &__img {
        margin-left: 40px;
        margin-top: 0;
        width: 72px;

        img {
          width: 100%;
        }
      }

      &__content {
        padding: 0px 32px 0px;

        &__top {
          h3 {
            font-size: 1.4rem;
            font-weight: 500;
          }

          &__stars {
            display: flex;
            &__icon {
              padding-right: 20px;
            }
          }
        }
      }
    }

    &__body {
      &__categories {
        span {
          color: $main-color;
          padding-right: 10px;
        }
      }

      &__location {
        margin-bottom: 20px;
        span {
          color: #6f6f87;
          padding-right: 10px;
        }
      }
    }
  }
}
</style>

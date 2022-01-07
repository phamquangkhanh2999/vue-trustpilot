<template>
  <div class="header">
    <nav class="header--inner wrapper">
      <div class="header__logo">
        <router-link tag="a" to="/">
          <img
            src="https://cdn.trustpilot.net/brand-assets/1.6.0/logo-white.svg"
            alt="Trustpilot Logo"
          />
        </router-link>
        <div class="header__logo__menuToggle" @click="toggleMobileNav">
          {{ !mobile ? "Menu" : "Close" }}
          <div class="header__logo__menuToggle--icon">
            <span v-if="!mobile"> <fa :icon="['fas', 'bars']" /></span>
            <span v-else><fa :icon="['fas', 'times']" /></span>
          </div>
        </div>
      </div>

      <div class="header--links" :class="{ 'icon-active': mobile }">
        <div class="header__list">
          <router-link tag="a" class="header__list--item" to="/why-trustpilot"
            >Why Trustpilot
          </router-link>
          <!-- dropdown -->
          <div class="header__linksWrapper">
            <div class="header__linksWrapper--fakeLink">
              Features
              <fa :icon="['fas', 'chevron-down']" />
            </div>
            <div class="header__subLink">
              <div class="header__subLink__wrapper">
                <div class="header__subLink__wrapper__inner">
                  <div
                    class="header__subLink__wrapper__inner__section"
                    v-for="item in header"
                    :key="item.id"
                  >
                    <router-link
                      tag="a"
                      :to="item.path"
                      class="header__subLink__wrapper__inner__section--title"
                    >
                      {{ item.name }}
                    </router-link>
                    <ul class="header__subLink__wrapper__inner__section__list">
                      <li
                        v-for="(connect, index) in item.connects"
                        :key="index"
                      >
                        <router-link
                          tag="a"
                          :to="connect.to"
                          class="header__subLink__wrapper__inner__section__list--item"
                        >
                          {{ connect.title }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="header__subLink__wrapper__footer">
                  <router-link tag="a" to="/">Integrations</router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- end dropdown -->
          <router-link tag="a" class="header__list--item" to="/categories">
            Categories
          </router-link>
          <router-link tag="a" class="header__list--item" to="/">
            Customer Stories
          </router-link>
          <!-- dropdown -->
          <div class="header__linksWrapper">
            <div class="header__linksWrapper--fakeLink">
              Resources
              <fa :icon="['fas', 'chevron-down']" />
            </div>
            <div class="header--SubLink"></div>
          </div>
          <!-- end dropdown -->
          <router-link tag="a" class="header__list--login" to="/">
            Log in
          </router-link>
          <router-link tag="a" class="header__list--create" to="/">
            Create free account
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import header from "../assets/fakeApi/header";
export default {
  name: "Header",
  data() {
    return {
      mobile: false,
      header: [...header],
    };
  },
  methods: {
    toggleMobileNav() {
      this.mobile = !this.mobile;
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  background-color: $main-color;
  width: 100%;
  height: 72px;
  position: sticky;
  top: 0;
  z-index: 999;

  &--inner {
    @include flex(center, space-between);
    height: 72px;
    background-color: $main-color;

    @include media_tablet {
      flex-wrap: wrap;
    }
  }

  &__logo {
    width: 138px;
    height: 100%;
    display: flex;
    align-items: center;
    img {
      width: 100%;
    }
    @include media_tablet {
      width: 100%;
      @include flex(center, space-between);
      img {
        width: 138px;
        vertical-align: middle;
      }
    }
    &__menuToggle {
      display: none;

      @include media_tablet {
        color: $main-green;
        font-weight: 500;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-top: 7px;
        margin-left: auto;
        transition: all 0.2s ease-in-out 0s;
        &--icon {
          margin-left: 10px;
          color: $main-green;
          font-size: 1.3rem;
        }
      }

      @include media_mobile {
        font-size: 1.4rem;

        &--icon {
          font-size: 1.6rem;
        }
      }
    }
  }

  &--links {
    height: 95%;
    z-index: 999;
    background-color: $main-color;

    @include media_tablet {
      left: 0px;
      right: 0px;
      z-index: 2;
      overflow: auto;
      display: block;
      position: absolute;
      top: 72px;
      background: rgb(0, 0, 50);
      height: calc(100vh - 72px);

      /* opacity: 0; */
      display: none;
    }
  }

  &__list {
    /* height: 72px;
    display: inline-flex; */
    text-align: center;
    display: inline;

    @include media_tablet {
      display: flex;
      flex-direction: column;
      max-width: 400px;
      padding: 0px 20px;
      margin: 40px auto 0px;
      transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
      transform: translateY(0px);
      text-align: left;

      &--item {
        font-size: 1.2rem !important;

        padding: 0 !important;
      }
    }

    &--item {
      height: 100%;
      display: inline-flex;
      align-items: center;
      color: $txt-white;
      font-size: 1rem;
      font-weight: 500 !important;
      padding: 0 15px;
      font-weight: 500;
      transition: all 0.1s linear 0s;
      &:hover {
        text-decoration: none;
        border-bottom: 3px solid rgb(26, 102, 255);
        transform: translateY(1px);
      }
    }

    &--login,
    &--create {
      display: inline-block;
      text-align: center;
      color: white;
      border: 2px solid $main-border;
      border-radius: 3px;
      transition: all 0.15s ease-in-out 0s;
      font-weight: 500;
      padding: 5px 18px;
      transition: all 0.15s ease-in-out 0s;

      @include media_tablet {
        margin-top: 60px;
      }
    }

    &--login:hover {
      background-color: $main-white;
      border-color: $main-white;
      color: $main-color;
    }
    &--create {
      background-color: $main-border;
      margin-left: 15px;

      @include media_tablet {
        margin-left: 0;
      }
    }
  }

  &__linksWrapper {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    @include media_tablet {
      display: block !important;
    }

    &--fakeLink {
      color: $txt-white;
      font-weight: 500;
      padding: 0 15px;

      @include media_tablet {
        @include flex(center, space-between);
        font-size: 1.2rem;
        width: 100%;
        padding: 0;
      }
    }
  }

  // drop menu
  &__subLink {
    @include flex(center, center);
    width: 600px;
    opacity: 0;
    visibility: hidden;
    /* visibility: visible; */
    position: absolute;
    left: 50%;
    top: 43px;
    /* pointer-events: none; */
    z-index: 400;
    transform: translate(-50%, 10px);
    transition: visibility 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s,
      opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s,
      transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;

    // media tablet
    @include media_tablet {
      display: inline;
      opacity: 0;
      visibility: hidden;
      /* visibility: visible;
      position: static; */
      max-height: 1200px;
      box-shadow: none;

      &__wrapper {
        max-height: 100%;
        display: block !important;
        text-align: left !important;
        box-shadow: none !important;

        &:before {
          content: none !important;
        }
        &__inner {
          display: inline-block !important;
          width: 100%;
          padding: 10px 0 0 !important;
          background: none !important;
          &__section {
            width: 100% !important;

            &__list {
              padding-left: 20px;

              &--item {
                font-size: 1.1rem;
                line-height: 1;
                font-weight: 500;
                color: $main-white;
              }
            }

            &--title {
              font-size: 0.9rem !important;
              color: $txt-footer !important;
              margin-bottom: 0 !important;
              border: none !important;
            }
          }
        }
      }
    }

    // end media tablet

    &__wrapper {
      max-width: 600px;
      overflow: hidden auto;
      max-height: calc(100vh - 72px);
      text-align: center;
      display: inline-flex;
      flex-direction: column;
      border-radius: 0px 0px 3px 3px;
      box-shadow: rgb(0, 0, 0 / 20%) 1px 1px 40px;

      &:before {
        content: "";
        position: absolute;
        left: 50%;
        top: -7px;
        z-index: 500px;
        border-style: solid;
        transform: translateX(-50%);
        z-index: 500;
        border-width: 0px 5px 7px;
        border-color: transparent transparent white;
      }

      &__inner {
        flex-wrap: wrap;
        text-align: left;
        display: inline-flex;
        padding: 30px 30px 15px;
        background-color: $main-white;

        &__section {
          width: 50%;
          padding: 0px 25px;
          margin: 0px 0px 20px;

          &--title {
            cursor: pointer;
            display: block;
            font-weight: 500;
            white-space: nowrap;
            color: $txt-main-color;
            margin-bottom: 15px;
            font-size: 1.2rem;
            border-bottom: 1px solid rgb(220, 220, 230);
          }
        }

        &__list {
          &--item {
            padding: 0px;
            color: $txt-main-color;
            font-weight: 400;
            font-size: 1.4rem;
          }
        }
      }

      &__footer {
        padding: 20px 0px;
        text-align: center;
        background: rgb(242, 242, 245);
        border-top: 1px solid rgb(220, 220, 230);
        color: $txt-blue;

        @include media_tablet {
          display: none;
        }
      }
    }
  }

  &__linksWrapper:hover &__subLink {
    transition: all 0.5s ease;
    opacity: 1;
    visibility: visible;

    @include media_tablet {
      position: static;
    }
  }

  .icon-active {
    transition: visibility 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0s,
      opacity 0.4s cubic-bezier(0, 0, 0.91, 0.38) 0s;
    visibility: visible;
    display: block;
  }
}
</style>
